
var empDetails = {};
var EName, Age, Gend, Dept, BasicSal, Pf, Hra, TotSal,Tax, male, female
function generateDetails(){
    empDetails.name = document.querySelector("#empname").value;
    empDetails.age = document.querySelector("#empage").value;
    empDetails.gender = document.querySelector("input[name=gender]:checked").Value;
    empDetails.dept  = document.querySelector("#empdept").value;
    empDetails.empBasicSalary = document.querySelector("#empsalary").value;
    calTotSal();
    displayData();
}

   	function calTotSal(){
				Hra  = BasicSal*(24/100);
				Pf  = BasicSal*(12/100);
				TotSal= Pf+Hra+BasicSal;
				conditions();
			}
    
		function conditions(){
				if(Gend == "male"&& TotSal>100000){
				if(TotSal>= 100000)
					{
					console.log("tax is 15% of empBasicSalary");
					}
				else if(TotSal> 50000)
					{
 					
					console.log("tax is 10% of empBasicSalary");
					}
				else
				{
					console.log("tax is Zero");
				}

			}
			else
			{
				if( Gend == "female" && TotSal> 100000)
					{
				
					console.log("tax is 10% of empBasicSalary");
					}
				else if(TotSal> 50000)
					{
 				console.log("tax is 5% of empBasicSalary");
					}
				else
				{
					console.log("tax is Zero");
				
							}		
						}
					}	
/*var isDotEntered = false;
     function validaeData(event) {
         console.log(event);
            if (event.keyCode == 46 && isDotEntered == false) {
                isDotEntered = true;
                 return true;
             }

    if(event.keyCode>=0 && event.keyCode <=57){
        return false;
    }else{
        return true;
    }
}
    var isDotEntered = false;
            function validaeData1(event) {
                console.log(event);
                if (event.keyCode == 46 && isDotEntered == false) {
                    isDotEntered = true;
                    return true;
                }
                if (event.keyCode >=48 && event.keyCode <= 57) {
                    return true;
                } else {
                    return false;
                }
            }*/

var displayData = function() {  
    document.querySelector("#progressBlock").style.display = 'block';
    document.querySelector("#empname").innerHTML =  empDetails.name;
    document.querySelector("#empclass").innerHTML =  empDetails.class;
    document.querySelector("#empgender").innerHTML = empDetails.gender;
    document.querySelector("#empdept").innerHTML = empDetails.dept;
    document.querySelector("#empbasicsalary").innerHTML = empDetails.empbasicsalary;
    document.querySelector("#empTotalsalary").innerHTML = empDetails.empTotalsalary;
    document.querySelector("#empTax").innerHTML = empDetails.empTax;
    document.querySelector("#empGrade").innerHTML = empDetails.grade
}