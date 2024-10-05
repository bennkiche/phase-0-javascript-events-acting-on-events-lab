// index.js

function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    let left = dodger.style.left.replace('px', ''); // Get current left position
    left = parseInt(left); // Convert to integer
  
    // Check if the dodger can move left (not going beyond 0)
    if (left > 0) {
      dodger.style.left = `${left - 10}px`; // Move left by 10 pixels
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let left = dodger.style.left.replace('px', ''); // Get current left position
    left = parseInt(left); // Convert to integer
  
    // Check if the dodger can move right (not going beyond the container, e.g., 360px)
    if (left < 360) {
      dodger.style.left = `${left + 10}px`; // Move right by 10 pixels
    }
  }
  
  // Example of how you might call these functions based on events
  document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      moveDodgerLeft();
    } else if (event.key === 'ArrowRight') {
      moveDodgerRight();
    }
  });
  
