// 1.Write a JavaScript program to find the sum of all the numbers in an array.
console.log("Prblm No. : 1");
const numArr = [1, 2, 3, 4, 5];
const sum = function (arr) {
  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
console.log(sum(numArr));
console.log("<------------------------------>");

// 2. Write a JavaScript program to find the largest and smallest elements in an array.
console.log("Prblm No. : 2");
const bigAndSmall = function (arr) {
  let small = arr[0];
  let large = arr[0];
  for (let i = 1; i < arr.length; i++) {
    small = small > arr[i] ? arr[i] : small;
    large = large < arr[i] ? arr[i] : large;
  }
  return [small, large];
};
const [smallNo, largeNo] = bigAndSmall(numArr);
console.log("Smaller No is " + smallNo);
console.log("Larger No is " + largeNo);
console.log("<------------------------------>");

// 3.Write a JavaScript program to check if a given number is positive, negative, or zero.

console.log("Prblm No. : 3");
const checkNo = function (num) {
  return num > 0
    ? `${num} is a positive number`
    : num < 0
    ? `${num} is a negative number`
    : `${num} is a zero`;
};

console.log(checkNo(1));
console.log("<------------------------------>");

// 4. Write a JavaScript program to check if a given string, is a palindrome.

console.log("Prblm No. : 4");
const str = "racecar";

const checkPalindrome = function (str) {
  let strArr = str.split("");
  strArr = strArr.reverse();
  let revStr = strArr.join("");
  return str === revStr
    ? `${str} it is a palindrome`
    : `${str} is not a palindrome`;
};
console.log(checkPalindrome(str));
console.log("<------------------------------>");

// 5. Write a JavaScript program to reverse a string without using the built-in reverse () method.

console.log("Prblm No. : 5");
const reverseString = function (str) {
  let strArr = str.split("");
  let revStr = "";
  for (let i = strArr.length - 1; i >= 0; i--) {
    revStr += strArr[i];
  }
  return revStr;
};

console.log(reverseString("welcome"));
console.log("<------------------------------>");

// 6. Write a JavaScript conditional statement to find the sign of the product of three
// numbers. Display an alert box with the specified sign.
// Sample numbers: 3, -7, 2
// Output : The sign is -

console.log("Prblm No. : 6");
const productOfSign = function (numOne, numTwo, numThree) {
  let product = numOne * numTwo * numThree;
  if (product < 0) {
    alert(`The sign is -`);
  } else {
    alert(`The sign is +`);
  }
};
productOfSign(3, -7, 2);
console.log("Displays the alert pop-up with the sign");
console.log("<-------------------------------->");

// 7. Write a JavaScript program to remove items from a drop-down list.

console.log("Prblm No. : 7");
const selectedElement = document.getElementById("colorSelect");
const removecolor = function () {
console.log(selectedElement.options);
selectedElement.remove(selectedElement.selectedIndex);
};
console.log("Displays the Drop-Down List.");
console.log("<-------------------------------->");


// 8. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.

console.log("Prblm No. : 8");
const numOne = 0, numTwo = -1, numThree = 4;
const sortNum = function(numOne,numTwo,numThree){
  let arr = [];
  if(numOne > numTwo && numOne > numThree){
    arr.push(numOne);
    (numThree > numTwo) ? arr.push(numThree,numTwo) : arr.push(numTwo,numThree);
  }else if(numTwo > numOne && numTwo > numThree){
    arr.push(numTwo);
    (numOne > numTwo) ? arr.push(numOne,numTwo) : arr.push(numTwo,numOne);
  }else{
    arr.push(numThree);
    (numOne > numTwo) ? arr.push(numOne,numTwo) : arr.push(numTwo,numOne);
  }
  return arr;
}
alert(sortNum(numOne,numTwo,numThree));
console.log("Displays the alert pop-up with the Values");
console.log("<-------------------------------->");

// 9. Write a JavaScript function that returns a string that has letters in alphabetical order.

console.log("Prblm No. : 9");
const sortAlp = function(str){
  return str.split('').sort().join('');
}
console.log(sortAlp('webmaster'));
console.log("<-------------------------------->");

// 10. Write a JavaScript program that adds a keydown event listener to a text input to detect when the &quot;Enter key&quot; is pressed.

console.log("Prblm No. : 10")
const userInput = document.getElementById('text-input');
userInput.addEventListener('keydown',()=>{
  console.log("Input keydown event happens here!!!")
})