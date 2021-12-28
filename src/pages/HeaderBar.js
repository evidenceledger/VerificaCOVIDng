import { render, html } from 'uhtml';

function toggleMenu() {
    let x = document.getElementById("mobileMenu")
    x.classList.toggle("hide")
}
function hideMenu() {
    let x = document.getElementById("mobileMenu")
    if (x) {
        x.classList.add("hide")
    }
}
function resetAndGoHome(e) {
    hideMenu()
    if (window.goHome) {
        goHome()
    }
}
function gotoPage(target, params) {
    console.log("Trying to go to page", target, "with params", params)
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


export function OldHeaderBar() {
    
    let theHtml = html`
<div class="bar xlarge color-primary">
    <div class="bar-item" onclick="${() => resetAndGoHome()}" style="padding:10px">Evidenceledger</div>
    <a onclick="${() => toggleMenu()}" class="bar-item btn-menu right focus-visible-only">☰</a>
</div>

<div class="bar-block xlarge color-primary hide" id="mobileMenu">
<a onclick='${() => gotoPage("ScanQrNativePage")}' class="bar-item large btn-menu focus-visible-only">${T("Scan native")}</a>
<a onclick='${() => gotoPage("SelectLanguage")}' class="bar-item large btn-menu focus-visible-only">${T("Language")}</a>
    <a onclick='${() => gotoPage("SelectCamera")}' class="bar-item large btn-menu focus-visible-only">${T("Camera")}</a>
    <a onclick='${() => gotoPage("TermsOfUse")}' class="bar-item large btn-menu focus-visible-only">${T("Terms & Conditions")}</a>
    <a onclick='${() => gotoPage("PrivacyPolicy")}' class="bar-item large btn-menu focus-visible-only">${T("Privacy policy")}</a>
    <a onclick='${() => gotoPage("LogsPage")}' class="bar-item large btn-menu focus-visible-only">${T("Show technical logs")}</a>
</div>
      `;

    render(document.querySelector('header'), theHtml);
    hideMenu()
    return;

}

export function HeaderBar() {
    
    let theHtml = html`
<div class="bar xlarge color-primary">
    <div class="bar-item" onclick="${() => resetAndGoHome()}" style="padding:10px">Evidenceledger</div>
    <a onclick="${() => toggleMenu()}" class="bar-item btn-menu right focus-visible-only">☰</a>
</div>

<div class="bar-block xlarge color-primary hide" id="mobileMenu">
    ${window.menuItems.map(
        ({page, params, text}) => html`<a onclick=${()=>gotoPage(page, params)} class="bar-item large btn-menu focus-visible-only">${text}</a>`
    )}
</div>
      `;

    render(document.querySelector('header'), theHtml);
    hideMenu()
    return;

}

export function SplashScreen() {
    
    let theHtml = html`<div class="sect-white">
        <h2 class="mb-16" style="word-break:break-word">${T("EU Digital COVID Credential Verifier")}</h2>
        <p>${T("$intro01")}</p>

        <div class="pd-16 center">

            <div class="mb-32"></div>
            <div class="loader"></div>
            <p>Loading ...</p>

        </div>
    </div>`;

    render(document.querySelector('#SplashScreen'), theHtml);
    return;

}

