var readStudentRegistration = function() {

        var studentdetails = {
                "accountdetails":{},
                "address":{},
                "education":{},
                "aboutyou" : ""
                };

        studentdetails.accountdetails.accountid = document.querySelector("#account_id").value;
        studentdetails.accountdetails.password = document.querySelector("#password").value;
        studentdetails.accountdetails.mailid = document.querySelector("#mail_id").value;
        studentdetails.accountdetails.renterpassword = document.querySelector("#renter_password").value;
        studentdetails.accountdetails.gender = document.querySelector("input[id=gender]:checked").value;

        studentdetails.address.streetno = document.querySelector("#street_no").value;
        studentdetails.address.doorno = document.querySelector("#door_no").value;
        studentdetails.address.pincode = document.querySelector("#pincode").value;
        studentdetails.address.country = document.querySelector("#country").value;
        studentdetails.address.state = document.querySelector("#state").value;

        studentdetails.education.qualification = document.querySelector("#qualification").value;

        studentdetails.aboutyou = document.querySelector("#yourself").value;

        checkBox(studentdetails);
        displayStudentDetails(studentdetails);
        

}

function checkBox(studentdetails) {

        studentdetails.education.languages = [];
        var checkBoxElements = document.querySelectorAll("input[name=languages]");
        for (var i = 0 ; i < checkBoxElements.length; i++) {
                console.log(checkBoxElements[i].checked + ' ' + checkBoxElements[i].value);
                if (checkBoxElements[i].checked) {
                        studentdetails.education.languages.push(checkBoxElements[i].value);
                }
        }
        
}



var displayStudentDetails = function(studentdetails) {
    console.log(studentdetails.accountdetails);
    console.log(studentdetails.address);
    console.log(studentdetails.education.languages);
    console.log(studentdetails.education.qualification);
    console.log(studentdetails.aboutyou);
}


