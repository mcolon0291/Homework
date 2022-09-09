
let body = document.querySelector("body")
let button = document.querySelector("button")

let lightbulb = document.querySelector("img")


// boolean variable 
let lightOn = true


button.addEventListener("click", function(event){

    event.preventDefault();

    if (lightOn) { 

        lightOn = false;

        button.textContent = "Turn On"; 
        lightbulb.src = "lightoff.jpg"; 

        body.style.backgroundColor = black;

         
        }
    else { 
        lightOn = true; 

        button.textContent = "Turn Off"; 

        lightbulb.src = "lighton.jpg"; 
        body.style.backgroundColor = " dark grey";
    
        }
})