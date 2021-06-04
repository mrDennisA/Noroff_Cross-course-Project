// Validate Lenght
function checkLength(value, length) {
    if (value.trim().length > length) {
        return true;
    } else {
        return false;
    }
}

// Validate Text
function validateText(text) {
    const regEX = /^[a-zA-ZæøåÆØÅ0-9 ]*$/;
    const patternMatches = regEX.test(text);
    return patternMatches;
}

// Validate Email
function validateEmail(email) {
    const regEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEX.test(email);
    return patternMatches;
}

// Validate Number
function validateNumber(phone) {
    const regEX = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
    const patternMatches = regEX.test(phone);
    return patternMatches;
}

// Variables
const shippingForm = document.querySelector(".shippingForm");

const shippingEmail = document.getElementById("shippingEmail");
const shippingEmailError = document.querySelector(".errorEmail");

const shippingFirstName = document.getElementById("shippingFirstName");
const shippingFirstNameError = document.querySelector(".errorFirstName");

const shippingLastName = document.getElementById("shippingLastName");
const shippingLastNameError = document.querySelector(".errorLastName");

const shippingAddress01 = document.getElementById("shippingAddress01");
const shippingAddress01Error = document.querySelector(".errorAddress01");

const shippingCity = document.getElementById("shippingCity");
const shippingCityError = document.querySelector(".errorCity");

const shippingCountry = document.getElementById("shippingCountry");
const shippingCountryError = document.querySelector(".errorCountry");

const shippingZipcode = document.getElementById("shippingZipcode");
const shippingZipcodeError = document.querySelector(".errorZipcode");

const shippingPhone = document.getElementById("shippingPhone");
const shippingPhoneError = document.querySelector(".errorPhone");

function inputEmail(event) {
    event.preventDefault();

    if (validateEmail(shippingEmail.value)) {
        shippingEmail.classList = "valTrue";
        shippingEmailError.classList.add("hidden");
    } else {
        shippingEmail.classList = "valFalse";
        shippingEmailError.classList.remove("hidden");
    }
}

function inputFirstName(event) {
    event.preventDefault();

    if (validateText(shippingFirstName.value) && checkLength(shippingFirstName.value, 0)) {
        shippingFirstName.classList = "valTrue";
        shippingFirstNameError.classList.add("hidden");
    } else {
        shippingFirstName.classList = "valFalse";
        shippingFirstNameError.classList.remove("hidden");
    }
}

function inputLastName(event) {
    event.preventDefault();

    if (validateText(shippingLastName.value) && checkLength(shippingLastName.value, 0)) {
        shippingLastName.classList = "valTrue";
        shippingLastNameError.classList.add("hidden");
    } else {
        shippingLastName.classList = "valFalse";
        shippingLastNameError.classList.remove("hidden");
    }
}

function inputAddress01(event) {
    event.preventDefault();

    if (validateText(shippingAddress01.value) && checkLength(shippingAddress01.value, 0)) {
        shippingAddress01.classList = "valTrue";
        shippingAddress01Error.classList.add("hidden");
    } else {
        shippingAddress01.classList = "valFalse";
        shippingAddress01Error.classList.remove("hidden");
    }
}

function inputCity(event) {
    event.preventDefault();

    if (validateText(shippingCity.value) && checkLength(shippingCity.value, 0)) {
        shippingCity.classList = "valTrue";
        shippingCityError.classList.add("hidden");
    } else {
        shippingCity.classList = "valFalse";
        shippingCityError.classList.remove("hidden");
    }
}

function inputCountry(event) {
    event.preventDefault();

    if (checkLength(shippingCountry.value, 0)) {
        shippingCountry.classList = "valTrue";
        shippingCountryError.classList.add("hidden");
    } else {
        shippingCountry.classList = "valFalse";
        shippingCountryError.classList.remove("hidden");
    }
}

function inputZipcode(event) {
    event.preventDefault();

    if (validateText(shippingZipcode.value) && checkLength(shippingZipcode.value, 0)) {
        shippingZipcode.classList = "valTrue";
        shippingZipcodeError.classList.add("hidden");
    } else {
        shippingZipcode.classList = "valFalse";
        shippingZipcodeError.classList.remove("hidden");
    }
}

function inputPhone(event) {
    event.preventDefault();

    if (validateNumber(shippingPhone.value) && checkLength(shippingPhone.value, 2)) {
        shippingPhone.classList = "valTrue";
        shippingPhoneError.classList.add("hidden");
    } else {
        shippingCity.classList = "valFalse";
        shippingPhoneError.classList.remove("hidden");
    }
}

function shippingValidateForm(event) {
    event.preventDefault();

    inputEmail(event);
    inputFirstName(event);
    inputLastName(event);
    inputAddress01(event);
    inputCity(event);
    inputCountry(event);
    inputZipcode(event);
    inputPhone(event);

    if (
        validateEmail(shippingEmail.value) &&
        validateText(shippingFirstName.value) &&
        checkLength(shippingFirstName.value, 0) &&
        validateText(shippingLastName.value) &&
        checkLength(shippingLastName.value, 0) &&
        validateText(shippingAddress01.value) &&
        checkLength(shippingAddress01.value, 0) &&
        validateText(shippingCity.value) &&
        checkLength(shippingCity.value, 0) &&
        validateText(shippingZipcode.value) &&
        checkLength(shippingZipcode.value, 0) &&
        validateNumber(shippingPhone.value) &&
        checkLength(shippingPhone.value, 2)
    ) {
        document.location.href = "./cart_payment.html";
    }
}

shippingEmail.addEventListener("input", inputEmail);
shippingFirstName.addEventListener("input", inputFirstName);
shippingLastName.addEventListener("input", inputLastName);
shippingAddress01.addEventListener("input", inputAddress01);
shippingCity.addEventListener("input", inputCity);
shippingCountry.addEventListener("input", inputCountry);
shippingZipcode.addEventListener("input", inputZipcode);
shippingPhone.addEventListener("input", inputPhone);
shippingForm.addEventListener("submit", shippingValidateForm);
