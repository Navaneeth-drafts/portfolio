    // Navigation toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Form submission
const contactForm = document.querySelector(".contact-form form");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks for your message! I'll get back to you soon.");
    contactForm.reset();
});