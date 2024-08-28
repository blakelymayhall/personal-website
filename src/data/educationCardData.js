import wustlImage from "../assets/washu.png";
import mstImage from "../assets/mstImage.png";

function EducationCard(schoolTitle, degreeTitle, honorsTitle, description, notableCourses, schoolImage) {
    this.eduCardID = Math.floor(Date.now() * Math.random());
    this.schoolTitle = schoolTitle;
    this.degreeTitle = degreeTitle;
    this.honorsTitle = honorsTitle;
    this.description = description;
    this.notableCourses = notableCourses;
    this.schoolImage = schoolImage;
}

const wustlCardData = new EducationCard(
    "Washington University in St. Louis",
    "M.S. in Aerospace Engineering",
    "Summa Cum Laude (GPA: 4.0 / 4.0)",
    "At Washington University, I refined and expanded my skills in both flight dynamics and dynamic control " +
        "systems. I took courses that focused on the fundamentals of flight dynamics, control system design, and" +
        " robust and adaptive control",
    [
        "Robust and Adaptive Control",
        "Control System Design",
        "Flight Dynamics & Control",
        "Aircraft Performance & Modeling",
    ],
    wustlImage
);

const mstCardData = new EducationCard(
    "Missouri University of Science & Technology",
    "B.S. in Aerospace Engineering",
    "Summa Cum Laude (GPA: 4.0 / 4.0)",
    "While at Missouri S&T I participated in courses that focused on flight dynamics and orbital mechanics." +
        " I also spent a significant time working with the Missouri S&T Satellite Design Team." +
        " On this team, I discovered my affinity for guidance and control work",
    [
        "Applied Computational Methods",
        "Programming Methods in C++",
        "Spacecraft Design",
        "Aerospace & Spaceflight Mechanics",
    ],
    mstImage
);

let eduCards = [];
eduCards.push(wustlCardData);
eduCards.push(mstCardData);

export { EducationCard, eduCards };
