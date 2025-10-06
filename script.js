//  let and const -> to create variables
// let -> varaible
// const -> no change is value

// let and const both can be used to store the values but they behave differently. let can change, Let can be intialised without giving values. 

let a; // no error
// const b;  // error

// but both have some similarities
//  let and const dono khudko window object mein add karte hai
// .... braces scoped




// ARROW Functions

// older version of js had 3 function
// function statement
// function expression
// anonymous function


// aorrw function can perform these 3 actions :
// basic arrow func

()=>{};  // fat arrow function

var b = ()=>{}; // stroing functuin in b
b(); //  calling fucntion b


// arrow func -> with 1 parameter

var c  = (parm)=>{};
c(12)


// arrow function -> with implicit return
var g = ()=> 12; // whatever written after => will be returned

console.log(g())




// template literals (backtick)

// how to write 2+2 is 4 and 2-2 is 0 and if 2 is 3+2....

console.log(`hey ${3+2} is 5 and ${4*2} is 8` )



//  DEFAULT parmeters

function abcd(prm = 0){ // here 0 is the default value so if no value is passed as a parameter. Then it will take  0 by default
    console.log(prm);
} 

abcd(12)
abcd()



// REST and SPREAD  (...)
var c = [1,2,3,4,5,6];
var e = c; // this is reference
var d = [...c]; // this is copy

console.log(e);
console.log(d);


// spread means all the element values are copied
// spread use hota hai copy ya fur uss location par kisi aur values ko bikherne ke liye

//  rest use hota hai jab aapko bache hue values ek variable mein daalne ho

function abcde(a,b,c,...d){ // here it is used as rest operation
    console.log(a,b,c, d);
}

abcde(1,2,3,4,5,6,7);


var array = [1,2,3];
var [b,c] = array;
console.log(b,c)


 
// DeStructuring

var obj = {name: "Uday", age: 24};
var {age} = obj; // age becomes a variable storing value 24

 

// PROMISES

// in promises there are 3 cases 

// if resolved -> we will use "THEN"
// if reject -> we will use "CATCH"
// pending


var ans = new Promise((res, rej)=>{   // promise is a constructor thats why we have added the new keyword
    if(false){
        return res();
    }
    else{
        return rej();
    }
})

ans
.then(function(){
console.log("resolved the case")
})
.catch(function(){
console.log("rejected thecase");
})



// user will ask for a number bt 0 to 9 and if the number is below 5 resolve it not reject.

var newans = new Promise( (res , rej) =>{
    
    var n = Math.floor(Math.random()*10);

    if(n < 5){
        return res();
    }

    else{
        return rej();
    }
})


newans.then(
    function(){
    console.log("below");
})
.catch(function(){
    console.log("above");
})



//  lets create a new promise

var p1 = new Promise(function(res , rej){
    return res("come to home");
})


var p2 = p1.then(function(data){
    console.log(data);

    return new Promise(function(res , rej){
        return res("open the door and then close it");
    })
})

// console.log(p2)
// console.log(p1)

var p3 = p2.then(function(data){
    console.log(data);
    return new Promise(function(res , rej){
        return res("Cook the food");
    })
})


var p4 = p3.then(function(data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("go to sleep");
    })
})

p4.then(function(data){
    console.log(data);
})




//  Async Await

// in any async fucntion where we are suing the "then" , we can use Promises, but in the ans we have to use the "then" keyword . BUT WE CAN AVOID THE "THEN" keyword by using the ASYNC AWAIT

// earklier practice
 function abcdef(){

    fetch(`https://randomuser.me/api/`)// this line will fetch the api details but in the raw format i have to convert it

    .then(function(raw){
        return raw.json();
    })

    .then(function(data){
        console.log(data);
    })
    
}
abcdef()


// now lets create the async await fucntion

async function async_await() {
    
    let raw = await fetch(`https://randomuser.me/api/`)
    let data = await raw.json();

    console.log(data);
}

async_await()