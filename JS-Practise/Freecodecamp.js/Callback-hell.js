let stocks = {
  fruits: ["apple", "banana", "orange", "grapes"],

  liquid: ["water", "ice"],

  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruit_name, call_production) => {
  // console.log('oder placed, please call production')
  setTimeout(() => {
    console.log(`${stocks.fruits[fruit_name]} was selected`);

    call_production();
  }, 2000);
};

let production = () => {
  // console.log('order received, starting production')
  setTimeout(() => {
    console.log("production has started");

    setTimeout(() => {
      console.log("the foood has been chopped");
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

        setTimeout(() => {
          console.log("the machine was started");

          setTimeout(() => {
            console.log(`icecream was placed on ${stocks.holder[0]} `);

            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was added as a toppings`);

              setTimeout(() => {
                console.log("serve icecream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 2000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order(0, production);
