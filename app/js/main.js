$(function(){
  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  $('.partners__list').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  });

  var mixer1 = mixitup('.popular__products', {
    selectors: {
      control: '.popular .filter__btn'
    }
  });

  var mixer2 = mixitup('.new-design__inner', {
    selectors: {
      control: '.new-design .filter__btn'
    }
  });

});