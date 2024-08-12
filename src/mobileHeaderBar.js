const mobileHeaderBarFactory = (interfaceLayer) => {
    // Data
    //------------------------------------------------------------------------
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
        interfaceLayer.pageChanged(activeMenuOption);
        document.querySelector("#mobileNavBarMenuDropDownButton").textContent =
            domMobileMenuOptionsText.get(menuOption);
        generateDropdownOptions(menuOption);
    };

    const generateDropdownOptions = (activeMenuOption) => {
        document.querySelector("#mobileNavBarMenuDropDown-content").innerHTML =
            "";
        domMobileMenuOptionsText.forEach((domMobileMenuOptionText) => {
            if (
                domMobileMenuOptionsText.get(activeMenuOption) !=
                domMobileMenuOptionText
            ) {
                const menuOption = document.createElement("p");
                menuOption.setAttribute(
                    "id",
                    getKey(domMobileMenuOptionsText, domMobileMenuOptionText)
                );
                menuOption.textContent = domMobileMenuOptionText;
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
    generateDropdownOptions(activeMenuOption);
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
    EDU: "#mobileEduLink",
    EXP: "#mobileExperienceLink",
    PROJ: "#mobileProjectsLink",
    CURR: "#mobileCurrentActivityLink",
    BLOG: "#mobileBlogLink",
    CONT: "#mobileContactLink",
};

const domMobileMenuOptionsText = new Map();
domMobileMenuOptionsText.set(mobileMenuOptions.HOME, "Home");
domMobileMenuOptionsText.set(mobileMenuOptions.EDU, "Education / Skills");
domMobileMenuOptionsText.set(mobileMenuOptions.EXP, "Experience");
domMobileMenuOptionsText.set(mobileMenuOptions.BLOG, "Blog");
domMobileMenuOptionsText.set(mobileMenuOptions.CURR, "Current Activity");
domMobileMenuOptionsText.set(mobileMenuOptions.CONT, "Contact");
domMobileMenuOptionsText.set(mobileMenuOptions.PROJ, "Projects");

export { mobileHeaderBarFactory, mobileMenuOptions, domMobileMenuOptionsText };
