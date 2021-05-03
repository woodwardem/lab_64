'use strict'

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.render = function() {
   let mySection = document.getElementById('mySection');
mySection.appendChild;
    let nameH2 = document.createElement('h2');
    let age = document.createElement('p');
    nameH2.textContent = 'name:' + this.name;
    age.textContent = 'age:' + this.age;
    mySection.appendChild(nameH2);
    mySection.appendChild(age);
}



    let Tom = new Person("Tom", 70);
let Gail = new Person("Gail", 68);
//let dale = new Person("dale", 16);
Gail.render();
Tom.render();
function createPerson() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;



    let person = new Person(name, age);

  Person.prototype.render();



}
function Employee(name, age) {
this.name = name;
this.age = age;
};

Employee.call(Person);
 
    let main = document.getElementById('main');
let nameH2 = document.createElement('h2');
    let age = document.createElement('p');
    nameH2.textContent = 'name:' + this.name;
    age.textContent = 'age:' + this.age;
    main.appendChild(nameH2);
    main.appendChild(age);
const the = Object.create(new Employee);
the.name = 'John';
the.age = 'Alexis';

