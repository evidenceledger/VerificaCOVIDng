import{r as s,A as r}from"./AbstractPage.191c35a0.js";import"./app.93789a39.js";s("SWNotify",class extends r{constructor(e){super(e)}enter(e){let a=this.html,t;e&&e.isUpdate?t=T("Application updated"):t=T("Application available");let i=a`
        <div class="container">
            <div class="w3-card-4 w3-center" style="margin-top:100px;">
        
                <header class="w3-container color-primary" style="padding:10px">
                    <h1>${t}</h1>
                </header>
        
                <div class="w3-container ptb-16">
                    <p>${T("There is a new version of the application and it has already been updated.")}</p>
                    <p>${T("Please click Accept to refresh the page.")}</p>
                </div>
        
                <div class="ptb-16">
        
                    <button class="btn-primary" @click=${()=>window.location.reload()}>${T("Accept")}</button>
        
                </div>
        
            </div>
        </div>
        `;this.render(i)}});
