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
const paymentForm = document.querySelector(".paymentForm");

const paymentCardName = document.getElementById("paymentCardName");
const paymentCardNameError = document.querySelector(".errorCardName");

const paymentCardNumber = document.getElementById("paymentCardNumber");
const paymentCardNumberError = document.querySelector(".errorCardNumber");

const paymentCardMonth = document.getElementById("paymentCardMonth");
const paymentCardYear = document.getElementById("paymentCardYear");
const paymentCardDateError = document.querySelector(".errorCardDate");

const paymentCardCVV = document.getElementById("paymentCardCVV");
const paymentCardCVVError = document.querySelector(".errorCardCVV");

function inputCardName(event) {
    event.preventDefault();

    if (
        validateText(paymentCardName.value) &&
        checkLength(paymentCardName.value, 0)
    ) {
        paymentCardName.classList = "valTrue";
        paymentCardNameError.classList.add("hidden");
    } else {
        paymentCardName.classList = "valFalse";
        paymentCardNameError.classList.remove("hidden");
    }
}

function inputCardNumber(event) {
    event.preventDefault();

    if (
        validateNumber(paymentCardNumber.value) &&
        checkLength(paymentCardNumber.value, 15)
    ) {
        paymentCardNumber.classList = "valTrue";
        paymentCardNumberError.classList.add("hidden");
    } else {
        paymentCardNumber.classList = "valFalse";
        paymentCardNumberError.classList.remove("hidden");
    }
}

function inputCardDate(event) {
    event.preventDefault();

    if (checkLength(paymentCardMonth.value, 0)) {
        paymentCardMonth.classList = "valTrue";
    } else {
        paymentCardMonth.classList = "valFalse";
    }

    if (checkLength(paymentCardYear.value, 0)) {
        paymentCardYear.classList = "valTrue";
    } else {
        paymentCardYear.classList = "valFalse";
    }

    if (
        checkLength(paymentCardMonth.value, 0) &&
        checkLength(paymentCardYear.value, 0)
    ) {
        paymentCardDateError.classList.add("hidden");
    } else if (
        !checkLength(paymentCardMonth.value, 0) ||
        !checkLength(paymentCardYear.value, 0)
    ) {
        paymentCardDateError.classList.remove("hidden");
    }
}

function inputCardCVV(event) {
    event.preventDefault();

    if (
        validateNumber(paymentCardCVV.value) &&
        checkLength(paymentCardCVV.value, 2)
    ) {
        paymentCardCVV.classList = "valTrue";
        paymentCardCVVError.classList.add("hidden");
    } else {
        paymentCardCVV.classList = "valFalse";
        paymentCardCVVError.classList.remove("hidden");
    }
}

function paymentValidateForm(event) {
    event.preventDefault();

    inputCardName(event);
    inputCardNumber(event);
    inputCardDate(event);
    inputCardCVV(event);

    if (
        validateText(paymentCardName.value) &&
        checkLength(paymentCardName.value, 0) &&
        validateNumber(paymentCardNumber.value) &&
        checkLength(paymentCardNumber.value, 15) &&
        checkLength(paymentCardMonth.value, 0) &&
        checkLength(paymentCardYear.value, 0) &&
        validateNumber(paymentCardCVV.value) &&
        checkLength(paymentCardCVV.value, 2)
    ) {
        document.location.href = "./cart_receipt.html";
    }
}

paymentCardName.addEventListener("input", inputCardName);
paymentCardNumber.addEventListener("input", inputCardNumber);
paymentCardMonth.addEventListener("input", inputCardDate);
paymentCardYear.addEventListener("input", inputCardDate);
paymentCardCVV.addEventListener("input", inputCardCVV);
paymentForm.addEventListener("submit", paymentValidateForm);
