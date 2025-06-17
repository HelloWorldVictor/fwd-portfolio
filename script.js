// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

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

    // Example: log it (replace with your fetch/ajax call)
    console.log("Submitting contact form:", formData);

    /*  
      // If you have an endpoint to POST to:
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          alert('Thanks! Your message has been sent.');
          form.reset();
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (err) {
        console.error(err);
        alert('There was a problem sending your message.');
      }
      */
  });
});
