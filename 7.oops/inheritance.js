class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    personInfo() {
        console.log('name: ' + this.name + ', age: ' + this.age);
    }
    salary(){
        console.log(`${this.name} got his salary`);
    }
}


class Employee extends Person {
    constructor(name, age, salary, company) {
       super(name, age);
       this.salary = salary;
       this.company = company;
    }
        personInfo() {
        console.log('name: ' + this.name + ', age: ' + this.age + ', salary: ' + this.salary + ', company: ' + this.company);
        }
}
const p1 = new Person('John', 30); 
const e1 = new Employee('NikhiL',25, 25000, 'xyz');
p1.personInfo(); 
p1.salary(); 
e1.personInfo();  

