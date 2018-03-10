define(['util', 'animate'], function(util, sport, Slider) {
    function Slider_move(imgs, parent) {
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
        this.timer = null;
        this.w = util.getViewPort().w;
        this.h = util.getViewPort().h - 40;
        this.init();
        this.autoChange();
    }
    Slider_move.prototype = {
        constructor: Slider_move,
        init: function() {
            this.sliderCompent = document.createElement('div');
            this.sliderCompent.style.cssText += ';height:100%;overflow:hidden;position:relative;width:' + this.w;
            this.sliderBox = document.createElement('div');
            this.sliderBox.style.cssText += ';height:100%;position:absolute;width:100%;left:0;top:0';
            this.sliderBox.style.width = this.parent.offsetWidth * this.len + 'px';
            for (var i = 0; i < this.len; i++) {
                this.createImg(i);
            }
            this.sliderCompent.appendChild(this.sliderBox);
            this.parent.appendChild(this.sliderCompent);
        },
        createImg: function(index) {
            this.imgsBox = document.createElement('div');
            this.imgsBox.style.cssText += ";height:100%;float:left;width:" + ((100 / this.len) + "%");
            var img = document.createElement("img");
            img.style.cssText += ";height:100%;width:100%";
            img.src = this.imgs[index];
            this.imgsBox.appendChild(img);
            this.sliderBox.appendChild(this.imgsBox);
            this.sliders.push(this.imgBox);
        },
        autoChange: function() {
            var _this = this;

            if (_this.timer) {
                clearInterval(_this.timer);
            };
            _this.timer = setInterval(function() {
                _this.index++;
                if (_this.index == _this.len) {
                    _this.sliderBox.style.left = 0;
                    _this.index = 0;
                }
                sport.animate_hc(_this.sliderBox, { left: -(_this.index) * _this.imgsBox.offsetWidth });
            }, 3000);
        },
    }
    return Slider_move;
})