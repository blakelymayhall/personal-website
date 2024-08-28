const headerBarFactory = () => {
    // Data
    //------------------------------------------------------------------------
    const domHeaderBarTitle = document.querySelector("#headerBarTitle");
    //------------------------------------------------------------------------

    // Support
    //------------------------------------------------------------------------
    const updateHeaderTitle = (activeMenuOption) => {
        domHeaderBarTitle.textContent = document.querySelector(`#${activeMenuOption}`).textContent;
    };

    const switchOrientation = (isPortrait) => {
        isPortrait
            ? (document.querySelector("#headerBar").style.display = "none")
            : (document.querySelector("#headerBar").style.display = "flex");
    };
    //------------------------------------------------------------------------

    // Events
    //------------------------------------------------------------------------
    //------------------------------------------------------------------------

    // Init
    //------------------------------------------------------------------------
    //------------------------------------------------------------------------

    return {
        updateHeaderTitle,
        switchOrientation,
    };
};

export { headerBarFactory };
