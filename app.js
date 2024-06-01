const prompt = require("prompt-sync")();
let arr = new Array();

while (true) {
  const num = prompt("Enter number: ");
  if (isNaN(num)) {
    break;
  }
  arr.push(parseFloat(num));
}

let sum = arr.reduce((acc, cur) => acc + cur);

console.log(arr);
console.log(sum);
