class Employee{
    // Class name updated to PascalCase: Employee
    setempdetails(name, id, salary, phoneno){
        this.name = name;
        this.id = id;
        this.salary = salary;
        this.phoneno = phoneno;
    }
    getempdetails(){
        console.log('Name: ' + this.name);
        console.log('ID: ' + this.id);
        console.log('Salary: ' + this.salary);
        console.log('Phone Number: ' + this.phoneno);
    }
}

let emp1 = new Employee();
emp1.setempdetails('nikhil', 123, 50000, '9898989898');
emp1.getempdetails();