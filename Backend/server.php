<?php
// Establish a connection to the MySQL database
$servername = "localhost"; // Change this to your MySQL server address
$username = "root"; // Change this to your MySQL username
$password = "jsrmfsuh1"; // Change this to your MySQL password
$dbname = "saepes"; // Change this to your MySQL database name

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo "Database connected successfully<br>";
}

// Check if the form data is received
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve form data
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $product = $_POST['product'] ?? '';

    // Debugging: Output received form data
    echo "Received Form Data:<br>";
    echo "Name: $name<br>";
    echo "Email: $email<br>";
    echo "Product: $product<br>";

    // Prepare an SQL statement to insert data into the database
    $sql = "INSERT INTO quotation (name, email, product) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);

    // Bind parameters to the prepared statement
    $stmt->bind_param("sss", $name, $email, $product);

    // Execute the prepared statement
    if ($stmt->execute()) {
        echo "Data inserted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the statement
    $stmt->close();

    // Send email
    $to = "saudfaruqi123@gmail.com";
    $subject = "New Quotation Request";
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Product: $product\n";
    $headers = "From: saudafaruqi@gmail.com"; // Set the sender email address

    // Debugging: Output email content
    echo "<br><br>Email Content:<br>";
    echo "To: $to<br>";
    echo "Subject: $subject<br>";
    echo "Message:<br>$message<br>";
    echo "Headers: $headers<br>";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully";
    } else {
        echo "Failed to send email";
    }
} else {
    // If the request method is not POST, return an error
    http_response_code(405);
    echo "Method Not Allowed";
}

// Close the connection
$conn->close();
