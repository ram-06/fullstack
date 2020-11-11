 function containsNumeric (inputPwd) {
   		for (var i=0;i<inputPwd.length;i++)
   		{
   			if (!isNaN(inputPwd[i]))
   			{
   				return true;
   			}

   		}
   		document.querySelector("#validationMsg").innerText = "Password should contain a number" 		
      return false;
     }

     function startWithCapital (inputPwd) {
   		if (inputPwd.charCodeAt(0) >= 65 && inputPwd.charCodeAt(0) <= 90)
   		{
   			return true;
   		}
   	    document.querySelector("#validationMsg").innerText = "Password should start with Capital Letter"
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
         document.querySelector("#validationMsg").innerText = "Password should contain special symbol"
         return false;
      }

       function startWithCapital (inputPwd) {

   		if (inputPwd.charCodeAt(0) >= 65 && inputPwd.charCodeAt(0) <= 90)
   		{
   			return true;
   		}
		  document.querySelector("#validationMsg").innerText = "Password should start with Capital Letter"
         return false;
     }

   	 function validatePwd()
   	 {
           
       document.querySelector("#greyTick").style.display = 'block';
       document.querySelector("#greenTick").style.display = 'none';

   	   document.querySelector("#validationMsg").innerText = "";
       var passwordValue = document.querySelector("#userPwd").value;

       if (passwordValue.length >= 8)
       {
       	var checkNumeric = containsNumeric(passwordValue)
       	var checkCapitalLetter = startWithCapital(passwordValue)
       	var checkSpecialSymbol = containsSpecialSymbol(passwordValue)

        if (checkNumeric && checkCapitalLetter && checkSpecialSymbol) {

           document.querySelector("#greyTick").style.display = 'none';
           document.querySelector("#greenTick").style.display = 'block';
         }

       }
       else {
           document.querySelector("#validationMsg").innerText = "Password should be minimum 8 characters"
       }
   	 }

     function onLoad()
     {
       var imgTag1 = document.createElement("img")
       imgTag1.setAttribute('src','../images/greyTick.png') 
       imgTag1.setAttribute('id','greyTick')
       document.querySelector('.content').append(imgTag1)

       var imgTag2 = document.createElement("img")
       imgTag2.setAttribute('src','../images/greenTick.jpg')
       imgTag2.setAttribute('id','greenTick')
       document.querySelector('.content').append(imgTag2)

       document.querySelector("#greyTick").style.display = 'block';
       document.querySelector("#greenTick").style.display = 'none';
     }

     onLoad();