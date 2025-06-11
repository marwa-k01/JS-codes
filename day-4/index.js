// Task 4

let fruits = ['apple', 'orenge', 'banana'];
fruits.unshift('cherry', 'pineapple');
fruits.push('plum', 'grapes');

fruits.splice(3, 1, 'lemon');

const index = fruits.indexOf('orenge');
if(index !== -1) {
    fruits.splice(index, 1);
}

console.log(fruits);
