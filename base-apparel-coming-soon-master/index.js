function validateForm() {
    // RFC 5322-compliant Regular Expression
    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    let x = document.forms["emailForm"]["email"].value;
    if (x == "" || !(regex.test(x))) {
        document.getElementById("email").style.borderColor = "hsl(0, 93%, 68%)";
        document.getElementById("invalid").hidden = false;
        document.getElementById("error").hidden = false;
        // console.log("empty");
        // console.log(x);
        return false;
    } else {
        // console.log(email);
        // console.log("valid");
        return true;
    }
}