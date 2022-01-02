import{r as e,A as r}from"./app.7599fc57.js";import{h as s}from"./vendor.f8864ac5.js";e("IntroPage",class extends r{constructor(t){super(t)}enter(){let t=s`
        <div class="px-4 text-center">
            <h2 class="my-6 text-2xl font-bold break-words">${T("EU Digital COVID Credential Verifier")}</h2>
            <p class="text-lg font-medium mb-6">${T("$intro01")}</p>

            <button class="btn-primary" onclick='${()=>this.gotoPage("ScanQrPage")}'>
                ${T("Start verifying")}
            </button>

        </div>`;this.render(t)}});
