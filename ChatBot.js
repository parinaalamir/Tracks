function ChatBot() {
    LastMessage.sender = "ChatBot";

    if (MCounter >= Messages.length) {
        LastMessage.message = end
        BecomeSilent = true;
    } else {
        LastMessage.message = Messages[MCounter];
    }

    if (SendChat[0]) {
        LastMessage.message = SendChat[1];
    }

    send(LastMessage.sender, LastMessage.message);

    if (SendChat[0]) {
        SendChat = [false, ""];

    } else {
        MCounter += 1;
    }

    waiting();
}