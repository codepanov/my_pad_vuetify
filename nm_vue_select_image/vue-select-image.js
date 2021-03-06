!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define("VueSelectImage", [], t)
      : "object" == typeof exports
      ? (exports.VueSelectImage = t())
      : (e.VueSelectImage = t());
})(window, function () {
  return (function (e) {
      var t = {};
      function n(i) {
          if (t[i]) return t[i].exports;
          var l = (t[i] = { i: i, l: !1, exports: {} });
          return e[i].call(l.exports, l, l.exports, n), (l.l = !0), l.exports;
      }
      return (
          (n.m = e),
          (n.c = t),
          (n.d = function (e, t, i) {
              n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
          }),
          (n.r = function (e) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (n.t = function (e, t) {
              if ((1 & t && (e = n(e)), 8 & t)) return e;
              if (4 & t && "object" == typeof e && e && e.__esModule) return e;
              var i = Object.create(null);
              if ((n.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                  for (var l in e)
                      n.d(
                          i,
                          l,
                          function (t) {
                              return e[t];
                          }.bind(null, l)
                      );
              return i;
          }),
          (n.n = function (e) {
              var t =
                  e && e.__esModule
                      ? function () {
                            return e.default;
                        }
                      : function () {
                            return e;
                        };
              return n.d(t, "a", t), t;
          }),
          (n.o = function (e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
          }),
          (n.p = ""),
          n((n.s = 5))
      );
  })([
      function (e, t, n) {
          "use strict";
          n.r(t);
          var i = n(1),
              l = n.n(i);
          for (var s in i)
              "default" !== s &&
                  (function (e) {
                      n.d(t, e, function () {
                          return i[e];
                      });
                  })(s);
          t.default = l.a;
      },
      function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 }),
              (t.default = {
                  name: "vue-select-image",
                  props: {
                      dataImages: {
                          type: Array,
                          default: function () {
                              return [];
                          },
                      },
                      selectedImages: {
                          type: Array,
                          default: function () {
                              return [];
                          },
                      },
                      isMultiple: { type: Boolean, default: !1 },
                      useLabel: { type: Boolean, default: !1 },
                      rootClass: { type: String, default: "vue-select-image" },
                      activeClass: { type: String, default: "--selected" },
                      h: { type: String, default: "auto" },
                      w: { type: String, default: "auto" },
                  },
                  data: function () {
                      return { singleSelected: { diffbotUri: "" }, multipleSelected: [] }; /* changed from id to diffbotUri | Panov */
                  },
                  computed: {
                      dataImagesLocal: function () {
                          return this.dataImages || [];
                      },
                  },
                  mounted: function () {
                      this.setInitialSelection();
                  },
                  methods: {
                      classThumbnail: function (e, t) {
                          var n = this.rootClass + "__thumbnail";
                          return e === t ? n + " " + n + this.activeClass : "" + n;
                      },
                      classThumbnailMultiple: function (e) {
                          var t = this.rootClass + "__thumbnail",
                              n = t + " is--multiple";
                          return this.isExistInArray(e) ? n + " " + t + this.activeClass : "" + n;
                      },
                      onSelectImage: function (e) {
                          (this.singleSelected = Object.assign({}, this.singleSelected, e)), this.$emit("onselectimage", e);
                      },
                      isExistInArray: function (e) {
                          return this.multipleSelected.find(function (t) {
                              return e === t.diffbotUri; /* changed from t.id to t.diffbotUri | Panov */
                          });
                      },
                      removeFromSingleSelected: function () {
                          (this.singleSelected = {}), this.$emit("onselectimage", {});
                      },
                      removeFromMultipleSelected: function (e, t) {
                          (this.multipleSelected = this.multipleSelected.filter(function (t) {
                              return e !== t.diffbotUri; /* changed from t.id to t.diffbotUri | Panov */
                          })),
                              t || this.$emit("onselectmultipleimage", this.multipleSelected);
                      },
                      resetMultipleSelection: function () {
                          this.multipleSelected = [];
                      },
                      onSelectMultipleImage: function (e) {
                          this.isExistInArray(e.diffbotUri) ? this.removeFromMultipleSelected(e.diffbotUri, !0) : this.multipleSelected.push(e), this.$emit("onselectmultipleimage", this.multipleSelected); /* changed from e.id to e.diffbotUri | Panov */
                      },
                      setInitialSelection: function () {
                          this.selectedImages && (this.isMultiple || 1 !== this.selectedImages.length ? (this.multipleSelected = [].concat(this.selectedImages)) : (this.singleSelected = Object.assign({}, this.selectedImages[0])));
                      },
                  },
              });
      },
      function (e, t, n) {},
      function (e, t, n) {
          "use strict";
          var i = function () {
                  var e = this,
                      t = e.$createElement,
                      n = e._self._c || t;
                  return n("div", { class: e.rootClass }, [
                      n(
                          "ul",
                          { class: e.rootClass + "__wrapper" },
                          e._l(e.dataImagesLocal, function (t, i) {
                              return n("li", { key: i, class: e.rootClass + "__item" }, [
                                  e.isMultiple
                                      ? e._e()
                                      : n(
                                            "div",
                                            {
                                                class: e.classThumbnail(e.singleSelected.id, t.diffbotUri), /* changed from t.id to t.diffbotUri | Panov */
                                                on: {
                                                    click: function (n) {
                                                        e.onSelectImage(t);
                                                    },
                                                },
                                            },
                                            [
                                                // changing from src: t.src to src: t.url | Panov
                                                n("img", { class: e.rootClass + "__img", attrs: { src: t.url, alt: t.alt, height: e.h, width: e.w } }),
                                                e._v(" "),
                                                e.useLabel ? n("label", { class: e.rootClass + "__lbl" }, [e._v("\n              " + e._s(t.alt) + "\n        ")]) : e._e(),
                                            ]
                                        ),
                                  e._v(" "),
                                  e.isMultiple
                                      ? n(
                                            "div",
                                            {
                                                class: e.classThumbnailMultiple(t.diffbotUri), /* changed from t.id to t.diffbotUri | Panov */
                                                on: {
                                                    click: function (n) {
                                                        e.onSelectMultipleImage(t);
                                                    },
                                                },
                                            },
                                            [
                                                // changing from src: t.src to src: t.url | Panov
                                                n("img", { class: e.rootClass + "__img", attrs: { src: t.url, alt: t.alt, height: e.h, width: e.w } }),
                                                e._v(" "),
                                                e.useLabel ? n("label", { class: e.rootClass + "__lbl" }, [e._v("\n              " + e._s(t.alt) + "\n        ")]) : e._e(),
                                            ]
                                        )
                                      : e._e(),
                              ]);
                          })
                      ),
                  ]);
              },
              l = [];
          n.d(t, "a", function () {
              return i;
          }),
              n.d(t, "b", function () {
                  return l;
              });
      },
      function (e, t, n) {
          "use strict";
          function i(e, t, n, i, l, s, r, o) {
              var u,
                  a = "function" == typeof e ? e.options : e;
              if (
                  (t && ((a.render = t), (a.staticRenderFns = n), (a._compiled = !0)),
                  i && (a.functional = !0),
                  s && (a._scopeId = "data-v-" + s),
                  r
                      ? ((u = function (e) {
                            (e = e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
                                l && l.call(this, e),
                                e && e._registeredComponents && e._registeredComponents.add(r);
                        }),
                        (a._ssrRegister = u))
                      : l &&
                        (u = o
                            ? function () {
                                  l.call(this, this.$root.$options.shadowRoot);
                              }
                            : l),
                  u)
              )
                  if (a.functional) {
                      a._injectStyles = u;
                      var c = a.render;
                      a.render = function (e, t) {
                          return u.call(t), c(e, t);
                      };
                  } else {
                      var d = a.beforeCreate;
                      a.beforeCreate = d ? [].concat(d, u) : [u];
                  }
              return { exports: e, options: a };
          }
          n.d(t, "a", function () {
              return i;
          });
      },
      function (e, t, n) {
          "use strict";
          Object.defineProperty(t, "__esModule", { value: !0 });
          var i = (function (e) {
              return e && e.__esModule ? e : { default: e };
          })(n(6));
          var l = function (e) {
              e.component(i.default.name, i.default);
          };
          (i.default.install = l), (t.default = i.default);
      },
      function (e, t, n) {
          "use strict";
          n.r(t);
          var i = n(3),
              l = n(0);
          for (var s in l)
              "default" !== s &&
                  (function (e) {
                      n.d(t, e, function () {
                          return l[e];
                      });
                  })(s);
          n(7);
          var r = n(4),
              o = Object(r.a)(l.default, i.a, i.b, !1, null, null, null);
          (o.options.__file = "VueSelectImage.vue"), (t.default = o.exports);
      },
      function (e, t, n) {
          "use strict";
          var i = n(2);
          n.n(i).a;
      },
  ]);
});
