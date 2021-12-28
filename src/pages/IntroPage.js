import { AbstractPage, register } from './AbstractPage'

register("IntroPage", class IntroPage extends AbstractPage {

    constructor(id) {
        super(id)
    }

    enter() {
        let html = this.html

        let theHtml = html`<div class="sect-white">
            <h2 class="mb-16" style="word-break:break-word">${T("EU Digital COVID Credential Verifier")}</h2>
            <p>${T("$intro01")}</p>

            <div class="pd-16 center">

                <button onclick='${() => this.gotoPage("ScanQrPage")}' class="btn color-secondary hover-color-secondary
                    xlarge round-xlarge focus-visible-only">
                    ${T("Start verifying")}
                </button>

            </div>
        </div>`;

        this.render(theHtml)
    }
})
