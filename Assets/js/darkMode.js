const checkBox = document.getElementById("dark-mode-checkbox");
const theme = document.getElementById("main-theme-link");
// const checkBox = document.querySelector("input[id=dark-mode-checkbox]")
checkBox.addEventListener("change", function () {
  // console.log(theme.href);
  if (this.checked) {
    theme.href = theme.href.replace("main.css", "dark/main.css");
  } else {
    theme.href = theme.href.replace("dark/main.css", "main.css");
  }
});
