// -----------------------------

//   js index
/* =================== */
/*  




*/
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

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 10) {
        $('nav').addClass('active_nav');
    } else {
        $('nav').removeClass('active_nav');
    }
});

