<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    if ($name && $email && $message) {
        $to = 'pasakirgil@gmail.com';
        $subject = "New message from $name";
        $body = "Name: $name\nEmail: $email\n\n$message";
        $headers = "From: $name <$email>";
        if (mail($to, $subject, $body, $headers)) {
            echo '<script>alert("Thank you! Your message has been sent."); window.location="/";</script>';
        } else {
            echo '<script>alert("Sorry, something went wrong. Please try again later."); window.location="/";</script>';
        }
    } else {
        echo '<script>alert("Please fill in all fields correctly."); window.history.back();</script>';
    }
} else {
    header('Location: /');
}
?>