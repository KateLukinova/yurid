
$( document ).ready(function() {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0 && $(this).scrollTop() < 70) {
            $('.header-scroll').css('background-color', 'rgba(51, 51, 51, 0.3)');
        } else if ($(this).scrollTop() > 70 && $(this).scrollTop() < 150) {
            $('.header-scroll').css('background-color', 'rgba(51, 51, 51, 0.9)');
        } else if ($(this).scrollTop() > 150){
            $('.header-scroll').css('background-color', 'rgba(51, 51, 51, 1)');
        } else {
            $('.header-scroll').css('background-color', 'rgba(51, 51, 51, 0.3)');
        }
    }).trigger('scroll');


    $('.menu-icon').on('click', function() {
        $('#menu-mobile').toggleClass('open');
    });

    $('.nav-item').on('click', function() {
        $('#menu-mobile').removeClass('open');
    });

    $('.btn-radio').on('click', function() {
        $(this).closest('div.input-box').find('svg').addClass('active')
    });

    var isCoronaOpened = false;

    $('#covid-link').on('click', function() {

        $(this).toggleClass('active')

        if (isCoronaOpened) {
            $('#corona-block').slideUp()
        } else {
            $('#corona-block').slideDown()
        }

        isCoronaOpened = !isCoronaOpened;

    });

    $('.multi-collapse').on('show.bs.collapse', function () {
        $('.multi-collapse').removeClass('show');
        $('.two-block__item').removeClass('active');
        $(this).parent().addClass('active');
    })

    $('.multi-collapse').on('hide.bs.collapse', function () {
        $(this).parent().removeClass('active');
    })

});
