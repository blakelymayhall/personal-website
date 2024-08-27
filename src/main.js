import "./styles.css";
import { initPageLoad } from "./initPageLoad";
import { sideBarFactory } from "./sideBar";
import { navBarFactory } from "./navBar";
import { domMenuOptionsText, domPortraitMenuOptionsText, htmlPages, factoryMap } from "./data/domData";
import { headerBarFactory } from "./headerBar";

// Data
//------------------------------------------------------------------------
const currentContentPageID = document.querySelector(".contentPage").id;
let isPortrait = window.screen.availWidth < window.screen.availHeight && window.screen.availWidth < 1200;
//------------------------------------------------------------------------

// Support
//------------------------------------------------------------------------
const pageSwitcher = (menuOption) => {
    window.location = htmlPages.get(menuOption);
};

const orientationChange = () => {
    isPortrait = document.body.clientWidth < document.body.clientHeight && window.screen.availWidth < 1200;
    initPageLoad(isPortrait);
    const domMenuOptions = isPortrait ? domMenuOptionsText : domPortraitMenuOptionsText;
    const activeMenuOptionText = domMenuOptions.get(menuOptionController.getActiveMenuOption());
    menuOptionController = isPortrait ? navBarFactory(activeMenuOptionText) : sideBarFactory(activeMenuOptionText);
    headerBar = isPortrait ? null : headerBarFactory(activeMenuOptionText);
    activatePage.switchOrientation(isPortrait);
};
//------------------------------------------------------------------------

// Interface Layer
//------------------------------------------------------------------------
const interfaceLayer = () => {
    const pageChanged = (menuOption) => {
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
let menuOptionController = isPortrait
    ? navBarFactory(interfaceLayer())
    : sideBarFactory(interfaceLayer(), currentContentPageID);
let headerBar = isPortrait ? null : headerBarFactory();
let activatePage = factoryMap.get(currentContentPageID)();
//------------------------------------------------------------------------

// Events
//------------------------------------------------------------------------
let portrait = window.matchMedia("(orientation: portrait)");
portrait.addEventListener("change", () => {
    orientationChange();
});
//------------------------------------------------------------------------

//DEBUG
document.querySelector("body").addEventListener("click", (e) => {
    //window.location.href = "education_skills.html";
    //console.log(portraitHeaderBar.getActiveMenuOption());
    //console.log(sideBar.getActiveMenuOption());
});
