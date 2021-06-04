const contactForm = document.querySelector("form");
const contactEmail = document.querySelector("#contactEmail");
const contactEmailError = document.querySelector(".errorEmail");
const contactName = document.querySelector("#contactName");
const contactNameError = document.querySelector(".errorName");
const contactSubject = document.querySelector("#contactSubject");
const contactSubjectError = document.querySelector(".errorSubject");
const contactButton = document.querySelector("#contactButton");

// Validate Form
function inputEmail(event) {
    event.preventDefault();

    if (validateEmail(contactEmail.value)) {
        contactEmail.classList = "valTrue";
        contactEmailError.classList.add("hidden");
    } else {
        contactEmail.classList = "valFalse";
        contactEmailError.classList.remove("hidden");
    }
}

function inputName(event) {
    event.preventDefault();

    if (validateName(contactName.value) && checkLength(contactName.value, 0)) {
        contactName.classList = "valTrue";
        contactNameError.classList.add("hidden");
    } else {
        contactName.classList = "valFalse";
        contactNameError.classList.remove("hidden");
    }
}

function inputSubject(event) {
    event.preventDefault();

    if (
        validateName(contactSubject.value) &&
        checkLength(contactSubject.value, 0)
    ) {
        contactSubject.classList = "valTrue";
        contactSubjectError.classList.add("hidden");
    } else {
        contactSubject.classList = "valFalse";
        contactSubjectError.classList.remove("hidden");
    }
}

function contactValidateForm(event) {
    event.preventDefault();

    if (validateEmail(contactEmail.value)) {
        contactEmail.classList = "valTrue";
        contactEmailError.classList.add("hidden");
    } else {
        contactEmail.classList = "valFalse";
        contactEmailError.classList.remove("hidden");
    }

    if (validateName(contactName.value) && checkLength(contactName.value, 0)) {
        contactName.classList = "valTrue";
        contactNameError.classList.add("hidden");
    } else {
        contactName.classList = "valFalse";
        contactNameError.classList.remove("hidden");
    }

    if (
        validateName(contactSubject.value) &&
        checkLength(contactSubject.value, 0)
    ) {
        contactSubject.classList = "valTrue";
        contactSubjectError.classList.add("hidden");
    } else {
        contactSubject.classList = "valFalse";
        contactSubjectError.classList.remove("hidden");
    }

    if (
        validateEmail(contactEmail.value) &&
        validateName(contactName.value) &&
        checkLength(contactName.value, 0) &&
        validateName(contactSubject.value) &&
        checkLength(contactSubject.value, 0)
    ) {
        contactForm.reset();
        contactForm.classList.add("messageSuccess");
        contactForm.innerHTML = `Thank you for your request. We will answer you as soon as possible.`;
    }
}

// Validate Lenght
function checkLength(value, length) {
    if (value.trim().length > length) {
        return true;
    } else {
        return false;
    }
}

// Validate Name
function validateName(name) {
    const regEX = /^[a-zA-ZæøåÆØÅ0-9 ]*$/;
    const patternMatches = regEX.test(name);

    return patternMatches;
}

// Validate Email
function validateEmail(email) {
    const regEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEX.test(email);
    return patternMatches;
}

contactEmail.addEventListener("input", inputEmail);
contactName.addEventListener("input", inputName);
contactSubject.addEventListener("input", inputSubject);
contactForm.addEventListener("submit", contactValidateForm);
