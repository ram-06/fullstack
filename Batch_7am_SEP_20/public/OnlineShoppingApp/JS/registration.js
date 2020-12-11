var registerUserDetails = function() {
    var data = {};
    data.accountId = $('#uid').val();
    data.password = $('#upwd').val();
    data.mailId = $('#umailid').val();
    console.log(data);

    var reqObj = $.ajax({
        url: 'http://localhost:8081/details/usergeistation',
        method: 'GET',
        data: data,
        dataType: 'JSON'
    });
    reqObj.done(function(res){
        console.log(res);
        if (res.msg == 'Registered') {
            $(".sucMsg").innerHTML = "Successfly user got registered";
        } else {

        }
    });

    reqObj.fail(function(err){
        console.log(err);
    });
}

function showLoginPage() {
    loadPage('login');
}