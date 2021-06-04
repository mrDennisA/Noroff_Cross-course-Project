function addMain(mens, womens) {
    validatePage(mens, womens);

    // Add Banner
    main.innerHTML = `
        <section class="banner-index">
            <div class="wrapper-container">
                <div class="cta">
                    <h1>PUSHING COMFORT ZONE</h1>
                    <h3>
                        <a href="./mens.html">MENS</a>
                        <a href="./womens.html">WOMENS</a>
                    </h3>
                </div>
            </div>
        </section>
    `;

    // Add News
    addNews("Mens");
    addNews("Womens");

    const containerMens = document.getElementById("containerMens");
    const containerWomens = document.getElementById("containerWomens");

    // Filter Array by News Categories
    const newsMens = mens.filter((value) => categoryFilter(value, "news"));
    const newsWomens = womens.filter((value) => categoryFilter(value, "news"));

    addProducts(containerMens, newsMens);
    addProducts(containerWomens, newsWomens);
}

fetchApi(urlApi, apiKey);
