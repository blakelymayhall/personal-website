import { currentActivityData } from "./data/currentActivityData";
import { monthNames, calculateElapsedTime } from "./support/elapsedTime";
import { pictureOverlayFactory } from "./support/pictureOverlay";

const currentActivityFactory = (interfaceLayer) => {
    // Data
    //------------------------------------------------------------------------
    const screenshotOverlay = pictureOverlayFactory();
    //------------------------------------------------------------------------

    // Support
    //------------------------------------------------------------------------
    const writeProjectToDom = (projectData) => {
        const newSectionDOM = document.querySelector("#currSection");
        newSectionDOM.dataset.projID = projectData.projID;
        newSectionDOM.querySelector(".projTitle").textContent = projectData.projectTitle;
        newSectionDOM.querySelector(".projShortDesc").textContent = projectData.projectShortDesc;
        newSectionDOM.querySelector(".projDesc").textContent = projectData.projectDesc;
        let dateString = "";
        const startDate = projectData.startMonYear;
        let endDate = projectData.endMonYear;
        if (endDate == "Present") {
            const currentDate = new Date();
            endDate = [monthNames[currentDate.getMonth()], currentDate.getFullYear().toString()];
        }
        dateString += `${startDate[0]} ${startDate[1]} to ${endDate[0]} ${endDate[1]}`;
        const elapsedTime = calculateElapsedTime(startDate[0], Number(startDate[1]), endDate[0], Number(endDate[1]));
        const elapsedYears = elapsedTime.years;
        const elapsedMos = elapsedTime.months;
        dateString =
            dateString + (elapsedYears > 0 ? ` (${elapsedYears} yrs ${elapsedMos} mos)` : ` (${elapsedMos} mos)`);
        newSectionDOM.querySelector(".projDate").textContent = dateString;
        const projLinksUL = newSectionDOM.querySelector(".projLinks ul");
        projectData.projectLinks.forEach((link) => {
            const link_li = document.createElement("li");
            const link_a = document.createElement("a");
            link_a.href = link;
            link_a.textContent = link;
            link_a.target = "_blank";
            link_li.appendChild(link_a);
            projLinksUL.appendChild(link_li);
        });
        const projScreenShots = newSectionDOM.querySelector(".projScreenShots");
        projectData.projectScreenShots.forEach((screenshot) => {
            const imgDOM = document.createElement("img");
            imgDOM.src = screenshot;
            imgDOM.classList.add("projScreenShot");
            imgDOM.addEventListener("click", () => {
                if (!interfaceLayer.getIsPortrait()) {
                    screenshotOverlay.activate(imgDOM, true);
                }
            });
            projScreenShots.appendChild(imgDOM);
        });
    };

    const switchOrientation = (isPortrait) => {
        const descendants = document.querySelector("#currPageContent").querySelectorAll("*");
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
    writeProjectToDom(currentActivityData);
    //------------------------------------------------------------------------

    return { switchOrientation };
};

export { currentActivityFactory };
