$(document).ready(function () {

    // sticky navigation 

    let nav_offset_top = $('.header_area').height() + 50

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop()
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed')
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed')
                }
            })
        }
    }

    navbarFixed()

    // navbar click

    $("a").click(function () {
        var pageId = $(this).attr("data-page")
        $("html, body").animate({ scrollTop: $("#" + pageId).offset().top }, 2500)
    })

})