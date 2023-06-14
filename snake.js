// Initialize the canvas and context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Define the grid size and cell size
const gridSize = 20;
const cellSize = canvas.width / gridSize;

// Define the snake's initial position and direction
let snake = [{ x: 10, y: 10 }];
let direction = "right";

// Define the food's initial position
let food = { x: Math.floor(Math.random() * gridSize), y: Math.floor(Math.random() * gridSize) };

// Define the game loop
function gameLoop() {
  // Move the snake in the
}