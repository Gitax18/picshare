let username = document.getElementById("username");
let password = document.getElementById("password");
let warning = document.getElementById("warning");
let login = document.getElementById("login");


login.addEventListener("click", onLogin);

function onLogin(){
    if(username.value != localStorage.getItem("name") || password.value != localStorage.getItem("password")){
        warning.style.visibility = 'visible';
    }else{
        login.style.backgroundColor = "#0099ff"
        setTimeout(function(){
            window.location.href='main.html';
        },1000)
    }
}



