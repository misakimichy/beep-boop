// Business logic
let results = [];
// function takes userInput and add condition
const outputNumbs = userInput => {
    for(let i = 0; i <= userInput; i++){
        if(typeof i !== "number"){
            alert("Please input numbers!");
        } else if (i.toString().charAt(0) === "1") {
            console.log("includes one");
            results.push("Beep!");
        } else if (i.toString().charAt(0) === "2") {
            console.log("includes two");
            results.push("Boop!");
        } else if (i.toString().charAt(0) === "3") {
            console.log("includes three");
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
    })
});