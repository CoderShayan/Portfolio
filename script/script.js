// ===============================
// Mobile Menu Toggle
// ===============================
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  if (navLinks) {
    navLinks.classList.toggle("active");
  }
}

// ===============================
// Contact Modal
// ===============================
function setupContactModal() {
  const contactBtn = document.getElementById("contactBtn");
  const heroContactBtn = document.getElementById("heroContactBtn");
  const contactModal = document.getElementById("contactModal");
  const closeBtn = contactModal ? contactModal.querySelector(".close") : null;

  // Open modal from navbar
  if (contactBtn && contactModal) {
    contactBtn.addEventListener("click", () => {
      contactModal.style.display = "flex";
      document.body.style.overflow = "hidden"; // Prevent scrolling
    });
  }

  // Open modal from hero section
  if (heroContactBtn && contactModal) {
    heroContactBtn.addEventListener("click", () => {
      contactModal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  }

  // Close modal via × button
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      contactModal.style.display = "none";
      document.body.style.overflow = "auto"; // Enable scrolling
    });
  }

  // Close modal by clicking outside
  if (contactModal) {
    window.addEventListener("click", (e) => {
      if (e.target === contactModal) {
        contactModal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }

  // Close modal via Escape key
  if (contactModal) {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && contactModal.style.display === "flex") {
        contactModal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }
}

// ===============================
// Message Modal
// ===============================
function setupMessageModal() {
  const messageFloatBtn = document.getElementById("messageFloatBtn");
  const messageModal = document.getElementById("messageModal");
  const messageCloseBtn = messageModal ? messageModal.querySelector(".close") : null;
  const messageForm = document.getElementById("messageForm");

  // Open message modal
  if (messageFloatBtn && messageModal) {
    messageFloatBtn.addEventListener("click", () => {
      messageModal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  }

  // Close message modal via × button
  if (messageCloseBtn) {
    messageCloseBtn.addEventListener("click", () => {
      messageModal.style.display = "none";
      document.body.style.overflow = "auto";
    });
  }

  // Close message modal by clicking outside
  if (messageModal) {
    window.addEventListener("click", (e) => {
      if (e.target === messageModal) {
        messageModal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }

  // Close message modal via Escape key
  if (messageModal) {
    window.addEventListener("keydown", (e) =>{
      if (e.key === "Escape" && messageModal.style.display === "flex") {
        messageModal.style.display = "none";
        document.body.style.overflow = "auto";
      }
    });
  }

  // Form submission handling
  if (messageForm) {
    messageForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = {
        name: document.getElementById('senderName')?.value || '',
        email: document.getElementById('senderEmail')?.value || '',
        subject: document.getElementById('emailSubject')?.value || '',
        message: document.getElementById('messageContent')?.value || ''
      };
      
      console.log('Message form submitted:', formData);
      
      // Create the mailto link
      const mailtoLink = `mailto:its.mshayan@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Open the email client
      window.location.href = mailtoLink;
      
      // Create success message if it doesn't exist
      let successMsg = document.querySelector('.message-success');
      if (!successMsg) {
        successMsg = document.createElement('div');
        successMsg.className = 'message-success';
        successMsg.innerHTML = '<i class="fas fa-check-circle"></i> Redirecting to email client...';
        successMsg.style.background = '#4CAF50';
        successMsg.style.color = 'white';
        successMsg.style.padding = '10px';
        successMsg.style.borderRadius = '5px';
        successMsg.style.marginTop = '15px';
        successMsg.style.textAlign = 'center';
        messageForm.appendChild(successMsg);
      }
      
      // Show success message
      successMsg.style.display = 'block';
      
      // Reset form
      messageForm.reset();
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        if (successMsg) successMsg.style.display = 'none';
        if (messageModal) messageModal.style.display = "none";
        document.body.style.overflow = "auto";
      }, 3000);
    });
  }
}

// ===============================
// Collapse mobile menu on link click
// ===============================
function setupMobileMenu() {
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      const navLinks = document.getElementById("navLinks");
      if (navLinks) {
        navLinks.classList.remove("active");
      }
    });
  });
}

// ===============================
// Smooth Scrolling for anchors
// ===============================
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

// ===============================
// Animation on scroll
// ===============================
function setupScrollAnimation() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  // Observe all section elements
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
}

// ===============================
// Scroll to Top Functionality
// ===============================
function setupScrollToTop() {
  const scrollToTopBtn = document.getElementById("scrollToTop");

  if (scrollToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('active');
      } else {
        scrollToTopBtn.classList.remove('active');
      }
    });
    
    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// ===============================
// Newsletter Form Handling
// ===============================
function setupNewsletter() {
  const newsletterForm = document.querySelector('.newsletter-form');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const emailInput = this.querySelector('input[type="email"]');
      const email = emailInput?.value || '';
      
      if (email) {
        console.log('Newsletter subscription:', email);
        
        // Show success message
        const button = this.querySelector('button');
        if (button) {
          const originalButtonHtml = button.innerHTML;
          button.innerHTML = '<i class="fas fa-check"></i>';
          button.style.background = '#4CAF50';
          
          // Reset form
          if (emailInput) emailInput.value = '';
          
          // Reset button after 2 seconds
          setTimeout(() => {
            button.innerHTML = originalButtonHtml;
            button.style.background = '#ff9800';
          }, 2000);
        }
      }
    });
  }
}

// ===============================
// Smooth scrolling for footer links
// ===============================
function setupFooterLinks() {
  document.querySelectorAll('.footer-section a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
}

// ===============================
// Scroll Down Button in Hero Section
// ===============================
function setupScrollDownButton() {
  const scrollDown = document.querySelector(".scroll-down");

  if (scrollDown) {
    scrollDown.addEventListener("click", () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        aboutSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  }
}

// ===============================
// Initialize all functionality when DOM is loaded
// ===============================
document.addEventListener('DOMContentLoaded', function() {
  // Setup mobile menu toggle
  const menuToggle = document.getElementById("menuToggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleMenu);
  }

  // Setup close menu button
  const closeMenu = document.querySelector(".close-menu");
  if (closeMenu) {
    closeMenu.addEventListener("click", toggleMenu);
  }

  // Initialize all other functionality
  setupContactModal();
  setupMessageModal();
  setupMobileMenu();
  setupSmoothScrolling();
  setupScrollAnimation();
  setupScrollToTop();
  setupNewsletter();
  setupFooterLinks();
  setupScrollDownButton();
  
  // Animate Hero Elements on Page Load
  const heroText = document.querySelector('.hero-text');
  const heroImage = document.querySelector('.hero-image');
  
  if (heroText && heroImage) {
    setTimeout(() => {
      heroText.style.opacity = '1';
      heroText.style.transform = 'translateY(0)';
    }, 300);
    
    setTimeout(() => {
      heroImage.style.opacity = '1';
      heroImage.style.transform = 'translateY(0) scale(1)';
    }, 600);
  }
});

// ===============================
// Window load event for additional initialization
// ===============================
window.addEventListener('load', function() {
  // Additional initialization if needed
});
