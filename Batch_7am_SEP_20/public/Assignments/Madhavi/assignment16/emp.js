class Generator{
	    constructor(){
		   this.empname=document.querySelector("#empname").value;
		   this.empage=document.querySelector("#empage").value;
		   this.empgen=document.querySelector("#empgen").value;
		   this.empdptr=document.querySelector("#empdptr").value;
		   this.empi=document.querySelector("#empi").value;
		   this.empdate=document.querySelector("#empdate").value;
		   this.empmnt=document.querySelector("#empmnt").value;
		   this.empyr=document.querySelector("#empyr").value;
		   this.empbassal=parseInt(document.querySelector("#empbassal").value);
	    }
   
     readData(){
       this.empPF = parseInt((12/100)*this.empbassal);
       this.empHRA = parseInt((24/100)*this.empbassal);
       this.empTotalSal = this.empPF + this.empHRA + this.empbassal;
       this.reportTags();
     
    }    
     reportTags(){
       this.ulTag=document.createElement("ul");
       this.liTag1=document.createElement("li");
       this.spanTag=document.createElement('span'); 
       this.spanTag.innerHTML='<b> Enter Employee Name :</b>'+this.empname;
       this.liTag1.append(this.spanTag);
       this.ulTag.append(this.liTag1);

       this.liTag2=document.createElement("li");
       this.spanTag=document.createElement('span') ;
       this.spanTag.innerHTML='<b> Enter Employee Age :</b>'+this.empage;
       this.liTag2.append(this.spanTag);
       this.ulTag.append(this.liTag2);

       this.liTag3=document.createElement("li");
       this.spanTag=document.createElement('span') ;
       this.spanTag.innerHTML='<b> Enter Employee Gender :</b>'+this.empgen;
       this.liTag3.append(this.spanTag);
       this.ulTag.append(this.liTag3);

       this.liTag4=document.createElement("li");
       this.spanTag=document.createElement('span'); 
       this.spanTag.innerHTML='<b> Enter Employee Department :</b>'+this.empdptr;
       this.liTag4.append(this.spanTag);
       this.ulTag.append(this.liTag4);

       this.liTag5=document.createElement("li");
       this.spanTag=document.createElement('span'); 
       this.spanTag.innerHTML='<b> Enter Employee Id :</b>'+this.empi;
       this.liTag5.append(this.spanTag);
       this.ulTag.append(this.liTag5);

       this.liTag6=document.createElement("li");
       this.spanTag=document.createElement('span');
       this.spanTag.innerHTML='<b> Enter Employee BasicSal :</b>'+this.empbassal;
       this.liTag6.append(this.spanTag);
       this.ulTag.append(this.liTag6);

       this.liTag7=document.createElement("li");
       this.spanTag=document.createElement('span');
       this.spanTag.innerHTML='<b> empPF :</b>'+this.empPF;
       this.liTag7.append(this.spanTag);
       this.ulTag.append(this.liTag7);

       this.liTag8=document.createElement("li");
       this.spanTag=document.createElement('span');
       this.spanTag.innerHTML='<b> empHRA :</b>'+this.empHRA;
       this.liTag8.append(this.spanTag);
       this.ulTag.append(this.liTag8);

       this.liTag9=document.createElement("li");
       this.spanTag=document.createElement('span');
       this.spanTag.innerHTML='<b> empTotalSal :</b>'+this.empTotalSal;
       this.liTag9.append(this.spanTag);
       this.ulTag.append(this.liTag9);

       document.querySelector(".GenPayslip").append(this.ulTag);
    }
}

   function paySlipgen(){
       document.querySelector("#paySlip").style.display='none';
       document.querySelector(".GenPayslip").style.display='block';
       var gen=new Generator();
       gen.readData();
    }