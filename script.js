const messages = document.getElementsByClassName("chats")[0];
const textBox = document.getElementById("textBox");
const sendBtn = document.getElementById("sendMessage");

// sendBtn.addEventListener("click",()=>{
//     console.log("clicked")
// })


function clickOnEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function autoscroll() {
    messages.scrollTop = messages.scrollHeight;
}


function sendMessage() {
    if (textBox.value.trim() === "") {
        return;
    }
    const userInput = textBox.value;
    messages.innerHTML += `<li class="user-message">${textBox.value}</li>`;
    autoscroll();
    setTimeout(() => {
        reply(userInput);
        autoscroll();
    }, 1000);
    textBox.value = "";
}

sendBtn.addEventListener("click", sendMessage);



function reply(userInput) {
    var user = userInput;
    user = user.toLowerCase();
    user = user.replace(/\s+/g, "");
    console.log(user);
    if (user == "Hi!" || user == "hello" || user == "hi") {
        messages.innerHTML += `<li class="bot">Hello! How are you</li>`;
    } else if (user == "Salam" || user == "salam" || user == "assalamualikum" || user == "Assalam-u-alaikum") {
        messages.innerHTML += `<li class="bot">Walikum_Salam! kia Haal hai aap kai janab</li>`;
    } else if (user == "I amfine" || user == "i am fine" || user == "i am good" || user == "I am good") {
        messages.innerHTML += `<li class="bot">Ohh great What's your Name?</li>`;
    } else if (
        user == "mai theek" ||
        user == "mai bilkul theek" ||
        user == "theek" ||
        user == "mein thk hun" ||
        user == "me thik hun"
    ) {
        messages.innerHTML += `<li class="bot">achaa hai aap ka name kia hai janab</li>`;
    } else if (
        user == "Hasan" ||
        user == "umer" ||
        user == "wasi" ||
        user == "hasnain" ||
        user == "fareed" ||
        user == "Aqib"
    ) {
        messages.innerHTML += `<li class="bot">Beautiful Name!</li>`;
    } else {
        const dummy = [
            {
                id: "bot",
                message: "Hi!"
            },

            {
                id: "bot",
                message: "Hello"
            },

            {
                id: "bot",
                message: "hi",
            },

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
        let random = Math.round(Math.random() * dummy.length);

        messages.innerHTML += `<li class=${dummy[random].id}>${dummy[random].message}</li>`;
    }

}




// function sendMesseges() {
//     messages.innerHTML += `<li class="chatList">${textBox.value}</li>`;
//     console.log(textBox.value)
//     // setTimeout(autoreply, 1000)
//     textBox.value = "";
// }

// sendBtn.addEventListener("click", sendMesseges);
