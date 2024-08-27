import { profilePictureOverlayFactory } from "./profilePictureOverlay";
import { menuOptions, domMenuOptionsText } from "./data/domData";

const sideBarFactory = (interfaceLayer, initMenuOptionText = null) => {
    // Data
    //------------------------------------------------------------------------
    let profilePictureOverlay = profilePictureOverlayFactory();
    const documentMenuOptions = document.querySelectorAll("#sideBarLinks p");
    let activeMenuOption = menuOptions.HOME;
    const getActiveMenuOption = () => {
        return activeMenuOption;
    };
    //------------------------------------------------------------------------

    // Events
    //------------------------------------------------------------------------
    documentMenuOptions.forEach((documentMenuOption) => {
        documentMenuOption.addEventListener("click", () => {
            activeMenuOption = documentMenuOption.id;
            interfaceLayer.pageChanged(activeMenuOption);
            applyActiveMenuOptionDecor(activeMenuOption);
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

    const getKey = (map, val) => {
        return [...map].find(([key, value]) => val === value)[0];
    };
    //------------------------------------------------------------------------

    // Init
    //------------------------------------------------------------------------
    if (initMenuOptionText != null) {
        activeMenuOption = getKey(domMenuOptionsText,initMenuOptionText);  
    }
    applyActiveMenuOptionDecor(activeMenuOption);
    //------------------------------------------------------------------------

    // Export Functions
    //------------------------------------------------------------------------
    return {
        getActiveMenuOption,
    };
    //------------------------------------------------------------------------
};

export { sideBarFactory };
