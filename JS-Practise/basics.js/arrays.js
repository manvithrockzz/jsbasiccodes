// arrays are variables taht we can store multiple variable inside them

const schedule =['wake up','eat','filim a vedio','watch things on netflix'];

 

console.log(schedule[3]);


// to access each individual value in array 
// is by using index



//how to add more things
schedule.push("hey please add me too"); // push keyoword to add elements in array
console.log(schedule);

schedule.pop(); // deletes the last elements in array
console.log(schedule);


schedule.unshift("hey iam first always"); // adds element to first position in array
console.log(schedule);


// shift keyoword oksari chudali


const film=schedule.indexOf("filim a vedio"); // indexof key word helps to
console.log(film); // find the index of given parameter

console.log(schedule[film]); // prints the value of film


const array=[1,2,3,4,5,6,7,8,9];
console.log(array[4]);