import weatherAppImg from "../assets/weatherApp.gif";
import tictactoeImg from "../assets/tictactoe.gif";
import todoImg from "../assets/todo.gif";
import carltonImg from "../assets/carltonHall.png";
import etchASketch from "../assets/etch_a_sketch.gif";
import mouseTrap from "../assets/mouseTrap.gif";
import mouseTrap2 from "../assets/mouseTrap2.gif";
import scrimmageImg from "../assets/scrimmage.gif";
import war from "../assets/war1.png";
import war1 from "../assets/war2.png";
import war2 from "../assets/war_game.gif";
import war_test1 from "../assets/war_tests.gif"
import war_test2 from "../assets/war_test_code.png"
import war3 from "../assets/war_gameplay.gif"

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
const warProject = new ProjCard(
    "War - Card Game",
    "Video Game Development in Unity",
    ["June", "2024"],
    ["September", "2024"],
    'I had some inspiration to make another unity game. Inspired by a recent game I played on Steam, \'Balatro\', I ' +
    'wanted to make a card game and see what I could add on top of the original rules. I have found via ' +
    "past experiences that my best work comes from starting small in scope and expanding as new ideas pop into my head. " +
    "I also wanted to take the opportunity to apply some of the project/product management techniques I learned from my " + 
    "experience working with Ag Leader Technology's AGILE/SCRUM implementation.\r\n\r\n" + 'For now, I have worked to ' +
    'complete the original base-game in unity. War is a simple game with many edge cases - two players flip cards, ' +
    'the player with the lower rank cards loses and the two cards go to the winner\'s burn pile for use in the following' +
    'round. Ties are adjudicated based on remaining cards.\r\n\r\nDuring the course of development, I found myself '+ 
    'stalled trying to get the edge cases to work. I thought this was a wonderful opportunity to learn about writing ' +
    'unit tests FIRST to get the logic right, and be confident that it stays correct for future code updates.\r\n\r\n' + 
    'Additionally, I animated the cards motion. My first time working with animations, and I think it looks fun!',
    ["https://github.com/blakelymayhall/Unity_War_CardGame", 
        "https://blakelycmayhall.atlassian.net/jira/software/projects/UWC/boards/2"],
    [war, war1, war2, war_test1, war_test2, war3],
    ["Unity", "Git & GitHub", "C#", "Unit Tests", "Animation", "Object Oriented Programming"]
);
const odinProject = new ProjCard(
    "The Odin Project",
    "Full Stack Web Development in JavaScript",
    ["June", "2023"],
    ["December", "2023"],
    "Driven by a passion for lifelong learning and an interest in computer science, I embarked on a journey to " +
        "learn full-stack web development. To enhance my career and broaden my programming skills, I chose " +
        '"The Odin Project," a comprehensive, hands-on curriculum designed to ' +
        "teach full-stack web development. \r\n\r\nDuring the course of this project, I enhanced my expertise in object-oriented " +
        "and asynchronous programming, studied UI and UX design strategies, and learned to effectively utilize APIs." +
        "\r\n\r\nSome completed project examples are listed below, as well as a link to The Odin Project and a super-project" +
        " repository containing all of my 'sub projects':",
    [
        "https://www.theodinproject.com/about",
        "https://github.com/blakelymayhall/odin-project",
        "https://blakelymayhall.github.io/odin-weather-app/",
        "https://blakelymayhall.github.io/odin-tictactoe/",
        "https://blakelymayhall.github.io/odin-todo/",
    ],
    [weatherAppImg, tictactoeImg, todoImg, carltonImg, etchASketch],
    [
        "Git & GitHub",
        "Object Oriented Programming",
        "Webkit",
        "npm",
        "Client-Side Data Persistence",
        "APIs",
        "HTML / CSS",
        "Javascript",
        "Lint",
        "Asynchronous Programming"
    ]
);
const mouseTrapProj = new ProjCard(
    "Mouse Trap Clone",
    "Video Game Development in Unity",
    ["January", "2023"],
    ["March", "2023"],
    'I had been flirting with game design as a hobby over the years, and finally decided to "put pen to paper"' +
        " so to speak and clone a flash game I remembered playing in grade school. The original game can be found below." +
        "\r\n\r\nThe game features a mouse trying to escape the board. The mouse can move one hexagon per turn, and the " +
        "user will select hexagons to block the mouse. The AI for the mouse utilizes the A* search algorithm, Graph-type " +
        "data structures, and dynamic retargeting to attempt to find the best path to the edge of the board." +
        "\r\n\r\nThe source code, a video demo of the game, and a built copy of the game (OSX) can be played/viewed from " +
        "the github link",
    ["https://www.mathplayground.com/logic_trap_the_mouse.html", "https://github.com/blakelymayhall/MouseTrap"],
    [mouseTrap, mouseTrap2],
    ["Graph Theory", "Unity", "Git & GitHub", "C#", "Object Oriented Programming"]
);
const csdbProj = new ProjCard(
    "Golden Horde Scenario Simulation",
    "Distributed System Simulation Engineering",
    ["November", "2019"],
    ["March", "2021"],
    "The Golden Horde program is an initiative focused on advancing Networked, Collaborative and Autonomous " +
        "(NCA) weapon capabilities through live and virtual testing.\r\n\r\n" +
        "My role in this effort was to provide support in developing simulation capabilities for the Desktop simulation " +
        "of the mission computer softwares (autonomy/collaboration software and flight computer software) such that " +
        "full-up missions could be simulated prior to embedded testing (Hardware-In-The-Loop) and live flight test." +
        " This was accomplished in the Georgia Technical Research Institute's (GTRI) C++ SCRIMMAGE framework.\r\n\r\n" +
        "The efforts of the team on this program were recognized company-wide via the Engineering Team of the Year award in 2021." +
        "\r\n\r\nNote that examples shown below are examples of SCRIMMAGE simulations provided by GTRI and are UNRELATED to the Golden Horde program.",
    [
        "https://www.afrl.af.mil/News/Article-Display/Article/2634538/afrl-successfully-completes-golden-horde-collaborative-small-diameter-bomb-flig/",
        "https://www.scrimmagesim.org/",
        "https://github.com/gtri/scrimmage/blob/master/src/plugins/motion/FixedWing6DOF/FixedWing6DOF.cpp",
        "https://www.youtube.com/watch?v=NW37klOQ2xA"
    ],
    [scrimmageImg],
    ["C++", "Distributed System Simulation", "Git", "Asynchronous Programming", "Object Oriented Programming", "Autonomy", "Interface Control Design", "Collaborative Vehicle Engineering"]
);
projDatas.push(warProject);
projDatas.push(odinProject);
projDatas.push(mouseTrapProj);
projDatas.push(csdbProj);

export { projDatas };
