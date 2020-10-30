

	function generateReport() {

  	var enteredValues={
		empName:document.querySelector("#empName").value,
		empCode:document.querySelector("#empCode").value,
		month:document.querySelector("#month").value,
		year:document.querySelector("#year").value,
		basicSalary:parseInt(document.querySelector("#basicSalary").value)
		
	 }

        enteredValues.pf=parseInt((12/100)*enteredValues.basicSalary);
		enteredValues.hra=parseInt((24/100)*enteredValues.basicSalary);
		enteredValues.totalSalary=enteredValues.basicSalary+enteredValues.pf+enteredValues.hra;

		var h3Tag=document.createElement('h3');
		h3Tag.innerText='Payslip for the month of '+enteredValues.month+' '+enteredValues.year;
		document.querySelector('.payslipGenerate').append(h3Tag);

		var ulTag=document.createElement('ul');
		var liTag1=document.createElement('li');
        var spanTag=document.createElement('span') 
        spanTag.innerHTML='<b>Employee Name :</b>'+enteredValues.empName;
        liTag1.append(spanTag)
        ulTag.append(liTag1) 


        var liTag2=document.createElement("li");
        var spanTag=document.createElement("span") 
        spanTag.innerHTML='<b>Employee Code :</b>'+enteredValues.empCode;
        liTag2.append(spanTag)
        ulTag.append(liTag2);

        var liTag3=document.createElement("li");
        var spanTag=document.createElement("span") 
        spanTag.innerHTML='<b>Basic Salary :</b>'+enteredValues.basicSalary;
        liTag3.append(spanTag)
        ulTag.append(liTag3);

        var liTag4=document.createElement("li");
        var spanTag=document.createElement("span") 
        spanTag.innerHTML='<b>PF :</b>'+enteredValues.pf;
        liTag4.append(spanTag)
        ulTag.append(liTag4);

        var liTag5=document.createElement("li");
        var spanTag=document.createElement("span") 
        spanTag.innerHTML='<b>HRA :</b>'+enteredValues.hra;
        liTag5.append(spanTag)
        ulTag.append(liTag5);

        var liTag6=document.createElement("li");
        var spanTag=document.createElement("span") 
        spanTag.innerHTML='<b>Total Salary :</b>'+enteredValues.totalSalary;
        liTag6.append(spanTag)
        ulTag.append(liTag6);
      
       	document.querySelector(".payslipGenerate").append(ulTag);

	}

	function payslipReport(){
		document.querySelector(".generatePayslip").style.display='none';
        document.querySelector(".payslipGenerate").style.display='block';
        setTimeout(function(){
		generateReport();
	    },100);
	}
