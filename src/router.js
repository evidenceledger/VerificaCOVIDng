// @ts-check

// *****************************************************
// This is a micro-router with just-enough functionality
//
// Implements gotoPage(pageName, pageData) and goHome()
// *****************************************************
import { log } from './log';

// The following function loads lazily the pages
// We have to specify all pages composing the application
// It is done as a switch so not to break bundler optimizations
// Each page registers itself with the router when importing the module

// @ts-ignore
const pageModules = import.meta.glob('./pages/*.js')

// Make sure the Splash Screen is hidden
let elem = document.getElementById("SplashScreen")
if (elem) {
    elem.style.display = "none"
}

async function lazyLoadPage(pageName) {
    await pageModules[`./pages/${pageName}.js`]()
}

// The default home page where to start and when refreshing the app
// Change this to suit your needs
// @ts-ignore
var homePage = window.homePage
if (!homePage) {
    throw "No homePage was set."
}

// The name of the page when we try to go to a nonexistent page
var name404 = "Page404"

// This will hold all pages in a ("pageName", pageClass) structure
var pages = null

// Register a new page name, associated to a class instance
/**
 * @param {string} pageName
 * @param {object} classInstance
 */
export function route(pageName, classInstance) {
    // Create the map on the first call
    if (!pages) { pages = new Map() }
    // Populate the map
    pages.set(pageName, classInstance)
}

// Set the default home page for the application
export function setHomePage(page) {
    homePage = page
}

export async function goHome() {
    
    if (homePage != undefined) {
        await gotoPage(homePage);
    }

    for (const path in pageModules) {
        pageModules[path]().then((mod) => {
            console.log(path, mod)
        })
    }

}
// Export to global scope so it can be called without importing this module
// @ts-ignore
window.goHome = goHome

// gotoPage transitions to the target page passing pageData object
// It is up to the page to define the structure of pageData
export async function gotoPage(pageName, pageData) {
    console.log("Inside gotoPage:", pageName)

    // Lazyload the page. This is a no-op if the module is already loaded
    await lazyLoadPage(pageName)

    // If pageName is not a registered page, go to the 404 error page
    // passing the target page as pageData
    if (pages.get(pageName) === undefined) {
        log.error("Target page does not exist: ", pageName);
        pageData = pageName
        pageName = name404
    }

    // Create a new browser history state
    window.history.pushState(
        { pageName: pageName, pageData: pageData },
        `${pageName}`
    );

    // Process the page transition
    await processPageEntered(pageName, pageData, false);
}
// Export to global scope so it can be called without importing this module
// @ts-ignore
window.gotoPage = gotoPage

// Handle page transition
async function processPageEntered(pageName, pageData, historyData) {
    try {
        // Hide all pages of the application. Later we unhide the one we are entering
        // We also tell all other pages to exit, so they can perform any cleanup
        for (let [name, classInstance] of pages) {
            classInstance.domElem.style.display = "none"
            // Call the page exit(), so it can perform any cleanup 
            if ((name !== pageName) && classInstance.exit) {
                await classInstance.exit()
            }
        }
    } catch (error) {
        log.error("Trying to call exit", error);
        return;
    }

    let targetPage = pages.get(pageName)

    // If the target page is not a registered page, go to the Page404 page,
    // passing the target page as pageData
    if (targetPage === undefined) {
        pageData = pageName
        targetPage = pages.get(name404)
    }

    // Reset scroll position to make sure the page is at the top
    window.scrollTo(0, 0);

    try {
        // Invoke the page enter() function to enter the page
        // This will allow the page to create dynamic content
        if (targetPage.enter) {
            await targetPage.enter(pageData, historyData);
        } else {
            // Make sure the target page is visible even if no enter() defined
            targetPage.style.display = "block"
        }

    } catch (error) {
        log.error("Calling enter()", error);
        return;
    }

}

// Listen for PopStateEvent (navigator Back or Forward buttons are clicked)
window.addEventListener("popstate", async function (event) {
    // Set defaults
    var pageName = homePage;
    var pageData = undefined;

    // Get current state data if not null
    var state = event.state;
    if (state != null) {
        pageName = state.pageName;
        pageData = state.pageData;
    }

    // Process the page transition
    await processPageEntered(pageName, pageData, true);
});

