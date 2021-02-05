$(function(){
  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  var mixer1 = mixitup('.popular__products', {
    selectors: {
      control: '.filter-1'
    }
  });

  var mixer2 = mixitup('.new-design__inner', {
    selectors: {
      control: '.filter-2'
    }
  });

});