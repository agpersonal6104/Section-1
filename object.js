const user = {
    name : 'Raju',
    email : 'raju@mail.com',
    password : 'abc123',
    age : 34
};

console.log(user);
console.log(user.name);
console.log(user['email']);

console.log('-------------------------------');

user.address='Lucknow';
user.age=22;
console.log(user);

console.log('-------------------------------');

user['roll-no']= 27642;
console.log(user);

console.log('-------------------------------');

const key = 'address';
console.log(user[key]);

console.log('-------------------------------');

console.log( Object.keys(user));
console.log( Object.values(user));
console.log( Object.entries(user));

console.log('-------------------------------');

user.contacts = ['7725364123','9131231232'];
console.log(user.contacts[0]);

console.log('-------------------------------');

const smartphones = {
    Brand : 'Apple',
    Model : 'iphone 16',
    Price : 79999,
    colors : ['white', 'green', 'black']
};

// Syntax to access 2nd colour
console.log(smartphones.colors[1]);

console.log('-------------------------------');

//Replace green with its two variants
smartphones['colors'].splice(1,1,'Darkgreen','Lightgreen');
console.log(smartphones.colors);