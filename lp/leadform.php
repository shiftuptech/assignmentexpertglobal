<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $country_code = $_POST['Phonecode'];
    // $country_iso = $_POST['CountryIsoCode'];
    $phone = $_POST['phone'];

    // Get the user's IP address and the URL of the form
    $user_ip = $_SERVER['REMOTE_ADDR']; // Get user's IP address
    $form_url = "https://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"; // Get the form URL

    // Validate form data
    if (!empty($name) && !empty($email) && !empty($phone)) {
        // Prepare email content
        $to = "zakishahid.93@gmail.com, acemyassignment73@gmail.com"; // Email recipient
        $subject = "New Lead from $name"; // Email subject
        $message = "Name: $name\nEmail: $email\nPhone: $phone\nIP Address: $user_ip\nForm URL: $form_url";
        $headers = "From: noreply@yourwebsite.com\r\n" . // Sender email
                   "Reply-To: $email\r\n" .              // Set reply-to email
                   "Content-Type: text/plain; charset=UTF-8\r\n"; // Set email content type

        // Send the email
        $mailSent = mail($to, $subject, $message, $headers);

        // Check if email is sent successfully
        if ($mailSent) {
            // Redirect to the provided thank you page after success
            header("Location: https://yellow-porpoise-534778.hostingersite.com/thankyou.php");
            exit(); // Ensure no further code is executed
        } else {
            echo "<h3>Sorry, there was an issue sending your information. Please try again.</h3>";
        }

    } else {
        // Error handling
        echo "<h3>All fields are required!</h3>";
    }
}
?>
