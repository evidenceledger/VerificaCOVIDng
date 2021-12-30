import{r as o,A as c}from"./AbstractPage.7cdc723e.js";import{l as a}from"./w3full.ca34ba64.js";function m(s){return`${new Date(s).toISOString()}`}o("LogsPage",class extends c{constructor(t){super(t)}enter(){let t=this.html,l=[];for(let e=0;e<a.num_items();e++)l.push(a.item(e));let r=t`<div class="container">
            <h2 class="mb-16 wball">${T("Logs")}</h2>

            <ul>
                ${l.map(({timestamp:e,desc:i},n)=>t`<li class="bb-1 wball">${m(e)}-${i}</li>`)}
            </ul>

        </div>`;this.render(r)}});
