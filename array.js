const arr= [65,'nice',true, console.log, undefined]
console.log(arr);
console.log( typeof(arr));
console.log( Array.isArray(arr) );
console.log( arr.length );
console.log('\n\n\n');

const movies = ['300','MI','Deadpool','Expendables','3 Idiots','Inception'];

// indexing
console.log( movies[1] );
console.log( movies.indexOf('Inception') );
console.log( movies.at(-2) );
movies[2] = 'Deadpool and Wolverine';
console.log(movies);

// slicing
console.log(movies.slice(2,5));