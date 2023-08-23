function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value;
    try {
        var q = eval(p);
        if (isFinite(q)) {
            document.getElementById("result").value = q;
        } else {
            document.getElementById("result").value = "Error";
        }
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}