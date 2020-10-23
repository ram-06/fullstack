// largest number

var num = [0, 1, 2, 3, 4, 6, 95];
//var largest = num[0];
var smallest = num[0];

/*
for (var i = 0; i < num.length; i++) {
    if (largest < num[i]) {
        largest = num[i];
    }
}
console.log(largest);
*/

// smallest number
for (var i = 0; i < num.length; i++) {
    if (smallest > num[i]) {
        smallest = num[i];
    }
}
console.log(smallest);