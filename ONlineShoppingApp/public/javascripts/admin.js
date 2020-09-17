var pdata = {};

function addNewProduct() {
    pdata.name = $("#pname").val();
    pdata.price = $("#pprice").val();
    pdata.manu = $("#pmanu").val();
    pdata.discount = $("#pdiscount").val();
    
    $.ajax({
        url: 'http://localhost:8081/add/product',
        method: 'GET',
        dataType: 'JSON',
        data: pdata,
        success: (res) => {
            console.log("success");
            console.log(res);
        },
        error: () => {
            console.log(error)
        }
    })
}

var uploadImage = () => {
    
    var uploadfile = $("input[name=prodImage]")[0].files[0];
    
    console.log(uploadfile)
    if (uploadfile.size > 1000) {

    }
    if (uploadfile.type == 'image/png') {
        return;
    }

    var formData = new FormData();    
    formData.append("prodImage", uploadfile);  
    

    var uploadImageWebService = '/upload/productimage'
    $.ajax({ 
        url: uploadImageWebService, 
        data: formData, 
        processData: false, 
        contentType: false, 
        type: 'POST', 
        dataType: 'JSON',
        success: function(data){ 
            
            console.log("response");
            console.log(data);
            pdata.image = data.imageUrl

        }
    });
}