// Form validation for Contact Page
document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent form from submitting immediately
    event.preventDefault();

    // Get form elements
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Simple validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else {
        alert("Thank you for your message! We'll get back to you soon.");
        // Clear form fields
        document.querySelector('form').reset();
    }
});

