var Enter = window;
var Start = document.getElementById("startButton");
var Send = document.getElementById("sendButton");
var Marker = document.getElementById("Marker");

if (count == 0) {
    waiting()
}

function waiting() {
    console.log("🔈 Starting to listen for Enter Key or Mouse Click.");
    Enter.addEventListener("keydown", listen);
    Start.addEventListener("click", listen);
    Send.addEventListener("click", listen);
}

function listen(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        if (!e.shiftKey) {
            console.log("⌨ Listen Event: " + e + ", Type: " + e.type + ", Keycode: " + e.keyCode);
            pauseListening();
            find();
        }
    }
    if (e.type == "click") {
        console.log("Listen Event: " + e + ", Type: " + e.type + ", Button: " + e.which);
        pauseListening();
        find();
    }
}

function pauseListening() {
    Enter.removeEventListener("keydown", listen);
    Start.removeEventListener("click", listen);
    Send.removeEventListener("click", listen);
    console.log("Stop waiting.");
}