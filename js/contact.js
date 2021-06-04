// Header
addHeader();

// Banner
addBanner(validatePage().category, validatePage().subCategory);

// Form
addContactForm();
body.style.backgroundColor = "var(--color02)";
main.classList.remove("loader");

// End
main.innerHTML += `
      <div class="banner"></div>
  `;

// Footer
addFooter();
