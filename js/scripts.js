$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        let userInput = $("input").val();
        let splitInput = userInput.split('');

        for(let i = 0; i <= userInput; i++){
            if (splitInput[0] == 1) {
                i = "Beep!";
            } else if (splitInput[0] == 2) {
                i = "Boop!";
            } else if (splitInput[0] == 3) {
                i = "I'm sorry. I'm afraid I can't do it.";
            } else {
                alert("Please input numbers!");
            }
            console.log(i);
        }


        $(".well").show();
    })
});