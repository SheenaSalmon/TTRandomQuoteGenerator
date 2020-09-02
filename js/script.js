/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes =[
  {quote:"It does not matter how slowly you go as long as you do not stop.",
source:"Confucious"},

{quote:"The secret to getting ahead is getting started",
source:"Mark Twain"},

{quote:"If you're going through hell, keep going.",
source:"Winston Churchill"},

{quote:"Quality is not an act, it is a habit",
source:"Will Durant",
citation: "The Story of Philosophy: The Lives and Opinions of the Greater Philosophers is",
year: "1926"},

{quote:"It always seems impossible until it's done.",
source:"Nelson Mandela"},

{quote:"Keep your eyes on the stars, and your feet on the ground",
source:"Theodore Roosevelt"},

{quote:"Too legit, Too legit to quit",
source:"MC Hammer",
citation: "Song titled 'Too Legit to Quit'",
year:"1995"},
]


/***
 * `getRandomQuote` function
***/

function getRandomQuote()
{
  let ranNum=Math.floor(Math.random()* quotes.length); //gets random number from 0 to last index of the array
  return quotes[ranNum];//return the random quote object
}



/***
 * `printQuote` function
 * 
***/
function printQuote(){

  let ranQuote=getRandomQuote();  //Holds the random quote object
 

const htmlQuote=document.querySelector('.quote'); //select html class for the quote
 
  const htmlAuthor=document.querySelector('.source'); //select the html class for autho
 
  htmlQuote.innerHTML=ranQuote.quote;  //update the innerhtml of the quote class
  htmlAuthor.innerHTML=`${ranQuote.source}${ ranQuote.citation? `<span class="citation">${ranQuote.citation} </span>`: ""}${ranQuote.year? `<span class="year">${ranQuote.year}</span>`:""}`; //add the quote, citation and author to the html 

}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);