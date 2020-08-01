function readLoginDetails() {
    var userData = {
        id: $("#uid").val(),
        password: $("#upwd").val()
    };
    var loginValidator = 'http://localhost:8081/application/loginValidation';

    var loginReq = $.ajax({
    	url: loginValidator,
    	method: 'POST',
    	data: userData,
    	dataType: 'JSON'
    });
    loginReq.done(function(res){
    	console.log(res);
    	if (res.msg == 'valid') {
            $("#errMsg").text("Valid");
            //window.open("sample.html");
            loadTemplate('pDetails');
            
    		
    	} else {
    		$("#errMsg").text(res.msg);
    	}
    });
   // loginReq.fail()...
}