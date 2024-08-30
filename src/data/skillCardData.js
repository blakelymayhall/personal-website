function SkillCard(skillTitle, skillSupport) {
    this.skillCardID = Math.floor(Date.now() * Math.random());
    this.skillTitle = skillTitle;
    this.skillSupport = skillSupport;
}

const c_cpp_skill = new SkillCard("C / C++", [
    "The Boeing Company",
    "Ag Leader Technology",
    "Washington University in St Louis",
    "Missouri S&T",
]);
const python_skill = new SkillCard("Python", ["The Boeing Company", "Ag Leader Technology"]);
const c_sharp_skill = new SkillCard("C#", ["The Boeing Company", "Mouse Trap - Unity Game"]);
const mat_sim_skill = new SkillCard("MATLAB / Simulink", [
    "The Boeing Company",
    "Washington University in St Louis",
    "Missouri S&T",
]);
const git_skill = new SkillCard("Git (GitLab & GitHub)", [
    "The Boeing Company",
    "Ag Leader Technology",
    "The Odin Project",
]);
const ci_cd_skill = new SkillCard("CI / CD", [
    "Ag Leader Technology",
]);
const qt_qml_skill = new SkillCard("Qt & QML", [
    "Ag Leader Technology",
]);
const squish_skill = new SkillCard("Squish (GUI Test Automation)", [
    "Ag Leader Technology",
]);
const lint_skill = new SkillCard("Lint & Auto Code Formatting", [
    "The Boeing Company",
    "Ag Leader Technology",
    "The Odin Project",
]);
const linux_skill = new SkillCard("Linux", [
    "The Boeing Company",
    "Ag Leader Technology",
    "The Odin Project",
]);
const webdev_skill = new SkillCard("HTML / CSS", [
    "The Boeing Company",
    "The Odin Project",
]);
const js_skill = new SkillCard("Javascript", [
    "The Boeing Company",
    "The Odin Project",
]);



let skillCards = [];
skillCards.push(c_cpp_skill);
skillCards.push(python_skill);
skillCards.push(c_sharp_skill);
skillCards.push(mat_sim_skill);
skillCards.push(linux_skill);
skillCards.push(git_skill);
skillCards.push(ci_cd_skill);
skillCards.push(qt_qml_skill);
skillCards.push(squish_skill);
skillCards.push(lint_skill);
skillCards.push(webdev_skill);
skillCards.push(js_skill);

export { skillCards };
