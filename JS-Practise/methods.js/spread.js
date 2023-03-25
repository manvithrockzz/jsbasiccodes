// * allows an iterables and expands into individual elemetns
// * iterables such as string , or an array.

// allows us to quickly copt all 
// part of any existing array into another array


function sum(a,b,c){
    return a+b+c;
}

let numbers=[1,2,88];
console.log(sum(...numbers));



let integers =[1,2,3,4,5,6,7,8,9,10];
console.log(Math.max(...integers));