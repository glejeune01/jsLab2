window.onload = function () {
	let selectedButton;
	let buttons = document.querySelectorAll('button');
	let exerciseContainer =
		document.getElementsByClassName('exerciseContainer')[0];
	let allExerciseDivs = exerciseContainer.getElementsByClassName('exerciseBox');

	for (let i = 0; i < allExerciseDivs.length; i++) {
		allExerciseDivs[i].classList.add('hide');
	}

	buttons.forEach(function (button) {
		if (button.id !== 'process') {
			button.addEventListener('click', function () {
				for (let i = 0; i < allExerciseDivs.length; i++) {
					allExerciseDivs[i].classList.add('hide');
				}

				let targetDivId = button.getAttribute('data-target');
				let displayDiv = document.getElementById(targetDivId);
				displayDiv.classList.remove('hide');

				selectedButton = targetDivId;
			});
		}

		button.addEventListener('click', function () {
			switch (selectedButton) {
				case 'exerciseOne':
					console.log('do a 1 dance');
					minMaxRange();
					break;
				case 'exerciseTwo':
					console.log('do a 2 dance');
					comSepValues();
					break;
				case 'exerciseThree':
					console.log('do a 3 dance');
					numberOfMatchingKeys();
					break;
				case 'exerciseFour':
					console.log('do a 4 dance');
					numStars();
					break;
				case 'exerciseFive':
					console.log('do a 5 dance');
					starPrinter();
					break;
				case 'exerciseSix':
					console.log('do a 6 dance');
					vowelReplace();
					break;
				case 'exerciseSeven':
					console.log('do a 7 dance');
					courierCompany();
					break;
				case 'exerciseEight':
					console.log('do a 8 dance');
					snickersOrder();
					break;
				case 'exerciseNine':
					console.log('do a 9 dance');
          			binaryToBaseTen();
					break;
				case 'exerciseTen':
					console.log('do a 10 dance');
					triangles()
					break;
				case 'exerciseEleven':
					console.log('do a 11 dance');
					histogramGenerator();
					break;
				case 'exerciseTwelve':
					console.log('do a 12 dance');
          			minCharacterString();
					break;
				case 'exerciseThirteen':
					console.log('do a 13 dance');
          			compareArrays();
					break;
				default:
					return;
			}
		});
	});
};

function minMaxRange() {
	let outputBox = document.querySelector('#outputBox');

	outputBox.innerHTML = '<h4>Output box</h4>';

	let firstEntry = document.querySelector('#inputBox #userEntry:first-of-type');
	let firstValue = parseInt(firstEntry.value);

	let secondEntry = document.querySelector('#inputBox #userEntry:nth-of-type(2)');
	let secondValue = parseInt(secondEntry.value);

	if (firstEntry.value !== '' && secondEntry.value !== '') {
		let diffValue = secondValue - firstValue;
		let newNumber;
		let finalPrintout = firstValue.toString();

		for (let i = 1; i < diffValue; i++) {
			newNumber = firstValue + i;
			finalPrintout += ', ' + newNumber.toString();
		}

		let output = document.createElement('p');
		output.innerHTML = 'Result: ' + finalPrintout;
		outputBox.appendChild(output);
		firstEntry.value = '';
		secondEntry.value = '';
	} else {
		let output = document.createElement('p');
		output.innerHTML =
			'Instructions: Please enter two numbers. Max must be greater then min.';
		outputBox.appendChild(output);
	}
}

function comSepValues() {
	let outputBox = document.querySelector("#outputBoxTwo");
	outputBox.innerHTML = "<h4>Output box</h4>";
  
	let entry = document.querySelector("#inputBoxTwo #userEntry");
	let value = entry.value;
  
	if (value !== "") {
	  let values = value.split(",").map(Number);
	  let count = values.length;
	  let total = values.reduce((a, b) => a + b, 0);
	  let average = total / count;
	  let smallest = Math.min(...values);
	  let largest = Math.max(...values);
  
	  let output = document.createElement("p");
	  outputBox.innerHTML =
		"Number of values: " +
		count +
		"<br>" +
		"Total: " +
		total +
		"<br>" +
		"Average: " +
		average +
		"<br>" +
		"Smallest: " +
		smallest +
		"<br>" +
		"Largest: " +
		largest;
	  outputBox.appendChild(output);
	} else {
	  let output = document.createElement("p");
	  output.innerHTML =
		"Instructions: Ask the user for a comma-separated set of numeric values. Display the number of values entered, the total, the average, the smallest value, and the largest value.";
	  outputBox.appendChild(output);
	}
	entry.value = "";
  }

function numberOfMatchingKeys() {
	let outputBox = document.querySelector('#outputBoxThree');

	outputBox.innerHTML = '<h4>Output box</h4>';

	let firstEntry = document.querySelector(
		'#inputBoxThree #userEntry:first-of-type'
	);
	let firstValues = firstEntry.value;
	let commaSeperate = firstValues.split(',');

	let secondEntry = document.querySelector(
		'#inputBoxThree #userEntry:nth-of-type(2)'
	);
	let keyValue = secondEntry.value.toString();

	if (firstValues !== '' && keyValue !== '') {
		let count = 0;

		for (let i = 0; i < commaSeperate.length; i++) {
			if (commaSeperate[i] === keyValue) {
				count++;
			}
		}
		let output = document.createElement('p');
		output.innerHTML = 'Result: ' + count;
		outputBox.appendChild(output);
		firstEntry.value = '';
		secondEntry.value = '';
	} else {
		let output = document.createElement('p');
		output.innerHTML =
			'Instructions: Please enter comma seperated numbers, then a key number to query for the count.';
		outputBox.appendChild(output);
	}
}

function numStars() {
	let outputBox = document.querySelector('#outputBoxFour');
	outputBox.innerHTML = '<h4>Output box</h4>';

	let entry = document.querySelector('#inputBoxFour #userEntry:first-of-type');
	let value = entry.value;

	if (value !== '') {
		let starString = '';

		for (i = 0; i < value; i++) {
			starString += '*';
		}

		let output = document.createElement('p');
		output.innerHTML = 'Result: ' + starString;
		outputBox.appendChild(output);
		entry.value = '';
	} else {
		entry.value = '';
		let output = document.createElement('p');
		output.innerHTML =
			'Instructions: Please enter a number to turn into stars.';
		outputBox.appendChild(output);
	}
}

function starPrinter() {
	let outputBox = document.querySelector('#outputBoxFive');

	outputBox.innerHTML = '<h4>Output Box</h4>';

	let numStars = document.querySelector('#inputBoxFive #numInput').value;
	let maxStars = document.querySelector('#inputBoxFive #maxInput').value;

	if (numStars >= 1 && maxStars >= 1) {
		let output = '';
		for (let i = 1; i <= numStars; i++) {
			output += '*';

			if (i % maxStars === 0) {
				output += '<br>';
			}
		}
		document.querySelector('#outputBoxFive').innerHTML += output;
		maxStars.value = '';
		numStars.value = '';
	} else {
		let output = document.createElement('p');
		output.innerHTML =
			'Instructions: Please input a total number of stars, and a max number of stars per line';
		outputBox.appendChild(output);
	}
	document.querySelector('#inputBoxFive #numInput').value = '';
	document.querySelector('#inputBoxFive #maxInput').value = '';
}

function vowelReplace() {
	let outputBox = document.querySelector('#outputBoxSix');
	outputBox.innerHTML = '<h4>Output box</h4>';

	let entry = document.querySelector('#inputBoxSix #userEntry:first-of-type');
	let value = entry.value;

	if (value !== '') {
		let vowels = 'aeiouAEIOU';
		let newStringOutput = '';
		let vowelCount = 0;

		for (let i = 0; i < value.length; i++) {
			if (vowels.indexOf(value[i]) !== -1) {
				newStringOutput += '*';
				vowelCount++;
			} else {
				newStringOutput += value[i];
			}
		}

		let countDisplay = document.createElement('p');
		countDisplay.innerHTML = 'Number of Vowels:' + vowelCount;
		outputBox.appendChild(countDisplay);

		let resultDisplay = document.createElement('p');
		resultDisplay.innerHTML = 'Result:' + newStringOutput;
		outputBox.appendChild(resultDisplay);

		entry.value = '';
	} else {
		let output = document.createElement('p');
		output.innerHTML = 'Instructions: Please enter a string.';
		outputBox.appendChild(output);
	}
}

function snickersOrder() {
	let outputBox = document.querySelector('#outputBoxEight');
	outputBox.innerHTML = '<h4>Output Box</h4>';
	let singleBarCost = 1.75;
	let singleBoxCost = 32.0;

	let numBars = document.querySelector('#snickersAmountInput').value;
	let numBoxes = parseInt(numBars / 24);
	let numSingles = numBoxes % numBars;
	let costBoxes = numBoxes / singleBoxCost;
	let costSingles = numSingles * singleBarCost;
	let totalCost = costBoxes + costSingles;

	if (numBars >= 1) {
		let output = document.createElement('p');
		output.innerHTML = 'Number of Boxes: ' + numBoxes;
		output.innerHTML += '<br>';
		output.innerHTML += 'Number of Singles: ' + numSingles;
		output.innerHTML += '<br>';
		output.innerHTML += 'Cost of Boxes: ' + costBoxes;
		output.innerHTML += '<br>';
		output.innerHTML += 'Total Cost: ' + totalCost;
		outputBox.appendChild(output);
	} else {
		let output = document.createElement('p');
		output.innerHTML =
			'Instructions: Enter a number of snicker bars to order. Note: Order quantity must be greater than 1!';
	}
	document.querySelector('#snickersAmountInput').value = '';
}

function histogramGenerator() {
	let outputBox = document.querySelector('#outputBoxEleven');
	outputBox.innerHTML = '<h4>Output Box</h4>';

	let userSentence = document.querySelector('#histogramInput').value;
	let words = userSentence.split(' ');
	let histogram = {};

	if (userSentence) {
		for (let i = 0; i < words.length; i++) {
			let word = words[i];
			let length = word.length;
			if (histogram[length]) {
				histogram[length]++;
			} else {
				histogram[length] = 1;
			}
		}
		let output = '';
		for (let length in histogram) {
			output += `<p>${'*'.repeat(histogram[length])} (${length})</p>`;
		}
		outputBox.innerHTML += output;
	} else {
		let output = document.createElement('p');
		output.innerHTML =
			'Instructions: Enter a sentence. Once you are done, press the submit button to see a histogram of the word lengths in your sentence!';
		outputBox.appendChild(output);
	}
}


function binaryToBaseTen() {
  let outputBox = document.querySelector("#outputBoxNine");
  outputBox.innerHTML = "<h4>Output box</h4>";

  let entry = document.querySelector("#inputBoxNine #userEntry:first-of-type");
  let value = entry.value;
  let number = 0;
  let exponant = 0;
  let responseOne = "";
  let responseTwo = "";

  if (value !== "") {
    for (let i = value.length - 1; i >= 0; i--) {
      let digit = value.charAt(i);
      if (digit !== '0' && digit !== '1') {
        output = document.createElement('p');
        output.innerHTML = "Please enter a valid binary number.";
        outputBox.appendChild(output);
        entry.value = "";
        return;
      }
      if (digit === '1') {
        number += Math.pow(2, exponant);
        responseOne = "2^" + exponant + "+" + responseOne;
        responseTwo = Math.pow(2, exponant) + "+" + responseTwo;
      }
      exponant++;
      
    }
    responseOne = responseOne.substring(0, responseOne.length-1);
    responseTwo = responseTwo.substring(0, responseTwo.length-1);

    output = document.createElement('p');
    output.innerHTML = value + " = " + responseOne + " = " + responseTwo + " = " + number;
    outputBox.appendChild(output);
    entry.value = "";
  }
  else 
  {
    let output = document.createElement('p');
    output.innerHTML = "Instructions: Please enter a valid binary number."
    outputBox.appendChild(output);
  }
}

function minCharacterString()
{
  let outputBox = document.querySelector("#outputBoxTwelve");
  outputBox.innerHTML = "<h4>Output box</h4>";

  let entryNum = document.querySelector("#inputBoxTwelve #userEntry:first-of-type");
  let valueNum = entryNum.value;
  let entryString = document.querySelector("#inputBoxTwelve #userEntry:nth-of-type(2)");
  let valueString = entryString.value;
  let seperatedString = valueString.split(" ");
  let resultString= "";

  if (valueNum > 0 && valueString !== "") {
    for(i=0; i<seperatedString.length; i++){
      if (seperatedString[i].length >= valueNum){
        resultString+=seperatedString[i] + " "; 
      }
    }
    let output = document.createElement('p');
    output.innerHTML = "Result: " + resultString;
    outputBox.appendChild(output);
  }
  else {
    output = document.createElement('p');
    output.innerHTML = "Instructions: Please enter a number greater then 0, and a string."
    outputBox.appendChild(output);
  }
}

function compareArrays(){
  let outputBox = document.querySelector("#outputBoxThirteen");
  outputBox.innerHTML = "<h4>Output box</h4>";

  let firstArray = document.querySelector("#inputBoxThirteen #userEntry:first-of-type");
  let firstSplitArray = firstArray.value.split(",");
  let secondArray = document.querySelector("#inputBoxThirteen #userEntry:nth-of-type(2)");
  let secondSplitArray = secondArray.value.split(",");
  let result = 0;

  if(firstArray.value !== "" && secondArray.value !== "" && firstSplitArray.length === secondSplitArray.length){
    for(i=0; i<firstSplitArray.length; i++){
      result+= parseInt(firstSplitArray[i]) + parseInt(secondSplitArray[i]) + ", ";
    }
    result = result.slice(1, -2);
    let output = document.createElement('p');
    output.innerHTML = "Results: " + result;
    outputBox.appendChild(output);
  }
  else{
    output = document.createElement('p');
    output.innerHTML = "Instructions: Please enter two arrays of numbers seperated by commas. Ensure both arrays are the same length."
    outputBox.appendChild(output);
  }
}

function triangles() {
	let outputBox = document.querySelector("#outputBoxTen");
	outputBox.innerHTML = "<h4>Output box</h4>";
  
	let firstEntry = document.querySelector(
	  "#inputBoxTen #userEntry:first-of-type"
	);
	let firstAngle = firstEntry.value;
  
	let secondEntry = document.querySelector(
	  "#inputBoxTen #userEntry:nth-of-type(2)"
	);
	let secondAngle = secondEntry.value;
  
	let thirdEntry = document.querySelector(
	  "#inputBoxTen #userEntry:nth-of-type(3)"
	);
	let thirdAngle = thirdEntry.value;
	let sum = firstAngle + secondAngle + thirdAngle;
  
	if (
	  (firstAngle <= 0 && firstAngle >= 180) ||
	  (secondAngle <= 0 && secondAngle >= 180) ||
	  (thirdAngle <= 0 && thirdAngle >= 180)
	) {
	  alert(
		`Angles must be greater than 0, less than 180, and the sum of angles must be 180`
	  );
	}
	if (firstAngle !== "" && secondAngle !== "" && thirdAngle !== "") {
	  if (firstAngle == 90 || secondAngle == 90 || thirdAngle == 90) {
		outputBox.innerHTML = "Right Triangle";
	  } else if (firstAngle > 90 || secondAngle > 90 || thirdAngle > 90) {
		outputBox.innerHTML = "Obtuse Angle";
	  } else if (firstAngle < 90 || secondAngle < 90 || thirdAngle < 90) {
		outputBox.innerHTML = "Acute Angle";
	  }
	} else {
	  firstEntry.value = "";
	  secondEntry.value = "";
	  thirdEntry.value = "";
	  let output = document.createElement("p");
	  output.innerHTML =
		"Ask the user for the three angles of a triangle. Display the message `Right Triangle` if any of the angles is 90, `Obtuse Triangle` if any of the angles is greater than 90, or `Acute Triangle` if all of the angles are less than 90.";
	  outputBox.appendChild(output);
	}
  }

  function courierCompany() {
	let outputBox = document.querySelector("#outputBoxSeven");
	outputBox.innerHTML = "<h4>Output box</h4>";
  
	let entry = document.querySelector("#inputBoxSeven #userEntry");
	let items = entry.value;
  
	if (items > 1) {
	  if (items <= 100) {
		let baseCost = items * 5;
		let tax = baseCost * 0.15;
		let totalCost = baseCost + tax;
		outputBox.innerHTML =
		  "Base cost: $" +
		  baseCost.toFixed(2) +
		  "<br>" +
		  "Tax: $" +
		  tax.toFixed(2) +
		  "<br>" +
		  "Total cost: $" +
		  totalCost.toFixed(2);
	  } else if (items > 100 && items <= 1000) {
		let baseCost = items * 4;
		let tax = baseCost * 0.15;
		let totalCost = baseCost + tax;
		outputBox.innerHTML =
		  "Base cost: $" +
		  baseCost.toFixed(2) +
		  "<br>" +
		  "Tax: $" +
		  tax.toFixed(2) +
		  "<br>" +
		  "Total cost: $" +
		  totalCost.toFixed(2);
	  } else if (items >= 1000) {
		let baseCost = items * 3;
		let tax = baseCost * 0.15;
		let totalCost = baseCost + tax;
		outputBox.innerHTML =
		  "Base cost: $" +
		  baseCost.toFixed(2) +
		  "<br>" +
		  "Tax: $" +
		  tax.toFixed(2) +
		  "<br>" +
		  "Total cost: $" +
		  totalCost.toFixed(2);
	  }
	} else {
	  entry.value = "";
	  let output = document.createElement("p");
	  output.innerHTML =
		"Instructions: At a certain courier company, shipping costs (not including tax) are $5/item for fewer than 100 items, $4/item for between 100 and 1,000 items, and $3/item for more than 1,000 items. Ask the user how many items to ship. Display the base cost, a 15% tax, and the total cost.";
	  outputBox.appendChild(output);
	}
	outputBox.appendChild(output);
  }