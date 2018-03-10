define(['util', 'animate'], function(utils, sport) {
    function Move(divs) {
        this.divs = divs;
        this.index = 0;
        this.init();
    }

    Move.prototype = {
        init: function() {
            this.dong();
        },
        dong: function() {
            var _this = this;
            window.onmousewheel = function() {
                var event = utils.getEvent();
                var wheelDelta = event.wheelDelta;
                if (wheelDelta < 0) {
                    if (_this.index === 0) {
                        _this.index = 1;
                        sport.animate_hc(_this.divs[_this.index], {
                            "top": _this.divs[_this.index].offsetTop - 150
                        });
                        sport.animate_hc(_this.divs[_this.index - 1], {
                            "top": _this.divs[_this.index - 1].offsetTop - 50
                        });
                        console.log(_this.divs[_this.index].offsetTop);
                        if (_this.divs[_this.index].offsetTop <= 600) {
                            sport.animate_hc(_this.divs[_this.index], {
                                "top": 0
                            });
                            sport.animate_hc(_this.divs[_this.index - 1], {
                                "top": -200
                            });
                        }
                    } else if (_this.index >= _this.divs.length) {
                        _this.index = _this.divs.length - 1;
                    } else {
                        sport.animate_hc(_this.divs[_this.index], {
                            "top": _this.divs[_this.index].offsetTop - 150
                        });
                        if (_this.divs[_this.index].offsetTop <= 600) {
                            sport.animate_hc(_this.divs[_this.index], {
                                "top": 0
                            });
                            sport.animate_hc(_this.divs[_this.index - 1], {
                                "top": -200
                            });
                            _this.index++;
                        }
                    }
                } else {
                    if (_this.index === 0) {
                        _this.index = 1;
                        sport.animate_hc(_this.divs[_this.index], {
                            "top": 1000
                        });
                        _this.index = 0;
                    } else if (_this.index >= _this.divs.length) {
                        _this.index = _this.divs.length - 1;
                    } else {
                        if (_this.index != _this.divs.length - 1 && _this.divs[_this.index + 1].offsetTop <= 800) {

                        } else {
                            if (_this.divs[_this.index].offsetTop >= 100) {
                                sport.animate_hc(_this.divs[_this.index], {
                                    "top": 900
                                });
                                sport.animate_hc(_this.divs[_this.index - 1], {
                                    "top": 0
                                })
                                _this.index--;
                            } else {
                                sport.animate_hc(_this.divs[_this.index], {
                                    "top": _this.divs[_this.index].offsetTop + 150
                                });
                                sport.animate_hc(_this.divs[_this.index - 1], {
                                    "top": _this.divs[_this.index - 1].offsetTop + 50
                                });
                            }
                        }
                    }
                }
            }
        }
    }
    return Move;
});