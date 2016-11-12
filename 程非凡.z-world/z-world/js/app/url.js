define({
	baseUrl: 'http://localhost',
	port: 7000,
	getBaseUrl: function(){
		return this.baseUrl + ':' + this.port;
	}
})