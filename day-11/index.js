const numbers = [1, 2, 3, 4, 5, 6];


const result = numbers
    .map(num => num * 2) 
    .filter(num => num % 2 !== 0);

console.log(result);