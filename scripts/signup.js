
let submit = document.getElementById("submit");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let users = ['User1','GitDesigns','ChankMemer'];
let warning = document.getElementById("warning")
var ele = document.getElementsByName('gender');


localStorage.clear();

submit.addEventListener("click", onSubmit)

// adding user validation

function onSubmit(){
    for(let user in users){
        if (users[user] == username.value){
            warning.style.visibility = "visible";
            username.value = '';
        }
        else{
            warning.style.visibility = 'hidden';
            localStorage.setItem("name",username.value);
        } 
    }

    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value);
              
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        localStorage.setItem("gender",ele[i].value)
}

    window.location.href="index.html";
}