import { AbstractPage } from './abstractpage'

export default class Spinner extends AbstractPage {

    constructor(id) {
        super("Spinner")
    }

    enter(pageData) {
        // window.initialScreen()
        window.location.reload()
    }
}

let page = new Spinner()