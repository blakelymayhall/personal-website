import homePicture from "./assets/IMG_1815.jpeg";

const homeFactory = (isPortrait) => {
    // Support
    //------------------------------------------------------------------------
    const switchOrientation = (isPortrait) => {
        if (isPortrait) {
            document.querySelector("#portraitHomePageContent").style.display = "block";
            document.querySelector("#desktopHomePageContent").style.display = "none";
        } else {
            document.querySelector("#portraitHomePageContent").style.display = "none";
            document.querySelector("#desktopHomePageContent").style.display = "block";
        }
    };
    //------------------------------------------------------------------------

    // Init
    //------------------------------------------------------------------------
    document.querySelector("#portraitHomePicture").src = homePicture;
    document.querySelector("#homePicture").src = homePicture;

    // Style Update for Portrait Mode
    switchOrientation(isPortrait);
    //------------------------------------------------------------------------

    return { switchOrientation };
};

export { homeFactory };
