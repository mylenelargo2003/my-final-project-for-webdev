var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');

function login(){
    x.style.left = "27px";
    y.style.right = "-350px";
    z.style.left = "0px";
}
function register(){
    x.style.left = "-350px";
    y.style.right = "25px";
    z.style.left = "150px";
}
// View Password codes


function myLogPassword(){
var a = document.getElementById("logPassword");
var b = document.getElementById("eye");
var c = document.getElementById("eye-slash");
if(a.type === "password"){
    a.type = "text";
    b.style.opacity = "0";
    c.style.opacity = "1";
}else{
    a.type = "password";
    b.style.opacity = "1";
    c.style.opacity = "0";
}
}

function myRegPassword(){

var d = document.getElementById("regPassword");
var b = document.getElementById("eye-2");
var c = document.getElementById("eye-slash-2");

if(d.type === "password"){
    d.type = "text";
    b.style.opacity = "0";
    c.style.opacity = "1";
}else{
    d.type = "password";
    b.style.opacity = "1";
    c.style.opacity = "0";
}
}

// LOGIN AND REGISTRATION

let users = ["admin"];
let passwords = ["admin"];

function loginUser() {

    let username = document.getElementById("logUsername").value;
    let password = document.getElementById("logPassword").value;

    let found = false;

    for (let i = 0; i < users.length; i++) {
        for(let j = 0; j < passwords.length; j++){
            if (username === users[i] && password === passwords[j]) {
                found = true;
                break;
            }
        }
    }

    if (found) {
        // alert("Login Successful");
        window.location.href = "http://127.0.0.1:5500/index.html";
    } else {
        alert("Invalid Credentials");
        document.getElementById("logUsername").value = "";
        document.getElementById("logPassword").value = "";
    }
}

function signupUser() {
    let newUsername = document.getElementById("regUsername").value;
    let newPassword = document.getElementById("regPassword").value;

    if(users.includes(newUsername)){
        alert("Username already exists. Please choose another one");
    }
    else if(passwords.includes(newPassword)){
        alert("Password already exists. Please choose another one");
    }
    // else{
    //     users.push(newUsername);
    //     passwords.push(newPassword);
    //     document.getElementById("regUsername").value = "";
    //     document.getElementById("regPassword").value = "";
    //     alert("Registered");
    //     // window.location.href = "login.html";
    // }

    if(newUsername && newPassword){
        users.push(newUsername);
        passwords.push(newPassword);
        document.getElementById("regUsername").value = "";
        document.getElementById("regPassword").value = "";
        alert("Registered");
    }
    else if(users.includes(newUsername)){
        alert("Username already exists. Please choose another one");
    }
    else if(passwords.includes(newPassword)){
        alert("Password already exists. Please choose another one");
    }

}
