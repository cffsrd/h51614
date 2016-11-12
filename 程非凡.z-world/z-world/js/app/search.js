
define(['myutil','jquery','app/url'],function(x,$,rl){
    function getNavData() {
        var value = $('#searchText').val()
        // console.log(value);
        var xhr = x();  //创建ajax对象
        // console.log(xhr)
        xhr.open('get',rl.getBaseUrl()+'/sitesearch/:'+value);
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

     function showon(dat){
        var sers = JSON.parse(dat);
            var data = sers.data.list
            console.log(data)
            data.forEach(function (elem,index){
                var searchdiv = $('<div></div>');
                    searchdiv.css({
                        padding:'5px 0'
                    })
                    $('.searchcontent').append(searchdiv);
                var searchimg = $('<img />');
                    searchimg.attr('src',elem.src);
                    searchimg.css({
                        width:'20%',
                        height:'100%',
                        float:'left',
                        
                    });
                    searchdiv.append(searchimg)
                var searchP = $('<p></p>');
                    searchP.css({
                        fontSize:'12px'
                    })
                    searchP.html(elem.cn_name);
                    searchdiv.append(searchP);                
                var searchspan = $('<span></span>');
                    searchspan.html(elem.word);
                    searchP.append(searchspan);  
                var searcha = $('<a></a>');
                    searcha.html(elem.belong_name);
                    searchdiv.append(searcha);
            })




        }
   


})