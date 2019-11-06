function User() {
    Chat_ZONE = document.getElementById('Marker');
    LastMessage.sender = "Customer";
    LastMessage.message = Chat_ZONE.value;
    var ans = [];
    ans.push(Chat_ZONE.value);
    Chat_ZONE.value = "";
    Uppercase = LastMessage.message.toUpperCase();
    console.log("✍ Code for custom prompts goes here");
    send(LastMessage.sender, LastMessage.message);
    UCounter += 1;
    find()

    if(UCounter==1){
        Messages[Messages.map((x, i) => [i, x]).filter(
            x => x[1] == "Hi, name what's the name of your company?")[0][0]] = "Hi " + ans + ", what's the name of your company?"
    }
    if(UCounter==5) {
        if (/and/.test(ans)) {
            var str = ans.toString();
            var ans1 = str.split("and")[0];
            Messages[Messages.map((x, i) => [i, x]).filter(
                x => x[1] == "How many truckname trucks do you have?")[0][0]] = "How many " + ans1 + " trucks do you have?"
        } else if (/,/.test(ans)) {
            var str = ans.toString();
            var ans1 = str.split(",")[0];
            Messages[Messages.map((x, i) => [i, x]).filter(
                x => x[1] == "How many truckname trucks do you have?")[0][0]] = "How many " + ans1 + " trucks do you have?"
        } else if (/-/.test(ans)) {
            var str = ans.toString();
            var ans1 = str.split("-")[0];
            Messages[Messages.map((x, i) => [i, x]).filter(
                x => x[1] == "How many truckname trucks do you have?")[0][0]] = "How many " + ans1 + " trucks do you have?"
        } else if (/ /.test(ans)) {
            var str = ans.toString();
            var ans1 = str.split(" ")[0];
            Messages[Messages.map((x, i) => [i, x]).filter(
                x => x[1] == "How many truckname trucks do you have?")[0][0]] = "How many " + ans1 + " trucks do you have?"
        } else {
            Messages[Messages.map((x, i) => [i, x]).filter(
                x => x[1] == "How many truckname trucks do you have?")[0][0]] = "How many " + ans + " trucks do you have?"
        }
    }
}