//* Avaibale promise states & values
// ! pending(undefined)
// ! Fulfilled (resolved value)
// ! Rejected (reason for rejection)

// Avaianle promise method
//! Promise.all([promises])
//! Promise.allSettled([promises])
//! Promise.any([promises])
//! Promise.race([promises])


// promise is an object
// in promise we have to pass a call back functions

var p1=new Promise(function(resolve, reject){
    var res =false;
    if(res){
        resolve('its true');
    }
    else{
        reject('its false');
    }
}) 


console.log(p1);

p1.then(function(val){
    console.log(val);

})

.catch(function(val){
    console.log(val);
})