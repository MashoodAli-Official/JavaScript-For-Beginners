// Simple Student Grade Checker
// This program will checks the Marks of a student and display the Grade of the student.
// Total marks are 100 and the passing marks are 40.
// If the student gets less than 40 marks then the student will be failed.

let obtainedMarks = 11; // 👈 Please change the number over here to check the grade of the student.
let totalMarks = 100;
let passingPercentage = 40;
let percentage = (obtainedMarks / totalMarks) * 100;
console.log("Percentage: " + percentage + "%");

switch (true){
    case percentage >= 90:
         console.log("Grade: A+");
         break;
    case percentage >= 80:
        console.log("Grade: A");
        break;
    case percentage >= 70:
        console.log("Grade: B");
        break;
    case percentage >= 60:
        console.log('Grade: C');
        break;
    case percentage >= 50:
        console.log('Grade: D');
        break;
    case percentage >= passingPercentage:
        console.log('Grade: E');
        break;
    default:
        console.log('Grade: F');
};