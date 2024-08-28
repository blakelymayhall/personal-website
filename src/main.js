import "./styles.css";
import { domPages, domPagesIDs, factoryMap, menuOptions } from "./data/domData";
import { initPageLoad } from "./initPageLoad";
import { sideBarFactory } from "./sideBar";
import { navBarFactory } from "./navBar";
import { headerBarFactory } from "./headerBar";
import { homeFactory } from "./home";
import { eduSkillsFactory } from "./educationSkills";
import { expFactory } from "./experience";
import { contactFactory } from "./contact";
import { projectFactory } from "./project";

// Support
//------------------------------------------------------------------------
const pageSwitcher = (menuOption) => {
    headerBar.updateHeaderTitle(menuOption);
    navBar.updateDropDownTitle(menuOption);
    sideBar.applyActiveMenuOptionDecor(menuOption);
    domPages.forEach((domPage) => {
        domPage.style.cssText = "display:none;";
    });
    const domPageID = domPagesIDs.get(menuOption);
    document.querySelector(`#${domPageID}`).style.cssText = "display:block;";
};

const orientationChange = () => {
    isPortrait = checkIsPortrait();
    initPageLoad(isPortrait);
    homePage.switchOrientation(isPortrait);
    contPage.switchOrientation(isPortrait);
    expPage.switchOrientation(isPortrait);
    projPage.switchOrientation(isPortrait);
    eduPage.switchOrientation(isPortrait);
};

const checkIsPortrait = () => {
    return window.screen.availWidth < window.screen.availHeight && window.screen.availWidth < 1200;
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
let isPortrait = checkIsPortrait();
initPageLoad(isPortrait);
const sideBar = sideBarFactory(interfaceLayer());
const navBar = navBarFactory(interfaceLayer());
const headerBar = headerBarFactory(interfaceLayer());
const homePage = homeFactory(isPortrait);
const eduPage = eduSkillsFactory(isPortrait);
const expPage = expFactory(isPortrait);
const contPage = contactFactory(isPortrait);
const projPage = projectFactory(isPortrait);
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
