
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

    var isAccordionOpened = false;

    $('.document-item .top-link').on('click', function() {
        var isClickedOpened = false;
        if ($(this).parent().hasClass('show')) {
            isClickedOpened = true;
        }

        $('.document-item .top-link').siblings().slideUp().parent().removeClass('show');

        // if (isAccordionOpened) {
        if (isClickedOpened) {
            $(this).siblings().slideUp().parent().removeClass('show')
        } else {
            $(this).siblings().slideDown().parent().addClass('show')
        }

        isAccordionOpened = ! isAccordionOpened;
    });

    $('.blank-file-box.carousel').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    $(".carousel-button-prev").click(function () {
        $('.blank-file-box.carousel').slick('slickPrev');
    });
    $(".carousel-button-next").click(function () {
        $('.blank-file-box.carousel').slick('slickNext');
    });


    $('.news-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });

    var isCardOpened = false;

    $('.card-name').on('click', function() {
            $('.card-name').parent().removeClass('show')
            $('.card-name').siblings().slideUp()
            console.log(isCardOpened)

            $(this).siblings().slideDown().parent().addClass('show');
    });

    $('.card-close').on('click', function() {
        $(this).parent().css('display', 'none').parent().removeClass('show')

        isCardOpened = !isCardOpened;
    });

    var isCollapseOpened = false;

    $('.collapse-header').on('click', function() {
        if (isCollapseOpened) {
            $(this).removeClass('show').siblings().slideUp().parent();
        } else {
            $(this).addClass('show').siblings().slideDown().parent();
        }

        isCollapseOpened = !isCollapseOpened;
    });

    if ($(window).width() < 440) {
        $('a.filter-button').on('click', function (e) {
            $(window).scrollTop($('#filter-tab-content').offset().top - 100);
        });
    }


    var isAboard = false;
    var isParamedic = false;
    var isNotWork = false;
    var isChildren = false;
    var isDisability = false;
    var isTur = false;


    $('.check-category').on('click', function() {
        var checkedCategory = $(this).attr('id');
        var isChecked = $(this).is(':checked');

        switch (checkedCategory) {
            case 'check-abroad':  isAboard = isChecked;
                break;

            case 'check-paramedic':  isParamedic = isChecked;
                break

            case 'check-not-work': isNotWork = isChecked;
                break

            case 'check-children': isChildren = isChecked;
                break

            case 'check-disability': isDisability = isChecked;
                break

            case 'check-tur': isTur = isChecked;
                break
            default: break
        }
    });

    $('#sort-category').on('click', function() {



        $('.aboard').css('display', 'none');
        $('.not-work').css('display', 'none');
        $('.children').css('display', 'none');
        $('.disability').css('display', 'none');
        $('.med').css('display', 'none');
        $('.tur').css('display', 'none');

        if (isAboard) {
            $('.aboard').css('display', 'flex');
        }

        if (isNotWork) {
            $('.not-work').css('display', 'flex');
        }

        if (isChildren) {
            $('.children').css('display', 'flex');
        }

        if (isDisability) {
            $('.disability').css('display', 'flex');
        }

        if (isParamedic) {
            $('.med').css('display', 'flex');
        }

        if (isTur) {
            $('.tur').css('display', 'flex');
        }
    })

    $(".anchor").on("click",function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    var isReestrMSP = false;
    var isMostInjured = false;
    var spheres = [];

    $('#radio-reestr').on('click', function() {
        isReestrMSP = true
    });

    $('#radio-reestr-no').on('click', function() {
        isReestrMSP = false
    });

    $('#radio-otr').on('click', function() {
        isMostInjured = true
    });

    $('#radio-otr-no').on('click', function() {
        isMostInjured = false
    });

    $('#check-auto').on('click', function() {
        console.log(spheres)
        if ($(this).prop("checked")) {
            spheres.push('auto');
        } else {
            const index = spheres.indexOf('auto');

            if (index > -1) {
                spheres.splice(index, 1);
            }
        }
        console.log(spheres)
    })

    $('#check-it').on('click', function() {
        if ($(this).prop("checked")) {
            spheres.push('it');
        } else {
            const index = spheres.indexOf('it');

            if (index > -1) {
                spheres.splice(index, 1);
            }
        }
    })

    $('#check-import').on('click', function() {
        if ($(this).prop("checked")) {
            spheres.push('import');
        } else {
            const index = spheres.indexOf('import');

            if (index > -1) {
                spheres.splice(index, 1);
            }
        }
    })

    $('#check-med').on('click', function() {
        if ($(this).prop("checked")) {
            spheres.push('med');
        } else {
            const index = spheres.indexOf('med');

            if (index > -1) {
                spheres.splice(index, 1);
            }
        }
    })

    $('#check-pro-med').on('click', function() {
        if ($(this).prop("checked")) {
            spheres.push('pro-med');
        } else {
            const index = spheres.indexOf('pro-med');

            if (index > -1) {
                spheres.splice(index, 1);
            }
        }
    })

    $('#check-trans').on('click', function() {
        if ($(this).prop("checked")) {
            spheres.push('trans');
        } else {
            const index = spheres.indexOf('trans');

            if (index > -1) {
                spheres.splice(index, 1);
            }
        }
    })

    $('#check-avia').on('click', function() {
        if ($(this).prop("checked")) {
            spheres.push('avia');
        } else {
            const index = spheres.indexOf('avia');

            if (index > -1) {
                spheres.splice(index, 1);
            }
        }
    })

    $('#check-fin').on('click', function() {
        if ($(this).prop("checked")) {
            spheres.push('fin');
        } else {
            const index = spheres.indexOf('fin');

            if (index > -1) {
                spheres.splice(index, 1);
            }
        }
    })

    $('#check-none').on('click', function() {
        if ($(this).prop("checked")) {
            spheres.push('none');
        } else {
            const index = spheres.indexOf('none');

            if (index > -1) {
                spheres.splice(index, 1);
            }
        }
    })

    $('#filter-document-items').on('click', function() {

        $('.document-item').css('display', 'flex')

        if (!isReestrMSP) {
            $('.document-item.no-msp').css('display', 'none')
        }

        if (!isMostInjured) {
            $('.document-item.no-injured').css('display', 'none')
        }

        if (!spheres.includes('auto')) {
            $('.document-item.is-auto').css('display', 'none')
        }

        if (!spheres.includes('it')) {
            $('.document-item.is-it').css('display', 'none')
        }

        if (!spheres.includes('import')) {
            $('.document-item.is-import').css('display', 'none')
        }

        if (!spheres.includes('pro-med')) {
            $('.document-item.is-pro-med').css('display', 'none')
        }

        if (!spheres.includes('med')) {
            $('.document-item.is-med').css('display', 'none')
        }

        if (!spheres.includes('trans')) {
            $('.document-item.is-trans').css('display', 'none')
        }

        if (!spheres.includes('avia')) {
            $('.document-item.is-avia').css('display', 'none')
        }

        if (!spheres.includes('fin')) {
            $('.document-item.is-fin').css('display', 'none')
        }
    })

});
