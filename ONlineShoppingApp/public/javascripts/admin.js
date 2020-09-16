function addNewProduct() {
    var data = {
        name: $("#pname").val(),
        price: $("#pprice").val(),
        manu: $("#pmanu").val(),
        image: $("#pimage").val(),
        discount: $("#pdiscount").val()
    };
    $.ajax({
        url: 'http://localhost:8081/add/product',
        method: 'GET',
        dataType: 'JSON',
        data: data,
        success: (res) => {
            console.log("success");
            console.log(res);
        },
        error: () => {
            console.log(error)
        }
    })
    console.log(data)
}