// The Countdown Container
const popUpWindow = document.getElementById('clock');
// Start Button
const startCountdown = document.getElementById('btn-start');
// Function that activates the visabillity of the countdown container after the click of the button
const currentDateElement = document.getElementById('date');

// Current Date
let date = new Date()
let day = date.getDate();
let month = date.getDate();
let year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day <10) day = "0" + day

const todayDate = year + "-" + month + "-" + day;
currentDateElement.value = todayDate;

const toggleClockModul = () => {
    popUpWindow.classList.toggle('visible');
};

startCountdown.addEventListener('click',toggleClockModul);



