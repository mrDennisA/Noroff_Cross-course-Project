addHeader();

main.innerHTML += `
    <div class="wrapper-container">
        <!-- Shipping -->
        <form class="paymentForm">
            <h4>
                <span><a href="./cart_shipping.html">1. SHIPPING</a></span>
                <span class="underline">2. PAYMENT</span>
            </h4>
            <h3>Payment Information</h3>
            <div>
                <label for="paymentCardName">
                    Name on Card
                    <span class="requiredField"> * </span>
                    <span class="errorCardName hidden">Please provide the Cardholder's name.</span>
                </label>
                <input type="text" id="paymentCardName" class="" />
            </div>
            <div>
                <label for="paymentCardNumber">
                    Card Number
                    <span class="requiredField"> * </span>
                    <span class="errorCardNumber hidden">Please provide a Credit Card Number.</span>
                </label>
                <input type="text" id="paymentCardNumber" class="" />
            </div>
            <div class="paymentCardDate">
                <label for="paymentCardMonth paymentCardYear">
                    Expiration Date
                    <span class="requiredField"> * </span>
                    <span class="errorCardDate hidden">The Expiration Date field is required.</span>
                </label>
                <div>
                    <select id="paymentCardMonth"></select>
                    <select id="paymentCardYear"></select>
                </div>
            </div>
            <div>
                <label for="paymentCardCVV">
                    CVV Number
                    <span class="requiredField"> * </span>
                    <span class="errorCardCVV hidden">Please provide the CVV Number found on the back of your card.</span>
                </label>
                <input type="text" id="paymentCardCVV" class="" />
            </div>
            <div class="paymentButton">
                <button type="submit" id="paymentButton" name="paymentButton" class="h4">PLACE ORDER</button>
            </div>
        </form>

        <!-- Cart -->
        <div class="shippingInfo">
            <div class="cartContainer"></div>
            <div class="shippingTotal">
                <div>
                    <span>Subtotal</span>
                    <span>1230.00</span>
                </div>
                <div>
                    <span>Shipping</span>
                    <span>0.00</span>
                </div>
                <div>
                    <span>Tax</span>
                    <span>70.00</span>
                </div>
                <div class="fw">
                    <span>TOTAL</span>
                    <span>1300.00</span>
                </div>
            </div>
        </div>
    </div>
`;

const cartContainer = document.querySelector(".cartContainer");
const cartItems = JSON.parse(localStorage.getItem("cartList"));

cartContainer.innerHTML = ` <div class="cart-header">
                                <div class="h4">MY CART (${cartItems.length} ITEM)</div>
                            </div>`;

cartItems.forEach((data) => {
    console.log(data);
    cartContainer.innerHTML += ` <div class="cart-item">
                                        <div class="cart-item_img">
                                            <img src="${data.images[0].src}">
                                            <p>${data.name}</p>
                                        </div>
                                        <div class="cart-item_price">${data.price}</div>
                                    </div>`;
});

main.classList.remove("loader");
