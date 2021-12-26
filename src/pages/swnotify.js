import { AbstractPage } from './abstractpage'

export default class SWNotify extends AbstractPage {

    constructor(id) {
        super("SWNotify")
    }

    enter(pageData) {
        let html = this.html

        let msg
        if (pageData && pageData.isUpdate) {
            msg = T("Application updated")
        } else {
            msg = T("Application available")
        }

        let theHtml = html`
        <div class="container">
            <div class="w3-card-4 w3-center" style="margin-top:100px;">
        
                <header class="w3-container color-primary" style="padding:10px">
                    <h1>${msg}</h1>
                </header>
        
                <div class="w3-container w3-padding-16">
                    <p>${T("There is a new version of the application and it has already been updated.")}</p>
                    <p>${T("Please click Accept to refresh the page.")}</p>
                </div>
        
                <div class="w3-padding-16">
        
                    <button @click=${()=>window.location.reload()} class="btn color-secondary hover-color-secondary w3-xlarge w3-round-xlarge">${T("Accept")}</button>
        
                </div>
        
            </div>
        </div>
        `

        this.render(theHtml)
    }
}

let page = new SWNotify()