function User() {
    Chat_ZONE = document.getElementById('Marker');
    LastMessage.sender = "user";
    LastMessage.message = Chat_ZONE.value;
    Chat_ZONE.value = "";
    Uppercase = LastMessage.message.toUpperCase();
    console.log("✍ Code for custom prompts goes here");
    send(LastMessage.sender, LastMessage.message);
    UCounter += 1;
    find()
}
