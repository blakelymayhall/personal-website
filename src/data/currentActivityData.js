import war from "../assets/war1.png";
import war1 from "../assets/war2.png";
import war2 from "../assets/war_game.gif";

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
    "War - Card Game",
    "Video Game Development in Unity",
    ["April", "2024"],
    ["Present"],
    [
        "https://github.com/blakelymayhall/Unity_War_CardGame",
        "https://blakelycmayhall.atlassian.net/jira/software/projects/UWC/boards/2",
    ],
    "After a long hiatus from Unity game development (learning from The Odin Project), I decided to pick the mantle " +
    "back up with something well-defined and relatively short in scope. I have found via " +
    "past experiences that my best work come from starting small and scope and expanding as new ideas pop into my head. " +
    "I also wanted to take the opportunity to apply some of the project/product management techniques I learned from my " + 
    "experience working at Ag Leader Technology's AGILE/SCRUM implementation.\r\n\r\n" + 
    "The concept is simple - two decks, one of which is the player's, and both players draw. The highest ranking card " + 
    "wins the hand and the loser's card is \'absorbed\' into the winner's deck for the following round. Ties result in " + 
    "a \'war\' where three cards are drawn and the sum of the hand determines the winner.\r\n\r\n" + 
    "Future goals are: menus, animations, modifiers (rule modifications, effect cards / power ups)" ,
    [war, war1, war2]
);

export { currentActivityData };