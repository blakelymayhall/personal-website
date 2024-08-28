const contactFactory = () => {
    // Events
    //------------------------------------------------------------------------
    document.querySelector("#contactForm").onsubmit = (e) => {
        alert(
            "Please verify you are human on the following page to send message.\n\n" +
                "Page will refresh after successful message send"
        );
    };
    //------------------------------------------------------------------------

    // Support
    //------------------------------------------------------------------------
    const switchOrientation = (isPortrait) => {
        isPortrait
            ? document.querySelector("#contPageContent").classList.add("portrait")
            : document.querySelector("#contPageContent").classList.remove("portrait");
        const descendants = document.querySelector("#contPageContent").querySelectorAll("*");
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
    //------------------------------------------------------------------------

    return { switchOrientation };
};

export { contactFactory };
