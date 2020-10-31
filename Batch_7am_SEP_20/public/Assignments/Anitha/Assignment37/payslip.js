
    class generateReport
    {
       constructor(){
        this.empName=document.querySelector("#empName").value;
        this.empCode=document.querySelector("#empCode").value;
        this.month=document.querySelector("#month").value;
        this.year=document.querySelector("#year").value;
        this.basicSalary=parseInt(document.querySelector("#basicSalary").value);
       }
       
       reportDetails(){
        this.pf=parseInt((12/100)*this.basicSalary);
        this.hra=parseInt((24/100)*this.basicSalary);
        this.totalSalary=this.basicSalary+this.pf+this.hra;

        this.h3Tag=document.createElement('h3');
        this.h3Tag.innerText='Payslip for the month of '+this.month+' '+this.year;
        document.querySelector('.payslipGenerate').append(this.h3Tag);

        this.ulTag=document.createElement('ul');
        this.liTag1=document.createElement('li');
        this.spanTag=document.createElement('span') 
        this.spanTag.innerHTML='<b>Employee Name :</b>'+this.empName;
        this.liTag1.append(this.spanTag)
        this.ulTag.append(this.liTag1) 


        this.liTag2=document.createElement("li");
        this.spanTag=document.createElement("span") 
        this.spanTag.innerHTML='<b>Employee Code :</b>'+this.empCode;
        this.liTag2.append(this.spanTag)
        this.ulTag.append(this.liTag2);

        this.liTag3=document.createElement("li");
        this.spanTag=document.createElement("span") 
        this.spanTag.innerHTML='<b>Basic Salary :</b>'+this.basicSalary;
        this.liTag3.append(this.spanTag)
        this.ulTag.append(this.liTag3);

        this.liTag4=document.createElement("li");
        this.spanTag=document.createElement("span") 
        this.spanTag.innerHTML='<b>PF :</b>'+this.pf;
        this.liTag4.append(this.spanTag)
        this.ulTag.append(this.liTag4);

        this.liTag5=document.createElement("li");
        this.spanTag=document.createElement("span") 
        this.spanTag.innerHTML='<b>HRA :</b>'+this.hra;
        this.liTag5.append(this.spanTag)
        this.ulTag.append(this.liTag5);

        this.liTag6=document.createElement("li");
        this.spanTag=document.createElement("span") 
        this.spanTag.innerHTML='<b>Total Salary :</b>'+this.totalSalary;
        this.liTag6.append(this.spanTag)
        this.ulTag.append(this.liTag6);
      
        document.querySelector(".payslipGenerate").append(this.ulTag);
       }

    }


	function payslipReport(){
		document.querySelector(".generatePayslip").style.display='none';
        document.querySelector(".payslipGenerate").style.display='block';
        setTimeout(function(){
        var report=new generateReport();
		report.reportDetails();
	    },100);
	}
