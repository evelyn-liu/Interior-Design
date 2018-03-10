define(['util','animate'],function(util,sport,Slider){
		function Slider_move(imgs,parent,toggle,circle){
			this.sliderCompent = null;
			this.sliderBox = null;
			this.imgsBox = null;
			this.imgs = imgs;
			this.sliders = [];
			this.index = 0;
			this.pointerBox = null;
			this.pointer = null;
			this.pointerInner = null;
			this.pointers = [];
			this.len = this.imgs.length;
			this.parent = parent;
			this.toggle = toggle;
			this.circle = circle;
			this.timer = null;
			this.w = util.getViewPort().w;
			this.h = util.getViewPort().h-40;
			this.init();
			this.autoChange();
			this.toggleControl();
		}
		Slider_move.prototype = {
			constructor:Slider_move,
			init:function(){
				this.sliderCompent = document.createElement('div');
				this.sliderCompent.style.cssText+=';height:100%;overflow:hidden;position:relative;width:'+this.w;
				this.sliderBox = document.createElement('div');
				this.sliderBox.style.cssText+=';height:100%;position:absolute;width:100%;left:0;top:0';
				this.sliderBox.style.width =this.parent.offsetWidth*this.len+'px';
				for(var i = 0;i<this.len;i++){
					this.createImg(i);
				}
				for(var i = 0;i<this.len-1;i++){
					this.createPointer(i);
				}
				this.sliderCompent.appendChild(this.sliderBox);
				this.parent.appendChild(this.sliderCompent);
			},
			createImg:function(index){
				this.imgsBox = document.createElement('div');
				this.imgsBox.style.cssText+=";height:100%;float:left;width:"+((100/this.len)+"%");
				var img = document.createElement("img");
				img.style.cssText+=";height:100%;width:100%";
				img.src = this.imgs[index];
				this.imgsBox.appendChild(img);
				this.sliderBox.appendChild(this.imgsBox);
				this.sliders.push(this.imgBox);
			},
			autoChange: function () {
		        var _this = this;
		        
		        if (_this.timer) {
		        	clearInterval(_this.timer);
		        };
		        _this.timer = setInterval(function(){
		        		_this.index++;
		        		if(_this.index == _this.len){
			        		
			        		_this.sliderBox.style.left = 0;
			        		_this.index = 0;

			        	}
		        		sport.animate_hc(_this.sliderBox,{left:-(_this.index)*_this.imgsBox.offsetWidth});
			        	if(_this.index == _this.len-1){

			        		sport.animate_hc(_this.pointers[0],{width:70});
			        		_this.pointers[_this.index-1].style.float =  'right';
		        			sport.animate_hc(_this.pointers[_this.index-1],{width:0});
			        		_this.pointers[0].style.float =  'left';
			        	}else{
			        		var choose=_this.index-1<0?1:_this.index-1;
			        		sport.animate_hc(_this.pointers[_this.index],{width:70});
			        		_this.pointers[choose].style.float =  'right';
		        			sport.animate_hc(_this.pointers[choose],{width:0});
			        		_this.pointers[_this.index].style.float =  'left';
			        	}
		        },3000);
		    },
		    createPointer:function(i){
		    	if(this.pointerBox == null){
		    		this.pointerBox = document.createElement('div');
		    		this.pointerBox.style.cssText+=';height:4px;width:324px;position:absolute;left:540px;bottom:215px;z-index:20';
		    	};
		    	this.pointer = document.createElement('div');
		    	this.pointer.style.cssText+=';height:2px;background-color:white;margin-top:1px;margin-right:24px;float:left;width:'+((304-(this.len)*24)/(this.len-1))+'px';		    	if(i == 0){};
		    	this.pointerInner = document.createElement('span');
		    	this.pointerInner.style.cssText+=';height:100%;width:0;display:block;background-color:orange';
		    	if(i == 0){
		    		this.pointerInner.style.width = 70+'px';
		    	};
		    	this.pointers.push(this.pointerInner);
		    	this.pointer.appendChild(this.pointerInner);
		    	this.pointerBox.appendChild(this.pointer);
		    	this.sliderCompent.appendChild(this.pointerBox);
		    },
		    toggleControl:function(toggle){
		    	_this = this;
		    	var n = 0;
		    	_this.toggle.onclick = function(){
		    		n++;
		    		if (!(n%2 === 0)) {
		    			clearInterval(_this.timer);
		    			for(var i = 0,alen = _this.circle.length;i<alen;i++){
		    				_this.circle[i].style.background = 'orange';
		    			}
		    		}else{
		    			_this.autoChange();
		    			for(var i = 0,alen = _this.circle.length;i<alen;i++){
		    				_this.circle[i].style.background = 'white';
		    			}
		    		}
		    	}
		    }
		};
		return Slider_move;
})

