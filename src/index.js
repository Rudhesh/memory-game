
document.querySelector(".button").addEventListener("click", startCounter, {once: true});

const watch = document.querySelector("#stopwatch");
const start = document.querySelector("#start")
const score = document.querySelector(".score")
const timer = document.querySelector(".timer")

let counter = 0;
let scoreNow = 0
let timerWatch;

function startCounter() {
    console.log("hello")
    timerWatch =  setInterval(() => {
        counter += 10
        let dateTimer = new Date(counter)
       timer.innerHTML = `${(" " + dateTimer.getUTCMinutes()).slice(-2) == 0 ? "" : (" " + dateTimer.getUTCMinutes()).slice(-2)+" mins"}  
       ${(  " " + dateTimer.getUTCSeconds()).slice(-2)}  secs`

    }, 10);
    
}

function timePaused() {
    timer.style.fontWeight = "bold";
    clearInterval(timerWatch);
  }


const cards = document.querySelectorAll(".memoryCard");



let cardIsFlipped = false
let lockBoard = false
let firstCard, secondCard
let moves = 0

function flipCard() {
    // console.log("I was clicked!!")
    // console.log(this)
moves++
console.log(moves)
    this.classList.add("flip")
    // startCounter()
    if (!cardIsFlipped) {
        cardIsFlipped = true
        firstCard = this

        console.log(cardIsFlipped, firstCard)
    } else {
        cardIsFlipped = false
        secondCard = this
        // console.log(cardIsFlipped, firstCard)
        if (firstCard.dataset.vehicles === secondCard.dataset.vehicles ) {
            firstCard.removeEventListener("click", flipCard)
            secondCard.removeEventListener("click", flipCard)
            score.innerHTML = "Score: " + (scoreNow = scoreNow + 4)
            console.log("function executed!") 
            console.log(scoreNow) 
            setTimeout(() => {
                congratulation()



            }, 1000);
           
        }else {
            // score.innerHTML = scoreNow = 0
          
            setTimeout(() => {
                firstCard.classList.remove("flip")
                secondCard.classList.remove("flip")
                
            }, 1000);
        }
        
        }
        
    }



onload = function(){
    var parent = document.querySelector(".memory-game");
    var frag = document.createDocumentFragment();
    while (parent.children.length) {
        frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
    }
    parent.appendChild(frag);
}

cards.forEach(card => {card.addEventListener("click", flipCard)
console.log(card)})


let modal = document.getElementById("popup1")

 function congratulation() {
    if (scoreNow === 32 ) {
       timePaused()
        // alert( `congratulation, You made ${moves} moves in ${timer.innerHTML} and Scored ${scoreNow} points
        //  `)

        modal.classList.add("show")
        document.getElementById("finalMove").innerHTML = moves;
        document.getElementById("starRating").innerHTML = scoreNow;
        document.getElementById("totalTime").innerHTML = timer.innerHTML;
        // return  location.reload();
       
    }
}

function playAgain(){
    modal.classList.remove("show");
    location.reload();
}


