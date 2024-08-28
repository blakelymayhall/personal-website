import { eduCards } from "./data/educationCardData";
import { skillCards } from "./data/skillCardData";

const eduSkillsFactory = () => {
    // Data
    //------------------------------------------------------------------------
    const templateEduCardDOM = document.querySelector(".eduCard");
    const educationContainer = document.querySelector("#educationContainer");
    const templateSkillCardDOM = document.querySelector(".skillCard");
    const skillsContainer = document.querySelector("#skillsContainer");
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
    eduCards.forEach((cardData) => {
        writeEduCardDOM(cardData);
    });
    templateEduCardDOM.parentElement.removeChild(templateEduCardDOM);

    // Skill Cards
    skillCards.forEach((cardData) => {
        writeSkillCardDOM(cardData);
    });
    templateSkillCardDOM.parentElement.removeChild(templateSkillCardDOM);
    //------------------------------------------------------------------------

    return {
        switchOrientation,
    };
};

export { eduSkillsFactory };
