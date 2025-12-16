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
