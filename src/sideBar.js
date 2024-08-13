import { profilePictureOverlayFactory } from "./profilePictureOverlay";

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
    HOME: "homeLink",
    EDU: "eduLink",
    EXP: "experienceLink",
    PROJ: "projectsLink",
    CURR: "currentActivityLink",
    BLOG: "blogLink",
    CONT: "contactLink",
};

const domMenuOptionsText = new Map();
domMenuOptionsText.set(menuOptions.HOME, "Home");
domMenuOptionsText.set(menuOptions.EDU, "Education / Skill");
domMenuOptionsText.set(menuOptions.EXP, "Experience");
domMenuOptionsText.set(menuOptions.BLOG, "Blog");
domMenuOptionsText.set(menuOptions.CURR, "Current Activity");
domMenuOptionsText.set(menuOptions.CONT, "Contact");
domMenuOptionsText.set(menuOptions.PROJ, "Projects");

export { sideBarFactory, menuOptions, domMenuOptionsText };
