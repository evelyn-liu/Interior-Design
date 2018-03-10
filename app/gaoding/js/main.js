require.config({
	baseUrl:"../base"
});
require(['header','foot','sliderCompent_gaoding'], function(CreateHead,Createfoot,Slider) {
	var parent = document.getElementById('silder');
	var createhead= new CreateHead();
	var createfoot=new Createfoot();
	var s = new Slider(["../gaoding/img/s1.jpg","../gaoding/img/s2.jpg","../gaoding/img/s3.jpg","../gaoding/img/s1.jpg"],parent);
});