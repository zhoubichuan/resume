<template>
  <div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide swiper-slide-center none-effect">
				<a href="#">
					<img src="./img/banner001.jpg">
				</a>
				<div class="layer-mask"></div>
			</div>
			<div class="swiper-slide">
				<a href="#">
					<img src="./img/banner002.jpg">
				</a>
				<div class="layer-mask"></div>
			</div>
			<div class="swiper-slide">
				<a href="#">
					<img src="./img/banner003.jpg">
				</a>
				<div class="layer-mask"></div>
			</div>
			<div class="swiper-slide">
				<a href="#">
					<img src="./img/banner004.jpg">
				</a>
				<div class="layer-mask"></div>
			</div>
			<div class="swiper-slide">
				<a href="#">
					<img src="./img/banner005.jpg">
				</a>
				<div class="layer-mask"></div>
			</div>
		</div>
		<div class="button">
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		</div>
	</div>

</template>

<script>
import Swiper from "swiper";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true,
      speed: 1000,
      autoplayDisableOnInteraction: false,
      loop: true,
      centeredSlides: true,
      slidesPerView: 2,
      pagination: ".swiper-pagination",
      paginationClickable: true,
      prevButton: ".swiper-button-prev",
      nextButton: ".swiper-button-next",
      onInit: function(swiper) {
        swiper.slides[2].className = "swiper-slide swiper-slide-active";
      },
      breakpoints: {
        668: {
          slidesPerView: 1
        }
      }
    });
  }
};
</script>

<style >
@import "swiper/dist/css/style.css";
</style>
