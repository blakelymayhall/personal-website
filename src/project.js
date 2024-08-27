import { projDatas } from "./data/projectData";

const projectFactory = (isPortrait) => {
    // Data
    //------------------------------------------------------------------------
    const templateProjSection = document.querySelector(".projSection");
    const desktopProjPageContent = document.querySelector("#desktopProjPageContent");
    const sectionBreak = document.createElement("div");
    sectionBreak.classList.add("expSectionBreak");
    const sectionEndBuffer = document.createElement("div");
    sectionEndBuffer.classList.add("expSectionBuffer");
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    //------------------------------------------------------------------------

    // Support
    //------------------------------------------------------------------------
    const writeProjectToDom = (projectData) => {
        const newSectionDOM = templateProjSection.cloneNode(true);
        newSectionDOM.dataset.projID = projectData.projID;
        newSectionDOM.querySelector(".projTitle").textContent = projectData.projectTitle;
        newSectionDOM.querySelector(".projShortDesc").textContent = projectData.projectShortDesc;
        newSectionDOM.querySelector(".projDesc").src = projectData.projectDesc;
        
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
            link_a.textContent=link;
            link_li.appendChild(link_a);
            projLinksUL.appendChild(link_li);
        });
        const projScreenShots = newSectionDOM.querySelector(".projScreenShots");
        projectData.projectScreenShots.forEach((screenshot) => {
            const imgDOM = document.createElement("img");
            imgDOM.src = screenshot;
            imgDOM.classList.add("projScreenShot");
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

    const calculateElapsedTime = (startMonthStr, startYear, endMonthStr, endYear) => {
        const startMonth = monthNames.indexOf(startMonthStr);
        const endMonth = monthNames.indexOf(endMonthStr);

        let years = endYear - startYear;
        let months = endMonth - startMonth;

        if (months < 0) {
            years--;
            months += 12;
        }

        return { years: years, months: months };
    };

    const switchOrientation = (isPortrait) => {
        isPortrait
            ? document.querySelector("#projPageContent").classList.add("portrait")
            : document.querySelector("#projPageContent").classList.remove("portrait");
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

    // Style Update for Portrait Mode
    switchOrientation(isPortrait);
    //------------------------------------------------------------------------

    return { switchOrientation };
};

export { projectFactory };
