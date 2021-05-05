$(document).ready(function () {
    
    /**
     * Slider Home
     */
    sliders({
        selector: '.slideshow__container',
        arrowPrev: '.slideshow__prev',
        arrowNext: '.slideshow__next'
    });

    /**
     * Slider Simple Store
     */
    sliders({
        selector: '.shop__slideshowcont',
        arrowPrev: '.shop__slideshowprev',
        arrowNext: '.shop__slideshownext'
    });

    firstshow({
        selector: '.home__showone',
        arrowPrev: '#OnePrev',
        arrowNext: '#OneNext'
    });

    firstshow({
        selector: '.home__showfour',
        arrowPrev: '#FourPrev',
        arrowNext: '#FourNext'
    });
});