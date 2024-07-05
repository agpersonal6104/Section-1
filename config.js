const checkOdd = ( n ) => {
    return  n % 2 !== 0;
}

const productTypes = [
    'Electronics', 'Clothing', 'Footware', 'Books', 'Beauty', 'Sports' 
];

const sizes = {
    S: 36,
    M: 38,
    L: 40,
    XL: 42,
    XXL: 44
};

// module.exports = { productTypes, sizes};
module.exports = checkOdd;

function myFunction() {
    console.log("Hello from myFunction!");
}

module.exports = myFunction;