const countrySelect = document.getElementById("shippingCountry");

const countryList = [
    "",
    "Australia",
    "Austria",
    "Belgium",
    "Canada",
    "Denmark",
    "Finland",
    "France",
    "Germany",
    "Ireland",
    "Italy",
    "Norway",
    "Poland",
    "Spain",
    "Sweden",
    "Switzerland",
    "The Netherlands",
    "United Kingdom",
    "United States",
];

countryList.forEach((dataArray) => {
    countrySelect.innerHTML += `<option>${dataArray}</option>`;
});
