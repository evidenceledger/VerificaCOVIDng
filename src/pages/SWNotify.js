import { AbstractPage, register } from './AbstractPage'

register("SWNotify", class SWNotify extends AbstractPage {

    constructor(id) {
        super(id)
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
        
                <div class="w3-container ptb-16">
                    <p>${T("There is a new version of the application and it has already been updated.")}</p>
                    <p>${T("Please click Accept to refresh the page.")}</p>
                </div>
        
                <div class="ptb-16">
        
                    <button class="btn-primary" @click=${()=>window.location.reload()}>${T("Accept")}</button>
        
                </div>
        
            </div>
        </div>
        `

        this.render(theHtml)
    }
})
