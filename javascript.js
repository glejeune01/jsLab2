//This function runs as soon as the page is loaded
window.onload = function () {
	//Variables for buttons and exercise containers
	let selectedButton;
	let buttons = document.querySelectorAll('button');
	let exerciseContainer =
		document.getElementsByClassName('exerciseContainer')[0];
	let allExerciseDivs = exerciseContainer.getElementsByClassName('exerciseBox');
	//Loop to hide all exercise contents on page load
	for (let i = 0; i < allExerciseDivs.length; i++) {
		allExerciseDivs[i].classList.add('hide');
	}

	buttons.forEach(function (button) {
		if (button.id !== 'process') {
			button.addEventListener('click', function () {
				for (let i = 0; i < allExerciseDivs.length; i++) {
					//Loop to add the hidden class on page load
					allExerciseDivs[i].classList.add('hide');
				}

				let targetDivId = button.getAttribute('data-target');
				let displayDiv = document.getElementById(targetDivId);
				//Display active exercise and remove from hidden
				displayDiv.classList.remove('hide');
				//Target the button in use
				selectedButton = targetDivId;
			});
		}

		button.addEventListener('click', function () {
			//Switch case to determine which button is pressed, all exercises share the same button
			//But a different function is used depending on the exercise. Also ensures process button is checked to execute functions.
			if (button.id == 'process') {
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
						triangles();
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
			}
		});
	});
};
//Exercise 1
//User enters a minimum and maximum value and display then outputs
//All numbers betwen the range seperated by commas
function minMaxRange() {
	let outputBox = document.querySelector('#outputBox');

	outputBox.innerHTML = '<h4>Output box</h4>';
	//Variables for user entry one
	let firstEntry = document.querySelector('#inputBox #userEntry:first-of-type');
	let firstValue = parseInt(firstEntry.value);
	//Variable for user entry two
	let secondEntry = document.querySelector(
		'#inputBox #userEntry:nth-of-type(2)'
	);
	let secondValue = parseInt(secondEntry.value);

	if (firstEntry.value !== '' && secondEntry.value !== '') {
		//If values are not empty strings
		let diffValue = secondValue - firstValue;
		let newNumber;
		let finalPrintout = firstValue.toString();

		for (let i = 1; i <= diffValue; i++) {
			//Loop through values between min and max and seperated with commas
			newNumber = firstValue + i;
			finalPrintout += ', ' + newNumber.toString();
		}
		//Display results to the output box and reset inputs
		let output = document.createElement('p');
		output.innerHTML = 'Result: ' + finalPrintout;
		outputBox.appendChild(output);
		firstEntry.value = '';
		secondEntry.value = '';
	} else {
		//Display the instructions for the exercise in the output box
		let output = document.createElement('p');
		output.innerHTML =
			'Instructions: Please enter two numbers. Max must be greater then min.';
		outputBox.appendChild(output);
	}
}
//Exercise 2
//User enters comma-seperated numerical values and displays
//The number of values, total, average, smallest and largest value
function comSepValues() {
	let outputBox = document.querySelector('#outputBoxTwo');
	outputBox.innerHTML = '<h4>Output box</h4>';
	//Variable for user entry
	let entry = document.querySelector('#inputBoxTwo #userEntry');
	let value = entry.value;
	//If value is not an empty string
	if (value !== '') {
		//Capture values between commas
		let values = value.split(',').map(Number);
		//Count of total number of numbers
		let count = values.length;
		//Add numbers together
		let total = values.reduce((a, b) => a + b, 0);
		//Get average of numbers
		let average = (total / count).toFixed(2);
		//Get smallest and largest numbers
		let smallest = Math.min(...values);
		let largest = Math.max(...values);
		//Display results in output box
		let output = document.createElement('p');
		outputBox.innerHTML =
			'Number of values: ' +
			count +
			'<br>' +
			'Total: ' +
			total +
			'<br>' +
			'Average: ' +
			average +
			'<br>' +
			'Smallest: ' +
			smallest +
			'<br>' +
			'Largest: ' +
			largest;
		outputBox.appendChild(output);
	} else {
		//Display instructions for exercise
		let output = document.createElement('p');
		output.innerHTML =
			'Instructions: Ask the user for a comma-separated set of numeric values. Display the number of values entered, the total, the average, the smallest value, and the largest value.';
		outputBox.appendChild(output);
	}
	//Clear input values
	entry.value = '';
}
//Exercise 3
//User enters comma seperated values then enters a number to query for,
//and then displays the count of that number
function numberOfMatchingKeys() {
	let outputBox = document.querySelector('#outputBoxThree');

	outputBox.innerHTML = '<h4>Output box</h4>';
	//Variable for user entry one
	let firstEntry = document.querySelector(
		'#inputBoxThree #userEntry:first-of-type'
	);
	let firstValues = firstEntry.value;
	//Variable to seperate values with comma
	let commaSeperate = firstValues.split(',');
	//Variable for user entry two
	let secondEntry = document.querySelector(
		'#inputBoxThree #userEntry:nth-of-type(2)'
	);
	//Variable to query for number within first entry
	let keyValue = secondEntry.value.toString();
	//If values are not an empty string
	if (firstValues !== '' && keyValue !== '') {
		let count = 0;
		//Loop through comma seperated entry to count number of times value appears
		for (let i = 0; i < commaSeperate.length; i++) {
			if (commaSeperate[i] === keyValue) {
				count++;
			}
		}
		//Display results to output box
		let output = document.createElement('p');
		output.innerHTML = 'Result: ' + count;
		outputBox.appendChild(output);
		//Clear input boxes
		firstEntry.value = '';
		secondEntry.value = '';
	} else {
		//Display the instructions for the exercise
		let output = document.createElement('p');
		output.innerHTML =
			'Instructions: Please enter comma seperated numbers, then a key number to query for the count.';
		outputBox.appendChild(output);
	}
}
//Exercise 4
//User enters a numerical value and then is displayed a string of sequential
//stars equal to the number
function numStars() {
	let outputBox = document.querySelector('#outputBoxFour');
	outputBox.innerHTML = '<h4>Output box</h4>';
	//Variable for user entry
	let entry = document.querySelector('#inputBoxFour #userEntry:first-of-type');
	let value = entry.value;
	//If value is not an empty string
	if (value !== '') {
		let starString = '';
		//Loop through number adding a series of stars equalling the value
		for (i = 0; i < value; i++) {
			starString += '*';
		}
		//Display results to the output box
		let output = document.createElement('p');
		output.innerHTML = 'Result: ' + starString;
		outputBox.appendChild(output);
		//Clear the input box
		entry.value = '';
	} else {
		//Display the instructions for the exercise
		entry.value = '';
		let output = document.createElement('p');
		output.innerHTML =
			'Instructions: Please enter a number to turn into stars.';
		outputBox.appendChild(output);
	}
}
//Exercise 5
//User enters the number of stars to print and a maximum amount for
//sequential stars on a line
function starPrinter() {
	let outputBox = document.querySelector('#outputBoxFive');

	outputBox.innerHTML = '<h4>Output Box</h4>';
	//Variables for user entries
	let numStars = document.querySelector(
		'#inputBoxFive #userEntry:first-of-type'
	).value;
	let maxStars = document.querySelector(
		'#inputBoxFive #userEntry:nth-of-type(2)'
	).value;
	//If condition met loop through num of stars and output * string
	if (numStars >= 1 && maxStars >= 1) {
		let output = '';
		for (let i = 1; i <= numStars; i++) {
			output += '*';
			//Begin on a new line if max number of stars reached on a line

			if (i % maxStars === 0) {
				output += '<br>';
			}
		}
		//Display results to the output box
		document.querySelector('#outputBoxFive').innerHTML += output;
		maxStars.value = '';
		numStars.value = '';
	} else {
		//Display instructions for the exercise
		let output = document.createElement('p');
		output.innerHTML =
			'Instructions: Please input a total number of stars, and a max number of stars per line';
		outputBox.appendChild(output);
	}
	//Clear input boxes
	document.querySelector('#inputBoxFive #userEntry:first-of-type').value = '';
	document.querySelector('#inputBoxFive #userEntry:nth-of-type(2)').value = '';
}
//Exercise 6
//User enters a string and is displayed the number of vowels
//and returns a string with the vowels replaced by stars
function vowelReplace() {
	let outputBox = document.querySelector('#outputBoxSix');
	outputBox.innerHTML = '<h4>Output box</h4>';
	//Variable for user entry
	let entry = document.querySelector('#inputBoxSix #userEntry:first-of-type');
	let value = entry.value;
	//If value is not an empty string
	if (value !== '') {
		//Declare vowels to check for
		let vowels = 'aeiouAEIOU';
		let newStringOutput = '';
		let vowelCount = 0;
		//Loop through string and replace vowels with *'s and add to vowel count
		for (let i = 0; i < value.length; i++) {
			if (vowels.indexOf(value[i]) !== -1) {
				newStringOutput += '*';
				vowelCount++;
			} else {
				newStringOutput += value[i];
			}
		}
		//Display vowel count to output box
		let countDisplay = document.createElement('p');
		countDisplay.innerHTML = 'Number of Vowels:' + vowelCount;
		outputBox.appendChild(countDisplay);
		//Display result to output box
		let resultDisplay = document.createElement('p');
		resultDisplay.innerHTML = 'Result:' + newStringOutput;
		outputBox.appendChild(resultDisplay);
		//Clear the input box
		entry.value = '';
	} else {
		//Display the instructions for the exercise in the output box
		let output = document.createElement('p');
		output.innerHTML = 'Instructions: Please enter a string.';
		outputBox.appendChild(output);
	}
}
//Exercise 7
//User enters a number of items to be shipped and is displayed
//The cost per item, taxes and total
function courierCompany() {
	let outputBox = document.querySelector('#outputBoxSeven');
	outputBox.innerHTML = '<h4>Output box</h4>';
	//Variable for user entry
	let entry = document.querySelector('#inputBoxSeven #userEntry');
	let items = entry.value;
	//If items between 2 and 100
	if (items > 1) {
		if (items <= 100) {
			//Multiply items by 5
			let baseCost = items * 5;
			//Set tax to 15%
			let tax = baseCost * 0.15;
			//Add base cost + tax
			let totalCost = baseCost + tax;
			//Display results to output box to 2 decimal places
			outputBox.innerHTML =
				'Base cost: $' +
				baseCost.toFixed(2) +
				'<br>' +
				'Tax: $' +
				tax.toFixed(2) +
				'<br>' +
				'Total cost: $' +
				totalCost.toFixed(2);
		} else if (items > 100 && items <= 1000) {
			//If items between 101 and 1000
			//Multiply items by 4
			let baseCost = items * 4;
			//Set tax to 15%
			let tax = baseCost * 0.15;
			//Add base cost + tax
			let totalCost = baseCost + tax;
			outputBox.innerHTML =
				'Base cost: $' +
				baseCost.toFixed(2) +
				'<br>' +
				'Tax: $' +
				tax.toFixed(2) +
				'<br>' +
				'Total cost: $' +
				totalCost.toFixed(2);
		} else if (items >= 1000) {
			//If items greater than 999
			//Multiply items by 3
			let baseCost = items * 3;
			//Set tax to 15%
			let tax = baseCost * 0.15;
			//Add base cost + tax
			let totalCost = baseCost + tax;
			//Display results to output box
			outputBox.innerHTML =
				'Base cost: $' +
				baseCost.toFixed(2) +
				'<br>' +
				'Tax: $' +
				tax.toFixed(2) +
				'<br>' +
				'Total cost: $' +
				totalCost.toFixed(2);
		}
	} else {
		//Clear input box
		entry.value = '';
		//Display instructions of exercise in the output box
		let output = document.createElement('p');
		output.innerHTML =
			'Instructions: At a certain courier company, shipping costs (not including tax) are $5/item for fewer than 100 items, $4/item for between 100 and 1,000 items, and $3/item for more than 1,000 items. Ask the user how many items to ship. Display the base cost, a 15% tax, and the total cost.';
		outputBox.appendChild(output);
	}
}

//Exercise 8
//User enters number of snickers bars to order and is displayed
//number of boxes, single bars, cost per box and total cost
function snickersOrder() {
	let outputBox = document.querySelector('#outputBoxEight');
	//Variables for cost of single bar and single box of bars
	outputBox.innerHTML = '<h4>Output Box</h4>';
	let singleBarCost = 1.75;
	let singleBoxCost = 32.0;
	//Variable for user entry
	let numBars = document.querySelector(
		'#inputBoxEight #userEntry:first-of-type'
	).value;
	//Formulas for variables used in exercise
	let numBoxes = parseInt(numBars / 24);
	let numSingles = numBoxes % numBars;
	let costBoxes = numBoxes / singleBoxCost;
	let costSingles = numSingles * singleBarCost;
	let totalCost = costBoxes + costSingles;
	//If value is greater than or equal to 1

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
		//Display the instructions of the exercise in the output box
		let output = document.createElement('p');
		output.innerHTML =
			'Instructions: Enter a number of snicker bars to order. Note: Order quantity must be greater than 1!';
	}
	//Clear the input box
	document.querySelector('#inputBoxEight #userEntry:first-of-type').value = '';
}

//Exercise 9
//User enters a binary number and is displayed the
//mathematical formula converting it to base 10
function binaryToBaseTen() {
	let outputBox = document.querySelector('#outputBoxNine');
	outputBox.innerHTML = '<h4>Output box</h4>';
	//Variable for user entry
	let entry = document.querySelector('#inputBoxNine #userEntry:first-of-type');
	let value = entry.value;
	//Set starting values
	let number = 0;
	let exponant = 0;
	let responseOne = '';
	let responseTwo = '';
	//If value not an empty string
	if (value !== '') {
		for (let i = value.length - 1; i >= 0; i--) {
			let digit = value.charAt(i);
			//If invalid entry display error message
			if (digit !== '0' && digit !== '1') {
				output = document.createElement('p');
				alert('Please enter a valid binary number.');
				outputBox.appendChild(output);
				//Reset input box
				entry.value = '';
				return;
			}
			if (digit === '1') {
				//If valid entry perform formula
				number += Math.pow(2, exponant);
				responseOne = '2^' + exponant + '+' + responseOne;
				responseTwo = Math.pow(2, exponant) + '+' + responseTwo;
			}
			//Add to exponent count
			exponant++;
		}
		responseOne = responseOne.substring(0, responseOne.length - 1);
		responseTwo = responseTwo.substring(0, responseTwo.length - 1);
		//Display results to output box

		output = document.createElement('p');
		output.innerHTML =
			value + ' = ' + responseOne + ' = ' + responseTwo + ' = ' + number;
		outputBox.appendChild(output);
		//Clear input box
		entry.value = '';
	} else {
		//Display instructions for exercise in the output box
		let output = document.createElement('p');
		output.innerHTML = 'Instructions: Please enter a valid binary number.';
		outputBox.appendChild(output);
	}
}

//Exercise 10
//User enters 3 values for angles of a triangle and is displayed
//the type of triangle it is, ie, right, acute or obtuse
function triangles() {
	let outputBox = document.querySelector('#outputBoxTen');
	outputBox.innerHTML = '<h4>Output box</h4>';
	//Variables for user entries
	let firstEntry = document.querySelector(
		'#inputBoxTen #userEntry:first-of-type'
	);
	let firstAngle = parseInt(firstEntry.value);

	let secondEntry = document.querySelector(
		'#inputBoxTen #userEntry:nth-of-type(2)'
	);
	let secondAngle = parseInt(secondEntry.value);

	let thirdEntry = document.querySelector(
		'#inputBoxTen #userEntry:nth-of-type(3)'
	);
	let thirdAngle = parseInt(thirdEntry.value);
	let sum = firstAngle + secondAngle + thirdAngle;

	if (sum !== 180 || !firstAngle || !secondAngle || !thirdAngle) {
		//If values are empty strings or missing values
		alert('Angles must sum to 180 and you must enter a number in each field.');
	}
	//check if values = the ruleset of the makeup of different types of triangles
	else if (firstAngle == 90 || secondAngle == 90 || thirdAngle == 90) {
		//Output result
		outputBox.innerHTML = 'Right Triangle';
		//Clear entries
		firstEntry.value = '';
		secondEntry.value = '';
		thirdEntry.value = '';
	} else if (firstAngle > 90 || secondAngle > 90 || thirdAngle > 90) {
		//Output result
		outputBox.innerHTML = 'Obtuse Angle';
		//Clear entries
		firstEntry.value = '';
		secondEntry.value = '';
		thirdEntry.value = '';
	} else {
		outputBox.innerHTML = 'Acute Angle';
		//Output result
		//Clear entries
		firstEntry.value = '';
		secondEntry.value = '';
		thirdEntry.value = '';
	}
}

//Exercise 11
//User enters a sentence and is displayed a histogram with star
//value and number letters associated with that star value
function histogramGenerator() {
	let inputField = document.querySelector(
		'#inputBoxEleven #userEntry:first-of-type'
	);
	let outputBox = document.querySelector('#outputBoxEleven');

	outputBox.innerHTML = '<h4>Output Box</h4>';
	//Variables for user entry
	let sentence = inputField.value;
	if (sentence !== '') {
		let words = sentence.split(' ');
		//Seperate words with a space
		let histogram = '';
		//If sentence entered count number of character per word with *s

		for (let word of words) {
			let asterisks = '';
			for (let i = 0; i < word.length; i++) {
				asterisks += '*';
			}
			histogram += asterisks + '<br>';
		}
		//Display results to output box

		outputBox.innerHTML += histogram;
	} else if (sentence == '') {
		//Display alert incdicating corrent user input.
		alert('Instructions: Please input a sentence.');
	}

	inputField.value = '';
}

//Exercise 12
//User enters a minimum character length for a word then writes a sentence
//and is displayed any word that is at that minimum character length
function minCharacterString() {
	let outputBox = document.querySelector('#outputBoxTwelve');
	outputBox.innerHTML = '<h4>Output box</h4>';
	//Variables for user entries

	let entryNum = document.querySelector(
		'#inputBoxTwelve #userEntry:first-of-type'
	);
	let valueNum = entryNum.value;
	let entryString = document.querySelector(
		'#inputBoxTwelve #userEntry:nth-of-type(2)'
	);
	let valueString = entryString.value;
	//New words start after a space
	let seperatedString = valueString.split(' ');
	let resultString = '';

	if (valueNum > 0 && valueString !== '') {
		//If value is valid and not an empty string
		for (i = 0; i < seperatedString.length; i++) {
			//Loop through string to determine words with matching entry length
			if (seperatedString[i].length >= valueNum) {
				resultString += seperatedString[i] + ' ';
			}
		}
		//Display results to the output box
		let output = document.createElement('p');
		output.innerHTML = 'Result: ' + resultString;
		outputBox.appendChild(output);
	} else if (valueNum < 0) {
		//Display error message if the minimum word length is less than zero.
		alert('Instructions: Please enter a number greater then 0, and a string.');
	}
}
//Exercise 13
//Gathers values from two arrays of the same length
//Adds the values that are in the same position together
function compareArrays() {
	//preparing the output box
	let outputBox = document.querySelector('#outputBoxThirteen');
	outputBox.innerHTML = '<h4>Output box</h4>';
	//gathers input from userEntry boxes and splits into two arrays
	let firstArray = document.querySelector(
		'#inputBoxThirteen #userEntry:first-of-type'
	);
	let firstSplitArray = firstArray.value.split(',');
	let secondArray = document.querySelector(
		'#inputBoxThirteen #userEntry:nth-of-type(2)'
	);
	let secondSplitArray = secondArray.value.split(',');
	//initializing result as 0
	let result = 0;

	if (
		firstArray.value !== '' &&
		secondArray.value !== '' &&
		firstSplitArray.length === secondSplitArray.length
	) {
		//loops through the arrays and adds the values in i position
		for (i = 0; i < firstSplitArray.length; i++) {
			result +=
				parseInt(firstSplitArray[i]) + parseInt(secondSplitArray[i]) + ', ';
		}
		//getting rid of some extraneous operator symbols
		result = result.slice(1, -2);
		//prints result to output box
		let output = document.createElement('p');
		output.innerHTML = 'Results: ' + result;
		outputBox.appendChild(output);
	} else if (firstSplitArray.length !== secondSplitArray.length) {
		//provides user with instructions if conditions aren't met
		alert(
			'Instructions: Please enter two arrays of numbers seperated by commas. Ensure both arrays are the same length.'
		);
	}
}
