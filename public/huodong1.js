(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop:true,
        direction: 'vertical',
        onSlideChangeEnd:onSlider
    });
})();

function onSlider(swiper){
    var dataP = parseInt($('.swiper-slide-active').attr('dataP'));
    if(dataP > 1 ){
        var prePage = dataP - 1;
        $('.page'+prePage+'wrap').hide();
    }else{
        var prePage = dataP + 1;
        $('.page'+prePage+'wrap').hide();
    }
    $('.page'+dataP+'wrap').show();
}