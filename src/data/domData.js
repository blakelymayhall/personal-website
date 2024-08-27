import { homeFactory } from "../home";
import { eduSkillsFactory } from "../educationSkills";
import { expFactory } from "../experience";
import { contactFactory } from "../contact";
import { projectFactory } from "../project";

const portraitMenuOptions = {
    HOME: "portraitHomeLink",
    EXP: "portraitExperienceLink",
    EDU: "portraitEduLink",
    PROJ: "portraitProjectsLink",
    CURR: "portraitCurrentActivityLink",
    BLOG: "portraitBlogLink",
    CONT: "portraitContactLink",
};

const domPortraitMenuOptionsText = new Map();
domPortraitMenuOptionsText.set(portraitMenuOptions.HOME, "Home");
domPortraitMenuOptionsText.set(portraitMenuOptions.EXP, "Experience");
domPortraitMenuOptionsText.set(portraitMenuOptions.EDU, "Education / Skills");
domPortraitMenuOptionsText.set(portraitMenuOptions.BLOG, "Blog");
domPortraitMenuOptionsText.set(portraitMenuOptions.CURR, "Current Activity");
domPortraitMenuOptionsText.set(portraitMenuOptions.CONT, "Contact");
domPortraitMenuOptionsText.set(portraitMenuOptions.PROJ, "Projects");

const menuOptions = {
    HOME: "homeLink",
    EDU:  "eduLink",
    EXP:  "experienceLink",
    PROJ: "projectsLink",
    CURR: "currentActivityLink",
    BLOG: "blogLink",
    CONT: "contactLink",
};

const domMenuOptionsText = new Map();
domMenuOptionsText.set(menuOptions.HOME, "Home");
domMenuOptionsText.set(menuOptions.EDU, "Education / Skills");
domMenuOptionsText.set(menuOptions.EXP, "Experience");
domMenuOptionsText.set(menuOptions.BLOG, "Blog");
domMenuOptionsText.set(menuOptions.CURR, "Current Activity");
domMenuOptionsText.set(menuOptions.CONT, "Contact");
domMenuOptionsText.set(menuOptions.PROJ, "Projects");

const htmlPages = new Map();
htmlPages.set(menuOptions.HOME, "index.html");
htmlPages.set(menuOptions.EDU, "education_skills.html");
htmlPages.set(menuOptions.EXP, "experience.html");
htmlPages.set(menuOptions.BLOG, "blogPageContent");
htmlPages.set(menuOptions.CURR, "currPageContent");
htmlPages.set(menuOptions.CONT, "contact.html");
htmlPages.set(menuOptions.PROJ, "projects.html");
htmlPages.set(portraitMenuOptions.HOME, "index.html");
htmlPages.set(portraitMenuOptions.EDU, "education_skills.html");
htmlPages.set(portraitMenuOptions.EXP, "experience.html");
htmlPages.set(portraitMenuOptions.BLOG, "blogPageContent");
htmlPages.set(portraitMenuOptions.CURR, "currPageContent");
htmlPages.set(portraitMenuOptions.CONT, "contact.html");
htmlPages.set(portraitMenuOptions.PROJ, "projects.html");

const contentPageIDs = {
    HOME: "homePageContent",
    EDU: "eduPageContent",
    EXP: "expPageContent",
    PROJ: "projPageContent",
    CURR: "",
    BLOG: "",
    CONT: "contPageContent",
};

const factoryMap = new Map();
factoryMap.set(contentPageIDs.HOME, homeFactory);
factoryMap.set(contentPageIDs.EDU, eduSkillsFactory);
factoryMap.set(contentPageIDs.EXP, expFactory);
factoryMap.set(contentPageIDs.BLOG, "na");
factoryMap.set(contentPageIDs.CURR, "na");
factoryMap.set(contentPageIDs.CONT, contactFactory);
factoryMap.set(contentPageIDs.PROJ, projectFactory);

export {menuOptions, domMenuOptionsText, portraitMenuOptions, domPortraitMenuOptionsText, htmlPages, contentPageIDs, factoryMap}