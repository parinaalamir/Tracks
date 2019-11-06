function find() {
    if (count == 0) {
        StartChat();
    }

    console.log("waiting for chat " + (count + 1));
    last = LastMessage.sender;

    if (last == "ChatBot") {
        User();
    } else {
        Marker.focus();
        if (BecomeSilent) {
            LastMessage.sender = "ChatBot";
            LastMessage.message = "";
            waiting();
        } else {
            if (count == 0) {
                wait = 100;
            } else {
                wait = 500;
            }
            setTimeout(function(){
                console.log("Waiting");
                ChatBot();
            }, wait);
        }
    }
}

function StartChat(){
    console.log("Starting Chat Bot...");
    ChatZone.innerHTML = '';
    document.getElementById('compose-area').style.display = 'block';
}