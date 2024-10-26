// script.js
const scrollContainer = document.getElementById('scroll-container');
const sections = document.querySelectorAll('#scroll-container > div');
let currentSection = 0;

// Function to scroll to the desired section
function scrollToSection(sectionIndex) {
  scrollContainer.style.transform = `translateY(-${sectionIndex * 100}vh)`;
}

// Add scroll event listener
window.addEventListener('wheel', (event) => {
  // Scroll down
  if (event.deltaY > 0 && currentSection < sections.length - 1) {
    currentSection += 1;
  }
  // Scroll up
  else if (event.deltaY < 0 && currentSection > 0) {
    currentSection -= 1;
  }
  // Apply the scroll effect
  scrollToSection(currentSection);
});
