// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select all "Order Now" and "Buy Now" buttons
    const orderButton = document.querySelector('section:first-of-type button');
    const buyButtons = document.querySelectorAll('.buy-now button');

    // Add event listener to the "Order Now" button
    if (orderButton) {
        orderButton.addEventListener('click', function() {
            console.log('Order Now button clicked');
            // Future functionality for ordering can go here
        });
    }

    // Add event listeners to all "Buy Now" buttons
    buyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            console.log(`${this.previousElementSibling.textContent} - Buy Now button clicked`);
        });
    });

    // Menu icon dropdown
    const menuIcon = document.getElementById('menu-icon');
    const dropdownMenu = document.getElementById('dropdown-menu');

    // Toggle dropdown on menu icon click
    menuIcon.addEventListener('click', function() {
        if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
            dropdownMenu.style.display = "block";
        } else {
            dropdownMenu.style.display = "none";
        }
    });
});
