// DOM Elements
const modalForm = document.getElementById('modal-form');
const modalbg = document.querySelector(".background");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector('.close');

// Ouverture du menu de navigation

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Ouverture de la Modale "Inscription"

function launchModal() {
  modalbg.style.display = "block";
  window.scroll(0,0); // Fait un scroll top à l'ouverture de la modale
  document.body.style.overflow = 'hidden'; //Empêche le scroll de l'arrière plan quand modale est ouverte
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Fermeture de la Modale "Inscription"

function closeModal () {
  modalbg.style.display = 'none';
  document.body.style.overflow = 'auto'; // Autorise le scroll lorsque modale est fermée
}

closeBtn.addEventListener("click", closeModal);

// Champs de formulaires

let inputs = {
  firstName : document.getElementById('first'),
  lastName : document.getElementById('last'),
  email : document.getElementById('email'),
  birthdate : document.getElementById('birthdate'),
  cgv : document.getElementById('checkbox1')
}

// Alertes Messages

let alerts = {
  firstName : document.getElementById('errorFirstName'),
  lastName : document.getElementById('errorLastName'), 
  email : document.getElementById('errorEmail'),
  birthdate : document.getElementById('error-birthdate'),
  cgv : document.getElementById('error-cgv')
}

// Validation du Prénom 

function firstNameValidation(){

  if(inputs.firstName.value.length < 2){
    alerts.firstName.innerText="Veuillez entrer au moins 2 caractères";
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
  
var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //REGEX email format valide 

  if(inputs.email.value.match(mailFormat)){
    alerts.email.innerText = "";
    return true;
  }
  else if(inputs.email.value == ""){
    alerts.email.innerText = "Veuillez renseigner votre adresse email.";
    event.preventDefault();
    return false;
  }
  else if(!inputs.email.value.match(mailFormat)){
    alerts.email.innerText = "L'adresse email n'est pas valide, veuillez renseigner une adresse valide.";
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
    return false;
  }
  else{
    alerts.cgv.innerText="";
    return true;
  }
}

// Validation du Formulaire

function validate(){

  let firstNameisValid = false;
  let lastNameisValid = false;
  let emailisValid = false;
  let birthdateisValid = false;
  let cgvisValid = false;

  let borderWithError = "1px solid #FE142F";
  let borderWithoutError = "";

  cgvValidation();

    if(cgvValidation()){
      cgvisValid = true;
    }

  birthdateValidation();

    if(birthdateValidation()){
      birthdateisValid = true;
      inputs.birthdate.style.border = borderWithoutError;
    }
    else if(birthdateisValid == false){
      inputs.birthdate.focus();
      inputs.birthdate.style.border = borderWithError;
    }

  emailValidation();

    if(emailValidation()){
      emailisValid = true;
      inputs.email.style.border = borderWithoutError;
    }
    else if(emailisValid == false){
      inputs.email.focus();
      inputs.email.style.border = borderWithError;
    }

  lastNameValidation();

    if(lastNameValidation()){
      lastNameisValid = true;
      inputs.lastName.style.border = borderWithoutError;
    }
    else if(firstNameisValid == false){
      inputs.lastName.focus();
      inputs.lastName.style.border = borderWithError;
    }

  firstNameValidation();

    if(firstNameValidation()){
      firstNameisValid = true;
      inputs.firstName.style.border = borderWithoutError;
    }
    else if(firstNameisValid == false){
      inputs.firstName.focus();
      inputs.firstName.style.border = borderWithError;
    }

  //Affichage de la fenêtre de confirmation en cas de validation des champs

  if(firstNameisValid && lastNameisValid && emailisValid && birthdateisValid && cgvisValid){
    closeModal();
    showMessage();
  }
}

// Message de confirmation du formulaire

function showMessage() {
  confirmationBackground.style.display = "flex";
  document.body.style.overflow = 'hidden'; //Empêche le scroll de l'arrière plan quand modale CONFIRMATION est ouverte
  event.preventDefault();
}

// Fermeture du message de confirmation 
let confirmationBackground = document.getElementById('container-confirmation');
let buttonCloseConfirmation = document.getElementById('close-confirmation');
let crossCloseConfirmation = document.getElementById('cross-confirmation');

function closeConfirmation () {
  confirmationBackground.style.display = 'none';
  document.body.style.overflow = 'auto';
}

buttonCloseConfirmation.addEventListener('click', closeConfirmation);
crossCloseConfirmation.addEventListener('click', closeConfirmation);



