console.log("--- ЗАВДАННЯ 1 ---");
const originalString = "Hello World";

const reversedString = originalString.split("").reverse().join("");

console.log(reversedString);
console.log("--- ЗАВДАННЯ 2 ---");
const getIntegerPart = (number) => Math.trunc(number);

console.log(getIntegerPart(5.95)); 
console.log(getIntegerPart(-3.4)); 
console.log(getIntegerPart(10)); 

  console.log("--- ЗАВДАННЯ 3 ---");
const userName = prompt("Введіть ваше ім'я:");
if (userName) {
    alert(userName.toUpperCase()); 
} else {
    alert("Ви не ввели ім'я");
}