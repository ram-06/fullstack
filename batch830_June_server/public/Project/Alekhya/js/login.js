function login(){
    var usercredentails = {};

    usercredentails.username = document.querySelector("#username").value;

    if(!usercredentails.username){
        document.querySelector(".user_name").style.display = 'block';
    }
    else{
       document.querySelector(".user_name").style.display = 'none';
    }

    usercredentails.password = document.querySelector("#password").value;
    if(!usercredentails.password){
        document.querySelector(".pwd").style.display = 'block';
    }
    else{
       document.querySelector(".pwd").style.display = 'none';
    }
    
    console.log(usercredentails);
}