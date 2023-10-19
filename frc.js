document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('signup-form');
    var submitButton = document.getElementById('submit-button');

    submitButton.addEventListener('click', function () {
        var username = form.elements.username.value;
        var password = form.elements.password.value;

        if (username && password) {
            // Form is filled correctly, redirect to the sign-in page
            window.location.href = 'signin.html';
        } else {
            // Form is not filled correctly, do nothing or display an error message
            alert('Please fill out both fields.');
        }
    });
});
