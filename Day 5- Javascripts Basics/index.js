//Variables in Javascript
//lower camel case =fullName
var fullName= 'Shikshya Maharjan';
let address= 'Tahachal, Nepal';
const bloodGroup= 'B+';

console.log(fullName);
console.log(address);
console.log(bloodGroup);

//Datatypes
let name =' Shikshya';
let age= 20;
let isStudent=true;
let hobbies=['coding','dancing','cooking'];

console.log(hobbies[0]);

//Objects
let user={
    name:'Shikshya',
    age: 20,
    isStudent:false,
    hobbies: ['coding','dancing','cooking'],
};

console.log(user['name']);
console.log(user.age);

//Functions
function greet(name){
    console.log('Hello',name);
}
greet('Shikshya');

//DOM Manipulation
const headingElementById =document.getElementById('heading-2');
console.log(headingElementById);

const headingElementByQuery =document.querySelector('#heading-2');
const paragraphElement=document.querySelector('.para');

paragraphElement.textContent='This is updated paragraph';
paragraphElement.style.color='blue';

const buttonElement= document.querySelector('.btn');

buttonElement.addEventListener('click',function(){
    alert('Button CLicked!');
    console.log('Button CLicked');

});
