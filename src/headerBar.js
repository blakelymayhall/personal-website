const headerBarFactory = () => {
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

    return {
        updateHeaderTitle,
    };
};

export { headerBarFactory };
