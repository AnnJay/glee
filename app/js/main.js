$(function(){

  $('.menu__btn, .menu__link').on('click', function(){
    $('.menu').toggleClass('menu--active');
  });

  $('.menu__link').on('click', function(){
    $('.menu__link').removeClass('menu__link--active');
    $(this).addClass('menu__link--active');
  });

  $(window).on('scroll', function(){
    $('.header').toggleClass('header--scroll', $(this).scrollTop() > 100);
  });

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000
  });

  $('.partners__list').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
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