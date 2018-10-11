class Person {
    constructor(x){
      this.age = x.age;
      this.name = x.name;
    }
    info(){
      return "The person is called "+ this.name + " and is " + this.age + " years old"
    }
  
  }
  //const person = new Person( {age: 44, name: 'Tom' });
  //person.info() // The student is called Tom and is 44 years old. He has an overall GPA of 4.0 in the university.
  
  
  class Student extends Person {
    constructor(x){
      super(x)
      this.gpa = x.gpa
    }
    info(){
      return `The student is called ${this.name} and is ${this.age} years old. He has an overall GPA of ${this.gpa} in the university.`
      super.info();
    }
  }
  
  const tom = new Student( {age: 44, name: 'Tom',gpa: 4 });
  tom.info()