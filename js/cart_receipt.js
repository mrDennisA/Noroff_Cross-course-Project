addHeader();

main.innerHTML += `
    <div class="wrapper-container">
        <div class="receipt">
            <h1>Hi First Last Name!</h1>
            <h3>Thank you for Your purchase from Rainydays</h3>
            <div>
                <h4>YOUR ORDER INFORMATION:</h4>
                <div class="receipt-info">
                    <div>
                        <ul>
                            <li class="fw">Order ID:</li>
                            <li>A123456789</li>
                        </ul>
                        <ul>
                            <li class="fw">Order Date:</li>
                            <li>Date, Month, Year</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li class="fw">Bill To:</li>
                            <li>Email.Address@domain.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <h4>YOUR ORDER:</h4>
                <div class="receipt-order">
                    <div>
                        <ul>
                            <li class="fw">Description:</li>
                            <li>Product Name</li>
                        </ul>
                        <ul>
                            <li>1,300.00</li>
                        </ul>
                    </div>
                    <div class="receipt-total">
                        <ul>
                            <li>Total:</li>
                            <li class="fw">1,300.00</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

main.classList.remove("loader");

// End
main.innerHTML += `
      <div class="banner"></div>
  `;

addFooter();
