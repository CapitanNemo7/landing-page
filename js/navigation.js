$(function () {

    $('.change-arrow').hover(function () {

        $id = $(this).attr('id');
        $that = $(this);

        $($that).children(".arrow").css({
            'background-image': 'url(../img/arrow-up.jpg)'
        });

        $($that).children(".black-line").css({
            'display': 'block'
        });


        $('.drop-div').each(function () {
            if ($(this).attr('id') == $id) {
                $res = '.' + $id;
                $($res).css({
                    'display': 'flex'
                });
            }
        })

        $('.drop-div').hover(function () {
            $($that).children(".black-line").css({
                'display': 'block'
            });


            $(this).css({
                'display': 'flex'
            });

            $($that).children(".arrow").css({
                'background-image': 'url(../img/arrow-up.jpg)'
            });

        }, function () {

            $($that).children(".black-line").css({
                'display': 'none'
            });


            $(this).css({
                'display': 'none'
            });

            $($that).children(".arrow").css({
                'background-image': 'url(../img/arrow-down.png)'
            });
        })
    }, function () {

        $($that).children(".black-line").css({
            'display': 'none'
        });


        $(this).children(".arrow").css({
            'background-image': 'url(../img/arrow-down.png)'
        })

        $('.drop-div').each(function () {
            if ($(this).attr('id') == $id) {
                $res = '.' + $id;
                $($res).css({
                    'display': 'none'
                });
            }
        })
    })


    // mobile navigation

    $iconMobMenu = $('.mob-menu');
    $mobileNavigation = $('.mob-nav');

    $iconMobMenu.click(function () {
        if ($mobileNavigation.hasClass('display-none')) {
            $mobileNavigation.removeClass('display-none');
            $mobileNavigation.addClass('display-block');
            $('html, body').css({
                overflow: 'hidden',
                height: '100%'
            });
        } else {
            $mobileNavigation.removeClass('display-block');
            $mobileNavigation.addClass('display-none');
            $('html, body').css({
                overflow: 'auto',
                height: 'auto'
            });
            $('.mob-nav-container').css({
                'display': 'flex'
            });
            $('.mob-nav-hide-1').css({
                'display': 'none'
            });
            $('.mob-nav-hide-2').css({
                'display': 'none'
            });
            $('.mob-nav-hide-3').css({
                'display': 'none'
            });
            $('.mob-nav-hide-4').css({
                'display': 'none'
            });
        }
    })

    $('.mob-nav-1-li-1').click(function () {
        $('.mob-nav-container').css({
            'display': 'none'
        });
        $('.mob-nav-hide-1').css({
            'display': 'flex'
        });
    })
    $('.back-1').click(function () {
        $('.mob-nav-container').css({
            'display': 'flex'
        });
        $('.mob-nav-hide-1').css({
            'display': 'none'
        });
    })

    $('.mob-nav-1-li-2').click(function () {
        $('.mob-nav-container').css({
            'display': 'none'
        });
        $('.mob-nav-hide-2').css({
            'display': 'flex'
        });
    })
    $('.back-2').click(function () {
        $('.mob-nav-container').css({
            'display': 'flex'
        });
        $('.mob-nav-hide-2').css({
            'display': 'none'
        });
    })

    $('.mob-nav-1-li-3').click(function () {
        $('.mob-nav-container').css({
            'display': 'none'
        });
        $('.mob-nav-hide-3').css({
            'display': 'flex'
        });
    })
    $('.back-3').click(function () {
        $('.mob-nav-container').css({
            'display': 'flex'
        });
        $('.mob-nav-hide-3').css({
            'display': 'none'
        });
    })

    $('.mob-nav-1-li-4').click(function () {
        $('.mob-nav-container').css({
            'display': 'none'
        });
        $('.mob-nav-hide-4').css({
            'display': 'flex'
        });
    })
    $('.back-4').click(function () {
        $('.mob-nav-container').css({
            'display': 'flex'
        });
        $('.mob-nav-hide-4').css({
            'display': 'none'
        });
    })


    $('.drop-menu').click(function () {
        $that = $(this);

        if ($(this).next().hasClass('display-none')) {

            $(this).children('span').children('img').attr('src','img/minus.png');

            $(this).next().removeClass('display-none');
            $(this).next().addClass('display-block');
            $('.drop-menu').each(function () {
                if ($that.attr('class')!=$(this).attr('class')) {
                    $(this).children('span').children('img').attr('src','img/plus.png');
                    $(this).next().removeClass('display-block');
                    $(this).next().addClass('display-none');
                }
            })
        } else {
            $(this).children('span').children('img').attr('src','img/plus.png');
            $(this).next().removeClass('display-block');
            $(this).next().addClass('display-none');
        }
    })


})