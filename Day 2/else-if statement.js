var x = prompt("Where does the Pope live?");
        var correctAnswer = "Vatican";
        if (x === correctAnswer) {

            alert("Correct!");
        }
        else if (x === "Rome") {
            alert("Incorrect but close");
        }
        else {
            alert("Incorrect");
        }