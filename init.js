const startGen = document.getElementById('startGen');
startGen.addEventListener('click', function() {
    personGen();
});

const clearField = document.getElementById('clearField');
clearField.addEventListener('click', (event) =>{
    clear();
});

window.onload = function() {
clear();
};

function personGen() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('lastNameOutput').innerText = initPerson.lastName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('initBirthDay').innerText = initPerson.initBirthDay;
    document.getElementById('birthYearOutput').innerText = initPerson.yearOfBirthday;
    document.getElementById('profession').innerText = initPerson.profession;
}

function clear() {
    document.getElementById('firstNameOutput').innerText = "";
    document.getElementById('lastNameOutput').innerText = "";
    document.getElementById('surnameOutput').innerText = "";
    document.getElementById('genderOutput').innerText = "";
    document.getElementById('initBirthDay').innerText = "";
    document.getElementById('birthYearOutput').innerText = "";
    document.getElementById('profession').innerText = "";
}
