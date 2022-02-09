module.exports = (function(e) {
  var t = {};
  function a(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, a), (o.l = !0), o.exports;
  }
  return (
    (a.m = e),
    (a.c = t),
    (a.d = function(e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function(e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          a.d(
            n,
            o,
            function(t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (a.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = ""),
    a((a.s = 2))
  );
})([
  function(e, t) {
    e.exports = require("miniprogram-render");
  },
  function(e, t, a) {
    const n = a(0),
      { cache: o, tool: i } = n.$$adapter;
    function r(e) {
      e.detail || (e.detail = {}),
        void 0 !== e.markerId && (e.detail.markerId = e.markerId),
        void 0 !== e.controlId && (e.detail.controlId = e.controlId),
        void 0 !== e.name && (e.detail.name = e.name),
        void 0 !== e.longitude && (e.detail.longitude = e.longitude),
        void 0 !== e.latitude && (e.detail.latitude = e.latitude);
    }
    function l(e) {
      if ("string" == typeof e)
        try {
          e = JSON.parse(e);
        } catch (t) {
          e = void 0;
        }
      return e;
    }
    function s(e, t, a) {
      const n = e.getAttribute(t);
      return "false" !== n && (!(!a || void 0 !== n) || !!n);
    }
    function c(e, t, a) {
      const n = parseFloat(e.getAttribute(t));
      return isNaN(n) ? a : n;
    }
    function d(e) {
      (e.currentTarget && e.currentTarget.dataset.privateNodeId) ||
        ((e.currentTarget = e.currentTarget || { dataset: {} }),
        (e.currentTarget.dataset.privateNodeId =
          e.target.dataset.privateNodeId));
    }
    const g = {
      "cover-image": {
        wxCompName: "cover-image",
        properties: [
          {
            name: "src",
            get(e) {
              const t = o.getWindow(e.$$pageId);
              return e.src ? i.completeURL(e.src, t.location.origin, !0) : "";
            },
          },
        ],
        handles: {
          onCoverImageLoad(e) {
            this.callSingleEvent("load", e);
          },
          onCoverImageError(e) {
            this.callSingleEvent("error", e);
          },
        },
      },
      "cover-view": {
        wxCompName: "cover-view",
        properties: [
          { name: "scrollTop", get: (e) => e.getAttribute("scroll-top") },
          {
            name: "forceInCover",
            get: (e) => void 0 !== e.getAttribute("marker-id"),
          },
          { name: "markerId", get: (e) => e.getAttribute("marker-id") },
        ],
      },
      "match-media": {
        wxCompName: "match-media",
        properties: [
          { name: "minWidth", get: (e) => +e.getAttribute("min-width") || 0 },
          { name: "maxWidth", get: (e) => +e.getAttribute("max-width") || 0 },
          { name: "width", get: (e) => +e.getAttribute("width") || 0 },
          { name: "minHeight", get: (e) => +e.getAttribute("min-height") || 0 },
          { name: "maxHeight", get: (e) => +e.getAttribute("max-height") || 0 },
          { name: "height", get: (e) => +e.getAttribute("height") || 0 },
          {
            name: "orientation",
            get: (e) => e.getAttribute("orientation") || "",
          },
        ],
      },
      "movable-area": {
        wxCompName: "movable-area",
        properties: [{ name: "scaleArea", get: (e) => s(e, "scale-area") }],
      },
      "page-container": {
        wxCompName: "page-container",
        properties: [
          { name: "show", get: (e) => s(e, "show") },
          { name: "duration", get: (e) => c(e, "duration", 300) },
          { name: "zIndex", get: (e) => c(e, "z-index", 100) },
          { name: "overlay", get: (e) => s(e, "overlay", !0) },
          {
            name: "position",
            get: (e) => e.getAttribute("position") || "bottom",
          },
          { name: "round", get: (e) => s(e, "round") },
          { name: "closeOnSlideDown", get: (e) => s(e, "close-on-slideDown") },
          {
            name: "overlayStyle",
            get: (e) => e.getAttribute("overlay-style") || "",
          },
          {
            name: "customStyle",
            get: (e) => e.getAttribute("custom-style") || "",
          },
        ],
        handles: {
          onPageContainerBeforeenter(e) {
            this.callSingleEvent("beforeenter", e);
            const t = this.getDomNodeFromEvt(e);
            t && t.$$setAttributeWithoutUpdate("show", !0);
          },
          onPageContainerEnter(e) {
            this.callSingleEvent("enter", e);
          },
          onPageContainerAfterenter(e) {
            this.callSingleEvent("afterenter", e);
          },
          onPageContainerBeforeleave(e) {
            this.callSingleEvent("beforeleave", e);
            const t = this.getDomNodeFromEvt(e);
            t && t.$$setAttributeWithoutUpdate("show", !1);
          },
          onPageContainerLeave(e) {
            this.callSingleEvent("leave", e);
          },
          onPageContainerAfterleave(e) {
            this.callSingleEvent("afterleave", e);
          },
          onPageContainerClickoverlay(e) {
            this.callSingleEvent("clickoverlay", e);
          },
        },
      },
      "scroll-view": {
        wxCompName: "scroll-view",
        properties: [
          { name: "scrollX", get: (e) => s(e, "scroll-x") },
          { name: "scrollY", get: (e) => s(e, "scroll-y") },
          {
            name: "upperThreshold",
            get: (e) => e.getAttribute("upper-threshold") || "50",
          },
          {
            name: "lowerThreshold",
            get: (e) => e.getAttribute("lower-threshold") || "50",
          },
          {
            name: "scrollTop",
            canBeUserChanged: !0,
            get: (e) => e.getAttribute("scroll-top") || "",
          },
          {
            name: "scrollLeft",
            canBeUserChanged: !0,
            get: (e) => e.getAttribute("scroll-left") || "",
          },
          {
            name: "scrollWithAnimation",
            get: (e) => s(e, "scroll-with-animation"),
          },
          { name: "enableBackToTop", get: (e) => s(e, "enable-back-to-top") },
          { name: "enableFlex", get: (e) => s(e, "enable-flex") },
          { name: "scrollAnchoring", get: (e) => s(e, "scroll-anchoring") },
          { name: "refresherEnabled", get: (e) => s(e, "refresher-enabled") },
          {
            name: "refresherThreshold",
            get: (e) => e.getAttribute("refresher-threshold") || "45",
          },
          {
            name: "refresherDefaultStyle",
            get: (e) => e.getAttribute("refresher-default-style") || "black",
          },
          {
            name: "refresherBackground",
            get: (e) => e.getAttribute("refresher-background") || "#FFF",
          },
          {
            name: "refresherTriggered",
            get(e) {
              const t = s(e, "refresher-triggered");
              return !s(e, "refresher-enabled") && t
                ? (e.$$setAttributeWithoutUpdate("refresher-triggered", !1), !1)
                : t;
            },
          },
        ],
        handles: {
          onScrollViewScrolltoupper(e) {
            this.callSingleEvent("scrolltoupper", e);
          },
          onScrollViewScrolltolower(e) {
            this.callSingleEvent("scrolltolower", e);
          },
          onScrollViewScroll(e) {
            const t = this.getDomNodeFromEvt(e);
            t &&
              (t.$$setAttributeWithoutUpdate("scroll-into-view", ""),
              t.$$setAttributeWithoutUpdate("scroll-top", e.detail.scrollTop),
              t.$$setAttributeWithoutUpdate("scroll-left", e.detail.scrollLeft),
              (t._oldValues = t._oldValues || {}),
              (t._oldValues.scrollIntoView = ""),
              (t._oldValues.scrollTop = e.detail.scrollTop || ""),
              (t._oldValues.scrollLeft = e.detail.scrollLeft || ""),
              this.callSimpleEvent("scroll", e));
          },
          onScrollViewRefresherPulling(e) {
            this.callSingleEvent("refresherpulling", e);
          },
          onScrollViewRefresherRefresh(e) {
            const t = this.getDomNodeFromEvt(e);
            t && t.setAttribute("refresher-triggered", !0),
              this.callSingleEvent("refresherrefresh", e);
          },
          onScrollViewRefresherRestore(e) {
            const t = this.getDomNodeFromEvt(e);
            t && t.setAttribute("refresher-triggered", !1),
              this.callSingleEvent("refresherrestore", e);
          },
          onScrollViewRefresherAbort(e) {
            const t = this.getDomNodeFromEvt(e);
            t && t.setAttribute("refresher-triggered", !1),
              this.callSingleEvent("refresherabort", e);
          },
        },
      },
      swiper: {
        wxCompName: "swiper",
        properties: [
          { name: "indicatorDots", get: (e) => s(e, "indicator-dots") },
          {
            name: "indicatorColor",
            get: (e) =>
              e.getAttribute("indicator-color") || "rgba(0, 0, 0, .3)",
          },
          {
            name: "indicatorActiveColor",
            get: (e) => e.getAttribute("indicator-active-color") || "#000000",
          },
          { name: "autoplay", get: (e) => s(e, "autoplay") },
          {
            name: "current",
            canBeUserChanged: !0,
            get: (e) => +e.getAttribute("current") || 0,
          },
          { name: "interval", get: (e) => c(e, "interval", 5e3) },
          { name: "duration", get: (e) => c(e, "duration", 500) },
          { name: "circular", get: (e) => s(e, "circular") },
          { name: "vertical", get: (e) => s(e, "vertical") },
          {
            name: "previousMargin",
            get: (e) => e.getAttribute("previous-margin") || "0px",
          },
          {
            name: "nextMargin",
            get: (e) => e.getAttribute("next-margin") || "0px",
          },
          { name: "snapToEdge", get: (e) => s(e, "snap-to-edge") },
          {
            name: "displayMultipleItems",
            get: (e) => c(e, "display-multiple-items", 1),
          },
          {
            name: "skipHiddenItemLayout",
            get: (e) => s(e, "skip-hidden-item-layout"),
          },
          {
            name: "easingFunction",
            get: (e) => e.getAttribute("easing-function") || "default",
          },
        ],
        handles: {
          onSwiperChange(e) {
            const t = this.getDomNodeFromEvt(e);
            t &&
              (t.$$setAttributeWithoutUpdate("current", e.detail.current),
              (t._oldValues = t._oldValues || {}),
              (t._oldValues.current = e.detail.current),
              this.callSingleEvent("change", e));
          },
          onSwiperTransition(e) {
            this.callSingleEvent("transition", e);
          },
          onSwiperAnimationfinish(e) {
            this.callSingleEvent("animationfinish", e);
          },
        },
      },
      view: {
        wxCompName: "view",
        properties: [
          {
            name: "hoverClass",
            get: (e) => e.getAttribute("hover-class") || "none",
          },
          {
            name: "hoverStopPropagation",
            get: (e) => s(e, "hover-stop-propagation"),
          },
          { name: "hoverStartTime", get: (e) => c(e, "hover-start-time", 50) },
          { name: "hoverStayTime", get: (e) => c(e, "hover-stay-time", 400) },
        ],
      },
      icon: {
        wxCompName: "icon",
        properties: [
          { name: "type", get: (e) => e.getAttribute("type") || "" },
          { name: "size", get: (e) => e.getAttribute("size") || "23" },
          { name: "color", get: (e) => e.getAttribute("color") || "" },
        ],
      },
      progress: {
        wxCompName: "progress",
        properties: [
          { name: "percent", get: (e) => +e.getAttribute("percent") || 0 },
          { name: "showInfo", get: (e) => s(e, "show-info") },
          {
            name: "borderRadius",
            get: (e) => e.getAttribute("border-radius") || "0",
          },
          { name: "fontSize", get: (e) => e.getAttribute("font-size") || "16" },
          {
            name: "strokeWidth",
            get: (e) => e.getAttribute("stroke-width") || "6",
          },
          { name: "color", get: (e) => e.getAttribute("color") || "#09BB07" },
          {
            name: "activeColor",
            get: (e) => e.getAttribute("active-color") || "#09BB07",
          },
          {
            name: "backgroundColor",
            get: (e) => e.getAttribute("background-color") || "#EBEBEB",
          },
          { name: "active", get: (e) => s(e, "active") },
          {
            name: "activeMode",
            get: (e) => e.getAttribute("active-mode") || "backwards",
          },
          { name: "duration", get: (e) => c(e, "duration", 30) },
        ],
        handles: {
          onProgressActiveEnd(e) {
            this.callSingleEvent("activeend", e);
          },
        },
      },
      "rich-text": {
        wxCompName: "rich-text",
        properties: [
          {
            name: "nodes",
            get(e) {
              const t = e.getAttribute("nodes"),
                a = l(t);
              return void 0 !== a ? a : t || [];
            },
          },
          { name: "space", get: (e) => e.getAttribute("space") || "" },
        ],
      },
      text: {
        wxCompName: "text",
        properties: [
          { name: "selectable", get: (e) => s(e, "selectable") },
          { name: "space", get: (e) => e.getAttribute("space") || "" },
          { name: "decode", get: (e) => s(e, "decode") },
        ],
      },
      button: {
        wxCompName: "button",
        properties: [
          { name: "size", get: (e) => e.getAttribute("size") || "default" },
          { name: "type", get: (e) => e.getAttribute("type") || void 0 },
          { name: "plain", get: (e) => s(e, "plain") },
          { name: "disabled", get: (e) => s(e, "disabled") },
          { name: "loading", get: (e) => s(e, "loading") },
          { name: "formType", get: (e) => e.getAttribute("form-type") || "" },
          { name: "openType", get: (e) => e.getAttribute("open-type") || "" },
          {
            name: "hoverClass",
            get: (e) => e.getAttribute("hover-class") || "button-hover",
          },
          {
            name: "hoverStopPropagation",
            get: (e) => s(e, "hover-stop-propagation"),
          },
          { name: "hoverStartTime", get: (e) => c(e, "hover-start-time", 20) },
          { name: "hoverStayTime", get: (e) => c(e, "hover-stay-time", 70) },
          { name: "lang", get: (e) => e.getAttribute("lang") || "en" },
          {
            name: "sessionFrom",
            get: (e) => e.getAttribute("session-from") || "",
          },
          {
            name: "sendMessageTitle",
            get: (e) => e.getAttribute("send-message-title") || "",
          },
          {
            name: "sendMessagePath",
            get: (e) => e.getAttribute("send-message-path") || "",
          },
          {
            name: "sendMessageImg",
            get: (e) => e.getAttribute("send-message-img") || "",
          },
          {
            name: "appParameter",
            get: (e) => e.getAttribute("app-parameter") || "",
          },
          { name: "showMessageCard", get: (e) => s(e, "show-message-card") },
          {
            name: "businessId",
            get: (e) => e.getAttribute("business-id") || "",
          },
          { name: "shareType", get: (e) => c(e, "share-type", 27) },
          { name: "shareMode", get: (e) => e.getAttribute("share-mode") },
        ],
        handles: {
          onButtonGetUserInfo(e) {
            this.callSingleEvent("getuserinfo", e);
          },
          onButtonContact(e) {
            this.callSingleEvent("contact", e);
          },
          onButtonGetPhoneNumber(e) {
            this.callSingleEvent("getphonenumber", e);
          },
          onButtonError(e) {
            this.callSingleEvent("error", e);
          },
          onButtonOpenSetting(e) {
            this.callSingleEvent("opensetting", e);
          },
          onButtonLaunchApp(e) {
            this.callSingleEvent("launchapp", e);
          },
          onButtonGetRealnameAuthInfo(e) {
            this.callSingleEvent("getrealnameauthinfo", e);
          },
        },
      },
      editor: {
        wxCompName: "editor",
        properties: [
          { name: "readOnly", get: (e) => s(e, "read-only") },
          {
            name: "placeholder",
            get: (e) => e.getAttribute("placeholder") || "",
          },
          { name: "showImgSize", get: (e) => s(e, "show-img-size") },
          { name: "showImgToolbar", get: (e) => s(e, "show-img-toolbar") },
          { name: "showImgResize", get: (e) => s(e, "show-img-resize") },
        ],
        handles: {
          onEditorReady(e) {
            this.callSingleEvent("ready", e);
          },
          onEditorFocus(e) {
            this.callSingleEvent("focus", e);
          },
          onEditorBlur(e) {
            this.callSingleEvent("blur", e);
          },
          onEditorInput(e) {
            this.callSingleEvent("input", e);
          },
          onEditorStatusChange(e) {
            this.callSingleEvent("statuschange", e);
          },
        },
      },
      form: {
        wxCompName: "form",
        properties: [
          { name: "reportSubmit", get: (e) => s(e, "report-submit") },
          {
            name: "reportSubmitTimeout",
            get: (e) => +e.getAttribute("report-submit-timeout") || 0,
          },
        ],
        handles: {
          onFormSubmit(e) {
            const t = this.getDomNodeFromEvt(e);
            t && (t._formId = e.detail.formId);
          },
          onFormReset() {},
        },
      },
      INPUT: {
        wxCompName: "input",
        properties: [
          { name: "value", canBeUserChanged: !0, get: (e) => e.value || "" },
          {
            name: "type",
            get(e) {
              const t = e.type || "text";
              return "password" !== t ? t : "text";
            },
          },
          {
            name: "password",
            get: (e) => "password" === e.type || s(e, "password"),
          },
          { name: "placeholder", get: (e) => e.placeholder },
          {
            name: "placeholderStyle",
            get: (e) => e.getAttribute("placeholder-style") || "",
          },
          {
            name: "placeholderClass",
            get: (e) =>
              e.getAttribute("placeholder-class") || "input-placeholder",
          },
          { name: "disabled", get: (e) => e.disabled },
          { name: "maxlength", get: (e) => c(e, "maxlength", 140) },
          {
            name: "cursorSpacing",
            get: (e) => +e.getAttribute("cursor-spacing") || 0,
          },
          { name: "autoFocus", get: (e) => s(e, "autofocus") },
          { name: "focus", canBeUserChanged: !0, get: (e) => s(e, "focus") },
          {
            name: "confirmType",
            get: (e) => e.getAttribute("confirm-type") || "done",
          },
          { name: "confirmHold", get: (e) => s(e, "confirm-hold") },
          { name: "cursor", get: (e) => c(e, "cursor", -1) },
          { name: "selectionStart", get: (e) => c(e, "selection-start", -1) },
          { name: "selectionEnd", get: (e) => c(e, "selection-end", -1) },
          { name: "adjustPosition", get: (e) => s(e, "adjust-position", !0) },
          { name: "holdKeyboard", get: (e) => s(e, "hold-keyboard") },
          {
            name: "checked",
            canBeUserChanged: !0,
            get: (e) => s(e, "checked"),
          },
          { name: "color", get: (e) => e.getAttribute("color") || "#09BB07" },
        ],
        handles: {
          onInputInput(e) {
            const t = this.getDomNodeFromEvt(e);
            if (!t) return;
            const a = "" + e.detail.value;
            t.$$setAttributeWithoutUpdate("value", a),
              (t._oldValues = t._oldValues || {}),
              (t._oldValues.value = a),
              this.callEvent("input", e);
          },
          onInputFocus(e) {
            const t = this.getDomNodeFromEvt(e);
            t &&
              ((t._inputOldValue = t.value),
              t.$$setAttributeWithoutUpdate("focus", !0),
              (t._oldValues = t._oldValues || {}),
              (t._oldValues.focus = !0),
              this.callSimpleEvent("focus", e),
              this.callEvent("focusin", e));
          },
          onInputBlur(e) {
            const t = this.getDomNodeFromEvt(e);
            t &&
              (t.$$setAttributeWithoutUpdate("focus", !1),
              (t._oldValues = t._oldValues || {}),
              (t._oldValues.focus = !1),
              void 0 !== t._inputOldValue &&
                t.value !== t._inputOldValue &&
                ((t._inputOldValue = void 0), this.callEvent("change", e)),
              this.callSimpleEvent("blur", e),
              this.callEvent("focusout", e));
          },
          onInputConfirm(e) {
            this.callSimpleEvent("confirm", e);
          },
          onInputKeyBoardHeightChange(e) {
            this.callSingleEvent("keyboardheightchange", e);
          },
          onRadioChange(e) {
            const t = this.getDomNodeFromEvt(e);
            if (!t) return;
            const a = o.getWindow(this.pageId),
              n = e.detail.value,
              i = t.name;
            if (n === t.value) {
              t.$$setAttributeWithoutUpdate("checked", !0),
                (t._oldValues = t._oldValues || {}),
                (t._oldValues.checked = !0);
              const n = a.document.querySelectorAll(`input[name=${i}]`) || [];
              for (const e of n)
                "radio" === e.type &&
                  e !== t &&
                  (e.setAttribute("checked", !1),
                  (e._oldValues = e._oldValues || {}),
                  (e._oldValues.checked = !1));
              this.callEvent("$$radioChange", e);
            }
            this.callEvent("input", e), this.callEvent("change", e);
          },
          onCheckboxChange(e) {
            const t = this.getDomNodeFromEvt(e);
            if (!t) return;
            (e.detail.value || []).indexOf(t.value) >= 0
              ? (t.$$setAttributeWithoutUpdate("checked", !0),
                (t._oldValues = t._oldValues || {}),
                (t._oldValues.checked = !0))
              : (t.$$setAttributeWithoutUpdate("checked", !1),
                (t._oldValues = t._oldValues || {}),
                (t._oldValues.checked = !1)),
              this.callEvent("$$checkboxChange", e),
              this.callEvent("input", e),
              this.callEvent("change", e);
          },
        },
      },
      picker: {
        wxCompName: "picker",
        properties: [
          {
            name: "headerText",
            get: (e) => e.getAttribute("header-text") || "",
          },
          { name: "mode", get: (e) => e.getAttribute("mode") || "selector" },
          { name: "disabled", get: (e) => s(e, "disabled") },
          {
            name: "range",
            get(e) {
              if ("SELECT" === e.tagName)
                return e.options.map((e) => ({
                  label: e.label,
                  value: e.value,
                }));
              let t = e.getAttribute("range");
              if ("string" == typeof t) {
                const e = l(t);
                t = void 0 !== e ? e : t.split(",");
              }
              return void 0 !== t ? t : [];
            },
          },
          {
            name: "rangeKey",
            get: (e) =>
              "SELECT" === e.tagName
                ? "label"
                : e.getAttribute("range-key") || "",
          },
          {
            name: "value",
            canBeUserChanged: !0,
            get(e) {
              if ("SELECT" === e.tagName) return +e.selectedIndex || 0;
              const t = e.getAttribute("mode") || "selector";
              let a = e.getAttribute("value");
              if ("selector" === t) return +a || 0;
              if ("multiSelector" === t) {
                if ("string" == typeof a) {
                  const e = l(a);
                  (a = void 0 !== e ? e : a.split(",")),
                    (a = a.map((e) => parseInt(e, 10)));
                }
                return a || [];
              }
              if ("time" === t) return a || "";
              if ("date" === t) return a || "0";
              if ("region" === t) {
                if ("string" == typeof a) {
                  const e = l(a);
                  a = void 0 !== e ? e : a.split(",");
                }
                return a || [];
              }
              return a;
            },
          },
          { name: "start", get: (e) => e.getAttribute("start") || "" },
          { name: "end", get: (e) => e.getAttribute("end") || "" },
          { name: "fields", get: (e) => e.getAttribute("fields") || "day" },
          {
            name: "customItem",
            get: (e) => e.getAttribute("custom-item") || "",
          },
        ],
        handles: {
          onPickerChange(e) {
            const t = this.getDomNodeFromEvt(e);
            if (!t) return;
            let a = e.detail.value;
            (t._oldValues = t._oldValues || {}),
              (t._oldValues.value = a),
              "SELECT" === t.tagName
                ? ((a = +a),
                  t.$$setAttributeWithoutUpdate(
                    "value",
                    (t.options[a] && t.options[a].value) || ""
                  ),
                  t.$$setAttributeWithoutUpdate("selectedIndex", a),
                  t.$$resetOptions(),
                  this.callEvent("change", e))
                : (t.$$setAttributeWithoutUpdate("value", a),
                  this.callSingleEvent("change", e));
          },
          onPickerColumnChange(e) {
            this.callSingleEvent("columnchange", e);
          },
          onPickerCancel(e) {
            this.callSingleEvent("cancel", e);
          },
        },
      },
      "picker-view": {
        wxCompName: "picker-view",
        properties: [
          {
            name: "value",
            canBeUserChanged: !0,
            get(e) {
              let t = e.getAttribute("value");
              if ("string" == typeof t) {
                const e = l(t);
                (t = void 0 !== e ? e : t.split(",")),
                  (t = t.map((e) => parseInt(e, 10)));
              }
              return void 0 !== t ? t : [];
            },
          },
          {
            name: "indicatorStyle",
            get: (e) => e.getAttribute("indicator-style") || "",
          },
          {
            name: "indicatorClass",
            get: (e) => e.getAttribute("indicator-class") || "",
          },
          { name: "maskStyle", get: (e) => e.getAttribute("mask-style") || "" },
          { name: "maskClass", get: (e) => e.getAttribute("mask-class") || "" },
        ],
        handles: {
          onPickerViewChange(e) {
            const t = this.getDomNodeFromEvt(e);
            t &&
              (t.$$setAttributeWithoutUpdate("value", e.detail.value),
              (t._oldValues = t._oldValues || {}),
              (t._oldValues.value = e.detail.value),
              this.callSingleEvent("change", e));
          },
          onPickerViewPickstart(e) {
            this.callSingleEvent("pickstart", e);
          },
          onPickerViewPickend(e) {
            this.callSingleEvent("pickend", e);
          },
        },
      },
      slider: {
        wxCompName: "slider",
        properties: [
          { name: "min", get: (e) => +e.getAttribute("min") || 0 },
          { name: "max", get: (e) => c(e, "max", 100) },
          { name: "step", get: (e) => c(e, "step", 1) },
          { name: "disabled", get: (e) => s(e, "disabled") },
          {
            name: "value",
            canBeUserChanged: !0,
            get: (e) => +e.getAttribute("value") || 0,
          },
          { name: "color", get: (e) => e.getAttribute("color") || "#e9e9e9" },
          {
            name: "selectedColor",
            get: (e) => e.getAttribute("selected-color") || "#1aad19",
          },
          {
            name: "activeColor",
            get: (e) => e.getAttribute("active-color") || "#1aad19",
          },
          {
            name: "backgroundColor",
            get: (e) => e.getAttribute("background-color") || "#e9e9e9",
          },
          { name: "blockSize", get: (e) => c(e, "block-size", 28) },
          {
            name: "blockColor",
            get: (e) => e.getAttribute("block-color") || "#ffffff",
          },
          { name: "showValue", get: (e) => s(e, "show-value") },
        ],
        handles: {
          onSliderChange(e) {
            const t = this.getDomNodeFromEvt(e);
            t &&
              (t.$$setAttributeWithoutUpdate("value", e.detail.value),
              (t._oldValues = t._oldValues || {}),
              (t._oldValues.value = e.detail.value),
              this.callSingleEvent("change", e));
          },
          onSliderChanging(e) {
            this.callSingleEvent("changing", e);
          },
        },
      },
      switch: {
        wxCompName: "switch",
        properties: [
          {
            name: "checked",
            canBeUserChanged: !0,
            get: (e) => s(e, "checked"),
          },
          { name: "disabled", get: (e) => s(e, "disabled") },
          { name: "type", get: (e) => e.getAttribute("type") || "switch" },
          { name: "color", get: (e) => e.getAttribute("color") || "#04BE02" },
        ],
        handles: {
          onSwitchChange(e) {
            const t = this.getDomNodeFromEvt(e);
            t &&
              (t.$$setAttributeWithoutUpdate("checked", e.detail.value),
              (t._oldValues = t._oldValues || {}),
              (t._oldValues.checked = e.detail.value),
              this.callSingleEvent("change", e));
          },
        },
      },
      TEXTAREA: {
        wxCompName: "textarea",
        properties: [
          { name: "value", canBeUserChanged: !0, get: (e) => e.value || "" },
          { name: "placeholder", get: (e) => e.placeholder },
          {
            name: "placeholderStyle",
            get: (e) => e.getAttribute("placeholder-style") || "",
          },
          {
            name: "placeholderClass",
            get: (e) =>
              e.getAttribute("placeholder-class") || "textarea-placeholder",
          },
          { name: "disabled", get: (e) => e.disabled },
          { name: "maxlength", get: (e) => c(e, "maxlength", 140) },
          { name: "autoFocus", get: (e) => s(e, "autofocus") },
          { name: "focus", canBeUserChanged: !0, get: (e) => s(e, "focus") },
          { name: "autoHeight", get: (e) => s(e, "auto-height") },
          { name: "fixed", get: (e) => s(e, "fixed") },
          {
            name: "cursorSpacing",
            get: (e) => +e.getAttribute("cursor-spacing") || 0,
          },
          { name: "cursor", get: (e) => c(e, "cursor", -1) },
          { name: "showConfirmBar", get: (e) => s(e, "show-confirm-bar", !0) },
          { name: "selectionStart", get: (e) => c(e, "selection-start", -1) },
          { name: "selectionEnd", get: (e) => c(e, "selection-end", -1) },
          { name: "adjustPosition", get: (e) => s(e, "adjust-position", !0) },
          { name: "holdKeyboard", get: (e) => s(e, "hold-keyboard") },
          {
            name: "disableDefaultPadding",
            get: (e) => s(e, "disable-default-padding"),
          },
        ],
        handles: {
          onTextareaFocus(e) {
            const t = this.getDomNodeFromEvt(e);
            t &&
              ((t._textareaOldValue = t.value),
              t.$$setAttributeWithoutUpdate("focus", !0),
              (t._oldValues = t._oldValues || {}),
              (t._oldValues.focus = !0),
              this.callSimpleEvent("focus", e),
              this.callEvent("focusin", e));
          },
          onTextareaBlur(e) {
            const t = this.getDomNodeFromEvt(e);
            t &&
              (t.$$setAttributeWithoutUpdate("focus", !1),
              (t._oldValues = t._oldValues || {}),
              (t._oldValues.focus = !1),
              void 0 !== t._textareaOldValue &&
                t.value !== t._textareaOldValue &&
                ((t._textareaOldValue = void 0), this.callEvent("change", e)),
              this.callSimpleEvent("blur", e),
              this.callEvent("focusout", e));
          },
          onTextareaLineChange(e) {
            this.callSingleEvent("linechange", e);
          },
          onTextareaInput(e) {
            const t = this.getDomNodeFromEvt(e);
            if (!t) return;
            const a = "" + e.detail.value;
            t.$$setAttributeWithoutUpdate("value", a),
              (t._oldValues = t._oldValues || {}),
              (t._oldValues.value = a),
              this.callEvent("input", e);
          },
          onTextareaConfirm(e) {
            this.callSimpleEvent("confirm", e);
          },
          onTextareaKeyBoardHeightChange(e) {
            this.callSingleEvent("keyboardheightchange", e);
          },
        },
      },
      navigator: {
        wxCompName: "navigator",
        properties: [
          { name: "target", get: (e) => e.getAttribute("target") || "self" },
          { name: "url", get: (e) => e.getAttribute("url") || "" },
          {
            name: "openType",
            get: (e) => e.getAttribute("open-type") || "navigate",
          },
          { name: "delta", get: (e) => c(e, "delta", 1) },
          { name: "appId", get: (e) => e.getAttribute("app-id") || "" },
          { name: "path", get: (e) => e.getAttribute("path") || "" },
          { name: "extraData", get: (e) => e.getAttribute("extra-data") || {} },
          {
            name: "version",
            get: (e) => e.getAttribute("version") || "release",
          },
          {
            name: "hoverClass",
            get: (e) => e.getAttribute("hover-class") || "navigator-hover",
          },
          {
            name: "hoverStopPropagation",
            get: (e) => s(e, "hover-stop-propagation"),
          },
          { name: "hoverStartTime", get: (e) => c(e, "hover-start-time", 50) },
          { name: "hoverStayTime", get: (e) => c(e, "hover-stay-time", 600) },
        ],
        handles: {
          onNavigatorSuccess(e) {
            this.callSingleEvent("success", e);
          },
          onNavigatorFail(e) {
            this.callSingleEvent("fail", e);
          },
          onNavigatorComplete(e) {
            this.callSingleEvent("complete", e);
          },
        },
      },
      camera: {
        wxCompName: "camera",
        properties: [
          { name: "mode", get: (e) => e.getAttribute("mode") || "normal" },
          {
            name: "resolution",
            get: (e) => e.getAttribute("resolution") || "medium",
          },
          {
            name: "devicePosition",
            get: (e) => e.getAttribute("device-position") || "back",
          },
          { name: "flash", get: (e) => e.getAttribute("flash") || "auto" },
          {
            name: "frameSize",
            get: (e) => e.getAttribute("frame-size") || "medium",
          },
        ],
        handles: {
          onCameraStop(e) {
            this.callSingleEvent("stop", e);
          },
          onCameraError(e) {
            this.callSingleEvent("error", e);
          },
          onCameraInitDone(e) {
            this.callSingleEvent("initdone", e);
          },
          onCameraScanCode(e) {
            this.callSingleEvent("scancode", e);
          },
        },
      },
      image: {
        wxCompName: "image",
        properties: [
          {
            name: "renderingMode",
            get: (e) => e.getAttribute("rendering-mode") || "",
          },
          {
            name: "src",
            get(e) {
              const t = o.getWindow(e.$$pageId);
              return e.src ? i.completeURL(e.src, t.location.origin, !0) : "";
            },
          },
          { name: "mode", get: (e) => e.getAttribute("mode") || "scaleToFill" },
          { name: "webp", get: (e) => s(e, "webp") },
          { name: "lazyLoad", get: (e) => s(e, "lazy-load") },
          {
            name: "showMenuByLongpress",
            get: (e) => s(e, "show-menu-by-longpress"),
          },
        ],
        handles: {
          onImageLoad(e) {
            this.callSingleEvent("load", e);
          },
          onImageError(e) {
            this.callSingleEvent("error", e);
          },
        },
      },
      "live-player": {
        wxCompName: "live-player",
        properties: [
          {
            name: "src",
            get(e) {
              const t = o.getWindow(e.$$pageId);
              return e.src ? i.completeURL(e.src, t.location.origin, !0) : "";
            },
          },
          { name: "mode", get: (e) => e.getAttribute("mode") || "live" },
          { name: "autoplay", get: (e) => s(e, "autoplay") },
          { name: "muted", get: (e) => s(e, "muted") },
          {
            name: "orientation",
            get: (e) => e.getAttribute("orientation") || "vertical",
          },
          {
            name: "objectFit",
            get: (e) => e.getAttribute("object-fit") || "contain",
          },
          { name: "backgroundMute", get: (e) => s(e, "background-mute") },
          { name: "minCache", get: (e) => c(e, "min-cache", 1) },
          { name: "maxCache", get: (e) => c(e, "max-cache", 3) },
          {
            name: "soundMode",
            get: (e) => e.getAttribute("sound-mode") || "speaker",
          },
          {
            name: "autoPauseIfNavigate",
            get: (e) => s(e, "auto-pause-if-navigate", !0),
          },
          {
            name: "autoPauseIfOpenNative",
            get: (e) => s(e, "auto-pause-if-open-native", !0),
          },
          {
            name: "pictureInPictureMode",
            get(e) {
              let t = e.getAttribute("picture-in-picture-mode");
              if ("string" == typeof t) {
                const e = l(t);
                (t = void 0 !== e ? e : t.split(",")),
                  Array.isArray(t) && 1 === t.length && (t = "" + t[0]);
              }
              return t;
            },
          },
        ],
        handles: {
          onLivePlayerStateChange(e) {
            this.callSingleEvent("statechange", e);
          },
          onLivePlayerFullScreenChange(e) {
            this.callSingleEvent("fullscreenchange", e);
          },
          onLivePlayerNetStatus(e) {
            this.callSingleEvent("netstatus", e);
          },
          onLivePlayerAudioVolumeNotify(e) {
            this.callSingleEvent("audiovolumenotify", e);
          },
          onLivePlayerEnterPictureInPicture(e) {
            this.callSingleEvent("enterpictureinpicture", e);
          },
          onLivePlayerLeavePictureInPicture(e) {
            this.callSingleEvent("leavepictureinpicture", e);
          },
        },
      },
      "live-pusher": {
        wxCompName: "live-pusher",
        properties: [
          {
            name: "url",
            get(e) {
              const t = o.getWindow(e.$$pageId),
                a = e.getAttribute("url");
              return a ? i.completeURL(a, t.location.origin, !0) : "";
            },
          },
          { name: "mode", get: (e) => e.getAttribute("mode") || "RTC" },
          { name: "autopush", get: (e) => s(e, "autopush") },
          { name: "muted", get: (e) => s(e, "muted") },
          { name: "enableCamera", get: (e) => s(e, "enable-camera", !0) },
          { name: "autoFocus", get: (e) => s(e, "auto-focus", !0) },
          {
            name: "orientation",
            get: (e) => e.getAttribute("orientation") || "vertical",
          },
          { name: "beauty", get: (e) => +e.getAttribute("beauty") || 0 },
          { name: "whiteness", get: (e) => +e.getAttribute("whiteness") || 0 },
          { name: "aspect", get: (e) => e.getAttribute("aspect") || "9:16" },
          { name: "minBitrate", get: (e) => c(e, "min-bitrate", 200) },
          { name: "maxBitrate", get: (e) => c(e, "max-bitrate", 1e3) },
          {
            name: "waitingImage",
            get: (e) => e.getAttribute("waiting-image") || "",
          },
          {
            name: "waitingImageHash",
            get: (e) => e.getAttribute("waiting-image-hash") || "",
          },
          { name: "zoom", get: (e) => s(e, "zoom") },
          {
            name: "devicePosition",
            get: (e) => e.getAttribute("device-position") || "front",
          },
          { name: "backgroundMute", get: (e) => s(e, "background-mute") },
          { name: "mirror", get: (e) => s(e, "mirror") },
          { name: "remoteMirror", get: (e) => s(e, "remote-mirror") },
          {
            name: "localMirror",
            get: (e) => e.getAttribute("local-mirror") || "auto",
          },
          {
            name: "audioReverbType",
            get: (e) => +e.getAttribute("audio-reverb-type") || 0,
          },
          { name: "enableMic", get: (e) => s(e, "enable-mic", !0) },
          { name: "enableAgc", get: (e) => s(e, "enable-agc") },
          { name: "enableAns", get: (e) => s(e, "enable-ans") },
          {
            name: "audioVolumeType",
            get: (e) => e.getAttribute("audio-volume-type") || "voicecall",
          },
          { name: "videoWidth", get: (e) => c(e, "video-width", 360) },
          { name: "videoHeight", get: (e) => c(e, "video-height", 640) },
        ],
        handles: {
          onLivePusherStateChange(e) {
            this.callSingleEvent("statechange", e);
          },
          onLivePusherNetStatus(e) {
            this.callSingleEvent("netstatus", e);
          },
          onLivePusherError(e) {
            this.callSingleEvent("error", e);
          },
          onLivePusherBgmStart(e) {
            this.callSingleEvent("bgmstart", e);
          },
          onLivePusherBgmProgress(e) {
            this.callSingleEvent("bgmprogress", e);
          },
          onLivePusherBgmComplete(e) {
            this.callSingleEvent("bgmcomplete", e);
          },
        },
      },
      VIDEO: {
        wxCompName: "video",
        properties: [
          {
            name: "src",
            get(e) {
              const t = o.getWindow(e.$$pageId);
              return e.src ? i.completeURL(e.src, t.location.origin, !0) : "";
            },
          },
          { name: "duration", get: (e) => +e.getAttribute("duration") || 0 },
          { name: "controls", get: (e) => e.controls },
          {
            name: "danmuList",
            get(e) {
              const t = e.getAttribute("danmu-list");
              return void 0 !== t ? t : [];
            },
          },
          { name: "danmuBtn", get: (e) => s(e, "danmu-btn") },
          { name: "enableDanmu", get: (e) => s(e, "enable-danmu") },
          { name: "autoplay", get: (e) => e.autoplay },
          { name: "loop", get: (e) => e.loop },
          { name: "muted", get: (e) => e.muted },
          {
            name: "initialTime",
            get: (e) => +e.getAttribute("initial-time") || 0,
          },
          { name: "direction", get: (e) => c(e, "direction", -1) },
          { name: "showProgress", get: (e) => s(e, "show-progress", !0) },
          {
            name: "showFullscreenBtn",
            get: (e) => s(e, "show-fullscreen-btn", !0),
          },
          { name: "showPlayBtn", get: (e) => s(e, "show-play-btn", !0) },
          {
            name: "showCenterPlayBtn",
            get: (e) => s(e, "show-center-play-btn", !0),
          },
          {
            name: "enableProgressGesture",
            get: (e) => s(e, "enable-progress-gesture", !0),
          },
          {
            name: "objectFit",
            get: (e) => e.getAttribute("object-fit") || "contain",
          },
          {
            name: "poster",
            get(e) {
              const t = o.getWindow(e.$$pageId);
              return e.poster
                ? i.completeURL(e.poster, t.location.origin, !0)
                : "";
            },
          },
          { name: "showMuteBtn", get: (e) => s(e, "show-mute-btn") },
          { name: "title", get: (e) => e.getAttribute("title") || "" },
          {
            name: "playBtnPosition",
            get: (e) => e.getAttribute("play-btn-position") || "bottom",
          },
          {
            name: "enablePlayGesture",
            get: (e) => s(e, "enable-play-gesture"),
          },
          {
            name: "autoPauseIfNavigate",
            get: (e) => s(e, "auto-pause-if-navigate", !0),
          },
          {
            name: "autoPauseIfOpenNative",
            get: (e) => s(e, "auto-pause-if-open-native", !0),
          },
          { name: "vslideGesture", get: (e) => s(e, "vslide-gesture") },
          {
            name: "vslideGestureInFullscreen",
            get: (e) => s(e, "vslide-gesture-in-fullscreen", !0),
          },
          { name: "adUnitId", get: (e) => e.getAttribute("ad-unit-id") || "" },
          {
            name: "posterForCrawler",
            get: (e) => e.getAttribute("poster-for-crawler") || "",
          },
          {
            name: "showCastingButton",
            get: (e) => s(e, "show-casting-button"),
          },
          {
            name: "pictureInPictureMode",
            get(e) {
              let t = e.getAttribute("picture-in-picture-mode");
              if ("string" == typeof t) {
                const e = l(t);
                (t = void 0 !== e ? e : t.split(",")),
                  Array.isArray(t) && 1 === t.length && (t = "" + t[0]);
              }
              return t;
            },
          },
          {
            name: "pictureInPictureShowProgress",
            get: (e) => s(e, "picture-in-picture-show-progress"),
          },
          {
            name: "enableAutoRotation",
            get: (e) => s(e, "enable-auto-rotation"),
          },
          {
            name: "showScreenLockButton",
            get: (e) => s(e, "show-screen-lock-button"),
          },
        ],
        handles: {
          onVideoPlay(e) {
            this.callSingleEvent("play", e);
          },
          onVideoPause(e) {
            this.callSingleEvent("pause", e);
          },
          onVideoEnded(e) {
            this.callSingleEvent("ended", e);
          },
          onVideoTimeUpdate(e) {
            const t = this.getDomNodeFromEvt(e);
            t &&
              (t.$$setAttributeWithoutUpdate(
                "currentTime",
                e.detail.currentTime
              ),
              this.callSingleEvent("timeupdate", e));
          },
          onVideoFullScreenChange(e) {
            this.callSingleEvent("fullscreenchange", e);
          },
          onVideoWaiting(e) {
            this.callSingleEvent("waiting", e);
          },
          onVideoError(e) {
            this.callSingleEvent("error", e);
          },
          onVideoProgress(e) {
            const t = this.getDomNodeFromEvt(e);
            t &&
              (t.$$setAttributeWithoutUpdate("buffered", e.detail.buffered),
              this.callSingleEvent("progress", e));
          },
          onVideoLoadedMetaData(e) {
            this.callSingleEvent("loadedmetadata", e);
          },
          onVideoControlsToggle(e) {
            this.callSingleEvent("controlstoggle", e);
          },
          onVideoEnterPictureInPicture(e) {
            this.callSingleEvent("enterpictureinpicture", e);
          },
          onVideoLeavePictureInPicture(e) {
            this.callSingleEvent("leavepictureinpicture", e);
          },
        },
      },
      "voip-room": {
        wxCompName: "voip-room",
        properties: [
          { name: "openid", get: (e) => e.getAttribute("openid") || "" },
          { name: "mode", get: (e) => e.getAttribute("mode") || "camera" },
          {
            name: "devicePosition",
            get: (e) => e.getAttribute("device-position") || "front",
          },
        ],
        handles: {
          onVoipRoomError(e) {
            this.callSingleEvent("error", e);
          },
        },
      },
      map: {
        wxCompName: "map",
        properties: [
          {
            name: "longitude",
            canBeUserChanged: !0,
            get: (e) => c(e, "longitude", 39.92),
          },
          {
            name: "latitude",
            canBeUserChanged: !0,
            get: (e) => c(e, "latitude", 116.46),
          },
          {
            name: "scale",
            canBeUserChanged: !0,
            get: (e) => c(e, "scale", 16),
          },
          {
            name: "markers",
            get(e) {
              const t = l(e.getAttribute("markers"));
              return void 0 !== t ? t : [];
            },
          },
          {
            name: "polyline",
            get(e) {
              const t = l(e.getAttribute("polyline"));
              return void 0 !== t ? t : [];
            },
          },
          {
            name: "circles",
            get(e) {
              const t = l(e.getAttribute("circles"));
              return void 0 !== t ? t : [];
            },
          },
          {
            name: "controls",
            get(e) {
              const t = l(e.getAttribute("controls"));
              return void 0 !== t ? t : [];
            },
          },
          {
            name: "includePoints",
            get(e) {
              const t = l(e.getAttribute("include-points"));
              return void 0 !== t ? t : [];
            },
          },
          { name: "showLocation", get: (e) => s(e, "show-location") },
          {
            name: "polygons",
            get(e) {
              const t = l(e.getAttribute("polygons"));
              return void 0 !== t ? t : [];
            },
          },
          { name: "subkey", get: (e) => e.getAttribute("subkey") || "" },
          { name: "layerStyle", get: (e) => c(e, "layer-style", 1) },
          {
            name: "rotate",
            canBeUserChanged: !0,
            get: (e) => +e.getAttribute("rotate") || 0,
          },
          {
            name: "skew",
            canBeUserChanged: !0,
            get: (e) => +e.getAttribute("skew") || 0,
          },
          { name: "enable3D", get: (e) => s(e, "enable-3D") },
          { name: "showCompass", get: (e) => s(e, "show-compass") },
          { name: "showScale", get: (e) => s(e, "show-scale") },
          { name: "enableOverlooking", get: (e) => s(e, "enable-overlooking") },
          { name: "enableZoom", get: (e) => s(e, "enable-zoom", !0) },
          { name: "enableScroll", get: (e) => s(e, "enable-scroll", !0) },
          { name: "enableRotate", get: (e) => s(e, "enable-rotate") },
          { name: "enableSatellite", get: (e) => s(e, "enable-satellite") },
          { name: "enableTraffic", get: (e) => s(e, "enable-traffic") },
          { name: "setting", get: (e) => l(e.getAttribute("setting")) || {} },
        ],
        handles: {
          onMapTap(e) {
            this.callSingleEvent("tap", e);
          },
          onMapMarkerTap(e) {
            r(e), this.callSingleEvent("markertap", e);
          },
          onMapLabelTap(e) {
            r(e), this.callSingleEvent("labeltap", e);
          },
          onMapControlTap(e) {
            r(e), this.callSingleEvent("controltap", e);
          },
          onMapCalloutTap(e) {
            r(e), this.callSingleEvent("callouttap", e);
          },
          onMapUpdated(e) {
            this.callSingleEvent("updated", e);
          },
          onMapRegionChange(e) {
            const t = this.getDomNodeFromEvt(e);
            t &&
              (e.detail.causedBy || (e.detail.causedBy = e.causedBy),
              ("end" !== e.type && "end" !== e.detail.type) ||
                ((t._oldValues = t._oldValues || {}),
                (t._oldValues.longitude =
                  e.detail.centerLocation && e.detail.centerLocation.longitude),
                (t._oldValues.latitude =
                  e.detail.centerLocation && e.detail.centerLocation.latitude),
                (t._oldValues.scale = e.detail.scale),
                (t._oldValues.rotate = e.detail.rotate),
                (t._oldValues.skew = e.detail.skew)),
              this.callSingleEvent("regionchange", e));
          },
          onMapPoiTap(e) {
            r(e), this.callSingleEvent("poitap", e);
          },
        },
      },
      CANVAS: {
        wxCompName: "canvas",
        properties: [
          { name: "type", get: (e) => e.getAttribute("type") || "" },
          { name: "canvasId", get: (e) => e.getAttribute("canvas-id") || "" },
          { name: "disableScroll", get: (e) => s(e, "disable-scroll") },
          { name: "disableEvent", get: (e) => s(e, "disable-event") },
        ],
        handles: {
          onCanvasTouchStart(e) {
            d(e),
              this.callSingleEvent("canvastouchstart", e),
              this.onTouchStart(e);
          },
          onCanvasTouchMove(e) {
            d(e),
              this.callSingleEvent("canvastouchmove", e),
              this.onTouchMove(e);
          },
          onCanvasTouchEnd(e) {
            d(e), this.callSingleEvent("canvastouchend", e), this.onTouchEnd(e);
          },
          onCanvasTouchCancel(e) {
            d(e),
              this.callSingleEvent("canvastouchcancel", e),
              this.onTouchCancel(e);
          },
          onCanvasLongTap(e) {
            d(e), this.callSingleEvent("longtap", e);
          },
          onCanvasError(e) {
            d(e), this.callSingleEvent("error", e);
          },
        },
      },
      ad: {
        wxCompName: "ad",
        properties: [
          { name: "unitId", get: (e) => e.getAttribute("unit-id") || "" },
          {
            name: "adIntervals",
            get: (e) => +e.getAttribute("ad-intervals") || 0,
          },
          { name: "adType", get: (e) => e.getAttribute("ad-type") || "banner" },
          {
            name: "adTheme",
            get: (e) => e.getAttribute("ad-theme") || "white",
          },
        ],
        handles: {
          onAdLoad(e) {
            this.callSingleEvent("load", e);
          },
          onAdError(e) {
            this.callSingleEvent("error", e);
          },
          onAdClose(e) {
            this.callSingleEvent("close", e);
          },
        },
      },
      "ad-custom": {
        wxCompName: "ad-custom",
        properties: [
          { name: "unitId", get: (e) => e.getAttribute("unit-id") || "" },
          {
            name: "adIntervals",
            get: (e) => +e.getAttribute("ad-intervals") || 0,
          },
        ],
        handles: {
          onAdCustomLoad(e) {
            this.callSingleEvent("load", e);
          },
          onAdCustomError(e) {
            this.callSingleEvent("error", e);
          },
        },
      },
      "official-account": {
        wxCompName: "official-account",
        handles: {
          onOfficialAccountLoad(e) {
            this.callSingleEvent("load", e);
          },
          onOfficialAccountError(e) {
            this.callSingleEvent("error", e);
          },
        },
      },
      "open-data": {
        wxCompName: "open-data",
        properties: [
          { name: "type", get: (e) => e.getAttribute("type") || "" },
          { name: "openGid", get: (e) => e.getAttribute("open-gid") || "" },
          { name: "lang", get: (e) => e.getAttribute("lang") || "en" },
          {
            name: "defaultText",
            get: (e) => e.getAttribute("default-text") || "",
          },
          {
            name: "defaultAvatar",
            get: (e) => e.getAttribute("default-avatar") || "",
          },
        ],
        handles: {
          onOpenDataError(e) {
            this.callSingleEvent("error", e);
          },
        },
      },
      "web-view": {
        wxCompName: "web-view",
        properties: [
          {
            name: "src",
            get(e) {
              const t = o.getWindow(e.$$pageId);
              return e.src ? i.completeURL(e.src, t.location.origin, !0) : "";
            },
          },
        ],
        handles: {
          onWebviewMessage(e) {
            this.callSingleEvent("message", e);
          },
          onWebviewLoad(e) {
            this.callSingleEvent("load", e);
          },
          onWebviewError(e) {
            this.callSingleEvent("error", e);
          },
        },
      },
      capture: { wxCompName: "capture" },
      catch: { wxCompName: "catch" },
      animation: {
        wxCompName: "animation",
        properties: [
          { name: "animation", get: (e) => l(e.getAttribute("animation")) },
        ],
      },
      "not-support": { wxCompName: "not-support" },
    };
    g.SELECT = g.picker;
    const u = {
        "movable-view": {
          properties: [
            {
              name: "direction",
              get: (e) => e.getAttribute("direction") || "none",
            },
            { name: "inertia", get: (e) => s(e, "inertia") },
            { name: "outOfBounds", get: (e) => s(e, "out-of-bounds") },
            {
              name: "x",
              canBeUserChanged: !0,
              get: (e) => +e.getAttribute("x") || 0,
            },
            {
              name: "y",
              canBeUserChanged: !0,
              get: (e) => +e.getAttribute("y") || 0,
            },
            { name: "damping", get: (e) => c(e, "damping", 20) },
            { name: "friction", get: (e) => c(e, "friction", 2) },
            { name: "disabled", get: (e) => s(e, "disabled") },
            { name: "scale", get: (e) => s(e, "scale") },
            { name: "scaleMin", get: (e) => c(e, "scale-min", 0.5) },
            { name: "scaleMax", get: (e) => c(e, "scale-max", 10) },
            {
              name: "scaleValue",
              canBeUserChanged: !0,
              get: (e) => c(e, "scale-value", 1),
            },
            { name: "animation", get: (e) => s(e, "animation", !0) },
          ],
          handles: {
            onMovableViewChange(e) {
              const t = this.getDomNodeFromEvt(e);
              t &&
                (t.$$setAttributeWithoutUpdate("x", e.detail.x),
                t.$$setAttributeWithoutUpdate("y", e.detail.y),
                (t._oldValues = t._oldValues || {
                  scaleValue: c(t, "scale-value", 1),
                }),
                (t._oldValues.x = e.detail.x),
                (t._oldValues.y = e.detail.y),
                this.callSingleEvent("change", e));
            },
            onMovableViewScale(e) {
              const t = this.getDomNodeFromEvt(e);
              t &&
                (t.$$setAttributeWithoutUpdate("x", e.detail.x),
                t.$$setAttributeWithoutUpdate("y", e.detail.y),
                t.$$setAttributeWithoutUpdate("scale-value", e.detail.scale),
                (t._oldValues = t._oldValues || {}),
                (t._oldValues.x = e.detail.x),
                (t._oldValues.y = e.detail.y),
                (t._oldValues.scaleValue = e.detail.scale),
                this.callSingleEvent("scale", e));
            },
            onMovableViewHtouchmove(e) {
              this.callSingleEvent("htouchmove", e);
            },
            onMovableViewVtouchmove(e) {
              this.callSingleEvent("vtouchmove", e);
            },
          },
        },
        "swiper-item": {
          properties: [
            { name: "itemId", get: (e) => e.getAttribute("item-id") || "" },
          ],
        },
      },
      m = Object.keys(g),
      h = {},
      p = {},
      v = {};
    m.forEach((e) => {
      const { wxCompName: t, properties: a, handles: n } = g[e];
      (h[e] = t), (p[t] = a || []), n && Object.assign(v, n);
    }),
      Object.keys(u).forEach((e) => {
        const { handles: t } = u[e];
        t && Object.assign(v, t);
      }),
      (e.exports = {
        wxCompData: p,
        wxCompHandles: v,
        wxCompNameMap: h,
        wxSubComponentMap: u,
      });
  },
  function(e, t, a) {
    const n = a(0),
      o = a(3),
      i = a(1),
      { cache: r, Event: l, EventTarget: s, tool: c } = n.$$adapter,
      { USE_TEMPLATE: d } = o,
      { wxCompHandles: g, wxCompNameMap: u } = i;
    let m = 10,
      h = !1;
    console.warn(
      "当前渲染模式版本：miniprogram-element@2.x 版本。\n\n2.x 版本对比 1.x 版本去除了渲染内置组件时额外引入的一层节点，此模式基于 2.11.2 基础库实现，如果在 2.11.2 版本之前的基础库环境运行，则会降级成 1.x 渲染模式。\n\n渲染过程如果升级版本过程中遇到样式错乱问题，可尝试去除使用 1.x 版本时额外追加的强依赖结构的兼容样式，也可选择退回 1.x 版本（退回版本可以使用 generate.renderVersion 和 generate.elementVersion 配置：https://wechat-miniprogram.github.io/kbone/docs/config/#generate-renderversion ，指定 tag 为 core-v1 即可）。"
    );
    const p = wx.getSystemInfoSync().SDKVersion,
      v = [];
    o.compareVersion(p, "2.10.3") >= 0 && v.push("wx://form-field-button"),
      o.compareVersion(p, "2.11.2") < 0 &&
        console.warn("当前基础库版本低于 2.11.2，建议调整最低支持基础库。"),
      (e.exports = Behavior({
        behaviors: v,
        properties: { inCover: { type: Boolean, value: !1 } },
        data: { wxCompName: "", wxCustomCompName: "", childNodes: [] },
        created() {
          const e = r.getConfig(),
            t = +e.optimization.domSubTreeLevel;
          t >= 1 && t <= 10 && (m = t),
            (h = "original" === e.optimization.setDataMode);
        },
        attached() {
          const e = this.dataset.privateNodeId,
            t = this.dataset.privatePageId,
            a = {};
          if (
            ((this.nodeId = e),
            (this.pageId = t),
            (this.domNode = r.getNode(t, e)),
            !this.domNode)
          )
            return;
          (this.document = r.getDocument(t)),
            (this.onChildNodesUpdate = c.throttle(
              this.onChildNodesUpdate.bind(this)
            )),
            this.domNode.$$clearEvent("$$childNodesUpdate", {
              $$namespace: "root",
            }),
            this.domNode.addEventListener(
              "$$childNodesUpdate",
              this.onChildNodesUpdate,
              { $$namespace: "root" }
            ),
            (this.onSelfNodeUpdate = c.throttle(
              this.onSelfNodeUpdate.bind(this)
            )),
            this.domNode.$$clearEvent("$$domNodeUpdate", {
              $$namespace: "root",
            }),
            this.domNode.addEventListener(
              "$$domNodeUpdate",
              this.onSelfNodeUpdate,
              { $$namespace: "root" }
            ),
            this.init(a);
          const n = o.filterNodes(this.domNode, m - 1, this);
          (a.childNodes = o.dealWithLeafAndSimple(n, this.onChildNodesUpdate)),
            a.wxCompName && (this.domNode._wxComponent = this),
            Object.keys(a).length && o.setData(this, a);
        },
        detached() {
          (this.nodeId = null),
            (this.pageId = null),
            (this.domNode = null),
            (this.document = null);
        },
        methods: {
          init(e) {
            const t = this.domNode,
              a = t.tagName;
            if (
              -1 === d.indexOf(a) &&
              -1 === d.indexOf(t.behavior) &&
              "WX-COMPONENT" === a
            ) {
              e.wxCompName = t.behavior;
              const a = u[e.wxCompName];
              a
                ? o.checkComponentAttr(a, t, e)
                : console.warn(
                    `value "${e.wxCompName}" is not supported for wx-component's behavior`
                  );
            }
          },
          onChildNodesUpdate() {
            if (!this.pageId || !this.nodeId) return;
            const e = o.filterNodes(this.domNode, m - 1, this);
            if (h)
              o.checkDiffChildNodes(e, this.data.childNodes) &&
                o.setData(this, {
                  childNodes: o.dealWithLeafAndSimple(
                    e,
                    this.onChildNodesUpdate
                  ),
                });
            else {
              const t = { count: 0 },
                a = o.dealWithLeafAndSimple(e, this.onChildNodesUpdate);
              if (this.data.childNodes.length) {
                o.getDiffChildNodes(a, this.data.childNodes, t, "childNodes")
                  ? o.setData(this, { childNodes: a })
                  : t.count && (delete t.count, o.setData(this, t));
              } else o.setData(this, { childNodes: a });
            }
          },
          onSelfNodeUpdate() {
            if (!this.pageId || !this.nodeId) return;
            const e = this.domNode,
              t = this.data,
              a = e.tagName;
            if (
              -1 === d.indexOf(a) &&
              -1 === d.indexOf(e.behavior) &&
              "WX-COMPONENT" === a
            ) {
              const a = {},
                n = u[e.behavior];
              t.wxCompName !== e.behavior && (a.wxCompName = e.behavior),
                n && o.checkComponentAttr(n, e, a, t),
                Object.keys(a) && o.setData(this, a);
            }
          },
          callSingleEvent(e, t) {
            const a = this.getDomNodeFromEvt(t);
            if (!a) return;
            const n = r.getWindow(this.pageId);
            n &&
              a.$$trigger(e, {
                event: new l({
                  timeStamp: n.performance.now(),
                  touches: t && t.touches,
                  changedTouches: t && t.changedTouches,
                  name: e,
                  target: a,
                  eventPhase: l.AT_TARGET,
                  detail: t && t.detail,
                  $$extra: t && t.extra,
                }),
                currentTarget: a,
              });
          },
          callSimpleEvent(e, t, a) {
            (a = a || this.getDomNodeFromEvt(t)) &&
              s.$$process(
                a,
                new l({
                  touches: t.touches,
                  changedTouches: t.changedTouches,
                  name: e,
                  target: a,
                  eventPhase: l.AT_TARGET,
                  detail: t && t.detail,
                  $$extra: t && t.extra,
                  bubbles: !1,
                })
              );
          },
          callEvent(e, t, a) {
            const n = this.getDomNodeFromEvt(t);
            n &&
              s.$$process(n, e, t, a, (e, t, a) => {
                setTimeout(() => {
                  if (t.cancelable) return;
                  const n = r.getWindow(this.pageId);
                  if ("A" !== e.tagName || "click" !== t.type || a)
                    if ("LABEL" !== e.tagName || "click" !== t.type || a) {
                      if (
                        ("BUTTON" === e.tagName ||
                          ("WX-COMPONENT" === e.tagName &&
                            "button" === e.behavior)) &&
                        "click" === t.type &&
                        !a
                      ) {
                        const t =
                            "BUTTON" === e.tagName
                              ? e.getAttribute("type")
                              : e.getAttribute("form-type"),
                          a = e.getAttribute("form"),
                          i = a
                            ? n.document.getElementById(a)
                            : o.findParentNode(e, "FORM");
                        if (!i) return;
                        if ("submit" !== t && "reset" !== t) return;
                        const r = i.querySelectorAll("input[name]"),
                          l = i.querySelectorAll("textarea[name]"),
                          s = i
                            .querySelectorAll("wx-component[behavior=switch]")
                            .filter((e) => !!e.getAttribute("name")),
                          c = i
                            .querySelectorAll("wx-component[behavior=slider]")
                            .filter((e) => !!e.getAttribute("name")),
                          d = i
                            .querySelectorAll("wx-component[behavior=picker]")
                            .filter((e) => !!e.getAttribute("name")),
                          g = i
                            .querySelectorAll(
                              "wx-component[behavior=picker-view]"
                            )
                            .filter((e) => !!e.getAttribute("name"));
                        if ("submit" === t) {
                          const e = {};
                          r.length &&
                            r.forEach((t) => {
                              "radio" === t.type
                                ? t.checked && (e[t.name] = t.value)
                                : "checkbox" === t.type
                                ? ((e[t.name] = e[t.name] || []),
                                  t.checked && e[t.name].push(t.value))
                                : (e[t.name] = t.value);
                            }),
                            l.length &&
                              l.forEach(
                                (t) => (e[t.getAttribute("name")] = t.value)
                              ),
                            s.length &&
                              s.forEach(
                                (t) =>
                                  (e[t.getAttribute("name")] = !!t.getAttribute(
                                    "checked"
                                  ))
                              ),
                            c.length &&
                              c.forEach(
                                (t) =>
                                  (e[t.getAttribute("name")] =
                                    +t.getAttribute("value") || 0)
                              ),
                            (d.length || g.length) &&
                              [].concat(d, g).forEach((t) => {
                                let a = t.getAttribute("value");
                                if ("string" == typeof a)
                                  try {
                                    a = JSON.parse(a);
                                  } catch (e) {}
                                e[t.getAttribute("name")] = a;
                              });
                          const t = { value: e };
                          i._formId &&
                            ((t.formId = i._formId), (i._formId = null)),
                            this.callSimpleEvent(
                              "submit",
                              { detail: t, extra: { $$from: "button" } },
                              i
                            );
                        } else
                          "reset" === t &&
                            (r.length &&
                              r.forEach((e) => {
                                "radio" === e.type || "checkbox" === e.type
                                  ? e.setAttribute("checked", !1)
                                  : e.setAttribute("value", "");
                              }),
                            l.length &&
                              l.forEach((e) => e.setAttribute("value", "")),
                            s.length &&
                              s.forEach((e) =>
                                e.setAttribute("checked", void 0)
                              ),
                            c.length &&
                              c.forEach((e) => e.setAttribute("value", void 0)),
                            d.length &&
                              d.forEach((e) => e.setAttribute("value", void 0)),
                            g.length &&
                              g.forEach((e) => e.setAttribute("value", void 0)),
                            this.callSimpleEvent(
                              "reset",
                              { extra: { $$from: "button" } },
                              i
                            ));
                      }
                    } else {
                      const a = e.getAttribute("for");
                      let i;
                      if (
                        (a
                          ? (i = n.document.getElementById(a))
                          : ((i = e.querySelector("input")),
                            i ||
                              (i = e.querySelector(
                                "wx-component[behavior=switch]"
                              )),
                            i ||
                              (i = e.querySelector(
                                "wx-component[behavior=button]"
                              ))),
                        !i || i.getAttribute("disabled"))
                      )
                        return;
                      if ("INPUT" === i.tagName) {
                        if (o.checkEventAccessDomNode(t, i, e)) return;
                        const a = i.type;
                        if ("radio" === a) {
                          i.setAttribute("checked", !0);
                          const e = i.name;
                          if (e) {
                            const t =
                              n.document.querySelectorAll(`input[name=${e}]`) ||
                              [];
                            for (const e of t)
                              "radio" === e.type &&
                                e !== i &&
                                e.setAttribute("checked", !1);
                            this.callSimpleEvent(
                              "change",
                              { detail: { value: i.value } },
                              i
                            );
                          } else {
                            const e = {
                              dataset: {
                                pageId: this.pageId,
                                privateNodeId: i.$$nodeId,
                              },
                            };
                            this.callEvent("$$radioChange", {
                              target: e,
                              currentTarget: e,
                              timeStamp: n.performance.now(),
                              touches: t.touches,
                              changedTouches: t.changedTouches,
                              detail: {},
                            });
                          }
                        } else if ("checkbox" === a) {
                          const e = i.name;
                          if ((i.setAttribute("checked", !i.checked), e))
                            this.callSimpleEvent(
                              "change",
                              { detail: { value: i.checked ? [i.value] : [] } },
                              i
                            );
                          else {
                            const e = {
                              dataset: {
                                pageId: this.pageId,
                                privateNodeId: i.$$nodeId,
                              },
                            };
                            this.callEvent("$$checkboxChange", {
                              target: e,
                              currentTarget: e,
                              timeStamp: n.performance.now(),
                              touches: t.touches,
                              changedTouches: t.changedTouches,
                              detail: {},
                            });
                          }
                        } else i.focus();
                      } else if ("WX-COMPONENT" === i.tagName) {
                        if (o.checkEventAccessDomNode(t, i, e)) return;
                        const a = i.behavior;
                        if ("switch" === a) {
                          const e = !i.getAttribute("checked");
                          i.setAttribute("checked", e),
                            this.callSimpleEvent(
                              "change",
                              { detail: { value: e } },
                              i
                            );
                        } else if ("button" === a) {
                          const e = {
                              dataset: {
                                pageId: this.pageId,
                                privateNodeId: i.$$nodeId,
                              },
                            },
                            a = {
                              target: e,
                              currentTarget: e,
                              timeStamp: n.performance.now(),
                              touches: t.touches,
                              changedTouches: t.changedTouches,
                              detail: {},
                            };
                          this.callEvent("click", a, { button: 0 });
                          r.getConfig().runtime.disableMpEvent ||
                            this.callEvent("tap", a);
                        }
                      }
                    }
                  else {
                    const t = e.href,
                      a = e.target;
                    if (!t || -1 !== t.indexOf("javascript")) return;
                    "_blank" === a ? n.open(t) : (n.location.href = t);
                  }
                }, 0);
              });
          },
          onTouchStart(e) {
            this.document &&
              this.document.$$checkEvent(e) &&
              this.callEvent("touchstart", e);
          },
          onTouchMove(e) {
            this.document &&
              this.document.$$checkEvent(e) &&
              this.callEvent("touchmove", e);
          },
          onTouchEnd(e) {
            this.document &&
              this.document.$$checkEvent(e) &&
              this.callEvent("touchend", e);
          },
          onTouchCancel(e) {
            this.document &&
              this.document.$$checkEvent(e) &&
              this.callEvent("touchcancel", e);
          },
          onTap(e) {
            if (this.document && this.document.$$checkEvent(e)) {
              this.callEvent("click", e, { button: 0 });
              r.getConfig().runtime.disableMpEvent || this.callEvent("tap", e);
            }
          },
          onLongPress(e) {
            if (this.document && this.document.$$checkEvent(e)) {
              r.getConfig().runtime.disableMpEvent ||
                this.callEvent("longpress", e);
            }
          },
          onImgLoad(e) {
            this.callSingleEvent("load", e);
          },
          onImgError(e) {
            this.callSingleEvent("error", e);
          },
          onCaptureTouchStart(e) {
            this.callSingleEvent("touchstart", e);
          },
          onCaptureTouchMove(e) {
            this.callSingleEvent("touchmove", e);
          },
          onCaptureTouchEnd(e) {
            this.callSingleEvent("touchend", e);
          },
          onCaptureTouchCancel(e) {
            this.callSingleEvent("touchcancel", e);
          },
          onCaptureTap(e) {
            this.callSingleEvent("click", e);
            r.getConfig().runtime.disableMpEvent ||
              this.callSingleEvent("tap", e);
          },
          onCaptureLongPress(e) {
            r.getConfig().runtime.disableMpEvent ||
              this.callSingleEvent("longpress", e);
          },
          onTransitionEnd(e) {
            this.callEvent("transitionend", e);
          },
          onAnimationStart(e) {
            this.callEvent("animationstart", e);
          },
          onAnimationIteration(e) {
            this.callEvent("animationiteration", e);
          },
          onAnimationEnd(e) {
            this.callEvent("animationend", e);
          },
          getDomNodeFromEvt(e) {
            if (!e) return;
            const t = this.pageId,
              a =
                (e.currentTarget && e.currentTarget.dataset.privateNodeId) ||
                this.nodeId;
            return r.getNode(t, a);
          },
          ...g,
        },
      }));
  },
  function(e, t, a) {
    const n = a(0),
      o = a(1),
      { cache: i, tool: r } = n.$$adapter,
      { wxCompData: l, wxCompNameMap: s, wxSubComponentMap: c } = o,
      d = [
        "nodeId",
        "pageId",
        "id",
        "className",
        "style",
        "isImage",
        "src",
        "mode",
        "webp",
        "lazyLoad",
        "showMenuByLongpress",
        "useTemplate",
        "extra",
        "compName",
        "isLeaf",
        "content",
        "isSimple",
      ],
      g = ["nodeId", "pageId", "content"],
      u = ["WX-COMPONENT", "WX-CUSTOM-COMPONENT"],
      m = ["swiper", "movable-area", "picker-view"],
      h = ["swiper-item", "movable-view", "picker-view-column"],
      p = ["IFRAME", ...u],
      v = [
        "cover-image",
        "cover-view",
        "match-media",
        "movable-area",
        "movable-view",
        "page-container",
        "scroll-view",
        "swiper",
        "swiper-item",
        "icon",
        "progress",
        "rich-text",
        "text",
        "button",
        "editor",
        "form",
        "INPUT",
        "picker",
        "SELECT",
        "picker-view",
        "picker-view-column",
        "slider",
        "switch",
        "TEXTAREA",
        "navigator",
        "camera",
        "image",
        "live-player",
        "live-pusher",
        "VIDEO",
        "voip-room",
        "map",
        "CANVAS",
        "ad",
        "ad-custom",
        "official-account",
        "open-data",
        "web-view",
        "capture",
        "catch",
        "animation",
        "not-support",
        "WX-CUSTOM-COMPONENT",
      ],
      b = Object.prototype.hasOwnProperty;
    function f(e, t, a) {
      if ("number" == typeof e && "number" == typeof t)
        return parseInt(1e3 * e, 10) === parseInt(1e3 * t, 10);
      if (a) {
        if (void 0 === t) return !e;
        if (void 0 === e) return !t;
      }
      if ("object" == typeof e && "object" == typeof t) {
        if (null === e || null === t) return e === t;
        const n = Array.isArray(e),
          o = Array.isArray(t);
        if (n && o) {
          if (e.length !== t.length) return !1;
          for (let n = 0, o = e.length; n < o; n++)
            if (!f(e[n], t[n], a)) return !1;
          return !0;
        }
        if (!o && !o) {
          const n = Object.keys(e),
            o = Object.keys(t);
          if (n.length !== o.length) return !1;
          for (const o of n) if (!f(e[o], t[o], a)) return !1;
          return !0;
        }
      }
      return e === t;
    }
    function E(e, t, a, n, o = "") {
      const i = l[e];
      if (((a.wxCompName = e), i && i.length))
        for (const { name: e, get: o, canBeUserChanged: r = !1 } of i) {
          const i = o(t);
          if (r) {
            const o = t._oldValues,
              r = !!o && !f(i, o[e], !0);
            (n && f(i, n[e]) && !r) || ((a[e] = i), r && (a.forceUpdate = !0));
          } else (n && f(i, n[e])) || (a[e] = i);
        }
      const r = t.id;
      (n && n.id === r) || (a.id = r);
      const s = `${o} wx-comp-${e} node-${t.$$nodeId} ${t.className || ""}`;
      (n && n.className === s) || (a.className = s);
      const c = t.style.cssText;
      (n && n.style === c) || (a.style = c);
      const d = t.getAttribute("hidden") || !1;
      (n && n.hidden === d) || (a.hidden = d);
    }
    e.exports = {
      USE_TEMPLATE: v,
      filterNodes: function e(t, a, o) {
        const l = i.getWindow(t.$$pageId);
        let d = t.childNodes || [];
        if ("function" != typeof d.map) return [];
        if ("SELECT" === t.tagName) {
          const e = d.findIndex((e) => e.value === t.value);
          d = -1 !== e ? [d[e]] : [];
        }
        return d
          .map((t) => {
            const i = t.$$domInfo;
            if ("element" !== i.type && "text" !== i.type) return;
            if (i.slot) return;
            if (
              ((t._wxComponent = o),
              (i.className =
                "element" === i.type
                  ? `h5-${i.tagName} node-${i.nodeId} ${i.className || ""}`
                  : ""),
              (i.domNode = t),
              u.indexOf(t.tagName) >= 0)
            ) {
              if (
                "wx-component" === i.tagName &&
                -1 !== h.indexOf(t.behavior)
              ) {
                (i.compName = t.behavior),
                  (i.extra = { hidden: t.getAttribute("hidden") || !1 });
                const { properties: n } = c[t.behavior] || {};
                return (
                  n &&
                    n.length &&
                    n.forEach(
                      ({ name: e, get: a, canBeUserChanged: n = !1 }) => {
                        const o = a(t);
                        if (((i.extra[e] = o), n)) {
                          const a = t._oldValues;
                          a && !f(o, a[e], !0) && (i.extra.forceUpdate = !0);
                        }
                      }
                    ),
                  t.childNodes.length &&
                    a > 0 &&
                    (i.childNodes = e(t, a - 1, o)),
                  i
                );
              }
              (i.className = `h5-${i.tagName} ${
                "wx-component" === i.tagName ? "wx-" + t.behavior : ""
              }`),
                (i.id = ""),
                (i.style = "");
            }
            (i.isImage = "element" === i.type && "img" === i.tagName),
              i.isImage &&
                ((i.src = t.src
                  ? r.completeURL(t.src, l.location.origin, !0)
                  : ""),
                (i.mode = t.getAttribute("mode") || ""),
                (i.webp = !!t.getAttribute("webp")),
                (i.lazyLoad = !!t.getAttribute("lazy-load")),
                (i.showMenuByLongpress = !!t.getAttribute(
                  "show-menu-by-longpress"
                )));
            let d = "wx-component" === i.tagName ? t.behavior : t.tagName;
            if (
              ((d = n.$$adapter.tool.isTagNameSupport(d) ? d : "not-support"),
              (i.useTemplate = !i.isImage && -1 !== v.indexOf(d)),
              i.useTemplate)
            ) {
              const a = s[d],
                n = {};
              a &&
                E(
                  a,
                  t,
                  n,
                  null,
                  `h5-${i.tagName} ${
                    "wx-component" === i.tagName ? "wx-" + t.behavior : ""
                  }`
                ),
                (n.pageId = i.pageId),
                (n.nodeId = i.nodeId),
                (n.inCover = o.data.inCover),
                (n.hasChildren = !!t.childNodes.length),
                (i.extra = n);
              const r = m.indexOf(d);
              if (-1 !== r) {
                const a = e(t, "picker-view" === d ? 1 : 0) || [];
                n.childNodes = a
                  .filter((e) => "element" === e.type && e.compName === h[r])
                  .map((e) => {
                    const t = Object.assign({}, e);
                    return (
                      t.childNodes &&
                        (t.childNodes = t.childNodes.map((e) =>
                          Object.assign({}, e, { style: "" })
                        )),
                      t
                    );
                  });
              }
              if ("map" === d || "scroll-view" === d) {
                const e = t.childNodes
                  .map((e) => {
                    const t = e.$$domInfo;
                    return {
                      slot: t.slot,
                      nodeId: t.nodeId,
                      pageId: t.pageId,
                      id: t.id,
                      className:
                        "element" === t.type
                          ? `h5-${t.tagName} node-${t.nodeId} ${t.className ||
                              ""}`
                          : "",
                      style: t.style,
                    };
                  })
                  .filter((e) => !!e.slot);
                (n.hasSlots = e.length),
                  (n.hasChildren = e.length < t.childNodes.length),
                  (n.slots = e);
              }
              "catch" === a &&
                ((n.touchStart = t.$$hasEventHandler("touchstart")
                  ? "onTouchStart"
                  : ""),
                (n.touchMove = t.$$hasEventHandler("touchmove")
                  ? "onTouchMove"
                  : ""),
                (n.touchEnd = t.$$hasEventHandler("touchend")
                  ? "onTouchEnd"
                  : ""),
                (n.touchCancel = t.$$hasEventHandler("touchcancel")
                  ? "onTouchCancel"
                  : "")),
                ("text" !== a && "not-support" !== a) ||
                  (n.content = t.textContent),
                "WX-CUSTOM-COMPONENT" === d &&
                  ((n.wxCompName = "custom-component"),
                  (n.wxCustomCompName = t.behavior));
            }
            return (
              (i.isLeaf =
                !i.isImage &&
                !i.useTemplate &&
                "element" === i.type &&
                !t.children.length &&
                -1 === p.indexOf(t.tagName)),
              i.isLeaf &&
                (i.content = t.childNodes
                  .map((e) =>
                    "text" === e.$$domInfo.type ? e.textContent : ""
                  )
                  .join("")),
              (i.isSimple =
                !i.isImage &&
                !i.useTemplate &&
                !i.isLeaf &&
                "element" === i.type &&
                -1 === p.indexOf(t.tagName) &&
                a > 0),
              i.isSimple && ((i.content = ""), (i.childNodes = e(t, a - 1, o))),
              i
            );
          })
          .filter((e) => !!e);
      },
      checkDiffChildNodes: function e(t, a) {
        if (t.length !== a.length) return !0;
        for (let n = 0, o = t.length; n < o; n++) {
          const o = t[n],
            i = a[n];
          if (o.type !== i.type) return !0;
          const r = "element" === o.type ? d : g;
          for (const e of r) {
            const t = o[e],
              a = i[e];
            if ("object" != typeof t || Array.isArray(t)) {
              if (!f(t, a)) return !0;
            } else {
              if ("object" != typeof a) return !0;
              if ("extra" === e && t && t.forceUpdate)
                return (t.forceUpdate = !1), !0;
              const n = Object.keys(t),
                i = "extra" === e ? o.domNode : null,
                r = i && i._oldValues;
              for (const e of n) {
                let n = a[e];
                if ((r && void 0 !== r[e] && (n = r[e]), !f(t[e], n)))
                  return !0;
              }
            }
          }
          const l = o.childNodes || [],
            s = i.childNodes || [];
          if ((l.length || s.length) && e(l, s)) return !0;
        }
        return !1;
      },
      getDiffChildNodes: function e(t, a, n, o, r, l) {
        const s = typeof t;
        if (
          "object" === s &&
          "object" === typeof a &&
          null !== t &&
          null !== a
        ) {
          const s = Array.isArray(t),
            c = Array.isArray(a);
          if (s && c)
            if (t.length < a.length) {
              if (((n[o] = t), n.count++ > 100)) return !0;
            } else
              for (let i = 0, r = t.length; i < r; i++) {
                if (e(t[i], a[i], n, `${o}[${i}]`)) return !0;
              }
          else if (s || c) {
            if (((n[o] = t), n.count++ > 100)) return !0;
          } else {
            const s = t.type,
              c = a.type,
              u = "element" === s ? ["childNodes"].concat(d) : g,
              m = !r && ("element" === s || "text" === s),
              h = !r && ("element" === s || "text" === s);
            if (m && h && s === c)
              for (const r of u) {
                const l = `${o}.${r}`,
                  s = "extra" === r ? i.getNode(t.pageId, t.nodeId) : null;
                if (e(t[r], a[r], n, l, "extra" === r, s)) return !0;
              }
            else if (m || h) {
              if (((n[o] = t), n.count++ > 100)) return !0;
            } else if (r && t.forceUpdate) {
              if (((t.forceUpdate = !1), (n[o] = t), n.count++ > 100))
                return !0;
            } else {
              const i = Object.keys(t);
              for (const r of i) {
                const i = `${o}.${r}`;
                if (b.call(a, r)) {
                  let o = a[r];
                  l &&
                    l._oldValues &&
                    void 0 !== l._oldValues[r] &&
                    (o = l._oldValues[r]);
                  if (e(t[r], o, n, i)) return !0;
                } else if (((n[i] = t[r]), n.count++ > 100)) return !0;
              }
              const r = Object.keys(a);
              for (const e of r) {
                const a = `${o}.${e}`;
                if (!b.call(t, e) && ((n[a] = null), n.count++ > 100))
                  return !0;
              }
            }
          }
        } else if (
          !f(t, a) &&
          ((t = "undefined" === s ? null : t), (n[o] = t), n.count++ > 100)
        )
          return !0;
      },
      checkComponentAttr: E,
      dealWithLeafAndSimple: function e(t, a) {
        return (
          t &&
            t.length &&
            (t = t.map((t) => {
              const n = Object.assign({}, t);
              return (
                n.domNode.$$clearEvent("$$childNodesUpdate", {
                  $$namespace: "child",
                }),
                (n.isImage || n.isLeaf || n.isSimple || n.useTemplate) &&
                  n.domNode.addEventListener("$$childNodesUpdate", a, {
                    $$namespace: "child",
                  }),
                delete n.domNode,
                (n.childNodes = e(n.childNodes, a) || []),
                n.extra &&
                  n.extra.childNodes &&
                  (n.extra.childNodes = e(n.extra.childNodes, a) || []),
                n
              );
            })),
          t
        );
      },
      checkEventAccessDomNode: function(e, t, a) {
        a = a || t.ownerDocument.body;
        let n = e.target;
        if (t === a) return !0;
        for (; n && n !== a; ) {
          if (n === t) return !0;
          n = n.parentNode;
        }
        return !1;
      },
      findParentNode: function(e, t) {
        const a = (e, t) =>
          !!e &&
          (e.tagName === t ||
            ("WX-COMPONENT" === e.tagName && e.behavior === t.toLowerCase()));
        let n = e.parentNode;
        if (a(n, t)) return n;
        for (; n && n.tagName !== t; )
          if (((n = n.parentNode), a(n, t))) return n;
        return null;
      },
      compareVersion: function(e, t) {
        (e = e.split(".")), (t = t.split("."));
        const a = Math.max(e.length, t.length);
        for (; e.length < a; ) e.push("0");
        for (; t.length < a; ) t.push("0");
        for (let n = 0; n < a; n++) {
          const a = parseInt(e[n], 10),
            o = parseInt(t[n], 10);
          if (a > o) return 1;
          if (a < o) return -1;
        }
        return 0;
      },
      setData: function(e, t) {
        r.setData ? r.setData(e, t) : e.setData(t);
      },
    };
  },
]);
//# sourceMappingURL=base.js.map
