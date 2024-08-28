import "./styles.css";
import { domPages, domPagesIDs, domMenuOptionsText, factoryMap, menuOptions } from "./data/domData";
import { initPageLoad } from "./initPageLoad";
import { sideBarFactory } from "./sideBar";
import { navBarFactory } from "./navBar";
import { headerBarFactory } from "./headerBar";

// Data
//------------------------------------------------------------------------
let isPortrait = window.screen.availWidth < window.screen.availHeight && window.screen.availWidth < 1200;
let currentPageObject = null;
//------------------------------------------------------------------------

// Support
//------------------------------------------------------------------------
const pageSwitcher = (menuOption) => {
    domPages.forEach((domPage) => {
        domPage.style.cssText = "display:none;";
    });
    currentPageObject = factoryMap.get(menuOption)(isPortrait);
    const domPageID = domPagesIDs.get(menuOption);
    document.querySelector(`#${domPageID}`).style.cssText = "display:block;";
};

const orientationChange = () => {
    isPortrait = document.body.clientWidth < document.body.clientHeight && window.screen.availWidth < 1200;
    initPageLoad(isPortrait);
    currentPageObject.switchOrientation(isPortrait);
};
//------------------------------------------------------------------------

// Interface Layer
//------------------------------------------------------------------------
const interfaceLayer = () => {
    const pageChanged = (menuOption) => {
        headerBar.updateHeaderTitle(menuOption);
        navBar.updateDropDownTitle(menuOption);
        sideBar.applyActiveMenuOptionDecor(menuOption);
        pageSwitcher(menuOption);
    };

    return {
        pageChanged,
    };
};
//------------------------------------------------------------------------

// Init
//------------------------------------------------------------------------
initPageLoad(isPortrait);
const sideBar = sideBarFactory(interfaceLayer());
const navBar = navBarFactory(interfaceLayer());
const headerBar = headerBarFactory(interfaceLayer());
currentPageObject = factoryMap.get(menuOptions.HOME)(isPortrait);
//------------------------------------------------------------------------

// Events
//------------------------------------------------------------------------
const orientation = window.matchMedia("(orientation: portrait)");
orientation.addEventListener("change", () => {
    orientationChange();
});
//------------------------------------------------------------------------

//DEBUG
document.querySelector("body").addEventListener("click", (e) => {
    //console.log(portraitHeaderBar.getActiveMenuOption());
    //console.log(sideBar.getActiveMenuOption());
});
