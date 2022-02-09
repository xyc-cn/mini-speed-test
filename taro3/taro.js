/*! For license information please see taro.js.LICENSE.txt */
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([
  [1],
  {
    1: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return ee;
      }),
        n.d(t, "b", function () {
          return X;
        }),
        n.d(t, "c", function () {
          return ne;
        }),
        n.d(t, "d", function () {
          return ae;
        }),
        n.d(t, "e", function () {
          return Z;
        }),
        n.d(t, "f", function () {
          return s;
        }),
        n.d(t, "g", function () {
          return c;
        }),
        n.d(t, "h", function () {
          return u;
        }),
        n.d(t, "i", function () {
          return a;
        }),
        n.d(t, "j", function () {
          return o;
        }),
        n.d(t, "k", function () {
          return le;
        }),
        n.d(t, "l", function () {
          return de;
        }),
        n.d(t, "m", function () {
          return te;
        }),
        n.d(t, "n", function () {
          return ge;
        }),
        n.d(t, "o", function () {
          return f;
        }),
        n.d(t, "p", function () {
          return ie;
        }),
        n.d(t, "q", function () {
          return re;
        });
      var r = n(5),
        i = n(7);
      function o(e) {
        return "undefined" === typeof e;
      }
      function a(e) {
        return null !== e && "object" === Object(i["a"])(e);
      }
      function c(e) {
        return !0 === e || !1 === e;
      }
      function u(e) {
        return "function" === typeof e;
      }
      var s = Array.isArray,
        l =
          ("i.".concat("st"),
          "i.".concat("cl"),
          {
            bindTouchStart: "",
            bindTouchMove: "",
            bindTouchEnd: "",
            bindTouchCancel: "",
            bindLongTap: "",
          }),
        d = {
          bindAnimationStart: "",
          bindAnimationIteration: "",
          bindAnimationEnd: "",
          bindTransitionEnd: "",
        };
      function f(e) {
        return "'".concat(e, "'");
      }
      var h = Object.assign(
          Object.assign(
            {
              "hover-class": f("none"),
              "hover-stop-propagation": "false",
              "hover-start-time": "50",
              "hover-stay-time": "400",
              animation: "",
            },
            l
          ),
          d
        ),
        p = { type: "", size: "23", color: "" },
        v = Object.assign(
          {
            longitude: "",
            latitude: "",
            scale: "16",
            markers: "[]",
            covers: "",
            polyline: "[]",
            circles: "[]",
            controls: "[]",
            "include-points": "[]",
            "show-location": "",
            "layer-style": "1",
            bindMarkerTap: "",
            bindControlTap: "",
            bindCalloutTap: "",
            bindUpdated: "",
          },
          l
        ),
        b = {
          percent: "",
          "stroke-width": "6",
          color: f("#09BB07"),
          activeColor: f("#09BB07"),
          backgroundColor: f("#EBEBEB"),
          active: "false",
          "active-mode": f("backwards"),
          "show-info": "false",
        },
        g = { nodes: "[]" },
        m = { selectable: "false", space: "", decode: "false" },
        y = Object.assign(
          {
            size: f("default"),
            type: "",
            plain: "false",
            disabled: "",
            loading: "false",
            "form-type": "",
            "open-type": "",
            "hover-class": f("button-hover"),
            "hover-stop-propagation": "false",
            "hover-start-time": "20",
            "hover-stay-time": "70",
            name: "",
          },
          l
        ),
        O = {
          value: "",
          disabled: "",
          checked: "false",
          color: f("#09BB07"),
          name: "",
        },
        j = { bindChange: "", name: "" },
        w = {
          "report-submit": "false",
          bindSubmit: "",
          bindReset: "",
          name: "",
        },
        k = {
          value: "",
          type: f(""),
          password: "false",
          placeholder: "",
          "placeholder-style": "",
          "placeholder-class": f("input-placeholder"),
          disabled: "",
          maxlength: "140",
          "cursor-spacing": "0",
          focus: "false",
          "confirm-type": f("done"),
          "confirm-hold": "false",
          cursor: "i.value.length",
          "selection-start": "-1",
          "selection-end": "-1",
          bindInput: "",
          bindFocus: "",
          bindBlur: "",
          bindConfirm: "",
          name: "",
        },
        E = { for: "", name: "" },
        _ = {
          mode: f("selector"),
          disabled: "",
          range: "",
          "range-key": "",
          value: "",
          start: "",
          end: "",
          fields: f("day"),
          "custom-item": "",
          name: "",
          bindCancel: "",
          bindChange: "",
          bindColumnChange: "",
        },
        S = {
          value: "",
          "indicator-style": "",
          "indicator-class": "",
          "mask-style": "",
          "mask-class": "",
          bindChange: "",
          name: "",
        },
        T = { name: "" },
        P = {
          value: "",
          checked: "false",
          disabled: "",
          color: f("#09BB07"),
          name: "",
        },
        x = { bindChange: "", name: "" },
        C = {
          min: "0",
          max: "100",
          step: "1",
          disabled: "",
          value: "0",
          activeColor: f("#1aad19"),
          backgroundColor: f("#e9e9e9"),
          "block-size": "28",
          "block-color": f("#ffffff"),
          "show-value": "false",
          bindChange: "",
          bindChanging: "",
          name: "",
        },
        A = {
          checked: "false",
          disabled: "",
          type: f("switch"),
          color: f("#04BE02"),
          bindChange: "",
          name: "",
        },
        I = {
          value: "",
          placeholder: "",
          "placeholder-style": "",
          "placeholder-class": f("textarea-placeholder"),
          disabled: "",
          maxlength: "140",
          "auto-focus": "false",
          focus: "false",
          "auto-height": "false",
          fixed: "false",
          "cursor-spacing": "0",
          cursor: "-1",
          "selection-start": "-1",
          "selection-end": "-1",
          bindFocus: "",
          bindBlur: "",
          bindLineChange: "",
          bindInput: "",
          bindConfirm: "",
          name: "",
        },
        N = { src: "", bindLoad: "eh", bindError: "eh" },
        L = Object.assign({ "scroll-top": "false" }, l),
        B = { "scale-area": "false" },
        F = Object.assign(
          Object.assign(
            {
              direction: "none",
              inertia: "false",
              "out-of-bounds": "false",
              x: "",
              y: "",
              damping: "20",
              friction: "2",
              disabled: "",
              scale: "false",
              "scale-min": "0.5",
              "scale-max": "10",
              "scale-value": "1",
              animation: "true",
              bindChange: "",
              bindScale: "",
              bindHTouchMove: "",
              bindVTouchMove: "",
              width: f("10px"),
              height: f("10px"),
            },
            l
          ),
          d
        ),
        R = Object.assign(
          Object.assign(
            {
              "scroll-x": "false",
              "scroll-y": "false",
              "upper-threshold": "50",
              "lower-threshold": "50",
              "scroll-top": "",
              "scroll-left": "",
              "scroll-into-view": "",
              "scroll-with-animation": "false",
              "enable-back-to-top": "false",
              bindScrollToUpper: "",
              bindScrollToLower: "",
              bindScroll: "",
            },
            l
          ),
          d
        ),
        D = Object.assign(
          {
            "indicator-dots": "false",
            "indicator-color": f("rgba(0, 0, 0, .3)"),
            "indicator-active-color": f("#000000"),
            autoplay: "false",
            current: "0",
            interval: "5000",
            duration: "500",
            circular: "false",
            vertical: "false",
            "previous-margin": "'0px'",
            "next-margin": "'0px'",
            "display-multiple-items": "1",
            bindChange: "",
            bindTransition: "",
            bindAnimationFinish: "",
          },
          l
        ),
        M = { "item-id": "" },
        U = {
          url: "",
          "open-type": f("navigate"),
          delta: "1",
          "hover-class": f("navigator-hover"),
          "hover-stop-propagation": "false",
          "hover-start-time": "50",
          "hover-stay-time": "600",
          bindSuccess: "",
          bindFail: "",
          bindComplete: "",
        },
        $ = {
          id: "",
          src: "",
          loop: "false",
          controls: "false",
          poster: "",
          name: "",
          author: "",
          bindError: "",
          bindPlay: "",
          bindPause: "",
          bindTimeUpdate: "",
          bindEnded: "",
        },
        z = {
          "device-position": f("back"),
          flash: f("auto"),
          bindStop: "",
          bindError: "",
        },
        q = Object.assign(
          {
            src: "",
            mode: f("scaleToFill"),
            "lazy-load": "false",
            bindError: "",
            bindLoad: "",
          },
          l
        ),
        H = {
          src: "",
          autoplay: "false",
          muted: "false",
          orientation: f("vertical"),
          "object-fit": f("contain"),
          "background-mute": "false",
          "min-cache": "1",
          "max-cache": "3",
          animation: "",
          bindStateChange: "",
          bindFullScreenChange: "",
          bindNetStatus: "",
        },
        V = {
          src: "",
          duration: "",
          controls: "true",
          "danmu-list": "",
          "danmu-btn": "",
          "enable-danmu": "",
          autoplay: "false",
          loop: "false",
          muted: "false",
          "initial-time": "0",
          "page-gesture": "false",
          direction: "",
          "show-progress": "true",
          "show-fullscreen-btn": "true",
          "show-play-btn": "true",
          "show-center-play-btn": "true",
          "enable-progress-gesture": "true",
          "object-fit": f("contain"),
          poster: "",
          "show-mute-btn": "false",
          animation: "",
          bindPlay: "",
          bindPause: "",
          bindEnded: "",
          bindTimeUpdate: "",
          bindFullScreenChange: "",
          bindWaiting: "",
          bindError: "",
        },
        W = Object.assign(
          { "canvas-id": "", "disable-scroll": "false", bindError: "" },
          l
        ),
        G = {
          "unit-id": "",
          "ad-intervals": "",
          bindLoad: "",
          bindError: "",
          bindClose: "",
        },
        K = { src: "", bindMessage: "", bindLoad: "", bindError: "" },
        J = {},
        Y = { name: "" },
        Q = { name: "" },
        Z = {
          View: h,
          Icon: p,
          Progress: b,
          RichText: g,
          Text: m,
          Button: y,
          Checkbox: O,
          CheckboxGroup: j,
          Form: w,
          Input: k,
          Label: E,
          Picker: _,
          PickerView: S,
          PickerViewColumn: T,
          Radio: P,
          RadioGroup: x,
          Slider: C,
          Switch: A,
          CoverImage: N,
          Textarea: I,
          CoverView: L,
          MovableArea: B,
          MovableView: F,
          ScrollView: R,
          Swiper: D,
          SwiperItem: M,
          Navigator: U,
          Audio: $,
          Camera: z,
          Image: q,
          LivePlayer: H,
          Video: V,
          Canvas: W,
          Ad: G,
          WebView: K,
          Block: J,
          Map: v,
          Slot: Q,
          SlotView: Y,
        },
        X = new Set([
          "input",
          "checkbox",
          "picker",
          "picker-view",
          "radio",
          "slider",
          "switch",
          "textarea",
        ]),
        ee =
          (new Set(["input", "textarea"]),
          new Set([
            "progress",
            "icon",
            "rich-text",
            "input",
            "textarea",
            "slider",
            "switch",
            "audio",
            "ad",
            "official-account",
            "open-data",
            "navigation-bar",
          ]),
          new Map([
            ["view", -1],
            ["catch-view", -1],
            ["cover-view", -1],
            ["static-view", -1],
            ["pure-view", -1],
            ["block", -1],
            ["text", -1],
            ["static-text", 6],
            ["slot", 8],
            ["slot-view", 8],
            ["label", 6],
            ["form", 4],
            ["scroll-view", 4],
            ["swiper", 4],
            ["swiper-item", 4],
          ]),
          {}),
        te = function () {},
        ne = Object.create(null);
      function re(e) {
        return e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
      }
      function ie(e) {
        for (var t = "", n = !1, r = 0; r < e.length; r++)
          "-" !== e[r]
            ? ((t += n ? e[r].toUpperCase() : e[r]), (n = !1))
            : (n = !0);
        return t;
      }
      Object.prototype.hasOwnProperty;
      var oe =
        "\u5982\u6709\u7591\u95ee\uff0c\u8bf7\u63d0\u4ea4 issue \u81f3\uff1ahttps://github.com/nervjs/taro/issues";
      function ae(e, t) {
        if (!e) throw new Error(t + "\n" + oe);
      }
      var ce = 1,
        ue = new Date().getTime().toString();
      function se() {
        return ue + ce++;
      }
      function le(e) {
        Object.keys(e).forEach(function (t) {
          t in Z ? Object.assign(Z[t], e[t]) : (Z[t] = e[t]);
        });
      }
      function de(e) {
        Object.keys(e).forEach(function (t) {
          var n = e[t],
            r = ne[t];
          r ? (s(r) ? (ne[t] = r.push(n)) : (ne[t] = [r, n])) : (ne[t] = n);
        });
      }
      function fe(e) {
        return function () {
          console.warn("\u5c0f\u7a0b\u5e8f\u6682\u4e0d\u652f\u6301 ".concat(e));
        };
      }
      function he(e, t) {
        var n = "__key_",
          r = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
        if (r.indexOf(e) > -1) {
          var i = (t.url = t.url || ""),
            o = i.indexOf("?") > -1,
            a = se();
          t.url += (o ? "&" : "?") + "".concat(n, "=").concat(a);
        }
      }
      var pe = new Set([
        "addPhoneContact",
        "authorize",
        "canvasGetImageData",
        "canvasPutImageData",
        "canvasToTempFilePath",
        "checkSession",
        "chooseAddress",
        "chooseImage",
        "chooseInvoiceTitle",
        "chooseLocation",
        "chooseVideo",
        "clearStorage",
        "closeBLEConnection",
        "closeBluetoothAdapter",
        "closeSocket",
        "compressImage",
        "connectSocket",
        "createBLEConnection",
        "downloadFile",
        "exitMiniProgram",
        "getAvailableAudioSources",
        "getBLEDeviceCharacteristics",
        "getBLEDeviceServices",
        "getBatteryInfo",
        "getBeacons",
        "getBluetoothAdapterState",
        "getBluetoothDevices",
        "getClipboardData",
        "getConnectedBluetoothDevices",
        "getConnectedWifi",
        "getExtConfig",
        "getFileInfo",
        "getImageInfo",
        "getLocation",
        "getNetworkType",
        "getSavedFileInfo",
        "getSavedFileList",
        "getScreenBrightness",
        "getSetting",
        "getStorage",
        "getStorageInfo",
        "getSystemInfo",
        "getUserInfo",
        "getWifiList",
        "hideHomeButton",
        "hideShareMenu",
        "hideTabBar",
        "hideTabBarRedDot",
        "loadFontFace",
        "login",
        "makePhoneCall",
        "navigateBack",
        "navigateBackMiniProgram",
        "navigateTo",
        "navigateToBookshelf",
        "navigateToMiniProgram",
        "notifyBLECharacteristicValueChange",
        "hideKeyboard",
        "hideLoading",
        "hideNavigationBarLoading",
        "hideToast",
        "openBluetoothAdapter",
        "openDocument",
        "openLocation",
        "openSetting",
        "pageScrollTo",
        "previewImage",
        "queryBookshelf",
        "reLaunch",
        "readBLECharacteristicValue",
        "redirectTo",
        "removeSavedFile",
        "removeStorage",
        "removeTabBarBadge",
        "requestSubscribeMessage",
        "saveFile",
        "saveImageToPhotosAlbum",
        "saveVideoToPhotosAlbum",
        "scanCode",
        "sendSocketMessage",
        "setBackgroundColor",
        "setBackgroundTextStyle",
        "setClipboardData",
        "setEnableDebug",
        "setInnerAudioOption",
        "setKeepScreenOn",
        "setNavigationBarColor",
        "setNavigationBarTitle",
        "setScreenBrightness",
        "setStorage",
        "setTabBarBadge",
        "setTabBarItem",
        "setTabBarStyle",
        "showActionSheet",
        "showFavoriteGuide",
        "showLoading",
        "showModal",
        "showShareMenu",
        "showTabBar",
        "showTabBarRedDot",
        "showToast",
        "startBeaconDiscovery",
        "startBluetoothDevicesDiscovery",
        "startDeviceMotionListening",
        "startPullDownRefresh",
        "stopBeaconDiscovery",
        "stopBluetoothDevicesDiscovery",
        "stopCompass",
        "startCompass",
        "startAccelerometer",
        "stopAccelerometer",
        "showNavigationBarLoading",
        "stopDeviceMotionListening",
        "stopPullDownRefresh",
        "switchTab",
        "uploadFile",
        "vibrateLong",
        "vibrateShort",
        "writeBLECharacteristicValue",
      ]);
      function ve(e) {
        return function () {
          if ("function" !== typeof e.getSystemInfoSync)
            return console.error("\u4e0d\u652f\u6301 API canIUseWebp"), !1;
          var t = e.getSystemInfoSync(),
            n = t.platform,
            r = n.toLowerCase();
          return "android" === r || "devtools" === r;
        };
      }
      function be(e) {
        return function (t) {
          (t = t || {}), "string" === typeof t && (t = { url: t });
          var n,
            r = t.success,
            i = t.fail,
            o = t.complete,
            a = new Promise(function (a, c) {
              (t.success = function (e) {
                r && r(e), a(e);
              }),
                (t.fail = function (e) {
                  i && i(e), c(e);
                }),
                (t.complete = function (e) {
                  o && o(e);
                }),
                (n = e.request(t));
            });
          return (
            (a.abort = function (e) {
              return e && e(), n && n.abort(), a;
            }),
            a
          );
        };
      }
      function ge(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          i = n.needPromiseApis || [],
          o = new Set([].concat(Object(r["a"])(i), Object(r["a"])(pe))),
          a = [
            "getEnv",
            "interceptors",
            "Current",
            "getCurrentInstance",
            "options",
            "nextTick",
            "eventCenter",
            "Events",
            "preload",
            "webpackJsonp",
          ],
          c = new Set(
            Object.keys(t).filter(function (e) {
              return -1 === a.indexOf(e);
            })
          );
        n.modifyApis && n.modifyApis(c),
          c.forEach(function (r) {
            if (o.has(r)) {
              var i = r;
              e[i] = function () {
                for (
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r = arguments.length,
                    o = new Array(r > 1 ? r - 1 : 0),
                    a = 1;
                  a < r;
                  a++
                )
                  o[a - 1] = arguments[a];
                var c = i;
                if ("string" === typeof e)
                  return o.length ? t[c].apply(t, [e].concat(o)) : t[c](e);
                if (n.transformMeta) {
                  var u = n.transformMeta(c, e);
                  if (((c = u.key), (e = u.options), !t.hasOwnProperty(c)))
                    return fe(c)();
                }
                var s = null,
                  l = Object.assign({}, e);
                he(c, e);
                var d = new Promise(function (r, i) {
                  (l.success = function (t) {
                    var i, o;
                    null === (i = n.modifyAsyncResult) ||
                      void 0 === i ||
                      i.call(n, c, t),
                      null === (o = e.success) || void 0 === o || o.call(e, t),
                      r(
                        "connectSocket" === c
                          ? Promise.resolve().then(function () {
                              return s ? Object.assign(s, t) : t;
                            })
                          : t
                      );
                  }),
                    (l.fail = function (t) {
                      var n;
                      null === (n = e.fail) || void 0 === n || n.call(e, t),
                        i(t);
                    }),
                    (l.complete = function (t) {
                      var n;
                      null === (n = e.complete) || void 0 === n || n.call(e, t);
                    }),
                    (s = o.length ? t[c].apply(t, [l].concat(o)) : t[c](l));
                });
                return (
                  ("uploadFile" !== c && "downloadFile" !== c) ||
                    ((d.progress = function (e) {
                      return (
                        null === s || void 0 === s || s.onProgressUpdate(e), d
                      );
                    }),
                    (d.abort = function (e) {
                      return (
                        null === e || void 0 === e || e(),
                        null === s || void 0 === s || s.abort(),
                        d
                      );
                    })),
                  d
                );
              };
            } else {
              var a = r;
              if (
                (n.transformMeta && (a = n.transformMeta(r, {}).key),
                !t.hasOwnProperty(a))
              )
                return void (e[r] = fe(r));
              "function" === typeof t[r]
                ? (e[r] = function () {
                    for (
                      var e = arguments.length, i = new Array(e), o = 0;
                      o < e;
                      o++
                    )
                      i[o] = arguments[o];
                    return n.handleSyncApis
                      ? n.handleSyncApis(r, t, i)
                      : t[a].apply(t, i);
                  })
                : (e[r] = t[a]);
            }
          }),
          !n.isOnlyPromisify && me(e, t, n);
      }
      function me(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        (e.canIUseWebp = ve(e)),
          (e.getCurrentPages = getCurrentPages || fe("getCurrentPages")),
          (e.getApp = getApp || fe("getApp")),
          (e.env = t.env || {});
        try {
          e.requirePlugin = requirePlugin || fe("requirePlugin");
        } catch (t) {
          e.requirePlugin = fe("requirePlugin");
        }
        var r = n.request ? n.request : be(t);
        function i(e) {
          return r(e.requestParams);
        }
        var o = new e.Link(i);
        (e.request = o.request.bind(o)),
          (e.addInterceptor = o.addInterceptor.bind(o)),
          (e.cleanInterceptors = o.cleanInterceptors.bind(o)),
          (e.miniGlobal = e.options.miniGlobal = t);
      }
    },
    35: function (e, t, n) {
      var r = n(6),
        i = r.container,
        o = r.SERVICE_IDENTIFIER,
        a = n(50).default,
        c = i.get(o.Hooks);
      "function" === typeof c.initNativeApi && c.initNativeApi(a),
        (e.exports = a),
        (e.exports.default = e.exports);
    },
    43: function (e, t, n) {
      "use strict";
      var r = n(1),
        i = new Set([
          "authPrivateMessage",
          "disableAlertBeforeUnload",
          "enableAlertBeforeUnload",
          "getBackgroundFetchData",
          "getGroupEnterInfo",
          "getShareInfo",
          "getWeRunData",
          "join1v1Chat",
          "openVideoEditor",
          "saveFileToDisk",
          "scanItem",
          "setEnable1v1Chat",
          "setWindowSize",
          "sendBizRedPacket",
          "startFacialRecognitionVerify",
          "openCustomerServiceChat",
        ]);
      function o(e) {
        Object(r["n"])(e, wx, {
          needPromiseApis: i,
          modifyApis: function (e) {
            e.delete("lanDebug");
          },
        }),
          (e.cloud = wx.cloud);
      }
      var a = {
          Progress: {
            "border-radius": "0",
            "font-size": "16",
            duration: "30",
            bindActiveEnd: "",
          },
          RichText: { space: "" },
          Text: { "user-select": "false" },
          Map: {
            polygons: "[]",
            subkey: "",
            rotate: "0",
            skew: "0",
            "enable-3D": "false",
            "show-compass": "false",
            "show-scale": "false",
            "enable-overlooking": "false",
            "enable-zoom": "true",
            "enable-scroll": "true",
            "enable-rotate": "false",
            "enable-satellite": "false",
            "enable-traffic": "false",
            setting: "[]",
            bindLabelTap: "",
            bindRegionChange: "",
            bindPoiTap: "",
          },
          Button: {
            lang: "en",
            "session-from": "",
            "send-message-title": "",
            "send-message-path": "",
            "send-message-img": "",
            "app-parameter": "",
            "show-message-card": "false",
            "business-id": "",
            bindGetUserInfo: "",
            bindContact: "",
            bindGetPhoneNumber: "",
            bindError: "",
            bindOpenSetting: "",
            bindLaunchApp: "",
          },
          Form: { "report-submit-timeout": "0" },
          Input: {
            "always-embed": "false",
            "adjust-position": "true",
            "hold-keyboard": "false",
            bindKeyboardHeightChange: "",
          },
          Picker: { "header-text": "" },
          PickerView: { bindPickStart: "", bindPickEnd: "" },
          Slider: {
            color: Object(r["o"])("#e9e9e9"),
            "selected-color": Object(r["o"])("#1aad19"),
          },
          Textarea: {
            "show-confirm-bar": "true",
            "adjust-position": "true",
            "hold-keyboard": "false",
            "disable-default-padding": "false",
            "confirm-type": Object(r["o"])("return"),
            "confirm-hold": "false",
            bindKeyboardHeightChange: "",
          },
          ScrollView: {
            "enable-flex": "false",
            "scroll-anchoring": "false",
            "refresher-enabled": "false",
            "refresher-threshold": "45",
            "refresher-default-style": Object(r["o"])("black"),
            "refresher-background": Object(r["o"])("#FFF"),
            "refresher-triggered": "false",
            enhanced: "false",
            bounces: "true",
            "show-scrollbar": "true",
            "paging-enabled": "false",
            "fast-deceleration": "false",
            bindDragStart: "",
            bindDragging: "",
            bindDragEnd: "",
            bindRefresherPulling: "",
            bindRefresherRefresh: "",
            bindRefresherRestore: "",
            bindRefresherAbort: "",
          },
          Swiper: {
            "snap-to-edge": "false",
            "easing-function": Object(r["o"])("default"),
          },
          SwiperItem: { "skip-hidden-item-layout": "false" },
          Navigator: {
            target: Object(r["o"])("self"),
            "app-id": "",
            path: "",
            "extra-data": "",
            version: Object(r["o"])("version"),
          },
          Camera: {
            mode: Object(r["o"])("normal"),
            resolution: Object(r["o"])("medium"),
            "frame-size": Object(r["o"])("medium"),
            bindInitDone: "",
            bindScanCode: "",
          },
          Image: { webp: "false", "show-menu-by-longpress": "false" },
          LivePlayer: {
            mode: Object(r["o"])("live"),
            "sound-mode": Object(r["o"])("speaker"),
            "auto-pause-if-navigate": "true",
            "auto-pause-if-open-native": "true",
            "picture-in-picture-mode": "[]",
            bindstatechange: "",
            bindfullscreenchange: "",
            bindnetstatus: "",
            bindAudioVolumeNotify: "",
            bindEnterPictureInPicture: "",
            bindLeavePictureInPicture: "",
          },
          Video: {
            title: "",
            "play-btn-position": Object(r["o"])("bottom"),
            "enable-play-gesture": "false",
            "auto-pause-if-navigate": "true",
            "auto-pause-if-open-native": "true",
            "vslide-gesture": "false",
            "vslide-gesture-in-fullscreen": "true",
            "ad-unit-id": "",
            "poster-for-crawler": "",
            "show-casting-button": "false",
            "picture-in-picture-mode": "[]",
            "enable-auto-rotation": "false",
            "show-screen-lock-button": "false",
            "show-snapshot-button": "false",
            "show-background-playback-button": "false",
            "background-poster": "",
            bindProgress: "",
            bindLoadedMetadata: "",
            bindControlsToggle: "",
            bindEnterPictureInPicture: "",
            bindLeavePictureInPicture: "",
            bindSeekComplete: "",
            bindAdLoad: "",
            bindAdError: "",
            bindAdClose: "",
            bindAdPlay: "",
          },
          Canvas: { type: "" },
          Ad: {
            "ad-type": Object(r["o"])("banner"),
            "ad-theme": Object(r["o"])("white"),
          },
          CoverView: { "marker-id": "", slot: "" },
          Editor: {
            "read-only": "false",
            placeholder: "",
            "show-img-size": "false",
            "show-img-toolbar": "false",
            "show-img-resize": "false",
            focus: "false",
            bindReady: "",
            bindFocus: "",
            bindBlur: "",
            bindInput: "",
            bindStatusChange: "",
            name: "",
          },
          MatchMedia: {
            "min-width": "",
            "max-width": "",
            width: "",
            "min-height": "",
            "max-height": "",
            height: "",
            orientation: "",
          },
          FunctionalPageNavigator: {
            version: Object(r["o"])("release"),
            name: "",
            args: "",
            bindSuccess: "",
            bindFail: "",
            bindCancel: "",
          },
          LivePusher: {
            url: "",
            mode: Object(r["o"])("RTC"),
            autopush: "false",
            muted: "false",
            "enable-camera": "true",
            "auto-focus": "true",
            orientation: Object(r["o"])("vertical"),
            beauty: "0",
            whiteness: "0",
            aspect: Object(r["o"])("9:16"),
            "min-bitrate": "200",
            "max-bitrate": "1000",
            "audio-quality": Object(r["o"])("high"),
            "waiting-image": "",
            "waiting-image-hash": "",
            zoom: "false",
            "device-position": Object(r["o"])("front"),
            "background-mute": "false",
            mirror: "false",
            "remote-mirror": "false",
            "local-mirror": "false",
            "audio-reverb-type": "0",
            "enable-mic": "true",
            "enable-agc": "false",
            "enable-ans": "false",
            "audio-volume-type": Object(r["o"])("voicecall"),
            "video-width": "360",
            "video-height": "640",
            "beauty-style": Object(r["o"])("smooth"),
            filter: Object(r["o"])("standard"),
            animation: "",
            bindStateChange: "",
            bindNetStatus: "",
            bindBgmStart: "",
            bindBgmProgress: "",
            bindBgmComplete: "",
            bindAudioVolumeNotify: "",
          },
          OfficialAccount: { bindLoad: "", bindError: "" },
          OpenData: {
            type: "",
            "open-gid": "",
            lang: Object(r["o"])("en"),
            "default-text": "",
            "default-avatar": "",
            bindError: "",
          },
          NavigationBar: {
            title: "",
            loading: "false",
            "front-color": "",
            "background-color": "",
            "color-animation-duration": "0",
            "color-animation-timing-func": Object(r["o"])("linear"),
          },
          PageMeta: {
            "background-text-style": "",
            "background-color": "",
            "background-color-top": "",
            "background-color-bottom": "",
            "scroll-top": Object(r["o"])(""),
            "scroll-duration": "300",
            "page-style": Object(r["o"])(""),
            "root-font-size": Object(r["o"])(""),
            bindResize: "",
            bindScroll: "",
            bindScrollDone: "",
          },
          VoipRoom: {
            openid: "",
            mode: Object(r["o"])("camera"),
            "device-position": Object(r["o"])("front"),
            bindError: "",
          },
          AdCustom: {
            "unit-id": "",
            "ad-intervals": "",
            bindLoad: "",
            bindError: "",
          },
          PageContainer: {
            show: "false",
            duration: "300",
            "z-index": "100",
            overlay: "true",
            position: Object(r["o"])("bottom"),
            round: "false",
            "close-on-slideDown": "false",
            "overlay-style": "",
            "custom-style": "",
            bindBeforeEnter: "",
            bindEnter: "",
            bindAfterEnter: "",
            bindBeforeLeave: "",
            bindLeave: "",
            bindAfterLeave: "",
            bindClickOverlay: "",
          },
          KeyboardAccessory: {},
        },
        c = { initNativeApi: o };
      Object(r["l"])(c), Object(r["k"])(a);
    },
    46: function (e, t, n) {
      var r =
          (function () {
            return this;
          })() || Function("return this")(),
        i =
          r.regeneratorRuntime &&
          Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime") >= 0,
        o = i && r.regeneratorRuntime;
      if (((r.regeneratorRuntime = void 0), (e.exports = n(47)), i))
        r.regeneratorRuntime = o;
      else
        try {
          delete r.regeneratorRuntime;
        } catch (e) {
          r.regeneratorRuntime = void 0;
        }
    },
    47: function (e, t, n) {
      (function (e) {
        var t = n(19);
        !(function (n) {
          "use strict";
          var r,
            i = Object.prototype,
            o = i.hasOwnProperty,
            a = "function" === typeof Symbol ? Symbol : {},
            c = a.iterator || "@@iterator",
            u = a.asyncIterator || "@@asyncIterator",
            s = a.toStringTag || "@@toStringTag",
            l = "object" === t(e),
            d = n.regeneratorRuntime;
          if (d) l && (e.exports = d);
          else {
            (d = n.regeneratorRuntime = l ? e.exports : {}), (d.wrap = j);
            var f = "suspendedStart",
              h = "suspendedYield",
              p = "executing",
              v = "completed",
              b = {},
              g = {};
            g[c] = function () {
              return this;
            };
            var m = Object.getPrototypeOf,
              y = m && m(m(N([])));
            y && y !== i && o.call(y, c) && (g = y);
            var O = (_.prototype = k.prototype = Object.create(g));
            (E.prototype = O.constructor = _),
              (_.constructor = E),
              (_[s] = E.displayName = "GeneratorFunction"),
              (d.isGeneratorFunction = function (e) {
                var t = "function" === typeof e && e.constructor;
                return (
                  !!t &&
                  (t === E || "GeneratorFunction" === (t.displayName || t.name))
                );
              }),
              (d.mark = function (e) {
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, _)
                    : ((e.__proto__ = _),
                      s in e || (e[s] = "GeneratorFunction")),
                  (e.prototype = Object.create(O)),
                  e
                );
              }),
              (d.awrap = function (e) {
                return { __await: e };
              }),
              S(T.prototype),
              (T.prototype[u] = function () {
                return this;
              }),
              (d.AsyncIterator = T),
              (d.async = function (e, t, n, r) {
                var i = new T(j(e, t, n, r));
                return d.isGeneratorFunction(t)
                  ? i
                  : i.next().then(function (e) {
                      return e.done ? e.value : i.next();
                    });
              }),
              S(O),
              (O[s] = "Generator"),
              (O[c] = function () {
                return this;
              }),
              (O.toString = function () {
                return "[object Generator]";
              }),
              (d.keys = function (e) {
                var t = [];
                for (var n in e) t.push(n);
                return (
                  t.reverse(),
                  function n() {
                    while (t.length) {
                      var r = t.pop();
                      if (r in e) return (n.value = r), (n.done = !1), n;
                    }
                    return (n.done = !0), n;
                  }
                );
              }),
              (d.values = N),
              (I.prototype = {
                constructor: I,
                reset: function (e) {
                  if (
                    ((this.prev = 0),
                    (this.next = 0),
                    (this.sent = this._sent = r),
                    (this.done = !1),
                    (this.delegate = null),
                    (this.method = "next"),
                    (this.arg = r),
                    this.tryEntries.forEach(A),
                    !e)
                  )
                    for (var t in this)
                      "t" === t.charAt(0) &&
                        o.call(this, t) &&
                        !isNaN(+t.slice(1)) &&
                        (this[t] = r);
                },
                stop: function () {
                  this.done = !0;
                  var e = this.tryEntries[0],
                    t = e.completion;
                  if ("throw" === t.type) throw t.arg;
                  return this.rval;
                },
                dispatchException: function (e) {
                  if (this.done) throw e;
                  var t = this;
                  function n(n, i) {
                    return (
                      (c.type = "throw"),
                      (c.arg = e),
                      (t.next = n),
                      i && ((t.method = "next"), (t.arg = r)),
                      !!i
                    );
                  }
                  for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var a = this.tryEntries[i],
                      c = a.completion;
                    if ("root" === a.tryLoc) return n("end");
                    if (a.tryLoc <= this.prev) {
                      var u = o.call(a, "catchLoc"),
                        s = o.call(a, "finallyLoc");
                      if (u && s) {
                        if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                        if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                      } else if (u) {
                        if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                      } else {
                        if (!s)
                          throw new Error(
                            "try statement without catch or finally"
                          );
                        if (this.prev < a.finallyLoc) return n(a.finallyLoc);
                      }
                    }
                  }
                },
                abrupt: function (e, t) {
                  for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (
                      r.tryLoc <= this.prev &&
                      o.call(r, "finallyLoc") &&
                      this.prev < r.finallyLoc
                    ) {
                      var i = r;
                      break;
                    }
                  }
                  i &&
                    ("break" === e || "continue" === e) &&
                    i.tryLoc <= t &&
                    t <= i.finallyLoc &&
                    (i = null);
                  var a = i ? i.completion : {};
                  return (
                    (a.type = e),
                    (a.arg = t),
                    i
                      ? ((this.method = "next"), (this.next = i.finallyLoc), b)
                      : this.complete(a)
                  );
                },
                complete: function (e, t) {
                  if ("throw" === e.type) throw e.arg;
                  return (
                    "break" === e.type || "continue" === e.type
                      ? (this.next = e.arg)
                      : "return" === e.type
                      ? ((this.rval = this.arg = e.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === e.type && t && (this.next = t),
                    b
                  );
                },
                finish: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e)
                      return this.complete(n.completion, n.afterLoc), A(n), b;
                  }
                },
                catch: function (e) {
                  for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                      var r = n.completion;
                      if ("throw" === r.type) {
                        var i = r.arg;
                        A(n);
                      }
                      return i;
                    }
                  }
                  throw new Error("illegal catch attempt");
                },
                delegateYield: function (e, t, n) {
                  return (
                    (this.delegate = {
                      iterator: N(e),
                      resultName: t,
                      nextLoc: n,
                    }),
                    "next" === this.method && (this.arg = r),
                    b
                  );
                },
              });
          }
          function j(e, t, n, r) {
            var i = t && t.prototype instanceof k ? t : k,
              o = Object.create(i.prototype),
              a = new I(r || []);
            return (o._invoke = P(e, n, a)), o;
          }
          function w(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          function k() {}
          function E() {}
          function _() {}
          function S(e) {
            ["next", "throw", "return"].forEach(function (t) {
              e[t] = function (e) {
                return this._invoke(t, e);
              };
            });
          }
          function T(e) {
            function n(r, i, a, c) {
              var u = w(e[r], e, i);
              if ("throw" !== u.type) {
                var s = u.arg,
                  l = s.value;
                return l && "object" === t(l) && o.call(l, "__await")
                  ? Promise.resolve(l.__await).then(
                      function (e) {
                        n("next", e, a, c);
                      },
                      function (e) {
                        n("throw", e, a, c);
                      }
                    )
                  : Promise.resolve(l).then(function (e) {
                      (s.value = e), a(s);
                    }, c);
              }
              c(u.arg);
            }
            var r;
            function i(e, t) {
              function i() {
                return new Promise(function (r, i) {
                  n(e, t, r, i);
                });
              }
              return (r = r ? r.then(i, i) : i());
            }
            this._invoke = i;
          }
          function P(e, t, n) {
            var r = f;
            return function (i, o) {
              if (r === p) throw new Error("Generator is already running");
              if (r === v) {
                if ("throw" === i) throw o;
                return L();
              }
              (n.method = i), (n.arg = o);
              while (1) {
                var a = n.delegate;
                if (a) {
                  var c = x(a, n);
                  if (c) {
                    if (c === b) continue;
                    return c;
                  }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                  if (r === f) throw ((r = v), n.arg);
                  n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                r = p;
                var u = w(e, t, n);
                if ("normal" === u.type) {
                  if (((r = n.done ? v : h), u.arg === b)) continue;
                  return { value: u.arg, done: n.done };
                }
                "throw" === u.type &&
                  ((r = v), (n.method = "throw"), (n.arg = u.arg));
              }
            };
          }
          function x(e, t) {
            var n = e.iterator[t.method];
            if (n === r) {
              if (((t.delegate = null), "throw" === t.method)) {
                if (
                  e.iterator.return &&
                  ((t.method = "return"),
                  (t.arg = r),
                  x(e, t),
                  "throw" === t.method)
                )
                  return b;
                (t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return b;
            }
            var i = w(n, e.iterator, t.arg);
            if ("throw" === i.type)
              return (
                (t.method = "throw"), (t.arg = i.arg), (t.delegate = null), b
              );
            var o = i.arg;
            return o
              ? o.done
                ? ((t[e.resultName] = o.value),
                  (t.next = e.nextLoc),
                  "return" !== t.method && ((t.method = "next"), (t.arg = r)),
                  (t.delegate = null),
                  b)
                : o
              : ((t.method = "throw"),
                (t.arg = new TypeError("iterator result is not an object")),
                (t.delegate = null),
                b);
          }
          function C(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function A(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function I(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(C, this),
              this.reset(!0);
          }
          function N(e) {
            if (e) {
              var t = e[c];
              if (t) return t.call(e);
              if ("function" === typeof e.next) return e;
              if (!isNaN(e.length)) {
                var n = -1,
                  i = function t() {
                    while (++n < e.length)
                      if (o.call(e, n))
                        return (t.value = e[n]), (t.done = !1), t;
                    return (t.value = r), (t.done = !0), t;
                  };
                return (i.next = i);
              }
            }
            return { next: L };
          }
          function L() {
            return { value: r, done: !0 };
          }
        })(
          (function () {
            return this;
          })() || Function("return this")()
        );
      }.call(this, n(48)(e)));
    },
    50: function (e, t, n) {
      "use strict";
      n.r(t),
        function (e, r) {
          var i = n(19),
            o = n.n(i),
            a = n(36),
            c = n.n(a),
            u = n(30),
            s = n.n(u),
            l = n(31),
            d = n.n(l),
            f = n(29),
            h = n.n(f),
            p = n(6);
          "function" !== typeof Object.assign &&
            (Object.assign = function (e) {
              if (null == e)
                throw new TypeError(
                  "Cannot convert undefined or null to object"
                );
              for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                if (null != r)
                  for (var i in r)
                    Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
              }
              return t;
            }),
            "function" !== typeof Object.defineProperties &&
              (Object.defineProperties = function (e, t) {
                function n(e) {
                  function t(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                  }
                  function n(e) {
                    return "function" === typeof e;
                  }
                  if ("object" !== o()(e) || null === e)
                    throw new TypeError("bad desc");
                  var r = {};
                  if (
                    (t(e, "enumerable") && (r.enumerable = !!e.enumerable),
                    t(e, "configurable") && (r.configurable = !!e.configurable),
                    t(e, "value") && (r.value = e.value),
                    t(e, "writable") && (r.writable = !!e.writable),
                    t(e, "get"))
                  ) {
                    var i = e.get;
                    if (!n(i) && "undefined" !== typeof i)
                      throw new TypeError("bad get");
                    r.get = i;
                  }
                  if (t(e, "set")) {
                    var a = e.set;
                    if (!n(a) && "undefined" !== typeof a)
                      throw new TypeError("bad set");
                    r.set = a;
                  }
                  if (
                    ("get" in r || "set" in r) &&
                    ("value" in r || "writable" in r)
                  )
                    throw new TypeError("identity-confused descriptor");
                  return r;
                }
                if ("object" !== o()(e) || null === e)
                  throw new TypeError("bad obj");
                t = Object(t);
                for (var r = Object.keys(t), i = [], a = 0; a < r.length; a++)
                  i.push([r[a], n(t[r[a]])]);
                for (var c = 0; c < i.length; c++)
                  Object.defineProperty(e, i[c][0], i[c][1]);
                return e;
              });
          var v = {
              WEAPP: "WEAPP",
              WEB: "WEB",
              RN: "RN",
              SWAN: "SWAN",
              ALIPAY: "ALIPAY",
              TT: "TT",
              QQ: "QQ",
              JD: "JD",
            },
            b = null;
          function g() {
            return (
              b ||
              ("undefined" !== typeof jd && jd.getSystemInfo
                ? ((b = v.JD), v.JD)
                : "undefined" !== typeof qq && qq.getSystemInfo
                ? ((b = v.QQ), v.QQ)
                : "undefined" !== typeof tt && tt.getSystemInfo
                ? ((b = v.TT), v.TT)
                : "undefined" !== typeof wx && wx.getSystemInfo
                ? ((b = v.WEAPP), v.WEAPP)
                : "undefined" !== typeof swan && swan.getSystemInfo
                ? ((b = v.SWAN), v.SWAN)
                : "undefined" !== typeof my && my.getSystemInfo
                ? ((b = v.ALIPAY), v.ALIPAY)
                : "undefined" !== typeof e && e.__fbGenNativeModule
                ? ((b = v.RN), v.RN)
                : "undefined" !== typeof r
                ? ((b = v.WEB), v.WEB)
                : "Unknown environment")
            );
          }
          var m = (function () {
              function e(t) {
                var n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : [],
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0;
                s()(this, e),
                  (this.index = r),
                  (this.requestParams = t),
                  (this.interceptors = n);
              }
              return (
                d()(e, [
                  {
                    key: "proceed",
                    value: function (e) {
                      if (
                        ((this.requestParams = e),
                        this.index >= this.interceptors.length)
                      )
                        throw new Error(
                          "chain \u53c2\u6570\u9519\u8bef, \u8bf7\u52ff\u76f4\u63a5\u4fee\u6539 request.chain"
                        );
                      var t = this._getNextInterceptor(),
                        n = this._getNextChain(),
                        r = t(n),
                        i = r.catch(function (e) {
                          return Promise.reject(e);
                        });
                      return (
                        "function" === typeof r.abort && (i.abort = r.abort), i
                      );
                    },
                  },
                  {
                    key: "_getNextInterceptor",
                    value: function () {
                      return this.interceptors[this.index];
                    },
                  },
                  {
                    key: "_getNextChain",
                    value: function () {
                      return new e(
                        this.requestParams,
                        this.interceptors,
                        this.index + 1
                      );
                    },
                  },
                ]),
                e
              );
            })(),
            y = (function () {
              function e(t) {
                s()(this, e),
                  (this.taroInterceptor = t),
                  (this.chain = new m());
              }
              return (
                d()(e, [
                  {
                    key: "request",
                    value: function (e) {
                      var t = this;
                      return (
                        (this.chain.interceptors =
                          this.chain.interceptors.filter(function (e) {
                            return e !== t.taroInterceptor;
                          })),
                        this.chain.interceptors.push(this.taroInterceptor),
                        this.chain.proceed(c()({}, e))
                      );
                    },
                  },
                  {
                    key: "addInterceptor",
                    value: function (e) {
                      this.chain.interceptors.push(e);
                    },
                  },
                  {
                    key: "cleanInterceptors",
                    value: function () {
                      this.chain = new m();
                    },
                  },
                ]),
                e
              );
            })();
          function O(e) {
            var t,
              n = e.requestParams,
              r = new Promise(function (r, i) {
                var o = setTimeout(function () {
                  (o = null),
                    i(
                      new Error(
                        "\u7f51\u7edc\u94fe\u63a5\u8d85\u65f6,\u8bf7\u7a0d\u540e\u518d\u8bd5\uff01"
                      )
                    );
                }, (n && n.timeout) || 6e4);
                (t = e.proceed(n)),
                  t
                    .then(function (e) {
                      o && (clearTimeout(o), r(e));
                    })
                    .catch(function (e) {
                      o && clearTimeout(o), i(e);
                    });
              });
            return (
              void 0 !== t &&
                "function" === typeof t.abort &&
                (r.abort = t.abort),
              r
            );
          }
          function j(e) {
            var t = e.requestParams,
              n = t.method,
              r = t.data,
              i = t.url;
            console.log(
              "http ".concat(n || "GET", " --\x3e ").concat(i, " data: "),
              r
            );
            var o = e.proceed(t),
              a = o.then(function (e) {
                return console.log("http <-- ".concat(i, " result:"), e), e;
              });
            return "function" === typeof o.abort && (a.abort = o.abort), a;
          }
          var w = Object.freeze({
            __proto__: null,
            timeoutInterceptor: O,
            logInterceptor: j,
          });
          function k(e) {
            return e;
          }
          function E(e) {
            return function (t, n) {
              "object" === o()(t)
                ? (e.preloadData = t)
                : void 0 !== t &&
                  void 0 !== n &&
                  (e.preloadData = h()({}, t, n));
            };
          }
          function _(e) {
            return function (t) {
              var n = t.designWidth,
                r = void 0 === n ? 750 : n,
                i = t.deviceRatio,
                o = void 0 === i ? { 640: 1.17, 750: 1, 828: 0.905 } : i;
              (e.config = e.config || {}),
                (e.config.designWidth = r),
                (e.config.deviceRatio = o);
            };
          }
          function S(e) {
            return function (t) {
              var n = e.config || {},
                r = n.designWidth,
                i = void 0 === r ? 750 : r,
                o = n.deviceRatio,
                a = void 0 === o ? { 640: 1.17, 750: 1, 828: 0.905 } : o;
              if (!(i in a))
                throw new Error(
                  "deviceRatio \u914d\u7f6e\u4e2d\u4e0d\u5b58\u5728 ".concat(
                    i,
                    " \u7684\u8bbe\u7f6e\uff01"
                  )
                );
              return parseInt(t, 10) * a[i] + "rpx";
            };
          }
          var T = {
            Behavior: k,
            getEnv: g,
            ENV_TYPE: v,
            Link: y,
            interceptors: w,
            Current: p["Current"],
            getCurrentInstance: p["getCurrentInstance"],
            options: p["options"],
            nextTick: p["nextTick"],
            eventCenter: p["eventCenter"],
            Events: p["Events"],
            useDidShow: p["useDidShow"],
            useDidHide: p["useDidHide"],
            usePullDownRefresh: p["usePullDownRefresh"],
            useReachBottom: p["useReachBottom"],
            usePageScroll: p["usePageScroll"],
            useResize: p["useResize"],
            useShareAppMessage: p["useShareAppMessage"],
            useTabItemTap: p["useTabItemTap"],
            useTitleClick: p["useTitleClick"],
            useOptionMenuClick: p["useOptionMenuClick"],
            usePullIntercept: p["usePullIntercept"],
            useShareTimeline: p["useShareTimeline"],
            useAddToFavorites: p["useAddToFavorites"],
            useReady: p["useReady"],
            useRouter: p["useRouter"],
            getInitPxTransform: _,
          };
          (T.initPxTransform = _(T)),
            (T.preload = E(p["Current"])),
            (T.pxTransform = S(T)),
            (t["default"] = T);
        }.call(this, n(23), n(6)["window"]);
    },
    54: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(6);
      Component(Object(r["createRecursiveComponentConfig"])());
    },
    55: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(6);
      Component(r.createRecursiveComponentConfig("custom-wrapper"));
    },
    6: function (e, t, n) {
      "use strict";
      n.r(t),
        function (e, r, i, o, a, c) {
          n.d(t, "Current", function () {
            return wi;
          }),
            n.d(t, "ElementNames", function () {
              return je;
            }),
            n.d(t, "Events", function () {
              return Ei;
            }),
            n.d(t, "FormElement", function () {
              return Vn;
            }),
            n.d(t, "SERVICE_IDENTIFIER", function () {
              return T;
            }),
            n.d(t, "SVGElement", function () {
              return Wn;
            }),
            n.d(t, "Style", function () {
              return We;
            }),
            n.d(t, "TaroElement", function () {
              return Qe;
            }),
            n.d(t, "TaroEvent", function () {
              return ni;
            }),
            n.d(t, "TaroNode", function () {
              return Ee;
            }),
            n.d(t, "TaroRootElement", function () {
              return Hn;
            }),
            n.d(t, "TaroText", function () {
              return _e;
            }),
            n.d(t, "cancelAnimationFrame", function () {
              return mi;
            }),
            n.d(t, "connectReactPage", function () {
              return Gi;
            }),
            n.d(t, "connectVuePage", function () {
              return to;
            }),
            n.d(t, "container", function () {
              return ti;
            }),
            n.d(t, "createComponentConfig", function () {
              return Ui;
            }),
            n.d(t, "createDocument", function () {
              return si;
            }),
            n.d(t, "createEvent", function () {
              return ri;
            }),
            n.d(t, "createNativeComponentConfig", function () {
              return eo;
            }),
            n.d(t, "createPageConfig", function () {
              return Mi;
            }),
            n.d(t, "createReactApp", function () {
              return Yi;
            }),
            n.d(t, "createRecursiveComponentConfig", function () {
              return $i;
            }),
            n.d(t, "createVue3App", function () {
              return ao;
            }),
            n.d(t, "createVueApp", function () {
              return ro;
            }),
            n.d(t, "document", function () {
              return di;
            }),
            n.d(t, "eventCenter", function () {
              return Si;
            }),
            n.d(t, "getComputedStyle", function () {
              return yi;
            }),
            n.d(t, "getCurrentInstance", function () {
              return ki;
            }),
            n.d(t, "hydrate", function () {
              return Oe;
            }),
            n.d(t, "injectPageInstance", function () {
              return Ci;
            }),
            n.d(t, "navigator", function () {
              return vi;
            }),
            n.d(t, "nextTick", function () {
              return So;
            }),
            n.d(t, "now", function () {
              return li;
            }),
            n.d(t, "options", function () {
              return Un;
            }),
            n.d(t, "processPluginHooks", function () {
              return Qr;
            }),
            n.d(t, "requestAnimationFrame", function () {
              return gi;
            }),
            n.d(t, "stringify", function () {
              return Li;
            }),
            n.d(t, "useAddToFavorites", function () {
              return jo;
            }),
            n.d(t, "useDidHide", function () {
              return so;
            }),
            n.d(t, "useDidShow", function () {
              return uo;
            }),
            n.d(t, "useOptionMenuClick", function () {
              return mo;
            }),
            n.d(t, "usePageScroll", function () {
              return ho;
            }),
            n.d(t, "usePullDownRefresh", function () {
              return lo;
            }),
            n.d(t, "usePullIntercept", function () {
              return yo;
            }),
            n.d(t, "useReachBottom", function () {
              return fo;
            }),
            n.d(t, "useReady", function () {
              return wo;
            }),
            n.d(t, "useResize", function () {
              return po;
            }),
            n.d(t, "useRouter", function () {
              return ko;
            }),
            n.d(t, "useScope", function () {
              return Eo;
            }),
            n.d(t, "useShareAppMessage", function () {
              return vo;
            }),
            n.d(t, "useShareTimeline", function () {
              return Oo;
            }),
            n.d(t, "useTabItemTap", function () {
              return bo;
            }),
            n.d(t, "useTitleClick", function () {
              return go;
            }),
            n.d(t, "window", function () {
              return Oi;
            });
          n(45), n(49);
          var u = n(12),
            s = n(33),
            l = n(5),
            d = n(15),
            f = n(11),
            h = n(39),
            p = n(34),
            v = n(16),
            b = n(13),
            g = n(14),
            m = n(2),
            y = n(8),
            O = n(10),
            j = n(7),
            w = n(4),
            k = n(1);
          function E(e, t, n, r) {
            var i,
              o = arguments.length,
              a =
                o < 3
                  ? t
                  : null === r
                  ? (r = Object.getOwnPropertyDescriptor(t, n))
                  : r;
            if (
              "object" ===
                ("undefined" === typeof Reflect
                  ? "undefined"
                  : Object(j["a"])(Reflect)) &&
              "function" === typeof Reflect.decorate
            )
              a = Reflect.decorate(e, t, n, r);
            else
              for (var c = e.length - 1; c >= 0; c--)
                (i = e[c]) &&
                  (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
            return o > 3 && a && Object.defineProperty(t, n, a), a;
          }
          function _(e, t) {
            return function (n, r) {
              t(n, r, e);
            };
          }
          function S(e, t) {
            if (
              "object" ===
                ("undefined" === typeof Reflect
                  ? "undefined"
                  : Object(j["a"])(Reflect)) &&
              "function" === typeof Reflect.metadata
            )
              return Reflect.metadata(e, t);
          }
          (function (t) {
            (function (e) {
              var n = r(t);
              function r(e, t) {
                return function (n, r) {
                  "function" !== typeof e[n] &&
                    Object.defineProperty(e, n, {
                      configurable: !0,
                      writable: !0,
                      value: r,
                    }),
                    t && t(n, r);
                };
              }
              e(n);
            })(function (t) {
              var n = Object.prototype.hasOwnProperty,
                r = "function" === typeof Symbol,
                i =
                  r && "undefined" !== typeof Symbol.toPrimitive
                    ? Symbol.toPrimitive
                    : "@@toPrimitive",
                o =
                  r && "undefined" !== typeof Symbol.iterator
                    ? Symbol.iterator
                    : "@@iterator",
                a = "function" === typeof Object.create,
                c = { __proto__: [] } instanceof Array,
                u = !a && !c,
                s = {
                  create: a
                    ? function () {
                        return ae(Object.create(null));
                      }
                    : c
                    ? function () {
                        return ae({ __proto__: null });
                      }
                    : function () {
                        return ae({});
                      },
                  has: u
                    ? function (e, t) {
                        return n.call(e, t);
                      }
                    : function (e, t) {
                        return t in e;
                      },
                  get: u
                    ? function (e, t) {
                        return n.call(e, t) ? e[t] : void 0;
                      }
                    : function (e, t) {
                        return e[t];
                      },
                },
                l = Object.getPrototypeOf(Function),
                d =
                  "object" ===
                    ("undefined" === typeof e
                      ? "undefined"
                      : Object(j["a"])(e)) &&
                  e.env &&
                  "true" === e.env["REFLECT_METADATA_USE_MAP_POLYFILL"],
                f =
                  d ||
                  "function" !== typeof Map ||
                  "function" !== typeof Map.prototype.entries
                    ? re()
                    : Map,
                h =
                  d ||
                  "function" !== typeof Set ||
                  "function" !== typeof Set.prototype.entries
                    ? ie()
                    : Set,
                p = d || "function" !== typeof WeakMap ? oe() : WeakMap,
                v = new p();
              function b(e, t, n, r) {
                if (D(n)) {
                  if (!G(e)) throw new TypeError();
                  if (!J(t)) throw new TypeError();
                  return T(e, t);
                }
                if (!G(e)) throw new TypeError();
                if (!$(t)) throw new TypeError();
                if (!$(r) && !D(r) && !M(r)) throw new TypeError();
                return M(r) && (r = void 0), (n = W(n)), P(e, t, n, r);
              }
              function g(e, t) {
                function n(n, r) {
                  if (!$(n)) throw new TypeError();
                  if (!D(r) && !Y(r)) throw new TypeError();
                  L(e, t, n, r);
                }
                return n;
              }
              function m(e, t, n, r) {
                if (!$(n)) throw new TypeError();
                return D(r) || (r = W(r)), L(e, t, n, r);
              }
              function y(e, t, n) {
                if (!$(t)) throw new TypeError();
                return D(n) || (n = W(n)), C(e, t, n);
              }
              function O(e, t, n) {
                if (!$(t)) throw new TypeError();
                return D(n) || (n = W(n)), A(e, t, n);
              }
              function w(e, t, n) {
                if (!$(t)) throw new TypeError();
                return D(n) || (n = W(n)), I(e, t, n);
              }
              function k(e, t, n) {
                if (!$(t)) throw new TypeError();
                return D(n) || (n = W(n)), N(e, t, n);
              }
              function E(e, t) {
                if (!$(e)) throw new TypeError();
                return D(t) || (t = W(t)), B(e, t);
              }
              function _(e, t) {
                if (!$(e)) throw new TypeError();
                return D(t) || (t = W(t)), F(e, t);
              }
              function S(e, t, n) {
                if (!$(t)) throw new TypeError();
                D(n) || (n = W(n));
                var r = x(t, n, !1);
                if (D(r)) return !1;
                if (!r.delete(e)) return !1;
                if (r.size > 0) return !0;
                var i = v.get(t);
                return i.delete(n), i.size > 0 || v.delete(t), !0;
              }
              function T(e, t) {
                for (var n = e.length - 1; n >= 0; --n) {
                  var r = e[n],
                    i = r(t);
                  if (!D(i) && !M(i)) {
                    if (!J(i)) throw new TypeError();
                    t = i;
                  }
                }
                return t;
              }
              function P(e, t, n, r) {
                for (var i = e.length - 1; i >= 0; --i) {
                  var o = e[i],
                    a = o(t, n, r);
                  if (!D(a) && !M(a)) {
                    if (!$(a)) throw new TypeError();
                    r = a;
                  }
                }
                return r;
              }
              function x(e, t, n) {
                var r = v.get(e);
                if (D(r)) {
                  if (!n) return;
                  (r = new f()), v.set(e, r);
                }
                var i = r.get(t);
                if (D(i)) {
                  if (!n) return;
                  (i = new f()), r.set(t, i);
                }
                return i;
              }
              function C(e, t, n) {
                var r = A(e, t, n);
                if (r) return !0;
                var i = ne(t);
                return !M(i) && C(e, i, n);
              }
              function A(e, t, n) {
                var r = x(t, n, !1);
                return !D(r) && H(r.has(e));
              }
              function I(e, t, n) {
                var r = A(e, t, n);
                if (r) return N(e, t, n);
                var i = ne(t);
                return M(i) ? void 0 : I(e, i, n);
              }
              function N(e, t, n) {
                var r = x(t, n, !1);
                if (!D(r)) return r.get(e);
              }
              function L(e, t, n, r) {
                var i = x(n, r, !0);
                i.set(e, t);
              }
              function B(e, t) {
                var n = F(e, t),
                  r = ne(e);
                if (null === r) return n;
                var i = B(r, t);
                if (i.length <= 0) return n;
                if (n.length <= 0) return i;
                for (var o = new h(), a = [], c = 0, u = n; c < u.length; c++) {
                  var s = u[c],
                    l = o.has(s);
                  l || (o.add(s), a.push(s));
                }
                for (var d = 0, f = i; d < f.length; d++) {
                  (s = f[d]), (l = o.has(s));
                  l || (o.add(s), a.push(s));
                }
                return a;
              }
              function F(e, t) {
                var n = [],
                  r = x(e, t, !1);
                if (D(r)) return n;
                var i = r.keys(),
                  o = Z(i),
                  a = 0;
                while (1) {
                  var c = ee(o);
                  if (!c) return (n.length = a), n;
                  var u = X(c);
                  try {
                    n[a] = u;
                  } catch (e) {
                    try {
                      te(o);
                    } finally {
                      throw e;
                    }
                  }
                  a++;
                }
              }
              function R(e) {
                if (null === e) return 1;
                switch (Object(j["a"])(e)) {
                  case "undefined":
                    return 0;
                  case "boolean":
                    return 2;
                  case "string":
                    return 3;
                  case "symbol":
                    return 4;
                  case "number":
                    return 5;
                  case "object":
                    return null === e ? 1 : 6;
                  default:
                    return 6;
                }
              }
              function D(e) {
                return void 0 === e;
              }
              function M(e) {
                return null === e;
              }
              function U(e) {
                return "symbol" === Object(j["a"])(e);
              }
              function $(e) {
                return "object" === Object(j["a"])(e)
                  ? null !== e
                  : "function" === typeof e;
              }
              function z(e, t) {
                switch (R(e)) {
                  case 0:
                    return e;
                  case 1:
                    return e;
                  case 2:
                    return e;
                  case 3:
                    return e;
                  case 4:
                    return e;
                  case 5:
                    return e;
                }
                var n = 3 === t ? "string" : 5 === t ? "number" : "default",
                  r = Q(e, i);
                if (void 0 !== r) {
                  var o = r.call(e, n);
                  if ($(o)) throw new TypeError();
                  return o;
                }
                return q(e, "default" === n ? "number" : n);
              }
              function q(e, t) {
                if ("string" === t) {
                  var n = e.toString;
                  if (K(n)) {
                    var r = n.call(e);
                    if (!$(r)) return r;
                  }
                  var i = e.valueOf;
                  if (K(i)) {
                    r = i.call(e);
                    if (!$(r)) return r;
                  }
                } else {
                  i = e.valueOf;
                  if (K(i)) {
                    r = i.call(e);
                    if (!$(r)) return r;
                  }
                  var o = e.toString;
                  if (K(o)) {
                    r = o.call(e);
                    if (!$(r)) return r;
                  }
                }
                throw new TypeError();
              }
              function H(e) {
                return !!e;
              }
              function V(e) {
                return "" + e;
              }
              function W(e) {
                var t = z(e, 3);
                return U(t) ? t : V(t);
              }
              function G(e) {
                return Array.isArray
                  ? Array.isArray(e)
                  : e instanceof Object
                  ? e instanceof Array
                  : "[object Array]" === Object.prototype.toString.call(e);
              }
              function K(e) {
                return "function" === typeof e;
              }
              function J(e) {
                return "function" === typeof e;
              }
              function Y(e) {
                switch (R(e)) {
                  case 3:
                    return !0;
                  case 4:
                    return !0;
                  default:
                    return !1;
                }
              }
              function Q(e, t) {
                var n = e[t];
                if (void 0 !== n && null !== n) {
                  if (!K(n)) throw new TypeError();
                  return n;
                }
              }
              function Z(e) {
                var t = Q(e, o);
                if (!K(t)) throw new TypeError();
                var n = t.call(e);
                if (!$(n)) throw new TypeError();
                return n;
              }
              function X(e) {
                return e.value;
              }
              function ee(e) {
                var t = e.next();
                return !t.done && t;
              }
              function te(e) {
                var t = e["return"];
                t && t.call(e);
              }
              function ne(e) {
                var t = Object.getPrototypeOf(e);
                if ("function" !== typeof e || e === l) return t;
                if (t !== l) return t;
                var n = e.prototype,
                  r = n && Object.getPrototypeOf(n);
                if (null == r || r === Object.prototype) return t;
                var i = r.constructor;
                return "function" !== typeof i || i === e ? t : i;
              }
              function re() {
                var e = {},
                  t = [],
                  n = (function () {
                    function e(e, t, n) {
                      (this._index = 0),
                        (this._keys = e),
                        (this._values = t),
                        (this._selector = n);
                    }
                    return (
                      (e.prototype["@@iterator"] = function () {
                        return this;
                      }),
                      (e.prototype[o] = function () {
                        return this;
                      }),
                      (e.prototype.next = function () {
                        var e = this._index;
                        if (e >= 0 && e < this._keys.length) {
                          var n = this._selector(
                            this._keys[e],
                            this._values[e]
                          );
                          return (
                            e + 1 >= this._keys.length
                              ? ((this._index = -1),
                                (this._keys = t),
                                (this._values = t))
                              : this._index++,
                            { value: n, done: !1 }
                          );
                        }
                        return { value: void 0, done: !0 };
                      }),
                      (e.prototype.throw = function (e) {
                        throw (
                          (this._index >= 0 &&
                            ((this._index = -1),
                            (this._keys = t),
                            (this._values = t)),
                          e)
                        );
                      }),
                      (e.prototype.return = function (e) {
                        return (
                          this._index >= 0 &&
                            ((this._index = -1),
                            (this._keys = t),
                            (this._values = t)),
                          { value: e, done: !0 }
                        );
                      }),
                      e
                    );
                  })();
                return (function () {
                  function t() {
                    (this._keys = []),
                      (this._values = []),
                      (this._cacheKey = e),
                      (this._cacheIndex = -2);
                  }
                  return (
                    Object.defineProperty(t.prototype, "size", {
                      get: function () {
                        return this._keys.length;
                      },
                      enumerable: !0,
                      configurable: !0,
                    }),
                    (t.prototype.has = function (e) {
                      return this._find(e, !1) >= 0;
                    }),
                    (t.prototype.get = function (e) {
                      var t = this._find(e, !1);
                      return t >= 0 ? this._values[t] : void 0;
                    }),
                    (t.prototype.set = function (e, t) {
                      var n = this._find(e, !0);
                      return (this._values[n] = t), this;
                    }),
                    (t.prototype.delete = function (t) {
                      var n = this._find(t, !1);
                      if (n >= 0) {
                        for (var r = this._keys.length, i = n + 1; i < r; i++)
                          (this._keys[i - 1] = this._keys[i]),
                            (this._values[i - 1] = this._values[i]);
                        return (
                          this._keys.length--,
                          this._values.length--,
                          t === this._cacheKey &&
                            ((this._cacheKey = e), (this._cacheIndex = -2)),
                          !0
                        );
                      }
                      return !1;
                    }),
                    (t.prototype.clear = function () {
                      (this._keys.length = 0),
                        (this._values.length = 0),
                        (this._cacheKey = e),
                        (this._cacheIndex = -2);
                    }),
                    (t.prototype.keys = function () {
                      return new n(this._keys, this._values, r);
                    }),
                    (t.prototype.values = function () {
                      return new n(this._keys, this._values, i);
                    }),
                    (t.prototype.entries = function () {
                      return new n(this._keys, this._values, a);
                    }),
                    (t.prototype["@@iterator"] = function () {
                      return this.entries();
                    }),
                    (t.prototype[o] = function () {
                      return this.entries();
                    }),
                    (t.prototype._find = function (e, t) {
                      return (
                        this._cacheKey !== e &&
                          (this._cacheIndex = this._keys.indexOf(
                            (this._cacheKey = e)
                          )),
                        this._cacheIndex < 0 &&
                          t &&
                          ((this._cacheIndex = this._keys.length),
                          this._keys.push(e),
                          this._values.push(void 0)),
                        this._cacheIndex
                      );
                    }),
                    t
                  );
                })();
                function r(e, t) {
                  return e;
                }
                function i(e, t) {
                  return t;
                }
                function a(e, t) {
                  return [e, t];
                }
              }
              function ie() {
                return (function () {
                  function e() {
                    this._map = new f();
                  }
                  return (
                    Object.defineProperty(e.prototype, "size", {
                      get: function () {
                        return this._map.size;
                      },
                      enumerable: !0,
                      configurable: !0,
                    }),
                    (e.prototype.has = function (e) {
                      return this._map.has(e);
                    }),
                    (e.prototype.add = function (e) {
                      return this._map.set(e, e), this;
                    }),
                    (e.prototype.delete = function (e) {
                      return this._map.delete(e);
                    }),
                    (e.prototype.clear = function () {
                      this._map.clear();
                    }),
                    (e.prototype.keys = function () {
                      return this._map.keys();
                    }),
                    (e.prototype.values = function () {
                      return this._map.values();
                    }),
                    (e.prototype.entries = function () {
                      return this._map.entries();
                    }),
                    (e.prototype["@@iterator"] = function () {
                      return this.keys();
                    }),
                    (e.prototype[o] = function () {
                      return this.keys();
                    }),
                    e
                  );
                })();
              }
              function oe() {
                var e = 16,
                  t = s.create(),
                  r = i();
                return (function () {
                  function e() {
                    this._key = i();
                  }
                  return (
                    (e.prototype.has = function (e) {
                      var t = o(e, !1);
                      return void 0 !== t && s.has(t, this._key);
                    }),
                    (e.prototype.get = function (e) {
                      var t = o(e, !1);
                      return void 0 !== t ? s.get(t, this._key) : void 0;
                    }),
                    (e.prototype.set = function (e, t) {
                      var n = o(e, !0);
                      return (n[this._key] = t), this;
                    }),
                    (e.prototype.delete = function (e) {
                      var t = o(e, !1);
                      return void 0 !== t && delete t[this._key];
                    }),
                    (e.prototype.clear = function () {
                      this._key = i();
                    }),
                    e
                  );
                })();
                function i() {
                  var e;
                  do {
                    e = "@@WeakMap@@" + u();
                  } while (s.has(t, e));
                  return (t[e] = !0), e;
                }
                function o(e, t) {
                  if (!n.call(e, r)) {
                    if (!t) return;
                    Object.defineProperty(e, r, { value: s.create() });
                  }
                  return e[r];
                }
                function a(e, t) {
                  for (var n = 0; n < t; ++n) e[n] = (255 * Math.random()) | 0;
                  return e;
                }
                function c(e) {
                  return "function" === typeof Uint8Array
                    ? "undefined" !== typeof crypto
                      ? crypto.getRandomValues(new Uint8Array(e))
                      : "undefined" !== typeof msCrypto
                      ? msCrypto.getRandomValues(new Uint8Array(e))
                      : a(new Uint8Array(e), e)
                    : a(new Array(e), e);
                }
                function u() {
                  var t = c(e);
                  (t[6] = (79 & t[6]) | 64), (t[8] = (191 & t[8]) | 128);
                  for (var n = "", r = 0; r < e; ++r) {
                    var i = t[r];
                    (4 !== r && 6 !== r && 8 !== r) || (n += "-"),
                      i < 16 && (n += "0"),
                      (n += i.toString(16).toLowerCase());
                  }
                  return n;
                }
              }
              function ae(e) {
                return (e.__ = void 0), delete e.__, e;
              }
              t("decorate", b),
                t("metadata", g),
                t("defineMetadata", m),
                t("hasMetadata", y),
                t("hasOwnMetadata", O),
                t("getMetadata", w),
                t("getOwnMetadata", k),
                t("getMetadataKeys", E),
                t("getOwnMetadataKeys", _),
                t("deleteMetadata", S);
            });
          })(Reflect || (Reflect = {}));
          var T = {
              TaroElement: "TaroElement",
              TaroElementFactory: "Factory<TaroElement>",
              TaroText: "TaroText",
              TaroTextFactory: "Factory<TaroText>",
              TaroNodeImpl: "TaroNodeImpl",
              TaroElementImpl: "TaroElementImpl",
              Hooks: "hooks",
              onRemoveAttribute: "onRemoveAttribute",
              getLifecycle: "getLifecycle",
              getPathIndex: "getPathIndex",
              getEventCenter: "getEventCenter",
              isBubbleEvents: "isBubbleEvents",
              getSpecialNodes: "getSpecialNodes",
              eventCenter: "eventCenter",
              modifyMpEvent: "modifyMpEvent",
              modifyTaroEvent: "modifyTaroEvent",
              batchedEventUpdates: "batchedEventUpdates",
              mergePageInstance: "mergePageInstance",
              createPullDownComponent: "createPullDownComponent",
              getDOMNode: "getDOMNode",
              initNativeApi: "initNativeApi",
              modifyHydrateData: "modifyHydrateData",
              modifySetAttrPayload: "modifySetAttrPayload",
              modifyRmAttrPayload: "modifyRmAttrPayload",
              onAddEvent: "onAddEvent",
              patchElement: "patchElement",
            },
            P = "taro-app",
            x = "\u5c0f\u7a0b\u5e8f setData",
            C = "\u9875\u9762\u521d\u59cb\u5316",
            A = "root",
            I = "html",
            N = "head",
            L = "body",
            B = "app",
            F = "container",
            R = "#document",
            D = "document-fragment",
            M = "id",
            U = "uid",
            $ = "class",
            z = "style",
            q = "focus",
            H = "view",
            V = "static-view",
            W = "pure-view",
            G = "props",
            K = "dataset",
            J = "object",
            Y = "value",
            Q = "input",
            Z = "change",
            X = "custom-wrapper",
            ee = "target",
            te = "currentTarget",
            ne = "type",
            re = "confirm",
            ie = "timeStamp",
            oe = "keyCode",
            ae = "touchmove",
            ce = "Date",
            ue = "setTimeout",
            se = "catchMove",
            le = "catch-view",
            de = "comment",
            fe = function () {
              var e = 0;
              return function () {
                return (e++).toString();
              };
            };
          function he(e) {
            return 1 === e.nodeType;
          }
          function pe(e) {
            return 3 === e.nodeType;
          }
          function ve(e) {
            return e.nodeName === de;
          }
          function be(e) {
            var t = Object.keys(e.props).find(function (e) {
              return !(/^(class|style|id)$/.test(e) || e.startsWith("data-"));
            });
            return Boolean(t);
          }
          function ge(e, t) {
            var n,
              r = !1;
            while (
              (null === e || void 0 === e ? void 0 : e.parentElement) &&
              e.parentElement._path !== A
            ) {
              if (
                null === (n = e.parentElement.__handlers[t]) || void 0 === n
                  ? void 0
                  : n.length
              ) {
                r = !0;
                break;
              }
              e = e.parentElement;
            }
            return r;
          }
          function me(e) {
            switch (e) {
              case z:
                return "st";
              case M:
                return U;
              case $:
                return "cl";
              default:
                return e;
            }
          }
          var ye = (function () {
            function e(t) {
              Object(y["a"])(this, e), (this.__handlers = {}), (this.hooks = t);
            }
            return (
              Object(O["a"])(e, [
                {
                  key: "addEventListener",
                  value: function (e, t, n) {
                    var r, i;
                    if (
                      (null === (i = (r = this.hooks).onAddEvent) ||
                        void 0 === i ||
                        i.call(r, e, t, n, this),
                      "regionchange" === e)
                    )
                      return (
                        this.addEventListener("begin", t, n),
                        void this.addEventListener("end", t, n)
                      );
                    e = e.toLowerCase();
                    var o = this.__handlers[e],
                      a = (Boolean(n), !1);
                    if (
                      (Object(k["i"])(n) &&
                        (Boolean(n.capture), (a = Boolean(n.once))),
                      a)
                    ) {
                      var c = function n() {
                        t.apply(this, arguments),
                          this.removeEventListener(e, n);
                      };
                      this.addEventListener(
                        e,
                        c,
                        Object.assign(Object.assign({}, n), { once: !1 })
                      );
                    } else
                      Object(k["f"])(o)
                        ? o.push(t)
                        : (this.__handlers[e] = [t]);
                  },
                },
                {
                  key: "removeEventListener",
                  value: function (e, t) {
                    if (((e = e.toLowerCase()), null != t)) {
                      var n = this.__handlers[e];
                      if (Object(k["f"])(n)) {
                        var r = n.indexOf(t);
                        n.splice(r, 1);
                      }
                    }
                  },
                },
                {
                  key: "isAnyEventBinded",
                  value: function () {
                    var e = this.__handlers,
                      t = Object.keys(e).find(function (t) {
                        return e[t].length;
                      });
                    return Boolean(t);
                  },
                },
              ]),
              e
            );
          })();
          function Oe(e) {
            var t,
              n,
              r,
              i,
              o = e.nodeName;
            if (pe(e))
              return (
                (i = {}),
                Object(m["a"])(i, "v", e.nodeValue),
                Object(m["a"])(i, "nn", o),
                i
              );
            var a =
                ((t = {}),
                Object(m["a"])(t, "nn", o),
                Object(m["a"])(t, "uid", e.uid),
                t),
              c = e.props,
              u = e.hooks.getSpecialNodes();
            for (var s in (!e.isAnyEventBinded() &&
              u.indexOf(o) > -1 &&
              ((a["nn"] = "static-".concat(o)),
              o !== H || be(e) || (a["nn"] = W)),
            c)) {
              var l = Object(k["p"])(s);
              s.startsWith("data-") ||
                s === $ ||
                s === z ||
                s === M ||
                l === se ||
                (a[l] = c[s]),
                o === H && l === se && !1 !== c[s] && (a["nn"] = le);
            }
            var d = e.childNodes;
            return (
              (d = d.filter(function (e) {
                return !ve(e);
              })),
              d.length > 0 ? (a["cn"] = d.map(Oe)) : (a["cn"] = []),
              "" !== e.className && (a["cl"] = e.className),
              "" !== e.cssText && "swiper-item" !== o && (a["st"] = e.cssText),
              null === (r = (n = e.hooks).modifyHydrateData) ||
                void 0 === r ||
                r.call(n, a),
              a
            );
          }
          ye = E(
            [
              Object(w["d"])(),
              _(0, Object(w["c"])(T.Hooks)),
              S("design:paramtypes", [Object]),
            ],
            ye
          );
          var je,
            we = new Map();
          (function (e) {
            (e["Element"] = "Element"),
              (e["Document"] = "Document"),
              (e["RootElement"] = "RootElement"),
              (e["FormElement"] = "FormElement");
          })(je || (je = {}));
          var ke = fe(),
            Ee = (function (e) {
              Object(b["a"])(n, e);
              var t = Object(g["a"])(n);
              function n(e, r, i) {
                var o;
                return (
                  Object(y["a"])(this, n),
                  (o = t.call(this, i)),
                  (o.parentNode = null),
                  (o.childNodes = []),
                  (o.hydrate = function (e) {
                    return function () {
                      return Oe(e);
                    };
                  }),
                  e.bind(Object(v["a"])(o)),
                  (o._getElement = r),
                  (o.uid = "_n_".concat(ke())),
                  we.set(o.uid, Object(v["a"])(o)),
                  o
                );
              }
              return (
                Object(O["a"])(n, [
                  {
                    key: "_empty",
                    value: function () {
                      while (this.childNodes.length > 0) {
                        var e = this.childNodes[0];
                        (e.parentNode = null),
                          we.delete(e.uid),
                          this.childNodes.shift();
                      }
                    },
                  },
                  {
                    key: "_root",
                    get: function () {
                      var e;
                      return (
                        (null === (e = this.parentNode) || void 0 === e
                          ? void 0
                          : e._root) || null
                      );
                    },
                  },
                  {
                    key: "findIndex",
                    value: function (e) {
                      var t = this.childNodes.indexOf(e);
                      return (
                        Object(k["d"])(
                          -1 !== t,
                          "The node to be replaced is not a child of this node."
                        ),
                        t
                      );
                    },
                  },
                  {
                    key: "_path",
                    get: function () {
                      var e = this.parentNode;
                      if (e) {
                        var t = e.childNodes.filter(function (e) {
                            return !ve(e);
                          }),
                          n = t.indexOf(this),
                          r = this.hooks.getPathIndex(n);
                        return "".concat(e._path, ".", "cn", ".").concat(r);
                      }
                      return "";
                    },
                  },
                  {
                    key: "nextSibling",
                    get: function () {
                      var e = this.parentNode;
                      return (
                        (null === e || void 0 === e
                          ? void 0
                          : e.childNodes[e.findIndex(this) + 1]) || null
                      );
                    },
                  },
                  {
                    key: "previousSibling",
                    get: function () {
                      var e = this.parentNode;
                      return (
                        (null === e || void 0 === e
                          ? void 0
                          : e.childNodes[e.findIndex(this) - 1]) || null
                      );
                    },
                  },
                  {
                    key: "parentElement",
                    get: function () {
                      var e = this.parentNode;
                      return 1 ===
                        (null === e || void 0 === e ? void 0 : e.nodeType)
                        ? e
                        : null;
                    },
                  },
                  {
                    key: "firstChild",
                    get: function () {
                      return this.childNodes[0] || null;
                    },
                  },
                  {
                    key: "lastChild",
                    get: function () {
                      var e = this.childNodes;
                      return e[e.length - 1] || null;
                    },
                  },
                  {
                    key: "textContent",
                    set: function (e) {
                      if ((this._empty(), "" === e))
                        this.enqueueUpdate({
                          path: "".concat(this._path, ".", "cn"),
                          value: function () {
                            return [];
                          },
                        });
                      else {
                        var t = this._getElement(je.Document)();
                        this.appendChild(t.createTextNode(e));
                      }
                    },
                  },
                  {
                    key: "insertBefore",
                    value: function (e, t, n) {
                      var r,
                        i = this;
                      if (e.nodeName === D)
                        return (
                          e.childNodes.reduceRight(function (e, t) {
                            return i.insertBefore(t, e), t;
                          }, t),
                          e
                        );
                      if ((e.remove(), (e.parentNode = this), t)) {
                        var o = this.findIndex(t);
                        this.childNodes.splice(o, 0, e),
                          (r = n
                            ? { path: e._path, value: this.hydrate(e) }
                            : {
                                path: "".concat(this._path, ".", "cn"),
                                value: function () {
                                  var e = i.childNodes.filter(function (e) {
                                    return !ve(e);
                                  });
                                  return e.map(Oe);
                                },
                              });
                      } else
                        this.childNodes.push(e),
                          (r = { path: e._path, value: this.hydrate(e) });
                      return (
                        this.enqueueUpdate(r),
                        we.has(e.uid) || we.set(e.uid, e),
                        e
                      );
                    },
                  },
                  {
                    key: "appendChild",
                    value: function (e) {
                      this.insertBefore(e);
                    },
                  },
                  {
                    key: "replaceChild",
                    value: function (e, t) {
                      if (t.parentNode === this)
                        return this.insertBefore(e, t, !0), t.remove(!0), t;
                    },
                  },
                  {
                    key: "removeChild",
                    value: function (e, t) {
                      var n = this,
                        r = this.findIndex(e);
                      return (
                        this.childNodes.splice(r, 1),
                        t ||
                          this.enqueueUpdate({
                            path: "".concat(this._path, ".", "cn"),
                            value: function () {
                              var e = n.childNodes.filter(function (e) {
                                return !ve(e);
                              });
                              return e.map(Oe);
                            },
                          }),
                        (e.parentNode = null),
                        we.delete(e.uid),
                        e
                      );
                    },
                  },
                  {
                    key: "remove",
                    value: function (e) {
                      var t;
                      null === (t = this.parentNode) ||
                        void 0 === t ||
                        t.removeChild(this, e);
                    },
                  },
                  {
                    key: "hasChildNodes",
                    value: function () {
                      return this.childNodes.length > 0;
                    },
                  },
                  {
                    key: "enqueueUpdate",
                    value: function (e) {
                      var t;
                      null === (t = this._root) ||
                        void 0 === t ||
                        t.enqueueUpdate(e);
                    },
                  },
                  {
                    key: "contains",
                    value: function (e) {
                      var t = !1;
                      return (
                        this.childNodes.some(function (n) {
                          var r = n.uid;
                          if (r === e.uid || r === e.id || n.contains(e))
                            return (t = !0), !0;
                        }),
                        t
                      );
                    },
                  },
                  {
                    key: "ownerDocument",
                    get: function () {
                      var e = this._getElement(je.Document)();
                      return e;
                    },
                  },
                ]),
                n
              );
            })(ye);
          Ee = E(
            [
              Object(w["d"])(),
              _(0, Object(w["c"])(T.TaroNodeImpl)),
              _(1, Object(w["c"])(T.TaroElementFactory)),
              _(2, Object(w["c"])(T.Hooks)),
              S("design:paramtypes", [Function, Function, Function]),
            ],
            Ee
          );
          var _e = (function (e) {
            Object(b["a"])(n, e);
            var t = Object(g["a"])(n);
            function n(e, r, i) {
              var o;
              return (
                Object(y["a"])(this, n),
                (o = t.call(this, e, r, i)),
                (o.nodeType = 3),
                (o.nodeName = "#text"),
                o
              );
            }
            return (
              Object(O["a"])(n, [
                {
                  key: "textContent",
                  get: function () {
                    return this._value;
                  },
                  set: function (e) {
                    (this._value = e),
                      this.enqueueUpdate({
                        path: "".concat(this._path, ".", "v"),
                        value: e,
                      });
                  },
                },
                {
                  key: "nodeValue",
                  get: function () {
                    return this._value;
                  },
                  set: function (e) {
                    this.textContent = e;
                  },
                },
              ]),
              n
            );
          })(Ee);
          _e = E(
            [
              Object(w["d"])(),
              _(0, Object(w["c"])(T.TaroNodeImpl)),
              _(1, Object(w["c"])(T.TaroElementFactory)),
              _(2, Object(w["c"])(T.Hooks)),
              S("design:paramtypes", [Function, Function, Function]),
            ],
            _e
          );
          var Se = [
            "all",
            "appearance",
            "blockOverflow",
            "blockSize",
            "bottom",
            "clear",
            "contain",
            "content",
            "continue",
            "cursor",
            "direction",
            "display",
            "filter",
            "float",
            "gap",
            "height",
            "inset",
            "isolation",
            "left",
            "letterSpacing",
            "lightingColor",
            "markerSide",
            "mixBlendMode",
            "opacity",
            "order",
            "position",
            "quotes",
            "resize",
            "right",
            "rowGap",
            "tabSize",
            "tableLayout",
            "top",
            "userSelect",
            "verticalAlign",
            "visibility",
            "voiceFamily",
            "volume",
            "whiteSpace",
            "widows",
            "width",
            "zIndex",
          ];
          function Te(e, t, n) {
            !n && Se.push(e),
              t.forEach(function (t) {
                Se.push(e + t);
              });
          }
          var Pe = "Color",
            xe = "Style",
            Ce = "Width",
            Ae = "Image",
            Ie = "Size",
            Ne = [Pe, xe, Ce],
            Le = ["FitLength", "FitWidth", Ae],
            Be = [].concat(Le, ["Radius"]),
            Fe = [].concat(Ne, Le),
            Re = ["EndRadius", "StartRadius"],
            De = ["Bottom", "Left", "Right", "Top"],
            Me = ["End", "Start"],
            Ue = ["Content", "Items", "Self"],
            $e = ["BlockSize", "Height", "InlineSize", Ce],
            ze = ["After", "Before"];
          function qe(e, t) {
            var n = this[t];
            e && this._usedStyleProp.add(t),
              n !== e &&
                ((this._value[t] = e),
                this._element.enqueueUpdate({
                  path: "".concat(this._element._path, ".", "st"),
                  value: this.cssText,
                }));
          }
          function He(e) {
            for (
              var t = {},
                n = function (e) {
                  var n = Se[e];
                  t[n] = {
                    get: function () {
                      return this._value[n] || "";
                    },
                    set: function (e) {
                      qe.call(this, e, n);
                    },
                  };
                },
                r = 0;
              r < Se.length;
              r++
            )
              n(r);
            Object.defineProperties(e.prototype, t);
          }
          function Ve(e) {
            return /^--/.test(e);
          }
          Te("borderBlock", Ne),
            Te("borderBlockEnd", Ne),
            Te("borderBlockStart", Ne),
            Te("outline", [].concat(Ne, ["Offset"])),
            Te(
              "border",
              [].concat(Ne, [
                "Boundary",
                "Break",
                "Collapse",
                "Radius",
                "Spacing",
              ])
            ),
            Te("borderFit", ["Length", Ce]),
            Te("borderInline", Ne),
            Te("borderInlineEnd", Ne),
            Te("borderInlineStart", Ne),
            Te("borderLeft", Fe),
            Te("borderRight", Fe),
            Te("borderTop", Fe),
            Te("borderBottom", Fe),
            Te("textDecoration", [Pe, xe, "Line"]),
            Te("textEmphasis", [Pe, xe, "Position"]),
            Te("scrollMargin", De),
            Te("scrollPadding", De),
            Te("padding", De),
            Te("margin", [].concat(De, ["Trim"])),
            Te("scrollMarginBlock", Me),
            Te("scrollMarginInline", Me),
            Te("scrollPaddingBlock", Me),
            Te("scrollPaddingInline", Me),
            Te("gridColumn", Me),
            Te("gridRow", Me),
            Te("insetBlock", Me),
            Te("insetInline", Me),
            Te("marginBlock", Me),
            Te("marginInline", Me),
            Te("paddingBlock", Me),
            Te("paddingInline", Me),
            Te("pause", ze),
            Te("cue", ze),
            Te("mask", [
              "Clip",
              "Composite",
              Ae,
              "Mode",
              "Origin",
              "Position",
              "Repeat",
              Ie,
              "Type",
            ]),
            Te("borderImage", [
              "Outset",
              "Repeat",
              "Slice",
              "Source",
              "Transform",
              Ce,
            ]),
            Te("maskBorder", [
              "Mode",
              "Outset",
              "Repeat",
              "Slice",
              "Source",
              Ce,
            ]),
            Te("font", [
              "Family",
              "FeatureSettings",
              "Kerning",
              "LanguageOverride",
              "MaxSize",
              "MinSize",
              "OpticalSizing",
              "Palette",
              Ie,
              "SizeAdjust",
              "Stretch",
              xe,
              "Weight",
              "VariationSettings",
            ]),
            Te("fontSynthesis", ["SmallCaps", xe, "Weight"]),
            Te("transform", ["Box", "Origin", xe]),
            Te("background", [
              Pe,
              Ae,
              "Attachment",
              "BlendMode",
              "Clip",
              "Origin",
              "Position",
              "Repeat",
              Ie,
            ]),
            Te("listStyle", [Ae, "Position", "Type"]),
            Te("scrollSnap", ["Align", "Stop", "Type"]),
            Te("grid", ["Area", "AutoColumns", "AutoFlow", "AutoRows"]),
            Te("gridTemplate", ["Areas", "Columns", "Rows"]),
            Te("overflow", ["Block", "Inline", "Wrap", "X", "Y"]),
            Te("transition", [
              "Delay",
              "Duration",
              "Property",
              "TimingFunction",
            ]),
            Te("lineStacking", ["Ruby", "Shift", "Strategy"]),
            Te("color", ["Adjust", "InterpolationFilters", "Scheme"]),
            Te("textAlign", ["All", "Last"]),
            Te("page", ["BreakAfter", "BreakBefore", "BreakInside"]),
            Te("speak", ["Header", "Numeral", "Punctuation"]),
            Te("animation", [
              "Delay",
              "Direction",
              "Duration",
              "FillMode",
              "IterationCount",
              "Name",
              "PlayState",
              "TimingFunction",
            ]),
            Te("flex", [
              "Basis",
              "Direction",
              "Flow",
              "Grow",
              "Shrink",
              "Wrap",
            ]),
            Te(
              "offset",
              [].concat(ze, Me, [
                "Anchor",
                "Distance",
                "Path",
                "Position",
                "Rotate",
              ])
            ),
            Te("fontVariant", [
              "Alternates",
              "Caps",
              "EastAsian",
              "Emoji",
              "Ligatures",
              "Numeric",
              "Position",
            ]),
            Te("perspective", ["Origin"]),
            Te("pitch", ["Range"]),
            Te("clip", ["Path", "Rule"]),
            Te("flow", ["From", "Into"]),
            Te("align", ["Content", "Items", "Self"], !0),
            Te("alignment", ["Adjust", "Baseline"], !0),
            Te("bookmark", ["Label", "Level", "State"], !0),
            Te("borderStart", Re, !0),
            Te("borderEnd", Re, !0),
            Te("borderCorner", ["Fit", Ae, "ImageTransform"], !0),
            Te("borderTopLeft", Be, !0),
            Te("borderTopRight", Be, !0),
            Te("borderBottomLeft", Be, !0),
            Te("borderBottomRight", Be, !0),
            Te(
              "column",
              [
                "s",
                "Count",
                "Fill",
                "Gap",
                "Rule",
                "RuleColor",
                "RuleStyle",
                "RuleWidth",
                "Span",
                Ce,
              ],
              !0
            ),
            Te("break", [].concat(ze, ["Inside"]), !0),
            Te("wrap", [].concat(ze, ["Flow", "Inside", "Through"]), !0),
            Te("justify", Ue, !0),
            Te("place", Ue, !0),
            Te("max", [].concat($e, ["Lines"]), !0),
            Te("min", $e, !0),
            Te(
              "line",
              ["Break", "Clamp", "Grid", "Height", "Padding", "Snap"],
              !0
            ),
            Te("inline", ["BoxAlign", Ie, "Sizing"], !0),
            Te(
              "text",
              [
                "CombineUpright",
                "GroupAlign",
                "Height",
                "Indent",
                "Justify",
                "Orientation",
                "Overflow",
                "Shadow",
                "SpaceCollapse",
                "SpaceTrim",
                "Spacing",
                "Transform",
                "UnderlinePosition",
                "Wrap",
              ],
              !0
            ),
            Te("shape", ["ImageThreshold", "Inside", "Margin", "Outside"], !0),
            Te("word", ["Break", "Spacing", "Wrap"], !0),
            Te("nav", ["Down", "Left", "Right", "Up"], !0),
            Te("object", ["Fit", "Position"], !0),
            Te("box", ["DecorationBreak", "Shadow", "Sizing", "Snap"], !0);
          var We = (function () {
            function e(t) {
              Object(y["a"])(this, e),
                (this._element = t),
                (this._usedStyleProp = new Set()),
                (this._value = {});
            }
            return (
              Object(O["a"])(e, [
                {
                  key: "setCssVariables",
                  value: function (e) {
                    var t = this;
                    this.hasOwnProperty(e) ||
                      Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: function () {
                          return t._value[e] || "";
                        },
                        set: function (n) {
                          qe.call(t, n, e);
                        },
                      });
                  },
                },
                {
                  key: "cssText",
                  get: function () {
                    var e = this,
                      t = "";
                    return (
                      this._usedStyleProp.forEach(function (n) {
                        var r = e[n];
                        if (r) {
                          var i = Ve(n) ? n : Object(k["q"])(n);
                          t += "".concat(i, ": ").concat(r, ";");
                        }
                      }),
                      t
                    );
                  },
                  set: function (e) {
                    var t = this;
                    if (
                      (null == e && (e = ""),
                      this._usedStyleProp.forEach(function (e) {
                        t.removeProperty(e);
                      }),
                      "" !== e)
                    )
                      for (var n = e.split(";"), r = 0; r < n.length; r++) {
                        var i = n[r].trim();
                        if ("" !== i) {
                          var o = i.split(":"),
                            a = Object(p["a"])(o),
                            c = a[0],
                            u = a.slice(1),
                            s = u.join(":");
                          Object(k["j"])(s) ||
                            this.setProperty(c.trim(), s.trim());
                        }
                      }
                  },
                },
                {
                  key: "setProperty",
                  value: function (e, t) {
                    "-" === e[0]
                      ? this.setCssVariables(e)
                      : (e = Object(k["p"])(e)),
                      Object(k["j"])(t) ||
                        (null === t || "" === t
                          ? this.removeProperty(e)
                          : (this[e] = t));
                  },
                },
                {
                  key: "removeProperty",
                  value: function (e) {
                    if (((e = Object(k["p"])(e)), !this._usedStyleProp.has(e)))
                      return "";
                    var t = this[e];
                    return (this[e] = ""), this._usedStyleProp.delete(e), t;
                  },
                },
                {
                  key: "getPropertyValue",
                  value: function (e) {
                    e = Object(k["p"])(e);
                    var t = this[e];
                    return t || "";
                  },
                },
              ]),
              e
            );
          })();
          function Ge() {
            return !0;
          }
          function Ke(e, t) {
            var n = [],
              r = null !== t && void 0 !== t ? t : Ge,
              i = e;
            while (i) 1 === i.nodeType && r(i) && n.push(i), (i = Je(i, e));
            return n;
          }
          function Je(e, t) {
            var n = e.firstChild;
            if (n) return n;
            var r = e;
            do {
              if (r === t) return null;
              var i = r.nextSibling;
              if (i) return i;
              r = r.parentElement;
            } while (r);
            return null;
          }
          He(We);
          var Ye = (function (e) {
              Object(b["a"])(n, e);
              var t = Object(g["a"])(n);
              function n(e, r) {
                var i, o;
                return (
                  Object(y["a"])(this, n),
                  (o = t.call(this)),
                  e
                    .trim()
                    .split(/\s+/)
                    .forEach(
                      Object(d["a"])(
                        ((i = Object(v["a"])(o)), Object(f["a"])(n.prototype)),
                        "add",
                        i
                      ).bind(Object(v["a"])(o))
                    ),
                  (o.el = r),
                  o
                );
              }
              return (
                Object(O["a"])(n, [
                  {
                    key: "value",
                    get: function () {
                      return Object(l["a"])(this).join(" ");
                    },
                  },
                  {
                    key: "add",
                    value: function (e) {
                      return (
                        Object(d["a"])(
                          Object(f["a"])(n.prototype),
                          "add",
                          this
                        ).call(this, e),
                        this._update(),
                        this
                      );
                    },
                  },
                  {
                    key: "length",
                    get: function () {
                      return this.size;
                    },
                  },
                  {
                    key: "remove",
                    value: function (e) {
                      Object(d["a"])(
                        Object(f["a"])(n.prototype),
                        "delete",
                        this
                      ).call(this, e),
                        this._update();
                    },
                  },
                  {
                    key: "toggle",
                    value: function (e) {
                      Object(d["a"])(
                        Object(f["a"])(n.prototype),
                        "has",
                        this
                      ).call(this, e)
                        ? Object(d["a"])(
                            Object(f["a"])(n.prototype),
                            "delete",
                            this
                          ).call(this, e)
                        : Object(d["a"])(
                            Object(f["a"])(n.prototype),
                            "add",
                            this
                          ).call(this, e),
                        this._update();
                    },
                  },
                  {
                    key: "replace",
                    value: function (e, t) {
                      Object(d["a"])(
                        Object(f["a"])(n.prototype),
                        "delete",
                        this
                      ).call(this, e),
                        Object(d["a"])(
                          Object(f["a"])(n.prototype),
                          "add",
                          this
                        ).call(this, t),
                        this._update();
                    },
                  },
                  {
                    key: "contains",
                    value: function (e) {
                      return Object(d["a"])(
                        Object(f["a"])(n.prototype),
                        "has",
                        this
                      ).call(this, e);
                    },
                  },
                  {
                    key: "toString",
                    value: function () {
                      return this.value;
                    },
                  },
                  {
                    key: "_update",
                    value: function () {
                      this.el.className = this.value;
                    },
                  },
                ]),
                n
              );
            })(Object(h["a"])(Set)),
            Qe = (function (e) {
              Object(b["a"])(n, e);
              var t = Object(g["a"])(n);
              function n(e, r, i, o) {
                var a;
                return (
                  Object(y["a"])(this, n),
                  (a = t.call(this, e, r, i)),
                  (a.props = {}),
                  (a.dataset = k["a"]),
                  o.bind(Object(v["a"])(a)),
                  (a.nodeType = 1),
                  (a.style = new We(Object(v["a"])(a))),
                  i.patchElement(Object(v["a"])(a)),
                  a
                );
              }
              return (
                Object(O["a"])(n, [
                  {
                    key: "_stopPropagation",
                    value: function (e) {
                      var t = this;
                      while ((t = t.parentNode)) {
                        var n = t.__handlers[e.type];
                        if (Object(k["f"])(n))
                          for (var r = n.length; r--; ) {
                            var i = n[r];
                            i._stop = !0;
                          }
                      }
                    },
                  },
                  {
                    key: "id",
                    get: function () {
                      return this.getAttribute(M);
                    },
                    set: function (e) {
                      this.setAttribute(M, e);
                    },
                  },
                  {
                    key: "className",
                    get: function () {
                      return this.getAttribute($) || "";
                    },
                    set: function (e) {
                      this.setAttribute($, e);
                    },
                  },
                  {
                    key: "cssText",
                    get: function () {
                      return this.getAttribute(z) || "";
                    },
                  },
                  {
                    key: "classList",
                    get: function () {
                      return new Ye(this.className, this);
                    },
                  },
                  {
                    key: "children",
                    get: function () {
                      return this.childNodes.filter(he);
                    },
                  },
                  {
                    key: "attributes",
                    get: function () {
                      var e = this.props,
                        t = Object.keys(e),
                        n = this.style.cssText,
                        r = t.map(function (t) {
                          return { name: t, value: e[t] };
                        });
                      return r.concat(n ? { name: z, value: n } : []);
                    },
                  },
                  {
                    key: "textContent",
                    get: function () {
                      for (
                        var e = "", t = this.childNodes, n = 0;
                        n < t.length;
                        n++
                      )
                        e += t[n].textContent;
                      return e;
                    },
                    set: function (e) {
                      Object(s["a"])(
                        Object(f["a"])(n.prototype),
                        "textContent",
                        e,
                        this,
                        !0
                      );
                    },
                  },
                  {
                    key: "hasAttribute",
                    value: function (e) {
                      return !Object(k["j"])(this.props[e]);
                    },
                  },
                  {
                    key: "hasAttributes",
                    value: function () {
                      return this.attributes.length > 0;
                    },
                  },
                  {
                    key: "focus",
                    value: function () {
                      this.setAttribute(q, !0);
                    },
                  },
                  {
                    key: "blur",
                    value: function () {
                      this.setAttribute(q, !1);
                    },
                  },
                  {
                    key: "setAttribute",
                    value: function (e, t) {
                      var n,
                        r,
                        i =
                          this.nodeName === H &&
                          !be(this) &&
                          !this.isAnyEventBinded();
                      switch (e) {
                        case z:
                          this.style.cssText = t;
                          break;
                        case M:
                          we.delete(this.uid),
                            (t = String(t)),
                            (this.props[e] = this.uid = t),
                            we.set(t, this);
                          break;
                        default:
                          (this.props[e] = t),
                            e.startsWith("data-") &&
                              (this.dataset === k["a"] &&
                                (this.dataset = Object.create(null)),
                              (this.dataset[
                                Object(k["p"])(e.replace(/^data-/, ""))
                              ] = t));
                          break;
                      }
                      e = me(e);
                      var o = {
                        path: ""
                          .concat(this._path, ".")
                          .concat(Object(k["p"])(e)),
                        value: t,
                      };
                      null === (r = (n = this.hooks).modifySetAttrPayload) ||
                        void 0 === r ||
                        r.call(n, this, e, o),
                        this.enqueueUpdate(o),
                        this.nodeName === H &&
                          (Object(k["p"])(e) === se
                            ? this.enqueueUpdate({
                                path: "".concat(this._path, ".", "nn"),
                                value: t ? le : this.isAnyEventBinded() ? H : V,
                              })
                            : i &&
                              be(this) &&
                              this.enqueueUpdate({
                                path: "".concat(this._path, ".", "nn"),
                                value: V,
                              }));
                    },
                  },
                  {
                    key: "removeAttribute",
                    value: function (e) {
                      var t,
                        n,
                        r,
                        i,
                        o =
                          this.nodeName === H &&
                          be(this) &&
                          !this.isAnyEventBinded();
                      if (e === z) this.style.cssText = "";
                      else {
                        var a =
                          null === (n = (t = this.hooks).onRemoveAttribute) ||
                          void 0 === n
                            ? void 0
                            : n.call(t, this, e);
                        if (a) return;
                        if (!this.props.hasOwnProperty(e)) return;
                        delete this.props[e];
                      }
                      e = me(e);
                      var c = {
                        path: ""
                          .concat(this._path, ".")
                          .concat(Object(k["p"])(e)),
                        value: "",
                      };
                      null === (i = (r = this.hooks).modifyRmAttrPayload) ||
                        void 0 === i ||
                        i.call(r, this, e, c),
                        this.enqueueUpdate(c),
                        this.nodeName === H &&
                          (Object(k["p"])(e) === se
                            ? this.enqueueUpdate({
                                path: "".concat(this._path, ".", "nn"),
                                value: this.isAnyEventBinded()
                                  ? H
                                  : be(this)
                                  ? V
                                  : W,
                              })
                            : o &&
                              !be(this) &&
                              this.enqueueUpdate({
                                path: "".concat(this._path, ".", "nn"),
                                value: W,
                              }));
                    },
                  },
                  {
                    key: "getAttribute",
                    value: function (e) {
                      var t = e === z ? this.style.cssText : this.props[e];
                      return null !== t && void 0 !== t ? t : "";
                    },
                  },
                  {
                    key: "getElementsByTagName",
                    value: function (e) {
                      var t = this;
                      return Ke(this, function (n) {
                        return n.nodeName === e || ("*" === e && t !== n);
                      });
                    },
                  },
                  {
                    key: "getElementsByClassName",
                    value: function (e) {
                      return Ke(this, function (t) {
                        var n = t.classList,
                          r = e.trim().split(/\s+/);
                        return r.every(function (e) {
                          return n.has(e);
                        });
                      });
                    },
                  },
                  {
                    key: "dispatchEvent",
                    value: function (e) {
                      var t = e.cancelable,
                        n = this.__handlers[e.type];
                      if (!Object(k["f"])(n)) return !1;
                      for (var r = n.length; r--; ) {
                        var i = n[r],
                          o = void 0;
                        if (
                          (i._stop ? (i._stop = !1) : (o = i.call(this, e)),
                          (!1 === o || e._end) &&
                            t &&
                            (e.defaultPrevented = !0),
                          e._end && e._stop)
                        )
                          break;
                      }
                      return (
                        e._stop ? this._stopPropagation(e) : (e._stop = !0),
                        null != n
                      );
                    },
                  },
                  {
                    key: "addEventListener",
                    value: function (e, t, r) {
                      var i = this.nodeName,
                        o = this.hooks.getSpecialNodes();
                      !this.isAnyEventBinded() &&
                        o.indexOf(i) > -1 &&
                        this.enqueueUpdate({
                          path: "".concat(this._path, ".", "nn"),
                          value: i,
                        }),
                        Object(d["a"])(
                          Object(f["a"])(n.prototype),
                          "addEventListener",
                          this
                        ).call(this, e, t, r);
                    },
                  },
                  {
                    key: "removeEventListener",
                    value: function (e, t) {
                      Object(d["a"])(
                        Object(f["a"])(n.prototype),
                        "removeEventListener",
                        this
                      ).call(this, e, t);
                      var r = this.nodeName,
                        i = this.hooks.getSpecialNodes();
                      !this.isAnyEventBinded() &&
                        i.indexOf(r) > -1 &&
                        this.enqueueUpdate({
                          path: "".concat(this._path, ".", "nn"),
                          value: be(this)
                            ? "static-".concat(r)
                            : "pure-".concat(r),
                        });
                    },
                  },
                ]),
                n
              );
            })(Ee);
          Qe = E(
            [
              Object(w["d"])(),
              _(0, Object(w["c"])(T.TaroNodeImpl)),
              _(1, Object(w["c"])(T.TaroElementFactory)),
              _(2, Object(w["c"])(T.Hooks)),
              _(3, Object(w["c"])(T.TaroElementImpl)),
              S("design:paramtypes", [Function, Function, Function, Function]),
            ],
            Qe
          );
          var Ze = Array.isArray,
            Xe =
              "object" ==
                ("undefined" === typeof r ? "undefined" : Object(j["a"])(r)) &&
              r &&
              r.Object === Object &&
              r,
            et =
              "object" ==
                ("undefined" === typeof self
                  ? "undefined"
                  : Object(j["a"])(self)) &&
              self &&
              self.Object === Object &&
              self,
            tt = Xe || et || Function("return this")(),
            nt = tt.Symbol,
            rt = Object.prototype,
            it = rt.hasOwnProperty,
            ot = rt.toString,
            at = nt ? nt.toStringTag : void 0;
          function ct(e) {
            var t = it.call(e, at),
              n = e[at];
            try {
              e[at] = void 0;
              var r = !0;
            } catch (e) {}
            var i = ot.call(e);
            return r && (t ? (e[at] = n) : delete e[at]), i;
          }
          var ut = Object.prototype,
            st = ut.toString;
          function lt(e) {
            return st.call(e);
          }
          var dt = "[object Null]",
            ft = "[object Undefined]",
            ht = nt ? nt.toStringTag : void 0;
          function pt(e) {
            return null == e
              ? void 0 === e
                ? ft
                : dt
              : ht && ht in Object(e)
              ? ct(e)
              : lt(e);
          }
          function vt(e) {
            return null != e && "object" == Object(j["a"])(e);
          }
          var bt = "[object Symbol]";
          function gt(e) {
            return "symbol" == Object(j["a"])(e) || (vt(e) && pt(e) == bt);
          }
          var mt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            yt = /^\w*$/;
          function Ot(e, t) {
            if (Ze(e)) return !1;
            var n = Object(j["a"])(e);
            return (
              !(
                "number" != n &&
                "symbol" != n &&
                "boolean" != n &&
                null != e &&
                !gt(e)
              ) ||
              yt.test(e) ||
              !mt.test(e) ||
              (null != t && e in Object(t))
            );
          }
          function jt(e) {
            var t = Object(j["a"])(e);
            return null != e && ("object" == t || "function" == t);
          }
          var wt = "[object AsyncFunction]",
            kt = "[object Function]",
            Et = "[object GeneratorFunction]",
            _t = "[object Proxy]";
          function St(e) {
            if (!jt(e)) return !1;
            var t = pt(e);
            return t == kt || t == Et || t == wt || t == _t;
          }
          var Tt = tt["__core-js_shared__"],
            Pt = (function () {
              var e = /[^.]+$/.exec((Tt && Tt.keys && Tt.keys.IE_PROTO) || "");
              return e ? "Symbol(src)_1." + e : "";
            })();
          function xt(e) {
            return !!Pt && Pt in e;
          }
          var Ct = Function.prototype,
            At = Ct.toString;
          function It(e) {
            if (null != e) {
              try {
                return At.call(e);
              } catch (e) {}
              try {
                return e + "";
              } catch (e) {}
            }
            return "";
          }
          var Nt = /[\\^$.*+?()[\]{}|]/g,
            Lt = /^\[object .+?Constructor\]$/,
            Bt = Function.prototype,
            Ft = Object.prototype,
            Rt = Bt.toString,
            Dt = Ft.hasOwnProperty,
            Mt = RegExp(
              "^" +
                Rt.call(Dt)
                  .replace(Nt, "\\$&")
                  .replace(
                    /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                    "$1.*?"
                  ) +
                "$"
            );
          function Ut(e) {
            if (!jt(e) || xt(e)) return !1;
            var t = St(e) ? Mt : Lt;
            return t.test(It(e));
          }
          function $t(e, t) {
            return null == e ? void 0 : e[t];
          }
          function zt(e, t) {
            var n = $t(e, t);
            return Ut(n) ? n : void 0;
          }
          var qt = zt(Object, "create");
          function Ht() {
            (this.__data__ = qt ? qt(null) : {}), (this.size = 0);
          }
          function Vt(e) {
            var t = this.has(e) && delete this.__data__[e];
            return (this.size -= t ? 1 : 0), t;
          }
          var Wt = "__lodash_hash_undefined__",
            Gt = Object.prototype,
            Kt = Gt.hasOwnProperty;
          function Jt(e) {
            var t = this.__data__;
            if (qt) {
              var n = t[e];
              return n === Wt ? void 0 : n;
            }
            return Kt.call(t, e) ? t[e] : void 0;
          }
          var Yt = Object.prototype,
            Qt = Yt.hasOwnProperty;
          function Zt(e) {
            var t = this.__data__;
            return qt ? void 0 !== t[e] : Qt.call(t, e);
          }
          var Xt = "__lodash_hash_undefined__";
          function en(e, t) {
            var n = this.__data__;
            return (
              (this.size += this.has(e) ? 0 : 1),
              (n[e] = qt && void 0 === t ? Xt : t),
              this
            );
          }
          function tn(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            this.clear();
            while (++t < n) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          function nn() {
            (this.__data__ = []), (this.size = 0);
          }
          function rn(e, t) {
            return e === t || (e !== e && t !== t);
          }
          function on(e, t) {
            var n = e.length;
            while (n--) if (rn(e[n][0], t)) return n;
            return -1;
          }
          (tn.prototype.clear = Ht),
            (tn.prototype["delete"] = Vt),
            (tn.prototype.get = Jt),
            (tn.prototype.has = Zt),
            (tn.prototype.set = en);
          var an = Array.prototype,
            cn = an.splice;
          function un(e) {
            var t = this.__data__,
              n = on(t, e);
            if (n < 0) return !1;
            var r = t.length - 1;
            return n == r ? t.pop() : cn.call(t, n, 1), --this.size, !0;
          }
          function sn(e) {
            var t = this.__data__,
              n = on(t, e);
            return n < 0 ? void 0 : t[n][1];
          }
          function ln(e) {
            return on(this.__data__, e) > -1;
          }
          function dn(e, t) {
            var n = this.__data__,
              r = on(n, e);
            return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
          }
          function fn(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            this.clear();
            while (++t < n) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          (fn.prototype.clear = nn),
            (fn.prototype["delete"] = un),
            (fn.prototype.get = sn),
            (fn.prototype.has = ln),
            (fn.prototype.set = dn);
          var hn = zt(tt, "Map");
          function pn() {
            (this.size = 0),
              (this.__data__ = {
                hash: new tn(),
                map: new (hn || fn)(),
                string: new tn(),
              });
          }
          function vn(e) {
            var t = Object(j["a"])(e);
            return "string" == t ||
              "number" == t ||
              "symbol" == t ||
              "boolean" == t
              ? "__proto__" !== e
              : null === e;
          }
          function bn(e, t) {
            var n = e.__data__;
            return vn(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
          }
          function gn(e) {
            var t = bn(this, e)["delete"](e);
            return (this.size -= t ? 1 : 0), t;
          }
          function mn(e) {
            return bn(this, e).get(e);
          }
          function yn(e) {
            return bn(this, e).has(e);
          }
          function On(e, t) {
            var n = bn(this, e),
              r = n.size;
            return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
          }
          function jn(e) {
            var t = -1,
              n = null == e ? 0 : e.length;
            this.clear();
            while (++t < n) {
              var r = e[t];
              this.set(r[0], r[1]);
            }
          }
          (jn.prototype.clear = pn),
            (jn.prototype["delete"] = gn),
            (jn.prototype.get = mn),
            (jn.prototype.has = yn),
            (jn.prototype.set = On);
          var wn = "Expected a function";
          function kn(e, t) {
            if ("function" != typeof e || (null != t && "function" != typeof t))
              throw new TypeError(wn);
            var n = function n() {
              var r = arguments,
                i = t ? t.apply(this, r) : r[0],
                o = n.cache;
              if (o.has(i)) return o.get(i);
              var a = e.apply(this, r);
              return (n.cache = o.set(i, a) || o), a;
            };
            return (n.cache = new (kn.Cache || jn)()), n;
          }
          kn.Cache = jn;
          var En = 500;
          function _n(e) {
            var t = kn(e, function (e) {
                return n.size === En && n.clear(), e;
              }),
              n = t.cache;
            return t;
          }
          var Sn =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            Tn = /\\(\\)?/g,
            Pn = _n(function (e) {
              var t = [];
              return (
                46 === e.charCodeAt(0) && t.push(""),
                e.replace(Sn, function (e, n, r, i) {
                  t.push(r ? i.replace(Tn, "$1") : n || e);
                }),
                t
              );
            });
          function xn(e, t) {
            var n = -1,
              r = null == e ? 0 : e.length,
              i = Array(r);
            while (++n < r) i[n] = t(e[n], n, e);
            return i;
          }
          var Cn = 1 / 0,
            An = nt ? nt.prototype : void 0,
            In = An ? An.toString : void 0;
          function Nn(e) {
            if ("string" == typeof e) return e;
            if (Ze(e)) return xn(e, Nn) + "";
            if (gt(e)) return In ? In.call(e) : "";
            var t = e + "";
            return "0" == t && 1 / e == -Cn ? "-0" : t;
          }
          function Ln(e) {
            return null == e ? "" : Nn(e);
          }
          function Bn(e, t) {
            return Ze(e) ? e : Ot(e, t) ? [e] : Pn(Ln(e));
          }
          var Fn = 1 / 0;
          function Rn(e) {
            if ("string" == typeof e || gt(e)) return e;
            var t = e + "";
            return "0" == t && 1 / e == -Fn ? "-0" : t;
          }
          function Dn(e, t) {
            t = Bn(t, e);
            var n = 0,
              r = t.length;
            while (null != e && n < r) e = e[Rn(t[n++])];
            return n && n == r ? e : void 0;
          }
          function Mn(e, t, n) {
            var r = null == e ? void 0 : Dn(e, t);
            return void 0 === r ? n : r;
          }
          var Un = { prerender: !0, debug: !1 },
            $n = (function () {
              function e() {
                Object(y["a"])(this, e), (this.recorder = new Map());
              }
              return (
                Object(O["a"])(e, [
                  {
                    key: "start",
                    value: function (e) {
                      Un.debug && this.recorder.set(e, Date.now());
                    },
                  },
                  {
                    key: "stop",
                    value: function (e) {
                      if (Un.debug) {
                        var t = Date.now(),
                          n = this.recorder.get(e),
                          r = t - n;
                        console.log(
                          "".concat(e, " \u65f6\u957f\uff1a ").concat(r, "ms")
                        );
                      }
                    },
                  },
                ]),
                e
              );
            })(),
            zn = new $n(),
            qn = fe(),
            Hn = (function (e) {
              Object(b["a"])(n, e);
              var t = Object(g["a"])(n);
              function n(e, r, i, o, a) {
                var c;
                return (
                  Object(y["a"])(this, n),
                  (c = t.call(this, e, r, i, o)),
                  (c.pendingFlush = !1),
                  (c.updatePayloads = []),
                  (c.updateCallbacks = []),
                  (c.pendingUpdate = !1),
                  (c.ctx = null),
                  (c.nodeName = A),
                  (c.eventCenter = a),
                  c
                );
              }
              return (
                Object(O["a"])(n, [
                  {
                    key: "_path",
                    get: function () {
                      return A;
                    },
                  },
                  {
                    key: "_root",
                    get: function () {
                      return this;
                    },
                  },
                  {
                    key: "enqueueUpdate",
                    value: function (e) {
                      this.updatePayloads.push(e),
                        this.pendingUpdate ||
                          null === this.ctx ||
                          this.performUpdate();
                    },
                  },
                  {
                    key: "performUpdate",
                    value: function () {
                      var e = this,
                        t =
                          arguments.length > 0 &&
                          void 0 !== arguments[0] &&
                          arguments[0],
                        n = arguments.length > 1 ? arguments[1] : void 0;
                      this.pendingUpdate = !0;
                      var r = this.ctx;
                      setTimeout(function () {
                        zn.start(x);
                        var i = Object.create(null),
                          o = new Set(t ? ["root.cn.[0]", "root.cn[0]"] : []);
                        while (e.updatePayloads.length > 0) {
                          var a = e.updatePayloads.shift(),
                            c = a.path,
                            u = a.value;
                          c.endsWith("cn") && o.add(c), (i[c] = u);
                        }
                        var s = function (e) {
                          o.forEach(function (t) {
                            e.includes(t) && e !== t && delete i[e];
                          });
                          var t = i[e];
                          Object(k["h"])(t) && (i[e] = t());
                        };
                        for (var l in i) s(l);
                        if (Object(k["h"])(n)) n(i);
                        else {
                          e.pendingUpdate = !1;
                          var d = [],
                            f = new Map(),
                            h = {};
                          if (!t) {
                            for (var p in i) {
                              for (
                                var v = p.split("."), b = !1, g = v.length;
                                g > 0;
                                g--
                              ) {
                                var y = v.slice(0, g).join("."),
                                  O = Mn(r.__data__ || r.data, y);
                                if (O && O.nn && O.nn === X) {
                                  var j = O.uid,
                                    w = r.selectComponent("#".concat(j)),
                                    E = v.slice(g).join(".");
                                  w &&
                                    ((b = !0),
                                    f.set(
                                      w,
                                      Object.assign(
                                        Object.assign({}, f.get(w) || {}),
                                        Object(m["a"])({}, "i.".concat(E), i[p])
                                      )
                                    ));
                                  break;
                                }
                              }
                              b || (h[p] = i[p]);
                            }
                            f.size > 0 &&
                              f.forEach(function (e, t) {
                                d.push({ ctx: t, data: e });
                              });
                          }
                          var _ = d.length;
                          if (_) {
                            var S = "".concat(e._path, "_update_").concat(qn()),
                              T = e.eventCenter,
                              P = 0;
                            T.once(
                              S,
                              function () {
                                P++,
                                  P === _ + 1 &&
                                    (zn.stop(x),
                                    e.pendingFlush || e.flushUpdateCallback(),
                                    t && zn.stop(C));
                              },
                              T
                            ),
                              d.forEach(function (e) {
                                e.ctx.setData(e.data, function () {
                                    console.log('end e.data', e.data);
                                  T.trigger(S);
                                });
                              }),
                              Object.keys(h).length &&
                                r.setData(h, function () {
                                    console.log('end h', h);
                                  T.trigger(S);
                                });
                          } else
                            r.setData(i, function () {
                                console.log('end i', i, Date.now() - global.tttt);

                              zn.stop(x),
                                e.pendingFlush || e.flushUpdateCallback(),
                                t && zn.stop(C);
                            });
                        }
                      }, 0);
                    },
                  },
                  {
                    key: "enqueueUpdateCallback",
                    value: function (e, t) {
                      this.updateCallbacks.push(function () {
                        t ? e.call(t) : e();
                      });
                    },
                  },
                  {
                    key: "flushUpdateCallback",
                    value: function () {
                      this.pendingFlush = !1;
                      var e = this.updateCallbacks.slice(0);
                      this.updateCallbacks.length = 0;
                      for (var t = 0; t < e.length; t++) e[t]();
                    },
                  },
                ]),
                n
              );
            })(Qe);
          Hn = E(
            [
              Object(w["d"])(),
              _(0, Object(w["c"])(T.TaroNodeImpl)),
              _(1, Object(w["c"])(T.TaroElementFactory)),
              _(2, Object(w["c"])(T.Hooks)),
              _(3, Object(w["c"])(T.TaroElementImpl)),
              _(4, Object(w["c"])(T.eventCenter)),
              S("design:paramtypes", [
                Function,
                Function,
                Function,
                Function,
                Function,
              ]),
            ],
            Hn
          );
          var Vn = (function (e) {
              Object(b["a"])(n, e);
              var t = Object(g["a"])(n);
              function n() {
                return Object(y["a"])(this, n), t.apply(this, arguments);
              }
              return (
                Object(O["a"])(n, [
                  {
                    key: "value",
                    get: function () {
                      var e = this.props[Y];
                      return null == e ? "" : e;
                    },
                    set: function (e) {
                      this.setAttribute(Y, e);
                    },
                  },
                  {
                    key: "dispatchEvent",
                    value: function (e) {
                      if (e.mpEvent) {
                        var t = e.mpEvent.detail.value;
                        e.type === Z
                          ? (this.props.value = t)
                          : e.type === Q && (this.value = t);
                      }
                      return Object(d["a"])(
                        Object(f["a"])(n.prototype),
                        "dispatchEvent",
                        this
                      ).call(this, e);
                    },
                  },
                ]),
                n
              );
            })(Qe),
            Wn = (function (e) {
              Object(b["a"])(n, e);
              var t = Object(g["a"])(n);
              function n() {
                return Object(y["a"])(this, n), t.apply(this, arguments);
              }
              return n;
            })(Qe);
          function Gn() {
            return { index: 0, column: 0, line: 0 };
          }
          function Kn(e, t, n) {
            for (var r = e.index, i = (e.index = r + n), o = r; o < i; o++) {
              var a = t.charAt(o);
              "\n" === a ? (e.line++, (e.column = 0)) : e.column++;
            }
          }
          function Jn(e, t, n) {
            var r = n - e.index;
            return Kn(e, t, r);
          }
          function Yn(e) {
            return { index: e.index, line: e.line, column: e.column };
          }
          var Qn = /\s/;
          function Zn(e) {
            return Qn.test(e);
          }
          var Xn = /=/;
          function er(e) {
            return Xn.test(e);
          }
          function tr(e) {
            var t = e.toLowerCase();
            return !!Un.html.skipElements.has(t);
          }
          var nr = /[A-Za-z0-9]/;
          function rr(e, t) {
            while (1) {
              var n = e.indexOf("<", t);
              if (-1 === n) return n;
              var r = e.charAt(n + 1);
              if ("/" === r || "!" === r || nr.test(r)) return n;
              t = n + 1;
            }
          }
          function ir(e, t, n) {
            if (!Zn(n.charAt(e))) return !1;
            for (var r = n.length, i = e - 1; i > t; i--) {
              var o = n.charAt(i);
              if (!Zn(o)) {
                if (er(o)) return !1;
                break;
              }
            }
            for (var a = e + 1; a < r; a++) {
              var c = n.charAt(a);
              if (!Zn(c)) return !er(c);
            }
          }
          var or = (function () {
            function e(t) {
              Object(y["a"])(this, e),
                (this.tokens = []),
                (this.position = Gn()),
                (this.html = t);
            }
            return (
              Object(O["a"])(e, [
                {
                  key: "scan",
                  value: function () {
                    var e = this.html,
                      t = this.position,
                      n = e.length;
                    while (t.index < n) {
                      var r = t.index;
                      if ((this.scanText(), t.index === r)) {
                        var i = e.startsWith("!--", r + 1);
                        if (i) this.scanComment();
                        else {
                          var o = this.scanTag();
                          tr(o) && this.scanSkipTag(o);
                        }
                      }
                    }
                    return this.tokens;
                  },
                },
                {
                  key: "scanText",
                  value: function () {
                    var e = "text",
                      t = this.html,
                      n = this.position,
                      r = rr(t, n.index);
                    if (r !== n.index) {
                      -1 === r && (r = t.length);
                      var i = Yn(n),
                        o = t.slice(n.index, r);
                      Jn(n, t, r);
                      var a = Yn(n);
                      this.tokens.push({
                        type: e,
                        content: o,
                        position: { start: i, end: a },
                      });
                    }
                  },
                },
                {
                  key: "scanComment",
                  value: function () {
                    var e = "comment",
                      t = this.html,
                      n = this.position,
                      r = Yn(n);
                    Kn(n, t, 4);
                    var i = t.indexOf("--\x3e", n.index),
                      o = i + 3;
                    -1 === i && (i = o = t.length);
                    var a = t.slice(n.index, i);
                    Jn(n, t, o),
                      this.tokens.push({
                        type: e,
                        content: a,
                        position: { start: r, end: Yn(n) },
                      });
                  },
                },
                {
                  key: "scanTag",
                  value: function () {
                    this.scanTagStart();
                    var e = this.scanTagName();
                    return this.scanAttrs(), this.scanTagEnd(), e;
                  },
                },
                {
                  key: "scanTagStart",
                  value: function () {
                    var e = "tag-start",
                      t = this.html,
                      n = this.position,
                      r = t.charAt(n.index + 1),
                      i = "/" === r,
                      o = Yn(n);
                    Kn(n, t, i ? 2 : 1),
                      this.tokens.push({
                        type: e,
                        close: i,
                        position: { start: o },
                      });
                  },
                },
                {
                  key: "scanTagEnd",
                  value: function () {
                    var e = "tag-end",
                      t = this.html,
                      n = this.position,
                      r = t.charAt(n.index),
                      i = "/" === r;
                    Kn(n, t, i ? 2 : 1);
                    var o = Yn(n);
                    this.tokens.push({
                      type: e,
                      close: i,
                      position: { end: o },
                    });
                  },
                },
                {
                  key: "scanTagName",
                  value: function () {
                    var e = "tag",
                      t = this.html,
                      n = this.position,
                      r = t.length,
                      i = n.index;
                    while (i < r) {
                      var o = t.charAt(i),
                        a = !(Zn(o) || "/" === o || ">" === o);
                      if (a) break;
                      i++;
                    }
                    var c = i + 1;
                    while (c < r) {
                      var u = t.charAt(c),
                        s = !(Zn(u) || "/" === u || ">" === u);
                      if (!s) break;
                      c++;
                    }
                    Jn(n, t, c);
                    var l = t.slice(i, c);
                    return this.tokens.push({ type: e, content: l }), l;
                  },
                },
                {
                  key: "scanAttrs",
                  value: function () {
                    var e = this.html,
                      t = this.position,
                      n = this.tokens,
                      r = t.index,
                      i = null,
                      o = r,
                      a = [],
                      c = e.length;
                    while (r < c) {
                      var u = e.charAt(r);
                      if (i) {
                        var s = u === i;
                        s && (i = null), r++;
                      } else {
                        var l = "/" === u || ">" === u;
                        if (l) {
                          r !== o && a.push(e.slice(o, r));
                          break;
                        }
                        if (ir(r, o, e))
                          r !== o && a.push(e.slice(o, r)), (o = r + 1), r++;
                        else {
                          var d = "'" === u || '"' === u;
                          d ? ((i = u), r++) : r++;
                        }
                      }
                    }
                    Jn(t, e, r);
                    for (var f = a.length, h = "attribute", p = 0; p < f; p++) {
                      var v = a[p],
                        b = v.includes("=");
                      if (b) {
                        var g = a[p + 1];
                        if (g && g.startsWith("=")) {
                          if (g.length > 1) {
                            var m = v + g;
                            n.push({ type: h, content: m }), (p += 1);
                            continue;
                          }
                          var y = a[p + 2];
                          if (((p += 1), y)) {
                            var O = v + "=" + y;
                            n.push({ type: h, content: O }), (p += 1);
                            continue;
                          }
                        }
                      }
                      if (v.endsWith("=")) {
                        var j = a[p + 1];
                        if (j && !j.includes("=")) {
                          var w = v + j;
                          n.push({ type: h, content: w }), (p += 1);
                          continue;
                        }
                        var k = v.slice(0, -1);
                        n.push({ type: h, content: k });
                      } else n.push({ type: h, content: v });
                    }
                  },
                },
                {
                  key: "scanSkipTag",
                  value: function (e) {
                    var t = this.html,
                      n = this.position,
                      r = e.toLowerCase(),
                      i = t.length;
                    while (n.index < i) {
                      var o = t.indexOf("</", n.index);
                      if (-1 === o) {
                        this.scanText();
                        break;
                      }
                      Jn(n, t, o);
                      var a = this.scanTag();
                      if (r === a.toLowerCase()) break;
                    }
                  },
                },
              ]),
              e
            );
          })();
          function ar(e, t) {
            for (
              var n = Object.create(null), r = e.split(","), i = 0;
              i < r.length;
              i++
            )
              n[r[i]] = !0;
            return t
              ? function (e) {
                  return !!n[e.toLowerCase()];
                }
              : function (e) {
                  return !!n[e];
                };
          }
          var cr = { img: "image", iframe: "web-view" },
            ur = Object.keys(k["e"])
              .map(function (e) {
                return e.toLowerCase();
              })
              .join(","),
            sr = ar(ur, !0),
            lr = ar(
              "a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b",
              !0
            ),
            dr = ar(
              "address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt",
              !0
            );
          function fr(e) {
            var t = e.charAt(0),
              n = e.length - 1,
              r = '"' === t || "'" === t;
            return r && t === e.charAt(n) ? e.slice(1, n) : e;
          }
          var hr = "{",
            pr = "}",
            vr = ".",
            br = "#",
            gr = ">",
            mr = "~",
            yr = "+",
            Or = (function () {
              function e() {
                Object(y["a"])(this, e), (this.styles = []);
              }
              return (
                Object(O["a"])(e, [
                  {
                    key: "extractStyle",
                    value: function (e) {
                      var t = this,
                        n = /<style\s?[^>]*>((.|\n|\s)+?)<\/style>/g,
                        r = e;
                      return (
                        (r = r.replace(n, function (e, n) {
                          var r = n.trim();
                          return t.stringToSelector(r), "";
                        })),
                        r.trim()
                      );
                    },
                  },
                  {
                    key: "stringToSelector",
                    value: function (e) {
                      var t = this,
                        n = e.indexOf(hr),
                        r = function () {
                          var r = e.indexOf(pr),
                            i = e.slice(0, n).trim(),
                            o = e.slice(n + 1, r);
                          (o = o.replace(/:(.*);/g, function (e, t) {
                            var n = t.trim().replace(/ +/g, "+++");
                            return ":".concat(n, ";");
                          })),
                            (o = o.replace(/ /g, "")),
                            (o = o.replace(/\+\+\+/g, " ")),
                            /;$/.test(o) || (o += ";"),
                            i.split(",").forEach(function (e) {
                              var n = t.parseSelector(e);
                              t.styles.push({ content: o, selectorList: n });
                            }),
                            (e = e.slice(r + 1)),
                            (n = e.indexOf(hr));
                        };
                      while (n > -1) r();
                    },
                  },
                  {
                    key: "parseSelector",
                    value: function (e) {
                      var t = e
                          .trim()
                          .replace(/ *([>~+]) */g, " $1")
                          .replace(/ +/g, " ")
                          .split(" "),
                        n = t.map(function (e) {
                          var t = e.charAt(0),
                            n = {
                              isChild: t === gr,
                              isGeneralSibling: t === mr,
                              isAdjacentSibling: t === yr,
                              tag: null,
                              id: null,
                              class: [],
                              attrs: [],
                            };
                          return (
                            (e = e.replace(/^[>~+]/, "")),
                            (e = e.replace(/\[(.+?)\]/g, function (e, t) {
                              var r = t.split("="),
                                i = Object(u["a"])(r, 2),
                                o = i[0],
                                a = i[1],
                                c = -1 === t.indexOf("="),
                                s = { all: c, key: o, value: c ? null : a };
                              return n.attrs.push(s), "";
                            })),
                            (e = e.replace(
                              /([.#][A-Za-z0-9-_]+)/g,
                              function (e, t) {
                                return (
                                  t[0] === br
                                    ? (n.id = t.substr(1))
                                    : t[0] === vr && n.class.push(t.substr(1)),
                                  ""
                                );
                              }
                            )),
                            "" !== e && (n.tag = e),
                            n
                          );
                        });
                      return n;
                    },
                  },
                  {
                    key: "matchStyle",
                    value: function (e, t, n) {
                      var r = this,
                        i = wr(this.styles).reduce(function (i, o, a) {
                          var c = o.content,
                            u = o.selectorList,
                            s = n[a],
                            l = u[s],
                            d = u[s + 1];
                          ((null === d || void 0 === d
                            ? void 0
                            : d.isGeneralSibling) ||
                            (null === d || void 0 === d
                              ? void 0
                              : d.isAdjacentSibling)) &&
                            ((l = d), (s += 1), (n[a] += 1));
                          var f = r.matchCurrent(e, t, l);
                          if (f && l.isGeneralSibling) {
                            var h = jr(t);
                            while (h) {
                              if (
                                h.h5tagName &&
                                r.matchCurrent(h.h5tagName, h, u[s - 1])
                              ) {
                                f = !0;
                                break;
                              }
                              (h = jr(h)), (f = !1);
                            }
                          }
                          if (f && l.isAdjacentSibling) {
                            var p = jr(t);
                            if (p && p.h5tagName) {
                              var v = r.matchCurrent(p.h5tagName, p, u[s - 1]);
                              v || (f = !1);
                            } else f = !1;
                          }
                          if (f) {
                            if (s === u.length - 1) return i + c;
                            s < u.length - 1 && (n[a] += 1);
                          } else l.isChild && s > 0 && ((n[a] -= 1), r.matchCurrent(e, t, u[n[a]]) && (n[a] += 1));
                          return i;
                        }, "");
                      return i;
                    },
                  },
                  {
                    key: "matchCurrent",
                    value: function (e, t, n) {
                      if (n.tag && n.tag !== e) return !1;
                      if (n.id && n.id !== t.id) return !1;
                      if (n.class.length)
                        for (
                          var r = t.className.split(" "), i = 0;
                          i < n.class.length;
                          i++
                        ) {
                          var o = n.class[i];
                          if (-1 === r.indexOf(o)) return !1;
                        }
                      if (n.attrs.length)
                        for (var a = 0; a < n.attrs.length; a++) {
                          var c = n.attrs[a],
                            u = c.all,
                            s = c.key,
                            l = c.value;
                          if (u && !t.hasAttribute(s)) return !1;
                          var d = t.getAttribute(s);
                          if (d !== fr(l || "")) return !1;
                        }
                      return !0;
                    },
                  },
                ]),
                e
              );
            })();
          function jr(e) {
            var t = e.parentElement;
            if (!t) return null;
            var n = e.previousSibling;
            return n ? (1 === n.nodeType ? n : jr(n)) : null;
          }
          function wr(e) {
            return e.sort(function (e, t) {
              var n = kr(e.selectorList),
                r = kr(t.selectorList);
              if (n !== r) return n - r;
              var i = Er(e.selectorList),
                o = Er(t.selectorList);
              if (i !== o) return i - o;
              var a = _r(e.selectorList),
                c = _r(t.selectorList);
              return a - c;
            });
          }
          function kr(e) {
            return e.reduce(function (e, t) {
              return e + (t.id ? 1 : 0);
            }, 0);
          }
          function Er(e) {
            return e.reduce(function (e, t) {
              return e + t.class.length + t.attrs.length;
            }, 0);
          }
          function _r(e) {
            return e.reduce(function (e, t) {
              return e + (t.tag ? 1 : 0);
            }, 0);
          }
          var Sr = {
            li: ["ul", "ol", "menu"],
            dt: ["dl"],
            dd: ["dl"],
            tbody: ["table"],
            thead: ["table"],
            tfoot: ["table"],
            tr: ["table"],
            td: ["table"],
          };
          function Tr(e, t) {
            var n = Sr[e];
            if (n) {
              var r = t.length - 1;
              while (r >= 0) {
                var i = t[r].tagName;
                if (i === e) break;
                if (n && n.includes(i)) return !0;
                r--;
              }
            }
            return !1;
          }
          function Pr(e) {
            return Un.html.renderHTMLTag
              ? e
              : cr[e]
              ? cr[e]
              : sr(e)
              ? e
              : dr(e)
              ? "view"
              : lr(e)
              ? "text"
              : "view";
          }
          function xr(e) {
            var t = "=",
              n = e.indexOf(t);
            if (-1 === n) return [e];
            var r = e.slice(0, n).trim(),
              i = e.slice(n + t.length).trim();
            return [r, i];
          }
          function Cr(e, t, n, r) {
            return e
              .filter(function (e) {
                return (
                  "comment" !== e.type &&
                  ("text" !== e.type || "" !== e.content)
                );
              })
              .map(function (e) {
                if ("text" === e.type) {
                  var i = t.createTextNode(e.content);
                  return Object(k["h"])(Un.html.transformText)
                    ? Un.html.transformText(i, e)
                    : (null === r || void 0 === r || r.appendChild(i), i);
                }
                var o = t.createElement(Pr(e.tagName));
                (o.h5tagName = e.tagName),
                  null === r || void 0 === r || r.appendChild(o),
                  Un.html.renderHTMLTag ||
                    (o.className = "h5-".concat(e.tagName));
                for (var a = 0; a < e.attributes.length; a++) {
                  var c = e.attributes[a],
                    s = xr(c),
                    l = Object(u["a"])(s, 2),
                    d = l[0],
                    f = l[1];
                  if ("class" === d) o.className += " " + fr(f);
                  else {
                    if ("o" === d[0] && "n" === d[1]) continue;
                    o.setAttribute(d, null == f || fr(f));
                  }
                }
                var h = n.styleTagParser,
                  p = n.descendantList,
                  v = p.slice(),
                  b = h.matchStyle(e.tagName, o, v);
                return (
                  o.setAttribute("style", b + o.style.cssText),
                  Cr(
                    e.children,
                    t,
                    { styleTagParser: h, descendantList: v },
                    o
                  ),
                  Object(k["h"])(Un.html.transformElement)
                    ? Un.html.transformElement(o, e)
                    : o
                );
              });
          }
          function Ar(e, t) {
            var n = new Or();
            e = n.extractStyle(e);
            var r = new or(e).scan(),
              i = {
                tagName: "",
                children: [],
                type: "element",
                attributes: [],
              },
              o = { tokens: r, options: Un, cursor: 0, stack: [i] };
            return (
              Ir(o),
              Cr(i.children, t, {
                styleTagParser: n,
                descendantList: Array(n.styles.length).fill(0),
              })
            );
          }
          function Ir(e) {
            var t = e.tokens,
              n = e.stack,
              r = e.cursor,
              i = t.length,
              o = n[n.length - 1].children;
            while (r < i) {
              var a = t[r];
              if ("tag-start" === a.type) {
                var c = t[++r];
                r++;
                var u = c.content.toLowerCase();
                if (a.close) {
                  var s = n.length,
                    l = !1;
                  while (--s > -1)
                    if (n[s].tagName === u) {
                      l = !0;
                      break;
                    }
                  while (r < i) {
                    var d = t[r];
                    if ("tag-end" !== d.type) break;
                    r++;
                  }
                  if (l) {
                    n.splice(s);
                    break;
                  }
                } else {
                  var f = Un.html.closingElements.has(u),
                    h = f;
                  if ((h && (h = !Tr(u, n)), h)) {
                    var p = n.length - 1;
                    while (p > 0) {
                      if (u === n[p].tagName) {
                        n.splice(p);
                        var v = p - 1;
                        o = n[v].children;
                        break;
                      }
                      p -= 1;
                    }
                  }
                  var b = [],
                    g = void 0;
                  while (r < i) {
                    if (((g = t[r]), "tag-end" === g.type)) break;
                    b.push(g.content), r++;
                  }
                  r++;
                  var m = [],
                    y = {
                      type: "element",
                      tagName: c.content,
                      attributes: b,
                      children: m,
                    };
                  o.push(y);
                  var O = !(g.close || Un.html.voidElements.has(u));
                  if (O) {
                    n.push({ tagName: u, children: m });
                    var j = { tokens: t, cursor: r, stack: n };
                    Ir(j), (r = j.cursor);
                  }
                }
              } else o.push(a), r++;
            }
            e.cursor = r;
          }
          function Nr(e, t, n) {
            while (e.firstChild) e.removeChild(e.firstChild);
            for (var r = Ar(t, n()), i = 0; i < r.length; i++)
              e.appendChild(r[i]);
          }
          function Lr(e, t, n) {
            for (var r, i, o = Ar(t, n()), a = 0; a < o.length; a++) {
              var c = o[a];
              switch (e) {
                case "beforebegin":
                  null === (r = this.parentNode) ||
                    void 0 === r ||
                    r.insertBefore(c, this);
                  break;
                case "afterbegin":
                  this.hasChildNodes()
                    ? this.insertBefore(c, this.childNodes[0])
                    : this.appendChild(c);
                  break;
                case "beforeend":
                  this.appendChild(c);
                  break;
                case "afterend":
                  null === (i = this.parentNode) ||
                    void 0 === i ||
                    i.appendChild(c);
                  break;
              }
            }
          }
          function Br(e, t) {
            var n,
              r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              i = t();
            for (var o in (1 === e.nodeType
              ? (n = i.createElement(e.nodeName))
              : 3 === e.nodeType && (n = i.createTextNode("")),
            this)) {
              var a = this[o];
              [G, K].includes(o) && Object(j["a"])(a) === J
                ? (n[o] = Object.assign({}, a))
                : "_value" === o
                ? (n[o] = a)
                : o === z &&
                  ((n.style._value = Object.assign({}, a._value)),
                  (n.style._usedStyleProp = new Set(
                    Array.from(a._usedStyleProp)
                  )));
            }
            return (
              r &&
                (n.childNodes = e.childNodes.map(function (e) {
                  return e.cloneNode(!0);
                })),
              n
            );
          }
          Un.html = {
            skipElements: new Set(["style", "script"]),
            voidElements: new Set([
              "!doctype",
              "area",
              "base",
              "br",
              "col",
              "command",
              "embed",
              "hr",
              "img",
              "input",
              "keygen",
              "link",
              "meta",
              "param",
              "source",
              "track",
              "wbr",
            ]),
            closingElements: new Set([
              "html",
              "head",
              "body",
              "p",
              "dt",
              "dd",
              "li",
              "option",
              "thead",
              "th",
              "tbody",
              "tr",
              "td",
              "tfoot",
              "colgroup",
            ]),
            renderHTMLTag: !1,
          };
          var Fr = (function () {
            function e(t) {
              Object(y["a"])(this, e),
                (this.getDoc = function () {
                  return t(je.Document)();
                });
            }
            return (
              Object(O["a"])(e, [
                {
                  key: "bind",
                  value: function (e) {
                    var t = this.getDoc;
                    Rr(e, t), Dr(e, t), (e.cloneNode = Br.bind(e, e, t));
                  },
                },
              ]),
              e
            );
          })();
          function Rr(e, t) {
            Object.defineProperty(e, "innerHTML", {
              configurable: !0,
              enumerable: !0,
              set: function (n) {
                Nr.call(e, e, n, t);
              },
              get: function () {
                return "";
              },
            });
          }
          function Dr(e, t) {
            e.insertAdjacentHTML = function (n, r) {
              Lr.call(e, n, r, t);
            };
          }
          function Mr(e) {
            if ("template" === e.nodeName) {
              var t = e._getElement(je.Element)(D);
              return (
                (t.childNodes = e.childNodes),
                (e.childNodes = [t]),
                (t.parentNode = e),
                t.childNodes.forEach(function (e) {
                  e.parentNode = t;
                }),
                t
              );
            }
          }
          Fr = E(
            [
              Object(w["d"])(),
              _(0, Object(w["c"])(T.TaroElementFactory)),
              S("design:paramtypes", [Function]),
            ],
            Fr
          );
          var Ur = (function () {
            function e() {
              Object(y["a"])(this, e);
            }
            return (
              Object(O["a"])(e, [
                {
                  key: "bind",
                  value: function (e) {
                    $r(e);
                  },
                },
              ]),
              e
            );
          })();
          function $r(e) {
            Object.defineProperty(e, "content", {
              configurable: !0,
              enumerable: !0,
              get: function () {
                return Mr(e);
              },
            });
          }
          Ur = E([Object(w["d"])()], Ur);
          var zr = (function (e) {
            Object(b["a"])(n, e);
            var t = Object(g["a"])(n);
            function n(e, r, i, o, a) {
              var c;
              return (
                Object(y["a"])(this, n),
                (c = t.call(this, e, r, i, o)),
                (c._getText = a),
                (c.nodeType = 9),
                (c.nodeName = R),
                c
              );
            }
            return (
              Object(O["a"])(n, [
                {
                  key: "createElement",
                  value: function (e) {
                    return e === A
                      ? this._getElement(je.RootElement)()
                      : k["b"].has(e)
                      ? this._getElement(je.FormElement)(e)
                      : this._getElement(je.Element)(e);
                  },
                },
                {
                  key: "createElementNS",
                  value: function (e, t) {
                    return this.createElement(t);
                  },
                },
                {
                  key: "createTextNode",
                  value: function (e) {
                    return this._getText(e);
                  },
                },
                {
                  key: "getElementById",
                  value: function (e) {
                    var t = we.get(e);
                    return Object(k["j"])(t) ? null : t;
                  },
                },
                {
                  key: "querySelector",
                  value: function (e) {
                    return /^#/.test(e)
                      ? this.getElementById(e.slice(1))
                      : null;
                  },
                },
                {
                  key: "querySelectorAll",
                  value: function () {
                    return [];
                  },
                },
                {
                  key: "createComment",
                  value: function () {
                    var e = this._getText("");
                    return (e.nodeName = de), e;
                  },
                },
              ]),
              n
            );
          })(Qe);
          zr = E(
            [
              Object(w["d"])(),
              _(0, Object(w["c"])(T.TaroNodeImpl)),
              _(1, Object(w["c"])(T.TaroElementFactory)),
              _(2, Object(w["c"])(T.Hooks)),
              _(3, Object(w["c"])(T.TaroElementImpl)),
              _(4, Object(w["c"])(T.TaroTextFactory)),
              S("design:paramtypes", [
                Function,
                Function,
                Function,
                Function,
                Function,
              ]),
            ],
            zr
          );
          var qr = (function () {
            function e() {
              Object(y["a"])(this, e);
            }
            return (
              Object(O["a"])(e, [
                {
                  key: "modifyMpEvent",
                  value: function (e) {
                    var t;
                    null === (t = this.modifyMpEventImpls) ||
                      void 0 === t ||
                      t.forEach(function (t) {
                        return t(e);
                      });
                  },
                },
                {
                  key: "modifyTaroEvent",
                  value: function (e, t) {
                    var n;
                    null === (n = this.modifyTaroEventImpls) ||
                      void 0 === n ||
                      n.forEach(function (n) {
                        return n(e, t);
                      });
                  },
                },
                {
                  key: "initNativeApi",
                  value: function (e) {
                    var t;
                    null === (t = this.initNativeApiImpls) ||
                      void 0 === t ||
                      t.forEach(function (t) {
                        return t(e);
                      });
                  },
                },
                {
                  key: "patchElement",
                  value: function (e) {
                    var t;
                    null === (t = this.patchElementImpls) ||
                      void 0 === t ||
                      t.forEach(function (t) {
                        return t(e);
                      });
                  },
                },
              ]),
              e
            );
          })();
          E(
            [Object(w["c"])(T.getLifecycle), S("design:type", Function)],
            qr.prototype,
            "getLifecycle",
            void 0
          ),
            E(
              [Object(w["c"])(T.getPathIndex), S("design:type", Function)],
              qr.prototype,
              "getPathIndex",
              void 0
            ),
            E(
              [Object(w["c"])(T.getEventCenter), S("design:type", Function)],
              qr.prototype,
              "getEventCenter",
              void 0
            ),
            E(
              [Object(w["c"])(T.isBubbleEvents), S("design:type", Function)],
              qr.prototype,
              "isBubbleEvents",
              void 0
            ),
            E(
              [Object(w["c"])(T.getSpecialNodes), S("design:type", Function)],
              qr.prototype,
              "getSpecialNodes",
              void 0
            ),
            E(
              [
                Object(w["c"])(T.onRemoveAttribute),
                Object(w["f"])(),
                S("design:type", Function),
              ],
              qr.prototype,
              "onRemoveAttribute",
              void 0
            ),
            E(
              [
                Object(w["c"])(T.batchedEventUpdates),
                Object(w["f"])(),
                S("design:type", Function),
              ],
              qr.prototype,
              "batchedEventUpdates",
              void 0
            ),
            E(
              [
                Object(w["c"])(T.mergePageInstance),
                Object(w["f"])(),
                S("design:type", Function),
              ],
              qr.prototype,
              "mergePageInstance",
              void 0
            ),
            E(
              [
                Object(w["c"])(T.createPullDownComponent),
                Object(w["f"])(),
                S("design:type", Function),
              ],
              qr.prototype,
              "createPullDownComponent",
              void 0
            ),
            E(
              [
                Object(w["c"])(T.getDOMNode),
                Object(w["f"])(),
                S("design:type", Function),
              ],
              qr.prototype,
              "getDOMNode",
              void 0
            ),
            E(
              [
                Object(w["c"])(T.modifyHydrateData),
                Object(w["f"])(),
                S("design:type", Function),
              ],
              qr.prototype,
              "modifyHydrateData",
              void 0
            ),
            E(
              [
                Object(w["c"])(T.modifySetAttrPayload),
                Object(w["f"])(),
                S("design:type", Function),
              ],
              qr.prototype,
              "modifySetAttrPayload",
              void 0
            ),
            E(
              [
                Object(w["c"])(T.modifyRmAttrPayload),
                Object(w["f"])(),
                S("design:type", Function),
              ],
              qr.prototype,
              "modifyRmAttrPayload",
              void 0
            ),
            E(
              [
                Object(w["c"])(T.onAddEvent),
                Object(w["f"])(),
                S("design:type", Function),
              ],
              qr.prototype,
              "onAddEvent",
              void 0
            ),
            E(
              [
                Object(w["e"])(T.modifyMpEvent),
                Object(w["f"])(),
                S("design:type", Array),
              ],
              qr.prototype,
              "modifyMpEventImpls",
              void 0
            ),
            E(
              [
                Object(w["e"])(T.modifyTaroEvent),
                Object(w["f"])(),
                S("design:type", Array),
              ],
              qr.prototype,
              "modifyTaroEventImpls",
              void 0
            ),
            E(
              [
                Object(w["e"])(T.initNativeApi),
                Object(w["f"])(),
                S("design:type", Array),
              ],
              qr.prototype,
              "initNativeApiImpls",
              void 0
            ),
            E(
              [
                Object(w["e"])(T.patchElement),
                Object(w["f"])(),
                S("design:type", Array),
              ],
              qr.prototype,
              "patchElementImpls",
              void 0
            ),
            (qr = E([Object(w["d"])()], qr));
          var Hr = new Set([
              "touchstart",
              "touchmove",
              "touchcancel",
              "touchend",
              "touchforcechange",
              "tap",
              "longpress",
              "longtap",
              "transitionend",
              "animationstart",
              "animationiteration",
              "animationend",
            ]),
            Vr = function (e, t) {
              return e[t];
            },
            Wr = function (e) {
              return "[".concat(e, "]");
            },
            Gr = function (e) {
              return new e();
            },
            Kr = function (e) {
              return Hr.has(e);
            },
            Jr = function () {
              return ["view", "text", "image"];
            },
            Yr = new w["b"](function (e) {
              e(T.getLifecycle).toFunction(Vr),
                e(T.getPathIndex).toFunction(Wr),
                e(T.getEventCenter).toFunction(Gr),
                e(T.isBubbleEvents).toFunction(Kr),
                e(T.getSpecialNodes).toFunction(Jr);
            });
          function Qr(e) {
            var t = Object.keys(k["c"]);
            t.forEach(function (t) {
              if (t in T) {
                var n = T[t],
                  r = k["c"][t];
                Object(k["f"])(r)
                  ? r.forEach(function (t) {
                      return e.bind(n).toFunction(t);
                    })
                  : e.isBound(n)
                  ? e.rebind(n).toFunction(r)
                  : e.bind(n).toFunction(r);
              }
            });
          }
          var Zr,
            Xr,
            ei,
            ti = new w["a"]();
          ti.bind(T.TaroElement).to(Qe).whenTargetNamed(je.Element),
            ti
              .bind(T.TaroElement)
              .to(zr)
              .inSingletonScope()
              .whenTargetNamed(je.Document),
            ti.bind(T.TaroElement).to(Hn).whenTargetNamed(je.RootElement),
            ti.bind(T.TaroElement).to(Vn).whenTargetNamed(je.FormElement),
            ti.bind(T.TaroElementFactory).toFactory(function (e) {
              return function (t) {
                return function (n) {
                  var r = e.container.getNamed(T.TaroElement, t);
                  return (
                    n && (r.nodeName = n),
                    (r.tagName = r.nodeName.toUpperCase()),
                    r
                  );
                };
              };
            }),
            ti.bind(T.TaroText).to(_e),
            ti.bind(T.TaroTextFactory).toFactory(function (e) {
              return function (t) {
                var n = e.container.get(T.TaroText);
                return (n._value = t), n;
              };
            }),
            ti.bind(T.TaroNodeImpl).to(Fr).inSingletonScope(),
            ti.bind(T.TaroElementImpl).to(Ur).inSingletonScope(),
            ti.bind(T.Hooks).to(qr).inSingletonScope(),
            ti.load(Yr),
            Qr(ti),
            (Zr = ti.get(T.Hooks)),
            (Xr = ti.get(T.TaroElementFactory)),
            (ei = Xr(je.Document)());
          var ni = (function () {
            function e(t, n, r) {
              Object(y["a"])(this, e),
                (this._stop = !1),
                (this._end = !1),
                (this.defaultPrevented = !1),
                (this.timeStamp = Date.now()),
                (this.type = t.toLowerCase()),
                (this.mpEvent = r),
                (this.bubbles = Boolean(n && n.bubbles)),
                (this.cancelable = Boolean(n && n.cancelable));
            }
            return (
              Object(O["a"])(e, [
                {
                  key: "stopPropagation",
                  value: function () {
                    this._stop = !0;
                  },
                },
                {
                  key: "stopImmediatePropagation",
                  value: function () {
                    this._end = this._stop = !0;
                  },
                },
                {
                  key: "preventDefault",
                  value: function () {
                    this.defaultPrevented = !0;
                  },
                },
                {
                  key: "target",
                  get: function () {
                    var e,
                      t,
                      n,
                      r = ei.getElementById(
                        null === (e = this.mpEvent) || void 0 === e
                          ? void 0
                          : e.target.id
                      );
                    return Object.assign(
                      Object.assign(
                        Object.assign(
                          {},
                          null === (t = this.mpEvent) || void 0 === t
                            ? void 0
                            : t.target
                        ),
                        null === (n = this.mpEvent) || void 0 === n
                          ? void 0
                          : n.detail
                      ),
                      { dataset: null !== r ? r.dataset : k["a"] }
                    );
                  },
                },
                {
                  key: "currentTarget",
                  get: function () {
                    var e,
                      t,
                      n,
                      r = ei.getElementById(
                        null === (e = this.mpEvent) || void 0 === e
                          ? void 0
                          : e.currentTarget.id
                      );
                    return null === r
                      ? this.target
                      : Object.assign(
                          Object.assign(
                            Object.assign(
                              {},
                              null === (t = this.mpEvent) || void 0 === t
                                ? void 0
                                : t.currentTarget
                            ),
                            null === (n = this.mpEvent) || void 0 === n
                              ? void 0
                              : n.detail
                          ),
                          { dataset: r.dataset }
                        );
                  },
                },
              ]),
              e
            );
          })();
          function ri(e, t) {
            if ("string" === typeof e)
              return new ni(e, { bubbles: !0, cancelable: !0 });
            var n = new ni(e.type, { bubbles: !0, cancelable: !0 }, e);
            for (var r in e)
              r !== te && r !== ee && r !== ne && r !== ie && (n[r] = e[r]);
            return (
              n.type === re &&
                (null === t || void 0 === t ? void 0 : t.nodeName) === Q &&
                (n[oe] = 13),
              n
            );
          }
          var ii = {};
          function oi(e) {
            var t;
            null === (t = Zr.modifyMpEvent) || void 0 === t || t.call(Zr, e),
              null == e.currentTarget && (e.currentTarget = e.target);
            var n = ei.getElementById(e.currentTarget.id);
            if (n) {
              var r = function () {
                var t,
                  r = ri(e, n);
                null === (t = Zr.modifyTaroEvent) ||
                  void 0 === t ||
                  t.call(Zr, r, n),
                  n.dispatchEvent(r);
              };
              if ("function" === typeof Zr.batchedEventUpdates) {
                var i = e.type;
                !Zr.isBubbleEvents(i) ||
                !ge(n, i) ||
                (i === ae && n.props.catchMove)
                  ? Zr.batchedEventUpdates(function () {
                      ii[i] &&
                        (ii[i].forEach(function (e) {
                          return e();
                        }),
                        delete ii[i]),
                        r();
                    })
                  : (ii[i] || (ii[i] = [])).push(r);
              } else r();
            }
          }
          var ai = "undefined" !== typeof i && !!i.scripts,
            ci = ai ? i : k["a"],
            ui = ai ? o : k["a"];
          function si() {
            var e = ti.get(T.TaroElementFactory),
              t = e(je.Document)(),
              n = t.createElement.bind(t),
              r = n(I),
              i = n(N),
              o = n(L),
              a = n(B);
            a.id = B;
            var c = n(F);
            return (
              t.appendChild(r),
              r.appendChild(i),
              r.appendChild(o),
              o.appendChild(c),
              c.appendChild(a),
              (t.documentElement = r),
              (t.head = i),
              (t.body = o),
              (t.createEvent = ri),
              t
            );
          }
          var li,
            di = ai ? ci : si(),
            fi = "Macintosh",
            hi = "Intel Mac OS X 10_14_5",
            pi =
              "AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36",
            vi = ai
              ? ui.navigator
              : {
                  appCodeName: "Mozilla",
                  appName: "Netscape",
                  appVersion: "5.0 (" + fi + "; " + hi + ") " + pi,
                  cookieEnabled: !0,
                  mimeTypes: [],
                  onLine: !0,
                  platform: "MacIntel",
                  plugins: [],
                  product: "Taro",
                  productSub: "20030107",
                  userAgent: "Mozilla/5.0 (" + fi + "; " + hi + ") " + pi,
                  vendor: "Joyent",
                  vendorSub: "",
                };
          (function () {
            var e;
            "undefined" !== typeof performance &&
            null !== performance &&
            performance.now
              ? (li = function () {
                  return performance.now();
                })
              : Date.now
              ? ((li = function () {
                  return Date.now() - e;
                }),
                (e = Date.now()))
              : ((li = function () {
                  return new Date().getTime() - e;
                }),
                (e = new Date().getTime()));
          })();
          var bi = 0,
            gi =
              "undefined" !== typeof a && null !== a
                ? a
                : function (e) {
                    var t = li(),
                      n = Math.max(bi + 16, t);
                    return setTimeout(function () {
                      e((bi = n));
                    }, n - t);
                  },
            mi = "undefined" !== typeof c && null !== c ? c : clearTimeout;
          function yi(e) {
            return e.style;
          }
          "undefined" !== typeof r && ((gi = gi.bind(r)), (mi = mi.bind(r)));
          var Oi = ai ? ui : { navigator: vi, document: di };
          if (!ai) {
            var ji = [].concat(
              Object(l["a"])(Object.getOwnPropertyNames(r || ui)),
              Object(l["a"])(Object.getOwnPropertySymbols(r || ui))
            );
            ji.forEach(function (e) {
              "atob" !== e &&
                (Object.prototype.hasOwnProperty.call(Oi, e) || (Oi[e] = r[e]));
            }),
              (di.defaultView = Oi);
          }
          (Oi.requestAnimationFrame = gi),
            (Oi.cancelAnimationFrame = mi),
            (Oi.getComputedStyle = yi),
            (Oi.addEventListener = function () {}),
            (Oi.removeEventListener = function () {}),
            ce in Oi || (Oi.Date = Date),
            ue in Oi || (Oi.setTimeout = setTimeout);
          var wi = { app: null, router: null, page: null },
            ki = function () {
              return wi;
            },
            Ei = (function () {
              function e(t) {
                Object(y["a"])(this, e),
                  "undefined" !== typeof t && t.callbacks
                    ? (this.callbacks = t.callbacks)
                    : (this.callbacks = {});
              }
              return (
                Object(O["a"])(e, [
                  {
                    key: "on",
                    value: function (t, n, r) {
                      var i, o, a, c;
                      if (!n) return this;
                      (t = t.split(e.eventSplitter)),
                        this.callbacks || (this.callbacks = {});
                      var u = this.callbacks;
                      while ((i = t.shift()))
                        (c = u[i]),
                          (o = c ? c.tail : {}),
                          (o.next = a = {}),
                          (o.context = r),
                          (o.callback = n),
                          (u[i] = { tail: a, next: c ? c.next : o });
                      return this;
                    },
                  },
                  {
                    key: "once",
                    value: function (e, t, n) {
                      var r = this,
                        i = function i() {
                          for (
                            var o = arguments.length, a = new Array(o), c = 0;
                            c < o;
                            c++
                          )
                            a[c] = arguments[c];
                          t.apply(r, a), r.off(e, i, n);
                        };
                      return this.on(e, i, n), this;
                    },
                  },
                  {
                    key: "off",
                    value: function (t, n, r) {
                      var i, o, a, c, u, s;
                      if (!(o = this.callbacks)) return this;
                      if (!(t || n || r)) return delete this.callbacks, this;
                      t = t ? t.split(e.eventSplitter) : Object.keys(o);
                      while ((i = t.shift()))
                        if (((a = o[i]), delete o[i], a && (n || r))) {
                          c = a.tail;
                          while ((a = a.next) !== c)
                            (u = a.callback),
                              (s = a.context),
                              ((n && u !== n) || (r && s !== r)) &&
                                this.on(i, u, s);
                        }
                      return this;
                    },
                  },
                  {
                    key: "trigger",
                    value: function (t) {
                      var n, r, i, o;
                      if (!(i = this.callbacks)) return this;
                      t = t.split(e.eventSplitter);
                      var a = [].slice.call(arguments, 1);
                      while ((n = t.shift()))
                        if ((r = i[n])) {
                          o = r.tail;
                          while ((r = r.next) !== o)
                            r.callback.apply(r.context || this, a);
                        }
                      return this;
                    },
                  },
                ]),
                e
              );
            })();
          Ei.eventSplitter = /\s+/;
          var _i = ti.get(T.Hooks),
            Si = _i.getEventCenter(Ei);
          ti.bind(T.eventCenter).toConstantValue(Si);
          var Ti = new Map(),
            Pi = fe(),
            xi = ti.get(T.Hooks);
          function Ci(e, t) {
            var n;
            null === (n = xi.mergePageInstance) ||
              void 0 === n ||
              n.call(xi, Ti.get(t), e),
              Ti.set(t, e);
          }
          function Ai(e) {
            return Ti.get(e);
          }
          function Ii(e) {
            return null == e ? "" : "/" === e.charAt(0) ? e : "/" + e;
          }
          function Ni(e, t) {
            for (
              var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
              i < n;
              i++
            )
              r[i - 2] = arguments[i];
            var o = Ti.get(e);
            if (null != o) {
              var a = xi.getLifecycle(o, t);
              if (Object(k["f"])(a)) {
                var c = a.map(function (e) {
                  return e.apply(o, r);
                });
                return c[0];
              }
              if (Object(k["h"])(a)) return a.apply(o, r);
            }
          }
          function Li(e) {
            if (null == e) return "";
            var t = Object.keys(e)
              .map(function (t) {
                return t + "=" + e[t];
              })
              .join("&");
            return "" === t ? t : "?" + t;
          }
          function Bi(e, t) {
            var n = e;
            return ai || (n = e + Li(t)), n;
          }
          function Fi(e) {
            return e + ".onReady";
          }
          function Ri(e) {
            return e + ".onShow";
          }
          function Di(e) {
            return e + ".onHide";
          }
          function Mi(e, t, n, r) {
            var i,
              o,
              a = null !== t && void 0 !== t ? t : "taro_page_".concat(Pi()),
              c = null,
              u = !1,
              s = [],
              l = {
                onLoad: function (t, n) {
                  var i = this;
                  zn.start(C),
                    (wi.page = this),
                    (this.config = r || {}),
                    (t.$taroTimestamp = Date.now()),
                    (this.$taroPath = Bi(a, t)),
                    null == this.$taroParams &&
                      (this.$taroParams = Object.assign({}, t));
                  var o = ai ? this.$taroPath : this.route || this.__route__;
                  wi.router = {
                    params: this.$taroParams,
                    path: Ii(o),
                    onReady: Fi(a),
                    onShow: Ri(a),
                    onHide: Di(a),
                  };
                  var l = function () {
                    wi.app.mount(e, i.$taroPath, function () {
                      (c = di.getElementById(i.$taroPath)),
                        Object(k["d"])(
                          null !== c,
                          "\u6ca1\u6709\u627e\u5230\u9875\u9762\u5b9e\u4f8b\u3002"
                        ),
                        Ni(i.$taroPath, "onLoad", i.$taroParams),
                        ai
                          ? Object(k["h"])(n) && n()
                          : ((c.ctx = i), c.performUpdate(!0, n));
                    });
                  };
                  u ? s.push(l) : l();
                },
                onReady: function () {
                  gi(function () {
                    Si.trigger(Fi(a));
                  }),
                    Ni(this.$taroPath, "onReady"),
                    (this.onReady.called = !0);
                },
                onUnload: function () {
                  var e = this;
                  (u = !0),
                    wi.app.unmount(this.$taroPath, function () {
                      (u = !1),
                        Ti.delete(e.$taroPath),
                        c && (c.ctx = null),
                        s.length &&
                          (s.forEach(function (e) {
                            return e();
                          }),
                          (s = []));
                    });
                },
                onShow: function () {
                  (wi.page = this), (this.config = r || {});
                  var e = ai ? this.$taroPath : this.route || this.__route__;
                  (wi.router = {
                    params: this.$taroParams,
                    path: Ii(e),
                    onReady: Fi(a),
                    onShow: Ri(a),
                    onHide: Di(a),
                  }),
                    gi(function () {
                      Si.trigger(Ri(a));
                    }),
                    Ni(this.$taroPath, "onShow");
                },
                onHide: function () {
                  (wi.page = null),
                    (wi.router = null),
                    Ni(this.$taroPath, "onHide"),
                    Si.trigger(Di(a));
                },
                onPullDownRefresh: function () {
                  return Ni(this.$taroPath, "onPullDownRefresh");
                },
                onReachBottom: function () {
                  return Ni(this.$taroPath, "onReachBottom");
                },
                onPageScroll: function (e) {
                  return Ni(this.$taroPath, "onPageScroll", e);
                },
                onResize: function (e) {
                  return Ni(this.$taroPath, "onResize", e);
                },
                onTabItemTap: function (e) {
                  return Ni(this.$taroPath, "onTabItemTap", e);
                },
                onTitleClick: function () {
                  return Ni(this.$taroPath, "onTitleClick");
                },
                onOptionMenuClick: function () {
                  return Ni(this.$taroPath, "onOptionMenuClick");
                },
                onPopMenuClick: function () {
                  return Ni(this.$taroPath, "onPopMenuClick");
                },
                onPullIntercept: function () {
                  return Ni(this.$taroPath, "onPullIntercept");
                },
                onAddToFavorites: function () {
                  return Ni(this.$taroPath, "onAddToFavorites");
                },
              };
            return (
              (e.onShareAppMessage ||
                (null === (i = e.prototype) || void 0 === i
                  ? void 0
                  : i.onShareAppMessage) ||
                e.enableShareAppMessage) &&
                (l.onShareAppMessage = function (e) {
                  var t = null === e || void 0 === e ? void 0 : e.target;
                  if (null != t) {
                    var n = t.id,
                      r = di.getElementById(n);
                    null != r && (e.target.dataset = r.dataset);
                  }
                  return Ni(this.$taroPath, "onShareAppMessage", e);
                }),
              (e.onShareTimeline ||
                (null === (o = e.prototype) || void 0 === o
                  ? void 0
                  : o.onShareTimeline) ||
                e.enableShareTimeline) &&
                (l.onShareTimeline = function () {
                  return Ni(this.$taroPath, "onShareTimeline");
                }),
              (l.eh = oi),
              Object(k["j"])(n) || (l.data = n),
              ai && (l.path = a),
              l
            );
          }
          function Ui(e, t, n) {
            var r,
              i,
              o,
              a =
                null !== t && void 0 !== t ? t : "taro_component_".concat(Pi()),
              c = null,
              u = {
                attached: function () {
                  var t,
                    n = this;
                  zn.start(C);
                  var r = Bi(a, {
                    id:
                      (null === (t = this.getPageId) || void 0 === t
                        ? void 0
                        : t.call(this)) || Pi(),
                  });
                  wi.app.mount(e, r, function () {
                    (c = di.getElementById(r)),
                      Object(k["d"])(
                        null !== c,
                        "\u6ca1\u6709\u627e\u5230\u7ec4\u4ef6\u5b9e\u4f8b\u3002"
                      ),
                      Ni(r, "onLoad"),
                      ai || ((c.ctx = n), c.performUpdate(!0));
                  });
                },
                detached: function () {
                  var e = Bi(a, { id: this.getPageId() });
                  wi.app.unmount(e, function () {
                    Ti.delete(e), c && (c.ctx = null);
                  });
                },
                methods: { eh: oi },
              };
            return (
              Object(k["j"])(n) || (u.data = n),
              (u["options"] =
                null !==
                  (r = null === e || void 0 === e ? void 0 : e["options"]) &&
                void 0 !== r
                  ? r
                  : k["a"]),
              (u["externalClasses"] =
                null !==
                  (i =
                    null === e || void 0 === e
                      ? void 0
                      : e["externalClasses"]) && void 0 !== i
                  ? i
                  : k["a"]),
              (u["behaviors"] =
                null !==
                  (o = null === e || void 0 === e ? void 0 : e["behaviors"]) &&
                void 0 !== o
                  ? o
                  : k["a"]),
              u
            );
          }
          function $i(e) {
            return {
              properties: {
                i: { type: Object, value: Object(m["a"])({}, "nn", "view") },
                l: { type: String, value: "" },
              },
              options: {
                addGlobalClass: !0,
                virtualHost: "custom-wrapper" !== e,
              },
              methods: { eh: oi },
            };
          }
          var zi = ti.get(T.Hooks);
          function qi(e, t) {
            var n;
            return (
              Object(k["h"])(t.render) ||
              !!(null === (n = t.prototype) || void 0 === n
                ? void 0
                : n.isReactComponent) ||
              t.prototype instanceof e.Component
            );
          }
          var Hi,
            Vi = k["a"],
            Wi = k["a"];
          function Gi(e, t) {
            var n = e.createElement;
            return function (r) {
              var i = qi(e, r),
                o = function (e) {
                  return e && Ci(e, t);
                },
                a = i
                  ? { ref: o }
                  : { forwardedRef: o, reactReduxForwardedRef: o };
              return (
                Wi === k["a"] && (Wi = e.createContext("")),
                (function (e) {
                  Object(b["a"])(o, e);
                  var i = Object(g["a"])(o);
                  function o() {
                    var e;
                    return (
                      Object(y["a"])(this, o),
                      (e = i.apply(this, arguments)),
                      (e.state = { hasError: !1 }),
                      e
                    );
                  }
                  return (
                    Object(O["a"])(
                      o,
                      [
                        { key: "componentDidCatch", value: function (e, t) {} },
                        {
                          key: "render",
                          value: function () {
                            var e = this.state.hasError
                              ? []
                              : n(
                                  Wi.Provider,
                                  { value: t },
                                  n(
                                    r,
                                    Object.assign(
                                      Object.assign({}, this.props),
                                      a
                                    )
                                  )
                                );
                            return ai
                              ? n("div", { id: t, className: "taro_page" }, e)
                              : n("root", { id: t }, e);
                          },
                        },
                      ],
                      [
                        {
                          key: "getDerivedStateFromError",
                          value: function (e) {
                            return { hasError: !0 };
                          },
                        },
                      ]
                    ),
                    o
                  );
                })(e.Component)
              );
            };
          }
          function Ki() {
            var e = function (e, t) {
                return (
                  (t = t.replace(/^on(Show|Hide)$/, "componentDid$1")), e[t]
                );
              },
              t = function (e) {
                e.type = e.type.replace(/-/g, "");
              },
              n = function (e) {
                Hi.unstable_batchedUpdates(e);
              },
              r = function (e, t) {
                e &&
                  t &&
                  ("constructor" in e ||
                    Object.keys(e).forEach(function (n) {
                      Object(k["h"])(t[n])
                        ? (t[n] = [t[n]].concat(Object(l["a"])(e[n])))
                        : (t[n] = [].concat(
                            Object(l["a"])(t[n] || []),
                            Object(l["a"])(e[n])
                          ));
                    }));
              };
            (zi.getLifecycle = e),
              (zi.modifyMpEvent = t),
              (zi.batchedEventUpdates = n),
              (zi.mergePageInstance = r);
          }
          var Ji = fe();
          function Yi(e, t, n, r) {
            (Vi = t),
              (Hi = n),
              Object(k["d"])(
                !!Hi,
                "\u6784\u5efa React/Nerv \u9879\u76ee\u8bf7\u628a process.env.FRAMEWORK \u8bbe\u7f6e\u4e3a 'react'/'nerv' "
              );
            var i = Vi.createRef(),
              o = qi(Vi, e);
            Ki();
            var a,
              c = (function (t) {
                Object(b["a"])(r, t);
                var n = Object(g["a"])(r);
                function r() {
                  var e;
                  return (
                    Object(y["a"])(this, r),
                    (e = n.apply(this, arguments)),
                    (e.pages = []),
                    (e.elements = []),
                    e
                  );
                }
                return (
                  Object(O["a"])(r, [
                    {
                      key: "mount",
                      value: function (e, t, n) {
                        var r = t + Ji(),
                          i = function () {
                            return Vi.createElement(e, { key: r, tid: t });
                          };
                        this.pages.push(i), this.forceUpdate(n);
                      },
                    },
                    {
                      key: "unmount",
                      value: function (e, t) {
                        for (var n = 0; n < this.elements.length; n++) {
                          var r = this.elements[n];
                          if (r.props.tid === e) {
                            this.elements.splice(n, 1);
                            break;
                          }
                        }
                        this.forceUpdate(t);
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        while (this.pages.length > 0) {
                          var t = this.pages.pop();
                          this.elements.push(t());
                        }
                        var n = null;
                        return (
                          o && (n = { ref: i }),
                          Vi.createElement(
                            e,
                            n,
                            ai
                              ? Vi.createElement(
                                  "div",
                                  null,
                                  this.elements.slice()
                                )
                              : this.elements.slice()
                          )
                        );
                      },
                    },
                  ]),
                  r
                );
              })(Vi.Component);
            ai ||
              (a = Hi.render(Vi.createElement(c), di.getElementById("app")));
            var u = Object.create(
              {
                render: function (e) {
                  a.forceUpdate(e);
                },
                mount: function (e, t, n) {
                  var r = Gi(Vi, t)(e);
                  a.mount(r, t, n);
                },
                unmount: function (e, t) {
                  a.unmount(e, t);
                },
              },
              {
                config: {
                  writable: !0,
                  enumerable: !0,
                  configurable: !0,
                  value: r,
                },
                onLaunch: {
                  enumerable: !0,
                  writable: !0,
                  value: function (e) {
                    var t = this;
                    (wi.router = Object.assign(
                      { params: null === e || void 0 === e ? void 0 : e.query },
                      e
                    )),
                      ai &&
                        (a = Hi.render(
                          Vi.createElement(c),
                          di.getElementById("app")
                        ));
                    var n = i.current;
                    if (
                      null === n || void 0 === n ? void 0 : n.taroGlobalData
                    ) {
                      var r = n.taroGlobalData,
                        o = Object.keys(r),
                        u = Object.getOwnPropertyDescriptors(r);
                      o.forEach(function (e) {
                        Object.defineProperty(t, e, {
                          configurable: !0,
                          enumerable: !0,
                          get: function () {
                            return r[e];
                          },
                          set: function (t) {
                            r[e] = t;
                          },
                        });
                      }),
                        Object.defineProperties(this, u);
                    }
                    (this.$app = n),
                      null != n && Object(k["h"])(n.onLaunch) && n.onLaunch(e);
                  },
                },
                onShow: {
                  enumerable: !0,
                  writable: !0,
                  value: function (e) {
                    var t = i.current;
                    (wi.router = Object.assign(
                      { params: null === e || void 0 === e ? void 0 : e.query },
                      e
                    )),
                      null != t &&
                        Object(k["h"])(t.componentDidShow) &&
                        t.componentDidShow(e),
                      s("onShow");
                  },
                },
                onHide: {
                  enumerable: !0,
                  writable: !0,
                  value: function (e) {
                    var t = i.current;
                    null != t &&
                      Object(k["h"])(t.componentDidHide) &&
                      t.componentDidHide(e),
                      s("onHide");
                  },
                },
                onPageNotFound: {
                  enumerable: !0,
                  writable: !0,
                  value: function (e) {
                    var t = i.current;
                    null != t &&
                      Object(k["h"])(t.onPageNotFound) &&
                      t.onPageNotFound(e);
                  },
                },
              }
            );
            function s(e) {
              var t = Ai(P);
              if (t) {
                var n = i.current,
                  r = zi.getLifecycle(t, e);
                Array.isArray(r) &&
                  r.forEach(function (e) {
                    return e.apply(n);
                  });
              }
            }
            return (wi.app = u), wi.app;
          }
          var Qi,
            Zi = fe();
          function Xi(e, t) {
            var n = (function (t) {
                Object(b["a"])(r, t);
                var n = Object(g["a"])(r);
                function r() {
                  var t;
                  return (
                    Object(y["a"])(this, r),
                    (t = n.apply(this, arguments)),
                    (t.root = e.createRef()),
                    (t.ctx = t.props.getCtx()),
                    t
                  );
                }
                return (
                  Object(O["a"])(r, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        this.ctx.component = this;
                        var e = this.root.current;
                        (e.ctx = this.ctx), e.performUpdate(!0);
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        return e.createElement(
                          "root",
                          { ref: this.root },
                          this.props.renderComponent(this.ctx)
                        );
                      },
                    },
                  ]),
                  r
                );
              })(e.Component),
              r = (function (t) {
                Object(b["a"])(i, t);
                var r = Object(g["a"])(i);
                function i() {
                  var e;
                  return (
                    Object(y["a"])(this, i),
                    (e = r.apply(this, arguments)),
                    (e.state = { components: [] }),
                    e
                  );
                }
                return (
                  Object(O["a"])(i, [
                    {
                      key: "componentDidMount",
                      value: function () {
                        wi.app = this;
                      },
                    },
                    {
                      key: "mount",
                      value: function (t, r, i) {
                        var o = qi(e, t),
                          a = function (e) {
                            return e && Ci(e, r);
                          },
                          c = o
                            ? { ref: a }
                            : { forwardedRef: a, reactReduxForwardedRef: a },
                          u = {
                            compId: r,
                            element: e.createElement(n, {
                              key: r,
                              getCtx: i,
                              renderComponent: function (n) {
                                return e.createElement(
                                  t,
                                  Object.assign(
                                    Object.assign(
                                      {},
                                      (n.data || (n.data = {})).props
                                    ),
                                    c
                                  )
                                );
                              },
                            }),
                          };
                        this.setState({
                          components: [].concat(
                            Object(l["a"])(this.state.components),
                            [u]
                          ),
                        });
                      },
                    },
                    {
                      key: "unmount",
                      value: function (e) {
                        var t = this.state.components,
                          n = t.findIndex(function (t) {
                            return t.compId === e;
                          }),
                          r = [].concat(
                            Object(l["a"])(t.slice(0, n)),
                            Object(l["a"])(t.slice(n + 1))
                          );
                        this.setState({ components: r });
                      },
                    },
                    {
                      key: "render",
                      value: function () {
                        var e = this.state.components;
                        return e.map(function (e) {
                          var t = e.element;
                          return t;
                        });
                      },
                    },
                  ]),
                  i
                );
              })(e.Component);
            Ki();
            var i = di.getElementById("app");
            t.render(e.createElement(r, {}), i);
          }
          function eo(e, t, n, r) {
            (Vi = t), (Hi = n), Ki();
            var i = {
              properties: {
                props: {
                  type: null,
                  value: null,
                  observer: function (e, t) {
                    t && this.component.forceUpdate();
                  },
                },
              },
              created: function () {
                wi.app || Xi(Vi, Hi);
              },
              attached: function () {
                var t = this;
                o(),
                  (this.compId = Zi()),
                  (this.config = r),
                  wi.app.mount(e, this.compId, function () {
                    return t;
                  });
              },
              ready: function () {
                Ni(this.compId, "onReady");
              },
              detached: function () {
                wi.app.unmount(this.compId);
              },
              pageLifetimes: {
                show: function () {
                  Ni(this.compId, "onShow");
                },
                hide: function () {
                  Ni(this.compId, "onHide");
                },
              },
              methods: { eh: oi },
            };
            function o() {
              var e = getCurrentPages(),
                t = e[e.length - 1];
              if (wi.page !== t) {
                wi.page = t;
                var n = t.route || t.__route__,
                  r = {
                    params: t.options || {},
                    path: Ii(n),
                    onReady: "",
                    onHide: "",
                    onShow: "",
                  };
                (wi.router = r),
                  t.options ||
                    Object.defineProperty(t, "options", {
                      enumerable: !0,
                      configurable: !0,
                      get: function () {
                        return this._optionsValue;
                      },
                      set: function (e) {
                        (r.params = e), (this._optionsValue = e);
                      },
                    });
              }
            }
            return i;
          }
          function to(e, t) {
            return function (n) {
              var r = e.extend({
                  props: { tid: String },
                  mixins: [
                    n,
                    {
                      created: function () {
                        Ci(this, t);
                      },
                    },
                  ],
                }),
                i = {
                  render: function (e) {
                    return e(
                      ai ? "div" : "root",
                      { attrs: { id: t, class: ai ? "taro_page" : "" } },
                      [e(r, { props: { tid: t } })]
                    );
                  },
                };
              return i;
            };
          }
          function no() {
            var e = ti.get(T.Hooks),
              t = function (e, t) {
                var n = e.props;
                if (!n.hasOwnProperty(t) || Object(k["g"])(n[t]))
                  return e.setAttribute(t, !1), !0;
              },
              n = function (e, t) {
                return e.$options[t];
              };
            (e.onRemoveAttribute = t), (e.getLifecycle = n);
          }
          function ro(e, t, n) {
            (Qi = t),
              Object(k["d"])(
                !!Qi,
                "\u6784\u5efa Vue \u9879\u76ee\u8bf7\u628a process.env.FRAMEWORK \u8bbe\u7f6e\u4e3a 'vue'"
              ),
              no(),
              (Qi.config.getTagNamespace = k["m"]);
            var r,
              i = [],
              o = [],
              a = new Qi({
                render: function (t) {
                  while (o.length > 0) {
                    var n = o.pop();
                    i.push(n(t));
                  }
                  return t(e, { ref: "app" }, i.slice());
                },
                methods: {
                  mount: function (e, t, n) {
                    o.push(function (n) {
                      return n(e, { key: t });
                    }),
                      this.updateSync(n);
                  },
                  updateSync: function (e) {
                    this._update(this._render(), !1),
                      this.$children.forEach(function (e) {
                        return e._update(e._render(), !1);
                      }),
                      e();
                  },
                  unmount: function (e, t) {
                    for (var n = 0; n < i.length; n++) {
                      var r = i[n];
                      if (r.key === e) {
                        i.splice(n, 1);
                        break;
                      }
                    }
                    this.updateSync(t);
                  },
                },
              });
            ai || a.$mount(di.getElementById("app"));
            var c = Object.create(
              {
                mount: function (e, t, n) {
                  var r = to(Qi, t)(e);
                  a.mount(r, t, n);
                },
                unmount: function (e, t) {
                  a.unmount(e, t);
                },
              },
              {
                config: {
                  writable: !0,
                  enumerable: !0,
                  configurable: !0,
                  value: n,
                },
                onLaunch: {
                  writable: !0,
                  enumerable: !0,
                  value: function (e) {
                    (wi.router = Object.assign(
                      { params: null === e || void 0 === e ? void 0 : e.query },
                      e
                    )),
                      ai && a.$mount(di.getElementById("app")),
                      (r = a.$refs.app),
                      null != r &&
                        Object(k["h"])(r.$options.onLaunch) &&
                        r.$options.onLaunch.call(r, e);
                  },
                },
                onShow: {
                  writable: !0,
                  enumerable: !0,
                  value: function (e) {
                    (wi.router = Object.assign(
                      { params: null === e || void 0 === e ? void 0 : e.query },
                      e
                    )),
                      null != r &&
                        Object(k["h"])(r.$options.onShow) &&
                        r.$options.onShow.call(r, e);
                  },
                },
                onHide: {
                  writable: !0,
                  enumerable: !0,
                  value: function (e) {
                    null != r &&
                      Object(k["h"])(r.$options.onHide) &&
                      r.$options.onHide.call(r, e);
                  },
                },
              }
            );
            return (wi.app = c), wi.app;
          }
          function io(e, t) {
            return function (n) {
              var r,
                i = {
                  props: { tid: String },
                  created: function () {
                    Ci(this, t),
                      this.$nextTick(function () {
                        Ni(t, "onShow");
                      });
                  },
                };
              if (Object(k["f"])(n.mixins)) {
                var o = n.mixins,
                  a = o.length - 1;
                (null === (r = o[a].props) || void 0 === r ? void 0 : r.tid)
                  ? (n.mixins[a] = i)
                  : n.mixins.push(i);
              } else n.mixins = [i];
              return e(
                ai ? "div" : "root",
                { key: t, id: t, class: ai ? "taro_page" : "" },
                [e(Object.assign({}, n), { tid: t })]
              );
            };
          }
          function oo() {
            var e = ti.get(T.Hooks),
              t = function (e, t) {
                return e.$options[t];
              },
              n = function (e) {
                e.type = e.type.replace(/-/g, "");
              };
            (e.getLifecycle = t), (e.modifyMpEvent = n);
          }
          function ao(e, t, n) {
            var r,
              i = [];
            Object(k["d"])(
              !Object(k["h"])(e._component),
              "\u5165\u53e3\u7ec4\u4ef6\u4e0d\u652f\u6301\u4f7f\u7528\u51fd\u6570\u5f0f\u7ec4\u4ef6"
            ),
              oo(),
              (e._component.render = function () {
                return i.slice();
              }),
              ai || (r = e.mount("#app"));
            var o = Object.create(
              {
                mount: function (e, n, r) {
                  var o = io(t, n)(e);
                  i.push(o), this.updateAppInstance(r);
                },
                unmount: function (e, t) {
                  (i = i.filter(function (t) {
                    return t.key !== e;
                  })),
                    this.updateAppInstance(t);
                },
                updateAppInstance: function (e) {
                  r.$forceUpdate(), r.$nextTick(e);
                },
              },
              {
                config: {
                  writable: !0,
                  enumerable: !0,
                  configurable: !0,
                  value: n,
                },
                onLaunch: {
                  writable: !0,
                  enumerable: !0,
                  value: function (t) {
                    var n;
                    (wi.router = Object.assign(
                      { params: null === t || void 0 === t ? void 0 : t.query },
                      t
                    )),
                      ai && (r = e.mount("#app"));
                    var i =
                      null ===
                        (n =
                          null === r || void 0 === r ? void 0 : r.$options) ||
                      void 0 === n
                        ? void 0
                        : n.onLaunch;
                    Object(k["h"])(i) && i.call(r, t);
                  },
                },
                onShow: {
                  writable: !0,
                  enumerable: !0,
                  value: function (e) {
                    var t;
                    wi.router = Object.assign(
                      { params: null === e || void 0 === e ? void 0 : e.query },
                      e
                    );
                    var n =
                      null ===
                        (t =
                          null === r || void 0 === r ? void 0 : r.$options) ||
                      void 0 === t
                        ? void 0
                        : t.onShow;
                    Object(k["h"])(n) && n.call(r, e);
                  },
                },
                onHide: {
                  writable: !0,
                  enumerable: !0,
                  value: function (e) {
                    var t,
                      n =
                        null ===
                          (t =
                            null === r || void 0 === r ? void 0 : r.$options) ||
                        void 0 === t
                          ? void 0
                          : t.onHide;
                    Object(k["h"])(n) && n.call(r, e);
                  },
                },
              }
            );
            return (wi.app = o), wi.app;
          }
          var co = function (e) {
              return function (t) {
                var n = Vi.useContext(Wi) || P,
                  r = Vi.useRef(t);
                r.current !== t && (r.current = t),
                  Vi.useLayoutEffect(function () {
                    var t = Ai(n),
                      i = !1;
                    null == t && ((i = !0), (t = Object.create(null))), (t = t);
                    var o = function () {
                      return r.current.apply(r, arguments);
                    };
                    return (
                      Object(k["h"])(t[e])
                        ? (t[e] = [t[e], o])
                        : (t[e] = [].concat(Object(l["a"])(t[e] || []), [o])),
                      i && Ci(t, n),
                      function () {
                        var t = Ai(n),
                          r = t[e];
                        r === o
                          ? (t[e] = void 0)
                          : Object(k["f"])(r) &&
                            (t[e] = r.filter(function (e) {
                              return e !== o;
                            }));
                      }
                    );
                  }, []);
              };
            },
            uo = co("componentDidShow"),
            so = co("componentDidHide"),
            lo = co("onPullDownRefresh"),
            fo = co("onReachBottom"),
            ho = co("onPageScroll"),
            po = co("onResize"),
            vo = co("onShareAppMessage"),
            bo = co("onTabItemTap"),
            go = co("onTitleClick"),
            mo = co("onOptionMenuClick"),
            yo = co("onPullIntercept"),
            Oo = co("onShareTimeline"),
            jo = co("onAddToFavorites"),
            wo = co("onReady"),
            ko = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              return e
                ? wi.router
                : Vi.useMemo(function () {
                    return wi.router;
                  }, []);
            },
            Eo = function () {};
          function _o(e) {
            return null == e ? "" : "/" === e.charAt(0) ? e.slice(1) : e;
          }
          var So = function (e, t) {
            var n,
              r,
              i,
              o = wi.router,
              a = function () {
                setTimeout(function () {
                  t ? e.call(t) : e();
                }, 1);
              };
            if (null !== o) {
              var c = null,
                u = Bi(_o(o.path), o.params);
              (c = di.getElementById(u)),
                (null === c || void 0 === c ? void 0 : c.pendingUpdate)
                  ? ai
                    ? (null !==
                        (i =
                          null ===
                            (r =
                              null === (n = c.firstChild) || void 0 === n
                                ? void 0
                                : n["componentOnReady"]) || void 0 === r
                            ? void 0
                            : r.call(n).then(function () {
                                a();
                              })) &&
                        void 0 !== i) ||
                      a()
                    : c.enqueueUpdateCallback(e, t)
                  : a();
            } else a();
          };
        }.call(
          this,
          n(44),
          n(23),
          n(6)["document"],
          n(6)["window"],
          n(6)["requestAnimationFrame"],
          n(6)["cancelAnimationFrame"]
        );
    },
  },
]);
