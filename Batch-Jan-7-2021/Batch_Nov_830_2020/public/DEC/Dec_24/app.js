var count;

function doJob(type) {
    count++;
    var fval = parseInt(document.querySelector("#fval").value);
    var sval = parseInt(document.querySelector("#sval").value);
    var result;
    switch (type) {
        case 'add':
            
            result = doAddition(fval, sval);
            break;
        case 'mul':
            result = doMultiplication(fval, sval);
            break;
        case 'div':
            result = doDivision(fval, sval);
            break;
        case 'sub':
            result = doSubstraction(fval, sval);
            break;
    }

    var msg = "The " + type + ' is ' + result;
    document.querySelector("#rBlock").innerHTML = msg;
    console.log("No of times user used/cliked buttons " + count);
}