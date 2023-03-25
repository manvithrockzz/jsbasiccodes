const names =['manvith','tarunsai','koushikeya','r0dd','bhanu'];

for(name of names){ // here name of names means access each object of array
    console.log(`hello ${name}`); // prints every element, we can give any name insted of name
}




const friends =['naveen','praveen','vamsi','bharath','sai','swaroop'];
for (friend of friends){
    console.log(friend);
    if(friend === "vamsi"){
        console.log("heyyy vamsi how r uu");
        break; // terminates the loop as soon as condition satisfies
    }
}



let loading =101;
while (loading<100){
    console.log('website is still loading');

    loading ++;
}