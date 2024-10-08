// Wait until the document is fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Select "Order Now" button from the banner section
    const orderButton = document.querySelector('section:first-of-type button');

    // Add event listener to the "Order Now" button
    if (orderButton) {
        orderButton.addEventListener('click', function() {
            console.log('Order Now button clicked');
            // Future functionality for ordering can go here
        });
    }

    // Select all "Buy Now" buttons from the featured products section
    const buyButtons = document.querySelectorAll('.buy-now button');

    // Add event listeners to all "Buy Now" buttons
    buyButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            console.log(`${this.previousElementSibling.textContent} - Buy Now button clicked`);
            // Future functionality for handling buy now can be added here
        });
    });

    // Menu icon and dropdown menu functionality
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

    // Close dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!menuIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });

    // Smooth scrolling for dropdown menu links
    const menuLinks = document.querySelectorAll('#dropdown-menu a');

    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId);

            // Smooth scroll to the section if it exists
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }

            // Close the dropdown menu after clicking a link
            dropdownMenu.style.display = 'none';
        });
    });
});
