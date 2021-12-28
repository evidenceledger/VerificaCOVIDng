import{r as o,A as m}from"./AbstractPage.2d6cb208.js";import{l as a}from"./w3full.5148bcf4.js";function c(s){return`${new Date(s).toISOString()}`}o("LogsPage",class extends m{constructor(t){super(t)}enter(){let t=this.html,l=[];for(let e=0;e<a.num_items();e++)l.push(a.item(e));let r=t`<div class="container">
            <h2 class="mb-16 wball">${T("Logs")}</h2>

            <ul>
                ${l.map(({timestamp:e,desc:i},n)=>t`<li class="bb-1 wball">${c(e)}-${i}</li>`)}
            </ul>

        </div>`;this.render(r)}});
