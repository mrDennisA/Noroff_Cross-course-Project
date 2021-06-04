function addMain(mens, womens) {
    // Banner
    addBanner(validatePage(mens, womens).category, validatePage(mens, womens).subCategory);

    if (extractPageName === "mens" || extractPageName === "womens") {
        // Categories
        addCategory(validatePage(mens, womens).category);

        // News
        addNews(validatePage(mens, womens).category);
    } else {
        // Products
        addProductsContainer(validatePage(mens, womens).category);
    }

    // Content
    const container = document.getElementById(`container${validatePage(mens, womens).category}`);
    addProducts(container, validatePage(mens, womens).array);
}

fetchApi(urlApi, apiKey);
