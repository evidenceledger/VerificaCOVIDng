import { HeaderBar } from './headerbar'
import * as router from '../router';
import {render, html, svg} from 'uhtml';


export class AbstractPage {
    domElem;        // The DOM Element that holds the page
    pageName;       // The name of the page for routing

    constructor(id) {

        // Create a <div> tag to contain the page
        this.domElem = document.createElement('div')

        // Set the id and name of the page for routing
        this.pageName = id
        this.domElem.id = this.pageName

        // Register in the router
        router.route(this.pageName, this)

        // The page starts hidden
        this.domElem.style.display = "none"

        // Insert into the DOM inside the <main> element
        var mainElem = document.querySelector('main')
        mainElem.appendChild(this.domElem)

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
