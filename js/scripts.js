// Business logic
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
}

// User Interface logic
$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        let userInput = parseInt($("input").val());
        outputNumbs(userInput);

        $(".well").show();
        $("#result").text(results);
    });
});