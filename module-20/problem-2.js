function findLeapYear(years) {
    let leapYears = [];
    for (let i = 0; i < years.length; i++) {
        let index = i;
        let element = years[index];
        console.log(index, element);
        if ((element % 4 === 0) && (element % 100 !== 0) || (element % 400 === 0)) {
            leapYears.push(element);
        }
    }
    return leapYears;
}

let numberOfYears = [2023, 2024, 2025, 2028, 2030];
let leapYears = findLeapYear(numberOfYears);
console.log(leapYears);

// findLeapYear(numberOfYears);