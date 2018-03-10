define({
	getEvent:function (){
		return event || window.event;
	},
	/*将查询串转换为对象格式*/
	getQueryStringArgs:function() {
		var qs = location.search.length ? location.search.substr(1) : '', //name=zs&pwd=123&phone=456789
		args = {},
			items = qs.length ? qs.split('&') : [], //['name=zs','pwd=123','phone=456789']
			item = null,
			paramName = null,
			paramValue = null,
			i = 0,
			len = items.length;
		//将items转换为对象
		for(i = 0; i < len; i++) {
			item = items[i].split('='); //['name','zs']
			paramName = item[0];
			paramValue = item[1];
			if(paramName) {
				args[paramName] = paramValue; //{name:'zs'}//给对象添加以参数名称为名称的属性，属性值是参数值
			}
		}
		return args;
	},
	/*检测浏览器是否安装了插件*/
	hasPlugin:function (pluginName) {
		var hasPlugin = false;
		
		pluginName = pluginName.toLowerCase();
		var plugins = navigator.plugins; //获取浏览器安装过的插件
		for(var i = 0; i < plugins.length; i++) { //遍历数组
			if(plugins[i].name.toLowerCase().indexOf(pluginName) > -1) {
				hasPlugin = true;
			}
		}
		
		return hasPlugin;
	},
	//动态加载js
	loadScript:function (path) {
		var script = document.createElement('script');
		script.type = 'text/javaScript';
		script.src = path;
		
		document.body.appendChild(script);
	},
	
	//创建内部Script元素
	createInnerScript:function (content) {
		var script = document.createElement('script');
		script.type = 'text/javaScript';
		
		//给Script添加内容
		try {
			script.appendChild(document.createTextNode(content));
		} catch(e) {
			script.text = content;
		}
		
		document.head.appendChild(script);
	},
	
	toArray:function (collection) {
		var arr = null;
		
		try {
			arr = Array.prototype.slice.call(collection, 0);
		} catch(e) {
			arr = new Array();
			for(var i = 0, len = collection.length; i < len; i++) {
				arr.push(collection[i]);
			}
		}
		
		return arr;
	},
	
	//获取元素在页面的位置point(x,y)
	getPagePosition:function(ele) {
		var point = {
			x: 0,
			y: 0
		}
		
		do {
			point.x += ele.offsetLeft;
			point.y += ele.offsetTop;
		} while ((ele = ele.offsetParent) != null);
		
		return point;
	},
	
	//获取可视区的尺寸
	getViewPort:function () {
		var v = {
			w: 0,
			h: 0
		}
		
		if(document.compatMode == 'BackCompat') { //非标准模式
			v.w = document.body.clientWidth;
			v.h = document.body.clientHeight;
		} else {
			v.w = document.documentElement.clientWidth;
			v.h = document.documentElement.clientHeight;
		}
		
		return v;
	},
	
	//获取文档的尺寸
	getPageSize:function() {
		var page = {
			w: 0,
			h: 0
		};
		
		if(document.compatMode == 'BackCompat') { //非标准模式
			page.w = Math.max(document.body.clientWidth, document.documentElement.scrollWidth);
			page.h = Math.max(document.body.clientHeight, document.documentElement.scrollHeight);
		} else {
			page.w = Math.max(document.documentElement.clientWidth, document.documentElement.scrollWidth);
			page.h = Math.max(document.documentElement.clientHeight, document.documentElement.scrollHeight);
		}
		
		return page;
	},
	//获得滚动条垂直滚动的距离
	getScrollTop:function(){
		return document.documentElement.scrollTop || document.body.scrollTop;
	},
	//获得滚动条水平滚动的距离
	getScrollLeft:function(){
		return document.documentElement.scrollLeft || document.body.scrollLeft;
	},
	//事件绑定	
	addHandler:function (ele, type, handler) {
		if(ele.addEventListener) {
			ele.addEventListener(type, handler, false);
		} else if(ele.attachEvent) {
			ele.attachEvent('on' + type, handler);
		} else {
			ele['on' + type] = handler;
		}
	},
	
	//解除事件绑定
	removeHandler:function (ele, type, handler) {
		if(ele.removeEventListener) {
			ele.removeEventListener(type, handler);
		} else if(ele.detachEvent) {
			ele.detachEvent('on' + type, handler);
		} else {
			ele['on' + type] = null;
		}
	},
	
	//获取event对象
	getEvent:function () {
		return event || window.event;
	},
	
	//获取事件源
	getEventSource:function (event) {
		return event.target || event.srcElement;
	},
	
	//阻止默认行为：超链接，表单提交、重置按钮这两个元素有默认行为
	preventDefault:function (event) {
		if(event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	
	//阻止事件传播
	stopPropagation:function stopPropagation(event) {
		if(event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	},
	//获取元素的样式值
	getComputedStyleValue:function (obj, prop) {
		var value = '';
		
		if(window.getComputedStyle) {
			value = getComputedStyle(obj,null)[prop];
		} else {
			value = obj.currentStyle[prop];
		}
		return value;
	},
	getElementsByClassName:function(element, names) {
		　　if (element.getElementsByClassName) {
			　　　　return element.getElementsByClassName(names);
		　　} else {
			　　　　var elements = element.getElementsByTagName('*');
			　　　　var result = [];
			　　　　var element,
			　　　　classNameStr,
			　　　　flag;
			　　　　names = names.split(' ');
			　　　　for (var i = 0; element = elements[i]; i++) {
				　　　　　　classNameStr = ' ' + element.className + ' ';
				　　　　　　flag = true;
				　　　　　　for (var j = 0, name; name = names[j]; j++) {
					　　　　　　　　if (classNameStr.indexOf(' ' + name + '') == -1) {
						　　　　　　　　　　flag = false;
						　　　　　　　　　　break;
					　　　　　　}
				　　　　}
				　　　　　　if (flag) {
					　　　　　　　　result.push(element);
				　　　　　　}
			　　}
			　　　return result;
		　}
	},
	getClassList:function(){
		if (!("classList" in document.documentElement)) {
			Object.defineProperty(HTMLElement.prototype, 'classList', {
				get: function() {
					var self = this;
					function update(fn) {
						return function(value) {
							var classes = self.className.split(/\s+/g),
							index = classes.indexOf(value);

							fn(classes, index, value);
							self.className = classes.join(" ");
						}
					}

					return {
						add: update(function(classes, index, value) {
							if (!~index) classes.push(value);
						}),

						remove: update(function(classes, index) {
							if (~index) classes.splice(index, 1);
						}),

						toggle: update(function(classes, index, value) {
							if (~index)
								classes.splice(index, 1);
							else
								classes.push(value);
						}),

						contains: function(value) {
							return !!~self.className.split(/\s+/g).indexOf(value);
						},

						item: function(i) {
							return self.className.split(/\s+/g)[i] || null;
						}
					};
				}
			});
		}
	}
})