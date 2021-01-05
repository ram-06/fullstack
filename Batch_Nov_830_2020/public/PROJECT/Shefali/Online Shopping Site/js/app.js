$(".textbox input").on("focus", function () {
    $(this).addClass("focus");
});
$(".textbox input").on("blur", function () {
    if ($(this).val() == "")
        $(this).removeClass("focus");
});
function signInForm(){
    /* $(location).attr("href", "register.html") */
    window.location.assign("register.html");
}