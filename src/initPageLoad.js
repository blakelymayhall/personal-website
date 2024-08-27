import profilePicture from "./assets/IMG_5527.jpeg";
import linkedInPicture from "./assets/linkedin.png";
import githubPicture from "./assets/github-sign.png";
import { domPagesIDs, domPages } from "./data/domData";

const initPageLoad = (isPortrait) => {
    document.querySelector("#portraitProfPic").src = profilePicture;
    document.querySelector("#profPic").src = profilePicture;
    const linkedInButtons = document.querySelectorAll(".linkedInImg");
    linkedInButtons.forEach((linkedInButton) => {
        linkedInButton.src = linkedInPicture;
    });
    document.querySelectorAll(".githubImg").src = githubPicture;
    const githubButtons = document.querySelectorAll(".githubImg");
    githubButtons.forEach((githubButton) => {
        githubButton.src = githubPicture;
    });

    if (isPortrait) {
        document.querySelector("#sideBar").style.display = "none";
        document.querySelector("#headerBar").style.display = "none";
        document.querySelector("#mainContainer").style.display = "flex";
        document.querySelector("#portraitHeaderBar").style.display = "grid";
        document.querySelector("#portraitNavBar").style.display = "flex";
        document.body.classList.add("portrait");
        document.querySelector("#mainContainer").classList.add("portrait");
    } else {
        document.querySelector("#sideBar").style.display = "flex";
        document.querySelector("#headerBar").style.display = "flex";
        document.querySelector("#mainContainer").style.display = "grid";
        document.querySelector("#portraitHeaderBar").style.display = "none";
        document.querySelector("#portraitNavBar").style.display = "none";
        document.body.classList.remove("portrait");
        document.querySelector("#mainContainer").classList.remove("portrait");
    }
};

export { initPageLoad, domPagesIDs, domPages };
