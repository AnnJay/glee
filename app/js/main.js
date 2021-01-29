$(function(){
  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  var mixer = mixitup('.popular__products');
});