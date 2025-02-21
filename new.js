const sections = document.querySelectorAll('.content-section');
    const dots = document.querySelectorAll('.dot');
    let currentSectionIndex = 0;

    // Function to show the current section and update active dot
    function showSection(index) {
      sections.forEach((section, idx) => {
        section.classList.remove('active', 'previous');
        dots[idx].classList.remove('active');
        if (idx === index) {
          section.classList.add('active');
          dots[idx].classList.add('active');
        } else if (idx < index) {
          section.classList.add('previous');
        }
      });
    }

    // Scroll event to move between sections
    window.addEventListener('wheel', (event) => {
      if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
      } else if (event.deltaY < 0 && currentSectionIndex > 0) {
        currentSectionIndex--;
      }
      showSection(currentSectionIndex);
    });

    // Dot click event to jump to specific section
    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        currentSectionIndex = parseInt(e.target.getAttribute('data-index'));
        showSection(currentSectionIndex);
      });
    });