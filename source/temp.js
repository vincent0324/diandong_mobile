!function(e) {
    function t(i) {
        if (n[i])
            return n[i].exports;
        var o = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(o.exports, o, o.exports, t),
        o.loaded = !0,
        o.exports
    }
    var n = {};
    return t.m = e,
    t.c = n,
    t.p = "",
    t(0)
}([function(e, t) {
        "use strict";
        !function(e) {
            function t() {
                var t = a.getBoundingClientRect().width;
                t / n > 540 && (t = 540 * n),
                e.rem = t / 16,
                a.style.fontSize = e.rem + "px"
            }
            var n,
                i,
                o,
                r = window.document,
                a = r.documentElement,
                d = r.querySelector('meta[name="viewport"]');
            if (d) {
                var s = d.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);
                s && (i = parseFloat(s[2]), n = parseInt(1 / i))
            } else
                d = r.createElement("meta"),
                d.setAttribute("name", "viewport"),
                d.setAttribute("content", "width=device-width, initial-scale=1, user-scalable=no, minimal-ui"),
                a.firstElementChild.appendChild(d);
            e.addEventListener("resize", function() {
                clearTimeout(o),
                o = setTimeout(t, 300)
            }, !1),
            e.addEventListener("pageshow", function(e) {
                e.persisted && (clearTimeout(o), o = setTimeout(t, 300))
            }, !1),
            "complete" === r.readyState
                ? r.body.style.fontSize = 12 * n + "px"
                : r.addEventListener("DOMContentLoaded", function() {
                    r.body.style.fontSize = 12 * n + "px"
                }, !1),
            t()
        }(window)
    }
]);
