// displaying to check prime number or not

var number = parseInt(prompt("Enter a Number: ")); // parseInt = converts to Number data type
Prime = true;


if (number === 1) {
    console.log("1 is neither prime nor composite number.");
} else if (number > 1) {

    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            Prime = false;

        }
    }
    if (Prime) {
        console.log('Is a prime number ' + number);
    } else {
        console.log('Is a not prime number ' + number);
    }
}