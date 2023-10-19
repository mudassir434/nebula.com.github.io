<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // In a real-world application, you would typically perform user authentication here.
    // You might compare credentials with a database or an authentication service.

    // For the sake of this example, let's assume successful authentication:
    if ($username === 'example_user' && $password === 'example_password') {
        // Start a session (if not already started)
        session_start();

        // Store user information in the session
        $_SESSION['username'] = $username;

        // Redirect the user to a dashboard or welcome page
        header('Location: dashboard.php');
        exit;
    } else {
        // Authentication failed; you might show an error message
        echo "Authentication failed. Please check your credentials.";
    }
}
?>
