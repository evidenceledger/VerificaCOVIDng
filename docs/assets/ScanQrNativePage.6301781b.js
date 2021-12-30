var x=Object.defineProperty;var D=(i,e,t)=>e in i?x(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var d=(i,e,t)=>(D(i,typeof e!="symbol"?e+"":e,t),t);import{g as f,l as y}from"./w3full.c5c6fd34.js";import{r as B,A as L,h as A}from"./AbstractPage.3fc6ca1f.js";import{g as j,a as F}from"./camerainfo.4311a7fd.js";const w=0,O=1,V=2,$=3;B("ScanQrNativePage",class extends L{constructor(e){super(e);d(this,"displayPage");d(this,"detectionInterval",200);d(this,"videoElem");d(this,"nativeBarcodeDetector");d(this,"lastUsedCameraId");d(this,"videoElement");"BarcodeDetector"in window?(console.log("Barcode Detector supported!"),this.nativeBarcodeDetector=new BarcodeDetector({formats:["qr_code"]})):y.error("Barcode Detector is not supported by this browser."),this.videoElement={}}async enter(e){if(e||(e="DisplayHcert"),this.displayPage=e,!this.nativeBarcodeDetector){this.render(this.messageNoCameraPermissions());return}if(this.lastUsedCameraId=await this.selectCamera(),!this.lastUsedCameraId){this.render(this.messageNoCameraPermissions());return}let t=A`
        <video ref=${this.videoElement} oncanPlay=${()=>this.canPlay()}></video>
        `;this.render(t);let s;this.lastUsedCameraId?(console.log("Constraints with deviceID:",this.lastUsedCameraId),s={audio:!1,video:{width:{ideal:1080,max:1920},deviceId:this.lastUsedCameraId}}):(console.log("Constraints without camera"),s={audio:!1,video:{width:{ideal:1080,max:1920},facingMode:"environment"}});let o;try{o=await navigator.mediaDevices.getUserMedia(s),this.videoElement.current.srcObject=o,console.log(o)}catch(c){y.error("Error getting stream",c),this.render(this.messageErrorGettingStream());return}}async selectCamera(){var e=localStorage.getItem("selectedCamera");if(console.log("User selected camera:",e),e||(e=this.lastUsedCameraId,console.log("Last used camera:",e)),!e&&j()=="Android"){console.log("We are in Andoid and this is the first time");let t;try{t=await F(),console.log("Video devices in Android:",t)}catch(s){y.error("Error requesting camera access",s)}t&&t.defaultPreferredCamera&&(e=t.defaultPreferredCamera.deviceId,console.log("Selected camera in Android:",e)),e||console.log("In Android and no selected camera")}return e}async canPlay(){console.log("Video can play, try to detect QR"),this.videoElement.current.style.display="block",this.videoElement.current.play(),this.detectCode()}async detectCode(){let e;try{e=await this.nativeBarcodeDetector.detect(this.videoElement.current)}catch{y.error(err);return}if(e.length===0){setTimeout(()=>this.detectCode(),this.detectionInterval);return}let t=w,s;for(const o of e)if(console.log(o),s=o.rawValue,t=this.detectQRtype(s),t!=w)break;if(t===w){setTimeout(()=>this.detectCode(),this.detectionInterval);return}if(t===$)return console.log("Going to ",this.displayPage),f(this.displayPage,s),!0}async exit(){this.videoElement.current.style.display="none",this.videoElement.current.srcObject!==void 0&&this.videoElement.current.srcObject.getVideoTracks().forEach(e=>{e.stop()})}detectQRtype(e){return!e||!e.startsWith?(y.error("detectQRtype: data is not string"),w):e.startsWith("HC1:")?$:e.startsWith("multi|w3cvc|")?V:e.startsWith("https")?O:w}errorMessage(e,t){return A`
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
        `}messageErrorGettingStream(){return A`
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
        `}messageNoCameraPermissions(){return A`
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
        `}});var r={callerPage:"",canvasElement:"",canvas:"",progressMessages:"",displayQRPage:"",callerType:"",receivedQRPieces:[],receivedPieces:"",video:"",myStream:""};async function re(i,e,t,s){var o="";window.history.state!=null&&(o=window.history.state.pageName),r.callerPage=o,r.canvasElement=i,r.progressMessages=e,r.displayQRPage=t,r.callerType=s,r.receivedQRPieces=[],r.receivedPieces=new Set,r.canvas=r.canvasElement.getContext("2d"),r.video=document.createElement("video"),r.canvasElement.hidden=!0,r.progressMessages.innerText="Waiting for QR .........",navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then(function(c){r.myStream=c,r.video.srcObject=c,r.video.setAttribute("playsinline",!0),r.video.play(),requestAnimationFrame(l)})}async function l(){try{var i=r.video,e=r.canvas,t=r.canvasElement,s=r.receivedPieces,o=r.receivedQRPieces,c=r.progressMessages,h=r.myStream,C=r.callerType,W=r.callerPage,R=r.displayQRPage,b="";if(window.history.state!=null&&(b=window.history.state.pageName),b!=W){stopMediaTracks(h);return}if(i.readyState!==i.HAVE_ENOUGH_DATA){requestAnimationFrame(l);return}t.hidden=!1,t.height=i.videoHeight,t.width=i.videoWidth;let u=i.videoWidth,M=i.videoHeight;e.drawImage(i,0,0,u,M);var E=e.getImageData(0,0,u,M);try{var n=jsQR(E.data,E.width,E.height,{inversionAttempts:"dontInvert"})}catch(a){console.error("jsQR:",a)}if(!n){requestAnimationFrame(l);return}var g=detectQRtype(n.data);if(g=="unknown"){requestAnimationFrame(l);return}if(g=="MultiJWT"){mylog("Scanned MultiJWT QR");var P=n.data.split("|"),I=P[2],m=P[3],_=P[4],H=I.charCodeAt(0),U=I.charCodeAt(1),S=m.charCodeAt(0),k=m.charCodeAt(1);if(H<48||H>57||U<48||U>57||S<48||S>57||k<48||k>57){requestAnimationFrame(l);return}if(s.has(m)){requestAnimationFrame(l);return}if(s.add(m),o[+m]=_,c.innerText="Received piece: "+m,s.size<I){requestAnimationFrame(l);return}stopMediaTracks(h),t.hidden=!0,mylog("Received all pieces",o);var Q=o.join("");mylog("Received jwt",Q);try{var N=decodeJWT(Q);let a={type:"w3cvc",encoded:Q,decoded:N};mylog("Writing current cred: ",a),await settingsPut("currentCredential",a)}catch(a){myerror(a),c.innerText=a;return}f(R,{screenType:C});return}if(g=="URL"){mylog("Scanned normal URL QR"),stopMediaTracks(h);let a=n.data.trim();if(a.startsWith(MYSELF)){const v=new URL(a);let p=v.searchParams.get("id");p?a=ISSUER_GET_CREDENTIAL+p:(p=v.searchParams.get("pubid"),p&&(a=ISSUER_GET_PUBLIC_CREDENTIAL+p))}await requestQRAndDisplay(a,R,C);return}const G=1,q=6,J=4,Y=7,z=-260;if(g=="HC1"){mylog("Scanned HC1 QR");let a=await CWT.decodeHC1QR(n.data);console.log("CWT.decodeHC1QR",a);let v={type:"hcert",encoded:n.data,decoded:a};await settingsPut("currentCredential",v),stopMediaTracks(h),f(R,{screenType:C});return}if(g=="Base64"){mylog("Scanned Base64 simple QR");let a=JSON.parse(atobUrl(n.data)),v={type:"ukimmigration",encoded:n.data,decoded:a};await settingsPut.setItem("currentCredential",v),stopMediaTracks(h),f(R,{screenType:C});return}}catch(u){stopMediaTracks(h),console.error(u),alert(`Error: ${u}`),f(homePage);return}}export{re as initiateReceiveQRScanning};
