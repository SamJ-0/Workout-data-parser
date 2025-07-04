const months = ["January", "February", "March", "April", "May", "June",
               "July", "August", "September", "October", "November", "December"];

let lowerBodyExercises = ["calf raises", "hip abduction", "hip adduction", 
                         "leg press", "leg extensions", "step ups"]


let gymLogData = "2nd June Step ups 3x12 5kg (need to check balance and form)";

let gymLogEntries = gymLogData.slice(0, gymLogData.indexOf("("));
let gymNoteEntries = gymLogData.slice(gymLogData.indexOf("("));

let date = gymLogData.slice(0, gymLogData.indexOf(" "));

let gymLogParts = gymLogEntries.trim().split(" ");

console.log(date);
console.log(gymLogEntries);

let exercise = "";

// console.log(gymNoteEntries);
// console.log(gymLogDataArr);

