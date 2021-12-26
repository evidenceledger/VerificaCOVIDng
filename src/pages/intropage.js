import { AbstractPage } from './abstractpage'

export default class Intro extends AbstractPage {

    constructor(id) {
        super("Intro")
    }

    enter() {
        let html = this.html

        // Reset the decoder just in case the camera was still working
        if (window.controls) {
            window.controls.stop()
        }


        let theHtml = html`<div class="sect-white">
            <h2 class="margin-bottom" style="word-break:break-word">${T("EU Digital COVID Credential Verifier")}</h2>
            <p>${T("$intro01")}</p>

            <div class="padding-16 center">

                <button onclick='${() => this.gotoPage("ScanQrPage")}' class="btn color-secondary hover-color-secondary
                    xlarge round-xlarge focus-visible-only">
                    ${T("Start verifying")}
                </button>

            </div>
        </div>`;

        this.render(theHtml)
    }
}

let page = new Intro()
