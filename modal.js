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
let birthdate = document.getElementById('birthdate');
let cgv = document.getElementById('checkbox1');

// Alertes 

let alert = {
  firstName : document.getElementById('errorFirstName'),
  lastName : document.getElementById('errorLastName'), 
  email : document.getElementById('errorEmail'),
  birthdate : document.getElementById('errorBirthdate'),
  cgv : document.getElementById('errorCgv')
}

// Validation du Prénom 
function firstNameValidation(){
  let value = firstName.value;
  if(value.length > 2)
  return true;
  else return false;
}

// Validation du Nom 
function lastNameValidation(){
  let value = lastName.value;
  if(value.length > 2)
  return true;
  else return false;
}

// Validation email 
function emailValidation(){
  let regex = /\S+@\S+\.\S+/;
  return regex.test(email.value);
}

// Validation date de naissance
function birthdateValidation(){
  let regex;
	return regex.test(birthdate.value);
}

// Validation de la checkbox CGV 

function cgvValidation(){
  return cgv.checked;
}


// Validation du Formulaire
function validate(){
  let isCorrect = true;

  if(!firstNameValidation()) {
    isCorrect = false;
    alert.firstName.innerHTML="Merde";
    event.preventDefault();
  }

  if(!lastNameValidation()) {
    isCorrect = false;
    alert.lastName.innerHTML="Merde";
    event.preventDefault();
  }

  if(!emailValidation()){
    isCorrect = false; 
    alert.email.innerHTML = "Entrez une adresse valide."
    event.preventDefault();
  }
  if(!birthdateValidation()) {
    isCorrect = false;
    alert.birthdate.innerHTML = "Entrez votre date de naissance";
    event.preventDefault();
  }
  if(!cgvValidation()) {
    isCorrect = false;
    alert.cgv.innerHTML = "Vous devez accepter ! ";
    alert.cgv.style.float = "left";
    event.preventDefault();
  }

  


  else {
    return true;
  }
}











// function validate() {
//   if(firstName.value.length < 2 ){
//     errorMsg.firstName.innerHTML="merde!";
//     firstName.focus();
//     event.preventDefault();
//   }

//   if(lastName.value.length <2){
//     errorMsg.lastName.innerHTML="merde!";
//     lastName.focus();
//     event.preventDefault();
//   }
//   if(email.value == ""){
//     errorMsg.email.innerHTML="Rentre ton mail !";
//     event.preventDefault();
//   }

// }

// submitBtn.addEventListener('click', removeErrors);
  



    // if (lastName.value.lenght < 2 ){
    //   errorLastName.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
    //   lastName.focus();
      
    // }
    // if (email.value == ""){
    //   email.style.backgroundColor = '#279e7a';
    //   errorEmail.innerHTML = "Veuillez saisir votre adresse mail";
    //   email.focus();
      
    // }
    // if(birthDate.value == "") {
    //   birthDate.style.backgroundColor = '#279e7a';
    //   errorBirthdate.innerHTML = "Veuillez saisir votre date de naissance";
    //   birthDate.focus();
      
    // }
    // if (cgv.checked == false) {
    //   errorCgv.innerHTML = "Vous devez vérifier que vous acceptez les termes et conditions.";
    // }








// Confirmation Prénom 


// function firstNameValidation(){
//   if(inputs.firstName.value.length < 2){
//     errorMessages.firstName;
//     inputs.firstName.focus();
//     return false;
//   }
//   else{
//     return true;
//   }
// }





// Message de confirmation du formulaire



// function showMessage() {
//   confirmationBg.style.display = "flex";
//   event.preventDefault();
// }







//Validation des champs

// let firstName = document.forms["reserve"] ["first"].value;
// let errorFirstName = document.getElementById('errorFirstName');

// let lastName = document.forms['reserve'] ['last'];
// let errorLasstName = document.getElementById('errorLastName');

// let email = document.forms['reserve'] ['email'];
// let errorEmail = document.getElementById('errorEmail');

// let birthDate = document.forms['reserve'] ['birthdate'];
// let errorBirthdate = document.getElementById('errorBirthdate');

// let radioButtons = document.forms['reserve'] ['location'];
// let errorRadioButtons = document.getElementById('errorRadioButtons');

// let cgv = document.forms['reserve'] ['checkbox1'];
// let errorCgv = document.getElementById('errorCgv');

// let buttonSubmit = document.getElementById('btn-envoi');
// let confirmMessage = document.getElementById('confirmation-popup');

// function notGood() {

// }



// let thereIsError = false;

// if(thereIsError){

// }











      
//     }
//     else{
//       showMessage();
//       closeModal();
//     }
// }





// Fermeture du message de confirmation 
// let confirmationBg = document.getElementById('container-confirmation');

// let buttonCloseConfirmation = document.getElementById('close-confirmation');
// let crossCloseConfirmation = document.getElementById('cross-confirmation');

// function closeConfirmation () {
//   confirmationBg.style.display = 'none';
// }

// buttonCloseConfirmation.addEventListener('click', closeConfirmation);
// crossCloseConfirmation.addEventListener('click', closeConfirmation);



