//Tab menu
$('.tabed.menu .item').tab();

//Banner Parallax
$(window).scroll(function () {
    var banner = $('.landing-wrap .banner');
    banner.css({
        'background-position': 'center ' + ($(this).scrollTop() / 2) + "px"
    });
});

//Scroll To Feature
$('.to-down').click(function(){
    $('html, body').animate({
        scrollTop: $('#feature').offset().top
    }, 500);
});

// Slide
$(".anim-slider").animateSlider({
    autoplay: true,
    interval: 50000,
    animations: {
        0: //Slide No0
        {
            ".desc-content": {
                show: "fadeInUp",
                hide: "fadeOutDown",
                delayShow: "delay0-5s"
            },
            ".deco.one": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay0-5s"
            },
            ".deco.two": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay0-9s"
            },
            "img.one": {
                show: "fadeInDown",
                hide: "fadeOutUp",
                delayShow: "delay1s"
            }
        },
        1: //Slide No1
        {
            ".desc-content": {
                show: "fadeInUp",
                hide: "fadeOutDown",
                delayShow: "delay0-5s"
            },
            ".deco.one": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay0-9s"
            },
            ".deco.two": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay0-5s"
            },
            "img.one": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay1s"
            },
            "img.two": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay1-5s"
            },
            "img.three": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay2s"
            }
        },
        2: //Slide No2
        {
            ".desc-content": {
                show: "fadeInUp",
                hide: "fadeOutDown",
                delayShow: "delay0-5s"
            },
            ".deco.one": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay0-5s"
            },
            ".deco.two": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay0-9s"
            },
            "img.one": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay1s"
            },
            "img.two": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay1-5s"
            },
            "img.three": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay2s"
            }
        },
        3: //Slide No3
        {
            ".desc-content": {
                show: "fadeInUp",
                hide: "fadeOutDown",
                delayShow: "delay0-5s"
            },
            ".deco.one": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay0-9s"
            },
            ".deco.two": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay0-5s"
            },
            "img.one": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay1s"
            },
            "img.two": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay1-5s"
            },
            "img.three": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay2s"
            }
        },
        4: //Slide No4
        {
            ".desc-content": {
                show: "fadeInUp",
                hide: "fadeOutDown",
                delayShow: "delay0-5s"
            },
            ".deco.one": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay0-5s"
            },
            ".deco.two": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay0-9s"
            },
            "img.one": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay1s"
            },
            "img.two": {
                show: "zoomIn",
                hide: "zoomOut",
                delayShow: "delay1-5s"
            }
        },
    }
});
