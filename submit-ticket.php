
<?php

header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . '/db.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);

    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method.'
    ]);

    exit;
}

try {

    // Collect form information
    $fullName = trim($_POST['full_name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $category = $_POST['student_category'] ?? '';
    $registrationNumber = trim($_POST['registration_number'] ?? '');
    $ticketPrice = $_POST['ticket_type'] ?? '';
    $quantity = filter_var(
        $_POST['quantity'] ?? null,
        FILTER_VALIDATE_INT
    );

    // Validate required fields
    if (
        $fullName === '' ||
        !filter_var($email, FILTER_VALIDATE_EMAIL) ||
        !in_array($category, ['regular', 'other'], true) ||
        $quantity === false ||
        $quantity < 1 ||
        $quantity > 10
    ) {
        throw new Exception('Please enter valid ticket information.');
    }

    if ($category === 'regular' && $registrationNumber === '') {
        throw new Exception('Registration number is required.');
    }

    // Validate ticket price
    $allowedPrices = [
        'regular' => ['0', '1000'],
        'other' => ['500', '1000']
    ];

    if (!in_array((string)$ticketPrice, $allowedPrices[$category], true)) {
        throw new Exception('Invalid ticket selection.');
    }

    // Calculate amount on server
    $ticketPrice = (int)$ticketPrice;
    $totalAmount = $ticketPrice * $quantity;

    $ticketType = $ticketPrice === 1000 ? 'VIP' : 'Regular';

    // Insert into database
    $sql = "INSERT INTO tickets (
        full_name,
        email,
        student_category,
        registration_number,
        ticket_type,
        quantity,
        total_amount
    ) VALUES (
        :full_name,
        :email,
        :student_category,
        :registration_number,
        :ticket_type,
        :quantity,
        :total_amount
    )";

    $stmt = $pdo->prepare($sql);

    $stmt->execute([
        ':full_name' => $fullName,
        ':email' => $email,
        ':student_category' => $category,
        ':registration_number' => $category === 'regular'
            ? $registrationNumber
            : null,
        ':ticket_type' => $ticketType,
        ':quantity' => $quantity,
        ':total_amount' => $totalAmount
    ]);

    echo json_encode([
        'success' => true,
        'message' => 'Your ticket reservation has been saved successfully!',
        'ticket_id' => $pdo->lastInsertId()
    ]);

} catch (Exception $e) {

    http_response_code(400);

    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);

} catch (PDOException $e) {

    error_log($e->getMessage());

    http_response_code(500);

    echo json_encode([
        'success' => false,
        'message' => 'Database error. Please check your database configuration and table.'
    ]);

}
