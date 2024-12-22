// sumOf([1, 2, 3, 4]) => 10
const sum = function (num1, num2) {
  return num1 + num2;
}

const sumOf = function (numbers) {
  return numbers.reduce(sum);
}

console.log(sumOf([1, 2, 3, 4]));

// productOf([1, 2, 3, 4]) => 24
const product = function (num1, num2) {
  return num1 * num2;
}

const productOf = function (numbers) {
  return numbers.reduce(product);
}

console.log(productOf([1, 2, 3, 4]));

// averageOf([1, 2, 3, 4, 5]) => 3
const averageOf = function (numbers) {
  const total = sumOf(numbers);

  return total / numbers.length;
}

console.log(averageOf([1, 2, 3, 4, 5]));

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const min = function (num1, num2) {
  return Math.min(num1, num2);
}

const minOf = function (numbers) {
  return numbers.reduce(min);
}

console.log(minOf([3, 1, 4, 1, 5, 9, 2]));

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const max = function (num1, num2) {
  return Math.max(num1, num2);
}

const maxOf = function (numbers) {
  return numbers.reduce(max);
}

// sumPositiveNumbers([1, -2, 3, -4]) => 4
const isPositive = function (num) {
  return num > 0;
}

const sumPositiveNumbers = function (numbers) {
  return numbers.filter(isPositive).reduce(sum);
}

console.log(sumPositiveNumbers([1, -2, 3, -4]));

// sumOfSquares([1, 2, 3, 4]) => 30
const square = function (num) {
  return num * num;
}

const sumOfSquares = function (numbers) {
  return numbers.map(square).reduce(sum);
}

// sumOfOddNumbers([1, 2, 3, 4, 5]) => 9
const isOdd = function (num) {
  return num & 1;
}

const sumOfOddNumbers = function (numbers) {
  return numbers.filter(isOdd).reduce(sum);
}

console.log(sumOfOddNumbers([1, 2, 3, 4, 5]));

// countNegativeNumbers([1, -2, 3, -4]) => 2
const invert = function (fun) {
  return function (...arg) {
    return !fun(...arg);
  }
}

const totalValues = function () {
  let count = 1;

  return function () {
    count += 1;

    return count;
  }
}

const countNegativeNumbers = function (numbers) {
  const OnlyNegatives = numbers.filter(invert(isPositive));

  return OnlyNegatives.reduce(totalValues());
}

console.log(countNegativeNumbers([1, -2, 3, -4, 1]));

// findSumOfEvenSquares([1, 2, 3, 4]) => 20
const findSumOfEvenSquares = function (numbers) {
  const onlyEven = numbers.filter(invert(isOdd));
  const squareOfEven = onlyEven.map(square);

  return squareOfEven.reduce(sum);
}

console.log(findSumOfEvenSquares([1, 2, 3, 4]));

// concatenateWords(["hello", "world"]) => "helloworld"
const concateBoth = function (first, second) {
  return first.concat(second);
}

const concatenateWords = function (words) {
  return words.reduce(concateBoth);
}

console.log(concatenateWords(["hello", "world"]));

// longestWord(["apple", "banana", "cherry", "kiwi"]) => "banana")
const longest = function (word1, word2) {
  return word1.length >= word2.length ? word1 : word2;
}

const longestWord = function (words) {
  return words.reduce(longest);
}

console.log(longestWord(["apple", "banana", "cherry", "kiwi"]));

// shortestWord(["apple", "banana", "cherry", "kiwi"]) => "kiwi"
const shortest = function (word1, word2) {
  return word1.length <= word2.length ? word1 : word2;
}

const shortestWord = function (words) {
  return words.reduce(shortest)
}

console.log(shortestWord(["apple", "banana", "cherry", "kiwi"]));

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWith = function (seperator) {
  return function (word1, word2) {
    return [word1, word2].join(seperator);
  };
};

const joinWithComma = function (words) {
  const joinWithCommas = joinWith(",");

  return words.reduce(joinWithCommas);
}

console.log(joinWithComma(["apple", "banana", "cherry"]));

// reverseWords(["hello", "world"]) => "world hello"


const reverseWords = function (words) {
  const reverse = words.reverse();

  return reverse.reduce(joinWith(" "));
}

console.log(reverseWords(["apple", "banana", "cherry"]));

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {
  return words.reduce(joinWith(" "));
}

console.log(joinWordsWithSpace(["apple", "banana", "cherry"]));

// concatenateNames(["John", "Jane", "Doe"]) => "JohnJaneDoe"
const concatenateNames = function (names) {
  return names.reduce(concateBoth);
}

console.log(concatenateNames(["John", "Jane", "Doe"]));

// countVowelsInWords(["hello", "world"]) => "eoo"

const countVowelsInWords = function (words) {
  const singleWord = words.reduce(concateBoth);
  const charsArray = [...singleWord];
  const onlyVowels = charsArray.filter(function (char) {
    return "aeiou".includes(char.toLowerCase());
  });

  return onlyVowels.reduce(concateBoth);
}

console.log(countVowelsInWords(["hello", "world"]));

// makeCamelCase(["hello", "world", "how", "are", "you"]) => "helloWorldHowAreYou"
const toCamelCase = function (word1, word2) {
  const [word, char, ...rest] = [word1, ...word2];

  return [word, char.toUpperCase(), ...rest].join("");
}

const makeCamelCase = function (words) {
  return words.reduce(toCamelCase);
}

console.log(makeCamelCase(["hello", "world", "how", "are", "you"]));

// reverseString(["apple", "banana", "cherry"]) => "elppaananabyrrehc"
const reverseWord = function (word) {
  console.log(word);

  return [...word].reverse().join("");
}

const reverseString = function (words) {
  const reverseEach = words.map(reverseWord);

  return reverseEach.reduce(joinWith(""));
}

console.log(reverseString(["apple", "banana", "cherry"]));

// duplicateNumbers([1, 2, 3]) => [1, 1, 2, 2, 3, 3]
const double = function (doubleNumbers, value) {
  doubleNumbers.push(value, value);

  return doubleNumbers;
}

const duplicateNumbers = function (numbers) {
  return numbers.reduce(double, []);
}

console.log(duplicateNumbers([1, 2, 3]));

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = function (arrays) {
  return arrays.reduce(concateBoth);
}

console.log(concatenateArrays([[1, 2], [3, 4], [5, 6]]));

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) { 
  return concatenateArrays(arrays);
}

console.log(concatenateArrays([[1, 2], [3, 4], [5, 6]]));

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const addUnique = function (unique, value) {
  unique.includes(value) ? unique : unique.push(value);

  return unique;
}

const uniqueNumbers = function (numbers) {
  return numbers.reduce(addUnique, []);
}

console.log(uniqueNumbers([1, 2, 2, 3, 4, 4, 5]));
