import {portraitMenuOptions, domPortraitMenuOptionsText} from "./data/domData"

const navBarFactory = (interfaceLayer, initMenuOptionText = null) => {
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
            menuOption.addEventListener("click", (e) => {
                updateActiveMenuOption(menuOption.id);
                dropDownContent.style.cssText = "visibility:hidden;display:none;";
                dropDownVisible = false;
                e.stopPropagation();
            });
        });
    };
    //------------------------------------------------------------------------

    // Events
    //------------------------------------------------------------------------
    dropDownButton.addEventListener("click", (e) => {
        if (!dropDownVisible) {
            dropDownContent.style.cssText = "visibility:visible;display:block;";
            dropDownVisible = true;
            e.stopPropagation();
        }
    });

    document.querySelector("body").addEventListener("click", (e) => {
        const clickParent = e.target.parentElement;
        if (dropDownVisible && clickParent != dropDownContent && clickParent != dropDownButton) {
            dropDownContent.style.cssText = "visibility:hidden;display:none;";
            dropDownVisible = false;
            e.stopPropagation();
        }
    });
    //------------------------------------------------------------------------

    // Init
    //------------------------------------------------------------------------
    generateDropdownOptions();

    if (initMenuOptionText != null) {
        activeMenuOption = getKey(domPortraitMenuOptionsText,initMenuOptionText);  
        dropDownButton.textContent = initMenuOptionText;
    }
    //------------------------------------------------------------------------

    // Export Functions
    //------------------------------------------------------------------------
    return {
        getActiveMenuOption,
    };
    //------------------------------------------------------------------------
};

export { navBarFactory };
