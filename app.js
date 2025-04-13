let secondsDiv = document.getElementById("seconds");
let dayDiv = document.getElementById("day");
let timeDiv = document.getElementById('time');
let numbersInUrduDiv = document.getElementById('numbersInUrdu');
const urduDays = [
    "اتوار",    // Sunday
    "پیر",     // Monday
    "منگل",    // Tuesday
    "بدھ",     // Wednesday
    "جمعرات",  // Thursday
    "جمعہ",    // Friday
    "ہفتہ"     // Saturday
  ];

  const urduNumberWords = [
    "صفر", "ایک", "دو", "تین", "چار", "پانچ", "چھ", "سات", "آٹھ", "نو",
    "دس", "گیارہ", "بارہ", "تیرہ", "چودہ", "پندرہ", "سولہ", "سترہ", "اٹھارہ", "انیس",
    "بیس", "اکیس", "بائیس", "تئیس", "چوبیس", "پچیس", "چھببیس", "ستائیس", "اٹھائیس", "انتیس",
    "تیس", "اکتیس", "بتیس", "تینتیس", "چونتیس", "پینتیس", "چھتیس", "سینتیس", "اڑتیس", "انتالیس",
    "چالیس", "اکتالیس", "بیالیس", "تینتالیس", "چوالیس", "پینتالیس", "چھیالیس", "سینتالیس", "اڑتالیس", "انچاس",
    "پچاس", "اکاون", "باون", "ترپن", "چون", "پچپن", "چھپن", "ستاون", "اٹھاون", "انسٹھ",
    "ساٹھ"
  ];

  const urduNumbers = [
    "۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹",
    "۱۰", "۱۱", "۱۲", "۱۳", "۱۴", "۱۵", "۱۶", "۱۷", "۱۸", "۱۹",
    "۲۰", "۲۱", "۲۲", "۲۳", "۲۴", "۲۵", "۲۶", "۲۷", "۲۸", "۲۹",
    "۳۰", "۳۱", "۳۲", "۳۳", "۳۴", "۳۵", "۳۶", "۳۷", "۳۸", "۳۹",
    "۴۰", "۴۱", "۴۲", "۴۳", "۴۴", "۴۵", "۴۶", "۴۷", "۴۸", "۴۹",
    "۵۰", "۵۱", "۵۲", "۵۳", "۵۴", "۵۵", "۵۶", "۵۷", "۵۸", "۵۹", "۶۰"
  ];

  const hourlyGradients = [
    "linear-gradient(to right, #0f2027, #203a43, #2c5364)",  // 0 AM - Midnight
    "linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d)",  // 1 AM
    "linear-gradient(to right, #42275a, #734b6d)",           // 2 AM
    "linear-gradient(to right, #141e30, #243b55)",           // 3 AM
    "linear-gradient(to right, #000000, #434343)",           // 4 AM
    "linear-gradient(to right, #0f0c29, #302b63, #24243e)",  // 5 AM
    "linear-gradient(to right, #e96443, #904e95)",           // 6 AM
    "linear-gradient(to right, #ff5f6d, #ffc371)",           // 7 AM
    "linear-gradient(to right, #56ccf2, #2f80ed)",           // 8 AM
    "linear-gradient(to right, #43cea2, #185a9d)",           // 9 AM
    "linear-gradient(to right, #f7971e, #ffd200)",           // 10 AM
    "linear-gradient(to right, #f857a6, #ff5858)",           // 11 AM
    "linear-gradient(to right, #2193b0, #6dd5ed)",           // 12 PM
    "linear-gradient(to right, #cc2b5e, #753a88)",           // 1 PM
    "linear-gradient(to right, #ee9ca7, #ffdde1)",           // 2 PM
    "linear-gradient(to right, #396afc, #2948ff)",           // 3 PM
    "linear-gradient(to right, #ff9966, #ff5e62)",           // 4 PM
    "linear-gradient(to right, #bdc3c7, #2c3e50)",           // 5 PM
    "linear-gradient(to right, #de6262, #ffb88c)",           // 6 PM
    "linear-gradient(to right, #1c92d2, #f2fcfe)",           // 7 PM
    "linear-gradient(to right, #c33764, #1d2671)",           // 8 PM
    "linear-gradient(to right, #4568dc, #b06ab3)",           // 9 PM
    "linear-gradient(to right, #3a1c71, #d76d77, #ffaf7b)",  // 10 PM
    "linear-gradient(to right, #0f2027, #203a43, #2c5364)"   // 11 PM
  ];
  
  
  



// let color = '111011';
// let svgColorChange = '<svg fill="#'+color+'" width="800px" height="800px" viewBox="-11 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>one</title><path d="M1.906 2.625h5.469v22.969h-2.281v-20.75h-3.188v-2.219z"></path></svg>'

// secondsDiv.innerHTML = svgColorChange;
// secondsDiv.innerHTML = '<svg fill="rgba(0, 49, 16, 1.0)" width="80px" height="80px" viewBox="-11 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>one</title><path d="M1.906 2.625h5.469v22.969h-2.281v-20.75h-3.188v-2.219z"></path></svg>';

// document.getElementById("seconds").innerText = "Updated text!";


// secondsDiv.innerText = 'test';

function updateBackgroundBasedOnTime() {
  const hour = new Date().getHours();
  const gradient = hourlyGradients[hour];
  document.body.style.background = gradient;
}

// Run once on load
updateBackgroundBasedOnTime();

// Optional: Update every minute in case the hour changes
setInterval(updateBackgroundBasedOnTime, 60 * 1000);





function dateTime(){
    // updateBackgroundBasedOnTime();
    var currentDateTime = new Date();

    let day = currentDateTime.getDay();

    dayDiv.innerText = 'آج ' + urduDays[day]  + 'کا دن ہے  ' ;

    // timeDiv.innerText = 'اس وقت ' + ghante + ' بج کر ' + minutes + ' منٹ ہوئے ہیں';
    // console.log(currentDateTime.getHours);

    timeDiv.innerText = 'اس وقت ' + urduNumberWords[currentDateTime.getHours()] + ' بج کر ' + urduNumberWords[currentDateTime.getMinutes()] + ' منٹ اور ' + urduNumberWords[currentDateTime.getSeconds()] + ' سیکنڈ ہوئے ہیں';



    numbersInUrduDiv.innerText = urduNumbers[currentDateTime.getHours()] + ':' +  urduNumbers[currentDateTime.getMinutes()] + '  :  ' +  urduNumbers[currentDateTime.getSeconds()];

}

    // dateTime();
    setInterval(dateTime,1000);




