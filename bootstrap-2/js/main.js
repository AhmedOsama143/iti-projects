const navbars = document.querySelectorAll(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const btnTop = document.getElementById("btn-top");
const modalImage = document.getElementById("modalImage");
const cardImages = document.querySelectorAll(".card-img-top");
const images = document.querySelectorAll(".open-carousel");
const carousel = document.querySelector("#carouselInner");
const carouselInstance = bootstrap.Carousel.getOrCreateInstance(carousel);

window.addEventListener("scroll", function () {
  navbars.forEach(function (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

window.addEventListener("scroll", showBtnTop);

//  ^========= Helper functions to toggle class =========
function toggleClass(element, className, condition) {
  if (condition) {
    element.classList.add(className);
  } else {
    element.classList.remove(className);
  }
}

// ?========= Add Active class to Navbar Links ============
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    arrayRemoveclass(navLinks, "active");
    toggleClass(link, "active", true);
    toggleClass(document.querySelector(".navbar-collapse"), "show", false);
    document
      .querySelector(".navbar-toggler")
      .setAttribute("aria-expanded", "false");
  });
});
function showBtnTop() {
  toggleClass(btnTop, "show", this.scrollY >= 100);
}
window.addEventListener("scroll", showBtnTop);

// ?========= Portfolio Modal ============
images.forEach((img) => {
  img.addEventListener("click", function () {
    const index = parseInt(this.getAttribute("data-index"));

    const modal = new bootstrap.Modal(document.getElementById("carouselModal"));
    modal.show();

    carouselInstance.to(index);
  });
});
