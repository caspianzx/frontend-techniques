const checkoutButton = document.getElementById('checkout-button');

function buildSupportedPaymentMethodData() {
    // Example supported payment methods:
    return [{
        supportedMethods: 'basic-card',
        data: {
            supportedNetworks: ['visa', 'mastercard'],
            supportedTypes: ['debit', 'credit']
        }
    }];
}

function buildShoppingCartDetails() {
    // Hardcoded for demo purposes:
    return {
        id: 'order-123',
        displayItems: [
            {
                label: 'Example item',
                amount: {currency: 'USD', value: '1.00'}
            }
        ],
        total: {
            label: 'Total',
            amount: {currency: 'USD', value: '1.00'}
        }
    };
}

if (window.PaymentRequest) {
    let request = new PaymentRequest(buildSupportedPaymentMethodData(),
        buildShoppingCartDetails());

    checkoutButton.addEventListener('click', function() {
        request.show().then(function(paymentResponse) {
            // Handle successful payment
        }).catch(function(error) {
            // Handle cancelled or failed payment. For example, redirect to
            // the legacy web form checkout:

            alert(error)
        });
        // Every click on the checkout button should use a new instance of
        // PaymentRequest object, because PaymentRequest.show() can be
        // called only once per instance.
        // request = new PaymentRequest(buildSupportedPaymentMethodNames(),
        //     buildShoppingCartDetails());
    });
}