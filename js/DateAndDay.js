//Question#1
// const dayIndex = new Date().getDay();
// const getDayName = (dayIndex) => {
//     const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     return days[dayIndex];
// }
// const dayName = getDayName(dayIndex)
// document.getElementById("Date").innerHTML = dayName;

// Time:
// var today = new Date();

// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// document.getElementById("Time").innerHTML = time;

//Question#2

//Question#3
// // Current Date in javaScript
// var today = new Date();
// var date = today.getMonth() + '-' + (today.getDate() + 1) + '-' + today.getFullYear();
// document.getElementById("Current-Date").innerHTML = date;

// var today = new Date();
// var date = today.getMonth() + '/' + (today.getDate() + 1) + '/' + today.getFullYear();
// document.getElementById("Current/Date").innerHTML = date;

//Question#4
// var side1 = 5;
// var side2 = 6;
// var side3 = 7;

// var TotalSide = side1 + side2 + side3;
// var s = TotalSide / 2;
// var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
// document.writeln('Area=' + area);

//Question#5
// var myVar = setInterval(myFunction, 1000);
// var word = 'w3resource';
// var newArray = word.split('');

// function myFunction() {
//     var letter = newArray.pop();
//     var newWord = newArray.unshift(letter);
//     var theWord = newArray.join('');
//     console.log(theWord);
//     document.getElementById('rotate').innerHTML = theWord;
// }

//Question#6
// program to check leap year
// function checkLeapYear(year) {
//     //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }
// // take input
// const year = prompt('Enter a year:');
// checkLeapYear(year);

//Question#7
// let s = `Enter the value of Year1 
//         and Year2 in the input box to get 
//         year's having Sunday on 1st January`;

// document.getElementById("geeks")
//     .innerHTML = `<p>${s}</p>`;

// function GFG_Fun() {
//     var y1 = Number(document
//         .getElementById('year1').value);

//     var y2 = Number(document
//         .getElementById('year2').value);

//     var res = " ";

//     for (let year = y1; year <= y2; ++year) {
//         const c_year = new Date(year, 0, 1);
//         if (c_year.getDay() === 0) {
//             res += year + ", ";
//         }
//     }

//     if (y1 > y2) {
//         document.getElementById('gfg').innerHTML = "Year2 must be greater than Year1";
//     } else {
//         if (res === " ") {
//             document.getElementById('gfg')
//                 .innerHTML = `<p>No Year Exist</p>`;
//         } else {
//             document.getElementById('gfg')
//                 .innerHTML = `<p> Year having 
//                     Sunday on 1st January are :${res}</p>`;
//         }
//     }
// }

//Question#8
// function guess() {
//     var num = parseInt(Math.random() * 10 + 1);
//     var userGuess = prompt("Input a guess number between 1 to 10");
//     if (isNaN(userGuess)) {
//         alert("Please, write a number");
//     } else {
//         if (num == userGuess) {
//             alert("Wow you guessed it :D");
//         } else {
//             alert("Not matched. Number was " + num);
//         }
//     }
// }

// Question9
// Get the current date
// let today = new Date();

// // Get the year of the current date
// let christmasYear = today.getFullYear();

// // Check if the current date is
// // already past by checking if the month
// // is December and the current day
// // is greater than 25
// if (today.getMonth() == 11 &&
//     today.getDate() > 25) {

//     // Add an year so that the next
//     // Christmas date could be used
//     christmasYear = christmasYear + 1;
// }

// // Get the date of the next Christmas
// let christmasDate =
//     new Date(christmasYear, 11, 25);

// // Get the number of milliseconds in 1 day
// let dayMilliseconds =
//     1000 * 60 * 60 * 24;

// // Get the remaining amount of days
// let remainingDays = Math.ceil(
//     (christmasDate.getTime() - today.getTime()) /
//     (dayMilliseconds)
// );

// // Write it to the page
// document.write("There are " + remainingDays +
//     " days remaining until Christmas.");

// Question10
// function multiplyBy() {
//     num1 = document.getElementById("fn").value;
//     num2 = document.getElementById("sn").value;
//     document.getElementById("result").innerHTML = num1 * num2;
// }

// function divideBy() {
//     num1 = document.getElementById("fn").value;
//     num2 = document.getElementById("sn").value;
//     document.getElementById("result").innerHTML = num1 / num2;
// }

// Question11
/* When the input field receives input, convert the value from fahrenheit to celsius */
// fahrenheit to celsius
// function temperatureConverter(valNum) {
//     valNum = parseFloat(valNum);
//     document.getElementById("outputCelcius").innerHTML = (valNum - 32) / 1.8;
// }

// celsius to fahrenheit 
// function temperatureConverter(valNum) {
//     valNum = parseFloat(valNum);
//     document.getElementById("outputFahrenheit").innerHTML = (valNum * 1.8) + 32;
// }

// Question12
// document.getElementById("CurrentURL").innerHTML =
//     "The full URL of this page is:<br>" + window.location.href;

// Question13
// A user-defined variable created
// let my_var = "userVariable";
// let my_value = "userValue";

// let x = {
// Assign value of a user-defined variable
//     [my_var]: my_value,
// };
// console.log(x);
// console.log(x[my_var]);

// Question14
// function checkFileExtension() {
//     fileName = document.querySelector('#file1').value;
//     extension = fileName.split('.').pop();
//     document.querySelector('.output')
//         .textContent = extension;
// };

// Question15
// function diff(num) {
//     if (num <= 13) // if given number is less than or eual to 13 
//         return 13 - num; // then calculate the difference b/w the given number and 13
//     else
//         return (num - 13) * 2; // else if the num is greater than 13 then return double the absolute difference
// }

// console.log(diff(23));
// console.log(diff(10));

// Question16
// function triple(num1, num2) {
//     if (num1 == num2) // if given number are equal 
//         return (num1 + num2) * 3; // If the two values are same, then returns triple their sum.
//     else
//         return (num1 + num2); // error
// }
// console.log(triple(10, 20));
// console.log(triple(20, 20));

// Question17
// function diff_num(n) {
//     if (n <= 19) {
//         return (19 - n);
//     } else {
//         return (n - 19) * 3;
//     }
// }
// console.log(diff_num(12));
// console.log(diff_num(19));
// console.log(diff_num(22));

// Question18
function diff_num(num1, num2) {
    if (num1 == 50 || num2 == 50 || num1 + num2 == 50) {
        return true;
    } else {
        return false;
    }
}
console.log(diff_num(10, 40));
console.log(diff_num(50, 50));
console.log(diff_num(50, 15));
console.log(diff_num(220, 202));
//  2nd Solution
console.log(diff_num(50, 50));
console.log(diff_num(20, 50));
console.log(diff_num(20, 20));
console.log(diff_num(20, 30));