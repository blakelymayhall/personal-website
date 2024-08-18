import { eduCards } from "./educationCardData";
import { skillCards } from "./skillCardData";

const eduSkillsFactory = (isPortrait) => {

    // Data
    //------------------------------------------------------------------------
    //------------------------------------------------------------------------

    // Support
    //------------------------------------------------------------------------
    const writeEduCardDOM = (cardData) => {
        const newCardDOM = templateEduCardDOM.cloneNode(true);
        newCardDOM.dataset.cardID = cardData.eduCardID;
        newCardDOM.querySelector(".univTitle").textContent = cardData.schoolTitle;
        newCardDOM.querySelector(".degreeTitle").textContent = cardData.degreeTitle;
        newCardDOM.querySelector(".honorsTitle").textContent = cardData.honorsTitle;
        newCardDOM.querySelector(".eduCardDesc").textContent = cardData.description;
        newCardDOM.querySelector(".eduCardImage").src = cardData.schoolImage;
        const eduCardNotableContainer = newCardDOM.querySelector(".eduCardNotableContainer");
        let newList = document.createElement("ul");
        newList.classList.add("eduCardNotableCourseList");
        let listItem = document.createElement("li");
        listItem.textContent = cardData.notableCourses[0];
        newList.appendChild(listItem);
        listItem = document.createElement("li");
        listItem.textContent = cardData.notableCourses[1];
        newList.appendChild(listItem);
        eduCardNotableContainer.appendChild(newList);
        newList = document.createElement("ul");
        newList.classList.add("eduCardNotableCourseList");
        listItem = document.createElement("li");
        listItem.textContent = cardData.notableCourses[2];
        newList.appendChild(listItem);
        listItem = document.createElement("li");
        listItem.textContent = cardData.notableCourses[3];
        newList.appendChild(listItem);
        eduCardNotableContainer.appendChild(newList);
        educationContainer.appendChild(newCardDOM);
    };

    const writeSkillCardDOM = (cardData) => {
        const newCardDOM = templateSkillCardDOM.cloneNode(true);
        newCardDOM.dataset.cardID = cardData.skillCardID;
        newCardDOM.querySelector(".skillTitle").textContent = cardData.skillTitle;
        const skillList = newCardDOM.querySelector(".skillList");
        cardData.skillSupport.forEach((exp) => {
            const expDOM = document.createElement("li");
            expDOM.textContent = exp;
            skillList.appendChild(expDOM);
        });
        skillsContainer.append(newCardDOM);
    };
    //------------------------------------------------------------------------

    // Init
    //------------------------------------------------------------------------
    // Education Cards
    const templateEduCardDOM = document.querySelector(".eduCard");
    const educationContainer = document.querySelector("#educationContainer");
    eduCards.forEach((cardData) => {
        writeEduCardDOM(cardData); 
    });
    templateEduCardDOM.parentElement.removeChild(templateEduCardDOM);

    // Skill Cards
    const templateSkillCardDOM = document.querySelector(".skillCard");
    const skillsContainer = document.querySelector("#skillsContainer");
    skillCards.forEach((cardData) => {
        writeSkillCardDOM(cardData); 
    });
    templateSkillCardDOM.parentElement.removeChild(templateSkillCardDOM);

    // Style Update for Portrait Mode
    if (isPortrait) {
        document.querySelector("#educationContainer").style.cssText = "min-width: 0;grid-template-columns: 90%;" + 
            "grid-template-rows: 500px;grid-auto-rows:500px;";
        const eduCardDOMs = document.querySelectorAll(".eduCard");
        eduCardDOMs.forEach((eduCardDOM) => {
            eduCardDOM.style.cssText = "width: 100%; height:100%;"
        });
        document.querySelector("#educationTitle").style.cssText = "font-size: 4rem;"
        document.querySelector("#skillsTitle").style.cssText = "font-size: 4rem;margin-top: 7rem;"
        const eduCardUnivTitlesDOM = document.querySelectorAll(".univTitle");
        eduCardUnivTitlesDOM.forEach((eduCardUnivTitleDOM) => {
            eduCardUnivTitleDOM.style.cssText = "font-size: 2.5rem;"
        });
        const eduCardDegreeTitlesDOM = document.querySelectorAll(".degreeTitle");
        eduCardDegreeTitlesDOM.forEach((eduCardDegreeTitleDOM) => {
            eduCardDegreeTitleDOM.style.cssText = "font-size: 2rem;"
        });
        const eduCardHonorsTitlesDOM = document.querySelectorAll(".honorsTitle,.eduCardDesc");
        eduCardHonorsTitlesDOM.forEach((eduCardHonorsTitleDOM) => {
            eduCardHonorsTitleDOM.style.cssText = "font-size: 1.6rem;"
        });
        const eduCardDescsDOM = document.querySelectorAll(".eduCardDesc");
        eduCardDescsDOM.forEach((eduCardDescDOM) => {
            eduCardDescDOM.style.cssText = "font-size: 1.6rem;margin-top:3rem;"
        });
        const eduCardNotablesDOM = document.querySelectorAll(".eduCardNotable,.eduCardNotableCourseList li ");
        eduCardNotablesDOM.forEach((eduCardNotableDOM) => {
            eduCardNotableDOM.style.cssText = "font-size: 1.6rem;min-width:410px;max-width:410px;"
        });

        document.querySelector("#skillsContainer").style.cssText = "min-width: 0;grid-template-columns: 40% 40%;" + 
        "grid-template-rows: 200px;grid-auto-rows:200px;gap:5rem;";
        const skillCardDOMs = document.querySelectorAll(".skillCard");
        skillCardDOMs.forEach((skillCardDOM) => {
            skillCardDOM.style.cssText = "width: 100%; height:100%;"
        const skillCardTitlesDOM = document.querySelectorAll(".skillTitle");
        skillCardTitlesDOM.forEach((skillCardTitleDOM) => {
            skillCardTitleDOM.style.cssText = "font-size: 2.4rem;"
        });   
        const skillCardItemsDOM = document.querySelectorAll(".skillList li ");
        skillCardItemsDOM.forEach((skillCardItemDOM) => {
            skillCardItemDOM.style.cssText = "font-size: 1.6rem;min-width:310px;max-width:310px;"
        });
    });
    }
    //------------------------------------------------------------------------

};

export { eduSkillsFactory };
