require.config({
	baseUrl: '../../app/base'
});
require(['sliderCompent_move','util'],function(Slider_move,util){
	var imgs = [
				"img/shouye1.jpg",
				"img/shouye2.jpg",
				"img/shouye3.jpg",
				"img/shouye1.jpg"
			];
	var box = document.getElementById("box");
	var toggle = document.getElementById("breathLight");
	var circle = util.getElementsByClassName(document,'c');
	new Slider_move(imgs,box,toggle,circle);
});

