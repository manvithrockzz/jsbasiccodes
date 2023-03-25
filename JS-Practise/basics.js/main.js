const title=document.querySelector(".hello"); 
// we grab the element and store it inside the variable
// first create class for html element,
// then use js pre-built function and store entire into a varaible
// use that varibale as you need.

const changeclour = document.querySelector(".clickme");

// event lister is fucntion that execute depending on,
// what 


/* 
title.classList.add('change');
// title.classList.remove('change'); use remove keyword for deleteing.

changeclour.classList.add('button');





title.style.backgroundColor="red"; */

// alt+ shift+a for multiple line comments.




changeclour.addEventListener('click',function(){   // when we click then function executes


   title.classList.toggle('change');  //add inserts new element with specified value
// hide() and show the sleceted elements.

})

const userlist = document.querySelectorAll(".namelist");
/* console.log(userlist); */

for(user of userlist){
    user.addEventListener('click',function(){
        this.style.color="red";        //in object method, this refers to same object
    })

    
}
