const months = ["January", "February", "March", "April", "May", "June",
               "July", "August", "September", "October", "November", "December"];

let lowerBodyExercises = ["calf raises", "hip abduction", "hip adduction", 
                         "leg press", "leg extensions", "step ups"];

let weightNotation = ["kg", "body weight", "bar"];


let gymData = "20th June Step ups 3x12 5kg (need to check balance and form)";
let gymDataParts = gymData.split(" ");
let gymLog = gymData.slice(0, gymData.indexOf("(")).trim();
let notes = gymData.slice(gymData.indexOf("("));

const month = gymDataParts.filter(checkForMonth).toString();
const exerciseName = lowerBodyExercises.filter(findExerciseName).toString();

function checkForMonth(month) {
        return months.includes(month);
}

function findExerciseName(exercise) {
    return gymLog.toLowerCase().includes(exercise);
}

console.log(checkForDate(gymDataParts));

console.log(month);
console.log(exerciseName);

function checkForDate(data) {

    if(isNaN(parseInt(data[0])) || parseInt(data[0]) <= 0) {
        return "This isn't a number";
    }
    else if(parseInt(data[0]) >= 1 && parseInt(data[0]) <= 31) {
       return data[0];
    }
}