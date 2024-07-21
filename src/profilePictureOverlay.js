const profilePictureOverlayFactory = () => {
    // Data
    //------------------------------------------------------------------------
    let profilePictureOverlayActive = false;
    const getProfilePictureOverlayActive = () => {
        return profilePictureOverlayActive;
    };

    const docProfPicture = document.querySelector("#profPic");
    //------------------------------------------------------------------------

    // Support
    //------------------------------------------------------------------------
    const activate = () => {
        profilePictureOverlayActive = true;
        document.querySelector("#profPicOverlay").style.display = "flex";
    }
    //------------------------------------------------------------------------

    // Events
    //------------------------------------------------------------------------
    document.querySelector("body").addEventListener("click", (e) => {
        if (profilePictureOverlayActive && e.target != docProfPicture) {
            document.querySelector("#profPicOverlay").style.display = "none";
            profilePictureOverlayActive = false;
        }
    });
    //------------------------------------------------------------------------

    // Export Functions
    //------------------------------------------------------------------------
    return {
        activate,
        getProfilePictureOverlayActive,
    };
    //------------------------------------------------------------------------

};

export {profilePictureOverlayFactory}