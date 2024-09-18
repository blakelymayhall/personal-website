import pkm_tw from "../assets/pkm_tw1.png";
import pkm_tw1 from "../assets/pkm_tw.gif";

function CurrentActivityCard(
    projectTitle,
    projectShortDesc,
    startMonYear,
    endMonYear,
    projectLinks,
    projectDesc,
    projectScreenShots
) {
    this.projID = Math.floor(Date.now() * Math.random());
    this.projectTitle = projectTitle;
    this.projectShortDesc = projectShortDesc;
    this.startMonYear = startMonYear;
    this.endMonYear = endMonYear;
    this.projectLinks = projectLinks;
    this.projectDesc = projectDesc;
    this.projectScreenShots = projectScreenShots;
}

const currentActivityData = new CurrentActivityCard(
    "Pokemon Style Game",
    "Video Game Development in Unity",
    ["November", "2023"],
    ["Present"],
    [
        "https://github.com/blakelymayhall/PKM_TW",
        "https://blakelycmayhall.atlassian.net/jira/software/projects/PTW/boards/1",
    ],
    "For a long-while, I've had an ambition to create a game similar to Pokemon, where there is an \'overworld\' " +
    "RPG perspective and a \'battle'\ mini-game perspective. In my game, the combat or mini-game is intended to operate " +
    "like the old flash game \'Territory War\' or \'Worms\' while the overworld would operate much like Pokemon, where " +
    "you collect teammates to help you in your journey.\r\n\r\nOf course, as I have learned, planning and cutting the work" + 
    "into sizable chunks is imperative in completing a project with wide scope. I have ben tracking this work in Jira " + 
    "and focusing on fluid, smooth overworld movement and NPC interactions for now.",
    [pkm_tw, pkm_tw1]
);

export { currentActivityData };