import{r,A as s}from"./AbstractPage.2d6cb208.js";import"./w3full.5148bcf4.js";r("IntroPage",class extends s{constructor(t){super(t)}enter(){let e=this.html`<div class="sect-white">
            <h2 class="mb-16" style="word-break:break-word">${T("EU Digital COVID Credential Verifier")}</h2>
            <p>${T("$intro01")}</p>

            <div class="pd-16 center">

                <button onclick='${()=>this.gotoPage("ScanQrPage")}' class="btn color-secondary hover-color-secondary
                    xlarge round-xlarge focus-visible-only">
                    ${T("Start verifying")}
                </button>

            </div>
        </div>`;this.render(e)}});
