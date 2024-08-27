const menuOptions = {
    HOME: "homeLink",
    EDU: "eduLink",
    EXP: "experienceLink",
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

export { domPagesIDs, domPages, menuOptions, domMenuOptionsText, portraitMenuOptions, domPortraitMenuOptionsText };
