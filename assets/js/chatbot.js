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
    .replace(/>/g,"")
    .replace(/</g,"")
    .replace(/please/,"")
    .replace(/tell me/g,"")
    .replace(/whats/g,"")
    .replace(/what is/g,"")
    .replace(/about/g,"")



    const xhrReq = new XMLHttpRequest();
    xhrReq.open("get", "/assets/json/covibot.json");
    xhrReq.onload = () => {
        var jsonData = JSON.parse(xhrReq.responseText);
        var result = jsonData.faq.filter(function (e) {
            return e.q.toLowerCase().match(newValue.toLowerCase().trim())
        })
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
        let wait = document.createElement("div")
        wait.innerHTML = '<div class="bot-inbox align-items-center inbox"><div class="icon"><img class="bot-dp img-fluid" src="/assets/images/chatbot.png" /></div><div class="msg-header"><div><span id="wave"> <span class="dot"></span> <span class="dot"></span> <span class="dot"></span> </span></div></div></div>';
        $(".form").append(wait);
        setTimeout(() => {
            wait.innerHTML = reply
            $(".form").scrollTop($(".form")[0].scrollHeight);
        }, 2000)
        $(".form").scrollTop($(".form")[0].scrollHeight);
    } else {
        let reply = '<div class="bot-inbox align-items-center inbox"><div class="icon"><img class="bot-dp img-fluid" src="/assets/images/chatbot.png" /></div><div class="msg-header"><div> No Search results found for "' + replyText + '", Click <a style="color:#fff;" href="https://www.google.com/search?q=' + replyText + '" target="_blank" rel="noopener noreferrer">here</a> to search on google</div></div></div>';

        let wait = document.createElement("div")
        wait.innerHTML = '<div class="bot-inbox align-items-center inbox"><div class="icon"><img class="bot-dp img-fluid" src="/assets/images/chatbot.png" /></div><div class="msg-header"><div><span id="wave"> <span class="dot"></span> <span class="dot"></span> <span class="dot"></span> </span></div></div></div>';

        $(".form").append(wait);
        setTimeout(() => {
            wait.innerHTML = reply
            $(".form").scrollTop($(".form")[0].scrollHeight);
        }, 2000)
        $(".form").scrollTop($(".form")[0].scrollHeight);
    }
}
