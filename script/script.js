// ===============================
// Mobile Menu Toggle
// ===============================
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// ===============================
// Contact Modal
// ===============================
const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const closeBtn = document.querySelector(".modal .close");

if (contactBtn && contactModal && closeBtn) {
  // Open modal
  contactBtn.addEventListener("click", () => {
    contactModal.style.display = "flex";
  });

  // Close modal via × button
  closeBtn.addEventListener("click", () => {
    contactModal.style.display = "none";
  });

  // Close modal by clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === contactModal) {
      contactModal.style.display = "none";
    }
  });

  // Close modal via Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      contactModal.style.display = "none";
    }
  });
}

// ===============================
// Collapse mobile menu on link click
// ===============================
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("active");
  });
});

// ===============================
// Smooth Scrolling for anchors
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ===============================
// Animation on scroll
// ===============================
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