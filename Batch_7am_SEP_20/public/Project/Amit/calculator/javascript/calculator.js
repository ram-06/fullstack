function dis(val) {
    document.getElementById("result").value += val
}

function solve() {
    var a = document.getElementById('result').value
    var b = eval(a)
    document.getElementById('result').value = b
}

function clr() {
    document.getElementById('result').value = ''
}