let cards = []
let sum = 0
let message = ""
let hasBlackJack = false
let isAlive = false

let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")



function renderGame() {
    if(cards.length === 2){
        for(let i=0; i<cards.length; i++){
            cardsEl.textContent += cards[i] + " "
        }
    }
    sumEl.textContent = "Sum: " + sum
    
    if(sum <=20){
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21){
        message = "You've got BlackJack!"
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game!"
        isAlive = false;
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        cardsEl.textContent += card + " "
        renderGame()
    }
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    }
    else if(randomNumber === 1){
        return 11
    }
    else {
        return randomNumber
    }
}

function startGame() { 
    cardsEl.textContent = "Your cards: "
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    if(firstCard === 1 && secondCard === 1){
        sum = 21
    }
    renderGame()
}