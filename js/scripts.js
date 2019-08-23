// Business logic

// Save the userInput and check if it has a value. If there is no value, show alert
// then invoke outputNumbs function
const showResult = () => {
    let userInput = parseInt($("input").val());
    // Show alert when userInput is empty
    if(!userInput) {
        alert("Please input numbers!");
        $(".well").hide();
        return;
    }
    outputNumbs(userInput);
    $(".well").show();
};

let results = [];
// function takes userInput and returns the right message depends on the condition
const outputNumbs = userInput => {
    for(let i = 0; i <= userInput; i++){
        if (i.toString().charAt(0) === "1" || i.toString().charAt(1) === "1") {
            results.push(` "Beep!"`);
        } else if (i.toString().charAt(0) === "2" || i.toString().charAt(1) === "2") {
            results.push(` "Boop!"`);
        } else if (i.toString().charAt(0) === "3" || i.toString().charAt(1) === "3") {
            results.push(` "I'm sorry Dave, I'm afraid I can't do that!"`);
        } else {
            results.push(` ${i}`);
        }
    }
    return results;
};


// User Interface logic
$(document).ready(() => {
    // For "Beep Boop" numbers button
    $("button[value=normal]").click(event => {
        event.preventDefault();
        showResult();
        $("#result").text(results);
    });

    // For reversed "Beep Boop" numbers button
    $("button[value=reversed]").click(event => {
        event.preventDefault();
        showResult();
        // If it's normal result is already shown, clear the well and show the reverse numbers.
        if($(".well").show()){
            $("#result").text(results.reverse());
        }
    });
});