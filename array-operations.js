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

console.log("------------------------------------------------------");
console.log("------------------------------------------------------");
// array Traversal
const nums = [36, 19, 10, 2, 6, 2, 49];
for(let i=0; i < nums.length; i++)
{
    console.log( nums[i] );
}

console.log("------------------------------------------------------");

for(let n of nums)
{
    console.log(n);
}

console.log("----------------Using for each function---------------");

nums.forEach( ( a , i , j ) => { console.log( a, i , j ); } );

// Square of every element
nums.forEach( ( a ) => { console.log( a**2 ); } );


console.log("----------------Using for each function---------------");
// create a new array containing only even numbers
let arr=[]
nums.forEach( (a) => { if(a%2 === 1){arr.push(a);} } )
console.log(arr);