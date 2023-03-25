const user={  // this is how we create objects
    name:'Edwin',
    age:24,
    married:false,
    purchases:['phone','car','laptop'],

    sayName:function(){
        console.log(this.age);
    }
};


user.sayName();


function sayName(){

    console.log(`my age is ${this}`);

}


sayName();