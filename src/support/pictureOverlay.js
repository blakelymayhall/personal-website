const pictureOverlayFactory = () => {
    // Data
    //------------------------------------------------------------------------
    let overlayActive = false;
    let clickedPicture = null;
    //------------------------------------------------------------------------

    // Support
    //------------------------------------------------------------------------
    const activate = (imgDOM, isScreenShot = null, width=null) => {
        overlayActive = true;
        clickedPicture = imgDOM;
        document.querySelector("#maskOverlay").style.display = "block"
        document.querySelector("#pictureOverlay").style.display = "flex";
        document.querySelector("#pictureOverlay").style.backgroundImage = `url(${imgDOM.src})`;
        if (isScreenShot) {
            document.querySelector("#pictureOverlay").classList.add("screenShot");
        } else {
            document.querySelector("#pictureOverlay").classList.remove("screenShot");
        }
    };
    //------------------------------------------------------------------------

    // Events
    //------------------------------------------------------------------------
    document.querySelector("body").addEventListener("click", (e) => {
        if (overlayActive && e.target != clickedPicture) {
            document.querySelector("#pictureOverlay").style.display = "none";
            document.querySelector("#maskOverlay").style.display = "none"
            overlayActive = false;
        }
    });
    //------------------------------------------------------------------------

    // Export Functions
    //------------------------------------------------------------------------
    return {
        activate,
    };
    //------------------------------------------------------------------------
};

export { pictureOverlayFactory };
