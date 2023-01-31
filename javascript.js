window.onload = function () 
{
    let selectedButton;
    let buttons = document.querySelectorAll("button");
    let exerciseContainer = document.getElementsByClassName("exerciseContainer")[0];
    let allExerciseDivs = exerciseContainer.getElementsByClassName("exerciseBox");
    
    for(let i=0; i<allExerciseDivs.length; i++) 
    {
        allExerciseDivs[i].classList.add("hide");
    }
    
    buttons.forEach(function(button) 
    {
        if (button.id !=="process") 
        {
        button.addEventListener("click", function() 
            {
                for(let i=0; i<allExerciseDivs.length; i++) 
                {
                    allExerciseDivs[i].classList.add("hide");
                }

                let targetDivId = button.getAttribute("data-target");
                let displayDiv = document.getElementById(targetDivId);
                displayDiv.classList.remove("hide");

                selectedButton = targetDivId;
            });
        }
        
        button.addEventListener("click", function() 
        {
            switch (selectedButton)
            {
                case "exerciseOne": console.log("do a 1 dance"); minMaxRange();
                break;
                case "exerciseTwo": console.log("do a 2 dance");
                break;
                case "exerciseThree": console.log("do a 3 dance"); numberOfMatchingKeys();
                break;
                case "exerciseFour": console.log("do a 4 dance"); numStars();
                break;
                case "exerciseFive": console.log("do a 5 dance");
                break;
                case "exerciseSix": console.log("do a 6 dance");
                break;
                case "exerciseSeven": console.log("do a 7 dance");
                break;
                case "exerciseEight": console.log("do a 8 dance");
                break;
                case "exerciseNine": console.log("do a 9 dance");
                break;
                case "exerciseTen": console.log("do a 10 dance");
                break;
                case "exerciseEleven": console.log("do a 11 dance");
                break;
                case "exerciseTwelve": console.log("do a 12 dance");
                break;
                case "exerciseThirteen": console.log("do a 13 dance");
                break;
                default: return;
            }
        });
    });
}

function minMaxRange() {
    
    let outputBox = document.querySelector('#outputBox');

    outputBox.innerHTML = "<h4>Output box</h4>";

    let firstEntry = document.querySelector('#inputBox #userEntry:first-of-type');
    let firstValue = parseInt(firstEntry.value);
  
    let secondEntry = document.querySelector('#inputBox #userEntry:nth-of-type(2)');
    let secondValue = parseInt(secondEntry.value);
  
    if(firstEntry.value !== "" && secondEntry.value !== "")
    {
        let diffValue = secondValue - firstValue;
        let newNumber;
        let finalPrintout = firstValue.toString();
    
        for (let i = 1; i < diffValue; i++) 
        {
            newNumber = firstValue + i;
            finalPrintout += ", " + newNumber.toString();
        }

        let output = document.createElement("p");
        output.innerHTML = "Result: " + finalPrintout;
        outputBox.appendChild(output);
        firstEntry.value = "";
        secondEntry.value = "";
    }

    else 
    {
        let output = document.createElement("p");
        output.innerHTML = "Instructions: Please enter two numbers. Max must be greater then min.";
        outputBox.appendChild(output);
    }
  }

function numberOfMatchingKeys()
{
      let outputBox = document.querySelector('#outputBoxThree');
  
      outputBox.innerHTML = "<h4>Output box</h4>";
  
      let firstEntry = document.querySelector('#inputBoxThree #userEntry:first-of-type');
      let firstValues = firstEntry.value;
      let commaSeperate = firstValues.split(",");

      let secondEntry = document.querySelector('#inputBoxThree #userEntry:nth-of-type(2)');
      let keyValue = secondEntry.value.toString();

      if (firstValues !== "" && keyValue !== "")
      {
        let count = 0;

        for(let i=0; i<commaSeperate.length; i++)
        {
            if (commaSeperate[i] === keyValue)
            {
                count++;
            }
        }
        let output = document.createElement("p");
        output.innerHTML = "Result: " + count;
        outputBox.appendChild(output);
        firstEntry.value = "";
        secondEntry.value = "";
    }
    else 
    {
        let output = document.createElement("p");
        output.innerHTML = "Instructions: Please enter comma seperated numbers, then a key number to query for the count.";
        outputBox.appendChild(output);
    }
}

function numStars()
{
    let outputBox = document.querySelector('#outputBoxFour');
    outputBox.innerHTML = "<h4>Output box</h4>";
    
    let entry = document.querySelector('#inputBoxFour #userEntry:first-of-type');
    let value = firstEntry.value;

    if(value !== "")
    {
        for(i=0; i<value; i++)
        {
            let starString =+ "*";
            let output = document.createElement("p");
            output.innerHTML = "Result: " + starString;
            outputBox.appendChild(output);
            entry.value = "";

        }
    }
    else 
    {
        entry.value = "";
        let output = document.createElement("p");
        output.innerHTML = "Instructions: Please enter a number to turn into stars.";
        outputBox.appendChild(output);
    }
}

  