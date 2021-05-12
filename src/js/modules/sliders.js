const sliders = (options) => {
    $(options.selector).slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 7000,
        pauseOnFocus: false,
        pauseOnHover: false,
        prevArrow: options.arrowPrev,
        nextArrow: options.arrowNext
    });
}

const firstshow = (slides) => {
  $(slides.selector).slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnFocus: false,
    pauseOnHover: false,
    prevArrow: slides.arrowPrev,
    nextArrow: slides.arrowNext,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 700,
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
          centerPadding: '80px',
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1,
        }
      },
    ]
  });
}
