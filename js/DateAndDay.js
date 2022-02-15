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
var myVar = setInterval(myFunction, 1000);

var word = 'w3resource';
var newArray = word.split('');

function myFunction() {
    var letter = newArray.pop();
    var newWord = newArray.unshift(letter);
    var theWord = newArray.join('');
    console.log(theWord);
    document.getElementById('rotate').innerHTML = theWord;
}