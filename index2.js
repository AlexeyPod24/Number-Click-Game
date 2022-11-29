
// ///////////////////////////////////////////////////////////////////////////////////////////////
function palindrome(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        return false
    }
    
  } return true 
}

console.log(palindrome('abccba'))



// NO 2 v1 ////////////////////////////////////////////////////////////////////////////////////////////

let newArr = []
let total = []

function arrMultiply(arr) {
for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] % 2 === 0) {
        // arr[i] += newArr.push(arr[i])
        arr[i] = arr[i] * 2
    }   
 
}

for (let i = 0; i < newArr.length; i++) {
    total.push (newArr[i] * 2)
}
 
return total

}

console.log(arrMultiply([1, 2, 4, 5, 6, 7, 8, 9, 10]))
// USE MAP FUNCTION




////////////////////////////////////////////////////////////////////////////////////////////////////////
// NO2 v2

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// arr.forEach(element => {
//   if (element % 2 === 0) console.log(element * 2)



// })







