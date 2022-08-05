$(document).ready(function () {
    $("#send-btn").on("click", function () {
        let value = $("#data").val();
        let msg = '<div class="user-inbox inbox"><div class="msg-header"><div>' + value.replace(/>/g,"")
        .replace(/</g,"") + '</div></div></div>';
        $(".form").append(msg);
        $("#data").val('');
        chatBotAPI(value)
    });
});
openChat.addEventListener("click", () => {
    openChat.style.display = "none";
})
showFAB.addEventListener("click", () => {
    openChat.style.display = "block";
})
document.getElementsByClassName("toggle")[0].addEventListener("click", ()=>{
    click.checked = false;
    openChat.style.display = "block";
})
// check for enter button
document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("data");
    inputField.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            let value = $("#data").val();
            if (value != "") {
                let msg = '<div class="user-inbox inbox"><div class="msg-header"><div>' + value.replace(/>/g,"")
                .replace(/</g,"") + '</div></div></div>';
                $(".form").append(msg);
                $("#data").val('');
                chatBotAPI(value)
            }
        }
    });
});
function chatBotAPI(searchQuery) {
    let newValue = searchQuery 
    .toLowerCase()
    .replace(/>/g,"")
    .replace(/</g,"")
    .replace(/please/,"")
    .replace(/tell me/g,"")
    .replace(/whats/g,"")
    .replace(/what is/g,"")
    .replace(/about/g,"")
    .replace(/are/g,"")
    .replace(/the/g,"")
    .replace(/what/g,"")
    .trim() //remove unnecessary string & whitespace from user message

        //show typing effect while fetching from the server
        let wait = document.createElement("div")
        wait.innerHTML = '<div class="bot-inbox align-items-center inbox"><div class="icon"><img class="bot-dp img-fluid" src="/assets/images/chatbot.png" /></div><div class="msg-header"><div><span id="wave"> <span class="dot"></span> <span class="dot"></span> <span class="dot"></span> </span></div></div></div>';
        $(".form").append(wait);
        $(".form").scrollTop($(".form")[0].scrollHeight);


    const xhrReq = new XMLHttpRequest();
    xhrReq.open("get", "/assets/json/covibot.json");
    xhrReq.onload = () => {
        var jsonData = JSON.parse(xhrReq.responseText);
        var result = jsonData.faq.filter(function (e) {
            return e.q.toLowerCase().match(newValue)
        })
        $(wait).remove(); //remove the typing effect after fetchinng from the server
        $(".form").scrollTop($(".form")[0].scrollHeight);
        if (result != "") {
            addReply(result[0]['a'], true)
        } else {
            addReply(searchQuery, false)
        }
    };
    xhrReq.send();
}

function addReply(replyText, found) {
    if (found) {
        let reply = '<div class="bot-inbox align-items-center inbox"><div class="icon"><img class="bot-dp img-fluid" src="/assets/images/chatbot.png" /></div><div class="msg-header"><div>' + replyText + '</div></div></div>';

        //again show typing effect to seem real

        let wait = document.createElement("div")
        wait.innerHTML = '<div class="bot-inbox align-items-center inbox"><div class="icon"><img class="bot-dp img-fluid" src="/assets/images/chatbot.png" /></div><div class="msg-header"><div><span id="wave"> <span class="dot"></span> <span class="dot"></span> <span class="dot"></span> </span></div></div></div>';
        $(".form").append(wait);


        setTimeout(() => {
            wait.innerHTML = reply //replace the typing effect with the real reply
            $(".form").scrollTop($(".form")[0].scrollHeight);
        }, 1000)
        $(".form").scrollTop($(".form")[0].scrollHeight);


    } else {
        let reply = '<div class="bot-inbox align-items-center inbox"><div class="icon"><img class="bot-dp img-fluid" src="/assets/images/chatbot.png" /></div><div class="msg-header"><div> No Search results found for "' + replyText + '", Click <a style="color:#fff;" href="https://www.google.com/search?q=' + replyText + '" target="_blank" rel="noopener noreferrer">here</a> to search on google</div></div></div>';

        //again show typing effect to seem real

        let wait = document.createElement("div")
        wait.innerHTML = '<div class="bot-inbox align-items-center inbox"><div class="icon"><img class="bot-dp img-fluid" src="/assets/images/chatbot.png" /></div><div class="msg-header"><div><span id="wave"> <span class="dot"></span> <span class="dot"></span> <span class="dot"></span> </span></div></div></div>';

        $(".form").append(wait);
        setTimeout(() => {
            wait.innerHTML = reply //replace the typing effect with the real reply
            $(".form").scrollTop($(".form")[0].scrollHeight);
        }, 1000)
        $(".form").scrollTop($(".form")[0].scrollHeight);
    }
}
