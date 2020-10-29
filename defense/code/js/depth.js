 
(function (window, document, $) {
$(function () {
    var $content = $('#container'),
        $head = $('#head'),
        //$externalIframe = $('#loadExternalPage'),
        menuCode = '',
        activeIndex = 0,
        deviceHeight = $(window).height(),
        //플리킹 메뉴제거 favoriteDatas = utils.favoriteMenus.getListToString().split(','),
        favoriteDatas = ["visualnews"],
        isBindEventSlick = false, //home의 view 의 slick 이벤트가 바인드 유무
        isLogin = false,
        listType = "image",
        beforeActiveSlideId = "",
        afterActiveSlideId = "";
    (function init() {
        //home 탭메뉴 이동
        $('.listSlickGoTo').click(function () {
            var index = getSlickSliderIndex($(this).parent("li").attr("id").replace("li_", ""));
            //$mainContainer.slick('slickGoTo', index, true);
        });
        
        scrollAlign();
    })();

    function scrollAlign(){
        var scrollMenuOn = $(".scroll_wrap .scroller ul li.on"),
            scroller = $(".scroll_wrap .scroller");
        scroller.animate({
            scrollLeft : scrollMenuOn.offset().left + scroller.scrollLeft() + scrollMenuOn.width()/2 - scroller.width()/2 
        }, 0);
    }

    function getSlickSliderIndex(menuId) {
        try {
            return $("div#" + "div_" + menuId).index() - 1;
        }
        catch (e) {
            return 0;
        }
    }
});
})(window, document, jQuery);

    













