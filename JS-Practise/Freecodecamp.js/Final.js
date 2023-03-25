
let stocks = {
    fruits: ["apple", "banana", "orange", "grapes"],
  
    liquid: ["water", "ice"],
  
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
  };
  
  let is_shop_open = true;


  function time(ms){
    return new Promise ((resolve, reject)=>{
    
        if(is_shop_open){
            setTimeout(resolve,ms)

            }
            else{
                reject(console.log('shop closed'))
            }
        });
    }
    
    async function kitchen(){
        try{

            await time(2000)
            console.log(`${stocks.fruits[0]}`)


        }
        catch(error){
            console.log('costomer left',error)
        }
        finally{
            console.log('day ended, shop is closed');
        }

    }


    kitchen();