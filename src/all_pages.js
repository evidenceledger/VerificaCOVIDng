import * as router from './router'

export async function loadAllPages() {
    
    // Import first the 404 error page and home page
    let module404 = await import('./pages/page404')
    let moduleHome = await import('./pages/intropage')

    // All pages go inside the <main> element
    var mainElem = document.querySelector('main')
    mainElem.innerHTML = ''

    // Register the 404 and home pages
    let homePageName = registerPage(moduleHome, mainElem)
    registerPage(module404, mainElem)

    // Set the home page
    router.setHomePage(homePageName)

    // Display immediately the home page
    await router.gotoPage("Intro");

    // List all other pages of the application
    var pageFiles = [
        await import('./pages/scanqr'),
        await import('./pages/faqs'),
        await import('./pages/refreshkeys'),
        await import('./i18n/i18'),
        await import('./pages/help'),
        await import('./pages/hcertpage'),
        await import('./pages/myhcertpage'),
        await import('./pages/microwallet'),
        await import('./pages/displayqr'),
        await import('./pages/selectcamera'),
        await import('./pages/swnotify'),
        await import('./pages/termsofuse'),
        await import('./pages/privacypolicy')    
    ]
    
    // Register all pages in the Router
    for (let i = 0; i < pageFiles.length; i++) {
        let module = pageFiles[i]
        registerPage(module, mainElem)    
    }    

}

function registerPage(module, mainElem) {

    let pageClass = module.default

    let pageInstance = new pageClass()
    let pageName = pageClass.name
    console.log(pageName)

    return pageName

}

