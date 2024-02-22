document.addEventListener('DOMContentLoaded', function() {
    // Sign-up form validation
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        // Add other form fields for sign-up validation

        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            clearErrorMessages();

            let isValid = true;

            // Validate username
            if (!username.value.trim()) {
                setError(username, 'Username is required');
                isValid = false;
            }

            // Validate email
            if (!isValidEmail(email.value.trim())) {
                setError(email, 'Please enter a valid email address');
                isValid = false;
            }

            // Add more validation for other sign-up fields here

            // Submit form if validation passes
            if (isValid) {
                // Form submission logic (e.g., send data to server)
                alert('Sign-up form submitted successfully!');
            }
        });
    }

    // Sign-in form validation
    const signinForm = document.getElementById('signin-form');
    if (signinForm) {
        const signinUsername = document.getElementById('signin-username');
        const signinPassword = document.getElementById('signin-password');

        signinForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            clearErrorMessages();

            let isValid = true;

            // Validate username
            if (!signinUsername.value.trim()) {
                setError(signinUsername, 'Username is required');
                isValid = false;
            }

            // Validate password
            if (!signinPassword.value.trim()) {
                setError(signinPassword, 'Password is required');
                isValid = false;
            }

            // Submit form if validation passes
            if (isValid) {
                // Form submission logic (e.g., send data to server)
                alert('Sign-in form submitted successfully!');
            }
        });
    }

    // Function to clear error messages
    function clearErrorMessages() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function(error) {
            error.textContent = '';
        });
    }

    // Function to set error message for a field
    function setError(field, message) {
        const errorMessage = field.nextElementSibling;
        errorMessage.textContent = message;
    }

    // Function to validate email using regex
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
