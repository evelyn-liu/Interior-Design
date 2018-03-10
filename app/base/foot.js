define([], function() {
	function Createfoot(){
		this.footer=null;
		this.foot=null;
		this.line=null;
		this.firstFoot=null;
		this.secondFoot=null;
		this.lastFoot=null;
		this.init();
	}
	Createfoot.prototype={
		constructor:Createfoot,
		init:function(){
			this.footer=document.createElement('div');
			this.footer.style.cssText += ";width:100%;height:326px;clear:both;text-align:center";
			this.line=document.createElement('div');
			this.line.style.cssText += ";width:100%;height:2px;background:#bcbcbc;";
			this.foot=document.createElement('div');
			this.foot.style.cssText += ";width:1200px;height:324px;margin:0 auto;position:relative";
			this.footer.appendChild(this.line);
			this.footer.appendChild(this.foot);
			this.createFirst();
			this.createSecond();
			this.createLast();
			document.body.appendChild(this.footer);
		

		},
		createFirst:function(){
			this.firstFoot=document.createElement('div');
			this.firstFoot.style.cssText += ";width:530px;height:17px;position:absolute;left:316px;top:49px";
			this.firstFoot.id='firstfoot';
			var text=["订阅资讯","合作预约","职位空缺","项目品鉴"];
			for(var i=0;i<3;i++){
				var d=document.createElement('div');
				d.style.cssText += ";width:101px;height:17px;float:left;margin-left:42px";
				var a=document.createElement('a');
				a.style.cssText += ";cursor:pointer;font-size:14px;list-style:none;color:grey;font-family:微软雅黑;float:left;margin-right:42px";
				a.innerText=text[i];
				var divline=document.createElement('div');
				divline.style.cssText += ";width:2px;height:15px;background:#bcbcbc;float:left";
				d.appendChild(a);
				d.appendChild(divline);
				this.firstFoot.appendChild(d);
			}
			var textLast=document.createElement('a');
			textLast.style.cssText += ";cursor:pointer;font-size:14px;list-style:none;color:grey;font-family:微软雅黑;display:block;float:left;margin-left:42px";
			textLast.innerText=text[3];
			this.firstFoot.appendChild(textLast);
			this.foot.appendChild(this.firstFoot);	
		},
		createSecond:function(){
			this.secondFoot=document.createElement('div');
			this.secondFoot.style.cssText += ";width:96px;height:92px;position:absolute;left:554px;top:89px";
			var sa=document.createElement('p');
			sa.style.cssText += ";margin:0;font-size:24px;list-style:none;color:#4c4c4c;font-family:微软雅黑;";
			sa.innerText="关于我们";
			var code =document.createElement('img');
			code.src="../base/img/code.jpg";
			
			this.secondFoot.appendChild(sa);
			this.secondFoot.appendChild(code);
			this.foot.appendChild(this.secondFoot);
		},
		createLast:function(){
			this.lastFoot=document.createElement('div');
			this.lastFoot.style.cssText += ";width:462px;height:18px;position:absolute;left:370px;top:212px";
			var la=document.createElement('p');
			la.style.cssText += ";font-size:14px;list-style:none;color:#8f8f8f;font-family:微软雅黑;";
			la.innerText="Copyright @J.W DESIGN LTD. All rights reserved. 沪ICP备15012345号";
			this.lastFoot.appendChild(la);
			this.foot.appendChild(this.lastFoot);
		}
		

	};
	return Createfoot;
});
