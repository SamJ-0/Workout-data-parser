const months = ["January", "February", "March", "April", "May", "June",
               "July", "August", "September", "October", "November", "December"];

let lowerBodyExercises = ["calf raises", "hip abduction", "hip adduction", 
                         "leg press", "leg extensions", "step ups"]


let gymData = "2nd June Step ups 3x12 5kg (need to check balance and form)";
let gymDataParts = gymData.split(" ");

let gymLog = gymData.slice(0, gymData.indexOf("(")).trim();
let notes = gymData.slice(gymData.indexOf("("));
let date = gymData.slice(0, gymData.indexOf(" "));

console.log(date);
console.log(gymLog);
console.log(notes);

function checkMonth(month) {
        return months.includes(month);
}

function checkExercise(exercise) {
    return gymLog.toLowerCase().includes(exercise);
}

let month = gymDataParts.filter(checkMonth);
console.log(month);

const exercise = lowerBodyExercises.filter(checkExercise);
console.log(exercise);