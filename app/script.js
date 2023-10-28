    // JavaScript for image slideshow
    let currentSlide = 0;
    const slides = document.querySelectorAll('.large-hero img');
    const maxSlide = slides.length - 1;

    function showSlide(index) {
      slides[currentSlide].style.display = 'none';
      slides[index].style.display = 'block';
      currentSlide = index;
    }

    function nextSlide() {
      const nextIndex = (currentSlide === maxSlide) ? 0 : currentSlide + 1;
      showSlide(nextIndex);
    }

    setInterval(nextSlide, 5000); // Auto-advance the slideshow every 5 seconds

    // JavaScript for smooth scrolling effect
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
      });
    });