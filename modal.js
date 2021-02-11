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
// let birthday = document.getElementById('birthdate');
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

  var firstNameIsValid = false;

  function firstNameError(){
    alert.firstName.innerText="Veuillez entrer au moins 2 caractères";
    event.preventDefault();
  }
  
  function removeAlertFirstName(){
    alert.firstName.innerText = "";
  }

  if(firstName.value.length < 2){
    firstNameError();
  }
  else{
    removeAlertFirstName();
    firstNameIsValid = true;
  }
}

// Validation du Nom 

function lastNameValidation(){

  var lastNameIsValid = false;

  function lastNameError(){
    alert.lastName.innerText="Veuillez entrer au moins 2 caractères";
    event.preventDefault();
  }
  
  function removeAlertLastName() {
    alert.lastName.innerText = "";
  }

  if(lastName.value.length < 2){
    lastNameError();
  }
  else{
    removeAlertLastName();
    lastNameIsValid = true;
  }
}

// Validation email 

function emailValidation() {

  // function emailIsValid(){
  //   let emailValue = email.value; 
  //   let Regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //   return Regex.test(emailValue);}
  
var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if(email.value.match(mailFormat)){
  alert.email.innerText = "";
  return true;
}
else if(email.value == ""){
  alert.email.innerText = "Veuillez renseigner votre adresse email.";
  return false;
}
else if(!email.value.match(mailFormat)){
  alert.email.innerText = "L'adresse email n'est pas valide, veuillez renseigner une adresse valide.";
  return false;
}


  // if(emailIsValid){
  //   alert.email.innerText="C'est tout bon ! ";
  //   return true;
  // }

  // else if(email.value == ""){
  //   alert.email.innerText="Entrez une adresse email";
  //   event.preventDefault; 
  // }

  
  // else if(!emailIsValid){
  //   alert.email.innerText="Entrez une adresse email VA LI DE ! ";
  //   event.preventDefault;
  // }
  // else{
  //   alert.email.innerText="";
  //   mailIsValid = true;
  // }
}

//Validation date de naissance

function birthdateValidation(){
  
  var birthdateIsValid = false;

  let birthdayInput = document.getElementById('birthdate').value;

  var birthday = new Date(birthdayInput); // Cherche valeur dans input 'birthdate'
  
  var today = new Date(); // Date actuelle
  
  var currentTime = today.getTime(); // conversion en min
  
  var birthdayTime = birthday.getTime();
  
  var age = (currentTime - birthdayTime)/31536000000; // calcul de l'âge 

  function birthdateMinor () {
    alert.birthdate.innerText = "Vous devez être majeur.e pour pouvoir vous inscrire";
    event.preventDefault();
    
  }

  function birthdateDead () {
    alert.birthdate.innerText = "Vous êtes fossilisé ? Rentrez une date valide ! "
    event.preventDefault();
    
  }

  function removeAlertBirthdate (){
    alert.birthdate.innerText = "";
  }

  if(birthdayInput === ""){
    alert.birthdate.innerText = "Merci d'entrer votre date de naissance";
    event.preventDefault();
  }
  else if(age >= 0 && age < 18){
     birthdateMinor();
  }
  else if (age > 120) {
      birthdateDead();
  }
  else{
    removeAlertBirthdate();
    birthdateIsValid = true;
  }
}

// Validation de la checkbox CGV 

function cgvValidation(){
  var cgvIsValid = false; 

  if(!cgv.checked){
    alert.cgv.innerText="Vous devez accepter nos conditions d'utilisation";
    alert.cgv.style.float = "left";
    event.preventDefault();
  }
  else{
    alert.cgv.innerText="";
    cgvIsValid = true;

  }

}

// Validation du Formulaire

function validate(){

  var formIsValid; 

  firstNameValidation();
  lastNameValidation();
  emailValidation();
  birthdateValidation();
  cgvValidation();

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



