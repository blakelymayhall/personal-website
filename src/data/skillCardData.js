function SkillCard(skillTitle, skillSupport) {
    this.skillCardID = Math.floor(Date.now() * Math.random());
    this.skillTitle = skillTitle;
    this.skillSupport = skillSupport;
};

const c_cpp_skill = new SkillCard(
    "C / C++", 
    ["The Boeing Company", "Ag Leader Technology", "Washington University in St Louis", "Missouri S&T"]);
const python_skill = new SkillCard(
    "Python", 
    ["The Boeing Company", "Ag Leader Technology"]);
const c_sharp_skill = new SkillCard(
    "C#", 
    ["The Boeing Company", "Mouse Trap - Unity Game"]);
const mat_sim_skill = new SkillCard(
    "MATLAB / Simulink", 
    ["The Boeing Company", "Washington University in St Louis", "Missouri S&T"]);
const git_skill = new SkillCard(
    "Git (GitLab & GitHub)",
    ["The Boeing Company", "Ag Leader Technology", "The Odin Project"]);

let skillCards = [];
skillCards.push(c_cpp_skill);
skillCards.push(python_skill);
skillCards.push(c_sharp_skill);
skillCards.push(mat_sim_skill);
skillCards.push(git_skill);


export {skillCards}