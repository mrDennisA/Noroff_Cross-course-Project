function validatePage(mens, womens) {
    if (extractPageName === "index" || extractPageName === "") {
        extractPageName = "index";
        // title.innerHTML = `Home - Community Science Museum`;
        // description.content = "Community Science Museum is a non-profit organization";
    }

    if (extractPageName === "mens") {
        return {
            category: "Mens",
            subCategory: "Mens",
            array: mens.filter((value) => categoryFilter(value, "news")),
        };
    }

    if (extractPageName === "mens_canoeing") {
        return {
            category: "Mens",
            subCategory: "Canoeing",
            array: mens,
        };
    }

    if (extractPageName === "mens_outdoor") {
        return {
            category: "Mens",
            subCategory: "Outdoor",
            array: mens,
        };
    }

    if (extractPageName === "mens_skiing") {
        return {
            category: "Mens",
            subCategory: "Skiing",
            array: mens,
        };
    }

    if (extractPageName === "womens") {
        return {
            category: "Womens",
            subCategory: "Womens",
            array: womens.filter((value) => categoryFilter(value, "news")),
        };
    }

    if (extractPageName === "womens_canoeing") {
        return {
            category: "Womens",
            subCategory: "Canoeing",
            array: womens,
        };
    }

    if (extractPageName === "womens_outdoor") {
        return {
            category: "Womens",
            subCategory: "Outdoor",
            array: womens,
        };
    }

    if (extractPageName === "womens_skiing") {
        return {
            category: "Womens",
            subCategory: "Skiing",
            array: womens,
        };
    }

    if (extractPageName === "contact")
        return {
            category: "Contact Us",
            subCategory: "Contact",
        };

    if (extractPageName === "about")
        return {
            category: "About Us",
            subCategory: "About",
        };
}

// Header
function addHeader() {
    document.querySelector("header").innerHTML = `
        <nav>
            <div class="h_flex">
                <a class="h_logo" href="./index.html"
                    ><img class="h_logosize" src="./images/logo/rainydays_logo.svg" alt="Rainydays Logo" title="Rainydays"
                /></a>
            </div>
            <input type="checkbox" id="h_btn" class="h_btn" />
            <label for="h_btn" class="h_toggle" alt="Dropdown menu" title="Dropdown menu"></label>
            <div class="h_menu01 font-h5">
                <div class="h_menugroup01">
                    <label for="h_btn-01" class="h_label">MENS +</label>
                    <a class="h_labellink" href="./mens.html">MENS</a>
                    <input type="checkbox" id="h_btn-01" />
                    <ul class="h_submenu font-h6">
                        <li><a href="./mens_outdoor.html">Outdoor</a></li>
                        <li><a href="./mens_skiing.html">Skiing</a></li>
                        <li><a href="./mens_canoeing.html">Canoeing</a></li>
                    </ul>
                </div>
                <div class="h_menugroup01">
                    <label for="h_btn-02" class="h_label">WOMENS +</label>
                    <a class="h_labellink" href="./womens.html">WOMENS</a>
                    <input type="checkbox" id="h_btn-02" />
                    <ul class="h_submenu font-h6">
                        <li><a href="./womens_outdoor.html">Outdoor</a></li>
                        <li><a href="./womens_skiing.html">Skiing</a></li>
                        <li><a href="./womens_canoeing.html">Canoeing</a></li>
                    </ul>
                </div>
                <div class="h_menugroup02">
                    <input class="h_search font-h6" type="text" placeholder="Search.." />
                </div>
            </div>
            <div class="h_menu02">
                <a class="h_cart" href="./cart.html"><img class="h_iconsize" src="./images/icons/cart.svg" alt="Shopping cart" title="Shopping cart" /></a>
            </div>
        </nav>
    `;
}

// BreadCrumbs
function addBreadcrumbs(item) {
    main.innerHTML += `
    <section>
        <div class="wrapper-container">
            <ul class="breadcrumbs"></ul>
        </div>
    </section>
    `;

    if (item.categories[0].slug === "mens") {
        document.querySelector(".breadcrumbs").innerHTML = `   
            <li><a href="./index.html">Rainydays</a></li>
            <li><a href="./mens.html">Mens</a></li>
            <li><a href="./mens_outdoor.html">Outdoor</a></li>
            <li>${item.name}</li>
        `;
    }

    if (item.categories[0].slug === "womens") {
        document.querySelector(".breadcrumbs").innerHTML = `
            <li><a href="./index.html">Rainydays</a></li>
            <li><a href="./womens.html">Womens</a></li>
            <li><a href="./womens_outdoor.html">Outdoor</a></li>
            <li>${item.name}</li>
        `;
    }
}

// Banner
function addBanner(category, subCategory) {
    main.innerHTML += `
        <section class="banner-categories ${subCategory.toLowerCase()}">
            <div class="wrapper-container banner">
                <ul class="breadcrumbs"></ul>
                <h1></h1>
            </div>
        </section>
    `;

    if (extractPageName === "mens" || extractPageName === "womens") {
        document.querySelector(".breadcrumbs").innerHTML = `
            <li><a href="./index.html">Rainydays</a></li>
            <li></li>
        `;
        document.querySelector("h1").innerHTML = `${category}`;
    } else if (
        extractPageName === "mens_canoeing" ||
        extractPageName === "mens_outdoor" ||
        extractPageName === "mens_skiing" ||
        extractPageName === "womens_canoeing" ||
        extractPageName === "womens_outdoor" ||
        extractPageName === "womens_skiing"
    ) {
        document.querySelector(".breadcrumbs").innerHTML = `
            <li><a href="./index.html">Rainydays</a></li>
            <li><a href="./${category.toLowerCase()}.html">${category}</a></li>
            <li></li>
        `;

        document.querySelector("h1").innerHTML = `${subCategory}`;
    } else {
        document.querySelector(".breadcrumbs").innerHTML = `
            <li><a href="./index.html">Rainydays</a></li>
            <li></li>
        `;
        document.querySelector("h1").innerHTML = `${category}`;
    }
}

// Category
function addCategory(category) {
    main.innerHTML += `
        <section class="wrapper-container categories">
            <div class="outdoor banner">        
                <a href="./${category.toLowerCase()}_outdoor.html" alt="Putdoor link"><h4>OUTDOOR</h4></a> 
            </div>
            <div class="skiing banner">                  
                <a href="./${category.toLowerCase()}_skiing.html" alt="Skiing link"><h4>SKIING</h4></a>
            </div>
            <div class="canoeing banner">
                <a href="./${category.toLowerCase()}_canoeing.html"  alt="Canoeing link"><h4>CANOEING</h4></a>
            </div>
        </section>
    `;
}

// News
function addNews(category) {
    main.innerHTML += `
        <div class="wrapper-container news">
            <h2>News ${category}</h2>
            <div id="container${category}" class="containerGrid"></div>
        </div>
    `;
}

// Products Container
function addProductsContainer(category) {
    main.innerHTML += `
        <div class="wrapper-container">
            <div id="container${category}" class="containerGrid"></div>
        </div>
    `;
}

// Add Products
function addProducts(container, array) {
    array.forEach((array) => {
        container.innerHTML += `<a href="./product_details.html?id=${array.id}">
        <img src="${array.images[0].src}" alt="${array.name}">
        <div>
            <span>${array.average_rating}</span>
            <h4>${array.name}</h4>
            <div>${array.short_description}</div>
            <h3>Price ${array.price}</h3>
        </div>
    </a>`;
    });
}

// Contact Form
function addContactForm() {
    main.innerHTML += `
        <section class="wrapper-container">
            <form class="contactForm">
                <div>
                    <h2>Have a Question for Our Team?</h2>
                    <p>Contact our Customer Service and we will help you answer your questions. Estimated reply time is 2 - 3 business days.</p>
                </div>
                <div>
                    <label for="contactEmail"
                        >Email :<span class="requiredField"> * </span><span class="errorEmail hidden">Please enter a valid email address.</span></label
                    >
                    <input type="email" id="contactEmail" name="contactEmail" class="" />
                </div>
                <div>
                    <label for="contactName"
                        >Full Name :<span class="requiredField"> * </span><span class="errorName hidden">Please enter your full name.</span></label
                    >
                    <input type="text" id="contactName" name="contactName" class="" />
                </div>
                <div>
                    <label for="contactSubject"
                        >Subject :<span class="requiredField"> * </span><span class="errorSubject hidden">Required field.</span></label
                    >
                    <textarea id="contactSubject" name="contactSubject" class=""></textarea>
                </div>
                <div>
                    <button type="submit" id="contactButton" name="contactButton" class="h4">SUBMIT</button>
                </div>
            </form>
        </section>
    `;
}

// Footer
function addFooter() {
    const footer = document.querySelector("footer");

    footer.innerHTML = `
        <section class="wrapper-container">
            <div class="links">
                <a href="./about.html">About Us</a>
                <a href="./contact.html">Contact Us</a>
            </div>
            <div class="policy">
                <p>© Copyright
                    <span>2021</span>
                    <a href="./index.html">Rainydays</a>
                    <p>All Rights Reserved</p>
                </p>   
            </div>
        </section>
    `;
}
