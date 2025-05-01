// PASSWORD PROTECTION
document.getElementById('enterBtn').addEventListener('click', () => {
  const password = document.getElementById('passwordInput').value;
  const correctPassword = 'yourpassword'; // Change this to your password

  if (password === correctPassword) {
    document.getElementById('lockscreen').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
  } else {
    alert('Incorrect password. Never try again nigga.');
  }
});

// DARK THEME TOGGLE WITH MEMORY
const toggleButton = document.getElementById('themeToggle');

// Check saved theme on load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
});

// Toggle and save theme preference
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
});