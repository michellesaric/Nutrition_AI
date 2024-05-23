<?php
class Database {
    private static $instance = null;
    private $connection;

    private $host = 'your_host';
    private $username = 'your_username';
    private $password = 'your_password';
    private $database = 'your_database';

    // Constructor is private to prevent direct instantiation
    private function __construct() {
        $this->connection = new mysqli($this->host, $this->username, $this->password, $this->database);
        if ($this->connection->connect_error) {
            die("Connection failed: " . $this->connection->connect_error);
        }
    }

    // Method to get instance of database connection
    public static function getInstance() {
        if (self::$instance == null) {
            self::$instance = new Database();
        }
        return self::$instance;
    }

    // Method to get the database connection
    public function getConnection() {
        return $this->connection;
    }
}
?>