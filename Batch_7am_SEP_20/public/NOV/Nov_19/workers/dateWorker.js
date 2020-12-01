var getLatestDate = function() {
    var date = new Date();
    date = date + '';
    date = date.replace(/GMT.*/, '');
    
    postMessage(date);
}

setInterval(function(){
    getLatestDate();
}, 1000);
