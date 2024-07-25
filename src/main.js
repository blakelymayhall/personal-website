import { initPageLoad } from "./init_page_load";
import { sideBarFactory, menuOptions, domMenuOptionsText } from "./sideBar";
import { mobileHeaderBarFactory, mobileMenuOptions, domMobileMenuOptionsText } from "./mobileHeaderBar";
import { headerBarFactory } from "./headerBar";
//import "./styles.css";

// Data
//------------------------------------------------------------------------
const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
        // eslint-disable-next-line prettier/prettier
        navigator.userAgent
    );
//------------------------------------------------------------------------

// Interface Layer
//------------------------------------------------------------------------
const interfaceLayer = () => {
    const pageChanged = (menuOption) => {
        if (!isMobile) {
            headerBar.updateHeaderTitle(domMenuOptionsText.get(menuOption));
        }
    };

    return {
        pageChanged,
    }
};
//------------------------------------------------------------------------

// Init
//------------------------------------------------------------------------
initPageLoad(isMobile);
let menuOptionController = isMobile ?  mobileHeaderBarFactory(interfaceLayer()) : sideBarFactory(interfaceLayer());
let headerBar = isMobile ? null : headerBarFactory(interfaceLayer());
//------------------------------------------------------------------------

//DEBUG 
document.querySelector("body").addEventListener("click", (e) => {
    //console.log(mobileHeaderBar.getActiveMenuOption());
    //console.log(sideBar.getActiveMenuOption());
});