import { AbstractPage } from './abstractpage'

export default class Page404 extends AbstractPage {

    constructor(id) {
        super("Page404")
    }

    enter(pageData) {
        let html = this.html

        let theHtml = html`
        <div class="w3-container">
            <h1>The requested page does not exist!: ${pageData}</h1>
        </div>
        `

        this.render(theHtml)
    }
}

let page = new Page404()