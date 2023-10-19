
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('signin-form');
    var submitButton = document.getElementById('submit-button');
    var message = document.getElementById('message');

    // Simulate registered users (you should replace this with actual user data)
    var registeredUsers = [
        { username: 'malik1', password: '12345' },
        { username: 'asd1', password: '12345' },
        { username: 'qwe1', password: '12345' }
    ];

    submitButton.addEventListener('click', function () {
        var username = form.elements.username.value;
        var password = form.elements.password.value;

        var user = registeredUsers.find(function (u) {
            return u.username === username && u.password === password;
        });

        if (user) {
            // Successful sign-in
            message.textContent =alert ('Successful Sign-In');
            
            // Redirect to index.html
            window.location.href = 'index.html';
        } else {
            // Invalid username or password
            message.textContent =alert ('Invalid username or password.');
        }
    });
});
