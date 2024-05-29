<?php
// Set CORS headers
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Include the controller
require_once 'backend/src/controllers/RecipeController.php';
require_once 'backend/src/controllers/CategoryController.php';
require_once 'backend/src/controllers/IngredientController.php'; // Include the IngredientController

// Get the request URI and method
$requestUri = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$requestMethod = $_SERVER['REQUEST_METHOD'];

$controller = new RecipeController();
$categoryController = new CategoryController();
$ingredientController = new IngredientController(); // Create an instance of IngredientController

// Adjust the route checking
$baseUri = '/Nutrition_AI/backend/public/index.php';

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