require.config({
	baseUrl:"../base"
});
require(['header','foot'], function(CreateHead,Createfoot) {
	var createhead= new CreateHead();
	var createfoot=new Createfoot();
	console.log(createhead,createfoot);
});