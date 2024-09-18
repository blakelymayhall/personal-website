import regex_img from "../assets/regex.jpg";
import gunslinger_img from "../assets/gunslinger.jpg";
import interview_img from "../assets/interview.jpg";
import pball from "../assets/IMG_5706.jpeg"

function BlogCard(
    blogCardTitle,
    monDayYear,
    blogDesc,
    blogImg = null
) {
    this.blogCardID = Math.floor(Date.now() * Math.random());
    this.blogCardTitle = blogCardTitle;
    this.monDayYear = monDayYear;
    this.blogDesc = blogDesc;
    this.blogImg = blogImg;
}

const card5 = new BlogCard(
    "Pickleball League!",
    ["September", "18", "2024"],
    "It has been about half a year since I have been in a pickleball league, but I am starting up again! " + 
    "I am super excited to be playing again. Fun way to stay active and be a little competitive. Last season we " +
    "went undefeated but lost first round in the tourney. Hoping for a deeper run this time.",
    pball
);
const card4 = new BlogCard(
    "AMC's Interview with the Vampire",
    ["September", "4", "2024"],
    "While I am on parental leave (in-between bottle feedings and diaper changes) I decided to watch AMC's new " +
    "Interview with the Vampire. I was initially nervous after hearing about all of the changes from the source " +
    "material (I read Interview several times and loved the story) but quickly forgot all of that after starting " +
    "season one. The acting, story, and sets are phenomenal. What an homage to a classic, and I am looking forward " +
    "to season 3! This show has inspired me to read more books in Rice's Vampire Chronicals.",
    interview_img
);
const card3 = new BlogCard(
    "Introducing Regular Expressions",
    ["July", "6", "2024"],
    "I have had the itch to read some non-fiction recently, and computer science / programming skills are a goto when " + 
    "I want to learn something new. I found this book \"Introducing Regular Expressions\" because I have been exposed " + 
    "to RegEx through various working experiences and thought it was time to formalize my education. Perhaps a " +
    "graduation project focused on RegEx in the future?",
    regex_img
);
const card2 = new BlogCard(
    "Dark Tower Series",
    ["June", "14", "2024"],
    "Wow. A year's long reading journey finally finished (well, the main series anyway). I started reading / listening " +
    "to the Dark Tower series by Stephen King after being a King fan for several years. It started with \"It\" and " + 
    "then Pet Semetary, Carrie, and 11.22.63.. until I could ignore the authors Magnum Opus no longer. What a " +
    "fantastic fantasy series from the king of horror!",
    gunslinger_img
);
const card1 = new BlogCard(
    "Unreal Engine Project Soon?",
    ["September", "1", "2023"],
    "While interviewing for my role at Ag Leader Technology, one of the interviewers mentioned that they had cloned "+ 
    "my Mouse Trap Unity project (see projects tab). I was surprised to hear this and happy to hear that the project " + 
    "built for them. Since Ag Leader primarily works in C++, they asked why I didn't work in Unreal instead of Unity. " +
    "I was unaware that Unreal was in C++ vice C#. I prefer C++ in general, so I am looking forward to trying a new " +
    " future project with Unreal!",
    null
);

let blogCards = [];
blogCards.push(card5);
blogCards.push(card4);
blogCards.push(card3);
blogCards.push(card2);
blogCards.push(card1);

export {blogCards}