const portraitHeaderBarFactory = (interfaceLayer) => {
    // Data
    //------------------------------------------------------------------------
    let activeMenuOption = portraitMenuOptions.HOME;
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
        document.querySelector("#portraitNavBarMenuDropDownButton").textContent =
            domPortraitMenuOptionsText.get(menuOption);
        generateDropdownOptions();
    };

    const generateDropdownOptions = () => {
        document.querySelector("#portraitNavBarMenuDropDown-content").innerHTML = "";
        domPortraitMenuOptionsText.forEach((domPortraitMenuOptionText) => {
            const menuOption = document.createElement("p");
            menuOption.setAttribute("id", getKey(domPortraitMenuOptionsText, domPortraitMenuOptionText));
            menuOption.textContent = domPortraitMenuOptionText;
            document.querySelector("#portraitNavBarMenuDropDown-content").appendChild(menuOption);
            menuOption.addEventListener("click", () => {
                updateActiveMenuOption(menuOption.id);
                document.querySelector("#portraitNavBarMenuDropDown-content").style.display = "none";
            });
        });
    };
    //------------------------------------------------------------------------

    // Events
    //------------------------------------------------------------------------
    const dropDownButton = document.querySelector("#portraitNavBarMenuDropDownButton");
    dropDownButton.addEventListener("click", () => {
        document.querySelector("#portraitNavBarMenuDropDown-content").style.display = "block";
    });
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

const portraitMenuOptions = {
    HOME: "#portraitHomeLink",
    EDU: "#portraitEduLink",
    EXP: "#portraitExperienceLink",
    PROJ: "#portraitProjectsLink",
    CURR: "#portraitCurrentActivityLink",
    BLOG: "#portraitBlogLink",
    CONT: "#portraitContactLink",
};

const domPortraitMenuOptionsText = new Map();
domPortraitMenuOptionsText.set(portraitMenuOptions.HOME, "Home");
domPortraitMenuOptionsText.set(portraitMenuOptions.EDU, "Education / Skills");
domPortraitMenuOptionsText.set(portraitMenuOptions.EXP, "Experience");
domPortraitMenuOptionsText.set(portraitMenuOptions.BLOG, "Blog");
domPortraitMenuOptionsText.set(portraitMenuOptions.CURR, "Current Activity");
domPortraitMenuOptionsText.set(portraitMenuOptions.CONT, "Contact");
domPortraitMenuOptionsText.set(portraitMenuOptions.PROJ, "Projects");

export { portraitHeaderBarFactory, portraitMenuOptions, domPortraitMenuOptionsText };
