const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (id === null) {
    location.href = "/";
}

async function fetchProduct(url, id, key) {
    const item = await (await fetch(url + id + key)).json();

    // Add Header
    addHeader();

    // Add Breadcrumbs
    addBreadcrumbs(item);

    body.style.backgroundColor = "var(--color02)";
    main.classList.remove("loader");

    main.innerHTML += `
        <section class="wrapper-container">
            <div class="product">
                <img class="product-img" src="${item.images[0].src}" alt="Product image" />
                <div>
                    <div class="stars"><span>${item.average_rating}</span></div>
                    <div class="product-name">
                        <h3>${item.name}</h3>
                        ${item.short_description}
                        <h2>Price ${item.price}</h2>
                        ${item.description}
                    </div>
                    <div  class="product-color">
                        <h4>Color:</h4>
                        <div></div>
                    </div>
                    <div class="product-size">
                        <h4>Select size:</h4>
                        <div class="h4"></div>
                    </div>
                    <div class="cta"><button class="h4">ADD TO CART</button></div>
                </div>
            </div>
            <div class="product-info">
                <h3>About Product</h3>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                    magna aliquyam erat, sed diam voluptua. At vero eos et 
                    accusam et justo duo dolores et ea rebum. Stet clita kasd 
                    gubergren, no sea
                </p>
            </div>
        </section>
        <div class="banner"></div>
    `;

    // Add Color
    const productColor = document.querySelector(".product-color div");
    item.attributes[0].options.forEach((color) => {
        productColor.innerHTML += `
            <input type="radio" id="${color}" name="color">
            <label for="${color}" style="background-color:${color}"></label>
        `;
    });

    // Add Size
    const productSize = document.querySelector(".product-size div");
    item.attributes[1].options.forEach((size) => {
        productSize.innerHTML += `
            <input type="radio" id="size${size}" name="size">
            <label for="size${size}">${size}</label>
        `;
    });

    // Add to Cart
    const addToCartButton = document.querySelector(".cta button");

    const cart = JSON.parse(localStorage.getItem("cartList") || "[]");
    addToCartButton.onclick = () => {
        cart.push(item);
        localStorage.setItem("cartList", JSON.stringify(cart));
    };

    // Add Footer
    addFooter();
}

fetchProduct(urlApi, id, apiKey);
