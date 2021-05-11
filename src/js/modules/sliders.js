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
          slidesToShow: 3,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: true,
          centerPadding: '110px',
          slidesToShow: 1,
        }
      },
    ]
  });
}
