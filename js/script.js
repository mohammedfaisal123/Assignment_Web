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

/* JavaScript for message show */

    var player = new Array(3); 
    player[0] = "";   
    player[1] = "Name: Lionel Messi \nAge: 29 \nTeam: FC Barcelona \nPosition: Forward \nNational Team: Argentina";
    player[2] = "Name: Cristiano Ronaldo \nAge: 32 \nTeam: Real Madrid \nPosition: Forward \nNational Team: Portugal";  

    function Profileshow() 
    {

    var index = document.laligaplayer.pick.selectedIndex
    document.laligaplayer.text.value = player[index];
    }