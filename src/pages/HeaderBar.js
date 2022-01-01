import { render, html } from 'uhtml';

function toggleMenu() {
    let x = document.getElementById("dropMenu")
    x.classList.toggle("hidden")
}
function hideMenu() {
    let x = document.getElementById("dropMenu")
    if (x) {
        x.classList.add("hidden")
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

export function HeaderBar() {
    
    let theHtml = html`
<div class="flex justify-between text-xl font-medium color-primary drop-shadow-lg">
    <div class="p-2.5" onclick="${() => resetAndGoHome()}">EvidenceLedger</div>
    <a class="py-2.5 pr-3.5" onclick="${() => toggleMenu()}">☰</a>
</div>

<div class="color-primary text-lg pl-2.5 hidden" id="dropMenu">
    ${window.menuItems.map(
        ({page, params, text}) => html`<a class="block py-0.5" onclick=${()=>gotoPage(page, params)}>${text}</a>`
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

        <div class="ptb-16 center">

            <div class="mb-32"></div>
            <div class="loader"></div>
            <p>Loading ...</p>

        </div>
    </div>`;

    render(document.querySelector('#SplashScreen'), theHtml);
    return;

}

