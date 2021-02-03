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
      lastName.style.backgroundColor = '#279e7a';
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
      email.focus();
      return false;
    }

    else if (cgv.checked == false) {
      errorCgv.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
      return false;
    }
}

// Message de confirmation d'inscription

let showMessage = () => {
  confirmMessage.style.display = "block";
}

buttonSubmit.addEventListener('click', showMessage);






