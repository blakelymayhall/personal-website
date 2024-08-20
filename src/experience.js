import { expData, ExpCard } from "./expCardData";

const expFactory = (isPortrait) => {
    // Data
    //------------------------------------------------------------------------
    const templateExpSection = document.querySelector(".expSection");
    const desktopExpPageContent = document.querySelector("#desktopExpPageContent");
    const sectionBreak = document.createElement("div");
    sectionBreak.classList.add("expSectionBreak");
    const sectionEndBuffer = document.createElement("div");
    sectionEndBuffer.classList.add("expSectionBuffer");
    const monthNames = ["January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"];
    const expCardTemplateDOM = document.querySelector(".expCard.template");
    //------------------------------------------------------------------------

    // Support
    //------------------------------------------------------------------------
    const writeCompanyInfoDOM = (companyData) => {
        const newSectionDOM = templateExpSection.cloneNode(true);
        newSectionDOM.dataset.companyID = companyData.companyID;
        newSectionDOM.querySelector(".expTitle").textContent = companyData.companyName;
        newSectionDOM.querySelector(".expLink").textContent = companyData.companyLink;
        newSectionDOM.querySelector(".expLink").href = companyData.companyLink;
        newSectionDOM.querySelector(".expImage").src = companyData.companyImg;
        newSectionDOM.querySelector(".expJob").textContent = companyData.jobTitle;
        let dateString = "";
        let elapsedYears = 0;
        let elapsedMos = 0;
        for (const [idx] of companyData.startMonYear.entries()) {
            const startDate = companyData.startMonYear[idx];
            let endDate = companyData.endMonYear[idx];
            if (endDate == "Present") {
                const currentDate = new Date();
                endDate = [monthNames[currentDate.getMonth()],currentDate.getFullYear().toString()];
            }
            dateString += `${startDate[0]} ${startDate[1]} to ${endDate[0]} ${endDate[1]}`
            if (companyData.startMonYear.length > 1 && companyData.startMonYear.length != idx+1) {
                dateString += ", "
            }
            const elapsedTime = calculateElapsedTime(startDate[0], Number(startDate[1]),
                endDate[0], Number(endDate[1]));
            elapsedYears += elapsedTime.years;
            elapsedMos += elapsedTime.months;
        }
        dateString = dateString + ` (${elapsedYears} yrs ${elapsedMos} mos)`
        newSectionDOM.querySelector(".expDate").textContent = dateString;
        desktopExpPageContent.appendChild(newSectionDOM);
        return newSectionDOM;
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
    }

    const writeExpSkillCardToDOM = (companySectionDOM, cardData) => {
        const newCardDOM = expCardTemplateDOM.cloneNode(true);
        newCardDOM.dataset.cardID = cardData.expCardID;
        newCardDOM.querySelector(".expCardSkillTitle").textContent = cardData.skillName;
        const expSkillListDOM = newCardDOM.querySelector(".expCardSkillList");
        expSkillListDOM.innerHTML = "";
        cardData.skillSupport.forEach((skill) => {
            let newListItem = document.createElement("li");
            newListItem.textContent = skill;
            expSkillListDOM.appendChild(newListItem);
        });
        companySectionDOM.querySelector(".expCards").appendChild(newCardDOM);
    };

    const switchOrientation = (isPortrait) => {
        const descendants = document.querySelector("#expPageContent").querySelectorAll("*");
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
    for (const [companyData] of expData) { 
        const companySectionDOM = writeCompanyInfoDOM(companyData);
        expData.get(companyData).forEach((cardData) => {
            writeExpSkillCardToDOM(companySectionDOM, cardData);
        });
        desktopExpPageContent.appendChild(sectionBreak.cloneNode(true));
        const templateCard = companySectionDOM.querySelector(".expCard.template");
        templateCard.parentElement.removeChild(templateCard);
    }
    document.querySelector(".expSectionBreak:last-of-type").remove();
    desktopExpPageContent.appendChild(sectionEndBuffer);
    templateExpSection.parentElement.removeChild(templateExpSection);

    // Style Update for Portrait Mode
    switchOrientation(isPortrait);
    //------------------------------------------------------------------------

    return {switchOrientation};
}

export {expFactory}