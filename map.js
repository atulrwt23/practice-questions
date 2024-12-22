// squares of [1, 2, 3] => [1, 4, 9]
const square = function (num) {
  return num * num;
};

const squaresOf = function (numbers) {
  return numbers.map(square);
};

// lengths of ["apple", "banana", "kiwi"] => [5, 6, 4]
const countLength = function (text) {
  return text.length;
};

const lengthsOf = function (strings) {
  return strings.map(countLength);
};

// uppercase of ["hello", "world"] => ["HELLO", "WORLD"]
const UPPERCASE = function (text) {
  return text.toUpperCase();
};

const uppercaseOf = function (strings) {
  return strings.map(UPPERCASE);
};

// first characters of ["apple", "banana", "kiwi"] => ["a", "b", "k"]
const extractStr = function (index) {
  return function (text) {
    return text.at(index);
  };
};

const firstCharactersOf = function (strings) {
  return strings.map(extractStr(0));
};

// truth values of [0, 1, 2, 3] => [false, true, true, true]
// Assume non-zero numbers are true, and zero is false
const booleanOf = function (num) {
  return num !== 0;
};

const truthValuesOf = function (numbers) { 
  return numbers.map(booleanOf);
};

// reverse strings of ["hello", "world"] => ["olleh", "dlrow"]
const deStructure = function (text) {
  return [...text];
}

const joinArray = function (seperator) {
  return function (array) {
    return array.join(seperator);
  };
};

const reverseText = function (text) {
  return deStructure(text).reverse();
};

const reversedStringsOf = function (strings) { 
  return strings.map(reverseText).map(joinArray(""));
};

// double letters of ["cat", "dog", "bat"] => ["ccaatt", "ddoogg", "bbaatt"]
const double = function (value) {
  return value + value;
};

const twoOfEach = function (text) {
  return joinArray("")(deStructure(text).map(double));
};

const doubleLettersOf = function (strings) { 
  return strings.map(twoOfEach);
};

// boolean negation of [true, false, true] => [false, true, false]
const invert = function (boolean) {
  return !boolean;
}

const negatedBooleansOf = function (booleans) { 
  return booleans.map(invert);
};

// character codes of ["a", "b", "c"] => [97, 98, 99]
// Use the `charCodeAt` method on each string

const codeOf = function (index) {
  return function (text) {
    return text.charCodeAt(index);
  };
};

const charCodesOf = function (strings) { 
  return strings.map(codeOf(0));
};

// extract domain names from ["user1@gmail.com", "admin@yahoo.com"] => 
// ["gmail.com", "yahoo.com"]
const splitText = function (seperator) {
  return function (texts) {
    return texts.split(seperator);
  };
};

const domainNamesOf = function (emails) { 
  return emails.map(splitText("@")).map(extractStr(-1));
};

// split words in ["hello world", "goodbye moon"] => [["hello", "world"], 
// ["goodbye", "moon"]]
const splitWordsOf = function (strings) { 
  return strings.map(splitText(" "));
};

// join arrays of [["a", "b"], ["c", "d"]] => ["ab", "cd"]
const joinedArraysOf = function (arrayOfArrays) { 
  return arrayOfArrays.map(joinArray(""));
};

// repeat strings in ["hi", "bye"] => ["hihi", "byebye"]
const repeatedStringsOf = function (strings) { 
  return strings.map(double);
};

// count vowels in ["apple", "banana", "grape"] => [2, 3, 2]
const isCharVowel = function (char) {
  return "aeiou".includes(char.toLowerCase());
};

const replaceChar = function (typeOfChar) {
  return function (char) {
    return typeOfChar(char) ? char : "";
  };
};

const leaveOnly = function (typeOfChar) {
  return function (text) {
    return joinArray("")(deStructure(text).map(replaceChar(typeOfChar)));
  };
};

const countVowelsOf = function (strings) { 
  return strings.map(leaveOnly(isCharVowel)).map(countLength);
};

// reverse arrays of [[1, 2, 3], [4, 5, 6]] => [[3, 2, 1], [6, 5, 4]]
const reversedArraysOf = function (arrays) { 
  return arrays.map(reverseText);
};

// remove vowels from ["apple", "banana", "grape"] => ["ppl", "bnn", "grp"]
const isCharConsonants = function (char) {
  return !isCharVowel(char);
};

const withoutVowelsOf = function (strings) { 
  return strings.map(leaveOnly(isCharConsonants));
};

// cumulative sums of [[1, 2, 3], [4, 5, 6]] => [[1, 3, 6], [4, 9, 15]]
// Example: cumulative sum of [1, 2, 3] is [1, 1+2, 1+2+3]
const sum = function (first, second) {
  return first + second;
};

const rememberSum = function (fun, init) {
  let total = init;
  return function (value) {
    total = fun(total, value);

    return total;
  };
};

const mapper = function (fun, fnx, init) {
  return function (array) {
    return array.map(fun(fnx, init));
  };
};

const cumulativeSumsOf = function (arrays) {
  return arrays.map(mapper(rememberSum, sum, 0));
};

// reverse words in ["hello world", "goodbye moon"] => 
// ["olleh dlrow", "eybdoog noom"]
const reversedWordsOf = function (strings) {
  return strings.map(splitText(" ")).map(reversedStringsOf).map(joinArray(" "));
};

// extract unique characters from ["apple", "banana", "grape"] => 
// ["aple", "ban", "grape"]
// Maintain the order of their first appearance in each string
const isUnique = function () {
  let string = "";
  return function (char) {
    const shouldAdd = !string.includes(char);
    string = string + char;

    return shouldAdd;
  };
};

const onlyUnique = function (text) {
  return joinArray("")(deStructure(text).map(replaceChar(isUnique())));
};

const uniqueCharactersOf = function (strings) { 
  return strings.map(onlyUnique);
};

console.log(uniqueCharactersOf(["apple", "banana", "grape"]));
console.log(squaresOf([-2, -1, 0, 1, 2, 3]));
console.log(lengthsOf(["apple", "banana", "kiwi"]));
console.log(uppercaseOf(["hello", "world"]));
console.log(withoutVowelsOf(["apple", "banana", "grape"]));
console.log(reversedStringsOf(["hello", "world"]));
console.log(firstCharactersOf(["apple", "banana", "kiwi"]));
console.log(doubleLettersOf(["cat", "dog", "bat"]));
console.log(domainNamesOf(["user1@gmail.com", "admin@yahoo.com"]));
console.log(negatedBooleansOf([true, false, true]));
console.log(truthValuesOf([0, 1, 2, 3]));
console.log(charCodesOf(["a", "b", "c"]));
console.log(splitWordsOf(["hello world", "goodbye moon"]));
console.log(joinedArraysOf([["a", "b"], ["c", "d"]]));
console.log(reversedWordsOf(["hello world", "goodbye moon"]));
console.log(countVowelsOf(["apple", "banana", "grape"]));
console.log(repeatedStringsOf(["hi", "bye"]));
console.log(reversedArraysOf([[1, 2, 3], [4, 5, 6]]));
console.log(cumulativeSumsOf([[1, 2, 3], [4, 5, 6]]));
console.log = function () { };
