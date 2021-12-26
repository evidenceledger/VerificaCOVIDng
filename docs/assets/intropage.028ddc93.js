import{A as r}from"./abstractpage.653c245a.js";import"./index.ebd55170.js";class o extends r{constructor(t){super("Intro")}enter(){let t=this.html;window.controls&&window.controls.stop();let e=t`<div class="sect-white">
            <h2 class="margin-bottom" style="word-break:break-word">${T("EU Digital COVID Credential Verifier")}</h2>
            <p>${T("$intro01")}</p>

            <div class="padding-16 center">

                <button onclick='${()=>this.gotoPage("ScanQrPage")}' class="btn color-secondary hover-color-secondary
                    xlarge round-xlarge focus-visible-only">
                    ${T("Start verifying")}
                </button>

            </div>
        </div>`;this.render(e)}}new o;export{o as default};
