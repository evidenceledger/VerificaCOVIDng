var D=Object.defineProperty;var N=(n,e,t)=>e in n?D(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var d=(n,e,t)=>(N(n,typeof e!="symbol"?e+"":e,t),t);import{r as B,A as L,_ as O,l as w,g as y}from"./app.248fcdfc.js";import{g as V,a as F}from"./camerainfo.4311a7fd.js";import{h as E}from"./vendor.f8864ac5.js";const C=0,x=1,G=2,W=3;B("ScanQrNativePage",class extends L{constructor(e){super(e);d(this,"displayPage");d(this,"detectionInterval",200);d(this,"videoElement");d(this,"nativeBarcodeDetector");d(this,"jsQR");d(this,"lastUsedCameraId");d(this,"canvasElement");d(this,"canvasSpace");"BarcodeDetector"in window?(console.log("Barcode Detector supported!"),this.nativeBarcodeDetector=new BarcodeDetector({formats:["qr_code"]})):(console.log("Barcode Detector is not supported by this browser."),this.jsQRPromise=O(()=>import("./jsQR.3d2f64bb.js").then(function(t){return t.j}),["assets/jsQR.3d2f64bb.js","assets/_commonjsHelpers.b8add541.js"])),this.videoElement={},this.canvasElement=document.createElement("canvas"),this.canvasSpace=this.canvasElement.getContext("2d")}async enter(e){if(e||(e="DisplayHcert"),this.displayPage=e,!this.nativeBarcodeDetector){let a=await this.jsQRPromise;this.jsQR=a.default}this.lastUsedCameraId=await this.selectCamera();let t=E`
        <video ref=${this.videoElement} oncanPlay=${()=>this.canPlay()}></video>
        `;this.render(t);let o;this.lastUsedCameraId?(console.log("Constraints with deviceID:",this.lastUsedCameraId),o={audio:!1,video:{deviceId:this.lastUsedCameraId}}):(console.log("Constraints without camera"),o={audio:!1,video:{facingMode:"environment"}});let c;try{c=await navigator.mediaDevices.getUserMedia(o);let a=c.getVideoTracks();for(let s=0;s<a.length;s++){let l=a[s].getCapabilities();console.log(l)}this.videoElement.current.srcObject=c,console.log(c)}catch(a){w.error("Error getting stream",a),this.render(this.messageErrorGettingStream());return}}async selectCamera(){var e=localStorage.getItem("selectedCamera");if(console.log("User selected camera:",e),e||(e=this.lastUsedCameraId,console.log("Last used camera:",e)),!e&&V()=="Android"){console.log("We are in Andoid and this is the first time");let t;try{t=await F(),console.log("Video devices in Android:",t)}catch(o){w.error("Error requesting camera access",o)}t&&t.defaultPreferredCamera&&(e=t.defaultPreferredCamera.deviceId,console.log("Selected camera in Android:",e)),e||console.log("In Android and no selected camera")}return e}async canPlay(){console.log("Video can play, try to detect QR"),this.videoElement.current.style.display="block",this.videoElement.current.play(),this.detectCode()}async detectCode(){let e=C,t;if(this.nativeBarcodeDetector){let a;try{a=await this.nativeBarcodeDetector.detect(this.videoElement.current)}catch{w.error(err);return}if(a.length===0){setTimeout(()=>this.detectCode(),this.detectionInterval);return}for(const s of a)if(console.log(s),t=s.rawValue,e=this.detectQRtype(t),e!=C)break}else{let a=this.videoElement.current.videoWidth,s=this.videoElement.current.videoHeight;this.canvasSpace.drawImage(this.videoElement.current,0,0,a,s);var o=this.canvasSpace.getImageData(0,0,a,s);try{var c=this.jsQR(o.data,o.width,o.height,{inversionAttempts:"dontInvert"})}catch(l){console.error("jsQR:",l)}if(!c){setTimeout(()=>this.detectCode(),this.detectionInterval);return}t=c.data,e=this.detectQRtype(t)}if(e===C){setTimeout(()=>this.detectCode(),this.detectionInterval);return}if(e===W)return console.log("Going to ",this.displayPage),y(this.displayPage,t),!0}async exit(){this.videoElement.current.style.display="none",this.videoElement.current.srcObject!==void 0&&this.videoElement.current.srcObject.getVideoTracks().forEach(e=>{e.stop()})}detectQRtype(e){return!e||!e.startsWith?(w.error("detectQRtype: data is not string"),C):e.startsWith("HC1:")?W:e.startsWith("multi|w3cvc|")?G:e.startsWith("https")?x:C}errorMessage(e,t){return E`
        <div class="container">
            <div class="w3-card-4 center" style="margin-top:100px;">
        
                <header class="container color-primary" style="padding:10px">
                    <h1>${e}</h1>
                </header>
        
                <div class="container ptb-16">
                    <p>${t}</p>
                    <p>${T("Please click Accept to refresh the page.")}</p>
                </div>
        
                <div class="ptb-16">
        
                    <button class="btn-primary" @click=${()=>window.location.reload()}>${T("Accept")}</button>
        
                </div>
        
            </div>
        </div>
        `}messageErrorGettingStream(){return E`
        <div class="container">
            <div class="w3-card-4 center" style="margin-top:100px;">
        
                <header class="container color-primary" style="padding:10px">
                    <h1>${T("Error getting video stream")}</h1>
                </header>
        
                <div class="container ptb-16">
                    <p>${T("There was an error trying to start the camera.")}</p>
                    <p>${T("Please click Accept to refresh the page.")}</p>
                </div>
        
                <div class="ptb-16">
        
                    <button class="btn-primary" @click=${()=>window.location.reload()}>${T("Accept")}</button>
        
                </div>
        
            </div>
        </div>
        `}messageNoCameraPermissions(){return E`
        <div class="container">
            <div class="w3-card-4 center" style="margin-top:100px;">
        
                <header class="container color-primary" style="padding:10px">
                    <h1>${T("No camera access")}</h1>
                </header>
        
                <div class="container ptb-16">
                    <p>${T("You need to allow camera access to be able to scan a QR.")}</p>
                    <p>${T("Please click Accept to refresh the page.")}</p>
                </div>
        
                <div class="ptb-16">
        
                    <button class="btn-primary" @click=${()=>window.location.reload()}>${T("Accept")}</button>
        
                </div>
        
            </div>
        </div>
        `}});var r={callerPage:"",canvasElement:"",canvas:"",progressMessages:"",displayQRPage:"",callerType:"",receivedQRPieces:[],receivedPieces:"",video:"",myStream:""};async function ae(n,e,t,o){var c="";window.history.state!=null&&(c=window.history.state.pageName),r.callerPage=c,r.canvasElement=n,r.progressMessages=e,r.displayQRPage=t,r.callerType=o,r.receivedQRPieces=[],r.receivedPieces=new Set,r.canvas=r.canvasElement.getContext("2d"),r.video=document.createElement("video"),r.canvasElement.hidden=!0,r.progressMessages.innerText="Waiting for QR .........",navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then(function(a){r.myStream=a,r.video.srcObject=a,r.video.setAttribute("playsinline",!0),r.video.play(),requestAnimationFrame(v)})}async function v(){try{var n=r.video,e=r.canvas,t=r.canvasElement,o=r.receivedPieces,c=r.receivedQRPieces,a=r.progressMessages,s=r.myStream,l=r.callerType,j=r.callerPage,R=r.displayQRPage,b="";if(window.history.state!=null&&(b=window.history.state.pageName),b!=j){stopMediaTracks(s);return}if(n.readyState!==n.HAVE_ENOUGH_DATA){requestAnimationFrame(v);return}t.hidden=!1,t.height=n.videoHeight,t.width=n.videoWidth;let u=n.videoWidth,k=n.videoHeight;e.drawImage(n,0,0,u,k);var A=e.getImageData(0,0,u,k);try{var h=jsQR(A.data,A.width,A.height,{inversionAttempts:"dontInvert"})}catch(i){console.error("jsQR:",i)}if(!h){requestAnimationFrame(v);return}var p=detectQRtype(h.data);if(p=="unknown"){requestAnimationFrame(v);return}if(p=="MultiJWT"){mylog("Scanned MultiJWT QR");var I=h.data.split("|"),P=I[2],m=I[3],M=I[4],H=P.charCodeAt(0),S=P.charCodeAt(1),_=m.charCodeAt(0),U=m.charCodeAt(1);if(H<48||H>57||S<48||S>57||_<48||_>57||U<48||U>57){requestAnimationFrame(v);return}if(o.has(m)){requestAnimationFrame(v);return}if(o.add(m),c[+m]=M,a.innerText="Received piece: "+m,o.size<P){requestAnimationFrame(v);return}stopMediaTracks(s),t.hidden=!0,mylog("Received all pieces",c);var Q=c.join("");mylog("Received jwt",Q);try{var $=decodeJWT(Q);let i={type:"w3cvc",encoded:Q,decoded:$};mylog("Writing current cred: ",i),await settingsPut("currentCredential",i)}catch(i){myerror(i),a.innerText=i;return}y(R,{screenType:l});return}if(p=="URL"){mylog("Scanned normal URL QR"),stopMediaTracks(s);let i=h.data.trim();if(i.startsWith(MYSELF)){const g=new URL(i);let f=g.searchParams.get("id");f?i=ISSUER_GET_CREDENTIAL+f:(f=g.searchParams.get("pubid"),f&&(i=ISSUER_GET_PUBLIC_CREDENTIAL+f))}await requestQRAndDisplay(i,R,l);return}const q=1,J=6,Y=4,z=7,K=-260;if(p=="HC1"){mylog("Scanned HC1 QR");let i=await CWT.decodeHC1QR(h.data);console.log("CWT.decodeHC1QR",i);let g={type:"hcert",encoded:h.data,decoded:i};await settingsPut("currentCredential",g),stopMediaTracks(s),y(R,{screenType:l});return}if(p=="Base64"){mylog("Scanned Base64 simple QR");let i=JSON.parse(atobUrl(h.data)),g={type:"ukimmigration",encoded:h.data,decoded:i};await settingsPut.setItem("currentCredential",g),stopMediaTracks(s),y(R,{screenType:l});return}}catch(u){stopMediaTracks(s),console.error(u),alert(`Error: ${u}`),y(homePage);return}}export{ae as initiateReceiveQRScanning};
