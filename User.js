var pose= true;
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
    else if(UCounter==3){
        if(Uppercase=="YES") {
            MCounter = 3;
        }
        else if (Uppercase=="NO") {
            MCounter = 11;
        }
        else{
            SendChat = [true, "Please answer with Yes or No"];
            MCounter -= 1;
            UCounter = 2;
        }
    }
    else if(UCounter==4) {
        if (ans < 1) {
            SendChat = [true, "You said that you own trucks! Do you own trucks?"];
            MCounter -= 1;
            UCounter = 2;
        } else if (ans > 1) {
            MCounter = 4;
        }
        else if (ans == 1) {
            Messages[Messages.map((x, i) => [i, x]).filter(
                x => x[1] == "What brands are they?")[0][0]] = "What brand is it?"
            pose = false;
        }
        else{
            SendChat = [true, "Please just answer with numbers"];
            MCounter = 4;
            UCounter = 3;
        }
    }
    else if(UCounter==5) {
        if (pose == true) {
                if (/and/.test(ans)) {
                    var str = ans.toString();
                    if(((str.match(/and/g)).length)==1) {
                        var ans1 = str.split("and")[0];
                        Messages[Messages.map((x, i) => [i, x]).filter(
                            x => x[1] == "How many truckname trucks do you have?")[0][0]] = "How many " + ans1 + " trucks do you have?"
                    } else if(((str.match(/and/g)).length)==2) {
                        var ans1 = str.split("and")[0];
                        var ans2 = str.split("and")[1];
                        Messages[Messages.map((x, i) => [i, x]).filter(
                            x => x[1] == "How many truckname trucks do you have?")[0][0]] = "How many " + ans1 + " and how many " + ans2 + " trucks do you have?"
                    } else if(((str.match(/and/g)).length)>2) {
                        var ans1 = str.split("and")[0];
                        var ans2 = str.split("and")[1];
                        var ans3 = str.split("and")[2];
                        Messages[Messages.map((x, i) => [i, x]).filter(
                            x => x[1] == "How many truckname trucks do you have?")[0][0]] = "How many " + ans1 + " and how many " + ans2 + " and how many " + ans3 + " trucks do you have?"
                    }
                } else if (/,/.test(ans)) {
                    var str = ans.toString();
                    if(((str.match(/,/g)).length)==1) {
                        var ans1 = str.split(",")[0];
                        Messages[Messages.map((x, i) => [i, x]).filter(
                            x => x[1] == "How many truckname trucks do you have?")[0][0]] = "How many " + ans1 + " trucks do you have?"
                    } else if(((str.match(/,/g)).length)==2) {
                        var ans1 = str.split(",")[0];
                        var ans2 = str.split(",")[1];
                        Messages[Messages.map((x, i) => [i, x]).filter(
                            x => x[1] == "How many truckname trucks do you have?")[0][0]] = "How many " + ans1 + " and how many " + ans2 + " trucks do you have?"
                    } else if(((str.match(/,/g)).length)>2) {
                        var ans1 = str.split(",")[0];
                        var ans2 = str.split(",")[1];
                        var ans3 = str.split(",")[2];
                        Messages[Messages.map((x, i) => [i, x]).filter(
                            x => x[1] == "How many truckname trucks do you have?")[0][0]] = "How many " + ans1 + " and how many " + ans2 + " and how many " + ans3 + " trucks do you have?"
                    }
                } else if (/-/.test(ans)) {
                    var str = ans.toString();
                    if(((str.match(/-/g)).length)==1) {
                        var ans1 = str.split("-")[0];
                        Messages[Messages.map((x, i) => [i, x]).filter(
                            x => x[1] == "How many truckname trucks do you have?")[0][0]] = "How many " + ans1 + " trucks do you have?"
                    } else if(((str.match(/-/g)).length)==2) {
                        var ans1 = str.split("-")[0];
                        var ans2 = str.split("-")[1];
                        Messages[Messages.map((x, i) => [i, x]).filter(
                            x => x[1] == "How many truckname trucks do you have?")[0][0]] = "How many " + ans1 + " and how many " + ans2 + " trucks do you have?"
                    } else if(((str.match(/-/g)).length)>2) {
                        var ans1 = str.split("-")[0];
                        var ans2 = str.split("-")[1];
                        var ans3 = str.split("-")[2];
                        Messages[Messages.map((x, i) => [i, x]).filter(
                            x => x[1] == "How many truckname trucks do you have?")[0][0]] = "How many " + ans1 + " and how many " + ans2 + " and how many " + ans3 + " trucks do you have?"
                    }
                } else if (/ /.test(ans)) {
                    var str = ans.toString();
                    if(((str.match(/ /g)).length)==1) {
                        var ans1 = str.split(" ")[0];
                        Messages[Messages.map((x, i) => [i, x]).filter(
                            x => x[1] == "How many truckname trucks do you have?")[0][0]] = "How many " + ans1 + " trucks do you have?"
                    } else if(((str.match(/ /g)).length)==2) {
                        var ans1 = str.split(" ")[0];
                        var ans2 = str.split(" ")[1];
                        Messages[Messages.map((x, i) => [i, x]).filter(
                            x => x[1] == "How many truckname trucks do you have?")[0][0]] = "How many " + ans1 + " and how many " + ans2 + " trucks do you have?"
                    } else if(((str.match(/ /g)).length)>2) {
                        var ans1 = str.split(" ")[0];
                        var ans2 = str.split(" ")[1];
                        var ans3 = str.split(" ")[2];
                        Messages[Messages.map((x, i) => [i, x]).filter(
                            x => x[1] == "How many truckname trucks do you have?")[0][0]] = "How many " + ans1 + " and how many " + ans2 + " and how many " + ans3 + " trucks do you have?"
                    }
                } else {
                    Messages[Messages.map((x, i) => [i, x]).filter(
                        x => x[1] == "How many truckname trucks do you have?")[0][0]] = "How many " + ans + " trucks do you have?"
                }
        }
        else if (pose == false) {
            Messages[Messages.map((x, i) => [i, x]).filter(
                x => x[1] == "How many truckname trucks do you have?")[0][0]] = "What model is it?"
        }
    }
    else if(UCounter==6) {
        if (pose == false) {
            Messages[Messages.map((x, i) => [i, x]).filter(
                x => x[1] == "Are they of the same model?")[0][0]] = "What is engine size?"
        }
    }
    else if(UCounter==7) {
        if (pose == false) {
            Messages[Messages.map((x, i) => [i, x]).filter(
                x => x[1] == "What model are they?")[0][0]] = "How many axles do they have?"
        }
    }
    else if(UCounter==8) {
        if (pose == false) {
            MCounter+=3;
        }
    }
}