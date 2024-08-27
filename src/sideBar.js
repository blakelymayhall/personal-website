import { profilePictureOverlayFactory } from "./profilePictureOverlay";
import {contentPageIDs} from "./data/domData"

const sideBarFactory = (interfaceLayer, currentPageID) => {
    // Data
    //------------------------------------------------------------------------
    const sideBarOptionsMap = new Map();
    sideBarOptionsMap.set(contentPageIDs.HOME, "homeLink");
    sideBarOptionsMap.set(contentPageIDs.EDU, "eduLink");
    sideBarOptionsMap.set(contentPageIDs.EXP, "experienceLink");
    sideBarOptionsMap.set(contentPageIDs.BLOG, "blogLink");
    sideBarOptionsMap.set(contentPageIDs.CURR, "currentActivityLink");
    sideBarOptionsMap.set(contentPageIDs.CONT, "contactLink");
    sideBarOptionsMap.set(contentPageIDs.PROJ, "projectsLink");
    const profilePictureOverlay = profilePictureOverlayFactory();
    const documentMenuOptions = document.querySelectorAll("#sideBarLinks p");
    //------------------------------------------------------------------------

    // Events
    //------------------------------------------------------------------------
    documentMenuOptions.forEach((documentMenuOption) => {
        documentMenuOption.addEventListener("click", () => {
            interfaceLayer.pageChanged(documentMenuOption.id);
        });
    });

    const profPicture = document.querySelector("#profPic");
    profPicture.addEventListener("click", () => {
        profilePictureOverlay.activate();
    });
    //------------------------------------------------------------------------

    // Support
    //------------------------------------------------------------------------
    const applyActiveMenuOptionDecor = (menuOption) => {
        documentMenuOptions.forEach((documentMenuOption) => {
            documentMenuOption.style.cssText = "text-decoration:none;";
        });
        document.querySelector(`#${menuOption}`).style.cssText = "text-decoration:underline;font-family:'RobotoBold';";
    };
    //------------------------------------------------------------------------

    // Init
    //------------------------------------------------------------------------
    applyActiveMenuOptionDecor(sideBarOptionsMap.get(currentPageID));
    //------------------------------------------------------------------------
};

export { sideBarFactory };
