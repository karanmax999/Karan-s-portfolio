var typed = new Typed("#element", {
    strings: ["Web Developer", "UI/UX Designer", "Tech Enthusiast"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });
  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".service-card");
  
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
      });
  
      card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
      });
    });
  });
  
  