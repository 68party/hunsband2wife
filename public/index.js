var  pages,
curNum,
length,
curPages;
(function(){
     pages = $('.main-page');
     curNum = 0;
     length = pages.length;
     curPages = $('.z-current');
    bindEvent();
})();

//返回角度
function GetSlideAngle(dx, dy) {
    return Math.atan2(dy, dx) * 180 / Math.PI;
}

//根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
function GetSlideDirection(startX, startY, endX, endY) {
    var dy = startY - endY;
    var dx = endX - startX;
    var result = 0;

    //如果滑动距离太短
    if(Math.abs(dx) < 2 && Math.abs(dy) < 2) {
        return result;
    }

    var angle = GetSlideAngle(dx, dy);
    if(angle >= -45 && angle < 45) {
        result = 4;
    }else if (angle >= 45 && angle < 135) {
        result = 1;
    }else if (angle >= -135 && angle < -45) {
        result = 2;
    }
    else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
    }

    return result;
}

//滑动处理
var startX, startY;

function bindEvent(){
    $('.u-arrow-bottom').on('click',function(){
        showDown();
    })
    document.addEventListener('touchstart',function (ev) {
        startX = ev.touches[0].pageX;
        startY = ev.touches[0].pageY;
    }, false);

    document.addEventListener('touchend',function (ev) {
        var endX, endY;
        endX = ev.changedTouches[0].pageX;
        endY = ev.changedTouches[0].pageY;
        var direction = GetSlideDirection(startX, startY, endX, endY);
        switch(direction) {
            case 0:
                console.log("没滑动");
                break;
            case 1:
                console.log("向上");
                showDown();
                break;
            case 2:
                console.log("向下");
                showUp();
                break;
            case 3:
                console.log("向左");
                alert("!");
                break;
            case 4:
                console.log("向右");
                break;
            default:
        }
    }, false);
}

function showUp(){
   if(curNum === 0){
       $(pages[curNum]).removeClass('z-current');
       $(pages[length-1]).addClass('z-current');
       curNum = length-1;
   }else{
       $(pages[curNum]).removeClass('z-current');
       $(pages[curNum-1]).addClass('z-current');
       curNum--;
   }
}


function showDown(){
    if(curNum <length-1){
        $(pages[curNum]).removeClass('z-current');
        $(pages[curNum+1]).addClass('z-current');
        curNum++;
    }else{
        $(pages[length-1]).removeClass('z-current');
        $(pages[0]).addClass('z-current');
        curNum++;
    }
}


var swiper = new Swiper('.swiper-container', {
    direction: 'vertical'
});

