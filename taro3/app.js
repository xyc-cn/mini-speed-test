const a = Date.now()
console.log(a)
global.tttt = a;
require("./runtime"),
  require("./vendors"),
  require("./taro"),
  (wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([
    [3],
    {
      21: function (t, e, n) {
        "use strict";
        (function (t, r, o, i, a, c) {
          n.d(e, "a", function () {
            return pt;
          });
          n(17), n(10), n(16);
          var u = n(8),
            s = (n(13), n(14), n(12)),
            l = n(7),
            f = n(5),
            p = n(0),
            d = n(9),
            v = (n(3), "http://www.w3.org/2000/svg"),
            h = "undefined" !== typeof t ? t : null,
            m = new Map(),
            b = {
              insert: function (t, e, n) {
                e.insertBefore(t, n || null);
              },
              remove: function (t) {
                var e = t.parentNode;
                e && e.removeChild(t);
              },
              createElement: function (t, e, n, r) {
                var o = e
                  ? h.createElementNS(v, t)
                  : h.createElement(t, n ? { is: n } : void 0);
                return (
                  "select" === t &&
                    r &&
                    null != r.multiple &&
                    o.setAttribute("multiple", r.multiple),
                  o
                );
              },
              createText: function (t) {
                return h.createTextNode(t);
              },
              createComment: function (t) {
                return h.createComment(t);
              },
              setText: function (t, e) {
                t.nodeValue = e;
              },
              setElementText: function (t, e) {
                t.textContent = e;
              },
              parentNode: function (t) {
                return t.parentNode;
              },
              nextSibling: function (t) {
                return t.nextSibling;
              },
              querySelector: function (t) {
                return h.querySelector(t);
              },
              setScopeId: function (t, e) {
                t.setAttribute(e, "");
              },
              cloneNode: function (t) {
                var e = t.cloneNode(!0);
                return "_value" in t && (e._value = t._value), e;
              },
              insertStaticContent: function (t, e, n, r) {
                var o = n ? n.previousSibling : e.lastChild,
                  i = m.get(t);
                if (!i) {
                  var a = h.createElement("template");
                  if (
                    ((a.innerHTML = r ? "<svg>".concat(t, "</svg>") : t),
                    (i = a.content),
                    r)
                  ) {
                    var c = i.firstChild;
                    while (c.firstChild) i.appendChild(c.firstChild);
                    i.removeChild(c);
                  }
                  m.set(t, i);
                }
                return (
                  e.insertBefore(i.cloneNode(!0), n),
                  [
                    o ? o.nextSibling : e.firstChild,
                    n ? n.previousSibling : e.lastChild,
                  ]
                );
              },
            };
          function g(t, e, n) {
            var r = t._vtc;
            r &&
              (e = (e ? [e].concat(Object(f["a"])(r)) : Object(f["a"])(r)).join(
                " "
              )),
              null == e
                ? t.removeAttribute("class")
                : n
                ? t.setAttribute("class", e)
                : (t.className = e);
          }
          function y(t, e, n) {
            var r = t.style,
              o = r.display;
            if (n)
              if (Object(p["C"])(n)) e !== n && (r.cssText = n);
              else {
                for (var i in n) O(r, i, n[i]);
                if (e && !Object(p["C"])(e))
                  for (var a in e) null == n[a] && O(r, a, "");
              }
            else t.removeAttribute("style");
            "_vod" in t && (r.display = o);
          }
          var _ = /\s*!important$/;
          function O(t, e, n) {
            if (Object(p["n"])(n))
              n.forEach(function (n) {
                return O(t, e, n);
              });
            else if (e.startsWith("--")) t.setProperty(e, n);
            else {
              var r = x(t, e);
              _.test(n)
                ? t.setProperty(
                    Object(p["k"])(r),
                    n.replace(_, ""),
                    "important"
                  )
                : (t[r] = n);
            }
          }
          var w = ["Webkit", "Moz", "ms"],
            j = {};
          function x(t, e) {
            var n = j[e];
            if (n) return n;
            var r = Object(p["e"])(e);
            if ("filter" !== r && r in t) return (j[e] = r);
            r = Object(p["f"])(r);
            for (var o = 0; o < w.length; o++) {
              var i = w[o] + r;
              if (i in t) return (j[e] = i);
            }
            return e;
          }
          var C = "http://www.w3.org/1999/xlink";
          function E(t, e, n, r, o) {
            if (r && e.startsWith("xlink:"))
              null == n
                ? t.removeAttributeNS(C, e.slice(6, e.length))
                : t.setAttributeNS(C, e, n);
            else {
              var i = Object(p["B"])(e);
              null == n || (i && !Object(p["l"])(n))
                ? t.removeAttribute(e)
                : t.setAttribute(e, i ? "" : n);
            }
          }
          function A(t, e, n, r, o, i, a) {
            if ("innerHTML" === e || "textContent" === e)
              return r && a(r, o, i), void (t[e] = null == n ? "" : n);
            if ("value" === e && "PROGRESS" !== t.tagName) {
              t._value = n;
              var c = null == n ? "" : n;
              return (
                t.value !== c && (t.value = c),
                void (null == n && t.removeAttribute(e))
              );
            }
            if ("" === n || null == n) {
              var u = Object(l["a"])(t[e]);
              if ("boolean" === u) return void (t[e] = Object(p["l"])(n));
              if (null == n && "string" === u)
                return (t[e] = ""), void t.removeAttribute(e);
              if ("number" === u) {
                try {
                  t[e] = 0;
                } catch (t) {}
                return void t.removeAttribute(e);
              }
            }
            try {
              t[e] = n;
            } catch (t) {
              0;
            }
          }
          var S = Date.now,
            k = !1;
          if ("undefined" !== typeof r) {
            S() > t.createEvent("Event").timeStamp &&
              (S = function () {
                return performance.now();
              });
            var M = o.userAgent.match(/firefox\/(\d+)/i);
            k = !!(M && Number(M[1]) <= 53);
          }
          var T = 0,
            P = Promise.resolve(),
            N = function () {
              T = 0;
            },
            L = function () {
              return T || (P.then(N), (T = S()));
            };
          function I(t, e, n, r) {
            t.addEventListener(e, n, r);
          }
          function D(t, e, n, r) {
            t.removeEventListener(e, n, r);
          }
          function G(t, e, n, r) {
            var o =
                arguments.length > 4 && void 0 !== arguments[4]
                  ? arguments[4]
                  : null,
              i = t._vei || (t._vei = {}),
              a = i[e];
            if (r && a) a.value = r;
            else {
              var c = $(e),
                u = Object(s["a"])(c, 2),
                l = u[0],
                f = u[1];
              if (r) {
                var p = (i[e] = V(r, o));
                I(t, l, p, f);
              } else a && (D(t, l, a, f), (i[e] = void 0));
            }
          }
          var B = /(?:Once|Passive|Capture)$/;
          function $(t) {
            var e;
            if (B.test(t)) {
              var n;
              e = {};
              while ((n = t.match(B)))
                (t = t.slice(0, t.length - n[0].length)),
                  (e[n[0].toLowerCase()] = !0);
            }
            return [Object(p["k"])(t.slice(2)), e];
          }
          function V(t, e) {
            var n = function t(n) {
              var r = n.timeStamp || S();
              (k || r >= t.attached - 1) &&
                Object(d["d"])(H(n, t.value), e, 5, [n]);
            };
            return (n.value = t), (n.attached = L()), n;
          }
          function H(t, e) {
            if (Object(p["n"])(e)) {
              var n = t.stopImmediatePropagation;
              return (
                (t.stopImmediatePropagation = function () {
                  n.call(t), (t._stopped = !0);
                }),
                e.map(function (t) {
                  return function (e) {
                    return !e._stopped && t(e);
                  };
                })
              );
            }
            return e;
          }
          var U = /^on[a-z]/,
            F = function (t, e, n, r) {
              var o =
                  arguments.length > 4 &&
                  void 0 !== arguments[4] &&
                  arguments[4],
                i = arguments.length > 5 ? arguments[5] : void 0,
                a = arguments.length > 6 ? arguments[6] : void 0,
                c = arguments.length > 7 ? arguments[7] : void 0,
                u = arguments.length > 8 ? arguments[8] : void 0;
              "class" === e
                ? g(t, r, o)
                : "style" === e
                ? y(t, n, r)
                : Object(p["v"])(e)
                ? Object(p["t"])(e) || G(t, e, n, r, a)
                : (
                    "." === e[0]
                      ? ((e = e.slice(1)), 1)
                      : "^" === e[0]
                      ? ((e = e.slice(1)), 0)
                      : R(t, e, r, o)
                  )
                ? A(t, e, r, i, a, c, u)
                : ("true-value" === e
                    ? (t._trueValue = r)
                    : "false-value" === e && (t._falseValue = r),
                  E(t, e, r, o));
            };
          function R(t, e, n, r) {
            return r
              ? "innerHTML" === e ||
                  "textContent" === e ||
                  !!(e in t && U.test(e) && Object(p["o"])(n))
              : "spellcheck" !== e &&
                  "draggable" !== e &&
                  "form" !== e &&
                  ("list" !== e || "INPUT" !== t.tagName) &&
                  ("type" !== e || "TEXTAREA" !== t.tagName) &&
                  (!U.test(e) || !Object(p["C"])(n)) &&
                  e in t;
          }
          "undefined" !== typeof HTMLElement && HTMLElement;
          var W = "transition",
            q = "animation",
            z = function (t, e) {
              var n = e.slots;
              return Object(d["m"])(d["a"], Q(t), n);
            };
          z.displayName = "Transition";
          var J = {
              name: String,
              type: String,
              css: { type: Boolean, default: !0 },
              duration: [String, Number, Object],
              enterFromClass: String,
              enterActiveClass: String,
              enterToClass: String,
              appearFromClass: String,
              appearActiveClass: String,
              appearToClass: String,
              leaveFromClass: String,
              leaveActiveClass: String,
              leaveToClass: String,
            },
            K =
              ((z.props = Object(p["h"])({}, d["a"].props, J)),
              function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
                Object(p["n"])(t)
                  ? t.forEach(function (t) {
                      return t.apply(void 0, Object(f["a"])(e));
                    })
                  : t && t.apply(void 0, Object(f["a"])(e));
              }),
            X = function (t) {
              return (
                !!t &&
                (Object(p["n"])(t)
                  ? t.some(function (t) {
                      return t.length > 1;
                    })
                  : t.length > 1)
              );
            };
          function Q(t) {
            var e = {};
            for (var n in t) n in J || (e[n] = t[n]);
            if (!1 === t.css) return e;
            var r = t.name,
              o = void 0 === r ? "v" : r,
              i = t.type,
              a = t.duration,
              c = t.enterFromClass,
              u = void 0 === c ? "".concat(o, "-enter-from") : c,
              s = t.enterActiveClass,
              l = void 0 === s ? "".concat(o, "-enter-active") : s,
              f = t.enterToClass,
              d = void 0 === f ? "".concat(o, "-enter-to") : f,
              v = t.appearFromClass,
              h = void 0 === v ? u : v,
              m = t.appearActiveClass,
              b = void 0 === m ? l : m,
              g = t.appearToClass,
              y = void 0 === g ? d : g,
              _ = t.leaveFromClass,
              O = void 0 === _ ? "".concat(o, "-leave-from") : _,
              w = t.leaveActiveClass,
              j = void 0 === w ? "".concat(o, "-leave-active") : w,
              x = t.leaveToClass,
              C = void 0 === x ? "".concat(o, "-leave-to") : x,
              E = Y(a),
              A = E && E[0],
              S = E && E[1],
              k = e.onBeforeEnter,
              M = e.onEnter,
              T = e.onEnterCancelled,
              P = e.onLeave,
              N = e.onLeaveCancelled,
              L = e.onBeforeAppear,
              I = void 0 === L ? k : L,
              D = e.onAppear,
              G = void 0 === D ? M : D,
              B = e.onAppearCancelled,
              $ = void 0 === B ? T : B,
              V = function (t, e, n) {
                et(t, e ? y : d), et(t, e ? b : l), n && n();
              },
              H = function (t, e) {
                et(t, C), et(t, j), e && e();
              },
              U = function (t) {
                return function (e, n) {
                  var r = t ? G : M,
                    o = function () {
                      return V(e, t, n);
                    };
                  K(r, [e, o]),
                    nt(function () {
                      et(e, t ? h : u),
                        tt(e, t ? y : d),
                        X(r) || ot(e, i, A, o);
                    });
                };
              };
            return Object(p["h"])(e, {
              onBeforeEnter: function (t) {
                K(k, [t]), tt(t, u), tt(t, l);
              },
              onBeforeAppear: function (t) {
                K(I, [t]), tt(t, h), tt(t, b);
              },
              onEnter: U(!1),
              onAppear: U(!0),
              onLeave: function (t, e) {
                var n = function () {
                  return H(t, e);
                };
                tt(t, O),
                  ut(),
                  tt(t, j),
                  nt(function () {
                    et(t, O), tt(t, C), X(P) || ot(t, i, S, n);
                  }),
                  K(P, [t, n]);
              },
              onEnterCancelled: function (t) {
                V(t, !1), K(T, [t]);
              },
              onAppearCancelled: function (t) {
                V(t, !0), K($, [t]);
              },
              onLeaveCancelled: function (t) {
                H(t), K(N, [t]);
              },
            });
          }
          function Y(t) {
            if (null == t) return null;
            if (Object(p["u"])(t)) return [Z(t.enter), Z(t.leave)];
            var e = Z(t);
            return [e, e];
          }
          function Z(t) {
            var e = Object(p["M"])(t);
            return e;
          }
          function tt(t, e) {
            e.split(/\s+/).forEach(function (e) {
              return e && t.classList.add(e);
            }),
              (t._vtc || (t._vtc = new Set())).add(e);
          }
          function et(t, e) {
            e.split(/\s+/).forEach(function (e) {
              return e && t.classList.remove(e);
            });
            var n = t._vtc;
            n && (n.delete(e), n.size || (t._vtc = void 0));
          }
          function nt(t) {
            i(function () {
              i(t);
            });
          }
          var rt = 0;
          function ot(t, e, n, r) {
            var o = (t._endId = ++rt),
              i = function () {
                o === t._endId && r();
              };
            if (n) return setTimeout(i, n);
            var a = it(t, e),
              c = a.type,
              u = a.timeout,
              s = a.propCount;
            if (!c) return r();
            var l = c + "end",
              f = 0,
              p = function () {
                t.removeEventListener(l, d), i();
              },
              d = function (e) {
                e.target === t && ++f >= s && p();
              };
            setTimeout(function () {
              f < s && p();
            }, u + 1),
              t.addEventListener(l, d);
          }
          function it(t, e) {
            var n = r.getComputedStyle(t),
              o = function (t) {
                return (n[t] || "").split(", ");
              },
              i = o(W + "Delay"),
              a = o(W + "Duration"),
              c = at(i, a),
              u = o(q + "Delay"),
              s = o(q + "Duration"),
              l = at(u, s),
              f = null,
              p = 0,
              d = 0;
            e === W
              ? c > 0 && ((f = W), (p = c), (d = a.length))
              : e === q
              ? l > 0 && ((f = q), (p = l), (d = s.length))
              : ((p = Math.max(c, l)),
                (f = p > 0 ? (c > l ? W : q) : null),
                (d = f ? (f === W ? a.length : s.length) : 0));
            var v = f === W && /\b(transform|all)(,|$)/.test(n[W + "Property"]);
            return { type: f, timeout: p, propCount: d, hasTransform: v };
          }
          function at(t, e) {
            while (t.length < e.length) t = t.concat(t);
            return Math.max.apply(
              Math,
              Object(f["a"])(
                e.map(function (e, n) {
                  return ct(e) + ct(t[n]);
                })
              )
            );
          }
          function ct(t) {
            return 1e3 * Number(t.slice(0, -1).replace(",", "."));
          }
          function ut() {
            return t.body.offsetHeight;
          }
          new WeakMap(), new WeakMap();
          var st,
            lt = Object(p["h"])({ patchProp: F }, b);
          function ft() {
            return st || (st = Object(d["h"])(lt));
          }
          var pt = function () {
            var t,
              e = (t = ft()).createApp.apply(t, arguments);
            var n = e.mount;
            return (
              (e.mount = function (t) {
                var r = dt(t);
                if (r) {
                  var o = e._component;
                  Object(p["o"])(o) ||
                    o.render ||
                    o.template ||
                    (o.template = r.innerHTML),
                    (r.innerHTML = "");
                  var i = n(r, !1, r instanceof a);
                  return (
                    r instanceof c &&
                      (r.removeAttribute("v-cloak"),
                      r.setAttribute("data-v-app", "")),
                    i
                  );
                }
              }),
              e
            );
          };
          function dt(e) {
            if (Object(p["C"])(e)) {
              var n = t.querySelector(e);
              return n;
            }
            return e;
          }
        }.call(
          this,
          n(6)["document"],
          n(6)["window"],
          n(6)["navigator"],
          n(6)["requestAnimationFrame"],
          n(6)["SVGElement"],
          n(6)["TaroElement"]
        ));
      },
      29: function (t, e) {
        function n(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        (t.exports = n),
          (t.exports["default"] = t.exports),
          (t.exports.__esModule = !0);
      },
      30: function (t, e) {
        function n(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        (t.exports = n),
          (t.exports["default"] = t.exports),
          (t.exports.__esModule = !0);
      },
      31: function (t, e) {
        function n(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function r(t, e, r) {
          return e && n(t.prototype, e), r && n(t, r), t;
        }
        (t.exports = r),
          (t.exports["default"] = t.exports),
          (t.exports.__esModule = !0);
      },
      32: function (t, e, n) {
        "use strict";
        (function (t, r, o) {
          function i() {
            return a().__VUE_DEVTOOLS_GLOBAL_HOOK__;
          }
          function a() {
            return "undefined" !== typeof t
              ? r
              : "undefined" !== typeof o
              ? o
              : {};
          }
          n.d(e, "a", function () {
            return i;
          }),
            n.d(e, "b", function () {
              return a;
            });
        }.call(this, n(6)["navigator"], n(6)["window"], n(23)));
      },
      36: function (t, e, n) {
        var r = n(29);
        function o(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function i(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? o(Object(n), !0).forEach(function (e) {
                  r(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        (t.exports = i),
          (t.exports["default"] = t.exports),
          (t.exports.__esModule = !0);
      },
      37: function (t, e, n) {
        "use strict";
        n.d(e, "setupDevtoolsPlugin", function () {
          return i;
        });
        var r = n(32),
          o = n(38);
        function i(t, e) {
          var n = Object(r["a"])();
          if (n) n.emit(o["a"], t, e);
          else {
            var i = Object(r["b"])(),
              a = (i.__VUE_DEVTOOLS_PLUGINS__ =
                i.__VUE_DEVTOOLS_PLUGINS__ || []);
            a.push({ pluginDescriptor: t, setupFn: e });
          }
        }
      },
      38: function (t, e, n) {
        "use strict";
        n.d(e, "a", function () {
          return r;
        });
        var r = "devtools-plugin:setup";
      },
      51: function (t, e, n) {},
      53: function (t, e, n) {
        "use strict";
        n.r(e);
        n(43);
        var r = n(6),
          o = n(35),
          i = n(21),
          a = n(7),
          c = n(9),
          u = n(3),
          s = n(37),
          l = "store";
        function f(t, e) {
          Object.keys(t).forEach(function (n) {
            return e(t[n], n);
          });
        }
        function p(t) {
          return null !== t && "object" === Object(a["a"])(t);
        }
        function d(t) {
          return t && "function" === typeof t.then;
        }
        function v(t, e) {
          if (!t) throw new Error("[vuex] " + e);
        }
        function h(t, e) {
          return function () {
            return t(e);
          };
        }
        function m(t, e, n) {
          return (
            e.indexOf(t) < 0 && (n && n.prepend ? e.unshift(t) : e.push(t)),
            function () {
              var n = e.indexOf(t);
              n > -1 && e.splice(n, 1);
            }
          );
        }
        function b(t, e) {
          (t._actions = Object.create(null)),
            (t._mutations = Object.create(null)),
            (t._wrappedGetters = Object.create(null)),
            (t._modulesNamespaceMap = Object.create(null));
          var n = t.state;
          y(t, n, [], t._modules.root, !0), g(t, n, e);
        }
        function g(t, e, n) {
          var r = t._state;
          (t.getters = {}), (t._makeLocalGettersCache = Object.create(null));
          var o = t._wrappedGetters,
            i = {};
          f(o, function (e, n) {
            (i[n] = h(e, t)),
              Object.defineProperty(t.getters, n, {
                get: function () {
                  return i[n]();
                },
                enumerable: !0,
              });
          }),
            (t._state = Object(u["k"])({ data: e })),
            t.strict && C(t),
            r &&
              n &&
              t._withCommit(function () {
                r.data = null;
              });
        }
        function y(t, e, n, r, o) {
          var i = !n.length,
            a = t._modules.getNamespace(n);
          if (
            (r.namespaced &&
              (t._modulesNamespaceMap[a] &&
                console.error(
                  "[vuex] duplicate namespace " +
                    a +
                    " for the namespaced module " +
                    n.join("/")
                ),
              (t._modulesNamespaceMap[a] = r)),
            !i && !o)
          ) {
            var c = E(e, n.slice(0, -1)),
              u = n[n.length - 1];
            t._withCommit(function () {
              u in c &&
                console.warn(
                  '[vuex] state field "' +
                    u +
                    '" was overridden by a module with the same name at "' +
                    n.join(".") +
                    '"'
                ),
                (c[u] = r.state);
            });
          }
          var s = (r.context = _(t, a, n));
          r.forEachMutation(function (e, n) {
            var r = a + n;
            w(t, r, e, s);
          }),
            r.forEachAction(function (e, n) {
              var r = e.root ? n : a + n,
                o = e.handler || e;
              j(t, r, o, s);
            }),
            r.forEachGetter(function (e, n) {
              var r = a + n;
              x(t, r, e, s);
            }),
            r.forEachChild(function (r, i) {
              y(t, e, n.concat(i), r, o);
            });
        }
        function _(t, e, n) {
          var r = "" === e,
            o = {
              dispatch: r
                ? t.dispatch
                : function (n, r, o) {
                    var i = A(n, r, o),
                      a = i.payload,
                      c = i.options,
                      u = i.type;
                    if ((c && c.root) || ((u = e + u), t._actions[u]))
                      return t.dispatch(u, a);
                    console.error(
                      "[vuex] unknown local action type: " +
                        i.type +
                        ", global type: " +
                        u
                    );
                  },
              commit: r
                ? t.commit
                : function (n, r, o) {
                    var i = A(n, r, o),
                      a = i.payload,
                      c = i.options,
                      u = i.type;
                    (c && c.root) || ((u = e + u), t._mutations[u])
                      ? t.commit(u, a, c)
                      : console.error(
                          "[vuex] unknown local mutation type: " +
                            i.type +
                            ", global type: " +
                            u
                        );
                  },
            };
          return (
            Object.defineProperties(o, {
              getters: {
                get: r
                  ? function () {
                      return t.getters;
                    }
                  : function () {
                      return O(t, e);
                    },
              },
              state: {
                get: function () {
                  return E(t.state, n);
                },
              },
            }),
            o
          );
        }
        function O(t, e) {
          if (!t._makeLocalGettersCache[e]) {
            var n = {},
              r = e.length;
            Object.keys(t.getters).forEach(function (o) {
              if (o.slice(0, r) === e) {
                var i = o.slice(r);
                Object.defineProperty(n, i, {
                  get: function () {
                    return t.getters[o];
                  },
                  enumerable: !0,
                });
              }
            }),
              (t._makeLocalGettersCache[e] = n);
          }
          return t._makeLocalGettersCache[e];
        }
        function w(t, e, n, r) {
          var o = t._mutations[e] || (t._mutations[e] = []);
          o.push(function (e) {
            n.call(t, r.state, e);
          });
        }
        function j(t, e, n, r) {
          var o = t._actions[e] || (t._actions[e] = []);
          o.push(function (e) {
            var o = n.call(
              t,
              {
                dispatch: r.dispatch,
                commit: r.commit,
                getters: r.getters,
                state: r.state,
                rootGetters: t.getters,
                rootState: t.state,
              },
              e
            );
            return (
              d(o) || (o = Promise.resolve(o)),
              t._devtoolHook
                ? o.catch(function (e) {
                    throw (t._devtoolHook.emit("vuex:error", e), e);
                  })
                : o
            );
          });
        }
        function x(t, e, n, r) {
          t._wrappedGetters[e]
            ? console.error("[vuex] duplicate getter key: " + e)
            : (t._wrappedGetters[e] = function (t) {
                return n(r.state, r.getters, t.state, t.getters);
              });
        }
        function C(t) {
          Object(c["y"])(
            function () {
              return t._state.data;
            },
            function () {
              v(
                t._committing,
                "do not mutate vuex store state outside mutation handlers."
              );
            },
            { deep: !0, flush: "sync" }
          );
        }
        function E(t, e) {
          return e.reduce(function (t, e) {
            return t[e];
          }, t);
        }
        function A(t, e, n) {
          return (
            p(t) && t.type && ((n = e), (e = t), (t = t.type)),
            v(
              "string" === typeof t,
              "expects string as the type, but found " + Object(a["a"])(t) + "."
            ),
            { type: t, payload: e, options: n }
          );
        }
        var S = "vuex bindings",
          k = "vuex:mutations",
          M = "vuex:actions",
          T = "vuex",
          P = 0;
        function N(t, e) {
          Object(s["setupDevtoolsPlugin"])(
            {
              id: "org.vuejs.vuex",
              app: t,
              label: "Vuex",
              homepage: "https://next.vuex.vuejs.org/",
              logo: "https://vuejs.org/images/icons/favicon-96x96.png",
              packageName: "vuex",
              componentStateTypes: [S],
            },
            function (n) {
              n.addTimelineLayer({ id: k, label: "Vuex Mutations", color: L }),
                n.addTimelineLayer({ id: M, label: "Vuex Actions", color: L }),
                n.addInspector({
                  id: T,
                  label: "Vuex",
                  icon: "storage",
                  treeFilterPlaceholder: "Filter stores...",
                }),
                n.on.getInspectorTree(function (n) {
                  if (n.app === t && n.inspectorId === T)
                    if (n.filter) {
                      var r = [];
                      V(r, e._modules.root, n.filter, ""), (n.rootNodes = r);
                    } else n.rootNodes = [$(e._modules.root, "")];
                }),
                n.on.getInspectorState(function (n) {
                  if (n.app === t && n.inspectorId === T) {
                    var r = n.nodeId;
                    O(e, r),
                      (n.state = H(
                        F(e._modules, r),
                        "root" === r ? e.getters : e._makeLocalGettersCache,
                        r
                      ));
                  }
                }),
                n.on.editInspectorState(function (n) {
                  if (n.app === t && n.inspectorId === T) {
                    var r = n.nodeId,
                      o = n.path;
                    "root" !== r &&
                      (o = r.split("/").filter(Boolean).concat(o)),
                      e._withCommit(function () {
                        n.set(e._state.data, o, n.state.value);
                      });
                  }
                }),
                e.subscribe(function (t, e) {
                  var r = {};
                  t.payload && (r.payload = t.payload),
                    (r.state = e),
                    n.notifyComponentUpdate(),
                    n.sendInspectorTree(T),
                    n.sendInspectorState(T),
                    n.addTimelineEvent({
                      layerId: k,
                      event: { time: Date.now(), title: t.type, data: r },
                    });
                }),
                e.subscribeAction({
                  before: function (t, e) {
                    var r = {};
                    t.payload && (r.payload = t.payload),
                      (t._id = P++),
                      (t._time = Date.now()),
                      (r.state = e),
                      n.addTimelineEvent({
                        layerId: M,
                        event: {
                          time: t._time,
                          title: t.type,
                          groupId: t._id,
                          subtitle: "start",
                          data: r,
                        },
                      });
                  },
                  after: function (t, e) {
                    var r = {},
                      o = Date.now() - t._time;
                    (r.duration = {
                      _custom: {
                        type: "duration",
                        display: o + "ms",
                        tooltip: "Action duration",
                        value: o,
                      },
                    }),
                      t.payload && (r.payload = t.payload),
                      (r.state = e),
                      n.addTimelineEvent({
                        layerId: M,
                        event: {
                          time: Date.now(),
                          title: t.type,
                          groupId: t._id,
                          subtitle: "end",
                          data: r,
                        },
                      });
                  },
                });
            }
          );
        }
        var L = 8702998,
          I = 6710886,
          D = 16777215,
          G = { label: "namespaced", textColor: D, backgroundColor: I };
        function B(t) {
          return t && "root" !== t ? t.split("/").slice(-2, -1)[0] : "Root";
        }
        function $(t, e) {
          return {
            id: e || "root",
            label: B(e),
            tags: t.namespaced ? [G] : [],
            children: Object.keys(t._children).map(function (n) {
              return $(t._children[n], e + n + "/");
            }),
          };
        }
        function V(t, e, n, r) {
          r.includes(n) &&
            t.push({
              id: r || "root",
              label: r.endsWith("/") ? r.slice(0, r.length - 1) : r || "Root",
              tags: e.namespaced ? [G] : [],
            }),
            Object.keys(e._children).forEach(function (o) {
              V(t, e._children[o], n, r + o + "/");
            });
        }
        function H(t, e, n) {
          e = "root" === n ? e : e[n];
          var r = Object.keys(e),
            o = {
              state: Object.keys(t.state).map(function (e) {
                return { key: e, editable: !0, value: t.state[e] };
              }),
            };
          if (r.length) {
            var i = U(e);
            o.getters = Object.keys(i).map(function (t) {
              return {
                key: t.endsWith("/") ? B(t) : t,
                editable: !1,
                value: R(function () {
                  return i[t];
                }),
              };
            });
          }
          return o;
        }
        function U(t) {
          var e = {};
          return (
            Object.keys(t).forEach(function (n) {
              var r = n.split("/");
              if (r.length > 1) {
                var o = e,
                  i = r.pop();
                r.forEach(function (t) {
                  o[t] ||
                    (o[t] = {
                      _custom: {
                        value: {},
                        display: t,
                        tooltip: "Module",
                        abstract: !0,
                      },
                    }),
                    (o = o[t]._custom.value);
                }),
                  (o[i] = R(function () {
                    return t[n];
                  }));
              } else
                e[n] = R(function () {
                  return t[n];
                });
            }),
            e
          );
        }
        function F(t, e) {
          var n = e.split("/").filter(function (t) {
            return t;
          });
          return n.reduce(
            function (t, r, o) {
              var i = t[r];
              if (!i)
                throw new Error(
                  'Missing module "' + r + '" for path "' + e + '".'
                );
              return o === n.length - 1 ? i : i._children;
            },
            "root" === e ? t : t.root._children
          );
        }
        function R(t) {
          try {
            return t();
          } catch (t) {
            return t;
          }
        }
        var W = function (t, e) {
            (this.runtime = e),
              (this._children = Object.create(null)),
              (this._rawModule = t);
            var n = t.state;
            this.state = ("function" === typeof n ? n() : n) || {};
          },
          q = { namespaced: { configurable: !0 } };
        (q.namespaced.get = function () {
          return !!this._rawModule.namespaced;
        }),
          (W.prototype.addChild = function (t, e) {
            this._children[t] = e;
          }),
          (W.prototype.removeChild = function (t) {
            delete this._children[t];
          }),
          (W.prototype.getChild = function (t) {
            return this._children[t];
          }),
          (W.prototype.hasChild = function (t) {
            return t in this._children;
          }),
          (W.prototype.update = function (t) {
            (this._rawModule.namespaced = t.namespaced),
              t.actions && (this._rawModule.actions = t.actions),
              t.mutations && (this._rawModule.mutations = t.mutations),
              t.getters && (this._rawModule.getters = t.getters);
          }),
          (W.prototype.forEachChild = function (t) {
            f(this._children, t);
          }),
          (W.prototype.forEachGetter = function (t) {
            this._rawModule.getters && f(this._rawModule.getters, t);
          }),
          (W.prototype.forEachAction = function (t) {
            this._rawModule.actions && f(this._rawModule.actions, t);
          }),
          (W.prototype.forEachMutation = function (t) {
            this._rawModule.mutations && f(this._rawModule.mutations, t);
          }),
          Object.defineProperties(W.prototype, q);
        var z = function (t) {
          this.register([], t, !1);
        };
        function J(t, e, n) {
          if ((Y(t, n), e.update(n), n.modules))
            for (var r in n.modules) {
              if (!e.getChild(r))
                return void console.warn(
                  "[vuex] trying to add a new module '" +
                    r +
                    "' on hot reloading, manual reload is needed"
                );
              J(t.concat(r), e.getChild(r), n.modules[r]);
            }
        }
        (z.prototype.get = function (t) {
          return t.reduce(function (t, e) {
            return t.getChild(e);
          }, this.root);
        }),
          (z.prototype.getNamespace = function (t) {
            var e = this.root;
            return t.reduce(function (t, n) {
              return (e = e.getChild(n)), t + (e.namespaced ? n + "/" : "");
            }, "");
          }),
          (z.prototype.update = function (t) {
            J([], this.root, t);
          }),
          (z.prototype.register = function (t, e, n) {
            var r = this;
            void 0 === n && (n = !0), Y(t, e);
            var o = new W(e, n);
            if (0 === t.length) this.root = o;
            else {
              var i = this.get(t.slice(0, -1));
              i.addChild(t[t.length - 1], o);
            }
            e.modules &&
              f(e.modules, function (e, o) {
                r.register(t.concat(o), e, n);
              });
          }),
          (z.prototype.unregister = function (t) {
            var e = this.get(t.slice(0, -1)),
              n = t[t.length - 1],
              r = e.getChild(n);
            r
              ? r.runtime && e.removeChild(n)
              : console.warn(
                  "[vuex] trying to unregister module '" +
                    n +
                    "', which is not registered"
                );
          }),
          (z.prototype.isRegistered = function (t) {
            var e = this.get(t.slice(0, -1)),
              n = t[t.length - 1];
            return !!e && e.hasChild(n);
          });
        var K = {
            assert: function (t) {
              return "function" === typeof t;
            },
            expected: "function",
          },
          X = {
            assert: function (t) {
              return (
                "function" === typeof t ||
                ("object" === Object(a["a"])(t) &&
                  "function" === typeof t.handler)
              );
            },
            expected: 'function or object with "handler" function',
          },
          Q = { getters: K, mutations: K, actions: X };
        function Y(t, e) {
          Object.keys(Q).forEach(function (n) {
            if (e[n]) {
              var r = Q[n];
              f(e[n], function (e, o) {
                v(r.assert(e), Z(t, n, o, e, r.expected));
              });
            }
          });
        }
        function Z(t, e, n, r, o) {
          var i = e + " should be " + o + ' but "' + e + "." + n + '"';
          return (
            t.length > 0 && (i += ' in module "' + t.join(".") + '"'),
            (i += " is " + JSON.stringify(r) + "."),
            i
          );
        }
        function tt(t) {
          return new et(t);
        }
        var et = function t(e) {
            var n = this;
            void 0 === e && (e = {}),
              v(
                "undefined" !== typeof Promise,
                "vuex requires a Promise polyfill in this browser."
              ),
              v(
                this instanceof t,
                "store must be called with the new operator."
              );
            var r = e.plugins;
            void 0 === r && (r = []);
            var o = e.strict;
            void 0 === o && (o = !1);
            var i = e.devtools;
            (this._committing = !1),
              (this._actions = Object.create(null)),
              (this._actionSubscribers = []),
              (this._mutations = Object.create(null)),
              (this._wrappedGetters = Object.create(null)),
              (this._modules = new z(e)),
              (this._modulesNamespaceMap = Object.create(null)),
              (this._subscribers = []),
              (this._makeLocalGettersCache = Object.create(null)),
              (this._devtools = i);
            var a = this,
              c = this,
              u = c.dispatch,
              s = c.commit;
            (this.dispatch = function (t, e) {
              return u.call(a, t, e);
            }),
              (this.commit = function (t, e, n) {
                return s.call(a, t, e, n);
              }),
              (this.strict = o);
            var l = this._modules.root.state;
            y(this, l, [], this._modules.root),
              g(this, l),
              r.forEach(function (t) {
                return t(n);
              });
          },
          nt = { state: { configurable: !0 } };
        (et.prototype.install = function (t, e) {
          t.provide(e || l, this), (t.config.globalProperties.$store = this);
          var n = void 0 === this._devtools || this._devtools;
          n && N(t, this);
        }),
          (nt.state.get = function () {
            return this._state.data;
          }),
          (nt.state.set = function (t) {
            v(!1, "use store.replaceState() to explicit replace store state.");
          }),
          (et.prototype.commit = function (t, e, n) {
            var r = this,
              o = A(t, e, n),
              i = o.type,
              a = o.payload,
              c = o.options,
              u = { type: i, payload: a },
              s = this._mutations[i];
            s
              ? (this._withCommit(function () {
                  s.forEach(function (t) {
                    t(a);
                  });
                }),
                this._subscribers.slice().forEach(function (t) {
                  return t(u, r.state);
                }),
                c &&
                  c.silent &&
                  console.warn(
                    "[vuex] mutation type: " +
                      i +
                      ". Silent option has been removed. Use the filter functionality in the vue-devtools"
                  ))
              : console.error("[vuex] unknown mutation type: " + i);
          }),
          (et.prototype.dispatch = function (t, e) {
            var n = this,
              r = A(t, e),
              o = r.type,
              i = r.payload,
              a = { type: o, payload: i },
              c = this._actions[o];
            if (c) {
              try {
                this._actionSubscribers
                  .slice()
                  .filter(function (t) {
                    return t.before;
                  })
                  .forEach(function (t) {
                    return t.before(a, n.state);
                  });
              } catch (t) {
                console.warn("[vuex] error in before action subscribers: "),
                  console.error(t);
              }
              var u =
                c.length > 1
                  ? Promise.all(
                      c.map(function (t) {
                        return t(i);
                      })
                    )
                  : c[0](i);
              return new Promise(function (t, e) {
                u.then(
                  function (e) {
                    try {
                      n._actionSubscribers
                        .filter(function (t) {
                          return t.after;
                        })
                        .forEach(function (t) {
                          return t.after(a, n.state);
                        });
                    } catch (t) {
                      console.warn(
                        "[vuex] error in after action subscribers: "
                      ),
                        console.error(t);
                    }
                    t(e);
                  },
                  function (t) {
                    try {
                      n._actionSubscribers
                        .filter(function (t) {
                          return t.error;
                        })
                        .forEach(function (e) {
                          return e.error(a, n.state, t);
                        });
                    } catch (t) {
                      console.warn(
                        "[vuex] error in error action subscribers: "
                      ),
                        console.error(t);
                    }
                    e(t);
                  }
                );
              });
            }
            console.error("[vuex] unknown action type: " + o);
          }),
          (et.prototype.subscribe = function (t, e) {
            return m(t, this._subscribers, e);
          }),
          (et.prototype.subscribeAction = function (t, e) {
            var n = "function" === typeof t ? { before: t } : t;
            return m(n, this._actionSubscribers, e);
          }),
          (et.prototype.watch = function (t, e, n) {
            var r = this;
            return (
              v(
                "function" === typeof t,
                "store.watch only accepts a function."
              ),
              Object(c["y"])(
                function () {
                  return t(r.state, r.getters);
                },
                e,
                Object.assign({}, n)
              )
            );
          }),
          (et.prototype.replaceState = function (t) {
            var e = this;
            this._withCommit(function () {
              e._state.data = t;
            });
          }),
          (et.prototype.registerModule = function (t, e, n) {
            void 0 === n && (n = {}),
              "string" === typeof t && (t = [t]),
              v(Array.isArray(t), "module path must be a string or an Array."),
              v(
                t.length > 0,
                "cannot register the root module by using registerModule."
              ),
              this._modules.register(t, e),
              y(this, this.state, t, this._modules.get(t), n.preserveState),
              g(this, this.state);
          }),
          (et.prototype.unregisterModule = function (t) {
            var e = this;
            "string" === typeof t && (t = [t]),
              v(Array.isArray(t), "module path must be a string or an Array."),
              this._modules.unregister(t),
              this._withCommit(function () {
                var n = E(e.state, t.slice(0, -1));
                delete n[t[t.length - 1]];
              }),
              b(this);
          }),
          (et.prototype.hasModule = function (t) {
            return (
              "string" === typeof t && (t = [t]),
              v(Array.isArray(t), "module path must be a string or an Array."),
              this._modules.isRegistered(t)
            );
          }),
          (et.prototype.hotUpdate = function (t) {
            this._modules.update(t), b(this, !0);
          }),
          (et.prototype._withCommit = function (t) {
            var e = this._committing;
            (this._committing = !0), t(), (this._committing = e);
          }),
          Object.defineProperties(et.prototype, nt);
        it(function (t, e) {
          var n = {};
          return (
            ot(e) ||
              console.error(
                "[vuex] mapState: mapper parameter must be either an Array or an Object"
              ),
            rt(e).forEach(function (e) {
              var r = e.key,
                o = e.val;
              (n[r] = function () {
                var e = this.$store.state,
                  n = this.$store.getters;
                if (t) {
                  var r = at(this.$store, "mapState", t);
                  if (!r) return;
                  (e = r.context.state), (n = r.context.getters);
                }
                return "function" === typeof o ? o.call(this, e, n) : e[o];
              }),
                (n[r].vuex = !0);
            }),
            n
          );
        }),
          it(function (t, e) {
            var n = {};
            return (
              ot(e) ||
                console.error(
                  "[vuex] mapMutations: mapper parameter must be either an Array or an Object"
                ),
              rt(e).forEach(function (e) {
                var r = e.key,
                  o = e.val;
                n[r] = function () {
                  var e = [],
                    n = arguments.length;
                  while (n--) e[n] = arguments[n];
                  var r = this.$store.commit;
                  if (t) {
                    var i = at(this.$store, "mapMutations", t);
                    if (!i) return;
                    r = i.context.commit;
                  }
                  return "function" === typeof o
                    ? o.apply(this, [r].concat(e))
                    : r.apply(this.$store, [o].concat(e));
                };
              }),
              n
            );
          }),
          it(function (t, e) {
            var n = {};
            return (
              ot(e) ||
                console.error(
                  "[vuex] mapGetters: mapper parameter must be either an Array or an Object"
                ),
              rt(e).forEach(function (e) {
                var r = e.key,
                  o = e.val;
                (o = t + o),
                  (n[r] = function () {
                    if (!t || at(this.$store, "mapGetters", t)) {
                      if (o in this.$store.getters)
                        return this.$store.getters[o];
                      console.error("[vuex] unknown getter: " + o);
                    }
                  }),
                  (n[r].vuex = !0);
              }),
              n
            );
          }),
          it(function (t, e) {
            var n = {};
            return (
              ot(e) ||
                console.error(
                  "[vuex] mapActions: mapper parameter must be either an Array or an Object"
                ),
              rt(e).forEach(function (e) {
                var r = e.key,
                  o = e.val;
                n[r] = function () {
                  var e = [],
                    n = arguments.length;
                  while (n--) e[n] = arguments[n];
                  var r = this.$store.dispatch;
                  if (t) {
                    var i = at(this.$store, "mapActions", t);
                    if (!i) return;
                    r = i.context.dispatch;
                  }
                  return "function" === typeof o
                    ? o.apply(this, [r].concat(e))
                    : r.apply(this.$store, [o].concat(e));
                };
              }),
              n
            );
          });
        function rt(t) {
          return ot(t)
            ? Array.isArray(t)
              ? t.map(function (t) {
                  return { key: t, val: t };
                })
              : Object.keys(t).map(function (e) {
                  return { key: e, val: t[e] };
                })
            : [];
        }
        function ot(t) {
          return Array.isArray(t) || p(t);
        }
        function it(t) {
          return function (e, n) {
            return (
              "string" !== typeof e
                ? ((n = e), (e = ""))
                : "/" !== e.charAt(e.length - 1) && (e += "/"),
              t(e, n)
            );
          };
        }
        function at(t, e, n) {
          var r = t._modulesNamespaceMap[n];
          return (
            r ||
              console.error(
                "[vuex] module namespace not found in " + e + "(): " + n
              ),
            r
          );
        }
        var ct = { numbers: [1, 2, 3] },
          ut = {
            ADD_NUMBER: function (t, e) {
              t.numbers.push(e);
            },
          },
          st = {
            addNumber: function (t, e) {
              t.commit("ADD_NUMBER", e);
            },
          },
          lt = {
            getNumbers: function (t) {
              return t.numbers;
            },
          },
          ft = tt({ state: ct, mutations: ut, actions: st, getters: lt }),
          pt = ft,
          dt = (n(51), Object(i["a"])({ onShow: function (t) {} }));
        dt.use(pt);
        var vt = dt,
          ht = {
            pages: ["pages/index/index"],
            window: {
              backgroundTextStyle: "light",
              navigationBarBackgroundColor: "#fff",
              navigationBarTitleText: "WeChat",
              navigationBarTextStyle: "black",
            },
          };
        r["window"].__taroAppConfig = ht;
        App(Object(r["createVue3App"])(vt, c["m"], ht));
        Object(o["initPxTransform"])({
          designWidth: 750,
          deviceRatio: { 640: 1.17, 750: 1, 828: 0.905 },
        });
      },
    },
    [[53, 0, 1, 2]],
  ]);
