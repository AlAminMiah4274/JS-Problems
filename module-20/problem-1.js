// function minuteToHour(minute) {
//     let num = minute;
//     let hour = num / 60;
//     let hours = Math.floor(hour);
//     let minutes = (hour - hours) * 60;
//     let rminutes = Math.round(minutes);
//     console.log(hours, rminutes);
//     // return num + hours + rminutes;
// }

// // let result = minuteToHour(150);
// // console.log(result);

// // console.log(minuteToHour(150));

// minuteToHour(150);


// ****** Way ****** //

function hourToMinutes(hour) {
    const minute = hour * 60;
    // console.log(minute);
    return minute;
}

let result1 = hourToMinutes(15);
// console.log('Minute:', result1);

function minuteToHour(minute) {
    const hour = minute / 60;
    // console.log(hour);
    return hour;
}

let result = minuteToHour(1440);
// console.log('Hour:', result);


// ********** //


function convertMinuteToHour(minute) {
    if (minute <= 60) {
        console.log(minute);
    }
    else {
        let r = Math.floor(minute / 60);
        let t = minute % 60;
        console.log(r + ":" + t);
    }
}

(convertMinuteToHour(1135));