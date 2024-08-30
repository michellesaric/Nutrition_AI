<?php
session_start();

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Origin: https://recipix.vercel.app");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'backend/src/models/Admin.php';
require_once 'backend/src/controllers/RecipeController.php';
require_once 'backend/src/controllers/CategoryController.php';
require_once 'backend/src/controllers/IngredientController.php'; 

$adminCredentials = array(
    'admin' => 'admin'
);

$baseUri = '/backend/public/index.php';
$requestUri = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$requestMethod = $_SERVER['REQUEST_METHOD'];

// Handle login request
if ($requestMethod === 'POST' && $requestUri === $baseUri . '/login') {
    $input = json_decode(file_get_contents("php://input"), true);
    if (isset($input['username']) && isset($input['password'])) {
        $username = $input['username'];
        $password = $input['password'];

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

$controller = new RecipeController();
$categoryController = new CategoryController();
$ingredientController = new IngredientController(); 

// Routes that do not require admin authentication
if ($requestMethod === 'GET' && $requestUri === $baseUri . '/get-categories') {
    $categoryController->listAllCategories();
} elseif ($requestMethod === 'GET' && $requestUri === $baseUri . '/get-ingredients') {
    if (isset($_GET['search'])) {
        $searchString = $_GET['search'];
        $ingredientController->getAllIngredientsBySearch($searchString);
    } else {
        $ingredientController->getAllIngredients();
    }
}

// Routes that require admin authentication
else if (isset($_SESSION['admin_id'])) {
    if ($requestMethod === 'POST' && $requestUri === $baseUri . '/create-recipe') {
        $controller->createRecipe();
    } elseif ($requestMethod === 'POST' && $requestUri === $baseUri . '/create-ingredient') {
        $ingredientController->createIngredient();
    } else {
        http_response_code(404);
        echo json_encode(['status' => 'error', 'message' => 'Endpoint not found']);
    }
} else {
    http_response_code(401);
    echo json_encode(['status' => 'error', 'message' => 'Unauthorized']);
}
?>