define(['util'], function(util) {
    function CreateHead() {
        this.head = null;
        this.leftHead = null;
        this.centerHead = null;
        this.rightHead = null;
        this.init();
    }

    CreateHead.prototype = {
        constructor: CreateHead,
        init: function() {
            this.head = document.createElement('div');
            this.head.style.cssText += ";width:1200px;height:80px;margin:0 auto;clear:both;position:relative;text-align:center";
            this.createLeft();
            this.createCenter();
            this.createRight();
            var bodyF = document.body.firstChild;
            document.body.insertBefore(this.head, bodyF);
            this.loadLi();

        },
        createLeft: function() {
            this.leftHead = document.createElement('div');
            this.leftHead.style.cssText += ";width:150px;height:58px;float:left;margin-top:14px";
            var logo = document.createElement('img');
            var aLogo =document.createElement('a');
            aLogo.href="../index/index.html";
            logo.style.cssText += ";width:100%;height:100%";
            logo.src = '../base/img/logo.jpg';
            aLogo.appendChild(logo)
            this.leftHead.appendChild(aLogo);
            this.head.appendChild(this.leftHead);
        },
        createCenter: function() {
            this.centerHead = document.createElement('div');
            this.centerHead.style.cssText += ";float:left;height:27px;margin-left:328px;margin-top:28px;width:525px;clear:both;position:absolute";
            var ul = document.createElement('ul');
            ul.style.cssText += ";height:24px;padding:0;margin:0";
            ul.id = "meau";
            var text = ["首页", "风格", "设计师", "高定", "经典案例", "品牌故事", "关于我们"]; //innerText
            var path = ["../index/index.html", "../webstyle/webstyle.html", "../designer/designer.html", "../gaoding/gaoding.html", "../classic-case/class-case.html", "../brandconcept/brandconcept.html", '../about-us/about.html'];
            for (var i = 0; i < 7; i++) {
                var li = document.createElement('li');
                // var lidiv=document.createElement('div');
                // lidiv.style.cssText+=";height:27px;overflow:hidden"
                var lia = document.createElement('a');
                lia.href = path[i];
                lia.style.cssText += ";margin-right:21px;float:left;list-style:none;color:grey;font-size:18px;font-family:微软雅黑;cursor:pointer;";
                lia.innerText = text[i];
                // lidiv.appendChild(lia);
                li.appendChild(lia);
                ul.appendChild(li);
            }
            this.centerHead.appendChild(ul);
            this.head.appendChild(this.centerHead);

        },
        createRight: function() {
            this.rightHead = document.createElement('div');
            this.rightHead.style.cssText += ";margin-left:94px;float:left;width:253px;height:32px;margin-top:26px;position:relative;left:703px";
            var input = document.createElement('input');
            input.style.cssText += ";width:215px;height:28px;border:2px solid #dcdcdc;float:left";
            var search = document.createElement('img');
            search.src = "../base/img/search.jpg";
            search.style.cssText += ";position:absolute;left:187px;top:8px";
            var line = document.createElement('a');
            line.style.cssText += ";background: url(../base/img/line.jpg) no-repeat; display: inline-block;width:3px;height:24px;position:absolute;left:177px;top:8px";
            var at = document.createElement('a');
            at.style.cssText += ";background: url(../base/img/at.jpg) no-repeat; display: inline-block;width:21px;height:21px;position:absolute;left:232px;top:4px";
            this.rightHead.appendChild(search);
            this.rightHead.appendChild(input);
            this.rightHead.appendChild(line);
            this.rightHead.appendChild(at);
            this.head.appendChild(this.rightHead);

        },
        loadLi: function() {
            var ul = document.getElementById('meau');
            var ll = ul.getElementsByTagName('a');
            for (var i = 0, len = ll.length; i < len; i++) {
                ll[i].onmouseover = function() {
                    var event = util.getEvent();
                    util.getEventSource(event).style.cssText += ";margin-right:21px;float:left;list-style:none;font-size:18px;font-family:微软雅黑;color:#e3a45f;text-decoration:underline;cursor:pointer";
                };
                ll[i].onmouseout = function() {
                    var event = util.getEvent();
                    util.getEventSource(event).style.cssText += ";margin-right:21px;float:left;list-style:none;color:grey;font-size:18px;font-family:微软雅黑;text-decoration:none;";
                };
            }
        }
    };
    return CreateHead;
});