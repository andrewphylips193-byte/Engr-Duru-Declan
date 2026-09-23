 ```javascript
// =========================================
// MOBILE NAVIGATION
// =========================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// =========================================
// AUTOMATIC COPYRIGHT YEAR
// ========================================= 2026

document.getElementById("year").textContent = new Date().getFullYear();


// =========================================
// CONTACT FORM
// =========================================

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();
});
```
