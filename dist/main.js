(()=>{"use strict";const e=e=>{e?(document.querySelector("#sideBar").style.display="none",document.querySelector("#headerBar").style.display="none",document.querySelector("#mainContainer").style.display="flex",document.querySelector("#mobileHeaderBar").style.display="grid",document.querySelector("#mobileNavBar").style.display="flex",document.querySelector("#mobileHomePageContent").style.display="block",document.querySelector("#desktopHomePageContent").style.display="none"):(document.querySelector("#sideBar").style.display="flex",document.querySelector("#headerBar").style.display="flex",document.querySelector("#mainContainer").style.display="grid",document.querySelector("#mobileHeaderBar").style.display="none",document.querySelector("#mobileNavBar").style.display="none",document.querySelector("#mobileHomePageContent").style.display="none",document.querySelector("#desktopHomePageContent").style.display="block")},t="#homeLink",o="#aboutLink",n="#experienceLink",r="#projectsLink",c="#currentActivityLink",l="#blogLink",a="#contactLink",i=new Map;i.set(t,"Home"),i.set(o,"About"),i.set(n,"Experience"),i.set(l,"Blog"),i.set(c,"Current Activity"),i.set(a,"Contact"),i.set(r,"Projects");const s="#mobileHomeLink",d="#mobileAboutLink",u="#mobileExperienceLink",y="#mobileProjectsLink",m="#mobileCurrentActivityLink",p="#mobileBlogLink",g="#mobileContactLink",C=new Map;C.set(s,"Home"),C.set(d,"About"),C.set(u,"Experience"),C.set(p,"Blog"),C.set(m,"Current Activity"),C.set(g,"Contact"),C.set(y,"Projects");const b=screen.width<screen.height,q=document.querySelectorAll(".contentPage"),P=new Map;P.set(t,"#homePageContent"),P.set(o,"#aboutPageContent"),P.set(n,"#expPageContent"),P.set(l,"#blogPageContent"),P.set(c,"#currPageContent"),P.set(a,"#contPageContent"),P.set(r,"#projPageContent"),P.set(s,"#homePageContent"),P.set(d,"#aboutPageContent"),P.set(u,"#expPageContent"),P.set(p,"#blogPageContent"),P.set(m,"#currPageContent"),P.set(g,"#contPageContent"),P.set(y,"#projPageContent");const S=()=>({pageChanged:e=>{b||k.updateHeaderTitle(i.get(e)),(e=>{q.forEach((e=>{e.style.cssText="display:none;"}));const t=P.get(e);document.querySelector(t).style.cssText="display:block;"})(e)}});e(b),b?(e=>{let t=s;const o=o=>{t=o,e.pageChanged(t),document.querySelector("#mobileNavBarMenuDropDownButton").textContent=C.get(o),n(o)},n=e=>{document.querySelector("#mobileNavBarMenuDropDown-content").innerHTML="",C.forEach((t=>{if(C.get(e)!=t){const e=document.createElement("p");e.setAttribute("id",(n=C,r=t,[...n].find((([e,t])=>r===t))[0])),e.textContent=t,document.querySelector("#mobileNavBarMenuDropDown-content").appendChild(e),e.addEventListener("click",(()=>{o(e.id)}))}var n,r}))};n(t)})(S()):(e=>{let o=(()=>{let e=!1;const t=document.querySelector("#profPic");return document.querySelector("body").addEventListener("click",(o=>{e&&o.target!=t&&(document.querySelector("#profPicOverlay").style.display="none",e=!1)})),{activate:()=>{e=!0,document.querySelector("#profPicOverlay").style.display="flex"},getProfilePictureOverlayActive:()=>e}})();const n=document.querySelectorAll("#sideBarLinks p");let r=t;n.forEach((t=>{t.addEventListener("click",(()=>{r=`#${t.id}`,e.pageChanged(r),c(r)}))})),document.querySelector("#profPic").addEventListener("click",(()=>{o.activate()}));const c=e=>{n.forEach((e=>{e.style.cssText="text-decoration:none;"})),document.querySelector(e).style.cssText="text-decoration:underline;font-family:'RobotoBold';"};c(r)})(S());let k=b?null:(()=>{const e=document.querySelector("#headerBarTitle");return{updateHeaderTitle:t=>{e.textContent=t}}})(S());window.matchMedia("(orientation: portrait)").addEventListener("change",(function(t){t.matches?e(!0):e(!1)})),document.querySelector("body").addEventListener("click",(e=>{}))})();