import "./styles.css";
import { domPages, domPagesIDs, domMenuOptionsText, domPortraitMenuOptionsText } from "./data/domData";
import { initPageLoad } from "./initPageLoad";
import { sideBarFactory } from "./sideBar";
import { navBarFactory } from "./navBar";
import { headerBarFactory } from "./headerBar";
import { homeFactory } from "./home";
import { eduSkillsFactory } from "./educationSkills";
import { expFactory } from "./experience";
import { contactFactory } from "./contact";
import { projectFactory } from "./project";

// Data
//------------------------------------------------------------------------
let isPortrait = window.screen.availWidth < window.screen.availHeight && window.screen.availWidth < 1200;
//------------------------------------------------------------------------

// Support
//------------------------------------------------------------------------
const pageSwitcher = (menuOption) => {
    domPages.forEach((domPage) => {
        domPage.style.cssText = "display:none;";
    });
    const domPageID = domPagesIDs.get(menuOption);
    document.querySelector(`#${domPageID}`).style.cssText = "display:block;";
};

const orientationChange = () => {
    isPortrait = document.body.clientWidth < document.body.clientHeight && window.screen.availWidth < 1200;
    initPageLoad(isPortrait);
    const domMenuOptions = isPortrait ? domMenuOptionsText : domPortraitMenuOptionsText;
    const activeMenuOptionText = domMenuOptions.get(menuOptionController.getActiveMenuOption());
    menuOptionController = isPortrait
        ? navBarFactory(interfaceLayer(), activeMenuOptionText)
        : sideBarFactory(interfaceLayer(), activeMenuOptionText);
    headerBar = isPortrait ? null : headerBarFactory(interfaceLayer(), activeMenuOptionText);
    homePage.switchOrientation(isPortrait);
    eduSkillsPage.switchOrientation(isPortrait);
    expPage.switchOrientation(isPortrait);
    contactPage.switchOrientation(isPortrait);
    projPage.switchOrientation(isPortrait);
};
//------------------------------------------------------------------------

// Interface Layer
//------------------------------------------------------------------------
const interfaceLayer = () => {
    const pageChanged = (menuOption) => {
        if (!isPortrait) {
            headerBar.updateHeaderTitle(domMenuOptionsText.get(menuOption));
        }
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
let menuOptionController = isPortrait ? navBarFactory(interfaceLayer()) : sideBarFactory(interfaceLayer());
let headerBar = isPortrait ? null : headerBarFactory(interfaceLayer());
let homePage = homeFactory(isPortrait);
let eduSkillsPage = eduSkillsFactory(isPortrait);
let expPage = expFactory(isPortrait);
let contactPage = contactFactory(isPortrait);
let projPage = projectFactory(isPortrait);
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
    //console.log(portraitHeaderBar.getActiveMenuOption());
    //console.log(sideBar.getActiveMenuOption());
});
