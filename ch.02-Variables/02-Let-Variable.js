// Let keyword in Javascript. The Let variables are block scoped and only available inside the block where they are declared.
// Moreover the Let variables can be redeclared or reassigned in the same block.

let num =100;
console.log("Old declared num value: ", num); // 100
{
    let num = 200;
    console.log("New reassigned num value: ",num); // 200
};

let myName = "Harry Potter ";
console.log("Old declared myName value: ", myName);
{
    let myName = "Ron Weasley";
    console.log("New reassigned myName value: ", myName);
}