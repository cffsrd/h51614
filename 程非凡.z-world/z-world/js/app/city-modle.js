define(['myutil','jquery','app/url'],function(x,$,rl){

	function getmodle (){
		$.ajax({
			type:'get',
			url:rl.getBaseUrl()+'/modle',
			success:handle
		})

		for(var i=0;i<4;i++){
			(function(){
				var j = i;
				$('.hoverli:eq('+j+')').on('mouseenter',function(){
					$('.hoverdiv').hide();
					$('.hoverdiv:eq('+j+')').show();
				}).on('mouseleave',function(){
					$('.hoverdiv').hide();
				})
			})()
		}
	}

	return getmodle;

		function handle(data){
			console.log(data);
			data.forEach(function (elem,index){
				//创建div拼接到文档中
				var modleDiv = $('<div></div>');
					modleDiv.css({
						width:'1160px',
						height:'280px',
						margin:'0 auto',
						background:'#fff',
						marginBottom:'27px'
					})
					modleDiv.insertAfter('#maintitle');
				//插入图片
				var modleimg = $('<img />');
					modleimg.attr('src',elem.imgurl);
					modleDiv.append(modleimg);
				//创建图片右边的div
				var rightdiv = $('<div></div>');
					rightdiv.css({
						width:'740px',
						height:'280px',
						// background:'yellow',
						padding:'12px 0 0 20px',
						float:'right',
						position:'relative'
					})
					modleDiv.append(rightdiv);
				var modlep =$('<div><a class="firsta" href="#">'+elem.address+'</a><p class="rightP"><span>'+elem.browseCount+'</span><a>次浏览</a><span>'+elem.soldCount+'</span><a>件已售</a></p></div>');
					rightdiv.append(modlep);
					$('.rightP').css({
						float:'right',
						font:'14px "微软雅黑"',
						color:'#636363',
						marginRight:'20px'
					})
					$('.rightP span').css({
						color:'#00b081',
						padding:'0 5px',
					})

					$('.firsta').css({
						color:'#636363',
						font:'14px/30px "微软雅黑"',
						padding:'5px',
						border:'1px solid #dddddd'
					})
				//创建标题标签拼接到div中
				var modleh1 = $('<h1></h1>');
					modleh1.html(elem.title).css('margin-bottom','10px');
					rightdiv.append(modleh1);
					modleh1.hover(function(){
						$(this).css('color','#34b097')
					},function(){
						$(this).css('color','black')
					})

				//创建ul拼接到div中
				var modleul = $('<ul class="moul"><li>'+elem.introduce[0]+'</li>'+'<li>'+elem.introduce[1]+'</li>'+'<li>'+elem.introduce[2]+'</li></ul>');
				rightdiv.append(modleul);

				$('.moul li').css({
					font:'14px/24px "微软雅黑"',
					color:'#666666',
					textIndent:'24px',
					background:'url(images/stars.gif) no-repeat left 4px',
				})

				//醒目价格
				var priceP = $('<p><span class="oldPrice">'+elem.newPrice+'</span><a class="newPrice">'+elem.oldPrice+'</a>元起</p>');
					priceP.css({
						width:'174px',
						height:'56px',
						// background:'green',
						position:'absolute',
						right:'0px',
						bottom:'56px',
						textAlign:'center',
						font:'14px/56px "微软雅黑"',
						color:'#999999'
					})
						rightdiv.append(priceP);

					$('.newPrice').css({
						fontSize:'30px',
						color:'#ff7362',
						padding:'0 5px'
					})					
					$('.oldPrice').css({
						textDecoration:'line-through'
					})
				var modlea = $('<a href="#">立即预定</a>');
					modlea.css({
						display:'inline-block',
						width:'174px',
						height:'56px',
						background:'#ff7362',
						position:'absolute',
						right:'0px',
						bottom:'0px',
						textAlign:'center',
						font:'18px/56px "微软雅黑"',
						color:'#fff'
					})
					rightdiv.append(modlea);
					modlea.on('mouseenter',function(){
						$(this).css({
							textDecoration:'underline'
						})
					}).on('mouseleave',function(){
						$(this).css({
							textDecoration:'none'
						})						
					})
			})

		}



})