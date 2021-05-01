// $(function () {

//    $('.reviews__slider').slick({
//       arrows: false,
//       dots: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//    });


new Swiper('.swiper-container', {
   slidesPerView: 3,
   spaceBetween: 30,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
});