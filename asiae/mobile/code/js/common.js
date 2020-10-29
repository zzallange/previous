
$(document).ready(function(){
    /* photo-slide */
    var photoSlide = new Swiper('.gallery-slide', {
        slidesPerView: 'auto',
		spaceBetween: 0,
		freeMode: true,
		clickable: true,
		wrapperClass: 'gallery-lst',
		slideClass:'pannel',
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true
        },
        grabCursor: true
    });
    
    $(window).scroll(function(){
        //Btn-Top
        if( $(window).scrollTop() > $('header').height() ){
            $('.btn-top').addClass('on');
        }else {
            $('.btn-top').removeClass('on');
        }
    });
    $('.btn-top').click(function(){
        $('html,body').animate({scrollTop: 0}, 300);
    });

})//end













