(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>b});var o=t(601),r=t.n(o),i=t(314),a=t.n(i),l=t(417),d=t.n(l),s=new URL(t(134),t.b),c=new URL(t(109),t.b),p=new URL(t(735),t.b),u=new URL(t(569),t.b),m=a()(r()),g=d()(s),h=d()(c),f=d()(p),y=d()(u);m.push([n.id,`/* colors:: https://coolors.co/12130f-5b9279-8fcb9b-bdd9c0-eae6e5-bdb3ac-8f8073 */\n\n@font-face {\n    font-family: 'RobotoBold';\n    src: url(${g}) format('truetype');\n    font-style: normal;\n}\n\n@font-face {\n    font-family: 'Roboto';\n    src: url(${h}) format('truetype');\n    font-style: normal;\n}\n\nbody {\n    min-width: 100vw;\n    min-height: 100vh;\n}\n\nbody, p, ul {\n    margin: 0;\n    padding: 0;\n}\n\nul {\n    list-style-type: none;\n}\n\n#mainContainer {\n    display: grid;\n    min-width: 100vw;\n    height: 100vh;\n    min-height: 700px;\n    grid-template-columns: max(18%,260px) 82%;\n    grid-template-rows: 8% 10% 82%;\n    flex-direction: column;\n}\n\n#mainContentWindow {\n    width: 100%;\n    height: 100%;\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 4;\n    background: rgb(234, 230, 229);\n    overflow-y: scroll;\n}\n\n/* #region Desktop Side Bar */\n\n#profPicOverlay {\n    position: absolute;\n    background-image: url(${f});\n    background-repeat: no-repeat;\n    background-size: 100% 100%;\n    z-index: 1;\n    border-color: black;\n    border-style: solid;\n    border-width: 2px;\n    border-radius: 50%;\n    width: 400px;\n    min-width: 400px;\n    aspect-ratio: 1 / 1;\n    display: none;\n    flex-direction: column;\n    margin-top: 10vh;\n    margin-left: max(260px, 40vw);\n    gap: 2%;\n    cursor: pointer; \n}\n\n#sideBar {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: rgb(143, 128, 115);\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 4;\n    color: rgb(232, 241, 242);\n    font-family: 'Roboto';\n}\n\n#profPic {\n    height: 30%;\n    width: 80%;\n    aspect-ratio: 1 / 1;\n    margin-top: 5vh;\n    border-radius: 50%;\n    cursor: pointer; \n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n}\n\n#profName {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 1vh;\n    font-size: x-large;\n    font-family: 'RobotoBold';\n}\n\n#sideBarLinks {\n    height: 60%;\n    margin-top: 7vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.8rem;\n    margin-bottom: 8vh;\n    font-size: medium;\n}\n\n#sideBarLinks p {\n    cursor: pointer; \n}\n\n#sideBarSocials {\n    height: 10%;\n    display: flex;\n    gap: 0.8rem;\n    font-size: medium;\n}\n\n#sideBarSocials a {\n    width: 100%;\n    height: 100%;\n}\n\n.linkedInImg, .githubImg {\n    height: 70%;\n    aspect-ratio: 1 / 1;\n}\n\n/* #endregion */\n\n/* #region Portrait Header Bar */\n\n#portraitHeaderBar {\n    background: rgb(143, 128, 115);\n    width: 101%;\n    height: 20%;\n    font-family: 'Roboto';\n    display: none;\n    grid-template-columns: 33vw 33vw 33vw;\n    grid-template-rows: 50% 50%;\n    color: rgb(232, 241, 242);\n}\n\n#portraitProfPicWrapper {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n}\n\n#portraitProfPic {\n    height: 70%;\n    aspect-ratio: 1 / 1;\n    border-radius: 50%;\n}\n\n#portraitProfNameWrapper {\n    grid-column-start: 1;\n    grid-column-end: 4;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: end;\n    width: 100%;\n    height: 100%;\n}\n\n#portraitProfName {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: x-large;\n    font-family: 'RobotoBold';\n    font-size: 3rem;\n}\n\n#portraitLinkedInImgButton {\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-top: 2%;\n}\n\n#portraitGithubImgButton {\n    margin-bottom: 2%;\n    grid-column-start: 3;\n    grid-column-end: 4;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n#portraitLinkedInImgButton .linkedInImg, #portraitGithubImgButton .githubImg {\n    margin-left: 5vw;\n    height: 70%;\n}\n\n/* #endregion */\n\n/* #region Desktop Header Bar */\n\n#headerBar {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    background-image: url(${y});\n    background-position: 250px;\n    background-repeat: no-repeat;\n    background-size: 800px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n#headerBarTitle {\n    font-family: 'RobotoBold';\n    font-size: xx-large;\n    margin-left: 2rem;\n    background-color: white;\n}\n\n/* #endregion */\n\n/* #region Portrait Nav Bar */\n#portraitNavBar {\n    height: 3vh;\n    width: 101vw;\n    background-color: rgb(189, 179, 172);\n    display: none;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n}\n\n#portraitNavBarMenuDropDownButton {\n    background-color:  rgb(189, 179, 172);\n    color: white;\n    font-weight: bold;\n    text-decoration:underline;\n    font-size: 2.2rem;\n    border: none;\n    cursor: pointer;\n    height: 100%;\n}\n  \n#portraitNavBarMenuDropDown {\n    position: relative;\n    display: inline-block;\n}\n  \n#portraitNavBarMenuDropDown-content {\n    font-family: 'Roboto';\n    display: none;\n    position: absolute;\n    left: 50%; \n    transform: translate(-50%, 0);\n    background-color: #f9f9f9;\n    min-width: 33vw;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n}\n  \n#portraitNavBarMenuDropDown-content p {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block;\n    font-size: 2.2rem;\n    text-align: center;\n}\n\n#portraitNavBarMenuDropDown-content p:hover {background-color: #f1f1f1}\n\n#portraitNavBarMenuDropDown:hover #portraitNavBarMenuDropDownButton {\n    background-color: rgb(189, 179, 172);\n}\n\n#portraitNavBarMenuDropDownSymbol {\n    color: white;\n    font-size: 1.2rem;\n}\n\n#portraitHomeLink {\n    display: none;\n}\n\n/* #endregion */\n\n/* #region Desktop Home */\n#homePageContent {\n    height: 100%;\n}\n\n#desktopHomePageContent {\n    height: 100%;\n}\n\n#homePicture {\n    height: max(40vw, 60vh);\n    aspect-ratio: 1/1;\n    position: absolute;\n    top: 15vh;\n    left: max(55vw, 520px);\n    border-radius: 15px;\n}\n\n#homeTitleBlock {\n    min-width: 260px;\n    width: fit-content;\n    color: rgb(18, 19, 15);\n    font-family: 'Roboto';\n    position: absolute;\n    top: 10rem;\n    left: max(27vw, 300px);\n    display: flex;\n    flex-direction: column;\n    font-size: xx-large;\n    gap: 1rem;\n}\n\n#homeTitleBlock p {\n    padding-left: 1.4rem;\n    padding-right: 1.4rem;\n    background-color: rgb(143, 203, 155);\n}\n\n#homeTextBlock {\n    background-color: whitesmoke;\n    font-family: 'Roboto';\n    position: absolute;\n    width: 25rem;\n    border-radius: 15px;\n    top: 55vh;\n    left: max(23vw, 300px);\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-wrap: wrap;\n    padding: 1rem;\n    font-size: larger;\n}\n\n@media (max-width: 1100px) {\n    #homeTitleBlock {\n        font-size: 1.4rem;\n    }\n\n    #homeTextBlock {\n        font-size: medium;\n    }\n}\n/* #endregion */\n\n/* #region Portrait Home */\n#portraitHomePageContent{\n    background-color: rgb(234, 230, 229);\n    display: none;\n    width: 101vw;\n    height: 100%;\n    background-image: url(${y});\n    background-position: 0px;\n    background-repeat: repeat;\n    background-size: 30vh 30vh;\n}\n\n#portraitHomePicture {\n    position: absolute;\n    margin-top: 5rem;\n    width: 101vw;\n    aspect-ratio: 1/1;\n}\n\n#portraitHomeTitleBlock {\n    width: fit-content;\n    color: rgb(18, 19, 15);\n    font-family: 'Roboto';\n    position: absolute;\n    top: 27vh;\n    left: 3vw;\n    display: flex;\n    flex-direction: column;\n    font-size: 3rem;\n    gap: 1rem;\n}\n\n#portraitHomeTitleBlock p {\n    padding-left: 1.4rem;\n    padding-right: 1.4rem;\n    background-color: rgb(143, 203, 155);\n}\n\n#portraitHomeTextBlock {\n    background-color: whitesmoke;\n    font-family: 'Roboto';\n    position: absolute;\n    width: 80vw;\n    min-width: 300px;\n    height: fit-content;\n    border-radius: 15px;\n    top: 65vh;\n    left: 5vw;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-wrap: wrap;\n    padding: 1rem;\n    font-size: 3rem;\n}\n\n/* #endregion */\n\n/* #region Desktop Edu */\n\n#eduPageContent {\n    height: 100%;\n    display: none;\n}\n\n#desktopEduPageContent.portrait {\n    width: 95%;\n}\n\n#educationContainer {\n    min-width: 1160px;\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 40% 40%;\n    grid-template-rows: 40%;\n    grid-auto-rows: 40%;\n    grid-auto-flow: dense;\n    gap: 5rem;\n    margin-top: 2rem;\n    margin-left: 2rem;\n}\n\n#educationContainer.portrait {\n    min-width: 0;\n    grid-template-columns: 95%;\n    grid-template-rows: 500px;\n    grid-auto-rows: 500px;\n}\n\n@media (max-width: 1150px) {\n    #educationContainer {\n        grid-template-columns: 40%;\n    }\n}\n\n#educationTitle, #skillsTitle {\n    font-family: 'RobotoBold';\n    margin-top: 2rem;\n    margin-left: 2rem;\n    font-size: 3rem;\n    color: rgb(49, 54, 57);\n}\n\n#educationTitle.portrait, #skillsTitle.portrait {\n    font-size: 4rem;\n}\n\n#skillsTitle.portrait {\n    margin-top: 7rem;\n}\n\n.eduCard {\n    width: 500px;\n    height: 250px;\n    background-color: whitesmoke;\n    border-color: black;\n    border-style: solid;\n    border-width: 2px;\n    border-radius: 2rem;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 75% 25%;\n    grid-template-rows: 75% 25%;\n}\n\n.eduCard.portrait {\n    width: 100%; \n    height:100%;\n}\n\n.eduCardTitles {\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 2;\n}\n\n.eduCardImage {\n    grid-column-start: 2;\n    grid-column-end: 3;\n    grid-row-start: 1;\n    grid-row-end: 2;\n    max-width: 100px;\n    aspect-ratio: 1 / 1;\n    margin-top: 1rem;\n    margin-right: 1.5rem;\n}\n\n.univTitle {\n    font-size: 1.2rem;\n    font-family: 'RobotoBold';\n    margin-bottom: 5px;\n}\n\n.univTitle.portrait {\n    font-size: 2.5rem;\n}\n\n.degreeTitle {\n    font-size: 1rem;\n    font-family: 'RobotoBold';\n}\n\n.degreeTitle.portrait {\n    font-size: 2rem;\n}\n\n.honorsTitle {\n    font-size: 0.88rem;\n    font-family: 'Roboto';\n}\n\n.honorsTitle.portrait {\n    font-size: 1.6rem;\n}\n\n.eduCardDesc {\n    font-size: 0.88rem;\n    font-family: 'Roboto';\n    margin-top: 0.6rem;\n    margin-right: 5px;\n}\n\n.eduCardDesc.portrait {\n    font-size: 1.6rem;\n    margin-top:3rem;\n}\n\n.eduCardNotableContainer {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    margin-top: 5px;\n}\n\n.eduCardNotableCourseList {\n    display: flex;\n    flex-direction: row;\n    list-style-type: square;\n    gap: 2rem;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 3;\n    margin-left: 1rem;\n}\n\n.eduCardNotable {\n    font-family: 'Roboto';\n    text-decoration: underline;\n}\n\n.eduCardNotable.portrait, .eduCardNotableCourseList li.portrait{\n    font-size: 1.6rem;\n    min-width:410px;\n    max-width:410px;\n}\n\n.eduCardNotableCourseList li {\n    font-size: 0.88rem;\n    font-family: 'Roboto';\n    min-width: 210px;\n}\n\n#skillsContainer {\n    min-width: 1160px;\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 20% 20% 20% 20%;\n    grid-template-rows: 40%;\n    grid-auto-rows: 40%;\n    grid-auto-flow: dense;\n    gap: 2rem;\n    margin-top: 2rem;\n    margin-left: 2rem;\n    padding-bottom: 300px;\n}\n\n#skillsContainer.portrait {\n    min-width: 0;\n    grid-template-columns: 40% 40%;  \n    grid-template-rows: 200px;\n    grid-auto-rows:200px;\n    gap:5rem;\n    padding-bottom: 400px;\n}\n\n@media (max-width: 1150px) {\n    #skillsContainer {\n        grid-template-columns: 20% 20%;\n        grid-template-rows: 30%;\n        grid-auto-rows: 30%;\n    }\n}\n\n.skillCard {\n    width: 200px;\n    height: 100px;\n    background-color: whitesmoke;\n    border-color: black;\n    border-style: solid;\n    border-width: 2px;\n    border-radius: 2rem;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    padding: 1rem;\n}\n\n.skillCard.portrait {\n    width: 100%; \n    height:100%;\n}\n\n.skillTitle {\n    width: 100%;\n    text-align: center;\n    text-decoration: underline;\n    font-family: 'RobotoBold';\n    font-size: 1.2rem;\n    margin-bottom: 5px;\n}\n\n.skillTitle.portrait {\n    font-size: 2.4rem;\n}\n\n.skillList {\n    min-width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: baseline;\n    list-style-type: square;\n    grid-column-start: 1;\n    grid-column-end: 2;\n    grid-row-start: 2;\n    grid-row-end: 3;\n}\n\n.skillList li {\n    font-size: 0.88rem;\n    font-family: 'Roboto';\n    max-width: 175px;\n    margin-left: 33px;\n}\n\n.skillList li.portrait {\n    font-size: 1.6rem;\n    min-width:310px;\n    max-width:310px;\n}\n\n/* #endregion */`,""]);const b=m},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var l=0;l<this.length;l++){var d=this[l][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),e.push(c))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],l=0;l<n.length;l++){var d=n[l],s=o.base?d[0]+o.base:d[0],c=i[s]||0,p="".concat(s," ").concat(c);i[s]=c+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=r(m,o);o.byIndex=l,e.splice(l,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var l=t(i[a]);e[l].references--}for(var d=o(n,r),s=0;s<i.length;s++){var c=t(i[s]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}i=d}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},735:(n,e,t)=>{n.exports=t.p+"f28dac07125b934ba215.jpeg"},569:(n,e,t)=>{n.exports=t.p+"fc749ee74e14e640a98e.png"},134:(n,e,t)=>{n.exports=t.p+"f80816a5455d171f948d.ttf"},109:(n,e,t)=>{n.exports=t.p+"fc2b5060f7accec5cf74.ttf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!n||!/^http(s?):/.test(n));)n=o[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o=t(72),r=t.n(o),i=t(825),a=t.n(i),l=t(659),d=t.n(l),s=t(56),c=t.n(s),p=t(540),u=t.n(p),m=t(113),g=t.n(m),h=t(365),f={};f.styleTagTransform=g(),f.setAttributes=c(),f.insert=d().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=u(),r()(h.A,f),h.A&&h.A.locals&&h.A.locals;const y=n=>{let e=(()=>{let n=!1;const e=document.querySelector("#profPic");return document.querySelector("body").addEventListener("click",(t=>{n&&t.target!=e&&(document.querySelector("#profPicOverlay").style.display="none",n=!1)})),{activate:()=>{n=!0,document.querySelector("#profPicOverlay").style.display="flex"},getProfilePictureOverlayActive:()=>n}})();const t=document.querySelectorAll("#sideBarLinks p");let o=b.HOME;t.forEach((e=>{e.addEventListener("click",(()=>{o=e.id,n.pageChanged(o),r(o)}))})),document.querySelector("#profPic").addEventListener("click",(()=>{e.activate()}));const r=n=>{t.forEach((n=>{n.style.cssText="text-decoration:none;"})),document.querySelector(`#${n}`).style.cssText="text-decoration:underline;font-family:'RobotoBold';"};return r(o),{getActiveMenuOption:()=>o}},b={HOME:"homeLink",EDU:"eduLink",EXP:"experienceLink",PROJ:"projectsLink",CURR:"currentActivityLink",BLOG:"blogLink",CONT:"contactLink"},x=new Map;x.set(b.HOME,"Home"),x.set(b.EDU,"Education / Skills"),x.set(b.EXP,"Experience"),x.set(b.BLOG,"Blog"),x.set(b.CURR,"Current Activity"),x.set(b.CONT,"Contact"),x.set(b.PROJ,"Projects");const w=n=>{const e=document.querySelector("#portraitNavBarMenuDropDown-content"),t=document.querySelector("#portraitNavBarMenuDropDownButton");let o=!1,r=v.HOME;const i=()=>{e.innerHTML="",C.forEach((a=>{const l=document.createElement("p");var d,s;l.setAttribute("id",(d=C,s=a,[...d].find((([n,e])=>s===e))[0])),l.textContent=a,e.appendChild(l),l.addEventListener("click",(a=>{(e=>{r=e,n.pageChanged(r),t.textContent=C.get(e),i()})(l.id),e.style.cssText="visibility:hidden;display:none;",o=!1,a.stopPropagation()}))}))};return t.addEventListener("click",(n=>{o||(e.style.cssText="visibility:visible;display:block;",o=!0,n.stopPropagation())})),document.querySelector("body").addEventListener("click",(n=>{const r=document.querySelector("#"+n.target.id).parentElement;o&&r!=e&&r!=t&&(e.style.cssText="visibility:hidden;display:none;",o=!1,n.stopPropagation())})),i(r),{getActiveMenuOption:()=>r}},v={HOME:"portraitHomeLink",EXP:"portraitExperienceLink",EDU:"portraitEduLink",PROJ:"portraitProjectsLink",CURR:"portraitCurrentActivityLink",BLOG:"portraitBlogLink",CONT:"portraitContactLink"},C=new Map;C.set(v.HOME,"Home"),C.set(v.EXP,"Experience"),C.set(v.EDU,"Education / Skills"),C.set(v.BLOG,"Blog"),C.set(v.CURR,"Current Activity"),C.set(v.CONT,"Contact"),C.set(v.PROJ,"Projects");var k=t(735);const S=t.p+"5da81c58f46e7ffb2d52.png",T=t.p+"ada3489c95a637987dd0.png",P=t.p+"bc25420e6c7890db33a4.jpeg",B=n=>{document.querySelector("#portraitProfPic").src=k,document.querySelector("#profPic").src=k,document.querySelectorAll(".linkedInImg").forEach((n=>{n.src=S})),document.querySelectorAll(".githubImg").src=T,document.querySelectorAll(".githubImg").forEach((n=>{n.src=T})),document.querySelector("#portraitHomePicture").src=P,document.querySelector("#homePicture").src=P,n?(document.querySelector("#sideBar").style.display="none",document.querySelector("#headerBar").style.display="none",document.querySelector("#mainContainer").style.display="flex",document.querySelector("#portraitHeaderBar").style.display="grid",document.querySelector("#portraitNavBar").style.display="flex",document.querySelector("#portraitHomePageContent").style.display="block",document.querySelector("#desktopHomePageContent").style.display="none"):(document.querySelector("#sideBar").style.display="flex",document.querySelector("#headerBar").style.display="flex",document.querySelector("#mainContainer").style.display="grid",document.querySelector("#portraitHeaderBar").style.display="none",document.querySelector("#portraitNavBar").style.display="none",document.querySelector("#portraitHomePageContent").style.display="none",document.querySelector("#desktopHomePageContent").style.display="block")},E=new Map;E.set(b.HOME,"homePageContent"),E.set(b.EDU,"eduPageContent"),E.set(b.EXP,"expPageContent"),E.set(b.BLOG,"blogPageContent"),E.set(b.CURR,"currPageContent"),E.set(b.CONT,"contPageContent"),E.set(b.PROJ,"projPageContent"),E.set(v.HOME,"homePageContent"),E.set(v.EDU,"eduPageContent"),E.set(v.EXP,"expPageContent"),E.set(v.BLOG,"blogPageContent"),E.set(v.CURR,"currPageContent"),E.set(v.CONT,"contPageContent"),E.set(v.PROJ,"projPageContent");const L=document.querySelectorAll(".contentPage"),q=()=>{const n=document.querySelector("#headerBarTitle");return{updateHeaderTitle:e=>{n.textContent=e}}},M=t.p+"f6a20765458f2c915b81.png",R=t.p+"f0eb0e064b8a2469b738.png";function D(n,e,t,o,r,i){this.eduCardID=Math.floor(Date.now()*Math.random()),this.schoolTitle=n,this.degreeTitle=e,this.honorsTitle=t,this.description=o,this.notableCourses=r,this.schoolImage=i}const O=new D("Washington University in St. Louis","M.S. in Aerospace Engineering","Summa Cum Laude (GPA: 4.0 / 4.0)","At Washington University, I refined and expanded my skills in both flight dynamics and dynamic control systems. I took courses that focused on the fundamentals of flight dynamics, control system design, and robust and adaptive control",["Robust and Adaptive Control","Control System Design","Flight Dynamics & Control","Aircraft Performance & Modeling"],M),A=new D("Missouri University of Science & Technology","B.S. in Aerospace Engineering","Summa Cum Laude (GPA: 4.0 / 4.0)","While at Missouri S&T I participated in courses that focused on flight dynamics and orbital mechanics. I also spent a significant time working with the Missouri S&T Satellite Design Team. On this team, I discovered my affinity for guidance and control work",["Applied Computational Methods","Programming Methods in C++","Spacecraft Design","Aerospace & Spaceflight Mechanics"],R);let N=[];function H(n,e){this.skillCardID=Math.floor(Date.now()*Math.random()),this.skillTitle=n,this.skillSupport=e}N.push(O),N.push(A);const I=new H("C / C++",["The Boeing Company","Ag Leader Technology","Washington University in St Louis","Missouri S&T"]),z=new H("Python",["The Boeing Company","Ag Leader Technology"]),U=new H("C#",["The Boeing Company","Mouse Trap - Unity Game"]),j=new H("MATLAB / Simulink",["The Boeing Company","Washington University in St Louis","Missouri S&T"]),G=new H("Git (GitLab & GitHub)",["The Boeing Company","Ag Leader Technology","The Odin Project"]);let W=[];W.push(I),W.push(z),W.push(U),W.push(j),W.push(G);let $=document.body.clientWidth<document.body.clientHeight&&window.screen.availWidth<1200;const J=()=>({pageChanged:n=>{$||F.updateHeaderTitle(x.get(n)),(n=>{L.forEach((n=>{n.style.cssText="display:none;"}));const e=E.get(n);document.querySelector(`#${e}`).style.cssText="display:block;"})(n)}});B($);let X=$?w(J()):y(J()),F=$?null:q(J()),_=(n=>{const e=n=>{document.querySelector("#eduPageContent").querySelectorAll("*").forEach((e=>{n?e.classList.add("portrait"):e.classList.remove("portrait")}))},t=document.querySelector(".eduCard"),o=document.querySelector("#educationContainer");N.forEach((n=>{(n=>{const e=t.cloneNode(!0);e.dataset.cardID=n.eduCardID,e.querySelector(".univTitle").textContent=n.schoolTitle,e.querySelector(".degreeTitle").textContent=n.degreeTitle,e.querySelector(".honorsTitle").textContent=n.honorsTitle,e.querySelector(".eduCardDesc").textContent=n.description,e.querySelector(".eduCardImage").src=n.schoolImage;const r=e.querySelector(".eduCardNotableContainer");let i=document.createElement("ul");i.classList.add("eduCardNotableCourseList");let a=document.createElement("li");a.textContent=n.notableCourses[0],i.appendChild(a),a=document.createElement("li"),a.textContent=n.notableCourses[1],i.appendChild(a),r.appendChild(i),i=document.createElement("ul"),i.classList.add("eduCardNotableCourseList"),a=document.createElement("li"),a.textContent=n.notableCourses[2],i.appendChild(a),a=document.createElement("li"),a.textContent=n.notableCourses[3],i.appendChild(a),r.appendChild(i),o.appendChild(e)})(n)})),t.parentElement.removeChild(t);const r=document.querySelector(".skillCard"),i=document.querySelector("#skillsContainer");return W.forEach((n=>{(n=>{const e=r.cloneNode(!0);e.dataset.cardID=n.skillCardID,e.querySelector(".skillTitle").textContent=n.skillTitle;const t=e.querySelector(".skillList");n.skillSupport.forEach((n=>{const e=document.createElement("li");e.textContent=n,t.appendChild(e)})),i.append(e)})(n)})),r.parentElement.removeChild(r),e(n),{switchOrientation:e}})($);window.matchMedia("(orientation: portrait)").addEventListener("change",(function(n){$=document.body.clientWidth<document.body.clientHeight&&window.screen.availWidth<1200,B($),X=$?w(J()):y(J()),F=$?null:q(J()),_.switchOrientation($)})),document.querySelector("body").addEventListener("click",(n=>{}))})();