const numbers =[1,2,3,4,5];

const numbers2=numbers.slice(2); // removes first 2 elements and then gives output
/* const numbers2=numbers.slice(-2) */// gives output of last 2 elements
/* console.log(numbers);
 */
console.log(numbers2);


// * Slice is used to get a new array from the original array
// * it divides the elements into new array based on inputs


//! to separate elements present in end, we give index value negative (_)



const participants =['florin','manvith','rocky','tarun'];
const winners = participants.slice(0,3);
console.log(winners);