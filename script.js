class Slider {
  constructor(slides, id, parametars) {
    this.slides = slides;
    this.id = id;
    this.parametars = parametars;
  }

  setImg(slideContainer) {
    if (this.parametars.auto) {
      if (this.id === 3) {
        this.id = 0;
      }

      if (this.id === -1) {
        this.id = 2;
      }

      slideContainer.style.backgroundImage = `url(${this.slides[this.id].img})`;
      pags.textContent = `${this.id + 1} / 3`;
      nameImg.textContent = `${this.slides[this.id].text}`;
      this.id++;
    } else {
      clearInterval(swapIng);
    }
  }

  swapImg(element, slideContainer) {
    if (element.textContent === "<") {
      this.id--;

      if (this.id < 0) {
        this.id = this.slides.length - 1;
      }
    } else {
      this.id++;

      if (this.id >= this.slides.length) {
        this.id = 0;
      }
    }

    slideContainer.style.backgroundImage = `url(${this.slides[this.id].img})`;
    nameImg.textContent = `${this.slides[this.id].text}`;
    pags.textContent = `${this.id + 1} / 3`;
  }
}

const slides = [
  {
    img: "https://www.w3schools.com/howto/img_nature_wide.jpg",
    text: "Forest",
  },
  {
    img: "https://www.w3schools.com/howto/img_snow_wide.jpg",
    text: "Winter Mountains",
  },
  {
    img: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
    text: "Mountains",
  },
];

const slide = new Slider(slides, 0, {
  loop: true,
  navs: true,
  pags: true,
  auto: true,
  delay: 5,
});

const sliderContainer = document.querySelector(".slider");
const pags = document.getElementsByClassName("slider__pagination")[0];
const nav = document.getElementsByClassName("slider__navs")[0];
const nameImg = document.getElementsByClassName("slider__name")[0];
slide.setImg(sliderContainer);

if (slide?.parametars.delay) {
  const swapIng = setInterval(() => {
    slide.setImg(sliderContainer);
  }, slide.parametars.delay * 1000);
} else {
  const swapIng = setInterval(() => {
    slide.setImg(sliderContainer);
  }, 5000);
}

nav.addEventListener("click", (event) => {
  const target = event.target;

  slide.swapImg(target, sliderContainer);
});
