$(function () {
    // first slidebar

    $rightArrow = $(".right-arrow");
    $leftArrow = $(".left-arrow");
    $photo = $(".photo");
    photoGallery = ['url(../img/watch-1.webp)',
        'url(../img/watch-2.webp)',
        'url(../img/watch-3.webp)',
        'url(../img/watch-4.webp)',
        'url(../img/watch-5.webp)',
        'url(../img/watch-6.webp)',
        'url(../img/watch-7.webp)',
        'url(../img/watch-8.webp)',
        'url(../img/watch-9.webp)'
    ];
    counter = 0; //біжить по решту елементах
    mainCounter = 0; //дає індекс першому елемету


    $rightArrow.click(function () {
        if (mainCounter == photoGallery.length - 1) {
            mainCounter = 0;
        } else {
            mainCounter++;
        }
        counter = mainCounter;
        $photo.each(function () {
            $(this).css({
                'background-image': photoGallery[counter]
            });
            counter++;
            if (counter == photoGallery.length) {
                counter = 0;
            }
        });

    });


    $leftArrow.click(function () {
        if (mainCounter == 0) {
            mainCounter = photoGallery.length - 1;
        } else {
            mainCounter--;
        }
        counter = mainCounter;
        $photo.each(function () {
            $(this).css({
                'background-image': photoGallery[counter]
            });
            counter++;
            if (counter == photoGallery.length) {
                counter = 0;
            }
        });
    })


    //second slidebar

    $('.article-6-arrow-1').click(function () {
        $('.article-6 > div:first-child').css({
            'display': 'none'
        });
        $('.article-6 > div:last-child').css({
            'display': 'flex'
        });
    })

    $('.article-6-arrow-2').click(function () {
        $('.article-6 > div:first-child').css({
            'display': 'flex'
        });
        $('.article-6 > div:last-child').css({
            'display': 'none'
        });
    })

    $artPhoto = $('.art-6-photo');
    $showPhotoContainer = $('.article-6-show-photo');
    $showPhotoNow = $('.article-6-photo');
    arrPhoto = ['url(../img/article-61.jpg)', 'url(../img/article-62.jpg)',
        'url(../img/article-63.jpg)', 'url(../img/article-64.jpg)',
        'url(../img/article-65.jpg)', 'url(../img/article-66.jpg)',
        'url(../img/article-67.jpg)', 'url(../img/article-68.jpg)',
        'url(../img/article-69.jpg)', 'url(../img/article-610.jpg)',
        'url(../img/article-611.jpg)', 'url(../img/article-612.jpg)',
        'url(../img/article-613.jpg)', 'url(../img/article-614.jpg)'
    ];
    index = 0;

    $artPhoto.each(function () {
        $(this).click(function () {
            $showPhotoContainer.css({
                'display': 'flex'
            });
            $showPhotoNow.css({
                'background-image': $(this).css('background-image')
            });
        })
    })

    $('.article-6-exit').click(function () {
        $showPhotoContainer.css({
            'display': 'none'
        });
    })



    $('.article-6-right-arrow').click(function () {
        currentPhoto = $showPhotoNow.css('background-image');
        const regex1 = /http:\/\/127.0.0.1:5500/gi;
        const regex2 = /"/gi;



        currentPhoto = currentPhoto.replace(regex2, '');
        currentPhoto = currentPhoto.replace(regex1, '..');

        arrPhoto.forEach(function (item, i, arr) {
            if (item == currentPhoto) {
                index = i;
            }
        })
     
        console.log(index);

        $showPhotoNow.css({
            'background-image': arrPhoto[index + 1]
        });
    })

    $('.article-6-left-arrow').click(function () {
        currentPhoto = $showPhotoNow.css('background-image');
        const regex1 = /http:\/\/127.0.0.1:5500/gi;
        const regex2 = /"/gi;

        //For Server
        // const regex1 = /http:\/\/nixon.com/gi;
        // const regex2 = /"/gi;


        currentPhoto = currentPhoto.replace(regex2, '');
        currentPhoto = currentPhoto.replace(regex1, '..');

        arrPhoto.forEach(function (item, i, arr) {
            if (item == currentPhoto) {
                index = i;
            }
        })
        
        console.log(index);

        $showPhotoNow.css({
            'background-image': arrPhoto[index - 1]
        });
    })



    
})