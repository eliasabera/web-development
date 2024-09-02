// date
const date = document.querySelector(".date");
date.innerHTML = new Date().getFullYear();

const linkscontainer = document.querySelector(".links-container");
const toggle = document.querySelector(".nav-toggle");
toggle.addEventListener("click", function () {
  linkscontainer.classList.toggle("show-links");
});

const slides1 = document.querySelectorAll(".one img");
const slides2 = document.querySelectorAll(".two img");
const slides3 = document.querySelectorAll(".three img");
const slides4 = document.querySelectorAll(".four img");
const slides5 = document.querySelectorAll(".five img");
const slides6 = document.querySelectorAll(".six img");
const prev = document.querySelector(".prev");
const nxt = document.querySelector(".nxt");
// prev.addEventListener("click", prevSlide);
// nxt.addEventListener("click", nextSlide);
let slideindex = 0;
let intervalid = null;
window.addEventListener("DOMContentLoaded", initializeslider);
window.addEventListener("DOMContentLoaded", initializeslider2);
window.addEventListener("DOMContentLoaded", initializeslider3);
window.addEventListener("DOMContentLoaded", initializeslider4);
window.addEventListener("DOMContentLoaded", initializeslider5);
window.addEventListener("DOMContentLoaded", initializeslider6);
function initializeslider() {
  if (slides1.length > 0) {
    slides1[slideindex].classList.add("display");
  }
}
function initializeslider2() {
  if (slides2.length > 0) {
    slides2[slideindex].classList.add("display");
  }
}
function initializeslider3() {
  if (slides3.length > 0) {
    slides3[slideindex].classList.add("display");
  }
}
function initializeslider4() {
  if (slides4.length > 0) {
    slides4[slideindex].classList.add("display");
  }
}
function initializeslider5() {
  if (slides5.length > 0) {
    slides5[slideindex].classList.add("display");
  }
}
function initializeslider6() {
  if (slides6.length > 0) {
    slides6[slideindex].classList.add("display");
  }
}

const btns_one = document.querySelectorAll(".one");
btns_one.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains(".prev")) {
      prevSlide(slides1);
    } else {
      nextSlide(slides1);
    }
  });
});

const btns_two = document.querySelectorAll(".two");
btns_two.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains(".prev")) {
      prevSlide(slides2);
    } else {
      nextSlide(slides2);
    }
  });
});

const btns_three = document.querySelectorAll(".three");
btns_three.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains(".prev")) {
      prevSlide(slides3);
    } else {
      nextSlide(slides3);
    }
  });
});

const btns_four = document.querySelectorAll(".four");
btns_four.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains(".prev")) {
      prevSlide(slides4);
    } else {
      nextSlide(slides4);
    }
  });
});

const btns_five = document.querySelectorAll(".five");
btns_five.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains(".prev")) {
      prevSlide(slides5);
    } else {
      nextSlide(slides5);
    }
  });
});

const btns_six = document.querySelectorAll(".six");
btns_six.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains(".prev")) {
      prevSlide(slides6);
    } else {
      nextSlide(slides6);
    }
  });
});

function showSlide(array, index) {
  if (index >= array.length) {
    slideindex = 0;
  } else if (index < 0) {
    slideindex = array.length - 1;
  }
  array.forEach(function (slide) {
    slide.classList.remove("display");
  });
  array[slideindex].classList.add("display");
}
function prevSlide(array) {
  slideindex--;
  showSlide(array, slideindex);
}
function nextSlide(array) {
  slideindex++;
  showSlide(array, slideindex);
}
