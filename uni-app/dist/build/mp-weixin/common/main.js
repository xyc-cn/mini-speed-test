(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["common/main"],
  {
    "034f": function(n, o, t) {
      "use strict";
      var e = t("368d"),
        u = t.n(e);
      u.a;
    },
    "368d": function(n, o, t) {},
    "3dfd": function(n, o, t) {
      "use strict";
      t.r(o);
      var e = t("6f68");
      for (var u in e)
        ["default"].indexOf(u) < 0 &&
          (function(n) {
            t.d(o, n, function() {
              return e[n];
            });
          })(u);
      t("034f");
      var c,
        f,
        d,
        a,
        i = t("f0c5"),
        l = Object(i["a"])(e["default"], c, f, !1, null, null, null, !1, d, a);
      o["default"] = l.exports;
    },
    "6f68": function(n, o, t) {
      "use strict";
      t.r(o);
      var e = t("7ccf"),
        u = t.n(e);
      for (var c in e)
        ["default"].indexOf(c) < 0 &&
          (function(n) {
            t.d(o, n, function() {
              return e[n];
            });
          })(c);
      o["default"] = u.a;
    },
    "7ccf": function(n, o, t) {
      "use strict";
      Object.defineProperty(o, "__esModule", { value: !0 }),
        (o.default = void 0);
      var e = u(t("66fd"));
      function u(n) {
        return n && n.__esModule ? n : { default: n };
      }
      var c = e.default.extend({
        mpType: "app",
        onLaunch: function() {
          console.log("App Launch");
        },
        onShow: function() {
          console.log("App Show");
        },
        onHide: function() {
          console.log("App Hide");
        },
      });
      o.default = c;
    },
    cd49: function(n, o, t) {
      "use strict";
      (function(n) {
        t("6cdc");
        var o = u(t("66fd")),
          e = u(t("3dfd"));
        function u(n) {
          return n && n.__esModule ? n : { default: n };
        }
        (o.default.config.productionTip = !1), n(new e.default()).$mount();
      }.call(this, t("543d")["createApp"]));
    },
  },
  [["cd49", "common/runtime", "common/vendor"]],
]);
