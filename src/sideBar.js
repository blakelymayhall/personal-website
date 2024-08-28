import { profilePictureOverlayFactory } from "./profilePictureOverlay";
import { menuOptions } from "./data/domData";

const sideBarFactory = (interfaceLayer) => {
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
        });
    });

    const profPicture = document.querySelector("#profPic");
    profPicture.addEventListener("click", () => {
        profilePictureOverlay.activate();
    });
    //------------------------------------------------------------------------

    // Support
    //------------------------------------------------------------------------
    const applyActiveMenuOptionDecor = (activeMenuOption) => {
        documentMenuOptions.forEach((documentMenuOption) => {
            documentMenuOption.style.cssText = "text-decoration:none;";
        });
        activeMenuOption = removePortrait(activeMenuOption);
        document.querySelector(`#${activeMenuOption}`).style.cssText =
            "text-decoration:underline;font-family:'RobotoBold';";
    };

    const removePortrait = (menuOption) => {
        const portraitIndex = menuOption.indexOf("portrait");
        if (portraitIndex !== -1) {
            let newMenuOption = menuOption.slice(0, portraitIndex) + menuOption.slice(portraitIndex + "portrait".length);
            if (portraitIndex < newMenuOption.length) {
                newMenuOption =
                    newMenuOption.slice(0, portraitIndex) +
                    newMenuOption.charAt(portraitIndex).toLowerCase() +
                    newMenuOption.slice(portraitIndex + 1);
            }
            return newMenuOption;
        } else {
            return menuOption;
        }
    };
    //------------------------------------------------------------------------

    // Init
    //------------------------------------------------------------------------
    applyActiveMenuOptionDecor(activeMenuOption);
    //------------------------------------------------------------------------

    // Export Functions
    //------------------------------------------------------------------------
    return {
        getActiveMenuOption,
        applyActiveMenuOptionDecor,
    };
    //------------------------------------------------------------------------
};

export { sideBarFactory };
