// The Countdown Container
const popUpWindow = document.getElementById('clock');
// Start Button
const startCountdown = document.getElementById('btn-start');
// Function that activates the visabillity of the countdown container after the click of the button
const currentDateElement = document.getElementById('date');
const currentTimeElement = document.getElementById('hour');

const outputDay = document.getElementById('day');
const outputClockHour = document.getElementById('clockHour');
const outputMin = document.getElementById('minute');
const outputSec = document.getElementById('second');



// Current Date
let date = new Date();
let day = date.getDate();
let month = date.getMonth() +1;
let year = date.getFullYear();


if (month < 10) month = "0" + month;
if (day <10) day = "0" + day;

const todayDate = year + "-" + month + "-" + day;
currentDateElement.value = todayDate;

// Pop - Up windown, when click on button
const toggleClockModul = () => {
    popUpWindow.classList.toggle('visible');
};

function userInputDate(){
    //get Time Value    
    const inputTime = currentTimeElement.value;
    let inputHour = 0;
    let inputMin = 0;
    // when the input is not empty, get the value from the input
    if(inputTime != ""){
        const inputTimeElemets = inputTime.split(":");
        inputHour = inputTimeElemets[0];
        inputMin = inputTimeElemets[1];
    }
    // Getting the input date value
     const inputDate = currentDateElement.value;
     // assigning the input value and using split 
     console.log(inputDate);
     const inputDateElement = inputDate.split("-"); //Split String into Numbers 
     const futurDate = new Date(inputDateElement[0], (inputDateElement[1] -1), inputDateElement[2], inputHour, inputMin);
     console.log(futurDate);
     return futurDate.getTime();
}


function sas (futurDate) {
    const now = Date.now();

    //difference between selected date and now
    const difference = futurDate - now;

    let days = Math.floor(difference/(1000*60*60*24));
    let hours = Math.floor((difference%(1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((difference%(1000*60*60))/ (1000*60));
    let seconds = Math.floor((difference%(1000*60))/ 1000);

    outputDay.textContent = days;
    outputClockHour.textContent = hours;
    outputMin.textContent = minutes;
    outputSec.textContent = seconds;
}

// Eventlistener triggers when the button is clicked
startCountdown.addEventListener('click',function (){
    toggleClockModul();
    const futurDate =  userInputDate();
    console.log(futurDate);
    setInterval(sas.bind(null, futurDate),1000);

});





