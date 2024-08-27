import wustlImage from "../assets/washu.png"

function ProjCard(
    projectTitle,
    projectShortDesc,
    startMonYear,
    endMonYear,
    projectDesc,
    projectLinks,
    projectScreenShots,
    projectSkills
) {
    this.projID = Math.floor(Date.now() * Math.random());
    this.projectTitle = projectTitle;
    this.projectShortDesc = projectShortDesc;
    this.startMonYear = startMonYear;
    this.endMonYear = endMonYear;
    this.projectDesc = projectDesc;
    this.projectLinks = projectLinks;
    this.projectScreenShots = projectScreenShots;
    this.projectSkills = projectSkills;
}

let projDatas = [];

const testProj1 = new ProjCard(
    "Project Test Title 1",
    "Project Test Short Desc 1",
    ["May", "2019"],
    ["June", "2019"],
    "Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc",
    ["Link1", "Link2"],
    [wustlImage, wustlImage, wustlImage],
    ["Object Oriented Programming", "Git", "Long Skill With Many Spaces in the Name", "Poop opp ooppp pooo", "Skill5", "Skill6", "Skill 19 00 9 12n j kjaskdf h ka fsk","afs"]);
const testProj2 = new ProjCard(
    "Project Test Title 2",
    "Project Test Short Desc 2",
    ["May", "2019"],
    ["June", "2019"],
    "Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc Desc",
    ["Link1", "Link2"],
    [wustlImage, wustlImage, wustlImage],
    ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5", "Skill6"]);
projDatas.push(testProj1);
projDatas.push(testProj2);

export {projDatas}