import { projDatas } from "./data/projectData";
import { monthNames, calculateElapsedTime } from "./support/elapsedTime";
import { pictureOverlayFactory } from "./support/pictureOverlay";

const projectFactory = (interfaceLayer) => {
    // Data
    //------------------------------------------------------------------------
    const screenshotOverlay = pictureOverlayFactory();
    const templateProjSection = document.querySelector(".projSection");
    const desktopProjPageContent = document.querySelector("#desktopProjPageContent");
    const sectionBreak = document.createElement("div");
    sectionBreak.classList.add("expSectionBreak");
    const sectionEndBuffer = document.createElement("div");
    sectionEndBuffer.classList.add("expSectionBuffer");
    //------------------------------------------------------------------------

    // Support
    //------------------------------------------------------------------------
    const writeProjectToDom = (projectData) => {
        const newSectionDOM = templateProjSection.cloneNode(true);
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
        const projSkills = newSectionDOM.querySelector(".projSkills");
        projectData.projectSkills.forEach((skill) => {
            const newItem = document.createElement("li");
            newItem.textContent = skill;
            projSkills.appendChild(newItem);
        });
        desktopProjPageContent.appendChild(newSectionDOM);
    };

    const switchOrientation = (isPortrait) => {
        const descendants = document.querySelector("#projPageContent").querySelectorAll("*");
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
    projDatas.forEach((projData) => {
        writeProjectToDom(projData);
        desktopProjPageContent.appendChild(sectionBreak.cloneNode(true));
    });
    document.querySelector(".expSectionBreak:last-of-type").remove();
    desktopProjPageContent.appendChild(sectionEndBuffer);
    templateProjSection.parentElement.removeChild(templateProjSection);
    //------------------------------------------------------------------------

    return { switchOrientation };
};

export { projectFactory };
