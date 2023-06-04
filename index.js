let cards=[]
let sum=0;
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let isAlive = true;
let hasBalckJack = false;

function randomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1;
    if(randomNumber>10){
        return 10
    }
    if(randomNumber==1){
        return 11
    }
    else{
        return randomNumber
    }
}
function startGame(){
    sum= 0;
    cards=[];
    isAlive = true;
    hasBalckJack = false;
    let firstCard = randomCard();
    let secondCard = randomCard();
   cards=[firstCard,secondCard]
   sum = firstCard+secondCard;
   renderGame()

}
function renderGame(){
    cardsEl.innerHTML= "Cards : "
    for(let i= 0;i<cards.length; i++){
        cardsEl.innerHTML+=cards[i] + ' ';
    }
    sumEl.innerHTML = "sum : " + sum;
    if(sum<=20){
        messageEl.innerHTML="Do you want to draw a new card?"
    }
    else if (sum==21){
        messageEl.innerHTML= "You've got blackjack."
        hasBalckJack=true;
    }
    else{
        messageEl.innerHTML= "You're out of the game."
        isAlive=false;
    }
}
function newCard(){
    if(isAlive==true&&hasBalckJack==false){
        let card = randomCard();
        sum += card;
        cards.push(card);
        renderGame()
    }
}