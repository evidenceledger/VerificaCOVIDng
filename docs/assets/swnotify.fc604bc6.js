import{A as r}from"./abstractpage.653c245a.js";import"./index.ebd55170.js";class s extends r{constructor(e){super("SWNotify")}enter(e){let t=this.html,a;e&&e.isUpdate?a=T("Application updated"):a=T("Application available");let i=t`
        <div class="container">
            <div class="w3-card-4 w3-center" style="margin-top:100px;">
        
                <header class="w3-container color-primary" style="padding:10px">
                    <h1>${a}</h1>
                </header>
        
                <div class="w3-container w3-padding-16">
                    <p>${T("There is a new version of the application and it has already been updated.")}</p>
                    <p>${T("Please click Accept to refresh the page.")}</p>
                </div>
        
                <div class="w3-padding-16">
        
                    <button @click=${()=>window.location.reload()} class="btn color-secondary hover-color-secondary w3-xlarge w3-round-xlarge">${T("Accept")}</button>
        
                </div>
        
            </div>
        </div>
        `;this.render(i)}}new s;export{s as default};
