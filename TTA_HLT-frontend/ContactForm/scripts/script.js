
function test(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phone_number").value;
    var message = document.getElementById("message").value;

    var error = document.getElementById("error");

    var text;


    if (name.length < 3 || name.length > 40){
        text = "not valid";
        error.innerHTML = text;
        return false;
    }



    if (email.length < 10 || email.length > 50){
        text = "not valid";
        error.innerHTML = text;
        return false;
    }



    if (phoneNumber.length < 10){
        text = "not valid";
        error.innerHTML = text;
        return false;
    }


    if (message.length < 4 || message.length > 500){
        text = "not valid";
        error.innerHTML = text;
        return false;

    }

return true;

}