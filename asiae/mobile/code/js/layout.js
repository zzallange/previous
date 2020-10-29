
$(document).ready(function(){
    /* mobile-layout */
    //section-swiper
    $(function () {
        var $container = $('#container'),
            $mainContent = $container.find('.slideWrap'),
            activeIndex = 0,
            deviceHeight = $(window).height(),
            favoriteDatas = ["visualnews"],
            isBindEventSlick = false, //home의 view 의 slick 이벤트가 바인드 유무
            isLogin = false,
            listType = "image",
            beforeActiveSlideId = "",
            afterActiveSlideId = "";
    
        (function init() {  //init() 슬라이더 초기화 후 호출
            //menu 클릭시 swiper 적용
            $('.nav-ul li a').click( function() {
                var index = getSlickSliderIndex($(this).parent("li").attr("class").replace("li-", ""));
                $mainContent.slick('slickGoTo', index, true);
            });
            //init view slider
            if ($mainContent.children().length > 1) {
                // main container swipe event start
                $mainContent.slick({
                    slidesToShow: 1, 
                    infinite: true,
                    arrows: false,
                    adaptiveHeight: true,
                    accessibility: false,
                    mobileFirst: true,
                    speed: 100,
                    waitForAnimate: false,
                    verticalSwiping: false,
                }).on('beforeChange', function (event, slick, currentSlide) { //beforeChange(slick,currentSlide) 슬라이드 전 호출
                    beforeActiveSlideId = $(slick.$slides[currentSlide]).attr('id');
                }).on('afterChange', function (event, slick, currentSlide) { //afterChange(slick,currentSlide) 슬라이드 후 호출
                    event.stopPropagation();
                    event.preventDefault();
                    
                    //activeSlideId = 각 section별 네이밍.
                    var $activeSlide = $(slick.$slides[currentSlide]); // $(slider.$slides.get(index)) : 특정 슬라이더에 접근
                    var activeSlideId = $activeSlide.attr('id');
                    afterActiveSlideId = $activeSlide.attr('id');

                    if (activeSlideId !== undefined) {
                        activeSlideId = activeSlideId.replace('section-', '');
                        $('.nav-li').removeClass();
                        $('#menu-' + activeSlideId).addClass('nav-li on');
                        
                        if (beforeActiveSlideId !== afterActiveSlideId) {
                            var scrollElm = document.scrollingElement || window;
                            $(scrollElm).scrollTop(0);
                        }
                    }
                    scrollAlign();
                });
                //-- main container swipe event end
    
                var scrollDisableSwipeTimer = null;
    
                isBindEventSlick = true;
    
                if (isBindEventSlick) {
                    var scrollTimer;
                    $(window).bind('scroll', function () {
                        clearTimeout(scrollTimer);
                        scrollTimer = setTimeout(scrollCallback, 100);
                    });
                    var scrollCallback = function () {
                        $mainContent.slick('setPosition', 0);
                    }
                }
                //menu 클릭시 section 스와이프 슬라이드
                $mainContent.slick('slickGoTo', getSlickSliderIndex(), true); //slickGoTo 진행 시킬 슬라이더의 인덱스로 이동
                $(".slick-slide").show();
            }
    
            var contentSlideTimer = null;
            $content.on('touchstart', '*[data-trigger="flicking"]', function (e) {
                e.stopPropagation();
                if (isBindEventSlick) {
                    $mainContent.slick('slickSetOption', 'swipe', false);
                }
            }).on('touchmove', '*[data-trigger="flicking"]', function (e) {
                e.stopPropagation();
                if (isBindEventSlick) {
                    $mainContent.slick('slickSetOption', 'swipe', false);
                }
            }).on('touchend', '*[data-trigger="flicking"]', function (e) {
                e.stopPropagation();
                if (isBindEventSlick) {
                    clearTimeout(contentSlideTimer);
                    contentSlideTimer = setTimeout(function () {
                        $mainContent.slick('slickSetOption', 'swipe', true);
                    }, 100);
                }
            });

        })();

        function scrollAlign(){
            var scrollMenuOn = $(".scroll-wrap .scroller ul li.on"),
                scroller = $(".scroll-wrap .scroller");
            scroller.animate({
                scrollLeft : scrollMenuOn.offset().left + scroller.scrollLeft() + scrollMenuOn.width()/2 - scroller.width()/2 
            }, 500);
        }
        
        //menu-swiper
        function getSlickSliderIndex(menuId) {
            try {
                return $("div#" + "section-" + menuId).index() - 1;
            }
            catch (e) {
                return 0;
            }
        }

    }); //end
    
});//end








