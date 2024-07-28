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
const domPages = document.querySelectorAll(".contentPage");
const domPagesIDs = new Map();
domPagesIDs.set(menuOptions.HOME, "#homePageContent");
domPagesIDs.set(menuOptions.ABOUT, "#aboutPageContent");
domPagesIDs.set(menuOptions.EXP, "#expPageContent");
domPagesIDs.set(menuOptions.BLOG, "#blogPageContent");
domPagesIDs.set(menuOptions.CURR, "#currPageContent");
domPagesIDs.set(menuOptions.CONT, "#contPageContent");
domPagesIDs.set(menuOptions.PROJ, "#projPageContent");
domPagesIDs.set(mobileMenuOptions.HOME, "#homePageContent");
domPagesIDs.set(mobileMenuOptions.ABOUT, "#aboutPageContent");
domPagesIDs.set(mobileMenuOptions.EXP, "#expPageContent");
domPagesIDs.set(mobileMenuOptions.BLOG, "#blogPageContent");
domPagesIDs.set(mobileMenuOptions.CURR, "#currPageContent");
domPagesIDs.set(mobileMenuOptions.CONT, "#contPageContent");
domPagesIDs.set(mobileMenuOptions.PROJ, "#projPageContent");
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

//DEBUG 
document.querySelector("body").addEventListener("click", (e) => {
    //console.log(mobileHeaderBar.getActiveMenuOption());
    //console.log(sideBar.getActiveMenuOption());
});