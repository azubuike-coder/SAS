// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get the form and inputs
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    // Add an event listener to handle form submission
    form.addEventListener('submit', function(event) {
        // Prevent the form from submitting automatically
        event.preventDefault();

        // Validate the form inputs
        if (validateForm()) {
            // If valid, show a success message (for demonstration)
            alert("Your message has been sent successfully!");

            // Clear the form fields after submission
            form.reset();
        }
    });

    // Validate form inputs
    function validateForm() {
        let isValid = true;

        // Check if name is empty
        if (nameInput.value.trim() === "") {
            isValid = false;
            alert("Please enter your name.");
        }

        // Check if email is valid
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(emailInput.value)) {
            isValid = false;
            alert("Please enter a valid email address.");
        }

        // Check if message is empty
        if (messageInput.value.trim() === "") {
            isValid = false;
            alert("Please enter a message.");
        }

        return isValid;
    }
});
