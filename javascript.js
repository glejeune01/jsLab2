window.onload = function () {
let buttons = document.querySelectorAll("button");


buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let targetDivId = button.getAttribute("data-target");
        let exerciseContainer = document.getElementsByClassName("exerciseContainer")[0];

        let allExerciseDivs = exerciseContainer.getElementsByClassName("exerciseBox");
        
        for(let i=0; i<allExerciseDivs.length; i++) {
            allExerciseDivs[i].classList.add("hide");
        }
        
        let displayDiv = document.getElementById(targetDivId);
        displayDiv.classList.remove("hide");

    });
});
};


