
define(['myutil','jquery','app/url'],function(x,$,rl){
    function getNavData() {
        var xhr = x();  //创建ajax对象
        // console.log(xhr)
        xhr.open('get',rl.getBaseUrl()+'/ulfloat');
        xhr.send(null);
        xhr.onreadystatechange = function (e) {
            if(xhr.readyState === 4){
                //console.log(xhr.responseText);
                //f(xhr.responseText);
                showon(xhr.responseText)

            }
        }
    }
    return getNavData;

    function showon(data){
        var uls = JSON.parse(data);
        console.log(uls);
    	uls.forEach(function (elem, index) {
        
            $('.banner2ul2 li:eq('+index+') p:eq(0)').html(elem.title);
            $('.lirightdiv').hide();
            elem.mainCity.forEach(function (ele,ind){
                $('.banner2ul2 li:eq('+index+') .lasta:eq('+ind+')').html(ele);
            })



            $('.banner2ul2 li:eq('+index+')').on('mouseenter',function(){
                //li背景变
                $('.banner2ul2 li').css('background','#462f10').css('opacity','0.8');
                $(this).css('background','#fff').css('opacity','1');
                //li对应的div出现
                $('.lirightdiv').hide();
                $('.lirightdiv:eq('+index+')').show();
                //li里面元素字体颜色
                $('.banner2ul2 li p').css('color','#fff');
                $('.banner2ul2 li:eq('+index+') p').css('color','#000');
            }).on('mouseleave',function(){
                $('.lirightdiv:eq('+index+')').hide();
                $(this).css('background','#462f10').css('opacity','0.8');
                $('.banner2ul2 li p').css('color','#fff');
            })

            elem.moreCity.forEach(function (e,i){
                var jsdiv = $('<div></div>');
                    jsdiv.css({
                        width:'250px',
                        // background:'yellowgreen',
                        // border:'1px solid black',
                        float:'left',
                        // display:'inline-block',
                        marginRight:'20px'
                    })

                $('.lirightdiv:eq('+index+')').append(jsdiv);
                $('.lirightdiv:eq('+index+')').css({
                    paddingLeft:'20px'
                }) 
                var jsh2 = $('<h2></h2>');
                    jsh2.html(e.cityName);
                    jsh2.css({                        
                        borderBottom:'1px solid #2c2c2c',
                        font:'bold 28px/50px "黑体"'
                    })
                    jsdiv.append(jsh2); 

                var jsdivchild = $('<div></div>');
                    jsdivchild.attr('class','aplacediv')
                    jsdivchild.css({
                        width:'250px',
                        // height:'50px',
                        // background:'blue',
                        padding:'8px 0'
                    })
                    jsdiv.append(jsdivchild);


                    e.items.forEach(function (em,ex){
                        var jsa = $('<a></a>');
                            jsa.attr('href','#');
                            jsa.attr('class','itemsa');
                            jsa.html(em);
                            jsa.css({
                                font:'14px/25px "微软雅黑"',
                                color:'#6c6c6c',
                                marginRight:'5px',
                            });
                        $('.lirightdiv:eq('+index+') .aplacediv:eq('+i+')').append(jsa)
                    })

                 
            })

             var jsimg = $('<img />');
                 jsimg.attr('src',elem.moreCityImg);
                 jsimg.attr('class','positionimg');
                 jsimg.css({
                    width:'40%',
                    // height:'50%',
                    // display:'block',
                    // float:'right'
                 })
                 $('.lirightdiv:eq('+index+')').append(jsimg);



   		 })
            $('.lirightdiv:eq(5) a').remove();
            var itemsurl = uls[5].moreCity[0].items
            itemsurl.forEach(function (pro,num){
                var nineimg = $('<img />');
                    nineimg.attr('src',pro);
                    nineimg.css({
                        width:'50px',
                        height:'50px',
                        marginRight:'20px'
                    })
                $('.lirightdiv:eq(5) .aplacediv').append(nineimg);
            })

            $('.lirightdiv:eq(0)>div:last').css({

                position: 'absolute',
                left: '20px',
                bottom: '20px',
            })            
            $('.lirightdiv:eq(0) img').css({

                position: 'absolute',
                right: '20px',
                bottom: '50px',
            })            
            $('.lirightdiv:eq(1) img').css({

                position: 'absolute',
                right: '20px',
                bottom: '50px',
            })            
            $('.lirightdiv:eq(2) img').css({

                position: 'absolute',
                left: '20px',
                bottom: '50px',
            })            
            $('.lirightdiv:eq(3) img').css({

                position: 'absolute',
                right: '30px',
                bottom: '100px',
            })
            $('.lirightdiv:eq(4)>div:eq(1)').css({

                position: 'absolute',
                left: '20px',
                bottom: '20px',
            })  
            $('.lirightdiv:eq(4) img').css({

                position: 'absolute',
                right: '30px',
                bottom: '80px',
            })           
             $('.lirightdiv:eq(6) img').css({

                position: 'absolute',
                right: '30px',
                bottom: '70px',
            })
             $('.lirightdiv:eq(5)').css({
                width:'300px',
                // background:'pink'
             })

             

    }


})