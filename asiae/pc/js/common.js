$(document).ready(function(){
    
    //header all-menu-wrap
    $('.top-head .all_menu').click(function(){
        $(this).toggleClass('on');
        $('.header .all_menu_wrap').toggleClass('on');
        $('.nav-area').toggleClass('none');
        $('.content').toggleClass('none');
    });

    //rolling-news
    function rolling() {
        $('.rolling li:first').slideUp( function(){
            $(this).appendTo($('.rolling')).slideDown();
        });
    }

    setInterval( function(){ rolling() }, 3000 );
    
    //section tab-news
    $('.tab-rank').hide();
    $('.tabFirst').show();
    $('.tab-menu a').click(function(){
        $(this).addClass('on');
        $(this).siblings().removeClass('on');

        var idx = $('.tab-menu a').index(this);
        $('.tab-rank').hide();
        $('.tab-rank').eq(idx).show();
    });
    
    //footer
    $('.footer .btn_service').click(function(){
        $('.footer .all_menu_wrap').toggleClass('on');
        $(this).toggleClass('on');
    })
    
    //btn-top
    $(window).scroll(function() {
        if($(window).scrollTop() > $('header').height()){
            $('.btn-top').addClass('on');
        } else {
            $('.btn-top').removeClass('on');
        }
    });
    $('.btn-top').click(function(){
        $('html, body').animate({scrollTop: 0}, 300);    
    });
    
    
  
    
});//end