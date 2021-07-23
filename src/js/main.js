const burger = document.querySelector(".burger");
const navbarNav = document.querySelector(".navbar-nav");
const cart = document.querySelector(".navbar-cart");
const brand = document.querySelector(".navbar-brand");
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navbarNav.classList.toggle("active");
  cart.classList.toggle("invert");
  brand.classList.toggle("invert");
});

var owl = $(".category-carousel");
owl.owlCarousel({
  loop: true,
  dots: false,
  smartSpeed: 1000,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 3,
    },
  },
});

var owl = $(".news-carousel");
owl.owlCarousel({
  loop: true,
  smartSpeed: 1000,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 3,
    },
  },
});
$(".news-next").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".news-prev").click(function () {
  owl.trigger("prev.owl.carousel", [300]);
});
