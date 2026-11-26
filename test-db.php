
<?php

require_once "db.php";

try {
    $stmt = $pdo->query("SELECT COUNT(*) FROM tickets");

    echo "<h2>Database connection successful!</h2>";
    echo "<p>Tickets currently saved: ";
    echo $stmt->fetchColumn();
    echo "</p>";

} catch (PDOException $e) {
    echo "Database error: " .
         htmlspecialchars($e->getMessage());
}
