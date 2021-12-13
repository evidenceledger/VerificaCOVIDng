import { AbstractPage } from './abstractpage'

export default class Spinner extends AbstractPage {

    constructor(id) {
        console.log("SPINNER: inside constructor")
        super("Spinner")
    }

    enter(pageData) {
        // window.initialScreen()
        window.location.reload()
    }
}
