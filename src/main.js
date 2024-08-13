import "./styles.css";
import { initPageLoad, domPages, domPagesIDs } from "./initPageLoad";
import { sideBarFactory, domMenuOptionsText } from "./sideBar";
import { portraitHeaderBarFactory } from "./portraitHeaderBar";
import { headerBarFactory } from "./headerBar";

// Data
//------------------------------------------------------------------------
let isPortrait = document.body.clientWidth < document.body.clientHeight;
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
//------------------------------------------------------------------------

// Events
//------------------------------------------------------------------------
let portrait = window.matchMedia("(orientation: portrait)");
portrait.addEventListener("change", function (e) {
    isPortrait = document.body.clientWidth < document.body.clientHeight;
    initPageLoad(isPortrait);
    menuOptionController = isPortrait ? portraitHeaderBarFactory(interfaceLayer()) : sideBarFactory(interfaceLayer());
    headerBar = isPortrait ? null : headerBarFactory(interfaceLayer());
});
//------------------------------------------------------------------------

//DEBUG
document.querySelector("body").addEventListener("click", (e) => {
    //console.log(portraitHeaderBar.getActiveMenuOption());
    //console.log(sideBar.getActiveMenuOption());
});
