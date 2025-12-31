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
}console.log("--- ЗАВДАННЯ 4 ---");
function formatDate(dateString) {
    const parts = dateString.split('-'); 
    return parts[1] + "." + parts[2] + "." + parts[0];
}
console.log(formatDate("2021-22-09"));
 console.log("\n--- ЗАВДАННЯ 5  ---");
const isEqual = (str1, str2) => str1.toLowerCase() === str2.toLowerCase();

console.log(isEqual("pApA", "papa"));
console.log(isEqual("qwerty", "QWErty"));
console.log(isEqual("aaa", "EEE"));
