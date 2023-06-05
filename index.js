const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const slides = Array.from(document.querySelectorAll('.slide'));
const prevArrow = document.querySelector('.arrow-left');
const nextArrow = document.querySelector('.arrow-right');

let slideWidth = sliderContainer.offsetWidth;
let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

const isMobileDevice = window.innerWidth <= 768;

function goToSlide(index) {
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
  currentIndex = index;
}

function slideToNext() {
  if (currentIndex === slides.length - 1) {
    goToSlide(0);
  } else {
    goToSlide(currentIndex + 1);
  }
}

function slideToPrev() {
  if (currentIndex === 0) {
    goToSlide(slides.length - 1);
  } else {
    goToSlide(currentIndex - 1);
  }
}

nextArrow.addEventListener('click', () => {
  if (!isMobileDevice) {
    slideToNext();
  }
});

prevArrow.addEventListener('click', () => {
  if (!isMobileDevice) {
    slideToPrev();
  }
});

sliderContainer.addEventListener('touchstart', (e) => {
  if (isMobileDevice) {
    touchStartX = e.touches[0].clientX;
  }
});

sliderContainer.addEventListener('touchmove', (e) => {
  if (isMobileDevice) {
    touchEndX = e.touches[0].clientX;
  }
});

sliderContainer.addEventListener('touchend', () => {
  if (isMobileDevice) {
    handleGesture();
  }
});

function handleGesture() {
  const gestureDistance = touchEndX - touchStartX;
  if (Math.abs(gestureDistance) > 50) {
    if (gestureDistance < 0) {
      slideToNext();
    } else {
      slideToPrev();
    }
  }
}

window.addEventListener('resize', () => {
  slideWidth = sliderContainer.offsetWidth;
  goToSlide(currentIndex);
});



const personInput = document.getElementById("person");
  const emailInput = document.getElementById("email");

  personInput.addEventListener("input", removeError);
  emailInput.addEventListener("input", removeError);

  document.getElementById("myForm").addEventListener("submit", function(event) {
    if (personInput.value.trim() === "" || emailInput.value.trim() === "") {
      if (personInput.value.trim() === "") {
        personInput.classList.add("error");
      }

      if (emailInput.value.trim() === "") {
        emailInput.classList.add("error");
      }

      event.preventDefault();
    }
  });

  function removeError() {
    this.classList.remove("error");
  }
document.getElementById("myForm").reset();


