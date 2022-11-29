
// randomzie numbers
// randomize font size
// Randomzie colors 
// change background when clicking
// reset button
// 

// const squaresCount = prompt('How many squares do you want?')

let startBtn = document.querySelector('.start-btn')
let resetBtn = document.querySelector('.reset-btn')
let timer = document.querySelector('.time__countdown')
const squares = document.querySelectorAll('.grid .square');
let gameStarted = false;
let counter = 60
let timeInterval;



let nums = []









startBtn.addEventListener('click', startGame)


function startGame() {
gameStarted = true;

    // if (gameStarted === true) {
    //     for (let i = 0; i < squares.length; i++) {
    //         squares[i].addEventListener('click', function() {
    //             squares[i].style.backgroundColor = '#2A3166'
    //         }) 
    //     } 
    // }
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
  const numArray = []
    


    for (let i = 1; i < 26; i++) {
        numArray.push(i)

    }
    
    numArray.sort(() => 0.5 - Math.random())


    for (let i = 0; i < squares.length; i++) {
        const random = Math.floor(Math.random() * 25)
    
         squares[i].textContent = numArray[i]
         if (numArray[i] === 1) squares[i].addEventListener('click', function() { 
             squares[i].style.backgroundColor = 'red'
             squares[i].classList.add('clicked')
             
             
        })



        squares[i].style.fontSize = random + 15 + "px";
        squares[i].style.color = getRandomColor()
        squares[i].style.backgroundColor = '#000000'
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

    

})





