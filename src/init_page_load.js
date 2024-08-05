const initPageLoad = (isMobile) => {
    if (isMobile) {
        document.querySelector("#sideBar").style.display = "none";
        document.querySelector("#headerBar").style.display = "none";
        document.querySelector("#mainContainer").style.display = "flex";
        document.querySelector("#mobileHeaderBar").style.display = "grid";
        document.querySelector("#mobileNavBar").style.display = "flex";
        document.querySelector("#mobileHomePageContent").style.display = "block";
        document.querySelector("#desktopHomePageContent").style.display = "none";
    } else {
        document.querySelector("#sideBar").style.display = "flex";
        document.querySelector("#headerBar").style.display = "flex";
        document.querySelector("#mainContainer").style.display = "grid";
        document.querySelector("#mobileHeaderBar").style.display = "none";
        document.querySelector("#mobileNavBar").style.display = "none";
        document.querySelector("#mobileHomePageContent").style.display = "none";
        document.querySelector("#desktopHomePageContent").style.display = "block";
    }
};

export { initPageLoad };