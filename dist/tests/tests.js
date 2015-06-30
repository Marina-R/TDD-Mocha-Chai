var expect = chai.expect;

describe('max', function() {
	it('should exist', function() {
		expect(max).to.not.be.undefined;
	});
	it('should accept numbers only', function() {
		expect(max(1, 2)).to.be.a('number');
	});
	it('should return the bigger number', function() {
		expect(max(1, 4)).to.equal(4);
		expect(max(3.5, 4)).to.equal(4);
		expect(max(-1, 4)).to.equal(4);
		expect(max(4, 4)).to.equal(4);
	});
})

describe('maxOfThree', function() {
	it('should exist', function() {
		expect(maxOfThree).to.not.be.undefined;
	});
	it('should accept numbers only', function() {
		expect(maxOfThree(1, 2, 3)).to.be.a('number');
	});
	it('should return the biggest number of three', function() {
		expect(maxOfThree(1, 4, -1)).to.equal(4);
		expect(maxOfThree(3.5, 4, 0)).to.equal(4);
		expect(maxOfThree(-1, 4, 5.3)).to.equal(5.3);
		expect(maxOfThree(4, 4, 4)).to.equal(4);
	});
})

describe('isVowel', function() {
	it('should exist', function() {
		expect(isVowel).to.not.be.undefined;
	});
	it('should accept strings only', function() {
		expect(isVowel('a')).to.be.a('boolean');
	});
	it('should return true if the input is a vowel letter, and false otherwise', function() {
		expect(isVowel('a')).to.be.true;
		expect(isVowel('E')).to.be.true;
		expect(isVowel('b')).to.be.false;
		expect(isVowel('B')).to.be.false;
	});
})

describe('rovarspraket', function() {
	it('should exist', function() {
		expect(rovarspraket).to.not.be.undefined;
	});
	it('should take only strings as arguments', function() {
		expect(rovarspraket('hey')).to.be.a('string');
	});
	it('should return an input string translated into rovarspraket', function() {
		expect(rovarspraket('abba')).to.equal('abobboba');
		expect(rovarspraket('boo')).to.equal('boboo');
	});
})
// !! in-class solution
// 	describe('rovarsprocket', function() {
//     it('should exist', function() {
//         expect(rovarsprocket).to.not.be.undefined;
//     });
//     it('should not accept non-string input', function() {
//         expect(function() {rovarsprocket([1,2,3])}).to.throw('You can only pass a string into this function.');
//     });
//     it('should accept string input', function() {
//         expect(function() {rovarsprocket('test')}).to.not.throw('You can only pass a string into this function.');
//     });
	// it('should replace alakazam with alolakokazozamom', function() {
	// 		expect(rovarsprocket('alakazam')).to.equal('alolakokazozamom');
	// });
	// it('should not accept strings with non-alphabetic characters', function() {
	// 		expect(function() {rovarsprocket('s1eepy')}).to.throw('You can only pass an alphabetic string into this function.');

// });

describe('sum', function () {
	it('should exist', function() {
		expect(sum).to.not.be.undefined;
	});
	it('should take only array as an argument', function() {
		expect([1,2,3]).to.be.instanceof(Array);
	});
	it('should accept only an array of numbers', function() {
		expect(function() { sum(['a', 3]) }).to.throw('Invalid Input');
		expect(function() { sum(['a', true]) }).to.throw('Invalid Input');
		expect(function() { sum(['a', 3, 'B']) }).to.throw('Invalid Input');
		expect(function() { sum([2, 3, 3.3]) }).to.not.throw('Invalid Input');
	});
	it('should add numbers in array', function() {
		expect(sum([4, 3, 2])).to.equal(9);
		expect(sum([2.1, 3])).to.equal(5.1);
	});
})

describe('multiply', function () {
	it('should exist', function() {
		expect(multiply).to.not.be.undefined;
	});
	it('should take only array as an argument', function() {
		expect([1,2,3]).to.be.instanceof(Array);
	});
	it('should accept only an array of numbers', function() {
		expect(function() { multiply(['a', 3]) }).to.throw('Invalid Input');
		expect(function() { multiply(['a', true]) }).to.throw('Invalid Input');
		expect(function() { multiply(['a', 3, 'B']) }).to.throw('Invalid Input');
		expect(function() { multiply([2, 3, 3.3]) }).to.not.throw('Invalid Input');
	});
	it('should multiply numbers in an array', function() {
		expect(multiply([4, 3, 2])).to.equal(24);
		expect(multiply([2.1, 3])).to.be.closeTo(6.3, 0.00001);
	});
})

describe('reverse', function () {
	it('should exist', function() {
		expect(reverse).to.not.be.undefined;
	});
	it('should take only a string as an argument', function() {
		expect(reverse('hello world')).to.be.a('string');
	});
	it('should take only a string with a length more then one', function() {
		expect(reverse('hello')).to.have.length.above(1);
	});
	it('should reverse letters in a string', function() {
		expect(reverse('hello')).to.equal('olleh');
		expect(reverse('hi there')).to.equal('ereht ih');
	});
})

describe('findLongestWord', function () {
	it('should exist', function() {
		expect(findLongestWord).to.not.be.undefined;
	});
	it('should take only array as an argument', function() {
		expect([1, 'a']).to.be.instanceof(Array);
	});
	it('should accept only an array of strings', function() {
		expect(function() { findLongestWord(['a', 3]) }).to.throw('Invalid Input');
		expect(function() { findLongestWord(['a', true]) }).to.throw('Invalid Input');
		expect(function() { findLongestWord(['abc', 3, 'Boo']) }).to.throw('Invalid Input');
		expect(function() { findLongestWord(['hi', 'there']) }).to.not.throw('Invalid Input');
	});
	it('should take only array with a length more then one', function() {
		expect(['hello', 'how', 'are', 'you']).to.have.length.above(1);
	});
	it('should find the longest word in an array', function() {
		expect(findLongestWord(['hello', 'you'])).to.equal('hello');
		expect(findLongestWord(['hi', 'there'])).to.equal('there');
	});
})

describe('filterLongWords', function () {
	it('should exist', function() {
		expect(filterLongWords).to.not.be.undefined;
	});
	it('should accept an array of strings and a number', function() {
		expect(function() { filterLongWords(['abc'], 2) }).to.throw('Invalid Input');
		expect(function() { filterLongWords(['abc', true], 1) }).to.throw('Invalid Input');
		expect(function() { filterLongWords(['abc', 3, 'Boo']) }).to.throw('Invalid Input');
		expect(function() { filterLongWords(['hi', 'there'], 2) }).to.not.throw('Invalid Input');
	});
	it('should filter words which length is more then i', function() {
		expect(filterLongWords(['hello', 'you'], 3)).to.deep.equal(['hello']);
		expect(filterLongWords(['hi', 'there', 'how', 'are', 'you'], 2)).to.deep.equal(['there', 'how', 'are', 'you']);
	});
})

describe('charFreq', function () {
	it('should exist', function() {
		expect(charFreq).to.not.be.undefined;
	});
	it('should take only a string as an argument', function() {
		expect('hello world').to.be.a('string');
	});
	it('should not accept an empty string', function() {
		expect(function() { charFreq('abc') }).to.not.throw('Invalid Input');
		expect(function() { charFreq('') }).to.throw('Invalid Input');
	});
	it('should return an object with a list of characters that appears in a string and the number of times the appear', function() {
		expect(charFreq('hello')).to.equal('h:1, e:1, l:2, o:1');
	});
})

