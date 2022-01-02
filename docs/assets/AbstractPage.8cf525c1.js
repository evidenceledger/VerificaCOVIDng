var F=Object.defineProperty;var _=(a,e,i)=>e in a?F(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i;var g=(a,e,i)=>(_(a,typeof e!="symbol"?e+"":e,i),i);import{r as j,a as H,g as S}from"./app.88a6da70.js";var E=a=>({get:e=>a.get(e),set:(e,i)=>(a.set(e,i),i)});const w=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,G=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,Z=/<[a-z][^>]+$/i,W=/>[^<>]*$/,B=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/ig,K=/\s+$/,D=(a,e)=>0<e--&&(Z.test(a[e])||!W.test(a[e])&&D(a,e)),Y=(a,e,i)=>G.test(e)?a:`<${e}${i.replace(K,"")}></${e}>`;var J=(a,e,i)=>{const t=[],{length:s}=a;for(let c=1;c<s;c++){const l=a[c-1];t.push(w.test(l)&&D(a,c)?l.replace(w,(o,r,d)=>`${e}${c-1}=${d||'"'}${r}${d?"":'"'}`):`${l}<!--${e}${c-1}-->`)}t.push(a[s-1]);const n=t.join("").trim();return i?n:n.replace(B,Y)};const{isArray:A}=Array,{indexOf:X,slice:k}=[],ee=1,L=111,ae=({firstChild:a,lastChild:e})=>{const i=document.createRange();return i.setStartAfter(a),i.setEndAfter(e),i.deleteContents(),a},ie=(a,e)=>a.nodeType===L?1/e<0?e?ae(a):a.lastChild:e?a.valueOf():a.firstChild:a,te=a=>{const{childNodes:e}=a,{length:i}=e;if(i<2)return i?e[0]:a;const t=k.call(e,0),s=t[0],n=t[i-1];return{ELEMENT_NODE:ee,nodeType:L,firstChild:s,lastChild:n,valueOf(){if(e.length!==i){let c=0;for(;c<i;)a.appendChild(t[c++])}return a}}};var ne=(a,e,i,t,s)=>{const n=i.length;let c=e.length,l=n,o=0,r=0,d=null;for(;o<c||r<l;)if(c===o){const u=l<n?r?t(i[r-1],-0).nextSibling:t(i[l-r],0):s;for(;r<l;)a.insertBefore(t(i[r++],1),u)}else if(l===r)for(;o<c;)(!d||!d.has(e[o]))&&a.removeChild(t(e[o],-1)),o++;else if(e[o]===i[r])o++,r++;else if(e[c-1]===i[l-1])c--,l--;else if(e[o]===i[l-1]&&i[r]===e[c-1]){const u=t(e[--c],-1).nextSibling;a.insertBefore(t(i[r++],1),t(e[o++],-1).nextSibling),a.insertBefore(t(i[--l],1),u),e[c]=i[l]}else{if(!d){d=new Map;let u=r;for(;u<l;)d.set(i[u],u++)}if(d.has(e[o])){const u=d.get(e[o]);if(r<u&&u<l){let m=o,q=1;for(;++m<c&&m<l&&d.get(e[m])===u+q;)q++;if(q>u-r){const M=t(e[o],0);for(;r<u;)a.insertBefore(t(i[r++],1),M)}else a.replaceChild(t(i[r++],1),t(e[o++],-1))}else o++}else a.removeChild(t(e[o++],-1))}return i};const re=a=>e=>{for(const i in e){const t=i==="role"?i:`aria-${i}`,s=e[i];s==null?a.removeAttribute(t):a.setAttribute(t,s)}},se=(a,e)=>{let i,t=!0;const s=document.createAttributeNS(null,e);return n=>{i!==n&&(i=n,i==null?t||(a.removeAttributeNode(s),t=!0):(s.value=n,t&&(a.setAttributeNodeNS(s),t=!1)))}},oe=(a,e,i)=>t=>{i!==!!t&&((i=!!t)?a.setAttribute(e,""):a.removeAttribute(e))},ce=({dataset:a})=>e=>{for(const i in e){const t=e[i];t==null?delete a[i]:a[i]=t}},$=(a,e)=>{let i,t=e.slice(2);return!(e in a)&&e.toLowerCase()in a&&(t=t.toLowerCase()),s=>{const n=A(s)?s:[s,!1];i!==n[0]&&(i&&a.removeEventListener(t,i,n[1]),(i=n[0])&&a.addEventListener(t,i,n[1]))}},le=a=>{let e;return i=>{e!==i&&(e=i,typeof i=="function"?i(a):i.current=a)}},de=(a,e)=>e==="dataset"?ce(a):i=>{a[e]=i},ue=a=>{let e;return i=>{e!=i&&(e=i,a.textContent=i==null?"":i)}},me=({childNodes:a},e)=>a[e],f=(a,e,i)=>ne(a.parentNode,e,i,ie,a),fe=a=>{let e,i,t=[];const s=n=>{switch(typeof n){case"string":case"number":case"boolean":e!==n&&(e=n,i||(i=document.createTextNode("")),i.data=n,t=f(a,t,[i]));break;case"object":case"undefined":if(n==null){e!=n&&(e=n,t=f(a,t,[]));break}if(A(n)){e=n,n.length===0?t=f(a,t,[]):typeof n[0]=="object"?t=f(a,t,n):s(String(n));break}e!==n&&"ELEMENT_NODE"in n&&(e=n,t=f(a,t,n.nodeType===11?k.call(n.childNodes):[n]));break;case"function":s(n(a));break}};return s},pe=(a,e)=>{switch(e[0]){case"?":return oe(a,e.slice(1),!1);case".":return de(a,e.slice(1));case"@":return $(a,"on"+e.slice(1));case"o":if(e[1]==="n")return $(a,e)}switch(e){case"ref":return le(a);case"aria":return re(a)}return se(a,e)};function ve(a){const{type:e,path:i}=a,t=i.reduceRight(me,this);return e==="node"?fe(t):e==="attr"?pe(t,a.name):ue(t)}/*! (c) Andrea Giammarchi - ISC */var Q=function(a){var e="fragment",i="template",t="content"in c(i),s=t?function(o){var r=c(i);return r.innerHTML=o,r.content}:function(o){var r=c(e),d=c(i),u=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(o)){var m=RegExp.$1;d.innerHTML="<table>"+o+"</table>",u=d.querySelectorAll(m)}else d.innerHTML=o,u=d.childNodes;return n(r,u),r};return function(r,d){return(d==="svg"?l:s)(r)};function n(o,r){for(var d=r.length;d--;)o.appendChild(r[0])}function c(o){return o===e?a.createDocumentFragment():a.createElementNS("http://www.w3.org/1999/xhtml",o)}function l(o){var r=c(e),d=c("div");return d.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+o+"</svg>",n(r,d.firstChild.childNodes),r}}(document);const N=document.importNode.length!=1,ge=N?(a,e,i)=>document.importNode(Q(a,e,i),!0):Q,he=N?a=>document.createTreeWalker(a,1|128,null,!1):a=>document.createTreeWalker(a,1|128),z=a=>{const e=[];let{parentNode:i}=a;for(;i;)e.push(X.call(i.childNodes,a)),a=i,i=a.parentNode;return e},p="is\xB5",V=E(new WeakMap),be=/^(?:plaintext|script|style|textarea|title|xmp)$/i,v=()=>({stack:[],entry:null,wire:null}),Ce=(a,e)=>{const{content:i,updates:t}=Ee(a,e);return{type:a,template:e,content:i,updates:t,wire:null}},qe=(a,e)=>{const i=J(e,p,a==="svg"),t=ge(i,a),s=he(t),n=[],c=e.length-1;let l=0,o=`${p}${l}`;for(;l<c;){const r=s.nextNode();if(!r)throw`bad template: ${i}`;if(r.nodeType===8)r.data===o&&(n.push({type:"node",path:z(r)}),o=`${p}${++l}`);else{for(;r.hasAttribute(o);)n.push({type:"attr",path:z(r),name:r.getAttribute(o)}),r.removeAttribute(o),o=`${p}${++l}`;be.test(r.tagName)&&r.textContent.trim()===`<!--${o}-->`&&(r.textContent="",n.push({type:"text",path:z(r)}),o=`${p}${++l}`)}}return{content:t,nodes:n}},Ee=(a,e)=>{const{content:i,nodes:t}=V.get(e)||V.set(e,qe(a,e)),s=document.importNode(i,!0),n=t.map(ve,s);return{content:s,updates:n}},h=(a,{type:e,template:i,values:t})=>{const{length:s}=t;R(a,t,s);let{entry:n}=a;(!n||n.template!==i||n.type!==e)&&(a.entry=n=Ce(e,i));const{content:c,updates:l,wire:o}=n;for(let r=0;r<s;r++)l[r](t[r]);return o||(n.wire=te(c))},R=({stack:a},e,i)=>{for(let t=0;t<i;t++){const s=e[t];s instanceof I?e[t]=h(a[t]||(a[t]=v()),s):A(s)?R(a[t]||(a[t]=v()),s,s.length):a[t]=null}i<a.length&&a.splice(i)};function I(a,e,i){this.type=a,this.template=e,this.values=i}const{create:Ae,defineProperties:ze}=Object,x=a=>{const e=E(new WeakMap),i=t=>(s,...n)=>h(t,{type:a,template:s,values:n});return ze((t,...s)=>new I(a,t,s),{for:{value(t,s){const n=e.get(t)||e.set(t,Ae(null));return n[s]||(n[s]=i(v()))}},node:{value:(t,...s)=>h(v(),{type:a,template:t,values:s}).valueOf()}})},P=E(new WeakMap),y=(a,e)=>{const i=typeof e=="function"?e():e,t=P.get(a)||P.set(a,v()),s=i instanceof I?h(t,i):i;return s!==t.wire&&(t.wire=s,a.textContent="",a.appendChild(s.valueOf())),a},b=x("html");x("svg");function Ie(a,e){console.log("Trying to go to page",a,"with params",e),window.gotoPage&&window.gotoPage(a,e)}var ye=b`
<div class="flex justify-between text-xl font-medium color-primary drop-shadow-lg">
    <div class="p-2.5" onclick="${()=>T()}">EvidenceLedger</div>
    <a class="py-2.5 pr-3.5" onclick="${()=>C(!1)}">☰</a>
</div>

<div class="color-primary pl-2.5" id="dropMenu">
    ${window.menuItems.map(({page:a,params:e,text:i})=>b`<a class="block font-medium py-0.5" onclick=${()=>Ie(a,e)} style="font-size: 16px">${i}</a>`)}
</div>
      `,Se=b`
<div class="flex justify-between text-xl font-medium color-primary drop-shadow-lg">
    <div class="p-2.5" onclick="${()=>T()}">EvidenceLedger</div>
    <a class="py-2.5 pr-3.5" onclick="${()=>C(!0)}">☰</a>
</div>
      `;function T(a){C(),window.goHome&&goHome()}function C(a=!1){let e=document.querySelector("header");e.innerHTML="",a?y(e,ye):y(e,Se)}var we={$intro01:{en:"This application allows the verification of COVID certificates issued by EU Member States and also certificates issued by the UK Government with the same format as the EU Digital COVID Certificate",es:"Esta aplicaci\xF3n permite la verificaci\xF3n de certificados COVID emitidos por los Estados Miembro de la UE y tambi\xE9n los certificados emitidos por el Reino Unido con el mismo formato que el Certificado COVID Digital de la UE",ca:"Aquesta aplicaci\xF3 permet la verificaci\xF3 dels certificats COVID emesos pels Estats membres de la UE i tamb\xE9 els certificats emesos pel Regne Unit en el mateix format que el Certificat COVID digital de la UE",fr:"Cette application permet de v\xE9rifier les certificats COVID \xE9mis par les \xC9tats membres de l'UE, ainsi que les certificats \xE9mis par le gouvernement britannique sous le m\xEAme format que le certificat COVID num\xE9rique de l'UE.",de:"Diese Anwendung erm\xF6glicht die \xDCberpr\xFCfung von COVID-Zertifikaten, die von EU-Mitgliedstaaten ausgestellt wurden, sowie von Zertifikaten, die von der britischen Regierung ausgestellt wurden und dasselbe Format wie das digitale COVID-Zertifikat der EU haben.",it:"Questa applicazione consente di verificare i certificati COVID rilasciati dagli stati membri dell'UE nonch\xE9 i certificati rilasciati dal governo del Regno Unito con lo stesso formato del certificato digitale COVID UE"},"EU Digital COVID Credential Verifier":{es:"Verificador de Credenciales COVID",ca:"Verificador de Credencials COVID",fr:"Outil de v\xE9rification num\xE9rique des justificatifs COVID de l'UE",de:"Digitale COVID-Anmeldeinformations\xFCberpr\xFCfung in der EU",it:"Strumento di verifica del certificato digitale COVID UE"},"Start verifying":{es:"Comenzar a verificar",ca:"Comen\xE7a a verificar",fr:"Commencer la v\xE9rification",de:"\xDCberpr\xFCfung beginnen",it:"Avvia la verifica"},"Verify another":{es:"Verificar otro",ca:"Verificar-ne un altre",fr:"Nouveau Scan",de:"Ein weiteres \xFCberpr\xFCfen",it:"Verifica un altro documento"},"Privacy policy":{es:"Pol\xEDtica de privacidad",ca:"Pol\xEDtica de privacitat",fr:"Politique de confidentialit\xE9",de:"Datenschutzbestimmungen",it:"Informativa sulla privacy"},"Terms & Conditions":{es:"T\xE9rminos y condiciones",ca:"Termes d'\xFAs",fr:"Conditions g\xE9n\xE9rales",de:"Allgemeine Gesch\xE4ftsbedingungen",it:"Condizioni d'uso"},"This website does not use cookies":{es:"Este sitio web no usa cookies"},Camera:{es:"C\xE1mara",ca:"C\xE0mera",fr:"Cam\xE9ra",de:"Kamera",it:"Camera"},Language:{es:"Idioma",ca:"Idioma",fr:"Langue",de:"Sprache",it:"Lingua"},"Update public keys":{es:"Actualizar claves p\xFAblicas",ca:"Actualitza claus p\xFAbliques",fr:"Mise \xE0 jour des cl\xE9s publiques",de:"\xD6ffentliche Schl\xFCssel aktualisieren",it:"Aggiorna chiavi pubbliche"},"Easy & Secure":{es:"F\xE1cil y Seguro",ca:"F\xE0cil i Segur",fr:"Simple et s\xE9curis\xE9",de:"Einfach und sicher",it:"Facile e sicuro"},"We don't save data":{es:"No guardamos ning\xFAn dato",ca:"No emmagatzemem cap dada",fr:"Nous ne conservons pas les donn\xE9es",de:"Wir speichern keine Daten",it:"I dati non vengono memorizzati"},"No installs":{es:"Sin instalaci\xF3n",ca:"Sense instal\xB7laci\xF3",fr:"Pas d'installation n\xE9cessaire",de:"Keine Installationen",it:"No installazioni"},"Free of cookies":{es:"Libre de cookies",ca:"Sense cookies",fr:"Sans cookie",de:"Frei von Cookies",it:"Senza cookie"},$callus:{en:"If you are a public or private organization and want more information about this or similar solutions from Evidence Ledger, you can contact us via email",es:"Si usted es una entidad p\xFAblica o privada y desea m\xE1s informaci\xF3n sobre esta soluci\xF3n o similares de Evidence Ledger, puede contactarnos via email",ca:"Si ets una entitat p\xFAblica o privada i vols m\xE9s informaci\xF3 sobre aquesta soluci\xF3 o similars Evidence Ledger, pots contactar amb nosaltres per correu electr\xF2nic",fr:"Si vous \xEAtes une organisation publique ou une entreprise priv\xE9e et que vous souhaitez en savoir plus sur cette solution ou d'autres solutions similaires d'Evidence Ledger, vous pouvez nous contacter par e-mail.",de:"Wenn Sie eine \xF6ffentliche oder private Organisation sind und weitere Informationen \xFCber diese oder \xE4hnliche L\xF6sungen von Evidence Ledger w\xFCnschen, k\xF6nnen Sie uns per E-Mail kontaktieren.",it:"Che rappresentiate organizzazioni pubbliche o private, non esitate a contattarci per maggiori informazioni su questa o altre soluzioni fornite da Evidence Ledger."},"Application updated":{es:"Aplicaci\xF3n actualizada",ca:"Aplicaci\xF3 actualitzada",fr:"Application mise \xE0 jour",de:"Anwendung aktualisiert",it:"L'applicazione \xE8 stata aggiornata"},"There is a new version of the application and it has already been updated.":{es:"Se ha actualizado con una nueva versi\xF3n de la aplicaci\xF3n.",ca:"Actualitzat amb una nova versi\xF3 de l'aplicaci\xF3.",fr:"Il existe une nouvelle version de l'application et elle a d\xE9j\xE0 \xE9t\xE9 mise \xE0 jour.",de:"Es gibt eine neue Version der Anwendung und sie ist bereits aktualisiert worden.",it:"Una nuova versione dell'applicazione \xE8 disponibile ed \xE8 gi\xE0 stata aggiornata."},"Please click Accept to refresh the page.":{es:"Por favor presione Aceptar para refrescar la p\xE1gina",ca:"Premeu Acceptar per actualitzar la p\xE0gina",fr:"Veuillez cliquer sur Accepter pour rafra\xEEchir la page.",de:"Bitte klicken Sie auf Akzeptieren, um die Seite zu aktualisieren.",it:"Fare click su Accetta per aggiornare la pagina."},"Verification keys updated":{es:"Claves de verificaci\xF3n actualizadas",ca:"Claus de verificaci\xF3 actualitzades",fr:"Cl\xE9s de v\xE9rification mises \xE0 jour",de:"Verifizierungsschl\xFCssel aktualisiert",it:"Chiavi di verifica aggiornate"},Accept:{es:"Aceptar",ca:"Acceptar",fr:"Accepter",de:"Akzeptieren",it:"Accetta"},"Certificate is expired.":{es:"El certificado est\xE1 expirado.",ca:"El certificat ha caducat.",fr:"Le certificat a expir\xE9",de:"Zertifikat ist abgelaufen",it:"Il certificato \xE8 scaduto"},"Vaccination not completed.":{es:"Pauta de vacunaci\xF3n no completada.",ca:"El calendari de vacunaci\xF3 no s'ha completat.",fr:"La vaccination n'est pas complete.",de:"Impfung nicht abgeschlossen",it:"Vaccinazione non completata"},"Certificate is not yet valid as vaccination is too recent.":{es:"Certificado no v\xE1lido porque la vacunaci\xF3n es demasiado reciente.",ca:"Certificat no v\xE0lid perqu\xE8 la vacunaci\xF3 \xE9s massa recent."},"Signature validation failed. The certificate is not valid.":{es:"Error en verificaci\xF3n de firma. Certificado inv\xE1lido",ca:"Signature validation failed. The certificate is not valid.",fr:"La validation de la signature a \xE9chou\xE9. Le certificat n'est pas valable.",de:"Signatur\xFCberpr\xFCfung fehlgeschlagen. Das Zertifikat ist ung\xFCltig.",it:"La verifica della firma non \xE8 andata a buon fine. Il certificato non risulta valido."},$warningmsg:{en:"The certificate is not valid for travel, even if it is correctly signed with a PRE key.",es:"El certificado no es v\xE1lido para viajar, aunque est\xE1 correctamente firmado con una clave de PRE.",ca:"El certificat no \xE9s v\xE0lid per viatjar tot i que est\xE0 correctament signat amb una clau de PRE.",fr:"Le certificat n'est pas valable pour voyager, m\xEAme s'il est sign\xE9 en bonne et due forme avec une cl\xE9 pr\xE9-partag\xE9e.",de:"Das Zertifikat ist f\xFCr Reisen ung\xFCltig, auch wenn es korrekt mit einem PRE-Schl\xFCssel signiert ist.",it:"Il certificato non risulta valido per viaggiare, sebbene sia stato firmato correttamente con la chiave PRE."},Validated:{es:"Validado",ca:"Validat",fr:"Valid\xE9",de:"Validiert",it:"Verificato con successo"},Warning:{es:"Atenci\xF3n",ca:"Atenci\xF3",fr:"Attention",de:"Warnung",it:"Attenzione!"},"Not Validated":{es:"No Validado",ca:"No Validat",fr:"Non Valid\xE9",de:"Nicht Validiert",it:"Non Validato"},"The certificate is valid.":{es:"El certificado es v\xE1lido",ca:"El certificat \xE9s v\xE0lid",fr:"Le certificat est valable.",de:"Das Zertifikat ist g\xFCltig.",it:"Il certificato \xE8 valido."},"EU DIGITAL COVID CERTIFICATE":{es:"CERTIFICADO COVID DIGITAL DE LA EU",ca:"CERTIFICAT COVID DIGITAL DE LA EU",fr:"CERTIFICAT NUM\xC9RIQUE COVID DE L'UE",de:"EU DIGITALES COVID ZERTIFIKAT",it:"CERTIFICATO DIGITALE COVID UE"},Vaccination:{es:"Vacunaci\xF3n",ca:"Vacunaci\xF3",fr:"Vaccination",de:"Impfung",it:"Vaccino"},"Surname and forename":{es:"Apellidos y Nombre",ca:"Cognoms i nom",fr:"Nom et pr\xE9nom",de:"Nachname und Vorname",it:"Cognome e nome"},"Date of birth":{es:"Fecha de nacimiento",ca:"Data de naixement",fr:"Date de naissance",de:"Geburtsdatum",it:"Data di nascita"},"Certificate identifier":{es:"Identificador del certificado",ca:"Identificador del certificat",fr:"Identifiant du certificat",de:"Kennung des Zertifikats",it:"Numero di identificazione del certificato"},"Certificate issuer":{es:"Emisor del certificado",ca:"Emissor del certificat",fr:"\xC9metteur du certificat",de:"Zertifikatsaussteller",it:"Ente che ha rilasciato il certificato"},"Disease targeted":{es:"Enfermedad que se previene",ca:"Malaltia que prev\xE9",fr:"Maladie cibl\xE9e",de:"Zielgerichtete Krankheit",it:"Patologia"},"Vaccine/prophylaxis":{es:"Tipo de vacuna",ca:"Tipus de vacuna",fr:"Vaccin/prophylaxie",de:"Impfung/Prophylaxe",it:"Vaccino/profilassi"},"Vaccine medicinal product":{es:"Vacuna administrada",ca:"Vacuna administrada",fr:"M\xE9dicament vaccinal",de:"Impfstoff-Medizinprodukt",it:"Prodotto medico per la vaccinazione"},Manufacturer:{es:"Fabricante",ca:"Fabricant",fr:"Fabricant",de:"Hersteller",it:"Produttore"},"Dose number/Total doses":{es:"N\xFAmero de dosis/Total",ca:"N\xFAmero dosi/Total",fr:"Nombre de doses/Doses totales",de:"Anzahl der Dosen/Gesamtdosen",it:"Numero di dosi/Dosi totali"},"Date of vaccination":{es:"Fecha de vacunaci\xF3n",ca:"Data de vacunaci\xF3",fr:"Date de la vaccination",de:"Datum der Impfung",it:"Data della vaccinazione"},"Member State of vaccination":{es:"Estado miembro de la vacunaci\xF3n",ca:"Estat membre de la vacunaci\xF3",fr:"\xC9tat membre o\xF9 a \xE9t\xE9 effectu\xE9e la vaccination",de:"Mitgliedstaat der Impfung",it:"Paese membro in cui \xE8 stata effettuata la vaccinazione"},Help:{es:"Ayuda",ca:"Ajuda",fr:"Aider",de:"Hilfe",it:"Aiuto"},"Frequently asked questions (FAQS)":{es:"Preguntas frecuentes (FAQS)",ca:"Preguntes freq\xFCents (FAQS)",fr:"Preguntes freq\xFCents (FAQS)",de:"Preguntes freq\xFCents (FAQS)",it:"Preguntes freq\xFCents (FAQS)"},$help01:{es:"El objetivo de esta aplicaci\xF3n es verificar la autenticidad y vigencia del Certificado Covid Digital Europeo",ca:"L\u2019objectiu d\u2019aquesta aplicaci\xF3 \xE9s verificar l\u2019autenticitat i vig\xE8ncia del Certificat Covid Digital Europeu.",en:"The purpose of this application is to verify the authenticity and validity of the European Covid Digital Certificate.",fr:"Le but de cette application est de v\xE9rifier l'authenticit\xE9 et la validit\xE9 du certificat num\xE9rique europ\xE9en Covid.",de:"Der Zweck dieses Antrags besteht darin, die Echtheit und G\xFCltigkeit des europ\xE4ischen digitalen Covid-Zertifikats zu \xFCberpr\xFCfen.",it:"Lo scopo di questa applicazione \xE8 verificare l'autenticit\xE0 e la validit\xE0 del Certificato Digitale Europeo Covid."},$help02:{es:"Para verificar el c\xF3digo QR de un certificado ser\xE1 necesario:",ca:"Per verificar el codi QR d'un certificat caldr\xE0:",en:"To verify the QR code of a certificate you will need:",fr:"Pour v\xE9rifier le code QR d'un certificat, vous aurez besoin de:",de:"Um den QR-Code eines Zertifikats zu verifizieren, ben\xF6tigen Sie:",it:"Per verificare il codice QR di un certificato avrai bisogno di:"},$help03:{es:'Permitir el acceso a la c\xE1mara cuando as\xED lo solicite la aplicaci\xF3n "VerificaCovid.cat".',ca:`Permetre l'acc\xE9s a la c\xE0mera quan aix\xED ho sol\xB7liciti l'aplicaci\xF3 "VerificaCovid.cat".`,en:'Allow access to the camera when requested by the "VerificaCovid.cat" application.',fr:`Autoriser l'acc\xE8s \xE0 la cam\xE9ra \xE0 la demande de l'application "VerificaCovid.cat".`,de:'Erlauben Sie den Zugriff auf die Kamera, wenn Sie von der Anwendung "VerificaCovid.cat" angefordert werden.',it:`Consenti l'accesso alla telecamera quando richiesto dall'applicazione "VerificaCovid.cat".`},$help04:{es:"Acercar la c\xE1mara del dispositivo m\xF3vil aproximadamente a 6 cent\xEDmetros del QR de forma que se visualice completamente, bien enfocado y centrado en la pantalla del dispositivo.",ca:"Acostar la c\xE0mera del dispositiu m\xF2bil aproximadament a 6 cent\xEDmetres del QR de tal forma que es visualitzi completament, ben enfocat i centrat a la pantalla del dispositiu.",en:"Move the camera of the mobile device approximately 6 inches from the QR so that it is fully displayed, well focused, and centered on the screen of the device.",fr:"D\xE9placez la cam\xE9ra de l'appareil mobile \xE0 environ 6 pouces du QR afin qu'elle soit enti\xE8rement affich\xE9e, bien focalis\xE9e et centr\xE9e sur l'\xE9cran de l'appareil.",de:"Bewegen Sie die Kamera des Mobilger\xE4ts ungef\xE4hr 15 cm vom QR weg, damit es vollst\xE4ndig angezeigt, gut fokussiert und auf dem Bildschirm des Ger\xE4ts zentriert ist.",it:"Sposta la fotocamera del dispositivo mobile a circa 6 pollici dal QR in modo che sia completamente visualizzata, ben messa a fuoco e centrata sullo schermo del dispositivo."},$help05:{es:"(Atenci\xF3n: la falta de iluminaci\xF3n, el exceso de luz (reflejos), o las vibraciones, pueden impedir una correcta lectura).",ca:"(Atenci\xF3: la manca d'il\xB7luminaci\xF3, l'exc\xE9s de llum (reflexos), o les vibracions, poden impedir una lectura correcta).",en:"(Attention: lack of lighting, excess light (reflections), or vibrations, may prevent a correct reading).",fr:"(Attention : un manque d'\xE9clairage, un exc\xE8s de lumi\xE8re (reflets), ou des vibrations, peuvent emp\xEAcher une lecture correcte).",de:"(Achtung: Fehlende Beleuchtung, zu viel Licht (Reflexionen) oder Vibrationen k\xF6nnen eine korrekte Ablesung verhindern).",it:"(Attenzione: mancanza di illuminazione, luce eccessiva (riflessi), o vibrazioni, possono impedire una corretta lettura)."},$help06:{es:"Informaci\xF3n y confidencialidad",ca:"Informaci\xF3 i confidencialitat",en:"Information and confidentiality",fr:"Informations et confidentialit\xE9",de:"Informationen und Vertraulichkeit",it:"Informazioni e riservatezza"},$help07:{es:"Sus datos est\xE1n protegidos, la aplicaci\xF3n no registra ni comparte los datos verificados.",ca:"Les vostres dades estan protegides, l\u2019aplicaci\xF3 no registra ni comparteix les dades verificades.",en:"Your data is protected, the application does not record or share verified data.",fr:"Vos donn\xE9es sont prot\xE9g\xE9es, l'application n'enregistre ni ne partage les donn\xE9es v\xE9rifi\xE9es.",de:"Ihre Daten sind gesch\xFCtzt, die Anwendung zeichnet keine verifizierten Daten auf oder gibt sie weiter.",it:"I tuoi dati sono protetti, l'applicazione non registra n\xE9 condivide dati verificati."},$help08:{es:"Queda terminantemente prohibido registrar o duplicar, por cualquier medio, los Certificados Covid de otras personas que sean verificados por la aplicaci\xF3n.",ca:"Queda terminantment prohibit enregistrar o duplicar, per qualsevol mitj\xE0, els Certificats Covid d\u2019altres persones que siguin verificats per l\u2019aplicaci\xF3.",en:"It is strictly forbidden to register or duplicate, by any means, the Covid Certificates of other people who are verified by the application.",fr:"Il est strictement interdit d'enregistrer ou de dupliquer, par quelque moyen que ce soit, les Certificats Covid d'autres personnes v\xE9rifi\xE9es par l'application.",de:"Es ist strengstens untersagt, die Covid-Zertifikate anderer Personen, die durch die Anwendung verifiziert werden, auf irgendeine Weise zu registrieren oder zu duplizieren.",it:"\xC8 severamente vietato registrare o duplicare, con qualsiasi mezzo, i Certificati Covid di altre persone verificate dall'applicazione."},$help09:{es:"Se puede encontrar m\xE1s informaci\xF3n en ",ca:"Es pot trobar m\xE9s informaci\xF3 a ",en:"More information can be found at ",fr:"Plus d'informations sont disponibles sur ",de:"Weitere Informationen finden Sie unter ",it:"Maggiori informazioni sono disponibili su "},$help10:{es:"Para cualquier duda puede contactar con la direcci\xF3n de correo: ",ca:"Per qualsevol dubte es pot contactar amb l\u2019adre\xE7a de correu: ",en:"If you have any questions, please contact the e-mail address: ",fr:"Si vous avez des questions, veuillez contacter l'adresse e-mail: ",de:"Bei Fragen wenden Sie sich bitte an die E-Mail-Adresse: ",it:"In caso di domande, contattare l'indirizzo e-mail: "},$faqs_question_1:{ca:"-> Quins navegadors haig d\u2019utilitzar?",es:"-> \xBFQu\xE9 navegadores tengo que usar?",en:"-> Quins navegadors haig d\u2019utilitzar?",fr:"-> Quins navegadors haig d\u2019utilitzar?",de:"-> Quins navegadors haig d\u2019utilitzar?",it:"-> Quins navegadors haig d\u2019utilitzar?"},$faqs_answer_1:{ca:"En la mesura del possible, recomanem que en els m\xF2bils Android s\u2019utilitzi el Google Chrome i en cas de no tenir-lo, el Mozzila FireFox. En cas de tenir un dispositiu IOS, es recomana el Safari.",es:"En la medida de lo posible, se recomienda que los m\xF3viles Android utilicen Google Chrome y en caso de no tenerlo, Mozzila FireFox. En caso de tener un dispositivo IOS, se recomienda Safari.",en:"En la mesura del possible, recomanem que en els m\xF2bils Android, s\u2019utilitzi el Google Chrome i en cas de no tenir-lo, el Mozzila FireFox. En cas de tenir un dispositiu IOS, es recomana el Safari.",fr:"En la mesura del possible, recomanem que en els m\xF2bils Android, s\u2019utilitzi el Google Chrome i en cas de no tenir-lo, el Mozzila FireFox. En cas de tenir un dispositiu IOS, es recomana el Safari.",de:"En la mesura del possible, recomanem que en els m\xF2bils Android, s\u2019utilitzi el Google Chrome i en cas de no tenir-lo, el Mozzila FireFox. En cas de tenir un dispositiu IOS, es recomana el Safari.",it:"En la mesura del possible, recomanem que en els m\xF2bils Android, s\u2019utilitzi el Google Chrome i en cas de no tenir-lo, el Mozzila FireFox. En cas de tenir un dispositiu IOS, es recomana el Safari."},$faqs_question_2:{ca:"-> L\u2019aplicaci\xF3 no funciona, qu\xE8 faig? ",es:"-> La aplicaci\xF3n no funciona, \xBFqu\xE9 hago?",en:"-> L\u2019aplicaci\xF3 no funciona, qu\xE8 faig? ",fr:"-> L\u2019aplicaci\xF3 no funciona, qu\xE8 faig? ",de:"-> L\u2019aplicaci\xF3 no funciona, qu\xE8 faig? ",it:"-> L\u2019aplicaci\xF3 no funciona, qu\xE8 faig? "},$faqs_answer_2:{ca:"Primer de tot, refresca la p\xE0gina web. Una altra opci\xF3 \xE9s tornar a accedir a la URL. ",es:"Ante todo, refresca la p\xE0gina web. Otra opci\xF3n es volver a acceder a la URL",en:"Primer de tot, refresca la p\xE0gina web. Una altra opci\xF3 \xE9s tornar a accedir a la URL.",fr:"Primer de tot, refresca la p\xE0gina web. Una altra opci\xF3 \xE9s tornar a accedir a la URL.",de:"Primer de tot, refresca la p\xE0gina web. Una altra opci\xF3 \xE9s tornar a accedir a la URL.",it:"Primer de tot, refresca la p\xE0gina web. Una altra opci\xF3 \xE9s tornar a accedir a la URL."},$faqs_question_3:{ca:"-> Cal que doni permisos a la c\xE0mera del dispositiu? ",es:"-> \xBFEs necesario dar permisos a la c\xE1mara del dispositivo?",en:"-> Cal que doni permisos a la c\xE0mera del dispositiu? ",fr:"-> Cal que doni permisos a la c\xE0mera del dispositiu? ",de:"-> Cal que doni permisos a la c\xE0mera del dispositiu? ",it:"-> Cal que doni permisos a la c\xE0mera del dispositiu? "},$faqs_answer_3:{ca:"S\xED, aquesta aplicaci\xF3 necessita l\u2019\xFAs de la c\xE0mera per poder validar els QR\u2019s. ",es:"S\xED, esta aplicaci\xF3n necesita el uso de la c\xE1mara para poder validar los QR's.",en:"S\xED, aquesta aplicaci\xF3 necessita l\u2019\xFAs de la c\xE0mera per poder validar els QR\u2019s. ",fr:"S\xED, aquesta aplicaci\xF3 necessita l\u2019\xFAs de la c\xE0mera per poder validar els QR\u2019s. ",de:"S\xED, aquesta aplicaci\xF3 necessita l\u2019\xFAs de la c\xE0mera per poder validar els QR\u2019s. ",it:"S\xED, aquesta aplicaci\xF3 necessita l\u2019\xFAs de la c\xE0mera per poder validar els QR\u2019s. "},$faqs_question_4:{ca:"-> Qu\xE8 faig si no he donat permisos a la c\xE0mera i ja no em torna a sortir el missatge? ",es:"-> \xBFQu\xE9 hago si no he dado permisos a la c\xE1mara y ya no me vuelve a salir el mensaje?",en:"-> Qu\xE8 faig si no he donat permisos a la c\xE0mera i ja no em torna a sortir el missatge? ",fr:"-> Qu\xE8 faig si no he donat permisos a la c\xE0mera i ja no em torna a sortir el missatge? ",de:"-> Qu\xE8 faig si no he donat permisos a la c\xE0mera i ja no em torna a sortir el missatge? ",it:"-> Qu\xE8 faig si no he donat permisos a la c\xE0mera i ja no em torna a sortir el missatge? "},$faqs_answer_4:{ca:"En cas que sense voler hagis denegat els permisos, haur\xE0s de donar-los tu manualment. En aquests links trobar\xE0s com fer-ho: ",es:"En caso de que no hayas dado los permisos, deber\xE1s darlos t\xFA manualmente. En estos links encontrar\xE1s como hacerlo:",en:"En cas que sense voler hagis denegat els permisos, haur\xE0s de donar-los tu manualment. En aquests links trobar\xE0s com fer-ho: ",fr:"En cas que sense voler hagis denegat els permisos, haur\xE0s de donar-los tu manualment. En aquests links trobar\xE0s com fer-ho: ",de:"En cas que sense voler hagis denegat els permisos, haur\xE0s de donar-los tu manualment. En aquests links trobar\xE0s com fer-ho: ",it:"En cas que sense voler hagis denegat els permisos, haur\xE0s de donar-los tu manualment. En aquests links trobar\xE0s com fer-ho: "},$faqs_question_5:{ca:"-> Qu\xE8 passa si no funciona o el certificat \xE9s d\u2019un altre pa\xEDs? ",es:"-> \xBFQu\xE9 pasa si no funciona o el certificado es de otro pa\xEDs?",en:"-> Qu\xE8 passa si no funciona o el certificat \xE9s d\u2019un altre pa\xEDs? ",fr:"-> Qu\xE8 passa si no funciona o el certificat \xE9s d\u2019un altre pa\xEDs? ",de:"-> Qu\xE8 passa si no funciona o el certificat \xE9s d\u2019un altre pa\xEDs? ",it:"-> Qu\xE8 passa si no funciona o el certificat \xE9s d\u2019un altre pa\xEDs? "},$faqs_answer_5:{ca:" VerificaCOVID verifica els certificats COVID emesos pels estats membres de la UE i els certificats emesos pel Regne Unit. Podeu descarregar el certificat des de La Meva Salut",es:"VerificaCovid verifica los certificados COVID emitidos por los estados miembros de la UE y los certificados emitidos por el Reino Unido. Pod\xE9is descargar el certificado desde La Meva Salut",en:"VerificaCOVID verifica els certificats COVID emesos pels estats membres de la UE i els certificats emesos pel Regne Unit. Podeu descarregar el certificat des de La Meva Salut",fr:"VerificaCOVID verifica els certificats COVID emesos pels estats membres de la UE i els certificats emesos pel Regne Unit. Podeu descarregar el certificat des de La Meva Salut",de:"VerificaCOVID verifica els certificats COVID emesos pels estats membres de la UE i els certificats emesos pel Regne Unit. Podeu descarregar el certificat des de La Meva Salut",it:"VerificaCOVID verifica els certificats COVID emesos pels estats membres de la UE i els certificats emesos pel Regne Unit. Podeu descarregar el certificat des de La Meva Salut"},$faqs_answer_5_2:{ca:"o b\xE9 podeu posar-vos en contacte amb el 061, o amb el vostre CAP.",es:"o bien pod\xE9is poneros en contacto con el 061, o con vuestro CAP",en:"o b\xE9 podeu posar-vos en contacte amb el 061, o amb el vostre CAP.",fr:"o b\xE9 podeu posar-vos en contacte amb el 061, o amb el vostre CAP.",de:"o b\xE9 podeu posar-vos en contacte amb el 061, o amb el vostre CAP.",it:"o b\xE9 podeu posar-vos en contacte amb el 061, o amb el vostre CAP."},$faqs_question_6:{ca:"-> He tingut un problema amb l\u2019aplicaci\xF3. Com ho comunico? ",es:"-> He tenido un problema con la aplicaci\xF3n, \xBFc\xF3mo lo comunico?",en:"-> He tingut un problema amb l\u2019aplicaci\xF3. Com ho comunico? ",fr:"-> He tingut un problema amb l\u2019aplicaci\xF3. Com ho comunico? ",de:"-> He tingut un problema amb l\u2019aplicaci\xF3. Com ho comunico? ",it:"-> He tingut un problema amb l\u2019aplicaci\xF3. Com ho comunico? "},$faqs_answer_6:{ca:"Si heu tingut un problema amb el validador, quan reporteu la incid\xE8ncia informeu del model del m\xF2bil, el navegador que esteu utilitzant i una captura de pantalla amb l\u2019error que us mostra. ",es:"Si hab\xE9is tenido un problema con el validador, cuando report\xE9is la incidencia informad del modelo del m\xF3vil, el navegador que est\xE1is utilitzando y una captura de pantalla con el error que os muestra.",en:"Si heu tingut un problema amb el validador, quan reporteu la incid\xE8ncia informeu del model del m\xF2bil, el navegador que esteu utilitzant i una captura de pantalla amb l\u2019error que us mostra. ",fr:"Si heu tingut un problema amb el validador, quan reporteu la incid\xE8ncia informeu del model del m\xF2bil, el navegador que esteu utilitzant i una captura de pantalla amb l\u2019error que us mostra. ",de:"Si heu tingut un problema amb el validador, quan reporteu la incid\xE8ncia informeu del model del m\xF2bil, el navegador que esteu utilitzant i una captura de pantalla amb l\u2019error que us mostra. ",it:"Si heu tingut un problema amb el validador, quan reporteu la incid\xE8ncia informeu del model del m\xF2bil, el navegador que esteu utilitzant i una captura de pantalla amb l\u2019error que us mostra. "},$faqs_question_7:{ca:"-> He validat un QR i m\u2019ha donat error amb el seg\xFCent missatge: \u201CCertificat no v\xE0lid perqu\xE8 la vacunaci\xF3 \xE9s massa recent\u201D. Qu\xE8 vol dir? ",es:"-> He validado un QR y me ha dado error con el siguiente mensaje: \u201CCertificado no v\xE1lido porque la vacunaci\xF3n es demasiado reciente\u201D. \xBFQu\xE9 quiere decir?",en:"-> He validat un QR i m\u2019ha donat error amb el seg\xFCent missatge: \u201CCertificat no v\xE0lid perqu\xE8 la vacunaci\xF3 \xE9s massa recent\u201D. Qu\xE8 vol dir? ",fr:"-> He validat un QR i m\u2019ha donat error amb el seg\xFCent missatge: \u201CCertificat no v\xE0lid perqu\xE8 la vacunaci\xF3 \xE9s massa recent\u201D. Qu\xE8 vol dir? ",de:"-> He validat un QR i m\u2019ha donat error amb el seg\xFCent missatge: \u201CCertificat no v\xE0lid perqu\xE8 la vacunaci\xF3 \xE9s massa recent\u201D. Qu\xE8 vol dir? ",it:"-> He validat un QR i m\u2019ha donat error amb el seg\xFCent missatge: \u201CCertificat no v\xE0lid perqu\xE8 la vacunaci\xF3 \xE9s massa recent\u201D. Qu\xE8 vol dir? "},$faqs_answer_7:{ca:"Actualment, segons la normativa vigent, han de passar 14 dies des de l\u2019\xFAltima dosi.",es:"Actualemente, seg\xFAn la normativa vigente, han de pasar 14 d\xEDas desde la \xFAltima dosis.",en:"Actualment, segons la normativa vigent, han de passar 14 dies des de l\u2019\xFAltima dosi.",fr:"Actualment, segons la normativa vigent, han de passar 14 dies des de l\u2019\xFAltima dosi.",de:"Actualment, segons la normativa vigent, han de passar 14 dies des de l\u2019\xFAltima dosi.",it:"Actualment, segons la normativa vigent, han de passar 14 dies des de l\u2019\xFAltima dosi."},$faqs_answer_7_2:{ca:"Aix\xF2, no obstant, no passa amb la segona (2/2) i tercera dosi (3/3), ja que des del moment que es posa la vacuna el certificat \xE9s v\xE0lid.",es:"Esto, en cambio, no sucede con la segunda y la tercera dosi (3/3), ya que desde el momento que se pone la vacuna el certificado es v\xE1lido.",en:"Aix\xF2, no obstant, no passa amb la segona (2/2) i tercera dosi (3/3), ja que des del moment que es posa la vacuna el certificat \xE9s v\xE0lid.",fr:"Aix\xF2, no obstant, no passa amb la segona (2/2) i tercera dosi (3/3), ja que des del moment que es posa la vacuna el certificat \xE9s v\xE0lid.",de:"Aix\xF2, no obstant, no passa amb la segona (2/2) i tercera dosi (3/3), ja que des del moment que es posa la vacuna el certificat \xE9s v\xE0lid.",it:"Aix\xF2, no obstant, no passa amb la segona (2/2) i tercera dosi (3/3), ja que des del moment que es posa la vacuna el certificat \xE9s v\xE0lid."},$faqs_question_8:{ca:"-> Quan valido algun QR, es guarden dades en el m\xF2bil o s\u2019envien dades a algun lloc? ",es:"-> Cuando valido un QR, \xBFse guardan datos en el m\xF3vil o se env\xEDan datos a alg\xFAn sitio?",en:"-> Quan valido algun QR, es guarden dades en el m\xF2bil o s\u2019envien dades a algun lloc? ",fr:"-> Quan valido algun QR, es guarden dades en el m\xF2bil o s\u2019envien dades a algun lloc? ",de:"-> Quan valido algun QR, es guarden dades en el m\xF2bil o s\u2019envien dades a algun lloc? ",it:"-> Quan valido algun QR, es guarden dades en el m\xF2bil o s\u2019envien dades a algun lloc? "},$faqs_answer_8:{ca:"No. No es guarda ni s\u2019envia cap tipus de dades. Nom\xE9s es mostren moment\xE0niament per pantalla. ",es:"No. No se guarda ni se env\xEDa ning\xFAn tipo de datos. S\xF3lo se muestran moment\xE1neamente por pantalla.",en:"No. No es guarda ni s\u2019envia cap tipus de dades. Nom\xE9s es mostren moment\xE0niament per pantalla. ",fr:"No. No es guarda ni s\u2019envia cap tipus de dades. Nom\xE9s es mostren moment\xE0niament per pantalla. ",de:"No. No es guarda ni s\u2019envia cap tipus de dades. Nom\xE9s es mostren moment\xE0niament per pantalla. ",it:"No. No es guarda ni s\u2019envia cap tipus de dades. Nom\xE9s es mostren moment\xE0niament per pantalla. "}},O="ca";let U=localStorage.getItem("preferredLanguage");U&&(O=U);window.preferredLanguage=O;function De(a){if(window.preferredLanguage==="en"&&a.charAt(0)!="$")return a;let e=we[a];if(e===void 0)return a;let i=e[window.preferredLanguage];return i===void 0?a:i}window.T=De;class $e{constructor(e){g(this,"html");g(this,"domElem");g(this,"pageName");if(!e)throw"A page name is needed";this.html=b,this.domElem=document.createElement("div"),this.pageName=e,this.domElem.id=this.pageName,j(this.pageName,this),this.domElem.style.display="none";var i=document.querySelector("main");i.appendChild(this.domElem),console.log("Page constructor:",e)}async goHome(){await H()}async gotoPage(e,i){await S(e,i)}static async gotoPageStatic(e,i){await S(e,i)}render(e){this.domElem.style.display="block",C(),y(this.domElem,e)}}function Qe(a,e){new e(a)}export{$e as A,b as h,Qe as r};
