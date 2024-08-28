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

export { domPagesIDs, domPages, menuOptions, portraitMenuOptions };
