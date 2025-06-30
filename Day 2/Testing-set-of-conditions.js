// AND Operator
        var weight, time;
        weight = prompt("Enter your weight");
        time = prompt("How many seconds you can run?");
        if (weight > 300 && time < 6) {
            alert("Come to our tryout!");
        }
        else {
            alert("Come to our cookout!");
        }
        document.write(weight + "<br>");
        document.write(time + "<br>");

        //  if (weight > 300 && time < 6 && age > 17 && gender === "male") {
        age = prompt("Enter your age");
        gender = prompt("Enter your gender");
        if (age > 17 && gender === "male") {
            alert("Come to our tryout!");
        }
        else {
            alert("Come to our cookout!");
        }
        document.write(age + "<br>");
        document.write(gender + "<br>");

        // OR Operator
        Qualifications = prompt("Enter your Qualifications");
        Percentage = prompt("Enter your Percentage");
        if (Qualifications === "FSc" || Percentage >=40) {
            alert("You are eligible for admission");
        }
        else {
            alert("You are not eligible ");
        }
        document.write(Qualifications + "<br>");
        document.write(Percentage + "<br>");