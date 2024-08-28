import boeingImg from "../assets/boeing.png"
import aglImage from "../assets/aglImage.jpg"

function ExpCard(skillName, skillSupport) {
    this.expCardID = Math.floor(Date.now() * Math.random());
    this.skillName = skillName;
    this.skillSupport = skillSupport;
};

function CompanyInfo(companyName, companyLink, companyImg, jobTitle, startMonYear, endMonYear) {
    this.companyID = Math.floor(Date.now() * Math.random());
    this.companyName = companyName;
    this.companyLink = companyLink;
    this.companyImg = companyImg;
    this.jobTitle = jobTitle;
    this.startMonYear = startMonYear;
    this.endMonYear = endMonYear;
};

let expData = new Map();
const boeingKey = new CompanyInfo(
    "The Boeing Company",
    "https://www.boeing.com/",
    boeingImg,
    "Flight Software Engineer (I, II, III)",
    [["June", "2019"],["April","2024"]],
    [["August", "2023"], ["Present"]]);
let boeingData = [];
const boeingTest1 = new ExpCard(
    "Test Skill 1", 
    ["Exp Test1", "Exp Test2mExp Test2mExp Test2mExp Test2mExp Test2mExp Test2", "Exp Test3"])
const boeingTest2 = new ExpCard(
    "Test Skill 2", 
    ["Exp Test1", "Exp Test2", "Exp Test3"])
const boeingTest3 = new ExpCard(
    "Test Skill 3", 
    ["Exp Test1", "Exp Test2", "Exp Test3"])
boeingData.push(boeingTest1);
boeingData.push(boeingTest2);
boeingData.push(boeingTest3);

expData.set(boeingKey,boeingData);

const aglKey = new CompanyInfo(
    "Ag Leader Technology",
    "https://www.agleader.com/farm-management/displays/incommand/",
    aglImage,
    "Senior Software Engineer",
    [["August", "2023"]],
    [["April","2024"]]);
let aglData = [];
const aglTest1 = new ExpCard(
    "Test Skill 1", 
    ["Exp Test1", "Exp Test2", "Exp Test3"])
const aglTest2 = new ExpCard(
    "Test Skill 2", 
    ["Exp Test1", "Exp Test2", "Exp Test3"])
const aglTest3 = new ExpCard(
    "Test Skill 3", 
    ["Exp Test1", "Exp Test2", "Exp Test3"])
aglData.push(aglTest1);
aglData.push(aglTest2);
aglData.push(aglTest3);

expData.set(aglKey,aglData);

export {expData, ExpCard}