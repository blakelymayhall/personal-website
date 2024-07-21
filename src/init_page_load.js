const initPageLoad = (isMobile) => {
    if (isMobile) {
        document.querySelector("#sideBar").style.display = "none";
        document.querySelector("#headerBar").style.display = "none";
        document.querySelector("#mainContainer").style.display = "flex";
        document.querySelector("#mobileHeaderBar").style.display = "grid";
        document.querySelector("#mobileNavBar").style.display = "flex";
    }
};

export { initPageLoad };