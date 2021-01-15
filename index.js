let quoteArray = [
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
];
// 

const randomQuote = document.querySelector('.random-quote')
const quote = document.querySelector('.quote')


// 
 randomQuote.addEventListener("click", generateRandomQuote)


function generateRandomQuote(){
  let randomNumber = Math.floor(Math.random()*10)
  console.log(randomNumber)
  showQuote(randomNumber)
}
function showQuote(value){
    randomQuote.innerHTML = `<p class="quote">${quoteArray[value]}</p>`
}
