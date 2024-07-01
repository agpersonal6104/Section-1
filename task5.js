//  WAP to check whether number is prime or not
let num = 12;
let f = 0;
for (let i = 1; i <= num; i++)
{
    if (num % i == 0)
    {
        f++;
    }
}
if(f === 2)
{
    console.log("Prime Number");
}
else
{
    console.log("Not a Prime Number");
}

// WAP to check whether a number is pallindrome or not
let n = 121;
let rev = 0;
let temp = n;
while (n > 0)
{
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = parseInt(n / 10);
}
if (temp === rev)
{
    console.log("Pallindrome Number");
}
else
{
    console.log("Not a Pallindrome Number");
}

// WAP to reverse a number
let n2 = 123;
let rev2 = 0;
while(n2 > 0)
{
    let rem2 = n2 % 10;
    rev2 = rev2 * 10 + rem2;
    n2 = parseInt(n2 / 10);
}
console.log(rev2);

// WAP to print all prime numbers in a range
const isPrime = (x) =>
{
    let c=0;
    for(let i = 1; i < x; i++)
    {
        if(x % i === 0)
        {
            c++;
        }
    }
    if(c === 2)
    {
        console.log(x);
    }
}
let n3 = 1;
let n4 = 100;
let f2 = 0;
for( let j = n3; j <= n4; j++)
{
    isPrime(j);
}

// WAP to print fibbonacci series
const isFibbonacci = (y) =>
{
    let a = 0;
    let b = 1;
    let c = 0;
    let arr=[];
    for(let i = 1; i <= y; i++)
    {
        arr.push(a);
        c = a + b;
        a = b;
        b = c;
    }
    return arr;
}
const no=isFibbonacci(10)
console.log(no);