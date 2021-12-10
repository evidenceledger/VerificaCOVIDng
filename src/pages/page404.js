import { AbstractPage } from './abstractpage'
import { html } from 'uhtml';

export class Page404 extends AbstractPage {

    constructor(id) {
        super(id)
    }

    enter(pageData) {
        console.log("PAGE404: enter page")

        let theHtml = html`
        <div class="w3-container">
            <h1>The requested page does not exist!: ${pageData}</h1>
        </div>
        `

        this.render(theHtml)
    }
}

