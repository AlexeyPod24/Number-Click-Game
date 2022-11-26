
// randomzie numbers
// randomize font size
// Randomzie colors 
// change background when clicking
// reset button
// 
let startBtn = document.querySelector('.start-btn')
let resetBtn = document.querySelector('.reset-btn')
let timer = document.querySelector('.time__countdown')
const squares = [...document.querySelectorAll('.square')];
let gameStarted = false;
let counter = 60
let timeInterval;









startBtn.addEventListener('click', startGame)


function startGame() {
gameStarted = true;

    if (gameStarted === true) {
        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener('click', function() {
                squares[i].style.backgroundColor = 'lightgreen'
            }) 
        } 
    }
    randomNumber() 

   timeInterval = setInterval(function () {
        counter--
        if (counter >= 0) {
            timer.innerHTML = `Time left: ${counter}`
        }
    }, 1000)
}  

       
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  


function randomNumber() {
  
    for (let i = 0; i < squares.length; i++) {
        const random = Math.floor(Math.random() * 25)
        squares[i].textContent = random
        squares[i].style.fontSize = random + 15 + "px";
        squares[i].style.color = getRandomColor()
        squares[i].style.backgroundColor = '#1F2937'
}


}

resetBtn.addEventListener('click', function() {
    clearInterval(timeInterval) 
    counter = 60
    timer.innerHTML = `Time left: 60`
    gameStarted = false
    

})





