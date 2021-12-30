var D=Object.defineProperty;var x=(o,e,t)=>e in o?D(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var d=(o,e,t)=>(x(o,typeof e!="symbol"?e+"":e,t),t);import{g as y,_ as N,l as R}from"./w3full.ca34ba64.js";import{r as B,A as L,h as E}from"./AbstractPage.7cdc723e.js";import{g as O,a as V}from"./camerainfo.4311a7fd.js";const w=0,F=1,G=2,W=3;B("ScanQrNativePage",class extends L{constructor(e){super(e);d(this,"displayPage");d(this,"detectionInterval",200);d(this,"videoElement");d(this,"nativeBarcodeDetector");d(this,"jsQR");d(this,"lastUsedCameraId");d(this,"canvasElement");d(this,"canvasSpace");"BarcodeDetector"in window?(console.log("Barcode Detector supported!"),this.nativeBarcodeDetector=new BarcodeDetector({formats:["qr_code"]})):(console.log("Barcode Detector is not supported by this browser."),this.jsQRPromise=N(()=>import("./jsQR.3d2f64bb.js").then(function(t){return t.j}),["assets/jsQR.3d2f64bb.js","assets/_commonjsHelpers.b8add541.js"])),this.videoElement={},this.canvasElement=document.createElement("canvas"),this.canvasSpace=this.canvasElement.getContext("2d")}async enter(e){if(e||(e="DisplayHcert"),this.displayPage=e,!this.nativeBarcodeDetector){let a=await this.jsQRPromise;this.jsQR=a.default}this.lastUsedCameraId=await this.selectCamera();let t=E`
        <video ref=${this.videoElement} oncanPlay=${()=>this.canPlay()}></video>
        `;this.render(t);let n;this.lastUsedCameraId?(console.log("Constraints with deviceID:",this.lastUsedCameraId),n={audio:!1,video:{deviceId:this.lastUsedCameraId}}):(console.log("Constraints without camera"),n={audio:!1,video:{facingMode:"environment"}});let c;try{c=await navigator.mediaDevices.getUserMedia(n);let a=c.getVideoTracks();for(let s=0;s<a.length;s++){let l=a[s].getCapabilities();console.log(l)}this.videoElement.current.srcObject=c,console.log(c)}catch(a){R.error("Error getting stream",a),this.render(this.messageErrorGettingStream());return}}async selectCamera(){var e=localStorage.getItem("selectedCamera");if(console.log("User selected camera:",e),e||(e=this.lastUsedCameraId,console.log("Last used camera:",e)),!e&&O()=="Android"){console.log("We are in Andoid and this is the first time");let t;try{t=await V(),console.log("Video devices in Android:",t)}catch(n){R.error("Error requesting camera access",n)}t&&t.defaultPreferredCamera&&(e=t.defaultPreferredCamera.deviceId,console.log("Selected camera in Android:",e)),e||console.log("In Android and no selected camera")}return e}async canPlay(){console.log("Video can play, try to detect QR"),this.videoElement.current.style.display="block",this.videoElement.current.play(),this.detectCode()}async detectCode(){let e=w,t;if(this.nativeBarcodeDetector){let a;try{a=await this.nativeBarcodeDetector.detect(this.videoElement.current)}catch{R.error(err);return}if(a.length===0){setTimeout(()=>this.detectCode(),this.detectionInterval);return}for(const s of a)if(console.log(s),t=s.rawValue,e=this.detectQRtype(t),e!=w)break}else{let a=this.videoElement.current.videoWidth,s=this.videoElement.current.videoHeight;this.canvasSpace.drawImage(this.videoElement.current,0,0,a,s);var n=this.canvasSpace.getImageData(0,0,a,s);try{var c=this.jsQR(n.data,n.width,n.height,{inversionAttempts:"dontInvert"})}catch(l){console.error("jsQR:",l)}if(!c){setTimeout(()=>this.detectCode(),this.detectionInterval);return}t=c.data,e=this.detectQRtype(t)}if(e===w){setTimeout(()=>this.detectCode(),this.detectionInterval);return}if(e===W)return console.log("Going to ",this.displayPage),y(this.displayPage,t),!0}async exit(){this.videoElement.current.style.display="none",this.videoElement.current.srcObject!==void 0&&this.videoElement.current.srcObject.getVideoTracks().forEach(e=>{e.stop()})}detectQRtype(e){return!e||!e.startsWith?(R.error("detectQRtype: data is not string"),w):e.startsWith("HC1:")?W:e.startsWith("multi|w3cvc|")?G:e.startsWith("https")?F:w}errorMessage(e,t){return E`
        <div class="container">
            <div class="w3-card-4 center" style="margin-top:100px;">
        
                <header class="container color-primary" style="padding:10px">
                    <h1>${e}</h1>
                </header>
        
                <div class="container pd-16">
                    <p>${t}</p>
                    <p>${T("Please click Accept to refresh the page.")}</p>
                </div>
        
                <div class="pd-16">
        
                    <button @click=${()=>window.location.reload()} class="btn color-secondary hover-color-secondary w3-xlarge
                        w3-round-xlarge">${T("Accept")}</button>
        
                </div>
        
            </div>
        </div>
        `}messageErrorGettingStream(){return E`
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
        
                    <button @click=${()=>window.location.reload()} class="btn color-secondary hover-color-secondary w3-xlarge
                        w3-round-xlarge">${T("Accept")}</button>
        
                </div>
        
            </div>
        </div>
        `}messageNoCameraPermissions(){return E`
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
        
                    <button @click=${()=>window.location.reload()} class="btn color-secondary hover-color-secondary w3-xlarge
                        w3-round-xlarge">${T("Accept")}</button>
        
                </div>
        
            </div>
        </div>
        `}});var r={callerPage:"",canvasElement:"",canvas:"",progressMessages:"",displayQRPage:"",callerType:"",receivedQRPieces:[],receivedPieces:"",video:"",myStream:""};async function ae(o,e,t,n){var c="";window.history.state!=null&&(c=window.history.state.pageName),r.callerPage=c,r.canvasElement=o,r.progressMessages=e,r.displayQRPage=t,r.callerType=n,r.receivedQRPieces=[],r.receivedPieces=new Set,r.canvas=r.canvasElement.getContext("2d"),r.video=document.createElement("video"),r.canvasElement.hidden=!0,r.progressMessages.innerText="Waiting for QR .........",navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then(function(a){r.myStream=a,r.video.srcObject=a,r.video.setAttribute("playsinline",!0),r.video.play(),requestAnimationFrame(v)})}async function v(){try{var o=r.video,e=r.canvas,t=r.canvasElement,n=r.receivedPieces,c=r.receivedQRPieces,a=r.progressMessages,s=r.myStream,l=r.callerType,j=r.callerPage,C=r.displayQRPage,b="";if(window.history.state!=null&&(b=window.history.state.pageName),b!=j){stopMediaTracks(s);return}if(o.readyState!==o.HAVE_ENOUGH_DATA){requestAnimationFrame(v);return}t.hidden=!1,t.height=o.videoHeight,t.width=o.videoWidth;let p=o.videoWidth,k=o.videoHeight;e.drawImage(o,0,0,p,k);var A=e.getImageData(0,0,p,k);try{var h=jsQR(A.data,A.width,A.height,{inversionAttempts:"dontInvert"})}catch(i){console.error("jsQR:",i)}if(!h){requestAnimationFrame(v);return}var u=detectQRtype(h.data);if(u=="unknown"){requestAnimationFrame(v);return}if(u=="MultiJWT"){mylog("Scanned MultiJWT QR");var P=h.data.split("|"),I=P[2],m=P[3],M=P[4],H=I.charCodeAt(0),S=I.charCodeAt(1),_=m.charCodeAt(0),U=m.charCodeAt(1);if(H<48||H>57||S<48||S>57||_<48||_>57||U<48||U>57){requestAnimationFrame(v);return}if(n.has(m)){requestAnimationFrame(v);return}if(n.add(m),c[+m]=M,a.innerText="Received piece: "+m,n.size<I){requestAnimationFrame(v);return}stopMediaTracks(s),t.hidden=!0,mylog("Received all pieces",c);var Q=c.join("");mylog("Received jwt",Q);try{var $=decodeJWT(Q);let i={type:"w3cvc",encoded:Q,decoded:$};mylog("Writing current cred: ",i),await settingsPut("currentCredential",i)}catch(i){myerror(i),a.innerText=i;return}y(C,{screenType:l});return}if(u=="URL"){mylog("Scanned normal URL QR"),stopMediaTracks(s);let i=h.data.trim();if(i.startsWith(MYSELF)){const g=new URL(i);let f=g.searchParams.get("id");f?i=ISSUER_GET_CREDENTIAL+f:(f=g.searchParams.get("pubid"),f&&(i=ISSUER_GET_PUBLIC_CREDENTIAL+f))}await requestQRAndDisplay(i,C,l);return}const q=1,J=6,Y=4,z=7,K=-260;if(u=="HC1"){mylog("Scanned HC1 QR");let i=await CWT.decodeHC1QR(h.data);console.log("CWT.decodeHC1QR",i);let g={type:"hcert",encoded:h.data,decoded:i};await settingsPut("currentCredential",g),stopMediaTracks(s),y(C,{screenType:l});return}if(u=="Base64"){mylog("Scanned Base64 simple QR");let i=JSON.parse(atobUrl(h.data)),g={type:"ukimmigration",encoded:h.data,decoded:i};await settingsPut.setItem("currentCredential",g),stopMediaTracks(s),y(C,{screenType:l});return}}catch(p){stopMediaTracks(s),console.error(p),alert(`Error: ${p}`),y(homePage);return}}export{ae as initiateReceiveQRScanning};
