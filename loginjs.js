document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple validation for demonstration
  if (username === "Vedant18" && password === "123") {
      alert("Login successful!");
      window.location.href = "indexC1.html"; // Redirect to homepage after login
  } else {
      alert("Invalid username or password.");
  }
});
