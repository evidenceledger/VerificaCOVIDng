var p=Object.defineProperty;var g=(o,t,e)=>t in o?p(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var i=(o,t,e)=>(g(o,typeof t!="symbol"?t+"":t,e),e);import{h as l}from"./vendor.f8864ac5.js";import{A as v,l as R}from"./index.90173e4d.js";import{B as u}from"./BrowserQRCodeReader.076087ed.js";import{g as y,a as Q}from"./camerainfo.bed069c7.js";var w="HC1:NC",C={text:w},x=!1;const m=0,h=1,E=2,c=3;class A extends v{constructor(t){super("ScanQrPage");i(this,"codeReader");i(this,"controls");i(this,"videoElem");i(this,"selectedCameraId");this.codeReader=new u,this.controls=void 0,this.videoElem=document.createElement("video"),this.videoElem.style.display="none",this.videoElem.oncanplay=this.canPlay}async enter(t){if(console.log("SCANQR Enter: ",t),t||(t="DisplayHcert",console.log()),x){await this.processQRpiece(C,t);return}var e=localStorage.getItem("selectedCamera");if(e||(e=this.selectedCameraId),!e&&y()=="Android"){let r;try{r=await Q()}catch(n){console.error("Error requesting camera access",n)}if(r&&r.defaultPreferredCamera&&(e=r.defaultPreferredCamera.deviceId),!e){this.render(this.messageNoCameraPermissions());return}}this.selectedCameraId=e;let a=l`${this.videoElem}`;this.render(a);let s;e?s={audio:!1,video:{width:{ideal:1080,max:1920},deviceId:e}}:s={audio:!1,video:{width:{ideal:1080,max:1920},facingMode:"environment"}};try{window.controls=await this.codeReader.decodeFromConstraints(s,this.videoElem,(r,n,f)=>{if(r){console.log("RESULT",r);let d=this.detectQRtype(r);console.log("QRTYPE",d),d===c&&(f.stop(),this.processQRpiece(r,t))}})}catch{console.log("No permissions from user"),a=this.messageNoCameraPermissions(),this.render(a);return}}canPlay(t){t.target.style.display="block"}async exit(){this.videoElem.style.display="none"}async processQRpiece(t,e){let a=t.text,s=this.detectQRtype(t);if(console.log("QRTYPE",s),s!==c)return!1;if(s===m||s===h)return this.gotoPage("DisplayNormalQR",a),!0;if(s===c)return console.log("Going to ",e),this.gotoPage(e,a),!0}detectQRtype(t){let e=t.text;return console.log("detectQRtype:",e),e.startsWith||R.myerror("detectQRtype: data is not string"),e.startsWith("https")?h:e.startsWith("multi|w3cvc|")?E:e.startsWith("HC1:")?c:m}messageNoCameraPermissions(){return l`
        <div class="container">
            <div class="w3-card-4 w3-center" style="margin-top:100px;">
        
                <header class="w3-container color-primary" style="padding:10px">
                    <h1>${T("No camera access")}</h1>
                </header>
        
                <div class="w3-container w3-padding-16">
                    <p>${T("You need to allow camera access to be able to scan a QR.")}</p>
                    <p>${T("Please click Accept to refresh the page.")}</p>
                </div>
        
                <div class="w3-padding-16">
        
                    <button @click=${()=>window.location.reload()} class="btn color-secondary hover-color-secondary w3-xlarge w3-round-xlarge">${T("Accept")}</button>
        
                </div>
        
            </div>
        </div>
        `}}export{A as default};
