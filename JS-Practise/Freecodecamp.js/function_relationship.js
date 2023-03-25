//! how to establish relationship btw two functions
let order = (call_production)=>{
    console.log('oder placed, please call production')
    call_production()
  };
  
  
  let production =()=>{
    console.log('order received, starting production')
  };
  
  order(production);