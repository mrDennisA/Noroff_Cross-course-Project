const listCardMonth = document.getElementById("paymentCardMonth");
const month = ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

month.forEach((dataArray) => {
    listCardMonth.innerHTML += `<option>${dataArray}</option>`;
});

const listCardYear = document.getElementById("paymentCardYear");
const year = ["", "2021", "2022", "2023", "2024", "2025", "2026", "2027", "2028", "2029", "2030"];

year.forEach((dataArray) => {
    listCardYear.innerHTML += `<option>${dataArray}</option>`;
});
