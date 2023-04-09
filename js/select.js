let user = JSON.parse(localStorage.getItem("user"))

let text = document.querySelector("h1");

if (!user) window.location.replace("/") 

text.textContent += `${" "+  user.charAt(0).toUpperCase()  + user.slice(1)} 😉`;
