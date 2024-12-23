const generateRange = function (start) {
  return function (end) {
    const range = [];
    for (let count = start; count < end; count++) {
      range.push(count);
    }

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
  };
};

const joinArray = function (seperator) {
  return function (array) {
    return array.join(seperator);
  };
};

const replaceChar = function (position, fun) {
  let prevChar = "";
  return function (char) {
    prevChar = prevChar + char;
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
};

// generate ranges from [3, 5, 2] => [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1]]
const rangesOf = function (numbers) {
  return numbers.map(generateRange(0));
};

// capitalize first letters of ["hello world", "goodbye moon"] =>
// ["Hello World", "Goodbye Moon"]
const firstCapital = function (word) {
  const [first, ...rest] = [...word];

  return [first.toUpperCase(), ...rest].join("");
};

const capitalizedFirstLettersOf = function (strings) {
  const groupedText = strings.map(splitText(" "));
  const allFirstCapital = groupedText.map(callMap(firstCapital));
  console.log(allFirstCapital);

  return allFirstCapital.map(joinArray(" "));
};

console.log(capitalizedFirstLettersOf(["hello world", "goodbye moon"]));

// find word lengths in ["apple pie", "banana split"] => [[5, 3], [6, 5]]
const wordLengthsOf = function (strings) {
  return strings.map(splitText(" ")).map(callMap(countLength));
};

console.log(wordLengthsOf(["apple pie", "banana split"]));

// flatten nested arrays of [[1, [2, 3]], [4, [5, 6]]] => [[1, 2, 3], [4, 5, 6]]
const flattenedArraysOf = function (arrays) {
  return arrays.map(flatArray);
};

console.log(
  flattenedArraysOf([
    [1, [2, 3]],
    [4, [5, 6]],
  ])
);

// sort letters in ["cat", "bat", "rat"] alphabetically => ["act", "abt", "art"]
const sortedLettersOf = function (strings) {
  return strings.map(order);
};

console.log(sortedLettersOf(["cat", "bat", "rat"]));

// wrap strings in brackets ["apple", "banana"] => ["[apple]", "[banana]"]
const wrapString = function (string) {
  return "[" + string + "]";
};

const wrappedStringsOf = function (strings) {
  return strings.map(wrapString);
};

console.log(wrappedStringsOf(["apple", "banana"]));

// extract names from [{ name: "Alice" }, { name: "Bob" }] => ["Alice", "Bob"]
const extract = function (key) {
  return function (obj) {
    return obj[key];
  };
};

const extractNames = function (objects) {
  return objects.map(extract("name"));
};

console.log(extractNames([{ name: "Alice" }, { name: "Bob" }]));

// extract ages from [{ age: 25 }, { age: 30 }] => [25, 30]
const extractAges = function (objects) {
  return objects.map(extract("age"));
};

console.log(extractAges([{ age: 25 }, { age: 30 }]));

// extract the first letters of names from [{ name: "Alice" }, { name: "Bob" }] => ["A", "B"]
const firstLettersOfNames = function (objects) {
  return objects.map(extract("name")).map(function (word) {
    return word[0];
  });
};

console.log(firstLettersOfNames([{ name: "Alice" }, { name: "Bob" }]));

// calculate areas from [{ width: 2, height: 3 }, { width: 4, height: 5 }]
// => [6, 20]
const product = function (first, second) {
  return function (obj) {
    return obj[first] * obj[second];
  };
};

const calculateAreas = function (rectangles) {
  return rectangles.map(product("height", "width"));
};

console.log(
  calculateAreas([
    { width: 2, height: 3 },
    { width: 4, height: 5 },
  ])
);

// extract boolean flags from [{ active: true }, { active: false }]
// => [true, false]
const extractFlags = function (objects) {
  return objects.map(extract("active"));
};

console.log(extractFlags([{ active: true }, { active: false }]));

// concatenate first and last names from [
// { firstName: "Alice", lastName: "Smith" },
// { firstName: "Bob", lastName: "Brown" }] => ["Alice Smith", "Bob Brown"]
const fullName = function (obj) {
  return obj.firstName + " " + obj.lastName;
};

const fullNames = function (objects) {
  return objects.map(fullName);
};

console.log(
  fullNames([
    { firstName: "Alice", lastName: "Smith" },
    { firstName: "Bob", lastName: "Brown" },
  ])
);

// calculate total prices from [{ price: 10, quantity: 2 },
// { price: 5, quantity: 4 }] => [20, 20]
// (price * quantity)

const totalPrices = function (objects) {
  return objects.map(product("price", "quantity"));
};

console.log(
  totalPrices([
    { price: 10, quantity: 2 },
    { price: 5, quantity: 4 },
  ])
);

// determine if a person is an adult from [{ name: "Alice", age: 17 },
// { name: "Bob", age: 22 }] => [false, true]
// (age >= 18)
const isAdult = function (objects) {
  return objects.map(extract("age")).map(function (age) {
    return age >= 18;
  });
};

console.log(
  isAdult([
    { name: "Alice", age: 17 },
    { name: "Bob", age: 22 },
  ])
);

// create abbreviations from [{ city: "New York", country: "USA" },
// { city: "Los Angeles", country: "USA" }] => ["NY, USA", "LA, USA"]
const abbreviations = function (objects) {};

// extract scores for math tests from [{ name: "Alice", scores:
//  { math: 90, english: 85 } }, { name: "Bob", scores:
// { math: 80, english: 75 } }] => [90, 80]
const mathScore = function (arr, data) {
  arr.push(data.scores.math);

  return arr;
};

const mathScores = function (objects) {
  return objects.reduce(mathScore, []);
};

console.log(
  mathScores([
    {
      name: "Alice",
      scores: { math: 90, english: 85 },
    },
    {
      name: "Bob",
      scores: { math: 80, english: 75 },
    },
  ])
);

// extract coordinates from [{ x: 1, y: 2 }, { x: 3, y: 4 }] => [[1, 2], [3, 4]]

const extractCoordinate = function (arr, obj) {
  arr.push([obj.x, obj.y]);

  return arr;
};

const extractCoordinates = function (objects) {
  return objects.reduce(extractCoordinate, []);
};

console.log(
  extractCoordinates([
    { x: 1, y: 2 },
    { x: 3, y: 4 },
  ])
);

// extract full name and age from [{ firstName: "Alice", lastName: "Smith", age: 25 }, { firstName: "Bob", lastName: "Brown", age: 30 }] => [["Alice Smith", 25], ["Bob Brown", 30]]
const extractFullNameAndAge = function (arr, obj) {
  arr.push([fullName(obj), obj.age]);

  return arr;
};

const fullNameAndAge = function (objects) {
  return objects.reduce(extractFullNameAndAge, []);
};

console.log(
  fullNameAndAge([
    { firstName: "Alice", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Brown", age: 30 },
  ])
);

// extract scores from [{ name: "Alice", scores: { math: 90, english: 85 } }, { name: "Bob", scores: { math: 80, english: 75 } }] => [[90, 85], [80, 75]]
const extractScore = function (arr, obj) {
  arr.push([obj.scores.math, obj.scores.english]);

  return arr;
};

const extractScores = function (objects) {
  return objects.reduce(extractScore, []);
};

console.log(
  extractScores([
    { name: "Alice", scores: { math: 90, english: 85 } },
    { name: "Bob", scores: { math: 80, english: 75 } },
  ])
);

// extract key-value pairs from [{ key: "a", value: 1 }, { key: "b", value: 2 }] => [["a", 1], ["b", 2]]
const extraceKeyValue = function (arr, object) {
  arr.push([object.key, object.value]);

  return arr;
};

const keyValuePairs = function (objects) {
  return objects.reduce(extraceKeyValue, []);
};

console.log(
  keyValuePairs([
    { key: "a", value: 1 },
    { key: "b", value: 2 },
  ])
);

console.log = function () {};
console.log(
  flattenedArraysOf([
    [1, [2, 3]],
    [4, [5, 6]],
  ])
);
console.log(rangesOf([1, 2, 3, 4, 5]));
console.log(wordLengthsOf(["apple pie", "banana split"]));
