//! lets find the problem if we write code synchronously
//* in this example we find the disadvantage of synhronous
//* how data is not being fetched. to avoid this we use call backs asynchronously



console.log('start');

function loginuser(email,password){  // loginuser takes email & password
    setTimeout(()=>{ //! setting timeout it gonna take sometime to comeback
        console.log('now we have the data'); 
        return{ userEmail:email}
    },5000); //* target==> when user logins we getback email as output
}

const user =loginuser('kottamanvith@gamil.com',123456);

console.log(user); // code doesnot work the information of loginuser didnot came down here to user


console.log('finish');

