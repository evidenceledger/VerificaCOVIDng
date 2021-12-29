import{r as s,A as i}from"./AbstractPage.d25cfa01.js";import"./w3full.df12da0f.js";s("SWNotify",class extends i{constructor(e){super(e)}enter(e){let a=this.html,t;e&&e.isUpdate?t=T("Application updated"):t=T("Application available");let r=a`
        <div class="container">
            <div class="w3-card-4 w3-center" style="margin-top:100px;">
        
                <header class="w3-container color-primary" style="padding:10px">
                    <h1>${t}</h1>
                </header>
        
                <div class="w3-container pd-16">
                    <p>${T("There is a new version of the application and it has already been updated.")}</p>
                    <p>${T("Please click Accept to refresh the page.")}</p>
                </div>
        
                <div class="pd-16">
        
                    <button @click=${()=>window.location.reload()} class="btn color-secondary hover-color-secondary w3-xlarge w3-round-xlarge">${T("Accept")}</button>
        
                </div>
        
            </div>
        </div>
        `;this.render(r)}});
