const email = "v.hamzat@alustudent.com";
const subject = "Contact Form Submission";
const body = "Name: {name}\nEmail: {email}\nMessage: {message}";
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const button = document.querySelector(".mobile-nav-btn");
  const mobileNav = document.querySelector(".mobile-nav");

  if (!form || !button || !mobileNav) {
    console.error("Contact form not found!");
    return;
  }

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", `${!expanded}`);
    expanded
      ? button.setAttribute("aria-label", "Open menu")
      : button.setAttribute("aria-label", "Close menu");
    mobileNav.setAttribute("data-open", `${!expanded}`);
  });
  Array.from(mobileNav.querySelectorAll("a")).map((link) => {
    link.addEventListener("click", () => {
      button.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("data-open", "false");
    });
  });
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // stop normal form-post
    // gather form data
    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    // basic validation (optional)
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      body
        .replace("{name}", formData.name)
        .replace("{email}", formData.email)
        .replace("{message}", formData.message)
    )}`;
    window.location.href = mailtoLink;

    console.log("Submitting contact form:", formData);
  });
});
