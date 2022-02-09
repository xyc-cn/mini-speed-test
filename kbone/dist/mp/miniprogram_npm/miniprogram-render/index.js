module.exports = (function(t) {
  var e = {};
  function s(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, s), (i.l = !0), i.exports;
  }
  return (
    (s.m = t),
    (s.c = e),
    (s.d = function(t, e, r) {
      s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (s.r = function(t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (s.t = function(t, e) {
      if ((1 & e && (t = s(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (s.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          s.d(
            r,
            i,
            function(e) {
              return t[e];
            }.bind(null, i)
          );
      return r;
    }),
    (s.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default;
            }
          : function() {
              return t;
            };
      return s.d(e, "a", e), e;
    }),
    (s.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (s.p = ""),
    s((s.s = 15))
  );
})([
  function(t, e) {
    const s = {};
    let r = {};
    const i = {};
    t.exports = {
      init: function(t, e) {
        s[t] = {
          window: e.window,
          document: e.document,
          nodeIdMap: e.nodeIdMap,
        };
      },
      destroy: function(t) {
        delete s[t];
      },
      getDocument: function(t) {
        return s[t] && s[t].document;
      },
      getWindow: function(t) {
        return s[t] && s[t].window;
      },
      getWindowList: function() {
        return Object.keys(s).map((t) => s[t].window);
      },
      setNode: function(t, e, r = null) {
        const i = s[t] && s[t].document;
        if (!i) return;
        if (!r) return (s[t].nodeIdMap[e] = r);
        let n = r.parentNode;
        for (; n && n !== i.body; ) n = n.parentNode;
        s[t].nodeIdMap[e] = n === i.body ? r : null;
      },
      getNode: function(t, e) {
        return s[t] && s[t].nodeIdMap[e];
      },
      setConfig: function(t) {
        r = t;
      },
      getConfig: function() {
        return r;
      },
      getCookie: function() {
        return i;
      },
    };
  },
  function(t, e, s) {
    const r = s(0),
      i = {};
    [
      "cover-image",
      "cover-view",
      "match-media",
      "movable-area",
      "movable-view",
      "page-container",
      "scroll-view",
      "swiper",
      "swiper-item",
      "view",
      "icon",
      "progress",
      "rich-text",
      "text",
      "button",
      "checkbox",
      "checkbox-group",
      "editor",
      "form",
      "input",
      "label",
      "picker",
      "picker-view",
      "picker-view-column",
      "radio",
      "radio-group",
      "slider",
      "switch",
      "textarea",
      "functional-page-navigator",
      "navigator",
      "audio",
      "camera",
      "image",
      "live-player",
      "live-pusher",
      "video",
      "voip-room",
      "map",
      "canvas",
      "ad",
      "ad-custom",
      "official-account",
      "open-data",
      "web-view",
      "capture",
      "catch",
      "animation",
    ].forEach((t) => (i[t] = t));
    let n = +new Date();
    const o = new Set();
    const a = ["IFRAME"];
    t.exports = {
      checkIsWxComponent: function(t, e) {
        const s = 0 === t.indexOf("wx-");
        return e ? (s ? i[t.slice(3)] : i[t]) : !!s && i[t.slice(3)];
      },
      toDash: function(t) {
        return t.replace(/[A-Z]/g, (t) => "-" + t.toLowerCase());
      },
      toCamel: function(t) {
        return t.replace(/-([a-zA-Z])/g, (t, e) => e.toUpperCase());
      },
      getId: function() {
        return n++;
      },
      getPageRoute: function(t) {
        return t.split("-")[2];
      },
      getPageName: function(t) {
        const e = t.match(/(?:^|\/)__plugin__\/(?:.*?)(\/.*)/);
        e && e[1] && (t = e[1]);
        const s = t.split("/");
        return "pages" === s[1] ? s[2] : s[1];
      },
      throttle: function(t) {
        return () => {
          o.has(t) ||
            (o.add(t),
            Promise.resolve()
              .then(() => {
                o.has(t) && (o.delete(t), t());
              })
              .catch(console.error));
        };
      },
      flushThrottleCache: function() {
        o.forEach((t) => t && t()), o.clear();
      },
      completeURL: function(t, e, s) {
        const i = r.getConfig();
        return (
          0 === t.indexOf("//")
            ? (t = "https:" + t)
            : "/" === t[0] && (t = (i.origin || e) + t),
          s ||
            0 !== t.indexOf("http:") ||
            (t = t.replace(/^http:/gi, "https:")),
          t
        );
      },
      decodeContent: function(t) {
        return t
          .replace(/&nbsp;/g, " ")
          .replace(/&ensp;/g, " ")
          .replace(/&emsp;/g, " ")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&quot;/g, '"')
          .replace(/&apos;/g, "'")
          .replace(/&amp;/g, "&");
      },
      isTagNameSupport: function(t) {
        return -1 === a.indexOf(t);
      },
      escapeForHtmlGeneration: function(t) {
        return t.replace(/"/g, "&quot;");
      },
      setData: function(t, e) {
        const s = t.pageId,
          i = s ? r.getWindow(s) : null;
        if (i && i._startInit)
          return (
            i._iniCount++,
            void t.setData(e, () => {
                const now = Date.now();
                console.log('setData callback time is', now, ' coat is', now - global.tttt);
              i._iniCount--,
                !i._startInit &&
                  i._iniCount <= 0 &&
                  (i.document.$$trigger("DOMContentLoaded"), (i._iniCount = 0));
            })
          );
        t.setData(e,  () => {
          const now = Date.now();
          console.log('click setData callback time is', now, ' coat is', now - global.tttt);
        });
      },
    };
  },
  function(t, e) {
    t.exports = class {
      constructor(t) {
        (this.$_size = t || 3e3), (this.$_cache = []);
      }
      add(t) {
        this.$_cache.length >= this.$_size || this.$_cache.push(t);
      }
      get() {
        return this.$_cache.pop();
      }
    };
  },
  function(t, e, s) {
    const r = s(6),
      i = s(10),
      n = s(11),
      o = s(12),
      a = s(0),
      h = s(20),
      c = s(1),
      l = new (s(2))();
    class $ extends r {
      static $$create(t, e) {
        if (a.getConfig().optimization.elementMultiplexing) {
          const s = l.get();
          if (s) return s.$$init(t, e), s;
        }
        return new $(t, e);
      }
      $$init(t, e) {
        (t.type = "element"),
          super.$$init(t, e),
          (this.$_tagName = t.tagName || ""),
          (this.$_children = []),
          (this.$_nodeType = t.nodeType || r.ELEMENT_NODE),
          (this.$_unary = !!h.voidMap[this.$_tagName.toLowerCase()]),
          (this.$_notTriggerUpdate = !1),
          (this.$_dataset = null),
          (this.$_classList = null),
          (this.$_style = null),
          (this.$_attrs = null),
          (this.$$scrollTop = 0),
          (this.$$scrollTimeStamp = 0),
          this.$_initAttrs(t.attrs),
          (this.onclick = null),
          (this.ontouchstart = null),
          (this.ontouchmove = null),
          (this.ontouchend = null),
          (this.ontouchcancel = null),
          (this.onload = null),
          (this.onerror = null);
      }
      $$destroy() {
        super.$$destroy(),
          (this.$_tagName = ""),
          (this.$_children.length = 0),
          (this.$_nodeType = r.ELEMENT_NODE),
          (this.$_unary = null),
          (this.$_notTriggerUpdate = !1),
          (this.$_dataset = null),
          (this.$_classList = null),
          (this.$_style = null),
          (this.$_attrs = null),
          (this._wxComponent = null),
          (this._wxCustomComponent = null),
          (this.$$scrollTop = 0),
          (this.$$scrollTimeStamp = 0);
      }
      $$recycle() {
        this.$_children.forEach((t) => t.$$recycle()), this.$$destroy();
        a.getConfig().optimization.elementMultiplexing && l.add(this);
      }
      set $_dataset(t) {
        this.$__dataset = t;
      }
      get $_dataset() {
        return (
          this.$__dataset || (this.$__dataset = Object.create(null)),
          this.$__dataset
        );
      }
      set $_classList(t) {
        !t && this.$__classList && this.$__classList.$$recycle(),
          (this.$__classList = t);
      }
      get $_classList() {
        return (
          this.$__classList ||
            (this.$__classList = i.$$create(
              this.$_onClassOrStyleUpdate.bind(this)
            )),
          this.$__classList
        );
      }
      set $_style(t) {
        !t && this.$__style && this.$__style.$$recycle(), (this.$__style = t);
      }
      get $_style() {
        return (
          this.$__style ||
            (this.$__style = n.$$create(
              this.$_onClassOrStyleUpdate.bind(this)
            )),
          this.$__style
        );
      }
      set $_attrs(t) {
        !t && this.$__attrs && this.$__attrs.$$recycle(), (this.$__attrs = t);
      }
      get $_attrs() {
        return (
          this.$__attrs ||
            (this.$__attrs = o.$$create(
              this,
              this.$_triggerParentUpdate.bind(this)
            )),
          this.$__attrs
        );
      }
      $_initAttrs(t = {}) {
        const e = Object.keys(t);
        e.length &&
          ((this.$_notTriggerUpdate = !0),
          e.forEach((e) => {
            if (0 === e.indexOf("data-")) {
              const s = c.toCamel(e.substr(5));
              this.$_dataset[s] = t[e];
            } else this.setAttribute(e, t[e]);
          }),
          (this.$_notTriggerUpdate = !1));
      }
      $_onClassOrStyleUpdate() {
        this.$__attrs && this.$_attrs.triggerUpdate(),
          this.$_triggerParentUpdate();
      }
      $_triggerParentUpdate() {
        this.parentNode &&
          !this.$_notTriggerUpdate &&
          (this.parentNode.$$trigger("$$childNodesUpdate"),
          this.$_triggerWindowUpdate()),
          this.$_notTriggerUpdate || this.$$trigger("$$domNodeUpdate");
      }
      $_triggerMeUpdate() {
        this.$_notTriggerUpdate ||
          (this.$$trigger("$$childNodesUpdate"), this.$_triggerWindowUpdate());
      }
      $_triggerWindowUpdate() {
        a.getWindow(this.$_pageId).$$trigger("$$domTreeUpdate");
      }
      $_updateChildrenExtra(t, e) {
        const s = t.id;
        if (
          (e
            ? a.setNode(this.$_pageId, t.$$nodeId, null)
            : a.setNode(this.$_pageId, t.$$nodeId, t),
          s &&
            (e
              ? this.$_tree.updateIdMap(s, null)
              : this.$_tree.updateIdMap(s, t)),
          t.childNodes && t.childNodes.length)
        )
          for (const s of t.childNodes) this.$_updateChildrenExtra(s, e);
      }
      $_generateHtml(t) {
        if (t.nodeType === r.TEXT_NODE) return t.textContent;
        if (t.nodeType === r.ELEMENT_NODE) {
          const e = t.tagName.toLowerCase();
          let s = "<" + e;
          t.behavior &&
            (s += ` behavior="${c.escapeForHtmlGeneration(t.behavior)}"`),
            t.id && (s += ` id="${c.escapeForHtmlGeneration(t.id)}"`),
            t.className &&
              (s += ` class="${c.escapeForHtmlGeneration(t.className)}"`);
          const r = t.style.cssText;
          r && (s += ` style="${c.escapeForHtmlGeneration(r)}"`);
          const i = t.src;
          i && (s += " src=" + c.escapeForHtmlGeneration(i));
          const n = t.dataset;
          if (
            (Object.keys(n).forEach((t) => {
              s += ` data-${c.toDash(t)}="${c.escapeForHtmlGeneration(n[t])}"`;
            }),
            (s = this.$$dealWithAttrsForGenerateHtml(s, t)),
            t.$$isUnary)
          )
            return s + " />";
          {
            const r = t.childNodes.map((t) => this.$_generateHtml(t)).join("");
            return `${s}>${r}</${e}>`;
          }
        }
      }
      $_generateDomTree(t) {
        const {
            type: e,
            tagName: s = "",
            attrs: r = [],
            children: i = [],
            content: n = "",
          } = t,
          o = "b-" + c.getId();
        if ("element" === e) {
          const t = {};
          for (const e of r) {
            const s = e.name;
            let r = e.value;
            "style" === s && (r = (r && r.replace('"', "'")) || ""), (t[s] = r);
          }
          const e = this.ownerDocument.$$createElement({
            tagName: s,
            attrs: t,
            nodeId: o,
          });
          for (let t of i)
            (t = this.$_generateDomTree(t)), t && e.appendChild(t);
          return e;
        }
        return "text" === e
          ? this.ownerDocument.$$createTextNode({
              content: c.decodeContent(n),
              nodeId: o,
            })
          : "comment" === e
          ? this.ownerDocument.createComment()
          : void 0;
      }
      get $$domInfo() {
        return {
          nodeId: this.$$nodeId,
          pageId: this.$$pageId,
          type: this.$_type,
          tagName: this.$_tagName,
          id: this.id,
          className: this.className,
          style: this.$__style ? this.style.cssText : "",
          slot: this.getAttribute("slot"),
        };
      }
      get $$isUnary() {
        return this.$_unary;
      }
      get $$wxComponent() {
        return this._wxComponent;
      }
      get $$wxCustomComponent() {
        return this._wxCustomComponent;
      }
      get $$children() {
        return this.$_children;
      }
      $$dealWithAttrsForGenerateHtml(t) {
        return t;
      }
      $$dealWithAttrsForOuterHTML() {}
      $$dealWithAttrsForCloneNode() {
        return {};
      }
      $$getBoundingClientRect() {
        c.flushThrottleCache();
        const t = a.getWindow(this.$_pageId);
        return new Promise((e, s) => {
          t || s(),
            "BODY" === this.tagName
              ? t
                  .$$createSelectorQuery()
                  .selectViewport()
                  .scrollOffset((t) =>
                    t ? e(t) : s(new Error("body not found in webview"))
                  )
                  .exec()
              : t
                  .$$createSelectorQuery()
                  .select(".miniprogram-root >>> .node-" + this.$_nodeId)
                  .boundingClientRect((t) =>
                    t ? e(t) : s(new Error("element not found in webview"))
                  )
                  .exec();
        });
      }
      $$getContext() {
        c.flushThrottleCache();
        const t = a.getWindow(this.$_pageId);
        return new Promise((e, s) => {
          t || s(),
            "CANVAS" === this.tagName
              ? wx
                  .createSelectorQuery()
                  .in(this.$$wxComponent)
                  .select(".node-" + this.$_nodeId)
                  .context((t) => (t && t.context ? e(t.context) : s()))
                  .exec()
              : t
                  .$$createSelectorQuery()
                  .select(".miniprogram-root >>> .node-" + this.$_nodeId)
                  .context((t) => (t && t.context ? e(t.context) : s()))
                  .exec();
        });
      }
      $$getNodesRef() {
        c.flushThrottleCache();
        const t = a.getWindow(this.$_pageId);
        return new Promise((e, s) => {
          t || s(),
            "CANVAS" === this.tagName
              ? e(
                  wx
                    .createSelectorQuery()
                    .in(this.$$wxComponent)
                    .select(".node-" + this.$_nodeId)
                )
              : e(
                  t
                    .$$createSelectorQuery()
                    .select(".miniprogram-root >>> .node-" + this.$_nodeId)
                );
        });
      }
      $$setAttributeWithoutUpdate(t, e) {
        "string" == typeof t &&
          ((this.$_notTriggerUpdate = !0),
          this.$_attrs.set(t, e),
          (this.$_notTriggerUpdate = !1));
      }
      $$animate(...t) {
        const e = this.$$wxCustomComponent || this.$$wxComponent;
        e
          ? ("object" == typeof t[2] &&
              t[2].scrollSource &&
              (t[2].scrollSource =
                ".miniprogram-root >>> " + t[2].scrollSource),
            e.animate(".node-" + this.$_nodeId, ...t))
          : console.error("this element has not been attached yet");
      }
      $$clearAnimation(...t) {
        const e = this.$$wxCustomComponent || this.$$wxComponent;
        e
          ? ("object" == typeof t[2] &&
              t[2].scrollSource &&
              (t[2].scrollSource =
                ".miniprogram-root >>> " + t[2].scrollSource),
            e.clearAnimation(".node-" + this.$_nodeId, ...t))
          : console.error("this element has not been attached yet");
      }
      get id() {
        return this.$__attrs ? this.$_attrs.get("id") : "";
      }
      set id(t) {
        if ("string" != typeof t) return;
        t = t.trim();
        const e = this.$_attrs.get("id");
        this.$_attrs.set("id", t),
          t !== e &&
            (this.$_tree.getById(e) === this &&
              this.$_tree.updateIdMap(e, null),
            t && this.$_tree.updateIdMap(t, this),
            this.$_triggerParentUpdate());
      }
      get tagName() {
        return this.$_tagName.toUpperCase();
      }
      get className() {
        return this.$__classList ? this.$_classList.toString() : "";
      }
      set className(t) {
        "string" == typeof t && this.$_classList.$$parse(t);
      }
      get classList() {
        return this.$_classList;
      }
      get nodeName() {
        return this.tagName;
      }
      get nodeType() {
        return this.$_nodeType;
      }
      get childNodes() {
        return this.$_children;
      }
      get children() {
        return this.$_children.filter((t) => t.nodeType === r.ELEMENT_NODE);
      }
      get firstChild() {
        return this.$_children[0];
      }
      get lastChild() {
        return this.$_children[this.$_children.length - 1];
      }
      get innerHTML() {
        return this.$_children.map((t) => this.$_generateHtml(t)).join("");
      }
      set innerHTML(t) {
        if ("string" != typeof t) return;
        const e = this.ownerDocument.$$createElement({
          tagName: "documentfragment",
          nodeId: "b-" + c.getId(),
          nodeType: r.DOCUMENT_FRAGMENT_NODE,
        });
        let s = null;
        try {
          s = h.parse(t);
        } catch (t) {
          console.error(t);
        }
        if (s)
          if (
            (s.forEach((t) => {
              const s = this.$_generateDomTree(t);
              s && e.appendChild(s);
            }),
            this.$_children.forEach((t) => {
              t.$$updateParent(null), this.$_updateChildrenExtra(t, !0);
            }),
            (this.$_children.length = 0),
            "table" === this.$_tagName)
          ) {
            let t = !1;
            for (const s of e.childNodes)
              if ("TBODY" === s.tagName) {
                t = !0;
                break;
              }
            if (!t) {
              const t = this.ownerDocument.$$createElement({
                tagName: "tbody",
                attrs: {},
                nodeType: r.ELEMENT_NODE,
                nodeId: "b-" + c.getId(),
              });
              t.appendChild(e), this.appendChild(t);
            }
          } else this.appendChild(e);
      }
      get outerHTML() {
        return this.$_generateHtml(this);
      }
      set outerHTML(t) {
        if ("string" != typeof t) return;
        let e = null;
        try {
          e = h.parse(t)[0];
        } catch (t) {
          console.error(t);
        }
        if (e) {
          const t = this.$_generateDomTree(e);
          this.$_children.forEach((t) => {
            t.$$updateParent(null), this.$_updateChildrenExtra(t, !0);
          }),
            (this.$_children.length = 0),
            (this.$_notTriggerUpdate = !0);
          const s = [].concat(t.childNodes);
          for (const t of s) this.appendChild(t);
          (this.$_tagName = t.tagName.toLowerCase()),
            (this.id = t.id || ""),
            (this.className = t.className || ""),
            (this.style.cssText = t.style.cssText || ""),
            (this.src = t.src || ""),
            (this.$_dataset = Object.assign({}, t.dataset)),
            this.$$dealWithAttrsForOuterHTML(t),
            (this.$_notTriggerUpdate = !1),
            this.$_triggerParentUpdate();
        }
      }
      get innerText() {
        return this.textContent;
      }
      set innerText(t) {
        this.textContent = t;
      }
      get textContent() {
        return this.$_children.map((t) => t.textContent).join("");
      }
      set textContent(t) {
        if (
          ((t = "" + t),
          this.$_children.forEach((t) => {
            t.$$updateParent(null), this.$_updateChildrenExtra(t, !0);
          }),
          (this.$_children.length = 0),
          !t)
        )
          return;
        const e = "b-" + c.getId(),
          s = this.ownerDocument.$$createTextNode({ content: t, nodeId: e });
        this.appendChild(s);
      }
      get style() {
        return this.$_style;
      }
      set style(t) {
        this.$_style.cssText = t;
      }
      get dataset() {
        return this.$_dataset;
      }
      get attributes() {
        return this.$_attrs.list;
      }
      get src() {
        return this.$__attrs ? this.$_attrs.get("src") : "";
      }
      set src(t) {
        (t = "" + t), this.$_attrs.set("src", t);
      }
      get scrollTop() {
        return this.$$scrollTop;
      }
      set scrollTop(t) {
        "html" === this.$_tagName &&
          (+new Date() - this.$$scrollTimeStamp < 500 ||
            ((t = parseInt(t, 10)),
            wx.pageScrollTo({ scrollTop: t, duration: 0 }),
            (this.$$scrollTop = t)));
      }
      cloneNode(t) {
        const e = {};
        Object.keys(this.$_dataset).forEach((t) => {
          e["data-" + c.toDash(t)] = this.$_dataset[t];
        });
        const s = this.ownerDocument.$$createElement({
          tagName: this.$_tagName,
          attrs: {
            id: this.id,
            class: this.className,
            style: this.style.cssText,
            src: this.src,
            ...e,
            ...this.$$dealWithAttrsForCloneNode(),
          },
          nodeType: this.$_nodeType,
          nodeId: "b-" + c.getId(),
        });
        if (this.$__attrs) {
          const t = this.$_attrs.map;
          Object.keys(t).forEach((e) => s.setAttribute(e, t[e]));
        }
        if (t) for (const e of this.$_children) s.appendChild(e.cloneNode(t));
        return s;
      }
      appendChild(t) {
        if (!(t instanceof r)) return;
        let e,
          s = !1;
        (e =
          t.nodeType === r.DOCUMENT_FRAGMENT_NODE
            ? [].concat(t.childNodes)
            : [t]),
          e.length || (s = !0);
        for (const t of e)
          t !== this &&
            (t.parentNode && t.parentNode.removeChild(t),
            this.$_children.push(t),
            t.$$updateParent(this),
            this.$_updateChildrenExtra(t),
            (s = !0));
        return s && this.$_triggerMeUpdate(), this;
      }
      removeChild(t) {
        if (!(t instanceof r)) return;
        const e = this.$_children.indexOf(t);
        return (
          e >= 0 &&
            (this.$_children.splice(e, 1),
            t.$$updateParent(null),
            this.$_updateChildrenExtra(t, !0),
            this.$_triggerMeUpdate()),
          t
        );
      }
      insertBefore(t, e) {
        if (!(t instanceof r)) return;
        if (e && !(e instanceof r)) return;
        let s,
          i = !1;
        if (t.nodeType === r.DOCUMENT_FRAGMENT_NODE) {
          s = [];
          for (let e = 0; e < t.childNodes.length; e++) s.push(t.childNodes[e]);
        } else s = [t];
        for (const t of s) {
          if (t === this) continue;
          t.parentNode && t.parentNode.removeChild(t);
          const s = e ? this.$_children.indexOf(e) : -1;
          -1 === s ? this.$_children.push(t) : this.$_children.splice(s, 0, t),
            t.$$updateParent(this),
            this.$_updateChildrenExtra(t),
            (i = !0);
        }
        return i && this.$_triggerMeUpdate(), t;
      }
      replaceChild(t, e) {
        if (!(t instanceof r && e instanceof r)) return;
        let s,
          i = !1;
        if (t.nodeType === r.DOCUMENT_FRAGMENT_NODE) {
          s = [];
          for (let e = t.childNodes.length - 1; e >= 0; e--)
            s.push(t.childNodes[e]);
        } else s = [t];
        const n = this.$_children.indexOf(e);
        -1 !== n && this.$_children.splice(n, 1);
        for (const t of s)
          t !== this &&
            (t.parentNode && t.parentNode.removeChild(t),
            -1 === n
              ? this.$_children.push(t)
              : this.$_children.splice(n, 0, t),
            t.$$updateParent(this),
            this.$_updateChildrenExtra(t),
            this.$_updateChildrenExtra(e, !0),
            (i = !0));
        return i && this.$_triggerMeUpdate(), e;
      }
      hasChildNodes() {
        return this.$_children.length > 0;
      }
      getElementsByTagName(t) {
        return "string" != typeof t ? [] : this.$_tree.getByTagName(t, this);
      }
      getElementsByClassName(t) {
        return "string" != typeof t ? [] : this.$_tree.getByClassName(t, this);
      }
      querySelector(t) {
        if ("string" == typeof t) return this.$_tree.query(t, this)[0] || null;
      }
      querySelectorAll(t) {
        return "string" != typeof t ? [] : this.$_tree.query(t, this);
      }
      setAttribute(t, e) {
        if ("string" != typeof t) return;
        const s = typeof e;
        if (
          ("object" === s ||
            "boolean" === s ||
            "function" === s ||
            void 0 === e ||
            Array.isArray(e) ||
            (e = "" + e),
          "kbone-attribute-map" === t || "kbone-event-map" === t)
        ) {
          "string" == typeof (e = e || {}) && (e = JSON.parse(e));
          const s = this.getAttribute(t),
            r = Object.keys(e),
            i = s ? Object.keys(s) : null;
          if ("kbone-attribute-map" === t)
            r.forEach((t) => this.setAttribute(t, e[t])),
              i &&
                i.forEach((t) => {
                  Object.prototype.hasOwnProperty.call(e, t) ||
                    this.removeAttribute(t);
                });
          else {
            const t = a.getWindow(this.$_pageId);
            i &&
              i.forEach((e) => {
                let r = s[e];
                (r = "function" != typeof r ? t[r] : r),
                  this.removeEventListener(e, r);
              }),
              r.forEach((s) => {
                let r = e[s];
                (r = "function" != typeof r ? t[r] : r),
                  this.addEventListener(s, r);
              });
          }
        }
        "id" === t ? (this.id = e) : this.$_attrs.set(t, e);
      }
      getAttribute(t) {
        if ("string" != typeof t) return "";
        if (0 === t.indexOf("data-")) {
          const e = c.toCamel(t.substr(5));
          if (!this.$__dataset) return;
          return this.dataset[e];
        }
        return this.$__attrs
          ? this.$_attrs.get(t)
          : "id" === t || "style" === t || "class" === t
          ? ""
          : void 0;
      }
      hasAttribute(t) {
        return "string" == typeof t && !!this.$__attrs && this.$_attrs.has(t);
      }
      removeAttribute(t) {
        return "string" == typeof t && this.$_attrs.remove(t);
      }
      setAttributeNS(t, e, s) {
        console.warn(`namespace ${t} is not supported`),
          this.setAttribute(e, s);
      }
      getAttributeNS(t, e) {
        return (
          console.warn(`namespace ${t} is not supported`), this.getAttribute(e)
        );
      }
      hasAttributeNS(t, e) {
        return (
          console.warn(`namespace ${t} is not supported`), this.hasAttribute(e)
        );
      }
      removeAttributeNS(t, e) {
        return (
          console.warn(`namespace ${t} is not supported`),
          this.removeAttribute(e)
        );
      }
      contains(t) {
        const e = [];
        let s = this;
        for (; s; ) {
          if (s === t) return !0;
          const r = s.childNodes;
          r && r.length && r.forEach((t) => e.push(t)), (s = e.pop());
        }
        return !1;
      }
      getBoundingClientRect() {
        return (
          console.warn(
            "getBoundingClientRect is not supported, please use dom.$$getBoundingClientRect instead of it"
          ),
          { left: 0, top: 0 }
        );
      }
    }
    t.exports = $;
  },
  function(t, e, s) {
    const r = s(5),
      i = s(9);
    function n(t, e) {
      if (t.length !== e.length) return !1;
      for (let s, r = t.length; s < r; s++) {
        const r = t[s],
          i = e[s];
        if (r.identifier !== i.identifier) return !1;
        if (
          r.pageX !== i.pageX ||
          r.pageY !== i.pageY ||
          r.clientX !== i.clientX ||
          r.clientY !== i.clientY
        )
          return !1;
      }
      return !0;
    }
    class o {
      constructor(...t) {
        this.$$init(...t);
      }
      $$init() {
        (this.ontouchstart = null),
          (this.ontouchmove = null),
          (this.ontouchend = null),
          (this.ontouchcancel = null),
          (this.oninput = null),
          (this.onfocus = null),
          (this.onblur = null),
          (this.onchange = null),
          (this.$_miniprogramEvent = null),
          (this.$_eventHandlerMap = null);
      }
      $$destroy() {
        Object.keys(this).forEach((t) => {
          0 === t.indexOf("on") && (this[t] = null),
            "_" === t[0] && (this[t] = null),
            "$" === t[0] && "_" !== t[1] && "$" !== t[1] && (this[t] = null);
        }),
          (this.$_miniprogramEvent = null),
          (this.$_eventHandlerMap = null);
      }
      set $_eventHandlerMap(t) {
        this.$__eventHandlerMap = t;
      }
      get $_eventHandlerMap() {
        return (
          this.$__eventHandlerMap ||
            (this.$__eventHandlerMap = Object.create(null)),
          this.$__eventHandlerMap
        );
      }
      static $$process(t, e, s, n, o) {
        let a;
        (e instanceof i || e instanceof r) &&
          ((a = e), (e = a.type), a.$$setTarget(t)),
          (e = e.toLowerCase());
        const h = [t];
        let c = t.parentNode;
        for (; c && "HTML" !== c.tagName; ) h.push(c), (c = c.parentNode);
        if (("BODY" === h[h.length - 1].tagName && h.push(c), !a)) {
          const i = t.ownerDocument,
            o = i ? i.defaultView : null;
          (a = new r({
            name: e,
            target: t,
            timeStamp: o ? o.performance.now() : s.timeStamp,
            touches: s.touches,
            changedTouches: s.changedTouches,
            bubbles: !0,
            $$extra: n,
          })),
            s.detail &&
              (a.detail = Object.assign({}, s.detail, a.detail || {}));
        }
        for (let s = h.length - 1; s >= 0; s--) {
          const i = h[s];
          if (!a.$$canBubble) break;
          i !== t &&
            (("WX-COMPONENT" === i.tagName && "capture" === i.behavior) ||
              (a.$$setCurrentTarget(i),
              a.$$setEventPhase(r.CAPTURING_PHASE),
              i.$$trigger(e, { event: a, isCapture: !0 }),
              o && o(i, a, !0)));
        }
        if (
          (a.$$canBubble &&
            (a.$$setCurrentTarget(t),
            a.$$setEventPhase(r.AT_TARGET),
            t.$$trigger(e, { event: a, isCapture: !0, isTarget: !0 }),
            o && o(t, a, !0),
            t.$$trigger(e, { event: a, isCapture: !1, isTarget: !0 }),
            o && o(t, a, !1)),
          a.bubbles)
        )
          for (const s of h) {
            if (!a.$$canBubble) break;
            s !== t &&
              (("WX-COMPONENT" === s.tagName && "capture" === s.behavior) ||
                (a.$$setCurrentTarget(s),
                a.$$setEventPhase(r.BUBBLING_PHASE),
                s.$$trigger(e, { event: a, isCapture: !1 }),
                o && o(s, a, !1),
                "WX-COMPONENT" === s.tagName &&
                  "catch" === s.behavior &&
                  a.stopPropagation()));
          }
        return a.$$setCurrentTarget(null), a.$$setEventPhase(r.NONE), a;
      }
      $_getHandlers(t, e, s) {
        const r = this.$_eventHandlerMap;
        if (s) {
          const s = (r[t] = r[t] || {});
          return (
            (s.capture = s.capture || []),
            (s.bubble = s.bubble || []),
            e ? s.capture : s.bubble
          );
        }
        {
          const s = r[t];
          return s ? (e ? s.capture : s.bubble) : null;
        }
      }
      $$trigger(t, { event: e, args: s = [], isCapture: i, isTarget: n } = {}) {
        t = t.toLowerCase();
        const o = this.$_getHandlers(t, i),
          a = "on" + t;
        if (!e) {
          const s = this.ownerDocument,
            i = s ? s.defaultView : null;
          e = new r({
            timeStamp: i ? i.performance.now() : Date.now(),
            touches: [],
            changedTouches: [],
            name: t,
            target: this,
            eventPhase: r.AT_TARGET,
          });
        }
        if (!((i && n) || "function" != typeof this[a])) {
          if (e && e.$$immediateStop) return;
          try {
            this[a].call(this || null, e, ...s);
          } catch (t) {
            console.error(t), this.$$triggerWindowError(t);
          }
        }
        o &&
          (o.length &&
            o.forEach((t) => {
              if (!e || !e.$$immediateStop)
                try {
                  t.call(this || null, e, ...s);
                } catch (t) {
                  console.error(t), this.$$triggerWindowError(t);
                }
            }),
          o._namespace &&
            Object.keys(o._namespace).forEach((t) => {
              const r = o._namespace[t];
              r &&
                r.forEach((t) => {
                  if (!e || !e.$$immediateStop)
                    try {
                      t.call(this || null, e, ...s);
                    } catch (t) {
                      console.error(t), this.$$triggerWindowError(t);
                    }
                });
            }));
      }
      $$checkEvent(t) {
        const e = this.$_miniprogramEvent,
          s = t;
        let r = !1;
        return (
          e && e.timeStamp === s.timeStamp
            ? (((e.touches && s.touches && !n(e.touches, s.touches)) ||
                (!e.touches && s.touches) ||
                (e.touches && !s.touches)) &&
                (r = !0),
              ((e.changedTouches &&
                s.changedTouches &&
                !n(e.changedTouches, s.changedTouches)) ||
                (!e.changedTouches && s.changedTouches) ||
                (e.changedTouches && !s.changedTouches)) &&
                (r = !0))
            : (r = !0),
          r && (this.$_miniprogramEvent = s),
          r
        );
      }
      $$clearEvent(t, e) {
        if ("string" != typeof t) return;
        let s = !1,
          r = null;
        "boolean" == typeof e
          ? (s = e)
          : "object" == typeof e && ((s = !!e.capture), (r = e.$$namespace)),
          (t = t.toLowerCase());
        const i = this.$_getHandlers(t, s);
        i &&
          (i.length && (i.length = 0),
          i._namespace && (i._namespace[r] = null));
      }
      $$hasEventHandler(t) {
        t = t.toLowerCase();
        const e = this.$_getHandlers(t, !1),
          s = this.$_getHandlers(t, !0);
        return (e && e.length) || (s && s.length);
      }
      $$triggerWindowError(t) {
        const e = this.ownerDocument,
          s = e ? e.defaultView : null;
        s && s.$$trigger("error", { event: t });
      }
      addEventListener(t, e, s) {
        if ("string" != typeof t || "function" != typeof e) return;
        let r = !1,
          i = null;
        "boolean" == typeof s
          ? (r = s)
          : "object" == typeof s && ((r = !!s.capture), (i = s.$$namespace)),
          (t = t.toLowerCase());
        const n = this.$_getHandlers(t, r, !0);
        i
          ? ((n._namespace = n._namespace || {}),
            (n._namespace[i] = n._namespace[i] || []),
            n._namespace[i].push(e))
          : n.push(e);
      }
      removeEventListener(t, e, s) {
        if ("string" != typeof t || "function" != typeof e) return;
        let r = !1,
          i = null;
        "boolean" == typeof s
          ? (r = s)
          : "object" == typeof s && ((r = !!s.capture), (i = s.$$namespace)),
          (t = t.toLowerCase());
        const n = this.$_getHandlers(t, r, !1);
        if (n)
          if (i) {
            if (!n._namespace || !n._namespace[i]) return;
            const t = n._namespace[i].indexOf(e);
            t >= 0 && n._namespace[i].splice(t, 1);
          } else {
            const t = n.indexOf(e);
            t >= 0 && n.splice(t, 1);
          }
      }
      dispatchEvent(t) {
        return t instanceof i && o.$$process(this, t), !0;
      }
    }
    t.exports = o;
  },
  function(t, e) {
    class s {
      constructor(t) {
        (this.$_name = t.name.toLowerCase()),
          (this.$_target = t.target),
          (this.$_timeStamp = t.timeStamp || Date.now()),
          (this.$_currentTarget = t.currentTarget || t.target),
          (this.$_eventPhase = t.eventPhase || s.NONE),
          (this.$_detail = t.detail || null),
          (this.$_immediateStop = !1),
          (this.$_canBubble = !0),
          (this.$_bubbles = t.bubbles || !1),
          (this.$_touches = null),
          (this.$_targetTouches = null),
          (this.$_changedTouches = null),
          (this.$_cancelable = !1);
        const e = t.$$extra;
        e &&
          Object.keys(e).forEach((t) => {
            this[t] = e[t];
          }),
          t.touches && t.touches.length
            ? ((this.$_touches = t.touches.map((e) => ({
                ...e,
                target: t.target,
              }))),
              this.$$checkTargetTouches())
            : t.touches && ((this.$_touches = []), (this.$_targetTouches = [])),
          t.changedTouches && t.changedTouches.length
            ? (this.$_changedTouches = t.changedTouches.map((e) => ({
                ...e,
                target: t.target,
              })))
            : t.changedTouches && (this.$_changedTouches = []);
      }
      get $$immediateStop() {
        return this.$_immediateStop;
      }
      get $$canBubble() {
        return this.$_canBubble;
      }
      $$setTarget(t) {
        this.$_target = t;
      }
      $$setCurrentTarget(t) {
        (this.$_currentTarget = t), this.$$checkTargetTouches();
      }
      $$setEventPhase(t) {
        this.$_eventPhase = t;
      }
      $$checkTargetTouches() {
        this.$_touches &&
          this.$_touches.length &&
          (this.$_targetTouches = this.$_touches.filter((t) =>
            (function(t, e) {
              if (t === e) return !0;
              for (; t; ) {
                if (t === e) return !0;
                t = t.parentNode;
              }
              return !1;
            })(t.target, this.$_currentTarget)
          ));
      }
      get bubbles() {
        return this.$_bubbles;
      }
      get cancelable() {
        return this.$_cancelable;
      }
      get target() {
        return this.$_target;
      }
      get currentTarget() {
        return this.$_currentTarget;
      }
      get eventPhase() {
        return this.$_eventPhase;
      }
      get type() {
        return this.$_name;
      }
      get timeStamp() {
        return this.$_timeStamp;
      }
      get touches() {
        return this.$_touches;
      }
      get targetTouches() {
        return this.$_targetTouches;
      }
      get changedTouches() {
        return this.$_changedTouches;
      }
      set detail(t) {
        this.$_detail = t;
      }
      get detail() {
        return this.$_detail;
      }
      preventDefault() {
        this.$_cancelable = !0;
      }
      stopPropagation() {
        this.eventPhase !== s.NONE && (this.$_canBubble = !1);
      }
      stopImmediatePropagation() {
        this.eventPhase !== s.NONE &&
          ((this.$_immediateStop = !0), (this.$_canBubble = !1));
      }
      initEvent(t = "", e) {
        "string" == typeof t &&
          ((this.$_name = t.toLowerCase()),
          (this.$_bubbles = void 0 === e ? this.$_bubbles : !!e));
      }
    }
    (s.NONE = 0),
      (s.CAPTURING_PHASE = 1),
      (s.AT_TARGET = 2),
      (s.BUBBLING_PHASE = 3),
      (t.exports = s);
  },
  function(t, e, s) {
    const r = s(4),
      i = s(0);
    class n extends r {
      $$init(t, e) {
        super.$$init(),
          (this.$_nodeId = t.nodeId),
          (this.$_type = t.type),
          (this.$_parentNode = null),
          (this.$_tree = e),
          (this.$_pageId = e.pageId);
      }
      $$destroy() {
        super.$$destroy(),
          (this.$_nodeId = null),
          (this.$_type = null),
          (this.$_parentNode = null),
          (this.$_tree = null),
          (this.$_pageId = null);
      }
      get $$nodeId() {
        return this.$_nodeId;
      }
      get $$pageId() {
        return this.$_pageId;
      }
      $$updateParent(t = null) {
        this.$_parentNode = t;
      }
      get parentNode() {
        return this.$_parentNode;
      }
      get nodeValue() {
        return null;
      }
      get previousSibling() {
        const t = (this.parentNode && this.parentNode.childNodes) || [],
          e = t.indexOf(this);
        return e > 0 ? t[e - 1] : null;
      }
      get previousElementSibling() {
        const t = (this.parentNode && this.parentNode.childNodes) || [],
          e = t.indexOf(this);
        if (e > 0)
          for (let s = e - 1; s >= 0; s--)
            if (t[s].nodeType === n.ELEMENT_NODE) return t[s];
        return null;
      }
      get nextSibling() {
        const t = (this.parentNode && this.parentNode.childNodes) || [],
          e = t.indexOf(this);
        return t[e + 1] || null;
      }
      get nextElementSibling() {
        const t = (this.parentNode && this.parentNode.childNodes) || [],
          e = t.indexOf(this);
        if (e < t.length - 1)
          for (let s = e + 1, r = t.length; s < r; s++)
            if (t[s].nodeType === n.ELEMENT_NODE) return t[s];
        return null;
      }
      get ownerDocument() {
        return i.getDocument(this.$_pageId) || null;
      }
      get childNodes() {
        return [];
      }
      hasChildNodes() {
        return !1;
      }
      remove() {
        return this.parentNode && this.parentNode.removeChild
          ? this.parentNode.removeChild(this)
          : this;
      }
    }
    (n.ELEMENT_NODE = 1),
      (n.TEXT_NODE = 3),
      (n.CDATA_SECTION_NODE = 4),
      (n.PROCESSING_INSTRUCTION_NODE = 7),
      (n.COMMENT_NODE = 8),
      (n.DOCUMENT_NODE = 9),
      (n.DOCUMENT_TYPE_NODE = 10),
      (n.DOCUMENT_FRAGMENT_NODE = 11),
      (t.exports = n);
  },
  function(t, e, s) {
    const r = s(4),
      i = s(1),
      n = s(0);
    class o extends r {
      constructor(t) {
        super(),
          (this.$_pageId = t),
          (this.$_pageRoute = i.getPageRoute(t)),
          (this.$_protocol = "https:"),
          (this.$_hostname = ""),
          (this.$_port = ""),
          (this.$_pathname = "/"),
          (this.$_search = ""),
          (this.$_hash = ""),
          (this.$_lastHash = ""),
          (this.$_lastPathname = ""),
          (this.$_lastSearch = ""),
          (this.$_lastHref = ""),
          (this.$_allowCheck = !0);
      }
      $_getOldValues() {
        return {
          protocol: this.$_protocol,
          hostname: this.$_hostname,
          port: this.$_port,
          pathname: this.$_pathname,
          search: this.$_search,
          hash: this.$_hash,
        };
      }
      $_setHrefWithoutEnterHistory(t) {
        if (!t || "string" != typeof t) return;
        if ((this.$$startCheckHash(), !/^(([a-zA-Z0-9]+:)|(\/\/))/i.test(t)))
          if (0 === t.indexOf("/")) t = `${this.origin}${t}`;
          else if (0 === t.indexOf("#"))
            t = `${this.origin}${this.$_pathname}${this.$_search}${t}`;
          else {
            let e = this.$_pathname.split("/");
            e.pop(), (e = e.join("/")), (t = `${this.origin}${e}/${t}`);
          }
        const {
            protocol: e,
            hostname: s,
            port: r,
            hash: i,
            search: n,
            pathname: a,
          } = o.$$parse(t),
          h = this.$_getOldValues();
        (this.$_protocol = e || this.$_protocol),
          (this.$_hostname = s || this.$_hostname),
          (this.$_port = r || ""),
          (this.$_pathname = a || "/"),
          (this.$_search = n || ""),
          (this.$_hash = i || ""),
          this.$$endCheckHash(),
          this.$_checkUrl(h);
      }
      $_enterHistory() {
        this.$$trigger("$_addToHistory", { event: { href: this.href } });
      }
      $_checkUrl(t) {
        if (!this.$_allowCheck) return !1;
        const e = n.getWindow(this.$_pageId);
        if (
          this.$_protocol !== t.protocol ||
          this.$_hostname !== t.hostname ||
          this.$_port !== t.port
        ) {
          const s = this.href;
          return (
            (this.$_protocol = t.protocol),
            (this.$_hostname = t.hostname),
            (this.$_port = t.port),
            (this.$_pathname = t.pathname),
            (this.$_search = t.search),
            (this.$_hash = t.hash),
            e.$$trigger("pageaccessdenied", {
              event: { url: s, type: "jump" },
            }),
            !1
          );
        }
        if (this.$_pathname !== t.pathname || this.$_search !== t.search) {
          const s = e.$$miniprogram.getMatchRoute(this.$_pathname);
          if (s) {
            let r = ["type=jump", "targeturl=" + encodeURIComponent(this.href)];
            this.$_search &&
              r.push("search=" + encodeURIComponent(this.$_search)),
              this.$_hash && r.push("hash=" + encodeURIComponent(this.$_hash)),
              (r = "?" + r.join("&"));
            const i = e.$$miniprogram.isTabBarPage(s)
              ? "switchTab"
              : "redirectTo";
            return (
              wx[i]({ url: `${s}${r}` }),
              "switchTab" === i &&
                ((this.$_protocol = t.protocol),
                (this.$_hostname = t.hostname),
                (this.$_port = t.port),
                (this.$_pathname = t.pathname),
                (this.$_search = t.search),
                (this.$_hash = t.hash)),
              !0
            );
          }
          {
            const s = this.href;
            return (
              (this.$_protocol = t.protocol),
              (this.$_hostname = t.hostname),
              (this.$_port = t.port),
              (this.$_pathname = t.pathname),
              (this.$_search = t.search),
              (this.$_hash = t.hash),
              e.$$trigger("pagenotfound", { event: { url: s, type: "jump" } }),
              !1
            );
          }
        }
        return !0;
      }
      $$open(t) {
        t = i.completeURL(t, this.origin, !0);
        const e = n.getWindow(this.$_pageId),
          s = o.$$parse(t);
        if (
          s.protocol !== this.$_protocol ||
          s.hostname !== this.$_hostname ||
          s.port !== this.$_port
        )
          return e.$$trigger("pageaccessdenied", {
            event: { url: t, type: "open" },
          });
        const r = e.$$miniprogram.getMatchRoute(s.pathname || "/");
        if (r) {
          let i = ["type=open", "targeturl=" + encodeURIComponent(t)];
          this.$_search &&
            i.push("search=" + encodeURIComponent(s.search || "")),
            this.$_hash && i.push("hash=" + encodeURIComponent(s.hash || "")),
            (i = "?" + i.join("&"));
          const n = e.$$miniprogram.isTabBarPage(r)
            ? "switchTab"
            : "navigateTo";
          wx[n]({ url: `${r}${i}` });
        } else e.$$trigger("pagenotfound", { event: { url: t, type: "open" } });
      }
      $$reset(t = "") {
        const {
          protocol: e,
          hostname: s,
          port: r,
          pathname: i,
          hash: n,
          search: a,
        } = o.$$parse(t);
        (this.$_protocol = e || "https:"),
          (this.$_hostname = s || ""),
          (this.$_port = r || ""),
          (this.$_pathname = i || "/"),
          (this.$_search = a || ""),
          (this.$_hash = n || "");
      }
      static $$parse(t = "") {
        t = t.trim();
        let e = /^[a-zA-Z0-9]+:/i.exec(t);
        e && ((e = e[0].toLowerCase()), (t = t.slice(e.length))),
          0 === t.indexOf("//") && (t = t.slice(2));
        let s,
          r = 0,
          i = -1,
          n = !1;
        for (let e = 0, s = t.length; e < s; e++) {
          const s = t[e];
          if (
            ("\t\n\r \"%';<>\\^`{|}".indexOf(s) >= 0
              ? -1 === i && (i = e)
              : "#/?".indexOf(s) >= 0
              ? (-1 === i && (i = e), (n = !0))
              : "@" === s && ((r = e + 1), (i = -1)),
            n)
          )
            break;
        }
        -1 === i
          ? ((s = t.slice(r)), (t = ""))
          : ((s = t.slice(r, i)), (t = t.slice(i)));
        let o = /:[0-9]*$/.exec(s);
        o
          ? ((o = o[0]),
            (s = s.slice(0, s.length - o.length)),
            ":" !== o && (o = o.slice(1)))
          : (o = "");
        for (let e = 0, r = s.length; e < r; e++) {
          const r = s[e];
          (r >= "a" && r <= "z") ||
            (r >= "A" && r <= "Z") ||
            (r >= "0" && r <= "9") ||
            ".-+_".indexOf(r) >= 0 ||
            r.charCodeAt(0) > 127 ||
            ((s = s.slice(0, e)), (t = `/${s.slice(e)}${t}`));
        }
        const a = s.length > 255 ? "" : s.toLowerCase();
        let h,
          c,
          l,
          $ = -1,
          u = -1;
        for (let e = 0, s = t.length; e < s; e++) {
          if ("#" === t[e]) {
            (h = t.slice(e)), (u = e);
            break;
          }
          "?" === t[e] && -1 === $ && ($ = e);
        }
        (h = "#" === h ? "" : h),
          -1 !== $ && (c = -1 === u ? t.slice($) : t.slice($, u)),
          (c = "?" === c ? "" : c);
        const d = -1 !== $ && (-1 === u || $ < u) ? $ : u;
        return (
          d > 0 ? (l = t.slice(0, d)) : -1 === d && t.length > 0 && (l = t),
          a && !l && (l = "/"),
          { protocol: e, hostname: a, port: o, pathname: l, hash: h, search: c }
        );
      }
      $$setHrefWithoutCheck(t) {
        (this.$_allowCheck = !1), this.replace(t), (this.$_allowCheck = !0);
      }
      $$startCheckHash() {
        this.$_allowCheck &&
          ((this.$_lastHash = this.$_hash),
          (this.$_lastPathname = this.$_pathname),
          (this.$_lastSearch = this.$_search),
          (this.$_lastHref = this.href));
      }
      $$endCheckHash(t) {
        this.$_allowCheck &&
          ((t ||
            (this.$_lastPathname === this.$_pathname &&
              this.$_lastSearch === this.$_search)) &&
            this.$_lastHash !== this.$_hash &&
            this.$$trigger("hashchange", {
              event: { oldURL: this.$_lastHref, newURL: this.href },
            }),
          (this.$_lastHash = ""),
          (this.$_lastPathname = ""),
          (this.$_lastSearch = ""),
          (this.$_lastHref = ""));
      }
      get protocol() {
        return this.$_protocol;
      }
      set protocol(t) {
        if (!t || "string" != typeof t) return;
        const e = /^([a-z0-9.+-]+)(:)?$/i.exec(t),
          s = this.$_getOldValues();
        e &&
          (":" === e[2]
            ? (this.$_protocol = t)
            : (this.$_protocol = e[1] + ":"),
          this.$_checkUrl(s) && this.$_enterHistory());
      }
      get host() {
        return (this.$_hostname || "") + (this.$_port ? ":" + this.$_port : "");
      }
      set host(t) {
        if (!t || "string" != typeof t) return;
        const { hostname: e, port: s } = o.$$parse("//" + t),
          r = this.$_getOldValues();
        (this.$_hostname = e || this.$_hostname),
          (this.$_port = s || ""),
          this.$_checkUrl(r) && this.$_enterHistory();
      }
      get hostname() {
        return this.$_hostname;
      }
      set hostname(t) {
        if (!t || "string" != typeof t) return;
        const { hostname: e } = o.$$parse("//" + t),
          s = this.$_getOldValues();
        (this.$_hostname = e || this.$_hostname),
          this.$_checkUrl(s) && this.$_enterHistory();
      }
      get port() {
        return this.$_port;
      }
      set port(t) {
        if ("number" != typeof (t = +t) || !isFinite(t) || t <= 0) return;
        const e = 80 === t ? "" : t + "",
          s = this.$_getOldValues();
        (this.$_port = e), this.$_checkUrl(s) && this.$_enterHistory();
      }
      get origin() {
        return `${this.$_protocol}//${this.host}`;
      }
      set origin(t) {
        if (!t || "string" != typeof t) return;
        if (!/^(([a-zA-Z0-9]+:)|(\/\/))/i.test(t)) return;
        const { protocol: e, hostname: s, port: r } = o.$$parse(t),
          i = this.$_getOldValues();
        (this.$_protocol = e || this.$_protocol),
          (this.$_hostname = s || this.$_hostname),
          (this.$_port = r || ""),
          this.$_checkUrl(i) && this.$_enterHistory();
      }
      get pathname() {
        return this.$_pathname;
      }
      set pathname(t) {
        if ("string" != typeof t) return;
        const e = this.$_getOldValues();
        if (t && "/" !== t) {
          "/" !== t[0] && (t = "/" + t);
          const { pathname: e } = o.$$parse("//miniprogram" + t);
          this.$_pathname = e || "/";
        } else this.$_pathname = "/";
        this.$_checkUrl(e) && this.$_enterHistory();
      }
      get search() {
        return this.$_search;
      }
      set search(t) {
        if ("string" != typeof t) return;
        const e = this.$_getOldValues();
        if (t && "?" !== t) {
          "?" !== t[0] && (t = "?" + t);
          const { search: e } = o.$$parse("//miniprogram" + t);
          this.$_search = e || "";
        } else this.$_search = "";
        this.$_checkUrl(e) && this.$_enterHistory();
      }
      get hash() {
        return this.$_hash;
      }
      set hash(t) {
        if ("string" == typeof t) {
          if ((this.$$startCheckHash(), t && "#" !== t)) {
            "#" !== t[0] && (t = "#" + t);
            const { hash: e } = o.$$parse("//miniprogram" + t);
            this.$_hash = e || "";
          } else this.$_hash = "";
          this.$$endCheckHash(), this.$_enterHistory();
        }
      }
      get href() {
        return `${this.$_protocol}//${this.host}${this.$_pathname}${this.$_search}${this.$_hash}`;
      }
      set href(t) {
        this.$_setHrefWithoutEnterHistory(t), this.$_enterHistory();
      }
      reload() {
        const t = n.getWindow(this.$_pageId);
        let e = ["type=jump", "targeturl=" + encodeURIComponent(this.href)];
        this.$_search && e.push("search=" + encodeURIComponent(this.$_search)),
          this.$_hash && e.push("hash=" + encodeURIComponent(this.$_hash)),
          (e = "?" + e.join("&"));
        const s = t.$$miniprogram.isTabBarPage(this.$_pageRoute)
          ? "switchTab"
          : "redirectTo";
        wx[s]({ url: `${this.$_pageRoute}${e}` });
      }
      replace(t) {
        this.$_setHrefWithoutEnterHistory(t);
      }
      toString() {
        return this.href;
      }
    }
    t.exports = o;
  },
  function(t, e, s) {
    const r = s(4),
      i = s(5),
      n = s(17),
      o = s(6),
      a = s(3),
      h = s(13),
      c = s(14),
      l = s(1),
      $ = s(0),
      u = s(21),
      d = s(22),
      p = s(23),
      g = s(24),
      _ = s(25),
      m = s(26),
      f = s(27),
      y = s(28),
      b = s(29),
      x = s(30),
      w = s(31),
      C = s(32),
      N = {
        A: u,
        IMG: d,
        INPUT: p,
        TEXTAREA: g,
        VIDEO: _,
        CANVAS: m,
        SELECT: f,
        OPTION: y,
      },
      T = [
        "checkbox",
        "checkbox-group",
        "input",
        "label",
        "radio",
        "radio-group",
        "textarea",
        "canvas",
      ];
    let E = {};
    function v(t, e, s) {
      let r = null;
      "radio" === t || "checkbox" === t
        ? ((e.attrs.type = t), (t = "input"))
        : ("radio-group" !== t && "checkbox-group" !== t) ||
          ((r = t.split("-")[0]), (t = "div")),
        (e.tagName = t),
        delete e.attrs.behavior;
      const n = (N[t.toUpperCase()] || a).$$create(e, s);
      return (
        r &&
          (n.addEventListener("change", (t) => {
            t.$$isGroup || t.stopImmediatePropagation();
          }),
          n.addEventListener(`$$${r}Change`, (t) => {
            const e = {};
            "radio" === r
              ? ((n.querySelectorAll("input[type=radio]") || []).forEach(
                  (e) => {
                    e !== t.target && e.setAttribute("checked", !1);
                  }
                ),
                (e.value = t.target.value))
              : "checkbox" === r &&
                (e.value = (n.querySelectorAll("input[type=checkbox]") || [])
                  .filter((t) => t.checked)
                  .map((t) => t.value)),
              n.$$trigger("change", {
                event: new i({
                  timeStamp: t.timeStamp,
                  touches: t.touches,
                  changedTouches: t.changedTouches,
                  name: "change",
                  target: n,
                  eventPhase: i.AT_TARGET,
                  detail: e,
                  $$extra: { $$isGroup: !0 },
                }),
                currentTarget: n,
              });
          })),
        n
      );
    }
    t.exports = class extends r {
      constructor(t, e) {
        super();
        const s = $.getConfig().runtime || {},
          r = s.cookieStore;
        (E = s.usingComponents || {}), (this.$_pageId = t);
        const i = l.getPageRoute(t),
          o = l.getPageName(i),
          a = this;
        if (
          ((this.$_imageConstructor = function(t, e) {
            return d.$$create(
              {
                tagName: "img",
                nodeId: "b-" + l.getId(),
                attrs: {},
                width: t,
                height: e,
              },
              a.$_tree
            );
          }),
          (this.$_pageId = t),
          (this.$_tree = new n(
            t,
            {
              type: "element",
              tagName: "body",
              attrs: {},
              unary: !1,
              nodeId: "e-body",
              children: [],
            },
            e,
            this
          )),
          (this.$_cookie = new C(o)),
          (this.$_config = null),
          (this.$_node = this.$$createElement({
            tagName: "html",
            attrs: {},
            nodeId: "a-" + l.getId(),
          })),
          this.$_node.$$updateParent(this),
          (this.$_head = this.createElement("head")),
          this.$_tree.root.$$updateParent(this.$_node),
          this.$_node.$$children.push(this.$_tree.root),
          "memory" !== r && "globalmemory" !== r)
        )
          try {
            const t = "storage" === r ? "PAGE_COOKIE_" + o : "PAGE_COOKIE",
              e = wx.getStorageSync(t);
            e && this.$$cookieInstance.deserialize(e);
          } catch (t) {}
      }
      get $$imageConstructor() {
        return this.$_imageConstructor;
      }
      get $$pageId() {
        return this.$_pageId;
      }
      get $$cookie() {
        return this.$_cookie.getCookie(this.URL, !0);
      }
      get $$cookieInstance() {
        return this.$_cookie;
      }
      get $$notNeedPrefix() {
        return (
          this.$_config || (this.$_config = $.getConfig()),
          this.$_config &&
            this.$_config.runtime &&
            "noprefix" === this.$_config.runtime.wxComponent
        );
      }
      set $$visibilityState(t) {
        this.$_visibilityState = t;
      }
      $$trigger(t, e) {
        this.documentElement.$$trigger(t, e);
      }
      $$createElement(t, e) {
        const s = t.tagName,
          r = s.toUpperCase();
        let i = null;
        e = e || this.$_tree;
        const n = N[r];
        if (n) return n.$$create(t, e);
        if ("WX-COMPONENT" === r) {
          t.attrs = t.attrs || {};
          const s = t.attrs.behavior;
          return s && -1 !== T.indexOf(s) ? v(s, t, e) : x.$$create(t, e);
        }
        return (i = l.checkIsWxComponent(s, this.$$notNeedPrefix))
          ? ((t.attrs = t.attrs || {}),
            -1 !== T.indexOf(i)
              ? v(i, t, e)
              : ((t.tagName = "wx-component"),
                (t.attrs.behavior = i),
                x.$$create(t, e)))
          : E[s]
          ? ((t.tagName = "wx-custom-component"),
            (t.attrs = t.attrs || {}),
            (t.componentName = s),
            w.$$create(t, e))
          : l.isTagNameSupport(r)
          ? a.$$create(t, e)
          : b.$$create(t, e);
      }
      $$createTextNode(t, e) {
        return h.$$create(t, e || this.$_tree);
      }
      $$createComment(t, e) {
        return c.$$create(t, e || this.$_tree);
      }
      $$setCookie(t) {
        if (t && "string" == typeof t) {
          let e = 0,
            s = 0,
            r = t.indexOf(",", s);
          const i = [];
          for (; r >= 0; ) {
            const n = t.substring(e, r),
              o = t.substr(r);
            /^,\s*([^,=;\x00-\x1F]+)=([^;\n\r\0\x00-\x1F]*).*/.test(o) &&
              (i.push(n), (e = r + 1)),
              (s = r + 1),
              (r = t.indexOf(",", s));
          }
          i.push(t.substr(e)), i.forEach((t) => (this.cookie = t));
        }
      }
      get nodeType() {
        return o.DOCUMENT_NODE;
      }
      get documentElement() {
        return this.$_node;
      }
      get body() {
        return this.$_tree.root;
      }
      get nodeName() {
        return "#document";
      }
      get head() {
        return this.$_head;
      }
      get defaultView() {
        return $.getWindow(this.$_pageId) || null;
      }
      get URL() {
        return this.defaultView ? this.defaultView.location.href : "";
      }
      get cookie() {
        return this.$_cookie.getCookie(this.URL);
      }
      set cookie(t) {
        t && "string" == typeof t && this.$_cookie.setCookie(t, this.URL);
      }
      get visibilityState() {
        return this.$_visibilityState;
      }
      get hidden() {
        return "visible" === this.$_visibilityState;
      }
      getElementById(t) {
        if ("string" == typeof t) return this.$_tree.getById(t) || null;
      }
      getElementsByTagName(t) {
        return "string" != typeof t
          ? []
          : this.$_tree.getByTagName(t, this.documentElement);
      }
      getElementsByClassName(t) {
        return "string" != typeof t
          ? []
          : this.$_tree.getByClassName(t, this.documentElement);
      }
      getElementsByName(t) {
        return "string" != typeof t
          ? []
          : this.$_tree.query(`*[name=${t}]`, this.documentElement);
      }
      querySelector(t) {
        if ("string" == typeof t)
          return this.$_tree.query(t, this.documentElement)[0] || null;
      }
      querySelectorAll(t) {
        return "string" != typeof t
          ? []
          : this.$_tree.query(t, this.documentElement);
      }
      createElement(t) {
        if ("string" == typeof t && (t = t.trim()))
          return this.$$createElement({ tagName: t, nodeId: "b-" + l.getId() });
      }
      createElementNS(t, e) {
        return this.createElement(e);
      }
      createTextNode(t) {
        return (
          (t = "" + t),
          this.$$createTextNode({ content: t, nodeId: "b-" + l.getId() })
        );
      }
      createComment() {
        return this.$$createComment({ nodeId: "b-" + l.getId() });
      }
      createDocumentFragment() {
        return a.$$create(
          {
            tagName: "documentfragment",
            nodeId: "b-" + l.getId(),
            nodeType: o.DOCUMENT_FRAGMENT_NODE,
          },
          this.$_tree
        );
      }
      createEvent() {
        return new ($.getWindow(this.$_pageId).CustomEvent)();
      }
      addEventListener(t, e, s) {
        this.documentElement.addEventListener(t, e, s);
      }
      removeEventListener(t, e, s) {
        this.documentElement.removeEventListener(t, e, s);
      }
      dispatchEvent(t) {
        this.documentElement.dispatchEvent(t);
      }
    };
  },
  function(t, e, s) {
    const r = s(5);
    t.exports = class extends r {
      constructor(t = "", e = {}) {
        super({ name: t, ...e });
      }
    };
  },
  function(t, e, s) {
    const r = s(2),
      i = s(0),
      n = new r();
    function o(t) {
      this.$$init(t);
    }
    (o.$$create = function(t) {
      if (i.getConfig().optimization.domExtendMultiplexing) {
        const e = n.get();
        if (e) return e.$$init(t), e;
      }
      return new o(t);
    }),
      (o.prototype = Object.assign([], {
        $$init(t) {
          this.$_doUpdate = t;
        },
        $$destroy() {
          (this.$_doUpdate = null), (this.length = 0);
        },
        $$recycle() {
          this.$$destroy();
          i.getConfig().optimization.domExtendMultiplexing && n.add(this);
        },
        $$parse(t = "") {
          (this.length = 0), (t = (t = t.trim()) ? t.split(/\s+/) : []);
          for (const e of t) this.push(e);
          this.$_doUpdate();
        },
        item(t) {
          return this[t];
        },
        contains(t) {
          return "string" == typeof t && -1 !== this.indexOf(t);
        },
        add(...t) {
          let e = !1;
          for (let s of t)
            "string" == typeof s &&
              ((s = s.trim()),
              s && -1 === this.indexOf(s) && (this.push(s), (e = !0)));
          e && this.$_doUpdate();
        },
        remove(...t) {
          let e = !1;
          for (let s of t) {
            if ("string" != typeof s) continue;
            if (((s = s.trim()), !s)) continue;
            const t = this.indexOf(s);
            t >= 0 && (this.splice(t, 1), (e = !0));
          }
          e && this.$_doUpdate();
        },
        toggle(t, e) {
          if ("string" != typeof t) return !1;
          if (!(t = t.trim())) return !1;
          const s = -1 === this.indexOf(t);
          let r = s ? "add" : "remove";
          return (
            (r = !0 === e ? "add" : !1 === e ? "remove" : r),
            "add" === r ? this.add(t) : this.remove(t),
            !0 === e || !1 === e ? e : s
          );
        },
        toString() {
          return this.join(" ");
        },
      })),
      (t.exports = o);
  },
  function(t, e, s) {
    const r = s(19),
      i = s(1),
      n = s(2),
      o = s(0),
      a = new n();
    class h {
      constructor(t) {
        this.$$init(t);
      }
      static $$create(t) {
        if (o.getConfig().optimization.domExtendMultiplexing) {
          const e = a.get();
          if (e) return e.$$init(t), e;
        }
        return new h(t);
      }
      $$init(t) {
        (this.$_doUpdate = t || (() => {})), (this.$_disableCheckUpdate = !1);
      }
      $$destroy() {
        (this.$_doUpdate = null),
          (this.$_disableCheckUpdate = !1),
          r.forEach((t) => {
            this["$_" + t] = void 0;
          });
      }
      $$recycle() {
        this.$$destroy();
        o.getConfig().optimization.domExtendMultiplexing && a.add(this);
      }
      $_checkUpdate() {
        this.$_disableCheckUpdate || this.$_doUpdate();
      }
      get cssText() {
        const t = r
          .filter((t) => this["$_" + t])
          .map((t) => `${i.toDash(t)}:${this["$_" + t]}`)
          .join(";")
          .trim();
        return t ? t + ";" : "";
      }
      set cssText(t) {
        if ("string" != typeof t) return;
        const e = (function(t) {
          const e = {};
          return (
            t &&
              (t = (t = i.decodeContent(t)).replace(/url\([^)]+\)/gi, (t) =>
                t.replace(/;/gi, ":#||#:")
              ))
                .split(";")
                .forEach((t) => {
                  if (!(t = t.trim())) return;
                  const s = t.indexOf(":");
                  if (-1 === s) return;
                  const r = i.toCamel(t.substr(0, s).trim());
                  e[r] = t
                    .substr(s + 1)
                    .replace(/:#\|\|#:/gi, ";")
                    .trim();
                }),
            e
          );
        })((t = t.replace(/"/g, "'")));
        this.$_disableCheckUpdate = !0;
        for (const t of r) this[t] = e[t];
        (this.$_disableCheckUpdate = !1), this.$_checkUpdate();
      }
      getPropertyValue(t) {
        return "string" != typeof t ? "" : this[(t = i.toCamel(t))] || "";
      }
    }
    const c = {};
    r.forEach((t) => {
      c[t] = {
        get() {
          return this["$_" + t] || "";
        },
        set(e) {
          const s = o.getConfig(),
            r = this["$_" + t];
          (e = void 0 !== e ? "" + e : void 0) &&
            s.optimization.styleValueReduce &&
            e.length > s.optimization.styleValueReduce &&
            (console.warn(
              `property "${t}" will be deleted, because it's greater than ${s.optimization.styleValueReduce}`
            ),
            (e = void 0)),
            (this["$_" + t] = e),
            r !== e && this.$_checkUpdate();
        },
      };
    }),
      Object.defineProperties(h.prototype, c),
      (t.exports = h);
  },
  function(t, e, s) {
    const r = s(2),
      i = s(0),
      n = s(1),
      o = new r();
    class a {
      constructor(t, e) {
        this.$$init(t, e);
      }
      static $$create(t, e) {
        if (i.getConfig().optimization.domExtendMultiplexing) {
          const s = o.get();
          if (s) return s.$$init(t, e), s;
        }
        return new a(t, e);
      }
      $$init(t, e) {
        (this.$_element = t),
          (this.$_doUpdate = e),
          (this.$_map = {}),
          (this.$_list = []),
          this.triggerUpdate();
      }
      $$destroy() {
        (this.$_element = null),
          (this.$_doUpdate = null),
          (this.$_map = null),
          (this.$_list = null);
      }
      $$recycle() {
        this.$$destroy();
        i.getConfig().optimization.domExtendMultiplexing && o.add(this);
      }
      get map() {
        return this.$_map;
      }
      get list() {
        return this.$_list;
      }
      set(t, e) {
        const s = this.$_element,
          r = this.$_map;
        if ("id" === t) r.id = e;
        else if (
          "class" === t ||
          ("WX-COMPONENT" === s.tagName && "className" === t)
        )
          s.className = e;
        else if ("style" === t) s.style.cssText = e;
        else if (0 === t.indexOf("data-")) {
          const r = n.toCamel(t.substr(5));
          s.dataset[r] = e;
        } else {
          const n = i.getConfig();
          "string" == typeof e &&
            n.optimization.attrValueReduce &&
            e.length > n.optimization.attrValueReduce &&
            (console.warn(
              `property "${t}" will be deleted, because it's greater than ${n.optimization.attrValueReduce}`
            ),
            (e = "")),
            (r[t] = e),
            ("width" !== t && "height" !== t) ||
              "CANVAS" !== s.tagName ||
              !s.$$node ||
              (s.$$node[t] = e),
            this.$_doUpdate();
        }
        this.triggerUpdate();
      }
      get(t) {
        const e = this.$_element,
          s = this.$_map;
        if ("id" === t) return s.id || "";
        if ("class" === t) return e.className;
        if ("style" === t) return e.style.cssText;
        if (0 === t.indexOf("data-")) {
          const s = n.toCamel(t.substr(5));
          if (!e.$__dataset) return;
          return e.dataset[s];
        }
        return s[t];
      }
      has(t) {
        const e = this.$_element,
          s = this.$_map;
        if ("id" === t) return !!e.id;
        if ("class" === t) return !!e.className;
        if ("style" === t) return !!e.style.cssText;
        if (0 === t.indexOf("data-")) {
          const s = n.toCamel(t.substr(5));
          return (
            !!e.$__dataset && Object.prototype.hasOwnProperty.call(e.dataset, s)
          );
        }
        return Object.prototype.hasOwnProperty.call(s, t);
      }
      remove(t) {
        const e = this.$_element,
          s = this.$_map;
        if ("id" === t) e.id = "";
        else if ("class" === t || "style" === t) this.set(t, "");
        else if (0 === t.indexOf("data-")) {
          const s = n.toCamel(t.substr(5));
          e.$__dataset && delete e.dataset[s];
        } else delete s[t], this.$_doUpdate();
        this.triggerUpdate();
      }
      triggerUpdate() {
        const t = this.$_map,
          e = this.$_list;
        e.forEach((t) => {
          delete e[t.name];
        }),
          delete e.class,
          delete e.style,
          (e.length = 0),
          Object.keys(t).forEach((s) => {
            if ("id" !== s) {
              const r = { name: s, value: t[s] };
              e.push(r), (e[s] = r);
            }
          });
        const s = this.get("id"),
          r = this.get("class"),
          i = this.get("style");
        if (s) {
          const t = { name: "id", value: s };
          e.push(t), (e.id = t);
        }
        if (r) {
          const t = { name: "class", value: r };
          e.push(t), (e.class = t);
        }
        if (i) {
          const t = { name: "style", value: i };
          e.push(t), (e.style = t);
        }
      }
    }
    t.exports = a;
  },
  function(t, e, s) {
    const r = s(6),
      i = s(1),
      n = s(2),
      o = s(0),
      a = new n();
    class h extends r {
      static $$create(t, e) {
        if (o.getConfig().optimization.textMultiplexing) {
          const s = a.get();
          if (s) return s.$$init(t, e), s;
        }
        return new h(t, e);
      }
      $$init(t, e) {
        (t.type = "text"),
          super.$$init(t, e),
          (this.$_content = t.content || "");
      }
      $$destroy() {
        super.$$destroy(), (this.$_content = "");
      }
      $$recycle() {
        this.$$destroy();
        o.getConfig().optimization.textMultiplexing && a.add(this);
      }
      $_triggerParentUpdate() {
        this.parentNode && this.parentNode.$$trigger("$$childNodesUpdate");
      }
      get $$domInfo() {
        return {
          nodeId: this.$_nodeId,
          pageId: this.$_pageId,
          type: this.$_type,
          content: this.$_content,
        };
      }
      get nodeName() {
        return "#text";
      }
      get nodeType() {
        return r.TEXT_NODE;
      }
      get nodeValue() {
        return this.textContent;
      }
      set nodeValue(t) {
        this.textContent = t;
      }
      get textContent() {
        return this.$_content;
      }
      set textContent(t) {
        (t += ""), (this.$_content = t), this.$_triggerParentUpdate();
      }
      get data() {
        return this.textContent;
      }
      set data(t) {
        this.textContent = t;
      }
      cloneNode() {
        return this.ownerDocument.$$createTextNode({
          content: this.$_content,
          nodeId: "b-" + i.getId(),
        });
      }
    }
    t.exports = h;
  },
  function(t, e, s) {
    const r = s(6),
      i = s(1),
      n = s(2),
      o = s(0),
      a = new n();
    class h extends r {
      static $$create(t, e) {
        if (o.getConfig().optimization.commentMultiplexing) {
          const s = a.get();
          if (s) return s.$$init(t, e), s;
        }
        return new h(t, e);
      }
      $$init(t, e) {
        (t.type = "comment"), super.$$init(t, e);
      }
      $$recycle() {
        this.$$destroy();
        o.getConfig().optimization.commentMultiplexing && a.add(this);
      }
      get $$domInfo() {
        return {
          nodeId: this.$_nodeId,
          pageId: this.$_pageId,
          type: this.$_type,
        };
      }
      get nodeName() {
        return "#comment";
      }
      get nodeType() {
        return r.COMMENT_NODE;
      }
      cloneNode() {
        return this.ownerDocument.$$createComment({ nodeId: "b-" + i.getId() });
      }
    }
    t.exports = h;
  },
  function(t, e, s) {
    const r = s(1),
      i = s(0),
      n = s(16),
      o = s(8),
      a = s(4),
      h = s(5);
    t.exports = {
      createPage(t, e) {
        e && i.setConfig(e);
        const s = `p-${r.getId()}-/${t}`,
          a = new n(s),
          h = {},
          c = new o(s, h);
        return (
          i.init(s, { window: a, document: c, nodeIdMap: h }),
          { pageId: s, window: a, document: c }
        );
      },
      destroyPage(t) {
        i.destroy(t);
      },
      $$adapter: { cache: i, EventTarget: a, Event: h, tool: r },
    };
  },
  function(t, e, s) {
    const r = s(8),
      i = s(4),
      n = s(5),
      o = s(9),
      a = s(7),
      h = s(33),
      c = s(34),
      l = s(35),
      $ = s(36),
      { SessionStorage: u, LocalStorage: d } = s(37),
      p = s(38),
      g = s(39),
      _ = s(40),
      m = s(6),
      f = s(3),
      y = s(13),
      b = s(14),
      x = s(10),
      w = s(11),
      C = s(12),
      N = s(0),
      T = s(1);
    let E = 0;
    const v = {
        location: a.prototype,
        navigator: h.prototype,
        performance: g.prototype,
        screen: c.prototype,
        history: l.prototype,
        localStorage: d.prototype,
        sessionStorage: u.prototype,
        XMLHttpRequest: _.prototype,
        event: n.prototype,
      },
      I = {
        attribute: C.prototype,
        classList: x.prototype,
        style: w.prototype,
      },
      k = {},
      O = {};
    function S() {}
    class M extends i {
      constructor(t) {
        super();
        const e = N.getConfig(),
          s = +new Date();
        (this.$_pageId = t),
          (this.$_outerHeight = 0),
          (this.$_outerWidth = 0),
          (this.$_innerHeight = 0),
          (this.$_innerWidth = 0),
          (this.$_location = new a(t)),
          (this.$_navigator = new h()),
          (this.$_screen = new c()),
          (this.$_history = new l(this.$_location)),
          (this.$_miniprogram = new $(t)),
          (this.$_localStorage = new d(t)),
          (this.$_sessionStorage = new u(t)),
          (this.$_performance = new g(s)),
          (this.$_nowFetchingWebviewInfoPromise = null),
          this.$_fetchDeviceInfo(),
          this.$_initInnerEvent(),
          (this.onhashchange = null),
          (this.$_elementConstructor = function(...t) {
            return f.$$create(...t);
          }),
          (this.$_customEventConstructor = class extends o {
            constructor(t = "", e = {}) {
              (e.timeStamp = +new Date() - s), super(t, e);
            }
          }),
          (this.$_xmlHttpRequestConstructor = class extends _ {
            constructor() {
              super(t);
            }
          }),
          e.generate &&
            e.generate.worker &&
            ((this.$_workerConstructor = class extends p.Worker {
              constructor(e) {
                super(e, t);
              }
            }),
            (this.$_sharedWorkerConstructor = class extends p.SharedWorker {
              constructor(e) {
                super(e, t);
              }
            })),
          (this.HTMLIFrameElement = function() {});
      }
      $_initInnerEvent() {
        this.$_location.addEventListener(
          "hashchange",
          ({ oldURL: t, newURL: e }) => {
            this.$$trigger("hashchange", {
              event: new n({
                name: "hashchange",
                target: this,
                eventPhase: n.AT_TARGET,
                $$extra: { oldURL: t, newURL: e },
              }),
              currentTarget: this,
            });
          }
        ),
          this.$_history.addEventListener("popstate", ({ state: t }) => {
            this.$$trigger("popstate", {
              event: new n({
                name: "popstate",
                target: this,
                eventPhase: n.AT_TARGET,
                $$extra: { state: t },
              }),
              currentTarget: this,
            });
          }),
          this.addEventListener("scroll", () => {
            const t = this.document;
            t && (t.documentElement.$$scrollTimeStamp = +new Date());
          });
      }
      $_fetchDeviceInfo() {
        try {
          const t = wx.getSystemInfoSync();
          (this.$_outerHeight = t.screenHeight),
            (this.$_outerWidth = t.screenWidth),
            (this.$_innerHeight = t.windowHeight),
            (this.$_innerWidth = t.windowWidth),
            this.$_screen.$$reset(t),
            this.$_navigator.$$reset(t);
        } catch (t) {}
      }
      $_getAspectInfo(t) {
        if (!t || "string" != typeof t) return;
        const e = (t = t.split("."))[0],
          s = t[1];
        let i,
          n = t[1],
          o = t[2];
        return (
          "window" === e
            ? v[s]
              ? ((i = v[s]), (n = o), (o = t[3]))
              : (i = M.prototype)
            : "document" === e
            ? (i = r.prototype)
            : "element" === e
            ? I[s]
              ? ((i = I[s]), (n = o), (o = t[3]))
              : (i = f.prototype)
            : "textNode" === e
            ? (i = y.prototype)
            : "comment" === e && (i = b.prototype),
          { prototype: i, method: n, type: o }
        );
      }
      get $$miniprogram() {
        return this.$_miniprogram;
      }
      get $$global() {
        return O;
      }
      $$destroy() {
        super.$$destroy();
        const t = this.$_pageId;
        p.destroy(t),
          Object.keys(k).forEach((e) => {
            const s = k[e];
            s[t] && (s[t] = null);
          });
      }
      $$getComputedStyle(t, e = []) {
        return (
          T.flushThrottleCache(),
          new Promise((s, r) => {
            "BODY" === t.tagName
              ? this.$$createSelectorQuery()
                  .select(".miniprogram-root")
                  .fields({ computedStyle: e }, (t) => (t ? s(t) : r()))
                  .exec()
              : this.$$createSelectorQuery()
                  .select(".miniprogram-root >>> .node-" + t.$$nodeId)
                  .fields({ computedStyle: e }, (t) => (t ? s(t) : r()))
                  .exec();
          })
        );
      }
      $$forceRender() {
        T.flushThrottleCache();
      }
      $$trigger(t, e = {}) {
        if ("error" === t && "string" == typeof e.event) {
          const t = e.event,
            s = t.split("\n");
          let r = "";
          for (let t = 0, e = s.length; t < e; t++) {
            const e = s[t];
            if (0 === e.trim().indexOf("at")) break;
            r += e + "\n";
          }
          const i = new Error(r);
          if (
            ((i.stack = t),
            (e.event = new this.$_customEventConstructor("error", {
              target: this,
              $$extra: {
                message: r,
                filename: "",
                lineno: 0,
                colno: 0,
                error: i,
              },
            })),
            (e.args = [r, i]),
            "function" == typeof this.onerror && !this.onerror.$$isOfficial)
          ) {
            const t = this.onerror;
            (this.onerror = (e, s, r) => {
              t.call(this, s, "", 0, 0, r);
            }),
              (this.onerror.$$isOfficial = !0);
          }
        }
        super.$$trigger(t, e);
      }
      $$getPrototype(t) {
        if (!t || "string" != typeof t) return;
        const e = (t = t.split("."))[0],
          s = t[1];
        if ("window" === e) {
          if (v[s]) return v[s];
          if (!s) return M.prototype;
        } else if ("document" === e) {
          if (!s) return r.prototype;
        } else if ("element" === e) {
          if (I[s]) return I[s];
          if (!s) return f.prototype;
        } else if ("textNode" === e) {
          if (!s) return y.prototype;
        } else if ("comment" === e && !s) return b.prototype;
      }
      $$extend(t, e) {
        if (!t || !e || "string" != typeof t || "object" != typeof e) return;
        const s = this.$$getPrototype(t),
          r = Object.keys(e);
        s && r.forEach((t) => (s[t] = e[t]));
      }
      $$addAspect(t, e) {
        if (!t || !e || "string" != typeof t || "function" != typeof e) return;
        const { prototype: s, method: r, type: i } = this.$_getAspectInfo(t);
        if (s && r && i) {
          const t = s[r];
          if ("function" != typeof t) return;
          t.$$isHook ||
            ((s[r] = function(...e) {
              const i = s[r].$$before || [],
                n = s[r].$$after || [];
              if (i.length)
                for (const t of i) {
                  if (t.apply(this, e)) return;
                }
              const o = t.apply(this, e);
              if (n.length) for (const t of n) t.call(this, o);
              return o;
            }),
            (s[r].$$isHook = !0),
            (s[r].$$originalMethod = t)),
            "before" === i
              ? ((s[r].$$before = s[r].$$before || []), s[r].$$before.push(e))
              : "after" === i &&
                ((s[r].$$after = s[r].$$after || []), s[r].$$after.push(e));
        }
      }
      $$removeAspect(t, e) {
        if (!t || !e || "string" != typeof t || "function" != typeof e) return;
        const { prototype: s, method: r, type: i } = this.$_getAspectInfo(t);
        if (s && r && i) {
          const t = s[r];
          if ("function" != typeof t || !t.$$isHook) return;
          "before" === i && t.$$before
            ? t.$$before.splice(t.$$before.indexOf(e), 1)
            : "after" === i &&
              t.$$after &&
              t.$$after.splice(t.$$after.indexOf(e), 1),
            (t.$$before && t.$$before.length) ||
              (t.$$after && t.$$after.length) ||
              (s[r] = t.$$originalMethod);
        }
      }
      $$subscribe(t, e) {
        if ("string" != typeof t || "function" != typeof e) return;
        const s = this.$_pageId;
        (k[t] = k[t] || {}), (k[t][s] = k[t][s] || []), k[t][s].push(e);
      }
      $$unsubscribe(t, e) {
        const s = this.$_pageId;
        if ("string" != typeof t || !k[t] || !k[t][s]) return;
        const r = k[t][s];
        if (e) {
          if ("function" == typeof e) {
            const t = r.indexOf(e);
            -1 !== t && r.splice(t, 1);
          }
        } else r.length = 0;
      }
      $$publish(t, e) {
        "string" == typeof t &&
          k[t] &&
          Object.keys(k[t]).forEach((s) => {
            const r = k[t][s];
            r &&
              r.length &&
              r.forEach((t) => {
                if ("function" == typeof t)
                  try {
                    t.call(null, e);
                  } catch (t) {
                    console.error(t);
                  }
              });
          });
      }
      get document() {
        return N.getDocument(this.$_pageId) || null;
      }
      get location() {
        return this.$_location;
      }
      set location(t) {
        this.$_location.href = t;
      }
      get navigator() {
        return this.$_navigator;
      }
      get CustomEvent() {
        return this.$_customEventConstructor;
      }
      get Event() {
        return n;
      }
      get self() {
        return this;
      }
      get localStorage() {
        return this.$_localStorage;
      }
      get sessionStorage() {
        return this.$_sessionStorage;
      }
      get screen() {
        return this.$_screen;
      }
      get history() {
        return this.$_history;
      }
      get outerHeight() {
        return this.$_outerHeight;
      }
      get outerWidth() {
        return this.$_outerWidth;
      }
      get innerHeight() {
        return this.$_innerHeight;
      }
      get innerWidth() {
        return this.$_innerWidth;
      }
      get Image() {
        return this.document ? this.document.$$imageConstructor : S;
      }
      get setTimeout() {
        return setTimeout.bind(null);
      }
      get clearTimeout() {
        return clearTimeout.bind(null);
      }
      get setInterval() {
        return setInterval.bind(null);
      }
      get clearInterval() {
        return clearInterval.bind(null);
      }
      get HTMLElement() {
        return this.$_elementConstructor;
      }
      get Element() {
        return f;
      }
      get Node() {
        return m;
      }
      get RegExp() {
        return RegExp;
      }
      get Math() {
        return Math;
      }
      get Number() {
        return Number;
      }
      get Boolean() {
        return Boolean;
      }
      get String() {
        return String;
      }
      get Date() {
        return Date;
      }
      get Symbol() {
        return Symbol;
      }
      get parseInt() {
        return parseInt;
      }
      get parseFloat() {
        return parseFloat;
      }
      get console() {
        return console;
      }
      get performance() {
        return this.$_performance;
      }
      get SVGElement() {
        return (
          console.warn("window.SVGElement is not supported"), function() {}
        );
      }
      get XMLHttpRequest() {
        return this.$_xmlHttpRequestConstructor;
      }
      get Worker() {
        return this.$_workerConstructor;
      }
      get SharedWorker() {
        return this.$_sharedWorkerConstructor;
      }
      get devicePixelRatio() {
        return wx.getSystemInfoSync().pixelRatio;
      }
      open(t) {
        this.location.$$open(t);
      }
      close() {
        wx.navigateBack({ delta: 1 });
      }
      getComputedStyle() {
        return (
          console.warn(
            "window.getComputedStyle is not supported, please use window.$$getComputedStyle instead of it"
          ),
          {
            transitionDelay: "",
            transitionDuration: "",
            animationDelay: "",
            animationDuration: "",
          }
        );
      }
      requestAnimationFrame(t) {
        if ("function" != typeof t) return;
        const e = new Date(),
          s = Math.max(E + 16, e);
        return setTimeout(() => {
          t(s), (E = s);
        }, s - e);
      }
      cancelAnimationFrame(t) {
        return clearTimeout(t);
      }
      setImmediate(t, ...e) {
        if ("function" == typeof t) return setTimeout(t, 0, ...e);
      }
      clearImmediate(t) {
        return clearTimeout(t);
      }
    }
    t.exports = M;
  },
  function(t, e, s) {
    const r = s(18),
      i = s(1);
    function n(t, e) {
      const s = (e.tagMap = e.tagMap || {}),
        r = (e.classMap = e.classMap || {}),
        { tagName: i, classList: o } = t;
      (s[i] = s[i] || []), s[i].push(t);
      for (const e of o) (r[e] = r[e] || []), r[e].push(t);
      const a = t.children || [];
      for (const t of a) n(t, e);
    }
    t.exports = class {
      constructor(t, e, s, i) {
        (this.pageId = t),
          (this.root = i.$$createElement(e, this)),
          (this.nodeIdMap = s),
          (this.idMap = {}),
          (this.document = i),
          (this.querySelector = new r()),
          s && (s[e.nodeId] = this.root),
          this.walk(e, this.root);
      }
      walk(t, e) {
        const s = t.children,
          r = this.idMap,
          i = this.nodeIdMap,
          n = this.document;
        if (s && s.length)
          for (const t of s) {
            let s;
            "element" === t.type
              ? (s = n.$$createElement(t, this))
              : "text" === t.type && (s = n.$$createTextNode(t, this));
            const o = s.id;
            o && !r[o] && (r[o] = s),
              i && (i[t.nodeId] = s),
              e.appendChild(s),
              this.walk(t, s);
          }
      }
      updateIdMap(t, e) {
        this.idMap[t] = e;
      }
      getById(t) {
        return this.idMap[t];
      }
      getByTagName(t, e) {
        const s = {};
        return (
          n(e || this.root, s),
          i.checkIsWxComponent(t.toLowerCase(), !1)
            ? ((t = t.toLowerCase().slice(3)),
              (s.tagMap["WX-COMPONENT"] || []).filter((e) => e.behavior === t))
            : s.tagMap[t.toUpperCase()] || []
        );
      }
      getByClassName(t, e) {
        const s = {};
        return n(e || this.root, s), s.classMap[t] || [];
      }
      query(t, e) {
        const s = {};
        return (
          n(e || this.root, s),
          this.querySelector.exec(t, {
            idMap: this.idMap,
            tagMap: s.tagMap,
            classMap: s.classMap,
          })
        );
      }
    };
  },
  function(t, e, s) {
    const r = s(1),
      i = {
        checked: (t) => t.checked || t.selected,
        disabled: (t) => t.disabled,
        enabled: (t) => !t.disabled,
        "first-child": (t) => t.parentNode.children[0] === t,
        "last-child": (t) =>
          t.parentNode.children[t.parentNode.children.length - 1] === t,
        "nth-child": (t, e) => {
          const s = t.parentNode.children,
            { a: r, b: i } = e,
            n = s.indexOf(t) + 1;
          return r ? (n - i) % r == 0 : n === i;
        },
      },
      n = {
        "=": (t, e) => t === e,
        "~=": (t, e) => -1 !== t.split(/\s+/).indexOf(e),
        "|=": (t, e) => t === e || 0 === t.indexOf(e + "-"),
        "^=": (t, e) => 0 === t.indexOf(e),
        "$=": (t, e) => t.substr(t.length - e.length) === e,
        "*=": (t, e) => -1 !== t.indexOf(e),
      },
      o = {
        " ": (t, e) => {
          let s = t.parentNode;
          for (; s; ) {
            if (a(s, e)) return s;
            s = s.parentNode;
          }
          return null;
        },
        ">": (t, e) => {
          const s = t.parentNode;
          return a(s, e) ? s : null;
        },
        "+": (t, e) => {
          const s = t.parentNode;
          for (let r = 0, i = s.length; r < i; r++) {
            if (s[r] === t) {
              const t = s[r - 1];
              return a(t, e) ? t : null;
            }
          }
          return null;
        },
        "~": (t, e) => {
          const s = t.parentNode;
          let r = !1;
          for (let i = s.length - 1; i >= 0; i--) {
            const n = s[i];
            if (r && a(n, e)) return n;
            n === t && (r = !0);
          }
          return null;
        },
      };
    function a(t, e) {
      if (!t) return !1;
      const { id: s, class: o, tag: a, pseudo: h, attr: c } = e;
      if (s && t.id !== s) return !1;
      if (o && o.length)
        for (const e of o)
          if (!t.classList || !t.classList.contains(e)) return !1;
      if (a && "*" !== a)
        if (r.checkIsWxComponent(a.toLowerCase(), !1)) {
          if (
            "WX-COMPONENT" !== t.tagName ||
            t.behavior !== a.slice(3).toLowerCase()
          )
            return !1;
        } else if (t.tagName !== a.toUpperCase()) return !1;
      if (h)
        for (const { name: e, param: s } of h) {
          const r = i[e];
          if (!r || !r(t, s)) return !1;
        }
      if (c)
        for (const { name: e, opr: s, val: r } of c) {
          const i = t[e] || t.getAttribute(e);
          if (null == i) return !1;
          if (s) {
            const t = n[s];
            if (!t || !t(i, r)) return !1;
          }
        }
      return !0;
    }
    t.exports = class {
      constructor() {
        (this.parseCache = {}), (this.parseCacheKeys = []);
        this.regexp = new RegExp(
          "^(?:(#([\\\\\\w-]+))|(\\*|wx-component|[a-zA-Z-]+\\w*)|(\\.([\\\\\\w-]+))|(:([\\\\\\w-]+)(?:\\(([^\\(\\)]*|(?:\\([^\\)]+\\)|[^\\(\\)]*)+)\\))?)|(\\[\\s*([\\\\\\w-]+)(?:([*^$|~!]?=)['\"]?([^'\"\\[]+)['\"]?)?\\s*\\])|(\\s*([>\\s+~](?!=))\\s*))"
        );
      }
      setParseCache(t, e) {
        return (
          this.parseCacheKeys.length > 50 &&
            delete this.parseCache[this.parseCacheKeys.shift()],
          this.parseCacheKeys.push(t),
          (this.parseCache[t] = e),
          e
        );
      }
      getParseCache(t) {
        return this.parseCache[t];
      }
      parse(t) {
        const e = [{ tag: "*" }],
          s = this.regexp,
          r = (t, s, r, i, n, o, a, h, c, l, $, u, d, p, g) => {
            if (s) e[e.length - 1].id = r;
            else if (i) e[e.length - 1].tag = i.toLowerCase();
            else if (n) {
              const t = e[e.length - 1];
              (t.class = t.class || []), t.class.push(o);
            } else if (a) {
              const t = e[e.length - 1];
              t.pseudo = t.pseudo || [];
              const s = { name: (h = h.toLowerCase()) };
              if ((c && (c = c.trim()), "nth-child" === h))
                if ("even" === (c = c.replace(/\s+/g, ""))) c = { a: 2, b: 2 };
                else if ("odd" === c) c = { a: 2, b: 1 };
                else if (c) {
                  const t = c.match(/^(?:(\d+)|(\d*)?n([+-]\d+)?)$/);
                  c = t
                    ? t[1]
                      ? { a: 0, b: +t[1] }
                      : { a: t[2] ? +t[2] : 1, b: t[3] ? +t[3] : 0 }
                    : { a: 0, b: 1 };
                } else c = { a: 0, b: 1 };
              c && (s.param = c), t.pseudo.push(s);
            } else if (l) {
              const t = e[e.length - 1];
              (t.attr = t.attr || []), t.attr.push({ name: $, opr: u, val: d });
            } else p && ((e[e.length - 1].kinship = g), e.push({ tag: "*" }));
            return "";
          };
        let i;
        for (t = t.replace(s, r); i !== t; ) (i = t), (t = t.replace(s, r));
        return t ? "" : e;
      }
      exec(t, e) {
        t = t
          .trim()
          .replace(/\s+/g, " ")
          .replace(/\s*(,|[>\s+~](?!=)|[*^$|~!]?=)\s*/g, "$1");
        const { idMap: s, tagMap: i, classMap: n } = e;
        let h = this.getParseCache(t);
        if (!h) {
          if (((h = this.parse(t)), !h)) return [];
          this.setParseCache(t, h);
        }
        if (!h[0]) return [];
        const c = h[h.length - 1],
          { id: l, class: $, tag: u } = c;
        let d = [];
        if (l) {
          const t = s[l];
          d = t ? [t] : [];
        } else if ($ && $.length)
          for (const t of $) {
            const e = n[t];
            if (e) for (const t of e) -1 === d.indexOf(t) && d.push(t);
          }
        else if (u && "*" !== u) {
          const t = r.checkIsWxComponent(u.toLowerCase(), !1)
              ? "WX-COMPONENT"
              : u.toUpperCase(),
            e = i[t];
          e && (d = e);
        } else
          Object.keys(i).forEach((t) => {
            const e = i[t];
            if (e) for (const t of e) d.push(t);
          });
        if (d.length && h.length)
          for (let t = d.length - 1; t >= 0; t--) {
            let e = d[t],
              s = !1;
            for (let t = h.length - 1; t >= 0; t--) {
              const r = h[t - 1];
              if ((t === h.length - 1 && (s = a(e, c)), !s || !r)) break;
              {
                const t = r.kinship,
                  i = o[t];
                if ((i && (e = i(e, r)), !e)) {
                  s = !1;
                  break;
                }
              }
            }
            s || d.splice(t, 1);
          }
        var p;
        return (
          d.length &&
            ((d = (function(t) {
              for (let e = 0; e < t.length; e++) {
                const s = t[e];
                for (let r = e + 1; r < t.length; r++) {
                  s === t[r] && t.splice(r, 1);
                }
              }
              return t;
            })(d)),
            (p = d).sort((t, e) => {
              const s = [t],
                r = [e];
              let i = t.parentNode,
                n = e.parentNode;
              if (i === n) {
                const s = i.children;
                return s.indexOf(t) - s.indexOf(e);
              }
              for (; i; ) s.unshift(i), (i = i.parentNode);
              for (; n; ) r.unshift(n), (n = n.parentNode);
              let o = 0;
              for (; s[o] === r[o]; ) o++;
              const a = s[o - 1].children;
              return a.indexOf(s[o]) - a.indexOf(r[o]);
            }),
            (d = p)),
          d
        );
      }
    };
  },
  function(t, e) {
    t.exports = [
      "position",
      "top",
      "bottom",
      "right",
      "left",
      "float",
      "clear",
      "display",
      "width",
      "height",
      "maxHeight",
      "maxWidth",
      "minHeight",
      "minWidth",
      "flex",
      "flexBasis",
      "flexGrow",
      "flexShrink",
      "flexDirection",
      "flexWrap",
      "justifyContent",
      "alignItems",
      "order",
      "padding",
      "paddingBottom",
      "paddingLeft",
      "paddingRight",
      "paddingTop",
      "margin",
      "marginBottom",
      "marginLeft",
      "marginRight",
      "marginTop",
      "background",
      "backgroundClip",
      "backgroundColor",
      "backgroundImage",
      "backgroundOrigin",
      "backgroundPosition",
      "backgroundRepeat",
      "backgroundSize",
      "border",
      "borderRadius",
      "borderBottomColor",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
      "borderBottomStyle",
      "borderBottomWidth",
      "borderCollapse",
      "borderImageOutset",
      "borderImageRepeat",
      "borderImageSlice",
      "borderImageSource",
      "borderImageWidth",
      "borderLeftColor",
      "borderLeftStyle",
      "borderLeftWidth",
      "borderRightColor",
      "borderRightStyle",
      "borderRightWidth",
      "borderTopColor",
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderTopStyle",
      "borderTopWidth",
      "borderTop",
      "borderBottom",
      "borderRight",
      "borderLeft",
      "outline",
      "borderWidth",
      "borderStyle",
      "borderColor",
      "animation",
      "animationDelay",
      "animationDirection",
      "animationDuration",
      "animationFillMode",
      "animationIterationCount",
      "animationName",
      "animationPlayState",
      "animationTimingFunction",
      "transition",
      "transitionDelay",
      "transitionDuration",
      "transitionProperty",
      "transitionTimingFunction",
      "transform",
      "transformOrigin",
      "perspective",
      "perspectiveOrigin",
      "backfaceVisibility",
      "font",
      "fontFamily",
      "fontSize",
      "fontStyle",
      "fontWeight",
      "color",
      "textAlign",
      "textDecoration",
      "textIndent",
      "textRendering",
      "textShadow",
      "textOverflow",
      "textTransform",
      "wordBreak",
      "wordSpacing",
      "wordWrap",
      "lineHeight",
      "letterSpacing",
      "whiteSpace",
      "userSelect",
      "visibility",
      "opacity",
      "zIndex",
      "zoom",
      "overflow",
      "overflowX",
      "overflowY",
      "boxShadow",
      "boxSizing",
      "content",
      "cursor",
      "direction",
      "listStyle",
      "objectFit",
      "pointerEvents",
      "resize",
      "verticalAlign",
      "willChange",
      "clip",
      "clipPath",
      "fill",
      "touchAction",
      "WebkitAppearance",
    ];
  },
  function(t, e) {
    const s = /^<!\s*doctype((?:\s+[\w:]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/i,
      r = /^<([-A-Za-z0-9_]+)((?:\s+[-A-Za-z0-9_:@.]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/i,
      i = /^<\/([-A-Za-z0-9_]+)[^>]*>/i,
      n = /([-A-Za-z0-9_:@.]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
      o = {};
    [
      "area",
      "base",
      "br",
      "col",
      "embed",
      "hr",
      "img",
      "input",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr",
    ].forEach((t) => (o[t] = !0));
    const a = {};
    [
      "address",
      "article",
      "aside",
      "blockquote",
      "canvas",
      "dd",
      "div",
      "dl",
      "dt",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "li",
      "main",
      "nav",
      "noscript",
      "ol",
      "output",
      "p",
      "pre",
      "section",
      "table",
      "tfoot",
      "ul",
      "video",
    ].forEach((t) => (a[t] = !0));
    const h = {};
    [
      "a",
      "abbr",
      "acronym",
      "b",
      "bdo",
      "big",
      "br",
      "button",
      "cite",
      "code",
      "dfn",
      "em",
      "i",
      "img",
      "input",
      "kbd",
      "label",
      "map",
      "object",
      "q",
      "samp",
      "script",
      "select",
      "small",
      "span",
      "strong",
      "sub",
      "sup",
      "textarea",
      "time",
      "tt",
      "var",
    ].forEach((t) => (h[t] = !0));
    const c = {};
    ["script", "style"].forEach((t) => (c[t] = !0));
    const l = {};
    let $ = 0;
    function u(t, e) {
      const a = [];
      let h = t;
      for (
        a.last = function() {
          return this[this.length - 1];
        };
        t;

      ) {
        let n = !0;
        if (a.last() && c[a.last()]) {
          const s = new RegExp(`</${a.last()}[^>]*>`).exec(t);
          if (s) {
            const r = t.substring(0, s.index);
            (t = t.substring(s.index + s[0].length)),
              r.replace(/<!--(.*?)-->/g, ""),
              r && e.text && e.text(r);
          }
          d("", a.last());
        } else {
          if (0 === t.indexOf("\x3c!--")) {
            const s = t.indexOf("--\x3e");
            s >= 0 &&
              (e.comment && e.comment(t.substring(4, s)),
              (t = t.substring(s + 3)),
              (n = !1));
          } else if (0 === t.indexOf("</")) {
            const e = t.match(i);
            e && ((t = t.substring(e[0].length)), e[0].replace(i, d), (n = !1));
          } else if (0 === t.indexOf("<")) {
            let e = t.match(r);
            e
              ? ((t = t.substring(e[0].length)), e[0].replace(r, u), (n = !1))
              : ((e = t.match(s)),
                e && ((t = t.substring(e[0].length)), (n = !1)));
          }
          if (n) {
            const s = t.indexOf("<"),
              r = t.indexOf(">");
            let i = "";
            -1 === s ||
            (s >= 0 && -1 === r) ||
            s > r ||
            (r > s && !t.substring(s + 1, r).trim())
              ? ((i = t.replace(/>/g, "&gt;").replace(/</g, "&lt;")), (t = ""))
              : ((i = t.substring(0, s)), (t = t.substring(s))),
              e.text && i && e.text(i);
          }
        }
        if (t === h) throw new Error("parse error: " + t);
        h = t;
      }
      function u(t, s, r, i) {
        if (
          ((s = s.toLowerCase()),
          (i = !!i),
          (i = o[s] || !!i) || a.push(s),
          e.start)
        ) {
          const t = [];
          try {
            r.replace(n, (e, s, r, i, n) => {
              const o = r || i || n;
              t.push({ name: s, value: o });
            });
          } catch (e) {
            (r = r.replace(/url\([^)]+\)/gi, (t) => {
              const e = `url(:#|${++$}|#:)`;
              return (l[e] = t), e;
            })).replace(n, (e, s, r, i, n) => {
              const o = r || i || n;
              t.push({
                name: s,
                value: o.replace(
                  /url\(:#\|\d+\|#:\)/gi,
                  (t) => l[t] || "url()"
                ),
              });
            });
          }
          e.start(s, t, i);
        }
      }
      function d(t, s) {
        let r;
        if (s)
          for (
            s = s.toLowerCase(), r = a.length - 1;
            r >= 0 && a[r] !== s;
            r--
          );
        else r = 0;
        if (r >= 0) {
          for (let t = a.length - 1; t >= r; t--) e.end && e.end(a[t]);
          a.length = r;
        }
      }
      d();
    }
    t.exports = {
      tokenize: u,
      parse: function(t) {
        const e = { children: [] },
          s = [e];
        return (
          (s.last = function() {
            return this[this.length - 1];
          }),
          u(t, {
            start(t, e, r) {
              const i = {
                type: "element",
                tagName: t,
                attrs: e,
                unary: r,
                children: [],
              };
              s.last().children.push(i), r || s.push(i);
            },
            end(t) {
              const e = s.pop();
              if ("table" === e.tagName) {
                let t = !1;
                for (const s of e.children)
                  if ("tbody" === s.tagName) {
                    t = !0;
                    break;
                  }
                t ||
                  (e.children = [
                    {
                      type: "element",
                      tagName: "tbody",
                      attrs: [],
                      unary: !1,
                      children: e.children,
                    },
                  ]);
              }
            },
            text(t) {
              (t = t.trim()) &&
                s.last().children.push({ type: "text", content: t });
            },
            comment(t) {
              (t = t.trim()),
                s.last().children.push({ type: "comment", content: t });
            },
          }),
          e.children
        );
      },
      voidMap: o,
      blockMap: a,
      inlineMap: h,
      rawTextMap: c,
    };
  },
  function(t, e, s) {
    const r = s(3),
      i = s(7),
      n = s(0),
      o = s(2),
      a = s(1),
      h = new o();
    class c extends r {
      static $$create(t, e) {
        if (n.getConfig().optimization.elementMultiplexing) {
          const s = h.get();
          if (s) return s.$$init(t, e), s;
        }
        return new c(t, e);
      }
      $$init(t, e) {
        super.$$init(t, e),
          (this.$_protocol = "http:"),
          (this.$_hostname = ""),
          (this.$_port = ""),
          (this.$_pathname = "/"),
          (this.$_search = ""),
          (this.$_hash = "");
      }
      $$destroy() {
        super.$$destroy(),
          (this.$_protocol = null),
          (this.$_hostname = null),
          (this.$_port = null),
          (this.$_pathname = null),
          (this.$_search = null),
          (this.$_hash = null);
      }
      $$recycle() {
        this.$_children.forEach((t) => t.$$recycle()), this.$$destroy();
        n.getConfig().optimization.elementMultiplexing && h.add(this);
      }
      $$dealWithAttrsForGenerateHtml(t, e) {
        const s = e.href;
        s && (t += ` href="${a.escapeForHtmlGeneration(s)}"`);
        const r = e.target;
        return r && (t += ` target="${a.escapeForHtmlGeneration(r)}"`), t;
      }
      $$dealWithAttrsForOuterHTML(t) {
        (this.href = t.href || ""), (this.target = t.target || "");
      }
      $$dealWithAttrsForCloneNode() {
        return { href: this.href, target: this.target };
      }
      get href() {
        return this.$_attrs.get("href");
      }
      set href(t) {
        if (-1 === (t = "" + t).indexOf("//")) {
          const { origin: e } = n.getConfig();
          t = e + ("/" === t[0] ? t : "/" + t);
        }
        this.$_attrs.set("href", t);
        const {
          protocol: e,
          hostname: s,
          port: r,
          pathname: o,
          search: a,
          hash: h,
        } = i.$$parse(t);
        (this.$_protocol = e || this.$_protocol),
          (this.$_hostname = s || this.$_hostname),
          (this.$_port = r || ""),
          (this.$_pathname = o || "/"),
          (this.$_search = a || ""),
          (this.$_hash = h || "");
      }
      get protocol() {
        return this.$_protocol;
      }
      get hostname() {
        return this.$_hostname;
      }
      get port() {
        return this.$_port;
      }
      get pathname() {
        return this.$_pathname;
      }
      get search() {
        return this.$_search;
      }
      get hash() {
        return this.$_hash;
      }
      get target() {
        return this.$_attrs.get("target");
      }
      set target(t) {
        (t = "" + t), this.$_attrs.set("target", t);
      }
    }
    t.exports = c;
  },
  function(t, e, s) {
    const r = s(3),
      i = s(5),
      n = s(2),
      o = s(0),
      a = new n();
    class h extends r {
      static $$create(t, e) {
        if (o.getConfig().optimization.elementMultiplexing) {
          const s = a.get();
          if (s) return s.$$init(t, e), s;
        }
        return new h(t, e);
      }
      $$init(t, e) {
        const s = t.width,
          r = t.height;
        "number" == typeof s && s >= 0 && (t.attrs.width = s),
          "number" == typeof r && r >= 0 && (t.attrs.height = r),
          super.$$init(t, e),
          (this.$_naturalWidth = 0),
          (this.$_naturalHeight = 0),
          this.$_initRect();
      }
      $$destroy() {
        super.$$destroy(),
          (this.$_naturalWidth = null),
          (this.$_naturalHeight = null);
      }
      $$recycle() {
        this.$$destroy();
        o.getConfig().optimization.elementMultiplexing && a.add(this);
      }
      $_triggerParentUpdate() {
        this.$_initRect(), super.$_triggerParentUpdate();
      }
      $_initRect() {
        const t = this.$_attrs.get("width"),
          e = this.$_attrs.get("height"),
          s = +t;
        !isNaN(+s) && +s >= 0
          ? (this.$_style.width = t + "px")
          : t && "string" == typeof t && (this.$_style.width = t);
        const r = +e;
        !isNaN(+r) && +r >= 0
          ? (this.$_style.height = e + "px")
          : e && "string" == typeof e && (this.$_style.height = e);
      }
      $_resetRect(t = {}) {
        (this.$_naturalWidth = t.width || 0),
          (this.$_naturalHeight = t.height || 0),
          this.$_initRect();
      }
      get src() {
        return this.$_attrs.get("src") || "";
      }
      set src(t) {
        t &&
          "string" == typeof t &&
          (this.$_attrs.set("src", t),
          setTimeout(() => {
            wx.getImageInfo({
              src: this.src,
              success: (t) => {
                this.$_resetRect(t),
                  this.$$trigger("load", {
                    event: new i({
                      name: "load",
                      target: this,
                      eventPhase: i.AT_TARGET,
                    }),
                    currentTarget: this,
                  });
              },
              fail: () => {
                this.$_resetRect({ width: 0, height: 0 }),
                  this.$$trigger("error", {
                    event: new i({
                      name: "error",
                      target: this,
                      eventPhase: i.AT_TARGET,
                    }),
                    currentTarget: this,
                  });
              },
            });
          }, 0));
      }
      get width() {
        return parseFloat(this.$_attrs.get("width"), 10) || 0;
      }
      set width(t) {
        "number" != typeof t ||
          !isFinite(t) ||
          t < 0 ||
          (this.$_attrs.set("width", t), this.$_initRect());
      }
      get height() {
        return parseFloat(this.$_attrs.get("height"), 10) || 0;
      }
      set height(t) {
        "number" != typeof t ||
          !isFinite(t) ||
          t < 0 ||
          (this.$_attrs.set("height", t), this.$_initRect());
      }
      get naturalWidth() {
        return this.$_naturalWidth;
      }
      get naturalHeight() {
        return this.$_naturalHeight;
      }
    }
    t.exports = h;
  },
  function(t, e, s) {
    const r = s(3),
      i = s(2),
      n = s(0),
      o = s(1),
      a = new i();
    class h extends r {
      static $$create(t, e) {
        if (n.getConfig().optimization.elementMultiplexing) {
          const s = a.get();
          if (s) return s.$$init(t, e), s;
        }
        return new h(t, e);
      }
      $$recycle() {
        this.$$destroy();
        n.getConfig().optimization.elementMultiplexing && a.add(this);
      }
      $$dealWithAttrsForGenerateHtml(t, e) {
        const s = e.type;
        s && (t += ` type="${o.escapeForHtmlGeneration(s)}"`);
        const r = e.value;
        r && (t += ` value="${o.escapeForHtmlGeneration(r)}"`);
        e.disabled && (t += " disabled");
        const i = e.maxlength;
        i && (t += ` maxlength="${o.escapeForHtmlGeneration(i)}"`);
        const n = e.placeholder;
        return n && (t += ` placeholder="${o.escapeForHtmlGeneration(n)}"`), t;
      }
      $$dealWithAttrsForOuterHTML(t) {
        (this.name = t.name || ""),
          (this.type = t.type || ""),
          (this.value = t.value || ""),
          (this.disabled = !!t.disabled),
          (this.maxlength = t.maxlength),
          (this.placeholder = t.placeholder || ""),
          (this.mpplaceholderclass = t.mpplaceholderclass || "");
      }
      $$dealWithAttrsForCloneNode() {
        return {
          type: this.type,
          value: this.value,
          disabled: this.disabled,
          maxlength: this.maxlength,
          placeholder: this.placeholder,
          mpplaceholderclass: this.mpplaceholderclass,
        };
      }
      get name() {
        return this.$_attrs.get("name");
      }
      set name(t) {
        (t = "" + t), this.$_attrs.set("name", t);
      }
      get type() {
        return this.$_attrs.get("type") || "text";
      }
      set type(t) {
        (t = "" + t), this.$_attrs.set("type", t);
      }
      get value() {
        const t = this.$_attrs.get("type"),
          e = this.$_attrs.get("value");
        return ("radio" !== t && "checkbox" !== t) || void 0 !== e ? e : "on";
      }
      set value(t) {
        (t = "" + t), this.$_attrs.set("value", t);
      }
      get disabled() {
        return !!this.$_attrs.get("disabled");
      }
      set disabled(t) {
        (t = !!t), this.$_attrs.set("disabled", t);
      }
      get maxlength() {
        return this.$_attrs.get("maxlength");
      }
      set maxlength(t) {
        this.$_attrs.set("maxlength", t);
      }
      get placeholder() {
        return this.$_attrs.get("placeholder") || "";
      }
      set placeholder(t) {
        (t = "" + t), this.$_attrs.set("placeholder", t);
      }
      get autofocus() {
        return !!this.$_attrs.get("autofocus");
      }
      set autofocus(t) {
        (t = !!t), this.$_attrs.set("autofocus", t);
      }
      set checked(t) {
        this.$_attrs.set("checked", t);
      }
      get checked() {
        return this.$_attrs.get("checked") || "";
      }
      focus() {
        this.$_attrs.set("focus", !0);
      }
      blur() {
        this.$_attrs.set("focus", !1);
      }
    }
    t.exports = h;
  },
  function(t, e, s) {
    const r = s(3),
      i = s(2),
      n = s(0),
      o = s(1),
      a = new i();
    class h extends r {
      static $$create(t, e) {
        if (n.getConfig().optimization.elementMultiplexing) {
          const s = a.get();
          if (s) return s.$$init(t, e), s;
        }
        return new h(t, e);
      }
      $$recycle() {
        this.$$destroy();
        n.getConfig().optimization.elementMultiplexing && a.add(this);
      }
      $$dealWithAttrsForGenerateHtml(t, e) {
        const s = e.type;
        s && (t += ` type="${o.escapeForHtmlGeneration(s)}"`);
        const r = e.value;
        r && (t += ` value="${o.escapeForHtmlGeneration(r)}"`);
        e.disabled && (t += " disabled");
        const i = e.maxlength;
        i && (t += ` maxlength="${o.escapeForHtmlGeneration(i)}"`);
        const n = e.placeholder;
        return (
          n &&
            (t += ` placeholder="${o.escapeForHtmlGeneration(
              n.replace(/"/g, '\\"')
            )}"`),
          t
        );
      }
      $$dealWithAttrsForOuterHTML(t) {
        (this.name = t.name || ""),
          (this.type = t.type || ""),
          (this.value = t.value || ""),
          (this.disabled = !!t.disabled),
          (this.maxlength = t.maxlength),
          (this.placeholder = t.placeholder || ""),
          (this.mpplaceholderclass = t.mpplaceholderclass || "");
      }
      $$dealWithAttrsForCloneNode() {
        return {
          type: this.type,
          value: this.value,
          disabled: this.disabled,
          maxlength: this.maxlength,
          placeholder: this.placeholder,
          mpplaceholderclass: this.mpplaceholderclass,
        };
      }
      get type() {
        return this.$_attrs.get("type") || "textarea";
      }
      set type(t) {
        (t = "" + t), this.$_attrs.set("type", t);
      }
      get value() {
        return this.$_attrs.get("value");
      }
      set value(t) {
        (t = "" + t), this.$_attrs.set("value", t);
      }
      get disabled() {
        return !!this.$_attrs.get("disabled");
      }
      set disabled(t) {
        (t = !!t), this.$_attrs.set("disabled", t);
      }
      get maxlength() {
        return this.$_attrs.get("maxlength");
      }
      set maxlength(t) {
        this.$_attrs.set("maxlength", t);
      }
      get placeholder() {
        return this.$_attrs.get("placeholder") || "";
      }
      set placeholder(t) {
        (t = "" + t), this.$_attrs.set("placeholder", t);
      }
      get autofocus() {
        return !!this.$_attrs.get("autofocus");
      }
      set autofocus(t) {
        (t = !!t), this.$_attrs.set("autofocus", t);
      }
      get selectionStart() {
        const t = +this.$_attrs.get("selection-start");
        return void 0 !== t ? t : -1;
      }
      set selectionStart(t) {
        this.$_attrs.set("selection-start", t);
      }
      get selectionEnd() {
        const t = +this.$_attrs.get("selection-end");
        return void 0 !== t ? t : -1;
      }
      set selectionEnd(t) {
        this.$_attrs.set("selection-end", t);
      }
      focus() {
        this.$_attrs.set("focus", !0);
      }
      blur() {
        this.$_attrs.set("focus", !1);
      }
    }
    t.exports = h;
  },
  function(t, e, s) {
    const r = s(3),
      i = s(2),
      n = s(0),
      o = new i();
    class a extends r {
      static $$create(t, e) {
        if (n.getConfig().optimization.elementMultiplexing) {
          const s = o.get();
          if (s) return s.$$init(t, e), s;
        }
        return new a(t, e);
      }
      $$init(t, e) {
        const s = t.width,
          r = t.height;
        "number" == typeof s && s >= 0 && (t.attrs.width = s),
          "number" == typeof r && r >= 0 && (t.attrs.height = r),
          super.$$init(t, e),
          this.$_initRect();
      }
      $$recycle() {
        this.$$destroy();
        n.getConfig().optimization.elementMultiplexing && o.add(this);
      }
      $_triggerParentUpdate() {
        this.$_initRect(), super.$_triggerParentUpdate();
      }
      $_initRect() {
        const t = parseInt(this.$_attrs.get("width"), 10),
          e = parseInt(this.$_attrs.get("height"), 10);
        "number" == typeof t && t >= 0 && (this.$_style.width = t + "px"),
          "number" == typeof e && e >= 0 && (this.$_style.height = e + "px");
      }
      get src() {
        return this.$_attrs.get("src") || "";
      }
      set src(t) {
        t && "string" == typeof t && this.$_attrs.set("src", t);
      }
      get width() {
        return +this.$_attrs.get("width") || 0;
      }
      set width(t) {
        "number" != typeof t ||
          !isFinite(t) ||
          t < 0 ||
          (this.$_attrs.set("width", t), this.$_initRect());
      }
      get height() {
        return +this.$_attrs.get("height") || 0;
      }
      set height(t) {
        "number" != typeof t ||
          !isFinite(t) ||
          t < 0 ||
          (this.$_attrs.set("height", t), this.$_initRect());
      }
      get autoplay() {
        return !!this.$_attrs.get("autoplay");
      }
      set autoplay(t) {
        (t = !!t), this.$_attrs.set("autoplay", t);
      }
      get loop() {
        return !!this.$_attrs.get("loop");
      }
      set loop(t) {
        (t = !!t), this.$_attrs.set("loop", t);
      }
      get muted() {
        return !!this.$_attrs.get("muted");
      }
      set muted(t) {
        (t = !!t), this.$_attrs.set("muted", t);
      }
      get controls() {
        const t = this.$_attrs.get("controls");
        return void 0 === t || !!t;
      }
      set controls(t) {
        this.$_attrs.set("controls", t);
      }
      get poster() {
        return this.$_attrs.get("poster");
      }
      set poster(t) {
        t && "string" == typeof t && this.$_attrs.set("poster", t);
      }
      get currentTime() {
        return +this.$_attrs.get("currentTime") || 0;
      }
      get buffered() {
        return this.$_attrs.get("buffered");
      }
    }
    t.exports = a;
  },
  function(t, e, s) {
    const r = s(3),
      i = s(2),
      n = s(0),
      o = new i();
    class a extends r {
      static $$create(t, e) {
        if (n.getConfig().optimization.elementMultiplexing) {
          const s = o.get();
          if (s) return s.$$init(t, e), s;
        }
        return new a(t, e);
      }
      $$init(t, e) {
        const s = t.width,
          r = t.height;
        "number" == typeof s && s >= 0 && (t.attrs.width = s),
          "number" == typeof r && r >= 0 && (t.attrs.height = r),
          super.$$init(t, e),
          (this.$_node = null),
          this.$_initRect();
      }
      $$recycle() {
        this.$$destroy();
        n.getConfig().optimization.elementMultiplexing && o.add(this);
      }
      $$prepare() {
        return new Promise((t, e) => {
          this.$$getNodesRef()
            .then((e) =>
              e
                .node((e) => {
                  const { width: s, height: r } = this;
                  (this.$_node = e.node),
                    (this.$_node.width = s),
                    (this.$_node.height = r),
                    t(this);
                })
                .exec()
            )
            .catch(e);
        });
      }
      get $$node() {
        return this.$_node;
      }
      $_triggerParentUpdate() {
        this.$_initRect(), super.$_triggerParentUpdate();
      }
      $_initRect() {
        const t = parseInt(this.$_attrs.get("width"), 10),
          e = parseInt(this.$_attrs.get("height"), 10);
        "number" == typeof t && t >= 0 && (this.$_style.width = t + "px"),
          "number" == typeof e && e >= 0 && (this.$_style.height = e + "px");
      }
      get width() {
        return this.$_node
          ? this.$_node.width
          : +this.$_attrs.get("width") || 0;
      }
      set width(t) {
        "number" != typeof (t = parseFloat(t)) ||
          !isFinite(t) ||
          t < 0 ||
          (this.$_node
            ? (this.$_node.width = t)
            : this.$_attrs.set("width", t));
      }
      get height() {
        return this.$_node
          ? this.$_node.height
          : +this.$_attrs.get("height") || 0;
      }
      set height(t) {
        "number" != typeof (t = parseFloat(t)) ||
          !isFinite(t) ||
          t < 0 ||
          (this.$_node
            ? (this.$_node.height = t)
            : this.$_attrs.set("height", t));
      }
      getContext(t) {
        if (this.$_node) return this.$_node.getContext(t);
        console.warn(
          "canvas is not prepared, please call $$prepare method first"
        );
      }
      createPath2D(...t) {
        return this.$_node.createPath2D(...t);
      }
      createImage(...t) {
        return this.$_node.createImage(...t);
      }
      createImageData(...t) {
        return this.$_node.createImageData(...t);
      }
      requestAnimationFrame(...t) {
        return this.$_node.requestAnimationFrame(...t);
      }
      cancelAnimationFrame(...t) {
        return this.$_node.cancelAnimationFrame(...t);
      }
      toDataURL(...t) {
        return this.$_node.toDataURL(...t);
      }
    }
    t.exports = a;
  },
  function(t, e, s) {
    const r = s(3),
      i = s(2),
      n = s(0),
      o = s(1),
      a = new i();
    class h extends r {
      static $$create(t, e) {
        if (n.getConfig().optimization.elementMultiplexing) {
          const s = a.get();
          if (s) return s.$$init(t, e), s;
        }
        return new h(t, e);
      }
      $$init(t, e) {
        super.$$init(t, e), this.$$resetOptions();
      }
      $$resetOptions() {
        const t = this.value;
        void 0 !== t
          ? this.options.forEach((e) => e.$$updateSelected(e.value === t))
          : this.options.forEach((t, e) => t.$$updateSelected(0 === e));
      }
      $$recycle() {
        this.$$destroy();
        n.getConfig().optimization.elementMultiplexing && a.add(this);
      }
      $$dealWithAttrsForGenerateHtml(t, e) {
        const s = e.value;
        s && (t += ` value="${o.escapeForHtmlGeneration(s)}"`);
        return e.disabled && (t += " disabled"), t;
      }
      $$dealWithAttrsForOuterHTML(t) {
        (this.name = t.name || ""),
          (this.value = t.value || ""),
          (this.disabled = !!t.disabled),
          (this.selectedIndex = t.selectedIndex || 0);
      }
      $$dealWithAttrsForCloneNode() {
        return { value: this.value, disabled: this.disabled };
      }
      get name() {
        return this.$_attrs.get("name");
      }
      set name(t) {
        return (t = "" + t), this.$_attrs.set("name", t);
      }
      get value() {
        let t = this.$_attrs.get("value");
        if (void 0 === t) {
          const e = this.options.find((t) => !!t.selected);
          e && ((t = e.value), this.$$setAttributeWithoutUpdate("value", t));
        }
        return t;
      }
      set value(t) {
        (t = "" + t),
          this.$_attrs.set("value", t),
          this.$_attrs.set(
            "selectedIndex",
            this.options.findIndex((e) => e.value === t)
          ),
          this.$$resetOptions();
      }
      get disabled() {
        return !!this.$_attrs.get("disabled");
      }
      set disabled(t) {
        (t = !!t), this.$_attrs.set("disabled", t);
      }
      get selectedIndex() {
        return +this.$_attrs.get("selectedIndex");
      }
      set selectedIndex(t) {
        (t = +t),
          this.$_attrs.set("selectedIndex", t),
          this.$_attrs.set(
            "value",
            (this.options[t] && this.options[t].value) || ""
          ),
          this.$$resetOptions();
      }
      get options() {
        return this.$_children.filter(
          (t) => "OPTION" === t.tagName && !t.disabled
        );
      }
    }
    t.exports = h;
  },
  function(t, e, s) {
    const r = s(3),
      i = s(2),
      n = s(0),
      o = s(1),
      a = new i();
    class h extends r {
      static $$create(t, e) {
        if (n.getConfig().optimization.elementMultiplexing) {
          const s = a.get();
          if (s) return s.$$init(t, e), s;
        }
        return new h(t, e);
      }
      $$recycle() {
        this.$$destroy();
        n.getConfig().optimization.elementMultiplexing && a.add(this);
      }
      $$dealWithAttrsForGenerateHtml(t, e) {
        const s = e.value;
        s && (t += ` value="${o.tool.escapeForHtmlGeneration(s)}"`);
        const r = e.label;
        r && (t += ` label="${o.tool.escapeForHtmlGeneration(r)}"`);
        return e.selected && (t += " selected"), t;
      }
      $$dealWithAttrsForOuterHTML(t) {
        (this.label = t.label || ""),
          (this.value = t.value || ""),
          (this.disabled = !!t.disabled),
          (this.selected = !!t.selected);
      }
      $$updateSelected(t) {
        (t = !!t), this.$_attrs.set("selected", t);
      }
      get label() {
        return this.$_attrs.get("label") || this.textContent;
      }
      set label(t) {
        (t = "" + t), this.$_attrs.set("label", t);
      }
      get value() {
        const t = this.$_attrs.get("value");
        return void 0 !== t ? t : this.label;
      }
      set value(t) {
        (t = "" + t), this.$_attrs.set("value", t);
      }
      get disabled() {
        return !!this.$_attrs.get("disabled");
      }
      set disabled(t) {
        (t = !!t), this.$_attrs.set("disabled", t);
      }
      set selected(t) {
        this.$$updateSelected(t);
        const e = this.parentNode;
        e && "SELECT" === e.tagName && (e.value = this.value);
      }
      get selected() {
        return !!this.$_attrs.get("selected");
      }
    }
    t.exports = h;
  },
  function(t, e, s) {
    const r = s(3),
      i = s(2),
      n = s(0),
      o = new i();
    class a extends r {
      static $$create(t, e) {
        if (n.getConfig().optimization.elementMultiplexing) {
          const s = o.get();
          if (s) return s.$$init(t, e), s;
        }
        return new a(t, e);
      }
      $$init(t, e) {
        super.$$init(t, e);
        const s = n.getWindow(this.$_pageId);
        s.onDealWithNotSupportDom && s.onDealWithNotSupportDom(this);
      }
      $$recycle() {
        this.$$destroy();
        n.getConfig().optimization.elementMultiplexing && o.add(this);
      }
      get behavior() {
        return "not-support";
      }
    }
    t.exports = a;
  },
  function(t, e, s) {
    const r = s(3),
      i = s(2),
      n = s(0),
      o = s(1),
      a = new i();
    class h extends r {
      static $$create(t, e) {
        if (n.getConfig().optimization.elementMultiplexing) {
          const s = a.get();
          if (s) return s.$$init(t, e), s;
        }
        return new h(t, e);
      }
      $$recycle() {
        this.$$destroy();
        n.getConfig().optimization.elementMultiplexing && a.add(this);
      }
      get behavior() {
        return this.$_attrs.get("behavior") || "";
      }
      set behavior(t) {
        t && "string" == typeof t && this.$_attrs.set("behavior", t);
      }
      get value() {
        return this.$_attrs.get("value");
      }
      set value(t) {
        this.$_attrs.set("value", t);
      }
      get scrollTop() {
        return this.$_attrs.get("scroll-top") || 0;
      }
      set scrollTop(t) {
        (t = parseInt(t, 10)), isNaN(t) || this.$_attrs.set("scroll-top", t);
      }
      get scrollLeft() {
        return this.$_attrs.get("scroll-left") || 0;
      }
      set scrollLeft(t) {
        (t = parseInt(t, 10)), isNaN(t) || this.$_attrs.set("scroll-left", t);
      }
      setAttribute(t, e) {
        super.setAttribute(t, e),
          "scroll-into-view" === t &&
            (o.flushThrottleCache(),
            Promise.resolve()
              .then(() => {
                const t = this.ownerDocument.getElementById(e);
                if (!t) return;
                const s = this.getAttribute("scroll-x")
                  ? "scroll-left"
                  : this.getAttribute("scroll-y")
                  ? "scroll-top"
                  : "";
                if (!s) return;
                const r = n.getWindow(this.$_pageId);
                Promise.all([
                  new Promise((t) =>
                    r
                      .$$createSelectorQuery()
                      .select(".miniprogram-root >>> .node-" + this.$_nodeId)
                      .fields({ rect: !0, scrollOffset: !0 })
                      .exec(t)
                  ),
                  t.$$getBoundingClientRect(),
                ])
                  .then((t) => {
                    const e = "scroll-left" === s ? "left" : "top",
                      r = t[0][0],
                      i = t[1];
                    super.setAttribute(s, i[e] - r[e] + r[o.toCamel(s)]);
                  })
                  .catch(console.error);
              })
              .catch(console.error));
      }
    }
    t.exports = h;
  },
  function(t, e, s) {
    const r = s(3),
      i = s(2),
      n = s(0),
      o = new i();
    class a extends r {
      static $$create(t, e) {
        if (n.getConfig().optimization.elementMultiplexing) {
          const s = o.get();
          if (s) return s.$$init(t, e), s;
        }
        return new a(t, e);
      }
      $$init(t, e) {
        (this.$_behavior = t.componentName), super.$$init(t, e);
      }
      $$destroy() {
        super.$$destroy(), (this.$_behavior = null);
      }
      $$recycle() {
        this.$$destroy();
        n.getConfig().optimization.elementMultiplexing && o.add(this);
      }
      get behavior() {
        return this.$_behavior;
      }
      setAttribute(t, e) {
        if (0 === t.indexOf("kbone-func-")) {
          const s = t.slice("kbone-func-".length);
          if ("function" == typeof e) super.setAttribute(s, e);
          else {
            const t = n.getWindow(this.$_pageId);
            super.setAttribute(s, t[e]);
          }
        } else super.setAttribute(t, e);
      }
    }
    t.exports = a;
  },
  function(t, e, s) {
    const r = s(7),
      i = s(0);
    class n {
      constructor(t) {
        const e = i.getConfig().runtime || {};
        (this.cookieStore = e.cookieStore),
          (this.$_pageName = t),
          "storage" !== this.cookieStore && "memory" !== this.cookieStore
            ? (this.$_map = i.getCookie())
            : (this.$_map = {});
      }
      static parse(t) {
        if (!t && "string" != typeof t) return null;
        t = t.trim().split(";");
        const e = /^([^=;\x00-\x1F]+)=([^;\n\r\0\x00-\x1F]*).*/.exec(t.shift());
        if (!e) return null;
        const s = (e[1] || "").trim(),
          r = (e[2] || "").trim();
        let i = null,
          n = null,
          o = null,
          a = null,
          h = !1,
          c = !1;
        for (let e of t) {
          if (((e = e.trim()), !e)) continue;
          let [t, s] = e.split("=");
          if (((t = (t || "").trim().toLowerCase()), (s = (s || "").trim()), t))
            switch (t) {
              case "path":
                "/" === s[0] && (i = s);
                break;
              case "domain":
                (s = s.replace(/^\./, "").toLowerCase()), s && (n = s);
                break;
              case "expires":
                if (s) {
                  const t = Date.parse(s);
                  t && (o = t);
                }
                break;
              case "max-age":
                /^-?[0-9]+$/.test(s) && (a = 1e3 * +s);
                break;
              case "secure":
                h = !0;
                break;
              case "httponly":
                c = !0;
            }
        }
        return {
          key: s,
          value: r,
          path: i,
          domain: n,
          expires: o,
          maxAge: a,
          secure: h,
          httpOnly: c,
        };
      }
      $_checkDomain(t, e) {
        if (t === e) return !0;
        const s = t.indexOf("." + e);
        return s > 0 && e.length + s + 1 === t.length;
      }
      $_checkPath(t, e) {
        return t === e || ((e = "/" === e ? "" : e), 0 === t.indexOf(e + "/"));
      }
      $_checkExpires(t) {
        const e = Date.now();
        return null !== t.maxAge
          ? t.createTime + t.maxAge > e
          : null === t.expires || t.expires > e;
      }
      setCookie(t, e) {
        if (!(t = n.parse(t))) return;
        const { hostname: s, port: i, pathname: o } = r.$$parse(e),
          a = (s || "") + (i ? ":" + i : "") || "",
          h = "/" === (o || "")[0] ? o : "/";
        if (t.domain) {
          if (!this.$_checkDomain(a, t.domain)) return;
        } else t.domain = a;
        if (!t.path || "/" !== t.path[0]) {
          const e = h.lastIndexOf("/");
          t.path = 0 === e ? h : h.substr(0, e);
        }
        const c = this.$_map,
          l = t.domain,
          $ = t.path,
          u = t.key;
        c[l] || (c[l] = {}), c[l][$] || (c[l][$] = {});
        const d = c[l][$][u];
        if (
          ((t.createTime = (d && d.createTime) || Date.now()),
          this.$_checkExpires(t) ? (c[l][$][u] = t) : d && delete c[l][$][u],
          "memory" !== this.cookieStore && "globalmemory" !== this.cookieStore)
        ) {
          const t =
            "storage" === this.cookieStore
              ? "PAGE_COOKIE_" + this.$_pageName
              : "PAGE_COOKIE";
          wx.setStorage({ key: t, data: this.serialize() });
        }
      }
      getCookie(t, e) {
        const { protocol: s, hostname: i, port: n, pathname: o } = r.$$parse(t),
          a = (i || "") + (n ? ":" + n : "") || "",
          h = "/" === (o || "")[0] ? o : "/",
          c = [],
          l = this.$_map,
          $ = Object.keys(l);
        for (const t of $)
          if (this.$_checkDomain(a, t)) {
            const r = l[t] || {},
              i = Object.keys(r);
            for (const r of i)
              if (this.$_checkPath(h, r)) {
                const i = l[t][r] || {};
                Object.keys(i).forEach((n) => {
                  const o = i[n];
                  o &&
                    ((o.secure && "https:" !== s && "wss:" !== s) ||
                      (!e && o.httpOnly && s && "http:" !== s) ||
                      (this.$_checkExpires(o) ? c.push(o) : delete l[t][r][n]));
                });
              }
          }
        return c
          .sort((t, e) => {
            const s = t.createTime - e.createTime;
            return s || (t.key < e.key ? -1 : 1);
          })
          .map((t) => `${t.key}=${t.value}`)
          .join("; ");
      }
      serialize() {
        try {
          return JSON.stringify(this.$_map);
        } catch (t) {
          return console.log("cannot serialize the cookie"), "";
        }
      }
      deserialize(t) {
        let e = {};
        try {
          e = JSON.parse(t);
        } catch (t) {
          console.log("cannot deserialize the cookie"), (e = {});
        }
        const s = Object.keys(e);
        for (const t of s) {
          const s = e[t] || {},
            r = Object.keys(s);
          for (const s of r) {
            const r = e[t][s] || {};
            Object.keys(r).forEach((e) => {
              const i = r[e];
              i &&
                (this.$_map[t] || (this.$_map[t] = {}),
                this.$_map[t][s] || (this.$_map[t][s] = {}),
                this.$_map[t][s][e] || (this.$_map[t][s][e] = i));
            });
          }
        }
      }
    }
    t.exports = n;
  },
  function(t, e) {
    t.exports = class {
      constructor() {
        (this.$_language = ""),
          (this.$_wxVersion = ""),
          (this.$_brand = ""),
          (this.$_model = ""),
          (this.$_platform = ""),
          (this.$_system = ""),
          (this.$_userAgent = "");
      }
      $$reset(t) {
        (this.$_language = t.language),
          (this.$_wxVersion = t.version),
          (this.$_brand = t.brand),
          (this.$_model = t.model),
          (this.$_platform = t.platform),
          (this.$_system = t.system);
        let e;
        if ("ios" === this.$_platform) {
          let t = this.$_system.split(" ");
          (t = t.length >= 2 ? t[1].split(".").join("_") : ""),
            (e = `${this.$_brand}; CPU ${this.$_brand} OS ${t} like Mac OS X`);
        } else
          e =
            "android" === this.$_platform
              ? `Linux; ${this.$_system}; ${this.$_model}`
              : "Windows NT 6.1; win64; x64";
        this.$_userAgent = `${this.appCodeName}/5.0 (${e}) AppleWebKit/602.3.12 (KHTML, like Gecko) Mobile MicroMessenger/${this.$_wxVersion} Language/${this.language}`;
      }
      get userAgent() {
        return this.$_userAgent;
      }
      get appCodeName() {
        return "Mozilla";
      }
      get appName() {
        return "Netscape";
      }
      get language() {
        return this.$_language;
      }
      get languages() {
        return [this.$_language];
      }
      get platform() {
        return this.$_platform;
      }
      get product() {
        return "Gecko";
      }
    };
  },
  function(t, e, s) {
    const r = s(4);
    t.exports = class extends r {
      constructor() {
        super(), (this.$_width = 0), (this.$_height = 0);
      }
      $$reset(t) {
        (this.$_width = t.screenWidth), (this.$_height = t.screenHeight);
      }
      get width() {
        return this.$_width;
      }
      get height() {
        return this.$_height;
      }
    };
  },
  function(t, e, s) {
    const r = s(7),
      i = s(4);
    t.exports = class extends i {
      constructor(t) {
        super(),
          (this.$_location = t),
          (this.$_stack = [{ state: null, title: "", url: t.href }]),
          (this.$_currentIndex = 0),
          this.$_location.addEventListener("$_addToHistory", (t) => {
            this.$_currentIndex++,
              (this.$_stack = this.$_stack.slice(0, this.$_currentIndex)),
              this.$_stack.push({ state: null, title: "", url: t.href });
          });
      }
      $_checkOrigin(t) {
        const { protocol: e, hostname: s, port: i } = r.$$parse(t);
        return !(
          (e && this.$_location.protocol !== e) ||
          (s && this.$_location.hostname !== s) ||
          ((s || i) && this.$_location.port !== i)
        );
      }
      $$reset() {
        (this.$_stack = [
          { state: null, title: "", url: this.$_location.href },
        ]),
          (this.$_currentIndex = 0);
      }
      get state() {
        const t = this.$_stack[this.$_currentIndex];
        return (t && t.state) || null;
      }
      get length() {
        return this.$_stack.length;
      }
      back() {
        this.go(-1);
      }
      forward() {
        this.go(1);
      }
      go(t) {
        if ("number" == typeof t) {
          const e = this.$_currentIndex + t;
          e >= 0 &&
            e < this.$_stack.length &&
            this.$_currentIndex !== e &&
            ((this.$_currentIndex = e),
            this.$_location.$$startCheckHash(),
            this.$_location.$$setHrefWithoutCheck(
              this.$_stack[this.$_currentIndex].url
            ),
            this.$_location.$$endCheckHash(!0),
            this.$$trigger("popstate", { event: { state: this.state } }));
        } else this.$_location.reload();
      }
      pushState(t = null, e, s) {
        s &&
          "string" == typeof s &&
          this.$_checkOrigin(s) &&
          (e && "string" == typeof e && wx.setNavigationBarTitle({ title: e }),
          this.$_currentIndex++,
          (this.$_stack = this.$_stack.slice(0, this.$_currentIndex)),
          this.$_location.$$setHrefWithoutCheck(s),
          this.$_stack.push({ state: t, title: e, url: this.$_location.href }));
      }
      replaceState(t = null, e, s) {
        s &&
          "string" == typeof s &&
          this.$_checkOrigin(s) &&
          (e && "string" == typeof e && wx.setNavigationBarTitle({ title: e }),
          this.$_location.$$setHrefWithoutCheck(s),
          this.$_stack.splice(this.$_currentIndex, 1, {
            state: t,
            title: e,
            url: this.$_location.href,
          }));
      }
    };
  },
  function(t, e, s) {
    const r = s(0);
    let i = null;
    t.exports = class {
      constructor(t) {
        (this.$_pageId = t),
          (this.$_pageUrl = ""),
          (this.$_subpackagesMap = {});
      }
      get window() {
        return r.getWindow(this.$_pageId) || null;
      }
      get document() {
        return r.getDocument(this.$_pageId) || null;
      }
      get config() {
        return r.getConfig();
      }
      get subpackagesMap() {
        return this.$_subpackagesMap;
      }
      init(t) {
        "string" == typeof t && (this.$_pageUrl = t);
        const {
            origin: e,
            entry: s,
            router: n,
            runtime: o = {},
          } = r.getConfig(),
          a = o.subpackagesMap || {};
        (this.$_pageUrl = this.$_pageUrl || e + s),
          (this.$_subpackagesMap = a),
          this.window.location.$$reset(this.$_pageUrl),
          this.window.history.$$reset(),
          i ||
            ((i = {}),
            Object.keys(n).forEach((t) => {
              const e = [];
              n[t].forEach((t) => {
                const s = new RegExp(t.regexp, t.options);
                e.push(s);
              }),
                (i[t] = (s) => {
                  for (const r of e) {
                    const e = r.exec(s);
                    if (((r.lastIndex = 0), e)) {
                      const e = a[t];
                      return `/${e ? e + "/" : ""}pages/${t}/index`;
                    }
                  }
                  return null;
                });
            }));
      }
      getMatchRoute(t) {
        const e = Object.keys(i);
        for (const s of e) {
          const e = i[s](t);
          if (e) return e;
        }
        return null;
      }
      isTabBarPage(t) {
        const { runtime: e = {} } = r.getConfig();
        return !!(e.tabBarMap || {})[t];
      }
    };
  },
  function(t, e, s) {
    const r = s(5),
      i = s(0);
    class n {
      constructor(t) {
        (this.$_pageId = t), (this.$_keys = []);
      }
      $_triggerStorage(t, e, s, n) {
        if (!n && e === s) return;
        const o = i.getWindow(this.$_pageId);
        (i.getWindowList() || []).forEach((i) => {
          i &&
            i !== o &&
            i.$$trigger("storage", {
              event: new r({
                name: "storage",
                target: i,
                $$extra: {
                  key: t,
                  newValue: e,
                  oldValue: s,
                  storageArea: this,
                  url: o.location.href,
                },
              }),
            });
        });
      }
      get length() {
        return (this.$_keys && this.$_keys.length) || 0;
      }
      key(t) {
        return "number" != typeof t || !isFinite(t) || t < 0
          ? null
          : this.$_keys[t] || null;
      }
    }
    t.exports = {
      SessionStorage: class extends n {
        constructor(t) {
          super(t), (this.$_map = {});
        }
        getItem(t) {
          return (t && "string" == typeof t && this.$_map[t]) || null;
        }
        setItem(t, e) {
          if (!t || "string" != typeof t) return;
          e = "" + e;
          const s = this.$_map[t] || null;
          this.$_map[t] = e;
          const r = this.$_keys.indexOf(t);
          r >= 0 && this.$_keys.splice(r, 1),
            this.$_keys.push(t),
            this.$_triggerStorage(t, e, s);
        }
        removeItem(t) {
          if (!t || "string" != typeof t) return;
          const e = this.$_map[t] || null;
          delete this.$_map[t];
          const s = this.$_keys.indexOf(t);
          s >= 0 && this.$_keys.splice(s, 1), this.$_triggerStorage(t, null, e);
        }
        clear() {
          (this.$_map = {}),
            (this.$_keys.length = 0),
            this.$_triggerStorage(null, null, null, !0);
        }
      },
      LocalStorage: class extends n {
        $_updateInfo() {
          try {
            const t = wx.getStorageInfoSync();
            (i.getWindowList() || []).forEach((e) => {
              e && (e.localStorage.$$keys = t.keys);
            });
          } catch (t) {
            console.warn("getStorageInfoSync fail");
          }
        }
        set $$keys(t) {
          this.$_keys = t;
        }
        getItem(t) {
          return (t && "string" == typeof t && wx.getStorageSync(t)) || null;
        }
        setItem(t, e) {
          if (!t || "string" != typeof t) return;
          e = "" + e;
          const s = wx.getStorageSync(t) || null;
          wx.setStorageSync(t, e),
            this.$_updateInfo(),
            this.$_triggerStorage(t, e, s);
        }
        removeItem(t) {
          if (!t || "string" != typeof t) return;
          const e = wx.getStorageSync(t) || null;
          wx.removeStorageSync(t),
            this.$_updateInfo(),
            this.$_triggerStorage(t, null, e);
        }
        clear() {
          wx.clearStorageSync(),
            this.$_updateInfo(),
            this.$_triggerStorage(null, null, null, !0);
        }
      },
    };
  },
  function(t, e, s) {
    const r = s(5),
      i = s(4),
      n = s(0);
    let o = null,
      a = null,
      h = [],
      c = 0;
    const l = {},
      $ = {};
    function u(t) {
      const e = t.split("/").pop();
      return (
        (function() {
          const t = n.getConfig().generate;
          return t && t.worker;
        })() +
        "/" +
        e
      );
    }
    class d extends i {
      constructor(t, e, s) {
        super();
        const i = u(t);
        if (o && (!s || i !== a))
          throw new Error("exceed max concurrent workers limit");
        if (
          ((this.$_pageId = e),
          (this.isSharedWorker = s),
          (a = i),
          (o = o || this.$_tryCatch(() => wx.createWorker(a))),
          o)
        ) {
          (this.$_onMessage = (t) => {
            "message" === t.type &&
              t.pageId === this.$_pageId &&
              this.$$trigger("message", {
                event: new r({
                  name: "message",
                  target: this,
                  $$extra: { data: t.data },
                }),
              });
          }),
            (c = o),
            ($ = this.$_onMessage),
            h.push($),
            c._hasRegisterCb ||
              (c.onMessage((t) => {
                h.forEach((e) => e(t));
              }),
              (c._hasRegisterCb = !0));
          const t = {},
            e = {},
            i = n.getWindow(this.$_pageId);
          i &&
            !s &&
            ([
              "userAgent",
              "appCodeName",
              "appName",
              "language",
              "languages",
              "platform",
              "product",
            ].forEach((e) => (t[e] = i.navigator[e])),
            [
              "protocol",
              "host",
              "hostname",
              "port",
              "origin",
              "pathname",
              "search",
              "hash",
              "href",
            ].forEach((t) => (e[t] = i.location[t]))),
            this.$_tryCatch(() =>
              o.postMessage({
                type: "connect",
                pageId: this.$_pageId,
                navigator: t,
                location: e,
              })
            );
        }
        var c, $;
        this.isSharedWorker || (l[this.$_pageId] = this);
      }
      $_tryCatch(t) {
        try {
          return t.call(this);
        } catch (t) {
          console.error(t),
            this.$$trigger("error", {
              event: new r({
                name: "error",
                target: this,
                $$extra: { error: t, message: t.message || "", filename: a },
              }),
            });
        }
      }
      postMessage(t) {
        this.$_pageId &&
          o &&
          this.$_tryCatch(() =>
            o.postMessage({ type: "message", pageId: this.$_pageId, data: t })
          );
      }
      terminate() {
        this.$_pageId &&
          o &&
          ((this.$_pageId = null),
          this.isSharedWorker || delete l[this.$_pageId],
          this.$_tryCatch(() => o.terminate()),
          (o = null),
          (a = null),
          (h = []));
      }
    }
    t.exports = {
      Worker: d,
      SharedWorker: class extends i {
        constructor(t, e) {
          super(),
            (this.$_worker = new d(t, e, !0)),
            (this.$_worker.close = () => {
              c--,
                h.splice(h.indexOf(this.$_worker.$_onMessage), 1),
                c || this.$_worker.terminate(),
                $[e] && $[e].splice($[e].indexOf(this), 1);
            }),
            (this.$_worker.start = () => {}),
            c++,
            ($[e] = $[e] || []),
            $[e].push(this);
        }
        get port() {
          return this.$_worker;
        }
      },
      destroy: function(t) {
        $[t] && $[t].forEach((t) => t.port.close()),
          ($[t] = null),
          l[t] && l[t].terminate(),
          (l[t] = null);
      },
    };
  },
  function(t, e) {
    t.exports = class {
      constructor(t) {
        this.$_timeOrigin = t;
      }
      get navigation() {
        return console.warn("performance.navigation is not supported"), null;
      }
      get timing() {
        return console.warn("performance.timing is not supported"), null;
      }
      get timeOrigin() {
        return this.$_timeOrigin;
      }
      now() {
        return +new Date() - this.$_timeOrigin;
      }
    };
  },
  function(t, e, s) {
    const r = s(7),
      i = s(4),
      n = s(0),
      o = [
        "OPTIONS",
        "GET",
        "HEAD",
        "POST",
        "PUT",
        "DELETE",
        "TRACE",
        "CONNECT",
      ],
      a = {
        100: "Continue",
        101: "Switching protocols",
        200: "OK",
        201: "Created",
        202: "Accepted",
        203: "Non-Authoritative Information",
        204: "No Content",
        205: "Reset Content",
        206: "Partial Content",
        300: "Multiple Choices",
        301: "Moved Permanently",
        302: "Found",
        303: "See Other",
        304: "Not Modified",
        305: "Use Proxy",
        307: "Temporary Redirect",
        400: "Bad Request",
        401: "Unauthorized",
        402: "Payment Required",
        403: "Forbidden",
        404: "Not Found",
        405: "Method Not Allowed",
        406: "Not Acceptable",
        407: "Proxy Authentication Required",
        408: "Request Timeout",
        409: "Conflict",
        410: "Gone",
        411: "Length Required",
        412: "Precondition Failed",
        413: "Request Entity Too Large",
        414: "Request-URI Too Long",
        415: "Unsupported Media Type",
        416: "Requested Range Not Suitable",
        417: "Expectation Failed",
        500: "Internal Server Error",
        501: "Not Implemented",
        502: "Bad Gateway",
        503: "Service Unavailable",
        504: "Gateway Timeout",
        505: "HTTP Version Not Supported",
      };
    class h extends i {
      constructor(t) {
        super(),
          (this.$_pageId = t),
          (this.$_method = ""),
          (this.$_url = ""),
          (this.$_data = null),
          (this.$_status = 0),
          (this.$_statusText = ""),
          (this.$_readyState = h.UNSENT),
          (this.$_header = { Accept: "*/*" }),
          (this.$_responseType = ""),
          (this.$_resHeader = null),
          (this.$_response = null),
          (this.$_timeout = 0),
          (this.$_startTime = null),
          (this.$_withCredentials = !0),
          (this.$_requestTask = null),
          (this.$_requestSuccess = this.$_requestSuccess.bind(this)),
          (this.$_requestFail = this.$_requestFail.bind(this)),
          (this.$_requestComplete = this.$_requestComplete.bind(this));
      }
      $_callReadyStateChange(t) {
        const e = t !== this.$_readyState;
        (this.$_readyState = t), e && this.$$trigger("readystatechange");
      }
      $_callRequest() {
        const t = n.getWindow(this.$_pageId);
        if (!t || !t.document)
          return void console.warn(
            "this page has been unloaded, so this request will be canceled."
          );
        this.$_timeout &&
          ((this.$_startTime = +new Date()),
          setTimeout(() => {
            this.$_status ||
              this.$_readyState === h.DONE ||
              (this.$_requestTask && this.$_requestTask.abort(),
              this.$_callReadyStateChange(h.DONE),
              this.$$trigger("timeout"));
          }, this.$_timeout)),
          (this.$_status = 0),
          (this.$_statusText = ""),
          (this.$_readyState = h.OPENED),
          (this.$_resHeader = null),
          (this.$_response = null);
        let e = this.$_url;
        e = -1 === e.indexOf("//") ? t.location.origin + e : e;
        const s = Object.assign({}, this.$_header);
        if (((s.cookie = t.document.$$cookie), !this.withCredentials)) {
          const { origin: i } = r.$$parse(e);
          i !== t.location.origin && delete s.cookie;
        }
        this.$_requestTask = wx.request({
          url: e,
          data: this.$_data || {},
          header: s,
          method: this.$_method,
          dataType: "json" === this.$_responseType ? "json" : "text",
          responseType:
            "arraybuffer" === this.$_responseType ? "arraybuffer" : "text",
          success: this.$_requestSuccess,
          fail: this.$_requestFail,
          complete: this.$_requestComplete,
        });
      }
      $_requestSuccess({ data: t, statusCode: e, header: s }) {
        const r = n.getWindow(this.$_pageId);
        if (r && r.document) {
          if (
            ((this.$_status = e),
            (this.$_resHeader = s),
            this.$_callReadyStateChange(h.HEADERS_RECEIVED),
            r)
          ) {
            const t = s["Set-Cookie"];
            t && "string" == typeof t && r.document.$$setCookie(t);
          }
          t &&
            (this.$_callReadyStateChange(h.LOADING),
            this.$$trigger("loadstart"),
            (this.$_response = t),
            this.$$trigger("loadend"));
        } else
          console.warn(
            "this page has been unloaded, so this request will be canceled."
          );
      }
      $_requestFail({ errMsg: t }) {
        (this.$_status = 0), (this.$_statusText = t), this.$$trigger("error");
      }
      $_requestComplete() {
        (this.$_startTime = null),
          (this.$_requestTask = null),
          this.$_callReadyStateChange(h.DONE),
          this.$_status && this.$$trigger("load");
      }
      get timeout() {
        return this.$_timeout;
      }
      set timeout(t) {
        "number" != typeof t || !isFinite(t) || t <= 0 || (this.$_timeout = t);
      }
      get status() {
        return this.$_status;
      }
      get statusText() {
        return this.$_readyState === h.UNSENT || this.$_readyState === h.OPENED
          ? ""
          : a[this.$_status + ""] || this.$_statusText || "";
      }
      get readyState() {
        return this.$_readyState;
      }
      get responseType() {
        return this.$_responseType;
      }
      set responseType(t) {
        "string" == typeof t && (this.$_responseType = t);
      }
      get responseText() {
        return this.$_responseType && "text" !== this.$_responseType
          ? null
          : this.$_response;
      }
      get response() {
        return this.$_response;
      }
      get withCredentials() {
        return this.$_withCredentials;
      }
      set withCredentials(t) {
        this.$_withCredentials = !!t;
      }
      abort() {
        this.$_requestTask &&
          (this.$_requestTask.abort(), this.$$trigger("abort"));
      }
      getAllResponseHeaders() {
        return this.$_readyState !== h.UNSENT &&
          this.$_readyState !== h.OPENED &&
          this.$_resHeader
          ? Object.keys(this.$_resHeader)
              .map((t) => `${t}: ${this.$_resHeader[t]}`)
              .join("\r\n")
          : "";
      }
      getResponseHeader(t) {
        if (
          this.$_readyState === h.UNSENT ||
          this.$_readyState === h.OPENED ||
          !this.$_resHeader
        )
          return null;
        const e = Object.keys(this.$_resHeader).find(
            (e) => e.toLowerCase() === t.toLowerCase()
          ),
          s = e ? this.$_resHeader[e] : null;
        return "string" == typeof s ? s : null;
      }
      open(t, e) {
        "string" == typeof t && (t = t.toUpperCase()),
          o.indexOf(t) < 0 ||
            (e &&
              "string" == typeof e &&
              ((this.$_method = t),
              (this.$_url = e),
              this.$_callReadyStateChange(h.OPENED)));
      }
      setRequestHeader(t, e) {
        "string" == typeof t && "string" == typeof e && (this.$_header[t] = e);
      }
      send(t) {
        this.$_readyState === h.OPENED &&
          ((this.$_data = t), this.$_callRequest());
      }
    }
    (h.UNSENT = 0),
      (h.OPENED = 1),
      (h.HEADERS_RECEIVED = 2),
      (h.LOADING = 3),
      (h.DONE = 4),
      (t.exports = h);
  },
]);
//# sourceMappingURL=index.js.map