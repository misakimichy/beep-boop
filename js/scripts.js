// Business logic

// Save the userInput and check if it has a value. If there is no value, show alert
// then invoke outputNumbs function
const getResult = () => {
    let userInput = parseInt($("input#number").val());
    let userName = $("input#name").val();
    // Show alert when userInput is empty
    if(!userInput || userInput < 0) {
        $(".modal").modal();
        $("#close").click(() => {
            $(".modal").modal('hide');
        });
        $("input").val('');
        $(".well").hide();
        return;
    }
    outputNumbs(userInput, userName);
    $(".well").show();
};

// function takes userInput and returns the right message depends on the condition
let results = [];
const outputNumbs = (userInput, userName) => {
    for(let i = 0; i <= userInput; i++){
        if (i.toString().charAt(0) === "1" || i.toString().charAt(1) === "1") {
            results.push(` "Beep!"`);
        } else if (i.toString().charAt(0) === "2" || i.toString().charAt(1) === "2") {
            results.push(` "Boop!"`);
        } else if (i.toString().charAt(0) === "3" || i.toString().charAt(1) === "3") {
            (userName
                ? (results.push(` "I'm sorry, ${userName}. I'm afraid I can't do that!"`))
                :(results.push(` "I'm sorry. I'm afraid I can't do that!"`))
            )
        } else {
            results.push(` ${i}`);
        }
    }
    return results;
};

// Clear the result field when use click another button.
const clearCurrentResult = () => {
    ($("button[value=reversed][checked=true]") || $("button[value=normal][checked=true]")) && (results = [])
}

// User Interface logic
$(document).ready(() => {
    // For "Beep Boop" numbers button, use .one method to disable multiple calls
    $("button[value=normal]").click(event => {
        event.preventDefault();
        clearCurrentResult();
        getResult();
        $("#result").text(results);
    });

    // For reversed "Beep Boop" numbers button, use .one method to disable multiple calls
    $("button[value=reversed]").click(event => {
        event.preventDefault();
        clearCurrentResult();
        getResult();
        $("#result").text(results.reverse());
    });
});