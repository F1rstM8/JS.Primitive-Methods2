console.log("--- ЗАВДАННЯ 4 ---");
function formatDate(dateString) {
    const parts = dateString.split('-'); 
    return parts[1] + "." + parts[2] + "." + parts[0];
}
console.log(formatDate("2021-22-09")); 