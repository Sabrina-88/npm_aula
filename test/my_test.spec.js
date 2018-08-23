const chai = require('chai')// iniciar o chai
const letterFunctions = require('../letter_functions');
const isVowel = letterFunctions.isVowel;
const isConso = letterFunctions.isConsonant;
const expect = chai.expect; // seguir exemplo do site EXPECT

describe('isVowel()', () =>{ //describe nome da funcao
	it ('Deveria retornar true para letra a', () => {// primeiro parametrodo it é a string do teste e o segundo paramentro é a funcao
		expect(isVowel('a')).to.equal(true);
		});// teste 1
	it ('Deveria retornar false para letra b', () => {// primeiro parametrodo it é a string do teste e o segundo paramentro é a funcao
		expect(isVowel('b')).to.equal(false);
		});// teste 2
	it ('Deveria retornar true para letra e', () => {// primeiro parametrodo it é a string do teste e o segundo paramentro é a funcao
		expect(isVowel('e')).to.equal(true);
		});// teste 3
		it ('Deveria retornar false para letra z', () => {// primeiro parametrodo it é a string do teste e o segundo paramentro é a funcao
		expect(isVowel('z')).to.equal(false);
		});
		});
		
		
describe ('isConsonant()', () =>{
	it ('Deveria retornar verdadeiro para B', () => {
		expect (isConso('B')).to.equal(true);
	});			
	it ('Deveria retornar falso para A', () => {
		expect (isConso('A')).to.equal(false);
	});	
		
		})