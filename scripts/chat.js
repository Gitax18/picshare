var input = document.getElementById("type-chat");
var sendBtn = document.getElementById("send-chat");
var userPro = document.getElementsByClassName('user-profile');
var sendMsg = document.getElementById("send-msg");
var back = document.getElementById("back");
var chatbox = document.getElementsByClassName('chat-box')[0];
var messagebox = document.getElementsByClassName('message-box')[0];

// sending chat
sendBtn.addEventListener("click",sendChat);

function sendChat(){
    console.log(input.value)

    if(150 > input.value.length > 0){
        var span = document.createElement("span");
        span.setAttribute('class','chat')
        var node = document.createTextNode(input.value);
        span.appendChild(node);

        var chatbox = document.getElementById("user-chats");
        chatbox.appendChild(span);
        input.value = '';
    }else{
        alert("message length can't be 0 more than 150");
    }
}

// changing chatbox content when click on user profile.
for(var i of userPro){
    i.addEventListener("click",changeChatBox);
}

function changeChatBox(){
    var chatbox = document.getElementById("user-chats");
    chatbox.innerHTML = '';
}

// on clicking back
back.addEventListener('click',showMessageBox);

function showMessageBox(){
    messagebox.style.display = 'flex'
    chatbox.style.display = 'none'
}

// on clicking send message
sendMsg.addEventListener('click',showChatBox);

function showChatBox(){
    messagebox.style.display = 'none'
    chatbox.style.display = 'block'
}