const sideBarFactory = () => {

    // Data
    //------------------------------------------------------------------------
    let activeMenuOption = menuOptions.HOME;
    const documentMenuOptions = document.querySelectorAll("#sideBarLinks p");
    
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
    return {
        getActiveMenuOption,
    };
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
