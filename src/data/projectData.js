import weatherAppImg from "../assets/weatherApp.gif";
import tictactoeImg from "../assets/tictactoe.gif";
import todoImg from "../assets/todo.gif";
import carltonImg from "../assets/carltonHall.png";
import etchASketch from "../assets/etch_a_sketch.gif";
import mouseTrap from "../assets/mouseTrap.gif";
import mouseTrap2 from "../assets/mouseTrap2.gif";
import scrimmageImg from "../assets/scrimmage.gif";

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
projDatas.push(odinProject);
projDatas.push(mouseTrapProj);
projDatas.push(csdbProj);

export { projDatas };
