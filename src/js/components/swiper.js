import Swiper, { Navigation, Pagination, Thumbs } from "swiper";

Swiper.use([Navigation, Pagination, Thumbs]);

const swiperBg = new Swiper(".swiper__container-bg", {
  speed: 1000,
});

const swiperTitle = new Swiper(".swiper__container-title", {
  speed: 1200,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"> 0' + (index + 1) + "</span>";
    },
  },
});

swiperBg.on("slideChange", function () {
  swiperTitle.slideTo(swiperBg.realIndex);
});

swiperTitle.on("slideChange", function () {
  swiperBg.slideTo(swiperTitle.realIndex);
});
