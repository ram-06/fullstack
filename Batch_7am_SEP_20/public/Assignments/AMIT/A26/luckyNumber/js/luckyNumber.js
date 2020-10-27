// display lucky number

var n = prompt("Enter a number")
var num, sum = 0;
while (n > 0) {
    num = n % 10;
    n = n / 10;
    sum = sum + num;
    sum = parseInt(sum);
}
console.log("Lucky Number is " + sum);