addHeader();

main.innerHTML += `
    <div class="wrapper-container">
        <div class="cartContainer"></div>
    </div>
    <div class="banner"></div>
`;

const cartContainer = document.querySelector(".cartContainer");

const cartArray = JSON.parse(localStorage.getItem("cartList"));

// Validate Cart
function cart() {
    if (cartArray !== null) {
        buildCart();
    }
    if (cartArray === null || cartArray.length === 0) {
        emptyCart();
    }
}

cart();

// Build Cart
function buildCart() {
    cartContainer.innerHTML = `
        <div class="cart-header">
            <div class="h4">MY CART (${cartArray.length} ITEM)</div>
            <div>QUANTITY</div>
            <div>PRICE</div>
            <div>REMOVE</div>
        </div>
        <div class="cart-list"></div>
        <div class="cart-total">
            <div>
  
                <div>TOTAL PRICE:</div>
                <div class="total-price">price</div>
 
            </div>
            <div><a class="h4" href="./cart_shipping.html">CONTINUE CHECKOUT</a></div>
        </div>
    `;

    // Loop cartArray
    const cartListContainer = document.querySelector(".cart-list");
    cartListContainer.innerHTML = "";
    cartArray.forEach((list) => {
        cartListContainer.innerHTML += `
            <div class="cart-item">
                <div class="cart-item_img">
                    <img src="${list.images[0].src}">
                    <span>${list.name}</span>
                </div>
                <div class="product-quantity">
                    <button class="minus h3">-</button>
                    <input type="number" title="quantity" name="quantity-1" value="1" min="0" max="10" step="1" autocomplete="off">
                    <button class="pluss h3">+</button>
                </div>
                <div class="cart-item_price">${list.price}</div>
                <div><button class="item_remove h4" data-product="${list.id}">X</button></div>
            </div>
            `;
    });

    // Remove Item
    const removeButton = document.querySelectorAll(".item_remove");
    removeButton.forEach((button) => {
        console.log(button);
        button.onclick = () => {
            console.log("click");
            for (let i = 0; i < cartArray.length; i++) {
                if (cartArray[i].id === parseInt(button.dataset.product)) {
                    cartArray.splice(i, 1);
                    localStorage.setItem("cartList", JSON.stringify(cartArray));
                    cart();
                }
            }
        };
    });
}

// Empty Cart
function emptyCart() {
    cartContainer.innerHTML = ` 
        <h4 class="cart-header">MY CART (0 ITEMS)</h4>
        <div class="cart-empty">
            <p>You currently have no items in your shopping cart.</p>
            <div class="cart-empty_link">
                <div class="cart-empty_link-mens">
                    <p>MENS PRODUCTS</p>
                    <a href="./mens.html"><h4>SHOP NOW</h4></a>
                </div>
                <div class="cart-empty_link-womens">
                    <p>WOMENS PRODUCTS</p>
                    <a href="./womens.html"><h4>SHOP NOW</h4></a>
                </div>
            </div>
        </div>
    `;
}

body.style.backgroundColor = "var(--color02)";
main.classList.remove("loader");

// Add Footer
addFooter();
