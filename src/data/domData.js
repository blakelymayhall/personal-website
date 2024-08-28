import { homeFactory } from "../home";
import { eduSkillsFactory } from "../educationSkills";
import { expFactory } from "../experience";
import { contactFactory } from "../contact";
import { projectFactory } from "../project";

const menuOptions = {
    HOME: "homeLink",
    EDU: "eduLink",
    EXP: "experienceLink",
    PROJ: "projectsLink",
    CURR: "currentActivityLink",
    BLOG: "blogLink",
    CONT: "contactLink",
};

const portraitMenuOptions = {
    HOME: "portraitHomeLink",
    EXP: "portraitExperienceLink",
    EDU: "portraitEduLink",
    PROJ: "portraitProjectsLink",
    CURR: "portraitCurrentActivityLink",
    BLOG: "portraitBlogLink",
    CONT: "portraitContactLink",
};

const factoryMap = new Map();
factoryMap.set(menuOptions.HOME, homeFactory);
factoryMap.set(menuOptions.EDU, eduSkillsFactory);
factoryMap.set(menuOptions.EXP, expFactory);
factoryMap.set(menuOptions.BLOG, "");
factoryMap.set(menuOptions.CURR, "");
factoryMap.set(menuOptions.CONT, contactFactory);
factoryMap.set(menuOptions.PROJ, projectFactory);
factoryMap.set(portraitMenuOptions.HOME, homeFactory);
factoryMap.set(portraitMenuOptions.EXP, expFactory);
factoryMap.set(portraitMenuOptions.EDU, eduSkillsFactory);
factoryMap.set(portraitMenuOptions.BLOG, "");
factoryMap.set(portraitMenuOptions.CURR, "");
factoryMap.set(portraitMenuOptions.CONT, contactFactory);
factoryMap.set(portraitMenuOptions.PROJ, projectFactory);

const domPagesIDs = new Map();
domPagesIDs.set(menuOptions.HOME, "homePageContent");
domPagesIDs.set(menuOptions.EDU, "eduPageContent");
domPagesIDs.set(menuOptions.EXP, "expPageContent");
domPagesIDs.set(menuOptions.BLOG, "blogPageContent");
domPagesIDs.set(menuOptions.CURR, "currPageContent");
domPagesIDs.set(menuOptions.CONT, "contPageContent");
domPagesIDs.set(menuOptions.PROJ, "projPageContent");
domPagesIDs.set(portraitMenuOptions.HOME, "homePageContent");
domPagesIDs.set(portraitMenuOptions.EDU, "eduPageContent");
domPagesIDs.set(portraitMenuOptions.EXP, "expPageContent");
domPagesIDs.set(portraitMenuOptions.BLOG, "blogPageContent");
domPagesIDs.set(portraitMenuOptions.CURR, "currPageContent");
domPagesIDs.set(portraitMenuOptions.CONT, "contPageContent");
domPagesIDs.set(portraitMenuOptions.PROJ, "projPageContent");

const domPages = document.querySelectorAll(".contentPage");

export { domPagesIDs, domPages, menuOptions, portraitMenuOptions, factoryMap };
