



var incrementButton = document.getElementById("button");
var decrementButton = document.getElementById("button");

for (var i = 0; i <incrementButton.length; i++){
    
    var Buttons = incrementButton[i];
    Buttons.addEventlistener('click',function(event){
        var clickedBotton = event.target;
        var input = clickedBotton.parentElement.children[2];
        console.log(input);

        
    })
    
}



// 1. Put number in number input
//2. on click of + sign, add 1 to number
//3. on click of minus sign, remove 1 from number




