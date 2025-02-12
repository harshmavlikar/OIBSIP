let logOutBtn = document.getElementById("logOutBtn");
let welcomeUser = document.getElementById("userName");
let userName = localStorage.getItem("userName");

welcomeUser.innerHTML = "Welcome, you are Logged in as " + userName;

logOutBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
