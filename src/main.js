import "./styles.css";
import { initPageLoad, domPages, domPagesIDs } from "./initPageLoad";
import { sideBarFactory, domMenuOptionsText } from "./sideBar";
import { portraitHeaderBarFactory, domPortraitMenuOptionsText } from "./portraitHeaderBar";
import { headerBarFactory } from "./headerBar";
import { eduSkillsFactory } from "./educationSkills";
import { expFactory } from "./experience";
import { contact, contactFactory } from "./contact";

// Data
//------------------------------------------------------------------------
let isPortrait = document.body.clientWidth < document.body.clientHeight && window.screen.availWidth < 1200;
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
    const domMenuOptions = isPortrait ?  domMenuOptionsText : domPortraitMenuOptionsText;
    const activeMenuOptionText = domMenuOptions.get(menuOptionController.getActiveMenuOption());
    menuOptionController = isPortrait
        ? portraitHeaderBarFactory(interfaceLayer(), activeMenuOptionText)
        : sideBarFactory(interfaceLayer(), activeMenuOptionText);
    headerBar = isPortrait ? null : headerBarFactory(interfaceLayer(), activeMenuOptionText);
    eduSkillsPage.switchOrientation(isPortrait);
    expPage.switchOrientation(isPortrait);
    contactPage.switchOrientation(isPortrait);
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
let menuOptionController = isPortrait ? portraitHeaderBarFactory(interfaceLayer()) : sideBarFactory(interfaceLayer());
let headerBar = isPortrait ? null : headerBarFactory(interfaceLayer());
let eduSkillsPage = eduSkillsFactory(isPortrait);
let expPage = expFactory(isPortrait);
let contactPage = contactFactory(isPortrait);
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
