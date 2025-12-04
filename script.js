// dark mode
const themeToggleBtn = document.getElementById("themeToggle");

function applyThemeFromStorage() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  updateThemeToggleText();
}

function updateThemeToggleText() {
  if (!themeToggleBtn) return;
  const isDark = document.body.classList.contains("dark");
  themeToggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
}

applyThemeFromStorage();

if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeToggleText();
  });
}

// mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks && navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
    }
  });
});

// scroll to top
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (!scrollTopBtn) return;
  if (window.scrollY > 250) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// typing animation home page
const typingText = document.getElementById("typingText");

if (typingText) {
  const roles = ["Full-Time Student", "Passionate Learner", "Future Innovator"];
  let roleIndex = 0;
  let charIndex = 0;
  let typing = true;

  function typeLoop() {
    const currentRole = roles[roleIndex];

    if (typing) {
      typingText.textContent = currentRole.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentRole.length) {
        typing = false;
        setTimeout(typeLoop, 1300);
        return;
      }
    } else {
      typingText.textContent = currentRole.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        typing = true;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    const speed = typing ? 90 : 60;
    setTimeout(typeLoop, speed);
  }

  typeLoop();
}

// scroll reveal
const revealElements = document.querySelectorAll(".reveal");

function handleReveal() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);

// contact form validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!formMessage) return;

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    // validation
    if (name === "") {
      formMessage.textContent = "Please enter your name.";
      formMessage.className = "form-message error";
      return;
    }

    if (!isValidEmail(email)) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.className = "form-message error";
      return;
    }

    if (message.length < 10) {
      formMessage.textContent = "Your message should be at least 10 characters.";
      formMessage.className = "form-message error";
      return;
    }

    // success message
    formMessage.textContent = "Message sent successfully! I will get back to you soon.";
    formMessage.className = "form-message success";
    contactForm.reset();
  });
}
