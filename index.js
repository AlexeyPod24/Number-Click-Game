
// randomzie numbers
// randomize font size
// Randomzie colors 
// change background when clicking
let startBtn = document.querySelector('.start-btn')
let resetBtn = document.querySelector('.reset-btn')
let timer = document.querySelector('.time__countdown')
const squares = [...document.querySelectorAll('.square')];
let gameStarted = false;
let counter = 60








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

    setInterval(function () {
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
    
    startGame()

})







// // 

// var tableEl = document.getElementById('game_table');
// var timerEl = document.getElementById('timer');
// var startEl = document.getElementById('start');
// var restartEl = document.getElementById('restart');
// var paused = false;
// var now = 0;
// var timer;
// var rows = 5;
// var columns = 5;
// var time = 75;
// var restTime = time;
// startEl.addEventListener('click', gameStart);
// restartEl.addEventListener('click', gameRestart);
// tableEl.addEventListener('click', init);
// function gameStart() {
//     startEl.style.display = 'none';
//     restartEl.style.display = 'block';
//     create();
//     timerEl.innerHTML = 'Времени осталось: ' + restTime;
//     timer = setInterval(timeStep, 1000);
// }
// function gameRestart() {
//     restTime = time;
//     now = 0;
//     clearInterval(timer);
//     gameStart();
// }
// function timeStep() {
//     restTime--;
//     if (restTime > 0) {
//         timerEl.innerHTML = 'Времени осталось: ' + restTime;
//     } else {
//         clearInterval(timer);
//         timerEl.innerHTML = 'Вы проиграли';
//         paused = true;
//     }
// }
// function init(event) {
//     var targ = event.target //элемент, на котором произошло событие
//     var check = targ.classList.contains('td') &&
//         !targ.classList.contains('select') && !paused;
//     if (check) {
//         var val = +targ.innerHTML;
//         console.log(val, now)
//         if (val === now + 1) {
//             now += 1;
//             targ.classList.add('select');
//             if (val === rows * columns) {
//                 timerEl.innerHTML = 'Вы выиграли';
//                 clearInterval(timer);
//             }
//         }	
//     }
// }
// function create() {
//     startEl.style.display = 'none';
//     var numbers = getNumbers();
//     var html = '';
//     for (var i = 0; i < rows; i++) {
//         html += '<tr>';
//             for (var j = 0; j < columns; j++) {
//                 html += '<td class="td" style="' 
//                     + getRandomStyle() + '">' 
//                     + getRandomNumber(); + '</td>'
//             }
//         html += '</tr>';
//     }
//     tableEl.innerHTML = html;
//     function getRandomNumber() {
//         var n = randomInterval(0, numbers.length - 1);
//         var res = numbers[n]
//         numbers.splice(n, 1);
//         return res;
//     }
// }
// function getRandomStyle() {
//     return 'font-size:' + randomInterval(14, 40) + 'px;'
//         + 'color:' + getRandomColor();
// }
// function getNumbers() {
//     var numbers = [];
//     for (var i = 0; i < rows*columns; i++) {
//         numbers[i] = i + 1;
//     }
//     return numbers;
// }
// function randomInterval(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// } 
// function getRandomColor() {
//   return 'rgb(' + randomInterval(0, 255) + ',' + 
//     randomInterval(0, 255) + ',' + randomInterval(0, 255) + ')';