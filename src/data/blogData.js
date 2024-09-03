import weatherAppImg from "../assets/weatherApp.gif";

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

const card1 = new BlogCard(
    "Test Card Name 1",
    ["May", "15", "2005"],
    "Test Test Test Test Test Test Test Test Test Test Test Test Test Test TestTest Test Test Test Test Test Test Test Test Test Test Test Test Test Test",
    weatherAppImg
);

const card2 = new BlogCard(
    "Test Card Name 1",
    ["May", "15", "2005"],
    "tTest Test Test Test Test Test Test Test Test Test Test Test Test Test Test",
    weatherAppImg
);

let blogCards = [];
blogCards.push(card1);
blogCards.push(card2);
blogCards.push(card1);
blogCards.push(card1);
blogCards.push(card1);

export {blogCards}