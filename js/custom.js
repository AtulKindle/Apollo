$(window).scroll(function(){
    if ($(window).scrollTop() >= 30) {
       $('.menu-navigation-section nav').addClass('fixed-header');
    }
    else {
       $('.menu-navigation-section nav').removeClass('fixed-header');
    }
});

$('.menu-nav-section ul li').on('click', function(){
    $('.menu-nav-section ul li.current').removeClass('current');
    $(this).addClass('current');
});