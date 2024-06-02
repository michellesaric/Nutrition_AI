<?php
session_start();

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'backend/src/models/Admin.php';

$adminCredentials = array(
    'admin' => 'admin'
);

$baseUri = '/Nutrition_AI/backend/public/index.php';

$requestUri = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);

// Handle login request
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $requestUri === $baseUri . '/login') {
    // Read the raw input
    $input = file_get_contents("php://input");
    $data = json_decode($input, true);

    // Check if JSON decoding was successful and required fields are set
    if (is_array($data) && isset($data['username']) && isset($data['password'])) {
        $username = $data['username'];
        $password = $data['password'];

        // Debugging: print out the username and password
        error_log("Username: " . $username);
        error_log("Password: " . $password);

        // Validate username and password
        if ($username === 'admin' && $password === 'admin') {
            // Set session variables
            $_SESSION['admin_id'] = 4;

            // Send success response
            http_response_code(200);
            echo json_encode(['message' => 'Login successful']);
            exit;
        } else {
            // Send error response for invalid credentials
            http_response_code(401);
            echo json_encode(['message' => 'Invalid username or password']);
            exit;
        }
    } else {
        // Send error response for missing username or password
        http_response_code(400);
        echo json_encode(['message' => 'Username and password are required']);
        exit;
    }
}

// Check if user is authenticated
if (!isset($_SESSION['admin_id'])) {
    http_response_code(401);
    echo json_encode(['status' => 'error', 'message' => 'Unauthorized']);
    exit();
}

// Include controllers and handle other requests
require_once 'backend/src/controllers/RecipeController.php';
require_once 'backend/src/controllers/CategoryController.php';
require_once 'backend/src/controllers/IngredientController.php'; 

$controller = new RecipeController();
$categoryController = new CategoryController();
$ingredientController = new IngredientController(); 

if ($requestMethod === 'POST' && $requestUri === $baseUri . '/create-recipe') {
    $controller->createRecipe();
} elseif ($requestMethod === 'GET' && $requestUri === $baseUri . '/get-categories') {
    $categoryController->listAllCategories();
} elseif ($requestMethod === 'GET' && $requestUri === $baseUri . '/get-ingredients') {
    if (isset($_GET['search'])) {
        $searchString = $_GET['search'];
        $ingredientController->getAllIngredientsBySearch($searchString);
    } else {
        $ingredientController->getAllIngredients();
    }
} else {
    http_response_code(404);
    echo json_encode(['status' => 'error', 'message' => 'Endpoint not found']);
}
?>