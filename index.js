let form = document.getElementById("loginForm")
form.addEventListener("submit", function(e) {
  e.preventDefault();

  
  let correctEmail = "ife@gmail.com";
  let correctPassword = "12345678";

  
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let word = document.getElementById("word");

  
  if (email === "" || password === "") {
    word.innerHTML = "You must input required field";
    word.style.color = "red";

  }   else if(password.length < 8){
    word.innerHTML = "Password must be atleast 8 characters long"
  }
  
  if (email === correctEmail && password === correctPassword) {
    word.innerHTML = "You have been logged in successfully";
    word.style.color = "green";
  } else {
    word.innerHTML = "Invalid email or password";
    word.style.color = "red";
  }
});
