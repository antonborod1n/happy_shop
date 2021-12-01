$(function () {
    $('.popular__btn').on('click', function (e) {
        e.preventDefault();
        $('.popular__btn').removeClass('popular__btn--active');
        $(this).addClass('popular__btn--active');
        $('.popular__tabs').removeClass('popular__tabs--active');
        $($(this).attr('href')).addClass('popular__tabs--active');
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('.menu__catalog-btn').on('click', function () {
        $('.top-slider__menu').toggleClass('top-slider__menu--active');
    });

    $('.product-item').slice(0, 15).show();
    $('.shop-content__bottom-btn').on('click', function (k) {
        k.preventDefault();
        $('.product-item:hidden').slice(0, 15).slideDown();
    });

    $('.top-slider__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/icons-slider/arrows-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/icons-slider/arrows-right.svg" alt="arrow"></button>',
    });

    $('.slider_slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/product/icons/product-arrows-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/product/icons/product-arrows-right.svg" alt="arrow"></button>',
    });

    $('.goods-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 5,
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

    $('.goods-content__slide-thumb').slick({
        asNavFor: '.goods-content__slide-big',
        focusOnSelect: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/product/icons/product-arrows-left.svg" alt="arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/product/icons/product-arrows-right.svg" alt="arrow"></button>',
    });

    $('.goods-content__slide-big').slick({
        asNavFor: '.goods-content__slide-thumb',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    });

    $(".star").rateYo({
        starWidth: "15px",
        normalFill: "#ededed",
        ratedFill: "#ffcc00",
        readOnly: true,
    });

    $(".star-big").rateYo({
        starWidth: "25px",
        normalFill: "#ededed",
        ratedFill: "#ffcc00",
        readOnly: true,
    });
});

$('.arrow-up').click(function () {
    $('body,html').animate({ scrollTop: 0}, 800);
});

$(window).scroll(function() {
    let scrolled = $(window).scrollTop();

    if(scrolled > 350) {
        $('.arrow-up').addClass('arrow-up--active');
    } else {
        $('.arrow-up').removeClass('arrow-up--active');
    }
});