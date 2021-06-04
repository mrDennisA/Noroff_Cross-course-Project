// Header
addHeader();

// Banner
addBanner(validatePage().category, validatePage().subCategory);

main.innerHTML += `
    <section class="about-info">
        <div>
            <h2>History</h2>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                sanctus est Lorem ipsum dolor sit amet.
            </p>
        </div>
    </section>
`;

body.style.backgroundColor = "var(--color02)";
main.classList.remove("loader");

// End
main.innerHTML += `
      <div class="banner"></div>
  `;

// Footer
addFooter();
