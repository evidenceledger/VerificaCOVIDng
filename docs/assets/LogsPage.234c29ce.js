import{r as o,A as n}from"./AbstractPage.191c35a0.js";import{l}from"./app.93789a39.js";function c(s){return`${new Date(s).toISOString()}`}o("LogsPage",class extends n{constructor(t){super(t)}enter(){let t=this.html,a=[];for(let e=0;e<l.num_items();e++)a.push(l.item(e));let r=t`
        <div class="container">
            <h2 class="mb-16 wball">${T("Displaying the technical logs")}</h2>

            <ul>
                ${a.map(({timestamp:e,desc:i},m)=>t`<li class="bb-1 wball">${c(e)}-${i}</li>`)}
            </ul>

        </div>`;this.render(r)}});
