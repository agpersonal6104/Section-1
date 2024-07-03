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
    colors : ['White', 'Green', 'Black']
};

// Syntax to access 2nd colour
console.log(smartphones.colors[1]);

console.log('-------------------------------');

//Replace green with its two variants
smartphones['colors'].splice(1,1,'Forest green','Sea green');
console.log(smartphones.colors);

console.log('-------------------------------');

const smartphoneArray = [
    {
        Brand : 'Apple',
        Model : 'iphone 16',
        Price : 79999,
        colors : ['White', 'Green', 'Black'],
        ram : ['6GB','8GB']
    },
    {
        Brand : 'MI',
        Model : 'poco X2',
        Price : 16000,
        colors : ['Grey', 'Black'],
        ram : ['4GB','16GB']
    },
    {
        Brand : 'Samsung',
        Model : 'S24 Ultra',
        Price : 110000,
        colors : ['Silver', 'Gold'],
        ram : ['8GB','32GB']
    },
    {
        Brand : 'One Plus',
        Model : '12R',
        Price : 36000,
        colors : ['Pink', 'Blue'],
        ram : ['64GB','8GB']
    },
    {
        Brand : 'Motorola',
        Model : 'Edge50',
        Price : 24000,
        colors : ['White', 'Black'],
        ram : ['2GB','8GB']
    },
];