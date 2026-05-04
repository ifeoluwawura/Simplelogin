let form = document.getElementById("loginForm")
form.addEventListener("submit", function(e) {
  e.preventDefault();

  
  let correctEmail = "ife@gmail.com";
  let correctPassword = "1234";

  
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let word = document.getElementById("word");

  
  if (email === "" || password === "") {
    word.innerHTML = "You must input required field";
    word.style.color = "red";
    return;
  }

  
  if (email === correctEmail && password === correctPassword) {
    word.innerHTML = "You have been logged in successfully";
    word.style.color = "green";
  } else {
    word.innerHTML = "Invalid email or password";
    word.style.color = "red";
  }
});
