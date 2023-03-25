console.log('start');

function loginuser(email,password,callback){  // loginuser takes email & password
    setTimeout(()=>{ //! setting timeout it gonna take sometime to comeback
        console.log('now we have the data'); 
        callback({ userEmail:email});
    },5000); //* target==> when user logins we getback email as output
}


function getuservideos(email,callback){
    setTimeout(() => {
        callback(['vedio1','vedio2','vedio3']);
        
    },1000);
}

const user =loginuser('kottamanvith@gamil.com',123456,user =>{
    console.log(user); 
    getuservideos(user.userEmail,videos =>{
        console.log(videos);
    })
});

 // code doesnot work the information of loginuser didnot came down here to user


console.log('finish');
