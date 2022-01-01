import{r as o,A as n}from"./AbstractPage.91f3c767.js";import{l as a}from"./app.dd500ff7.js";function c(s){return`${new Date(s).toISOString()}`}o("LogsPage",class extends n{constructor(t){super(t)}enter(){let t=this.html,l=[];for(let e=0;e<a.num_items();e++)l.push(a.item(e));let r=t`
        <div class="container">
            <h2 class="mb-16 wball">${T("Displaying the technical logs")}</h2>

            <ul>
                ${l.map(({timestamp:e,desc:i},m)=>t`<li class="bb-1 wball">${c(e)}-${i}</li>`)}
            </ul>

        </div>`;this.render(r)}});
