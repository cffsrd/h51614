
define(['myutil','jquery','app/url'],function(x,$,rl){
    function getNavData() {
        var xhr = x();  //创建ajax对象
        // console.log(xhr)
        xhr.open('get',rl.getBaseUrl()+'/banner');
        xhr.send(null);
        xhr.onreadystatechange = function (e) {
            if(xhr.readyState === 4){
                //console.log(xhr.responseText);
                //f(xhr.responseText);
                showon(xhr.responseText);

            }
        }
    }
    return getNavData;
//接收数据完毕处理的函数
    function showon(data){
        var banners = JSON.parse(data);
        console.log('banner');
        // var index=-1;
        // setInterval(function(){
        //     index++;          
        //     if(index==3){
        //         index=-1;
        //     }
        //     $('#banner2').css('background','url('+banners[index].imgUrl+')')
        //     },2000)
        //给每个li里面的a加背景和地址
        banners.forEach(function (elem,index){
            $('.banner2ul1 li a:eq('+index+')').css('background','url('+elem.imgUrl+')').attr('href',elem.href);          
        })
        //转成原生js对象找offset属性
        var banner = $('.banner2ul1')[0];
        var Left = banner.offsetLeft;
        //设置位移的函数
        function move(){
            Left-=100;            
                $('.banner2ul1').css('left',Left+"%");
            if(Left==-400){
                 Left=100;
                 $('.banner2ul1').css('left','0');

            }
           
        } 
        //定时器实现轮播  
        var timer = setInterval(move,2000);
        //鼠标移入移出事件
        $('#banner2').on('mouseenter',function(){
            clearInterval(timer);

        })

        $('#banner2').on('mouseleave',function(){
            timer = setInterval(move,2000)
        })

        //左右点击事件
        $('.bigleft').on('click',function(e){
            e.preventDefault();
                if (Left==0) {
                    Left=-400;
                };
                Left+=100;
                $('.banner2ul1').css('left',Left+'%');
                console.log(Left);
            })        
        $('.bigright').on('click',function(e){
            e.preventDefault();
                if (Left==-300) {
                    Left=100;
                };
                Left-=100;
                $('.banner2ul1').css('left',Left+'%');
            })


    }


})