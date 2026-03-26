const DEMO_USER = "admin";
const DEMO_PASSWORD = "1234";

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberSessionInput = document.getElementById("rememberSession");
const loginMessage = document.getElementById("loginMessage");
const demoAccessButton = document.getElementById("demoAccess");

demoAccessButton.addEventListener("click", () => {
  usernameInput.value = DEMO_USER;
  passwordInput.value = DEMO_PASSWORD;
  loginMessage.textContent = "";
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  if (username === DEMO_USER && password === DEMO_PASSWORD) {
    loginMessage.style.color = "green";
    loginMessage.textContent = "Ingreso correcto. Redirigiendo...";

    if (rememberSessionInput.checked) {
      localStorage.setItem("loginUser", username);
    } else {
      sessionStorage.setItem("loginUser", username);
    }

    setTimeout(() => {
      window.location.href = "https://google.com";
    }, 900);

    return;
  }

  loginMessage.style.color = "#d9534f";
  loginMessage.textContent = "Usuario o contraseña incorrectos.";
});