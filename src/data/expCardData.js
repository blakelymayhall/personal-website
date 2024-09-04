import boeingImg from "../assets/boeing.png";
import aglImage from "../assets/aglImage.jpg";
import ulImage from "../assets/ul.png"
import shilohImg from "../assets/shiloh.png"

function ExpCard(skillName, skillSupport) {
    this.expCardID = Math.floor(Date.now() * Math.random());
    this.skillName = skillName;
    this.skillSupport = skillSupport;
}

function CompanyInfo(companyName, companyLink, companyImg, jobTitle, startMonYear, endMonYear, jobDesc) {
    this.companyID = Math.floor(Date.now() * Math.random());
    this.companyName = companyName;
    this.companyLink = companyLink;
    this.companyImg = companyImg;
    this.jobTitle = jobTitle;
    this.startMonYear = startMonYear;
    this.endMonYear = endMonYear;
    this.jobDesc = jobDesc;
}

let expData = new Map();
const boeingKey = new CompanyInfo(
    "The Boeing Company",
    "https://www.boeing.com/",
    boeingImg,
    "Flight Software Engineer (I, II, III)",
    [
        ["June", "2019"],
        ["April", "2024"],
    ],
    [["August", "2023"], ["Present"]],
    "At Boeing, I have been fortunate to work in the flight engineering department for various aircraft. My role\’s " + 
    "primary responsibility consists of developing, maintaining, and simulating models for flight computer software." + 
    "\r\n\r\nI am also responsible for the software integration engineering of our models. In this role, I " + 
    "develop frameworks that integrate the flight software model libraries. The goal is to create engineering " + 
    "efficient frameworks to test the flight code within. Additionally, customers want to be able to run desktop " +
    "or embedded simulations of the models for mission simulation or algorithm development.\r\n\r\n" +
    "During my time at Boeing, I am proud to have earned two awards:\r\n\r\n" +
    "2021 Missile & Weapons Systems Engineering Team of the Year -- awarded for my work on simulation engineering for the " +
    "Golden Horde project (see Projects page for more details)\r\n\r\n" +
    "Excellence in Digital Engineering -- awarded for my work on simulation engineering for the Ground Launched " +
    "Small Diameter Bomb program\r\n\r\n" +
    "Below are some " +
    "high-level skills that I have exercised and learned with The Boeing Company:"
);
let boeingData = [];
const boeingTest1 = new ExpCard("Flight Dynamics and Control", [
    "Updated the Operational Flight Program (OFP) of direct attack weapon to allow for low-speed releases",
    "Developed Monte Carlo simulations on flight model to assess vehicle capabilities and derive operational domain",
    "Investigated and implemented inertial coupling compensator simulated to eliminate system failures at abnormally low employment speeds"
]);
const boeingTest2 = new ExpCard("DevOps Software Engineering", [
    "Developed Google Earth integrated GUI for internal & external customers to utilize weapon performance models (.DLLs)", 
    "Enabled process for C++ simulation capability on Linux High Performance Computing clusters ",
    "Developed C++ based REPL program and VSCode extension for Boeing internal scripting language" 
]);
const boeingTest3 = new ExpCard("Simulation Engineering", [
    "Refactored legacy FORTRAN rocket simulation to integrate with MATLAB fly-out models", 
    "Developed plugin for Linux-based distributed system simulation (SCRIMMAGE) to model the interface and Operational" +
    " Flight Program (OFP) of a weapon in a collaborative weapons simulation "
]);
const boeingTest4 = new ExpCard("Product Ownership", [
    "Established distributed system simulation in C++ to simulate" +
    " autonomously controlled direct attack missions",
    "Worked with external team as product owner to advance Boeing interests in the project development",
    "Established version control strategy, interface control document, and drove program-level requirements"
]);
const boeingTest5 = new ExpCard("System Modeling", [
    "Incorporated the vehicle fin deflection aerodynamics into the synthetic air data estimation system to improve data estimate",
    "Analyzed flight test data compared to model data and developed aerodynamic corrections to improve modeling",
]);
boeingData.push(boeingTest1);
boeingData.push(boeingTest2);
boeingData.push(boeingTest3);
boeingData.push(boeingTest4);
boeingData.push(boeingTest5);

expData.set(boeingKey, boeingData);

const aglKey = new CompanyInfo(
    "Ag Leader Technology",
    "https://www.agleader.com/farm-management/displays/incommand/",
    aglImage,
    "Senior Software Engineer",
    [["August", "2023"]],
    [["April", "2024"]],
    "At Ag Leader Technology, I worked on a traditional SCRUM team where I designed and implemented software "+
    "solutions for a variety of agricultural-vehicle display improvements, both physics-based and user experience based.\r\n\r\n" +
    "My primary responsibilities consisted of executing feature or defect work as it came into my team's backlog. " +
    "This generally included grooming the work (breaking into sizable, discrete steps). I would then execute the feature work, " +
    "generally in C++ and Python, version controlled via Git and GitLab, and tested in a CI/CD GitLab pipeline.\r\n\r\n" +
    "My secondary responsibility was to exhibit and exercise technical leadership on the quality of the other engineers " +
    "on the team and in the department as a whole.\r\n\r\nBelow are some " +
    "high-level skills that I exercised and learned with Ag Leader Technology:"
);
let aglData = [];
const aglTest1 = new ExpCard("Embedded Software Engineering (C++)", [
    "Integrated standardized agricultural software into a modern device framework and enhanced the user interface (QML)", 
    "Developed simulation strategy to prove-out new system feature prior to field testing",
    "Diagnose and disposition crashes via core-file debugging"
]);
const aglTest2 = new ExpCard("Software Testing", [
    "Engineered and maintained automated UI testing solutions (via Squish, Python, Docker)", 
    "Reduced automated image comparison test sensitivity",
    "Encouraged developer-side hardware testing prior to submitting for quality-team testing"
]);
const aglTest3 = new ExpCard("Software Documentation", [
    "Initiated and led efforts to establish enhanced working documentation and code practices", 
    "Created template for issue closure documentation used on our team",
    "Assisted with tiger-team that established department-wide Git workflow"
]);
const aglTest4 = new ExpCard("Process Engineering", [
    "Championed SCRUM process change to improve issue traceability and ensure deliberate testing",
    "Presented process change to players: developers, quality, and product owners and iterated " +
    "based on their individual concerns"
]);
aglData.push(aglTest1);
aglData.push(aglTest2);
aglData.push(aglTest3);
aglData.push(aglTest4);

expData.set(aglKey, aglData);

const ulKey = new CompanyInfo(
    "Underwriters Laboratories (UL)",
    "https://www.ul.com/",
    ulImage,
    "Mechanical Engineering Intern",
    [["June", "2018"]],
    [["August", "2018"]],
    ""
);
let ulData = [];
const ulCard1 = new ExpCard("Software Development", [
    "Developed a Microsoft Excel Add-In to communicate via RS-232 serial ports to transfer bulk data efficiently "
]);
const ulCard3 = new ExpCard("Process Engineering", [
    "Assisted with the development of SOPs to test products", 
]);
const ulCard2 = new ExpCard("Material and Product Testing", [
    "Analyzed the performance of electrical equipment including transformers, power supplies, and wiring",
    "Performed tensile and compression failure testing on many materials and products",
    "Tested various material properties of metals including hardness and corrosion resistance"
]);
ulData.push(ulCard2);
ulData.push(ulCard1);
ulData.push(ulCard3);

expData.set(ulKey, ulData);

const shilohKey = new CompanyInfo(
    "Shiloh Technologies",
    "https://shilohnext.com/",
    shilohImg,
    "Software Development Intern",
    [["May", "2017"]],
    [["August", "2017"]],
    ""
);
let shilohData = [];
const shilohCard2 = new ExpCard("Software Development", [
    "Assisted in development and integration of a new retail analytics tool for large retail companies", 
    "Developed a United States census and historical weather data API caller for correlation to retail sales ",
    "Led the development team's efforts to engage in machine learning to build predictive experiments on customer reviews"
]);
const shilohCard4 = new ExpCard("Professional Development", [
    "Held frequent meetings and gave presentations to the development and sales teams"
]);
shilohData.push(shilohCard2);
shilohData.push(shilohCard4);

expData.set(shilohKey, shilohData);

export { expData, ExpCard };
