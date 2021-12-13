
import { log } from "./log";
import { goHome, gotoPage } from './router'
import { loadAllPages } from './all_pages'



// Get the version of the application and store in database
async function getAndUpdateVersion() {
    let response = await fetch("/version.txt")
    if (!response.ok) {
        log.myerror("fetch for version.txt failed");
        return;
    }
    // Store the version in global Window object and in local storage
    window.appVersion = await response.text()
    window.localStorage.setItem("VERSION", appVersion)
    console.log("Version:", appVersion)

    return;
}


var INSTALL_SERVICE_WORKER = true

// This function is called on first load and when a refresh is triggered in any page
// When called the DOM is fully loaded and safe to manipulate
window.addEventListener('load', async (event) => {

    // Get the version of the application asynchronously
    getAndUpdateVersion()

    // Install Service Worker only when in Production
    if (import.meta.env.DEV) {
        console.log("In development")
        INSTALL_SERVICE_WORKER = false
    } else {
        console.log("In production")
    }

    // Lazy-load the pages of the application
    loadAllPages()

    // Install service worker for off-line support
    if (INSTALL_SERVICE_WORKER && ("serviceWorker" in navigator)) {
        const {Workbox} = await import('workbox-window');
        
        const wb = new Workbox("./sw.js");

        wb.addEventListener("message", (event) => {
            if (event.data.type === "CACHE_UPDATED") {
                const { updatedURL } = event.data.payload;

                console.log(`A newer version of ${updatedURL} is available!`);
            }
        });

        wb.addEventListener("activated", async (event) => {
            // `event.isUpdate` will be true if another version of the service
            // worker was controlling the page when this version was registered.
            if (event.isUpdate) {
                console.log("Service worker has been updated.");
                await performAppUpgrade()
            } else {
                console.log("Service worker has been installed for the first time.");
                await performAppUpgrade()
            }
        });

        wb.addEventListener("waiting", (event) => {
            console.log(
                `A new service worker has installed, but it can't activate` +
                `until all tabs running the current version have fully unloaded.`
            );
        });

        // Register the service worker after event listeners have been added.
        wb.register();

        //    const swVersion = await wb.messageSW({ type: "GET_VERSION" });
        //    console.log("Service Worker version:", swVersion);

    }

});


// This is called when a new version of the Service Worker has been activated.
// This means that a new version of the application has been installed
async function performAppUpgrade() {
    console.log("Performing Upgrade");

    // Notify the user and ask to refresh the application
    gotoPage("SWNotify")

}
