themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {

   document.body.classList.toggle("dark-mode");


}
themeButton.addEventListener("click", toggleDarkMode);
// Query for the sign now button
const signNowButton = document.querySelector('#sign-now-button');

let signatureCount = 3;

const addSignature = () => {
// Get the input fields
const nameInput = document.querySelector('#name');
const hometownInput = document.querySelector('#hometown');
const emailInput = document.querySelector('#email');

// Get the values from the input fields
const name = nameInput.value;
const hometown = hometownInput.value;
const email = emailInput.value

const person = {
  name: name,
  hometown: hometown,
  email: email,
}
   // Create a new paragraph element
    const signatureElement = document.createElement('p');

    // Set the text content of the new element
    signatureElement.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`;

    // Find the signatures section on the page
    const signaturesSection = document.querySelector('.signatures');

    // Add the new signature element to the signatures section
    signaturesSection.appendChild(signatureElement);

    // Remove the old signature counter
    const oldSignatureCounter = signaturesSection.querySelector('#signature-counter');
    if (oldSignatureCounter) {
      oldSignatureCounter.remove();
    }

    // Increment the signature count
    signatureCount++;

    // Create a new paragraph element for the signature count
    const signatureCounter = document.createElement('p');

    // Set the text content of the new element
    signatureCounter.textContent = `🖊️ ${signatureCount} people have signed this petition and support this cause.`;

    // Set the id of the new element
    signatureCounter.id = 'signature-counter';

    // Add the new signature counter to the signatures section
    signaturesSection.appendChild(signatureCounter);

  };

const validateForm = () => {
let containsErrors = false;
let petitionInputs = document.getElementById("sign-petition").elements;
let person = {
  name: petitionInputs[0].value,
  hometown: petitionInputs[1].value,
  email: petitionInputs[2].value,
};

   for (let i = 0; i < petitionInputs.length; i++) {
      if (person.hometown.length < 2) {
        petitionInputs[i].classList.add('error');
        containsErrors = true;
      } else {
        petitionInputs[i].classList.remove('error');
      }
    }

    const email = document.getElementById('email');
    if (!email.value.includes('.com')) {
      containsErrors = true;
      email.classList.add('error');
    } else {
      email.classList.remove('error');
    }

    if (!containsErrors) {
      addSignature();
      toggleModal(person);
      for (let i = 0; i < petitionInputs.length; i++) {
        petitionInputs[i].value = '';
      }
      containsErrors = false;
    }
  };

  signNowButton.addEventListener('click', validateForm);

let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

let revealableContainers = document.querySelectorAll('.revealable');

function reveal() {
  let windowHeight = window.innerHeight;

  for (let i = 0; i < revealableContainers.length; i++) {
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;

    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active'); // Add the 'active' class
    } else {
      revealableContainers[i].classList.remove('active'); // Remove the 'active' class
    }
  }
}

window.addEventListener('scroll', reveal);

// Select the Reduce Motion button
const reduceMotionButton = document.getElementById('reduce-motion-button');

// Add event listener to the button
reduceMotionButton.addEventListener('click', reduceMotion);

function reduceMotion() {
 
  animation.transition = 'none'; 

  
  for (let i = 0; i < revealableContainers.length; i++) {
    // Update style properties for revealableContainers
    revealableContainers[i].style.transition = animation.transition;
   
  }
}


const toggleModal = (person) => {
  const modal = document.querySelector("#thanks-modal");
  const modalContent = document.querySelector("#thanks-content-modal");
  let intervalId = setInterval(scaleImage, 500);  


  modal.style.display = "flex";

   // Create a new paragraph element
  const modalElement = document.createElement('p');

  // Set the text content of the new element
  modalElement.textContent = `Thank You ${person.name}, you put a smile on my face.`;

  // Find the signatures section on the page
  const thankyouSection = document.querySelector('.modaltextcontainer');

  // Add the new signature element to the signatures section
  thankyouSection.appendChild(modalElement);

  setTimeout(() => {
  clearInterval(intervalId);
  modal.style.display = "none";
}, 4000)

};

  let scaleFactor = 1;
const modalImage = document.querySelector("#thanks-modal img");

const scaleImage = () => {
  if (scaleFactor === 1) {
    scaleFactor = 0.8;
  } else {
    scaleFactor = 1;
  }
  modalImage.style.transform = `scale(${scaleFactor})`;
}

const closeButton = document.querySelector("#closemodal");

const hideModal = () => {
  const modal = document.querySelector("#thanks-modal");
  modal.style.display = "none";
}

closeButton.addEventListener("click", hideModal);