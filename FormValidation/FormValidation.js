const username = document.getElementById('name');
const email = document.getElementById('email');
const pass1 = document.getElementById('takepassword');
const pass2 = document.getElementById('confpassword');

document.getElementById('submitbutton').addEventListener('click', (e) => {
    e.preventDefault();
    validate();
})

function setErrorFor(inputBox, message, errorid)
{
    inputBox.className = 'textbox error';
    const errormsgDiv = document.getElementById(errorid);
    errormsgDiv.innerText = message
}

function setSuccessFor(inputBox, errorid) //it should also hide/remove previously shown error div
{
    inputBox.className = "textbox success";
    const errormsgDiv = document.getElementById(errorid)
    errormsgDiv.innerText = ""
}

function validate()
{
    usernameVal = username.value.trim();
    emailVal = email.value.trim();
    pass1Val = pass1.value.trim();
    pass2Val = pass2.value.trim();

    if(usernameVal === "")
        setErrorFor(username, "Username cannot be empty!", "nameerror");
    else if(usernameVal.length < 3 || usernameVal.length > 25)
        setErrorFor(username, "Username must be between 3 to 25 characters!", "nameerror");
    else
        setSuccessFor(username, "nameerror");

    if(emailVal === "")
        setErrorFor(email, "Email field cannot be empty!", "emailerror");
    else if(!testEmail(emailVal))
        setErrorFor(email, "Invalid email!", "emailerror");
    else
        setSuccessFor(email, "emailerror");

    if(pass1Val === "")
        setErrorFor(pass1, "Password field cannot be empty!", "passworderror");    
    else if(!(testPassword(pass1Val)))
        setErrorFor(pass1, "Invalid Password!", "passworderror");
    else
        setSuccessFor(pass1, "passworderror");  
    
    if(pass2Val === "")
        setErrorFor(pass2, "Confirmation required!", "confpassworderror");
    else if(pass2Val != pass1Val)
        setErrorFor(pass2, "Passwords do not match, try again!", "confpassworderror");
    else
        setSuccessFor(pass2, "confpassworderror");
}

function testEmail(emailVal)
{
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = regex.test(emailVal);
    return result; 
}

function testPassword(pass1Val)
{
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    const result = regex.test(pass1Val);
    return result;
}