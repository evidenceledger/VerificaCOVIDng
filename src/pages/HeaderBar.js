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





function newresetAndGoHome(e) {
    HeaderBar()
    if (window.goHome) {
        goHome()
    }
}


export function HeaderBar(menu = false) {
    let header = document.querySelector('header')

    var subMenu = html``
    var flag = !menu

    if (menu) {
        subMenu = html`
        <ul>
            ${window.menuItems.map(
                ({page, params, text}) => html`<li><a class="block text-lg pl-3 py-2" onclick=${()=>gotoPage(page, params)}>${text}</a></li>`
            )}
        </ul>
        `;
    }

    var fullHB = html`
    <div class="color-primary drop-shadow-lg">
        <ul class="overflow-hidden py-2.5">
            <li class="inline pl-3">
                <a class="text-lg" onclick=${() => HeaderBar(flag)}>☰</a>
            </li>
            <li class="inline pl-3">
                <a class="text-lg" onclick=${() => newresetAndGoHome()}>EvidenceLedger</a>
            </li>
        </ul>

        ${subMenu}
    
    </div>
          `;
    
    render(header, fullHB)

    return;

}


export function OldHeaderBar() {
    
    let theHtml = html`
<div class="flex justify-between text-xl font-medium color-primary drop-shadow-lg">
    <div class="p-2.5" onclick="${() => resetAndGoHome()}">EvidenceLedger</div>
    <a class="py-2.5 pr-3.5" onclick="${() => toggleMenu()}">☰</a>
</div>

<div class="color-primary pl-2.5 hidden" id="dropMenu">
    ${window.menuItems.map(
        ({page, params, text}) => html`<a class="block font-medium py-0.5" onclick=${()=>gotoPage(page, params)} style="font-size: 16px">${text}</a>`
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

