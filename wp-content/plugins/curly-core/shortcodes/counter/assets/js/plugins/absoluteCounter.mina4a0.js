/* Absolute counter */
(function (a) {
    "use strict";
    a.fn.absoluteCounter = function (b) {
        b = a.extend({}, a.fn.absoluteCounter.defaults, b || {});
        return a(this).each(function () {
            var d = this, g = b.speed, f = b.setStyles, e = b.delayedStart, c = b.fadeInDelay;
            if (f) {
                a(d).css({display: "block", position: "relative", overflow: "hidden"}).addClass('animated')
            }
            a(d).css("opacity", "0");
            a(d).animate({opacity: 0}, e, function () {
                var l = a(d).text();
                a(d).text("");
                for (var k = 0; k < l.length; k++) {
                    var n = l.charAt(k);
                    var m = "";
                    if (parseInt(n, 10) >= 0) {
                        m = '<span class="onedigit p' + (l.length - k) + " d" + n + '">';
                        for (var h = 0; h <= parseInt(n, 10); h++) {
                            m += '<span class="n' + (h % 10) + '">' + (h % 10) + "</span>"
                        }
                        m += "</span>"
                    } else {
                        m = '<span class="onedigit p' + (l.length - k) + ' char"><span class="c">' + n + "</span></span>"
                    }
                    a(d).append(m)
                }
                a(d).animate({opacity: 1}, c);
                a("span.onedigit", d).each(function (i, o) {
                    if (f) {
                        a(o).css({"float": "left", position: "relative"});
                        a("span", a(o)).css({display: "block"})
                    }
                    var p = a("span", a(o)).length, j = a(d).height();
                    a(o).css({height: (p * j) + "px", top: "0"});
                    a("span", a(o)).css({height: j + "px"});
                    a(o).animate({top: -1 * ((p - 1) * j) + "px"}, g, function () {
                        if (typeof(b.onComplete) === "function") {
                            b.onComplete.call(d)
                        }
                    })
                })
            })
        })
    };
    a.fn.absoluteCounter.defaults = {speed: 2000, setStyles: true, onComplete: null, delayedStart: 0, fadeInDelay: 0}
}(jQuery));