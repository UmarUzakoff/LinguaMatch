
let username = document.querySelector("#username");

let submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", () => {
  if (username.value === "") {
    username.placeholder = "Please field all the fields..."
    username.classList.add("inpErr")
  }
    else {
         localStorage.setItem("user", JSON.stringify(username.value));
         window.location.replace("../select.html");
    }
});
