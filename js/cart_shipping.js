addHeader();

main.innerHTML += `
    <div class="wrapper-container">
        <!-- Shipping -->
        <form class="shippingForm">
            <h4>
                <span class="underline">1. SHIPPING</span>
                <span>2. PAYMENT</span>
            </h4>
            <h3>Enter Your details</h3>
            <div>
                <label for="shippingEmail">
                    Email Address:
                    <span class="requiredField"> * </span>
                    <span class="errorEmail hidden">Please enter a valid email address.</span>
                </label>
                <input type="text" id="shippingEmail" class="" />
            </div>
            <div class="shippingName">
                <div>
                    <label for="shippingFirstName">
                        First Name:
                        <span class="requiredField"> * </span>
                        <span class="errorFirstName hidden">Please enter your first name.</span>
                    </label>
                    <input type="text" id="shippingFirstName" />
                </div>
                <div>
                    <label for="shippingLastName" class="shippingLastName">
                        Last Name:
                        <span class="requiredField"> * </span>
                        <span class="errorLastName hidden">Please enter your last name.</span>
                    </label>

                    <input type="text" id="shippingLastName" />
                </div>
            </div>
            <div>
                <label for="shippingAddress01">
                    Address:
                    <span class="requiredField"> * </span>
                    <span class="errorAddress01 hidden">Please enter your address.</span>
                </label>
                <input type="text" id="shippingAddress01" />
            </div>
            <div>
                <label for="shippingAddress02">Address 2:</label>
                <input type="text" id="shippingAddress02" />
            </div>
            <div class="shippingCityCountry">
                <div>
                    <label for="shippingCity">
                        City:
                        <span class="requiredField"> * </span>
                        <span class="errorCity hidden">Please enter your city.</span>
                    </label>
                    <input type="text" id="shippingCity" />
                </div>
                <div>
                    <label for="shippingCountry" class="shippingCountry">
                        Country:
                        <span class="requiredField"> * </span>
                        <span class="errorCountry hidden">Please enter your country.</span>
                    </label>
                    <select id="shippingCountry"></select>
                </div>
            </div>
            <div>
                <label for="shippingZipcode">
                    Postal / Zip Code
                    <span class="requiredField"> * </span>
                    <span class="errorZipcode hidden">Please enter your postal or zip code.</span>
                </label>
                <input type="text" id="shippingZipcode" />
            </div>
            <div>
                <label for="shippingPhone">
                    Phone Number
                    <span class="requiredField"> * </span>
                    <span class="errorPhone hidden">Please enter your phone number.</span>
                </label>
                <input type="tel" id="shippingPhone" />
            </div>
            <div class="shippingDetails">
                <h4>FREE SHIPPING</h4>
                <p>
                    Shipping times are estimates only. Please allow 1-2 business days for processing and 3-5 business days for shipping. Shipping during
                    holidays and to remote locations may take longer.
                </p>
            </div>
            <div class="shippingButton">
                <button type="submit" id="shippingButton" name="shippingButton" class="h4">CONTINUE TO SECURE PAYMENT</button>
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
