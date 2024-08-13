(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>y});var o=t(601),r=t.n(o),i=t(314),a=t.n(i),c=t(417),l=t.n(c),d=new URL(t(134),t.b),s=new URL(t(109),t.b),p=new URL(t(735),t.b),u=a()(r()),m=l()(d),g=l()(s),f=l()(p);u.push([n.id,`/* colors:: https://coolors.co/e8f1f2-15b097-513c2c-28190e-044389 */\n\n@font-face {\n    font-family: 'RobotoBold';\n    src: url(${m}) format('truetype');\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url(${g}) format('truetype');\n    font-style: normal;\n}\n\nbody {\n    min-width: 100vw;\n    min-height: 100vh;\n}\n\nbody, p, ul {\n    margin: 0;\n    padding: 0;\n}\n\nul {\n    list-style-type: none;\n}\n\n#mainContainer {\n    display: grid;\n    min-width: 100vw;\n    height: 100vh;\n    min-height: 700px;\n    grid-template-columns: max(18%,260px) 82%;\n    grid-template-rows: 8% 10% 82%;\n    flex-direction: column;\n}\n\n#mainContentWindow {\n    width: 100%;\n    height: 100%;\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    background: rgb(234, 230, 229);\n}\n\n/* #region Desktop Side Bar */\n\n#profPicOverlay {\n    position: absolute;\n    background-image: url(${f});\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    z-index: 1;\n    border-color: black;\n    border-style: solid;\n    border-width: 2px;\n    border-radius: 50%;\n    width: 400px;\n    min-width: 400px;\n    aspect-ratio: 1 / 1;\n    display: none;\n    flex-direction: column;\n    margin-top: 10vh;\n    margin-left: max(260px, 40vw);\n    gap: 2%;\n    cursor: pointer; \n}\n\n#sideBar {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: rgb(143, 128, 115);\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 4;\n    color: rgb(232, 241, 242);\n    font-family: 'Roboto';\n}\n\n#profPic {\n    height: 30%;\n    width: 80%;\n    aspect-ratio: 1 / 1;\n    margin-top: 5vh;\n    border-radius: 50%;\n    cursor: pointer; \n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n}\n\n#profName {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 1vh;\n    font-size: x-large;\n    font-family: 'RobotoBold';\n}\n\n#sideBarLinks {\n    height: 60%;\n    margin-top: 7vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.8rem;\n    margin-bottom: 8vh;\n    font-size: medium;\n}\n\n#sideBarLinks p {\n    cursor: pointer; \n}\n\n#sideBarSocials {\n    height: 10%;\n    display: flex;\n    gap: 0.8rem;\n    font-size: medium;\n}\n\n#sideBarSocials a {\n    width: 100%;\n    height: 100%;\n}\n\n.linkedInImg, .githubImg {\n    height: 70%;\n    aspect-ratio: 1 / 1;\n}\n\n/* #endregion */\n\n/* #region Portrait Header Bar */\n\n#portraitHeaderBar {\n    background: rgb(143, 128, 115);\n    width: 101%;\n    height: 20%;\n    font-family: 'Roboto';\n    display: none;\n    grid-template-columns: 33vw 33vw 33vw;\n    grid-template-rows: 50% 50%;\n    color: rgb(232, 241, 242);\n}\n\n#portraitProfPicWrapper {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n}\n\n#portraitProfPic {\n    height: 70%;\n    aspect-ratio: 1 / 1;\n    border-radius: 50%;\n}\n\n#portraitProfNameWrapper {\n    grid-column-start: 1;\n    grid-column-end: 4;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: end;\n    width: 100%;\n    height: 100%;\n}\n\n#portraitProfName {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: x-large;\n    font-family: 'RobotoBold';\n    font-size: 3rem;\n}\n\n#portraitLinkedInImgButton {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-top: 2%;\n}\n\n#portraitGithubImgButton {\n    margin-bottom: 2%;\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#portraitLinkedInImgButton .linkedInImg, #portraitGithubImgButton .githubImg {\n    margin-left: 5vw;\n    height: 70%;\n}\n\n/* #endregion */\n\n/* #region Desktop Header Bar */\n\n#headerBar {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    background: white;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n#headerBarTitle {\n    font-family: 'RobotoBold';\n    font-size: xx-large;\n    margin-left: 2rem;\n}\n\n/* #endregion */\n\n/* #region Portrait Nav Bar */\n#portraitNavBar {\n    height: 3vh;\n    width: 101vw;\n    background-color: rgb(189, 179, 172);\n    display: none;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n}\n\n#portraitNavBarMenuDropDownButton {\n    background-color:  rgb(189, 179, 172);\n    color: white;\n    font-weight: bold;\n    text-decoration:underline;\n    font-size: 2.2rem;\n    border: none;\n    cursor: pointer;\n    height: 100%;\n}\n  \n#portraitNavBarMenuDropDown {\n    position: relative;\n    display: inline-block;\n}\n  \n#portraitNavBarMenuDropDown-content {\n    font-family: 'Roboto';\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 33vw;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n}\n  \n#portraitNavBarMenuDropDown-content p {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n    font-size: 2.2rem;\n    text-align: center;\n}\n\n#portraitNavBarMenuDropDown-content p:hover {background-color: #f1f1f1}\n\n#portraitNavBarMenuDropDown:hover #portraitNavBarMenuDropDownButton {\n    background-color: rgb(189, 179, 172);\n}\n\n#portraitNavBarMenuDropDownSymbol {\n    color: white;\n    font-size: 1.2rem;\n}\n\n#portraitHomeLink {\n    display: none;\n}\n\n/* #endregion */\n\n/* #region Desktop Home */\n#homePageContent {\n    height: 100%;\n}\n\n#desktopHomePageContent {\n    height: 100%;\n}\n\n#homePicture {\n    height: max(40vw, 60vh);\n    aspect-ratio: 1/1;\n    position: absolute;\n    top: 15vh;\n    left: max(55vw, 520px);\n    border-radius: 15px;\n}\n\n#homeTitleBlock {\n    min-width: 260px;\n    width: fit-content;\n    color: rgb(18, 19, 15);\n    font-family: 'Roboto';\n    position: absolute;\n    top: 10rem;\n    left: max(27vw, 300px);\n    display: flex;\n    flex-direction: column;\n    font-size: xx-large;\n    gap: 1rem;\n}\n\n#homeTitleBlock p {\n    padding-left: 1.4rem;\n    padding-right: 1.4rem;\n    background-color: rgb(143, 203, 155);\n}\n\n#homeTextBlock {\n    background-color: whitesmoke;\n    font-family: 'Roboto';\n    position: absolute;\n    width: 25rem;\n    border-radius: 15px;\n    top: 55vh;\n    left: max(23vw, 300px);\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-wrap: wrap;\n    padding: 1rem;\n    font-size: larger;\n}\n\n@media (max-width: 1100px) {\n    #homeTitleBlock {\n        font-size: 1.4rem;\n    }\n\n    #homeTextBlock {\n        font-size: medium;\n    }\n}\n/* #endregion */\n\n/* #region Portrait Home */\n#portraitHomePageContent{\n    background-color: rgb(234, 230, 229);\n    display: none;\n    width: 101vw;\n    height: 100%;\n}\n\n#portraitHomePicture {\n    position: absolute;\n    margin-top: 5rem;\n    width: 101vw;\n    aspect-ratio: 1/1;\n}\n\n#portraitHomeTitleBlock {\n    width: fit-content;\n    color: rgb(18, 19, 15);\n    font-family: 'Roboto';\n    position: absolute;\n    top: 27vh;\n    left: 3vw;\n    display: flex;\n    flex-direction: column;\n    font-size: 3rem;\n    gap: 1rem;\n}\n\n#portraitHomeTitleBlock p {\n    padding-left: 1.4rem;\n    padding-right: 1.4rem;\n    background-color: rgb(143, 203, 155);\n}\n\n#portraitHomeTextBlock {\n    background-color: whitesmoke;\n    font-family: 'Roboto';\n    position: absolute;\n    width: 80vw;\n    min-width: 300px;\n    height: fit-content;\n    border-radius: 15px;\n    top: 65vh;\n    left: 5vw;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-wrap: wrap;\n    padding: 1rem;\n    font-size: 3rem;\n}\n\n/* #endregion */`,""]);const y=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);o&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var l=n[c],d=o.base?l[0]+o.base:l[0],s=i[d]||0,p="".concat(d," ").concat(s);i[d]=s+1;var u=t(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var l=o(n,r),d=0;d<i.length;d++){var s=t(i[d]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=l}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},735:(n,e,t)=>{n.exports=t.p+"f28dac07125b934ba215.jpeg"},134:(n,e,t)=>{n.exports=t.p+"f80816a5455d171f948d.ttf"},109:(n,e,t)=>{n.exports=t.p+"fc2b5060f7accec5cf74.ttf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),r=t.n(o),i=t(825),a=t.n(i),c=t(659),l=t.n(c),d=t(56),s=t.n(d),p=t(540),u=t.n(p),m=t(113),g=t.n(m),f=t(365),y={};y.styleTagTransform=g(),y.setAttributes=s(),y.insert=l().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=u(),r()(f.A,y),f.A&&f.A.locals&&f.A.locals;const h=n=>{let e=(()=>{let n=!1;const e=document.querySelector("#profPic");return document.querySelector("body").addEventListener("click",(t=>{n&&t.target!=e&&(document.querySelector("#profPicOverlay").style.display="none",n=!1)})),{activate:()=>{n=!0,document.querySelector("#profPicOverlay").style.display="flex"},getProfilePictureOverlayActive:()=>n}})();const t=document.querySelectorAll("#sideBarLinks p");let o=b.HOME;t.forEach((e=>{e.addEventListener("click",(()=>{o=e.id,n.pageChanged(o),r(o)}))})),document.querySelector("#profPic").addEventListener("click",(()=>{e.activate()}));const r=n=>{t.forEach((n=>{n.style.cssText="text-decoration:none;"})),document.querySelector(`#${n}`).style.cssText="text-decoration:underline;font-family:'RobotoBold';"};return r(o),{getActiveMenuOption:()=>o}},b={HOME:"homeLink",EDU:"eduLink",EXP:"experienceLink",PROJ:"projectsLink",CURR:"currentActivityLink",BLOG:"blogLink",CONT:"contactLink"},x=new Map;x.set(b.HOME,"Home"),x.set(b.EDU,"Education / Skill"),x.set(b.EXP,"Experience"),x.set(b.BLOG,"Blog"),x.set(b.CURR,"Current Activity"),x.set(b.CONT,"Contact"),x.set(b.PROJ,"Projects");const v=n=>{const e=document.querySelector("#portraitNavBarMenuDropDown-content"),t=document.querySelector("#portraitNavBarMenuDropDownButton");let o=!1,r=w.HOME;const i=()=>{e.innerHTML="",k.forEach((a=>{const c=document.createElement("p");var l,d;c.setAttribute("id",(l=k,d=a,[...l].find((([n,e])=>d===e))[0])),c.textContent=a,e.appendChild(c),c.addEventListener("click",(a=>{(e=>{r=e,n.pageChanged(r),t.textContent=k.get(e),i()})(c.id),e.style.cssText="visibility:hidden;display:none;",o=!1,a.stopPropagation()}))}))};return t.addEventListener("click",(n=>{o||(e.style.cssText="visibility:visible;display:block;",o=!0,n.stopPropagation())})),document.querySelector("body").addEventListener("click",(n=>{const r=document.querySelector("#"+n.target.id).parentElement;o&&r!=e&&r!=t&&(e.style.cssText="visibility:hidden;display:none;",o=!1,n.stopPropagation())})),i(r),{getActiveMenuOption:()=>r}},w={HOME:"portraitHomeLink",EDU:"portraitEduLink",EXP:"portraitExperienceLink",PROJ:"portraitProjectsLink",CURR:"portraitCurrentActivityLink",BLOG:"portraitBlogLink",CONT:"portraitContactLink"},k=new Map;k.set(w.HOME,"Home"),k.set(w.EDU,"Education / Skills"),k.set(w.EXP,"Experience"),k.set(w.BLOG,"Blog"),k.set(w.CURR,"Current Activity"),k.set(w.CONT,"Contact"),k.set(w.PROJ,"Projects");var P=t(735);const B=t.p+"5da81c58f46e7ffb2d52.png",C=t.p+"ada3489c95a637987dd0.png",S=t.p+"bc25420e6c7890db33a4.jpeg",E=n=>{document.querySelector("#portraitProfPic").src=P,document.querySelector("#profPic").src=P,document.querySelectorAll(".linkedInImg").forEach((n=>{n.src=B})),document.querySelectorAll(".githubImg").src=C,document.querySelectorAll(".githubImg").forEach((n=>{n.src=C})),document.querySelector("#portraitHomePicture").src=S,document.querySelector("#homePicture").src=S,n?(document.querySelector("#sideBar").style.display="none",document.querySelector("#headerBar").style.display="none",document.querySelector("#mainContainer").style.display="flex",document.querySelector("#portraitHeaderBar").style.display="grid",document.querySelector("#portraitNavBar").style.display="flex",document.querySelector("#portraitHomePageContent").style.display="block",document.querySelector("#desktopHomePageContent").style.display="none"):(document.querySelector("#sideBar").style.display="flex",document.querySelector("#headerBar").style.display="flex",document.querySelector("#mainContainer").style.display="grid",document.querySelector("#portraitHeaderBar").style.display="none",document.querySelector("#portraitNavBar").style.display="none",document.querySelector("#portraitHomePageContent").style.display="none",document.querySelector("#desktopHomePageContent").style.display="block")},L=new Map;L.set(b.HOME,"homePageContent"),L.set(b.EDU,"eduPageContent"),L.set(b.EXP,"expPageContent"),L.set(b.BLOG,"blogPageContent"),L.set(b.CURR,"currPageContent"),L.set(b.CONT,"contPageContent"),L.set(b.PROJ,"projPageContent"),L.set(w.HOME,"homePageContent"),L.set(w.EDU,"eduPageContent"),L.set(w.EXP,"expPageContent"),L.set(w.BLOG,"blogPageContent"),L.set(w.CURR,"currPageContent"),L.set(w.CONT,"contPageContent"),L.set(w.PROJ,"projPageContent");const T=document.querySelectorAll(".contentPage"),q=()=>{const n=document.querySelector("#headerBarTitle");return{updateHeaderTitle:e=>{n.textContent=e}}};let H=document.body.clientWidth<document.body.clientHeight;const R=()=>({pageChanged:n=>{H||M.updateHeaderTitle(x.get(n)),(n=>{T.forEach((n=>{n.style.cssText="display:none;"}));const e=L.get(n);document.querySelector(`#${e}`).style.cssText="display:block;"})(n)}});E(H);let O=H?v(R()):h(R()),M=H?null:q(R());window.matchMedia("(orientation: portrait)").addEventListener("change",(function(n){H=document.body.clientWidth<document.body.clientHeight,E(H),O=H?v(R()):h(R()),M=H?null:q(R())})),document.querySelector("body").addEventListener("click",(n=>{}))})();