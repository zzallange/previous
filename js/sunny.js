$(document).ready(function(){
    var photoSlide = new Swiper('.ppt-slide', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,
        clickable: true,
        wrapperClass: 'ppt-lst',
        slideClass:'item',
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true
        },
        //grabCursor: true
    });
    //GNB
    $('nav').click (function(){
        $('.gnb').toggleClass('on');
    });

    var box = [];
    var len = $('.gnb li a').length;
    for(var i=0; i < len; i++){
        box.push( $( '.session0'+( i + 1 ) ).offset().top);
    };
    $('.gnb li a').bind("click", clickNavHn );
    $(window).bind("scroll", scrollHn );
    scrollHn();

    var isAnimationProgress  = false;
    function clickNavHn(e){
        e.preventDefault();
        var clickIdx = $(this).parent().index();
        isAnimationProgress = true;
        $('html, body').stop().animate({ "scrollTop":box[clickIdx]+"px" },{ 
            duration:1000,
            complete:function(){
                    isAnimationProgress = false;
            }
        });
        $('.gnb li a').removeClass("active").eq( clickIdx ).addClass("active");
    };

    function scrollHn(){
        var box = [];

        var len = $('.gnb li a').length;
        for(var i=0; i < len; i++){
            box.push( $( '.session0'+( i + 1 ) ).offset().top);
        };
        var currentScrollTop = $('body').scrollTop() ? $('body').scrollTop() : $('html').scrollTop();
        if( isAnimationProgress   ) { return; }
        for( var i=0; i<len; ++i ){
            if( currentScrollTop >= box[i] && !$('.gnb li a').eq(i).hasClass("active") ){
                $('.gnb li a').removeClass("active").eq(i).addClass("active");
            }
        }
    };

});//end


















