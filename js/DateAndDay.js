// var today = new Date();
const dayIndex = new Date().getDay();
const getDayName = (dayIndex) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
}
const dayName = getDayName(dayIndex)
    // var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getDay();
    // console.log(today.getDay());
document.getElementById("Date").innerHTML = dayName;

// Time:
var today = new Date();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
document.getElementById("Time").innerHTML = time;