console.log("Ayush"+1);
console.log(typeof("Ayush"+1));

console.log("A"-1);
console.log(typeof("A"-1));

function hello(x,y)
{
    let name = "21";
    let age=21;
    if(name === age)
        return true;
    else
        return false;
}


ans=hello()
console.log(ans);

const addNums = (a,b) => {
    let c = a+b;
    return c;
}

ans = addNums(34,12);
console.log(ans);

object = {
    name : "Ayush",
    age : 21,
    hobbies : ["cricket","football","music"],
    address : {
        city : "Lucknow",
        state : "Uttar pradesh",
    }
}
console.table(object);
console.log(object.name);
console.log(object.age);

console.log(object.hobbies[0]);
console.log(object.address.city);