import { menuOptions } from "./sideBar";
import { mobileMenuOptions } from "./mobileHeaderBar";

const initPageLoad = (isMobile) => {
    if (isMobile) {
        document.querySelector("#sideBar").style.display = "none";
        document.querySelector("#headerBar").style.display = "none";
        document.querySelector("#mainContainer").style.display = "flex";
        document.querySelector("#mobileHeaderBar").style.display = "grid";
        document.querySelector("#mobileNavBar").style.display = "flex";
        document.querySelector("#mobileHomePageContent").style.display = "block";
        document.querySelector("#desktopHomePageContent").style.display = "none";
    } else {
        document.querySelector("#sideBar").style.display = "flex";
        document.querySelector("#headerBar").style.display = "flex";
        document.querySelector("#mainContainer").style.display = "grid";
        document.querySelector("#mobileHeaderBar").style.display = "none";
        document.querySelector("#mobileNavBar").style.display = "none";
        document.querySelector("#mobileHomePageContent").style.display = "none";
        document.querySelector("#desktopHomePageContent").style.display = "block";
    }
};

const domPagesIDs = new Map();
domPagesIDs.set(menuOptions.HOME, "#homePageContent");
domPagesIDs.set(menuOptions.EDU, "#eduPageContent");
domPagesIDs.set(menuOptions.EXP, "#expPageContent");
domPagesIDs.set(menuOptions.BLOG, "#blogPageContent");
domPagesIDs.set(menuOptions.CURR, "#currPageContent");
domPagesIDs.set(menuOptions.CONT, "#contPageContent");
domPagesIDs.set(menuOptions.PROJ, "#projPageContent");
domPagesIDs.set(mobileMenuOptions.HOME, "#homePageContent");
domPagesIDs.set(mobileMenuOptions.EDU, "#eduPageContent");
domPagesIDs.set(mobileMenuOptions.EXP, "#expPageContent");
domPagesIDs.set(mobileMenuOptions.BLOG, "#blogPageContent");
domPagesIDs.set(mobileMenuOptions.CURR, "#currPageContent");
domPagesIDs.set(mobileMenuOptions.CONT, "#contPageContent");
domPagesIDs.set(mobileMenuOptions.PROJ, "#projPageContent");

const domPages = document.querySelectorAll(".contentPage");

export { initPageLoad, domPagesIDs, domPages};