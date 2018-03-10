require.config({
	baseUrl:"../base"
});
require(['header','foot','brandconcept_solider'],function(CreateHead,Createfoot,BrandSolider){
	var createhead = new CreateHead();
	var createfoot = new Createfoot();
	var img=['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpeg','img/5.jpg','img/6.jpg'];
	var parent=document.getElementById('brandSolider');
	var s=new BrandSolider(parent,img);

});