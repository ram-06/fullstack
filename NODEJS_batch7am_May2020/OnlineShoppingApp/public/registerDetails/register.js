var imageUrl;

var MAX_IMAGE_SIZE = 20000; 
function saveDetails() {
	var data = {};
	data.name = $("#uname").val();
	data.age = $("#uAge").val();
	data.profilePic = imageUrl;
	
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
    console.log(uploadfile.size)
    if (uploadfile.size > MAX_IMAGE_SIZE) {
    	alert("file size should be only under 2MB");
    	return;
    }

    var uploadImageWebService = '/uploadProfilePicture'
    $.ajax({ 
        url: uploadImageWebService, 
        data: formData, 
        processData: false, 
        contentType: false, 
        type: 'POST', 
        dataType: 'JSON',
        success: function(data){ 
            console.log(data);
            imageUrl = data.imageUrl;

        }, error: function(err){
            console.log("err");
            console.log(err);
        }
    });    
}

setInterval(() => {
	console.log(Date.now());
}, 1000);