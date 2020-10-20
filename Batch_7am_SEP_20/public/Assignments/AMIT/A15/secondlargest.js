// displaying secondLargest

var array = [2, 30, 60, 55, 66, 99, 21, 36];

var highest = Number.MIN_VALUE;
var secondHighest = Number.MIN_VALUE;


for (var i = 0; i < array.length; i++) {
    if (array[i] > highest) {
        secondHighest = highest;
        highest = array[i];
    } else if (array[i] > secondHighest) {
        secondHighest = array[i];
    }
}
console.log(secondHighest);