var Log = [];
var newDate = new Date();
function send(sender, message) {
    console.log(sender + ": " + message);
    ChatZone.insertAdjacentHTML("beforeend", "<div id='chat-" + count + "' class='chat-container'><div class='chat-wrapper' id='chat-a-" + count + "'><p id='a-' class='chat-" + sender + "'>" + message + "</p><div class='avatar avatar-" + sender + "'></div></div></div>");
    document.getElementById('chat-' + count).scrollIntoView();
    count += 1;
    Log.push(sender + ": " + message);
    Log.push( "\n" );

    if (MCounter >= Messages.length) {
        download(newDate + '.txt', Log);
    }
}
