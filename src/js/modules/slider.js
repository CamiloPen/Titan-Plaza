$(document).ready(function(){
  $(".bill__phonecontent").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow: ".bill__phoneprev",
    nextArrow: ".bill__phonenext",
    dots: true,
    responsive: [
        {
          breakpoint: 1065,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 606,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
    ]
  });
});

//SlideShow home

$(document).ready(function(){
  $(".home__showtwo").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow: "#TwoPrev",
    nextArrow: "#TwoNext",
    responsive: [
        {
          breakpoint: 950,
          settings: {
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 1,
          }
        },
    ]
  });
});

$(document).ready(function(){
  $(".home__showthree").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow: "#ThreePrev",
    nextArrow: "#ThreeNext",
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '110px',
            slidesToShow: 1,
          }
        },
    ]
  });
});