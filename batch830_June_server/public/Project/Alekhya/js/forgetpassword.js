function forgetpassword () {
    email = {};
    email.emailid=document.querySelector("#emailid").value;

    if(!email.emailid){
       document.querySelector(".email_id").style.display = 'block';
   }
   else{
      document.querySelector(".email_id").style.display = 'none';
   }

   console.log(email);
}