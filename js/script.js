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
  let ranNum=Math.floor(Math.random()* quotes.length);
  return quotes[ranNum];
}



/***
 * `printQuote` function
 * 
***/
function printQuote(){

  let ranQuote=getRandomQuote();
  console.log(ranQuote);

const htmlQuote=document.querySelector('.quote');
 //console.log(htmlQuote);
  const htmlAuthor=document.querySelector('.source');
  //const htmlCitation=document.querySelector('.citation');
  //const htmlYear= document.querySelector('.year');
 // console.log(`The quote: ${ranQuote.quote}  and the ${ranQuote.author}`)
  htmlQuote.innerHTML=ranQuote.quote;
  htmlAuthor.innerHTML=`${ranQuote.source}${ ranQuote.citation? `<span class="citation">${ranQuote.citation} </span>`: ""}${ranQuote.year? `<span class="year">${ranQuote.year}</span>`:""}`;
  //htmlAuthor.innerHTML= ranQuote.source;
  //ranQuote.citation ?  htmlCitation.innerHTML = ranQuote.citation : "";
   //ranQuote.year? htmlYear.innerHTML =ranQuote.year : "";
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);