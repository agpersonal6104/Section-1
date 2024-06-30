function addNums( a, b)
{
    var c = a+b;
    console.log(c);
}

addNums(34,12);
// console.log(c);

let getAvg = function(m1,m2,m3,m4)
{
    const avg= (m1+m2+m3+m4)/4;
    console.log(avg);
}

const as=getAvg(13,13,13,13);
console.log(as);

const factorial = (n) =>{
    let f=1;
    for(let i=1; i<=n; i++)
    {
        f=f*i;
    }
    return f;
}
const ans = factorial(5)
console.log(ans);

let [a,b,c] = [ 1, 28, 293]
console.log(a,b,c);
[b,c]=[c,b]
console.log(b,c);

const [name1,name2,name3,name4,name5]=['ramu','shamu','raju','pinki','kalu'];
console.log(name5);

const getReport = (m1,m2,m3,m4,max=100) =>{
    const avg = getAvg(m1,m2,m3,m4);
    const percentage = avg/max * 100;
    return [avg, percentage]
}
const [v1, v2] = getReport(134,156,78,90,200);
console.log(v1,v2);

// WAP to take start and end as parameter
// and print all numbers divisible by 7 in that range
// and also print the sum of all such numbers

const Divisible = (start,end) => {
    let sum = 0;
    for(let i=start; i<=end; i++)
    {
        if(i%7===0)
        {
            console.log(i);
            sum+=i;
        }
    }
    console.log("The sum is " + sum);
}
Divisible(10,100);

