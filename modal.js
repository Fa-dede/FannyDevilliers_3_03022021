function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalForm = document.getElementById('modal-form');
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector('.close');
const submitBtn = document.getElementById('btn-envoi');

// Ouverture de la Modale
function launchModal() {
  modalbg.style.display = "block";
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// Fermeture de la Modale
function closeModal () {
  modalbg.style.display = 'none';
}

closeBtn.addEventListener("click", closeModal);

// Elements à valider

let firstName = document.getElementById('first');
let lastName = document.getElementById('last');
let email = document.getElementById('email');
// let birthday = document.getElementById('birthdate'); déclarée dans la function birthdateValidation()
let cgv = document.getElementById('checkbox1');

// Alertes Messages

let alert = {
  firstName : document.getElementById('errorFirstName'),
  lastName : document.getElementById('errorLastName'), 
  email : document.getElementById('errorEmail'),
  birthdate : document.getElementById('errorBirthdate'),
  cgv : document.getElementById('errorCgv')
}

// // Validation du Prénom 

function firstNameValidation(){

  if(firstName.value.length < 2){
    alert.firstName.innerText="Veuillez entrer au moins 2 caractères";
    firstName.focus();
    event.preventDefault();
    return false;
  }
  else{
    alert.firstName.innerText = "";
    return true;
  }
}

// Validation du Nom 

function lastNameValidation(){

  if(lastName.value.length < 2){
    alert.lastName.innerText="Veuillez entrer au moins 2 caractères";
    lastName.focus();
    event.preventDefault();
    return false;
  }
  else{
    alert.lastName.innerText = "";
    return true;
  }
}

// Validation email 

function emailValidation() {
  
var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if(email.value.match(mailFormat)){
    alert.email.innerText = "";
    return true;
  }
  else if(email.value == ""){
    alert.email.innerText = "Veuillez renseigner votre adresse email.";
    email.focus();
    event.preventDefault();
    return false;
  }
  else if(!email.value.match(mailFormat)){
    alert.email.innerText = "L'adresse email n'est pas valide, veuillez renseigner une adresse valide.";
    email.focus();
    event.preventDefault();
    return false;
  }
}

//Validation date de naissance

function birthdateValidation(){

  let birthdayInput = document.getElementById('birthdate').value;

  var birthday = new Date(birthdayInput); // Cherche valeur dans input 'birthdate'
  
  var today = new Date(); // Date actuelle
  
  var currentTime = today.getTime(); // conversion en min
  
  var birthdayTime = birthday.getTime();
  
  var age = (currentTime - birthdayTime)/31536000000; // calcul de l'âge 

  if(birthdayInput === ""){
    alert.birthdate.innerText = "Merci d'entrer votre date de naissance";
    event.preventDefault();
    return false;
  }
  else if(age >= 0 && age < 18){
    alert.birthdate.innerText = "Vous devez être majeur.e pour pouvoir vous inscrire";
    event.preventDefault();
     return false;
  }
  else if (age > 120) {
    alert.birthdate.innerText = "Vous êtes fossilisé ? Rentrez une date valide ! ";
    event.preventDefault();
    return false;
  }
  else if(birthday > today){
    alert.birthdate.innerText = "Vous ne pouvez pas être né.e dans le futur ! ";
    event.preventDefault();
    return false;
  }
  else{
    alert.birthdate.innerText = "";
    return true;
  }
}

// Validation de la checkbox CGV 

function cgvValidation(){ 

  if(!cgv.checked){
    alert.cgv.innerText="Vous devez accepter nos conditions d'utilisation";
    alert.cgv.style.float = "left";
    event.preventDefault();
    return false;
  }
  else{
    alert.cgv.innerText="";
    return true;
  }
}

// Validation du Formulaire

function validate(){

  firstNameValidation(); // renvoi à la fonction qui valide le prénom
  lastNameValidation(); // renvoi à la fonction qui valide le nom
  emailValidation(); // renvoi à la fonction qui valide l'email
  birthdateValidation(); // renvoi à la fonction qui valide la date de naissance
  cgvValidation(); // renvoi à la fonction qui valide les conditions d'utilisations

  //Affichage de la fenêtre de confirmation en cas de 

  if(firstNameValidation() && lastNameValidation() && emailValidation() && birthdateValidation() && cgvValidation()){
    closeModal();
    showMessage();
  }
}

// Message de confirmation du formulaire

function showMessage() {
  confirmationBg.style.display = "flex";
  event.preventDefault();
}

// Fermeture du message de confirmation 
let confirmationBg = document.getElementById('container-confirmation');

let buttonCloseConfirmation = document.getElementById('close-confirmation');
let crossCloseConfirmation = document.getElementById('cross-confirmation');

function closeConfirmation () {
  confirmationBg.style.display = 'none';
}

buttonCloseConfirmation.addEventListener('click', closeConfirmation);
crossCloseConfirmation.addEventListener('click', closeConfirmation);



