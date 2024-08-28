import profilePicture from "./assets/IMG_5527.jpeg";
import linkedInPicture from "./assets/linkedin.png";
import githubPicture from "./assets/github-sign.png";
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
    const initSideBarDOM = () => {
        document.querySelector("#profPic").src = profilePicture;
        const linkedInButtons = document.querySelectorAll(".linkedInImg");
        linkedInButtons.forEach((linkedInButton) => {
            linkedInButton.src = linkedInPicture;
        });
        document.querySelectorAll(".githubImg").src = githubPicture;
        const githubButtons = document.querySelectorAll(".githubImg");
        githubButtons.forEach((githubButton) => {
            githubButton.src = githubPicture;
        });
    };

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
            let newMenuOption =
                menuOption.slice(0, portraitIndex) + menuOption.slice(portraitIndex + "portrait".length);
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

    const switchOrientation = (isPortrait) => {
        isPortrait
            ? (document.querySelector("#sideBar").style.display = "none")
            : (document.querySelector("#sideBar").style.display = "flex");
    };
    //------------------------------------------------------------------------

    // Init
    //------------------------------------------------------------------------
    initSideBarDOM();
    applyActiveMenuOptionDecor(activeMenuOption);
    //------------------------------------------------------------------------

    // Export Functions
    //------------------------------------------------------------------------
    return {
        getActiveMenuOption,
        applyActiveMenuOptionDecor,
        switchOrientation,
    };
    //------------------------------------------------------------------------
};

export { sideBarFactory };
