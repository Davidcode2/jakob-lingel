/**
 * Mouse tracker animation for link hover effects
 * Smoothly follows cursor when hovering over links
 */

export function initMouseTracker() {
  const tracker = document.getElementById('mouse-tracker');
  const allLinks = document.querySelectorAll('a');
  
  if (!tracker) {
    console.warn('Mouse tracker element not found');
    return;
  }

  let mouseX = 0;
  let mouseY = 0;
  let trackerX = 0;
  let trackerY = 0;
  let isHovering = false;
  
  // Smooth animation function using linear interpolation
  function animateTracker() {
    if (isHovering) {
      // Lerp (linear interpolation) for smooth following
      const speed = 0.15;
      const offsetX = 20;
      const offsetY = 30;
      
      trackerX += (mouseX - trackerX - offsetX) * speed;
      trackerY += (mouseY - trackerY - offsetY) * speed;
      
      tracker.style.left = `${trackerX}px`;
      tracker.style.top = `${trackerY}px`;
    }
    
    requestAnimationFrame(animateTracker);
  }
  
  // Start animation loop
  animateTracker();
  
  // Attach event listeners to each link
  allLinks.forEach(link => {
    // Track mouse position
    link.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    // Show tracker on hover
    link.addEventListener('mouseenter', (e) => {
      isHovering = true;
      trackerX = e.clientX;
      trackerY = e.clientY;
      tracker.classList.add('visible');
    });
    
    // Hide tracker when leaving
    link.addEventListener('mouseleave', () => {
      isHovering = false;
      tracker.classList.remove('visible');
    });
  });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMouseTracker);
} else {
  initMouseTracker();
}
