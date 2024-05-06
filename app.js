import quotes from "./quotes.js";

const generateBtn = document.querySelector(".generate-btn");
const quote = document.querySelector("#quote");

const defaultQuote =
  "In my first interview in the UFC, I asked them to throw me among the lions. I wanted to fight the best, and that’s what the UFC did. Ex-champions, future champions — that’s what I wanted.";

quote.innerHTML = defaultQuote;

const generateRandomQuote = function (quotes) {
  let randomQuoteID = Math.floor(Math.random() * quotes.length);
  console.log(randomQuoteID);

  quote.innerHTML = quotes[randomQuoteID];
};

generateBtn.addEventListener("click", () => generateRandomQuote(quotes));
