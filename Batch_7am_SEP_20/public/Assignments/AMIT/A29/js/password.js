function pass() {
    var password = document.password.value;

    if (password == null || password == " ") {
        alert("password can't be blank");
        return false;
    } else if (password.length < 8) {
        alert("Password mini 8 characters long.");
        return false;
    }
}