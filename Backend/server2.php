<?php
// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Email content
$subject = "New Booking Received";
$user_message = "Hello $name,\n\nThank you for booking with us. We have received your booking and will get back to you shortly.\n\nBest regards,\nYour Company Name";

$sales_message = "New Booking Details:\n\nName: $name\nEmail: $email\nPhone: $phone\nMessage: $message";

// Send email to user
$user_headers = "From: Your Company Name <sales@yourcompany.com>";
$user_success = mail($email, $subject, $user_message, $user_headers);

// Send email to sales
$sales_headers = "From: $name <$email>";
$sales_success = mail("sales@saepes.com", $subject, $sales_message, $sales_headers);

// Check if emails were sent successfully
if ($user_success && $sales_success) {
    echo "Emails sent successfully.";
} else {
    echo "Failed to send emails.";
}
