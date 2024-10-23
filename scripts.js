function signupValidation() {
    var name = document.getElementById("name").value;
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var confirmpass = document.getElementById("conpass").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var emails = document.getElementById("emails").value;

    // Clear previous error messages
    clearErrorMessages();

    if (name == "") {
        document.getElementById("Name").innerHTML = " ** Please fill the Name field";
        return false;
    }

    if (emails == "") {
        document.getElementById("emailids").innerHTML = " ** Please fill the email id field";
        return false;
    }
    if (emails.indexOf("@") <= 0 || !/\.[a-z]{2,}$/.test(emails)) {
        document.getElementById("emailids").innerHTML = " ** Invalid Email";
        return false;
    }

    if (user == "") {
        document.getElementById("username").innerHTML = " ** Please fill the username field";
        return false;
    }
    if (user.length <= 3 || user.length > 20) {
        document.getElementById("username").innerHTML = " ** Username length must be between 3 and 20";
        return false;
    }
    if (!isNaN(user)) {
        document.getElementById("username").innerHTML = " ** Only characters are allowed";
        return false;
    }

    if (pass == "") {
        document.getElementById("passwords").innerHTML = " ** Please fill the password field";
        return false;
    }
    if (pass.length <= 5 || pass.length > 20) {
        document.getElementById("passwords").innerHTML = " ** Password length must be between 5 and 20";
        return false;
    }

    if (pass != confirmpass) {
        document.getElementById("confrmpass").innerHTML = " ** Password Mismatch";
        return false;
    }

    if (confirmpass == "") {
        document.getElementById("confrmpass").innerHTML = " ** Please fill the confirm password field";
        return false;
    }

    if (mobileNumber == "") {
        document.getElementById("mobileno").innerHTML = " ** Please fill the mobile number field";
        return false;
    }
    if (isNaN(mobileNumber) || mobileNumber.length != 11) {
        document.getElementById("mobileno").innerHTML = " ** Mobile Number must be 11 digits only";
        return false;
    }

    // If validation passes
    alert("Signup successful!");
    return true; // Allow form submission
}

function loginValidation() {
    var user = document.getElementById("login-user").value;
    var pass = document.getElementById("login-pass").value;

    // Clear previous error messages
    document.getElementById("login-username-error").innerHTML = "";
    document.getElementById("login-password-error").innerHTML = "";

    if (user == "") {
        document.getElementById("login-username-error").innerHTML = " ** Please fill the username field";
        return false;
    }
    if (user.length <= 2 || user.length > 20) {
        document.getElementById("login-username-error").innerHTML = " ** Username length must be between 2 and 20";
        return false;
    }
    if (!isNaN(user)) {
        document.getElementById("login-username-error").innerHTML = " ** Only characters are allowed";
        return false;
    }

    if (pass == "") {
        document.getElementById("login-password-error").innerHTML = " ** Please fill the password field";
        return false;
    }
    if (pass.length <= 5 || pass.length > 20) {
        document.getElementById("login-password-error").innerHTML = " ** Password length must be between 5 and 20";
        return false;
    }

    // If validation passes
    alert("Login successful!");
    return true; // Allow form submission
}

function clearErrorMessages() {
    document.getElementById("Name").innerHTML = "";
    document.getElementById("emailids").innerHTML = "";
    document.getElementById("username").innerHTML = "";
    document.getElementById("passwords").innerHTML = "";
    document.getElementById("confrmpass").innerHTML = "";
    document.getElementById("mobileno").innerHTML = "";
}
