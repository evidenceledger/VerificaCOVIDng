import { HeaderBar } from './HeaderBar'
import * as router from '../router';
import { render, html } from 'uhtml';
// Translation support
import '../i18n/tr.js'

export class AbstractPage {
    html;           // The uhtml html function, for subclasses
    domElem;        // The DOM Element that holds the page
    pageName;       // The name of the page for routing

    constructor(id) {
        if (!id) { throw "A page name is needed"}

        // Set the html tag function so subclasses do not have to import uhtml
        this.html = html

        // Create a <div> tag to contain the page
        this.domElem = document.createElement('div')

        // Set the id and name of the page for routing
        this.pageName = id
        this.domElem.id = this.pageName

        // Register the page in the router
        router.route(this.pageName, this)

        // The page starts hidden
        this.domElem.style.display = "none"

        // Insert into the DOM inside the <main> element
        var mainElem = document.querySelector('main')
        mainElem.appendChild(this.domElem)

        console.log("Page constructor:", id)

    }

    async goHome() {
        // This is a utility function to help subclasses
        await router.goHome()
    }

    async gotoPage(pageName, pageData) {
        // This is a utility function to help subclasses
        await router.gotoPage(pageName, pageData)
    }

    render(theHtml) {
        // This is called by subclasses to render its contents
        // Show the page
        this.domElem.style.display = "block"
        // Redraw the header just in case the menu was active
        HeaderBar()
        // Render the html of the page into the DOM element of this page
        render(this.domElem, theHtml)
    }
}

export function register(pageName, classDefinition) {
    let instance = new classDefinition(pageName)
}