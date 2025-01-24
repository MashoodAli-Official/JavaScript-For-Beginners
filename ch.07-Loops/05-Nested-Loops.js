// Nested loops in JavaScript is a loop that is nested inside another loop.

// In this example we have two arrays, johnFollowers and janeFollowers, and we want to find out how many mutual followers they have.

let johnFollowers = ['Johny', 'Jane', 'Tom', 'Jill'];
let janeFollowers = ['Jane', 'Tom', 'Jill', 'Robert'];
let mutualFollowers = [];
for (let a = 0; a < johnFollowers.length; a++){
    for(let b = 0; b < janeFollowers.length; b++){
        if(johnFollowers[a] === janeFollowers[b]){
            mutualFollowers.push(johnFollowers[a]);
            console.log(mutualFollowers);
        };
    };
};
console.log("Mutual followers: ", mutualFollowers);
console.log("Number of mutual followers: ", mutualFollowers.length);

