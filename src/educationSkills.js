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

    const switchOrientation = (isPortrait) => {
        const descendants = document.querySelector("#eduPageContent").querySelectorAll("*");
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
    switchOrientation(isPortrait);
    //------------------------------------------------------------------------

    return {
        switchOrientation,
    }
};

export { eduSkillsFactory };
