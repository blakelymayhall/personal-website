import { profilePictureOverlayFactory } from "./profilePictureOverlay";

const sideBarFactory = () => {
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
            activeMenuOption = `#${documentMenuOption.id}`;
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
        document.querySelector(menuOption).style.cssText =
            "text-decoration:underline;font-family:'RobotoBold';";
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
    };
    //------------------------------------------------------------------------
};

const menuOptions = {
    HOME: "#homeLink",
    ABOUT: "#aboutLink",
    EXP: "#experienceLink",
    PROJ: "#projectsLink",
    CURR: "#currentActivityLink",
    BLOG: "#blogLink",
    CONT: "#contactLink",
};

export { sideBarFactory, menuOptions };
