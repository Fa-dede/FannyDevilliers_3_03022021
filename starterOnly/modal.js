function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
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



function validate() {
    if(firstName.value < 2 ){
      firstName.style.backgroundColor = 'red';
      errorFirstName.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom";
      firstName.focus();
      return false;
    }
    if (lastName.value < 2 ){
      lastName.style.backgroundColor = 'red';
      errorLastName.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom";
      lastName.focus();
      return false;
    }
}

