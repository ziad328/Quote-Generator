var allQuotes = [
    { quote: "“Be yourself; everyone else is already taken.”", author: "― Oscar Wilde" },
    { quote: "“So many books, so little time.”", author: "― Frank Zappa" },
    { quote: "“A room without books is like a body without a soul.”", author: "― Marcus Tullius Cicero" },
    { quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”", author: "― Dr. Seuss" },
    { quote: "“Be the change that you wish to see in the world.”", author: "― Mahatma Gandhi" },
    { quote: "“In three words I can sum up everything I've learned about life: it goes on.”", author: "― Robert Frost" }
];
var quoteElement = document.getElementById("quote");
var quoteAuthorElement = document.getElementById("quoteAuthor");
var prevNum = 0;


function generateQuote() {

    var num = randNum(prevNum);
    quoteElement.innerHTML = allQuotes[num].quote;
    quoteAuthorElement.innerHTML = allQuotes[num].author;
}


function randNum(preNum) {
    var randNum = Math.round(Math.random() * allQuotes.length);

    while (randNum == preNum) {
        randNum = Math.round(Math.random() * allQuotes.length);
    }
    prevNum = randNum;
    return (prevNum);
}