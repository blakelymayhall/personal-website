import homePicture from "./assets/IMG_1815.jpeg";

const homeFactory = (isPortrait) => {
    // Support
    //------------------------------------------------------------------------
    const switchOrientation = (isPortrait) => {
        const descendants = document.querySelector("#homePageContent").querySelectorAll("*");
        descendants.forEach((descendant) => {
            if (isPortrait) {
                descendant.classList.add("portrait");
            } else {
                descendant.classList.remove("portrait");
            }
        });
    };
    //------------------------------------------------------------------------

    // Init
    //------------------------------------------------------------------------
    document.querySelector("#homePicture").src = homePicture;

    // Style Update for Portrait Mode
    switchOrientation(isPortrait);
    //------------------------------------------------------------------------

    return { switchOrientation };
};

export { homeFactory };
