function printDigits() {
    var number = document.getElementById("numberInput").value;
    var output = document.getElementById("output");
    output.textContent = ""; // Vymazat předchozí výstup
    for (var i = 0; i < number.length; i++) {
        output.textContent += number.substring(0, number.length-i) + "\n";
    }
}