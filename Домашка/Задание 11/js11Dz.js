'use strict';

let age = document.getElementById('age');
let value = this.age.value;

function showUser(surname, name) {
    console.log("Пользователь " + surname + " " + name + ", его возраст " + value);
};
showUser();

function hello() {
	console.log(this);
}
hello();
