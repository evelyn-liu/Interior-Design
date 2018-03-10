define(['util'],function(util){
	function BrandSolider(parent,imgs){
this.imgs=imgs; //传入的图片
this.parent=parent; //父元素盒子
this.brandSoliderBox=null; //包含所有的盒子
this.brandImgBox=null;  //存放所有图片的盒子
this.timer=null;
this.index=0; 
this.solider=[];
this.init();
//this.imgInit();

this.imgAuto();


}
BrandSolider.prototype={
	constructor:BrandSolider,
	init:function(){
		this.brandSoliderBox=document.createElement('div');
		var clientW=util.getViewPort().w;
		this.brandSoliderBox.style.cssText +=";height:454px;width:1200px;margin:0 auto;overflow:hidden";
		this.brandImgBox=document.createElement('div');
		this.brandImgBox.style.cssText +=";width:100%;height:100%;position:relative;transform:perspective(1000px);transform-style: preserve-3d; ";
		this.brandSoliderBox.appendChild(this.brandImgBox);
		for(var i=0;i<this.imgs.length;i++){
			this.createimgdiv(i);
		}
		this.parent.appendChild(this.brandSoliderBox);

	},
//创建每个图片的盒子并填入图片
createimgdiv:function(index){
	var imgBox=document.createElement('div');
	imgBox.className='item item'+index;
	imgBox.setAttribute('data-index', index);
	var images=document.createElement('img');
	images.style.cssText +=";width:444px;height:340px";
	images.src=this.imgs[index];
	imgBox.appendChild(images);
	this.brandImgBox.appendChild(imgBox);
	this.solider.push(imgBox);
},

imgAuto:function(){
	var oItems=util.getElementsByClassName(document,'item');
	var that=this;
	if(that.timer){
		clearInterval(that.timer);
	}
	that.timer=setInterval(function(){
		for(var i=0,len=oItems.length;i<len;i++){
			var oIndex=+oItems[i].getAttribute('data-index');
			util.getClassList();
			oItems[i].classList.remove('item'+oIndex);
			oIndex ===0?(oIndex=5):(oIndex--);
			oItems[i].setAttribute('data-index',oIndex);
			oItems[i].classList.add('item'+oIndex);
		}
	},3500)
},
// imgStop:function(){
// 	var oStop=util.getElementsByClassName(document,'item1');
// 	oStop.onmouseover=function(){
// 		var event = util.getEvent();
// 		 util.getEventSource(event).removeAttribute('animation');
// 	}
// }


}
return BrandSolider;

})










