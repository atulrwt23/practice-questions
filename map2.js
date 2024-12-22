const generateRange = function (start) {
  return function (end) {
    const range = [];
    for (let count = start; count < end; count++) {
      range.push(count);
    };
  
    return range;
  };
};

const splitText = function (seperator) {
  return function (texts) {
    return texts.split(seperator);
  };
};

const countLength = function (text) {
  return text.length;
};

const callMap = function (fun) {
  return function (array) {
    return array.map(fun);
  }
}

const replaceChar = function (position, fun) {
  let prevChar = "";
  return function (char) {
    prevChar = prevChar + char
    return countLength(prevChar) === position ? fun(char) : char;
  };
};

const UPPERCASE = function (text) {
  return text.toUpperCase();
};

const deStructure = function (text) {
  return [...text];
};

const flatArray = function (array) {
  return array.flat(Infinity);
};

const order = function (text) {
  return deStructure(text).sort().join("");
}

// generate ranges from [3, 5, 2] => [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]]
const rangesOf = function (numbers) { 
  return numbers.map(generateRange(0));
};

// capitalize first letters of ["hello world", "goodbye moon"] => 
// ["Hello World", "Goodbye Moon"]
const capitalizedFirstLettersOf = function (strings) { };

// find word lengths in ["apple pie", "banana split"] => [[5, 3], [6, 5]]
const wordLengthsOf = function (strings) { 
  return strings.map(splitText(" ")).map(callMap(countLength));
};

// flatten nested arrays of [[1, [2, 3]], [4, [5, 6]]] => [[1, 2, 3], [4, 5, 6]]
const flattenedArraysOf = function (arrays) {
  return arrays.map(flatArray);
 };

// sort letters in ["cat", "bat", "rat"] alphabetically => ["act", "abt", "art"]
const sortedLettersOf = function (strings) {
  return strings.map(order);
 };

console.log(sortedLettersOf(["cat", "bat", "rat"]));

// wrap strings in brackets ["apple", "banana"] => ["[apple]", "[banana]"]
const wrappedStringsOf = function (strings) { };

// extract names from [{ name: "Alice" }, { name: "Bob" }] => ["Alice", "Bob"]
const extractNames = function (objects) { };

// extract ages from [{ age: 25 }, { age: 30 }] => [25, 30]
const extractAges = function (objects) { };

// extract the first letters of names from [{ name: "Alice" }, { name: "Bob" }] => ["A", "B"]
const firstLettersOfNames = function (objects) { };

// calculate areas from [{ width: 2, height: 3 }, { width: 4, height: 5 }] => [6, 20]
const calculateAreas = function (rectangles) { };

// extract boolean flags from [{ active: true }, { active: false }] => [true, false]
const extractFlags = function (objects) { };

// concatenate first and last names from [{ firstName: "Alice", lastName: "Smith" }, { firstName: "Bob", lastName: "Brown" }] => ["Alice Smith", "Bob Brown"]
const fullNames = function (objects) { };

// calculate total prices from [{ price: 10, quantity: 2 }, { price: 5, quantity: 4 }] => [20, 20]
// (price * quantity)
const totalPrices = function (objects) { };

// determine if a person is an adult from [{ name: "Alice", age: 17 }, { name: "Bob", age: 22 }] => [false, true]
// (age >= 18)
const isAdult = function (objects) { };

// create abbreviations from [{ city: "New York", country: "USA" }, { city: "Los Angeles", country: "USA" }] => ["NY, USA", "LA, USA"]
const abbreviations = function (objects) { };

// extract scores for math tests from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [90, 80]
const mathScores = function (objects) { };

// extract coordinates from [{ x: 1, y: 2 }, { x: 3, y: 4 }] => [[1, 2], [3, 4]]
const extractCoordinates = function (objects) { };

// extract full name and age from [{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }] => [["Alice Smith", 25], ["Bob Brown", 30]]
const fullNameAndAge = function (objects) { };

// extract scores from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [[90, 85], [80, 75]]
const extractScores = function (objects) { };

// extract key-value pairs from [{ key: "a", value: 1 }, { key: "b", value: 2 }] => [["a", 1], ["b", 2]]
const keyValuePairs = function (objects) { };

console.log = function () { };
console.log(flattenedArraysOf([[1, [2, 3]], [4, [5, 6]]]));
console.log(rangesOf([1, 2, 3, 4, 5]));
console.log(wordLengthsOf(["apple pie", "banana split"]));