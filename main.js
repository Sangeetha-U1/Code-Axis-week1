const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", function(){

  const type = password.getAttribute("type") === "password" 
    ? "text" 
    : "password";

  password.setAttribute("type", type);

  this.innerHTML = type === "password"
    ? '<i class="bi bi-eye-slash"></i>'
    : '<i class="bi bi-eye"></i>';

});

// FORM VALIDATION

const loginForm = document.getElementById("loginForm");
const passwordError = document.getElementById("passwordError");

loginForm.addEventListener("submit", function(e){

  e.preventDefault(); // always stop form reload

  if(password.value.length < 8){

    passwordError.style.display = "block";

  } else {

    passwordError.style.display = "none";

    alert("Login Successful!");

    window.location.href =
      "https://sangeetha-u1.github.io/Code-Axis-week1/dashboard/index.html";

  }

});
