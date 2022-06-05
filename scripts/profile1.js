var heart = document.getElementsByClassName("heart");

for (var i = 0; i < heart.length; i++){
    heart[i].addEventListener("click",changeHt)
}

function changeHt(){
    // alert("click")
    if (this.style.color != "red"){
        this.style.color = "red"
    }else{
        this.style.color = "white";
    }

}