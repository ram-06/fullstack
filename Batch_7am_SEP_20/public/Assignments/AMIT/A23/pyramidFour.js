// displayimg the four pyramid 


var n = 5;
var temp = temp1 = n;
var s;
var q;
for (i = 1; i <= n; i++) {
    s = ' ';
    for (j = 1; j <= n; j++) {
        if (temp >= j) {
            s = s + j + ' ';
        } else {
            s = s + '  ';
        }
    }

    for (k = n; k >= 1; k--) {
        if (temp >= k) {
            s = s + k + ' ';
        } else {
            s = s + '  ';
        }
    }
    console.log(s);
    temp = n - i;
}

for (p = 1; p <= n; p++) {
    q = ' '
    for (r = 1; r <= n; r++) {
        if (r <= p)
            q = q + r + ' ';
        else
            q = q + '  ';
    }

    for (x = 1; x <= n; x++) {
        if (temp1 <= x) {
            q = q + (n - x + 1) + ' ';
        } else {
            q = q + '  ';
        }
    }
    temp1 = n - p;
    console.log(q);
}