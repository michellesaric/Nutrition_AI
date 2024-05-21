<?php
require_once '../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__ . '/../..');
$dotenv->load();

class Database {
    private static $dbHost;
    private static $dbName;
    private static $dbUsername;
    private static $dbPassword;

    public static function connect() {
        self::$dbHost = $_ENV['DB_HOST'];
        self::$dbName = $_ENV['DB_NAME'];
        self::$dbUsername = $_ENV['DB_USERNAME'];
        self::$dbPassword = $_ENV['DB_PASSWORD'];
        
        $pdo = new PDO("mysql:host=" . self::$dbHost . ";dbname=" . self::$dbName, self::$dbUsername, self::$dbPassword);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $pdo;
    }
}