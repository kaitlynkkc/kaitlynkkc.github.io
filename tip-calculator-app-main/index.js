function validateForm() {
    let bill = document.forms["billForm"]["bill"].value;
    let people = document.forms["billForm"]["people"].value;

    if (people == "0") {
        document.getElementById("people").style.borderColor = "hsl(183, 100%, 15%)";
    }
}