/* 
  let order =()=>{
    return new Promise((resolve, reject)=>{
        if(true){
           resolve()
        }
        else{
            reject();
        }
    })
  }
*/

async function order(){

    try{
        await abc;
    }
    catch(error){
        console.log('abc doensot exists',error);
    }
    finally{
        console.log('runs code anyways');
    }
  }

order() .then(()=>{
    console.log('aww, we are learning async and await')
})
