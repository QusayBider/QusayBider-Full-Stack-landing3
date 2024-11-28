

document.addEventListener('DOMContentLoaded', function() {
  var loader = function() {
    const spinner = document.querySelector(".loder-spinner");
    setTimeout(() => {
      spinner.classList.add('d_active_loader');
    },500);
  }
  loader();
});

const myCarouselElement = document.querySelector('#header-carousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval:5000,
  touch: false
})

function NavbarScrollAnmation(){
  const navbar = document.querySelector(".navbar");
  window.onscroll=function(){
      navbar.classList.add("activeOnScroll");
  }
  window.onscrollend=function(){
    setTimeout(() => {
      navbar.classList.remove("activeOnScroll");
    },4000);
  }
}
NavbarScrollAnmation();

const btns = document.querySelectorAll(".btn_Testimonials");
const slideRow = document.getElementById("slide-row");
const main = document.querySelector(".Testimonial");

let currentIndex = 0;
let interval;


function updateSlide() {
  const mainWidth = main.offsetWidth;
  const translateValue = currentIndex * -mainWidth;
  slideRow.style.transform = `translateX(${translateValue}px)`;

  btns.forEach((btn, index) => {
    btn.classList.toggle("active", index === currentIndex);
  });
}


function startAutoplay() {
  stopAutoplay(); 
  interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % btns.length; 
    updateSlide();
  }, 4000); 
}


function stopAutoplay() {
  clearInterval(interval);
}

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currentIndex = index; 
    updateSlide();
    startAutoplay(); 
  });
});

window.addEventListener("resize", () => {
  updateSlide();
});

startAutoplay();
