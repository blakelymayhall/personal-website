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
    // documentMenuOptions.forEach((documentMenuOption) => {
    //     documentMenuOption.addEventListener("click", () => {
    //         activeMenuOption = `#${documentMenuOption.id}`;
    //         applyActiveMenuOptionDecor(activeMenuOption);
    //     });
    // });

    // const profPicture = document.querySelector("#profPic");
    // profPicture.addEventListener("click", () => {
    //     profilePictureOverlay.activate();
    // });
    //------------------------------------------------------------------------

    return {
        updateHeaderTitle,
    };
};

export {headerBarFactory}