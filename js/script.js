alert("It's working!");

console.log("banana");

// Var let const =======
var fruit = "Apple";
let fol = "Orange";

console.log(fol);
let food = 10;

console.log(food);

const pi = 3.1416;
console.log(pi);

let sum = "5" + 17;
console.log(sum);

// Var let const =======

// scope =======
{
  let name = "Rita";
  const age = 25;

  console.log(name, age);
}

{
    var home = 'New York'
}
console.log(home);

let city = "London";
function jaiga() {
    
}
jaiga()
console.log(city);



// scope =======

// Condition Start 
let boyos = 15;
if (boyos >= 20) {
    console.log('You can Vote');
    
}
else{
    console.log('You cannot Vote');
    
}
let num = 97;
// 1st if condition 
if (num > 32 && num < 40) {
  console.log("You got D");
}
// 1st else if condition 
else if (num >= 40 && num < 50) {
  console.log("You got C");
  
}
// 2nd else if 
else if (num >= 50 && num < 60) {
  console.log("you got B");
  
}
// 3rd else if 
else if (num >= 60 && num < 70) {
  console.log(" You got A-");
  
}
// 4th else if 
else if (num >=70 && num < 80) {
  console.log("You got A");
  
}
// 5th else if 
else if (num >=80 && num <100) {
  console.log("You got A+");
  
}
// 1st else 
else {
  console.log("You got F");
  
}
// Condition End

// For Loop 
let namta = 31;
for (let i = 1; i <= 10; i++) {
    console.log(`${namta} x ${i} = ${namta*i}`);
    
    
}
// For Loop 
//Arrow Function
let hello = () => {
    console.log('Arrow Function.');
    
}
hello();
//Arrow Function
// Array 
let fruits = ['Mango', 'Banana', 'Apple'];
console.log(fruits[2]);

// Array 
// Object 
let person = {
    nam : 'Peter',
    area : 'Shatkhira',
    marks : 67
}
console.log(person);

// Object 




