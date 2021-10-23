$ (function(){
    /* $('.top-slider__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/icons-slider/arrows-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/icons-slider/arrows-right.svg" alt="arrow"></button>',
    }); */
    $('.slider_slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/product/icons/product-arrows-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/product/icons/product-arrows-right.svg" alt="arrow"></button>',
    });
    $('.slider_slider__mini').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/product/icons/product-arrows-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/product/icons/product-arrows-right.svg" alt="arrow"></button>',
    });
    $('.slider__one').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/product/icons/product-arrows-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/product/icons/product-arrows-right.svg" alt="arrow"></button>',
    });
    $('.blog_slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/product/icons/product-arrows-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/product/icons/product-arrows-right.svg" alt="arrow"></button>',
    });
    $(".star").rateYo({
        starWidth: "15px",
        normalFill: "#ededed",
        ratedFill: "#ffcc00",
        readOnly: true
      });
});
