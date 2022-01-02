import{r as e,A as r,h as a}from"./AbstractPage.a64ace8c.js";import"./app.4558eb5e.js";e("IntroPage",class extends r{constructor(t){super(t)}enter(){let t=a`
        <div class="px-4 text-center">
            <h2 class="my-6 text-2xl font-bold break-words">${T("EU Digital COVID Credential Verifier")}</h2>
            <p class="text-lg font-medium mb-6">${T("$intro01")}</p>

            <button class="btn-primary" onclick='${()=>this.gotoPage("ScanQrPage")}'>
                ${T("Start verifying")}
            </button>

        </div>`;this.render(t)}});
