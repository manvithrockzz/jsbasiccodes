function sumFunc(a,b){
    return a+b
}

const sumConst =(a,b) =>a+b

console.log(sumFunc(1,2))
console.log(`sumConst(3,4) => ${sumConst(3,4)}`)

// hoisting alllows you to use functions and variables before therywere declared
//* variables defined with let and const are hoisted to top of block, but not intialized



/* console.log(`sumFun(1,2) function(){
    sumFunc(1,2)}`)
 */

    //* to note that declarations are hoisted not assignments
    