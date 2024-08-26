const contactFactory = (isPortrait) => {
    // Events
    //------------------------------------------------------------------------
    document.querySelector("#contactForm").onsubmit = (e) => {
        e.preventDefault();
        console.log("Got em");
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
    // Style Update for Portrait Mode
    switchOrientation(isPortrait);
    //------------------------------------------------------------------------
};

export { contactFactory };
