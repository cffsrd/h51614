
define(['myutil','jquery','app/url'],function(x,$,rl){
    function getNavData() {
        var xhr = x();  //创建ajax对象
        // console.log(xhr)
        xhr.open('get',rl.getBaseUrl()+'/freewalk');
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
        var frees = JSON.parse(data);
        console.log(frees)
        // frees.forEach(function (elem,index){

        //     $('.ul2div').clone(false).insertAfter('#odivtwo .msg').hide();
        //     // $('.ceshiul li:eq('+index+')').html(elem.title);
        //    elem.data.forEach(function (e,i){
        //         $('.ul2div:eq('+index+') li:eq('+i+') .saleprice a' ).html(e.price);
        //         $('.ul2div:eq('+index+') li:eq('+i+') .pimgdiv' ).css('background','url('+e.imgUrl+')');
        //         $('.ul2div:eq('+index+') li:eq('+i+') .Pb').html(e.title);
        //         $('.ul2div:eq('+index+') li:eq('+i+') .pb1 span').html(e.time);
        //    })

        //    $('.dhul li:eq('+index+')').on('mouseenter',function(){
        //         $('.ul2div').hide();
        //         $('.ul2div:eq('+index+')').fadeIn(500);
                
        //    })
        // })

        // $('.ul2div:eq(0)').show();
                for(var i=0;i<4;i++){
                    (function(){
                        var j = i;
                        $('.hoverli:eq('+j+')').on('mouseenter',function(){
                            $('.hoverdiv').hide();
                            $('.hoverdiv:eq('+j+')').show(300);
                        }).on('mouseleave',function(){
                            $('.hoverdiv').hide();
                        })
                    })()
                }
                   
               frees[0].data.forEach(function (e,i){
                    $('.ul2div li:eq('+i+') .saleprice a' ).html(e.price);
                    $('.ul2div li:eq('+i+') .pimgdiv' ).css('background','url('+e.imgUrl+')');
                    $('.ul2div li:eq('+i+') .Pb').html(e.title);
                    $('.ul2div li:eq('+i+') .pb1 span').html(e.time);
               })                        
        


        frees.forEach(function (elem,index){

           $('.dhul li:eq('+index+')').on('mouseenter',function(){

               elem.data.forEach(function (e,i){
                    $('.ul2div li:eq('+i+') .saleprice a' ).html(e.price);
                    $('.ul2div li:eq('+i+') .pimgdiv' ).css('background','url('+e.imgUrl+')');
                    $('.ul2div li:eq('+i+') .Pb').html(e.title);
                    $('.ul2div li:eq('+i+') .pb1 span').html(e.time);
               })


                
           })
        })


























    }


})