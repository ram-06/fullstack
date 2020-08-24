function saveDetails() {
	var data = {};
	data.name = $("#uname").val();
	data.age = $("#uAge").val();
	data.profilePic = $("#uprofilePic").val();
	
	$.ajax({
		url: 'http://localhost:8081/uploadData',
		data: data,
		method: 'GET',
		dataType: 'JSON',
		success: function(res) {
			console.log("success");
			console.log(res);
		},
		error: function(err) {
			console.log("err");
		}
	});
}

function uploadImage() {
	var uploadfile = $("input[name=prodImage]")[0].files[0];
	console.log(uploadfile)
    var formData = new FormData();    
    formData.append("prodImage", uploadfile);
    console.log(formData);

    var uploadImageWebService = '/uploadUserPic'
    $.ajax({ 
        url: uploadImageWebService, 
        data: formData, 
        processData: false, 
        contentType: false, 
        type: 'POST', 
        dataType: 'JSON',
        success: function(data){ 
            console.log(data);
            $("#imgurl").val(data.imageUrl);

        }, error: function(err){
            console.log("err");
            console.log(err);
        }
    });    
}