/* JavaScript for Validating form */

function validateForm() {

    var x = document.forms["myForm"]["Name"].value;
    if (x == "") {
        alert("First Name must be filled out");
        return false;
    }

    var x = document.forms["myForm"]["Last_Name"].value;
    if (x == "") {
        alert("Last Name must be filled out");
        return false;
    }

    var x = document.forms["myForm"]["Email"].value;
    if (x == "") {
        alert("Email must be filled out");
        return false;
    }

    var x = document.forms["myForm"]["Enquiry"].value;
    if (x == "") {
        alert("You must have an enquiry");
        return false;
    }
}