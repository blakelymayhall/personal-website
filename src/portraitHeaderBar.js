const portraitHeaderBarFactory = (interfaceLayer) => {
    // Data
    //------------------------------------------------------------------------
    const dropDownContent = document.querySelector("#portraitNavBarMenuDropDown-content");
    const dropDownButton = document.querySelector("#portraitNavBarMenuDropDownButton");
    let dropDownVisible = false;

    let activeMenuOption = portraitMenuOptions.HOME;
    const getActiveMenuOption = () => {
        return activeMenuOption;
    };
    //------------------------------------------------------------------------
    
    // Support
    //------------------------------------------------------------------------
    const getKey = (map, val) => {
        return [...map].find(([key, value]) => val === value)[0];
    };

    const updateActiveMenuOption = (menuOption) => {
        activeMenuOption = menuOption;
        interfaceLayer.pageChanged(activeMenuOption);
        dropDownButton.textContent = domPortraitMenuOptionsText.get(menuOption);
        generateDropdownOptions();
    };

    const generateDropdownOptions = () => {
        dropDownContent.innerHTML = "";
        domPortraitMenuOptionsText.forEach((domPortraitMenuOptionText) => {
            const menuOption = document.createElement("p");
            menuOption.setAttribute("id", getKey(domPortraitMenuOptionsText, domPortraitMenuOptionText));
            menuOption.textContent = domPortraitMenuOptionText;
            dropDownContent.appendChild(menuOption);
            menuOption.addEventListener("click", () => {
                updateActiveMenuOption(menuOption.id);
                dropDownContent.style.cssText = "visibility:hidden;";
                dropDownVisible = false;
            });
        });
    };
    //------------------------------------------------------------------------

    // Events
    //------------------------------------------------------------------------
    dropDownButton.addEventListener("click", (e) => {
        if (!dropDownVisible) {
            dropDownContent.style.cssText = "visibility:visible;";
            dropDownVisible = true;
            e.stopPropagation();
        }
    });

    document.querySelector("body").addEventListener("click", (e) => {
        const clickParent = document.querySelector("#" + e.target.id).parentElement;
        if (dropDownVisible && clickParent != dropDownContent && clickParent != dropDownButton) {
            dropDownContent.style.cssText = "visibility:hidden;";
            dropDownVisible = false;
        }
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
    HOME: "portraitHomeLink",
    EDU: "portraitEduLink",
    EXP: "portraitExperienceLink",
    PROJ: "portraitProjectsLink",
    CURR: "portraitCurrentActivityLink",
    BLOG: "portraitBlogLink",
    CONT: "portraitContactLink",
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
