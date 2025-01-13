// Const keyword in Javascript was introduced in ES6. The Const variables are block scoped and only available inside the block where they are declared.
// Const can not be redeclared or reassigned in the same block.

const num = 100;
console.log("Old declared num value: ", num); // 100;
// const num = 200;
// console.log("New reassigned num value: ", num); // SyntaxError: Identifier 'num' has already been declared 

const myName = "Harry Potter ";
console.log("Old declared myName value: ", myName); // Harry Potter
{
    const myName = "Ron Weasley";
    console.log("New reassigned myName value: ", myName); // Ron Weasley
};

