// to display Reverse Number

function reverse_number(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverse_number(1230414102)); //calling the function