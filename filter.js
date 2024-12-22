// even numbers [1, 2, 3, 4, 5] => [2, 4]
const isEven = function (num) {
  return !(num & 1);
};

const filterEvenNumbers = function (numbers) {
  return numbers.filter(isEven);
};

console.log(filterEvenNumbers([1, 2, 3, 4, 5]));

// words with more than 5 letters ["apple", "banana", "kiwi", "grape"] => ["banana"]
const greaterThan = function (size) {
  return function (text) {
    return text.length > size;
  };
};

const filterLongWords = function (words) {
  return words.filter(greaterThan(5));
};

console.log(filterLongWords(["apple", "banana", "kiwi", "grape"]));

// people older than 30 [{name: "Alice", age: 25}, {name: "Bob", age: 35}] => 
// [{name: "Bob", age: 35}]
const isGreater = function (key, limit) {
  return function (data) {
    return data[key] > limit
  };
};

const filterAdults = function (people) {
  const isAgeGreaterThan30 = isGreater("age", 30);
  
  return people.filter(isAgeGreaterThan30);
};

console.log(filterAdults([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 }
]));

// active users [{username: "alice", active: true},
//  {username: "bob", active: false}] => [{username: "alice", active: true}]
const tureAtKey = function (key) {
  return function (data) {
    return data[key];
  };
};

const filterActiveUsers = function (users) {
  const isUserActive = tureAtKey("active");

  return users.filter(isUserActive);
};

console.log(filterActiveUsers([
  { username: "alice", active: true },
  { username: "bob", active: false }
]));

// numbers greater than 10 [5, 12, 7, 18, 3] => [12, 18]
const filterNumbersGreaterThanTen = function (numbers) {
  return numbers.filter(function (num) { return num > 10 });
};

console.log(filterNumbersGreaterThanTen([5, 12, 7, 18, 3]));

// books with more than 200 pages [{title: "Book 1", pages: 150},
//  {title: "Book 2", pages: 250}] => [{title: "Book 2", pages: 250}]
const filterLongBooks = function (books) {
  const arePagesMoreThan200 = isGreater("pages", 200);
  
  return books.filter(arePagesMoreThan200);
};

console.log(filterLongBooks([{ title: "Book 1", pages: 150 },
{ title: "Book 2", pages: 250 }]));

// users with incomplete profiles [{username: "alice", profileComplete: true}, 
// {username: "bob", profileComplete: false}] => [{username: "bob", 
// profileComplete: false}]
const invert = function (fun) {
  return function (...arg) {
    return !fun(...arg);
  }
}

const filterIncompleteProfiles = function (users) {
  const profileNotCompleted = invert(tureAtKey("profileComplete"));

  return users.filter(profileNotCompleted);
};

console.log(filterIncompleteProfiles([
  { username: "alice", profileComplete: true },
  { username: "bob", profileComplete: false }
]));

// students with grades above 80 [{name: "John", grade: 75}, 
// {name: "Jane", grade: 85}] => [{name: "Jane", grade: 85}]
const filterHighGrades = function (students) { 
  const isGradeGreaterThan80 = isGreater("grade", 80);

  return students.filter(isGradeGreaterThan80);
};

console.log(filterHighGrades([
  { name: "John", grade: 75 }, 
  { name: "Jane", grade: 85 }
]))

// products that are in stock [{product: "apple", inStock: true}, 
// {product: "banana", inStock: false}] => [{product: "apple", inStock: true}]
const filterInStockProducts = function (products) { 
  const isInStocks = tureAtKey("inStock");

  return products.filter(isInStocks);
};

console.log(filterInStockProducts([
  { product: "apple", inStock: true },
  { product: "banana", inStock: false }
]));

// orders placed in the last 30 days [{orderDate: "2024-11-01"},
//  {orderDate: "2024-12-01"}] => [{orderDate: "2024-12-01"}]
const filterRecentOrders = function (orders) { 
  return orders.filter()
};

// products with a price lower than the average [{name: "item1", price: 10}, 
// {name: "item2", price: 20}, {name: "item3", price: 5}] =>
// [{name: "item1", price: 10}, {name: "item3", price: 5}]
const filterBelowAveragePrice = function (products) {
};

// active users who posted in the last 7 days [{username: "alice",
//  lastPostDate: "2024-12-01", active: true}, {username: "bob", lastPostDate: 
// "2024-11-20", active: true}] => [{username: "alice", lastPostDate: 
// "2024-12-01", active: true}]
const filterRecentActiveUsers = function (users) { };

// students who passed all subjects [{name: "John", subjects: [{name: "Math", passed: true}, {name: "Science", passed: true}]}, {name: "Jane", subjects: [{name: "Math", passed: false}, {name: "Science", passed: true}]}] => [{name: "John", subjects: [{name: "Math", passed: true}, {name: "Science", passed: true}]}]
const filterStudentsWithAllSubjectsPassed = function (students) { };

// people whose birthday is this month [{name: "Alice", birthDate: "2024-12-01"}, {name: "Bob", birthDate: "2024-11-01"}] => [{name: "Alice", birthDate: "2024-12-01"}]
const filterBirthdaysThisMonth = function (people) { };

// orders that exceed the average order value [{orderId: 1, amount: 20}, {orderId: 2, amount: 50}, {orderId: 3, amount: 10}] => [{orderId: 2, amount: 50}]
const filterHighValueOrders = function (orders) { };

// books with reviews higher than the average rating [{title: "Book 1", rating: 4}, {title: "Book 2", rating: 5}, {title: "Book 3", rating: 3}] => [{title: "Book 2", rating: 5}]
const filterTopRatedBooks = function (books) { };

// employees whose salary is higher than the department average [{name: "Alice", salary: 5000, department: "HR"}, {name: "Bob", salary: 7000, department: "HR"}, {name: "Charlie", salary: 4000, department: "IT"}] => [{name: "Bob", salary: 7000, department: "HR"}]
const filterHighSalaryEmployees = function (employees) { };

// cities with a population higher than the median [{name: "City A", population: 2000}, {name: "City B", population: 5000}, {name: "City C", population: 3000}] => [{name: "City B", population: 5000}]
const filterCitiesAboveMedianPopulation = function (cities) { };

// posts with more than the average number of likes [{postId: 1, likes: 100}, {postId: 2, likes: 200}, {postId: 3, likes: 150}] => [{postId: 2, likes: 200}]
const filterPopularPosts = function (posts) { };

// users who have posted more than the average number of posts [{username: "Alice", postCount: 5}, {username: "Bob", postCount: 8}, {username: "Charlie", postCount: 3}] => [{username: "Bob", postCount: 8}]
const filterActiveUsersByPostCount = function (users) { };
