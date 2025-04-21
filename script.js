function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}
// enhancements.js

document.addEventListener("DOMContentLoaded", () => {
// Animate headings on scroll
const sections = document.querySelectorAll(".section h1");
const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add("animate-fadeInUp");
  }
});
}, { threshold: 0.6 });

sections.forEach(section => {
observer.observe(section);
});

// Glow effect on buttons
const buttons = document.querySelectorAll(".btn-primary");
buttons.forEach(btn => {
btn.addEventListener("mouseover", () => {
  btn.style.boxShadow = "0 0 20px cornflowerblue";
});
btn.addEventListener("mouseout", () => {
  btn.style.boxShadow = "none";
});
});

// Typing effect for intro subtitle
const subtitle = document.querySelector(".intro h2");
const text = subtitle.textContent;
subtitle.textContent = "";
let i = 0;
function typeEffect() {
if (i < text.length) {
  subtitle.textContent += text.charAt(i);
  i++;
  setTimeout(typeEffect, 100);
}
}
typeEffect();
});