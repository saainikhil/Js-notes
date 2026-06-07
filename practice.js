// // let data = [1,2,3,4];

// // for (let i = 0; i < data.length; i++) {

// //    console.log((i),data[i]); 
// // //    console.log(data[i]);
// //    console.log("index of " + i + " is " + data[i]);
    
// //     }


// const array = [1,2,3];
// array.push(4);
// console.log(array);

// const pi = 3.14;
// pi = 3.14;
// console.log(pi);


// let person = {
//     name: "nikihl",
//     age: 25,
//     college: "abc"
// };
// console.log(person["name"]);
// console.log(person.age);
// person.course = "btech";
// console.log(person);

// person.age = 26;
// console.log(person);  
// delete person.age;
// console.log(person);  

// console.log(Object.keys(person));/
// for (let x in person){
//     // console.log(x)
//     console.log(x+":"+person[x])
// }
 
// let emp1 = {
//     name:"Madhu",
//     age:25,
//     collage : "pr"
// }
//  console.log(emp1["age"]);

//  emp1.clg = "pu";
//  console.log(emp1);
// console.log(Object.keys(emp1))
// delete emp1.age;
// console.log(emp1)
 
// console.log(emp1.name,emp1["age"]);
// emp1["course"]="testing";
// emp1.age = 26;
// delete emp1.course;
// console.log(emp1);
 
// let keysinobject = Object.keys(emp1);
// let valuesinobject = Object.values(emp1);
// console.log(keysinobject,valuesinobject);
 
// for (let i in emp1){
//     console.log(`This is keys ${i}, This is values ${emp1[i]}`);
// }
 
// const conversiontoObject = JSON.stringify(emp1);
// console.log(conversiontoObject);
// console.log(JSON.parse(conversiontoObject));
// for(let x in emp1){
// //     // console.log(x)


// //     // console.log(emp1[x])}

// // console.log(x+":"+emp1[x])}

let array = [0,1,2,3,4,5,6];
let copy = array.slice(0,3);
console.log(copy);

let array1 = [0,1,2,3,4,5,6];
let remove = array1.splice(0,3);
console.log(array1);











