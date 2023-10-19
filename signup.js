document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('signup-form');
    var submitButton = document.getElementById('submit-button');
    var errorMessage = document.getElementById('error-message');
    var successMessage = document.getElementById('success-message');

    submitButton.addEventListener('click', function () {
        var username = form.elements.username.value;
        var email = form.elements.email.value;
        var password = form.elements.password.value;
        var confirmPassword = form.elements['confirm-password'].value;

        // Form validation
        if (!username || !email || !password || !confirmPassword) {
            errorMessage.textContent =alert ('Please fill out all fields.');
            successMessage.textContent = ''; // Clear any previous success message
        } else if (password !== confirmPassword) {
            errorMessage.textContent = alert|('Password and Confirm Password do not match.');
            successMessage.textContent = ''; // Clear any previous success message
        } else if (!isValidEmail(email)) {
            errorMessage.textContent =alert('Invalid email address.');
            successMessage.textContent = ''; // Clear any previous success message
        } else {
            // Form is filled correctly, proceed with sign-up
            // You can add your sign-up logic here

            // Display a success message
            successMessage.textContent =alert ('Sign-up successful!');
            errorMessage.textContent = ''; // Clear any previous error message

            // Redirect to the sign-in page after a successful sign-up
            window.location.href = 'signin.html';
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailRegex.test(email);
    }
});


