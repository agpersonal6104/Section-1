const arr= [65,'nice',true, console.log, undefined]
console.log(arr);
console.log( typeof(arr));
console.log( Array.isArray(arr) );


console.log( arr.length ); //also works with string
console.log('\n\n\n');

const movies = ['300','MI','Deadpool','Expendables','3 Idiots','Inception'];

// indexing
console.log( movies[1] ); //also works with strings
console.log( movies.indexOf('Inception') );  //also works with strings
console.log( movies.at(-2) );  //also works with strings
movies[2] = 'Deadpool and Wolverine';
console.log(movies);

// slicing
console.log(movies.slice(2,5)); //also works with strings
console.log(movies.slice(2));
console.log(movies.slice(-4));
console.log(movies.slice(-4,-2));
console.log(movies.slice(1,5).reverse());
console.log(movies);

// String
console.log(movies[2].slice(-9));

// adding and removing elements
movies.push('Avengers');  //adds elements at the end
console.log(movies);

movies.unshift('Kanchana');  //adds element at the beginning
console.log(movies);

console.log(movies.pop());  //removes element from the end
console.log(movies.shift());  //removes element from the start
console.log(movies);

// movies.splice(3,2); // removes 2 elements from index 3
movies.splice(3, 2, 'John Wick','The boyz', 'Invincible');
console.log(movies);