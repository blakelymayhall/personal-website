import homePicture from "./assets/IMG_1815.jpeg";

const homeFactory = () => {
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
    //------------------------------------------------------------------------

    return { switchOrientation };
};

export { homeFactory };
