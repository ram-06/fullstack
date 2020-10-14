// displaying the Number Pattern

//hard logic condition 

/*
for (var i = 1; i <= 6; i++) {
    if (i === 1) { console.log('1 2 3 4  5 6'); }

    if (i === 2) { console.log('1 2 3 4 5'); }

    if (i === 3) { console.log('1 2 3 4'); }

    if (i === 4) { console.log('1 2 3'); }

    if (i === 5) { console.log('1 2'); }

    if (i === 6) { console.log('1'); }

 }
    */

// Dynamic logic 

var i;
var num = "";
for (i = 1; i <= 6; i++) { // outer lop
    {
        num = num + i;
        console.log(num);
    }

}