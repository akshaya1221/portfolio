const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Set initial icon based on current theme
function updateThemeIcon() {
  if (body.classList.contains('dark')) {
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

// Load saved theme preference FIRST
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.remove('dark', 'light');
  body.classList.add(savedTheme);
}

// Initialize icon on page load
updateThemeIcon();

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    body.classList.add('light');
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
  }
  updateThemeIcon();
  
  // Save preference to localStorage
  localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// ==========================
// SMOOTH SCROLLING
// ==========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ==========================
// NAVBAR SCROLL EFFECT
// ==========================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add shadow on scroll
  if (currentScroll > 50) {
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// ==========================
// PROFILE IMAGE HOVER EFFECT
// ==========================
const profilePic = document.querySelector('.profile-pic');
if (profilePic) {
  profilePic.addEventListener('mouseenter', () => {
    profilePic.style.transform = 'scale(1.05)';
  });
  
  profilePic.addEventListener('mouseleave', () => {
    profilePic.style.transform = 'scale(1)';
  });
}

// ==========================
// ANIMATE ON SCROLL (Optional)
// ==========================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section, .project-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});