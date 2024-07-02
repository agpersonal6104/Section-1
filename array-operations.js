const fruits = [ 'Mango', 'Banana', 'Apple', 'Orange', 'Pineapple', 'Grapes', 'Guava', 'Papaya'];

// access elements from orange to papaya
const fruits2 = fruits.slice(3);
console.log(fruits2);

//remove 3 elements after Banana
const fruits3 = fruits;
fruits3.splice(2,3);
console.log(fruits3);

//insert two elements at the second last position
const fruits4 = fruits.slice(0, 6);
fruits.splice(-2 ,0, 'Kiwi' , 'Watermellon');
console.log(fruits4);

//remove element mango from array
const fruits5 = fruits.slice(1,7)
console.log(fruits5);

const nums = [36, 19, 10, 2, 6, 2, 48];