
//Login & Signin Animation
$(".textbox input").on("focus", function () {
    $(this).addClass("focus");
});
$(".textbox input").on("blur", function () {
    if ($(this).val() == "")
        $(this).removeClass("focus");
});



//Redirecting to Signin Page
function signInForm() {
    /* $(location).attr("href", "singIn.html") */
    window.location.assign("signIn.html");
}


//Video
function fVideo() {
    $("#fashionvideo").dialog();
}