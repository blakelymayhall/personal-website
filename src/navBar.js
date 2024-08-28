import { menuOptions, portraitMenuOptions } from "./data/domData";

const navBarFactory = (interfaceLayer) => {
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
    const updateActiveMenuOption = (menuOption) => {
        activeMenuOption = menuOption;
        interfaceLayer.pageChanged(activeMenuOption);
        updateDropDownTitle(menuOption);
        generateDropdownOptions();
    };

    const updateDropDownTitle = (menuOption) => {
        dropDownButton.textContent = document.querySelector(`#${menuOption}`).textContent;
    };

    const generateDropdownOptions = () => {
        dropDownContent.innerHTML = "";
        for (const menuOptionID of Object.values(menuOptions)) {
            const portraitMenuOption = document.createElement("p");
            let portraitMenuOptionID = menuOptionID;
            portraitMenuOptionID =
                "portrait" + portraitMenuOptionID.charAt(0).toUpperCase() + portraitMenuOptionID.slice(1);
            portraitMenuOption.setAttribute("id", portraitMenuOptionID);
            portraitMenuOption.textContent = document.querySelector(`#${menuOptionID}`).textContent;
            dropDownContent.appendChild(portraitMenuOption);
            portraitMenuOption.addEventListener("click", (e) => {
                updateActiveMenuOption(portraitMenuOption.id);
                dropDownContent.style.cssText = "visibility:hidden;display:none;";
                dropDownVisible = false;
                e.stopPropagation();
            });
        }
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
    //------------------------------------------------------------------------

    // Export Functions
    //------------------------------------------------------------------------
    return {
        getActiveMenuOption,
        updateDropDownTitle,
    };
    //------------------------------------------------------------------------
};

export { navBarFactory };
