var readUserDetails = function () {
    var data = {};
    data.name = document.querySelector("#uid").value;
    data.password = document.querySelector("#upass").value;
    console.log(data);
    

    var request = $.ajax({
        url: "http://localhost:8080/data/user/login",
        method: "get",
        data: "JSON"
    });

    request.done(function (response) {
        console.log("Success");
        console.log(response);
    });
    request.fail(function (err) {
        console.log("error");
    });
};