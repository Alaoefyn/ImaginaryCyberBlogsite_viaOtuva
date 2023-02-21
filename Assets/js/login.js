const users = [
  { username: "admin", email: "admin@example.com", password: "password" },
  { username: "john", email: "john@example.com", password: "password123" },
];

const tryLogin = (event) => {
  const formData = event.target.elements;
  const message = "Invalid login. Check credentials again. (README.pdf)";
  let loggedIn = false;

  const username = formData[0].value;
  const password = formData[1].value;
  // const rememberMe = formData[2].value;

  users.forEach((user) => {
    if (user.username == username && user.password == password) {
      console.log("login successful");
      loggedIn = true;
    }
  });

  console.log(window.location)
  !loggedIn
    ? window.alert(message)
    : window.location.href = "./dashboard.html";
};

const form = document.getElementById("login-form");
form.addEventListener("reset", tryLogin);



// const loc = window.location.href;
// if (loc.includes("login.html")) {
//   const form = document.getElementById("login-form");
//   form.addEventListener("submit", tryLogin);
// }
// else if (loc.includes("dashboard.html")) {
//   window.onload = dashboard();
//   console.log("dashboard");
// }