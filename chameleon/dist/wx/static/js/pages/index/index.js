var __CML__GLOBAL = require("../../manifest.js");

__CML__GLOBAL.webpackJsonp(
  [2],
  {
    63: function (e, n, t) {
      var o = (t(64), t(65));
      __CML__GLOBAL.__CMLCOMPONNETS__["pages/index/index"] = o;
    },
    64: function (e, n) {},
    65: function (e, n, t) {
      (function (o) {
        function i(e, n) {
          if (!(e instanceof n))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var a = (function () {
            function e(e, n) {
              for (var t = 0; t < n.length; t++) {
                var o = n[t];
                (o.enumerable = o.enumerable || !1),
                  (o.configurable = !0),
                  "value" in o && (o.writable = !0),
                  Object.defineProperty(e, o.key, o);
              }
            }
            return function (n, t, o) {
              return t && e(n.prototype, t), o && e(n, o), n;
            };
          })(),
          r = t(3),
          u = (function (e) {
            return e && e.__esModule ? e : { default: e };
          })(r),
          c = (function () {
            function e() {
              i(this, e),
                (this.data = { title: "chameleon", chameleonSrc: t(66) }),
                (this.methods = {
                  clicked: function () {
                    var n = Date.now();
                    (__CML__GLOBAL.startTT = n), console.log('click time is: ', n),
                    (this.title = "test");
                  },
                });
            }
            return a(e, [{ key: "mounted", value: function () {} }]), e;
          })();
        (n.default = new c()),
          (e.exports = function () {
            u.default.createPage(n.default).getOptions();
          });
      }.call(n, t(15)));
    },
    66: function (e, n, t) {
      e.exports = t.p + "static/img/chameleon_83ee00e.png";
    },
  },
  [63]
),
  (module.exports = __CML__GLOBAL.__CMLCOMPONNETS__["pages/index/index"]);
