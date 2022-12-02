
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('lastNameOutput').innerText = initPerson.lastName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('initBirthDay').innerText = initPerson.initBirthDay;
    document.getElementById('birthYearOutput').innerText = initPerson.yearOfBirthday;
    document.getElementById('profession').innerText = initPerson.profession;

};


let button = document.getElementById('clear');

button.addEventListener('click', (event) =>{
    document.getElementById('firstNameOutput').innerText = "";
    document.getElementById('lastNameOutput').innerText = "";
    document.getElementById('surnameOutput').innerText = "";
    document.getElementById('genderOutput').innerText = "";
    document.getElementById('initBirthDay').innerText = "";
    document.getElementById('birthYearOutput').innerText = "";
    document.getElementById('profession').innerText = "";
});

let button2 = document.getElementById('gen');
button2.addEventListener('click', (event) =>{
    document.location.reload();
});
