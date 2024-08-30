import "./styles.css";
import { domPages, domPagesIDs } from "./data/domData";
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
    if (isPortrait) {
        document.querySelector("#mainContainer").style.display = "flex";
        document.body.classList.add("portrait");
        document.querySelector("#mainContainer").classList.add("portrait");
    } else {
        document.querySelector("#mainContainer").style.display = "grid";
        document.body.classList.remove("portrait");
        document.querySelector("#mainContainer").classList.remove("portrait");
    }
    sideBar.switchOrientation(isPortrait);
    headerBar.switchOrientation(isPortrait);
    navBar.switchOrientation(isPortrait);
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

    const getIsPortrait = () => {
        return checkIsPortrait();
    };

    return {
        pageChanged,
        getIsPortrait,
    };
};
//------------------------------------------------------------------------

// Init
//------------------------------------------------------------------------
const sideBar = sideBarFactory(interfaceLayer());
const navBar = navBarFactory(interfaceLayer());
const headerBar = headerBarFactory(interfaceLayer());
const homePage = homeFactory();
const eduPage = eduSkillsFactory();
const expPage = expFactory();
const contPage = contactFactory();
const projPage = projectFactory(interfaceLayer());

let isPortrait = checkIsPortrait();
orientationChange();
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
