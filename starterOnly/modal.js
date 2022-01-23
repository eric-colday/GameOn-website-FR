/** VARIABLES
 * ---------------------------------------
 * ---------------------------------------
*/

/**  DOM Elements */
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn"); 
const modalBody = document.querySelector(".modal-body");
const infoForm = document.getElementById("formReserve");
const thankYouModal = document.querySelector(".thankyou");
const closebuttonModal = document.querySelector(".btn-close");
const submitBtn = document.querySelector(".btn-submit");
console.log(submitBtn);

/** 1. Close modal */
const closeModal = document.querySelector(".close");

/** 2. Implémenter les entrées de formulaire */ 

// le formulaire doit être valide lorsque l'utilisateur clique sur "soumettre"
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const quantityNbr = document.getElementById("quantity");
const radioBtns = document.getElementsByName("location");
const todayDateForm = document.getElementById("birthdate");
const conditionAccept = document.querySelector("#checkbox1");

//today day
const todayDate = new Date().toISOString().slice(0, 10);

/** 3. Ajout validation ou messages d'erreur */ 
const firstErrorMsg = document.querySelector(".first-error");
const lastErrorMsg = document.querySelector(".last-error");
const emailErrorMsg = document.querySelector(".email-error");
const locationErrorMsg = document.querySelector(".location-error");
const quantityErrorMsg = document.querySelector(".quantity-error");
const dateErrorMsg = document.querySelector(".date-error");
const conditionErrorMsg = document.querySelector(".conditions-error");
const submitErrorMsg = document.querySelector(".submit-error");


/* 4. Ajout confirmation quand envoie réussi */
const confirmation = document.getElementById ('confirmation');
const confirmationCloseBtn = document.getElementsByClassName('btn-close');


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

//hide all error messages
function hideMessages() {
  firstErrorMsg.style.display = "none";
  lastErrorMsg.style.display = "none";
  emailErrorMsg.style.display = "none";
  dateErrorMsg.style.display = "none";
  locationErrorMsg.style.display = "none";
  submitErrorMsg.style.display = "none";
  quantityErrorMsg.style.display = "none";
  conditionErrorMsg.style.display = "none";
}


//confirm inputs
function fillForm() {
  //first name
  firstName.addEventListener("focus", (e) => {
    submitErrorMsg.style.display = "none";
    locationErrorMsg.style.display = "none";
  });

  firstName.addEventListener("input", (e) => {
    if (e.target.value.length < 2) {
      e.target.style.border = "3px solid red";
      firstErrorMsg.style.display = "inline";
      submitBtn.setAttribute("disabled");
    } else {
      e.target.style.border = "3px solid #51d115";
      firstErrorMsg.style.display = "none";
      submitBtn.removeAttribute("disabled");
    }
  });

  //last name
  lastName.addEventListener("focus", (e) => {
    submitErrorMsg.style.display = "none";
    locationErrorMsg.style.display = "none";
  });

  lastName.addEventListener("input", (e) => {
    if (e.target.value.length < 2) {
      e.target.style.border = "3px solid red";
      lastErrorMsg.style.display = "inline";
      submitBtn.setAttribute("disabled");
    } else {
      e.target.style.border = "3px solid #51d115";
      lastErrorMsg.style.display = "none";
      submitBtn.removeAttribute("disabled");
    }
  });

   //email
   email.addEventListener("focus", (e) => {
    submitErrorMsg.style.display = "none";
    locationErrorMsg.style.display = "none";
  });

  email.addEventListener("input", (e) => {
    if (e.target.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      e.target.style.border = "3px solid #51d115";
      emailErrorMsg.style.display = "none";
      submitBtn.removeAttribute("disabled");
    } else {
      e.target.style.border = "3px solid red";
      emailErrorMsg.style.display = "inline";
      submitBtn.setAttribute("disabled");
    }
  });

  //verifying birth date
  todayDateForm.addEventListener("focus", (e) => {
    submitErrorMsg.style.display = "none";
    locationErrorMsg.style.display = "none";
    dateErrorMsg.style.display = "none";
  });

  todayDateForm.addEventListener("input", (e) => {
    if (e.value === null) {
      dateErrorMsg.style.display = "inline";
      e.target.style.border = "3px solid red";
      submitBtn.setAttribute("disabled");
    } else if (e.target.value === todayDate) {
      e.target.style.border = "3px solid red";
      dateErrorMsg.style.display = "inline";
      submitBtn.setAttribute("disabled");
    } else {
      dateErrorMsg.style.display = "none";
      e.target.style.border = "3px solid #51d115";
      submitBtn.removeAttribute("disabled");
    }
  });

  //city of tournement

  quantityNbr.value = 1; //quantity value

  quantityNbr.addEventListener("focus", (e) => {
    quantityErrorMsg.style.display = "none";
  });

  quantityNbr.addEventListener("change", (e) => {
    if (e.target.value == "0") {
      quantityErrorMsg.style.display = "inline";
      submitBtn.setAttribute("disabled");
    } else {
      quantityErrorMsg.style.display = "none";
      submitBtn.removeAttribute("disabled");
    }
  });

  //first radio button checked
  if (!radioBtns[0].checked) {
    radioBtns[0].checked = true;
  }

  //checking conditions
  if (!conditionAccept.checked) {
    conditionAccept.checked = true;
  }

  conditionAccept.addEventListener("change", (e) => {
    if (!e.target.checked) {
      conditionErrorMsg.style.display = "block";
      submitBtn.disabled = true;
    } else {
      conditionErrorMsg.style.display = "none";
      submitBtn.disabled = false;
    }
  });

  //submit event
  submitBtn.addEventListener("click", ($event) => {
    if (
      firstName.value === "" ||
      lastName.value === "" ||
      email.value === "" ||
      !email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) ||
      todayDateForm.value === "" ||
      todayDateForm.value === todayDate ||
      !conditionAccept.checked
    ) {
      submitErrorMsg.style.display = "inline";
      submitBtn.disabled = true;
    } else if (quantityNbr.value == "0") {
      quantityErrorMsg.style.display = "inline";
      submitBtn.disabled = true;
    } else {
      submitBtn.disabled = false;
      $event.preventDefault(); //the page will be not refresh when submit button will be clicked

      hideMessages(); //call function hideMessages

    //reset borders inputs
    firstName.style.border = "0px solid #fff";
    lastName.style.border = "0px solid #fff";
    email.style.border = "0px solid #fff";
    todayDateForm.style.border = "0px solid #fff";

    infoForm.reset(); //reset formulaire

    thankYouModal.style.display = "inline"; //show modal thank you
    infoForm.style.display = "none"; //hide modal form
  }
 });

}


/* launch modal form */
function launchModal() {
  modalbg.style.display = "block";
  infoForm.style.display = "inline"; //show form
  thankYouModal.style.display = "none"; //hide thank you

  fillForm(); // fill the form function

  hideMessages(); //hide messages function
}




/** 3. Ajout validation ou messages d'erreur */ 



/** EVENTS
 * ---------------------------------------
 * ---------------------------------------
*/

/* launch modal event */
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

/* 1. Close modal events: CLICK  */
closeModal.addEventListener("click", () => {
  modalbg.style.display = "none";
})

// close modal thank you
closebuttonModal.addEventListener("click", () => {
  modalbg.style.display = "none";
});



//Fermer le formulaire de confirmation
confirmationCloseBtn[0].addEventListener("click", closeModal);










