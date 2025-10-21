function info(nam, boyos) {
    console.log(`My name is ${nam} and My age is ${boyos}.`);
    
}
info('Anto', 16);
info('Anika', 17);
info('Rita', 10);
info('Mita', 11);
info('Antora', 19);

// Map ========= 
const group = ([2, 3, 4, 5]);

group.map((ele) => {
    console.log(ele*2);
    
})
// Map ========= 
// Type of ========= 
let year = 'Mahfil';
console.log(typeof year);

// Type of ========= 
// Document Object Model 
let heading = document.querySelector('h1');
let headingTwo = document.querySelector('.tita')
console.log(headingTwo.innerText);

// // AddEventListenner =======
// let btn = document.querySelector('button'); 
//  btn.addEventListener('click', () => {
// btn.style.color='red'
// btn.style.background='blue'
    
//  })
let anotherText = document.querySelector('.tita')
let headText = document.querySelector('h1')
let dark = document.querySelector('.dark')
let light = document.querySelector('.light')

dark.addEventListener('click', ()=> {
document.body.style.background='gray'
headText.style.color='white'
anotherText.style.color='blue'
})

light.addEventListener('click', ()=> {
document.body.style.background='pink'
})

let inputName = document.querySelector('input')
inputName.addEventListener('keyup', () => {
    console.log(inputName.value);
    
}) 
// AddEventListenner ======= 
// Document Object Model 
