import{r as e,A as r,h as a}from"./AbstractPage.18a62ded.js";import"./app.067879c9.js";e("IntroPage",class extends r{constructor(t){super(t)}enter(){let t=a`
        <div class="px-4 text-center">
            <h2 class="my-6 text-xl font-bold break-words">${T("EU Digital COVID Credential Verifier")}</h2>
            <p class="text-base font-medium mb-6">${T("$intro01")}</p>

            <button class="btn-primary" onclick='${()=>this.gotoPage("ScanQrPage")}'>
                ${T("Start verifying")}
            </button>

        </div>`;this.render(t)}});
