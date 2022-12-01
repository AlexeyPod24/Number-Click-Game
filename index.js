const startBtn = document.querySelector('.start-btn')
const resetBtn = document.querySelector('.reset-btn')
const timer = document.querySelector('.time__countdown')
const squares = document.querySelectorAll('.grid .square');
const seperateSquare = document.querySelectorAll('.grid');
let gameStarted = false;
let counter = 60
let timeInterval;

let clickedSquares = []

startBtn.addEventListener('click', startGame)

function startGame() {
  gameStarted = true;

  randomNumber()

  timeInterval = setInterval(function() {
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
  const numArray = []

  for (let i = 1; i < 26; i++) {
    numArray.push(i)
  }

  numArray.sort(() => 0.5 - Math.random())

  for (let i = 0; i < squares.length; i++) {
    const random = Math.floor(Math.random() * 25)

    squares[i].textContent = numArray[i]
    squares[i].style.fontSize = random + 15 + "px";
    squares[i].style.color = getRandomColor()
    squares[i].style.backgroundColor = '#000000'
    squares[i].addEventListener('click', function() {  

if(
   (clickedSquares[clickedSquares.length - 1] === (numArray[i] - 1))
   || 
   (numArray[i] === 1 && clickedSquares.length === 0) 
 ){
  clickedSquares.push(numArray[i]);
  squares[i].style.backgroundColor = 'green'
  console.log(clickedSquares)
}
else {
  squares[i].style.backgroundColor = 'red'
  
  
}
  })



}
}

resetBtn.addEventListener('click', function() {
  clearInterval(timeInterval)
  counter = 60
  timer.innerHTML = `Time left: 60`
  gameStarted = false
  squares.forEach((n) => {
    n.textContent = "";
    n.style.backgroundColor = "#000000";
  })
  clickedSquares = []



})