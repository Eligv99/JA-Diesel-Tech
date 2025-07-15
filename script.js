const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenuBtn = document.getElementById('closeMenuBtn');

    function openMenu() {
      mobileMenu.classList.add('open');
      mobileMenu.setAttribute('aria-hidden', 'false');
      // Trap focus inside menu
      mobileMenu.querySelector('nav a').focus();
      document.body.style.overflow = 'hidden'; // prevent background scroll
    }

    function closeMenu() {
      mobileMenu.classList.remove('open');
      mobileMenu.setAttribute('aria-hidden', 'true');
      hamburgerBtn.focus();
      document.body.style.overflow = ''; // restore scroll
    }

    hamburgerBtn.addEventListener('click', openMenu);
    hamburgerBtn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openMenu();
      }
    });

    closeMenuBtn.addEventListener('click', closeMenu);
    closeMenuBtn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        closeMenu();
      }
    });

    // Close menu on pressing Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMenu();
      }
    });

    // Close menu on clicking outside
    document.addEventListener('click', e => {
      if (mobileMenu.classList.contains('open') && !mobileMenu.contains(e.target) && e.target !== hamburgerBtn) {
        closeMenu();
      }
    });


    // Slider Functions

    const slideLeftBtn = document.getElementById('slideLeft');
    const slideRightBtn = document.getElementById('slideRight');
    const sliderTexts = document.getElementById('sliderTexts');

    const slides = [
      "Mon - Fri: 8:00AM - 5:00PM",
      "1234 Custom St, City, State"
    ];
    let currentSlide = 0;
    let autoSlideInterval = null;

    function updateSlide() {
      sliderTexts.textContent = slides[currentSlide];
    }

    function startAutoSlide() {
      if (autoSlideInterval) clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
      }, 5000);
    }

    function stopAutoSlide() {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
      }
    }

    slideLeftBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlide();
      stopAutoSlide();
      if (window.innerWidth > 768) startAutoSlide();
    });

    slideRightBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlide();
      stopAutoSlide();
      if (window.innerWidth > 768) startAutoSlide();
    });

    // Keyboard accessibility for slide buttons
    slideLeftBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        slideLeftBtn.click();
      }
    });
    slideRightBtn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        slideRightBtn.click();
      }
    });

    // EmailJS contact form handler
    document.addEventListener('DOMContentLoaded', function() {
      const contactForm = document.getElementById('contactForm');
      if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
          e.preventDefault();

          // Collect form data
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;

          // Send email via EmailJS
          emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
            from_name: name,
            from_email: email,
            message: message
          })
          .then(function(response) {
            alert("¡Mensaje enviado exitosamente!");
            contactForm.reset();
          }, function(error) {
            alert("Error al enviar el mensaje. Intenta de nuevo.");
          });
        });
      }
    });

// Bootstrap carousel slide functions
function slideGallery(direction) {
    var carousel = bootstrap.Carousel.getOrCreateInstance(document.getElementById('galeriaCarrusel'));
    if (direction === 1) {
      carousel.next();
    } else {
      carousel.prev();
    }
  }