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
var today = new Date();
var date = today.getMonth() + '-' + (today.getDate() + 1) + '-' + today.getFullYear();
document.getElementById("Current-Date").innerHTML = date;


var today = new Date();
// var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var date = today.getMonth() + '/' + (today.getDate() + 1) + '/' + today.getFullYear();
document.getElementById("Current/Date").innerHTML = date;