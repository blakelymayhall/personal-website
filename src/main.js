import { initPageLoad, domPages, domPagesIDs } from "./initPageLoad";
import { sideBarFactory, domMenuOptionsText } from "./sideBar";
import { mobileHeaderBarFactory } from "./mobileHeaderBar";
import { headerBarFactory } from "./headerBar";
//import "./styles.css";

// Data
//------------------------------------------------------------------------
const isMobile = screen.width < screen.height;
//------------------------------------------------------------------------

// Support
//------------------------------------------------------------------------
const pageSwitcher = (menuOption) => {
    domPages.forEach((domPage) => {
        domPage.style.cssText = "display:none;";
    });
    const domPageID = domPagesIDs.get(menuOption);
    document.querySelector(domPageID).style.cssText = "display:block;";
};
//------------------------------------------------------------------------

// Interface Layer
//------------------------------------------------------------------------
const interfaceLayer = () => {
    const pageChanged = (menuOption) => {
        if (!isMobile) {
            headerBar.updateHeaderTitle(domMenuOptionsText.get(menuOption));
        }
        pageSwitcher(menuOption);
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

// Events
//------------------------------------------------------------------------
let portrait = window.matchMedia("(orientation: portrait)");
portrait.addEventListener("change", function(e) {
    if(e.matches) {
        initPageLoad(true);
    } 
    else {
        initPageLoad(false);
    }
});
//------------------------------------------------------------------------

//DEBUG 
document.querySelector("body").addEventListener("click", (e) => {
    //console.log(mobileHeaderBar.getActiveMenuOption());
    //console.log(sideBar.getActiveMenuOption());
});