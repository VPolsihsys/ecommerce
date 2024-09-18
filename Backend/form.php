<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $first_name = htmlspecialchars(trim($_POST['first_name']));
    $last_name = htmlspecialchars(trim($_POST['last_name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['success' => false, 'message' => 'Invalid email format']);
        exit;
    }

    // Email to site owner
    $to = "contact@saepes.com";
    $subject = "New Contact Form Submission";
    $body = "First Name: $first_name\nLast Name: $last_name\nEmail: $email\nPhone: $phone\nMessage:\n$message";
    $headers = "From: $email";

    // Send email to site owner
    if (mail($to, $subject, $body, $headers)) {
        // Email to user
        $user_subject = "Thank you for contacting Saepes";
        $user_body = "Dear $first_name,\n\nThank you for submitting the form. Our team will get back to you shortly.\n\nBest regards,\nSaepes Team";
        $user_headers = "From: contact@saepes.com";

        // Send thank you email to user
        mail($email, $user_subject, $user_body, $user_headers);

        // Return success response
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'There was a problem sending your email. Please try again.']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}