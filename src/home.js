import homePicture from "./assets/IMG_1815.jpeg";

const homeFactory = (isPortrait) => {
    // Init
    //------------------------------------------------------------------------
    if (isPortrait) {
        document.querySelector("#portraitHomePageContent").style.display = "block";
        document.querySelector("#desktopHomePageContent").style.display = "none";
    } else {
        document.querySelector("#portraitHomePageContent").style.display = "none";
        document.querySelector("#desktopHomePageContent").style.display = "block";
    }
    document.querySelector("#portraitHomePicture").src = homePicture;
    document.querySelector("#homePicture").src = homePicture;
    //------------------------------------------------------------------------
};

export { homeFactory }