console.log("--- ЗАВДАННЯ 1 ---");
const originalString = "Hello World";

const reversedString = originalString.split("").reverse().join("");

console.log(reversedString);
console.log("--- ЗАВДАННЯ 2 ---");
const getIntegerPart = (number) => Math.trunc(number);

console.log(getIntegerPart(5.95)); 
console.log(getIntegerPart(-3.4)); 
console.log(getIntegerPart(10));   