//tourist-tourist-tourist-slider.js

class TouristSlider extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container mt-14 flex md:flex-row flex-col items-center justify-center gap-5 md:gap-12 lg:gap-16">

    <div class="flex-1">

      <img

        src="/dist/assets/logo.png"

        alt="Logo Sakura Japan"

        class="mb-7 h-[68px] w-[68px]"

      />

      <p class="text-[25px] font-semibold text-accent">対馬島</p>

      <h1 class="pt-1 text-4xl md:text-[45px] lg:text-[50px] font-bold leading-tight" id="destination">

          TSUHIMA ISLAND

      </h1>

      <p class="py-5 md:py-8 text-sm md:text-base xl:text-lg font-medium tracking-wide">

        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do

        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut

        enim ad minim veniam,

      </p>

      <div class="flex items-center justify-between text-sm md:text-base lg:text-lg font-bold">

        <p class="text-white/50">PHOTO BY</p>

        <p id="photoBy">MAIK KOZOZKI</p>

      </div>

    </div>

    <div class="swiper mySwiper w-[250px] sm:w-[300px] md:w-[380px] h-[420px] md:h-[540px] lg:w-[550px] xl:w-[650px] 2xl:w-[768px]">

      <div class="swiper-wrapper" id="sliderWrapper">

          ${this.getAttribute("imageItem")}

      </div>

      <div class="swiper-button-next"></div>

      <div class="swiper-button-prev"></div>

    </div>

  </div>
            `;
    let sliderImageWrapper = "";

    this.datas.map((data) => {
      sliderImageWrapper += `

        <div class="swiper-slide">

          <img

            src="${data.image}"

            alt="${data.destination}"

            class="w-[250px] sm:w-[300px] md:w-[380px] lg:w-[550px] xl:w-[650px] h-[420px] md:h-[540px] 2xl:w-[768px] rounded-md object-cover"

          />

        </div>`;
    });

    const touristSlider = document.createElement("tourist-slider");

    touristSlider.setAttribute("imageItem", sliderImageWrapper);

    this.appendChild(touristSlider);

    var swiper = new Swiper(".mySwiper", {
      loop: true,

      navigation: {
        nextEl: ".swiper-button-next",

        prevEl: ".swiper-button-prev",
      },
    });

    swiper.on("slideChange", () => {
      var index = swiper.realIndex;

      var slide = this.datas[index];

      document.querySelector("#destination").textContent = slide.destination;

      document.querySelector("#photoBy").textContent = slide.photoBy;
    });
  }
}

customElements.define("tourist-slider", TouristSlider);
