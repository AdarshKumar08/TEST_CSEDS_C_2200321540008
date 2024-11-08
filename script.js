document.addEventListener('DOMContentLoaded', function() {
    const price = 5000; // Product price
    const quantityInput = document.getElementById('quantity');
    const totalPriceDisplay = document.getElementById('total-price');
    const buyNowButton = document.getElementById('buy-now');

    // Function to update the total price
    function updateTotalPrice() {
        const quantity = parseInt(quantityInput.value);
        const totalPrice = price * quantity;
        totalPriceDisplay.textContent = `Total Price: ₹${totalPrice}`;
    }

    // Event listener for quantity input change
    quantityInput.addEventListener('input', updateTotalPrice);

    // Event listener for the "Buy Now" button
    buyNowButton.addEventListener('click', function() {
        const quantity = parseInt(quantityInput.value);
        const totalPrice = price * quantity;
        alert(`You added ${quantity} items to your cart for ₹${totalPrice}`);
    });

    // Initialize the total price on page load
    updateTotalPrice();
});