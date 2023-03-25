/* let myName ='Manvith'
function printName(){
    console.log(myName);
}

// * we cannot access varaibles outside a function
// * we can access variable in js both outside and inside a function
myName='Jaswanth'
printName();

myName='Bhanu'
printName(); */


//! fucntions can access values outside of their own scope
//! fucntions only depends on its own aurgments and internal data, 
//! then its not a closure

//! if function references data outside of its own scope
//! like global environment or outer fucntion --> then its a closure


/* let a=10;
function my_function(){
    let b=20;
    var c=a+b;
    return c;
}

my_function(); */


let myName ='kyle'

function printName(){
    console.log(myName)
}

  myName='manvith' // its not just takind the name i.e defined when the function is defined,
printName(); //* its actually takind current live value of that name
 myName ='venkatsai'
 printName();


 //! another example

 function outerfunction(outervariable){
    return function innerfunction(innervariable){
        console.log(outervariable)
        console.log(innervariable)
    }
 }

 const newfunction =outerfunction('outside')
 newfunction('inside')


 