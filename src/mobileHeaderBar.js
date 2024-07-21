const mobileHeaderBarFactory = (isMobile) => {
    // Data
    //------------------------------------------------------------------------
    const documentMenuOptionsText = new Map();
    documentMenuOptionsText.set(mobileMenuOptions.HOME, "Home");
    documentMenuOptionsText.set(mobileMenuOptions.ABOUT, "About");
    documentMenuOptionsText.set(mobileMenuOptions.EXP, "Experience");
    documentMenuOptionsText.set(mobileMenuOptions.BLOG, "Blog");
    documentMenuOptionsText.set(mobileMenuOptions.CURR, "Current Activity");
    documentMenuOptionsText.set(mobileMenuOptions.CONT, "Contact");
    documentMenuOptionsText.set(mobileMenuOptions.PROJ, "Projects");

    let activeMenuOption = mobileMenuOptions.HOME;
    const getActiveMenuOption = () => {
        return activeMenuOption;
    };
    //------------------------------------------------------------------------

    // Events
    //------------------------------------------------------------------------

    //------------------------------------------------------------------------

    // Support
    //------------------------------------------------------------------------
    const getKey = (map, val) => {
        return [...map].find(([key, value]) => val === value)[0];
    };

    const updateActiveMenuOption = (menuOption) => {
        activeMenuOption = menuOption;
        document.querySelector("#mobileNavBarMenuDropDownButton").textContent =
            documentMenuOptionsText.get(menuOption);
        generateDropdownOptions(menuOption);
    };

    const generateDropdownOptions = (activeMenuOption) => {
        document.querySelector("#mobileNavBarMenuDropDown-content").innerHTML =
            "";
        documentMenuOptionsText.forEach((documentMenuOptionText) => {
            if (
                documentMenuOptionsText.get(activeMenuOption) !=
                documentMenuOptionText
            ) {
                const menuOption = document.createElement("p");
                menuOption.setAttribute(
                    "id",
                    getKey(documentMenuOptionsText, documentMenuOptionText)
                );
                menuOption.textContent = documentMenuOptionText;
                document
                    .querySelector("#mobileNavBarMenuDropDown-content")
                    .appendChild(menuOption);
                menuOption.addEventListener("click", () => {
                    updateActiveMenuOption(menuOption.id);
                });
            }
        });
    };
    //------------------------------------------------------------------------

    // Init
    //------------------------------------------------------------------------
    if (isMobile) {
        generateDropdownOptions(activeMenuOption);
    };
    //------------------------------------------------------------------------

    // Export Functions
    //------------------------------------------------------------------------
    return {
        getActiveMenuOption,
    };
    //------------------------------------------------------------------------
};

const mobileMenuOptions = {
    HOME: "#mobileHomeLink",
    ABOUT: "#mobileAboutLink",
    EXP: "#mobileExperienceLink",
    PROJ: "#mobileProjectsLink",
    CURR: "#mobileCurrentActivityLink",
    BLOG: "#mobileBlogLink",
    CONT: "#mobileContactLink",
};

export { mobileHeaderBarFactory, mobileMenuOptions };
