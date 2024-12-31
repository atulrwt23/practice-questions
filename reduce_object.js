// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple",
// "cherry"], 6: ["banana"], 4: ["date"] }
const constructObj = function (obj, value) {
  if (!(value.length in obj)) {
    obj[value.length] = [];
  }

  obj[value.length].push(value);
  return obj;
};

const groupByLength = function (strings) {
  return strings.reduce(constructObj, {});
};

console.log(groupByLength(["apple", "banana", "cherry", "date"]));

// countOccurrences(["apple", "banana", "cherry", "banana"]) =>
// { apple: 1, banana: 2, cherry: 1 }

const convertToObj = function (obj, word) {
  obj[word] = word in obj ? obj[word] + 1 : 1;

  return obj;
};

const countOccurrences = function (strings) {
  return strings.reduce(convertToObj, {});
};

console.log(countOccurrences(["apple", "banana", "cherry", "banana"]));

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) =>
// { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) {
  return objects.reduce();
};

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zipTogether = function (keys) {
  return function (obj, value, index) {
    obj[keys[index]] = value;
    return obj;
  };
};

const zip = function (keys, values) {
  return values.reduce(zipTogether(keys), {});
};

console.log(zip(["a", "b", "c"], [1, 2, 3]));

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) {
  return values.reduce(zipTogether(keys), {});
};

console.log(makeObject(["city", "country"], ["Paris", "France"]));

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) {
  return zip(Object.values(obj), Object.keys(obj));
};

console.log(invertObject({ a: 1, b: 2, c: 3 }));
// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) {
  return arr1.concat(arr2).reduce((obj, pair) => {
    obj[pair[0]] = pair[1];
    return obj;
  }, {});
};

console.log(
  mergeArrays(
    [
      ["a", 1],
      ["b", 2],
    ],
    [
      ["c", 3],
      ["d", 4],
    ]
  )
);
// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) {
  return objects.reduce((obj, entry) => {
    obj[entry.age] = [entry];
    return obj;
  }, {});
};

console.log(
  groupByProperty([
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
  ])
);

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) =>
// [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]

const makePairs = function (pairs, element) {
  if (!pairs.at(-1).every(num => num < element)) {
    pairs.push([]);
  }

  pairs.at(-1).push(element);
  return pairs;
};

const ascendingGroups = function (numbers) {
  return numbers.reduce(makePairs, [[]]);
};

console.log(ascendingGroups([1, 2, 3, 4, 3, 4, 5, 10, 6, 7, 8, 9]));

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) {
  return pairs.reduce((obj, pair) => {
    obj[pair[0]] = pair[1];
    return obj;
  }, {});
};

console.log(
  flattenToObject([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ])
);

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) {
  return strings.reduce((max, candidate) => {
    return max.length > candidate.length ? max : candidate;
  });
};

console.log(longestString(["apple", "banana", "cherry", "dates"]));

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) {};

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) {
  const result = { sum: 0, count: 0 };
  return numbers.reduce((result, num) => {
    result.sum += num;
    result.count += 1;

    return result;
  }, result);
};

console.log(sumAndCount([1, 2, 3, 4]));

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) {
  return arr.reduce((flat, item) => {
    Array.isArray(item) ? flat.push(...deepFlatten(item)) : flat.push(item);

    return flat;
  }, []);
};

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) {
  return numbers.reduce((num1, num2) => (num1 > num2 ? num1 : num2));
};

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) {
  const sum = numbers.reduce((sum, num) => [...sum, sum.at(-1) + num], [0]);
  return sum.slice(1);
};

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) {
  const equalChunks = numbers.reduce(
    (chunk, num) => {
      if (!chunk.at(-1).includes(num)) {
        chunk.push([]);
      }

      chunk.at(-1).push(num);
      return chunk;
    },
    [[]]
  );

  return equalChunks.filter(chunk => chunk.length > 1);
};

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) =>
// { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) {
  return array.reduce(
    (group, item) => {
      typeof item === "number"
        ? group.number.push(item)
        : group.string.push(item);

      return group;
    },
    { number: [], string: [] }
  );
};

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) {
  return numbers.reduce(() => {});
};

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) {};

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) {};

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) {};

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) {};

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) {};

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) {};

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) {};

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) {};

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) {};

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) {};

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
const groupByDate = function (records) {};

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) {};

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 },
// { category: 'A', value: 30 }]) => { A: 40, B: 20 }
const sumByCategory = function (items) {};
