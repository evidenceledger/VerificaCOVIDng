import{A as t,H as a}from"./index.312fe7e0.js";import{h as o}from"./vendor.f8864ac5.js";class d extends t{constructor(r){super("RefreshKeys")}async enter(){await s();let r=o`
        <div class="container">
            <div class="w3-card-4 w3-center" style="margin-top:100px;">
        
                <header class="w3-container color-primary" style="padding:10px">
                    <h1>${T("Verification keys updated")}</h1>
                </header>
                
                <div class="w3-padding-16">
        
                    <button @click=${()=>this.acceptedButton()} class="btn color-secondary hover-color-secondary w3-xlarge w3-round-xlarge">${T("Accept")}</button>
        
                </div>
        
            </div>
        </div>
        `;this.render(r)}async acceptedButton(){a(),goHome()}}async function s(){let e=await fetch("./eu_jwk_keys.json");if(!e.ok){log.myerror("fetch for TL failed");return}window.eu_trusted_keys=await e.json()}window.refreshTrustedKeys=s;export{d as default};
