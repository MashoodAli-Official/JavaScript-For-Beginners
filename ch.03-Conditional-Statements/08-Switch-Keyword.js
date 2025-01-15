// Switch keyword, we use when we have to check multiple conditions in the code block.
var studentMarks = 100; //Change this value to check the output

switch(studentMarks){
    case 100:
        console.log("You got A+");
        break;
    case 90:
        console.log("You got A");
        break;
    case 80:
        console.log("You got B");
        break;
    case 70:
        console.log("You got C");
        break;
    case 60:
        console.log("you got D");
        break;
    default: 
        console.log("You are failed");
        break;
}