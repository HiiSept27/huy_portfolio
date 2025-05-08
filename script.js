// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// GSAP Animations
gsap.from('header', {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
});

// Mobile menu toggle
const mobileMenuButton = document.querySelector('button.md\\:hidden');
const mobileMenu = document.querySelector('.md\\:hidden.hidden');

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// Smooth scroll for navigation
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Close mobile menu if open
      if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
      }
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});


// Form submission handling
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.');
    contactForm.reset();
  });
}

// Intersection Observer for section animations
const sections = document.querySelectorAll('section');
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px'
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach(section => {
  sectionObserver.observe(section);
});

// Skill progress bars animation
const skillBars = document.querySelectorAll('.skill-progress-bar');
const skillObserverOptions = {
  threshold: 0.5,
  rootMargin: '0px'
};

const skillObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.style.width;
      entry.target.style.width = '0';
      setTimeout(() => {
        entry.target.style.width = width;
      }, 100);
      observer.unobserve(entry.target);
    }
  });
}, skillObserverOptions);

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});
