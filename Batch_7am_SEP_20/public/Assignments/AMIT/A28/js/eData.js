// calculating the employee data 

function data() {
    var HRA, PF, basicSalary, totalSalary, name, id, desg;
    name = document.edata.firstname.value;
    id = document.edata.userid.value;
    desg = document.edata.designation.value;
    basicSalary = parseInt(document.edata.basicSalary.value);
    totalSalary = parseInt(document.edata.totalSalary.value);

    PF = basicSalary / 12;
    HRA = basicSalary / 24;
    totalSalary = PF + HRA + basicSalary;


    document.edata.PF.value = HRA;
    document.edata.HRA.value = PF;
    document.edata.totalSalary.value = totalSalary;
}