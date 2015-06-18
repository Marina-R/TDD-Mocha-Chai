function max (num1, num2) {
	'use strict';
	if(num1>num2) {
		return num1;
	} else {
		return num2;
	}
}

function maxOfThree(num1, num2, num3) {
	'use strict';
	if (num1>num2 && num1>num3) {
		return num1;
	} else if (num2>num1 && num2>num3) {
		return num2;
	} else return num3;
}

function isVowel (letter) {
	'use strict';
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	for(var i=0; i<vowels.length; i++) {
		if (letter.toLowerCase() == vowels[i]) {
			return true;
		} 
	}
	return false;
}

function rovarspraket (phrase) {
	'use strict';
	var newPhrase = [];
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	for(var i=0; i<phrase.length; i++){
		if (phrase.charAt(i).toLowerCase() == 'a' || phrase.charAt(i).toLowerCase() == 'e' ||
			phrase.charAt(i).toLowerCase() == 'i' || phrase.charAt(i).toLowerCase() == 'o' ||
			phrase.charAt(i).toLowerCase() == 'u') {

			newPhrase.push(phrase.charAt(i).toLowerCase());
		} else if (phrase.charAt(i).toLowerCase() == ' ') {
			newPhrase.push('');
		} else {
			newPhrase.push(phrase.charAt(i).toLowerCase()+ 'o' + phrase.charAt(i).toLowerCase());
		}
	}
	newPhrase = newPhrase.join('');
	return newPhrase;
}

//  in-class colution!!! 
// function rovarsprocket(string) {
// 	if(typeof string !== 'string') {
// 		throw 'You can only pass a string into this function.';
// 	}

// 	var vowels = 'aeiouAEIOU';
// 	var resultString = '';

// 	for(var i=0; i<string.length; i++) {
// 		var currentCharacter = string.charAt(i);
// 		if(!validator.isAlpha(currentCharacter)) {
// 			throw 'You can only pass an alphabetic string into this function.';
// 		}
// 		if(vowels.indexOf(currentCharacter) !== -1) {
// 			resultString += currentCharacter;
// 		}
// 		else {
// 			resultString += currentCharacter + 'o' + currentCharacter;
// 		}
// 	}
// 	return resultString;
// }

function sum (arrayOfNums) {
	'use strict';
	if(arrayOfNums instanceof Array !== true) {
		throw 'Invalid Input';
	} else if (arrayOfNums.length<2){
		throw 'Invalid Input';
	}
	for(var j=0; j<arrayOfNums.length; j++) {
		if (typeof arrayOfNums[j] !== 'number') {
			throw 'Invalid Input';
		}
	}
	var result = 0;
	for(var i=0; i<arrayOfNums.length; i++) {
		result+= arrayOfNums[i];
	}
	return result;
}

function multiply (arrayOfNums) {
	'use strict';
	if(arrayOfNums instanceof Array !== true) {
		throw 'Invalid Input';
	} else if (arrayOfNums.length<2){
		throw 'Invalid Input';
	}
	for(var j=0; j<arrayOfNums.length; j++) {
		if (typeof arrayOfNums[j] !== 'number') {
			throw 'Invalid Input';
		}
	}
	var result = 1;
	for(var i=0; i<arrayOfNums.length; i++) {
		result *= arrayOfNums[i];
	}
	return result;
}

function reverse (string) {
	'use strict';
	var reverse = [];
	for(var i=0; i<string.length; i++) {
		reverse.unshift(string[i]);
	}
	return reverse.join('');
}

function findLongestWord (arrayOfStrings) {
	'use strict';
	if(arrayOfStrings instanceof Array !== true) {
		throw 'Invalid Input';
	} else if (arrayOfStrings.length<2){
		throw 'Invalid Input';
	}
	for(var j=0; j<arrayOfStrings.length; j++) {
		if (typeof arrayOfStrings[j] !== 'string') {
			throw 'Invalid Input';
		}
	}
	var result = arrayOfStrings.sort(function(a, b) {return a.length - b.length} );
	return result[result.length-1];
}

function filterLongWords (arrayOfStrings, i) {
	'use strict';
	if(arrayOfStrings instanceof Array !== true) {
		throw 'Invalid Input';
	} else if (arrayOfStrings.length < 2){
		throw 'Invalid Input';
	} else if (typeof i !== 'number') {
		throw 'Invalid Input';
	} 
	var result = [];

	for(var j=0; j<arrayOfStrings.length; j++) {
		if (typeof arrayOfStrings[j] !== 'string') {
			throw 'Invalid Input';
		} else if(arrayOfStrings[j].length > i) {
			result.push(arrayOfStrings[j]);
		}
	}
	return result;
}

function charFreq (string) {
	'use strict';
	if (typeof string !== 'string') {
		throw 'Invalid Input';
	} else if (string == '') {
		throw 'Invalid Input';
	} 
	var array = []
	var obj = {};
	for(var i=0; i<string.length; i++) {
		var letter = string[i];
		var count = 0;
		for(var j=0; j<string.length; j++) {
			if (string[j] == letter) {
				count ++;
			}
		}
		obj[letter] = count;
	}
	for (var prop in obj) {
		array.push(prop + ':' + obj[prop]);
	}
	array = array.join(', ');
	return array;
}
