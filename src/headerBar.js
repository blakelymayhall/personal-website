const headerBarFactory = (interfaceLayer, initMenuOptionText = null) => {
    // Data
    //------------------------------------------------------------------------
    const domHeaderBarTitle = document.querySelector("#headerBarTitle");
    //------------------------------------------------------------------------

    // Support
    //------------------------------------------------------------------------
    const updateHeaderTitle = (activeMenuOption) => {
        domHeaderBarTitle.textContent = activeMenuOption;
    };
    //------------------------------------------------------------------------

    // Events
    //------------------------------------------------------------------------
    //------------------------------------------------------------------------

    // Init
    //------------------------------------------------------------------------
    if (initMenuOptionText != null) {
        updateHeaderTitle(initMenuOptionText);
    }
    //------------------------------------------------------------------------

    return {
        updateHeaderTitle,
    };
};

export { headerBarFactory };
