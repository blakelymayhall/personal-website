import { initPageLoad } from "./init_page_load";
import { sideBarFactory } from "./sideBar";
import { mobileHeaderBarFactory } from "./mobileHeaderBar";

//import "./styles.css";

// Data
//------------------------------------------------------------------------
const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        // eslint-disable-next-line prettier/prettier
        navigator.userAgent
    );
//------------------------------------------------------------------------

initPageLoad(isMobile);
let sideBar = sideBarFactory();
let mobileHeaderBar = mobileHeaderBarFactory(isMobile);

//DEBUG 
document.querySelector("body").addEventListener("click", (e) => {
    console.log(mobileHeaderBar.getActiveMenuOption());
    console.log(sideBar.getActiveMenuOption());
});