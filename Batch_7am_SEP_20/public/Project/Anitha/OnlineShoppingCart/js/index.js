 function containsNumeric (inputPwd) {
   		for (var i=0;i<inputPwd.length;i++)
   		{
   			if (!isNaN(inputPwd[i]))
   			{
   				return true;
   			}

   		}
   		document.querySelector("#validationMsg").innerText="Password should contain a number"
   		
        return false;
     }

     function startWithCapital (inputPwd) {
   		if (inputPwd.charCodeAt(0)>=65 && inputPwd.charCodeAt(0)<=90)
   		{
   			return true;
   		}
   	    document.querySelector("#validationMsg").innerText="Password should start with Capital Letter"
         return false;
     }

     function containsSpecialSymbol(inputPwd) {
	 
       var specialChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?";
        for (var i=0;i<inputPwd.length;i++)
        {
          for (var j=0;j<specialChars.length;j++)
          {
          	if (inputPwd[i] === specialChars[j])
          	{
          		return true;
          	}
          }
        }
         document.querySelector("#validationMsg").innerText="Password should contain special symbol"
        return false;
      }

       function startWithCapital (inputPwd) {

   		if (inputPwd.charCodeAt(0)>=65 && inputPwd.charCodeAt(0)<=90)
   		{
   			return true;
   		}
		  document.querySelector("#validationMsg").innerText="Password should start with Capital Letter"
         return false;
     }

   	 function validatePwd()
   	 {
   	   document.querySelector("#validationMsg").innerText = ""
       var passwordValue = document.querySelector("#userPwd").value;
       if (passwordValue.length >= 8)
       {
       	var checkNumeric = containsNumeric(passwordValue)
       	var checkCapitalLetter = startWithCapital(passwordValue)
       	var checkSpecialSymbol = containsSpecialSymbol(passwordValue)
       }
       else {
           document.querySelector("#validationMsg").innerText = "Password should be minimum 8 characters"
       }
   	 }