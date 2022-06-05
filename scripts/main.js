// main post logistics

var globalIndex;
var blueBtns = document.getElementsByClassName("blue-button");
var postBtns = document.getElementsByClassName("btn-post");
var followBtns = document.getElementsByClassName("btn-follow");
var commentValue = document.getElementsByClassName("comment-input");

var abc = commentValue.length-((commentValue.legth)-1)

for (var i = 0; i < blueBtns.length; i++) {
    blueBtns[i].addEventListener("click", changeColor);
}


for (var i = 0; i < followBtns.length; i++){
    followBtns[i].addEventListener("click", changeFollowText);
}

//  METHOD 1
// for (var k = 0; k < postBtnsLen; k++) {
//     postBtns[k].addEventListener("click", uploadPost)
// }

// METHOD 2
// for (var k = 0; k < postBtns.length; k++) {
//     postBtns[k].addEventListener("click", function(){
//         var inputval = commentValue[k].value;
//         console.log(inputval);
//         alert("your comment: "+"\' "+ inputval+ " \'"+" has been posted")
//         inputval = "";
//     })
// }



function changeColor() {
    if (this.style.color != "blue") {
        this.style.color = "blue";
    } else {
        this.style.color = "#00aaff88";
    }
}

function changeFollowText(){
    if(this.innerText == "Follow"){
        this.innerText = "Followed";
    }else{
        this.innerText = "Follow"
    }
}

var hearts = document.getElementsByClassName("likes");
var bookmarks = document.getElementsByClassName("fa-bookmark");

for (var heart of hearts){
    heart.addEventListener("click",changeHeart);
}

for(var bookmark of bookmarks){
    bookmark.addEventListener("click",changeBookmark);
}

function changeHeart(){
    if (this.style.color != "red"){
        this.classList.remove("fa-regular");
        this.classList.add("fa-solid");
        this.style.color = "red";
    } else{
        this.classList.remove("fa-solid");
        this.classList.add("fa-regular");
        this.style.color = "black";
    }
}

function changeBookmark(){
    if (this.style.color != "#5b5bff"){
        this.classList.remove("fa-regular");
        this.classList.add("fa-solid");
        this.style.color = "#5b5bff";
    }else{
        this.classList.remove("fa-solid");
        this.classList.add("fa-regular");
        this.style.color = "black";
    }
}

