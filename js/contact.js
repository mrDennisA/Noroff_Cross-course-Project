// Header
addHeader();

// Banner
addBanner(validatePage().category, validatePage().subCategory);

// Form
addContactForm();
main.classList.remove("loader");

// End
main.innerHTML += `
      <div class="banner"></div>
  `;

// Footer
addFooter();
