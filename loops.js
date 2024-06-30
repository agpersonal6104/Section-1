console.log('------For Loop------');
for( let i=0; i<10; i++)
{
    console.log(i);
}

console.log('------While Loop------');
let n=10;
while(n<=20)
{
    console.log(n);
    n+=2;
}

console.log('------Do-While Loop------');
const k=10;
do
{
    console.log(k);
}while(k>20)

console.log('------for-of Loop------');

const nums = [234, 654, 3, 456, 8765, 34];
for (let a of nums)
{
    console.log(a);
}