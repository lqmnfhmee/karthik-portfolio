// ---------------------------
// Dark Mode (Persistent)
// ---------------------------

const darkToggle = document.getElementById("dark-toggle");

// Load saved mode from localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkToggle.textContent = "☀️";
}

// Fix icon on page load (important)
if (document.body.classList.contains("dark-mode")) {
    darkToggle.textContent = "☀️";
}

// Toggle mode when clicking button
darkToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkToggle.textContent = "☀️";
        localStorage.setItem("darkMode", "enabled");
    } else {
        darkToggle.textContent = "🌙";
        localStorage.setItem("darkMode", "disabled");
    }
});


// ---------------------------
// Scroll To Top Button
// ---------------------------
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ---------------------------
// Typing Animation (Home Page)
// ---------------------------
const typingElement = document.getElementById("typingText");

if (typingElement) {

    const words = [
        "Full-Time Student",
        "Passionate Learner",
        "Future Innovator"
    ];

    let wordIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        let currentWord = words[wordIndex];
        typingElement.textContent = currentWord.slice(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {
            setTimeout(() => {
                charIndex = 0;
                wordIndex = (wordIndex + 1) % words.length;
                typingElement.textContent = "";
                setTimeout(typeEffect, 200);
            }, 1500);
        } else {
            setTimeout(typeEffect, 80);
        }
    }

    typeEffect();
}

// ---------------------------
// Scroll Reveal Animations
// ---------------------------
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight - 100;

        if (elementTop < windowHeight) {
            element.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ---------------------------
// Contact Form Validation
// ---------------------------
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stop form from refreshing page

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate Name
        if (name === "") {
            formMessage.textContent = "Please enter your name.";
            formMessage.className = "error";
            return;
        }

        // Validate Email
        if (!email.includes("@") || !email.includes(".")) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.className = "error";
            return;
        }

        // Validate Message
        if (message.length < 5) {
            formMessage.textContent = "Message must be at least 5 characters long.";
            formMessage.className = "error";
            return;
        }

        // Success!
        formMessage.textContent = "Message sent successfully!";
        formMessage.className = "success";

        // Optional: Clear fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    });
}

