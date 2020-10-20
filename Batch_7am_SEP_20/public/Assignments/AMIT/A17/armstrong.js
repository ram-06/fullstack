// to display armstrong number.

var a, x, y = 0;
var b = prompt("Enter a number");
x = b;

while (x > 0) {
    a = x % 10;
    x = parseInt(x / 10);
    y = y + (a * a * a);
}

if (b == y)
    alert("given number is an armstrong number");
else
    alert("given number is not an armstrong number");