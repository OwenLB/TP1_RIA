<?php
$servername = "localhost";
$tablename = "TP1_RIA";
$username = "root";
$password = "";
$port = 8889;
$message = "";
$grettings = "Hello ";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$tablename", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $message = "Connected successfully";
    $_ENV['db'] = $conn;
} catch (PDOException $e) {
    $message = "Connection failed: " . $e->getMessage();
}
