// -----------------------------

//   js index
/* =================== */



// -----------------------------


(function($) {
    "use strict";

    if($('.myslid1').length){
        $('.myslid1').slick({
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 2800,
            pauseOnHover: true,
            arrows: false,
            fade: true,
            cssEase: 'linear'
        });
    }

    if($('.church_events').length){
        $('.church_events').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: false,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

        //        $('.church_events').slick({
        //            slidesToShow: 3,
        //            slidesToScroll: 1,
        //            autoplay: false,
        //            autoplaySpeed: 2000,
        //            arrows: false,
        //            dots: false,
        //            pauseOnHover: false,
        //            responsive: [
        //                {
        //                    breakpoint: 1024,
        //                    settings: {
        //                        slidesToShow: 3,
        //                        slidesToScroll: 3,
        //                        infinite: true,
        //                        dots: true
        //                    }
        //                },
        //                {
        //                    breakpoint: 600,
        //                    settings: {
        //                        slidesToShow: 2,
        //                        slidesToScroll: 2
        //                    }
        //                },
        //                {
        //                    breakpoint: 480,
        //                    settings: {
        //                        slidesToShow: 1,
        //                        slidesToScroll: 1
        //                    }
        //                }
        //            ]
        //        });
    }


    /*-----------------
    scroll-up
    -----------------*/
    //    $.scrollUp({
    //        scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
    //        easingType: 'linear',
    //        scrollSpeed: 500,
    //        animation: 'fade'
    //    });

    /*---------------------
    smooth scroll
    --------------------- */
    //    $('.smoothscroll').on('click', function(e) {
    //        e.preventDefault();
    //        var target = this.hash;
    //
    //        $('html, body').stop().animate({
    //            'scrollTop': $(target).offset().top - 80
    //        }, 1200);
    //    });



    /*---------------------
    testimonial-carousel
    --------------------- */
    //    function testimonial_carousel() {
    //        var owl = $(".testimonial-carousel");
    //        owl.owlCarousel({
    //            loop: true,
    //            margin: 30,
    //            responsiveClass: true,
    //            navigation: true,
    //            navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
    //            nav: true,
    //            items: 2,
    //            smartSpeed: 2000,
    //            dots: false,
    //            autoplay: false,
    //            autoplayTimeout: 4000,
    //            center: false,
    //            responsive: {
    //                0: {
    //                    items: 1
    //                },
    //                480: {
    //                    items: 1
    //                },
    //                760: {
    //                    items: 2
    //                }
    //            }
    //        });
    //    }
    //    testimonial_carousel();


}(jQuery));

//$(document).scroll(function () {
//    var y = $(this).scrollTop();
//    if (y > 10) {
//        $('nav').addClass('active_nav');
//    } else {
//        $('nav').removeClass('active_nav');
//    }
//});

