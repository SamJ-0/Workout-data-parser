const months = ["January", "February", "March", "April", "May", "June",
               "July", "August", "September", "October", "November", "December"];

let lowerBodyExercises = ["calf raises", "hip abduction", "hip adduction", 
                         "leg press", "leg extensions", "step ups"];

let weightNotation = ["kg", "body weight", "bar"];


let gymData = "2nd June Step ups 3x12 5kg (need to check balance and form)";
let gymDataParts = gymData.split(" ");
let gymLog = gymData.slice(0, gymData.indexOf("(")).trim();
let notes = gymData.slice(gymData.indexOf("("));

const numbers = gymDataParts.filter(checkForNumber);

const date = numbers.filter(checkForDate);
const weight = numbers.filter(findWeight);
const sets = numbers.filter(findSets);
const month = gymDataParts.filter(checkForMonth);
const exerciseName = lowerBodyExercises.filter(findExerciseName);

function checkForMonth(month) {
        return months.includes(month);
}

function findExerciseName(exercise) {
    return gymLog.toLowerCase().includes(exercise);
}

function checkForNumber(data) {
    let number = parseInt(data);

    if(number >= 1 && number <= 31) {
        return data.includes(number);
    }
}

function checkForDate(data) {
    let ordinal;

    if(data.includes("st")) {
        ordinal = "st";
    }
    else if(data.includes("nd")) {
        ordinal = "nd";
    }
    else if(data.includes("rd")) {
        ordinal = "rd";
    }
    else {
        ordinal = "th";
    }

    return data.includes(ordinal);
}

function findWeight(weight) {
    if(weight.includes("kg")) {
        return weight.includes("kg");
    }
}

function findSets(sets) {
    if(sets.includes("x")) {
       return sets.includes("x");
    }
}

console.log(date.toString());
console.log(month.toString());
console.log(exerciseName.toString());
console.log(sets.toString());
console.log(weight.toString());