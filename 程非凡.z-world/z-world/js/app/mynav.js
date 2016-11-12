
define(['myutil','jquery','app/url'],function(x,$,rl){
    function getNavData() {
        var xhr = x();  //创建ajax对象
        // console.log(xhr)
        xhr.open('get',rl.getBaseUrl()+'/books');
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
        var navs = JSON.parse(data);
    	navs.forEach(function (elem, index) {
        
        // $('#nav2 li a:eq('+index+')').html(elem.name);
        $('#nav2 li a:eq('+index+')').attr('href',elem.url);
        
        
   		 })
    }


})

