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
function gotoPage(target) {
    console.log("Trying to go to page", target)
    if (window.gotoPage) {
        window.gotoPage(target)
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
            <div class="bar-item" onclick="${() => resetAndGoHome()}" style="color: white;padding:10px">VerificaCOVID.gencat.cat
            </div>
            <a onclick="${() => toggleMenu()}" class="bar-item btn-menu right focus-visible-only">☰</a>
        </div>
        
        <div class="bar-block xlarge color-primary hide" id="mobileMenu">
            <a onclick='${() => gotoPage("refreshKeys")}' class="bar-item large btn-menu focus-visible-only">${T("Update public keys")}</a>
            <a onclick='${() => gotoPage("selectLanguage")}'
                class="bar-item large btn-menu focus-visible-only">${T("Language")}</a>
            <a onclick='${() => gotoPage("selectCamera")}' class="bar-item large btn-menu focus-visible-only">${T("Camera")}</a>
            <a onclick='${() => gotoPage("faqs")}' class="bar-item large btn-menu focus-visible-only">${T("FAQS")}</a>
            <a onclick='${() => gotoPage("help")}' class="bar-item large btn-menu focus-visible-only">${T("Help")}</a>
        </div>
      `;

    render(document.querySelector('header'), theHtml);
    return;

}


