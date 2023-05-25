// Get the car element
const car = document.querySelector('.car');

// Set initial position and speed
let position = 0;
const speed = 5; // Adjust this value to control the car speed

// Function to move the car
function moveCar() {
  // Update the position
  position += speed;

  // Apply the position to the car element
  car.style.left = position + 'px';

  // Request the next frame
  requestAnimationFrame(moveCar);
}

// Start moving the car
moveCar();
