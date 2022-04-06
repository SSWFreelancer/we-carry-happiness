$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .menu, .header__navigation').toggleClass('active');
       $('html, body').toggleClass('lock');
   });
   $('.header__btn').click(function (event) {
      $('.header__burger, .menu, .header__navigation').removeClass('active');
      $('html, body').removeClass('lock');
   });
});
$(document).ready(function () {
   $('.passengers__gallery').slick({
      arrows: false,
      dots: false,
      adaptiveHeight: true,
      slidesToShow: 3.2,
      speed: 1000,
      easing: 'ease-in',
      infinite: true,
      autoplay: false,
      autoplaySpeed: 2000,
      draggable: true,
      swipe: true,
      touchThreshold: 20,
        responsive: [
          {
            breakpoint: 1847,
            settings: {
              slidesToShow: 2.8,
            },
          },
          {
            breakpoint: 1639,
            settings: {
              slidesToShow: 2.4,
            },
          },
           {
            breakpoint: 1420,
            settings: {
              slidesToShow: 2.1,
            },
          },   
           {
            breakpoint: 1230,
            settings: {
              slidesToShow: 1.8,
            },
          }, 
           {
            breakpoint: 1079,
            settings: {
              slidesToShow: 1.6,
            },
          }, 
            {
            breakpoint: 954,
            settings: "unslick"
          },                                                                   
      ],     
   });
});