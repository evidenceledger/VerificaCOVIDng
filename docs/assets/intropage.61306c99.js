import{h as o}from"./vendor.f8864ac5.js";import{A as e}from"./index.6ba975c4.js";import"./BrowserQRCodeReader.076087ed.js";import"./camerainfo.bed069c7.js";class c extends e{constructor(r){super("Intro")}enter(){window.controls&&window.controls.stop();let r=o`<div class="sect-white">
            <h2 class="margin-bottom" style="word-break:break-word">${T("EU Digital COVID Credential Verifier")}</h2>
            <p>${T("$intro01")}</p>

            <div class="padding-16 center">

                <button onclick='${()=>this.gotoPage("ScanQrPage")}' class="btn color-secondary hover-color-secondary
                    xlarge round-xlarge focus-visible-only">
                    ${T("Start verifying")}
                </button>

            </div>
        </div>`;this.render(r)}}export{c as default};
