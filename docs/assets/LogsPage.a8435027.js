import{r as o,A as c}from"./AbstractPage.a64ace8c.js";import{l}from"./app.4558eb5e.js";function n(s){return`${new Date(s).toISOString()}`}o("LogsPage",class extends c{constructor(t){super(t)}enter(){let t=this.html,a=[];for(let e=0;e<l.num_items();e++)a.push(l.item(e));let r=t`
        <div class="container">
            <h2 class="mb-16 wball">${T("Displaying the technical logs")}</h2>

            <ul>
                ${a.map(({timestamp:e,desc:i},m)=>t`<li class="bb-1 wball">${n(e)}-${i}</li>`)}
            </ul>

        </div>`;this.render(r)}});
