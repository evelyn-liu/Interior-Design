require.config({
    baseUrl: "../base/"
});

require(['divmove', 'animate'], function(Move, sport) {
    var divs = [];
    divs.push(document.getElementById('first'));
    divs.push(document.getElementById('second'));
    divs.push(document.getElementById('third'));
    divs.push(document.getElementById('fourth'));
    var s = new Move(divs);

    var img = document.getElementById('img');
    var select = document.getElementById('select');
    var a = false;
    console.log(img, select);
    img.onclick = function() {
        if (a) {
            sport.animate_hc(select, {
                "height": 0
            });
            a = false;
        } else {
            sport.animate_hc(select, {
                "height": 150
            });
            a = true;
        }
    };
});