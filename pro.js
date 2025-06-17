// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "Sending message...";

    // Simulate sending message
    setTimeout(() => {
      status.textContent = "Thanks! Your message has been sent.";
      form.reset();
    }, 1500);
  });
});
