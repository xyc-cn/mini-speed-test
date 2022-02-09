(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([[7], {
    24: function(t, e, n) {
        "use strict";
        (function(t) {
            var c = n(8);
            e["a"] = Object(c["j"])({
                name: "Index",
                data: function() {
                    return {
                        text: "taro"
                    }
                },
                methods: {
                    clicked: function() {
                        var n = Date.now();
                        (global.tttt = n),
                        console.log('click time is: ', n),
                        this.text = "test"
                    }
                }
            })
        }
        ).call(this, n(22))
    },
    53: function(t, e, n) {
        "use strict";
        n.r(e);
        var c = n(6)
          , a = n(8)
          , i = n(0)
          , o = {
            class: "index"
        };
        function r(t, e, n, c, r, s) {
            return Object(a["t"])(),
            Object(a["e"])("view", o, [Object(a["f"])("text", {
                onTap: e[0] || (e[0] = function() {
                    return t.clicked && t.clicked.apply(t, arguments)
                }
                )
            }, Object(i["K"])(t.text), 33)])
        }
        var s = n(24);
        s["a"].render = r;
        var u = s["a"]
          , x = {
            navigationBarTitleText: "\u9996\u9875"
        };
        Page(Object(c["createPageConfig"])(u, "pages/index/index", {
            root: {
                cn: []
            }
        }, x || {}))
    }
}, [[53, 0, 1, 2]]]);
