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