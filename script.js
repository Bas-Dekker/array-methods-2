// A
const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

const findSpiderMan = function (superheroes) {
  return superheroes.find(function (superhero) {
    return superhero.name === "Spiderman";
  });
};
console.log("Find Spiderman:", findSpiderMan(superheroes));

// B
const doubleArrayValues = function (array) {
  let newArray = [];
  array.forEach((number) => {
    newArray.push(number * 2);
  });

  return newArray;
};
console.log("Double 1,2,3:", doubleArrayValues([1, 2, 3]));

// C
const containsNumberBiggerThan10 = function (array) {
  return array.some((number) => {
    return number > 10;
  });
};
console.log(
  "Je suis bigger than 10:",
  containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])
);

// D
function isItalyInTheGreat7(array) {
  return array.includes("Italy");
}
console.log(
  "Is Italie aanwezig?:",
  isItalyInTheGreat7([
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States",
  ])
);

// E
const tenfold = function (array) {
  let newArray = [];
  array.forEach((number) => {
    newArray.push(number * 10);
  });
  return newArray;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));

// F
function isBelow100(array) {
  return array.every((number) => {
    return number < 100;
  });
}

console.log(
  "Onder de 100?:",
  isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);

// G
const numbers = [
  1,
  81,
  4,
  53,
  3,
  6,
  79,
  2,
  43,
  7,
  28,
  11,
  77,
  84,
  98,
  101,
  206,
  234,
];

bigSum = function (array) {
  return array.reduce((acc, number) => {
    return acc + number;
  });
};

console.log(
  bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234])
);

console.log("Big sum, add all numbers in array:", bigSum(numbers));
