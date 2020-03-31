
/////////////////////////  OBJECT DESTRUCTURING


// const person = {
//   firstName: 'Jude',
//   lastName: 'Cole',
//   hobbies: ['swimming',"coding","movies"],
//   address: {
    
//     street: "12 hollister st",
//     city: "houston",
//     state: "NY",
//     zip: 3302
//   }

// }

// person.email='hdhhdhd@yh.com'

// const {firstName,lastName, address:{city,zip},hobbies,email} = person

// email



// //////// 

// const person = {
//   firstName :"jude",
//   lastName :"cole",
//   hobbies:["coding","movies","surfing"],
//   address :{
//     street: "22 hollister st",
//     city:"houston"
//   }
  

// }

// person


// const names = ['jude','emily','val','emeka']  


// // names.('kate')

// names.unshift('jj')

// names

// ////////////////
// //////////////////////////////////ARRAY HELPERS

// .slice() cuts an array at the point indicated
// .split  cuts an arrayt and returns new array
// .splice()  can either add or remove to an existing array.

//////////////LOOPS

// for(i = 0; i < 11; i++){
//   console.log(i)
// }

// /////// while loops

// let i = 0 
// while(i< 11){
//   console.log(i)
//   i++
// }

///////////////////// HIGH ORDER LOOPS



// const names =[

//     {
//         firstName:'Juud',
//         lastName : "cole",
//         age:      22,
//         isActive: true
//     },
//     {
//         firstName:'Emily',
//         lastName : "Adams",
//         age:      12,
//         isActive: true
//     },
//     {
//         firstName:'Emeka',
//         lastName : "Daniels",
//         age:      20,
//         isActive: false
//     }
  
// ]

// names.forEach((name)=> console.log(name.age))

///// TINERY OPERATOR with Switch

//  const awake = 'coding';
//  console.log( (!awake ) ? " sleep" :"keepcoding")

// switch(awake)  {
//     case 'red':
//         console.log("this is red")
//         break;
//     case 'blue':
//         console.log('this is blue')
//         break;
//     default:
//         console.log('Jude is awake')
//         break;
// }
     



////// OBJECT ORIENTED PROGRAMING

/// CONSTRUCTOR FUNCTION

function Person(fitrstName, lastName, dob) {
    this.fitrstName = fitrstName;
    this.lastName = lastName;
    this.dob = new Date(dob)

    // this.getFullName = () =>  `${this.fitrstName} ${this.lastName}`
    
    

};

Person.prototype.getFullName = () =>  `${this.fitrstName} ${this.lastName}`

const Person1 = new Person('dave','cole', '3-09-1980');

// console.log(Person1.getFullName());

console.log(Person1.getFullName());





/////////// FUNCTIONS

// function addNum(num1, num2) {
//     console.log(num1+num2)
// }
//  addNum( 8,3)



//  const addNum = (num1, num2) =>  num1+num2
 
//  console.log(addNum(3,5))




// const x = 10;

// const color = x< 10 ? "blue" : "red"

// console.log(color)



// names.forEach(function(name){
//     console.log(name.firstName)
// })

////  HIGH ORDER ARRAY HELPERS 

// const nameTxt = names.filter(function(name){
//     return name.isActive === true
// }).map(function(name){
//     return name.firstName
// })

// console.log(nameTxt)



// for(let name of names){

// console.log(name.lastName)
// }


// names.forEach(function(name){
//     console.log(name.age)
// })

// const nameTxt = names.map(function(name){
//     return name.firstName
// }).map(function(name){
//     return name[1]
// })
// console.log(nameTxt) 



// const actTxt = names.filter(function(name){
//    return  name.isActive != true
// }).map(function(name){
//     return name.firstName
// })

// console.log(actTxt)