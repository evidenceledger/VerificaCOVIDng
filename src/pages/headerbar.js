import {render, html, svg} from 'uhtml';


function toggleMenu() {
    let x = document.getElementById("mobileMenu")
    x.classList.toggle("show")
}
function hideMenu() {
    let x = document.getElementById("mobileMenu")
    if (x) {
        x.classList.remove("show")
    }
}
function resetAndGoHome(e) {
    hideMenu()
    if (window.goHome) {
        goHome()
    }
}
function gotoPage(target, params) {
    console.log("Trying to go to page", target)
    if (window.gotoPage) {
        window.gotoPage(target, params)
    }
}
function T(e) {
    if (window.T) {
        return(window.T(e))
    }
    return (e)
}


export function HeaderBar() {
    hideMenu()
    
    let theHtml = html`
        <div class="bar xlarge color-primary">
            <div class="bar-item" onclick="${() => resetAndGoHome()}" style="padding:10px">Evidenceledger
            </div>
            <a onclick="${() => toggleMenu()}" class="bar-item btn-menu right focus-visible-only">☰</a>
        </div>
        
        <div class="bar-block xlarge color-primary hide" id="mobileMenu">
            <a onclick='${() => gotoPage("ScanQrPage", "AskUserToStoreQR")}' class="bar-item large btn-menu focus-visible-only">${T("Scan my QR code")}</a>
            <a onclick='${() => gotoPage("SelectLanguage")}'
                class="bar-item large btn-menu focus-visible-only">${T("Language")}</a>
            <a onclick='${() => gotoPage("SelectCamera")}' class="bar-item large btn-menu focus-visible-only">${T("Camera")}</a>
            <a onclick='${() => gotoPage("TermsOfUse")}' class="bar-item large btn-menu focus-visible-only">${T("Terms & Conditions")}</a>
            <a onclick='${() => gotoPage("PrivacyPolicy")}' class="bar-item large btn-menu focus-visible-only">${T("Privacy policy")}</a>
        </div>
      `;

    render(document.querySelector('header'), theHtml);
    return;

}


export function DefaultIntroPage() {
    
    let theHtml = html`<div class="sect-white">
        <h2 class="margin-bottom" style="word-break:break-word">${T("EU Digital COVID Credential Verifier")}</h2>
        <p>${T("$intro01")}</p>

        <div class="padding-16 center">

            <div class="mb-32"></div>
            <div class="loader"></div>
            <p>Loading ...</p>


        </div>
    </div>`;

    render(document.querySelector('main'), theHtml);
    return;

}

