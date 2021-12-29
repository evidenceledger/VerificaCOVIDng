var x=Object.defineProperty;var $=(s,t,r)=>t in s?x(s,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[t]=r;var u=(s,t,r)=>($(s,typeof t!="symbol"?t+"":t,r),r);import{l as w}from"./w3full.df12da0f.js";import{r as B,A as L}from"./AbstractPage.d25cfa01.js";import{g as q,a as F}from"./camerainfo.4311a7fd.js";const W=0,_=1,j=2,I=3;B("ScanQrNativePage",class extends L{constructor(t){super(t);u(this,"nativeBarcodeDetector");u(this,"codeReader");u(this,"controls");u(this,"videoElem");u(this,"selectedCameraId");"BarcodeDetector"in window?(console.log("Barcode Detector supported!"),this.nativeBarcodeDetector=new BarcodeDetector({formats:["qr_code"]})):w.error("Barcode Detector is not supported by this browser."),this.videoElem=document.createElement("video"),this.videoElem.style.display="none",this.videoElem.setAttribute("playsinline",!0),this.videoElem.oncanplay=this.canPlay}async enter(t){let r=this.html;if(!this.nativeBarcodeDetector){this.render(this.messageNoCameraPermissions());return}var i=localStorage.getItem("selectedCamera");if(console.log("User selected camera:",i),i||(i=this.selectedCameraId,console.log("Last used camera:",i)),!i&&q()=="Android"){console.log("We are in Andoid and this is the first time");let c;try{c=await F(),console.log("Video devices in Android:",c)}catch(C){w.error("Error requesting camera access",C)}if(c&&c.defaultPreferredCamera&&(i=c.defaultPreferredCamera.deviceId,console.log("Selected camera in Android:",i)),!i){console.log("In Android and no selected camera"),this.render(this.messageNoCameraPermissions());return}}this.selectedCameraId=i,console.log("Remembering camera used:",i);let n=r`${this.videoElem}`;this.render(n);let d;i?(console.log("Constraints with deviceID:",i),d={audio:!1,video:{width:{ideal:1080,max:1920},deviceId:i}}):(console.log("Constraints without camera"),d={audio:!1,video:{width:{ideal:1080,max:1920},facingMode:"environment"}});let l;try{l=await navigator.mediaDevices.getUserMedia(d)}catch{w.error("Error getting stream",e),this.render(this.messageErrorGettingStream());return}this.videoElem.srcObject=l,this.videoElem.onloadedmetadata=function(c){this.videoElem.play()},this.detectCode()}canPlay(t){t.target.style.display="block"}detectCode(){this.nativeBarcodeDetector.detect(this.videoElem).then(t=>{if(t.length===0){console.log("No QR code detected");return}for(const r of t)console.log(r)}).catch(t=>{console.error(t)})}async exit(){this.controls&&this.controls.stop(),this.videoElem.style.display="none"}async processQRpiece(t,r){let i=t.text,n=this.detectQRtype(t);if(console.log("QRTYPE",n),n!==I)return!1;if(n===W||n===_)return this.gotoPage("DisplayNormalQR",i),!0;if(n===I)return console.log("Going to ",r),this.gotoPage(r,i),!0}detectQRtype(t){let r=t.text;return console.log("detectQRtype:",r),r.startsWith||w.myerror("detectQRtype: data is not string"),r.startsWith("https")?_:r.startsWith("multi|w3cvc|")?j:r.startsWith("HC1:")?I:W}messageErrorGettingStream(){return this.html`
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
        `}messageNoCameraPermissions(){return this.html`
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
        `}});var a={callerPage:"",canvasElement:"",canvas:"",progressMessages:"",displayQRPage:"",callerType:"",receivedQRPieces:[],receivedPieces:"",video:"",myStream:""};async function te(s,t,r,i){var n="";window.history.state!=null&&(n=window.history.state.pageName),a.callerPage=n,a.canvasElement=s,a.progressMessages=t,a.displayQRPage=r,a.callerType=i,a.receivedQRPieces=[],a.receivedPieces=new Set,a.canvas=a.canvasElement.getContext("2d"),a.video=document.createElement("video"),a.canvasElement.hidden=!0,a.progressMessages.innerText="Waiting for QR .........",navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"}}).then(function(d){a.myStream=d,a.video.srcObject=d,a.video.setAttribute("playsinline",!0),a.video.play(),requestAnimationFrame(h)})}async function h(){try{var s=a.video,t=a.canvas,r=a.canvasElement,i=a.receivedPieces,n=a.receivedQRPieces,d=a.progressMessages,l=a.myStream,c=a.callerType,C=a.callerPage,R=a.displayQRPage,H="";if(window.history.state!=null&&(H=window.history.state.pageName),H!=C){stopMediaTracks(l);return}if(s.readyState!==s.HAVE_ENOUGH_DATA){requestAnimationFrame(h);return}r.hidden=!1,r.height=s.videoHeight,r.width=s.videoWidth;let f=s.videoWidth,N=s.videoHeight;t.drawImage(s,0,0,f,N);var E=t.getImageData(0,0,f,N);try{var m=jsQR(E.data,E.width,E.height,{inversionAttempts:"dontInvert"})}catch(o){console.error("jsQR:",o)}if(!m){requestAnimationFrame(h);return}var p=detectQRtype(m.data);if(p=="unknown"){requestAnimationFrame(h);return}if(p=="MultiJWT"){mylog("Scanned MultiJWT QR");var P=m.data.split("|"),A=P[2],g=P[3],U=P[4],b=A.charCodeAt(0),S=A.charCodeAt(1),D=g.charCodeAt(0),M=g.charCodeAt(1);if(b<48||b>57||S<48||S>57||D<48||D>57||M<48||M>57){requestAnimationFrame(h);return}if(i.has(g)){requestAnimationFrame(h);return}if(i.add(g),n[+g]=U,d.innerText="Received piece: "+g,i.size<A){requestAnimationFrame(h);return}stopMediaTracks(l),r.hidden=!0,mylog("Received all pieces",n);var Q=n.join("");mylog("Received jwt",Q);try{var k=decodeJWT(Q);let o={type:"w3cvc",encoded:Q,decoded:k};mylog("Writing current cred: ",o),await settingsPut("currentCredential",o)}catch(o){myerror(o),d.innerText=o;return}gotoPage(R,{screenType:c});return}if(p=="URL"){mylog("Scanned normal URL QR"),stopMediaTracks(l);let o=m.data.trim();if(o.startsWith(MYSELF)){const v=new URL(o);let y=v.searchParams.get("id");y?o=ISSUER_GET_CREDENTIAL+y:(y=v.searchParams.get("pubid"),y&&(o=ISSUER_GET_PUBLIC_CREDENTIAL+y))}await requestQRAndDisplay(o,R,c);return}const G=1,O=6,J=4,V=7,Y=-260;if(p=="HC1"){mylog("Scanned HC1 QR");let o=await CWT.decodeHC1QR(m.data);console.log("CWT.decodeHC1QR",o);let v={type:"hcert",encoded:m.data,decoded:o};await settingsPut("currentCredential",v),stopMediaTracks(l),gotoPage(R,{screenType:c});return}if(p=="Base64"){mylog("Scanned Base64 simple QR");let o=JSON.parse(atobUrl(m.data)),v={type:"ukimmigration",encoded:m.data,decoded:o};await settingsPut.setItem("currentCredential",v),stopMediaTracks(l),gotoPage(R,{screenType:c});return}}catch(f){stopMediaTracks(l),console.error(f),alert(`Error: ${f}`),gotoPage(homePage);return}}export{te as initiateReceiveQRScanning};
