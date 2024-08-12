import { menuOptions } from "./sideBar";
import { portraitMenuOptions } from "./portraitHeaderBar";
import profilePicture from "./assets/IMG_5527.jpeg";
import linkedInPicture from "./assets/linkedin.png";
import githubPicture from "./assets/github-sign.png";
import homePicture from "./assets/IMG_1815.jpeg";


const initPageLoad = (isPortrait) => {

    document.querySelector("#portraitProfPic").src = profilePicture;
    document.querySelector("#profPic").src = profilePicture;
    const linkedInButtons = document.querySelectorAll(".linkedInImg");
    linkedInButtons.forEach(linkedInButton => {
        linkedInButton.src = linkedInPicture;
    });
    document.querySelectorAll(".githubImg").src = githubPicture;
    const githubButtons = document.querySelectorAll(".githubImg");
    githubButtons.forEach(githubButton => {
        githubButton.src = githubPicture;
    });
    document.querySelector("#portraitHomePicture").src = homePicture;
    document.querySelector("#homePicture").src = homePicture;

    if (isPortrait) {
        document.querySelector("#sideBar").style.display = "none";
        document.querySelector("#headerBar").style.display = "none";
        document.querySelector("#mainContainer").style.display = "flex";
        document.querySelector("#portraitHeaderBar").style.display = "grid";
        document.querySelector("#portraitNavBar").style.display = "flex";
        document.querySelector("#portraitHomePageContent").style.display =
            "block";
        document.querySelector("#desktopHomePageContent").style.display =
            "none";
    } else {
        document.querySelector("#sideBar").style.display = "flex";
        document.querySelector("#headerBar").style.display = "flex";
        document.querySelector("#mainContainer").style.display = "grid";
        document.querySelector("#portraitHeaderBar").style.display = "none";
        document.querySelector("#portraitNavBar").style.display = "none";
        document.querySelector("#portraitHomePageContent").style.display =
            "none";
        document.querySelector("#desktopHomePageContent").style.display =
            "block";
    }
};

const domPagesIDs = new Map();
domPagesIDs.set(menuOptions.HOME, "#homePageContent");
domPagesIDs.set(menuOptions.EDU, "#eduPageContent");
domPagesIDs.set(menuOptions.EXP, "#expPageContent");
domPagesIDs.set(menuOptions.BLOG, "#blogPageContent");
domPagesIDs.set(menuOptions.CURR, "#currPageContent");
domPagesIDs.set(menuOptions.CONT, "#contPageContent");
domPagesIDs.set(menuOptions.PROJ, "#projPageContent");
domPagesIDs.set(portraitMenuOptions.HOME, "#homePageContent");
domPagesIDs.set(portraitMenuOptions.EDU, "#eduPageContent");
domPagesIDs.set(portraitMenuOptions.EXP, "#expPageContent");
domPagesIDs.set(portraitMenuOptions.BLOG, "#blogPageContent");
domPagesIDs.set(portraitMenuOptions.CURR, "#currPageContent");
domPagesIDs.set(portraitMenuOptions.CONT, "#contPageContent");
domPagesIDs.set(portraitMenuOptions.PROJ, "#projPageContent");

const domPages = document.querySelectorAll(".contentPage");

export { initPageLoad, domPagesIDs, domPages };
