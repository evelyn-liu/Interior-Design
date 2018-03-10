 require.config({
	baseUrl: '../../app/base'
});
require(['util','header'],function(util,CreateHead){
	new CreateHead();
	var  pic = document.getElementById('ab');
	var w = util.getViewPort().w+17;
	// var h = util.getViewPort().h - 67;
	pic.style.width = w + "px";
	// pic.style.height = h  + "px";
	var p1 = document.getElementById('p1');
	var p2 = document.getElementById('p2');
	p1.onmouseover = function(){
		p1.src = "./img/weibo1.png";
	};
	p1.onmouseout = function(){
		p1.src = "./img/weibo.png";
	};
	console.log(p2);
	p2.onmouseover = function(){
		p2.src = "./img/wechat1.png";
	};
	p2.onmouseout = function(){
		p2.src = "./img/wechat.png";
	};
});