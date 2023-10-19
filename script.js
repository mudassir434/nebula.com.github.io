// Get a reference to the button element by its ID
const myButton = document.getElementById('myButton');

// Add a click event listener to the button
myButton.addEventListener('click', function () {
    // When the button is clicked, show an alert
    alert('Button Clicked!');
});



document.addEventListener("DOMContentLoaded", function () {
    // Reference the form elements
    const signUpForm = document.getElementById("signUpForm");
    const signInForm = document.getElementById("signInForm");

    // Add event listeners to the forms for form validation
    if (signUpForm) {
        signUpForm.addEventListener("submit", function (event) {
            if (!validateSignUpForm()) {
                event.preventDefault(); // Prevent form submission if validation fails
            }
        });
    }

    if (signInForm) {
        signInForm.addEventListener("submit", function (event) {
            if (!validateSignInForm()) {
                event.preventDefault(); // Prevent form submission if validation fails
            }
        });
    }

    // Validation functions for sign-up and sign-in forms
    function validateSignUpForm() {
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm_password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
    }

    function validateSignInForm() {
        // Add any validation you need for the sign-in form here
        // Example: Check if the username and password meet your criteria
        return true; // Return true if the form is valid
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Reference the data container
    const dataContainer = document.getElementById("data-container");

    // Make an AJAX request to an API
    fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
            // Create HTML elements to display the data
            const dataElement = document.createElement("p");
            dataElement.textContent = `Data: ${data.someProperty}`;

            // Append the data to the container
            dataContainer.appendChild(dataElement);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});


   