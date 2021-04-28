'use strict'

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.render = function() {
   // let mySection = document.getElementById('mySection');
    let nameH2 = document.createElement('h2');
    let age = document.createElement('p');
    nameH2.textContent = 'name:' + this.name;
    age.textContent = 'age:' + this.age;
}



    let Tom = new Person("Tom", 70);
let Gail = new Person("Gail", 68);
Gail.render();
Tom.render();
function createPerson() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;



    let person = new Person(name, age);

  Person.prototype.render();



}


