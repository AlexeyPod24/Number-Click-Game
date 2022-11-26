
// // function palindrome(str) {
// //    const joined = str.split('').reverse().join('')
// //    if (str.toLowerCase() === joined.toLowerCase()) return true
   
// //    else false



// // }

// console.log(palindrome('racecar'))

let newArr = []

function arrMultiply(arr) {
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
     newArr += arr[i]
     console.log(newArr[i])
    }
       
    
}
return newArr
}

arrMultiply([1, 2, 4, 5, 6, 7, 8, 9, 10])