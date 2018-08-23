// is_Vowel
exports.isVowel = function(char){
	return ['a', 'e','i', 'o', 'u'].indexOf(char) > -1;
	
	}// sempre exportar
	
	exports.isConsonant = function(char){
		return ['B', 'C', 'D'].indexOf(char) > -1;
		}