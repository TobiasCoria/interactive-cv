console.log("CV loaded successfully");

const toggleButton = document.getElementById("themeToggle");
const body = document.body;

// estado inicial desde localStorage
const isDarkSaved = localStorage.getItem("theme") === "dark";

if (isDarkSaved) {
  body.classList.add("dark");
  toggleButton.textContent = "☀️";
} else {
  toggleButton.textContent = "🌙";
}

// click
toggleButton.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark");

  toggleButton.textContent = isDark ? "☀️Light Mode" : "🌙Dark Mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

const form = document.getElementById('contact-form');
const statusText = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    statusText.textContent = 'Sending...';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      const data = await response.json();

      if (data.success) {
        statusText.textContent = 'Message sent successfully';
        form.reset();
      } else {
        statusText.textContent = 'Error sending message';
      }
    } catch (error) {
      statusText.textContent = 'Server not available';
    }
  });

  const wasDark = document.body.classList.contains('dark');
document.body.classList.remove('dark'); // temporal
// generar PDF...
if (wasDark) document.body.classList.add('dark'); // restaurar

}

