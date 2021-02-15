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
const modalbg = document.querySelector(".background");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector('.close');

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

let inputs = {
  firstName : document.getElementById('first'),
  lastName : document.getElementById('last'),
  email : document.getElementById('email'),
  birthdate : document.getElementById('birthdate'),
  cgv : document.getElementById('checkbox1')
}

// alertes Messages

let alerts = {
  firstName : document.getElementById('errorFirstName'),
  lastName : document.getElementById('errorLastName'), 
  email : document.getElementById('errorEmail'),
  birthdate : document.getElementById('error-birthdate'),
  cgv : document.getElementById('error-cgv')
}

// // Validation du Prénom 

function firstNameValidation(){

  if(inputs.firstName.value.length < 2){
    alerts.firstName.innerText="Veuillez entrer au moins 2 caractères";
    // inputs.firstName.focus();
    event.preventDefault();
    return false;
    
  }
  else{
    alerts.firstName.innerText = "";
    return true;
  }
}

// Validation du Nom 

function lastNameValidation(){

  if(inputs.lastName.value.length < 2){
    alerts.lastName.innerText="Veuillez entrer au moins 2 caractères";
    // inputs.lastName.focus();
    event.preventDefault();
    return false;
  }
  else{
    alerts.lastName.innerText = "";
    return true;
  }
}

// Validation email 

function emailValidation() {
  
var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //scope global si besoin de réutiliser 

  if(inputs.email.value.match(mailFormat)){
    alerts.email.innerText = "";
    return true;
  }
  else if(inputs.email.value == ""){
    alerts.email.innerText = "Veuillez renseigner votre adresse email.";
    // inputs.email.focus();
    event.preventDefault();
    return false;
  }
  else if(!inputs.email.value.match(mailFormat)){
    alerts.email.innerText = "L'adresse email n'est pas valide, veuillez renseigner une adresse valide.";
    // inputs.email.focus();
    event.preventDefault();
    return false;
  }
}

//Validation date de naissance

function birthdateValidation(){

  var birthValue = new Date(inputs.birthdate.value); // Cherche valeur dans input 'birthdate'
  
  var today = new Date(); // Date actuelle
  
  var currentTime = today.getTime(); // conversion en min
  
  var birthdayTime = birthValue.getTime();
  
  var age = (currentTime - birthdayTime)/31536000000; // calcul de l'âge 

  if(inputs.birthdate.value === ""){
    alerts.birthdate.innerText = "Merci d'entrer votre date de naissance";
    event.preventDefault();
    return false;
  }
  else if(age >= 0 && age < 18){
    alerts.birthdate.innerText = "Vous devez être majeur(e) pour pouvoir vous inscrire";
    event.preventDefault();
     return false;
  }
  else if (age > 120) {
    alerts.birthdate.innerText = "Vous êtes fossilisé(e) ? Rentrez une date valide ! ";
    event.preventDefault();
    return false;
  }
  else if(birthValue > today){
    alerts.birthdate.innerText = "Vous ne pouvez pas être né(e) dans le futur ! ";
    event.preventDefault();
    return false;
  }
  else{
    alerts.birthdate.innerText = "";
    return true;
  }
}

// Validation de la checkbox CGV 

function cgvValidation(){ 

  if(!inputs.cgv.checked){
    alerts.cgv.innerText="Vous devez accepter nos conditions d'utilisation";
    event.preventDefault();
    thereIsNoError = false;
    // return false;
  }
  else{
    alerts.cgv.innerText="";
    // return true;
  }
}

// Validation du Formulaire

var thereIsNoError = ""; 

function validate(){

  firstNameValidation(); 
  lastNameValidation(); 
  emailValidation(); 
  birthdateValidation(); 
  cgvValidation();

  //Affichage de la fenêtre de confirmation en cas de validation des champs

  if(thereIsNoError){
    closeModal();
    showMessage();
  }
}

// Message de confirmation du formulaire

function showMessage() {
  confirmationBackground.style.display = "flex";
  event.preventDefault();
}

// Fermeture du message de confirmation 
let confirmationBackground = document.getElementById('container-confirmation');
let buttonCloseConfirmation = document.getElementById('close-confirmation');
let crossCloseConfirmation = document.getElementById('cross-confirmation');

function closeConfirmation () {
  confirmationBackground.style.display = 'none';
}

buttonCloseConfirmation.addEventListener('click', closeConfirmation);
crossCloseConfirmation.addEventListener('click', closeConfirmation);



