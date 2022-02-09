(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/index"],
  {
    4066: function(t, n, e) {
      "use strict";
      var u;
      e.d(n, "b", function() {
        return a;
      }),
        e.d(n, "c", function() {
          return c;
        }),
        e.d(n, "a", function() {
          return u;
        });
      var a = function() {
          var t = this,
            n = t.$createElement;
          t._self._c;
        },
        c = [];
    },
    a547: function(t, n, e) {
      "use strict";
      e.r(n);
      var u = e("f374"),
        a = e.n(u);
      for (var c in u)
        ["default"].indexOf(c) < 0 &&
          (function(t) {
            e.d(n, t, function() {
              return u[t];
            });
          })(c);
      n["default"] = a.a;
    },
    df45: function(t, n, e) {
      "use strict";
      (function(t) {
        e("6cdc");
        var n = u(e("f75a"));
        function u(t) {
          return t && t.__esModule ? t : { default: t };
        }
        t(n.default);
      }.call(this, e("543d")["createPage"]));
    },
    f374: function(t, n, e) {
      "use strict";
      (function(t) {
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0);
        var u = a(e("66fd"));
        function a(t) {
          return t && t.__esModule ? t : { default: t };
        }
        var c = u.default.extend({
          data: function() {
            return { title: "Hello" };
          },
          methods: {
            clicked: function() {
              var n = Date.now();
              (global.tttt = n), console.log('click time is: ', n), (this.title = "test");
            },
          },
        });
        n.default = c;
      }.call(this, e("c8ba")));
    },
    f75a: function(t, n, e) {
      "use strict";
      e.r(n);
      var u = e("4066"),
        a = e("a547");
      for (var c in a)
        ["default"].indexOf(c) < 0 &&
          (function(t) {
            e.d(n, t, function() {
              return a[t];
            });
          })(c);
      var f,
        r = e("f0c5"),
        o = Object(r["a"])(
          a["default"],
          u["b"],
          u["c"],
          !1,
          null,
          null,
          null,
          !1,
          u["a"],
          f
        );
      n["default"] = o.exports;
    },
  },
  [["df45", "common/runtime", "common/vendor"]],
]);
