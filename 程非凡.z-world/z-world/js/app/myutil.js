	function createXHR(){
		//如果浏览器支持XMLHttpRequest那么直接创建返回对象
		if(typeof XMLHttpRequest !='undefined'){
			return new XMLHttpRequest();
		}else if(typeof ActiveXObject != 'undefined'){
			if(typeof arguments.callee.activeXString != 'string'){
				var versions = ['MSXML2.XMLHttp.6.0','MSXML2.XMLHttp.3.0','MSXML2.XMLHttp'];
				for (var i = 0; i < versions.length; i++) {
					try{
						new ActiveXObject(versions[i]);
						arguments.callee.ActiveXString = versions[i]
					}catch(e){

					}
				}
			}
			return new ActiveXObject(arguments.callee.ActiveXString);
		}else{
			throw new Error('无法正常创建Ajax对象');
		}
	}