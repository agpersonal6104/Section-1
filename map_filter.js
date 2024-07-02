const nums = [36, 19, 10, 2, 6, 2, 49];

// map

const squares = nums.map( ( a ) => { return a**2 } );
console.log(squares);

console.log('-------------------------------------');

const prices = [ 23.88, 274.50, 888.90, 274.2121, 99.99 ];
const arr = prices.map( ( a ) => { return parseInt(a) } );
console.log(arr);

console.log('-------------------------------------');

// filter

const evenNums = nums.filter( ( n ) => { return n%2===0 } );
console.log(evenNums);

console.log('-------------------------------------');

// filter prices graeter tha 50 and less than 300
const prices2 = prices.filter( ( p ) => { return p > 50 && p < 300 } );
console.log(prices2);