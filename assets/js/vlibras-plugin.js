window.VLibras = (function (t) {
  function e(e) {
    for (var n, o, r = e[0], a = e[1], s = 0, c = []; s < r.length; s++)
      (o = r[s]),
        Object.prototype.hasOwnProperty.call(i, o) && i[o] && c.push(i[o][0]),
        (i[o] = 0);
    for (n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
    for (l && l(e); c.length; ) c.shift()();
  }
  var n = {},
    i = { 1: 0 };
  function o(e) {
    if (n[e]) return n[e].exports;
    var i = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(i.exports, i, i.exports, o), (i.l = !0), i.exports;
  }
  (o.e = function (t) {
    var e = [],
      n = i[t];
    if (0 !== n)
      if (n) e.push(n[2]);
      else {
        var r = new Promise(function (e, o) {
          n = i[t] = [e, o];
        });
        e.push((n[2] = r));
        var a,
          s = document.createElement("script");
        (s.charset = "utf-8"),
          (s.timeout = 120),
          o.nc && s.setAttribute("nonce", o.nc),
          (s.src = (function (t) {
            return o.p + "" + t + ".vlibras-plugin.js";
          })(t));
        var l = new Error();
        a = function (e) {
          (s.onerror = s.onload = null), clearTimeout(c);
          var n = i[t];
          if (0 !== n) {
            if (n) {
              var o = e && ("load" === e.type ? "missing" : e.type),
                r = e && e.target && e.target.src;
              (l.message =
                "Loading chunk " + t + " failed.\n(" + o + ": " + r + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = o),
                (l.request = r),
                n[1](l);
            }
            i[t] = void 0;
          }
        };
        var c = setTimeout(function () {
          a({ type: "timeout", target: s });
        }, 12e4);
        (s.onerror = s.onload = a), document.head.appendChild(s);
      }
    return Promise.all(e);
  }),
    (o.m = t),
    (o.c = n),
    (o.d = function (t, e, n) {
      o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (o.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.t = function (t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var i in t)
          o.d(
            n,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return n;
    }),
    (o.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "https://www.vlibras.gov.br/app/"),
    (o.oe = function (t) {
      throw t;
    });
  var r = (window.webpackJsonpVLibras = window.webpackJsonpVLibras || []),
    a = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var s = 0; s < r.length; s++) e(r[s]);
  var l = a;
  return o((o.s = 4));
})([
  function (t, e, n) {
    "use strict";
    var i,
      o = function () {
        return (
          void 0 === i &&
            (i = Boolean(window && document && document.all && !window.atob)),
          i
        );
      },
      r = (function () {
        var t = {};
        return function (e) {
          if (void 0 === t[e]) {
            var n = document.querySelector(e);
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head;
              } catch (t) {
                n = null;
              }
            t[e] = n;
          }
          return t[e];
        };
      })(),
      a = [];
    function s(t) {
      for (var e = -1, n = 0; n < a.length; n++)
        if (a[n].identifier === t) {
          e = n;
          break;
        }
      return e;
    }
    function l(t, e) {
      for (var n = {}, i = [], o = 0; o < t.length; o++) {
        var r = t[o],
          l = e.base ? r[0] + e.base : r[0],
          c = n[l] || 0,
          d = "".concat(l, " ").concat(c);
        n[l] = c + 1;
        var u = s(d),
          v = { css: r[1], media: r[2], sourceMap: r[3] };
        -1 !== u
          ? (a[u].references++, a[u].updater(v))
          : a.push({ identifier: d, updater: h(v, e), references: 1 }),
          i.push(d);
      }
      return i;
    }
    function c(t) {
      var e = document.createElement("style"),
        i = t.attributes || {};
      if (void 0 === i.nonce) {
        var o = n.nc;
        o && (i.nonce = o);
      }
      if (
        (Object.keys(i).forEach(function (t) {
          e.setAttribute(t, i[t]);
        }),
        "function" == typeof t.insert)
      )
        t.insert(e);
      else {
        var a = r(t.insert || "head");
        if (!a)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          );
        a.appendChild(e);
      }
      return e;
    }
    var d,
      u =
        ((d = []),
        function (t, e) {
          return (d[t] = e), d.filter(Boolean).join("\n");
        });
    function v(t, e, n, i) {
      var o = n
        ? ""
        : i.media
        ? "@media ".concat(i.media, " {").concat(i.css, "}")
        : i.css;
      if (t.styleSheet) t.styleSheet.cssText = u(e, o);
      else {
        var r = document.createTextNode(o),
          a = t.childNodes;
        a[e] && t.removeChild(a[e]),
          a.length ? t.insertBefore(r, a[e]) : t.appendChild(r);
      }
    }
    function p(t, e, n) {
      var i = n.css,
        o = n.media,
        r = n.sourceMap;
      if (
        (o ? t.setAttribute("media", o) : t.removeAttribute("media"),
        r &&
          "undefined" != typeof btoa &&
          (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
            " */"
          )),
        t.styleSheet)
      )
        t.styleSheet.cssText = i;
      else {
        for (; t.firstChild; ) t.removeChild(t.firstChild);
        t.appendChild(document.createTextNode(i));
      }
    }
    var w = null,
      f = 0;
    function h(t, e) {
      var n, i, o;
      if (e.singleton) {
        var r = f++;
        (n = w || (w = c(e))),
          (i = v.bind(null, n, r, !1)),
          (o = v.bind(null, n, r, !0));
      } else
        (n = c(e)),
          (i = p.bind(null, n, e)),
          (o = function () {
            !(function (t) {
              if (null === t.parentNode) return !1;
              t.parentNode.removeChild(t);
            })(n);
          });
      return (
        i(t),
        function (e) {
          if (e) {
            if (
              e.css === t.css &&
              e.media === t.media &&
              e.sourceMap === t.sourceMap
            )
              return;
            i((t = e));
          } else o();
        }
      );
    }
    t.exports = function (t, e) {
      (e = e || {}).singleton ||
        "boolean" == typeof e.singleton ||
        (e.singleton = o());
      var n = l((t = t || []), e);
      return function (t) {
        if (
          ((t = t || []),
          "[object Array]" === Object.prototype.toString.call(t))
        ) {
          for (var i = 0; i < n.length; i++) {
            var o = s(n[i]);
            a[o].references--;
          }
          for (var r = l(t, e), c = 0; c < n.length; c++) {
            var d = s(n[c]);
            0 === a[d].references && (a[d].updater(), a.splice(d, 1));
          }
          n = r;
        }
      };
    };
  },
  function (t, e, n) {
    "use strict";
    t.exports = function (t) {
      var e = [];
      return (
        (e.toString = function () {
          return this.map(function (e) {
            var n = (function (t, e) {
              var n = t[1] || "",
                i = t[3];
              if (!i) return n;
              if (e && "function" == typeof btoa) {
                var o =
                    ((a = i),
                    (s = btoa(unescape(encodeURIComponent(JSON.stringify(a))))),
                    (l =
                      "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                        s
                      )),
                    "/*# ".concat(l, " */")),
                  r = i.sources.map(function (t) {
                    return "/*# sourceURL="
                      .concat(i.sourceRoot || "")
                      .concat(t, " */");
                  });
                return [n].concat(r).concat([o]).join("\n");
              }
              var a, s, l;
              return [n].join("\n");
            })(e, t);
            return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
          }).join("");
        }),
        (e.i = function (t, n, i) {
          "string" == typeof t && (t = [[null, t, ""]]);
          var o = {};
          if (i)
            for (var r = 0; r < this.length; r++) {
              var a = this[r][0];
              null != a && (o[a] = !0);
            }
          for (var s = 0; s < t.length; s++) {
            var l = [].concat(t[s]);
            (i && o[l[0]]) ||
              (n &&
                (l[2]
                  ? (l[2] = "".concat(n, " and ").concat(l[2]))
                  : (l[2] = n)),
              e.push(l));
          }
        }),
        e
      );
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "isFullscreen", function () {
        return i;
      }),
      n.d(e, "isPlaying", function () {
        return o;
      }),
      n.d(e, "getAvatar", function () {
        return r;
      }),
      n.d(e, "getWidgetPosition", function () {
        return a;
      }),
      n.d(e, "formatGloss", function () {
        return s;
      }),
      n.d(e, "getWidget", function () {
        return l;
      }),
      n.d(e, "setWidgetPosition", function () {
        return c;
      }),
      n.d(e, "$", function () {
        return d;
      }),
      n.d(e, "$$", function () {
        return u;
      }),
      n.d(e, "$0", function () {
        return v;
      }),
      n.d(e, "hasClass", function () {
        return p;
      }),
      n.d(e, "addClass", function () {
        return w;
      }),
      n.d(e, "getDocumentDim", function () {
        return f;
      }),
      n.d(e, "removeClass", function () {
        return h;
      }),
      n.d(e, "toggleClass", function () {
        return g;
      }),
      n.d(e, "getRect", function () {
        return m;
      }),
      n.d(e, "addClickBlocker", function () {
        return b;
      }),
      n.d(e, "canTranslate", function () {
        return x;
      }),
      n.d(e, "toggleUnityMainLoop", function () {
        return y;
      }),
      n.d(e, "disableControlsButton", function () {
        return L;
      }),
      n.d(e, "_on", function () {
        return k;
      }),
      n.d(e, "_off", function () {
        return T;
      }),
      n.d(e, "_vwOn", function () {
        return C;
      }),
      n.d(e, "_vwOff", function () {
        return M;
      });
    const i = () => p(document.body, "vpw-fullscreen"),
      o = () => p(d("div[vp-controls]"), "vpw-playing"),
      r = () => window.plugin.player.avatar,
      a = () => (window.plugin ? window.plugin.position : void 0),
      s = (t) => (-1 != t.indexOf("&") ? t.replace("&", "(") + ")" : t),
      l = () => d("[vp]").closest("[vw]"),
      c = (t) => {
        window.dispatchEvent(
          new CustomEvent("vp-widget-wrapper-set-side", { detail: t })
        );
      },
      d = (t, e = null) => (e ? e.querySelector(t) : d(t, document)),
      u = (t, e = null) => (e ? e.querySelectorAll(t) : u(t, document)),
      v = document.body,
      p = (t, e) => (t ? t.classList.contains(e) : void 0),
      w = (t, e) => {
        t.classList.add(e);
      },
      f = () => {
        const { clientWidth: t, clientHeight: e } = document.documentElement;
        return { w: t, h: e };
      },
      h = (t, e) => {
        t.classList.remove(e);
      },
      g = (t, e, n) => {
        t.classList.toggle(e, n);
      },
      m = (t) => t.getBoundingClientRect(),
      b = (t) => {
        g(d(".vpw-skip-welcome-message"), "vp-disabled", t),
          g(d("[vp-click-blocker]"), "vp-enabled", t);
      },
      x = () =>
        p(d("[vp-controls]"), "vpw-controls") &&
        !p(d(".vp-guide-container"), "vp-enabled") &&
        p(d("[vw-plugin-wrapper]"), "active"),
      y = (t) => {
        t
          ? window.plugin.player.player.Module.resumeMainLoop()
          : window.plugin.player.player.Module.pauseMainLoop();
      },
      L = (t = !0) => {
        t
          ? d("[vp-controls] .vpw-controls-button").setAttribute("disabled", !0)
          : d("[vp-controls] .vpw-controls-button").removeAttribute("disabled");
      },
      k = (t, e, n) => {
        t.addEventListener(e, n);
      },
      T = (t, e, n) => {
        t.removeEventListener(e, n);
      },
      C = (t, e, n) => {
        t.addListener(e, n);
      },
      M = (t, e, n) => {
        t.removeListener(e, n);
      };
  },
  function (t, e) {
    t.exports = {
      ROOT_PATH: "https://www.vlibras.gov.br/app/",
      DICTIONARY_URL:
        "https://dicionario2.vlibras.gov.br/signs?version=2018.3.1",
      REVIEW_URL: "https://traducao2.vlibras.gov.br/review",
      SIGNS_URL: "https://dicionario2.vlibras.gov.br/bundles",
    };
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      n.d(e, "Widget", function () {
        return i;
      });
    const i = n(5);
  },
  function (t, e, n) {
    const i = n(6),
      o = n(10);
    n(14), n(16);
    const {
        addClass: r,
        $: a,
        $$: s,
        removeClass: l,
        getWidget: c,
        toggleUnityMainLoop: d,
      } = n(2),
      { ROOT_PATH: u } = n(3),
      v = ["TL", "T", "TR", "L", "R", "BL", "B", "BR"],
      p = ["icaro", "hosana", "guga", "random"];
    t.exports = function (...t) {
      const e = "object" == typeof t[0] && t[0],
        n = e ? e.personalization : t[1];
      let w = e ? e.rootPath : t[0],
        f = e ? e.position : t[3],
        h = e ? e.opacity : t[2],
        g = e.avatar;
      void 0 === w ? (w = u) : w && !w.endsWith("/") && (w += "/"),
        (isNaN(h) || h < 0 || h > 1) && (h = 1),
        v.includes(f) || (f = "R"),
        p.includes(g) || (g = "icaro");
      const m = new o(),
        b = new i({
          rootPath: w,
          pluginWrapper: m,
          personalization: n,
          opacity: h,
          position: f,
          avatar: g,
        });
      let x;
      window.onload && (x = window.onload),
        (window.onload = () => {
          s("[vw]").forEach((t) => {
            a("[vp]"), t || t.removeAttribute("vw");
          }),
            x && x(),
            (this.element = document
              .querySelector("[vw-plugin-wrapper]")
              .closest("[vw]"));
          const t = document.querySelector("[vw-plugin-wrapper]"),
            e = document.querySelector("[vw-access-button]");
          b.load(document.querySelector("[vw-access-button]"), this.element),
            m.load(document.querySelector("[vw-plugin-wrapper]")),
            window.addEventListener("vp-widget-wrapper-set-side", (t) => {
              const n = t.detail;
              n &&
                v.includes(n) &&
                ((this.element = c()),
                (this.element.style.left = n.includes("L")
                  ? "0"
                  : ["T", "B"].includes(n)
                  ? "50%"
                  : "initial"),
                (this.element.style.right = n.includes("R") ? "0" : "initial"),
                (this.element.style.top = n.includes("T")
                  ? "0"
                  : ["L", "R"].includes(n)
                  ? "50%"
                  : "initial"),
                (this.element.style.bottom = n.includes("B") ? "0" : "initial"),
                (this.element.style.transform = ["L", "R"].includes(n)
                  ? "translateY(calc(-50% - 10px))"
                  : ["T", "B"].includes(n)
                  ? "translateX(calc(-50% - 10px))"
                  : "initial"),
                e.classList.toggle("isLeft", n.includes("L")),
                e.classList.toggle("isTopOrBottom", "TB".includes(n)),
                window.plugin && (window.plugin.position = n));
            }),
            window.addEventListener("vp-widget-close", (n) => {
              e.classList.toggle("active"),
                t.classList.toggle("active"),
                r(a("div[vp-change-avatar]"), "active"),
                r(a("div[vp-additional-options]"), "vp-enabled"),
                l(a("div[vp-controls]"), "vpw-selectText"),
                d(!1);
            }),
            window.addEventListener("vw-change-opacity", (e) => {
              t.style.background = `rgba(235,235,235, ${e.detail})`;
            }),
            this.element.querySelectorAll("img[data-src]").forEach((t) => {
              const e = t.attributes["data-src"].value;
              t.src = w ? w + "/" + e : e;
            }),
            v.includes(f) &&
              window.dispatchEvent(
                new CustomEvent("vp-widget-wrapper-set-side", { detail: f })
              );
        });
    };
  },
  function (t, e, n) {
    const i = n(7).default;
    n(8);
    const { canTranslate: o, toggleUnityMainLoop: r } = n(2);
    function a(t) {
      (this.personalization = t.personalization),
        (this.rootPath = t.rootPath),
        (this.enableWelcome = t.enableWelcome),
        (this.pluginWrapper = t.pluginWrapper),
        (this.opacity = t.opacity),
        (this.position = t.position),
        (this.avatar = t.avatar),
        (this.vw_links = null),
        (this.currentElement = null),
        (this.currentSpanElement = null),
        (this.ready = !1);
    }
    (a.prototype.load = function (t, e) {
      (this.element = t),
        (this.element.innerHTML = i),
        this.element.addEventListener("click", async () => {
          this.element.classList.toggle("active"),
            this.pluginWrapper.element.classList.toggle("active"),
            this.ready && r(!0);
          const { Plugin: t } = await n.e(0).then(n.bind(null, 19)),
            { loadTextCaptureScript: e } = await n.e(0).then(n.bind(null, 20));
          window.VLibras.Plugin = t;
          const i = {
            enableMoveWindow: !0,
            enableWelcome: !0,
            personalization: this.personalization,
            wrapper: this.pluginWrapper.element,
            position: this.position,
            rootPath: this.rootPath,
            opacity: this.opacity,
            avatar: this.avatar,
          };
          if (
            (window.plugin || (window.plugin = new window.VLibras.Plugin(i)),
            this.ready)
          )
            e();
          else {
            const t = setInterval(() => {
              o() && (e(), (this.ready = !0), clearInterval(t));
            }, 1e3);
          }
        });
    }),
      (t.exports = a);
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      (e.default =
        '<img class="access-button" data-src="assets/access_icon.svg"\r\n    alt="Conteúdo acessível em Libras usando o VLibras Widget com opções dos Avatares Ícaro, Hosana ou Guga." />\r\n<img class="pop-up" data-src="assets/access_popup.jpg"\r\n    alt="Conteúdo acessível em Libras usando o VLibras Widget com opções dos Avatares Ícaro, Hosana ou Guga." />');
  },
  function (t, e, n) {
    var i = n(0),
      o = n(9);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[t.i, o, ""]]);
    var r = { insert: "head", singleton: !1 };
    i(o, r);
    t.exports = o.locals || {};
  },
  function (t, e, n) {
    (e = n(1)(!1)).push([
      t.i,
      "[vw] [vw-access-button]{display:none;flex-direction:row-reverse;width:40px;height:40px;cursor:pointer;overflow:hidden;position:absolute;border-radius:8px;transition:all .5s ease;right:0;left:auto}[vw] [vw-access-button] img{max-height:40px;transition:all .5s ease;border-radius:8px;opacity:1 !important;visibility:visible !important}[vw] [vw-access-button] .access-button{width:40px;height:40px;z-index:1}[vw] [vw-access-button] .pop-up{position:absolute;height:40px;min-width:150px;z-index:0;left:0;right:auto}[vw] [vw-access-button]:hover{width:200px}[vw] [vw-access-button].isLeft{flex-direction:row;left:0;right:auto}[vw] [vw-access-button].isLeft .pop-up{left:auto;right:0}[vw] [vw-access-button].isTopOrBottom:hover{bottom:-20px;top:0;margin-right:-80px}[vw] [vw-access-button].active{display:flex}\n",
      "",
    ]),
      (t.exports = e);
  },
  function (t, e, n) {
    const i = n(11).default;
    function o() {}
    n(12),
      (o.prototype.load = function (t) {
        (this.element = t), (this.element.innerHTML = i);
      }),
      (t.exports = o);
  },
  function (t, e, n) {
    "use strict";
    n.r(e),
      (e.default =
        "<div vp>\r\n  <div vp-box></div>\r\n  <div vp-message-box></div>\r\n  <div vp-settings></div>\r\n  <div vp-dictionary></div>\r\n  <div vp-settings-btn></div>\r\n  <div vp-info-screen></div>\r\n  <div vp-suggestion-screen></div>\r\n  <div vp-translator-screen></div>\r\n  <div vp-main-guide-screen></div>\r\n  <div vp-suggestion-button></div>\r\n  <div vp-rate-box></div>\r\n  <div vp-change-avatar></div>\r\n  <div vp-additional-options></div>\r\n  <div vp-controls></div>\r\n  <span vp-click-blocker></span>\r\n</div>");
  },
  function (t, e, n) {
    var i = n(0),
      o = n(13);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[t.i, o, ""]]);
    var r = { insert: "head", singleton: !1 };
    i(o, r);
    t.exports = o.locals || {};
  },
  function (t, e, n) {
    (e = n(1)(!1)).push([
      t.i,
      "[vw].left [vw-plugin-wrapper]{float:left}[vw] [vw-plugin-wrapper]{position:relative;display:none;width:300px;height:100%;float:right;background:white;-webkit-box-shadow:0px 0px 15px rgba(0,0,0,0.2);-moz-box-shadow:0px 0px 15px rgba(0,0,0,0.2);box-shadow:0px 0px 15px rgba(0,0,0,0.2);border-radius:12px;-moz-border-radius:12px;-webkit-border-radius:12px}[vw] [vw-plugin-wrapper].active{display:-webkit-flex;display:flex;flex-direction:column;-webkit-flex-direction:column;height:450px;max-width:100%;min-height:100%}\n",
      "",
    ]),
      (t.exports = e);
  },
  function (t, e, n) {
    var i = n(0),
      o = n(15);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[t.i, o, ""]]);
    var r = { insert: "head", singleton: !1 };
    i(o, r);
    t.exports = o.locals || {};
  },
  function (t, e, n) {
    (e = n(1)(!1)).push([
      t.i,
      "[vw] html,[vw] body,[vw] div,[vw] span,[vw] applet,[vw] object,[vw] iframe,[vw] h1,[vw] h2,[vw] h3,[vw] h4,[vw] h5,[vw] h6,[vw] p,[vw] blockquote,[vw] pre,[vw] a,[vw] abbr,[vw] acronym,[vw] address,[vw] big,[vw] cite,[vw] code,[vw] del,[vw] dfn,[vw] em,[vw] img,[vw] ins,[vw] kbd,[vw] q,[vw] s,[vw] samp,[vw] small,[vw] strike,[vw] strong,[vw] sub,[vw] sup,[vw] tt,[vw] var,[vw] b,[vw] u,[vw] i,[vw] center,[vw] dl,[vw] dt,[vw] dd,[vw] ol,[vw] ul,[vw] li,[vw] fieldset,[vw] form,[vw] label,[vw] legend,[vw] table,[vw] caption,[vw] tbody,[vw] tfoot,[vw] thead,[vw] tr,[vw] th,[vw] td,[vw] article,[vw] aside,[vw] canvas,[vw] details,[vw] embed,[vw] figure,[vw] figcaption,[vw] footer,[vw] header,[vw] hgroup,[vw] menu,[vw] nav,[vw] output,[vw] ruby,[vw] section,[vw] summary,[vw] time,[vw] mark,[vw] audio,[vw] video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;display:block}[vw] article,[vw] aside,[vw] details,[vw] figcaption,[vw] figure,[vw] footer,[vw] header,[vw] hgroup,[vw] menu,[vw] nav,[vw] section{display:block}[vw] img{width:unset}[vw] body{line-height:1}[vw] ol,[vw] ul{list-style:none}[vw] blockquote,[vw] q{quotes:none}[vw] blockquote:before,[vw] blockquote:after,[vw] q:before,[vw] q:after{content:'';content:none}[vw] table{border-collapse:collapse;border-spacing:0}\n",
      "",
    ]),
      (t.exports = e);
  },
  function (t, e, n) {
    var i = n(0),
      o = n(17);
    "string" == typeof (o = o.__esModule ? o.default : o) &&
      (o = [[t.i, o, ""]]);
    var r = { insert: "head", singleton: !1 };
    i(o, r);
    t.exports = o.locals || {};
  },
  function (t, e, n) {
    (e = n(1)(!1)).push([
      t.i,
      "@media (max-width: 450px){div[vw] canvas{min-height:unset !important;min-width:unset !important;-webkit-filter:blur(0px);-moz-filter:blur(0px);-ms-filter:blur(0px);-o-filter:blur(0px);filter:blur(0px);min-height:calc(0.35 * 680px) !important;min-width:calc(0.35 * 420px) !important}div[vw] [vw-plugin-wrapper].active{height:350px !important;width:210px !important}}div[vw]{position:fixed;max-width:95vw;min-height:40px;min-width:40px;right:0;top:50%;transform:translateY(-50%);z-index:2147483647 !important;display:none;font-family:'Rawline', Verdana, sans-serif !important;color:#000;line-height:1.3;font-size:16px;margin:10px !important}div[vw].enabled{display:block}div[vw].active{margin-top:-285px}div[vw].maximize{top:6vh;left:6vh;right:6vh;bottom:6vh;max-width:initial;margin-top:0}div[vw].left{left:0;right:initial}div[vw] #gameContainer{position:absolute !important;left:0;right:0;top:0;bottom:0;margin:auto !important;width:100%;height:calc(100% - 80px);overflow:hidden;-moz-border-radius:10px;-webkit-border-radius:10px;border-radius:0px;background:none !important}div[vw] #gameContainer canvas{min-height:calc(0.7 * 450px);min-width:calc(0.9 * 300px);height:100%;width:100%;-webkit-filter:blur(0px);-moz-filter:blur(0px);-ms-filter:blur(0px);-o-filter:blur(0px);filter:blur(0px)}\n",
      "",
    ]),
      (t.exports = e);
  },
  function (t, e) {
    t.exports = window.window;
  },
]);
