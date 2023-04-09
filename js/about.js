

function animateElements() {
  const elements = document.querySelectorAll(".has-animation");
  elements.forEach((element) => {
    const delay = element.dataset.delay;
    setTimeout(() => {
      element.classList.add("animate-in");
    }, delay);
  });
}

document.addEventListener("DOMContentLoaded", animateElements);
