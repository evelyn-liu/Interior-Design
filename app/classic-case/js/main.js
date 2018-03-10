require.config({
	baseUrl: '../../app/base'
});
require(['util','header','foot'],function(util,CreateHead,Createfoot){
	new CreateHead();
	new Createfoot();
	Echo.init({
		offset:-100,
		throttle:200
	});
});