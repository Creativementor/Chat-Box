const messages = document.getElementsByClassName("chats")[0];
const textBox = document.getElementById("textBox");
const sendBtn = document.getElementById("sendMesseges");




function autoreply() {
    const dummy = [

        {
            id: "bot",
            message: "Walaikum-ul-Salam",
        },

        {
            id: "bot",
            message: "Mein thik thak ap sunain ap kia ahwaal hain",
        },

        {
            id: "bot",
            message: "kia chal rha ajj kal",
        },

        {
            id: "bot",
            message: "buhoooot garmi hai aj tou",
        },

        {
            id: "bot",
            message: "ok bye buht kaam mujhe tm bh kch kaam krlo",
        },
    ]

    const newMessage = Math.round(Math.random() * dummyText.lenght);
    console.log(dummyText[newMessage], "newMessage");
    messages.innerHTML += `<li>   ${dummyText[newMessage].message}   </li>`;
}


function sendMesseges() {
    messages.innerHTML += `<li class="chatList">${textBox.value}</li>`;
    setTimeout(autoreply, 1000)
    textBox.value = "";
}

sendBtn.addEventListener("click", sendBtn);
