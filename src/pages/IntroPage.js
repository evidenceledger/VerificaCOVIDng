import { AbstractPage, register, html } from './AbstractPage'

register("IntroPage", class IntroPage extends AbstractPage {

    constructor(id) {
        super(id)
    }

    enter() {
        //let html = this.html

        let theHtml = html`
        <div class="px-4 text-center">
            <h2 class="my-6 text-xl font-bold break-words">${T("EU Digital COVID Credential Verifier")}</h2>
            <p class="text-base font-medium mb-6">${T("$intro01")}</p>

            <button class="btn-primary" onclick='${() => this.gotoPage("ScanQrPage")}'>
                ${T("Start verifying")}
            </button>

        </div>`;

        this.render(theHtml)
    }
})
