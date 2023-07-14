// Variable declaration

const eyeIcon = document.getElementById("eyeIcon");
const password = document.getElementById("password");
const eyeClose =
  // show/hide the password on click of icon

  eyeIcon.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text";
      eyeIcon.src = "images/eye-open.png";
    } else {
      password.type = "password";
      eyeIcon.src = "images/eye-close.png";
    }
  });
