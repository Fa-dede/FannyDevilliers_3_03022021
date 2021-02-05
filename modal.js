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


// Ouverture de la Modale
function launchModal() {
  modalbg.style.display = "block";
}

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// Fermeture de la Modale
function closeModal () {
  modalbg.style.display = null;
}

closeBtn.addEventListener("click", closeModal);

// Message de confirmation du formulaire

function showMessage() {
  confirmationBg.style.display = "flex";
  event.preventDefault();
}

//Validation des champs

let firstName = document.forms["reserve"] ["first"];
let errorFirstName = document.getElementById('errorFirstName');

let lastName = document.forms['reserve'] ['last'];
let errorLasstName = document.getElementById('errorLastName');

let email = document.forms['reserve'] ['email'];
let errorEmail = document.getElementById('errorEmail');

let birthDate = document.forms['reserve'] ['birthdate'];
let errorBirthdate = document.getElementById('errorBirthdate');

let radioButtons = document.forms['reserve'] ['location'];
let errorRadioButtons = document.getElementById('errorRadioButtons');

let cgv = document.forms['reserve'] ['checkbox1'];
let errorCgv = document.getElementById('errorCgv');

let buttonSubmit = document.getElementById('btn-envoi');
let confirmMessage = document.getElementById('confirmation-popup');

function validate() {
    if(firstName.value < 2 ){
      firstName.style.backgroundColor = '#279e7a';
      errorFirstName.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
      firstName.focus();
      return false;
      
    }
    else if (lastName.value < 2 ){
      lastName.style.outline = 'red';
      errorLastName.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
      lastName.focus();
      return false;
    }
    else if (email.value == ""){
      email.style.backgroundColor = '#279e7a';
      errorEmail.innerHTML = "Veuillez saisir votre adresse mail";
      email.focus();
      return false;
    }
    else if(birthDate.value == "") {
      birthDate.style.backgroundColor = '#279e7a';
      errorBirthdate.innerHTML = "Veuillez saisir votre date de naissance";
      birthDate.focus();
      return false;
    }
    else if (cgv.checked == false) {
      errorCgv.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
      return false;
    }
    else{
      showMessage();
      closeModal();
    }
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





