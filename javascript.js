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

	let secondEntry = document.querySelector(
		'#inputBox #userEntry:nth-of-type(2)'
	);
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
	let outputBox = document.querySelector('#outputBox2');
	outputBox.innerHTML = '<h4>Output box</h4>';

	let input = document.querySelector('#userEntry').value;

	if (input !== '') {
		let values = input.split(',').map(Number);
		let count = values.length;
		let total = values.reduce((a, b) => a + b, 0);
		let average = total / count;
		let smallest = Math.min(...values);
		let largest = Math.max(...values);

		document.querySelector('#numOfValues').textContent =
			'Number of values: ' + count;
		document.querySelector('#total').textContent = 'Total: ' + total;
		document.querySelector('#average').textContent = 'Average: ' + average;
		document.querySelector('#smallest').textContent = 'Smallest: ' + smallest;
		document.querySelector('#largest').textContent = 'Largest: ' + largest;
	} else {
		let output = document.createElement('a');
		output.innerHTML =
			'Instructions: Ask the user for a comma-separated set of numeric values. Display the number of values entered, the total, the average, the smallest value, and the largest value.';
		outputBox.appendChild(output);
	}
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
	let numBoxes = Math.floor(numBars / 24);
	let numSingles = numBars % 24;
	let costBoxes = numBoxes * singleBoxCost;
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
		output.innerHTML += 'Cost of Boxes: ' + costSingles;
		output.innerHTML += '<br>';
		output.innerHTML += 'Total Cost: ' + totalCost;
		outputBox.appendChild(output);
	} else {
		let output = document.createElement('p');
		output.innerHTML =
			'Instructions: Enter a number of snicker bars to order. Note: Order quantity must be greater than 1!';
		outputBox.appendChild(output);
	}
	document.querySelector('#snickersAmountInput').value = '';
}
//Exercise 11
//User enters a sentence, presses submit which then prints a histogram showing a string of asterisks which represent each word in the sentence.
function histogramGenerator() {
	let inputField = document.querySelector('#inputBoxEleven #histogramInput');
	let outputBox = document.querySelector('#outputBoxEleven');

	outputBox.innerHTML = '<h4>Output Box</h4>';

	let sentence = inputField.value;

	if (sentence !== '') {
		let words = sentence.split(' ');
		let histogram = '';

		for (let word of words) {
			let asterisks = '';
			for (let i = 0; i < word.length; i++) {
				asterisks += '*';
			}
			histogram += asterisks + '<br>';
		}

		outputBox.innerHTML += histogram;
	} else {
		let outputMessage = document.createElement('p');
		outputMessage.innerHTML = 'Instructions: Please input a sentence.';
		outputBox.appendChild(outputMessage);
	}

	inputField.value = '';
}

function binaryToBaseTen() {
	let outputBox = document.querySelector('#outputBoxNine');
	outputBox.innerHTML = '<h4>Output box</h4>';

	let entry = document.querySelector('#inputBoxNine #userEntry:first-of-type');
	let value = entry.value;
	let number = 0;
	let exponant = 0;
	let responseOne = '';
	let responseTwo = '';

	if (value !== '') {
		for (let i = value.length - 1; i >= 0; i--) {
			let digit = value.charAt(i);
			if (digit !== '0' && digit !== '1') {
				output = document.createElement('p');
				output.innerHTML = 'Please enter a valid binary number.';
				outputBox.appendChild(output);
				entry.value = '';
				return;
			}
			if (digit === '1') {
				number += Math.pow(2, exponant);
				responseOne = '2^' + exponant + '+' + responseOne;
				responseTwo = Math.pow(2, exponant) + '+' + responseTwo;
			}
			exponant++;
		}
		responseOne = responseOne.substring(0, responseOne.length - 1);
		responseTwo = responseTwo.substring(0, responseTwo.length - 1);

		output = document.createElement('p');
		output.innerHTML =
			value + ' = ' + responseOne + ' = ' + responseTwo + ' = ' + number;
		outputBox.appendChild(output);
		entry.value = '';
	} else {
		let output = document.createElement('p');
		output.innerHTML = 'Instructions: Please enter a valid binary number.';
		outputBox.appendChild(output);
	}
}

function minCharacterString() {
	let outputBox = document.querySelector('#outputBoxTwelve');
	outputBox.innerHTML = '<h4>Output box</h4>';

	let entryNum = document.querySelector(
		'#inputBoxTwelve #userEntry:first-of-type'
	);
	let valueNum = entryNum.value;
	let entryString = document.querySelector(
		'#inputBoxTwelve #userEntry:nth-of-type(2)'
	);
	let valueString = entryString.value;
	let seperatedString = valueString.split(' ');
	let resultString = '';

	if (valueNum > 0 && valueString !== '') {
		for (i = 0; i < seperatedString.length; i++) {
			if (seperatedString[i].length >= valueNum) {
				resultString += seperatedString[i] + ' ';
			}
		}
		let output = document.createElement('p');
		output.innerHTML = 'Result: ' + resultString;
		outputBox.appendChild(output);
	} else {
		output = document.createElement('p');
		output.innerHTML =
			'Instructions: Please enter a number greater then 0, and a string.';
		outputBox.appendChild(output);
	}
}

function compareArrays() {
	let outputBox = document.querySelector('#outputBoxThirteen');
	outputBox.innerHTML = '<h4>Output box</h4>';

	let firstArray = document.querySelector(
		'#inputBoxThirteen #userEntry:first-of-type'
	);
	let firstSplitArray = firstArray.value.split(',');
	let secondArray = document.querySelector(
		'#inputBoxThirteen #userEntry:nth-of-type(2)'
	);
	let secondSplitArray = secondArray.value.split(',');
	let result = 0;

	if (
		firstArray.value !== '' &&
		secondArray.value !== '' &&
		firstSplitArray.length === secondSplitArray.length
	) {
		for (i = 0; i < firstSplitArray.length; i++) {
			result +=
				parseInt(firstSplitArray[i]) + parseInt(secondSplitArray[i]) + ', ';
		}
		result = result.slice(1, -2);
		let output = document.createElement('p');
		output.innerHTML = 'Results: ' + result;
		outputBox.appendChild(output);
	} else {
		output = document.createElement('p');
		output.innerHTML =
			'Instructions: Please enter two arrays of numbers seperated by commas. Ensure both arrays are the same length.';
		outputBox.appendChild(output);
	}
}
