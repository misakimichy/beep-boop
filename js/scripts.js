// Business logic
let results = [];
// function takes userInput and add condition
const outputNumbs = userInput => {
    if(userInput !== Number){
        alert("Please input integers!");
    }
    for(let i = 0; i <= userInput; i++){
        if (i.toString().charAt(0) === "1") {
            results.push("Beep!");
        } else if (i.toString().charAt(0) === "2") {
            results.push("Boop!");
        } else if (i.toString().charAt(0) === "3") {
            results.push("I'm sorry Dave, I'm afraid I can't do that!");
        } else {
            results.push(i);
        }
    }
    return results;
}

// User Interface logic
$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        let userInput = parseInt($("input").val());
        let showResult = outputNumbs(userInput);

        console.log("Result", showResult);
        $(".well").show();
    });
});