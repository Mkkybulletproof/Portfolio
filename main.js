$(document).ready(function () {
    // $('.menu-toggler').on('click', function () {
    //     $(this).toggleClass('open');
    //     $('top-nav').toggleClass('open');
    // });

    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate( keyframes, {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, options, 2000);
    });

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });
});