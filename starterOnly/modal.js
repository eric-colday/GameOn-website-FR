/** VARIABLES
 * ---------------------------------------
 * ---------------------------------------
*/

/**  DOM Elements */
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// Fermer le bouton (x)
const closeModalBtn = document.querySelectorAll("#close");
// Message de succès
const successMessageElt = document.querySelectorAll("#sucess-message");
// Mise à jour id="form"
const formElt = document.querySelectorAll("#form");
// Fermer id="sucess-close-btn"
const successCloseBtnElt = document.querySelectorAll("#sucess-close-btn");

/** Form elements */ 
const firstElt = document.getElementById("first");
const lastElt = document.getElementById("last");
const emailElt = document.getElementById("email");
const birthdateElt = document.getElementById("birthdate");
const quantityElt = document.getElementById("quantity");
const cityElt = document.getElementById("input[type=radio]");

/** EVENTS
 * ---------------------------------------
 * ---------------------------------------
*/

/* launch modal event */
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

/* close modal events: CLICK  */
closeModalBtn.forEach(elt => elt.addEventListener("click", closeModal));

/*  */

/** FUNCTIONS
 * ---------------------------------------
 * ---------------------------------------
*/ 

/** Manage nav button on responsive */
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


/* launch modal form */
function launchModal() {
  modalbg.style.display = "block";  
}

/* close modal form */
function closeModal() {
  modalbg.style.display = "none";
}







