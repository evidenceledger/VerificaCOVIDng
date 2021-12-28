import { log } from '../log'
import { AbstractPage, register } from './AbstractPage'
import { getPreferredVideoDevice, getPlatformOS } from '../components/camerainfo'

// This is to facilitate debugging of certificates
var testQRdata = "HC1:NC"

var testQR = {
    text: testQRdata
}

// Set the QR raw data above and enable debugging setting this flag to true
var debugging = false

const QR_UNKNOWN = 0
const QR_URL = 1
const QR_MULTI = 2
const QR_HC1 = 3

register("ScanQrNativePage", class ScanQrNativePage extends AbstractPage {
    nativeBarcodeDetector;
    codeReader;     // Instance of QR Code Reader reused across invocations
    controls;
    videoElem;      // DOMElement where the video is displayed, reused across invocations
    selectedCameraId;   // The last used camera ID

    constructor(id) {
        super(id);

        // Check if supported
        if (!('BarcodeDetector' in window)) {
            log.error('Barcode Detector is not supported by this browser.')
        } else {
            console.log('Barcode Detector supported!');

            // create new detector
            this.nativeBarcodeDetector = new BarcodeDetector({ formats: ['qr_code'] });
        }

        // Create the 'video' element and attach the event handler
        this.videoElem = document.createElement("video")
        this.videoElem.style.display = "none"
        this.videoElem.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
        this.videoElem.oncanplay = this.canPlay

    }

    async enter(displayPage) {
        let html = this.html

        if (!this.nativeBarcodeDetector) {
            this.render(this.messageNoCameraPermissions())
            return;
        }

        // displayPage is the page that should display the scanned QR
        // If not specified, we default to the DisplayHcert page
        if (!displayPage) {
            displayPage = "DisplayHcert"
        }

        // If debugging, just try to decode the test QR
        if (debugging) {
            await this.processQRpiece(testQR, displayPage)
            return
        }

        // Try to use the camera explicitly configured by the user
        var selectedCameraId = localStorage.getItem("selectedCamera")
        console.log("User selected camera:", selectedCameraId)

        // If nothing configured, try to use last one used, if any
        if (!selectedCameraId) {
            selectedCameraId = this.selectedCameraId
            console.log("Last used camera:", selectedCameraId)
        }

        // Some Android phones have a problem selecting automatically the best camera for scanning (eg. some Samsung)
        // If we are in Android and this is the first time, try to select the most appropriate camera
        // This will request permission from the user
        if (!selectedCameraId && ("Android" == getPlatformOS())) {
            console.log("We are in Andoid and this is the first time")
            let allVideoDevices;
            try {
                allVideoDevices = await getPreferredVideoDevice()
                console.log("Video devices in Android:", allVideoDevices)
            } catch (error) {
                log.error("Error requesting camera access", error)
            }
            if (allVideoDevices && allVideoDevices.defaultPreferredCamera) {
                selectedCameraId = allVideoDevices.defaultPreferredCamera.deviceId
                console.log("Selected camera in Android:", selectedCameraId)
            }

            if (!selectedCameraId) {
                console.log("In Android and no selected camera")
                this.render(this.messageNoCameraPermissions())
                return;
            }

        }

        // Record the currently selected camera
        this.selectedCameraId = selectedCameraId
        console.log("Remembering camera used:", selectedCameraId)

        // Display the screen with the video element
        let theHtml = html`${this.videoElem}`;

        // Prepare the screen, waiting for the video
        this.render(theHtml)

        let constraints;
        if (!selectedCameraId) {
            console.log("Constraints without camera")
            constraints = {
                audio: false,
                video: {
                    width: { ideal: 1080, max: 1920 },
                    facingMode: "environment"
                }
            }
        } else {
            console.log("Constraints with deviceID:", selectedCameraId)
            constraints = {
                audio: false,
                video: {
                    width: { ideal: 1080, max: 1920 },
                    deviceId: selectedCameraId
                }
            }
        }

        let stream;
        try {
            // Request a stream to force the system to ask the user
            stream = await navigator.mediaDevices.getUserMedia(constraints);
        } catch (error) {
            log.error("Error getting stream", e)
            this.render(this.messageErrorGettingStream())
            return;
        }

        this.videoElem.srcObject = mediaStream;
        this.videoElem.onloadedmetadata = function (e) {
            this.videoElem.play();
        };

        this.detectCode()

    }

    canPlay(e) {
        // The video stream is ready, show the 'video' element
        e.target.style.display = "block"
    }

    // Detect code function 
    detectCode() {
        // Start detecting codes on to the video element
        this.nativeBarcodeDetector.detect(this.videoElem).then(codes => {
            // If no codes exit function
            if (codes.length === 0) {
                console.log("No QR code detected")
                return;
            }

            for (const barcode of codes) {
                // Log the barcode to the console
                console.log(barcode)
            }
        }).catch(err => {
            // Log an error if one happens
            console.error(err);
        })
    }

    async exit() {
        // Reset the decoder just in case the camera was still working
        if (this.controls) {
            this.controls.stop()
        }
        this.videoElem.style.display = "none"
    }

    async processQRpiece(readerResult, displayPage) {
        let qrData = readerResult.text

        let qrType = this.detectQRtype(readerResult)
        console.log("QRTYPE", qrType)
        if (qrType !== QR_HC1) {
            return false;
        }

        // Display data of a normal QR
        if (qrType === QR_UNKNOWN || qrType === QR_URL) {
            this.gotoPage("DisplayNormalQR", qrData)
            return true;
        }

        // Handle HCERT data
        if (qrType === QR_HC1) {
            console.log("Going to ", displayPage)
            this.gotoPage(displayPage, qrData)
            return true;
        }

    }

    detectQRtype(readerResult) {
        // Try to detect the type of data received
        let qrData = readerResult.text

        console.log("detectQRtype:", qrData);
        if (!qrData.startsWith) {
            log.myerror("detectQRtype: data is not string")
        }

        if (qrData.startsWith("https")) {
            // We require secure connections
            // Normal QR: we receive a URL where the real data is located
            return QR_URL;
        } else if (qrData.startsWith("multi|w3cvc|")) {
            // A multi-piece JWT
            return QR_MULTI;
        } else if (qrData.startsWith("HC1:")) {
            return QR_HC1;
        } else {
            return QR_UNKNOWN
        }
    }

    messageErrorGettingStream() {
        let html = this.html

        let theHtml = html`
        <div class="container">
            <div class="w3-card-4 center" style="margin-top:100px;">
        
                <header class="container color-primary" style="padding:10px">
                    <h1>${T("Error getting video stream")}</h1>
                </header>
        
                <div class="container pd-16">
                    <p>${T("There was an error trying to start the camera.")}</p>
                    <p>${T("Please click Accept to refresh the page.")}</p>
                </div>
        
                <div class="pd-16">
        
                    <button @click=${()=> window.location.reload()} class="btn color-secondary hover-color-secondary w3-xlarge
                        w3-round-xlarge">${T("Accept")}</button>
        
                </div>
        
            </div>
        </div>
        `
        return theHtml

    }


    messageNoCameraPermissions() {
        let html = this.html

        let theHtml = html`
        <div class="container">
            <div class="w3-card-4 center" style="margin-top:100px;">
        
                <header class="container color-primary" style="padding:10px">
                    <h1>${T("No camera access")}</h1>
                </header>
        
                <div class="container pd-16">
                    <p>${T("You need to allow camera access to be able to scan a QR.")}</p>
                    <p>${T("Please click Accept to refresh the page.")}</p>
                </div>
        
                <div class="pd-16">
        
                    <button @click=${()=> window.location.reload()} class="btn color-secondary hover-color-secondary w3-xlarge
                        w3-round-xlarge">${T("Accept")}</button>
        
                </div>
        
            </div>
        </div>
        `
        return theHtml

    }

})



// This is the state object used by the background animation routine.
// Its values are set by the QR scanning initialization routine
var qrScan = {
    // The page that has invoked the scan
    callerPage: "",

    // The HTML element where the video frames will be placed for analysis
    canvasElement: "",

    // The canvas context with image data
    canvas: "",

    // The element in the page to display messages about status of scanning
    progressMessages: "",

    // The page where thee coded QR will be displayed
    displayQRPage: "",

    // Page that initiated the scanning
    callerType: "",

    // To build the whole JWT from the received pieces
    receivedQRPieces: [],
    receivedPieces: "",

    // The HTML element where the video stream is going to be placed
    video: "",

    // The video stream object
    myStream: "",
};

// Start the camera to scan the QR
// The scan can be used either by the Passenger or the Verifier
export async function initiateReceiveQRScanning(
    _canvasElement,
    _qrMessageElement,
    _displayQRPage,
    _callerType
) {
    // _canvasElement: DOM element where the images will be displayed
    // _qrMessageElement: DOM element to display info messages
    // _displayQRPage: page to switch to display contents of the QR
    // _callerType: who is calling, to customise the display of the QR


    // Get the current page where scanning is started
    var currentPage = "";
    if (window.history.state != null) {
        currentPage = window.history.state.pageName;
    }
    qrScan["callerPage"] = currentPage;

    // The HTML element where the video frames will be placed for analysis
    qrScan["canvasElement"] = _canvasElement;

    // Save in global variable the element to display messages about progress of scanning
    qrScan["progressMessages"] = _qrMessageElement;

    // Save the input parameters in global variables to keep state across timer ticks
    qrScan["displayQRPage"] = _displayQRPage;

    // Save the input parameters in global variables to keep state across timer ticks
    qrScan["callerType"] = _callerType;

    // Reset the variables holding the received pieces
    qrScan["receivedQRPieces"] = [];
    qrScan["receivedPieces"] = new Set();

    // Get the canvas context with image data and store in global variable
    qrScan["canvas"] = qrScan["canvasElement"].getContext("2d");

    // Create the HTML element to place the video stream and save in global variable
    qrScan["video"] = document.createElement("video");
    //  let elwidth = Math.min(screen.availWidth - 50, 450);
    //  qrScan["video"].style.width = document.querySelector("#passengerQRScanPage .container").clientWidth + "px"

    // Make sure that the canvas element is hidden for the moment
    qrScan["canvasElement"].hidden = true;

    // Display a message while we have not detected anything
    qrScan["progressMessages"].innerText = "Waiting for QR .........";

    // Request permission from user to get the video stream
    // Use "facingMode: environment" to attempt to get the main camera on phones
    navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "environment" } })
        .then(function (stream) {
            // Store the stream in global variable for later
            qrScan["myStream"] = stream;

            // Connect the video stream to the "video" element in the page
            qrScan["video"].srcObject = stream;
            qrScan["video"].setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
            qrScan["video"].play();

            // Call the "tick" function on the next animation interval
            //      setTimeout(ReceiveQRtick, scanRefreshInterval);
            requestAnimationFrame(ReceiveQRtick);
        });
}

// This function is called periodically until we get a result from the scan
// We use global variables to know the context on which it was called
async function ReceiveQRtick() {
    try {
        // Load variables for easier referencing
        var video = qrScan["video"];
        var canvas = qrScan["canvas"];
        var canvasElement = qrScan["canvasElement"];
        var receivedPieces = qrScan["receivedPieces"];
        var receivedQRPieces = qrScan["receivedQRPieces"];
        var progressMessages = qrScan["progressMessages"];
        var myStream = qrScan["myStream"];
        var callerType = qrScan["callerType"];
        var callerPage = qrScan["callerPage"];
        var displayQRPage = qrScan["displayQRPage"];

        var currentPage = "";
        if (window.history.state != null) {
            currentPage = window.history.state.pageName;
        }
        // Ckeck if we are running in the context of the page that initiated scanning
        if (currentPage != callerPage) {
            // The user navigated out of the scan page, should stop using the camera
            stopMediaTracks(myStream);

            // Return without activating the callback again, so it will stop completely
            return;
        }

        // We have to wait until the video stream is ready
        if (video.readyState !== video.HAVE_ENOUGH_DATA) {
            // We are not yet ready

            // Request to be called again in next frame
            //      setTimeout(ReceiveQRtick, scanRefreshInterval);
            requestAnimationFrame(ReceiveQRtick);


            // Exit from the function until it will be called again
            return;
        }

        // Video is ready, display canvas
        canvasElement.hidden = false;

        // Set the canvas size to match the video stream
        canvasElement.height = video.videoHeight;
        canvasElement.width = video.videoWidth;
        //let elwidth = Math.min(screen.availWidth - 60, 350);
        let displayWidth = video.videoWidth
        let displayHeight = video.videoHeight

        // Get a video frame and decode an image data using the canvas element
        canvas.drawImage(video, 0, 0, displayWidth, displayHeight);
        var imageData = canvas.getImageData(
            0,
            0,
            displayWidth,
            displayHeight
        );

        try {
            // Try to decode the image as a QR code
            var code = jsQR(imageData.data, imageData.width, imageData.height, {
                inversionAttempts: "dontInvert",
            });
        } catch (error) {
            console.error("jsQR:", error)
        }

        // If unsuccessful, exit requesting to be called again at next animation frame
        if (!code) {
            // Request to be called again in next frame
            //      setTimeout(ReceiveQRtick, scanRefreshInterval);
            requestAnimationFrame(ReceiveQRtick);

            // Exit from the function
            return;
        }

        // If we reached up to here, we have a valid QR

        // Try to detect the type of data received
        var qrType = detectQRtype(code.data);
        if (qrType == "unknown") {
            // We do not know what type it is. Continue scanning

            // Request to be called again in next frame
            //      setTimeout(ReceiveQRtick, scanRefreshInterval);
            requestAnimationFrame(ReceiveQRtick);

            // Exit from the function
            return;
        }

        if (qrType == "MultiJWT") {
            mylog("Scanned MultiJWT QR");
            // We are going to receive a series of QRs and then join the pieces together
            // Each piece has the format: "xx|yy|data" where
            //   xx is the total number of pieces to receive, expressed as two decimal digits
            //   yy is the index of this piece in the whole data, expressed as two decimal digits
            //   data is the actual data of the piece

            // Split the data in the QR in the components
            var components = code.data.split("|");

            // The first and second components are "multi" and "w3cvc" and we do not need them

            // The third component is the total number of pieces to receive
            var total = components[2];

            // The fourth is the index of the received component
            var index = components[3];

            // And the fifth is the actual piece of data
            var piece = components[4];

            // Check if we received two integers each with two digits, from "00" to "99"
            // ASCII code for "0" is 48 and for "9" is 57
            var total1 = total.charCodeAt(0);
            var total2 = total.charCodeAt(1);
            var index1 = index.charCodeAt(0);
            var index2 = index.charCodeAt(1);
            if (
                total1 < 48 ||
                total1 > 57 ||
                total2 < 48 ||
                total2 > 57 ||
                index1 < 48 ||
                index1 > 57 ||
                index2 < 48 ||
                index2 > 57
            ) {
                // Invalid data received, keep trying
                // Request to be called again in next frame
                //        setTimeout(ReceiveQRtick, scanRefreshInterval);
                requestAnimationFrame(ReceiveQRtick);

                // Exit from the function
                return;
            }

            // Check if we already received this piece
            if (receivedPieces.has(index)) {
                // Already received, continue scanning

                // Request to be called again in next frame
                //        setTimeout(ReceiveQRtick, scanRefreshInterval);
                requestAnimationFrame(ReceiveQRtick);

                // Exit from the function
                return;
            }

            // This is a new piece. Add it to the set
            receivedPieces.add(index);
            receivedQRPieces[+index] = piece; // Make sure that index is considered an integer and not a string

            // Display in the page the number of the object received.
            progressMessages.innerText = "Received piece: " + index;

            // Check if we need more pieces
            if (receivedPieces.size < total) {
                // Continue scanning

                // Request to be called again in next frame
                //        setTimeout(ReceiveQRtick, scanRefreshInterval);
                requestAnimationFrame(ReceiveQRtick);

                // Exit from the function
                return;
            }

            // We have received all pieces

            // Stop the media stream
            stopMediaTracks(myStream);

            // Hide the picture
            canvasElement.hidden = true;

            mylog("Received all pieces", receivedQRPieces);

            // Assemble all pieces together
            var jwt = receivedQRPieces.join("");
            mylog("Received jwt", jwt);

            // Extract the credential and save in the temporary storage
            try {
                var cred = decodeJWT(jwt);

                // Store in temporal storage so the page will retrieve it
                let currentCredential = {
                    type: "w3cvc",
                    encoded: jwt,
                    decoded: cred,
                };
                mylog("Writing current cred: ", currentCredential);
                await settingsPut("currentCredential", currentCredential);
            } catch (error) {
                myerror(error);
                progressMessages.innerText = error;
                return;
            }

            // Switch to the presentation of results
            gotoPage(displayQRPage, { screenType: callerType });

            return;
        }

        if (qrType == "URL") {
            // We received a URL in the QR. Perform a GET to obtain the JWT from a server
            mylog("Scanned normal URL QR");

            // Stop the media stream
            stopMediaTracks(myStream);

            // Build the URL to call
            let targetURLRead = code.data.trim();

            // Check if the URL points to a JWT or to the wallet
            if (targetURLRead.startsWith(MYSELF)) {
                // The URL points to the wallet. There is a param with the credential id
                const url = new URL(targetURLRead);

                // First we check for a normal credential
                let credId = url.searchParams.get("id");
                if (credId) {
                    targetURLRead = ISSUER_GET_CREDENTIAL + credId;
                } else {
                    // Now check for a Public Credential
                    credId = url.searchParams.get("pubid");
                    if (credId) {
                        targetURLRead = ISSUER_GET_PUBLIC_CREDENTIAL + credId;
                    }
                }
            }

            // Retrieve the credential from the server and display it
            await requestQRAndDisplay(targetURLRead, displayQRPage, callerType);

            return;
        }

        const HC_ISS = 1;
        const HC_IAT = 6;
        const HC_EXP = 4;
        const HC_CTI = 7;
        const HC_HCERT = -260;

        if (qrType == "HC1") {
            // We received a Health Certificate (HC) version 1 encoded QR.
            mylog("Scanned HC1 QR");

            let plain = await CWT.decodeHC1QR(code.data);
            console.log("CWT.decodeHC1QR", plain)

            // Store in temporal storage so the page will retrieve it
            let currentCredential = {
                type: "hcert",
                encoded: code.data,
                decoded: plain,
            };
            await settingsPut("currentCredential", currentCredential);

            // Stop the media stream
            stopMediaTracks(myStream);

            // Switch to the presentation of results
            gotoPage(displayQRPage, { screenType: callerType });

            return;
        }

        if (qrType == "Base64") {
            // We received a Base64 encoded QR. May be it is the UK Immigration document
            mylog("Scanned Base64 simple QR");

            let decodedQR = JSON.parse(atobUrl(code.data));

            // Store in temporal storage so the page will retrieve it
            let currentCredential = {
                type: "ukimmigration",
                encoded: code.data,
                decoded: decodedQR,
            };
            await settingsPut.setItem("currentCredential", currentCredential);

            // Stop the media stream
            stopMediaTracks(myStream);

            // Switch to the presentation of results
            gotoPage(displayQRPage, { screenType: callerType });

            return;
        }
    } catch (error) {

        // Stop the media stream
        stopMediaTracks(myStream);

        console.error(error)
        alert(`Error: ${error}`)

        // Go to the home page to start again
        gotoPage(homePage);

        // Exit from the function
        return;
    }
}
