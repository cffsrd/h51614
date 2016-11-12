// requirejs.config({
// 	baseUrl:'js/lib',

// 	paths:{
// 		'app':'../app',
// 		'jquery':'jquery-3.1.1',
// 		'myutil':'../app/myutil'
// 	},
// 	shim:{
// 		'myutil':{
// 			exports:'createXHR'
// 		}
// 	}

// })

requirejs(['./commons'],function(){

	requirejs(['app/mynav','app/mybanner','app/myul','app/freewalk','app/search'],function(nav,banner,ulfloat,freewalk,searchS){
		//第二个nav
		nav();
		//轮播
		banner();
		//菜单
		ulfloat();
		//机酒自由行
		freewalk();
		//搜索框
			$('#searchText').on('focusin',function(){
				$(document).keyup(function (e){
					if ((e.keyCode <= 57 && e.keyCode >= 48) || (e.keyCode >= 65 && e.keyCode <= 90)){
						$('.searchcontent').show();
							$('.searchcontent').html('');
							searchS();
					}
				})
			}).on('focusout',function(){
				$('.searchcontent').html('');
				$('#searchText').val('');
			})

   });
});