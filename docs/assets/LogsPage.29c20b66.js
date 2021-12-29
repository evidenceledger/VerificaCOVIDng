import{r as o,A as m}from"./AbstractPage.d25cfa01.js";import{l as a}from"./w3full.df12da0f.js";function n(s){return`${new Date(s).toISOString()}`}o("LogsPage",class extends m{constructor(t){super(t)}enter(){let t=this.html,l=[];for(let e=0;e<a.num_items();e++)l.push(a.item(e));let r=t`<div class="container">
            <h2 class="mb-16 wball">${T("Logs")}</h2>

            <ul>
                ${l.map(({timestamp:e,desc:i},c)=>t`<li class="bb-1 wball">${n(e)}-${i}</li>`)}
            </ul>

        </div>`;this.render(r)}});
