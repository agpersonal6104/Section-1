// Question 1
let a = 60;
if( a >= 70 && a <= 120 )
{
    console.log("a is between 70 and 120");
}
else
{
    console.log("a is not between 70 and 120");
}

// Question 2
let age = 16;
let adhaar = true;
if (age > 17 && adhaar === true)
{
    console.log("You are eligible for Drivers Licence");
}
else
{
    console.log("You are not eligible for Drivers Licence");
}

// Question 3
let n1 = 20;
let n2 = 15;
let n3 = 25;
if (n1 > n2 && n1 > n3)
{
    console.log("n1 is the largest number");
}
else if (n2 > n1 && n2 > n3)
{
    console.log("n2 is the largest number");
}
else
{
    console.log("n3 is the largest number");
}

// Question 4
let num = 47;
f = 0;
for(let i = 1; i < num; i++ )
{
    if((i*i) === num)
    {
        f ++;
    }
}
if(f >= 0)
{
    console.log("No is perfect square");
}
else{
    console.log("No is not perfect square");
}

// Question 5
n = 77;
if( n % 7 === 0 && num % 11 === 0 )
{
    console.log("No is divisible by 7 and 11");
}
else
{
    console.log("No is not divisible by 7 and 11");
}