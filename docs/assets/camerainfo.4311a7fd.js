function r(){const i=window.navigator.userAgent;let e=null;const n=(/iPad|iPhone|iPod/.test(i)||/Mac|Mac OS|MacIntel/gi.test(i)&&(navigator.maxTouchPoints>1||"ontouchend"in document))&&!window.MSStream;return/Macintosh|Mac|Mac OS|MacIntel|MacPPC|Mac68K/gi.test(i)?e="Mac OS":n?e="iOS":/'Win32|Win64|Windows|Windows NT|WinCE/gi.test(i)?e="Windows":/Android/gi.test(i)?e="Android":/Linux/gi.test(i)&&(e="Linux"),e}console.log(r());async function o(){if(!navigator.mediaDevices||!navigator.mediaDevices.enumerateDevices){console.log("enumerateDevices() not supported.");return}let i=await navigator.mediaDevices.enumerateDevices(),e=i.filter(t=>t.kind==="videoinput");if(console.log(e),e.length==0)return;if(!e.every(t=>t.label===""))return e;let a;try{a=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1}),i=await navigator.mediaDevices.enumerateDevices(),e=i.filter(t=>t.kind==="videoinput")}catch{console.log("Probably the user did not authorise request")}finally{a!==void 0&&a.getVideoTracks().forEach(t=>{t.stop()})}return e}async function d(){let i={defaultPreferredCamera:void 0,videoDevices:[]},e=await o();if(!e)return i;let n;return r()=="Android"&&(n=e[e.length-1]),{defaultPreferredCamera:n,videoDevices:e}}export{d as a,r as g};
