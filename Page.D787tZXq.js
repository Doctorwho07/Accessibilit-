import {
  i as zl,
  r as A,
  c,
  _ as ie,
  d as se,
  o as Oe,
  a as xt,
  b as m,
  e as v,
  f as E,
  t as J,
  g as M,
  n as ee,
  h as Re,
  F as ge,
  j as Se,
  k as ze,
  w as ue,
  l as Ne,
  m as Ce,
  p as G,
  q as Ee,
  s as Qe,
  u as tt,
  v as he,
  x as _e,
  y as gn,
  z as ti,
  A as ai,
  B as je,
  C as Ht,
  D as Ut,
  E as zn,
  G as Kl,
  H as Ot,
  I as _a,
  J as _t,
  K as L,
  L as Ql,
  M as Zl,
  N as Xl,
  O as To,
  P as ja,
  Q as fr,
  R as Pt,
  S as Ji,
  T as Qc,
  U as Zc,
  V as Xc,
} from "./_plugin-vue_export-helper.DFdUoSSK.js";
import {
  v as Zt,
  u as St,
  w as Me,
  T as At,
  a as De,
  s as Po,
  b as Jl,
  c as Jc,
  r as es,
} from "./scrollToSection.ChvhFD9q.js";
import {
  S as Yt,
  L as Io,
  a as eu,
  M as Eo,
  D as ed,
  b as Ma,
  c as Kn,
  E as fa,
  d as Za,
  e as tu,
  f as au,
  Z as td,
  g as ad,
  h as nd,
  P as nu,
  i as ni,
  j as rd,
  k as od,
  A as ru,
  l as id,
  I as ts,
  m as jr,
  n as sd,
  o as ld,
  p as ud,
  q as as,
  r as Nn,
  s as xn,
  t as Wr,
  u as cd,
  v as dd,
  w as md,
  x as pd,
  y as gd,
  z as ns,
  B as hd,
  C as rs,
  F as fd,
  G as vd,
  H as yd,
  J as Do,
  K as os,
  N as bd,
  O as _d,
  Q as wd,
  R as ou,
  T as Gr,
  U as is,
  V as ss,
  W as kd,
  X as Sd,
  Y as Cd,
  _ as Td,
  $ as Pd,
  a0 as Id,
  a1 as Ed,
  a2 as Dd,
  a3 as Md,
  a4 as Et,
  a5 as ls,
  a6 as us,
  a7 as zr,
  a8 as cs,
} from "./index.CZM-Hik8.js";
/* empty css                        */ import {
  g as Od,
  a as Ad,
  s as ds,
  b as Ld,
  i as iu,
  c as Fa,
} from "./addDocumentElements.DlKJTd2s.js";
/*!
 * vue-router v4.2.5
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ var ms;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(ms || (ms = {}));
var ps;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(ps || (ps = {}));
var gs;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(gs || (gs = {}));
const Bd = Symbol(""),
  Rd = Symbol("");
function $d() {
  return zl(Bd);
}
function Nd() {
  return zl(Rd);
}
const hs = A(null),
  Xe = A({}),
  rt = () => {
    const e = (H) => {
        hs.value = H;
      },
      a = (H) => {
        Xe.value = H;
      },
      t = c(() => Xe.value.pages || {}),
      n = c(() => Xe.value.blocks),
      r = c(() => Xe.value.elements),
      i = c(() => Xe.value.nav),
      o = c(() => Xe.value.homePageId),
      s = c(() => Xe.value.isNavHidden),
      l = c(() => Xe.value.cookieBannerAcceptText),
      d = c(() => Xe.value.cookieBannerDisclaimer),
      p = c(() => Xe.value.cookieBannerDeclineText),
      u = c(() => Xe.value.blogReadingTimeText),
      g = c(() => Xe.value.meta),
      y = c(() => Xe.value.metaTitle),
      f = c(() => Xe.value.forms),
      _ = c(() => Xe.value.styles),
      S = c(() => Xe.value.domain),
      w = c(() => Xe.value.siteId),
      b = c(() => Xe.value.ecommerceShoppingCart),
      D = c(() => Xe.value.blogCategories),
      P = c(() => Xe.value.languageSwitcherLanguages),
      O = c(() => Xe.value.currentPageId),
      N = c(() => t.value[O.value]),
      x = c(() => Xe.value.currentLocale),
      X = c(() => Xe.value.languageKeys),
      W = c(() => Xe.value.ecwidPages),
      T = ({ pageId: H }) => {
        if (!t.value[H]) return null;
        const q = t.value[H].slug;
        return [Yt, g.value.defaultLocale].includes(x.value)
          ? o.value === H
            ? "/"
            : `/${q}`
          : o.value === H
          ? `/${x.value}`
          : `/${x.value}/${q}`;
      };
    return {
      website: hs,
      pageData: Xe,
      pages: t,
      blocks: n,
      elements: r,
      nav: i,
      homePageId: o,
      isNavHidden: s,
      cookieBannerAcceptText: l,
      cookieBannerDisclaimer: d,
      cookieBannerDeclineText: p,
      blogReadingTimeText: u,
      meta: g,
      metaTitle: y,
      forms: f,
      styles: _,
      domain: S,
      siteId: w,
      ecommerceShoppingCart: b,
      blogCategories: D,
      languageSwitcherLanguages: P,
      currentPageId: O,
      currentLocale: x,
      languageKeys: X,
      ecwidPages: W,
      currentPageData: N,
      setWebsite: e,
      setPageData: a,
      getPagePathFromId: T,
      getButtonHref: ({
        isFormButton: H,
        linkedPageId: q,
        linkType: B,
        href: I,
      }) => (H ? null : I || (B === Io && q ? T({ pageId: q }) : I)),
    };
  },
  fs = A(!0),
  su = () => {
    const e = (a) => {
      fs.value = a;
    };
    return { hasUserScrolled: c(() => !fs.value), setIntersectingState: e };
  },
  xd = se({
    __name: "StickyTrigger",
    setup(e, { expose: a }) {
      a();
      const t = { threshold: 1 },
        n = A(null),
        r = A(null),
        { setIntersectingState: i } = su();
      Oe(() => {
        (r.value = new IntersectionObserver(([{ isIntersecting: s }]) => {
          i(s);
        }, t)),
          n.value && r.value.observe(n.value);
      }),
        xt(() => {
          r.value?.disconnect();
        });
      const o = {
        OBSERVER_OPTIONS: t,
        stickyTriggerRef: n,
        observer: r,
        setIntersectingState: i,
      };
      return (
        Object.defineProperty(o, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  }),
  Hd = { ref: "stickyTriggerRef", class: "sticky-trigger" };
function Ud(e, a, t, n, r, i) {
  return m(), v("div", Hd, null, 512);
}
const Vd = ie(xd, [["render", Ud]]),
  vs = 1600,
  ys = 1224,
  bs = 12,
  Fd = 1224,
  Oa = 1920,
  Yd = (e, a) => {
    const [t, n, r, i] = a.split("/").map(Number.parseFloat),
      { styles: o } = e.settings ?? {},
      s = Number.parseFloat(o?.["row-size"]) ?? 48,
      l = Number.parseFloat(o?.["column-gap"]) ?? 24,
      d = Number.parseFloat(o?.["row-gap"]) ?? 16,
      p = (ys - (bs - 1) * l) / bs,
      u = (Oa - vs) / 2 + l,
      g = (vs - ys) / 2 - l;
    let y = Oa;
    const f = r - t,
      _ = f * s + (f - 1) * d;
    return (
      n !== 1 && (y -= u),
      i !== 17 && (y -= u),
      n > 2 && (y -= g),
      i < 16 && (y -= g),
      n > 3 && (y -= (n - 3) * (p + l)),
      i < 15 && (y -= (15 - i) * (p + l)),
      i - n === 1 && (y = p),
      { width: y, height: _ }
    );
  },
  _s = (e) => Object.prototype.toString.call(e) === "[object Object]",
  rn = (e) => {
    const a = e.split(" "),
      t = a.length;
    if (t < 1 || t > 4) throw new Error(`Cannot parse ${t} sides`);
    return ((r, i = r, o = r, s = i) => ({
      top: r,
      right: i,
      bottom: o,
      left: s,
    }))(...a);
  },
  qd = ["padding", "m-padding", "block-padding"],
  jd = ["border-radius"],
  ta = (e, a = "") =>
    _s(e)
      ? Object.entries(e).reduce((t, [n, r]) => {
          const i = a ? `${a}-${n}` : `--${n}`;
          if (_s(r)) return { ...t, ...ta(r, i) };
          const o = qd.includes(n)
            ? Object.entries(rn(r)).reduce(
                (s, [l, d]) => ({ ...s, [`${i}-${l}`]: d, [i]: r }),
                {}
              )
            : { [i]: r };
          return { ...t, ...(jd.includes(n) ? { [i]: `${r}px` } : o) };
        }, {})
      : {},
  Kr = A([]),
  lu = () => {
    const e = c(() => Kr.value.reduce((r, i) => r + i.quantity, 0)),
      a = () => {
        const r = window.Ecwid.Controller.getEntryPage();
        window.Ecwid.openPage(r.type.toLowerCase(), { id: r.categoryId });
      },
      t = () => {
        window.Ecwid && window.Ecwid.openPage("cart");
      },
      n = (r) => {
        Kr.value = r;
      };
    return {
      ecwidCartItems: c(() => Kr.value),
      ecwidCartItemCount: e,
      openCart: t,
      setEcwidCartItems: n,
      openEcwidHomepage: a,
    };
  },
  Wd = ({ path: e, languageKeys: a = [], defaultLocale: t = "system" }) => {
    const [n, r] = e.split("/").filter((i) => i !== "");
    return !a || !a.length > 1
      ? { locale: t, slug: n }
      : a.includes(n)
      ? { locale: n, slug: r }
      : { locale: t ?? Yt, slug: n };
  },
  ri = (e, a, t) =>
    !e || !a
      ? null
      : e === "assets"
      ? `https://assets.zyrosite.com/${t}/${a}`
      : e === "unsplash"
      ? `https://images.unsplash.com/${a}`
      : a,
  Gd = /^[\w+.-]+@[\d.A-Za-z-]+\.[A-Za-z]+$/,
  zd = /^\+*\({0,1}\d{1,4}\){0,1}[\d./s-]*$/,
  Kd = /^\d+$/,
  Qd = (e) =>
    typeof e != "string" ? "" : e.charAt(0).toUpperCase() + e.slice(1),
  tn = (e) => {
    const a = e.split(/[/\\]/).pop(),
      t = a.lastIndexOf(".");
    return a === "" || t < 1 ? "" : a.slice(t + 1).toLowerCase();
  },
  Zd = [
    eu,
    "https://assets.zyrosite.space",
    "https://assets.zyrosite.com",
    "https://cdn.zyrosite.com",
  ],
  Xd = "https://images.unsplash.com",
  Jd = "cdn-cgi/image",
  oi = [{ width: 360, height: 640 }],
  ii = [1, 2, 2.625, 3],
  em = [{ width: 1440 }, { width: 1920 }],
  si = [1, 2],
  li = 16,
  Hn = (e, a = li) =>
    [`(min-width: ${Eo}px) ${e}px`, `calc(100vw - ${a * 2}px)`].join(", "),
  tm = (e, a, t = {}) => {
    const n = t.fit || (t.shouldContain ? "scale-down" : "crop"),
      r = [
        "format=auto",
        t.width && `w=${t.width}`,
        t.height && `h=${t.height}`,
        `fit=${n}`,
        t.isLossless && "q=100",
        t.format && `f=${t.format}`,
        t.trim && `trim=${t.trim}`,
        t.quality && !t.isLossless && `q=${t.quality}`,
      ]
        .filter((o) => !!o)
        .join(",");
    let [, i] = a.split(e);
    for (; i.startsWith("/"); ) i = i.replace("/", "");
    return `${e}/${Jd}/${r}/${i}`;
  },
  am = (e, a = {}) => {
    const t = new URL(e);
    return (
      t.searchParams.set("auto", a.format || "format"),
      t.searchParams.set("fit", a.shouldContain ? "clip" : "crop"),
      a.width && t.searchParams.set("w", a.width),
      a.height && t.searchParams.set("h", a.height),
      a.isLossless && t.searchParams.set("q", 100),
      t.href
    );
  },
  lt = (e, a, t, n = {}) => {
    const r = ri(e, a, t);
    if (!r) return null;
    if (tn(r) === "svg" || tn(r) === "ico" || tn(r) === "gif") return r;
    const i = Zd.find((o) => r.includes(o));
    return i ? tm(i, r, n) : r.includes(Xd) ? am(r, n) : r;
  },
  Aa = (e, a, t, n = {}) => {
    const r = em
      .map((s) =>
        si.map((l) => {
          const d = Math.round(s.width * l);
          return `${lt(e, a, t, { ...n, width: d })} ${d}w`;
        })
      )
      .join(",");
    return `${oi
      .map((s) =>
        ii.map((l) => {
          const d = Math.round(s.width * l),
            p = { ...n, width: d };
          return (
            n.isMobileFullScreen && (p.height = Math.round(s.height * l)),
            `${lt(e, a, t, p)} ${d}w`
          );
        })
      )
      .join(",")},${r}`;
  },
  Ha = (e, a, t, n = {}) => {
    if (!n.width) return Aa(e, a, t, n);
    const r = si
        .map((l) => {
          const d = Math.round(n.width * l),
            p = Math.round(n.height * l);
          return `${lt(e, a, t, { ...n, width: d, height: p })} ${d}w`;
        })
        .join(","),
      i = (n.mobilePadding ?? li) * 2;
    return `${oi
      .map((l) => {
        const d = l.width - i;
        return ii
          .map((p) => {
            const u = n.width / n.height,
              g = Math.round(d * p),
              y = Math.round(g / u);
            return `${lt(e, a, t, { ...n, width: g, height: y })} ${g}w`;
          })
          .join(",");
      })
      .join(",")},${r}`;
  },
  nm = (e, a, t, n = {}) => {
    if (!n.width) return Aa(e, a, t, n);
    const r = si
        .map((s) => {
          const l = Math.round(n.width * s),
            d = Math.round(n.height * s);
          return `${lt(e, a, t, { ...n, width: l, height: d })} ${l}w`;
        })
        .join(","),
      i = (n.mobilePadding ?? li) * 2;
    return `${oi
      .map((s) => {
        const l = Math.round(
          (s.width - i + n.columnGap) / n.columnCount - n.columnGap
        );
        return ii
          .map((d) => {
            const p = Math.round(l * d),
              u = Math.round(l * d);
            return `${lt(e, a, t, {
              ...n,
              width: u,
              height: !n.isMasonryLayout && u,
            })} ${p}w`;
          })
          .join(",");
      })
      .join(",")},${r}`;
  },
  rm = () => {
    const { meta: e } = rt(),
      a = A("z-cookies-consent"),
      t = A("1"),
      n = c(() => !!t.value),
      r = c(() => t.value === "1"),
      i = c(() => t.value !== "0");
    return (
      Oe(() => {
        const l = Od(window.location.hostname);
        (a.value = `z-cookies-consent-${l}`), (t.value = Ad(a.value));
      }),
      {
        acceptCookies: () => {
          ds(a.value, 1, 365),
            (t.value = "1"),
            Ld({ siteMeta: e.value, areCookiesAllowed: i.value });
        },
        declineCookies: () => {
          ds(a.value, 0, 1), (t.value = "0");
        },
        hasUserConsentedCookieBanner: n,
        hasUserAcceptedCookies: r,
        areCookiesAllowed: i,
      }
    );
  },
  om = se({
    __name: "CookieBanner",
    props: {
      disclaimer: { type: String, required: !0 },
      acceptText: { type: String, default: "Accept" },
      declineText: { type: String, default: "Decline" },
      siteMeta: { type: Object, required: !0 },
    },
    setup(e, { expose: a }) {
      a();
      const {
          acceptCookies: t,
          declineCookies: n,
          hasUserConsentedCookieBanner: r,
        } = rm(),
        i = {
          acceptCookies: t,
          declineCookies: n,
          hasUserConsentedCookieBanner: r,
          get isAppPrerendering() {
            return iu;
          },
        };
      return (
        Object.defineProperty(i, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  im = { key: 0, class: "cookie-banner" },
  sm = { class: "cookie-banner__frame" },
  lm = { class: "cookie-banner__text" },
  um = { class: "cookie-banner__controls" };
function cm(e, a, t, n, r, i) {
  return !n.isAppPrerendering && !n.hasUserConsentedCookieBanner
    ? (m(),
      v("div", im, [
        E("div", sm, [
          E("p", lm, J(t.disclaimer), 1),
          E("div", um, [
            E(
              "button",
              {
                class: "control-button primary",
                onClick:
                  a[0] ||
                  (a[0] = (...o) => n.acceptCookies && n.acceptCookies(...o)),
              },
              J(t.acceptText),
              1
            ),
            E(
              "button",
              {
                class: "control-button",
                onClick:
                  a[1] ||
                  (a[1] = (...o) => n.declineCookies && n.declineCookies(...o)),
              },
              J(t.declineText),
              1
            ),
          ]),
        ]),
      ]))
    : M("", !0);
}
const dm = ie(om, [["render", cm]]),
  mm = se({
    name: "BlockBackground",
    props: {
      alt: { type: String, default: "" },
      overlayOpacity: { type: String, default: null },
      type: { type: String, default: "color" },
      src: { type: String, default: null },
      srcset: { type: String, default: null },
      isEager: { type: Boolean, default: !1 },
      color: { type: String, default: null },
      isFixed: { type: Boolean, default: !1 },
    },
    computed: {
      backgroundColor() {
        return this.type === "color" ? this.color : "transparent";
      },
      isBackgroundOverlayShown() {
        return this.type === "image" && this.overlayOpacity;
      },
      computedStyles() {
        return {
          "--background-color": this.backgroundColor,
          "--background-overlay-opacity": this.isBackgroundOverlayShown
            ? this.overlayOpacity
            : 0,
        };
      },
    },
  }),
  pm = ["alt", "src", "srcset", "loading"];
function gm(e, a, t, n, r, i) {
  return (
    m(),
    v(
      "div",
      {
        class: ee([
          "block-background",
          { "block-background--fixed": e.isFixed },
        ]),
        style: Re(e.computedStyles),
      },
      [
        e.type === "image" && e.src
          ? (m(),
            v(
              "img",
              {
                key: e.src,
                alt: e.alt,
                src: e.src,
                srcset: e.srcset,
                width: "100vw",
                sizes: "(max-width: 500px) 800px, 100vw",
                loading: e.isEager ? "eager" : "lazy",
                class: ee([
                  "block-background__image",
                  { "block-background__image--fixed": e.isFixed },
                ]),
              },
              null,
              10,
              pm
            ))
          : M("", !0),
        e.isBackgroundOverlayShown
          ? (m(),
            v(
              "div",
              {
                key: 1,
                class: ee([
                  "block-background__overlay",
                  { "block-background__overlay--fixed": e.isFixed },
                ]),
              },
              null,
              2
            ))
          : M("", !0),
      ],
      6
    )
  );
}
const uu = ie(mm, [["render", gm]]),
  hm = se({
    props: {
      categories: { type: Array, default: () => [] },
      blogCategories: { type: Object, default: () => ({}) },
    },
    methods: {
      getCategoryNameById(e) {
        return this.blogCategories[e]?.name?.toUpperCase();
      },
    },
  }),
  fm = { class: "categories" },
  vm = ["onClick"];
function ym(e, a, t, n, r, i) {
  return (
    m(),
    v("p", fm, [
      (m(!0),
      v(
        ge,
        null,
        Se(
          e.categories,
          (o, s) => (
            m(),
            v(
              "span",
              {
                key: o,
                class: "categories__item",
                onClick: (l) => e.$emit("filter-category", e.categories[s]),
              },
              J(e.getCategoryNameById(o)),
              9,
              vm
            )
          )
        ),
        128
      )),
    ])
  );
}
const cu = ie(hm, [
    ["render", ym],
    ["__scopeId", "data-v-17a7aef3"],
  ]),
  bm = se({
    __name: "BlockBlogListItemMeta",
    props: {
      authorName: { type: String, default: "" },
      minutesAmount: { type: String, default: "0" },
      blogReadingTimeText: { type: String, default: "" },
      date: { type: String, default: "" },
      showAvatar: { type: Boolean, default: !0 },
      showName: { type: Boolean, default: !0 },
      showDate: { type: Boolean, default: !0 },
      showMinutes: { type: Boolean, default: !0 },
    },
    setup(e, { expose: a }) {
      a();
      const t = {
        get DEFAULT_MIN_READ_TEXT() {
          return ed;
        },
      };
      return (
        Object.defineProperty(t, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        t
      );
    },
  }),
  _m = { class: "blog-list-item-meta" },
  wm = { class: "font-secondary" },
  km = { class: "blog-list-item-meta__author-name" },
  Sm = { class: "blog-list-item-meta__subtitle" },
  Cm = { key: 0 },
  Tm = { key: 1 };
function Pm(e, a, t, n, r, i) {
  const o = ze("qa");
  return (
    m(),
    v("div", _m, [
      E("div", wm, [
        ue((m(), v("p", km, [Ne(J(t.authorName), 1)])), [
          [Zt, t.showName],
          [o, "blog-author"],
        ]),
        ue(
          E(
            "p",
            Sm,
            [
              t.showDate && t.date
                ? (m(), v("span", Cm, J(t.date), 1))
                : M("", !0),
              t.showMinutes
                ? (m(),
                  v(
                    "span",
                    Tm,
                    J(
                      `${t.minutesAmount} ${
                        t.blogReadingTimeText || n.DEFAULT_MIN_READ_TEXT
                      }`
                    ),
                    1
                  ))
                : M("", !0),
            ],
            512
          ),
          [[Zt, t.showDate || t.showMinutes]]
        ),
      ]),
    ])
  );
}
const du = ie(bm, [
    ["render", Pm],
    ["__scopeId", "data-v-88ffe988"],
  ]),
  mu = (e) => new Date(e).toLocaleDateString("en-US"),
  ui = se({
    name: "BlockBlogHeader",
    components: { BlockBlogListItemMeta: du, BlockBlogListItemCategories: cu },
    props: {
      data: { type: Object, required: !0 },
      currentBlogPage: { type: Object, required: !0 },
      blogCategories: { type: Object, default: () => ({}) },
      blogReadingTimeText: { type: [String, void 0], default: void 0 },
    },
    setup(e) {
      const t = c(() => `${e.data.settings.blogTitleFontSize || 32}px`);
      return {
        getFormattedNumericDate: mu,
        DATA_ATTRIBUTE_ANIMATION_ROLE: Ma,
        DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT: Kn,
        blogTitleTextSize: t,
      };
    },
    computed: {
      categories() {
        return this.currentBlogPage?.categories ?? [];
      },
      meta() {
        return this.currentBlogPage?.meta ?? {};
      },
      authorName() {
        return this.meta?.authorName;
      },
      shownItems() {
        return this.data?.settings?.shownItems ?? {};
      },
      areCategoriesShown() {
        return this.shownItems.categories && this.categories.length;
      },
    },
  }),
  ws = () => {
    St((e) => ({ "21ab201a": e.blogTitleTextSize }));
  },
  ks = ui.setup;
ui.setup = ks ? (e, a) => (ws(), ks(e, a)) : ws;
const Im = { class: "block-blog-header__content" },
  Em = { class: "font-primary block-blog-header__title" },
  Dm = { key: 0, class: "font-secondary block-blog-header__description" };
function Mm(e, a, t, n, r, i) {
  const o = Ce("BlockBlogListItemCategories"),
    s = Ce("BlockBlogListItemMeta"),
    l = ze("qa");
  return ue(
    (m(),
    v(
      "div",
      tt({
        class: "block-blog-header",
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]:
          e.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT,
      }),
      [
        E("div", Im, [
          ue((m(), v("h1", Em, [Ne(J(e.meta.title), 1)])), [
            [l, "blog-label-posttitle"],
          ]),
          e.shownItems.description
            ? ue((m(), v("p", Dm, [Ne(J(e.meta.description), 1)])), [
                [l, "blog-label-postdescription"],
              ])
            : M("", !0),
          e.areCategoriesShown
            ? ue(
                (m(),
                G(
                  o,
                  {
                    key: 1,
                    class: "font-secondary",
                    categories: e.categories,
                    "blog-categories": e.blogCategories,
                  },
                  null,
                  8,
                  ["categories", "blog-categories"]
                )),
                [[l, "blog-label-category"]]
              )
            : M("", !0),
          Ee(
            s,
            Qe(
              {
                authorName: e.authorName,
                minutesAmount: e.currentBlogPage.minutesToRead,
                date: e.getFormattedNumericDate(e.currentBlogPage.date),
                showAvatar: e.shownItems.avatar,
                showName: e.shownItems.authorFullName,
                showDate: e.shownItems.date,
                showMinutes: e.shownItems.minutesToRead,
              },
              { "blog-reading-time-text": e.blogReadingTimeText }
            ),
            null,
            16,
            ["blog-reading-time-text"]
          ),
        ]),
      ],
      16
    )),
    [[l, "blog-postinformation"]]
  );
}
const Om = ie(ui, [
    ["render", Mm],
    ["__scopeId", "data-v-dfe4e670"],
  ]),
  Mo = A(!1),
  Ss = A(null),
  Oo = ({ blockId: e }) => ({
    isSearchOpenedInCurrentBlock: c(() => Ss.value === e && Mo.value),
    toggleSearchDropdown: (n) => {
      (Ss.value = e), (Mo.value = n);
    },
  }),
  cr = 16,
  wa = 1224,
  da = 360,
  pu = da - cr * 2,
  Cs = 16,
  Am = se({
    __name: "BlockLayoutWrapper",
    props: {
      isMobileLegacy: { type: Boolean, default: !1 },
      isBlockResponsive: { type: Boolean, default: !1 },
      isForcedOnTop: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: a }) {
      a(),
        St((l) => ({
          c467b54c: i.value,
          "2c660f9c": r.value,
          "6ced7b1e": n.value,
          "1f9bbfe2": o.value,
        }));
      const t = e,
        n = c(() =>
          t.isBlockResponsive && !t.isInPreviewMode
            ? `0 ${(cr * 100) / da}vw`
            : `0 ${cr}px`
        ),
        r = c(() => `${da}px`),
        i = c(() => `${wa}px`),
        o = c(() => `0 ${cr}px`),
        s = {
          props: t,
          mobileBlockPaddingCSSVar: n,
          mobileMaxWidthCSSVar: r,
          maxWidthCSSVar: i,
          tabletBlockPaddingCSSVar: o,
        };
      return (
        Object.defineProperty(s, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  });
function Lm(e, a, t, n, r, i) {
  return (
    m(),
    v(
      "div",
      {
        class: ee([
          "block-layout",
          {
            "block-layout--legacy": t.isMobileLegacy,
            "block-layout--layout": !t.isMobileLegacy,
            "block-layout--forcedOnTop": t.isForcedOnTop,
          },
        ]),
      },
      [he(e.$slots, "default")],
      2
    )
  );
}
const Bm = ie(Am, [["render", Lm]]),
  Ts = ({ blockElements: e, elementPositionKey: a }) =>
    e?.length ? Math.max(...e.map((t) => t[a].top + t[a].height)) : 0,
  Rm = [tu, au],
  $m = ({ lowestElementBottom: e, sectionMinHeight: a }) => {
    const n = e >= a ? 0 : a - e;
    return e ? `${n}px` : "1fr";
  },
  vr = ({ blockElementsWithPosition: e }) => {
    try {
      const a = e.flatMap(({ position: n }) => [n.top, n.height + n.top]);
      return [...new Set([0, ...a])].sort((n, r) => n - r);
    } catch (a) {
      console.error(a);
    }
  },
  Ao = ({
    rowTopsUniqueSorted: e,
    columnsLeftUniqueSorted: a,
    elementPosition: t,
  }) => {
    const { top: n, left: r, width: i, height: o } = t,
      s = e.indexOf(n) + 1,
      l = e.indexOf(n + o) + 1,
      d = a.indexOf(r) + 1,
      p = a.indexOf(r + i) + 1;
    return { rowStart: s, rowEnd: l, columnStart: d, columnEnd: p };
  },
  yr = ({ blockElementsWithPosition: e, blockWidth: a }) => {
    const t = e.flatMap(({ position: r }) => [r.left, r.width + r.left]);
    return [...new Set([0, ...t, a])].sort((r, i) => r - i);
  },
  Un = ({ blockElements: e, elementPositionKey: a }) =>
    e.map((t) => ({ ...t, position: t[a] })),
  Ps = ({
    blockElements: e,
    elementPositionKey: a,
    buildResponsiveGrid: t,
  }) => {
    const n = a === fa ? pu : wa,
      r = Un({ blockElements: e, elementPositionKey: a });
    return yr({ blockElementsWithPosition: r, blockWidth: n })
      .map((l, d, p) => (d === 0 ? l : l - p[d - 1]))
      .filter((l) => l !== 0)
      .map((l) => (t ? `${(l / n) * 100}%` : `${l}px`))
      .join(" ");
  },
  Nm = ({ gridRows: e }) => e.filter((a) => a !== 0),
  xm = ({ gridRows: e }) => e.map((a) => `${a}px`),
  Hm = ({ gridRows: e }) => e.map((a) => `minmax(${a}px, auto)`),
  Um = ({ gridRows: e, responsiveRows: a, isMobile: t }) =>
    e.map((n, r) =>
      a.includes(r + 1) ? "auto" : `${(n * 100) / (t ? da : wa)}vw`
    ),
  Qr = ({ gridRows: e, lastRowHeight: a }) => `${e.join(" ")} ${a}`,
  nr = ({
    blockElements: e,
    elementPositionKey: a,
    buildResponsiveGrid: t,
    responsiveRows: n,
    lowestElementBottom: r,
    sectionMinHeight: i,
  }) => {
    const o = a === fa,
      s = Un({ blockElements: e, elementPositionKey: a }),
      d = vr({ blockElementsWithPosition: s }).map((y, f, _) =>
        f === 0 ? y : y - _[f - 1]
      ),
      p = $m({ lowestElementBottom: r, sectionMinHeight: i }),
      u = Nm({ gridRows: d });
    if (!t) {
      const y = xm({ gridRows: u });
      return Qr({ gridRows: y, lastRowHeight: p });
    }
    if (!n) {
      const y = Hm({ gridRows: u });
      return Qr({ gridRows: y, lastRowHeight: p });
    }
    const g = Um({ gridRows: u, responsiveRows: n, isMobile: o });
    return Qr({ gridRows: g, lastRowHeight: p });
  },
  Is = ({ blockElements: e, elementPositionKey: a }) => {
    const t = Un({ blockElements: e, elementPositionKey: a }),
      n = vr({ blockElementsWithPosition: t }),
      r = yr({ blockElementsWithPosition: t, blockWidth: a === fa ? pu : wa });
    return e
      .filter((i) => !Rm.includes(i.type))
      .reduce((i, o) => {
        const { rowEnd: s, rowStart: l } = Ao({
            rowTopsUniqueSorted: n,
            columnsLeftUniqueSorted: r,
            elementPosition: o[a],
          }),
          d = s > l ? s - l : 1,
          p = [...new Array(d).keys()].map((u, g) => l + g);
        return i.some((u) => p.includes(u)) ? i : [...i, s - 1];
      }, []);
  },
  Vm = (e, a) => {
    const t = Un({ blockElements: e, elementPositionKey: Za }),
      n = vr({ blockElementsWithPosition: t }),
      r = yr({ blockElementsWithPosition: t, blockWidth: wa }),
      i = Un({ blockElements: e, elementPositionKey: fa }),
      o = vr({ blockElementsWithPosition: i }),
      s = yr({ blockElementsWithPosition: i, blockWidth: wa });
    return e.map((l) => {
      const {
          rowStart: d,
          rowEnd: p,
          columnStart: u,
          columnEnd: g,
        } = Ao({
          rowTopsUniqueSorted: n,
          columnsLeftUniqueSorted: r,
          elementPosition: l.desktop,
        }),
        {
          rowStart: y,
          rowEnd: f,
          columnStart: _,
          columnEnd: S,
        } = Ao({
          rowTopsUniqueSorted: o,
          columnsLeftUniqueSorted: s,
          elementPosition: l.mobile,
        });
      return {
        ...l,
        settings: {
          ...l.settings,
          styles: {
            ...(l.settings?.styles || {}),
            "z-index": a.indexOf(l.elementId) + 1,
            "grid-row": `${d}/${p}`,
            "grid-column": `${u}/${g}`,
            "m-grid-row": `${y}/${f}`,
            "m-grid-column": `${_}/${S}`,
          },
        },
      };
    });
  },
  Es = ({
    blockData: e,
    siteElements: a,
    shouldBuildResponsive: t = !0,
  } = {}) => {
    const n = A(t),
      r = c(() =>
        e.value.components.map((P) => ({ ...a.value[P], elementId: P }))
      ),
      i = c(() =>
        r?.value?.length
          ? Ts({ blockElements: r.value, elementPositionKey: fa })
          : null
      ),
      o = c(() =>
        r?.value?.length
          ? Ts({ blockElements: r.value, elementPositionKey: Za })
          : null
      ),
      s = c(() =>
        e.value.mobile?.minHeight && i.value
          ? "auto"
          : `${e.value.mobile?.minHeight || Cs}px`
      ),
      l = c(() =>
        e.value.desktop?.minHeight && o.value
          ? "auto"
          : `${e.value.desktop?.minHeight}px`
      ),
      d = c(() => e.value.components.some((P) => !a.value[P].mobile)),
      p = c(() =>
        nr({
          blockElements: r.value,
          elementPositionKey: Za,
          buildResponsiveGrid: n.value,
        })
      ),
      u = c(() =>
        Ps({
          blockElements: r.value,
          elementPositionKey: Za,
          buildResponsiveGrid: n.value,
        })
      ),
      g = c(() =>
        Ps({
          blockElements: r.value,
          elementPositionKey: fa,
          buildResponsiveGrid: n.value,
        })
      ),
      y = c(() => Is({ blockElements: r.value, elementPositionKey: fa })),
      f = c(() =>
        nr({
          blockElements: r.value,
          elementPositionKey: fa,
          buildResponsiveGrid: n.value,
          responsiveRows: y.value,
          lowestElementBottom: i.value,
          sectionMinHeight: e.value.mobile?.minHeight,
        })
      ),
      _ = c(() =>
        nr({
          blockElements: r.value,
          elementPositionKey: fa,
          buildResponsiveGrid: n.value,
        })
      ),
      S = c(() => Is({ blockElements: r.value, elementPositionKey: Za })),
      w = c(() =>
        nr({
          blockElements: r.value,
          elementPositionKey: Za,
          buildResponsiveGrid: n.value,
          responsiveRows: S.value,
          lowestElementBottom: o.value,
          sectionMinHeight: e.value.desktop?.minHeight,
        })
      ),
      b = c(() => Vm(r.value, e.value.zindexes)),
      D = c(() => ({
        "--m-grid-template-rows": f.value,
        "--t-grid-template-rows": _.value,
        "--small-desktop-grid-template-rows": w.value,
        "--grid-template-rows": p.value,
        "--m-grid-template-columns": g.value,
        "--grid-template-columns": u.value,
        "--m-block-min-height": s.value,
        "--t-block-min-height": `${e.value.mobile?.minHeight || Cs}px`,
        "--small-desktop-block-min-height": l.value,
        "--block-min-height": `${e.value.desktop.minHeight}px`,
      }));
    return {
      blockElements: r,
      layoutElements: b,
      buildResponsiveGrid: n,
      layoutCSSVars: D,
      isMobileLegacy: d,
    };
  },
  Fm = se({
    name: "LayoutElementWrapper",
    props: {
      elementData: { type: Object, required: !0 },
      isForcedOnTop: { type: Boolean, default: !1 },
      isMobileLegacy: { type: Boolean, default: !1 },
      isMobileView: { type: Boolean, default: !1 },
    },
    computed: {
      settings() {
        return this.elementData.settings;
      },
      styles() {
        return this.settings.styles;
      },
      innerBackgroundValue() {
        const { innerBackground: e } = this.elementData;
        if (!e) return {};
        const a = e[e.current];
        return e.current !== "image"
          ? { "--gridItemInnerBackground": a }
          : {
              "--gridItemInnerBackground": `url(${a})`,
              "--gridItemInnerBackgroundOverlayOpacity":
                "overlay-opacity" in e ? e["overlay-opacity"] : null,
            };
      },
      isHiddenDesktop() {
        return this.elementData.desktop.isHidden;
      },
      isHiddenMobile() {
        return this.elementData.mobile.isHidden;
      },
      computedStyles() {
        return {
          ...ta(this.styles),
          ...this.innerBackgroundValue,
          ...(this.isHiddenDesktop &&
            !this.isMobileView && { "--hidden-element-z-index": 0 }),
          ...(this.isHiddenMobile &&
            this.isMobileView && { "--m-hidden-element-z-index": 0 }),
          ...(this.isForcedOnTop && { "--z-index": td }),
        };
      },
    },
  });
function Ym(e, a, t, n, r, i) {
  return (
    m(),
    v(
      "div",
      {
        class: ee([
          "layout-element",
          {
            "layout-element--legacy": e.isMobileLegacy,
            "layout-element--layout": !e.isMobileLegacy,
          },
        ]),
        style: Re(e.computedStyles),
      },
      [he(e.$slots, "default")],
      6
    )
  );
}
const qm = ie(Fm, [["render", Ym]]),
  jm = se({
    __name: "GridButton",
    props: {
      tagName: { default: "a" },
      href: { default: null },
      target: { default: null },
      rel: { default: null },
      type: { default: "primary" },
      buttonType: { default: null },
      content: { default: "" },
      isDisabled: { type: Boolean, default: !1 },
      isLoading: { type: Boolean, default: !1 },
      fontSizeMobile: { default: null },
      fontSizeDesktop: { default: null },
      fontFamily: { default: null },
      fontWeight: { default: null },
      borderWidth: { default: null },
      borderRadius: { default: null },
      backgroundColor: { default: null },
      fontColor: { default: null },
      borderColor: { default: null },
      backgroundColorHover: { default: null },
      fontColorHover: { default: null },
      borderColorHover: { default: null },
      mobileElementWidth: { default: 0 },
      mobileElementHeight: { default: 0 },
      isInBuilder: { type: Boolean, default: !1 },
    },
    emits: ["click", "drag", "dragstart"],
    setup(e, { expose: a }) {
      a();
      const t = e,
        n = c(() => `${(t.mobileElementWidth * 100) / da}vw`),
        r = c(() => `${(t.mobileElementHeight * 100) / da}vw`),
        i = c(() => ({
          "--font-size-mobile": t.fontSizeMobile
            ? `${t.fontSizeMobile}px`
            : null,
          "--font-size-desktop": t.fontSizeDesktop
            ? `${t.fontSizeDesktop}px`
            : null,
          "--font-family": t.fontFamily,
          "--font-weight": t.fontWeight,
          "--border-radius":
            t.borderRadius === 0 || t.borderRadius
              ? `${t.borderRadius}px`
              : null,
          "--border-width":
            t.borderWidth === 0 || t.borderWidth ? `${t.borderWidth}px` : "0px",
          "--background-color": t.backgroundColor,
          "--font-color": t.fontColor,
          "--border-color": t.borderColor || "rgb(26, 26, 26)",
          "--background-color-hover": t.backgroundColorHover,
          "--font-color-hover": t.fontColorHover,
          "--border-color-hover": t.borderColorHover,
          "--m-height": t.isInBuilder ? "100%" : r.value,
          "--m-width": t.isInBuilder ? "100%" : n.value,
        })),
        o = c(() => ({
          "grid-button--empty": !t.content,
          [`grid-button--${t.type}`]: t.type,
          loading: t.isLoading,
        })),
        s = {
          props: t,
          mobileWidthCSSVar: n,
          mobileHeightCSSVar: r,
          buttonCSSVars: i,
          computedClass: o,
        };
      return (
        Object.defineProperty(s, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  });
function Wm(e, a, t, n, r, i) {
  return (
    m(),
    G(
      gn(t.tagName),
      {
        type: t.buttonType,
        name: t.buttonType,
        href: t.href,
        disabled: t.isDisabled,
        target: t.target,
        rel: t.rel,
        class: ee(["grid-button", n.computedClass]),
        "aria-hidden": t.isLoading,
        style: Re(n.buttonCSSVars),
        onClick: a[0] || (a[0] = (o) => e.$emit("click", o)),
        onDrag: a[1] || (a[1] = (o) => e.$emit("drag", o)),
        onDragstart: a[2] || (a[2] = (o) => e.$emit("dragstart", o)),
      },
      { default: _e(() => [Ne(J(t.content), 1)]), _: 1 },
      40,
      [
        "type",
        "name",
        "href",
        "disabled",
        "target",
        "rel",
        "class",
        "aria-hidden",
        "style",
      ]
    )
  );
}
const hn = ie(jm, [
    ["render", Wm],
    ["__scopeId", "data-v-4a176f12"],
  ]),
  ci = (e, { href: a } = {}) => ({
    href: a,
    type: c(() => e.data.settings?.type),
    fontSizeMobile: c(() => e.data.mobile?.fontSize),
    fontSizeDesktop: c(() => e.data.desktop?.fontSize),
    fontFamily: c(() => e.data.fontFamily),
    fontWeight: c(() => e.data.fontWeight),
    borderWidth: c(() => e.data.borderWidth),
    borderRadius: c(() => e.data.borderRadius),
    backgroundColor: c(() => e.data.backgroundColor),
    fontColor: c(() => e.data.fontColor),
    borderColor: c(() => e.data.borderColor),
    backgroundColorHover: c(() => e.data.backgroundColorHover),
    fontColorHover: c(() => e.data.fontColorHover),
    borderColorHover: c(() => e.data.borderColorHover),
    buttonType: c(() => (e.data.settings.isFormButton ? "submit" : null)),
    tagName: c(() => (e.data.settings.isFormButton ? "button" : "a")),
    target: c(() => e.data.target),
    rel: c(() => e.data.rel),
    content: c(() => e.data.content),
    mobileElementWidth: c(() => e.data.mobile.width),
    mobileElementHeight: c(() => e.data.mobile.height),
  }),
  Gm = se({
    name: "GridButtonProviderUser",
    components: { GridButton: hn },
    props: {
      data: { type: Object, required: !0 },
      currentLocale: { type: String, required: !0 },
      mobileElementWidth: { type: Number, default: null },
      mobileElementHeight: { type: Number, default: null },
    },
    setup(e) {
      const { getButtonHref: a } = rt(),
        {
          tagName: t,
          href: n,
          target: r,
          rel: i,
          type: o,
          buttonType: s,
          content: l,
          fontSizeMobile: d,
          fontSizeDesktop: p,
          fontFamily: u,
          fontWeight: g,
          borderWidth: y,
          borderRadius: f,
          backgroundColor: _,
          fontColor: S,
          borderColor: w,
          backgroundColorHover: b,
          fontColorHover: D,
          borderColorHover: P,
        } = ci(e, {
          href: c(() =>
            a({
              isFormButton: e.data.settings.isFormButton,
              linkedPageId: e.data.linkedPageId,
              linkType: e.data.linkType,
              href: e.data.href,
            })
          ),
        });
      return {
        tagName: t,
        href: n,
        target: r,
        rel: i,
        type: o,
        buttonType: s,
        content: l,
        fontSizeMobile: d,
        fontSizeDesktop: p,
        fontFamily: u,
        fontWeight: g,
        borderWidth: y,
        borderRadius: f,
        backgroundColor: _,
        fontColor: S,
        borderColor: w,
        backgroundColorHover: b,
        fontColorHover: D,
        borderColorHover: P,
      };
    },
  });
function zm(e, a, t, n, r, i) {
  const o = Ce("GridButton");
  return (
    m(),
    G(
      o,
      {
        "tag-name": e.tagName,
        href: e.href,
        target: e.target,
        rel: e.rel,
        type: e.type,
        "button-type": e.buttonType,
        content: e.content,
        "font-size-mobile": e.fontSizeMobile,
        "font-size-desktop": e.fontSizeDesktop,
        "font-family": e.fontFamily,
        "font-weight": e.fontWeight,
        "border-width": e.borderWidth,
        "border-radius": e.borderRadius,
        "background-color": e.backgroundColor,
        "font-color": e.fontColor,
        "border-color": e.borderColor,
        "background-color-hover": e.backgroundColorHover,
        "font-color-hover": e.fontColorHover,
        "border-color-hover": e.borderColorHover,
        "mobile-element-width": e.mobileElementWidth,
        "mobile-element-height": e.mobileElementHeight,
      },
      null,
      8,
      [
        "tag-name",
        "href",
        "target",
        "rel",
        "type",
        "button-type",
        "content",
        "font-size-mobile",
        "font-size-desktop",
        "font-family",
        "font-weight",
        "border-width",
        "border-radius",
        "background-color",
        "font-color",
        "border-color",
        "background-color-hover",
        "font-color-hover",
        "border-color-hover",
        "mobile-element-width",
        "mobile-element-height",
      ]
    )
  );
}
const Km = ie(Gm, [["render", zm]]),
  Qm = (e, a) => {
    const t = c(() => a.ecommerce?.products),
      n = c(() => e.data.settings?.productId),
      r = c(() => e.data.settings?.productVariantId);
    return { storeProducts: t, productId: n, productVariantId: r };
  },
  Zr = A(""),
  Ds = A({}),
  qt = () => ({
    openEcommerceModal: (n) => {
      Zr.value = n;
    },
    closeEcommerceModal: () => {
      Zr.value = null;
    },
    openEcommerceModalName: Zr,
    productPreviewData: Ds,
    setProductPreviewData: (n) => {
      Ds.value = n;
    },
  }),
  di = "https://cdn.zyrosite.com/cdn-builder-placeholders",
  Vt = `${di}/ecommerce-product`,
  at = `${di}/instagram`,
  Zm = `${di}/password-page`,
  ha = {
    id: -1,
    title: "Product name",
    subtitle: null,
    description: `This is a sample product description. You can use it to describe your product,		from its size, weight, and color to other characteristics like material, and so on.
		
Make sure you highlight the best qualities and the most important functions		that the product has. Make your customers want it and tell them how the product		could help make their life easier or simply more beautiful. After you have added		your product description in the store settings, it will appear here automatically`,
    images: [],
    options: [],
    product_collections: [],
    ribbon_text: null,
    site_product_selection: null,
    type: { value: "physical" },
    thumbnail: null,
    variants: [
      {
        id: "",
        manage_inventory: !1,
        prices: [
          {
            amount: 0,
            currency_code: "USD",
            sale_amount: null,
            currency: {
              code: "USD",
              decimal_digits: 2,
              template: "$$1",
              name: "US Dollar",
              symbol: "$",
              symbol_native: "$",
              name_plural: "US dollars",
              rounding: 0,
              min_amount: 0,
            },
          },
        ],
        options: [],
      },
    ],
    purchasable: !0,
  };
(({ ...ha, images: `${Vt}`, thumbnail: `${Vt}` }),
{ ...ha, images: `${Vt}`, thumbnail: `${Vt}` }),
  { ...ha, images: `${Vt}`, thumbnail: `${Vt}` },
  { ...ha, images: `${Vt}`, thumbnail: `${Vt}` },
  { ...ha, images: `${Vt}`, thumbnail: `${Vt}` },
  { ...ha, images: `${Vt}`, thumbnail: `${Vt}` };
const Lo = "donation",
  jt = "booking",
  Bo = "hours",
  Xm = ["BlockEcommerceProduct", "BlockEcommerceProductList"],
  Ms = {
    INSUFFICIENT_INVENTORY: "insufficient_inventory",
    BOOKING_UNAVAILABLE: "booking_slot_not_available",
  },
  Jm = "demo_01G0E9P2R0CFTNBWEEFCEV8EG5",
  Ro = "shopping-cart-items",
  ep = 864e5,
  gu = "site_product_selection",
  mi = "lowest_price_first",
  Ja = 160,
  Qn = "https://api-ecommerce.zyro.com/store",
  tp = async (e, a) => {
    const t = a.map((i) => `ids[]=${i}`).join("&");
    return (await (await fetch(`${Qn}/${e}/products?${t}`)).json()).products;
  },
  ap = async (e, a) => {
    const t = a.map((i) => `product_ids[]=${i}`).join("&");
    return (
      await (
        await fetch(`${Qn}/${e}/variants?fields=inventory_quantity&${t}`)
      ).json()
    ).variants;
  },
  np = async ({
    items: e,
    successUrl: a,
    cancelUrl: t,
    locale: n,
    storeId: r,
  }) =>
    fetch(`${Qn}/${r}/checkout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "omit",
      body: JSON.stringify({
        items: e,
        successUrl: a,
        cancelUrl: t,
        locale: n,
      }),
    }).then(async (i) => {
      const o = await i.json();
      if (i.ok) return o.url;
      throw o;
    }),
  rp = async (e, a) =>
    fetch(`${Qn}/time-slots`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "omit",
      body: JSON.stringify({
        booking_event_id: e,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        date: a,
      }),
    }).then(async (t) => {
      const n = await t.json();
      if (t.ok) return n.slots;
      throw n;
    }),
  op = async ({ bookingId: e, fromDate: a, toDate: t }) =>
    fetch(`${Qn}/availability`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "omit",
      body: JSON.stringify({
        booking_event_id: e,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        from_date: a,
        to_date: t,
      }),
    }).then(async (n) => {
      const r = await n.json();
      if (n.ok) return r.disabled_dates;
      throw r;
    }),
  on = (e) => {
    const { openEcommerceModal: a } = qt(),
      { meta: t, ecommerceShoppingCart: n } = rt();
    let r = "";
    const i = A("");
    Oe(() => {
      (r = t.value?.ecommerceStoreId),
        (i.value = `${window.location.origin}${window.location.pathname}`);
    });
    function o(d) {
      const p = d.some((y) => y.type.value === Lo),
        u = d.some((y) => y.type.value === jt);
      let g = "";
      return (
        u ? (g = `&product=${jt}`) : p && (g = `&product=${Lo}`),
        `${i.value}?open-modal=EcommerceCheckoutSuccess${g}`
      );
    }
    async function s(d) {
      const p = d.reduce(
          (y, f) =>
            y.find((S) => S.variant_id === f.variants[0].id)
              ? y.map((S) =>
                  S.variant_id === f.variants[0].id
                    ? { variant_id: S.variant_id, quantity: S.quantity + 1 }
                    : S
                )
              : [
                  ...y,
                  {
                    variant_id: f.variants[0].id,
                    quantity: 1,
                    time_slot: f.variants[0].booking_event?.time_slot,
                    time_zone: f.variants[0].booking_event?.time_zone,
                  },
                ],
          []
        ),
        u = n.value?.lang || "en";
      let g = await np({
        items: p,
        cancelUrl: i.value,
        successUrl: o(d),
        locale: u,
        storeId: r,
      });
      return (g = new URL(g)), g.searchParams.set("lang", u), g.toString();
    }
    async function l(d) {
      if (!r) {
        a("EcommerceCheckoutFailed");
        return;
      }
      try {
        const p = await s(d);
        window.location.assign(p);
      } catch (p) {
        p.code === Ms.INSUFFICIENT_INVENTORY
          ? a("EcommerceOutOfStock")
          : p.code === Ms.BOOKING_UNAVAILABLE
          ? a("EcommerceBookingUnavailable")
          : a("EcommerceCheckoutFailed");
      }
    }
    return { initiateCheckout: l, storeId: r };
  },
  Os = (e) => e.ecommerceStoreId ?? e.demoEcommerceStoreId ?? Jm,
  As = () => {
    const e = window.localStorage.getItem(Ro);
    if (!e) return [];
    const a = JSON.parse(e);
    return a.payload.length
      ? Date.now() > a.expiry
        ? (window.localStorage.removeItem(Ro), [])
        : a.payload
      : [];
  },
  Ga = A([]),
  _n = A([]),
  wn = A([]),
  Ls = A(null),
  Bs = A(!1),
  Rs = A(!1),
  $s = A(!1),
  Ns = A(!1),
  ip = A(!1),
  Wt = () => {
    const { meta: e, pages: a } = rt(),
      t = c(() => e.value[ad] === nd),
      n = c(() => !!e.value?.ecommerceStoreId),
      r = c(() =>
        _n.value.reduce(
          (b, D) =>
            b.find((O) => O.product.variants[0].id === D.variants[0].id)
              ? b.map((O) =>
                  O.product.variants[0].id === D.variants[0].id
                    ? { ...O, quantity: O.quantity + 1 }
                    : O
                )
              : [...b, { product: D, quantity: 1 }],
          []
        )
      ),
      i = (b, D) => {
        if (_n.value.length >= Ja) return !1;
        const P = Ga.value.find((N) => N.id === b),
          O = P?.variants.find((N) => N.id === D);
        if (!P || !O) return !1;
        if (O.manage_inventory) {
          const x =
              r.value.find(
                (W) =>
                  W.product.id === b &&
                  W.product.variants.some((T) => T.id === O.id)
              )?.quantity || 0,
            X = wn.value.find((W) => W.id === D)?.inventory_quantity;
          return x < X;
        }
        return !0;
      },
      o = c(() => Object.values(a.value).filter((b) => b.type === nu)),
      s = (b) => {
        $s.value = b;
      },
      l = (b) => {
        Ns.value = b;
      },
      d = (b) => {
        Rs.value = b;
      },
      p = (b) => {
        Ga.value = b;
      },
      u = (b) => {
        Bs.value = b;
      },
      g = (b) => {
        _n.value = b || [];
        const D = { payload: b, expiry: Date.now() + ep };
        window.localStorage.setItem(Ro, JSON.stringify(D));
      },
      y = (b) => {
        Ls.value = b;
      },
      f = (b) => {
        wn.value = b;
      },
      _ = ({ cartItems: b }) =>
        (b || _n.value).reduce((D, P) => {
          const O = Ga.value.find((R) => R.id === P.id),
            N = O?.variants.find((R) => P.variants.some((H) => R.id === H.id)),
            x = D.reduce(
              (R, H) => (H.variants.some((q) => q.id === N?.id) ? R + 1 : R),
              0
            ),
            X = wn.value.find((R) => R.id === N?.id)?.inventory_quantity,
            W = !N?.manage_inventory || x < X,
            T =
              O?.type.value === jt
                ? {
                    ...P.variants[0].booking_event,
                    time_slot: P.variants[0].booking_event.time_slot,
                    date: P.variants[0].booking_event.date,
                  }
                : null;
          return O && N && W
            ? [...D, { ...O, variants: [{ ...N, booking_event: T }] }]
            : D;
        }, []),
      S = async (b) => {
        const D = Os(e.value);
        if (!D) return;
        try {
          const O = await ap(D, b),
            N = [...wn.value, ...O];
          f(N);
        } catch (O) {
          console.error(O);
        }
        const P = await _({ cartItems: As() });
        g(P);
      };
    return {
      products: Ga,
      shoppingCartItems: _n,
      selectedBookingProductId: Ls,
      variantsQuantity: wn,
      isShoppingCartOpen: Bs,
      isCheckoutLoading: Rs,
      isLoading: $s,
      isLoaded: Ns,
      isProductPageLoaded: ip,
      isStoreTypeZyro: t,
      isEcommerceStoreCreated: n,
      quantifiedCartItemsList: r,
      canAddToCart: i,
      productPages: o,
      setIsLoading: s,
      setIsLoaded: l,
      setIsCheckoutLoading: d,
      setStoreProducts: p,
      setShoppingCartOpen: u,
      setShoppingCartItems: g,
      setSelectedBookingId: y,
      setVariantsQuantity: f,
      fetchProducts: async (b) => {
        const D = Os(e.value);
        if (!D) return;
        const N = [...As().map((x) => x.id), ...b].reduce(
          (x, X) => (Ga.value.some((W) => W.id === X) ? x : [...x, X]),
          []
        );
        if (N.length) {
          l(!1), s(!0);
          try {
            const X = (await tp(D, N)).reduce(
              (W, T) => (W.some((H) => H.id === T.id) ? W : [...W, T]),
              [...Ga.value]
            );
            p(X), await S(N);
          } catch (x) {
            console.error(x);
          } finally {
            s(!1), l(!0);
          }
        }
      },
      updateVariantsQuantity: S,
      refreshCartItems: _,
    };
  },
  sp = se({
    name: "GridEcommerceButtonProviderUser",
    components: { GridButton: hn },
    props: {
      data: { type: Object, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      mobileElementWidth: { type: Number, default: null },
      mobileElementHeight: { type: Number, default: null },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e) {
      const { getButtonHref: a } = rt(),
        {
          canAddToCart: t,
          isShoppingCartOpen: n,
          products: r,
          shoppingCartItems: i,
          setShoppingCartOpen: o,
          setShoppingCartItems: s,
          setSelectedBookingId: l,
        } = Wt(),
        { initiateCheckout: d } = on(),
        { openEcommerceModal: p } = qt(),
        {
          content: u,
          type: g,
          fontSizeMobile: y,
          fontSizeDesktop: f,
          fontFamily: _,
          fontWeight: S,
          borderRadius: w,
          backgroundColor: b,
          fontColor: D,
          borderColor: P,
          borderWidth: O,
          backgroundColorHover: N,
          fontColorHover: x,
          borderColorHover: X,
        } = ci(e, {
          href: c(() =>
            a({
              isFormButton: e.data.settings.isFormButton,
              linkedPageId: e.data.linkedPageId,
              linkType: e.data.linkType,
              href: e.data.href,
            })
          ),
        }),
        {
          productId: W,
          productVariantId: T,
          storeProducts: R,
        } = Qm(e, { ecommerce: { products: r.value } }),
        H = c(() => r.value.find((U) => U.id === W.value)),
        q = c(() => H.value?.type.value === jt),
        B = c(() => q.value && !!i.value?.some((U) => U.id === W.value)),
        I = c(() => B.value || !t(W.value, T.value));
      return {
        openEcommerceModal: p,
        productId: W,
        productVariantId: T,
        content: u,
        type: g,
        fontSizeMobile: y,
        fontSizeDesktop: f,
        fontFamily: _,
        fontWeight: S,
        borderRadius: w,
        borderWidth: O,
        backgroundColor: b,
        fontColor: D,
        borderColor: P,
        backgroundColorHover: N,
        fontColorHover: x,
        borderColorHover: X,
        initiateCheckout: d,
        shoppingCartItems: i,
        storeProducts: R,
        isAddToCartDisabled: I,
        product: H,
        canAddToCart: t,
        isShoppingCartOpen: n,
        setShoppingCartOpen: o,
        setShoppingCartItems: s,
        setSelectedBookingId: l,
      };
    },
    data() {
      return { isLoading: !1 };
    },
    methods: {
      async handleClick() {
        if (this.product?.type.value === jt) {
          this.setSelectedBookingId(this.productId),
            this.openEcommerceModal("EcommerceBookingEventSelect");
          return;
        }
        if (Fa() || this.isInPreviewMode) {
          this.openEcommerceModal("EcommerceMessageButtonDisabled");
          return;
        }
        const e = this.product?.variants.find(
            (t) => t.id === this.productVariantId
          ),
          a = { ...this.product, variants: [e] };
        this.isCartVisible
          ? (this.setShoppingCartItems([...this.shoppingCartItems, a]),
            this.manageCartOpenState())
          : ((this.isLoading = !0),
            await this.initiateCheckout([a]).then(() => {
              this.isLoading = !1;
            }));
      },
      manageCartOpenState() {
        this.isShoppingCartOpen || this.setShoppingCartOpen(!0);
      },
    },
  });
function lp(e, a, t, n, r, i) {
  const o = Ce("GridButton"),
    s = ze("qa");
  return ue(
    (m(),
    G(
      o,
      {
        "tag-name": "button",
        content: e.content,
        type: e.type,
        "is-disabled": e.isAddToCartDisabled,
        "is-loading": e.isLoading,
        "font-size-mobile": e.fontSizeMobile,
        "font-size-desktop": e.fontSizeDesktop,
        "font-family": e.fontFamily,
        "font-weight": e.fontWeight,
        "border-radius": e.borderRadius,
        "border-width": e.borderWidth,
        "background-color": e.backgroundColor,
        "font-color": e.fontColor,
        "border-color": e.borderColor,
        "background-color-hover": e.backgroundColorHover,
        "font-color-hover": e.fontColorHover,
        "border-color-hover": e.borderColorHover,
        "mobile-element-width": e.mobileElementWidth,
        "mobile-element-height": e.mobileElementHeight,
        onClick: e.handleClick,
      },
      null,
      8,
      [
        "content",
        "type",
        "is-disabled",
        "is-loading",
        "font-size-mobile",
        "font-size-desktop",
        "font-family",
        "font-weight",
        "border-radius",
        "border-width",
        "background-color",
        "font-color",
        "border-color",
        "background-color-hover",
        "font-color-hover",
        "border-color-hover",
        "mobile-element-width",
        "mobile-element-height",
        "onClick",
      ]
    )),
    [[s, "button-ecommerce-checkout"]]
  );
}
const up = ie(sp, [["render", lp]]),
  cp = se({
    __name: "GridEmbed",
    props: {
      srcdoc: { default: "" },
      shouldRender: { type: Boolean, default: !1 },
      height: { default: null },
      id: {},
    },
    emits: ["iframe-height-updated"],
    setup(e, { expose: a, emit: t }) {
      a();
      const n = e,
        r = t,
        i = A(0),
        o = A(),
        s = c(() =>
          n.height && i.value > n.height ? i.value : n.height || i.value
        ),
        l = c(() => ({ "--height": `${s.value}px` })),
        p = {
          props: n,
          emit: r,
          observedHeight: i,
          gridEmbedIframeRef: o,
          embedHeight: s,
          computedStyles: l,
          observeGridEmbed: () => {
            const u = o.value?.contentWindow?.document.querySelector("html");
            new ResizeObserver(([{ contentRect: y }]) => {
              requestAnimationFrame(() => {
                const { height: f } = y;
                f !== i.value &&
                  ((i.value = f), r("iframe-height-updated", i.value));
              });
            }).observe(u);
          },
        };
      return (
        Object.defineProperty(p, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        p
      );
    },
  }),
  dp = ["id"],
  mp = ["srcdoc"];
function pp(e, a, t, n, r, i) {
  const o = ze("qa");
  return ue(
    (m(),
    v(
      "div",
      { id: t.id, class: "grid-embed", style: Re(n.computedStyles) },
      [
        t.shouldRender
          ? (m(),
            v(
              "iframe",
              {
                key: 0,
                ref: "gridEmbedIframeRef",
                class: "grid-embed__iframe",
                srcdoc: t.srcdoc,
                title: "custom code element",
                onLoad: n.observeGridEmbed,
              },
              null,
              40,
              mp
            ))
          : M("", !0),
      ],
      12,
      dp
    )),
    [[o, "builder-gridelement-gridembed"]]
  );
}
const gp = ie(cp, [["render", pp]]),
  hp = `
<style>
	html {
		overflow: hidden;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
 	}

 	iframe {
 		max-width: 100%;
 	}
</style>
`,
  fp = (e) => {
    const a = document.createElement("div");
    a.innerHTML = e;
    const t = [...a.children].reduce(
      (n, r) =>
        r.tagName === "STYLE"
          ? { ...n, styles: `${n.styles} ${r.outerHTML}` }
          : r.tagName === "SCRIPT"
          ? { ...n, scripts: `${n.scripts} ${r.outerHTML}` }
          : { ...n, html: `${n.html} ${r.outerHTML}` },
      { styles: hp, scripts: "", html: "" }
    );
    return `<!DOCTYPE html>
	<head>${t.styles}</head>
	<body>${t.html}${t.scripts}</body>
</html>`;
  },
  vp = "500px",
  hu = (e, a = vp) => {
    const t = A(!1),
      n = A(null);
    try {
      Oe(() => {
        n.value = new IntersectionObserver(
          ([{ isIntersecting: i }]) => {
            i && ((t.value = !0), n.value?.disconnect());
          },
          { threshold: 0, rootMargin: a }
        );
      });
      const r = ti(() => {
        if (e.value && n.value) {
          const i = e.value.$el ?? e.value;
          n.value.observe(i), r();
        }
      });
      xt(() => n.value?.disconnect());
    } catch (r) {
      console.error(r);
    }
    return { isObserved: t };
  },
  yp = se({
    components: { GridEmbed: gp },
    props: {
      data: { type: Object, default: () => ({}) },
      id: { type: String, default: null },
    },
    setup(e) {
      const a = A(null),
        { isObserved: t } = hu(a),
        n = A(null);
      return (
        Oe(() => {
          n.value = fp(e.data.content);
        }),
        { gridEmbedRef: a, isObserved: t, srcdoc: n }
      );
    },
  });
function bp(e, a, t, n, r, i) {
  const o = Ce("GridEmbed");
  return (
    m(),
    G(
      o,
      {
        id: e.id,
        ref: "gridEmbedRef",
        "should-render": e.isObserved,
        srcdoc: e.srcdoc,
        height: e.data.settings.styles.height,
      },
      null,
      8,
      ["id", "should-render", "srcdoc", "height"]
    )
  );
}
const _p = ie(yp, [["render", bp]]),
  Xr = ({ value: e = "", validation: a, validationMessages: t }) => {
    const n = [];
    return (
      a.includes("required") && !e.replace(/ /g, "") && n.push(t.required),
      e.replace(/ /g, "") &&
        (a.includes("email") && !Gd.test(e) && n.push(t.email),
        a.includes("phone") && !zd.test(e) && n.push(t.phone)),
      n
    );
  },
  wp = se({
    props: {
      modelValue: { type: String, default: "" },
      label: { type: String, default: null },
      placeholder: { type: String, default: null },
      isRequired: { type: Boolean, default: !1 },
      isRequiredAsteriskVisible: { type: Boolean, default: !0 },
      isInteractive: { type: Boolean, default: !0 },
      areErrorsShown: { type: Boolean, default: !1 },
      validationErrors: { type: Array, required: !1, default: () => [] },
      theme: { type: String, required: !0 },
      tag: {
        type: String,
        default: "input",
        validator: (e) => ["textarea", "input"].includes(e),
      },
    },
    emits: ["update:model-value"],
    data() {
      return { gridInputValue: "" };
    },
    computed: {
      computedClasses() {
        return [
          { "input__component--textarea": this.tag === "textarea" },
          { "input__component--read-only": !this.isInteractive },
          `input__component--${this.theme}`,
        ];
      },
    },
  }),
  kp = ["placeholder", "value", "readonly", "tabindex"],
  Sp = ["placeholder", "value", "readonly", "tabindex"],
  Cp = { key: 2 };
function Tp(e, a, t, n, r, i) {
  return (
    m(),
    v(
      "div",
      { class: ee(["input", `input--${e.theme}`]) },
      [
        E(
          "label",
          { class: ee(["input__label", `input__label--${e.theme}`]) },
          J(e.label) +
            J(e.isRequired && e.isRequiredAsteriskVisible ? "*" : ""),
          3
        ),
        e.tag === "input"
          ? (m(),
            v(
              "input",
              {
                key: 0,
                placeholder: e.placeholder,
                type: "text",
                class: ee(["input__component", e.computedClasses]),
                value: e.modelValue,
                readonly: !e.isInteractive,
                tabindex: e.isInteractive ? 0 : -1,
                onInput:
                  a[0] ||
                  (a[0] = (o) => e.$emit("update:model-value", o.target.value)),
                onClick: a[1] || (a[1] = Me(() => {}, ["prevent"])),
                onDragstart: a[2] || (a[2] = Me(() => {}, ["prevent"])),
                onDrag: a[3] || (a[3] = Me(() => {}, ["prevent"])),
              },
              null,
              42,
              kp
            ))
          : M("", !0),
        e.tag === "textarea"
          ? (m(),
            v(
              "textarea",
              {
                key: 1,
                placeholder: e.placeholder,
                type: "text",
                class: ee(["input__component", e.computedClasses]),
                value: e.modelValue,
                readonly: !e.isInteractive,
                tabindex: e.isInteractive ? 0 : -1,
                onInput:
                  a[4] ||
                  (a[4] = (o) => e.$emit("update:model-value", o.target.value)),
                onClick: a[5] || (a[5] = Me(() => {}, ["prevent"])),
                onDragstart: a[6] || (a[6] = Me(() => {}, ["prevent"])),
                onDrag: a[7] || (a[7] = Me(() => {}, ["prevent"])),
              },
              null,
              42,
              Sp
            ))
          : M("", !0),
        e.validationErrors.length && e.areErrorsShown
          ? (m(),
            v("div", Cp, [
              (m(!0),
              v(
                ge,
                null,
                Se(
                  e.validationErrors,
                  (o) => (
                    m(),
                    v(
                      "p",
                      { key: o, class: "input__error-message text-body-2" },
                      J(o),
                      1
                    )
                  )
                ),
                128
              )),
            ]))
          : M("", !0),
      ],
      2
    )
  );
}
const Pp = ie(wp, [
    ["render", Tp],
    ["__scopeId", "data-v-ee2fb8ad"],
  ]),
  Ip = se({
    name: "GridSelectInput",
    props: {
      name: { type: String, required: !0 },
      id: { type: String, required: !0 },
      tag: { type: String, required: !0 },
      selectedOptions: { type: Array, required: !0 },
      isInteractive: { type: Boolean, default: !0 },
      theme: { type: String, required: !0 },
      isSelected: { type: Boolean, required: !0 },
    },
    emits: ["select-option", "remove-selection", "add-selection"],
    computed: {
      labelClasses() {
        return [
          { "input__label--read-only": !this.isInteractive },
          `select-input--${this.theme}`,
        ];
      },
      inputClasses() {
        return [{ "input__component--read-only": !this.isInteractive }];
      },
    },
    methods: {
      selectOption() {
        if (!this.isInteractive) return;
        const e = { id: this.id, value: this.name };
        this.tag !== "checkbox"
          ? this.$emit("select-option", e)
          : this.isSelected
          ? this.$emit("remove-selection", e)
          : this.$emit("add-selection", e);
      },
    },
  }),
  Ep = ["for"],
  Dp = ["id", "type", "checked", "tabindex"];
function Mp(e, a, t, n, r, i) {
  return (
    m(),
    v(
      "label",
      { class: ee(["select-input", e.labelClasses]), for: e.id },
      [
        (m(),
        v(
          "input",
          {
            id: e.id,
            key: e.isSelected,
            type: e.tag,
            class: ee(["select-input__input", e.inputClasses]),
            checked: e.isSelected,
            tabindex: e.isInteractive ? 0 : -1,
            onInput:
              a[0] ||
              (a[0] = Me(
                (...o) => e.selectOption && e.selectOption(...o),
                ["stop"]
              )),
            onDragstart: a[1] || (a[1] = Me(() => {}, ["prevent"])),
            onDrag: a[2] || (a[2] = Me(() => {}, ["prevent"])),
          },
          null,
          42,
          Dp
        )),
        Ne(" " + J(e.name), 1),
      ],
      10,
      Ep
    )
  );
}
const Op = ie(Ip, [
    ["render", Mp],
    ["__scopeId", "data-v-3b89e969"],
  ]),
  Ap = se({
    name: "GridSelectInputsWrapper",
    components: { GridSelectInput: Op },
    props: {
      label: { type: String, default: null },
      isRequired: { type: Boolean, default: !1 },
      isTextArea: { type: Boolean, default: !1 },
      isInteractive: { type: Boolean, default: !0 },
      areErrorsShown: { type: Boolean, default: !1 },
      validationErrors: { type: Array, required: !1, default: () => [] },
      theme: { type: String, required: !0 },
      tag: {
        type: String,
        required: !0,
        validator: (e) => ["radio", "checkbox"].includes(e),
      },
      options: { type: Array, required: !0 },
    },
    emits: ["input"],
    data() {
      return { selectedOptions: [] };
    },
    watch: {
      selectedOptions() {
        const e = this.selectedOptions.map(({ value: a }) => a).toString();
        this.$emit("input", e);
      },
    },
    methods: {
      isSelected(e) {
        return this.selectedOptions.some(({ id: a }) => a === e);
      },
      removeSelection(e) {
        const a = this.selectedOptions.filter((t) => t.id !== e.id);
        this.selectedOptions = a;
      },
      addSelection(e) {
        this.selectedOptions = [...this.selectedOptions, e];
      },
      selectOption(e) {
        this.selectedOptions = [e];
      },
    },
  }),
  Lp = { key: 0 };
function Bp(e, a, t, n, r, i) {
  const o = Ce("GridSelectInput");
  return (
    m(),
    v(
      "div",
      { class: ee(["input", `input--${e.theme}`]) },
      [
        E(
          "label",
          {
            class: ee([
              "input__label input__label--read-only",
              [`input__label--${e.theme}`],
            ]),
          },
          J(e.label) + J(e.isRequired ? "*" : ""),
          3
        ),
        (m(!0),
        v(
          ge,
          null,
          Se(
            e.options,
            (s) => (
              m(),
              v("div", { key: s.id, class: "input__options" }, [
                Ee(
                  o,
                  {
                    id: s.id,
                    name: s.value,
                    tag: e.tag,
                    "is-selected": e.isSelected(s.id),
                    theme: e.theme,
                    "is-interactive": e.isInteractive,
                    "selected-options": e.selectedOptions,
                    onRemoveSelection: e.removeSelection,
                    onAddSelection: e.addSelection,
                    onSelectOption: e.selectOption,
                  },
                  null,
                  8,
                  [
                    "id",
                    "name",
                    "tag",
                    "is-selected",
                    "theme",
                    "is-interactive",
                    "selected-options",
                    "onRemoveSelection",
                    "onAddSelection",
                    "onSelectOption",
                  ]
                ),
              ])
            )
          ),
          128
        )),
        e.validationErrors.length && e.areErrorsShown
          ? (m(),
            v("div", Lp, [
              (m(!0),
              v(
                ge,
                null,
                Se(
                  e.validationErrors,
                  (s) => (
                    m(),
                    v(
                      "p",
                      { key: s, class: "input__error-message text-body-2" },
                      J(s),
                      1
                    )
                  )
                ),
                128
              )),
            ]))
          : M("", !0),
      ],
      2
    )
  );
}
const Rp = ie(Ap, [
    ["render", Bp],
    ["__scopeId", "data-v-d57bc6de"],
  ]),
  $p = {
    __name: "GridForm",
    props: {
      id: { type: String, required: !0 },
      settings: { type: Object, required: !0 },
      submitButtonData: { type: Object, required: !0 },
      formId: { type: String, default: null },
      isError: { type: Boolean, default: !1 },
      showSuccessMessage: { type: Boolean, default: !1 },
      isUserSite: { type: Boolean, default: !1 },
      theme: {
        type: String,
        validator: (e) => ["dark", "light"].includes(e),
        default: "light",
      },
      formJustify: { type: String, default: null },
      formButtonJustifySelf: { type: String, default: null },
      mobileFormButtonJustifySelf: { type: String, default: null },
      formBackgroundColor: { type: String, default: null },
      formBorderWidth: { type: String, default: null },
      formBorderColor: { type: String, default: null },
      formBorderRadius: { type: String, default: null },
      formPadding: { type: String, default: null },
      submitButtonBackgroundColor: { type: String, default: null },
      submitButtonBackgroundColorHover: { type: String, default: null },
      submitButtonFontColor: { type: String, default: null },
      submitButtonFontColorHover: { type: String, default: null },
      submitButtonBorderColor: { type: String, default: null },
      submitButtonBorderColorHover: { type: String, default: null },
      submitButtonFontFamily: { type: String, default: null },
      submitButtonFontWeight: { type: Number, default: null },
      submitButtonFontSizeMobile: { type: Number, default: null },
      submitButtonFontSizeDesktop: { type: Number, default: null },
      submitButtonBorderWidth: { type: Number, default: null },
      submitButtonBorderRadius: { type: Number, default: null },
      inputFillColor: { type: String, default: null },
      inputFillColorHover: { type: String, default: null },
      formFontFamily: { type: String, default: null },
      formFontWeight: { type: Number, default: null },
      labelTextColor: { type: String, default: null },
      labelTextSize: { type: Number, default: null },
      mobileLabelTextSize: { type: Number, default: null },
      inputTextColor: { type: String, default: null },
      inputTextColorHover: { type: String, default: null },
      inputTextSize: { type: Number, default: null },
      mobileInputTextSize: { type: Number, default: null },
      inputBorderColor: { type: String, default: null },
      inputBorderColorHover: { type: String, default: null },
      inputBorderWidth: { type: Number, default: null },
      inputBorderRadius: { type: Number, default: null },
      elementsVerticalSpacing: { type: Number, default: null },
      mobileElementsVerticalSpacing: { type: Number, default: null },
    },
    emits: ["on-submit"],
    setup(e, { expose: a, emit: t }) {
      a();
      const n = e,
        r = t,
        i = A({}),
        o = A({}),
        s = A(!1),
        l = c(() =>
          n.settings.schema.reduce(
            (_, S) => ({
              ..._,
              [S.name]: {
                validation: S.validation.flat(),
                validationMessages: S["validation-messages"],
              },
            }),
            {}
          )
        ),
        d = c(() => {
          const _ = Number.isInteger(n.elementsVerticalSpacing)
              ? `${n.elementsVerticalSpacing}px`
              : null,
            S = Number.isInteger(n.mobileElementsVerticalSpacing)
              ? `${n.mobileElementsVerticalSpacing}px`
              : null;
          return {
            "--form-flex": n.formJustify ? null : "0 1 100%",
            "--form-button-justify-self": n.formButtonJustifySelf,
            "--m-form-button-justify-self": n.mobileFormButtonJustifySelf,
            "--form-background-color": n.formBackgroundColor,
            "--form-border-width": `${n.formBorderWidth}px`,
            "--form-border-color": n.formBorderColor,
            "--form-border-radius": `${n.formBorderRadius}px`,
            "--form-padding": n.formPadding ? `${n.formPadding}px` : null,
            "--form-font-family": n.formFontFamily,
            "--form-font-weight": n.formFontWeight,
            "--input-fill-color": n.inputFillColor,
            "--input-fill-color--hover":
              n.inputFillColorHover || n.inputFillColor,
            "--label-text-color": n.labelTextColor,
            "--label-text-size": n.labelTextSize
              ? `${n.labelTextSize}px`
              : null,
            "--m-label-text-size": n.mobileLabelTextSize
              ? `${n.mobileLabelTextSize}px`
              : null,
            "--input-text-color": n.inputTextColor,
            "--input-text-color--hover":
              n.inputTextColorHover || n.inputTextColor,
            "--input-text-size": n.inputTextSize
              ? `${n.inputTextSize}px`
              : null,
            "--m-input-text-size": n.mobileInputTextSize
              ? `${n.mobileInputTextSize}px`
              : null,
            "--input-height": n.inputTextSize ? "auto" : "48px",
            "--input-border-color": n.inputBorderColor,
            "--input-border-color--hover":
              n.inputBorderColorHover || n.inputBorderColor,
            "--input-border-width": n.inputBorderWidth
              ? `${n.inputBorderWidth}px`
              : null,
            "--input-border-radius": n.inputBorderRadius
              ? `${n.inputBorderRadius}px`
              : null,
            "--form-elements-vertical-spacing": _,
            "--m-form-elements-vertical-spacing": S,
            "--form-spacing": "var(--formSpacing)",
            "--grid-item-inner-padding": "var(--gridItemInnerPadding)",
            "--grid-item-inner-background": "var(--gridItemInnerBackground)",
          };
        }),
        p = () =>
          n.settings.schema.flatMap(({ name: _ }) => {
            const S = Xr({ value: o.value[_]?.value, ...l.value[_] });
            return (i.value = { ...i.value, [_]: S }), S;
          }),
        u = (_, S) => {
          (i.value = { ...i.value, [_]: Xr({ value: S, ...l.value[_] }) }),
            (o.value = {
              ...o.value,
              [_]: {
                value: S,
                type:
                  n.settings.schema.find(({ name: w }) => w === _)
                    .validationType || "text",
              },
            });
        },
        g = () => {
          o.value = Object.fromEntries(
            Object.entries(o.value).map(([_, { value: S, type: w }]) => [
              _,
              { value: S.trim(), type: w },
            ])
          );
        },
        f = {
          props: n,
          emit: r,
          validationErrors: i,
          formValues: o,
          areErrorsVisible: s,
          validationRules: l,
          formCSSVars: d,
          validateForm: p,
          updateField: u,
          trimFormValues: g,
          handleSubmit: () => {
            g();
            const _ = p();
            (s.value = _.length > 0), s.value || r("on-submit", o.value);
          },
          computed: c,
          ref: A,
          get validateInput() {
            return Xr;
          },
          GridButton: hn,
          GridInput: Pp,
          GridSelectInputsWrapper: Rp,
        };
      return (
        Object.defineProperty(f, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        f
      );
    },
  },
  Np = ["id"],
  xp = ["name"];
function Hp(e, a, t, n, r, i) {
  const o = ze("qa");
  return (
    m(),
    v(
      "div",
      {
        id: t.id,
        class: ee([
          "form",
          { "form--single-field": t.settings.type === "singleField" },
        ]),
        style: Re(n.formCSSVars),
      },
      [
        E(
          "form",
          {
            class: ee([
              "form__control",
              { "form__control--invisible": t.showSuccessMessage || t.isError },
            ]),
            name: t.formId,
            onSubmit: Me(n.handleSubmit, ["prevent"]),
          },
          [
            (m(!0),
            v(
              ge,
              null,
              Se(
                t.settings.schema,
                (s) => (
                  m(),
                  v(
                    ge,
                    { key: s.id },
                    [
                      s.type === "GridInput"
                        ? ue(
                            (m(),
                            G(
                              n.GridInput,
                              {
                                key: 0,
                                theme: t.theme,
                                tag: s.tag,
                                placeholder: s.placeholder,
                                label: s.inputLabel,
                                "is-required":
                                  n.validationRules[s.name].validation.includes(
                                    "required"
                                  ),
                                "is-required-asterisk-visible":
                                  t.settings.schema.length > 1,
                                "validation-errors": n.validationErrors[s.name],
                                "are-errors-shown": n.areErrorsVisible,
                                "is-interactive": t.isUserSite,
                                "model-value": n.formValues[s.name]?.value,
                                "onUpdate:modelValue": (l) =>
                                  n.updateField(s.name, l),
                              },
                              null,
                              8,
                              [
                                "theme",
                                "tag",
                                "placeholder",
                                "label",
                                "is-required",
                                "is-required-asterisk-visible",
                                "validation-errors",
                                "are-errors-shown",
                                "is-interactive",
                                "model-value",
                                "onUpdate:modelValue",
                              ]
                            )),
                            [[o, `form-field-${s.inputLabel}`]]
                          )
                        : M("", !0),
                      s.type === "GridSelectInput"
                        ? ue(
                            (m(),
                            G(
                              n.GridSelectInputsWrapper,
                              {
                                key: 1,
                                theme: t.theme,
                                tag: s.tag,
                                options: s.options,
                                placeholder: s.placeholder,
                                label: s.inputLabel,
                                "is-required":
                                  n.validationRules[s.name].validation.includes(
                                    "required"
                                  ),
                                "validation-errors": n.validationErrors[s.name],
                                "are-errors-shown": n.areErrorsVisible,
                                "is-interactive": t.isUserSite,
                                onInput: (l) => n.updateField(s.name, l),
                              },
                              null,
                              8,
                              [
                                "theme",
                                "tag",
                                "options",
                                "placeholder",
                                "label",
                                "is-required",
                                "validation-errors",
                                "are-errors-shown",
                                "is-interactive",
                                "onInput",
                              ]
                            )),
                            [[o, `form-field-${s.inputLabel}`]]
                          )
                        : M("", !0),
                    ],
                    64
                  )
                )
              ),
              128
            )),
            Ee(
              n.GridButton,
              {
                content: t.submitButtonData.content,
                type: t.submitButtonData.settings.type,
                "background-color": t.submitButtonBackgroundColor,
                "background-color-hover": t.submitButtonBackgroundColorHover,
                "font-color": t.submitButtonFontColor,
                "font-color-hover": t.submitButtonFontColorHover,
                "border-color": t.submitButtonBorderColor,
                "border-color-hover": t.submitButtonBorderColorHover,
                "font-family": t.submitButtonFontFamily,
                "font-weight": t.submitButtonFontWeight,
                "font-size-mobile": t.submitButtonFontSizeMobile,
                "font-size-desktop": t.submitButtonFontSizeDesktop,
                "border-width": t.submitButtonBorderWidth,
                "border-radius": t.submitButtonBorderRadius,
                class: "form__button",
                "button-type": "submit",
                "tag-name": "button",
              },
              null,
              8,
              [
                "content",
                "type",
                "background-color",
                "background-color-hover",
                "font-color",
                "font-color-hover",
                "border-color",
                "border-color-hover",
                "font-family",
                "font-weight",
                "font-size-mobile",
                "font-size-desktop",
                "border-width",
                "border-radius",
              ]
            ),
          ],
          42,
          xp
        ),
        he(e.$slots, "default", {}, void 0, !0),
      ],
      14,
      Np
    )
  );
}
const Up = ie($p, [
    ["render", Hp],
    ["__scopeId", "data-v-77575ff3"],
  ]),
  Vp = se({
    __name: "ZyroLoader",
    props: {
      color: { default: "var(--color-dark)" },
      size: { default: "40px" },
      weight: { default: "4px" },
    },
    setup(e, { expose: a }) {
      a(),
        St((n) => ({
          "31918b4a": n.size,
          "19ef3f81": n.weight,
          "007e258c": n.color,
        }));
      const t = {};
      return (
        Object.defineProperty(t, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        t
      );
    },
  }),
  Fp = { class: "loader" },
  Yp = ai(
    '<div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div>',
    5
  ),
  qp = [Yp];
function jp(e, a, t, n, r, i) {
  return m(), v("div", Fp, qp);
}
const pi = ie(Vp, [
    ["render", jp],
    ["__scopeId", "data-v-a1cb4206"],
  ]),
  Wp = "light",
  Gp = 200,
  zp = { SHOW_MESSAGE: "showMessage", LINK_TO_PAGE: "linkToPage" },
  Kp = se({
    __name: "PostSubmitElement",
    props: {
      successMessage: { default: "" },
      isError: { type: Boolean, default: !1 },
      isLoading: { type: Boolean, default: !1 },
      showSuccessMessage: { type: Boolean, default: !1 },
      theme: { default: Wp },
      hasBorderWidth: { type: Boolean, default: !1 },
    },
    setup(e, { expose: a }) {
      a();
      const t = e,
        n = A(null),
        r = c(() => ({
          "--submit-element-border": t.hasBorderWidth
            ? ""
            : "var(--color-gray)",
        }));
      je(n, () => {
        n.value &&
          n.value.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      const i = {
        props: t,
        postSubmitRef: n,
        submitElementCSSVars: r,
        ZyroLoader: pi,
      };
      return (
        Object.defineProperty(i, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  fu = (e) => (Ht("data-v-00e42172"), (e = e()), Ut(), e),
  Qp = { key: 1, class: "success-message__heading" },
  Zp = { key: 2 },
  Xp = fu(() =>
    E("div", { class: "submit-message__heading" }, " Something went wrong ", -1)
  ),
  Jp = fu(() => E("div", null, " Please try again later ", -1)),
  eg = [Xp, Jp];
function tg(e, a, t, n, r, i) {
  return t.isLoading || t.showSuccessMessage || t.isError
    ? (m(),
      v(
        "div",
        {
          key: 0,
          ref: "postSubmitRef",
          class: ee(["submit-message", `submit-message--${t.theme}`]),
          style: Re(n.submitElementCSSVars),
        },
        [
          t.isLoading
            ? (m(),
              G(n.ZyroLoader, {
                key: 0,
                color: "var(--grid-button-primary-background-color)",
              }))
            : t.showSuccessMessage && !t.isError
            ? (m(), v("div", Qp, J(t.successMessage), 1))
            : M("", !0),
          t.isError && !t.isLoading ? (m(), v("div", Zp, eg)) : M("", !0),
        ],
        6
      ))
    : M("", !0);
}
const ag = ie(Kp, [
    ["render", tg],
    ["__scopeId", "data-v-00e42172"],
  ]),
  ng = se({
    components: { GridForm: Up, PostSubmitElement: ag },
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      currentLocale: { type: String, required: !0 },
    },
    setup() {
      const { meta: e, forms: a, getPagePathFromId: t } = rt();
      return { meta: e, forms: a, getPagePathFromId: t };
    },
    data() {
      return { isLoading: !1, showSuccessMessage: !1, isError: !1 };
    },
    methods: {
      async saveData({ token: e, model: a }) {
        await fetch(`https://backend.zyro.com/u1/data/v2/post/${e}`, {
          method: "POST",
          headers: { "Content-Type": "application/json;charset=UTF-8" },
          credentials: "omit",
          mode: "cors",
          body: JSON.stringify(a),
        }).then((t) => {
          if (!t.ok) throw new Error(t.statusText);
          return t;
        });
      },
      async onSubmit(e) {
        if (this.meta.isDemoTemplate) {
          this.showSuccessMessage = !0;
          return;
        }
        this.isLoading = !0;
        let a = !1;
        setTimeout(() => {
          (a = !0),
            (this.isLoading = !(this.showSuccessMessage || this.isError));
        }, Gp);
        try {
          await this.saveData({
            token: this.forms[this.data.formId].token,
            model: Object.fromEntries(
              Object.entries(e).map(([i, o]) => [i.replace(/["']+/g, ""), o])
            ),
          }),
            (this.showSuccessMessage = !0);
          const { submitAction: t } = this.data.settings;
          if (!t || t.id === zp.SHOW_MESSAGE) return;
          const { pageId: n } = this.data.settings.submitRedirectPage,
            r = this.getPagePathFromId({ pageId: n });
          this.$router.push({ path: r });
        } catch (t) {
          console.error(t), (this.isError = !0);
        } finally {
          a && (this.isLoading = !1);
        }
      },
    },
  });
function rg(e, a, t, n, r, i) {
  const o = Ce("PostSubmitElement"),
    s = Ce("GridForm");
  return (
    m(),
    G(
      s,
      {
        id: e.id,
        "form-id": e.data.formId,
        settings: e.data.settings,
        "submit-button-data": e.data.submitButtonData,
        "submit-button-background-color": e.data.submitButtonBackgroundColor,
        "submit-button-background-color-hover":
          e.data.submitButtonBackgroundColorHover,
        "submit-button-font-color": e.data.submitButtonFontColor,
        "submit-button-font-color-hover": e.data.submitButtonFontColorHover,
        "submit-button-border-color": e.data.submitButtonBorderColor,
        "submit-button-border-color-hover": e.data.submitButtonBorderColorHover,
        "submit-button-font-family": e.data.submitButtonFontFamily,
        "submit-button-font-weight": e.data.submitButtonFontWeight,
        "submit-button-font-size-mobile": e.data.mobile?.submitButtonFontSize,
        "submit-button-font-size-desktop": e.data.desktop?.submitButtonFontSize,
        "submit-button-border-width": e.data.submitButtonBorderWidth,
        "submit-button-border-radius": e.data.submitButtonBorderRadius,
        "show-success-message": e.showSuccessMessage,
        "is-error": e.isError,
        "is-user-site": !0,
        theme: e.data.settings.theme,
        "form-justify": e.data.settings.styles.justify,
        "form-button-justify-self":
          e.data.submitButtonData.settings.styles.align,
        "mobile-form-button-justify-self":
          e.data.submitButtonData.settings.styles["m-align"],
        "form-background-color": e.data.formBackgroundColor,
        "form-border-width": e.data.formBorderWidth,
        "form-border-color": e.data.formBorderColor,
        "form-border-radius": e.data.formBorderRadius,
        "form-padding": e.data.formPadding,
        "input-fill-color": e.data.inputFillColor,
        "input-fill-color-hover": e.data.inputFillColorHover,
        "form-font-family": e.data.formFontFamily,
        "form-font-weight": e.data.formFontWeight,
        "label-text-color": e.data.labelTextColor,
        "label-text-size": e.data.desktop?.labelTextSize,
        "mobile-label-text-size": e.data.mobile?.labelTextSize,
        "input-text-color": e.data.inputTextColor,
        "input-text-color-hover": e.data.inputTextColorHover,
        "input-text-size": e.data.desktop?.inputTextSize,
        "mobile-input-text-size": e.data.mobile?.inputTextSize,
        "input-border-color": e.data.inputBorderColor,
        "input-border-color-hover": e.data.inputBorderColorHover,
        "input-border-width": e.data.inputBorderWidth,
        "input-border-radius": e.data.inputBorderRadius,
        "elements-vertical-spacing":
          e.data.desktop?.formElementsVerticalSpacing,
        "mobile-elements-vertical-spacing":
          e.data.mobile?.formElementsVerticalSpacing,
        onOnSubmit: e.onSubmit,
      },
      {
        default: _e(() => [
          Ee(
            o,
            {
              "show-success-message": e.showSuccessMessage,
              "success-message": e.data.settings.successMessage,
              "is-loading": e.isLoading,
              "is-error": e.isError,
              theme: e.data.settings.theme,
              "has-border-width": e.data.formBorderWidth !== 0,
            },
            null,
            8,
            [
              "show-success-message",
              "success-message",
              "is-loading",
              "is-error",
              "theme",
              "has-border-width",
            ]
          ),
        ]),
        _: 1,
      },
      8,
      [
        "id",
        "form-id",
        "settings",
        "submit-button-data",
        "submit-button-background-color",
        "submit-button-background-color-hover",
        "submit-button-font-color",
        "submit-button-font-color-hover",
        "submit-button-border-color",
        "submit-button-border-color-hover",
        "submit-button-font-family",
        "submit-button-font-weight",
        "submit-button-font-size-mobile",
        "submit-button-font-size-desktop",
        "submit-button-border-width",
        "submit-button-border-radius",
        "show-success-message",
        "is-error",
        "theme",
        "form-justify",
        "form-button-justify-self",
        "mobile-form-button-justify-self",
        "form-background-color",
        "form-border-width",
        "form-border-color",
        "form-border-radius",
        "form-padding",
        "input-fill-color",
        "input-fill-color-hover",
        "form-font-family",
        "form-font-weight",
        "label-text-color",
        "label-text-size",
        "mobile-label-text-size",
        "input-text-color",
        "input-text-color-hover",
        "input-text-size",
        "mobile-input-text-size",
        "input-border-color",
        "input-border-color-hover",
        "input-border-width",
        "input-border-radius",
        "elements-vertical-spacing",
        "mobile-elements-vertical-spacing",
        "onOnSubmit",
      ]
    )
  );
}
const og = ie(ng, [["render", rg]]),
  ig = [id, ru],
  gi = se({
    props: {
      alt: { type: String, default: null },
      href: { type: String, default: null },
      preventDrag: { type: Boolean, default: !1 },
      sizes: { type: String, default: null },
      src: { type: String, required: !0 },
      srcset: { type: String, default: null },
      tagName: {
        type: String,
        validator: (e) => ig.includes(e),
        default: "div",
      },
      target: { type: String, default: null },
      rel: { type: String, default: null },
      isLightboxEnabled: { type: Boolean, default: !1 },
      isUnstyled: { type: Boolean, default: !1 },
      resetMobilePosition: { type: Boolean, default: !0 },
      elementWidth: { type: Number, default: null },
      elementHeight: { type: Number, default: null },
      mobileBorderRadius: { type: [String, Number], default: 0 },
      desktopBorderRadius: { type: [String, Number], default: 0 },
      cropCssVars: { type: Object, default: null },
      isOverflowVisible: { type: Boolean, default: !1 },
      isEager: { type: Boolean, default: !1 },
      isMobileImage: { type: Boolean, default: !1 },
      isInBuilder: { type: Boolean, default: !1 },
      isSvg: { type: Boolean, default: !1 },
      shapeMaskSource: { type: String, default: null },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    emits: ["image-load", "image-click"],
    setup(e, a) {
      const t = A(null),
        n = A(!1),
        r = c(() => e.elementHeight > 0 && e.isMobileImage),
        i = c(() =>
          e.isInPreviewMode
            ? `${e.elementWidth}px`
            : r.value
            ? `${(e.elementWidth * 100) / da}vw`
            : "100%"
        ),
        o = c(() =>
          e.isInPreviewMode
            ? `${e.elementHeight}px`
            : r.value
            ? `${(e.elementHeight * 100) / da}vw`
            : "auto"
        ),
        s = c(() => `${(e.elementWidth * 100) / wa}vw`),
        l = c(() => `${(e.elementHeight * 100) / wa}vw`),
        d = c(() =>
          e.shapeMaskSource
            ? null
            : e.desktopBorderRadius
            ? e.desktopBorderRadius
            : e.mobileBorderRadius
            ? e.mobileBorderRadius
            : null
        ),
        p = c(() =>
          e.shapeMaskSource
            ? null
            : e.mobileBorderRadius
            ? e.mobileBorderRadius
            : e.desktopBorderRadius
            ? e.desktopBorderRadius
            : null
        ),
        u = c(() => e.shapeMaskSource && `url('${e.shapeMaskSource}')`),
        g = () => {
          a.emit("image-load"), (n.value = !0);
        };
      return (
        Oe(() => {
          if (t.value) {
            if (t.value?.complete) {
              g();
              return;
            }
            t.value.addEventListener("load", g);
          }
        }),
        zn(() => {
          t.value && t.value.removeEventListener("load", g);
        }),
        {
          imageRef: t,
          DATA_ATTRIBUTE_ANIMATION_ROLE: Ma,
          DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE: ni,
          DATA_ATTRIBUTE_SELECTOR: rd,
          DATA_ATTRIBUTE_SELECTOR_IMAGE: od,
          ANCHOR_TAG: ru,
          isLoaded: n,
          imageCSSVars: c(() => ({
            "--overflow": e.isOverflowVisible ? "visible" : null,
            ...e.cropCssVars,
          })),
          mobileWidthCSSVar: c(() => (e.isInBuilder ? "100%" : i.value)),
          mobileHeightCSSVar: c(() => (e.isInBuilder ? "auto" : o.value)),
          smallDesktopWidthCSSVar: c(() => (e.isInBuilder ? "100%" : s.value)),
          smallDesktopHeightCSSVar: c(() => (e.isInBuilder ? "100%" : l.value)),
          desktopBorderRadiusCSSVar: d,
          mobileBorderRadiusCSSVar: p,
          shapeMaskSourceCssVar: u,
        }
      );
    },
  }),
  xs = () => {
    St((e) => ({
      "5575641b": e.desktopBorderRadiusCSSVar,
      "255fc2ae": e.shapeMaskSourceCssVar,
      f0d1bc9c: e.smallDesktopWidthCSSVar,
      "31ed1dfa": e.smallDesktopHeightCSSVar,
      "5a1e5507": e.mobileBorderRadiusCSSVar,
      b75e5476: e.mobileWidthCSSVar,
      "61863f50": e.mobileHeightCSSVar,
    }));
  },
  Hs = gi.setup;
gi.setup = Hs ? (e, a) => (xs(), Hs(e, a)) : xs;
const sg = ["alt", "src", "srcset", "sizes", "height", "width", "loading"];
function lg(e, a, t, n, r, i) {
  const o = ze("qa");
  return (
    m(),
    G(
      gn(e.tagName),
      tt({
        href: e.href,
        target: e.target,
        rel: e.rel,
        title: e.alt,
        style: e.imageCSSVars,
        class: [
          "image",
          {
            "image--grid": !e.isUnstyled,
            "image--unstyled": e.isUnstyled,
            "image--link": e.tagName === e.ANCHOR_TAG,
            loaded: e.isLoaded,
          },
        ],
        [e.DATA_ATTRIBUTE_SELECTOR || ""]: e.DATA_ATTRIBUTE_SELECTOR_IMAGE,
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]:
          e.DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE,
        onClick: a[0] || (a[0] = (s) => e.$emit("image-click", s)),
      }),
      {
        default: _e(() => [
          ue(
            E(
              "img",
              Qe(
                {
                  ref: "imageRef",
                  alt: e.alt,
                  src: e.src,
                  srcset: e.srcset,
                  sizes: e.sizes,
                  height: e.elementHeight,
                  width: e.elementWidth,
                  loading: e.isEager ? "eager" : "lazy",
                  class: {
                    "image__image--zoom": e.isLightboxEnabled,
                    "image__image--unstyled": e.isUnstyled,
                    "image__image--cropped": !!e.cropCssVars,
                    image__image: !e.isUnstyled,
                    "image__image--reset-m-position": e.resetMobilePosition,
                    "image__image--svg": e.isSvg,
                  },
                },
                Kl(
                  {
                    drag: e.preventDrag
                      ? (s) => s.preventDefault()
                      : () => null,
                    dragstart: e.preventDrag
                      ? (s) => s.preventDefault()
                      : () => null,
                  },
                  !0
                )
              ),
              null,
              16,
              sg
            ),
            [[o, "builder-gridelement-gridimage"]]
          ),
          he(e.$slots, "default", {}, void 0, !0),
        ]),
        _: 3,
      },
      16,
      ["href", "target", "rel", "title", "style", "class"]
    )
  );
}
const vu = ie(gi, [
    ["render", lg],
    ["__scopeId", "data-v-04610e81"],
  ]),
  Us = (e, a) => {
    const t = Array(e).fill([]);
    return a.reduce((n, r, i) => {
      const o = i % e;
      return (n[o] = [...n[o], { ...r, originalIndex: i }]), n;
    }, t);
  },
  ug = se({
    name: "GridGallery",
    components: { GridImage: vu },
    props: {
      columnCount: { type: Number, required: !0 },
      columnGap: { type: Number, required: !0 },
      mobileColumnCount: { type: Number, required: !0 },
      mobileColumnGap: { type: Number, required: !0 },
      gridImages: { type: Array, required: !0 },
      isLightboxEnabled: { type: Boolean, required: !1 },
      isMasonryLayout: { type: Boolean, default: !1 },
      loadImages: { type: Boolean, default: !0 },
    },
    emits: ["image-load"],
    setup(e) {
      const a = c(() => Us(e.columnCount, e.gridImages)),
        t = c(() => Us(e.mobileColumnCount, e.gridImages));
      return { masonryColumns: a, mobileMasonryColumns: t };
    },
    computed: {
      gridGalleryCSSVars() {
        return {
          "--column-gap": `${this.columnGap}px`,
          "--column-count": this.columnCount,
          "--m-column-gap": `${this.mobileColumnGap}px`,
          "--m-column-count": this.mobileColumnCount,
        };
      },
    },
  }),
  cg = { class: "gallery" };
function dg(e, a, t, n, r, i) {
  const o = Ce("GridImage");
  return (
    m(),
    v("div", cg, [
      e.isMasonryLayout
        ? (m(),
          v(
            "div",
            {
              key: 0,
              class: "gallery__masonry",
              style: Re(e.gridGalleryCSSVars),
            },
            [
              (m(!0),
              v(
                ge,
                null,
                Se(
                  e.mobileMasonryColumns,
                  (s, l) => (
                    m(),
                    v(
                      "div",
                      { key: l, class: "gallery__masonry-mobile-columns" },
                      [
                        (m(!0),
                        v(
                          ge,
                          null,
                          Se(
                            s,
                            (d, p) => (
                              m(),
                              G(
                                o,
                                {
                                  key: `${p}${d.src}`,
                                  class: "gallery__masonry-image",
                                  alt: d.alt,
                                  src: e.loadImages ? d.src : "",
                                  srcset: d.srcset,
                                  sizes: d.sizes,
                                  "element-width": d.width,
                                  "prevent-drag": "",
                                  "is-eager": "",
                                  "is-unstyled": "",
                                  "reset-mobile-position": !1,
                                  "is-lightbox-enabled": e.isLightboxEnabled,
                                  onImageClick: (u) =>
                                    e.$emit("image-click", d.originalIndex),
                                  onImageLoad:
                                    a[0] ||
                                    (a[0] = (u) => e.$emit("image-load")),
                                },
                                null,
                                8,
                                [
                                  "alt",
                                  "src",
                                  "srcset",
                                  "sizes",
                                  "element-width",
                                  "is-lightbox-enabled",
                                  "onImageClick",
                                ]
                              )
                            )
                          ),
                          128
                        )),
                      ]
                    )
                  )
                ),
                128
              )),
              (m(!0),
              v(
                ge,
                null,
                Se(
                  e.masonryColumns,
                  (s, l) => (
                    m(),
                    v(
                      "div",
                      { key: l, class: "gallery__masonry-desktop-columns" },
                      [
                        (m(!0),
                        v(
                          ge,
                          null,
                          Se(
                            s,
                            (d, p) => (
                              m(),
                              G(
                                o,
                                {
                                  key: `${p}${d.src}`,
                                  class: "gallery__masonry-image",
                                  alt: d.alt,
                                  src: e.loadImages ? d.src : "",
                                  srcset: d.srcset,
                                  sizes: d.sizes,
                                  "element-width": d.width,
                                  "prevent-drag": "",
                                  "is-eager": "",
                                  "is-unstyled": "",
                                  "reset-mobile-position": !1,
                                  "is-lightbox-enabled": e.isLightboxEnabled,
                                  onImageClick: (u) =>
                                    e.$emit("image-click", d.originalIndex),
                                  onImageLoad:
                                    a[1] ||
                                    (a[1] = (u) => e.$emit("image-load")),
                                },
                                null,
                                8,
                                [
                                  "alt",
                                  "src",
                                  "srcset",
                                  "sizes",
                                  "element-width",
                                  "is-lightbox-enabled",
                                  "onImageClick",
                                ]
                              )
                            )
                          ),
                          128
                        )),
                      ]
                    )
                  )
                ),
                128
              )),
            ],
            4
          ))
        : (m(),
          v(
            "div",
            { key: 1, class: "gallery__grid", style: Re(e.gridGalleryCSSVars) },
            [
              (m(!0),
              v(
                ge,
                null,
                Se(
                  e.gridImages,
                  (s, l) => (
                    m(),
                    v("div", { key: `${l}${s.src}`, class: "gallery__block" }, [
                      (m(),
                      G(
                        o,
                        {
                          key: `${l}${s.src}`,
                          alt: s.alt,
                          src: e.loadImages ? s.src : "",
                          srcset: s.srcset,
                          sizes: s.sizes,
                          "element-width": s.width,
                          "element-height": s.height,
                          "prevent-drag": "",
                          "is-lightbox-enabled": e.isLightboxEnabled,
                          "reset-mobile-position": !1,
                          "is-eager": "",
                          class: "gallery__image",
                          onImageClick: (d) => e.$emit("image-click", l),
                          onImageLoad:
                            a[2] || (a[2] = (d) => e.$emit("image-load")),
                        },
                        null,
                        8,
                        [
                          "alt",
                          "src",
                          "srcset",
                          "sizes",
                          "element-width",
                          "element-height",
                          "is-lightbox-enabled",
                          "onImageClick",
                        ]
                      )),
                    ])
                  )
                ),
                128
              )),
            ],
            4
          )),
      he(e.$slots, "default", {}, void 0, !0),
    ])
  );
}
const mg = ie(ug, [
    ["render", dg],
    ["__scopeId", "data-v-0346154b"],
  ]),
  pg = (e) => {
    const a = c(() => e.data.images.length > 0),
      t = c(() => Number.parseInt(e.data.desktop.columnCount || 1, 10)),
      n = c(() => Number.parseInt(e.data.desktop.columnGap || 0, 10)),
      r = c(() => Number.parseInt(e.data.mobile.columnCount || 1, 10)),
      i = c(() => Number.parseInt(e.data.mobile.columnGap || 0, 10)),
      o = c(() => e.data.settings.layout === "masonry");
    return {
      hasGridImages: a,
      columnCount: t,
      columnGap: n,
      isMasonryLayout: o,
      mobileColumnCount: r,
      mobileColumnGap: i,
    };
  },
  it = {
    Backspace: "Backspace",
    ShiftLeft: "ShiftLeft",
    Escape: "Escape",
    Space: "Space",
    ArrowLeft: "ArrowLeft",
    ArrowUp: "ArrowUp",
    ArrowRight: "ArrowRight",
    ArrowDown: "ArrowDown",
    Delete: "Delete",
    KeyX: "KeyX",
    KeyC: "KeyC",
    KeyD: "KeyD",
    KeyY: "KeyY",
    KeyZ: "KeyZ",
    OSLeft: "OSLeft",
    NumLockSlash: "NumLockSlash",
    KeySlash: "Slash",
    Enter: "Enter",
    BracketLeft: "BracketLeft",
    BracketRight: "BracketRight",
  },
  gg = {
    8: it.Backspace,
    16: it.ShiftLeft,
    27: it.Escape,
    32: it.Space,
    37: it.ArrowLeft,
    38: it.ArrowUp,
    39: it.ArrowRight,
    40: it.ArrowDown,
    46: it.Delete,
    67: it.KeyC,
    68: it.KeyD,
    88: it.KeyX,
    89: it.KeyY,
    90: it.KeyZ,
    91: it.OSLeft,
    111: it.NumLockSlash,
    191: it.KeySlash,
    219: it.BracketLeft,
    221: it.BracketRight,
  },
  Jr = (e) => {
    let a;
    return (
      e
        ? e.code !== void 0
          ? (a = e.code === "MetaLeft" ? "OSLeft" : e.code)
          : e.keyCode !== void 0 && (a = gg[e.keyCode])
        : (a = void 0),
      a
    );
  },
  Ra = A([]),
  $a = A(null),
  sn = () => {
    const e = c(() => Ra.value.length > 0),
      a = c(() => Ra.value.length > 1),
      t = c(() => Ra.value.length - 1),
      n = c(() => $a.value === Ra.value.length - 1),
      r = c(() => $a.value === 0),
      i = c(() => Ra.value[$a.value]),
      o = (f) => {
        $a.value = f;
      },
      s = (f) => {
        Ra.value = Array.isArray(f) ? f : [f];
      },
      l = () => (r.value ? o(t.value) : o($a.value - 1)),
      d = () => (n.value ? o(0) : o($a.value + 1)),
      p = () => {
        s([]), o(null);
      },
      u = () => {
        a.value || p();
      },
      g = (f, _ = 0) => {
        s(f), o(_);
      },
      y = (f) => {
        Jr(f) === it.ArrowRight && d(),
          Jr(f) === it.ArrowLeft && l(),
          Jr(f) === it.Escape && p();
      };
    return {
      lightboxImages: c(() => Ra.value),
      currentLightboxImageIndex: c(() => $a.value),
      currentLightboxImage: i,
      lastImageIndex: t,
      isFirstImage: r,
      isLastImage: n,
      isLightboxOpen: e,
      isImageGalleryMode: a,
      setLightboxImages: s,
      setCurrentLightboxImageIndex: o,
      goToNextImage: d,
      goToPreviousImage: l,
      handleLightboxNav: y,
      closeLightbox: p,
      addImagesToLightbox: g,
      onLightboxClickOutside: u,
    };
  },
  hg = "lightbox",
  fg = se({
    name: "GridGalleryProviderUser",
    components: { GridGallery: mg },
    props: {
      data: { type: Object, required: !0 },
      mobileBlockPadding: { type: String, default: "0px" },
      elementWidth: { type: Number, default: null },
      elementHeight: { type: Number, default: null },
    },
    emits: ["image-load"],
    setup(e) {
      const { siteId: a } = rt(),
        {
          columnCount: t,
          columnGap: n,
          isMasonryLayout: r,
          mobileColumnCount: i,
          mobileColumnGap: o,
        } = pg(e),
        { addImagesToLightbox: s } = sn(),
        l = c(() => {
          const { right: b } = rn(e.mobileBlockPadding ?? "");
          return Number.parseInt(b, 10) || 0;
        }),
        d = A(!1),
        p = () => {
          d.value = window.matchMedia(`(max-width: ${Eo}px)`).matches;
        };
      Oe(() => {
        p(), window.addEventListener("resize", p);
      }),
        zn(() => {
          window.removeEventListener("resize", p);
        });
      const u = c(() => (d.value ? i.value : t.value)),
        g = c(() => Math.ceil((n.value + e.elementWidth) / u.value) - n.value),
        y = c(() => !r.value && g.value),
        f = c(() =>
          [`(min-width: ${Eo}px) ${g.value}px`, `${100 / u.value}vw`].join(", ")
        ),
        _ = c(() =>
          e.data.images.map((b) => {
            const D = c(() =>
                lt(b.origin, b.path, a.value, {
                  width: g.value,
                  height: y.value,
                })
              ),
              P = c(() =>
                nm(b.origin, b.path, a.value, {
                  width: g.value,
                  height: y.value,
                  columnCount: u.value,
                  columnGap: n.value,
                  mobilePadding: l.value,
                  isMasonryLayout: r.value,
                })
              );
            return {
              ...b,
              src: D.value,
              srcset: P.value,
              sizes: f.value,
              width: g.value,
              height: y.value,
            };
          })
        ),
        S = c(() => e.data.settings.imageClickAction === hg);
      return {
        gridImages: _,
        isLightboxEnabled: S,
        handleGalleryImageClick: (b) => {
          if (S.value) {
            const D = e.data.images.map((P) => ({
              alt: P.alt,
              src: ri(P.origin, P.path, a.value),
            }));
            s(D, b);
          }
        },
        columnCount: t,
        columnGap: n,
        isMasonryLayout: r,
        mobileColumnCount: i,
        mobileColumnGap: o,
      };
    },
  });
function vg(e, a, t, n, r, i) {
  const o = Ce("GridGallery");
  return (
    m(),
    G(
      o,
      {
        "grid-images": e.gridImages,
        "is-lightbox-enabled": e.isLightboxEnabled,
        "column-count": e.columnCount,
        "column-gap": e.columnGap,
        "mobile-column-count": e.mobileColumnCount,
        "mobile-column-gap": e.mobileColumnGap,
        "is-masonry-layout": e.isMasonryLayout,
        onImageClick: e.handleGalleryImageClick,
        onImageLoad: a[0] || (a[0] = (s) => e.$emit("image-load")),
      },
      null,
      8,
      [
        "grid-images",
        "is-lightbox-enabled",
        "column-count",
        "column-gap",
        "mobile-column-count",
        "mobile-column-gap",
        "is-masonry-layout",
        "onImageClick",
      ]
    )
  );
}
const yg = ie(fg, [["render", vg]]),
  bg = (e, a, t) => Math.min(Math.max(e, a), t),
  Vs = 1920,
  Fs = ({
    isAspectRatioBiggerThanContainer: e,
    scale: a,
    containerHeight: t,
    containerWidth: n,
    naturalImageHeight: r,
    naturalImageWidth: i,
  }) => {
    if (e) {
      const o = t / r;
      return Math.round(i * o * a);
    }
    return Math.round(n * a);
  },
  Ys = ({
    isAspectRatioBiggerThanContainer: e,
    scale: a,
    containerHeight: t,
    containerWidth: n,
    naturalImageHeight: r,
    naturalImageWidth: i,
  }) => {
    if (!e) {
      const o = n / i;
      return Math.round(r * o * a);
    }
    return Math.round(t * a);
  },
  rr = ({
    offsetInPx: e,
    imageSize: a,
    containerSize: t,
    offsetInPercent: n,
  }) => {
    if (!e) return n;
    const r = (a - t) / 100;
    return bg(n + e / r, 0, 100);
  },
  or = ({ imageSize: e, containerSize: a, offset: t }) => (a - e) * (t / 100),
  qs = ({
    prefix: e,
    left: a,
    top: t,
    scale: n,
    isAspectRatioLargerThanContainer: r,
  }) => ({
    [`--${e}-left`]: `${a}px`,
    [`--${e}-top`]: `${t}px`,
    [`--${e}-scale`]: n,
    [`--${e}-width`]: r ? "auto" : "100%",
    [`--${e}-height`]: r ? "100%" : "auto",
  }),
  js = ({
    left: e,
    top: a,
    imageWidth: t,
    imageHeight: n,
    containerWidth: r,
    containerHeight: i,
  }) => ({
    left: Math.round(Math.abs(e)),
    top: Math.round(Math.abs(a)),
    right: Math.round(t - r - Math.abs(e)),
    bottom: Math.round(n - i - Math.abs(a)),
    imageWidth: t,
    imageHeight: n,
  }),
  _g = (e, a) => {
    if (e > Vs) {
      const t = Vs / e;
      return { width: Math.round(e * t), height: Math.round(a * t) };
    }
    return { width: e, height: a };
  },
  Ws = (e, { dragDeltaYPosition: a, dragDeltaXPosition: t, href: n } = {}) => {
    const r = c(() =>
        _g(e.data.fullResolutionWidth, e.data.fullResolutionHeight)
      ),
      i = c(() => r.value.width),
      o = c(() => r.value.height),
      s = () => i.value / o.value,
      l = c(() => e.data.desktop?.crop),
      d = c(() => e.renderedPosition || e.data.desktop),
      p = c(() => d.value.width),
      u = c(() => d.value.height),
      g = c(() => p.value / u.value),
      y = c(() => s() > g.value),
      f = c(() =>
        Fs({
          isAspectRatioBiggerThanContainer: y.value,
          scale: l.value.scale,
          containerHeight: u.value,
          containerWidth: p.value,
          naturalImageHeight: o.value,
          naturalImageWidth: i.value,
        })
      ),
      _ = c(() =>
        Ys({
          isAspectRatioBiggerThanContainer: y.value,
          scale: l.value.scale,
          containerHeight: u.value,
          containerWidth: p.value,
          naturalImageHeight: o.value,
          naturalImageWidth: i.value,
        })
      ),
      S = c(() =>
        rr({
          offsetInPx: -a?.value,
          imageSize: _.value,
          containerSize: u.value,
          offsetInPercent: l.value.top,
        })
      ),
      w = c(() =>
        or({ imageSize: _.value, containerSize: u.value, offset: S.value })
      ),
      b = c(() =>
        rr({
          offsetInPx: -t?.value,
          imageSize: f.value,
          containerSize: p.value,
          offsetInPercent: l.value.left,
        })
      ),
      D = c(() =>
        or({ imageSize: f.value, containerSize: p.value, offset: b.value })
      ),
      P = c(() =>
        js({
          left: D.value,
          top: w.value,
          imageWidth: f.value,
          imageHeight: _.value,
          containerWidth: p.value,
          containerHeight: u.value,
        })
      ),
      O = c(() => e.data.mobile.crop || l.value),
      N = c(() => e.renderedPosition || e.data.mobile),
      x = c(() => N.value.width),
      X = c(() => N.value.height),
      W = c(() => x.value / X.value),
      T = c(() => s() > W.value),
      R = c(() =>
        Fs({
          isAspectRatioBiggerThanContainer: T.value,
          scale: O.value.scale,
          containerHeight: X.value,
          containerWidth: x.value,
          naturalImageHeight: o.value,
          naturalImageWidth: i.value,
        })
      ),
      H = c(() =>
        Ys({
          isAspectRatioBiggerThanContainer: T.value,
          scale: O.value.scale,
          containerHeight: X.value,
          containerWidth: x.value,
          naturalImageHeight: o.value,
          naturalImageWidth: i.value,
        })
      ),
      q = c(() =>
        rr({
          offsetInPx: -a?.value,
          imageSize: H.value,
          containerSize: X.value,
          offsetInPercent: O.value.top,
        })
      ),
      B = c(() =>
        or({ imageSize: H.value, containerSize: X.value, offset: q.value })
      ),
      I = c(() =>
        rr({
          offsetInPx: -t?.value,
          imageSize: R.value,
          containerSize: x.value,
          offsetInPercent: O.value.left,
        })
      ),
      U = c(() =>
        or({ imageSize: R.value, containerSize: x.value, offset: I.value })
      ),
      V = c(() =>
        js({
          left: U.value,
          top: B.value,
          imageWidth: R.value,
          imageHeight: H.value,
          containerWidth: x.value,
          containerHeight: X.value,
        })
      ),
      K = c(() => {
        const k = !["svg", "ico", "gif"].includes(tn(e.data.settings.path));
        if (!l.value || !i.value || !o.value || !k) return null;
        const h = qs({
            prefix: "desktop",
            left: D.value,
            top: w.value,
            scale: l.value.scale,
            isAspectRatioLargerThanContainer: y.value,
          }),
          F = qs({
            prefix: "mobile",
            left: U.value,
            top: B.value,
            scale: O.value.scale,
            isAspectRatioLargerThanContainer: T.value,
          });
        return { ...h, ...F };
      });
    return {
      href: n,
      cropCSSVars: K,
      desktopCropParams: P,
      mobileCropParams: V,
      desktopTop: w,
      desktopLeft: D,
      mobileLeft: U,
      mobileTop: B,
      desktopTopPercentWithOffset: S,
      desktopLeftPercentWithOffset: b,
    };
  },
  wg = {
    __name: "GridImageProviderUser",
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      lcp: { type: Object, default: () => ({}) },
      mobileBlockPadding: { type: String, default: "0px" },
      elementWidth: { type: Number, default: null },
      elementHeight: { type: Number, default: null },
      mobileElementWidth: { type: Number, default: null },
      mobileElementHeight: { type: Number, default: null },
      resetMobilePosition: { type: Boolean, default: !0 },
      currentLocale: { type: String, required: !0 },
      mobileBorderRadius: { type: Number, default: 0 },
      desktopBorderRadius: { type: Number, default: 0 },
      shapeMaskSource: { type: String, default: null },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: a }) {
      a(), St((q) => ({ e3c7ca36: O.value, d239673a: N.value }));
      const t = e,
        { addImagesToLightbox: n } = sn(),
        { siteId: r, getPagePathFromId: i } = rt(),
        {
          cropCSSVars: o,
          desktopCropParams: s,
          mobileCropParams: l,
          href: d,
        } = Ws(t, {
          href: c(() =>
            t.data.linkType === Io
              ? i({ pageId: t.data.linkedPageId })
              : t.data.href
          ),
        }),
        p = (q) => {
          const { fullResolutionWidth: B, fullResolutionHeight: I } = t.data,
            {
              left: U,
              top: V,
              right: K,
              bottom: k,
              imageWidth: h,
              imageHeight: F,
            } = q,
            j = U / h,
            ae = V / F,
            le = K / h,
            Y = k / F;
          return { left: B * j, top: I * ae, right: B * le, bottom: I * Y };
        },
        u = (q) => {
          const { top: B, right: I, bottom: U, left: V } = p(q);
          return `${B};${I};${U};${V}`;
        },
        g = c(() => [t.data.settings.origin, t.data.settings.path, r.value]),
        y = c(() =>
          o.value
            ? lt(...g.value, {
                width: t.elementWidth,
                height: t.elementHeight,
                shouldContain: !1,
                trim: u(s.value),
              })
            : lt(...g.value, {
                width: t.elementWidth,
                height: t.elementHeight,
                shouldContain:
                  t.data.settings.styles["object-fit"] === "contain",
              })
        ),
        f = c(() => tn(t.data.settings.path) === "svg"),
        _ = c(() => t.mobileElementWidth && t.mobileElementHeight),
        S = c(() =>
          !t.mobileElementHeight || t.mobileElementHeight < 0
            ? y.value
            : o.value
            ? lt(...g.value, {
                width: t.mobileElementWidth,
                height: t.mobileElementHeight,
                shouldContain: !1,
                trim: u(l.value),
              })
            : lt(...g.value, {
                width: t.mobileElementWidth,
                height: t.mobileElementHeight,
                shouldContain: !1,
              })
        ),
        w = c(() =>
          o.value
            ? Ha(...g.value, {
                width: t.elementWidth,
                height: t.elementHeight,
                shouldContain: !1,
                mobilePadding: 0,
                trim: u(s.value),
              })
            : Ha(...g.value, {
                width: t.elementWidth,
                height: t.elementHeight,
                shouldContain:
                  t.data.settings.styles["object-fit"] === "contain",
              })
        ),
        b = c(() =>
          !t.mobileElementHeight || t.mobileElementHeight < 0
            ? w.value
            : o.value
            ? Ha(...g.value, {
                width: t.mobileElementWidth,
                height: t.mobileElementHeight,
                shouldContain: !1,
                mobilePadding: 0,
                trim: u(l.value),
              })
            : Ha(...g.value, {
                width: t.mobileElementWidth,
                height: t.mobileElementHeight,
                mobilePadding: 0,
                shouldContain: !1,
              })
        ),
        D = c(() => {
          const { right: q } = rn(t.mobileBlockPadding ?? ""),
            B = q ? Number.parseInt(q, 10) : null;
          return Hn(t.elementWidth, B);
        }),
        P = () => {
          t.data.settings.clickAction === jr &&
            n({
              src: lt(t.data.settings.origin, t.data.settings.path, r.value),
              srcset: Aa(t.data.settings.origin, t.data.settings.path, r.value),
              alt: t.data.settings.alt,
            });
        },
        O = c(() => `${t.elementHeight}px`),
        N = c(() => `${t.mobileElementHeight}px`),
        x = c(() => t.data.settings.alt),
        X = c(() => (t.data.settings.clickAction === ts ? "a" : "div")),
        W = c(() => t.data.target),
        T = c(() => t.data.rel),
        R = c(() => t.data.settings.clickAction === jr),
        H = {
          props: t,
          addImagesToLightbox: n,
          siteId: r,
          getPagePathFromId: i,
          cropCSSVars: o,
          desktopCropParams: s,
          mobileCropParams: l,
          href: d,
          calculateFullResolutionTrim: p,
          constructTrimParamForCloudflare: u,
          imagePathParams: g,
          src: y,
          isSvg: f,
          isMobileLayout: _,
          mobileSrc: S,
          srcset: w,
          mobileSrcset: b,
          sizes: D,
          handleImageClick: P,
          elementHeightCssVar: O,
          mobileElementHeightCssVar: N,
          alt: x,
          tagName: X,
          target: W,
          rel: T,
          isLightboxEnabled: R,
          computed: c,
          GridImage: vu,
          get useLightbox() {
            return sn;
          },
          get IMAGE_CLICK_ACTION_LINK() {
            return ts;
          },
          get IMAGE_CLICK_ACTION_LIGHTBOX() {
            return jr;
          },
          get LINK_TYPE_INTERNAL() {
            return Io;
          },
          get getOptimizedSrc() {
            return lt;
          },
          get getGridItemSrcset() {
            return Ha;
          },
          get getGridItemSizes() {
            return Hn;
          },
          get getFullWidthSrcset() {
            return Aa;
          },
          get parseCSSSides() {
            return rn;
          },
          get useGridImage() {
            return Ws;
          },
          get getExtension() {
            return tn;
          },
          get useSiteGlobal() {
            return rt;
          },
        };
      return (
        Object.defineProperty(H, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        H
      );
    },
  },
  kg = ["id"];
function Sg(e, a, t, n, r, i) {
  return (
    m(),
    v(
      "div",
      {
        id: t.id,
        class: ee([
          "image-wrapper",
          { "image-wrapper--layout": n.isMobileLayout },
        ]),
      },
      [
        Ee(
          n.GridImage,
          {
            class: "image-wrapper--desktop",
            alt: n.alt,
            href: n.href,
            sizes: n.sizes,
            src: n.src,
            srcset: n.srcset,
            "tag-name": n.tagName,
            target: n.target,
            rel: n.rel,
            "is-eager": t.lcp.type === "grid-image" && t.lcp.id === t.id,
            "is-lightbox-enabled": n.isLightboxEnabled,
            "element-height": t.elementHeight,
            "element-width": t.elementWidth,
            "shape-mask-source": t.shapeMaskSource,
            "reset-mobile-position": t.resetMobilePosition,
            "mobile-border-radius": t.mobileBorderRadius,
            "desktop-border-radius": t.desktopBorderRadius,
            "is-in-preview-mode": t.isInPreviewMode,
            onImageClick: n.handleImageClick,
          },
          null,
          8,
          [
            "alt",
            "href",
            "sizes",
            "src",
            "srcset",
            "tag-name",
            "target",
            "rel",
            "is-eager",
            "is-lightbox-enabled",
            "element-height",
            "element-width",
            "shape-mask-source",
            "reset-mobile-position",
            "mobile-border-radius",
            "desktop-border-radius",
            "is-in-preview-mode",
          ]
        ),
        n.isMobileLayout
          ? (m(),
            G(
              n.GridImage,
              {
                key: 0,
                "is-mobile-image": !0,
                class: "image-wrapper--mobile",
                alt: n.alt,
                href: n.href,
                sizes: n.sizes,
                src: n.mobileSrc,
                srcset: n.mobileSrcset,
                "tag-name": n.tagName,
                "is-svg": n.isSvg,
                target: n.target,
                rel: n.rel,
                "is-eager": t.lcp.type === "grid-image" && t.lcp.id === t.id,
                "is-lightbox-enabled": n.isLightboxEnabled,
                "element-height": t.mobileElementHeight,
                "element-width": t.mobileElementWidth,
                "shape-mask-source": t.shapeMaskSource,
                "reset-mobile-position": t.resetMobilePosition,
                "mobile-border-radius": t.mobileBorderRadius,
                "desktop-border-radius": t.desktopBorderRadius,
                "is-in-preview-mode": t.isInPreviewMode,
                onImageClick: n.handleImageClick,
              },
              null,
              8,
              [
                "alt",
                "href",
                "sizes",
                "src",
                "srcset",
                "tag-name",
                "is-svg",
                "target",
                "rel",
                "is-eager",
                "is-lightbox-enabled",
                "element-height",
                "element-width",
                "shape-mask-source",
                "reset-mobile-position",
                "mobile-border-radius",
                "desktop-border-radius",
                "is-in-preview-mode",
              ]
            ))
          : M("", !0),
      ],
      10,
      kg
    )
  );
}
const Cg = ie(wg, [
  ["render", Sg],
  ["__scopeId", "data-v-aadef881"],
]);
function yu(e, a) {
  return function () {
    return e.apply(a, arguments);
  };
}
const { toString: Tg } = Object.prototype,
  { getPrototypeOf: hi } = Object,
  Dr = ((e) => (a) => {
    const t = Tg.call(a);
    return e[t] || (e[t] = t.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ma = (e) => ((e = e.toLowerCase()), (a) => Dr(a) === e),
  Mr = (e) => (a) => typeof a === e,
  { isArray: fn } = Array,
  Vn = Mr("undefined");
function Pg(e) {
  return (
    e !== null &&
    !Vn(e) &&
    e.constructor !== null &&
    !Vn(e.constructor) &&
    Ft(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const bu = ma("ArrayBuffer");
function Ig(e) {
  let a;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (a = ArrayBuffer.isView(e))
      : (a = e && e.buffer && bu(e.buffer)),
    a
  );
}
const Eg = Mr("string"),
  Ft = Mr("function"),
  _u = Mr("number"),
  Or = (e) => e !== null && typeof e == "object",
  Dg = (e) => e === !0 || e === !1,
  dr = (e) => {
    if (Dr(e) !== "object") return !1;
    const a = hi(e);
    return (
      (a === null ||
        a === Object.prototype ||
        Object.getPrototypeOf(a) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Mg = ma("Date"),
  Og = ma("File"),
  Ag = ma("Blob"),
  Lg = ma("FileList"),
  Bg = (e) => Or(e) && Ft(e.pipe),
  Rg = (e) => {
    let a;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Ft(e.append) &&
          ((a = Dr(e)) === "formdata" ||
            (a === "object" &&
              Ft(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  $g = ma("URLSearchParams"),
  Ng = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Zn(e, a, { allOwnKeys: t = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let n, r;
  if ((typeof e != "object" && (e = [e]), fn(e)))
    for (n = 0, r = e.length; n < r; n++) a.call(null, e[n], n, e);
  else {
    const i = t ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = i.length;
    let s;
    for (n = 0; n < o; n++) (s = i[n]), a.call(null, e[s], s, e);
  }
}
function wu(e, a) {
  a = a.toLowerCase();
  const t = Object.keys(e);
  let n = t.length,
    r;
  for (; n-- > 0; ) if (((r = t[n]), a === r.toLowerCase())) return r;
  return null;
}
const ku =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Su = (e) => !Vn(e) && e !== ku;
function $o() {
  const { caseless: e } = (Su(this) && this) || {},
    a = {},
    t = (n, r) => {
      const i = (e && wu(a, r)) || r;
      dr(a[i]) && dr(n)
        ? (a[i] = $o(a[i], n))
        : dr(n)
        ? (a[i] = $o({}, n))
        : fn(n)
        ? (a[i] = n.slice())
        : (a[i] = n);
    };
  for (let n = 0, r = arguments.length; n < r; n++)
    arguments[n] && Zn(arguments[n], t);
  return a;
}
const xg = (e, a, t, { allOwnKeys: n } = {}) => (
    Zn(
      a,
      (r, i) => {
        t && Ft(r) ? (e[i] = yu(r, t)) : (e[i] = r);
      },
      { allOwnKeys: n }
    ),
    e
  ),
  Hg = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Ug = (e, a, t, n) => {
    (e.prototype = Object.create(a.prototype, n)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: a.prototype }),
      t && Object.assign(e.prototype, t);
  },
  Vg = (e, a, t, n) => {
    let r, i, o;
    const s = {};
    if (((a = a || {}), e == null)) return a;
    do {
      for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0; )
        (o = r[i]), (!n || n(o, e, a)) && !s[o] && ((a[o] = e[o]), (s[o] = !0));
      e = t !== !1 && hi(e);
    } while (e && (!t || t(e, a)) && e !== Object.prototype);
    return a;
  },
  Fg = (e, a, t) => {
    (e = String(e)),
      (t === void 0 || t > e.length) && (t = e.length),
      (t -= a.length);
    const n = e.indexOf(a, t);
    return n !== -1 && n === t;
  },
  Yg = (e) => {
    if (!e) return null;
    if (fn(e)) return e;
    let a = e.length;
    if (!_u(a)) return null;
    const t = new Array(a);
    for (; a-- > 0; ) t[a] = e[a];
    return t;
  },
  qg = (
    (e) => (a) =>
      e && a instanceof e
  )(typeof Uint8Array < "u" && hi(Uint8Array)),
  jg = (e, a) => {
    const n = (e && e[Symbol.iterator]).call(e);
    let r;
    for (; (r = n.next()) && !r.done; ) {
      const i = r.value;
      a.call(e, i[0], i[1]);
    }
  },
  Wg = (e, a) => {
    let t;
    const n = [];
    for (; (t = e.exec(a)) !== null; ) n.push(t);
    return n;
  },
  Gg = ma("HTMLFormElement"),
  zg = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (t, n, r) {
      return n.toUpperCase() + r;
    }),
  Gs = (
    ({ hasOwnProperty: e }) =>
    (a, t) =>
      e.call(a, t)
  )(Object.prototype),
  Kg = ma("RegExp"),
  Cu = (e, a) => {
    const t = Object.getOwnPropertyDescriptors(e),
      n = {};
    Zn(t, (r, i) => {
      let o;
      (o = a(r, i, e)) !== !1 && (n[i] = o || r);
    }),
      Object.defineProperties(e, n);
  },
  Qg = (e) => {
    Cu(e, (a, t) => {
      if (Ft(e) && ["arguments", "caller", "callee"].indexOf(t) !== -1)
        return !1;
      const n = e[t];
      if (Ft(n)) {
        if (((a.enumerable = !1), "writable" in a)) {
          a.writable = !1;
          return;
        }
        a.set ||
          (a.set = () => {
            throw Error("Can not rewrite read-only method '" + t + "'");
          });
      }
    });
  },
  Zg = (e, a) => {
    const t = {},
      n = (r) => {
        r.forEach((i) => {
          t[i] = !0;
        });
      };
    return fn(e) ? n(e) : n(String(e).split(a)), t;
  },
  Xg = () => {},
  Jg = (e, a) => ((e = +e), Number.isFinite(e) ? e : a),
  eo = "abcdefghijklmnopqrstuvwxyz",
  zs = "0123456789",
  Tu = { DIGIT: zs, ALPHA: eo, ALPHA_DIGIT: eo + eo.toUpperCase() + zs },
  eh = (e = 16, a = Tu.ALPHA_DIGIT) => {
    let t = "";
    const { length: n } = a;
    for (; e--; ) t += a[(Math.random() * n) | 0];
    return t;
  };
function th(e) {
  return !!(
    e &&
    Ft(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const ah = (e) => {
    const a = new Array(10),
      t = (n, r) => {
        if (Or(n)) {
          if (a.indexOf(n) >= 0) return;
          if (!("toJSON" in n)) {
            a[r] = n;
            const i = fn(n) ? [] : {};
            return (
              Zn(n, (o, s) => {
                const l = t(o, r + 1);
                !Vn(l) && (i[s] = l);
              }),
              (a[r] = void 0),
              i
            );
          }
        }
        return n;
      };
    return t(e, 0);
  },
  nh = ma("AsyncFunction"),
  rh = (e) => e && (Or(e) || Ft(e)) && Ft(e.then) && Ft(e.catch),
  Z = {
    isArray: fn,
    isArrayBuffer: bu,
    isBuffer: Pg,
    isFormData: Rg,
    isArrayBufferView: Ig,
    isString: Eg,
    isNumber: _u,
    isBoolean: Dg,
    isObject: Or,
    isPlainObject: dr,
    isUndefined: Vn,
    isDate: Mg,
    isFile: Og,
    isBlob: Ag,
    isRegExp: Kg,
    isFunction: Ft,
    isStream: Bg,
    isURLSearchParams: $g,
    isTypedArray: qg,
    isFileList: Lg,
    forEach: Zn,
    merge: $o,
    extend: xg,
    trim: Ng,
    stripBOM: Hg,
    inherits: Ug,
    toFlatObject: Vg,
    kindOf: Dr,
    kindOfTest: ma,
    endsWith: Fg,
    toArray: Yg,
    forEachEntry: jg,
    matchAll: Wg,
    isHTMLForm: Gg,
    hasOwnProperty: Gs,
    hasOwnProp: Gs,
    reduceDescriptors: Cu,
    freezeMethods: Qg,
    toObjectSet: Zg,
    toCamelCase: zg,
    noop: Xg,
    toFiniteNumber: Jg,
    findKey: wu,
    global: ku,
    isContextDefined: Su,
    ALPHABET: Tu,
    generateString: eh,
    isSpecCompliantForm: th,
    toJSONObject: ah,
    isAsyncFn: nh,
    isThenable: rh,
  };
function Ue(e, a, t, n, r) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    a && (this.code = a),
    t && (this.config = t),
    n && (this.request = n),
    r && (this.response = r);
}
Z.inherits(Ue, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: Z.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Pu = Ue.prototype,
  Iu = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Iu[e] = { value: e };
});
Object.defineProperties(Ue, Iu);
Object.defineProperty(Pu, "isAxiosError", { value: !0 });
Ue.from = (e, a, t, n, r, i) => {
  const o = Object.create(Pu);
  return (
    Z.toFlatObject(
      e,
      o,
      function (l) {
        return l !== Error.prototype;
      },
      (s) => s !== "isAxiosError"
    ),
    Ue.call(o, e.message, a, t, n, r),
    (o.cause = e),
    (o.name = e.name),
    i && Object.assign(o, i),
    o
  );
};
const oh = null;
function No(e) {
  return Z.isPlainObject(e) || Z.isArray(e);
}
function Eu(e) {
  return Z.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ks(e, a, t) {
  return e
    ? e
        .concat(a)
        .map(function (r, i) {
          return (r = Eu(r)), !t && i ? "[" + r + "]" : r;
        })
        .join(t ? "." : "")
    : a;
}
function ih(e) {
  return Z.isArray(e) && !e.some(No);
}
const sh = Z.toFlatObject(Z, {}, null, function (a) {
  return /^is[A-Z]/.test(a);
});
function Ar(e, a, t) {
  if (!Z.isObject(e)) throw new TypeError("target must be an object");
  (a = a || new FormData()),
    (t = Z.toFlatObject(
      t,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (_, S) {
        return !Z.isUndefined(S[_]);
      }
    ));
  const n = t.metaTokens,
    r = t.visitor || p,
    i = t.dots,
    o = t.indexes,
    l = (t.Blob || (typeof Blob < "u" && Blob)) && Z.isSpecCompliantForm(a);
  if (!Z.isFunction(r)) throw new TypeError("visitor must be a function");
  function d(f) {
    if (f === null) return "";
    if (Z.isDate(f)) return f.toISOString();
    if (!l && Z.isBlob(f))
      throw new Ue("Blob is not supported. Use a Buffer instead.");
    return Z.isArrayBuffer(f) || Z.isTypedArray(f)
      ? l && typeof Blob == "function"
        ? new Blob([f])
        : Buffer.from(f)
      : f;
  }
  function p(f, _, S) {
    let w = f;
    if (f && !S && typeof f == "object") {
      if (Z.endsWith(_, "{}"))
        (_ = n ? _ : _.slice(0, -2)), (f = JSON.stringify(f));
      else if (
        (Z.isArray(f) && ih(f)) ||
        ((Z.isFileList(f) || Z.endsWith(_, "[]")) && (w = Z.toArray(f)))
      )
        return (
          (_ = Eu(_)),
          w.forEach(function (D, P) {
            !(Z.isUndefined(D) || D === null) &&
              a.append(
                o === !0 ? Ks([_], P, i) : o === null ? _ : _ + "[]",
                d(D)
              );
          }),
          !1
        );
    }
    return No(f) ? !0 : (a.append(Ks(S, _, i), d(f)), !1);
  }
  const u = [],
    g = Object.assign(sh, {
      defaultVisitor: p,
      convertValue: d,
      isVisitable: No,
    });
  function y(f, _) {
    if (!Z.isUndefined(f)) {
      if (u.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + _.join("."));
      u.push(f),
        Z.forEach(f, function (w, b) {
          (!(Z.isUndefined(w) || w === null) &&
            r.call(a, w, Z.isString(b) ? b.trim() : b, _, g)) === !0 &&
            y(w, _ ? _.concat(b) : [b]);
        }),
        u.pop();
    }
  }
  if (!Z.isObject(e)) throw new TypeError("data must be an object");
  return y(e), a;
}
function Qs(e) {
  const a = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (n) {
    return a[n];
  });
}
function fi(e, a) {
  (this._pairs = []), e && Ar(e, this, a);
}
const Du = fi.prototype;
Du.append = function (a, t) {
  this._pairs.push([a, t]);
};
Du.toString = function (a) {
  const t = a
    ? function (n) {
        return a.call(this, n, Qs);
      }
    : Qs;
  return this._pairs
    .map(function (r) {
      return t(r[0]) + "=" + t(r[1]);
    }, "")
    .join("&");
};
function lh(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Mu(e, a, t) {
  if (!a) return e;
  const n = (t && t.encode) || lh,
    r = t && t.serialize;
  let i;
  if (
    (r
      ? (i = r(a, t))
      : (i = Z.isURLSearchParams(a) ? a.toString() : new fi(a, t).toString(n)),
    i)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class Zs {
  constructor() {
    this.handlers = [];
  }
  use(a, t, n) {
    return (
      this.handlers.push({
        fulfilled: a,
        rejected: t,
        synchronous: n ? n.synchronous : !1,
        runWhen: n ? n.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(a) {
    this.handlers[a] && (this.handlers[a] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(a) {
    Z.forEach(this.handlers, function (n) {
      n !== null && a(n);
    });
  }
}
const Ou = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  uh = typeof URLSearchParams < "u" ? URLSearchParams : fi,
  ch = typeof FormData < "u" ? FormData : null,
  dh = typeof Blob < "u" ? Blob : null,
  mh = {
    isBrowser: !0,
    classes: { URLSearchParams: uh, FormData: ch, Blob: dh },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Au = typeof window < "u" && typeof document < "u",
  ph = ((e) => Au && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  gh =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  hh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Au,
        hasStandardBrowserEnv: ph,
        hasStandardBrowserWebWorkerEnv: gh,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  sa = { ...hh, ...mh };
function fh(e, a) {
  return Ar(
    e,
    new sa.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (t, n, r, i) {
          return sa.isNode && Z.isBuffer(t)
            ? (this.append(n, t.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      a
    )
  );
}
function vh(e) {
  return Z.matchAll(/\w+|\[(\w*)]/g, e).map((a) =>
    a[0] === "[]" ? "" : a[1] || a[0]
  );
}
function yh(e) {
  const a = {},
    t = Object.keys(e);
  let n;
  const r = t.length;
  let i;
  for (n = 0; n < r; n++) (i = t[n]), (a[i] = e[i]);
  return a;
}
function Lu(e) {
  function a(t, n, r, i) {
    let o = t[i++];
    if (o === "__proto__") return !0;
    const s = Number.isFinite(+o),
      l = i >= t.length;
    return (
      (o = !o && Z.isArray(r) ? r.length : o),
      l
        ? (Z.hasOwnProp(r, o) ? (r[o] = [r[o], n]) : (r[o] = n), !s)
        : ((!r[o] || !Z.isObject(r[o])) && (r[o] = []),
          a(t, n, r[o], i) && Z.isArray(r[o]) && (r[o] = yh(r[o])),
          !s)
    );
  }
  if (Z.isFormData(e) && Z.isFunction(e.entries)) {
    const t = {};
    return (
      Z.forEachEntry(e, (n, r) => {
        a(vh(n), r, t, 0);
      }),
      t
    );
  }
  return null;
}
function bh(e, a, t) {
  if (Z.isString(e))
    try {
      return (a || JSON.parse)(e), Z.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError") throw n;
    }
  return (t || JSON.stringify)(e);
}
const vi = {
  transitional: Ou,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (a, t) {
      const n = t.getContentType() || "",
        r = n.indexOf("application/json") > -1,
        i = Z.isObject(a);
      if ((i && Z.isHTMLForm(a) && (a = new FormData(a)), Z.isFormData(a)))
        return r ? JSON.stringify(Lu(a)) : a;
      if (
        Z.isArrayBuffer(a) ||
        Z.isBuffer(a) ||
        Z.isStream(a) ||
        Z.isFile(a) ||
        Z.isBlob(a)
      )
        return a;
      if (Z.isArrayBufferView(a)) return a.buffer;
      if (Z.isURLSearchParams(a))
        return (
          t.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          a.toString()
        );
      let s;
      if (i) {
        if (n.indexOf("application/x-www-form-urlencoded") > -1)
          return fh(a, this.formSerializer).toString();
        if ((s = Z.isFileList(a)) || n.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return Ar(
            s ? { "files[]": a } : a,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return i || r ? (t.setContentType("application/json", !1), bh(a)) : a;
    },
  ],
  transformResponse: [
    function (a) {
      const t = this.transitional || vi.transitional,
        n = t && t.forcedJSONParsing,
        r = this.responseType === "json";
      if (a && Z.isString(a) && ((n && !this.responseType) || r)) {
        const o = !(t && t.silentJSONParsing) && r;
        try {
          return JSON.parse(a);
        } catch (s) {
          if (o)
            throw s.name === "SyntaxError"
              ? Ue.from(s, Ue.ERR_BAD_RESPONSE, this, null, this.response)
              : s;
        }
      }
      return a;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: sa.classes.FormData, Blob: sa.classes.Blob },
  validateStatus: function (a) {
    return a >= 200 && a < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
Z.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  vi.headers[e] = {};
});
const yi = vi,
  _h = Z.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  wh = (e) => {
    const a = {};
    let t, n, r;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (r = o.indexOf(":")),
              (t = o.substring(0, r).trim().toLowerCase()),
              (n = o.substring(r + 1).trim()),
              !(!t || (a[t] && _h[t])) &&
                (t === "set-cookie"
                  ? a[t]
                    ? a[t].push(n)
                    : (a[t] = [n])
                  : (a[t] = a[t] ? a[t] + ", " + n : n));
          }),
      a
    );
  },
  Xs = Symbol("internals");
function kn(e) {
  return e && String(e).trim().toLowerCase();
}
function mr(e) {
  return e === !1 || e == null ? e : Z.isArray(e) ? e.map(mr) : String(e);
}
function kh(e) {
  const a = Object.create(null),
    t = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; (n = t.exec(e)); ) a[n[1]] = n[2];
  return a;
}
const Sh = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function to(e, a, t, n, r) {
  if (Z.isFunction(n)) return n.call(this, a, t);
  if ((r && (a = t), !!Z.isString(a))) {
    if (Z.isString(n)) return a.indexOf(n) !== -1;
    if (Z.isRegExp(n)) return n.test(a);
  }
}
function Ch(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (a, t, n) => t.toUpperCase() + n);
}
function Th(e, a) {
  const t = Z.toCamelCase(" " + a);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + t, {
      value: function (r, i, o) {
        return this[n].call(this, a, r, i, o);
      },
      configurable: !0,
    });
  });
}
class Lr {
  constructor(a) {
    a && this.set(a);
  }
  set(a, t, n) {
    const r = this;
    function i(s, l, d) {
      const p = kn(l);
      if (!p) throw new Error("header name must be a non-empty string");
      const u = Z.findKey(r, p);
      (!u || r[u] === void 0 || d === !0 || (d === void 0 && r[u] !== !1)) &&
        (r[u || l] = mr(s));
    }
    const o = (s, l) => Z.forEach(s, (d, p) => i(d, p, l));
    return (
      Z.isPlainObject(a) || a instanceof this.constructor
        ? o(a, t)
        : Z.isString(a) && (a = a.trim()) && !Sh(a)
        ? o(wh(a), t)
        : a != null && i(t, a, n),
      this
    );
  }
  get(a, t) {
    if (((a = kn(a)), a)) {
      const n = Z.findKey(this, a);
      if (n) {
        const r = this[n];
        if (!t) return r;
        if (t === !0) return kh(r);
        if (Z.isFunction(t)) return t.call(this, r, n);
        if (Z.isRegExp(t)) return t.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(a, t) {
    if (((a = kn(a)), a)) {
      const n = Z.findKey(this, a);
      return !!(n && this[n] !== void 0 && (!t || to(this, this[n], n, t)));
    }
    return !1;
  }
  delete(a, t) {
    const n = this;
    let r = !1;
    function i(o) {
      if (((o = kn(o)), o)) {
        const s = Z.findKey(n, o);
        s && (!t || to(n, n[s], s, t)) && (delete n[s], (r = !0));
      }
    }
    return Z.isArray(a) ? a.forEach(i) : i(a), r;
  }
  clear(a) {
    const t = Object.keys(this);
    let n = t.length,
      r = !1;
    for (; n--; ) {
      const i = t[n];
      (!a || to(this, this[i], i, a, !0)) && (delete this[i], (r = !0));
    }
    return r;
  }
  normalize(a) {
    const t = this,
      n = {};
    return (
      Z.forEach(this, (r, i) => {
        const o = Z.findKey(n, i);
        if (o) {
          (t[o] = mr(r)), delete t[i];
          return;
        }
        const s = a ? Ch(i) : String(i).trim();
        s !== i && delete t[i], (t[s] = mr(r)), (n[s] = !0);
      }),
      this
    );
  }
  concat(...a) {
    return this.constructor.concat(this, ...a);
  }
  toJSON(a) {
    const t = Object.create(null);
    return (
      Z.forEach(this, (n, r) => {
        n != null && n !== !1 && (t[r] = a && Z.isArray(n) ? n.join(", ") : n);
      }),
      t
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([a, t]) => a + ": " + t).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(a) {
    return a instanceof this ? a : new this(a);
  }
  static concat(a, ...t) {
    const n = new this(a);
    return t.forEach((r) => n.set(r)), n;
  }
  static accessor(a) {
    const n = (this[Xs] = this[Xs] = { accessors: {} }).accessors,
      r = this.prototype;
    function i(o) {
      const s = kn(o);
      n[s] || (Th(r, o), (n[s] = !0));
    }
    return Z.isArray(a) ? a.forEach(i) : i(a), this;
  }
}
Lr.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
Z.reduceDescriptors(Lr.prototype, ({ value: e }, a) => {
  let t = a[0].toUpperCase() + a.slice(1);
  return {
    get: () => e,
    set(n) {
      this[t] = n;
    },
  };
});
Z.freezeMethods(Lr);
const ba = Lr;
function ao(e, a) {
  const t = this || yi,
    n = a || t,
    r = ba.from(n.headers);
  let i = n.data;
  return (
    Z.forEach(e, function (s) {
      i = s.call(t, i, r.normalize(), a ? a.status : void 0);
    }),
    r.normalize(),
    i
  );
}
function Bu(e) {
  return !!(e && e.__CANCEL__);
}
function Xn(e, a, t) {
  Ue.call(this, e ?? "canceled", Ue.ERR_CANCELED, a, t),
    (this.name = "CanceledError");
}
Z.inherits(Xn, Ue, { __CANCEL__: !0 });
function Ph(e, a, t) {
  const n = t.config.validateStatus;
  !t.status || !n || n(t.status)
    ? e(t)
    : a(
        new Ue(
          "Request failed with status code " + t.status,
          [Ue.ERR_BAD_REQUEST, Ue.ERR_BAD_RESPONSE][
            Math.floor(t.status / 100) - 4
          ],
          t.config,
          t.request,
          t
        )
      );
}
const Ih = sa.hasStandardBrowserEnv
  ? {
      write(e, a, t, n, r, i) {
        const o = [e + "=" + encodeURIComponent(a)];
        Z.isNumber(t) && o.push("expires=" + new Date(t).toGMTString()),
          Z.isString(n) && o.push("path=" + n),
          Z.isString(r) && o.push("domain=" + r),
          i === !0 && o.push("secure"),
          (document.cookie = o.join("; "));
      },
      read(e) {
        const a = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return a ? decodeURIComponent(a[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function Eh(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Dh(e, a) {
  return a ? e.replace(/\/?\/$/, "") + "/" + a.replace(/^\/+/, "") : e;
}
function Ru(e, a) {
  return e && !Eh(a) ? Dh(e, a) : a;
}
const Mh = sa.hasStandardBrowserEnv
  ? (function () {
      const a = /(msie|trident)/i.test(navigator.userAgent),
        t = document.createElement("a");
      let n;
      function r(i) {
        let o = i;
        return (
          a && (t.setAttribute("href", o), (o = t.href)),
          t.setAttribute("href", o),
          {
            href: t.href,
            protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
            host: t.host,
            search: t.search ? t.search.replace(/^\?/, "") : "",
            hash: t.hash ? t.hash.replace(/^#/, "") : "",
            hostname: t.hostname,
            port: t.port,
            pathname:
              t.pathname.charAt(0) === "/" ? t.pathname : "/" + t.pathname,
          }
        );
      }
      return (
        (n = r(window.location.href)),
        function (o) {
          const s = Z.isString(o) ? r(o) : o;
          return s.protocol === n.protocol && s.host === n.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function Oh(e) {
  const a = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (a && a[1]) || "";
}
function Ah(e, a) {
  e = e || 10;
  const t = new Array(e),
    n = new Array(e);
  let r = 0,
    i = 0,
    o;
  return (
    (a = a !== void 0 ? a : 1e3),
    function (l) {
      const d = Date.now(),
        p = n[i];
      o || (o = d), (t[r] = l), (n[r] = d);
      let u = i,
        g = 0;
      for (; u !== r; ) (g += t[u++]), (u = u % e);
      if (((r = (r + 1) % e), r === i && (i = (i + 1) % e), d - o < a)) return;
      const y = p && d - p;
      return y ? Math.round((g * 1e3) / y) : void 0;
    }
  );
}
function Js(e, a) {
  let t = 0;
  const n = Ah(50, 250);
  return (r) => {
    const i = r.loaded,
      o = r.lengthComputable ? r.total : void 0,
      s = i - t,
      l = n(s),
      d = i <= o;
    t = i;
    const p = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: s,
      rate: l || void 0,
      estimated: l && o && d ? (o - i) / l : void 0,
      event: r,
    };
    (p[a ? "download" : "upload"] = !0), e(p);
  };
}
const Lh = typeof XMLHttpRequest < "u",
  Bh =
    Lh &&
    function (e) {
      return new Promise(function (t, n) {
        let r = e.data;
        const i = ba.from(e.headers).normalize();
        let { responseType: o, withXSRFToken: s } = e,
          l;
        function d() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l);
        }
        let p;
        if (Z.isFormData(r)) {
          if (sa.hasStandardBrowserEnv || sa.hasStandardBrowserWebWorkerEnv)
            i.setContentType(!1);
          else if ((p = i.getContentType()) !== !1) {
            const [_, ...S] = p
              ? p
                  .split(";")
                  .map((w) => w.trim())
                  .filter(Boolean)
              : [];
            i.setContentType([_ || "multipart/form-data", ...S].join("; "));
          }
        }
        let u = new XMLHttpRequest();
        if (e.auth) {
          const _ = e.auth.username || "",
            S = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          i.set("Authorization", "Basic " + btoa(_ + ":" + S));
        }
        const g = Ru(e.baseURL, e.url);
        u.open(e.method.toUpperCase(), Mu(g, e.params, e.paramsSerializer), !0),
          (u.timeout = e.timeout);
        function y() {
          if (!u) return;
          const _ = ba.from(
              "getAllResponseHeaders" in u && u.getAllResponseHeaders()
            ),
            w = {
              data:
                !o || o === "text" || o === "json"
                  ? u.responseText
                  : u.response,
              status: u.status,
              statusText: u.statusText,
              headers: _,
              config: e,
              request: u,
            };
          Ph(
            function (D) {
              t(D), d();
            },
            function (D) {
              n(D), d();
            },
            w
          ),
            (u = null);
        }
        if (
          ("onloadend" in u
            ? (u.onloadend = y)
            : (u.onreadystatechange = function () {
                !u ||
                  u.readyState !== 4 ||
                  (u.status === 0 &&
                    !(u.responseURL && u.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(y);
              }),
          (u.onabort = function () {
            u &&
              (n(new Ue("Request aborted", Ue.ECONNABORTED, e, u)), (u = null));
          }),
          (u.onerror = function () {
            n(new Ue("Network Error", Ue.ERR_NETWORK, e, u)), (u = null);
          }),
          (u.ontimeout = function () {
            let S = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const w = e.transitional || Ou;
            e.timeoutErrorMessage && (S = e.timeoutErrorMessage),
              n(
                new Ue(
                  S,
                  w.clarifyTimeoutError ? Ue.ETIMEDOUT : Ue.ECONNABORTED,
                  e,
                  u
                )
              ),
              (u = null);
          }),
          sa.hasStandardBrowserEnv &&
            (s && Z.isFunction(s) && (s = s(e)), s || (s !== !1 && Mh(g))))
        ) {
          const _ =
            e.xsrfHeaderName && e.xsrfCookieName && Ih.read(e.xsrfCookieName);
          _ && i.set(e.xsrfHeaderName, _);
        }
        r === void 0 && i.setContentType(null),
          "setRequestHeader" in u &&
            Z.forEach(i.toJSON(), function (S, w) {
              u.setRequestHeader(w, S);
            }),
          Z.isUndefined(e.withCredentials) ||
            (u.withCredentials = !!e.withCredentials),
          o && o !== "json" && (u.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            u.addEventListener("progress", Js(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            u.upload &&
            u.upload.addEventListener("progress", Js(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (_) => {
              u &&
                (n(!_ || _.type ? new Xn(null, e, u) : _),
                u.abort(),
                (u = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const f = Oh(g);
        if (f && sa.protocols.indexOf(f) === -1) {
          n(new Ue("Unsupported protocol " + f + ":", Ue.ERR_BAD_REQUEST, e));
          return;
        }
        u.send(r || null);
      });
    },
  xo = { http: oh, xhr: Bh };
Z.forEach(xo, (e, a) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: a });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: a });
  }
});
const el = (e) => `- ${e}`,
  Rh = (e) => Z.isFunction(e) || e === null || e === !1,
  $u = {
    getAdapter: (e) => {
      e = Z.isArray(e) ? e : [e];
      const { length: a } = e;
      let t, n;
      const r = {};
      for (let i = 0; i < a; i++) {
        t = e[i];
        let o;
        if (
          ((n = t),
          !Rh(t) && ((n = xo[(o = String(t)).toLowerCase()]), n === void 0))
        )
          throw new Ue(`Unknown adapter '${o}'`);
        if (n) break;
        r[o || "#" + i] = n;
      }
      if (!n) {
        const i = Object.entries(r).map(
          ([s, l]) =>
            `adapter ${s} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = a
          ? i.length > 1
            ? `since :
` +
              i.map(el).join(`
`)
            : " " + el(i[0])
          : "as no adapter specified";
        throw new Ue(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return n;
    },
    adapters: xo,
  };
function no(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Xn(null, e);
}
function tl(e) {
  return (
    no(e),
    (e.headers = ba.from(e.headers)),
    (e.data = ao.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    $u
      .getAdapter(e.adapter || yi.adapter)(e)
      .then(
        function (n) {
          return (
            no(e),
            (n.data = ao.call(e, e.transformResponse, n)),
            (n.headers = ba.from(n.headers)),
            n
          );
        },
        function (n) {
          return (
            Bu(n) ||
              (no(e),
              n &&
                n.response &&
                ((n.response.data = ao.call(
                  e,
                  e.transformResponse,
                  n.response
                )),
                (n.response.headers = ba.from(n.response.headers)))),
            Promise.reject(n)
          );
        }
      )
  );
}
const al = (e) => (e instanceof ba ? e.toJSON() : e);
function ln(e, a) {
  a = a || {};
  const t = {};
  function n(d, p, u) {
    return Z.isPlainObject(d) && Z.isPlainObject(p)
      ? Z.merge.call({ caseless: u }, d, p)
      : Z.isPlainObject(p)
      ? Z.merge({}, p)
      : Z.isArray(p)
      ? p.slice()
      : p;
  }
  function r(d, p, u) {
    if (Z.isUndefined(p)) {
      if (!Z.isUndefined(d)) return n(void 0, d, u);
    } else return n(d, p, u);
  }
  function i(d, p) {
    if (!Z.isUndefined(p)) return n(void 0, p);
  }
  function o(d, p) {
    if (Z.isUndefined(p)) {
      if (!Z.isUndefined(d)) return n(void 0, d);
    } else return n(void 0, p);
  }
  function s(d, p, u) {
    if (u in a) return n(d, p);
    if (u in e) return n(void 0, d);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: s,
    headers: (d, p) => r(al(d), al(p), !0),
  };
  return (
    Z.forEach(Object.keys(Object.assign({}, e, a)), function (p) {
      const u = l[p] || r,
        g = u(e[p], a[p], p);
      (Z.isUndefined(g) && u !== s) || (t[p] = g);
    }),
    t
  );
}
const Nu = "1.6.7",
  bi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, a) => {
    bi[e] = function (n) {
      return typeof n === e || "a" + (a < 1 ? "n " : " ") + e;
    };
  }
);
const nl = {};
bi.transitional = function (a, t, n) {
  function r(i, o) {
    return (
      "[Axios v" +
      Nu +
      "] Transitional option '" +
      i +
      "'" +
      o +
      (n ? ". " + n : "")
    );
  }
  return (i, o, s) => {
    if (a === !1)
      throw new Ue(
        r(o, " has been removed" + (t ? " in " + t : "")),
        Ue.ERR_DEPRECATED
      );
    return (
      t &&
        !nl[o] &&
        ((nl[o] = !0),
        console.warn(
          r(
            o,
            " has been deprecated since v" +
              t +
              " and will be removed in the near future"
          )
        )),
      a ? a(i, o, s) : !0
    );
  };
};
function $h(e, a, t) {
  if (typeof e != "object")
    throw new Ue("options must be an object", Ue.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let r = n.length;
  for (; r-- > 0; ) {
    const i = n[r],
      o = a[i];
    if (o) {
      const s = e[i],
        l = s === void 0 || o(s, i, e);
      if (l !== !0)
        throw new Ue("option " + i + " must be " + l, Ue.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (t !== !0) throw new Ue("Unknown option " + i, Ue.ERR_BAD_OPTION);
  }
}
const Ho = { assertOptions: $h, validators: bi },
  Sa = Ho.validators;
class br {
  constructor(a) {
    (this.defaults = a),
      (this.interceptors = { request: new Zs(), response: new Zs() });
  }
  async request(a, t) {
    try {
      return await this._request(a, t);
    } catch (n) {
      if (n instanceof Error) {
        let r;
        Error.captureStackTrace
          ? Error.captureStackTrace((r = {}))
          : (r = new Error());
        const i = r.stack ? r.stack.replace(/^.+\n/, "") : "";
        n.stack
          ? i &&
            !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
            (n.stack +=
              `
` + i)
          : (n.stack = i);
      }
      throw n;
    }
  }
  _request(a, t) {
    typeof a == "string" ? ((t = t || {}), (t.url = a)) : (t = a || {}),
      (t = ln(this.defaults, t));
    const { transitional: n, paramsSerializer: r, headers: i } = t;
    n !== void 0 &&
      Ho.assertOptions(
        n,
        {
          silentJSONParsing: Sa.transitional(Sa.boolean),
          forcedJSONParsing: Sa.transitional(Sa.boolean),
          clarifyTimeoutError: Sa.transitional(Sa.boolean),
        },
        !1
      ),
      r != null &&
        (Z.isFunction(r)
          ? (t.paramsSerializer = { serialize: r })
          : Ho.assertOptions(
              r,
              { encode: Sa.function, serialize: Sa.function },
              !0
            )),
      (t.method = (t.method || this.defaults.method || "get").toLowerCase());
    let o = i && Z.merge(i.common, i[t.method]);
    i &&
      Z.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (f) => {
          delete i[f];
        }
      ),
      (t.headers = ba.concat(o, i));
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function (_) {
      (typeof _.runWhen == "function" && _.runWhen(t) === !1) ||
        ((l = l && _.synchronous), s.unshift(_.fulfilled, _.rejected));
    });
    const d = [];
    this.interceptors.response.forEach(function (_) {
      d.push(_.fulfilled, _.rejected);
    });
    let p,
      u = 0,
      g;
    if (!l) {
      const f = [tl.bind(this), void 0];
      for (
        f.unshift.apply(f, s),
          f.push.apply(f, d),
          g = f.length,
          p = Promise.resolve(t);
        u < g;

      )
        p = p.then(f[u++], f[u++]);
      return p;
    }
    g = s.length;
    let y = t;
    for (u = 0; u < g; ) {
      const f = s[u++],
        _ = s[u++];
      try {
        y = f(y);
      } catch (S) {
        _.call(this, S);
        break;
      }
    }
    try {
      p = tl.call(this, y);
    } catch (f) {
      return Promise.reject(f);
    }
    for (u = 0, g = d.length; u < g; ) p = p.then(d[u++], d[u++]);
    return p;
  }
  getUri(a) {
    a = ln(this.defaults, a);
    const t = Ru(a.baseURL, a.url);
    return Mu(t, a.params, a.paramsSerializer);
  }
}
Z.forEach(["delete", "get", "head", "options"], function (a) {
  br.prototype[a] = function (t, n) {
    return this.request(
      ln(n || {}, { method: a, url: t, data: (n || {}).data })
    );
  };
});
Z.forEach(["post", "put", "patch"], function (a) {
  function t(n) {
    return function (i, o, s) {
      return this.request(
        ln(s || {}, {
          method: a,
          headers: n ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: o,
        })
      );
    };
  }
  (br.prototype[a] = t()), (br.prototype[a + "Form"] = t(!0));
});
const pr = br;
class _i {
  constructor(a) {
    if (typeof a != "function")
      throw new TypeError("executor must be a function.");
    let t;
    this.promise = new Promise(function (i) {
      t = i;
    });
    const n = this;
    this.promise.then((r) => {
      if (!n._listeners) return;
      let i = n._listeners.length;
      for (; i-- > 0; ) n._listeners[i](r);
      n._listeners = null;
    }),
      (this.promise.then = (r) => {
        let i;
        const o = new Promise((s) => {
          n.subscribe(s), (i = s);
        }).then(r);
        return (
          (o.cancel = function () {
            n.unsubscribe(i);
          }),
          o
        );
      }),
      a(function (i, o, s) {
        n.reason || ((n.reason = new Xn(i, o, s)), t(n.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(a) {
    if (this.reason) {
      a(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(a) : (this._listeners = [a]);
  }
  unsubscribe(a) {
    if (!this._listeners) return;
    const t = this._listeners.indexOf(a);
    t !== -1 && this._listeners.splice(t, 1);
  }
  static source() {
    let a;
    return {
      token: new _i(function (r) {
        a = r;
      }),
      cancel: a,
    };
  }
}
const Nh = _i;
function xh(e) {
  return function (t) {
    return e.apply(null, t);
  };
}
function Hh(e) {
  return Z.isObject(e) && e.isAxiosError === !0;
}
const Uo = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Uo).forEach(([e, a]) => {
  Uo[a] = e;
});
const Uh = Uo;
function xu(e) {
  const a = new pr(e),
    t = yu(pr.prototype.request, a);
  return (
    Z.extend(t, pr.prototype, a, { allOwnKeys: !0 }),
    Z.extend(t, a, null, { allOwnKeys: !0 }),
    (t.create = function (r) {
      return xu(ln(e, r));
    }),
    t
  );
}
const mt = xu(yi);
mt.Axios = pr;
mt.CanceledError = Xn;
mt.CancelToken = Nh;
mt.isCancel = Bu;
mt.VERSION = Nu;
mt.toFormData = Ar;
mt.AxiosError = Ue;
mt.Cancel = mt.CanceledError;
mt.all = function (a) {
  return Promise.all(a);
};
mt.spread = xh;
mt.isAxiosError = Hh;
mt.mergeConfig = ln;
mt.AxiosHeaders = ba;
mt.formToJSON = (e) => Lu(Z.isHTMLForm(e) ? new FormData(e) : e);
mt.getAdapter = $u.getAdapter;
mt.HttpStatusCode = Uh;
mt.default = mt;
const Vh = se({
    props: {
      src: { type: String, default: null },
      alt: { type: String, default: null },
      poster: { type: String, default: null },
    },
    emits: ["media-load"],
  }),
  Fh = ["src", "poster"],
  Yh = ["src", "alt"];
function qh(e, a, t, n, r, i) {
  return (
    m(),
    v("figure", null, [
      e.src.includes("video") || e.src.includes(".mp4")
        ? (m(),
          v(
            "video",
            {
              key: 0,
              src: e.src,
              poster: e.poster,
              class: "media-item",
              controls: "",
              onProgressOnce: a[0] || (a[0] = (o) => e.$emit("media-load")),
            },
            null,
            40,
            Fh
          ))
        : (m(),
          v(
            "img",
            {
              key: 1,
              src: e.src,
              alt: e.alt,
              class: "media-item",
              onLoad: a[1] || (a[1] = (o) => e.$emit("media-load")),
            },
            null,
            40,
            Yh
          )),
    ])
  );
}
const jh = ie(Vh, [
    ["render", qh],
    ["__scopeId", "data-v-c35ee7e4"],
  ]),
  Wh = se({
    components: { GridInstagramFeedMediaItemFigure: jh },
    props: {
      src: { type: String, default: null },
      alt: { type: String, default: null },
      href: { type: String, default: null },
      poster: { type: String, default: null },
    },
    data() {
      return {
        DATA_ATTRIBUTE_ANIMATION_ROLE: Ma,
        DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE: ni,
        isLoaded: !1,
      };
    },
  }),
  Gh = ["href"],
  zh = { key: 1 },
  Kh = { key: 2, class: "placeholder" };
function Qh(e, a, t, n, r, i) {
  const o = Ce("GridInstagramFeedMediaItemFigure");
  return (
    m(),
    v(
      "div",
      tt({
        class: ["media-wrapper", { loaded: e.isLoaded }],
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]:
          e.DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE,
      }),
      [
        e.src && e.href
          ? (m(),
            v(
              "a",
              {
                key: 0,
                title: "Open instagram page of this image",
                href: e.href,
                rel: "noopener",
                target: "_blank",
              },
              [
                Ee(
                  o,
                  {
                    src: e.src,
                    alt: e.alt,
                    poster: e.poster,
                    onMediaLoad: a[0] || (a[0] = (s) => (e.isLoaded = !0)),
                  },
                  null,
                  8,
                  ["src", "alt", "poster"]
                ),
              ],
              8,
              Gh
            ))
          : e.src && !e.href
          ? (m(),
            v("div", zh, [
              Ee(
                o,
                {
                  src: e.src,
                  alt: e.alt,
                  poster: e.poster,
                  onMediaLoad: a[1] || (a[1] = (s) => (e.isLoaded = !0)),
                },
                null,
                8,
                ["src", "alt", "poster"]
              ),
            ]))
          : (m(), v("div", Kh)),
      ],
      16
    )
  );
}
const Zh = ie(Wh, [
    ["render", Qh],
    ["__scopeId", "data-v-8ece2404"],
  ]),
  Xh = se({
    components: { GridInstagramFeedMediaItem: Zh },
    props: {
      id: { type: String, required: !0 },
      media: { type: Array, default: () => [] },
    },
  }),
  Jh = ["id"];
function ef(e, a, t, n, r, i) {
  const o = Ce("GridInstagramFeedMediaItem");
  return (
    m(),
    v(
      "div",
      { id: e.id, class: "instagram-feed" },
      [
        (m(!0),
        v(
          ge,
          null,
          Se(
            e.media,
            (s) => (
              m(),
              G(
                o,
                {
                  key: s.src,
                  src: s.src,
                  href: s.href,
                  alt: s.alt,
                  poster: s.poster,
                },
                null,
                8,
                ["src", "href", "alt", "poster"]
              )
            )
          ),
          128
        )),
      ],
      8,
      Jh
    )
  );
}
const tf = ie(Xh, [["render", ef]]),
  rl = [
    { alt: "Workstation", id: "qc2YaEHSYsc", src: `${at}/workstation.jpg` },
    {
      alt: "Waterfall between rocks",
      id: "ifnzcFXUmH0",
      src: `${at}/waterfall-between-rocks.jpg`,
    },
    {
      alt: "Trees with snow",
      id: "J2vryWaTqlB",
      src: `${at}/trees-with-snow.png`,
    },
    { alt: "Tree buds", id: "ZzmFPZuw7S1", src: `${at}/tree-buds.jpg` },
    {
      alt: "Tiger drinking water",
      id: "k37Jfax7a6k",
      src: `${at}/tiger-drinking-water.jpg`,
    },
    {
      alt: "Tall well preserved buildings",
      id: "gTNSQDsXWp7",
      src: `${at}/tall-well-preserved-buildings.jpg`,
    },
    {
      alt: "Sunny beautiful wall",
      id: "QEdmdqjqcMf",
      src: `${at}/sunny-beautiful-wall.jpg`,
    },
    { alt: "Stereo gear", id: "iUXujDl2onh", src: `${at}/stereo-gear.jpg` },
    { alt: "Rooftop oasis", id: "LWHjQE4HOv7", src: `${at}/rooftop-oasis.jpg` },
    { alt: "Rocky beach", id: "o4qz1QOQcpJ", src: `${at}/rocky-beach.jpg` },
    {
      alt: "Photographer holding camera",
      id: "VAHQ4wGABhK",
      src: `${at}/photographer-holding-camera.jpg`,
    },
    { alt: "Koi fishes", id: "zg35JVHQ4wG", src: `${at}/koi-fishes.jpg` },
    {
      alt: "Human head artificially created",
      id: "zg35JVl8GY2",
      src: `${at}/human-head-artificially-created.jpg`,
    },
    {
      alt: "Horse eating grass",
      id: "dBwJoATZJBH",
      src: `${at}/horse-eating-grass.jpg`,
    },
    {
      alt: "Fluffy decoration in water",
      id: "HR21NDsphkV",
      src: `${at}/fluffy-docoration-in-water.jpg`,
    },
    {
      alt: "Elk looking at camera",
      id: "oLq0J4X2h2P",
      src: `${at}/elk-looking-at-camera.jpg`,
    },
    {
      alt: "Dog running in snow",
      id: "dbULY2RIxXc",
      src: `${at}/dog-running-in-snow.jpg`,
    },
    {
      alt: "Clean workspace",
      id: "WRmXHA1JA8H",
      src: `${at}/clean-workspace.jpg`,
    },
    {
      alt: "Cinematic food shot",
      id: "YgbHW4EtzbY",
      src: `${at}/cinematic-food-shot.jpg`,
    },
    {
      alt: "Christmas houses",
      id: "Eyoj1y8hvYz",
      src: `${at}/christmas-houses.jpg`,
    },
    {
      alt: "Bird sitting on branch",
      id: "yQKxjLtI8eg",
      src: `${at}/bird-sitting-on-branch.jpg`,
    },
    {
      alt: "Beautiful entry to private property",
      id: "1StnvFtqFjR",
      src: `${at}/beautiful-entry-to-private-property.jpg`,
    },
    {
      alt: "African animals",
      id: "nPjqWNmfFf0",
      src: `${at}/african-animals.jpg`,
    },
    { alt: "Workspace", id: "7gsm5H6lHSH", src: `${at}/workspace.jpg` },
  ],
  af = "https://graph.instagram.com/me/media",
  nf = ["id", "permalink", "caption", "media_url", "thumbnail_url"],
  rf = ({
    elementId: e,
    elementData: a,
    siteId: t,
    getInstagramTokenHandler: n,
    cleanupCallback: r,
  }) => {
    const i = c(() => a.value.settings["item-count"]),
      o = A(null),
      s = A([]),
      l = c(() =>
        s.value.length > 0
          ? s.value.filter(({ src: u }) => typeof u < "u").slice(0, i.value)
          : new Array(i.value).fill({})
      ),
      d = async () => {
        const u = new URL(af);
        u.searchParams.set("fields", nf.join(",")),
          u.searchParams.set("access_token", o.value);
        const g = await fetch(u.toString());
        return g.ok ? (await g.json()).data : Promise.reject(g);
      };
    return {
      media: l,
      init: async () => {
        try {
          o.value = await n({ siteId: t, elementId: e.value });
        } catch {
          s.value = rl;
          return;
        }
        try {
          const u = await d();
          s.value = u.map((g) => ({
            id: g.id,
            src: g.media_url,
            alt: g.caption,
            href: g.permalink,
            poster: g.thumbnail_url,
          }));
        } catch (u) {
          throw ((s.value = rl), r && r(o.value), u);
        }
      },
      itemGap: c(() => a.value.settings.styles["item-gap"]),
    };
  },
  of = se({
    components: { GridInstagramFeed: tf },
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
    },
    emits: ["media-loaded"],
    setup(e, a) {
      const { siteId: t } = rt(),
        n = c(() => e.id),
        r = c(() => e.data),
        i = async ({ siteId: l, elementId: d }) => {
          const { data: p } = await mt.get(
            `https://backend.zyro.com/u1/instagram/token/${l}/${d}`,
            { withCredentials: !1 }
          );
          return p.accessToken;
        },
        { media: o, init: s } = rf({
          elementId: n,
          elementData: r,
          siteId: t.value,
          getInstagramTokenHandler: i,
        });
      return (
        Oe(() => {
          s();
        }),
        je(
          o,
          async (l) => {
            l?.length && (await Ot(), a.emit("media-loaded"));
          },
          { immediate: !1 }
        ),
        { media: o }
      );
    },
  });
function sf(e, a, t, n, r, i) {
  const o = Ce("GridInstagramFeed");
  return m(), G(o, { id: e.id, media: e.media }, null, 8, ["id", "media"]);
}
const lf = ie(of, [["render", sf]]),
  uf = se({
    name: "GridMap",
    props: {
      isIframeLoaded: { type: Boolean, default: !1 },
      shouldRender: { type: Boolean, default: !0 },
      src: { type: String, required: !0 },
    },
    computed: {
      renderSrc() {
        return this.shouldRender ? this.src : null;
      },
    },
  }),
  cf = ["src"],
  df = { class: "grid-map__pin" };
function mf(e, a, t, n, r, i) {
  return (
    m(),
    v(
      "div",
      { class: ee(["grid-map", { "grid-map--loading": !e.isIframeLoaded }]) },
      [
        E(
          "iframe",
          {
            ref: "iframeRef",
            class: "grid-map__frame",
            width: "100%",
            height: "100%",
            src: e.renderSrc,
          },
          null,
          8,
          cf
        ),
        ue(E("div", df, null, 512), [[Zt, !e.isIframeLoaded]]),
      ],
      2
    )
  );
}
const pf = ie(uf, [
    ["render", mf],
    ["__scopeId", "data-v-3b334315"],
  ]),
  gf = (e, a) => {
    try {
      const { isObserved: t } = hu(a),
        n = A(!1),
        r = _a({
          src: c(() => e.data.settings?.src),
          shouldRender: c(() => t.value),
          isIframeLoaded: c(() => n.value),
        }),
        i = ti(() => {
          const o = a.value?.$refs;
          o &&
            (o.iframeRef.addEventListener("load", () => {
              n.value = !0;
            }),
            i());
        });
      return { composedProps: r };
    } catch (t) {
      console.error(t);
    }
  },
  hf = se({
    name: "GridMapProviderUser",
    components: { GridMap: pf },
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      const a = A(null),
        { composedProps: t } = gf(e, a);
      return { mapRef: a, composedProps: t };
    },
  });
function ff(e, a, t, n, r, i) {
  const o = Ce("GridMap");
  return m(), G(o, Qe({ ref: "mapRef" }, e.composedProps), null, 16);
}
const vf = ie(hf, [["render", ff]]),
  yf = se({
    __name: "GridSocialIcons",
    props: {
      links: { default: () => [] },
      preventLinks: { type: Boolean, default: !1 },
      direction: { default: "row" },
      directionMobile: { default: null },
      preventSpacing: { type: Boolean, default: !1 },
      fullHeight: { type: Boolean, default: !1 },
    },
    setup(e, { expose: a }) {
      a();
      const t = e,
        n = c(() => ["social-icons", `social-icons--${t.direction}`]),
        r = c(() => ({
          "--m-icon-direction": t.directionMobile || t.direction,
          "--icon-padding-vertical":
            t.direction === "column" ? "var(--space-between-icons)" : "0",
          "--icon-padding-horizontal":
            t.direction === "row" ? "var(--space-between-icons)" : "0",
          ...(t.fullHeight && { height: "100%" }),
          ...(t.preventSpacing && { "--space-between-icons": "0px" }),
          ...(t.directionMobile && {
            "--m-icon-padding-vertical":
              t.directionMobile === "column"
                ? "var(--space-between-icons)"
                : "0",
            "--m-icon-padding-horizontal":
              t.directionMobile === "row" ? "var(--space-between-icons)" : "0",
          }),
        })),
        i = { props: t, computedClass: n, computedStyles: r };
      return (
        Object.defineProperty(i, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  bf = ["href", "title", "innerHTML"];
function _f(e, a, t, n, r, i) {
  return (
    m(),
    v(
      "div",
      { class: ee(n.computedClass), style: Re(n.computedStyles) },
      [
        (m(!0),
        v(
          ge,
          null,
          Se(
            t.links,
            ({ link: o, svg: s, title: l }) => (
              m(),
              v(
                "a",
                Qe(
                  {
                    key: o,
                    href: o,
                    target: "_blank",
                    rel: "noopener",
                    title: l,
                    class: "social-icons__link",
                  },
                  Kl(
                    {
                      dragstart: t.preventLinks
                        ? (d) => d.preventDefault()
                        : () => null,
                      click: t.preventLinks
                        ? (d) => d.preventDefault()
                        : () => null,
                    },
                    !0
                  ),
                  { innerHTML: s }
                ),
                null,
                16,
                bf
              )
            )
          ),
          128
        )),
      ],
      6
    )
  );
}
const Hu = ie(yf, [
    ["render", _f],
    ["__scopeId", "data-v-723bd2cd"],
  ]),
  wf = (e) => {
    const a = c(() => e.data.settings.styles);
    return _a({
      links: c(() =>
        e.data.links.map((n) => ({ ...n, title: `Go to ${Qd(n.icon)} page` }))
      ),
      direction: c(() => a.value["icon-direction"]),
      directionMobile: c(() => a.value["m-icon-direction"]),
      fullHeight: c(() => !a.value.justify),
      preventSpacing: c(() =>
        a.value["icon-spacing"] !== "center" ||
        a.value["icon-direction"] === "column"
          ? !a.value.justify
          : !a.value.align
      ),
    });
  },
  kf = se({
    components: { GridSocialIcons: Hu },
    props: { data: { type: Object, required: !0 } },
    setup(e, a) {
      return { composedProps: wf(e) };
    },
  });
function Sf(e, a, t, n, r, i) {
  const o = Ce("GridSocialIcons");
  return m(), G(o, tt(_t(e.composedProps)), null, 16);
}
const Cf = ie(kf, [["render", Sf]]),
  Tf = A(null),
  Pf = (e) => {
    const a = c(() => e.data.settings?.priceId || ""),
      t = c(() => e.data.settings?.paymentType || "payment");
    return { stripeInstance: Tf, priceId: a, paymentType: t };
  },
  If = "https://js.stripe.com/v3",
  Ef = se({
    name: "GridStripeButtonProviderUser",
    components: { GridButton: hn },
    props: {
      data: { type: Object, required: !0 },
      successPageSlug: { type: String, required: !0 },
      cancellationPageSlug: { type: String, required: !0 },
      stripePublicApiKey: { type: String, default: "" },
    },
    setup(e) {
      const { getButtonHref: a } = rt(),
        { content: t, type: n } = ci(e, {
          href: c(() =>
            a({
              isFormButton: e.data.settings.isFormButton,
              linkedPageId: e.data.linkedPageId,
              linkType: e.data.linkType,
              href: e.data.href,
            })
          ),
        }),
        { stripeInstance: r, priceId: i, paymentType: o } = Pf(e),
        s = A(!1),
        l = () =>
          new Promise((p, u) => {
            if (!!(r.value && window.Stripe)) {
              p();
              return;
            }
            const y = document.createElement("script");
            y.addEventListener("load", () => {
              window.Stripe &&
                ((r.value = window.Stripe(e.stripePublicApiKey)), p());
            }),
              y.addEventListener("error", () => {
                u();
              }),
              (y.src = If),
              document.head.appendChild(y);
          });
      return {
        content: t,
        type: n,
        isLoadingStripeScript: s,
        handleClick: async () => {
          i.value &&
            ((s.value = !0),
            await l(),
            (s.value = !1),
            r.value
              .redirectToCheckout({
                lineItems: [{ price: i.value, quantity: 1 }],
                mode: o.value,
                successUrl: `${window.location.origin}/${e.successPageSlug}`,
                cancelUrl: `${window.location.origin}/${e.cancellationPageSlug}`,
              })
              .then((p) => {
                p.error && console.error(p.error.message);
              }));
        },
      };
    },
  });
function Df(e, a, t, n, r, i) {
  const o = Ce("GridButton"),
    s = ze("qa");
  return ue(
    (m(),
    G(
      o,
      {
        "tag-name": "button",
        content: e.content,
        type: e.type,
        "is-disabled": e.isLoadingStripeScript,
        onClick: e.handleClick,
      },
      null,
      8,
      ["content", "type", "is-disabled", "onClick"]
    )),
    [[s, "button-stripe-checkout"]]
  );
}
const Mf = ie(Ef, [["render", Df]]),
  Of = {
    __name: "GridTextBox",
    props: {
      textAlign: { type: String, default: null },
      textAlignMobile: { type: String, default: null },
      backgroundColor: { type: String, default: null },
      content: { type: String, default: null },
    },
    setup(e, { expose: a }) {
      a(),
        St((s) => ({
          aaa7845e: r.value,
          "766ab03e": n.value,
          e11f4c5a: i.value,
        }));
      const t = e,
        n = c(() => t.backgroundColor),
        r = c(() => (t.textAlign === "justify" ? "normal" : "break-spaces")),
        i = c(() =>
          t.textAlignMobile && t.textAlignMobile === "justify"
            ? "normal"
            : r.value
        ),
        o = {
          props: t,
          backgroundColor: n,
          whiteSpace: r,
          whiteSpaceMobile: i,
          computed: c,
        };
      return (
        Object.defineProperty(o, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  },
  Af = ["innerHTML"],
  Lf = { key: 1, class: "text-box" };
function Bf(e, a, t, n, r, i) {
  return t.content
    ? (m(),
      v(
        "div",
        { key: 0, class: "text-box", innerHTML: t.content },
        null,
        8,
        Af
      ))
    : (m(), v("div", Lf, [he(e.$slots, "default")]));
}
const Rf = ie(Of, [["render", Bf]]),
  $f = {
    __name: "GridTextBoxProviderUser",
    props: { data: { type: Object, required: !0 } },
    setup(e, { expose: a }) {
      a();
      const t = { GridTextBox: Rf };
      return (
        Object.defineProperty(t, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        t
      );
    },
  };
function Nf(e, a, t, n, r, i) {
  return (
    m(),
    G(
      n.GridTextBox,
      {
        "text-align": t.data.settings.styles.text,
        "text-align-mobile": t.data.settings.styles["m-text"],
        "background-color": t.data.backgroundColor,
        content: t.data.content,
      },
      null,
      8,
      ["text-align", "text-align-mobile", "background-color", "content"]
    )
  );
}
const xf = ie($f, [["render", Nf]]),
  Mt = { YOUTUBE: "youtube", VIMEO: "vimeo" },
  Jn = "0",
  _r = "1",
  Hf = Jn,
  Uf = Jn,
  Vf = _r,
  Ff = Jn,
  Yf = Jn,
  qf = _r;
Mt.YOUTUBE;
const jf = /t=\d+/g,
  Dt = {
    AUTOPLAY: "autoplay",
    LOOP: "loop",
    CONTROLS: "controls",
    AUTOPAUSE: "autopause",
    PLAYLIST: "playlist",
    PLAYSINLINE: "playsinline",
    ALBUM: "h",
    MUTE: { [Mt.YOUTUBE]: "mute", [Mt.VIMEO]: "muted" },
    TIME: "t",
    START: "start",
  },
  Wf = {
    [Mt.YOUTUBE]: "https://www.youtube.com/embed/",
    [Mt.VIMEO]: "https://player.vimeo.com/video/",
  },
  Gf = {
    [Mt.YOUTUBE]:
      /^.*(?:youtu\.be\/|vi?\/|u\/\w\/|embed\/|watch\/|shorts\/|\?vi?=|&vi?=)([^#&?]{11}).*/,
    [Mt.VIMEO]:
      /https:\/\/(?:vimeo.com|player.vimeo.com)\/(?:video\/)?(\d*)(.*)/,
  },
  zf = "https://vimeo.com/api/oembed.json?url=https://vimeo.com",
  Kf = {
    __name: "GridVideo",
    props: {
      renderIframe: { type: Boolean, default: !1 },
      renderPicture: { type: Boolean, default: !0 },
      src: { type: String, required: !0 },
      provider: { type: String, default: Mt.YOUTUBE },
      jpg: { type: String, default: "" },
      webp: { type: String, default: "" },
    },
    setup(e, { expose: a }) {
      a(), St((i) => ({ "60d8e812": n.value }));
      const t = A(!1),
        n = c(() => (t.value ? "transparent" : "var(--color-dark)")),
        r = {
          isIframeLoaded: t,
          backgroundColor: n,
          get PROVIDERS() {
            return Mt;
          },
          computed: c,
          ref: A,
        };
      return (
        Object.defineProperty(r, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        r
      );
    },
  },
  Qf = { class: "video" },
  Zf = ["src"],
  Xf = ["srcset"],
  Jf = ["src"];
function ev(e, a, t, n, r, i) {
  const o = ze("qa");
  return (
    m(),
    v("div", Qf, [
      t.renderIframe
        ? (m(),
          v(
            "iframe",
            {
              key: 0,
              src: t.src,
              class: "video__frame",
              allow:
                "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
              allowfullscreen: "",
              width: "100%",
              height: "100%",
              onLoad: a[0] || (a[0] = (s) => (n.isIframeLoaded = !0)),
            },
            null,
            40,
            Zf
          ))
        : t.renderPicture && (t.jpg || t.webp)
        ? (m(),
          v(
            ge,
            { key: 1 },
            [
              E("picture", null, [
                E(
                  "source",
                  { type: "image/webp", srcset: t.webp },
                  null,
                  8,
                  Xf
                ),
                ue(
                  E(
                    "img",
                    {
                      referrerpolicy: "origin",
                      class: "video__placeholder",
                      height: "100%",
                      width: "100%",
                      src: t.jpg,
                    },
                    null,
                    8,
                    Jf
                  ),
                  [[o, "builder-gridelement-gridvideo"]]
                ),
              ]),
              E(
                "button",
                {
                  type: "button",
                  class: ee(`video__play video__play--${t.provider}`),
                },
                null,
                2
              ),
            ],
            64
          ))
        : M("", !0),
    ])
  );
}
const tv = ie(Kf, [
    ["render", ev],
    ["__scopeId", "data-v-ad3c9850"],
  ]),
  av = async (e) => {
    const n = (await (await fetch(`${zf}/${e}`)).json()).thumbnail_url.replace(
      "_295x166",
      "_720"
    );
    return {
      jpg: n.replace(".webp", ".jpg"),
      webp: n.replace(".jpg", ".webp"),
    };
  },
  nv = async (e, a) => {
    switch (e) {
      case Mt.YOUTUBE:
        return {
          jpg: `https://i.ytimg.com/vi/${a}/hqdefault.jpg`,
          webp: `https://i.ytimg.com/vi_webp/${a}/hqdefault.webp`,
        };
      case Mt.VIMEO:
        return av(a);
      default:
        return { jpg: null, webp: null };
    }
  },
  rv = (e, a, t, n) => {
    const r = a === Mt.VIMEO ? e.split("/")[1] : null,
      i = a === Mt.VIMEO ? e.split("/")[0] : e,
      o = n.match(jf),
      s = a === Mt.YOUTUBE && o ? { [Dt.START]: o[0].slice(2) ?? 0 } : {},
      l = Dt.MUTE[a],
      d = new URLSearchParams({
        [Dt.ALBUM]: r,
        [Dt.PLAYLIST]: i,
        [Dt.AUTOPLAY]: t?.[Dt.AUTOPLAY] ?? Hf,
        [Dt.CONTROLS]: t?.[Dt.CONTROLS] ?? Vf,
        [Dt.LOOP]: t?.[Dt.LOOP] ?? Uf,
        [Dt.AUTOPAUSE]: Ff,
        [Dt.PLAYSINLINE]: qf,
        [l]: Yf,
        ...s,
      }).toString();
    return `${Wf[a]}${i}?${d}`;
  },
  ov = async (e, a) => {
    const t = Object.entries(Gf).find(([, p]) => e?.match(p)),
      n = t && t.length === 2;
    if (!n) return { url: e, isUrlValid: !1 };
    const [r, i] = t,
      o = e.match(i),
      s = [o[1], o[2]].join(""),
      { jpg: l, webp: d } = await nv(r, s);
    return {
      src: rv(s, r, a, e),
      isUrlValid: n,
      jpg: l,
      webp: d,
      provider: r,
      id: s,
    };
  },
  iv = (e) => {
    const a = _a({
        src: null,
        provider: null,
        width: null,
        height: null,
        webp: null,
        jpg: null,
      }),
      t = _a({
        src: c(() => a.src ?? e.data.settings.src),
        provider: c(() => a.provider ?? e.data.settings.provider),
        width: c(() => a.width ?? e.data.settings.width),
        height: c(() => a.height ?? e.data.settings.height),
        webp: c(() => a.webp ?? e.data.settings.webp),
        jpg: c(() => a.jpg ?? e.data.settings.jpg),
      });
    return (
      ti(() => {
        (e.data.settings.src !== t.src || !e.data.settings.jpg) &&
          ov(e.data.settings.src).then((n) => {
            Object.entries(n).forEach(([r, i]) => {
              a[r] = i;
            });
          });
      }),
      { composedProps: t }
    );
  },
  sv = se({
    name: "GridVideoProviderUser",
    components: { GridVideo: tv },
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      const { composedProps: a } = iv(e),
        t = A(null),
        n = c(
          () => e.data.settings.src?.includes(`${[Dt.AUTOPLAY]}=${_r}`) ?? !1
        ),
        r = c(() => {
          const l = Dt.MUTE[a.provider];
          return n.value
            ? a.src.replace(`${[l]}=${Jn}`, `${[l]}=${_r}`)
            : a.src;
        }),
        i = A(!1),
        o = A(!1),
        s = () => {
          const l = new IntersectionObserver(
            ([{ isIntersecting: d }]) => {
              d && (n.value ? (i.value = !0) : (o.value = !0), l.disconnect());
            },
            { threshold: 0 }
          );
          l.observe(t.value.$el), (i.value = !0);
        };
      return (
        Oe(() => {
          s();
        }),
        {
          videoRef: t,
          composedProps: a,
          composedSrc: r,
          renderIframe: i,
          renderPicture: o,
        }
      );
    },
  });
function lv(e, a, t, n, r, i) {
  const o = Ce("GridVideo");
  return (
    m(),
    G(
      o,
      Qe({ ref: "videoRef" }, e.composedProps, {
        src: e.composedSrc,
        "render-iframe": e.renderIframe,
        "render-picture": e.renderPicture,
        onClickOnce: a[0] || (a[0] = (s) => (e.renderIframe = !0)),
      }),
      null,
      16,
      ["src", "render-iframe", "render-picture"]
    )
  );
}
const uv = ie(sv, [["render", lv]]),
  cv = se({
    name: "GridShape",
    props: { svg: { type: String, required: !0 } },
  }),
  dv = ["innerHTML"];
function mv(e, a, t, n, r, i) {
  return m(), v("div", { class: "grid-shape", innerHTML: e.svg }, null, 8, dv);
}
const pv = ie(cv, [["render", mv]]),
  gv = se({
    name: "GridShapeProviderUser",
    components: { GridShape: pv },
    props: {
      data: { type: Object, required: !0 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    computed: {
      cssVars() {
        const e = (this.data.mobile.height * 100) / da,
          a = (this.data.desktop.height * 100) / wa;
        return {
          "--shape-height": `${this.data.desktop.height}px`,
          "--m-shape-height": this.isInPreviewMode
            ? `${this.data.mobile.height}px`
            : `${e}vw`,
          "--t-shape-height": `${this.data.mobile.height}px`,
          "--small-desktop-shape-height": `${a}vw`,
          "--shape-color": `${this.data.color}`,
        };
      },
    },
  });
function hv(e, a, t, n, r, i) {
  const o = Ce("GridShape");
  return (
    m(),
    G(o, { svg: e.data.svg, style: Re(e.cssVars) }, null, 8, ["svg", "style"])
  );
}
const fv = ie(gv, [["render", hv]]),
  vv = se({
    props: {
      alt: { type: String, default: null },
      src: { type: String, required: !0 },
      isEager: { type: Boolean, default: !1 },
      objectFit: { type: String, default: "cover" },
      width: { type: Number, default: null },
      height: { type: Number, default: null },
      enableSrcset: { type: Boolean, default: !1 },
      imageOrigin: { type: String, default: "other" },
      isLossless: { type: Boolean, default: !1 },
      siteId: { type: String, default: null },
    },
    data() {
      return { imageUrl: this.src, srcset: null, isLoaded: !1 };
    },
    computed: {
      sizes() {
        return this.enableSrcset ? Hn(this.width, null) : null;
      },
    },
    watch: {
      objectFit(e, a) {
        e !== a &&
          a === "cover" &&
          this.imageUrl.includes("fit=crop") &&
          ((this.imageUrl = this.getImageUrl()),
          (this.srcset = this.getSrcSet()));
      },
    },
    mounted() {
      (this.imageUrl = this.getImageUrl()), (this.srcset = this.getSrcSet());
    },
    methods: {
      getImageUrl() {
        return lt(this.imageOrigin, this.src, this.siteId, {
          width: this.width,
          height: this.height,
          shouldContain: this.objectFit === "contain",
          isLossless: this.isLossless,
        });
      },
      getSrcSet() {
        return this.enableSrcset
          ? Ha(this.imageOrigin, this.src, this.siteId, {
              width: this.width,
              height: this.height,
              shouldContain: this.objectFit === "contain",
              isLossless: this.isLossless,
            })
          : null;
      },
    },
  }),
  yv = ["loading", "src", "alt", "srcset", "sizes"];
function bv(e, a, t, n, r, i) {
  return (
    m(),
    G(
      At,
      { name: "fade", mode: "out-in" },
      {
        default: _e(() => [
          E(
            "img",
            Qe(e.$attrs, {
              loading: e.isEager ? "eager" : "lazy",
              src: e.imageUrl,
              alt: e.alt,
              srcset: e.srcset,
              sizes: e.sizes,
              class: [
                "ecommerce-product-image",
                { "ecommerce-product-image--loading": !e.isLoaded },
              ],
              onLoad: a[0] || (a[0] = (o) => (e.isLoaded = !0)),
              onError: a[1] || (a[1] = (o) => (e.isLoaded = !0)),
            }),
            null,
            16,
            yv
          ),
        ]),
        _: 1,
      }
    )
  );
}
const Br = ie(vv, [["render", bv]]);
function wi(e) {
  return Zl() ? (Xl(e), !0) : !1;
}
function Uu(e) {
  return typeof e == "function" ? e() : L(e);
}
const ki = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const _v = Object.prototype.toString,
  wv = (e) => _v.call(e) === "[object Object]",
  gr = () => {},
  kv = Sv();
function Sv() {
  var e, a;
  return (
    ki &&
    ((e = window?.navigator) == null ? void 0 : e.userAgent) &&
    (/iP(ad|hone|od)/.test(window.navigator.userAgent) ||
      (((a = window?.navigator) == null ? void 0 : a.maxTouchPoints) > 2 &&
        /iPad|Macintosh/.test(window?.navigator.userAgent)))
  );
}
function Cv(e) {
  return e || Ql();
}
function Tv(e, a = !0, t) {
  Cv() ? Oe(e, t) : a ? e() : Ot(e);
}
function la(e) {
  var a;
  const t = Uu(e);
  return (a = t?.$el) != null ? a : t;
}
const Rr = ki ? window : void 0,
  Pv = ki ? window.document : void 0;
function an(...e) {
  let a, t, n, r;
  if (
    (typeof e[0] == "string" || Array.isArray(e[0])
      ? (([t, n, r] = e), (a = Rr))
      : ([a, t, n, r] = e),
    !a)
  )
    return gr;
  Array.isArray(t) || (t = [t]), Array.isArray(n) || (n = [n]);
  const i = [],
    o = () => {
      i.forEach((p) => p()), (i.length = 0);
    },
    s = (p, u, g, y) => (
      p.addEventListener(u, g, y), () => p.removeEventListener(u, g, y)
    ),
    l = je(
      () => [la(a), Uu(r)],
      ([p, u]) => {
        if ((o(), !p)) return;
        const g = wv(u) ? { ...u } : u;
        i.push(...t.flatMap((y) => n.map((f) => s(p, y, f, g))));
      },
      { immediate: !0, flush: "post" }
    ),
    d = () => {
      l(), o();
    };
  return wi(d), d;
}
let ol = !1;
function $r(e, a, t = {}) {
  const {
    window: n = Rr,
    ignore: r = [],
    capture: i = !0,
    detectIframe: o = !1,
  } = t;
  if (!n) return gr;
  kv &&
    !ol &&
    ((ol = !0),
    Array.from(n.document.body.children).forEach((g) =>
      g.addEventListener("click", gr)
    ),
    n.document.documentElement.addEventListener("click", gr));
  let s = !0;
  const l = (g) =>
      r.some((y) => {
        if (typeof y == "string")
          return Array.from(n.document.querySelectorAll(y)).some(
            (f) => f === g.target || g.composedPath().includes(f)
          );
        {
          const f = la(y);
          return f && (g.target === f || g.composedPath().includes(f));
        }
      }),
    p = [
      an(
        n,
        "click",
        (g) => {
          const y = la(e);
          if (!(!y || y === g.target || g.composedPath().includes(y))) {
            if ((g.detail === 0 && (s = !l(g)), !s)) {
              s = !0;
              return;
            }
            a(g);
          }
        },
        { passive: !0, capture: i }
      ),
      an(
        n,
        "pointerdown",
        (g) => {
          const y = la(e);
          s = !l(g) && !!(y && !g.composedPath().includes(y));
        },
        { passive: !0 }
      ),
      o &&
        an(n, "blur", (g) => {
          setTimeout(() => {
            var y;
            const f = la(e);
            ((y = n.document.activeElement) == null ? void 0 : y.tagName) ===
              "IFRAME" &&
              !f?.contains(n.document.activeElement) &&
              a(g);
          }, 0);
        }),
    ].filter(Boolean);
  return () => p.forEach((g) => g());
}
function Iv() {
  const e = A(!1);
  return (
    Ql() &&
      Oe(() => {
        e.value = !0;
      }),
    e
  );
}
function Vu(e) {
  const a = Iv();
  return c(() => (a.value, !!e()));
}
function Ev(e, a, t = {}) {
  const { window: n = Rr, ...r } = t;
  let i;
  const o = Vu(() => n && "MutationObserver" in n),
    s = () => {
      i && (i.disconnect(), (i = void 0));
    },
    l = je(
      () => la(e),
      (u) => {
        s(),
          o.value && n && u && ((i = new MutationObserver(a)), i.observe(u, r));
      },
      { immediate: !0 }
    ),
    d = () => i?.takeRecords(),
    p = () => {
      s(), l();
    };
  return wi(p), { isSupported: o, stop: p, takeRecords: d };
}
function Dv(e = {}) {
  const { document: a = Pv } = e;
  if (!a) return A("visible");
  const t = A(a.visibilityState);
  return (
    an(a, "visibilitychange", () => {
      t.value = a.visibilityState;
    }),
    t
  );
}
function Mv(e, a, t = {}) {
  const { window: n = Rr, ...r } = t;
  let i;
  const o = Vu(() => n && "ResizeObserver" in n),
    s = () => {
      i && (i.disconnect(), (i = void 0));
    },
    l = c(() => (Array.isArray(e) ? e.map((u) => la(u)) : [la(e)])),
    d = je(
      l,
      (u) => {
        if ((s(), o.value && n)) {
          i = new ResizeObserver(a);
          for (const g of u) g && i.observe(g, r);
        }
      },
      { immediate: !0, flush: "post", deep: !0 }
    ),
    p = () => {
      s(), d();
    };
  return wi(p), { isSupported: o, stop: p };
}
function Ov(e, a = {}) {
  const {
      reset: t = !0,
      windowResize: n = !0,
      windowScroll: r = !0,
      immediate: i = !0,
    } = a,
    o = A(0),
    s = A(0),
    l = A(0),
    d = A(0),
    p = A(0),
    u = A(0),
    g = A(0),
    y = A(0);
  function f() {
    const _ = la(e);
    if (!_) {
      t &&
        ((o.value = 0),
        (s.value = 0),
        (l.value = 0),
        (d.value = 0),
        (p.value = 0),
        (u.value = 0),
        (g.value = 0),
        (y.value = 0));
      return;
    }
    const S = _.getBoundingClientRect();
    (o.value = S.height),
      (s.value = S.bottom),
      (l.value = S.left),
      (d.value = S.right),
      (p.value = S.top),
      (u.value = S.width),
      (g.value = S.x),
      (y.value = S.y);
  }
  return (
    Mv(e, f),
    je(
      () => la(e),
      (_) => !_ && f()
    ),
    Ev(e, f, { attributeFilter: ["style", "class"] }),
    r && an("scroll", f, { capture: !0, passive: !0 }),
    n && an("resize", f, { passive: !0 }),
    Tv(() => {
      i && f();
    }),
    {
      height: o,
      bottom: s,
      left: l,
      right: d,
      top: p,
      width: u,
      x: g,
      y,
      update: f,
    }
  );
}
const il = 45,
  Av = se({
    __name: "SiteElementSearchBar",
    props: {
      placeholderText: {},
      noResultsText: {},
      fillColor: {},
      fillColorHover: {},
      textAndIconColor: {},
      textAndIconColorHover: {},
      resultItemHoverColor: {},
      fontFamily: {},
      borderColor: {},
      borderColorHover: {},
      borderRadius: {},
      translations: {},
      siteId: {},
      searchTerm: { default: "" },
      results: { default: null },
      isLoading: { type: Boolean, default: !1 },
    },
    emits: ["update:search-term", "is-dropdown-open"],
    setup(e, { expose: a, emit: t }) {
      a(),
        St((b) => ({
          "45245e45": b.fontFamily,
          c48fbf5c: b.textAndIconColor,
          "60741c0a": b.textAndIconColorHover,
          "6b74e73d": g.value,
          "6169fb25": b.borderColor,
          "0b56f8a4": b.fillColor,
          a82de5d2: b.borderColorHover,
          "121b722e": b.fillColorHover,
          "360a1fa9": b.resultItemHoverColor,
          "44bc226c": n,
        }));
      const n = `${il}px`,
        r = t,
        i = e,
        o = A(null),
        s = A(!1),
        l = A([]),
        d = A(-1),
        p = c(() => i.isLoading),
        u = c(() => i.results),
        g = c(() => `${i.borderRadius}px`),
        y = () => {
          i.results && d.value < i.results.length - 1 && (d.value += 1);
        },
        f = () => {
          d.value > 0 && (d.value -= 1);
        },
        _ = () => {
          const b = l.value[d.value];
          if (!b) return;
          const D = new MouseEvent("click", {
            bubbles: !0,
            cancelable: !0,
            view: window,
          });
          b.dispatchEvent(D);
        },
        S = () => {
          (s.value = !1), r("update:search-term", ""), (d.value = -1);
        };
      je([u, p], () => {
        (s.value = !!u.value || p.value), r("is-dropdown-open", s.value);
      }),
        Oe(() => {
          $r(o, () => {
            S();
          });
        });
      const w = {
        IMAGE_DIMENSIONS_PX: il,
        IMAGE_DIMENSIONS_PX_STRING: n,
        emit: r,
        props: i,
        searchBarRef: o,
        isSearchResultDropdownVisible: s,
        itemLinksRefs: l,
        highlightedItemIndex: d,
        isLoading: p,
        results: u,
        borderRadiusInPx: g,
        highlightNextItem: y,
        highlightPreviousItem: f,
        redirectToHighlightedItem: _,
        dropdownCloseHandler: S,
        ZyroLoader: pi,
        ProductImage: Br,
      };
      return (
        Object.defineProperty(w, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        w
      );
    },
  }),
  Lv = {
    ref: "searchBarRef",
    class: "site-element-search-bar",
    "aria-owns": "search-results",
    tabindex: "0",
    "aria-haspopup": "listbox",
  },
  Bv = { class: "site-element-search-bar__input-wrapper" },
  Rv = ["placeholder", "value", "onKeydown"],
  $v = {
    key: 0,
    id: "search-results",
    role: "listbox",
    class: "site-element-search-bar__dropdown",
  },
  Nv = { key: 1, class: "site-element-search-bar__dropdown-no-results" },
  xv = ["area-selected"],
  Hv = ["href", "onMouseover", "onFocus", "onKeydown"],
  Uv = { class: "search-result-item__content" },
  Vv = { class: "search-result-item__title" },
  Fv = { class: "search-result-item__price" },
  Yv = { key: 0 },
  qv = { key: 0 },
  jv = { key: 0, class: "search-result-item__sale-price" },
  Wv = { key: 1 };
function Gv(e, a, t, n, r, i) {
  return (
    m(),
    v(
      "div",
      Lv,
      [
        E("div", Bv, [
          E(
            "input",
            {
              class: "site-element-search-bar__input",
              placeholder: n.props.placeholderText,
              value: n.props.searchTerm,
              onInput:
                a[0] ||
                (a[0] = (o) => n.emit("update:search-term", o.target.value)),
              onKeydown: [
                De(Me(n.highlightNextItem, ["prevent"]), ["down"]),
                De(Me(n.highlightPreviousItem, ["prevent"]), ["up"]),
                De(n.redirectToHighlightedItem, ["enter"]),
              ],
            },
            null,
            40,
            Rv
          ),
          n.isSearchResultDropdownVisible
            ? (m(),
              v("div", {
                key: 0,
                class: "site-element-search-bar__dropdown-close",
                onClick: n.dropdownCloseHandler,
              }))
            : M("", !0),
        ]),
        n.isSearchResultDropdownVisible
          ? (m(),
            v("ul", $v, [
              n.props.isLoading
                ? (m(),
                  G(
                    n.ZyroLoader,
                    {
                      key: 0,
                      size: "30px",
                      color: n.props.textAndIconColorHover,
                      class: "site-element-search-bar__loader",
                    },
                    null,
                    8,
                    ["color"]
                  ))
                : !n.props.results || n.props.results.length === 0
                ? (m(), v("p", Nv, J(t.noResultsText), 1))
                : (m(!0),
                  v(
                    ge,
                    { key: 2 },
                    Se(
                      n.props.results,
                      (o, s) => (
                        m(),
                        v(
                          "li",
                          {
                            key: o.id,
                            role: "option",
                            "area-selected": s === n.highlightedItemIndex,
                          },
                          [
                            E(
                              "a",
                              {
                                ref_for: !0,
                                ref: "itemLinksRefs",
                                href: o.href,
                                class: ee([
                                  "search-result-item",
                                  {
                                    "search-result-item--highlighted":
                                      s === n.highlightedItemIndex,
                                  },
                                ]),
                                onMouseover: (l) =>
                                  (n.highlightedItemIndex = s),
                                onFocus: (l) => (n.highlightedItemIndex = s),
                                onKeydown: De(
                                  Me(n.redirectToHighlightedItem, ["prevent"]),
                                  ["enter"]
                                ),
                              },
                              [
                                o.thumbnail
                                  ? (m(),
                                    G(
                                      n.ProductImage,
                                      {
                                        key: 0,
                                        src: o.thumbnail,
                                        alt: o.title,
                                        class: "search-result-item__image",
                                        width: n.IMAGE_DIMENSIONS_PX,
                                        height: n.IMAGE_DIMENSIONS_PX,
                                        "site-id": n.props.siteId,
                                        "enable-srcset": "",
                                      },
                                      null,
                                      8,
                                      ["src", "alt", "site-id"]
                                    ))
                                  : M("", !0),
                                E("div", Uv, [
                                  E("h3", Vv, J(o.title), 1),
                                  E("p", Fv, [
                                    o.isInStock
                                      ? (m(),
                                        v("span", Yv, [
                                          o.price?.length
                                            ? (m(),
                                              v("span", qv, [
                                                o.oldPrice
                                                  ? (m(),
                                                    v(
                                                      "span",
                                                      jv,
                                                      J(o.oldPrice),
                                                      1
                                                    ))
                                                  : M("", !0),
                                                Ne(" " + J(o.price), 1),
                                              ]))
                                            : M("", !0),
                                        ]))
                                      : (m(),
                                        v(
                                          "span",
                                          Wv,
                                          J(t.translations.soldOut),
                                          1
                                        )),
                                  ]),
                                ]),
                              ],
                              42,
                              Hv
                            ),
                          ],
                          8,
                          xv
                        )
                      )
                    ),
                    128
                  )),
            ]))
          : M("", !0),
      ],
      512
    )
  );
}
const zv = ie(Av, [["render", Gv]]),
  Fu = (e, a) => {
    let t;
    return function () {
      const r = () => Reflect.apply(e, this, arguments);
      clearTimeout(t), (t = setTimeout(r, a));
    };
  },
  Kv = 6,
  Qv = 5,
  Zv = 4,
  Xv = 3,
  Yu = 2,
  Jv = { [Kv]: 18, [Qv]: 15, [Zv]: 12, [Xv]: 9, [Yu]: 6 },
  ey = (e) => e?.variants[0].booking_event?.length_unit === Bo;
function Vo(e) {
  return e?.variants[0].booking_event?.length || 0;
}
const Si = (e, a) => {
    const t = (n) => Math.round(n * 100) / 100;
    return ey(e)
      ? `${t(Vo(e) / 1e3 / 60 / 60)} ${a.hourShort}`
      : `${t(Vo(e) / 1e3 / 60)} ${a.minuteShort}`;
  },
  An = (e) =>
    e[gu] !== mi
      ? !1
      : !e.variants.every((a, t, n) => {
          const r = n[0]?.prices?.[0] ?? n[0],
            i = a?.prices?.[0] ?? a,
            o = r.sale_amount ?? r.amount,
            s = i.sale_amount ?? i.amount;
          return o === s;
        }),
  On = ({ variantsQuantity: e, variantId: a }) =>
    e.find((t) => t.id === a)?.inventory_quantity || 0,
  qu = ({ product: e, variantsQuantity: a }) =>
    e.variants.reduce(
      (t, n) => t + On({ variantsQuantity: a, variantId: n.id }),
      0
    ),
  ty = ({ product: e, variantsQuantity: a }) =>
    e.variants[0].manage_inventory
      ? qu({ product: e, variantsQuantity: a }) > 0
      : !0,
  ay = ({ variants: e }) =>
    e.reduce((a, t) =>
      (a.sale_amount || a.amount) <= (t.sale_amount || t.amount) ? a : t
    );
function Fn(e, a) {
  if (!a) return "€0.00";
  const t = Number(e) || 0,
    n = Number(t / 10 ** a.decimal_digits);
  return a.template.replace("$1", n.toFixed(a.decimal_digits));
}
const ny = "https://backend.zyro.com/public",
  ry = async ({ query: e, indices: a, pageSize: t = 5, storeId: n }) => {
    if (!e) return [];
    const r = await fetch(`${ny}/search`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: e, indices: a, storeId: n, pageSize: t }),
      }),
      { results: i } = await r.json();
    return i.products.hits;
  },
  sl = 400,
  oy = se({
    __name: "SiteElementSearchBarProviderSiteEngine",
    props: {
      data: { type: Object, required: !0 },
      blockId: { type: String, required: !0 },
    },
    setup(e, { expose: a }) {
      a();
      const t = e,
        { meta: n, siteId: r, ecommerceShoppingCart: i } = rt(),
        o = c(() => i.value?.translations || {}),
        { toggleSearchDropdown: s } = Oo({ blockId: t.blockId }),
        l = A(""),
        d = A(!1),
        p = A(null),
        u = c(() => n.value.ecommerceStoreId),
        g = c(() =>
          p.value
            ? p.value.map((S) => {
                const w =
                    S.site_product_selection === mi
                      ? ay({ variants: S.variants })
                      : S.variants[0],
                  {
                    amount: b,
                    sale_amount: D,
                    currency_decimal_digits: P,
                    currency_template: O,
                    manage_inventory: N,
                  } = w,
                  x = { decimal_digits: P, template: O },
                  X = `/product-redirect/${S.id}`,
                  W = b && An(S) ? `${o.value.from} ` : "",
                  T = b ? `${W}${Fn(D || b, x)}` : "",
                  R = D ? Fn(b, x) : null,
                  H =
                    !N ||
                    (!!b && ty({ product: S, variantsQuantity: S.variants }));
                return {
                  id: S.id,
                  thumbnail: S.thumbnail,
                  title: S.title,
                  href: X,
                  price: T,
                  oldPrice: R,
                  isInStock: H,
                };
              })
            : null
        ),
        y = Fu(async () => {
          (d.value = !0),
            l.value && u.value
              ? (p.value = await ry({
                  query: l.value,
                  indices: [sd],
                  storeId: u.value,
                }))
              : (p.value = null),
            (d.value = !1);
        }, sl),
        _ = {
          TIMEOUT_MS_SEARCH_DEBOUNCE: sl,
          props: t,
          meta: n,
          siteId: r,
          ecommerceShoppingCart: i,
          ecommerceTranslations: o,
          toggleSearchDropdown: s,
          searchTerm: l,
          isLoading: d,
          results: p,
          storeId: u,
          computedResults: g,
          searchHandler: y,
          updateSearchTerm: ({ newValue: S }) => {
            (l.value = S), y();
          },
          SiteElementSearchBar: zv,
        };
      return (
        Object.defineProperty(_, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        _
      );
    },
  });
function iy(e, a, t, n, r, i) {
  return (
    m(),
    G(
      n.SiteElementSearchBar,
      {
        "placeholder-text": n.props.data.placeholderText,
        "no-results-text": n.props.data.noResultsText,
        "fill-color": n.props.data.fillColor,
        "fill-color-hover": n.props.data.fillColorHover,
        "text-and-icon-color": n.props.data.textAndIconColor,
        "text-and-icon-color-hover": n.props.data.textAndIconColorHover,
        "font-family": n.props.data.fontFamily,
        "border-color": n.props.data.borderColor,
        "border-color-hover": n.props.data.borderColorHover,
        "border-radius": n.props.data.borderRadius,
        "is-loading": n.isLoading,
        "result-item-hover-color": n.props.data.resultItemHoverColor,
        results: n.computedResults,
        "search-term": n.searchTerm,
        "site-id": n.siteId,
        translations: n.ecommerceTranslations,
        "onUpdate:searchTerm":
          a[0] || (a[0] = (o) => n.updateSearchTerm({ newValue: o })),
        onIsDropdownOpen: n.toggleSearchDropdown,
      },
      null,
      8,
      [
        "placeholder-text",
        "no-results-text",
        "fill-color",
        "fill-color-hover",
        "text-and-icon-color",
        "text-and-icon-color-hover",
        "font-family",
        "border-color",
        "border-color-hover",
        "border-radius",
        "is-loading",
        "result-item-hover-color",
        "results",
        "search-term",
        "site-id",
        "translations",
        "onIsDropdownOpen",
      ]
    )
  );
}
const sy = ie(oy, [["render", iy]]),
  Sn = A(!1),
  Cn = A(!1),
  ro = A(!1),
  oo = A(""),
  za = A(null),
  io = A(!1),
  Yn = ({
    elementData: e,
    data: a,
    elementId: t,
    isParentBlockFooter: n,
  } = {}) => {
    const r = A(null),
      i = A(null),
      o = A(null),
      s = e || a || {},
      l = (w) => `transition transition--${w}`,
      d = c(() => {
        const w = t && ld.includes(s.type),
          b = !t && !ud.includes(s.type);
        if (w || b) return "";
        const D = l(s.animation?.name);
        return as.includes(s.type) ? `${D} transition--root-hidden` : D;
      }),
      p = c(() => {
        const w = za.value && t === za.value;
        return !Sn.value || (za.value && !w) ? "" : ro.value;
      }),
      u = c(() => (Cn.value ? Nn : null)),
      g = async (w) => {
        w.forEach(({ target: b, isIntersecting: D }) => {
          if (!D) {
            b.removeAttribute(xn);
            return;
          }
          n || o.value?.unobserve(b), b.setAttribute(xn, Nn);
        });
      },
      y = ({ root: w = null } = {}) => {
        s.animation?.name &&
          (o.value = new IntersectionObserver(g, { threshold: 0, root: w }));
      },
      f = async (w) => {
        if (s.animation?.name)
          if ((await Ot(), as.includes(s.type))) {
            const b = w?.querySelectorAll(`[${Ma}="${ni}"]`),
              D = w?.querySelectorAll(`[${Ma}="${Kn}"]`);
            [...b, ...D].forEach((O) => o.value?.observe(O));
          } else o.value?.observe(w);
      },
      _ = () => {
        window.clearTimeout(r.value),
          window.clearTimeout(i.value),
          (Sn.value = !1),
          (Cn.value = !1);
      },
      S = ({ animation: w, id: b }) => {
        _(),
          !w !== "none" &&
            ((za.value = b),
            (oo.value = w),
            (Sn.value = !0),
            (ro.value = l(oo.value)),
            (r.value = setTimeout(() => {
              Cn.value = !0;
            }, 500)),
            (i.value = setTimeout(() => {
              (Sn.value = !1), (Cn.value = !1), (za.value = null);
            }, 2e3)));
      };
    return (
      je(io, async (w) => {
        w && (await Ot(), (io.value = !1));
      }),
      {
        intersectionObserver: o,
        animationClass: d,
        animationInEditorClass: ro,
        animationInEditorComponentId: za,
        isAnimationDisplayedInEditor: Sn,
        isAnimationDisplayedInEditorActive: Cn,
        animationInEditorName: oo,
        addIntersectionObserver: y,
        observe: f,
        displayAnimationInEditor: S,
        shouldMountAnimationsInPreview: io,
        customAnimationClass: p,
        animationAttributeStateValue: u,
      }
    );
  },
  ly = {
    __name: "LayoutElementProviderUser",
    props: {
      elementId: { type: String, required: !0 },
      blockId: { type: String, required: !0 },
      elementData: { type: Object, required: !0 },
      overrideWidth: { type: Number, default: null },
      overrideHeight: { type: Number, default: null },
      isMobileLegacy: { type: Boolean, default: !1 },
      lcp: { type: Object, default: () => ({}) },
      siteLanguagePages: { type: Object, required: !0 },
      stripePublicApiKey: { type: String, default: "" },
      currentLocale: { type: String, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      isParentBlockFooter: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: a }) {
      a(), St((D) => ({ fbe62064: f.value, "6ee972b0": _.value }));
      const t = e,
        n = A(null),
        {
          intersectionObserver: r,
          animationClass: i,
          addIntersectionObserver: o,
          observe: s,
          shouldMountAnimationsInPreview: l,
        } = Yn({
          elementData: t.elementData,
          isParentBlockFooter: t.isParentBlockFooter,
          elementId: t.elementId,
        }),
        d = c(() => Object.values(t.siteLanguagePages)[0]),
        p = c(() => t.elementData.mobile?.isHidden || !1),
        u = c(() => t.elementData.desktop?.isHidden || !1),
        g = c(() =>
          t.elementData.type !== Wr
            ? ""
            : (
                t.siteLanguagePages[t.elementData.settings?.successPageId] ||
                d.value
              ).slug
        ),
        y = c(() =>
          t.elementData.type !== Wr
            ? ""
            : (
                t.siteLanguagePages[
                  t.elementData.settings?.cancellationPageId
                ] || d.value
              ).slug
        ),
        f = c(() => `${t.elementData.desktop.height}px`),
        _ = c(() => `${t.elementData.mobile.height}px`),
        S = async () => {
          await s(n.value?.$el);
        },
        w = async () => {
          const P = [ns, rs].includes(t.elementData.type),
            N =
              n.value?.$el.getBoundingClientRect().height > window.innerHeight,
            x = !P && N && n.value ? n.value.$el.parentElement : null;
          o({ root: x }), P || (await S());
        };
      Oe(async () => {
        await w();
      }),
        xt(() => r.value?.disconnect()),
        je(l, async (D) => {
          D && (await w());
        });
      const b = {
        props: t,
        elementRef: n,
        intersectionObserver: r,
        animationClass: i,
        addIntersectionObserver: o,
        observe: s,
        shouldMountAnimationsInPreview: l,
        firstLanguagePage: d,
        isMobileElementHidden: p,
        isDesktopElementHidden: u,
        stripeSuccessPageSlug: g,
        stripeCancellationPageSlug: y,
        elementHeightDesktop: f,
        elementHeightMobile: _,
        observeElement: S,
        initiateAnimations: w,
        get ELEMENT_TYPE_BUTTON() {
          return cd;
        },
        get ELEMENT_TYPE_STRIPE_BUTTON() {
          return Wr;
        },
        get ELEMENT_TYPE_ECOMMERCE_BUTTON() {
          return dd;
        },
        get ELEMENT_TYPE_MAP() {
          return tu;
        },
        get ELEMENT_TYPE_VIDEO() {
          return au;
        },
        get ELEMENT_TYPE_IMAGE() {
          return md;
        },
        get ELEMENT_TYPE_TEXT_BOX() {
          return pd;
        },
        get ELEMENT_TYPE_FORM() {
          return gd;
        },
        get ELEMENT_TYPE_INSTAGRAM_FEED() {
          return ns;
        },
        get ELEMENT_TYPE_SOCIAL_ICONS() {
          return hd;
        },
        get ELEMENT_TYPE_GALLERY() {
          return rs;
        },
        get ELEMENT_TYPE_EMBED() {
          return fd;
        },
        get ELEMENT_TYPE_SHAPE() {
          return vd;
        },
        get ELEMENT_TYPE_SEARCH_BAR() {
          return yd;
        },
        LayoutElementWrapper: qm,
        GridButtonProviderUser: Km,
        GridEcommerceButtonProviderUser: up,
        GridEmbedProviderUser: _p,
        GridFormProviderUser: og,
        GridGalleryProviderUser: yg,
        GridImageProviderUser: Cg,
        GridInstagramFeedProviderUser: lf,
        GridMapProviderUser: vf,
        GridSocialIconsProviderUser: Cf,
        GridStripeButtonProviderUser: Mf,
        GridTextBoxProviderUser: xf,
        GridVideoProviderUser: uv,
        GridShapeProviderUser: fv,
        SiteElementSearchBarProviderSiteEngine: sy,
        get useSiteEngineAnimations() {
          return Yn;
        },
        computed: c,
        onMounted: Oe,
        onBeforeUnmount: xt,
        ref: A,
        watch: je,
        get isSearchDropdownOpen() {
          return Mo;
        },
      };
      return (
        Object.defineProperty(b, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        b
      );
    },
  };
function uy(e, a, t, n, r, i) {
  const o = ze("qa");
  return (
    m(),
    G(
      n.LayoutElementWrapper,
      {
        ref: "elementRef",
        class: ee([
          "layout-element",
          [
            {
              "layout-element--desktop-element-hidden":
                n.isDesktopElementHidden,
              "layout-element--mobile-element-hidden": n.isMobileElementHidden,
            },
            n.animationClass,
          ],
        ]),
        "element-data": t.elementData,
        "is-forced-on-top":
          n.isSearchDropdownOpen &&
          t.elementData.type === n.ELEMENT_TYPE_SEARCH_BAR,
        "is-mobile-legacy": t.isMobileLegacy,
      },
      {
        default: _e(() => [
          t.elementData.type === n.ELEMENT_TYPE_BUTTON
            ? ue(
                (m(),
                G(
                  n.GridButtonProviderUser,
                  {
                    key: 0,
                    id: t.elementId,
                    data: t.elementData,
                    "current-locale": t.currentLocale,
                    "mobile-element-width": t.elementData.mobile.width,
                    "mobile-element-height": t.elementData.mobile.height,
                    class:
                      "layout-element__component layout-element__component--GridButton",
                  },
                  null,
                  8,
                  [
                    "id",
                    "data",
                    "current-locale",
                    "mobile-element-width",
                    "mobile-element-height",
                  ]
                )),
                [[o, `${t.elementData.type}:${t.elementId}`]]
              )
            : M("", !0),
          t.elementData.type === n.ELEMENT_TYPE_STRIPE_BUTTON
            ? ue(
                (m(),
                G(
                  n.GridStripeButtonProviderUser,
                  {
                    key: 1,
                    id: t.elementId,
                    data: t.elementData,
                    "success-page-slug": n.stripeSuccessPageSlug,
                    "cancellation-page-slug": n.stripeCancellationPageSlug,
                    "stripe-public-api-key": t.stripePublicApiKey,
                    class:
                      "layout-element__component layout-element__component--GridStripeButton",
                  },
                  null,
                  8,
                  [
                    "id",
                    "data",
                    "success-page-slug",
                    "cancellation-page-slug",
                    "stripe-public-api-key",
                  ]
                )),
                [[o, `${t.elementData.type}:${t.elementId}`]]
              )
            : M("", !0),
          t.elementData.type === n.ELEMENT_TYPE_ECOMMERCE_BUTTON
            ? ue(
                (m(),
                G(
                  n.GridEcommerceButtonProviderUser,
                  {
                    key: 2,
                    id: t.elementId,
                    data: t.elementData,
                    "is-cart-visible": t.isCartVisible,
                    "mobile-element-width": t.elementData.mobile.width,
                    "mobile-element-height": t.elementData.mobile.height,
                    "is-in-preview-mode": n.props.isInPreviewMode,
                    class:
                      "layout-element__component layout-element__component--GridEcommerceButton",
                  },
                  null,
                  8,
                  [
                    "id",
                    "data",
                    "is-cart-visible",
                    "mobile-element-width",
                    "mobile-element-height",
                    "is-in-preview-mode",
                  ]
                )),
                [[o, `${t.elementData.type}:${t.elementId}`]]
              )
            : M("", !0),
          t.elementData.type === n.ELEMENT_TYPE_FORM
            ? ue(
                (m(),
                G(
                  n.GridFormProviderUser,
                  {
                    key: 3,
                    id: t.elementId,
                    data: t.elementData,
                    "current-locale": t.currentLocale,
                    class:
                      "layout-element__component layout-element__component--GridForm",
                  },
                  null,
                  8,
                  ["id", "data", "current-locale"]
                )),
                [[o, `${t.elementData.type}:${t.elementId}`]]
              )
            : M("", !0),
          t.elementData.type === n.ELEMENT_TYPE_VIDEO
            ? ue(
                (m(),
                G(
                  n.GridVideoProviderUser,
                  {
                    key: 4,
                    id: t.elementId,
                    data: t.elementData,
                    class:
                      "layout-element__component layout-element__component--GridVideo",
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[o, `${t.elementData.type}:${t.elementId}`]]
              )
            : M("", !0),
          t.elementData.type === n.ELEMENT_TYPE_TEXT_BOX
            ? ue(
                (m(),
                G(
                  n.GridTextBoxProviderUser,
                  {
                    key: 5,
                    id: t.elementId,
                    data: t.elementData,
                    class:
                      "layout-element__component layout-element__component--GridTextBox",
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[o, `${t.elementData.type}:${t.elementId}`]]
              )
            : M("", !0),
          t.elementData.type === n.ELEMENT_TYPE_MAP
            ? ue(
                (m(),
                G(
                  n.GridMapProviderUser,
                  {
                    key: 6,
                    id: t.elementId,
                    data: t.elementData,
                    class:
                      "layout-element__component layout-element__component--GridMap",
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[o, `${t.elementData.type}:${t.elementId}`]]
              )
            : M("", !0),
          t.elementData.type === n.ELEMENT_TYPE_SOCIAL_ICONS
            ? ue(
                (m(),
                G(
                  n.GridSocialIconsProviderUser,
                  {
                    key: 7,
                    id: t.elementId,
                    data: t.elementData,
                    class:
                      "layout-element__component layout-element__component--GridSocialIcons",
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[o, `${t.elementData.type}:${t.elementId}`]]
              )
            : M("", !0),
          t.elementData.type === n.ELEMENT_TYPE_GALLERY
            ? ue(
                (m(),
                G(
                  n.GridGalleryProviderUser,
                  {
                    key: 8,
                    id: t.elementId,
                    data: t.elementData,
                    "element-width": t.elementData.desktop.width,
                    "element-height": t.elementData.desktop.height,
                    class:
                      "layout-element__component layout-element__component--GridGallery",
                    onImageLoad: n.observeElement,
                  },
                  null,
                  8,
                  ["id", "data", "element-width", "element-height"]
                )),
                [[o, `${t.elementData.type}:${t.elementId}`]]
              )
            : M("", !0),
          t.elementData.type === n.ELEMENT_TYPE_IMAGE
            ? ue(
                (m(),
                G(
                  n.GridImageProviderUser,
                  {
                    key: 9,
                    id: t.elementId,
                    lcp: t.lcp,
                    data: t.elementData,
                    "mobile-element-width": t.elementData.mobile.width,
                    "mobile-element-height": t.elementData.mobile.height,
                    "element-width": t.elementData.desktop.width,
                    "element-height": t.elementData.desktop.height,
                    "reset-mobile-position": t.isMobileLegacy,
                    "current-locale": t.currentLocale,
                    "mobile-border-radius": t.elementData.mobile.borderRadius,
                    "desktop-border-radius": t.elementData.desktop.borderRadius,
                    "shape-mask-source": t.elementData.shapeMaskSource,
                    "is-in-preview-mode": n.props.isInPreviewMode,
                    class:
                      "layout-element__component layout-element__component--GridImage",
                  },
                  null,
                  8,
                  [
                    "id",
                    "lcp",
                    "data",
                    "mobile-element-width",
                    "mobile-element-height",
                    "element-width",
                    "element-height",
                    "reset-mobile-position",
                    "current-locale",
                    "mobile-border-radius",
                    "desktop-border-radius",
                    "shape-mask-source",
                    "is-in-preview-mode",
                  ]
                )),
                [[o, `${t.elementData.type}:${t.elementId}`]]
              )
            : M("", !0),
          t.elementData.type === n.ELEMENT_TYPE_INSTAGRAM_FEED
            ? ue(
                (m(),
                G(
                  n.GridInstagramFeedProviderUser,
                  {
                    key: 10,
                    id: t.elementId,
                    data: t.elementData,
                    class:
                      "layout-element__component layout-element__component--GridInstagramFeed",
                    onMediaLoaded: n.observeElement,
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[o, `${t.elementData.type}:${t.elementId}`]]
              )
            : M("", !0),
          t.elementData.type === n.ELEMENT_TYPE_EMBED
            ? ue(
                (m(),
                G(
                  n.GridEmbedProviderUser,
                  {
                    key: 11,
                    id: t.elementId,
                    data: t.elementData,
                    class:
                      "layout-element__component layout-element__component--GridEmbed",
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[o, `${t.elementData.type}:${t.elementId}`]]
              )
            : M("", !0),
          t.elementData.type === n.ELEMENT_TYPE_SHAPE
            ? ue(
                (m(),
                G(
                  n.GridShapeProviderUser,
                  {
                    key: 12,
                    id: t.elementId,
                    data: t.elementData,
                    "is-in-preview-mode": n.props.isInPreviewMode,
                    class:
                      "layout-element__component layout-element__component--GridShape",
                  },
                  null,
                  8,
                  ["id", "data", "is-in-preview-mode"]
                )),
                [[o, `${t.elementData.type}:${t.elementId}`]]
              )
            : M("", !0),
          t.elementData.type === n.ELEMENT_TYPE_SEARCH_BAR
            ? ue(
                (m(),
                G(
                  n.SiteElementSearchBarProviderSiteEngine,
                  {
                    key: 13,
                    id: t.elementId,
                    data: t.elementData,
                    class: "layout-element__component",
                    "block-id": t.blockId,
                  },
                  null,
                  8,
                  ["id", "data", "block-id"]
                )),
                [[o, `${t.elementData.type}:${t.elementId}`]]
              )
            : M("", !0),
          he(e.$slots, "default", {}, void 0, !0),
        ]),
        _: 3,
      },
      8,
      ["class", "element-data", "is-forced-on-top", "is-mobile-legacy"]
    )
  );
}
const cy = ie(ly, [
    ["render", uy],
    ["__scopeId", "data-v-c26ff75d"],
  ]),
  dy = {
    __name: "BlockLayoutProviderUser",
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      components: { type: Object, default: () => ({}) },
      lcp: { type: Object, default: () => ({}) },
      siteLanguagePages: { type: Object, required: !0 },
      stripePublicApiKey: { type: String, default: "" },
      currentLocale: { type: String, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: a }) {
      a();
      const t = e,
        { isSearchOpenedInCurrentBlock: n } = Oo({ blockId: t.blockId }),
        { components: r } = To(t),
        i = c(() => t.data),
        {
          layoutElements: o,
          layoutCSSVars: s,
          isMobileLegacy: l,
        } = Es({
          blockData: i,
          siteElements: r,
          shouldBuildResponsive: !t.isInPreviewMode,
        }),
        d = c(() => i.value.slot === "footer"),
        p = {
          props: t,
          isSearchOpenedInCurrentBlock: n,
          siteElements: r,
          blockData: i,
          layoutElements: o,
          layoutCSSVars: s,
          isMobileLegacy: l,
          isBlockFooter: d,
          toRefs: To,
          computed: c,
          get useSearchElementDropdown() {
            return Oo;
          },
          BlockLayoutWrapper: Bm,
          get useBlockLayout() {
            return Es;
          },
          LayoutElementProviderUser: cy,
        };
      return (
        Object.defineProperty(p, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        p
      );
    },
  };
function my(e, a, t, n, r, i) {
  return (
    m(),
    G(
      n.BlockLayoutWrapper,
      {
        ref: "blockLayout",
        style: Re(n.layoutCSSVars),
        "is-mobile-legacy": n.isMobileLegacy,
        "is-block-responsive": "",
        "is-forced-on-top": n.isSearchOpenedInCurrentBlock,
        "is-in-preview-mode": n.props.isInPreviewMode,
      },
      {
        default: _e(() => [
          (m(!0),
          v(
            ge,
            null,
            Se(
              n.layoutElements,
              (o) => (
                m(),
                G(
                  n.LayoutElementProviderUser,
                  {
                    key: o.elementId,
                    "is-mobile-legacy": n.isMobileLegacy,
                    "element-id": o.elementId,
                    "element-data": o,
                    lcp: t.lcp,
                    "is-cart-visible": t.isCartVisible,
                    "current-locale": t.currentLocale,
                    "site-language-pages": t.siteLanguagePages,
                    "stripe-public-api-key": t.stripePublicApiKey,
                    "is-parent-block-footer": n.isBlockFooter,
                    "block-id": t.blockId,
                    "is-in-preview-mode": n.props.isInPreviewMode,
                  },
                  null,
                  8,
                  [
                    "is-mobile-legacy",
                    "element-id",
                    "element-data",
                    "lcp",
                    "is-cart-visible",
                    "current-locale",
                    "site-language-pages",
                    "stripe-public-api-key",
                    "is-parent-block-footer",
                    "block-id",
                    "is-in-preview-mode",
                  ]
                )
              )
            ),
            128
          )),
        ]),
        _: 1,
      },
      8,
      ["style", "is-mobile-legacy", "is-forced-on-top", "is-in-preview-mode"]
    )
  );
}
const py = ie(dy, [["render", my]]),
  gy = se({
    __name: "ZyroPagination",
    props: { currentPage: {}, pageCount: {}, color: { default: null } },
    emits: ["change-page"],
    setup(e, { expose: a, emit: t }) {
      a();
      const n = e,
        r = t,
        i = c(() => ({ "--button-color": n.color })),
        o = c(() => {
          if (5 > n.pageCount)
            return [...new Array(n.pageCount + 1).keys()].slice(1);
          const d = 4 / 2,
            p = Array.from({ length: 4 }).fill(0);
          if (n.currentPage <= d + 1) {
            p[0] = 1;
            const g = p.map((y, f) => p[0] + f);
            return g.push(n.pageCount), g;
          }
          if (n.currentPage >= n.pageCount - d + 1) {
            const g = p.map((y, f) => n.pageCount - f);
            return g.reverse().unshift(1), g;
          }
          p[0] = n.currentPage - d + 1;
          const u = p.map((g, y) => p[0] + y);
          return u.unshift(1), (u[u.length - 1] = n.pageCount), u;
        }),
        s = { props: n, emit: r, computedStyle: i, paginationTriggersList: o };
      return (
        Object.defineProperty(s, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  }),
  ju = (e) => (Ht("data-v-1ee2fd7c"), (e = e()), Ut(), e),
  hy = ["disabled"],
  fy = ju(() =>
    E(
      "svg",
      {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        E("path", {
          d: "M7 1L1 7L7 13",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  vy = [fy],
  yy = ["data-testId", "disabled", "onClick"],
  by = ["disabled"],
  _y = ju(() =>
    E(
      "svg",
      {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        E("path", {
          d: "M1 13L7 7L1 1",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  wy = [_y];
function ky(e, a, t, n, r, i) {
  return t.pageCount > 1
    ? (m(),
      v(
        "div",
        { key: 0, class: "pagination", style: Re(n.computedStyle) },
        [
          E(
            "button",
            {
              disabled: t.currentPage === 1,
              class: "pagination__button",
              "data-testId": "button-previous",
              onClick:
                a[0] ||
                (a[0] = (o) =>
                  n.emit("change-page", Math.max(1, t.currentPage - 1))),
            },
            vy,
            8,
            hy
          ),
          (m(!0),
          v(
            ge,
            null,
            Se(
              n.paginationTriggersList,
              (o) => (
                m(),
                v(
                  "button",
                  {
                    key: `${o}-trigger`,
                    class: ee([
                      "pagination__button pagination__trigger",
                      { "pagination__trigger--current": o === t.currentPage },
                    ]),
                    "data-testId": `button-${o}`,
                    disabled: t.currentPage === o,
                    onClick: (s) => n.emit("change-page", o),
                  },
                  J(o),
                  11,
                  yy
                )
              )
            ),
            128
          )),
          E(
            "button",
            {
              disabled: t.currentPage === t.pageCount,
              class: "pagination__button",
              "data-testId": "button-next",
              onClick:
                a[1] ||
                (a[1] = (o) =>
                  n.emit(
                    "change-page",
                    Math.min(t.pageCount, t.currentPage + 1)
                  )),
            },
            wy,
            8,
            by
          ),
        ],
        4
      ))
    : M("", !0);
}
const Wu = ie(gy, [
    ["render", ky],
    ["__scopeId", "data-v-1ee2fd7c"],
  ]),
  Fo = 1800,
  Sy = 1080,
  ll = 100,
  Cy = {
    __name: "BlockBlogListItem",
    props: {
      post: { type: Object, default: () => ({}) },
      authorName: { type: String, default: null },
      shownItems: {
        type: Object,
        default: () => ({
          authorFullName: !0,
          coverImage: !0,
          title: !0,
          description: !0,
          date: !0,
          categories: !0,
          avatar: !0,
          minutesToRead: !0,
        }),
      },
      coverObjectFit: { type: String, default: "cover" },
      cursor: { type: String, default: "pointer" },
      blogCategories: { type: Object, default: () => ({}) },
      isAnimationActive: { type: Boolean, default: !1 },
      blogReadingTimeText: { type: [String, void 0], default: void 0 },
      blogTitleTextSize: { type: Number, default: 24 },
    },
    emits: ["post-click", "filter-category"],
    setup(e, { expose: a }) {
      a(), St((u) => ({ "74783e9f": r.value }));
      const t = e,
        n = A(),
        r = c(() => `${t.blogTitleTextSize}px`),
        i = c(() => t.post?.coverImageAlt ?? ""),
        o = c(() => Hn(Fo, null)),
        s = c(() => t.post?.categories ?? []),
        l = c(
          () =>
            !!t.shownItems.coverImage &&
            (t.post?.coverImageSrc || t.post?.coverImageSrcset)
        ),
        d = c(() => {
          const u = n.value?.getBoundingClientRect();
          if (!u || !window || !document) return !0;
          const { top: g } = u,
            { innerHeight: y } = window,
            { clientHeight: f } = document.documentElement;
          return g <= (y || f) + ll;
        }),
        p = {
          props: t,
          VERTICAL_VIEWPORT_OFFSET: ll,
          coverImageContainerRef: n,
          blogTitleTextSize: r,
          coverImageAlt: i,
          sizes: o,
          categories: s,
          isCoverImageShown: l,
          isElementInViewport: d,
          BlockBlogListItemCategories: cu,
          BlockBlogListItemMeta: du,
          get BLOG_POST_COVER_IMAGE_MAX_WIDTH() {
            return Fo;
          },
          get getFormattedNumericDate() {
            return mu;
          },
          get getGridItemSizes() {
            return Hn;
          },
          get DATA_ATTRIBUTE_ANIMATION_ROLE() {
            return Ma;
          },
          get DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT() {
            return Kn;
          },
          get DATA_ATTRIBUTE_ANIMATION_STATE() {
            return xn;
          },
          get DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE() {
            return Nn;
          },
          computed: c,
          ref: A,
        };
      return (
        Object.defineProperty(p, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        p
      );
    },
  },
  Ty = ["href"],
  Py = { class: "block-blog-list-item__cover-image-wrapper" },
  Iy = ["alt", "src", "srcset", "sizes", "loading"],
  Ey = ["href"];
function Dy(e, a, t, n, r, i) {
  const o = ze("qa");
  return (
    m(),
    v(
      "div",
      tt({
        class: "block-blog-list-item",
        [n.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]:
          n.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT,
        [n.DATA_ATTRIBUTE_ANIMATION_STATE || ""]: t.isAnimationActive
          ? n.DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE
          : null,
      }),
      [
        he(e.$slots, "block-blog-list-item-overlay", {}, void 0, !0),
        n.isCoverImageShown
          ? ue(
              (m(),
              v(
                "a",
                {
                  key: 0,
                  ref: "coverImageContainerRef",
                  href: t.post.slug,
                  class: "block-blog-list-item__cover-image-container",
                  onClick:
                    a[0] ||
                    (a[0] = Me((s) => e.$emit("post-click"), ["prevent"])),
                },
                [
                  E("div", Py, [
                    E(
                      "img",
                      {
                        class: "block-blog-list-item__cover-image",
                        alt: n.coverImageAlt,
                        src: t.post.coverImageSrc,
                        srcset: t.post.coverImageSrcset,
                        sizes: n.sizes,
                        loading: n.isElementInViewport ? void 0 : "lazy",
                      },
                      null,
                      8,
                      Iy
                    ),
                  ]),
                ],
                8,
                Ty
              )),
              [[o, "blog-list-item-image"]]
            )
          : M("", !0),
        ue(
          Ee(
            n.BlockBlogListItemCategories,
            {
              class: "font-secondary",
              categories: n.categories,
              "blog-categories": t.blogCategories,
              onFilterCategory:
                a[1] || (a[1] = (s) => e.$emit("filter-category", s)),
            },
            null,
            8,
            ["categories", "blog-categories"]
          ),
          [[Zt, t.shownItems.categories && n.categories.length]]
        ),
        E(
          "a",
          {
            class: "block-blog-list-item__content",
            href: t.post.slug,
            onClick:
              a[2] || (a[2] = Me((s) => e.$emit("post-click"), ["prevent"])),
          },
          [
            ue(
              E(
                "h3",
                { class: "font-primary block-blog-list-item__title" },
                J(t.post.meta.title),
                513
              ),
              [[Zt, t.shownItems.title]]
            ),
            ue(
              E(
                "p",
                { class: "block-blog-list-item__description font-secondary" },
                J(t.post.meta.description),
                513
              ),
              [[Zt, t.shownItems.description]]
            ),
            Ee(
              n.BlockBlogListItemMeta,
              Qe(
                {
                  authorName: t.authorName,
                  minutesAmount: t.post.minutesToRead,
                  date: n.getFormattedNumericDate(t.post.date),
                  showAvatar: t.shownItems.avatar,
                  showName: t.shownItems.authorFullName,
                  showDate: t.shownItems.date,
                  showMinutes: t.shownItems.minutesToRead,
                },
                { "blog-reading-time-text": t.blogReadingTimeText }
              ),
              null,
              16,
              ["blog-reading-time-text"]
            ),
          ],
          8,
          Ey
        ),
      ],
      16
    )
  );
}
const My = ie(Cy, [
    ["render", Dy],
    ["__scopeId", "data-v-d6576b2a"],
  ]),
  Oy = "Show all posts",
  ul = 46,
  cl = 24,
  Ay = {
    __name: "BlockBlogList",
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      lcp: { type: Object, default: () => ({}) },
      posts: { type: Object, default: () => ({}) },
      blogCategories: { type: Object, default: () => ({}) },
      blogReadingTimeText: { type: [String, void 0], default: void 0 },
    },
    emits: ["post-click"],
    setup(e, { expose: a, emit: t }) {
      a(), St((b) => ({ b0e46082: d.value, 68036045: l.value }));
      const n = e,
        r = t,
        i = A(0),
        o = A(null),
        s = A(!1),
        l = c(() => Number.parseInt(n.data.settings.postColumnCount, 10)),
        d = c(() => `${ul}px`),
        p = c(() => n.data.settings.blogTitleFontSize || cl),
        u = c(() => {
          const {
              categories: b,
              showAllPosts: D,
              showWithoutCategories: P,
            } = n.data.settings,
            O = D
              ? n.posts
              : Object.fromEntries(
                  Object.entries(n.posts).filter(([, N]) => {
                    const x = b.some((W) => N.categories.includes(W));
                    return (P && N.categories.length === 0) || x;
                  })
                );
          return o.value
            ? Object.fromEntries(
                Object.entries(O).filter(([, N]) =>
                  N.categories.includes(o.value)
                )
              )
            : O;
        }),
        g = c(() =>
          Object.values(u.value).sort(
            (b, D) => Date.parse(D.date) - Date.parse(b.date)
          )
        ),
        y = c(() =>
          g.value.slice(
            (i.value > 0 ? i.value - 1 : 0) * n.data.settings.postsPerPage,
            i.value * n.data.settings.postsPerPage
          )
        ),
        f = c(() =>
          Math.ceil(Object.keys(u.value).length / n.data.settings.postsPerPage)
        ),
        _ = () => {
          const b = new URLSearchParams(window.location.search),
            D = Number.parseInt(b.get("page"), 10) || 1;
          D !== i.value && (i.value = D);
        },
        S = (b) => {
          (i.value = b), (s.value = !0);
          const D = new URL(window.location);
          D.searchParams.set("page", i.value),
            window.history.pushState(null, "", D.toString()),
            Po(`#${n.blockId}`);
        };
      je(y, (b) => {
        b.length === 0 && i.value > 1 && (i.value -= 1);
      }),
        Oe(() => {
          const b = new URLSearchParams(window.location.search),
            D = Number.parseInt(b.get("page"), 10) || 1;
          i.value !== D && (i.value = D),
            window.addEventListener("popstate", () => {
              _();
            });
        }),
        xt(() => {
          window.removeEventListener("popstate", _);
        });
      const w = {
        SHOW_ALL_POSTS_LABEL: Oy,
        BLOG_LIST_PADDING_X: ul,
        props: n,
        emit: r,
        currentPage: i,
        filteredCategoryId: o,
        isAnimationActive: s,
        postColumnCount: l,
        blogListPaddingXCssVar: d,
        BLOG_TITLE_FONT_SIZE_FALLBACK: cl,
        blogTitleTextSize: p,
        postsToRender: u,
        sortedPosts: g,
        currentPageItems: y,
        pageCount: f,
        handleBrowserNavigationPageChange: _,
        setCurrentPage: S,
        get scrollToSection() {
          return Po;
        },
        ZyroPagination: Wu,
        BlockBlogListItem: My,
        ref: A,
        onMounted: Oe,
        onBeforeUnmount: xt,
        computed: c,
        watch: je,
      };
      return (
        Object.defineProperty(w, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        w
      );
    },
  },
  Ly = ["id"],
  By = { key: 0, class: "block-blog-list__filter" },
  Ry = { key: 2, class: "block-blog-list__empty-block" };
function $y(e, a, t, n, r, i) {
  const o = ze("qa");
  return ue(
    (m(),
    v(
      "div",
      { id: t.blockId, ref: "blogList", class: "block-blog-list" },
      [
        n.filteredCategoryId
          ? (m(),
            v("div", By, [
              Ne(J(t.blogCategories[n.filteredCategoryId].name) + " ", 1),
              E(
                "button",
                {
                  class: "block-blog-list__filter-button",
                  onClick:
                    a[0] || (a[0] = (s) => (n.filteredCategoryId = null)),
                },
                J(n.SHOW_ALL_POSTS_LABEL)
              ),
            ]))
          : M("", !0),
        n.currentPageItems.length
          ? (m(),
            v(
              "div",
              {
                key: 1,
                class: ee([
                  "block-blog-list__list",
                  { "block-blog-list__list--one-col": n.postColumnCount === 1 },
                ]),
              },
              [
                (m(!0),
                v(
                  ge,
                  null,
                  Se(n.currentPageItems, (s, l) =>
                    ue(
                      (m(),
                      G(
                        n.BlockBlogListItem,
                        {
                          key: `post-${l}`,
                          post: s,
                          "author-name": s.meta.authorName,
                          "cover-object-fit":
                            t.data.settings.styles["cover-object-fit"],
                          "shown-items": t.data.settings.shownItems,
                          "blog-categories": t.blogCategories,
                          "is-animation-active": n.isAnimationActive,
                          "blog-reading-time-text": t.blogReadingTimeText,
                          "blog-title-text-size": n.blogTitleTextSize,
                          onFilterCategory:
                            a[1] || (a[1] = (d) => (n.filteredCategoryId = d)),
                          onPostClick: (d) => n.emit("post-click", s),
                        },
                        {
                          "block-blog-list-item-overlay": _e(() => [
                            he(
                              e.$slots,
                              "block-blog-list-overlay",
                              { post: s },
                              void 0,
                              !0
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        [
                          "post",
                          "author-name",
                          "cover-object-fit",
                          "shown-items",
                          "blog-categories",
                          "is-animation-active",
                          "blog-reading-time-text",
                          "blog-title-text-size",
                          "onPostClick",
                        ]
                      )),
                      [[o, "blog-list-item"]]
                    )
                  ),
                  128
                )),
              ],
              2
            ))
          : (m(),
            v("div", Ry, [
              he(e.$slots, "block-blog-list-empty-block", {}, void 0, !0),
            ])),
        Ee(
          n.ZyroPagination,
          {
            class: "block-blog-list__pagination",
            "current-page": n.currentPage,
            "page-count": n.pageCount,
            onChangePage: n.setCurrentPage,
          },
          null,
          8,
          ["current-page", "page-count"]
        ),
      ],
      8,
      Ly
    )),
    [[o, "builder-section-blog"]]
  );
}
const Ny = ie(Ay, [
    ["render", $y],
    ["__scopeId", "data-v-93a110a6"],
  ]),
  xy = se({
    name: "BlockBlogListProviderUser",
    components: { BlockBlogList: Ny },
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      currentLocale: { type: String, default: Yt },
    },
    setup() {
      const {
        blogReadingTimeText: e,
        siteId: a,
        pages: t,
        blogCategories: n,
        meta: r,
      } = rt();
      return {
        blogReadingTimeText: e,
        siteId: a,
        pages: t,
        blogCategories: n,
        meta: r,
      };
    },
    computed: {
      publishedBlogPages() {
        return Object.fromEntries(
          Object.entries(this.pages).filter(
            ([, e]) => e.type === Do && !e.isDraft
          )
        );
      },
      blogPosts() {
        const e = this.currentLocale === this.meta.defaultLocale;
        return Object.fromEntries(
          Object.entries(this.publishedBlogPages).map(([a, t]) => {
            const n = Ha(t.coverImageOrigin, t.coverImagePath, this.siteId, {
              width: Fo,
              height: Sy,
            });
            return [
              a,
              {
                id: a,
                ...t,
                coverImageSrcset: n,
                slug: `/${e ? "" : `${this.currentLocale}/`}${t.slug}`,
              },
            ];
          })
        );
      },
    },
  });
function Hy(e, a, t, n, r, i) {
  const o = Ce("BlockBlogList");
  return (
    m(),
    G(
      o,
      {
        data: e.data,
        "block-id": e.blockId,
        posts: e.blogPosts,
        "blog-categories": e.blogCategories,
        "blog-reading-time-text": e.blogReadingTimeText,
      },
      null,
      8,
      ["data", "block-id", "posts", "blog-categories", "blog-reading-time-text"]
    )
  );
}
const Uy = ie(xy, [["render", Hy]]),
  Vy = se({ props: { columnCount: { type: Number, default: 3 } } }),
  Ci = (e) => (Ht("data-v-c0f30deb"), (e = e()), Ut(), e),
  Fy = { class: "skeleton-loader" },
  Yy = Ci(() =>
    E("div", { class: "skeleton-loader__image-placeholder" }, null, -1)
  ),
  qy = Ci(() => E("div", { class: "skeleton-loader__text" }, null, -1)),
  jy = Ci(() => E("div", { class: "skeleton-loader__text" }, null, -1)),
  Wy = [Yy, qy, jy];
function Gy(e, a, t, n, r, i) {
  return (
    m(),
    v("div", Fy, [
      (m(!0),
      v(
        ge,
        null,
        Se(
          e.columnCount,
          (o) => (m(), v("div", { key: o, class: "skeleton-loader__item" }, Wy))
        ),
        128
      )),
    ])
  );
}
const zy = ie(Vy, [
    ["render", Gy],
    ["__scopeId", "data-v-c0f30deb"],
  ]),
  Ky = se({
    props: {
      textColorVars: { type: Object, default: () => ({}) },
      emptyPageMessage: { type: String, required: !0 },
    },
    computed: {
      computedStyles() {
        return { ...ta(this.textColorVars) };
      },
    },
  }),
  Qy = E(
    "svg",
    {
      class: "product-list-empty-state__icon",
      width: "41",
      height: "40",
      viewBox: "0 0 41 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      E("path", {
        d: "M10.5 3.33334L5.5 10V33.3333C5.5 34.2174 5.85119 35.0652 6.47631 35.6904C7.10143 36.3155 7.94928 36.6667 8.83333 36.6667H32.1667C33.0507 36.6667 33.8986 36.3155 34.5237 35.6904C35.1488 35.0652 35.5 34.2174 35.5 33.3333V10L30.5 3.33334H10.5Z",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
      E("path", {
        d: "M5.5 10H35.5",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
      E("path", {
        d: "M27.1663 16.6667C27.1663 18.4348 26.464 20.1305 25.2137 21.3807C23.9635 22.631 22.2678 23.3334 20.4997 23.3334C18.7316 23.3334 17.0359 22.631 15.7856 21.3807C14.5354 20.1305 13.833 18.4348 13.833 16.6667",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    ],
    -1
  );
function Zy(e, a, t, n, r, i) {
  return (
    m(),
    v(
      "div",
      { class: "product-list-empty-state", style: Re(e.computedStyles) },
      [Qy, E("h6", null, J(e.emptyPageMessage), 1)],
      4
    )
  );
}
const Xy = ie(Ky, [["render", Zy]]),
  Jy = {},
  eb = {
    width: "392",
    height: "392",
    viewBox: "0 0 392 392",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  tb = ai(
    '<g clip-path="url(#clip0_2_420)"><rect width="392" height="392" fill="var(--color-success-light)"></rect><path d="M133.859 223.769C134.843 221.858 137.577 221.858 138.561 223.769L162.649 270.514C163.282 271.741 164.751 272.275 166.023 271.742L214.483 251.437C216.466 250.607 218.558 252.361 218.086 254.458L206.528 305.78C206.225 307.125 207.005 308.477 208.321 308.887L258.489 324.525C260.54 325.164 261.014 327.852 259.306 329.154L217.502 361.032C216.407 361.868 216.136 363.404 216.88 364.564L245.273 408.837C246.433 410.645 245.067 413.006 242.921 412.907L190.444 410.42C189.066 410.354 187.869 411.36 187.694 412.729L181.025 464.906C180.753 467.039 178.185 467.975 176.606 466.517L138.006 430.84C136.992 429.904 135.428 429.904 134.414 430.84L95.8141 466.517C94.2351 467.975 91.6671 467.039 91.3946 464.906L84.7258 412.729C84.5509 411.36 83.3542 410.354 81.9766 410.42L29.4987 412.907C27.3526 413.006 25.9869 410.645 27.1466 408.837L55.5405 364.564C56.2846 363.404 56.0134 361.868 54.9179 361.032L13.1143 329.154C11.4063 327.852 11.8805 325.164 13.931 324.525L64.0988 308.887C65.4146 308.477 66.195 307.125 65.8924 305.78L54.3339 254.458C53.8617 252.361 55.9546 250.607 57.937 251.437L106.397 271.742C107.67 272.275 109.138 271.741 109.771 270.514L133.859 223.769Z" fill="var(--color-gray)"></path><path d="M32.7289 525.562C56.9795 538.816 116.766 483.102 166.267 401.122C215.767 319.141 236.236 241.939 211.986 228.685C187.735 215.431 127.948 271.145 78.448 353.125C28.9475 435.105 8.47843 512.308 32.7289 525.562Z" fill="var(--color-gray-border)"></path><path d="M266.714 528.065C312.959 554.631 379.209 526.102 414.687 464.343C450.165 402.584 441.437 330.982 395.192 304.416C348.947 277.85 282.697 306.38 247.219 368.139C211.74 429.898 220.469 501.499 266.714 528.065Z" fill="var(--color-gray-border)"></path><path d="M169.89 442.88C194.14 456.134 244.767 415.592 282.967 352.326C321.168 289.06 332.477 227.028 308.226 213.774C283.976 200.52 233.349 241.063 195.149 304.329C156.948 367.595 145.639 429.627 169.89 442.88Z" fill="var(--color-gray-border)"></path><path d="M235.035 369.11C250.062 375.748 276.749 351.408 294.642 314.746C312.535 278.083 314.859 242.98 299.831 236.342C284.804 229.704 258.117 254.043 240.224 290.706C222.331 327.369 220.008 362.471 235.035 369.11Z" fill="var(--color-gray)"></path><path d="M285.233 362.514C296.758 367.605 316.693 350.03 329.759 323.258C342.825 296.487 344.073 270.657 332.548 265.565C321.023 260.474 301.088 278.049 288.022 304.821C274.956 331.592 273.708 357.422 285.233 362.514Z" fill="var(--color-gray)"></path><path d="M326.668 344.001C334.199 347.328 346.602 337.118 354.373 321.197C362.143 305.276 362.337 289.672 354.807 286.346C347.276 283.019 334.872 293.229 327.102 309.15C319.332 325.071 319.137 340.675 326.668 344.001Z" fill="var(--color-gray)"></path><path d="M360.481 368.158C367.473 371.28 377.736 363.518 383.403 350.822C389.071 338.126 387.998 325.303 381.006 322.182C374.013 319.061 363.751 326.822 358.083 339.518C352.415 352.214 353.489 365.037 360.481 368.158Z" fill="var(--color-gray)"></path><path d="M85.3546 149.427C96.7914 145.844 102.551 131.729 98.2183 117.901C93.8859 104.072 81.1024 95.7667 69.6656 99.3498C58.2287 102.933 52.4694 117.048 56.8018 130.876C61.1342 144.705 73.9177 153.01 85.3546 149.427Z" fill="var(--color-gray)"></path></g><defs><clipPath id="clip0_2_420"><rect width="392" height="392" fill="var(--color-light)"></rect></clipPath></defs>',
    2
  ),
  ab = [tb];
function nb(e, a) {
  return m(), v("svg", eb, ab);
}
const Gu = ie(Jy, [["render", nb]]),
  rb = {
    props: {
      text: { type: String, default: "" },
      ribbonStyle: { type: Object, default: () => ({}) },
    },
    computed: {
      computedStyles() {
        return { ...ta(this.ribbonStyle) };
      },
    },
  },
  ob = { class: "ecommerce-product-ribbon__text" };
function ib(e, a, t, n, r, i) {
  return (
    m(),
    v(
      "div",
      { class: "ecommerce-product-ribbon", style: Re(i.computedStyles) },
      [E("p", ob, J(t.text), 1)],
      4
    )
  );
}
const sb = ie(rb, [["render", ib]]),
  lb = se({
    __name: "ProductListItem",
    props: {
      image: { default: "" },
      title: {},
      price: { default: null },
      isCentered: { type: Boolean, default: !1 },
      isEager: { type: Boolean, default: !1 },
      imageMaxWidth: {},
      duration: {},
      productType: { default: "" },
      translations: { default: () => ({}) },
      isStoreQuantityTracked: { type: Boolean },
      quantity: {},
      isButtonEnabled: { type: Boolean, default: !1 },
      buttonDisplay: { default: "" },
      buttonText: { default: "" },
      buttonStyle: { default: () => ({}) },
      buttonType: { default: "primary" },
      buttonBorderWidth: { default: 0 },
      isPriceRangeShown: { type: Boolean },
      ribbon: { default: "" },
      ribbonStyle: { default: () => ({}) },
      siteId: { default: "" },
      isPurchasable: { type: Boolean },
      imageRatio: { default: "cover" },
    },
    emits: ["button-click"],
    setup(e, { expose: a }) {
      a(), St((p) => ({ "36c075ce": p.imageRatio }));
      const t = { [Ma]: Kn },
        n = e,
        r = c(() => !n.isStoreQuantityTracked || n.quantity > 0),
        i = c(() => n.buttonText || n.translations?.addToBag || "Add to bag"),
        o = c(() => ({
          normal: n.buttonStyle[`grid-button-${n.buttonType}-border-color`],
          hover:
            n.buttonStyle[`grid-button-${n.buttonType}-border-color-hover`],
        })),
        s = c(() => ({
          normal: n.buttonStyle[`grid-button-${n.buttonType}-background-color`],
          hover:
            n.buttonStyle[`grid-button-${n.buttonType}-background-color-hover`],
        })),
        l = c(() => ({ ...ta(n.buttonStyle) })),
        d = {
          CUSTOM_ATTRIBUTES: t,
          props: n,
          isInStock: r,
          blockButtonText: i,
          buttonBorderColor: o,
          buttonBackgroundColor: s,
          computedStyles: l,
          GridButton: hn,
          get PRODUCT_TYPE_BOOKING() {
            return jt;
          },
          get formatPrice() {
            return Fn;
          },
          ProductImage: Br,
          ProductImagePlaceholder: Gu,
          ProductRibbon: sb,
        };
      return (
        Object.defineProperty(d, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        d
      );
    },
  }),
  ub = { class: "product-list-item__content" },
  cb = { class: "product-list-item__title" },
  db = { key: 0, class: "product-list-item__price-wrapper" },
  mb = { key: 0, class: "product-list-item__price-range" },
  pb = { key: 0, class: "product-list-item__price-content" },
  gb = { key: 1, class: "product-list-item__duration" },
  hb = { key: 1, class: "product-list-item__text" };
function fb(e, a, t, n, r, i) {
  const o = ze("qa");
  return (
    m(),
    v(
      "div",
      Qe(
        {
          class: [
            "product-list-item",
            { "product-list-item--centered": t.isCentered },
          ],
          style: n.computedStyles,
        },
        n.CUSTOM_ATTRIBUTES
      ),
      [
        E("div", ub, [
          ue(
            (m(),
            v(
              "div",
              {
                class: ee([
                  "product-list-item__image-wrapper",
                  {
                    "product-list-item__image-wrapper--contain":
                      t.imageRatio === "contain",
                  },
                ]),
              },
              [
                t.image
                  ? (m(),
                    G(
                      n.ProductImage,
                      {
                        key: 0,
                        src: t.image,
                        alt: t.title,
                        class: "product-list-item__image",
                        "is-eager": t.isEager,
                        width: t.imageMaxWidth,
                        height: t.imageMaxWidth,
                        "site-id": t.siteId,
                        "object-fit": t.imageRatio,
                        "enable-srcset": "",
                        "is-lossless": !0,
                      },
                      null,
                      8,
                      [
                        "src",
                        "alt",
                        "is-eager",
                        "width",
                        "height",
                        "site-id",
                        "object-fit",
                      ]
                    ))
                  : (m(),
                    G(n.ProductImagePlaceholder, {
                      key: 1,
                      class: "product-list-item__image",
                    })),
                t.ribbon
                  ? (m(),
                    G(
                      n.ProductRibbon,
                      { key: 2, text: t.ribbon, "ribbon-style": t.ribbonStyle },
                      null,
                      8,
                      ["text", "ribbon-style"]
                    ))
                  : M("", !0),
              ],
              2
            )),
            [[o, "product-list-section-item-image"]]
          ),
          ue((m(), v("h6", cb, [Ne(J(t.title), 1)])), [
            [o, "product-list-section-item-title"],
          ]),
          t.price
            ? ue(
                (m(),
                v("div", db, [
                  n.isInStock
                    ? (m(),
                      v(
                        ge,
                        { key: 0 },
                        [
                          E("p", null, [
                            t.isPriceRangeShown && !t.price.sale_amount
                              ? (m(), v("span", mb, J(t.translations.from), 1))
                              : M("", !0),
                            E(
                              "span",
                              {
                                class: ee({
                                  "product-list-item__price":
                                    t.price.sale_amount,
                                }),
                              },
                              J(
                                n.formatPrice(t.price.amount, t.price.currency)
                              ),
                              3
                            ),
                          ]),
                          t.price.sale_amount
                            ? (m(),
                              v("p", pb, [
                                t.isPriceRangeShown
                                  ? (m(),
                                    v(
                                      ge,
                                      { key: 0 },
                                      [Ne(J(t.translations.from), 1)],
                                      64
                                    ))
                                  : M("", !0),
                                Ne(
                                  " " +
                                    J(
                                      n.formatPrice(
                                        t.price.sale_amount,
                                        t.price.currency
                                      )
                                    ),
                                  1
                                ),
                              ]))
                            : M("", !0),
                          t.productType === n.PRODUCT_TYPE_BOOKING
                            ? (m(), v("p", gb, J(t.duration), 1))
                            : M("", !0),
                        ],
                        64
                      ))
                    : (m(), v("p", hb, J(t.translations.soldOut), 1)),
                ])),
                [[o, "product-list-section-item-price"]]
              )
            : M("", !0),
        ]),
        t.isButtonEnabled && t.isPurchasable
          ? (m(),
            v(
              "div",
              {
                key: 0,
                class: ee([
                  "product-list-item__button-wrapper",
                  {
                    "product-list-item__button-wrapper--hidden": !n.isInStock,
                    "product-list-item__button-wrapper--with-hover":
                      t.buttonDisplay === "hover",
                  },
                ]),
                onClick: a[1] || (a[1] = Me(() => {}, ["prevent", "stop"])),
              },
              [
                ue(
                  Ee(
                    n.GridButton,
                    {
                      type: t.buttonType,
                      content: n.blockButtonText,
                      class: ee([
                        "product-list-item__button",
                        `product-list-item__button--${t.buttonType}`,
                      ]),
                      "tag-name": "button",
                      "border-width": t.buttonBorderWidth,
                      "border-color": n.buttonBorderColor.normal,
                      "border-color-hover": n.buttonBorderColor.hover,
                      "background-color": n.buttonBackgroundColor.normal,
                      "background-color-hover": n.buttonBackgroundColor.hover,
                      onClick: a[0] || (a[0] = (s) => e.$emit("button-click")),
                    },
                    null,
                    8,
                    [
                      "type",
                      "content",
                      "class",
                      "border-width",
                      "border-color",
                      "border-color-hover",
                      "background-color",
                      "background-color-hover",
                    ]
                  ),
                  [[o, "productlistsection-btn-addtobag"]]
                ),
              ],
              2
            ))
          : M("", !0),
      ],
      16
    )
  );
}
const vb = ie(lb, [
    ["render", fb],
    ["__scopeId", "data-v-0c7e66c5"],
  ]),
  so = 24,
  yb = se({
    __name: "BlockEcommerceProductList",
    props: {
      blockId: {},
      products: {},
      productPages: { default: () => ({}) },
      blockStyle: { default: () => ({}) },
      textColorVars: { default: () => ({}) },
      isProductListShown: { type: Boolean, default: !0 },
      isLoading: { type: Boolean },
      isEager: { type: Boolean },
      columnCount: { default: 3 },
      productsPerPage: { default: 9 },
      translations: {},
      productIds: { default: () => [] },
      productCategoryId: { default: "" },
      isButtonEnabled: { type: Boolean },
      buttonDisplay: { default: "" },
      buttonText: { default: "" },
      buttonStyle: { default: () => ({}) },
      buttonType: { default: "primary" },
      buttonBorderWidth: { default: 0 },
      ribbonStyle: { default: () => ({}) },
      isProductListItemLinkDisabled: { type: Boolean },
      siteId: {},
      variantsQuantity: {},
      imageRatio: { default: "cover" },
    },
    emits: ["product-click", "button-click", "page-changed"],
    setup(e, { expose: a, emit: t }) {
      a();
      const n = e,
        r = t,
        i = Nd(),
        o = A(1),
        s = A(!1),
        l = c(() => `store-page-${n.blockId}`),
        d = c(() => Math.ceil(n.productIds.length / n.productsPerPage)),
        p = c(() => ({ [xn]: s.value ? Nn : null })),
        u = c(() => (o.value > d.value ? d.value : o.value < 1 ? 1 : o.value)),
        g = c(() => (u.value - 1) * n.productsPerPage),
        y = c(() => g.value + n.productsPerPage),
        f = c(() => n.productIds.slice(g.value, y.value)),
        _ = c(() => {
          const H = Object.values(n.products),
            q = H.filter((B) => f.value.includes(B.id));
          return q.length ? q : H.slice(g.value, y.value);
        }),
        S = c(
          () =>
            n.translations.onlineStoreNoProducts ||
            "No publicly visible products"
        ),
        w = () => {
          const q =
              new URLSearchParams(window.location.search).get(l.value) || "1",
            B = Number.parseInt(q, 10);
          B !== o.value && (o.value = B);
        };
      Oe(() => {
        const q =
            new URLSearchParams(window.location.search).get(l.value) || "1",
          B = Number.parseInt(q, 10);
        B !== o.value && ((o.value = B), r("page-changed", f.value)),
          window.addEventListener("popstate", () => {
            w();
          });
      }),
        xt(() => {
          window.removeEventListener("popstate", w);
        });
      const b = c(() => n.blockStyle?.textAlign === "center"),
        D = c(() => {
          const H = (n.columnCount - 1) * so,
            q = Fd - H;
          return Math.floor(q / n.columnCount);
        }),
        P = c(() => ({
          "--image-max-width": `${D.value}px`,
          "--gap-size": `${so}px`,
          ...ta(n.textColorVars),
        })),
        O = async (H) => {
          (s.value = !1),
            (o.value = H),
            r("page-changed", f.value),
            await Ot(),
            (s.value = !0);
          const q = document.getElementById(n.blockId),
            B = q?.getBoundingClientRect();
          (B && B.top >= 0 && B.bottom <= window.innerHeight) ||
            q?.scrollIntoView({ behavior: "smooth" });
        },
        N = (H) => Object.values(n.productPages).find((q) => q.productId === H),
        x = (H) => {
          if (n.isProductListItemLinkDisabled) return i;
          const q = N(H);
          return q ? { path: `/${q.slug}` } : { path: "/" };
        },
        X = (H) =>
          H.variants.reduce((q, B) => {
            const I = q.prices[0]?.sale_amount || q.prices[0]?.amount,
              U = B.prices[0]?.sale_amount || B.prices[0]?.amount;
            return I < U ? q : B;
          }),
        R = {
          GAP_SIZE: so,
          props: n,
          emit: r,
          route: i,
          currentPage: o,
          isAnimationActive: s,
          blockStorePageQuery: l,
          pageCount: d,
          customAttributes: p,
          modifiedCurrentPage: u,
          startIndex: g,
          endIndex: y,
          targetIds: f,
          currentPageProducts: _,
          emptyPageMessage: S,
          handleBrowserNavigationPageChange: w,
          isCentered: b,
          imageWidth: D,
          computedStyles: P,
          handlePageChange: O,
          getItemProductPage: N,
          getItemProductPageTo: x,
          getSmallestPriceVariant: X,
          getSmallestProductPrice: (H) =>
            An(H) ? X(H).prices[0] : H.variants[0].prices[0],
          getProductImage: (H) => (An(H) && X(H).image_url) || H.thumbnail,
          ListSkeletonLoader: zy,
          ZyroPagination: Wu,
          ProductListEmptyState: Xy,
          ProductListItem: vb,
          get getFormattedBookingDuration() {
            return Si;
          },
          get isProductPriceRangeShown() {
            return An;
          },
          get getFullProductQuantity() {
            return qu;
          },
        };
      return (
        Object.defineProperty(R, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        R
      );
    },
  }),
  bb = ["id"],
  _b = { key: 1, ref: "productList", class: "block-product-list" },
  wb = { class: "block-product-list__content" };
function kb(e, a, t, n, r, i) {
  const o = Ce("RouterLink");
  return (
    m(),
    v(
      "div",
      {
        id: t.blockId,
        class: "block-product-list-wrapper",
        style: Re(n.computedStyles),
      },
      [
        t.isLoading
          ? (m(),
            G(
              n.ListSkeletonLoader,
              { key: 0, "column-count": t.columnCount },
              null,
              8,
              ["column-count"]
            ))
          : t.isProductListShown
          ? (m(),
            v(
              "div",
              _b,
              [
                E("div", wb, [
                  (m(!0),
                  v(
                    ge,
                    null,
                    Se(
                      n.currentPageProducts,
                      (s, l) => (
                        m(),
                        G(
                          o,
                          {
                            key: `product-${l}-${s.id}`,
                            to: n.getItemProductPageTo(s.id),
                            class: "block-product-list__link",
                          },
                          {
                            default: _e(() => [
                              Ee(
                                n.ProductListItem,
                                Qe(n.customAttributes, {
                                  image: n.getProductImage(s),
                                  title: s.title,
                                  ribbon: s.ribbon_text,
                                  price: n.getSmallestProductPrice(s),
                                  "is-centered": n.isCentered,
                                  "is-eager": t.isEager && l === 0,
                                  duration: n.getFormattedBookingDuration(
                                    s,
                                    t.translations
                                  ),
                                  "image-max-width": n.imageWidth,
                                  "image-ratio": t.imageRatio,
                                  "is-store-quantity-tracked":
                                    s.variants[0].manage_inventory,
                                  "is-price-range-shown":
                                    n.isProductPriceRangeShown(s),
                                  quantity: n.getFullProductQuantity({
                                    product: s,
                                    variantsQuantity: t.variantsQuantity,
                                  }),
                                  "product-type": s.type.value,
                                  translations: t.translations,
                                  "is-button-enabled": t.isButtonEnabled,
                                  "button-display": t.buttonDisplay,
                                  "button-text": t.buttonText,
                                  "button-style": t.buttonStyle,
                                  "button-type": t.buttonType,
                                  "button-border-width": t.buttonBorderWidth,
                                  "ribbon-style": t.ribbonStyle,
                                  "is-purchasable": s.purchasable ?? !0,
                                  "site-id": t.siteId,
                                  onClick: (d) => e.$emit("product-click", s),
                                  onButtonClick: (d) =>
                                    e.$emit("button-click", s),
                                }),
                                null,
                                16,
                                [
                                  "image",
                                  "title",
                                  "ribbon",
                                  "price",
                                  "is-centered",
                                  "is-eager",
                                  "duration",
                                  "image-max-width",
                                  "image-ratio",
                                  "is-store-quantity-tracked",
                                  "is-price-range-shown",
                                  "quantity",
                                  "product-type",
                                  "translations",
                                  "is-button-enabled",
                                  "button-display",
                                  "button-text",
                                  "button-style",
                                  "button-type",
                                  "button-border-width",
                                  "ribbon-style",
                                  "is-purchasable",
                                  "site-id",
                                  "onClick",
                                  "onButtonClick",
                                ]
                              ),
                            ]),
                            _: 2,
                          },
                          1032,
                          ["to"]
                        )
                      )
                    ),
                    128
                  )),
                ]),
                Ee(
                  n.ZyroPagination,
                  {
                    "current-page": n.currentPage,
                    "page-count": n.pageCount,
                    class: "block-product-list__pagination",
                    color: "var(--body-color)",
                    onChangePage: a[0] || (a[0] = (s) => n.handlePageChange(s)),
                  },
                  null,
                  8,
                  ["current-page", "page-count"]
                ),
              ],
              512
            ))
          : (m(),
            G(
              n.ProductListEmptyState,
              {
                key: 2,
                "text-color-vars": t.textColorVars,
                "empty-page-message": n.emptyPageMessage,
              },
              null,
              8,
              ["text-color-vars", "empty-page-message"]
            )),
      ],
      12,
      bb
    )
  );
}
const Sb = ie(yb, [
    ["render", kb],
    ["__scopeId", "data-v-35a67df5"],
  ]),
  dl = (e, { productPages: a, isStoreTypeZyro: t, products: n }) => {
    const r = c(() => {
        let D;
        return (
          t.value
            ? (D = n.value?.filter((P) =>
                Object.values(a.value).find((O) => O.productId === P.id)
              ))
            : (D = n.value),
          e.data.productCategoryId
            ? ((D = D.filter((P) =>
                P.product_collections.some(
                  (O) => O.collection_id === e.data.productCategoryId
                )
              )),
              D?.sort((P, O) => {
                const N = P.product_collections.find(
                    (X) => X.collection_id === e.data.productCategoryId
                  ),
                  x = O.product_collections.find(
                    (X) => X.collection_id === e.data.productCategoryId
                  );
                return N.order - x.order;
              }))
            : D?.sort((P, O) => P.title.localeCompare(O.title))
        );
      }),
      i = c(() => e.data.settings?.styles),
      o = c(() => e.data.textColorVars),
      s = c(() => e.data.columnCount),
      l = c(() => e.data.productCategoryId),
      d = c(() => e.data.productIds),
      p = c(() => e.data.isButtonEnabled ?? !1),
      u = c(() => e.data.buttonDisplay),
      g = c(() => e.data.buttonText),
      y = c(() => e.data.buttonStyle),
      f = c(() => e.data.buttonType),
      _ = c(() => e.data.buttonBorderWidth),
      S = c(() => e.data.ribbonStyle),
      w = c(() => e.data.imageRatio),
      b = c(() => e.data.productsPerPage || Jv[s.value || Yu]);
    return {
      productList: r,
      textColorVars: o,
      blockStyle: i,
      columnCount: s,
      productsPerPage: b,
      productIds: d,
      productCategoryId: l,
      isButtonEnabled: p,
      buttonDisplay: u,
      buttonText: g,
      buttonStyle: y,
      buttonType: f,
      buttonBorderWidth: _,
      ribbonStyle: S,
      imageRatio: w,
    };
  },
  Cb = {
    __name: "BlockEcommerceProductListProviderUser",
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, default: () => ({}) },
      lcp: { type: Object, default: () => ({}) },
      ecommerceTranslations: { type: Object, default: () => ({}) },
      currentLocale: { type: String, default: Yt },
      blocks: { type: Object, default: () => ({}) },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: a }) {
      a();
      const t = e,
        { siteId: n } = rt(),
        {
          products: r,
          isStoreTypeZyro: i,
          productPages: o,
          isShoppingCartOpen: s,
          shoppingCartItems: l,
          variantsQuantity: d,
          isLoading: p,
          fetchProducts: u,
          setShoppingCartOpen: g,
          setShoppingCartItems: y,
          setIsCheckoutLoading: f,
          setSelectedBookingId: _,
        } = Wt(),
        {
          openEcommerceModal: S,
          closeEcommerceModal: w,
          setProductPreviewData: b,
        } = qt(),
        { initiateCheckout: D } = on(),
        {
          productList: P,
          blockStyle: O,
          textColorVars: N,
          columnCount: x,
          productsPerPage: X,
          productIds: W,
          productCategoryId: T,
          isButtonEnabled: R,
          buttonDisplay: H,
          buttonText: q,
          buttonStyle: B,
          buttonType: I,
          buttonBorderWidth: U,
          ribbonStyle: V,
          imageRatio: K,
        } = dl(t, { productPages: o, isStoreTypeZyro: i, products: r }),
        k = A(!1),
        h = c(() => !!P.value?.length),
        F = c(() => p.value || !k.value),
        j = (Y) => {
          u(Y);
        },
        ae = async (Y) => {
          if (t.isInPreviewMode) {
            S("EcommerceMessageButtonDisabled");
            return;
          }
          if (Y.options.length) {
            const re = Object.values(o.value).find(
                (fe) => fe.productId === Y.id
              ),
              Q = Object.keys(t.blocks)
                .filter((fe) => t.blocks[fe].type === "BlockEcommerceProduct")
                .find((fe) => re.blocks.includes(fe));
            if (!Q) {
              if (!re) {
                window.location.assign("/");
                return;
              }
              window.location.assign(`/${re.slug}`);
              return;
            }
            b(t.blocks[Q]), S("EcommerceProductPreview");
            return;
          }
          const C = [{ ...Y, variants: [Y.variants[0]] }];
          if ((await w(), Y.type.value === jt)) {
            _(Y.id), S("EcommerceBookingEventSelect");
            return;
          }
          if (t.isCartVisible) {
            if ((y([...l.value, ...C]), s.value)) return;
            g(!0);
          } else
            f(!0),
              await D(C).then(() => {
                f(!1);
              });
        };
      Oe(() => {
        k.value = !0;
      });
      const le = {
        props: t,
        siteId: n,
        products: r,
        isStoreTypeZyro: i,
        productPages: o,
        isShoppingCartOpen: s,
        shoppingCartItems: l,
        variantsQuantity: d,
        isEcommerceLoading: p,
        fetchProducts: u,
        setShoppingCartOpen: g,
        setShoppingCartItems: y,
        setIsCheckoutLoading: f,
        setSelectedBookingId: _,
        openEcommerceModal: S,
        closeEcommerceModal: w,
        setProductPreviewData: b,
        initiateCheckout: D,
        productList: P,
        blockStyle: O,
        textColorVars: N,
        columnCount: x,
        productsPerPage: X,
        productIds: W,
        productCategoryId: T,
        isButtonEnabled: R,
        buttonDisplay: H,
        buttonText: q,
        buttonStyle: B,
        buttonType: I,
        buttonBorderWidth: U,
        ribbonStyle: V,
        imageRatio: K,
        isClientLoaded: k,
        isProductListShown: h,
        isLoading: F,
        handlePageChange: j,
        handleButtonClick: ae,
        computed: c,
        ref: A,
        onMounted: Oe,
        get useSiteGlobal() {
          return rt;
        },
        get isAppPrerendering() {
          return iu;
        },
        BlockEcommerceProductList: Sb,
        get useBlockEcommerceProductList() {
          return dl;
        },
        get SYSTEM_LOCALE() {
          return Yt;
        },
        get useEcommerceModal() {
          return qt;
        },
        get useEcommerce() {
          return on;
        },
        get PRODUCT_TYPE_BOOKING() {
          return jt;
        },
        get useEcommerceGlobal() {
          return Wt;
        },
      };
      return (
        Object.defineProperty(le, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        le
      );
    },
  };
function Tb(e, a, t, n, r, i) {
  return (
    m(),
    G(
      n.BlockEcommerceProductList,
      {
        "block-id": t.blockId,
        "block-style": n.blockStyle,
        "text-color-vars": n.textColorVars,
        "is-product-list-shown": n.isProductListShown,
        "products-per-page": n.productsPerPage,
        "column-count": n.columnCount,
        "product-pages": n.productPages,
        "product-ids": n.productIds,
        "product-category-id": n.productCategoryId,
        "is-button-enabled": n.isButtonEnabled,
        "button-display": n.buttonDisplay,
        "button-text": n.buttonText,
        "button-style": n.buttonStyle,
        "button-type": n.buttonType,
        "button-border-width": n.buttonBorderWidth,
        "is-loading": n.isLoading,
        "ribbon-style": n.ribbonStyle,
        products: n.productList,
        translations: t.ecommerceTranslations,
        "image-ratio": n.imageRatio,
        "is-eager":
          t.lcp.type === "block-ecommerce-product-list" &&
          t.lcp.id === t.blockId,
        "site-id": n.siteId,
        "variants-quantity": n.variantsQuantity,
        onPageChanged: n.handlePageChange,
        onButtonClick: n.handleButtonClick,
      },
      null,
      8,
      [
        "block-id",
        "block-style",
        "text-color-vars",
        "is-product-list-shown",
        "products-per-page",
        "column-count",
        "product-pages",
        "product-ids",
        "product-category-id",
        "is-button-enabled",
        "button-display",
        "button-text",
        "button-style",
        "button-type",
        "button-border-width",
        "is-loading",
        "ribbon-style",
        "products",
        "translations",
        "image-ratio",
        "is-eager",
        "site-id",
        "variants-quantity",
      ]
    )
  );
}
const Pb = ie(Cb, [["render", Tb]]),
  zu = ({
    move: e = { swipe: !1, drag: !1 },
    onMoveLeft: a = () => {},
    onMoveRight: t = () => {},
    onMoveUp: n = () => {},
    onMoveDown: r = () => {},
  }) => {
    let i = null,
      o = null;
    const s = e.swipe && e.drag,
      l = e.swipe || e.drag;
    function d(S) {
      return S.touches;
    }
    function p(S) {
      const w = d(S)[0];
      (i = w.clientX), (o = w.clientY);
    }
    function u(S) {
      const w = new Image();
      (w.src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="),
        S.dataTransfer.setDragImage(w, 0, 0),
        (i = S.clientX),
        (o = S.clientY);
    }
    const g = (S, w) => {
        Math.abs(S) > Math.abs(w) ? (S > 0 ? a() : t()) : w > 0 ? n() : r(),
          (i = null),
          (o = null);
      },
      y = (S) => {
        if (!i || !o) return;
        const w = S.touches[0].clientX,
          b = S.touches[0].clientY,
          D = i - w,
          P = o - b;
        g(D, P);
      },
      f = (S) => {
        if (!i || !o) return;
        const w = i - S.clientX,
          b = o - S.clientY;
        g(w, b);
      };
    return {
      enableMoveEvents: (S = !0, w = null) => {
        const b = w === null ? document : w,
          D = S ? "addEventListener" : "removeEventListener";
        if (s)
          b[D]("touchstart", p, !1),
            b[D]("touchmove", y, !1),
            b[D]("dragstart", u, !1),
            b[D]("drag", f, !1);
        else if (l) {
          const P = e.swipe ? p : u,
            O = e.swipe ? y : f;
          b[D](e.swipe ? "touchstart" : "dragstart", P, !1),
            b[D](e.swipe ? "touchmove" : "drag", O, !1);
        }
      },
    };
  },
  Ib = se({
    components: { ProductImage: Br, ProductImagePlaceholder: Gu },
    props: {
      images: { type: Array, required: !0 },
      productTitle: { type: String, required: !0 },
      arrowsColor: { type: String, default: "unset" },
      navigationThumbnailArrowsColor: { type: String, default: "unset" },
      galleryPlacement: { type: String, default: "left" },
      imageRatio: { type: String, default: "unset" },
      imageBorderRadius: { type: String, default: "unset" },
      isEager: { type: Boolean, default: !1 },
      variantImage: { type: String, default: null },
      isQuickPreview: { type: Boolean, default: !1 },
      isVariantImagePreselected: { type: Boolean, default: !1 },
      siteId: { type: String, default: null },
    },
    emits: ["image-click"],
    data() {
      return {
        PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX: os,
        windowWidth: null,
        slideDirection: "",
        currentIndex: 0,
        imageListStartIndex: 0,
      };
    },
    computed: {
      imagePreviewAmount() {
        let e = 0;
        switch (!0) {
          case this.windowWidth < (this.isGalleryLeft ? 920 : 900):
            e = 4;
            break;
          case this.windowWidth < (this.isGalleryLeft ? 1060 : 1020):
            e = 5;
            break;
          case this.windowWidth < (this.isGalleryLeft ? 1250 : 1160):
            e = 6;
            break;
          case this.windowWidth < (this.isGalleryLeft ? 1400 : 1320):
            e = 7;
            break;
          default:
            e = this.isGalleryLeft ? 7 : 8;
        }
        return this.imageListStartIndex !== 0 &&
          this.imageListStartIndex + e < this.images.length
          ? e - 1
          : e;
      },
      isGalleryLeft() {
        return this.galleryPlacement === "left";
      },
      thumbnails() {
        return this.images.slice(
          this.imageListStartIndex,
          this.imageListStartIndex + this.imagePreviewAmount
        );
      },
      isThumbnailVisible() {
        return this.thumbnails.some(
          (e) => e.url === this.images[this.currentIndex].url
        );
      },
      isArrowsShown() {
        return this.isMoreThanOneImage && !this.isQuickPreview;
      },
      isRightImageArrowShown() {
        return this.images.length < this.imagePreviewAmount
          ? !1
          : this.imageListStartIndex + this.imagePreviewAmount <
              this.images.length;
      },
      isMoreThanOneImage() {
        return this.images.length > 1;
      },
      imageMaxWidth() {
        return this.isQuickPreview ? bd : _d;
      },
      carouselStyle() {
        return {
          "--image-max-width": `${this.imageMaxWidth}px`,
          "--image-max-width-left": `${wd}px`,
          "--image-max-width-small": `${os}px`,
          "--image-object-fit": this.imageRatio,
          "--image-border-radius":
            this.imageRatio === "cover" ? this.imageBorderRadius : 0,
          "--image-position":
            this.imageRatio === "cover" ? "absolute" : "relative",
          "--arrow-color": this.arrowsColor,
          "--thumbnail-arrow-color": this.navigationThumbnailArrowsColor,
        };
      },
    },
    watch: {
      variantImage() {
        this.setVariantImage(),
          this.isThumbnailVisible || this.presetThumbnailPosition();
      },
    },
    mounted() {
      (this.windowWidth = window.innerWidth),
        window.addEventListener("resize", this.resizeEventHandler),
        this.isVariantImagePreselected && this.setVariantImage(),
        this.enableCarouselMoveEvents(!0);
    },
    beforeUnmount() {
      window.removeEventListener("resize", this.resizeEventHandler),
        this.enableCarouselMoveEvents(!1);
    },
    methods: {
      resizeEventHandler() {
        (this.windowWidth = window.innerWidth),
          this.imagePreviewAmount < this.images.length &&
            this.presetThumbnailPosition();
      },
      presetThumbnailPosition() {
        this.images.length - this.currentIndex < this.imagePreviewAmount
          ? (this.imageListStartIndex =
              this.images.length - this.imagePreviewAmount)
          : (this.imageListStartIndex = this.currentIndex);
      },
      isImageMatch(e) {
        return this.thumbnails[e].url === this.images[this.currentIndex].url;
      },
      handleThumbnailClick(e) {
        this.currentIndex = this.images.findIndex(
          (a) => a.url === this.thumbnails[e].url
        );
      },
      goToNextSlide() {
        (this.slideDirection = "right"),
          (this.currentIndex =
            this.currentIndex === this.images.length - 1
              ? 0
              : this.currentIndex + 1),
          this.isThumbnailVisible ||
            (this.imageListStartIndex + this.imagePreviewAmount ===
            this.images.length
              ? (this.imageListStartIndex = 0)
              : (this.presetThumbnailPosition(),
                this.imagePreviewAmount !== this.thumbnails.length &&
                  this.presetThumbnailPosition()));
      },
      goToPreviousSlide() {
        (this.slideDirection = "left"),
          (this.currentIndex =
            this.currentIndex === 0
              ? this.images.length - 1
              : this.currentIndex - 1),
          this.isThumbnailVisible ||
            (this.imageListStartIndex === 0
              ? (this.imageListStartIndex =
                  this.images.length - this.imagePreviewAmount)
              : this.presetThumbnailPosition());
      },
      moveImageListRight() {
        const e = this.imagePreviewAmount;
        this.imageListStartIndex += 1;
        const a = this.imagePreviewAmount;
        e !== a && this.isRightImageArrowShown && this.moveImageListRight();
      },
      moveImageListLeft() {
        this.imageListStartIndex -= 1;
      },
      enableCarouselMoveEvents(e) {
        if (!this.isMoreThanOneImage) return;
        const { enableMoveEvents: a } = zu({
          move: { drag: !1, swipe: !0 },
          onMoveLeft: () => this.goToNextSlide(),
          onMoveRight: () => this.goToPreviousSlide(),
        });
        a(e, this.$refs.carouselRef);
      },
      setVariantImage() {
        const e = this.images.findIndex((a) => a.url === this.variantImage);
        e > -1 && (this.currentIndex = e);
      },
    },
  }),
  Eb = E(
    "span",
    { class: "product-carousel__arrow product-carousel__arrow--left" },
    null,
    -1
  ),
  Db = [Eb],
  Mb = E(
    "span",
    { class: "product-carousel__arrow product-carousel__arrow--right" },
    null,
    -1
  ),
  Ob = [Mb],
  Ab = ["onClick"],
  Lb = { class: "product-carousel__dots-wrapper" },
  Bb = ["onClick"];
function Rb(e, a, t, n, r, i) {
  const o = Ce("ProductImage"),
    s = Ce("ProductImagePlaceholder"),
    l = ze("qa");
  return (
    m(),
    v(
      "div",
      {
        class: ee([
          "product-carousel",
          { "product-carousel--left": e.isGalleryLeft },
        ]),
        style: Re(e.carouselStyle),
      },
      [
        E(
          "div",
          {
            ref: "carouselRef",
            class: ee([
              "product-carousel__image-wrapper",
              {
                "product-carousel__image-wrapper--contain":
                  e.imageRatio === "contain",
              },
            ]),
          },
          [
            e.isArrowsShown
              ? (m(),
                v(
                  ge,
                  { key: 0 },
                  [
                    ue(
                      (m(),
                      v(
                        "button",
                        {
                          class:
                            "product-carousel__slider-button product-carousel__slider-button--left",
                          onClick:
                            a[0] ||
                            (a[0] = (...d) =>
                              e.goToPreviousSlide && e.goToPreviousSlide(...d)),
                        },
                        Db
                      )),
                      [[l, "product-carousel-button-prev"]]
                    ),
                    ue(
                      (m(),
                      v(
                        "button",
                        {
                          class:
                            "product-carousel__slider-button product-carousel__slider-button--right",
                          onClick:
                            a[1] ||
                            (a[1] = (...d) =>
                              e.goToNextSlide && e.goToNextSlide(...d)),
                        },
                        Ob
                      )),
                      [[l, "product-carousel-button-next"]]
                    ),
                  ],
                  64
                ))
              : M("", !0),
            e.images.length
              ? (m(),
                G(
                  At,
                  {
                    key: 1,
                    name: `slide-${e.slideDirection}`,
                    mode: "out-in",
                    class: "product-carousel__image-content",
                  },
                  {
                    default: _e(() => [
                      (m(),
                      G(
                        o,
                        {
                          key: e.images[e.currentIndex].url,
                          src: e.images[e.currentIndex].url,
                          alt: e.productTitle,
                          class:
                            "product-carousel__image product-carousel__main-image",
                          "is-eager": e.isEager,
                          "object-fit": e.imageRatio,
                          width: e.imageMaxWidth,
                          height: e.imageMaxWidth,
                          "enable-srcset": "",
                          onClick:
                            a[2] ||
                            (a[2] = (d) =>
                              e.$emit("image-click", e.currentIndex)),
                        },
                        null,
                        8,
                        [
                          "src",
                          "alt",
                          "is-eager",
                          "object-fit",
                          "width",
                          "height",
                        ]
                      )),
                    ]),
                    _: 1,
                  },
                  8,
                  ["name"]
                ))
              : (m(),
                G(s, {
                  key: 2,
                  class: "product-carousel__image product-carousel__main-image",
                })),
          ],
          2
        ),
        e.isMoreThanOneImage
          ? (m(),
            v(
              ge,
              { key: 0 },
              [
                e.isQuickPreview
                  ? M("", !0)
                  : (m(),
                    v(
                      "div",
                      {
                        key: 0,
                        class: ee([
                          "product-carousel__image-list",
                          {
                            "product-carousel__image-list-left":
                              e.isGalleryLeft,
                          },
                        ]),
                      },
                      [
                        e.imageListStartIndex !== 0
                          ? ue(
                              (m(),
                              v(
                                "button",
                                {
                                  key: 0,
                                  class: ee([
                                    "product-carousel__image-arrow",
                                    {
                                      "product-carousel__image-arrow--left":
                                        !e.isGalleryLeft,
                                      "product-carousel__image-arrow--top":
                                        e.isGalleryLeft,
                                    },
                                  ]),
                                  onClick:
                                    a[3] ||
                                    (a[3] = (...d) =>
                                      e.moveImageListLeft &&
                                      e.moveImageListLeft(...d)),
                                },
                                null,
                                2
                              )),
                              [[l, "product-carousel-image-button-left"]]
                            )
                          : M("", !0),
                        E(
                          "div",
                          {
                            class: ee({
                              "product-carousel__image-list-element-wrapper-left":
                                e.isGalleryLeft,
                            }),
                          },
                          [
                            (m(!0),
                            v(
                              ge,
                              null,
                              Se(
                                e.thumbnails,
                                (d, p) => (
                                  m(),
                                  v(
                                    "button",
                                    {
                                      key: `image-${p}-${d.url}`,
                                      class: ee([
                                        "product-carousel__image-list-element",
                                        {
                                          "product-carousel__image-list-element--active":
                                            e.isImageMatch(p),
                                        },
                                      ]),
                                      onClick: (u) => e.handleThumbnailClick(p),
                                    },
                                    [
                                      Ee(
                                        o,
                                        {
                                          src: d.url,
                                          alt: e.productTitle,
                                          class: "product-carousel__image",
                                          "is-eager": e.isEager,
                                          "object-fit": e.imageRatio,
                                          "site-id": e.siteId,
                                          width:
                                            e.PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX,
                                          height:
                                            e.PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX,
                                        },
                                        null,
                                        8,
                                        [
                                          "src",
                                          "alt",
                                          "is-eager",
                                          "object-fit",
                                          "site-id",
                                          "width",
                                          "height",
                                        ]
                                      ),
                                    ],
                                    10,
                                    Ab
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          2
                        ),
                        e.isRightImageArrowShown
                          ? ue(
                              (m(),
                              v(
                                "button",
                                {
                                  key: 1,
                                  class: ee([
                                    "product-carousel__image-arrow",
                                    {
                                      "product-carousel__image-arrow--right":
                                        !e.isGalleryLeft,
                                      "product-carousel__image-arrow--bottom":
                                        e.isGalleryLeft,
                                    },
                                  ]),
                                  onClick:
                                    a[4] ||
                                    (a[4] = (...d) =>
                                      e.moveImageListRight &&
                                      e.moveImageListRight(...d)),
                                },
                                null,
                                2
                              )),
                              [[l, "product-carousel-image-button-right"]]
                            )
                          : M("", !0),
                      ],
                      2
                    )),
                E("div", Lb, [
                  (m(!0),
                  v(
                    ge,
                    null,
                    Se(
                      e.images,
                      (d, p) => (
                        m(),
                        v(
                          "button",
                          {
                            key: `image-dot-${p}`,
                            class: "product-carousel__dot-button",
                            onClick: (u) => (e.currentIndex = p),
                          },
                          [
                            E(
                              "span",
                              {
                                class: ee([
                                  "product-carousel__dot",
                                  {
                                    "product-carousel__dot--active":
                                      p === e.currentIndex,
                                  },
                                ]),
                              },
                              null,
                              2
                            ),
                          ],
                          8,
                          Bb
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ],
              64
            ))
          : M("", !0),
      ],
      6
    )
  );
}
const $b = ie(Ib, [["render", Rb]]),
  Nb = se({
    __name: "OptionSelect",
    props: {
      title: {},
      labelKey: { default: "value" },
      options: { default: () => ({}) },
      value: { default: "" },
    },
    emits: ["set-value"],
    setup(e, { expose: a, emit: t }) {
      a();
      const n = t,
        i = {
          emit: n,
          updateSelectedValue: (o) => {
            const s = o.target?.value;
            n("set-value", s);
          },
        };
      return (
        Object.defineProperty(i, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  xb = { class: "option-select" },
  Hb = { class: "option-select__label" },
  Ub = { class: "option-select__select-wrapper" },
  Vb = ["value"],
  Fb = ["value"];
function Yb(e, a, t, n, r, i) {
  const o = ze("qa");
  return (
    m(),
    v("div", xb, [
      E("p", Hb, J(t.title), 1),
      E("div", Ub, [
        ue(
          (m(),
          v(
            "select",
            {
              value: t.value,
              class: "option-select__select",
              onChange: a[0] || (a[0] = (s) => n.updateSelectedValue(s)),
            },
            [
              (m(!0),
              v(
                ge,
                null,
                Se(
                  t.options,
                  (s, l) => (
                    m(),
                    v(
                      "option",
                      { key: `option-${l}`, value: s.id },
                      J(s[t.labelKey]),
                      9,
                      Fb
                    )
                  )
                ),
                128
              )),
            ],
            40,
            Vb
          )),
          [[o, "product-section-select-button"]]
        ),
      ]),
    ])
  );
}
const qb = ie(Nb, [
    ["render", Yb],
    ["__scopeId", "data-v-4f73632f"],
  ]),
  jb = {
    props: {
      imageBorderRadius: { type: String, default: "0" },
      textAlign: { type: String, default: "" },
    },
    computed: {
      computedStyles() {
        return { "--image-border-radius": this.imageBorderRadius };
      },
    },
  },
  Ku = (e) => (Ht("data-v-56d737b7"), (e = e()), Ut(), e),
  Wb = Ku(() => E("div", { class: "skeleton-loader__image" }, null, -1)),
  Gb = Ku(() =>
    E(
      "div",
      { class: "skeleton-loader__title skeleton-loader__text" },
      null,
      -1
    )
  );
function zb(e, a, t, n, r, i) {
  return (
    m(),
    v(
      "div",
      { class: "skeleton-loader", style: Re(i.computedStyles) },
      [
        Wb,
        E(
          "div",
          {
            class: ee([
              "skeleton-loader__wrapper",
              { "skeleton-loader__wrapper--center": t.textAlign === "center" },
            ]),
          },
          [
            Gb,
            (m(),
            v(
              ge,
              null,
              Se(10, (o) =>
                E("div", { key: o, class: "skeleton-loader__text" })
              ),
              64
            )),
          ],
          2
        ),
      ],
      4
    )
  );
}
const Kb = ie(jb, [
    ["render", zb],
    ["__scopeId", "data-v-56d737b7"],
  ]),
  Qb = se({
    name: "QuantityPicker",
    props: {
      qaSelector: { type: String, default: "" },
      isStockAvailable: { type: Boolean, default: !0 },
      quantity: { type: Number, required: !0 },
      size: { type: Number, default: 48 },
      fontSize: { type: Number, default: 16 },
      isCartStyle: { type: Boolean, default: !1 },
      isInputDisabled: { type: Boolean, default: !1 },
      isLimitReached: { type: Boolean, default: !1 },
    },
    emits: ["quantity-change"],
    data() {
      return { inputValue: this.quantity };
    },
    computed: {
      computedStyles() {
        return {
          "--size": `${this.size}px`,
          "--font-size": `${this.fontSize}px`,
        };
      },
      isIncreaseDisabled() {
        return !this.isStockAvailable || this.isLimitReached;
      },
    },
    watch: {
      quantity(e) {
        this.inputValue = e;
      },
    },
    methods: {
      handleQuantityInput(e) {
        const a = e.target?.value;
        if (a.match(Kd)) this.$emit("quantity-change", Number(e.target.value));
        else if (a === "") return;
        this.inputValue = this.quantity;
      },
      handleEmptyInput(e) {
        e.target?.value === "" &&
          (this.$emit("quantity-change", 1), (this.inputValue = 1));
      },
    },
  }),
  Zb = ["disabled"],
  Xb = ["disabled"];
function Jb(e, a, t, n, r, i) {
  const o = ze("qa");
  return (
    m(),
    v(
      "span",
      {
        class: ee([
          "quantity-picker",
          { "quantity-picker--cart-style": e.isCartStyle },
        ]),
        style: Re(e.computedStyles),
      },
      [
        ue(
          (m(),
          v(
            "button",
            {
              class: ee([
                "quantity-picker__control",
                {
                  "quantity-picker__control--rounded quantity-picker__control--bigger":
                    e.isCartStyle,
                },
              ]),
              onClick:
                a[0] ||
                (a[0] = (s) => e.$emit("quantity-change", e.quantity - 1)),
            },
            [Ne(" - ")],
            2
          )),
          [[o, `${e.qaSelector}-btn-decrease`]]
        ),
        ue(
          E(
            "input",
            {
              "onUpdate:modelValue": a[1] || (a[1] = (s) => (e.inputValue = s)),
              disabled: e.isInputDisabled,
              class: ee([
                "quantity-picker__amount",
                { "quantity-picker__amount--borderless": e.isCartStyle },
              ]),
              onInput:
                a[2] ||
                (a[2] = (...s) =>
                  e.handleQuantityInput && e.handleQuantityInput(...s)),
              onBlur:
                a[3] ||
                (a[3] = (...s) =>
                  e.handleEmptyInput && e.handleEmptyInput(...s)),
            },
            null,
            42,
            Zb
          ),
          [
            [Jl, e.inputValue],
            [o, `${e.qaSelector}-text-qty`],
          ]
        ),
        ue(
          (m(),
          v(
            "button",
            {
              class: ee([
                "quantity-picker__control",
                {
                  "quantity-picker__control--rounded quantity-picker__control--bigger":
                    e.isCartStyle,
                },
              ]),
              disabled: e.isIncreaseDisabled,
              onClick:
                a[4] ||
                (a[4] = (s) => e.$emit("quantity-change", e.quantity + 1)),
            },
            [Ne(" + ")],
            10,
            Xb
          )),
          [[o, `${e.qaSelector}-btn-increaseq`]]
        ),
      ],
      6
    )
  );
}
const Qu = ie(Qb, [
    ["render", Jb],
    ["__scopeId", "data-v-9766ec29"],
  ]),
  lo = 5,
  Tn = 1,
  e0 = se({
    __name: "BlockEcommerceProduct",
    props: {
      blockId: {},
      productData: {},
      blockStyle: { default: () => ({}) },
      textColorVars: { default: () => ({}) },
      blockButtonText: { default: "" },
      blockButtonStyle: { default: () => ({}) },
      blockButtonType: { default: "primary" },
      blockButtonBorderWidth: { default: 0 },
      navigationArrowsColor: { default: "" },
      navigationThumbnailArrowsColor: { default: "" },
      galleryPlacement: { default: "" },
      imageRatio: { default: "cover" },
      imageBorderRadius: { default: "0%" },
      isLoading: { type: Boolean, default: !1 },
      isCheckoutLoading: { type: Boolean, default: !1 },
      canAddToCart: { type: Function, default: () => !0 },
      isEager: { type: Boolean, default: !1 },
      translations: {},
      quantifiedCartItemsList: { default: () => [] },
      isQuantityPickerEnabled: { type: Boolean },
      productPages: { default: () => ({}) },
      isQuickPreview: { type: Boolean, default: !1 },
      isCartVisible: { type: Boolean },
      siteId: {},
      shoppingCartItems: { default: () => [] },
      variantsQuantity: {},
      currentPageType: { default: "default" },
    },
    emits: ["buy-button-click", "click-more", "image-click"],
    setup(e, { expose: a, emit: t }) {
      a(), St((C) => ({ "45e5b91c": p.value }));
      const n = { [Ma]: Kn },
        r = e,
        i = t,
        o = A(1),
        s = A(""),
        l = A(!1),
        d = A(ha),
        p = c(() => `${da}px`),
        u = c(() => r.currentPageType === nu),
        g = c(() => ({
          normal:
            r.blockButtonStyle[
              `grid-button-${r.blockButtonType}-background-color`
            ],
          hover:
            r.blockButtonStyle[
              `grid-button-${r.blockButtonType}-background-color-hover`
            ],
        })),
        y = c(() => ({
          hover:
            r.blockButtonStyle[
              `grid-button-${r.blockButtonType}-border-color-hover`
            ],
          normal:
            r.blockButtonStyle[`grid-button-${r.blockButtonType}-border-color`],
        })),
        f = c(() => r.blockStyle?.textAlign),
        _ = c(() => r.productData),
        S = c(() =>
          _.value.options.length
            ? _.value.options.map((C) => ({
                ...C.values.filter(
                  (re, ce, Q) =>
                    Q.findIndex((fe) => fe.value === re.value) === ce
                ),
              }))
            : []
        ),
        w = c(() => d.value?.variants[0]),
        b = c(
          () =>
            r.productData.purchasable === void 0 || r.productData.purchasable
        ),
        D = (C) => {
          const re = w.value?.options.find(
            (ce) => ce.option_id === S.value[C][0].option_id
          );
          return Object.values(S.value[C]).find((ce) => re?.value === ce.value)
            ?.id;
        },
        P = c(() =>
          d.value.id ? w.value?.prices[0] : _.value?.variants[0].prices[0]
        ),
        O = c(
          () =>
            r.quantifiedCartItemsList.find(
              (C) => C.product.variants[0].id === w.value?.id
            )?.quantity || 0
        ),
        N = c(() => (r.isCartVisible ? o.value + O.value : o.value)),
        x = c(() =>
          w.value?.manage_inventory
            ? N.value <
              On({
                variantsQuantity: r.variantsQuantity,
                variantId: w.value?.id,
              })
            : !0
        ),
        X = c(() => ({ ...ta({ ...r.textColorVars, ...r.blockButtonStyle }) })),
        W = c(
          () => !_.value?.options.length || (_.value?.options.length && d.value)
        ),
        T = c(() => _.value?.type.value === jt),
        R = c(
          () =>
            T.value && r.shoppingCartItems?.some((C) => C.id === _.value?.id)
        ),
        H = c(
          () => R.value || !r.canAddToCart(_.value?.id, d.value?.variants[0].id)
        ),
        q = c(() =>
          R.value
            ? `✓ ${r.translations.booked}`
            : r.blockButtonText || r.translations?.addToBag || "Add to bag"
        ),
        B = c(() => _.value?.variants[0].booking_event?.location),
        I = c(() => Si(_.value, r.translations)),
        U = c(
          () =>
            w.value?.manage_inventory &&
            On({
              variantsQuantity: r.variantsQuantity,
              variantId: w.value?.id,
            }) === 0
        ),
        V = c(() => !!w.value?.manage_inventory),
        K = c(() => {
          if (!r.productPages) return "/";
          const C = Object.values(r.productPages).find(
            (re) => re.productId === _.value.id
          );
          return C ? `/${C.slug}` : "/";
        }),
        k = c(() => {
          const C = On({
            variantsQuantity: r.variantsQuantity,
            variantId: w.value?.id,
          });
          return U.value || O.value === C
            ? r.translations.outOfStock
            : `${C <= lo ? C : `${lo}+`} ${r.translations.inStock} `;
        }),
        h = (C) => ({ ..._.value, variants: [C] }),
        F = () => {
          if (!_.value) return ha;
          if (_.value[gu] === mi) {
            const re = _.value.variants.reduce((fe, me) => {
                const z = fe.prices[0]?.sale_amount || fe.prices[0]?.amount,
                  oe = me.prices[0]?.sale_amount || me.prices[0]?.amount;
                return z <= oe ? fe : me;
              }),
              ce = S.value.map(
                (fe) =>
                  Object.values(fe).find((me) =>
                    re.options.some((z) => z.value === me.value)
                  ) || {}
              ),
              Q = { ...re, options: [...ce] };
            return h(Q);
          }
          const C = _.value.variants.find((re) =>
            re.options.every((ce) =>
              S.value.some((Q) => Q[0].value === ce.value)
            )
          );
          return h(C || _.value.variants[0]);
        },
        j = () => {
          const C = new Array(o.value).fill(d.value);
          (o.value = Tn), i("buy-button-click", C);
        },
        ae = (C) => {
          o.value = Tn;
          const re =
              _.value.options
                .map((me) => me.values.find((z) => z.id === C))
                .find((me) => me) || {},
            Q = [
              ...w.value?.options.filter((me) => me.option_id !== re.option_id),
              re,
            ],
            fe = _.value.variants.find((me) =>
              me.options.every((z) =>
                Q.some(
                  (oe) => oe.value === z.value && oe.option_id === z.option_id
                )
              )
            );
          fe && (d.value = h(fe));
        },
        le = (C) => {
          const re = w.value?.manage_inventory;
          if (((l.value = r.shoppingCartItems.length + C >= Ja), re)) {
            const ce = On({
              variantsQuantity: r.variantsQuantity,
              variantId: w.value?.id,
            });
            if (O.value + C > ce || l.value) {
              const Q = Math.min(ce - O.value, Ja - r.shoppingCartItems.length);
              o.value = Q;
              return;
            }
          } else if (l.value) {
            o.value = Ja - r.shoppingCartItems.length;
            return;
          }
          if (C <= 0) {
            o.value = Tn;
            return;
          }
          o.value = C;
        };
      Oe(() => {
        _.value && (d.value = F());
      }),
        je(_, (C, re) => {
          JSON.stringify(C) !== JSON.stringify(re) && (d.value = F());
        }),
        je(d, (C, re) => {
          (re?.id === -1 && !C?.site_product_selection) ||
            (JSON.stringify(C) !== JSON.stringify(re) &&
              C?.variants[0].image_url &&
              (s.value = C.variants[0].image_url));
        }),
        je(
          () => r.shoppingCartItems,
          (C) => {
            const re = C?.length || 0;
            (o.value = Tn), (l.value = re + o.value >= Ja);
          },
          { immediate: !0 }
        );
      const Y = {
        MAX_STOCK_AMOUNT_TO_SHOW: lo,
        DEFAULT_PICKER_VALUE: Tn,
        CUSTOM_ATTRIBUTES: n,
        props: r,
        emit: i,
        selectedQuantity: o,
        variantImage: s,
        isLimitReached: l,
        selectedVariant: d,
        mobileMaxWidthCSSVar: p,
        isBlockInProductPage: u,
        buttonBackgroundColor: g,
        buttonBorderColor: y,
        textAlign: f,
        productData: _,
        uniqueOptionSelections: S,
        selectedValueVariant: w,
        isPurchasable: b,
        selectedOption: D,
        priceData: P,
        quantityInCart: O,
        totalQuantitySelected: N,
        isStockAvailable: x,
        computedStyles: X,
        isPriceShown: W,
        isProductTypeBooking: T,
        isBookingProductInCart: R,
        isAddToCartDisabled: H,
        buttonText: q,
        location: B,
        formattedBookingDuration: I,
        isOutOfStock: U,
        isStockInfoShown: V,
        productPagePath: K,
        stockInfoText: k,
        getProductWithSelectedVariant: h,
        getInitiallySelectedVariant: F,
        handleButtonClick: j,
        handleVariantOptionChange: ae,
        handleQuantityChange: le,
        Carousel: $b,
        OptionSelect: qb,
        GridButton: hn,
        get formatPrice() {
          return Fn;
        },
        get isProductPriceRangeShown() {
          return An;
        },
        ProductSkeletonLoader: Kb,
        QuantityPicker: Qu,
      };
      return (
        Object.defineProperty(Y, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        Y
      );
    },
  }),
  t0 = ["id"],
  a0 = { class: "block-product__content-wrapper" },
  n0 = { class: "block-product__price-data-wrapper" },
  r0 = { key: 0, class: "block-product__title" },
  o0 = { key: 1, class: "block-product__title" },
  i0 = { class: "block-product__subtitle" },
  s0 = { class: "block-product__additional-info" },
  l0 = { key: 0, class: "block-product__price body-large" },
  u0 = { key: 1, class: "block-product__duration body-large" },
  c0 = { key: 3, class: "block-product__location" },
  d0 = { key: 4, class: "block-product__option-select-wrapper" },
  m0 = { key: 0, class: "block-product__stock-text" },
  p0 = { key: 0, class: "block-product__button-wrapper" },
  g0 = { key: 0, class: "block-product__notice" },
  h0 = ["innerHTML"];
function f0(e, a, t, n, r, i) {
  const o = Ce("RouterLink"),
    s = ze("qa");
  return (
    m(),
    v(
      "div",
      Qe(
        { id: t.blockId, class: "block-product-wrapper" },
        n.CUSTOM_ATTRIBUTES
      ),
      [
        t.isLoading || !n.productData
          ? (m(),
            G(
              n.ProductSkeletonLoader,
              {
                key: 0,
                "image-border-radius": t.imageBorderRadius,
                "text-align": n.textAlign,
              },
              null,
              8,
              ["image-border-radius", "text-align"]
            ))
          : (m(),
            v(
              "div",
              {
                key: 1,
                class: ee([
                  "block-product",
                  {
                    "block-product--centered": n.textAlign === "center",
                    "block-product--in-preview": t.isQuickPreview,
                  },
                ]),
                style: Re(n.computedStyles),
              },
              [
                Ee(
                  n.Carousel,
                  {
                    images: n.productData.images,
                    "product-title": n.productData.title,
                    "arrows-color": t.navigationArrowsColor,
                    "navigation-thumbnail-arrows-color":
                      t.navigationThumbnailArrowsColor,
                    "gallery-placement": t.galleryPlacement,
                    "image-ratio": t.imageRatio,
                    "image-border-radius": t.imageBorderRadius,
                    "is-eager": t.isEager,
                    "site-id": t.siteId,
                    "variant-image": n.variantImage,
                    "is-quick-preview": t.isQuickPreview,
                    "is-variant-image-preselected": n.isProductPriceRangeShown(
                      n.productData
                    ),
                    onImageClick:
                      a[0] || (a[0] = (l) => e.$emit("image-click", l)),
                  },
                  null,
                  8,
                  [
                    "images",
                    "product-title",
                    "arrows-color",
                    "navigation-thumbnail-arrows-color",
                    "gallery-placement",
                    "image-ratio",
                    "image-border-radius",
                    "is-eager",
                    "site-id",
                    "variant-image",
                    "is-quick-preview",
                    "is-variant-image-preselected",
                  ]
                ),
                E("div", a0, [
                  E("div", n0, [
                    n.isBlockInProductPage
                      ? ue(
                          (m(), v("h1", r0, [Ne(J(n.productData.title), 1)])),
                          [[s, "builder-product-section-title"]]
                        )
                      : ue(
                          (m(), v("h3", o0, [Ne(J(n.productData.title), 1)])),
                          [[s, "builder-product-section-title"]]
                        ),
                    E("h5", i0, J(n.productData.subtitle), 1),
                    Object.keys(n.priceData || {})?.length
                      ? (m(),
                        v(
                          "div",
                          {
                            key: 2,
                            class: ee([
                              "block-product__price-wrapper",
                              {
                                "block-product__price-wrapper--with-duration":
                                  n.isProductTypeBooking,
                              },
                            ]),
                          },
                          [
                            n.isPriceShown
                              ? (m(),
                                v(
                                  "p",
                                  {
                                    key: 0,
                                    class: ee([
                                      "block-product__price body-large",
                                      {
                                        "block-product__price--sale":
                                          n.priceData.sale_amount,
                                      },
                                    ]),
                                  },
                                  J(
                                    n.formatPrice(
                                      n.priceData.amount,
                                      n.priceData.currency
                                    )
                                  ),
                                  3
                                ))
                              : M("", !0),
                            E("div", s0, [
                              n.priceData.sale_amount && n.isPriceShown
                                ? (m(),
                                  v(
                                    "p",
                                    l0,
                                    J(
                                      n.formatPrice(
                                        n.priceData.sale_amount,
                                        n.priceData.currency
                                      )
                                    ),
                                    1
                                  ))
                                : M("", !0),
                              n.isProductTypeBooking
                                ? (m(),
                                  v("p", u0, J(n.formattedBookingDuration), 1))
                                : M("", !0),
                            ]),
                          ],
                          2
                        ))
                      : M("", !0),
                    n.isProductTypeBooking
                      ? (m(), v("p", c0, J(n.location), 1))
                      : M("", !0),
                    n.productData.options.length
                      ? (m(),
                        v("div", d0, [
                          (m(!0),
                          v(
                            ge,
                            null,
                            Se(
                              n.productData.options,
                              (l, d) => (
                                m(),
                                G(
                                  n.OptionSelect,
                                  {
                                    key: `option-${d}`,
                                    value: n.selectedOption(d),
                                    options: n.uniqueOptionSelections[d],
                                    title: l.title,
                                    class: ee([
                                      "block-product__option-select",
                                      {
                                        "block-product__option-select--centered":
                                          n.textAlign === "center",
                                      },
                                    ]),
                                    "label-key": "value",
                                    onSetValue:
                                      a[1] ||
                                      (a[1] = (p) =>
                                        n.handleVariantOptionChange(p)),
                                  },
                                  null,
                                  8,
                                  ["value", "options", "title", "class"]
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : M("", !0),
                    !n.isProductTypeBooking &&
                    t.isQuantityPickerEnabled &&
                    n.isPurchasable
                      ? (m(),
                        v(
                          "div",
                          {
                            key: 5,
                            class: ee([
                              "block-product__quantity-wrapper",
                              {
                                "block-product__quantity-wrapper--disabled":
                                  n.isOutOfStock || n.isAddToCartDisabled,
                              },
                            ]),
                          },
                          [
                            Ee(
                              n.QuantityPicker,
                              {
                                "qa-selector": "productpage",
                                quantity: n.selectedQuantity,
                                "is-limit-reached": n.isLimitReached,
                                "is-stock-available": n.isStockAvailable,
                                onQuantityChange: n.handleQuantityChange,
                              },
                              null,
                              8,
                              [
                                "quantity",
                                "is-limit-reached",
                                "is-stock-available",
                              ]
                            ),
                            n.isStockInfoShown
                              ? (m(), v("p", m0, J(n.stockInfoText), 1))
                              : M("", !0),
                          ],
                          2
                        ))
                      : M("", !0),
                  ]),
                  n.isPurchasable
                    ? (m(),
                      v("div", p0, [
                        ue(
                          Ee(
                            n.GridButton,
                            {
                              type: t.blockButtonType,
                              content: n.buttonText,
                              class: ee([
                                "block-product__button",
                                `block-product__button--${t.blockButtonType}`,
                              ]),
                              "is-loading": t.isCheckoutLoading,
                              "tag-name": "button",
                              disabled: n.isAddToCartDisabled,
                              "border-width": t.blockButtonBorderWidth,
                              "border-color": n.buttonBorderColor.normal,
                              "border-color-hover": n.buttonBorderColor.hover,
                              "background-color":
                                n.buttonBackgroundColor.normal,
                              "background-color-hover":
                                n.buttonBackgroundColor.hover,
                              onClick: n.handleButtonClick,
                            },
                            null,
                            8,
                            [
                              "type",
                              "content",
                              "class",
                              "is-loading",
                              "disabled",
                              "border-width",
                              "border-color",
                              "border-color-hover",
                              "background-color",
                              "background-color-hover",
                            ]
                          ),
                          [[s, "productsection-btn-addtobag"]]
                        ),
                      ]))
                    : M("", !0),
                  Ee(At, null, {
                    default: _e(() => [
                      n.isBookingProductInCart
                        ? (m(),
                          v("p", g0, J(t.translations.purchaseToBookAgain), 1))
                        : M("", !0),
                    ]),
                    _: 1,
                  }),
                  n.productData.description && !t.isQuickPreview
                    ? (m(),
                      v(
                        "p",
                        {
                          key: 1,
                          class: "block-product__description",
                          innerHTML: n.productData.description,
                        },
                        null,
                        8,
                        h0
                      ))
                    : t.isQuickPreview
                    ? (m(),
                      G(
                        o,
                        {
                          key: 2,
                          to: { path: n.productPagePath },
                          class: "block-product__link body-large",
                          onClick:
                            a[2] || (a[2] = (l) => e.$emit("click-more")),
                        },
                        {
                          default: _e(() => [
                            Ne(J(t.translations.moreDetails), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["to"]
                      ))
                    : M("", !0),
                ]),
              ],
              6
            )),
      ],
      16,
      t0
    )
  );
}
const v0 = ie(e0, [["render", f0]]),
  y0 = (e) => {
    const a = c(() => e.data.product.id),
      t = c(() => e.data.settings?.styles),
      n = c(() => e.data.textColorVars),
      r = c(() => e.data.buttonText),
      i = c(() => e.data.buttonStyle),
      o = c(() => e.data.buttonType),
      s = c(() => e.data.buttonBorderWidth),
      l = c(() => e.data.navigationArrowsColor),
      d = c(() => e.data.navigationThumbnailArrowsColor),
      p = c(() => e.data.galleryPlacement),
      u = c(() => e.data.imageRatio),
      g = c(() => e.data.imageBorderRadius),
      y = c(() => e.data.isQuantityPickerEnabled ?? !0);
    return {
      productId: a,
      blockStyle: t,
      blockButtonText: r,
      blockButtonStyle: i,
      blockButtonType: o,
      blockButtonBorderWidth: s,
      textColorVars: n,
      imageBorderRadius: g,
      navigationArrowsColor: l,
      navigationThumbnailArrowsColor: d,
      galleryPlacement: p,
      imageRatio: u,
      isQuantityPickerEnabled: y,
    };
  },
  b0 = se({
    components: { BlockEcommerceProduct: v0 },
    props: {
      blockId: { type: String, default: "" },
      data: { type: Object, default: () => ({}) },
      lcp: { type: Object, default: () => ({}) },
      ecommerceTranslations: { type: Object, default: () => ({}) },
      isQuickPreview: { type: Boolean, default: !1 },
      productPages: { type: Array, default: () => [] },
      isCartVisible: { type: Boolean, default: !1 },
      currentPageType: { type: String, default: "default" },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e) {
      const { siteId: a } = rt(),
        {
          quantifiedCartItemsList: t,
          canAddToCart: n,
          isShoppingCartOpen: r,
          products: i,
          shoppingCartItems: o,
          variantsQuantity: s,
          isCheckoutLoading: l,
          isLoading: d,
          isLoaded: p,
          setShoppingCartOpen: u,
          setShoppingCartItems: g,
          setIsCheckoutLoading: y,
          setSelectedBookingId: f,
        } = Wt(),
        { openEcommerceModal: _, closeEcommerceModal: S } = qt(),
        { initiateCheckout: w } = on(),
        { addImagesToLightbox: b } = sn(),
        {
          productId: D,
          blockStyle: P,
          blockButtonText: O,
          blockButtonStyle: N,
          blockButtonType: x,
          blockButtonBorderWidth: X,
          textColorVars: W,
          imageBorderRadius: T,
          navigationArrowsColor: R,
          navigationThumbnailArrowsColor: H,
          galleryPlacement: q,
          imageRatio: B,
          isQuantityPickerEnabled: I,
        } = y0(e);
      return {
        canAddToCart: n,
        productId: D,
        blockStyle: P,
        blockButtonText: O,
        blockButtonStyle: N,
        blockButtonType: x,
        blockButtonBorderWidth: X,
        textColorVars: W,
        openEcommerceModal: _,
        closeEcommerceModal: S,
        imageBorderRadius: T,
        navigationArrowsColor: R,
        navigationThumbnailArrowsColor: H,
        galleryPlacement: q,
        imageRatio: B,
        isQuantityPickerEnabled: I,
        initiateCheckout: w,
        addImagesToLightbox: b,
        quantifiedCartItemsList: t,
        isShoppingCartOpen: r,
        products: i,
        shoppingCartItems: o,
        variantsQuantity: s,
        isCheckoutLoading: l,
        isLoading: d,
        isLoaded: p,
        setShoppingCartOpen: u,
        setShoppingCartItems: g,
        setIsCheckoutLoading: y,
        setSelectedBookingId: f,
        siteId: a,
      };
    },
    data() {
      return { DATA_ATTRIBUTE_ANIMATION_STATE: xn, animationState: null };
    },
    computed: {
      product() {
        return this.products.find((e) => e.id === this.productId) || ha;
      },
    },
    mounted() {
      this.setAnimationState();
    },
    beforeUnmount() {
      this.closeEcommerceModal();
    },
    methods: {
      setAnimationState() {
        setTimeout(() => {
          this.animationState = Nn;
        }, 100);
      },
      async handleBuyButtonClick(e) {
        if (
          (await this.closeEcommerceModal(), this.product.type.value === jt)
        ) {
          this.setSelectedBookingId(this.productId),
            this.openEcommerceModal("EcommerceBookingEventSelect");
          return;
        }
        if (Fa() || this.isInPreviewMode) {
          this.openEcommerceModal("EcommerceMessageButtonDisabled");
          return;
        }
        this.isCartVisible
          ? (this.setShoppingCartItems([...this.shoppingCartItems, ...e]),
            this.manageCartOpenState())
          : (this.setIsCheckoutLoading(!0),
            await this.initiateCheckout(e).then(() => {
              this.setIsCheckoutLoading(!1);
            }));
      },
      manageCartOpenState() {
        this.isShoppingCartOpen || this.setShoppingCartOpen(!0);
      },
      handleImageClick(e) {
        const a = this.product.images.map((t) => ({
          alt: this.product.title,
          src: t.url,
        }));
        this.addImagesToLightbox(a, e);
      },
    },
  });
function _0(e, a, t, n, r, i) {
  const o = Ce("BlockEcommerceProduct");
  return (
    m(),
    G(
      o,
      Qe(
        {
          blockId: e.blockId,
          blockStyle: e.blockStyle,
          blockButtonText: e.blockButtonText,
          blockButtonStyle: e.blockButtonStyle,
          blockButtonType: e.blockButtonType,
          blockButtonBorderWidth: e.blockButtonBorderWidth,
          textColorVars: e.textColorVars,
          imageBorderRadius: e.imageBorderRadius,
          navigationArrowsColor: e.navigationArrowsColor,
          navigationThumbnailArrowsColor: e.navigationThumbnailArrowsColor,
          galleryPlacement: e.galleryPlacement,
          imageRatio: e.imageRatio,
          isQuantityPickerEnabled: e.isQuantityPickerEnabled,
          quantifiedCartItemsList: e.quantifiedCartItemsList,
          isCheckoutLoading: e.isCheckoutLoading,
          productPages: e.productPages,
          isQuickPreview: e.isQuickPreview,
          currentPageType: e.currentPageType,
        },
        {
          "product-data": e.product,
          "can-add-to-cart": e.canAddToCart,
          "is-loading": (e.isLoading || !e.isLoaded) && e.productId !== -1,
          translations: e.ecommerceTranslations,
          "is-cart-visible": e.isCartVisible,
          "is-eager":
            e.lcp.type === "block-ecommerce-product" && e.lcp.id === e.blockId,
          [e.DATA_ATTRIBUTE_ANIMATION_STATE || ""]: e.animationState,
          "site-id": e.siteId,
          "shopping-cart-items": e.shoppingCartItems,
          "variants-quantity": e.variantsQuantity,
          onBuyButtonClick: e.handleBuyButtonClick,
          onClickMore: e.closeEcommerceModal,
          onImageClick: e.handleImageClick,
        }
      ),
      null,
      16,
      [
        "product-data",
        "can-add-to-cart",
        "is-loading",
        "translations",
        "is-cart-visible",
        "is-eager",
        "site-id",
        "shopping-cart-items",
        "variants-quantity",
        "onBuyButtonClick",
        "onClickMore",
        "onImageClick",
      ]
    )
  );
}
const Zu = ie(b0, [["render", _0]]),
  w0 = se({
    components: { ZyroLoader: pi },
    props: {
      blockId: { type: String, required: !0 },
      storeId: { type: String, required: !0 },
      isStoreLoading: { type: Boolean, required: !0 },
      showStore: { type: Boolean, required: !0 },
      loadingText: { type: String, default: "Store is loading" },
    },
  }),
  k0 = ["id"],
  S0 = { key: 0, class: "block-ecwid-store__loader-block" },
  C0 = ["id"];
function T0(e, a, t, n, r, i) {
  const o = Ce("ZyroLoader"),
    s = ze("qa");
  return ue(
    (m(),
    v(
      "div",
      { id: e.blockId, class: "block-ecwid-store" },
      [
        e.isStoreLoading
          ? (m(),
            v("div", S0, [
              Ee(o, {
                size: "44px",
                class: "block-ecwid-store__loader",
                color: "var(--color-dark)",
              }),
              Ne(" " + J(e.loadingText), 1),
            ]))
          : M("", !0),
        E(
          "div",
          { class: ee({ "height-0": e.isStoreLoading }) },
          [
            e.showStore
              ? ue(
                  (m(),
                  v(
                    "div",
                    { key: 0, id: `my-store-${e.storeId}` },
                    null,
                    8,
                    C0
                  )),
                  [[s, "onlinestore-section-ecwid"]]
                )
              : M("", !0),
          ],
          2
        ),
      ],
      8,
      k0
    )),
    [[s, "builder-section-onlinestore"]]
  );
}
const P0 = ie(w0, [
    ["render", T0],
    ["__scopeId", "data-v-912878a7"],
  ]),
  Pn = `${eu}/ecwid-app-images`,
  ml = [
    { name: "omniva", logoSource: `${Pn}/omniva.svg`, headerText: "Omniva" },
    { name: "dpd", logoSource: `${Pn}/dpd.svg`, headerText: "DPD" },
    {
      name: "lpexpress",
      logoSource: `${Pn}/lpexpress.svg`,
      headerText: "LPExpress",
    },
    { name: "inpost", logoSource: `${Pn}/inpost.svg`, headerText: "InPost" },
    { name: "other", logoSource: `${Pn}/other.svg`, headerText: "other" },
  ],
  I0 = ({ headerText: e, name: a, logoSource: t }) => {
    const n = a === "other",
      r = rosettaMessages["new-frontend"]["Checkout.LocalDelivery.title"];
    return `
	<div class="ec-form__cell ec-form__cell--4">
		<label>
			<div class="ec-form__title ec-header-h6">${n ? r : e}</div>
		</label>
		<div class="form-control form-control--flexible form-control--empty">
			<label for="${a}">
				<div class="ec-radiogroup__radio">
					<div class="form-control--radio form-control ">
						<div class="form-control__radio-wrap">
							<input class="form-control__radio" type="radio" name="delivery-filter" value="${a}" data-filter="${a}">
							<div class="form-control__radio-view">
								<div class="form-control__radio-view-inner"></div>
							</div>
						</div>
						<div class="form-control__inline-label">
							<img class="filter-logo" src="${t}" alt="${a}" title="${a}" />
							${n ? r : ""}
						</div>
					</div>
				</div>
			</label>
		</div>
	</div>
	`;
  },
  E0 = () => `
<div class="zyro-ecwid__search ec-form__row">
	<div class="ec-form__cell ec-form__cell--4">
		<label for="zyro-ecwid-search">
			<div class="ec-form__title ec-header-h6">
				<div class="marker-required marker-required--medium"></div>${rosettaMessages["new-frontend"]["ProductSearch.Breadcrumbs.General"]}
			</div>
		</label>
		<div class="form-control form-control--flexible form-control--empty form-control--type-name">
			<input id="zyro-ecwid-search" class="form-control__text" type="text" name="name" maxlength="255">
			<div class="form-control__placeholder">
				<div class="form-control__placeholder-inner"></div>
			</div>
		</div>
	</div>
</div>
`,
  D0 = { attributes: !0, childList: !0, subtree: !0 },
  M0 = () => {
    let e,
      a = "",
      t,
      n,
      r,
      i;
    const o = (u) => u.some((g) => !!g?.includes(a)),
      s = () => {
        n?.forEach((u) => {
          const { type: g, element: y, title: f, description: _ } = u;
          (g !== e || !o([f, _])) &&
            y.classList.add("zyro-ecwid__option--hidden");
        });
      },
      l = () => {
        t = (n?.filter((g) => {
          const { title: y, description: f, element: _, type: S } = g,
            w = o([y, f]),
            b = S === e && (w || !a.length);
          return _.classList.toggle("zyro-ecwid__option--hidden", !b), !b;
        })).length;
      },
      d = (u) => {
        let g = !1;
        n = [...u.querySelectorAll(".ec-radiogroup__item")].map((b) => {
          const D = b.querySelector(".ec-radiogroup__title").innerText,
            P = D.split(":")[0].toLowerCase(),
            O = ml.some((x) => x.name === P) ? P : "other",
            N = b.querySelector('input[type="radio"]');
          return (
            N.addEventListener("change", (x) => {
              x.target.checked && l();
            }),
            {
              title: D.toLowerCase(),
              description: b
                .querySelector(".ec-radiogroup__text")
                .innerText.toLowerCase(),
              element: b,
              cost: b.querySelector(".ec-radiogroup__data").innerText,
              selected: b.querySelector("input").checked,
              type: O,
              radio: N,
            }
          );
        });
        const f = u.closest(".ec-cart-step__section"),
          _ = f.querySelector(".ec-radiogroup__wrap");
        r || f.insertAdjacentHTML("beforeend", E0()),
          f.classList.add("zyro-ecwid__radio-section"),
          f.querySelector(".zyro-ecwid__search input").addEventListener(
            "input",
            Fu((b) => {
              (a = b.target.value.toLowerCase()), l();
            }),
            30
          );
        const S = n.find((b) => b.selected),
          w = [...new Set(n.map((b) => b.type))];
        r
          ? (i?.classList.remove("ec-radiogroup--hidden"),
            r?.classList.remove("zyro-ecwid__search--hidden"),
            f
              .querySelector(
                ".ec-cart-step--delivery .ec-radiogroup:last-child"
              )
              ?.classList.add("ec-radiogroup--hidden"))
          : w.forEach((b) => {
              if (b === "other" && g) return;
              const D = ml.find((O) => O.name === b),
                P = I0(D);
              b === "other" && (g = !0),
                f
                  .querySelector(".zyro-ecwid__search")
                  .insertAdjacentHTML("afterbegin", P),
                f
                  .querySelector("[data-filter]")
                  .addEventListener("change", (O) => {
                    O.target.checked && ((e = O.target.dataset.filter), l());
                  });
            }),
          (i = f.querySelector(".ec-cart-step--delivery .ec-radiogroup")),
          (r = f.querySelector(".zyro-ecwid__search")),
          (f.querySelector("[data-filter]").checked = !0),
          (e = w[w.length - 1]),
          l(),
          _.scroll(S.element.offsetTop, 0);
      };
    return new MutationObserver(() => {
      if (!document.querySelector(".ec-cart__body")) return;
      const u = document.querySelector(
          ".ec-cart-step--delivery .ec-radiogroup__items"
        ),
        g = !!document.querySelector(
          ".ec-cart-step--delivery .ec-cart-step__icon--done"
        ),
        y = document.querySelectorAll(".zyro-ecwid__option--hidden");
      !!!document.querySelector(
        ".ec-cart-step--address .ec-cart-step__icon--done"
      ) &&
        !u &&
        r &&
        (r = null),
        !g && !n && u && d(u),
        t !== y.length && s(),
        (g || !u) &&
          (i?.classList.contains("ec-radiogroup--hidden") ||
            i?.classList.add("ec-radiogroup--hidden"),
          r?.classList.contains("zyro-ecwid__search--hidden") ||
            r?.classList.add("zyro-ecwid__search--hidden"),
          (n = null),
          a &&
            ((a = ""),
            (document.getElementById("zyro-ecwid-search").value = "")));
    }, D0);
  },
  Yo = "ecwid-loaded",
  O0 = () => {
    const e = document.querySelector(".ec-notices");
    if (!e) return;
    const a = document.querySelector(".builder-header")?.clientHeight ?? 0,
      t = document.querySelector(`.${ou}`)?.clientHeight ?? 0,
      n = e.getBoundingClientRect().top + a + t;
    e.style.top = `${n}px`;
  },
  Xu = () => window.dispatchEvent(new Event(Yo)),
  A0 = (e) => {
    const { setEcwidCartItems: a } = lu();
    a(e.items);
  },
  L0 = () => {
    window.ecwid_initial_data.data.storeClosed && Xu();
  },
  B0 = () => {
    window.Ecwid.OnAPILoaded.add(L0),
      window.Ecwid.OnPageLoaded.add(Xu),
      window.Ecwid.OnPageLoaded.add(O0),
      window.Ecwid.OnCartChanged.add(A0);
  },
  R0 = {
    load(e, a) {
      if (
        ((window.ec = window.ec || {}),
        (window.ec.config = window.ec.config || {}),
        (window.ec.config.enable_canonical_urls = !0),
        (window.ec.config.storefrontUrls =
          window.ec.config.storefrontUrls || {}),
        (window.ec.config.storefrontUrls.cleanUrls = !0),
        (window.ec.config.storefrontUrls.queryBasedCleanUrls = !0),
        (window.ecwid_script_defer = !0),
        (window.ecwid_dynamic_widgets = !0),
        typeof Ecwid < "u")
      )
        try {
          window.Ecwid.destroy();
        } catch {}
      if (
        ((window._xnext_initialization_scripts = [
          {
            widgetType: "ProductBrowser",
            id: `my-store-${e}`,
            arg: [
              "id=productBrowser",
              "categoriesPerRow=4",
              "views=grid(4,3) list(10) table(20)",
              "categoryView=grid",
              "searchView=list",
            ],
          },
        ]),
        document.querySelector("#ecwid-script"))
      )
        window.ecwid_onBodyDone(),
          setTimeout(() => {
            !!document.getElementById(`my-store-${e}`)?.innerHTML ||
              this.load(e, a);
          }, 1e3);
      else {
        const t = document.createElement("script");
        (t.defer = !0),
          (t.type = "text/javascript"),
          (t.async = !0),
          (t.src = `https://app.ecwid.com/script.js?${e}`),
          a && a !== Yt && (t.src += `&lang=${a}`),
          (t.id = "ecwid-script"),
          t.addEventListener("load", B0),
          document.body.append(t);
      }
    },
  },
  $0 = "26103239",
  N0 = { attributes: !0, childList: !0, subtree: !0 },
  x0 = (e, { ecwidStoreId: a, demoEcwidStoreId: t }) => {
    const n = A(!0),
      r = A(!1),
      i = A(!0),
      o = c(() => e.data.settings.loadingText || "Store is loading"),
      s = c(() => a.value || t.value || $0),
      l = () => {
        R0.load(s.value, e.currentLocale);
      },
      d = () => {
        (r.value = !0),
          window.addEventListener(Yo, () => {
            r.value = !1;
          }),
          l();
      };
    return (
      Oe(() => {
        d(),
          (i.value = M0()),
          i.value.observe(document.querySelector(`#my-store-${s.value}`), N0);
      }),
      xt(() => {
        i.value.disconnect();
      }),
      je(s, async (p) => {
        t.value !== p &&
          ((document.querySelector(`#my-store-${s.value}`).innerHTML = ""),
          await Ot(),
          d());
      }),
      {
        storeId: s,
        showStore: n,
        isStoreLoading: r,
        loadStore: l,
        loadingText: o,
        ECWID_LOADED_EVENT: Yo,
      }
    );
  },
  H0 = se({
    components: { BlockEcwidStore: P0 },
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, default: () => ({}) },
      currentLocale: { type: String, default: Yt },
    },
    setup(e) {
      const { meta: a } = rt(),
        t = c(() => a.value.ecwidStoreId),
        n = c(() => a.value.demoEcwidStoreId),
        {
          storeId: r,
          showStore: i,
          isStoreLoading: o,
          loadingText: s,
        } = x0(e, { ecwidStoreId: t, demoEcwidStoreId: n });
      return (
        Oe(() => {
          window?.Ecwid?.getStorefrontLang() &&
            window.Ecwid.getStorefrontLang() !== e.currentLocale &&
            !Fa() &&
            window.location.reload();
        }),
        { storeId: r, showStore: i, isStoreLoading: o, loadingText: s }
      );
    },
  });
function U0(e, a, t, n, r, i) {
  const o = Ce("BlockEcwidStore");
  return (
    m(),
    G(
      o,
      {
        "store-id": e.storeId,
        "block-id": e.blockId,
        "show-store": e.showStore,
        "is-store-loading": e.isStoreLoading,
        "loading-text": e.loadingText,
      },
      null,
      8,
      ["store-id", "block-id", "show-store", "is-store-loading", "loading-text"]
    )
  );
}
const V0 = ie(H0, [["render", U0]]),
  F0 = A({}),
  qo = "forward",
  pl = "backward",
  Y0 = ({
    isAutoplayEnabled: e,
    isLoopEnabled: a,
    autoplayInterval: t,
    isTransitioning: n,
    slides: r,
  } = {}) => {
    const i = A(0),
      o = A(""),
      s = A(null),
      l = c(() => r.value.length),
      d = c(() => i.value === r.value.length - 1),
      p = c(() => i.value === 0),
      u = c(() => (!d.value || a.value) && l.value > 1 && !n.value),
      g = c(() => (!p.value || a.value) && l.value > 1 && !n.value),
      y = () => {
        if (u.value) {
          if (((o.value = qo), a.value && d.value)) {
            i.value = 0;
            return;
          }
          i.value += 1;
        }
      },
      f = () => {
        if (g.value) {
          if (((o.value = pl), a.value && p.value)) {
            i.value = r.value.length - 1;
            return;
          }
          i.value -= 1;
        }
      },
      _ = (D) => {
        (o.value = D > i.value ? qo : pl), (i.value = D);
      },
      S = () => {
        s.value = setInterval(() => {
          (!a.value && d.value) || y();
        }, t.value * 1e3);
      },
      w = () => {
        s.value && (clearInterval(s.value), (s.value = null));
      },
      b = () => {
        w(), e.value && S();
      };
    return (
      e &&
        (e.value && S(),
        je(e, () => {
          e.value ? S() : w();
        }),
        je(Dv(), (D) => {
          D === "visible" ? S() : w();
        })),
      t &&
        je(t, () => {
          b();
        }),
      {
        slideshowRefs: F0,
        slideToNext: y,
        slideToPrevious: f,
        slideTo: _,
        slideDirection: o,
        slideCount: l,
        currentSlideIndex: i,
        slides: r,
        isLoopEnabled: a,
        isAutoplayEnabled: e,
        autoplayInterval: t,
        resetAutoplayInterval: b,
        setAutoplayInterval: S,
        clearAutoplayInterval: w,
        canSlideToNext: u,
        canSlideToPrevious: g,
      }
    );
  },
  Ti = se({
    props: {
      slides: { type: Array, required: !0 },
      isLoopEnabled: { type: Boolean, default: !1 },
      currentSlideIndex: { type: Number, default: 0 },
      slideDirection: { type: String, default: qo },
      arrowColor: { type: String, default: "rgb(255, 255, 255)" },
      dotColor: { type: String, default: "rgb(255, 255, 255)" },
      isNextButtonDisabled: { type: Boolean, default: !1 },
      isPreviousButtonDisabled: { type: Boolean, default: !1 },
      isNavigationArrowsVisible: { type: Boolean, default: !0 },
      isNavigationDotsVisible: { type: Boolean, default: !0 },
      isTransitioning: { type: Boolean, default: !1 },
      desktopMinHeight: { type: Number, required: !0 },
      mobileMinHeight: { type: Number, required: !0 },
      websiteId: { type: String, default: "" },
    },
    emits: [
      "transition-start",
      "transition-end",
      "next-slide",
      "previous-slide",
      "dot-click",
    ],
    setup() {
      return { FULL_WIDTH: Oa, getOptimizedSrc: lt };
    },
    computed: {
      isNextSlideButtonVisible() {
        if (this.isLoopEnabled) return this.isNavigationArrowsVisible;
        const e = this.currentSlideIndex === this.slides.length - 1;
        return this.isNavigationArrowsVisible && !e;
      },
      isPreviousSlideButtonVisible() {
        if (this.isLoopEnabled) return this.isNavigationArrowsVisible;
        const e =
          this.isNavigationArrowsVisible && this.currentSlideIndex === 0;
        return this.isNavigationArrowsVisible && !e;
      },
    },
  }),
  gl = () => {
    St((e) => ({
      fd06db1c: e.desktopMinHeight,
      "1f7ca1af": e.arrowColor,
      "56d289af": e.dotColor,
      "3b9747e2": e.mobileMinHeight,
    }));
  },
  hl = Ti.setup;
Ti.setup = hl ? (e, a) => (gl(), hl(e, a)) : gl;
const Ju = (e) => (Ht("data-v-f3299b46"), (e = e()), Ut(), e),
  q0 = { class: "slideshow" },
  j0 = ["alt", "src"],
  W0 = ["disabled"],
  G0 = Ju(() =>
    E(
      "svg",
      {
        width: "14",
        height: "26",
        viewBox: "0 0 14 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        E("path", {
          d: "M1 25L13 13L1 1",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  z0 = [G0],
  K0 = ["disabled"],
  Q0 = Ju(() =>
    E(
      "svg",
      {
        width: "14",
        height: "26",
        viewBox: "0 0 14 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        E("path", {
          d: "M1 25L13 13L1 1",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  Z0 = [Q0],
  X0 = { key: 2, class: "slideshow__dots" },
  J0 = ["onClick"];
function e_(e, a, t, n, r, i) {
  return (
    m(),
    v("div", q0, [
      Ee(
        Jc,
        {
          name: `slide-${e.slideDirection}`,
          onLeave: a[0] || (a[0] = (o) => e.$emit("transition-start")),
          onAfterLeave: a[1] || (a[1] = (o) => e.$emit("transition-end")),
        },
        {
          default: _e(() => [
            (m(!0),
            v(
              ge,
              null,
              Se(e.slides, (o, s) =>
                ue(
                  (m(),
                  v(
                    "img",
                    {
                      key: `${o.path}-${s}`,
                      alt: o.alt || "",
                      class: "slide",
                      src: e.getOptimizedSrc(o.origin, o.path, e.websiteId, {
                        width: e.FULL_WIDTH,
                      }),
                    },
                    null,
                    8,
                    j0
                  )),
                  [[Zt, e.currentSlideIndex === s]]
                )
              ),
              128
            )),
          ]),
          _: 1,
        },
        8,
        ["name"]
      ),
      e.isNextSlideButtonVisible
        ? (m(),
          v(
            "button",
            {
              key: 0,
              class: ee([
                "slideshow-nav-button slideshow-nav-button--right",
                { "is-transitioning": e.isTransitioning },
              ]),
              disabled: e.isNextButtonDisabled,
              onClick: a[2] || (a[2] = (o) => e.$emit("next-slide")),
            },
            z0,
            10,
            W0
          ))
        : M("", !0),
      e.isPreviousSlideButtonVisible
        ? (m(),
          v(
            "button",
            {
              key: 1,
              class: ee([
                "slideshow-nav-button slideshow-nav-button--left",
                { "is-transitioning": e.isTransitioning },
              ]),
              disabled: e.isPreviousButtonDisabled,
              onClick: a[3] || (a[3] = (o) => e.$emit("previous-slide")),
            },
            Z0,
            10,
            K0
          ))
        : M("", !0),
      e.isNavigationDotsVisible
        ? (m(),
          v("div", X0, [
            (m(!0),
            v(
              ge,
              null,
              Se(
                e.slides,
                (o, s) => (
                  m(),
                  v(
                    "button",
                    {
                      key: `${o.path}-${s}`,
                      class: ee([
                        "dot",
                        { "dot--current": e.currentSlideIndex === s },
                      ]),
                      onClick: (l) => e.$emit("dot-click", s),
                    },
                    null,
                    10,
                    J0
                  )
                )
              ),
              128
            )),
          ]))
        : M("", !0),
    ])
  );
}
const t_ = ie(Ti, [
    ["render", e_],
    ["__scopeId", "data-v-f3299b46"],
  ]),
  a_ = se({
    components: { BlockImageSlideshow: t_ },
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, default: () => ({}) },
      websiteId: { type: String, default: "" },
    },
    setup(e) {
      const { data: a } = To(e),
        t = A(!1),
        n = c(() => `${a.value.desktop.minHeight}px`),
        r = c(() => `${a.value.mobile.minHeight}px`),
        i = c(() => a.value.settings.styles.navigationDotsColor),
        o = c(() => a.value.settings.styles.navigationArrowsColor),
        s = c(() => a.value.slides),
        l = c(() => a.value.isLoopEnabled),
        d = c(() => a.value.isAutoplayEnabled),
        p = c(() => a.value.autoplayInterval),
        u = c(() => a.value.isNavigationDotsVisible),
        g = c(() => a.value.isNavigationArrowsVisible),
        y = c(() => a.value.desktop.minHeight),
        f = c(() => a.value.mobile.minHeight),
        {
          slideDirection: _,
          currentSlideIndex: S,
          canSlideToNext: w,
          canSlideToPrevious: b,
          slideToNext: D,
          slideToPrevious: P,
          slideTo: O,
          resetAutoplayInterval: N,
          clearAutoplayInterval: x,
        } = Y0({
          isAutoplayEnabled: d,
          isLoopEnabled: l,
          autoplayInterval: p,
          isTransitioning: t,
          slides: s,
        });
      return {
        canSlideToNext: w,
        canSlideToPrevious: b,
        desktopHeight: n,
        mobileHeight: r,
        slides: s,
        currentSlideIndex: S,
        slideDirection: _,
        isLoopEnabled: l,
        isTransitioning: t,
        resetAutoplayInterval: N,
        dotColor: i,
        arrowColor: o,
        isNavigationDotsVisible: u,
        isNavigationArrowsVisible: g,
        clearAutoplayInterval: x,
        slideToNext: D,
        slideToPrevious: P,
        slideTo: O,
        desktopMinHeight: y,
        mobileMinHeight: f,
      };
    },
  });
function n_(e, a, t, n, r, i) {
  const o = Ce("BlockImageSlideshow");
  return (
    m(),
    G(
      o,
      {
        slides: e.slides,
        "is-loop-enabled": e.isLoopEnabled,
        "current-slide-index": e.currentSlideIndex,
        "slide-direction": e.slideDirection,
        "dot-color": e.dotColor,
        "is-navigation-arrows-visible": e.isNavigationArrowsVisible,
        "is-navigation-dots-visible": e.isNavigationDotsVisible,
        "arrow-color": e.arrowColor,
        "is-next-button-disabled": !e.canSlideToNext,
        "is-previous-button-disabled": !e.canSlideToPrevious,
        "desktop-min-height": e.desktopMinHeight,
        "mobile-min-height": e.mobileMinHeight,
        "website-id": e.websiteId,
        onTransitionStart: a[0] || (a[0] = (s) => (e.isTransitioning = !0)),
        onTransitionEnd: a[1] || (a[1] = (s) => (e.isTransitioning = !1)),
        onMouseenter: e.clearAutoplayInterval,
        onMouseleave: e.resetAutoplayInterval,
        onNextSlide: e.slideToNext,
        onPreviousSlide: e.slideToPrevious,
        onDotClick: e.slideTo,
      },
      null,
      8,
      [
        "slides",
        "is-loop-enabled",
        "current-slide-index",
        "slide-direction",
        "dot-color",
        "is-navigation-arrows-visible",
        "is-navigation-dots-visible",
        "arrow-color",
        "is-next-button-disabled",
        "is-previous-button-disabled",
        "desktop-min-height",
        "mobile-min-height",
        "website-id",
        "onMouseenter",
        "onMouseleave",
        "onNextSlide",
        "onPreviousSlide",
        "onDotClick",
      ]
    )
  );
}
const r_ = ie(a_, [["render", n_]]),
  fl = 360,
  o_ = {
    __name: "BlockUser",
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      lcp: { type: Object, default: () => ({}) },
      currentLocale: { type: String, default: Yt },
      style: { type: Object, default: () => ({}) },
      ecommerceTranslations: { type: Object, default: () => ({}) },
      isCartVisible: { type: Boolean, default: !1 },
      pageId: { type: String, required: !0 },
      currentPageType: { type: String, default: "default" },
      isInPreviewMode: { type: Boolean, default: !1 },
      screenWidth: { type: Number, default: 0 },
    },
    setup(e, { expose: a }) {
      a();
      const t = e,
        n = A(null),
        { productPages: r, isLoaded: i } = Wt(),
        {
          blocks: o,
          elements: s,
          pages: l,
          siteId: d,
          blogReadingTimeText: p,
          blogCategories: u,
          siteId: g,
          meta: y,
        } = rt(),
        {
          addIntersectionObserver: f,
          observe: _,
          intersectionObserver: S,
          animationClass: w,
          shouldMountAnimationsInPreview: b,
        } = Yn({ data: t.data }),
        D = c(() => t.currentLocale),
        P = c(() =>
          t.data.desktop?.isHidden
            ? t.isInPreviewMode
              ? t.screenWidth > Gr
              : !0
            : !1
        ),
        O = c(() =>
          t.data.mobile?.isHidden
            ? t.isInPreviewMode
              ? t.screenWidth <= Gr
              : !0
            : !1
        ),
        N = c(() => ({ ...t.style, ...ta(t.data?.settings?.styles) })),
        x = c(() => {
          if (!t.data?.settings?.styles["m-block-padding"]) return !1;
          const { top: U, bottom: V } = rn(
            t.data.settings.styles["m-block-padding"]
          );
          return Number.parseInt(U, 10) + Number.parseInt(V, 10) > fl;
        }),
        X = c(() =>
          lt(t.data.background.origin, t.data.background.path, g.value, {
            width: Oa,
          })
        ),
        W = c(() =>
          Aa(t.data.background.origin, t.data.background.path, g.value, {
            isMobileFullScreen: x.value,
          })
        ),
        T = c(() => t.data.slot === "footer"),
        R = c(() => {
          if (t.data.type !== is) return null;
          const [, U] = Object.entries(l.value).find(
            ([V, K]) => K.type === Do && V === t.pageId
          );
          return U;
        }),
        H = c(() => y.value.stripePublicApiKey),
        q = c(() => t.data.type === ss),
        B = async () => {
          f(), (!q.value || i.value) && (await _(n.value));
        };
      Oe(async () => {
        await B();
      }),
        xt(() => S.value?.disconnect()),
        je([D, i], async ([U, V], [K]) => {
          (V || U !== K) && q.value && (await _(n.value));
        }),
        je(b, async (U) => {
          U && (await B());
        });
      const I = {
        MOBILE_FULL_HEIGT_THRESHOLD: fl,
        props: t,
        blockRef: n,
        productPages: r,
        isEcommerceProductsLoaded: i,
        siteBlocks: o,
        siteElements: s,
        siteLanguagePages: l,
        websiteId: d,
        blogReadingTimeText: p,
        blogCategories: u,
        siteId: g,
        meta: y,
        addIntersectionObserver: f,
        observe: _,
        intersectionObserver: S,
        animationClass: w,
        shouldMountAnimationsInPreview: b,
        currentSiteLocale: D,
        isDesktopBlockHidden: P,
        isMobileBlockHidden: O,
        computedStyles: N,
        isMobileFullScreen: x,
        backgroundSrc: X,
        backgroundSrcSet: W,
        isBlockFooter: T,
        currentBlogPage: R,
        stripePublicApiKey: H,
        isEcommerceBlock: q,
        initiateAnimations: B,
        computed: c,
        onMounted: Oe,
        onBeforeUnmount: xt,
        ref: A,
        watch: je,
        BlockBackground: uu,
        BlockBlogHeader: Om,
        get PAGE_TYPE_BLOG() {
          return Do;
        },
        get SYSTEM_LOCALE() {
          return Yt;
        },
        get BLOCK_TYPE_LAYOUT() {
          return kd;
        },
        get BLOCK_TYPE_BLOG_HEADER() {
          return is;
        },
        get BLOCK_TYPE_BLOG_LIST() {
          return Sd;
        },
        get BLOCK_TYPE_IMAGE_SLIDESHOW() {
          return Cd;
        },
        get BLOCK_TYPE_ECWID() {
          return Td;
        },
        get BLOCK_TYPE_ECOMMERCE_PRODUCT() {
          return Pd;
        },
        get BLOCK_TYPE_ECOMMERCE_PRODUCT_LIST() {
          return ss;
        },
        get MEDIA_MOBILE_SCREEN_BREAKPOINT() {
          return Gr;
        },
        get FULL_WIDTH() {
          return Oa;
        },
        get getFullWidthSrcset() {
          return Aa;
        },
        get getOptimizedSrc() {
          return lt;
        },
        get useSiteGlobal() {
          return rt;
        },
        get objectToCssVariables() {
          return ta;
        },
        get parseCSSSides() {
          return rn;
        },
        BlockLayoutProviderUser: py,
        BlockBlogListProviderUser: Uy,
        BlockEcommerceProductListProviderUser: Pb,
        BlockEcommerceProductProviderUser: Zu,
        BlockEcwidStoreProviderUser: V0,
        BlockImageSlideshowProviderUser: r_,
        get useSiteEngineAnimations() {
          return Yn;
        },
        get useEcommerceGlobal() {
          return Wt;
        },
      };
      return (
        Object.defineProperty(I, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        I
      );
    },
  },
  i_ = ["id"];
function s_(e, a, t, n, r, i) {
  return (
    m(),
    v(
      "section",
      {
        id: t.id,
        ref: "blockRef",
        class: ee([
          "block",
          [
            n.animationClass,
            {
              "block--footer": n.isBlockFooter,
              "block--desktop-hidden": n.isDesktopBlockHidden,
              "block--mobile-hidden": n.isMobileBlockHidden,
            },
          ],
        ]),
        style: Re(n.computedStyles),
      },
      [
        t.data.background
          ? (m(),
            G(
              n.BlockBackground,
              {
                key: 0,
                "overlay-opacity": t.data.background["overlay-opacity"],
                type: t.data.background.current,
                color: t.data.background.color,
                src: n.backgroundSrc,
                srcset: n.backgroundSrcSet,
                "is-eager":
                  t.lcp.type === "block-background" && t.lcp.id === t.id,
                "is-fixed": t.data.attachment === "fixed",
                alt: t.data.background && t.data.background.alt,
              },
              null,
              8,
              [
                "overlay-opacity",
                "type",
                "color",
                "src",
                "srcset",
                "is-eager",
                "is-fixed",
                "alt",
              ]
            ))
          : M("", !0),
        t.data.type === n.BLOCK_TYPE_LAYOUT
          ? (m(),
            G(
              n.BlockLayoutProviderUser,
              {
                key: 1,
                lcp: t.lcp,
                data: t.data,
                "block-id": t.id,
                components: n.siteElements,
                "current-locale": t.currentLocale,
                "is-cart-visible": t.isCartVisible,
                "site-language-pages": n.siteLanguagePages,
                "stripe-public-api-key": n.stripePublicApiKey,
                "is-in-preview-mode": n.props.isInPreviewMode,
              },
              null,
              8,
              [
                "lcp",
                "data",
                "block-id",
                "components",
                "current-locale",
                "is-cart-visible",
                "site-language-pages",
                "stripe-public-api-key",
                "is-in-preview-mode",
              ]
            ))
          : M("", !0),
        t.data.type === n.BLOCK_TYPE_BLOG_HEADER
          ? (m(),
            G(
              n.BlockBlogHeader,
              {
                key: 2,
                data: t.data,
                "current-blog-page": n.currentBlogPage,
                "blog-categories": n.blogCategories,
                "blog-reading-time-text": n.blogReadingTimeText,
              },
              null,
              8,
              [
                "data",
                "current-blog-page",
                "blog-categories",
                "blog-reading-time-text",
              ]
            ))
          : M("", !0),
        t.data.type === n.BLOCK_TYPE_BLOG_LIST
          ? (m(),
            G(
              n.BlockBlogListProviderUser,
              {
                key: 3,
                data: t.data,
                "block-id": t.id,
                "current-locale": t.currentLocale,
              },
              null,
              8,
              ["data", "block-id", "current-locale"]
            ))
          : M("", !0),
        t.data.type === n.BLOCK_TYPE_IMAGE_SLIDESHOW
          ? (m(),
            G(
              n.BlockImageSlideshowProviderUser,
              {
                key: 4,
                data: t.data,
                "block-id": t.id,
                "website-id": n.websiteId,
              },
              null,
              8,
              ["data", "block-id", "website-id"]
            ))
          : M("", !0),
        t.data.type === n.BLOCK_TYPE_ECWID
          ? (m(),
            G(
              n.BlockEcwidStoreProviderUser,
              {
                key: 5,
                data: t.data,
                "block-id": t.id,
                "current-locale": t.currentLocale,
              },
              null,
              8,
              ["data", "block-id", "current-locale"]
            ))
          : M("", !0),
        t.data.type === n.BLOCK_TYPE_ECOMMERCE_PRODUCT
          ? (m(),
            G(
              n.BlockEcommerceProductProviderUser,
              {
                key: 6,
                lcp: t.lcp,
                data: t.data,
                "block-id": t.id,
                "product-pages": n.productPages,
                "is-cart-visible": t.isCartVisible,
                "ecommerce-translations": t.ecommerceTranslations,
                "current-page-type": t.currentPageType,
                "is-in-preview-mode": n.props.isInPreviewMode,
              },
              null,
              8,
              [
                "lcp",
                "data",
                "block-id",
                "product-pages",
                "is-cart-visible",
                "ecommerce-translations",
                "current-page-type",
                "is-in-preview-mode",
              ]
            ))
          : M("", !0),
        t.data.type === n.BLOCK_TYPE_ECOMMERCE_PRODUCT_LIST
          ? (m(),
            G(
              n.BlockEcommerceProductListProviderUser,
              {
                key: 7,
                lcp: t.lcp,
                data: t.data,
                "block-id": t.id,
                blocks: n.siteBlocks,
                "current-locale": t.currentLocale,
                "is-cart-visible": t.isCartVisible,
                "ecommerce-translations": t.ecommerceTranslations,
                "is-in-preview-mode": n.props.isInPreviewMode,
              },
              null,
              8,
              [
                "lcp",
                "data",
                "block-id",
                "blocks",
                "current-locale",
                "is-cart-visible",
                "ecommerce-translations",
                "is-in-preview-mode",
              ]
            ))
          : M("", !0),
      ],
      14,
      i_
    )
  );
}
const l_ = ie(o_, [
    ["render", s_],
    ["__scopeId", "data-v-7390c788"],
  ]),
  ir = A({}),
  ec = ({ pagePassword: e, locale: a, pageId: t }) => {
    const n = c(() => `${t}-${a}`),
      r = c(() => !e || (e && !!ir.value[n.value]));
    return {
      isPageUnlocked: ir,
      openUnlockedPage: () => {
        ir.value = { ...ir.value, [n.value]: !0 };
      },
      isPageOpen: r,
    };
  },
  u_ = async (e) => {
    const a = new TextEncoder().encode(e),
      t = await crypto.subtle.digest("SHA-256", a);
    return [...new Uint8Array(t)]
      .map((i) => i.toString(16).padStart(2, "0"))
      .join("");
  },
  c_ = {
    src: "/_astro-1707909700266/lock.CUuFZ5nx.svg",
    width: 40,
    height: 40,
    format: "svg",
  },
  d_ = se({
    __name: "PasswordPage",
    props: {
      pageId: {},
      locale: {},
      currentPageData: {},
      isCurrentPageHomepage: { type: Boolean, default: !1 },
      inPreviewMode: { type: Boolean, default: !1 },
      defaultLocale: {},
      homepageName: {},
    },
    setup(e, { expose: a }) {
      a();
      const t = e,
        n = A(""),
        r = A(""),
        i = c(() => t.currentPageData?.meta?.passwordDesign ?? ""),
        o = c(() => t.currentPageData?.meta?.password ?? ""),
        s = c(
          () => t.currentPageData?.meta?.passwordHeadingText ?? "Guest Area"
        ),
        l = c(
          () =>
            t.currentPageData?.meta?.passwordSubheadingText ??
            "Please enter the password to access the page"
        ),
        d = c(() => t.currentPageData?.meta?.passwordButtonText ?? "Enter"),
        p = c(
          () =>
            t.currentPageData?.meta?.passwordPlaceholderText ?? "Type password"
        ),
        u = c(() => t.currentPageData?.meta?.passwordBackText ?? "Back to"),
        g = c(() => i.value === Id),
        y = c(() => i.value === Ed),
        { openUnlockedPage: f } = ec({
          pagePassword: o.value,
          locale: t.locale,
          pageId: t.pageId,
        }),
        _ = async () => {
          const D = await u_(n.value);
          if (!n.value || D !== o.value) {
            r.value = "Please enter the correct password";
            return;
          }
          f();
        },
        S = c(() =>
          t.locale && t.locale !== t.defaultLocale ? `/${t.locale}` : "/"
        ),
        w = c(() => !t.inPreviewMode && !t.isCurrentPageHomepage);
      Oe(() => {
        document.body.style.overflow = "hidden";
      }),
        xt(() => {
          document.body.style.overflow = "";
        });
      const b = {
        props: t,
        password: n,
        errorMessage: r,
        passwordPageStyle: i,
        currentPagePassword: o,
        passwordPageHeading: s,
        passwordPageSubheading: l,
        passwordPageButtonText: d,
        passwordPlaceholder: p,
        passwordBackText: u,
        isCalmTheme: g,
        isPopularTheme: y,
        openUnlockedPage: f,
        unlock: _,
        homepageLink: S,
        isHomepageLinkShown: w,
        get PASSWORD_PAGE_PLACEHOLDERS_BASE_PATH() {
          return Zm;
        },
      };
      return (
        Object.defineProperty(b, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        b
      );
    },
  }),
  m_ = (e) => (Ht("data-v-5df21e4b"), (e = e()), Ut(), e),
  p_ = { key: 0, class: "password-page__background-wave-wrapper" },
  g_ = m_(() =>
    E("div", { class: "password-page__background-wave" }, null, -1)
  ),
  h_ = [g_],
  f_ = ["src"],
  v_ = { key: 0, class: "password-page__icon-lock", src: c_ },
  y_ = { class: "password-page__heading" },
  b_ = { for: "password", class: "password-page__label" },
  __ = ["placeholder"],
  w_ = { key: 1, class: "password-page__error-message" },
  k_ = { class: "password-page__button", type: "submit" },
  S_ = { key: 2, class: "password-page__homepage-link" },
  C_ = ["href"];
function T_(e, a, t, n, r, i) {
  const o = ze("qa");
  return (
    m(),
    v(
      "main",
      {
        class: ee([
          "password-page",
          {
            "password-page--calm": n.isCalmTheme,
            "password-page--popular": n.isPopularTheme,
          },
        ]),
      },
      [
        n.isCalmTheme
          ? ue((m(), v("div", p_, h_)), [[o, "password-page-background-calm"]])
          : M("", !0),
        n.isPopularTheme
          ? ue(
              (m(),
              v(
                "img",
                {
                  key: 1,
                  class: "password-page__background-image",
                  src: `${n.PASSWORD_PAGE_PLACEHOLDERS_BASE_PATH}/guest-area-background-popular.png`,
                },
                null,
                8,
                f_
              )),
              [[o, "password-page-background-popular"]]
            )
          : M("", !0),
        E(
          "form",
          { class: "password-page__form", onSubmit: Me(n.unlock, ["prevent"]) },
          [
            n.isCalmTheme ? (m(), v("img", v_)) : M("", !0),
            ue((m(), v("h1", y_, [Ne(J(n.passwordPageHeading), 1)])), [
              [o, "password-page-heading"],
            ]),
            ue((m(), v("label", b_, [Ne(J(n.passwordPageSubheading), 1)])), [
              [o, "password-page-subheading"],
            ]),
            ue(
              E(
                "input",
                {
                  id: "password",
                  "onUpdate:modelValue":
                    a[0] || (a[0] = (s) => (n.password = s)),
                  type: "password",
                  autocomplete: "off",
                  autocapitalize: "off",
                  autocorrect: "off",
                  name: "password",
                  placeholder: n.passwordPlaceholder,
                  required: "",
                  class: ee([
                    "password-page__input",
                    { "password-page__input--error": n.errorMessage },
                  ]),
                  onBlur: a[1] || (a[1] = (s) => (n.errorMessage = "")),
                },
                null,
                42,
                __
              ),
              [
                [Jl, n.password],
                [o, "password-page-placeholder"],
              ]
            ),
            n.errorMessage
              ? (m(), v("p", w_, J(n.errorMessage), 1))
              : M("", !0),
            ue((m(), v("button", k_, [Ne(J(n.passwordPageButtonText), 1)])), [
              [o, "password-page-button"],
            ]),
            n.isHomepageLinkShown
              ? ue(
                  (m(),
                  v("p", S_, [
                    Ne(J(n.passwordBackText) + " ", 1),
                    E(
                      "a",
                      {
                        href: n.homepageLink,
                        class: "password-page__homepage-link-text",
                      },
                      J(t.homepageName),
                      9,
                      C_
                    ),
                  ])),
                  [[o, "password-page-footer"]]
                )
              : M("", !0),
          ],
          32
        ),
      ],
      2
    )
  );
}
const P_ = ie(d_, [
    ["render", T_],
    ["__scopeId", "data-v-5df21e4b"],
  ]),
  I_ = {},
  E_ = ai(
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-334df6f8><path d="M2 4H3.33333H14" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M5.3335 4.00004V2.66671C5.3335 2.31309 5.47397 1.97395 5.72402 1.7239C5.97407 1.47385 6.31321 1.33337 6.66683 1.33337H9.3335C9.68712 1.33337 10.0263 1.47385 10.2763 1.7239C10.5264 1.97395 10.6668 2.31309 10.6668 2.66671V4.00004M12.6668 4.00004V13.3334C12.6668 13.687 12.5264 14.0261 12.2763 14.2762C12.0263 14.5262 11.6871 14.6667 11.3335 14.6667H4.66683C4.31321 14.6667 3.97407 14.5262 3.72402 14.2762C3.47397 14.0261 3.3335 13.687 3.3335 13.3334V4.00004H12.6668Z" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M6.6665 7.33337V11.3334" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M9.3335 7.33337V11.3334" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path></svg>',
    1
  ),
  D_ = [E_];
function M_(e, a) {
  return (
    m(),
    v(
      "button",
      {
        class: "delete-button",
        onClick: a[0] || (a[0] = (t) => e.$emit("handle-button-click")),
      },
      D_
    )
  );
}
const O_ = ie(I_, [
    ["render", M_],
    ["__scopeId", "data-v-334df6f8"],
  ]),
  A_ = {},
  L_ = (e) => (Ht("data-v-2f9813ef"), (e = e()), Ut(), e),
  B_ = { class: "close-button" },
  R_ = L_(() =>
    E(
      "svg",
      {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        E("path", {
          d: "M12 4L4 12",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
        E("path", {
          d: "M4 4L12 12",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  $_ = [R_];
function N_(e, a) {
  return m(), v("button", B_, $_);
}
const Pi = ie(A_, [
    ["render", N_],
    ["__scopeId", "data-v-2f9813ef"],
  ]),
  x_ = se({
    name: "Drawer",
    components: { CloseButton: Pi },
    props: {
      placement: {
        type: String,
        default: "right",
        validator: (e) => ["right", "left"].includes(e),
      },
      width: { type: String, default: "350px" },
      alwaysShowCloseButton: { type: Boolean, default: !0 },
      isOpen: { type: Boolean, default: !1 },
      topPositionMobile: { type: String, default: "0px" },
    },
    emits: ["close-drawer"],
    setup(e, a) {
      const t = A(null);
      return (
        Oe(() => {
          $r(t, () => {
            a.emit("close-drawer");
          });
        }),
        { siteDrawerRef: t }
      );
    },
    computed: {
      computedStyles() {
        return {
          "--sidebar-width": this.width,
          "--sidebar-top-mobile": this.topPositionMobile,
        };
      },
    },
    methods: {
      closeDrawer() {
        this.$emit("close-drawer");
      },
    },
  }),
  H_ = { class: "site-drawer__content" };
function U_(e, a, t, n, r, i) {
  const o = Ce("CloseButton"),
    s = ze("qa");
  return (
    m(),
    v("div", null, [
      e.isOpen
        ? (m(),
          v(
            "div",
            {
              key: 0,
              class: ee([
                "site-drawer-overlay",
                { "site-drawer-overlay--open": e.isOpen },
              ]),
              onTouchend: a[0] || (a[0] = Me(() => {}, ["stop", "prevent"])),
            },
            null,
            34
          ))
        : M("", !0),
      Ee(
        At,
        {
          name:
            e.placement === "right"
              ? "drawer-slide-right"
              : "drawer-slide-left",
        },
        {
          default: _e(() => [
            e.isOpen
              ? (m(),
                v(
                  "aside",
                  {
                    key: 0,
                    ref: "siteDrawerRef",
                    class: ee([
                      {
                        "site-drawer--left": e.placement === "left",
                        "site-drawer--right": e.placement === "right",
                      },
                      "site-drawer",
                    ]),
                    style: Re(e.computedStyles),
                  },
                  [
                    E("div", H_, [
                      ue(
                        (m(),
                        v(
                          "span",
                          {
                            class: ee([
                              "site-drawer__close-button",
                              {
                                "site-drawer__close-button--hide-mobile":
                                  !e.alwaysShowCloseButton,
                              },
                            ]),
                            onClick:
                              a[1] ||
                              (a[1] = (...l) =>
                                e.closeDrawer && e.closeDrawer(...l)),
                          },
                          [Ee(o)],
                          2
                        )),
                        [[s, "builder-sitedrawer-btn-close"]]
                      ),
                      he(e.$slots, "default", {}, void 0, !0),
                    ]),
                  ],
                  6
                ))
              : M("", !0),
          ]),
          _: 3,
        },
        8,
        ["name"]
      ),
    ])
  );
}
const V_ = ie(x_, [
    ["render", U_],
    ["__scopeId", "data-v-12672165"],
  ]),
  vl = 90,
  F_ = se({
    components: {
      Drawer: V_,
      DeleteButton: O_,
      ProductImage: Br,
      QuantityPicker: Qu,
    },
    props: {
      isLoading: { type: Boolean, default: !1 },
      isShoppingCartOpen: { type: Boolean, default: !1 },
      translations: { type: Object, default: null },
      language: { type: String, default: "en" },
      isHeaderSticky: { type: Boolean, default: !1 },
      isNavHidden: { type: Boolean, default: !1 },
      siteId: { type: String, default: null },
      quantifiedCartItemsList: { type: Array, default: () => [] },
      products: { type: Array, default: () => [] },
      shoppingCartItems: { type: Array, default: () => [] },
      variantsQuantity: { type: Array, default: () => [] },
    },
    emits: [
      "close-shopping-cart",
      "checkout-button-click",
      "set-shopping-cart-items",
    ],
    data() {
      return {
        IMAGE_WIDTH_PX: vl,
        isHeaderVisible: !1,
        topPositionMobile: "0px",
        resizeObserver: null,
      };
    },
    computed: {
      totalPrice() {
        return this.quantifiedCartItemsList.reduce(
          (e, a) =>
            e +
            (a.product?.variants[0]?.prices[0]?.sale_amount ||
              a.product?.variants[0]?.prices[0]?.amount ||
              0) *
              a.quantity,
          0
        );
      },
      currencyCode() {
        return this.products[0]?.variants[0]?.prices[0]?.currency;
      },
      computedStyle() {
        return { "--image-width": `${vl}px` };
      },
      isLimitReached() {
        return this.shoppingCartItems.length >= Ja;
      },
    },
    watch: {
      isShoppingCartOpen(e) {
        document.documentElement.style.overflow = e ? "hidden" : "auto";
      },
      headerHeight() {
        this.setHeaderVisibilityValues();
      },
    },
    mounted() {
      const e = document.querySelector(".block-header");
      e &&
        ((this.resizeObserver = new ResizeObserver(() => {
          this.setHeaderHeight();
        })),
        this.resizeObserver.observe(e)),
        window.addEventListener("scroll", this.setHeaderVisibilityValues);
    },
    beforeUnmount() {
      this.resizeObserver?.disconnect(),
        window.removeEventListener("scroll", this.setHeaderVisibilityValues);
    },
    methods: {
      getFormattedBookingDuration: Si,
      formatPrice: Fn,
      isStockAvailable(e) {
        if (e.product.variants[0].manage_inventory) {
          const t =
            this.variantsQuantity.find((n) => n.id === e.product.variants[0].id)
              ?.inventory_quantity || 0;
          return e.quantity < t;
        }
        return !0;
      },
      handleQuantityChange(e, a) {
        if (e > a.quantity) {
          this.increaseQuantity(a);
          return;
        }
        this.decreaseQuantity(a);
      },
      decreaseQuantity(e) {
        const a = [...this.shoppingCartItems],
          t = this.shoppingCartItems.filter(
            (r) => r.variants[0].id === e.product.variants[0].id
          ),
          n = this.shoppingCartItems.lastIndexOf(t[t.length - 1]);
        a.splice(n, 1), this.$emit("set-shopping-cart-items", a);
      },
      increaseQuantity(e) {
        this.$emit("set-shopping-cart-items", [
          ...this.shoppingCartItems,
          e.product,
        ]);
      },
      removeProduct(e) {
        const a = this.shoppingCartItems.filter(
          (t) => t.variants[0].id !== e.variants[0].id
        );
        this.$emit("set-shopping-cart-items", a);
      },
      closeShoppingCart() {
        this.$emit("close-shopping-cart");
      },
      setHeaderVisibility() {
        this.isHeaderVisible =
          this.isHeaderSticky ||
          (this.isNavHidden
            ? !1
            : window.scrollY <= Number(this.headerHeight) * 0.4);
      },
      setTopPositionMobile() {
        const e = this.isHeaderSticky
          ? this.headerHeight
          : this.headerHeight - window.scrollY;
        this.topPositionMobile = `${
          this.isHeaderVisible ? Math.floor(e) - 1 : 0
        }px`;
      },
      setHeaderVisibilityValues() {
        this.setHeaderVisibility(), this.setTopPositionMobile();
      },
      setHeaderHeight() {
        this.headerHeight =
          document.querySelector(".block-header")?.clientHeight;
      },
      getFormattedSelectedDate(e) {
        return (
          new Date(
            e.product?.variants[0]?.booking_event?.date
          ).toLocaleDateString(this.language) || null
        );
      },
      getFormattedTime(e) {
        const a = new Date(e.product?.variants[0]?.booking_event?.time_slot),
          t = a.getTime(),
          n = new Date(t + Vo(e.product)),
          r = a.toLocaleTimeString(this.language, {
            hour: "2-digit",
            minute: "2-digit",
          }),
          i = n.toLocaleTimeString(this.language, {
            hour: "2-digit",
            minute: "2-digit",
          });
        return `${r} - ${i}`;
      },
      isProductBookingType(e) {
        return e.product?.type.value === jt;
      },
      getProductImage(e) {
        return e.product.variants[0].image_url || e.product.thumbnail;
      },
    },
  }),
  tc = (e) => (Ht("data-v-cd314e62"), (e = e()), Ut(), e),
  Y_ = { class: "cart" },
  q_ = { class: "cart__content" },
  j_ = {
    key: 0,
    class: "cart__content-title cart__content-title--with-margin",
  },
  W_ = { key: 1, class: "cart__content-title" },
  G_ = { class: "cart__list" },
  z_ = { class: "cart__title" },
  K_ = { key: 0, class: "cart__text" },
  Q_ = { key: 1, class: "cart__text cart__sale-price" },
  Z_ = { class: "cart__text cart__duration" },
  X_ = { class: "cart__time-wrapper" },
  J_ = tc(() =>
    E(
      "svg",
      {
        width: "16",
        height: "18",
        viewBox: "0 0 16 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: "cart__time-icon",
      },
      [
        E("path", {
          d: "M5.5 8.3335H3.83333V10.0002H5.5V8.3335ZM8.83333 8.3335H7.16667V10.0002H8.83333V8.3335ZM12.1667 8.3335H10.5V10.0002H12.1667V8.3335ZM13.8333 2.50016H13V0.833496H11.3333V2.50016H4.66667V0.833496H3V2.50016H2.16667C1.24167 2.50016 0.5 3.25016 0.5 4.16683V15.8335C0.5 16.2755 0.675595 16.6994 0.988155 17.012C1.30072 17.3246 1.72464 17.5002 2.16667 17.5002H13.8333C14.2754 17.5002 14.6993 17.3246 15.0118 17.012C15.3244 16.6994 15.5 16.2755 15.5 15.8335V4.16683C15.5 3.7248 15.3244 3.30088 15.0118 2.98832C14.6993 2.67576 14.2754 2.50016 13.8333 2.50016ZM13.8333 15.8335H2.16667V6.66683H13.8333V15.8335Z",
          fill: "currentColor",
        }),
      ],
      -1
    )
  ),
  ew = { class: "cart__text cart__text--lighter" },
  tw = { class: "cart__time-wrapper" },
  aw = tc(() =>
    E(
      "svg",
      {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: "cart__time-icon",
      },
      [
        E("path", {
          d: "M9.00001 15.6665C12.6667 15.6665 15.6667 12.6665 15.6667 8.99984C15.6667 5.33317 12.6667 2.33317 9.00001 2.33317C5.33334 2.33317 2.33334 5.33317 2.33334 8.99984C2.33334 12.6665 5.33334 15.6665 9.00001 15.6665ZM9.00001 0.666504C13.5833 0.666504 17.3333 4.4165 17.3333 8.99984C17.3333 13.5832 13.5833 17.3332 9.00001 17.3332C4.41667 17.3332 0.666672 13.5832 0.666672 8.99984C0.666672 4.4165 4.41667 0.666504 9.00001 0.666504ZM13.1667 8.58317V9.83317H8.16667V4.83317H9.41667V8.58317H13.1667Z",
          fill: "currentColor",
        }),
      ],
      -1
    )
  ),
  nw = { class: "cart__text cart__text--lighter" },
  rw = { key: 3, class: "cart__quantity" },
  ow = { class: "cart__quantity-title" },
  iw = { key: 0, class: "cart__footer" },
  sw = { class: "cart__title cart__title--with-slot" };
function lw(e, a, t, n, r, i) {
  const o = Ce("ProductImage"),
    s = Ce("QuantityPicker"),
    l = Ce("DeleteButton"),
    d = Ce("Drawer"),
    p = ze("qa");
  return (
    m(),
    G(
      d,
      {
        "is-open": e.isShoppingCartOpen,
        "top-position-mobile": e.topPositionMobile,
        style: Re(e.computedStyle),
        onCloseDrawer: e.closeShoppingCart,
      },
      {
        default: _e(() => [
          E("div", Y_, [
            E("div", q_, [
              e.quantifiedCartItemsList.length
                ? (m(), v("p", W_, J(e.translations.shoppingBag), 1))
                : ue(
                    (m(),
                    v("p", j_, [Ne(J(e.translations.shoppingBagEmpty), 1)])),
                    [[p, "shoppingcart-text-emptystate"]]
                  ),
              E("ul", G_, [
                (m(!0),
                v(
                  ge,
                  null,
                  Se(
                    e.quantifiedCartItemsList,
                    (u) => (
                      m(),
                      v(
                        "li",
                        {
                          key: u.product.variants[0].id,
                          class: "cart__list-item",
                        },
                        [
                          u.product.thumbnail
                            ? (m(),
                              G(
                                o,
                                {
                                  key: 0,
                                  src: e.getProductImage(u),
                                  alt: u.product.title,
                                  class: "cart__list-item-image",
                                  width: e.IMAGE_WIDTH_PX,
                                  height: e.IMAGE_WIDTH_PX,
                                  "site-id": e.siteId,
                                  "enable-srcset": "",
                                },
                                null,
                                8,
                                ["src", "alt", "width", "height", "site-id"]
                              ))
                            : M("", !0),
                          E("div", null, [
                            ue((m(), v("p", z_, [Ne(J(u.product.title), 1)])), [
                              [p, "shoppingcart-text-product"],
                            ]),
                            u.product.options.length
                              ? ue(
                                  (m(),
                                  v("p", K_, [
                                    Ne(J(u.product.variants[0].title), 1),
                                  ])),
                                  [[p, "shoppingcart-text-variant"]]
                                )
                              : M("", !0),
                            ue(
                              (m(),
                              v(
                                "p",
                                {
                                  class: ee([
                                    "cart__text cart__price",
                                    {
                                      "cart__price--strikethrough":
                                        u.product.variants[0].prices[0]
                                          .sale_amount,
                                    },
                                  ]),
                                },
                                [
                                  Ne(
                                    J(
                                      e.formatPrice(
                                        u.product.variants[0].prices[0].amount,
                                        u.product.variants[0].prices[0].currency
                                      )
                                    ),
                                    1
                                  ),
                                ],
                                2
                              )),
                              [[p, "shoppingcart-text-price"]]
                            ),
                            u.product.variants[0].prices[0].sale_amount
                              ? ue(
                                  (m(),
                                  v("p", Q_, [
                                    Ne(
                                      J(
                                        e.formatPrice(
                                          u.product.variants[0].prices[0]
                                            .sale_amount,
                                          u.product.variants[0].prices[0]
                                            .currency
                                        )
                                      ),
                                      1
                                    ),
                                  ])),
                                  [[p, "shoppingcart-text-saleprice"]]
                                )
                              : M("", !0),
                            e.isProductBookingType(u)
                              ? (m(),
                                v(
                                  ge,
                                  { key: 2 },
                                  [
                                    ue(
                                      (m(),
                                      v("p", Z_, [
                                        Ne(
                                          J(
                                            e.getFormattedBookingDuration(
                                              u.product,
                                              e.translations
                                            )
                                          ),
                                          1
                                        ),
                                      ])),
                                      [[p, "shoppingcart-text-duration"]]
                                    ),
                                    E("div", X_, [
                                      J_,
                                      E(
                                        "p",
                                        ew,
                                        J(e.getFormattedSelectedDate(u)),
                                        1
                                      ),
                                    ]),
                                    E("div", tw, [
                                      aw,
                                      E("p", nw, J(e.getFormattedTime(u)), 1),
                                    ]),
                                  ],
                                  64
                                ))
                              : (m(),
                                v("p", rw, [
                                  E(
                                    "span",
                                    ow,
                                    J(e.translations.quantityShort) + ": ",
                                    1
                                  ),
                                  Ee(
                                    s,
                                    {
                                      "qa-selector": "shoppingcart",
                                      "is-cart-style": "",
                                      size: 26,
                                      "font-size": 14,
                                      quantity: u.quantity,
                                      "is-input-disabled": "",
                                      "is-limit-reached": e.isLimitReached,
                                      "is-stock-available":
                                        e.isStockAvailable(u),
                                      onQuantityChange: (g) =>
                                        e.handleQuantityChange(g, u),
                                    },
                                    null,
                                    8,
                                    [
                                      "quantity",
                                      "is-limit-reached",
                                      "is-stock-available",
                                      "onQuantityChange",
                                    ]
                                  ),
                                ])),
                          ]),
                          ue(
                            Ee(
                              l,
                              {
                                class: "cart__remove-button",
                                onHandleButtonClick: (g) =>
                                  e.removeProduct(u.product),
                              },
                              null,
                              8,
                              ["onHandleButtonClick"]
                            ),
                            [[p, "shoppingcart-btn-delete"]]
                          ),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
            e.quantifiedCartItemsList.length
              ? (m(),
                v("div", iw, [
                  ue(
                    (m(),
                    v("p", sw, [
                      Ne(J(e.translations.subtotal) + ": ", 1),
                      E(
                        "span",
                        null,
                        J(e.formatPrice(e.totalPrice, e.currencyCode)),
                        1
                      ),
                    ])),
                    [[p, "shoppingcart-text-subtotal"]]
                  ),
                  ue(
                    (m(),
                    v(
                      "button",
                      {
                        class: ee([
                          "cart__text cart__checkout-button",
                          { loading: e.isLoading },
                        ]),
                        onClick:
                          a[0] ||
                          (a[0] = (u) => e.$emit("checkout-button-click")),
                      },
                      [Ne(J(e.translations.checkout), 1)],
                      2
                    )),
                    [[p, "shoppingcart-btn-checkout"]]
                  ),
                ]))
              : M("", !0),
          ]),
        ]),
        _: 1,
      },
      8,
      ["is-open", "top-position-mobile", "style", "onCloseDrawer"]
    )
  );
}
const uw = ie(F_, [
    ["render", lw],
    ["__scopeId", "data-v-cd314e62"],
  ]),
  cw = se({
    components: { EcommerceShoppingCart: uw },
    props: {
      headerHeight: { type: Number, default: 0 },
      ecommerceTranslations: { type: Object, default: () => ({}) },
      language: { type: String, default: "en" },
      currentPageEcommerceBlocks: { type: Array, default: () => [] },
      currentPageEcommerceComponents: { type: Array, default: () => [] },
      isHeaderSticky: { type: Boolean, default: !1 },
      isNavHidden: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e) {
      const { siteId: a } = rt(),
        {
          quantifiedCartItemsList: t,
          products: n,
          isShoppingCartOpen: r,
          isCheckoutLoading: i,
          shoppingCartItems: o,
          variantsQuantity: s,
          fetchProducts: l,
          setShoppingCartOpen: d,
          setShoppingCartItems: p,
          setIsCheckoutLoading: u,
        } = Wt(),
        { openEcommerceModal: g } = qt(),
        { initiateCheckout: y } = on();
      return {
        openEcommerceModal: g,
        initiateCheckout: y,
        quantifiedCartItemsList: t,
        products: n,
        isShoppingCartOpen: r,
        isCheckoutLoading: i,
        shoppingCartItems: o,
        variantsQuantity: s,
        fetchProducts: l,
        setShoppingCartOpen: d,
        setShoppingCartItems: p,
        setIsCheckoutLoading: u,
        siteId: a,
      };
    },
    computed: {
      currentPageEcommerceElements() {
        return [
          ...this.currentPageEcommerceBlocks,
          ...this.currentPageEcommerceComponents,
        ];
      },
      productIds() {
        const a = this.currentPageEcommerceElements
          .reduce((t, n) => {
            let r = [];
            const i = new URLSearchParams(window.location.search),
              o = Number.parseInt(i.get("store-page"), 10) || 1;
            switch (n.type) {
              case "BlockEcommerceProductList":
                r = [...r, ...n.productIds.slice(0, n.productsPerPage * o)];
                break;
              case "BlockEcommerceProduct":
                r = [...r, n.product?.id];
                break;
              case "GridEcommerceButton":
                r = [...r, n.settings?.productId];
                break;
            }
            return [...t, ...r];
          }, [])
          .filter((t) => t !== -1);
        return [...new Set(a)];
      },
    },
    watch: {
      currentPageEcommerceElements: {
        async handler(e, a) {
          JSON.stringify(e) !== JSON.stringify(a) &&
            (await this.loadProducts());
        },
      },
    },
    mounted() {
      this.loadProducts();
    },
    methods: {
      async loadProducts() {
        await this.fetchProducts(this.productIds);
      },
      async initCheckout() {
        if (Fa() || this.isInPreviewMode) {
          this.openEcommerceModal("EcommerceMessageButtonDisabled");
          return;
        }
        this.isCheckoutLoading ||
          (this.setIsCheckoutLoading(!0),
          await this.initiateCheckout(this.shoppingCartItems).then(() => {
            this.setShoppingCartOpen(!1), this.setIsCheckoutLoading(!1);
          }));
      },
    },
  });
function dw(e, a, t, n, r, i) {
  const o = Ce("EcommerceShoppingCart"),
    s = ze("qa");
  return ue(
    (m(),
    G(
      o,
      {
        "is-shopping-cart-open": e.isShoppingCartOpen,
        "is-loading": e.isCheckoutLoading,
        "header-height": e.headerHeight,
        "is-header-sticky": e.isHeaderSticky,
        "is-nav-hidden": e.isNavHidden,
        translations: e.ecommerceTranslations,
        language: e.language,
        "site-id": e.siteId,
        "quantified-cart-items-list": e.quantifiedCartItemsList,
        products: e.products,
        "shopping-cart-items": e.shoppingCartItems,
        "variants-quantity": e.variantsQuantity,
        onCheckoutButtonClick: e.initCheckout,
        onCloseShoppingCart: a[0] || (a[0] = (l) => e.setShoppingCartOpen(!1)),
        onSetShoppingCartItems: e.setShoppingCartItems,
      },
      null,
      8,
      [
        "is-shopping-cart-open",
        "is-loading",
        "header-height",
        "is-header-sticky",
        "is-nav-hidden",
        "translations",
        "language",
        "site-id",
        "quantified-cart-items-list",
        "products",
        "shopping-cart-items",
        "variants-quantity",
        "onCheckoutButtonClick",
        "onSetShoppingCartItems",
      ]
    )),
    [[s, "user-section-zyroecommerceshoppingcart"]]
  );
}
const mw = ie(cw, [["render", dw]]),
  pw = se({
    components: { CloseButton: Pi },
    props: {
      backgroundColor: { type: String, default: "var(--color-light)" },
      padding: { type: String, default: "16px" },
      width: { type: String, default: "auto" },
      maxWidth: { type: String, default: "unset" },
      overflow: { type: String, default: "unset" },
      height: { type: String, default: "auto" },
      mobileHeight: { type: String, default: "" },
    },
    setup() {
      const { closeEcommerceModal: e } = qt();
      return { closeEcommerceModal: e };
    },
    computed: {
      modalStyle() {
        return {
          "--modal-background-color": this.backgroundColor,
          "--padding": this.padding,
          "--width": this.width,
          "--max-width": this.maxWidth,
          "--overflow": this.overflow,
          "--height": this.height,
          "--mobile-height": this.mobileHeight || this.height,
        };
      },
    },
    mounted() {
      this.$refs.modal?.focus();
    },
    methods: {
      handleCloseModalAction() {
        this.closeEcommerceModal();
        const e = new URLSearchParams(window.location.search);
        if (!e.get("open-modal")) return;
        e.delete("open-modal"), e.delete("product");
        const a = e.toString();
        a && window.history.pushState(null, null, `?${a}`);
      },
    },
  }),
  gw = { class: "modal-wrapper" };
function hw(e, a, t, n, r, i) {
  const o = Ce("CloseButton");
  return (
    m(),
    G(
      At,
      { name: "fade" },
      {
        default: _e(() => [
          E("div", gw, [
            E("div", {
              tabindex: "-1",
              class: "modal-backdrop",
              onClick:
                a[0] ||
                (a[0] = (...s) =>
                  e.handleCloseModalAction && e.handleCloseModalAction(...s)),
            }),
            E(
              "div",
              {
                ref: "modal",
                style: Re(e.modalStyle),
                class: "modal",
                tabindex: "0",
                "aria-modal": "true",
                onKeydown:
                  a[1] ||
                  (a[1] = De(
                    (...s) =>
                      e.handleCloseModalAction &&
                      e.handleCloseModalAction(...s),
                    ["esc"]
                  )),
              },
              [
                Ee(
                  o,
                  {
                    class: "modal__close-button",
                    onClick: e.handleCloseModalAction,
                  },
                  null,
                  8,
                  ["onClick"]
                ),
                he(e.$slots, "default", {}, void 0, !0),
              ],
              36
            ),
          ]),
        ]),
        _: 3,
      }
    )
  );
}
const vn = ie(pw, [
    ["render", hw],
    ["__scopeId", "data-v-35831679"],
  ]),
  fw = {
    __name: "EcommerceProductPreview",
    props: {
      translations: { type: Object, default: () => {} },
      isQuickPreview: { type: Boolean, default: !1 },
      currentLocale: { type: String, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
    },
    setup(e, { expose: a }) {
      a();
      const t = e,
        { productPreviewData: n } = qt(),
        { siteId: r } = rt(),
        { productPages: i } = Wt(),
        o = c(() =>
          lt(n.value.background.origin, n.value.background.path, r.value, {
            width: Oa,
          })
        ),
        s = c(() =>
          Aa(n.value.background.origin, n.value.background.path, r.value, {
            isMobileFullScreen: !1,
          })
        ),
        l = {
          props: t,
          productPreviewData: n,
          siteId: r,
          productPages: i,
          backgroundSrc: o,
          backgroundSrcSet: s,
          BlockBackground: uu,
          ModalLayout: vn,
          BlockEcommerceProductProviderUser: Zu,
          computed: c,
          get useEcommerceModal() {
            return qt;
          },
          get getFullWidthSrcset() {
            return Aa;
          },
          get getOptimizedSrc() {
            return lt;
          },
          get FULL_WIDTH() {
            return Oa;
          },
          get useEcommerceGlobal() {
            return Wt;
          },
          get useSiteGlobal() {
            return rt;
          },
        };
      return (
        Object.defineProperty(l, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        l
      );
    },
  },
  vw = { class: "ecommerce-product-preview__content-wrapper" };
function yw(e, a, t, n, r, i) {
  const o = ze("qa");
  return (
    m(),
    G(
      n.ModalLayout,
      {
        ref: "modal",
        "max-width": "905px",
        width: "100%",
        padding: "0",
        height: "auto",
        overflow: "auto",
        class: "ecommerce-product-preview",
      },
      {
        default: _e(() => [
          ue(
            (m(),
            v("div", vw, [
              n.productPreviewData.background
                ? (m(),
                  G(
                    n.BlockBackground,
                    {
                      key: 0,
                      "overlay-opacity":
                        n.productPreviewData.background["overlay-opacity"],
                      type: n.productPreviewData.background.current,
                      color: n.productPreviewData.background.color,
                      src: n.backgroundSrc,
                      srcset: n.backgroundSrcSet,
                      "is-fixed": n.productPreviewData.attachment === "fixed",
                      alt:
                        n.productPreviewData.background &&
                        n.productPreviewData.background.alt,
                      class: "ecommerce-product-preview__background",
                    },
                    null,
                    8,
                    [
                      "overlay-opacity",
                      "type",
                      "color",
                      "src",
                      "srcset",
                      "is-fixed",
                      "alt",
                    ]
                  ))
                : M("", !0),
              Ee(
                n.BlockEcommerceProductProviderUser,
                {
                  class: "ecommerce-product-preview__content",
                  "is-quick-preview": t.isQuickPreview,
                  data: n.productPreviewData,
                  "product-pages": n.productPages,
                  "is-cart-visible": t.isCartVisible,
                  "ecommerce-translations": t.translations,
                },
                null,
                8,
                [
                  "is-quick-preview",
                  "data",
                  "product-pages",
                  "is-cart-visible",
                  "ecommerce-translations",
                ]
              ),
            ])),
            [[o, "productpreview-modal"]]
          ),
        ]),
        _: 1,
      },
      512
    )
  );
}
const bw = ie(fw, [
  ["render", yw],
  ["__scopeId", "data-v-cab0f1aa"],
]);
function Gt(e) {
  "@babel/helpers - typeof";
  return (
    (Gt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (a) {
            return typeof a;
          }
        : function (a) {
            return a &&
              typeof Symbol == "function" &&
              a.constructor === Symbol &&
              a !== Symbol.prototype
              ? "symbol"
              : typeof a;
          }),
    Gt(e)
  );
}
function Te(e) {
  if (e === null || e === !0 || e === !1) return NaN;
  var a = Number(e);
  return isNaN(a) ? a : a < 0 ? Math.ceil(a) : Math.floor(a);
}
function be(e, a) {
  if (a.length < e)
    throw new TypeError(
      e +
        " argument" +
        (e > 1 ? "s" : "") +
        " required, but only " +
        a.length +
        " present"
    );
}
function ke(e) {
  be(1, arguments);
  var a = Object.prototype.toString.call(e);
  return e instanceof Date || (Gt(e) === "object" && a === "[object Date]")
    ? new Date(e.getTime())
    : typeof e == "number" || a === "[object Number]"
    ? new Date(e)
    : ((typeof e == "string" || a === "[object String]") &&
        typeof console < "u" &&
        (console.warn(
          "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
        ),
        console.warn(new Error().stack)),
      new Date(NaN));
}
function va(e, a) {
  be(2, arguments);
  var t = ke(e),
    n = Te(a);
  return isNaN(n) ? new Date(NaN) : (n && t.setDate(t.getDate() + n), t);
}
function Xt(e, a) {
  be(2, arguments);
  var t = ke(e),
    n = Te(a);
  if (isNaN(n)) return new Date(NaN);
  if (!n) return t;
  var r = t.getDate(),
    i = new Date(t.getTime());
  i.setMonth(t.getMonth() + n + 1, 0);
  var o = i.getDate();
  return r >= o ? i : (t.setFullYear(i.getFullYear(), i.getMonth(), r), t);
}
function ac(e, a) {
  if ((be(2, arguments), !a || Gt(a) !== "object")) return new Date(NaN);
  var t = a.years ? Te(a.years) : 0,
    n = a.months ? Te(a.months) : 0,
    r = a.weeks ? Te(a.weeks) : 0,
    i = a.days ? Te(a.days) : 0,
    o = a.hours ? Te(a.hours) : 0,
    s = a.minutes ? Te(a.minutes) : 0,
    l = a.seconds ? Te(a.seconds) : 0,
    d = ke(e),
    p = n || t ? Xt(d, n + t * 12) : d,
    u = i || r ? va(p, i + r * 7) : p,
    g = s + o * 60,
    y = l + g * 60,
    f = y * 1e3,
    _ = new Date(u.getTime() + f);
  return _;
}
function _w(e, a) {
  be(2, arguments);
  var t = ke(e).getTime(),
    n = Te(a);
  return new Date(t + n);
}
var ww = {};
function pa() {
  return ww;
}
function Ya(e, a) {
  var t, n, r, i, o, s, l, d;
  be(1, arguments);
  var p = pa(),
    u = Te(
      (t =
        (n =
          (r =
            (i = a?.weekStartsOn) !== null && i !== void 0
              ? i
              : a == null ||
                (o = a.locale) === null ||
                o === void 0 ||
                (s = o.options) === null ||
                s === void 0
              ? void 0
              : s.weekStartsOn) !== null && r !== void 0
            ? r
            : p.weekStartsOn) !== null && n !== void 0
          ? n
          : (l = p.locale) === null ||
            l === void 0 ||
            (d = l.options) === null ||
            d === void 0
          ? void 0
          : d.weekStartsOn) !== null && t !== void 0
        ? t
        : 0
    );
  if (!(u >= 0 && u <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var g = ke(e),
    y = g.getDay(),
    f = (y < u ? 7 : 0) + y - u;
  return g.setDate(g.getDate() - f), g.setHours(0, 0, 0, 0), g;
}
function wr(e) {
  return be(1, arguments), Ya(e, { weekStartsOn: 1 });
}
function kw(e) {
  be(1, arguments);
  var a = ke(e),
    t = a.getFullYear(),
    n = new Date(0);
  n.setFullYear(t + 1, 0, 4), n.setHours(0, 0, 0, 0);
  var r = wr(n),
    i = new Date(0);
  i.setFullYear(t, 0, 4), i.setHours(0, 0, 0, 0);
  var o = wr(i);
  return a.getTime() >= r.getTime()
    ? t + 1
    : a.getTime() >= o.getTime()
    ? t
    : t - 1;
}
function Sw(e) {
  be(1, arguments);
  var a = kw(e),
    t = new Date(0);
  t.setFullYear(a, 0, 4), t.setHours(0, 0, 0, 0);
  var n = wr(t);
  return n;
}
function kr(e) {
  var a = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return a.setUTCFullYear(e.getFullYear()), e.getTime() - a.getTime();
}
function yl(e) {
  be(1, arguments);
  var a = ke(e);
  return a.setHours(0, 0, 0, 0), a;
}
var Cw = 864e5;
function Tw(e, a) {
  be(2, arguments);
  var t = yl(e),
    n = yl(a),
    r = t.getTime() - kr(t),
    i = n.getTime() - kr(n);
  return Math.round((r - i) / Cw);
}
function Pw(e, a) {
  be(2, arguments);
  var t = Te(a),
    n = t * 3;
  return Xt(e, n);
}
function Ii(e, a) {
  be(2, arguments);
  var t = Te(a);
  return Xt(e, t * 12);
}
var Ei = 6e4,
  Di = 36e5,
  Iw = 1e3;
function nc(e) {
  return (
    be(1, arguments),
    e instanceof Date ||
      (Gt(e) === "object" &&
        Object.prototype.toString.call(e) === "[object Date]")
  );
}
function Ln(e) {
  if ((be(1, arguments), !nc(e) && typeof e != "number")) return !1;
  var a = ke(e);
  return !isNaN(Number(a));
}
function bl(e) {
  be(1, arguments);
  var a = ke(e),
    t = Math.floor(a.getMonth() / 3) + 1;
  return t;
}
function rc(e, a) {
  var t;
  be(1, arguments);
  var n = e || {},
    r = ke(n.start),
    i = ke(n.end),
    o = i.getTime();
  if (!(r.getTime() <= o)) throw new RangeError("Invalid interval");
  var s = [],
    l = r;
  l.setHours(0, 0, 0, 0);
  var d = Number((t = a?.step) !== null && t !== void 0 ? t : 1);
  if (d < 1 || isNaN(d))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; l.getTime() <= o; )
    s.push(ke(l)), l.setDate(l.getDate() + d), l.setHours(0, 0, 0, 0);
  return s;
}
function qn(e) {
  be(1, arguments);
  var a = ke(e),
    t = a.getMonth(),
    n = t - (t % 3);
  return a.setMonth(n, 1), a.setHours(0, 0, 0, 0), a;
}
function Ew(e) {
  be(1, arguments);
  var a = e || {},
    t = ke(a.start),
    n = ke(a.end),
    r = n.getTime();
  if (!(t.getTime() <= r)) throw new RangeError("Invalid interval");
  var i = qn(t),
    o = qn(n);
  r = o.getTime();
  for (var s = [], l = i; l.getTime() <= r; ) s.push(ke(l)), (l = Pw(l, 1));
  return s;
}
function Dw(e) {
  be(1, arguments);
  var a = ke(e),
    t = a.getFullYear();
  return a.setFullYear(t + 1, 0, 0), a.setHours(23, 59, 59, 999), a;
}
function Mw(e) {
  be(1, arguments);
  var a = ke(e),
    t = new Date(0);
  return t.setFullYear(a.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t;
}
function Ow(e, a) {
  var t, n, r, i, o, s, l, d;
  be(1, arguments);
  var p = pa(),
    u = Te(
      (t =
        (n =
          (r =
            (i = a?.weekStartsOn) !== null && i !== void 0
              ? i
              : a == null ||
                (o = a.locale) === null ||
                o === void 0 ||
                (s = o.options) === null ||
                s === void 0
              ? void 0
              : s.weekStartsOn) !== null && r !== void 0
            ? r
            : p.weekStartsOn) !== null && n !== void 0
          ? n
          : (l = p.locale) === null ||
            l === void 0 ||
            (d = l.options) === null ||
            d === void 0
          ? void 0
          : d.weekStartsOn) !== null && t !== void 0
        ? t
        : 0
    );
  if (!(u >= 0 && u <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var g = ke(e),
    y = g.getDay(),
    f = (y < u ? -7 : 0) + 6 - (y - u);
  return g.setDate(g.getDate() + f), g.setHours(23, 59, 59, 999), g;
}
function _l(e) {
  be(1, arguments);
  var a = ke(e),
    t = a.getMonth(),
    n = t - (t % 3) + 3;
  return a.setMonth(n, 0), a.setHours(23, 59, 59, 999), a;
}
function oc(e, a) {
  be(2, arguments);
  var t = Te(a);
  return _w(e, -t);
}
var Aw = 864e5;
function Lw(e) {
  be(1, arguments);
  var a = ke(e),
    t = a.getTime();
  a.setUTCMonth(0, 1), a.setUTCHours(0, 0, 0, 0);
  var n = a.getTime(),
    r = t - n;
  return Math.floor(r / Aw) + 1;
}
function un(e) {
  be(1, arguments);
  var a = 1,
    t = ke(e),
    n = t.getUTCDay(),
    r = (n < a ? 7 : 0) + n - a;
  return t.setUTCDate(t.getUTCDate() - r), t.setUTCHours(0, 0, 0, 0), t;
}
function ic(e) {
  be(1, arguments);
  var a = ke(e),
    t = a.getUTCFullYear(),
    n = new Date(0);
  n.setUTCFullYear(t + 1, 0, 4), n.setUTCHours(0, 0, 0, 0);
  var r = un(n),
    i = new Date(0);
  i.setUTCFullYear(t, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var o = un(i);
  return a.getTime() >= r.getTime()
    ? t + 1
    : a.getTime() >= o.getTime()
    ? t
    : t - 1;
}
function Bw(e) {
  be(1, arguments);
  var a = ic(e),
    t = new Date(0);
  t.setUTCFullYear(a, 0, 4), t.setUTCHours(0, 0, 0, 0);
  var n = un(t);
  return n;
}
var Rw = 6048e5;
function sc(e) {
  be(1, arguments);
  var a = ke(e),
    t = un(a).getTime() - Bw(a).getTime();
  return Math.round(t / Rw) + 1;
}
function qa(e, a) {
  var t, n, r, i, o, s, l, d;
  be(1, arguments);
  var p = pa(),
    u = Te(
      (t =
        (n =
          (r =
            (i = a?.weekStartsOn) !== null && i !== void 0
              ? i
              : a == null ||
                (o = a.locale) === null ||
                o === void 0 ||
                (s = o.options) === null ||
                s === void 0
              ? void 0
              : s.weekStartsOn) !== null && r !== void 0
            ? r
            : p.weekStartsOn) !== null && n !== void 0
          ? n
          : (l = p.locale) === null ||
            l === void 0 ||
            (d = l.options) === null ||
            d === void 0
          ? void 0
          : d.weekStartsOn) !== null && t !== void 0
        ? t
        : 0
    );
  if (!(u >= 0 && u <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var g = ke(e),
    y = g.getUTCDay(),
    f = (y < u ? 7 : 0) + y - u;
  return g.setUTCDate(g.getUTCDate() - f), g.setUTCHours(0, 0, 0, 0), g;
}
function Mi(e, a) {
  var t, n, r, i, o, s, l, d;
  be(1, arguments);
  var p = ke(e),
    u = p.getUTCFullYear(),
    g = pa(),
    y = Te(
      (t =
        (n =
          (r =
            (i = a?.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : a == null ||
                (o = a.locale) === null ||
                o === void 0 ||
                (s = o.options) === null ||
                s === void 0
              ? void 0
              : s.firstWeekContainsDate) !== null && r !== void 0
            ? r
            : g.firstWeekContainsDate) !== null && n !== void 0
          ? n
          : (l = g.locale) === null ||
            l === void 0 ||
            (d = l.options) === null ||
            d === void 0
          ? void 0
          : d.firstWeekContainsDate) !== null && t !== void 0
        ? t
        : 1
    );
  if (!(y >= 1 && y <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var f = new Date(0);
  f.setUTCFullYear(u + 1, 0, y), f.setUTCHours(0, 0, 0, 0);
  var _ = qa(f, a),
    S = new Date(0);
  S.setUTCFullYear(u, 0, y), S.setUTCHours(0, 0, 0, 0);
  var w = qa(S, a);
  return p.getTime() >= _.getTime()
    ? u + 1
    : p.getTime() >= w.getTime()
    ? u
    : u - 1;
}
function $w(e, a) {
  var t, n, r, i, o, s, l, d;
  be(1, arguments);
  var p = pa(),
    u = Te(
      (t =
        (n =
          (r =
            (i = a?.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : a == null ||
                (o = a.locale) === null ||
                o === void 0 ||
                (s = o.options) === null ||
                s === void 0
              ? void 0
              : s.firstWeekContainsDate) !== null && r !== void 0
            ? r
            : p.firstWeekContainsDate) !== null && n !== void 0
          ? n
          : (l = p.locale) === null ||
            l === void 0 ||
            (d = l.options) === null ||
            d === void 0
          ? void 0
          : d.firstWeekContainsDate) !== null && t !== void 0
        ? t
        : 1
    ),
    g = Mi(e, a),
    y = new Date(0);
  y.setUTCFullYear(g, 0, u), y.setUTCHours(0, 0, 0, 0);
  var f = qa(y, a);
  return f;
}
var Nw = 6048e5;
function lc(e, a) {
  be(1, arguments);
  var t = ke(e),
    n = qa(t, a).getTime() - $w(t, a).getTime();
  return Math.round(n / Nw) + 1;
}
function Ke(e, a) {
  for (var t = e < 0 ? "-" : "", n = Math.abs(e).toString(); n.length < a; )
    n = "0" + n;
  return t + n;
}
var xw = {
  y: function (a, t) {
    var n = a.getUTCFullYear(),
      r = n > 0 ? n : 1 - n;
    return Ke(t === "yy" ? r % 100 : r, t.length);
  },
  M: function (a, t) {
    var n = a.getUTCMonth();
    return t === "M" ? String(n + 1) : Ke(n + 1, 2);
  },
  d: function (a, t) {
    return Ke(a.getUTCDate(), t.length);
  },
  a: function (a, t) {
    var n = a.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return n.toUpperCase();
      case "aaa":
        return n;
      case "aaaaa":
        return n[0];
      case "aaaa":
      default:
        return n === "am" ? "a.m." : "p.m.";
    }
  },
  h: function (a, t) {
    return Ke(a.getUTCHours() % 12 || 12, t.length);
  },
  H: function (a, t) {
    return Ke(a.getUTCHours(), t.length);
  },
  m: function (a, t) {
    return Ke(a.getUTCMinutes(), t.length);
  },
  s: function (a, t) {
    return Ke(a.getUTCSeconds(), t.length);
  },
  S: function (a, t) {
    var n = t.length,
      r = a.getUTCMilliseconds(),
      i = Math.floor(r * Math.pow(10, n - 3));
    return Ke(i, t.length);
  },
};
const Ca = xw;
var Ka = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  Hw = {
    G: function (a, t, n) {
      var r = a.getUTCFullYear() > 0 ? 1 : 0;
      switch (t) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(r, { width: "abbreviated" });
        case "GGGGG":
          return n.era(r, { width: "narrow" });
        case "GGGG":
        default:
          return n.era(r, { width: "wide" });
      }
    },
    y: function (a, t, n) {
      if (t === "yo") {
        var r = a.getUTCFullYear(),
          i = r > 0 ? r : 1 - r;
        return n.ordinalNumber(i, { unit: "year" });
      }
      return Ca.y(a, t);
    },
    Y: function (a, t, n, r) {
      var i = Mi(a, r),
        o = i > 0 ? i : 1 - i;
      if (t === "YY") {
        var s = o % 100;
        return Ke(s, 2);
      }
      return t === "Yo"
        ? n.ordinalNumber(o, { unit: "year" })
        : Ke(o, t.length);
    },
    R: function (a, t) {
      var n = ic(a);
      return Ke(n, t.length);
    },
    u: function (a, t) {
      var n = a.getUTCFullYear();
      return Ke(n, t.length);
    },
    Q: function (a, t, n) {
      var r = Math.ceil((a.getUTCMonth() + 1) / 3);
      switch (t) {
        case "Q":
          return String(r);
        case "QQ":
          return Ke(r, 2);
        case "Qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "QQQ":
          return n.quarter(r, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return n.quarter(r, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return n.quarter(r, { width: "wide", context: "formatting" });
      }
    },
    q: function (a, t, n) {
      var r = Math.ceil((a.getUTCMonth() + 1) / 3);
      switch (t) {
        case "q":
          return String(r);
        case "qq":
          return Ke(r, 2);
        case "qo":
          return n.ordinalNumber(r, { unit: "quarter" });
        case "qqq":
          return n.quarter(r, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return n.quarter(r, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return n.quarter(r, { width: "wide", context: "standalone" });
      }
    },
    M: function (a, t, n) {
      var r = a.getUTCMonth();
      switch (t) {
        case "M":
        case "MM":
          return Ca.M(a, t);
        case "Mo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "MMM":
          return n.month(r, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return n.month(r, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return n.month(r, { width: "wide", context: "formatting" });
      }
    },
    L: function (a, t, n) {
      var r = a.getUTCMonth();
      switch (t) {
        case "L":
          return String(r + 1);
        case "LL":
          return Ke(r + 1, 2);
        case "Lo":
          return n.ordinalNumber(r + 1, { unit: "month" });
        case "LLL":
          return n.month(r, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return n.month(r, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return n.month(r, { width: "wide", context: "standalone" });
      }
    },
    w: function (a, t, n, r) {
      var i = lc(a, r);
      return t === "wo"
        ? n.ordinalNumber(i, { unit: "week" })
        : Ke(i, t.length);
    },
    I: function (a, t, n) {
      var r = sc(a);
      return t === "Io"
        ? n.ordinalNumber(r, { unit: "week" })
        : Ke(r, t.length);
    },
    d: function (a, t, n) {
      return t === "do"
        ? n.ordinalNumber(a.getUTCDate(), { unit: "date" })
        : Ca.d(a, t);
    },
    D: function (a, t, n) {
      var r = Lw(a);
      return t === "Do"
        ? n.ordinalNumber(r, { unit: "dayOfYear" })
        : Ke(r, t.length);
    },
    E: function (a, t, n) {
      var r = a.getUTCDay();
      switch (t) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return n.day(r, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    e: function (a, t, n, r) {
      var i = a.getUTCDay(),
        o = (i - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "e":
          return String(o);
        case "ee":
          return Ke(o, 2);
        case "eo":
          return n.ordinalNumber(o, { unit: "day" });
        case "eee":
          return n.day(i, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(i, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(i, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return n.day(i, { width: "wide", context: "formatting" });
      }
    },
    c: function (a, t, n, r) {
      var i = a.getUTCDay(),
        o = (i - r.weekStartsOn + 8) % 7 || 7;
      switch (t) {
        case "c":
          return String(o);
        case "cc":
          return Ke(o, t.length);
        case "co":
          return n.ordinalNumber(o, { unit: "day" });
        case "ccc":
          return n.day(i, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(i, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(i, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return n.day(i, { width: "wide", context: "standalone" });
      }
    },
    i: function (a, t, n) {
      var r = a.getUTCDay(),
        i = r === 0 ? 7 : r;
      switch (t) {
        case "i":
          return String(i);
        case "ii":
          return Ke(i, t.length);
        case "io":
          return n.ordinalNumber(i, { unit: "day" });
        case "iii":
          return n.day(r, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return n.day(r, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return n.day(r, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return n.day(r, { width: "wide", context: "formatting" });
      }
    },
    a: function (a, t, n) {
      var r = a.getUTCHours(),
        i = r / 12 >= 1 ? "pm" : "am";
      switch (t) {
        case "a":
        case "aa":
          return n.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return n
            .dayPeriod(i, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return n.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return n.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    b: function (a, t, n) {
      var r = a.getUTCHours(),
        i;
      switch (
        (r === 12
          ? (i = Ka.noon)
          : r === 0
          ? (i = Ka.midnight)
          : (i = r / 12 >= 1 ? "pm" : "am"),
        t)
      ) {
        case "b":
        case "bb":
          return n.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return n
            .dayPeriod(i, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return n.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return n.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    B: function (a, t, n) {
      var r = a.getUTCHours(),
        i;
      switch (
        (r >= 17
          ? (i = Ka.evening)
          : r >= 12
          ? (i = Ka.afternoon)
          : r >= 4
          ? (i = Ka.morning)
          : (i = Ka.night),
        t)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return n.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return n.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    h: function (a, t, n) {
      if (t === "ho") {
        var r = a.getUTCHours() % 12;
        return r === 0 && (r = 12), n.ordinalNumber(r, { unit: "hour" });
      }
      return Ca.h(a, t);
    },
    H: function (a, t, n) {
      return t === "Ho"
        ? n.ordinalNumber(a.getUTCHours(), { unit: "hour" })
        : Ca.H(a, t);
    },
    K: function (a, t, n) {
      var r = a.getUTCHours() % 12;
      return t === "Ko"
        ? n.ordinalNumber(r, { unit: "hour" })
        : Ke(r, t.length);
    },
    k: function (a, t, n) {
      var r = a.getUTCHours();
      return (
        r === 0 && (r = 24),
        t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Ke(r, t.length)
      );
    },
    m: function (a, t, n) {
      return t === "mo"
        ? n.ordinalNumber(a.getUTCMinutes(), { unit: "minute" })
        : Ca.m(a, t);
    },
    s: function (a, t, n) {
      return t === "so"
        ? n.ordinalNumber(a.getUTCSeconds(), { unit: "second" })
        : Ca.s(a, t);
    },
    S: function (a, t) {
      return Ca.S(a, t);
    },
    X: function (a, t, n, r) {
      var i = r._originalDate || a,
        o = i.getTimezoneOffset();
      if (o === 0) return "Z";
      switch (t) {
        case "X":
          return kl(o);
        case "XXXX":
        case "XX":
          return Na(o);
        case "XXXXX":
        case "XXX":
        default:
          return Na(o, ":");
      }
    },
    x: function (a, t, n, r) {
      var i = r._originalDate || a,
        o = i.getTimezoneOffset();
      switch (t) {
        case "x":
          return kl(o);
        case "xxxx":
        case "xx":
          return Na(o);
        case "xxxxx":
        case "xxx":
        default:
          return Na(o, ":");
      }
    },
    O: function (a, t, n, r) {
      var i = r._originalDate || a,
        o = i.getTimezoneOffset();
      switch (t) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + wl(o, ":");
        case "OOOO":
        default:
          return "GMT" + Na(o, ":");
      }
    },
    z: function (a, t, n, r) {
      var i = r._originalDate || a,
        o = i.getTimezoneOffset();
      switch (t) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + wl(o, ":");
        case "zzzz":
        default:
          return "GMT" + Na(o, ":");
      }
    },
    t: function (a, t, n, r) {
      var i = r._originalDate || a,
        o = Math.floor(i.getTime() / 1e3);
      return Ke(o, t.length);
    },
    T: function (a, t, n, r) {
      var i = r._originalDate || a,
        o = i.getTime();
      return Ke(o, t.length);
    },
  };
function wl(e, a) {
  var t = e > 0 ? "-" : "+",
    n = Math.abs(e),
    r = Math.floor(n / 60),
    i = n % 60;
  if (i === 0) return t + String(r);
  var o = a || "";
  return t + String(r) + o + Ke(i, 2);
}
function kl(e, a) {
  if (e % 60 === 0) {
    var t = e > 0 ? "-" : "+";
    return t + Ke(Math.abs(e) / 60, 2);
  }
  return Na(e, a);
}
function Na(e, a) {
  var t = a || "",
    n = e > 0 ? "-" : "+",
    r = Math.abs(e),
    i = Ke(Math.floor(r / 60), 2),
    o = Ke(r % 60, 2);
  return n + i + t + o;
}
var Sl = function (a, t) {
    switch (a) {
      case "P":
        return t.date({ width: "short" });
      case "PP":
        return t.date({ width: "medium" });
      case "PPP":
        return t.date({ width: "long" });
      case "PPPP":
      default:
        return t.date({ width: "full" });
    }
  },
  uc = function (a, t) {
    switch (a) {
      case "p":
        return t.time({ width: "short" });
      case "pp":
        return t.time({ width: "medium" });
      case "ppp":
        return t.time({ width: "long" });
      case "pppp":
      default:
        return t.time({ width: "full" });
    }
  },
  Uw = function (a, t) {
    var n = a.match(/(P+)(p+)?/) || [],
      r = n[1],
      i = n[2];
    if (!i) return Sl(a, t);
    var o;
    switch (r) {
      case "P":
        o = t.dateTime({ width: "short" });
        break;
      case "PP":
        o = t.dateTime({ width: "medium" });
        break;
      case "PPP":
        o = t.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        o = t.dateTime({ width: "full" });
        break;
    }
    return o.replace("{{date}}", Sl(r, t)).replace("{{time}}", uc(i, t));
  },
  jo = { p: uc, P: Uw },
  Vw = ["D", "DD"],
  Fw = ["YY", "YYYY"];
function cc(e) {
  return Vw.indexOf(e) !== -1;
}
function dc(e) {
  return Fw.indexOf(e) !== -1;
}
function Sr(e, a, t) {
  if (e === "YYYY")
    throw new RangeError(
      "Use `yyyy` instead of `YYYY` (in `"
        .concat(a, "`) for formatting years to the input `")
        .concat(
          t,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "YY")
    throw new RangeError(
      "Use `yy` instead of `YY` (in `"
        .concat(a, "`) for formatting years to the input `")
        .concat(
          t,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "D")
    throw new RangeError(
      "Use `d` instead of `D` (in `"
        .concat(a, "`) for formatting days of the month to the input `")
        .concat(
          t,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "DD")
    throw new RangeError(
      "Use `dd` instead of `DD` (in `"
        .concat(a, "`) for formatting days of the month to the input `")
        .concat(
          t,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
}
var Yw = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  qw = function (a, t, n) {
    var r,
      i = Yw[a];
    return (
      typeof i == "string"
        ? (r = i)
        : t === 1
        ? (r = i.one)
        : (r = i.other.replace("{{count}}", t.toString())),
      n != null && n.addSuffix
        ? n.comparison && n.comparison > 0
          ? "in " + r
          : r + " ago"
        : r
    );
  };
const jw = qw;
function uo(e) {
  return function () {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      t = a.width ? String(a.width) : e.defaultWidth,
      n = e.formats[t] || e.formats[e.defaultWidth];
    return n;
  };
}
var Ww = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  Gw = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  zw = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  Kw = {
    date: uo({ formats: Ww, defaultWidth: "full" }),
    time: uo({ formats: Gw, defaultWidth: "full" }),
    dateTime: uo({ formats: zw, defaultWidth: "full" }),
  };
const Qw = Kw;
var Zw = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  Xw = function (a, t, n, r) {
    return Zw[a];
  };
const Jw = Xw;
function In(e) {
  return function (a, t) {
    var n = t != null && t.context ? String(t.context) : "standalone",
      r;
    if (n === "formatting" && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth,
        o = t != null && t.width ? String(t.width) : i;
      r = e.formattingValues[o] || e.formattingValues[i];
    } else {
      var s = e.defaultWidth,
        l = t != null && t.width ? String(t.width) : e.defaultWidth;
      r = e.values[l] || e.values[s];
    }
    var d = e.argumentCallback ? e.argumentCallback(a) : a;
    return r[d];
  };
}
var e1 = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  t1 = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  a1 = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  n1 = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  r1 = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  o1 = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  i1 = function (a, t) {
    var n = Number(a),
      r = n % 100;
    if (r > 20 || r < 10)
      switch (r % 10) {
        case 1:
          return n + "st";
        case 2:
          return n + "nd";
        case 3:
          return n + "rd";
      }
    return n + "th";
  },
  s1 = {
    ordinalNumber: i1,
    era: In({ values: e1, defaultWidth: "wide" }),
    quarter: In({
      values: t1,
      defaultWidth: "wide",
      argumentCallback: function (a) {
        return a - 1;
      },
    }),
    month: In({ values: a1, defaultWidth: "wide" }),
    day: In({ values: n1, defaultWidth: "wide" }),
    dayPeriod: In({
      values: r1,
      defaultWidth: "wide",
      formattingValues: o1,
      defaultFormattingWidth: "wide",
    }),
  };
const l1 = s1;
function En(e) {
  return function (a) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = t.width,
      r = (n && e.matchPatterns[n]) || e.matchPatterns[e.defaultMatchWidth],
      i = a.match(r);
    if (!i) return null;
    var o = i[0],
      s = (n && e.parsePatterns[n]) || e.parsePatterns[e.defaultParseWidth],
      l = Array.isArray(s)
        ? c1(s, function (u) {
            return u.test(o);
          })
        : u1(s, function (u) {
            return u.test(o);
          }),
      d;
    (d = e.valueCallback ? e.valueCallback(l) : l),
      (d = t.valueCallback ? t.valueCallback(d) : d);
    var p = a.slice(o.length);
    return { value: d, rest: p };
  };
}
function u1(e, a) {
  for (var t in e) if (e.hasOwnProperty(t) && a(e[t])) return t;
}
function c1(e, a) {
  for (var t = 0; t < e.length; t++) if (a(e[t])) return t;
}
function d1(e) {
  return function (a) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = a.match(e.matchPattern);
    if (!n) return null;
    var r = n[0],
      i = a.match(e.parsePattern);
    if (!i) return null;
    var o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    o = t.valueCallback ? t.valueCallback(o) : o;
    var s = a.slice(r.length);
    return { value: o, rest: s };
  };
}
var m1 = /^(\d+)(th|st|nd|rd)?/i,
  p1 = /\d+/i,
  g1 = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  h1 = { any: [/^b/i, /^(a|c)/i] },
  f1 = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  v1 = { any: [/1/i, /2/i, /3/i, /4/i] },
  y1 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  b1 = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  _1 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  w1 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  k1 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  S1 = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  C1 = {
    ordinalNumber: d1({
      matchPattern: m1,
      parsePattern: p1,
      valueCallback: function (a) {
        return parseInt(a, 10);
      },
    }),
    era: En({
      matchPatterns: g1,
      defaultMatchWidth: "wide",
      parsePatterns: h1,
      defaultParseWidth: "any",
    }),
    quarter: En({
      matchPatterns: f1,
      defaultMatchWidth: "wide",
      parsePatterns: v1,
      defaultParseWidth: "any",
      valueCallback: function (a) {
        return a + 1;
      },
    }),
    month: En({
      matchPatterns: y1,
      defaultMatchWidth: "wide",
      parsePatterns: b1,
      defaultParseWidth: "any",
    }),
    day: En({
      matchPatterns: _1,
      defaultMatchWidth: "wide",
      parsePatterns: w1,
      defaultParseWidth: "any",
    }),
    dayPeriod: En({
      matchPatterns: k1,
      defaultMatchWidth: "any",
      parsePatterns: S1,
      defaultParseWidth: "any",
    }),
  };
const T1 = C1;
var P1 = {
  code: "en-US",
  formatDistance: jw,
  formatLong: Qw,
  formatRelative: Jw,
  localize: l1,
  match: T1,
  options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
};
const mc = P1;
var I1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  E1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  D1 = /^'([^]*?)'?$/,
  M1 = /''/g,
  O1 = /[a-zA-Z]/;
function Ia(e, a, t) {
  var n, r, i, o, s, l, d, p, u, g, y, f, _, S, w, b, D, P;
  be(2, arguments);
  var O = String(a),
    N = pa(),
    x =
      (n = (r = t?.locale) !== null && r !== void 0 ? r : N.locale) !== null &&
      n !== void 0
        ? n
        : mc,
    X = Te(
      (i =
        (o =
          (s =
            (l = t?.firstWeekContainsDate) !== null && l !== void 0
              ? l
              : t == null ||
                (d = t.locale) === null ||
                d === void 0 ||
                (p = d.options) === null ||
                p === void 0
              ? void 0
              : p.firstWeekContainsDate) !== null && s !== void 0
            ? s
            : N.firstWeekContainsDate) !== null && o !== void 0
          ? o
          : (u = N.locale) === null ||
            u === void 0 ||
            (g = u.options) === null ||
            g === void 0
          ? void 0
          : g.firstWeekContainsDate) !== null && i !== void 0
        ? i
        : 1
    );
  if (!(X >= 1 && X <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var W = Te(
    (y =
      (f =
        (_ =
          (S = t?.weekStartsOn) !== null && S !== void 0
            ? S
            : t == null ||
              (w = t.locale) === null ||
              w === void 0 ||
              (b = w.options) === null ||
              b === void 0
            ? void 0
            : b.weekStartsOn) !== null && _ !== void 0
          ? _
          : N.weekStartsOn) !== null && f !== void 0
        ? f
        : (D = N.locale) === null ||
          D === void 0 ||
          (P = D.options) === null ||
          P === void 0
        ? void 0
        : P.weekStartsOn) !== null && y !== void 0
      ? y
      : 0
  );
  if (!(W >= 0 && W <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!x.localize)
    throw new RangeError("locale must contain localize property");
  if (!x.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var T = ke(e);
  if (!Ln(T)) throw new RangeError("Invalid time value");
  var R = kr(T),
    H = oc(T, R),
    q = {
      firstWeekContainsDate: X,
      weekStartsOn: W,
      locale: x,
      _originalDate: T,
    },
    B = O.match(E1)
      .map(function (I) {
        var U = I[0];
        if (U === "p" || U === "P") {
          var V = jo[U];
          return V(I, x.formatLong);
        }
        return I;
      })
      .join("")
      .match(I1)
      .map(function (I) {
        if (I === "''") return "'";
        var U = I[0];
        if (U === "'") return A1(I);
        var V = Hw[U];
        if (V)
          return (
            !(t != null && t.useAdditionalWeekYearTokens) &&
              dc(I) &&
              Sr(I, a, String(e)),
            !(t != null && t.useAdditionalDayOfYearTokens) &&
              cc(I) &&
              Sr(I, a, String(e)),
            V(H, I, x.localize, q)
          );
        if (U.match(O1))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              U +
              "`"
          );
        return I;
      })
      .join("");
  return B;
}
function A1(e) {
  var a = e.match(D1);
  return a ? a[1].replace(M1, "'") : e;
}
function L1(e, a) {
  if (e == null)
    throw new TypeError(
      "assign requires that input parameter not be null or undefined"
    );
  for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
  return e;
}
function B1(e) {
  be(1, arguments);
  var a = ke(e),
    t = a.getDay();
  return t;
}
function R1(e) {
  be(1, arguments);
  var a = ke(e),
    t = a.getFullYear(),
    n = a.getMonth(),
    r = new Date(0);
  return r.setFullYear(t, n + 1, 0), r.setHours(0, 0, 0, 0), r.getDate();
}
function Jt(e) {
  be(1, arguments);
  var a = ke(e),
    t = a.getHours();
  return t;
}
var $1 = 6048e5;
function N1(e) {
  be(1, arguments);
  var a = ke(e),
    t = wr(a).getTime() - Sw(a).getTime();
  return Math.round(t / $1) + 1;
}
function ca(e) {
  be(1, arguments);
  var a = ke(e),
    t = a.getMinutes();
  return t;
}
function Ve(e) {
  be(1, arguments);
  var a = ke(e),
    t = a.getMonth();
  return t;
}
function cn(e) {
  be(1, arguments);
  var a = ke(e),
    t = a.getSeconds();
  return t;
}
function x1(e, a) {
  var t, n, r, i, o, s, l, d;
  be(1, arguments);
  var p = ke(e),
    u = p.getFullYear(),
    g = pa(),
    y = Te(
      (t =
        (n =
          (r =
            (i = a?.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : a == null ||
                (o = a.locale) === null ||
                o === void 0 ||
                (s = o.options) === null ||
                s === void 0
              ? void 0
              : s.firstWeekContainsDate) !== null && r !== void 0
            ? r
            : g.firstWeekContainsDate) !== null && n !== void 0
          ? n
          : (l = g.locale) === null ||
            l === void 0 ||
            (d = l.options) === null ||
            d === void 0
          ? void 0
          : d.firstWeekContainsDate) !== null && t !== void 0
        ? t
        : 1
    );
  if (!(y >= 1 && y <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var f = new Date(0);
  f.setFullYear(u + 1, 0, y), f.setHours(0, 0, 0, 0);
  var _ = Ya(f, a),
    S = new Date(0);
  S.setFullYear(u, 0, y), S.setHours(0, 0, 0, 0);
  var w = Ya(S, a);
  return p.getTime() >= _.getTime()
    ? u + 1
    : p.getTime() >= w.getTime()
    ? u
    : u - 1;
}
function H1(e, a) {
  var t, n, r, i, o, s, l, d;
  be(1, arguments);
  var p = pa(),
    u = Te(
      (t =
        (n =
          (r =
            (i = a?.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : a == null ||
                (o = a.locale) === null ||
                o === void 0 ||
                (s = o.options) === null ||
                s === void 0
              ? void 0
              : s.firstWeekContainsDate) !== null && r !== void 0
            ? r
            : p.firstWeekContainsDate) !== null && n !== void 0
          ? n
          : (l = p.locale) === null ||
            l === void 0 ||
            (d = l.options) === null ||
            d === void 0
          ? void 0
          : d.firstWeekContainsDate) !== null && t !== void 0
        ? t
        : 1
    ),
    g = x1(e, a),
    y = new Date(0);
  y.setFullYear(g, 0, u), y.setHours(0, 0, 0, 0);
  var f = Ya(y, a);
  return f;
}
var U1 = 6048e5;
function V1(e, a) {
  be(1, arguments);
  var t = ke(e),
    n = Ya(t, a).getTime() - H1(t, a).getTime();
  return Math.round(n / U1) + 1;
}
function $e(e) {
  return be(1, arguments), ke(e).getFullYear();
}
function jn(e, a) {
  be(2, arguments);
  var t = ke(e),
    n = ke(a);
  return t.getTime() > n.getTime();
}
function Wn(e, a) {
  be(2, arguments);
  var t = ke(e),
    n = ke(a);
  return t.getTime() < n.getTime();
}
function en(e, a) {
  be(2, arguments);
  var t = ke(e),
    n = ke(a);
  return t.getTime() === n.getTime();
}
function Cl(e, a) {
  (a == null || a > e.length) && (a = e.length);
  for (var t = 0, n = new Array(a); t < a; t++) n[t] = e[t];
  return n;
}
function F1(e, a) {
  if (e) {
    if (typeof e == "string") return Cl(e, a);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === "Object" && e.constructor && (t = e.constructor.name),
      t === "Map" || t === "Set")
    )
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Cl(e, a);
  }
}
function Tl(e, a) {
  var t = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!t) {
    if (
      Array.isArray(e) ||
      (t = F1(e)) ||
      (a && e && typeof e.length == "number")
    ) {
      t && (e = t);
      var n = 0,
        r = function () {};
      return {
        s: r,
        n: function () {
          return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
        },
        e: function (d) {
          throw d;
        },
        f: r,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0,
    o = !1,
    s;
  return {
    s: function () {
      t = t.call(e);
    },
    n: function () {
      var d = t.next();
      return (i = d.done), d;
    },
    e: function (d) {
      (o = !0), (s = d);
    },
    f: function () {
      try {
        !i && t.return != null && t.return();
      } finally {
        if (o) throw s;
      }
    },
  };
}
function ye(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Wo(e, a) {
  return (
    (Wo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n;
        }),
    Wo(e, a)
  );
}
function Fe(e, a) {
  if (typeof a != "function" && a !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(a && a.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    a && Wo(e, a);
}
function Cr(e) {
  return (
    (Cr = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Cr(e)
  );
}
function pc() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (pc = function () {
    return !!e;
  })();
}
function Y1(e, a) {
  if (a && (Gt(a) === "object" || typeof a == "function")) return a;
  if (a !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return ye(e);
}
function Ye(e) {
  var a = pc();
  return function () {
    var n = Cr(e),
      r;
    if (a) {
      var i = Cr(this).constructor;
      r = Reflect.construct(n, arguments, i);
    } else r = n.apply(this, arguments);
    return Y1(this, r);
  };
}
function xe(e, a) {
  if (!(e instanceof a))
    throw new TypeError("Cannot call a class as a function");
}
function q1(e, a) {
  if (Gt(e) != "object" || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, a || "default");
    if (Gt(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(e);
}
function gc(e) {
  var a = q1(e, "string");
  return Gt(a) == "symbol" ? a : String(a);
}
function Pl(e, a) {
  for (var t = 0; t < a.length; t++) {
    var n = a[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(e, gc(n.key), n);
  }
}
function He(e, a, t) {
  return (
    a && Pl(e.prototype, a),
    t && Pl(e, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function ve(e, a, t) {
  return (
    (a = gc(a)),
    a in e
      ? Object.defineProperty(e, a, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[a] = t),
    e
  );
}
var j1 = 10,
  hc = (function () {
    function e() {
      xe(this, e), ve(this, "priority", void 0), ve(this, "subPriority", 0);
    }
    return (
      He(e, [
        {
          key: "validate",
          value: function (t, n) {
            return !0;
          },
        },
      ]),
      e
    );
  })(),
  W1 = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t(n, r, i, o, s) {
      var l;
      return (
        xe(this, t),
        (l = a.call(this)),
        (l.value = n),
        (l.validateValue = r),
        (l.setValue = i),
        (l.priority = o),
        s && (l.subPriority = s),
        l
      );
    }
    return (
      He(t, [
        {
          key: "validate",
          value: function (r, i) {
            return this.validateValue(r, this.value, i);
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return this.setValue(r, i, this.value, o);
          },
        },
      ]),
      t
    );
  })(hc),
  G1 = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", j1),
        ve(ye(n), "subPriority", -1),
        n
      );
    }
    return (
      He(t, [
        {
          key: "set",
          value: function (r, i) {
            if (i.timestampIsSet) return r;
            var o = new Date(0);
            return (
              o.setFullYear(
                r.getUTCFullYear(),
                r.getUTCMonth(),
                r.getUTCDate()
              ),
              o.setHours(
                r.getUTCHours(),
                r.getUTCMinutes(),
                r.getUTCSeconds(),
                r.getUTCMilliseconds()
              ),
              o
            );
          },
        },
      ]),
      t
    );
  })(hc),
  Ge = (function () {
    function e() {
      xe(this, e),
        ve(this, "incompatibleTokens", void 0),
        ve(this, "priority", void 0),
        ve(this, "subPriority", void 0);
    }
    return (
      He(e, [
        {
          key: "run",
          value: function (t, n, r, i) {
            var o = this.parse(t, n, r, i);
            return o
              ? {
                  setter: new W1(
                    o.value,
                    this.validate,
                    this.set,
                    this.priority,
                    this.subPriority
                  ),
                  rest: o.rest,
                }
              : null;
          },
        },
        {
          key: "validate",
          value: function (t, n, r) {
            return !0;
          },
        },
      ]),
      e
    );
  })(),
  z1 = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 140),
        ve(ye(n), "incompatibleTokens", ["R", "u", "t", "T"]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            switch (i) {
              case "G":
              case "GG":
              case "GGG":
                return (
                  o.era(r, { width: "abbreviated" }) ||
                  o.era(r, { width: "narrow" })
                );
              case "GGGGG":
                return o.era(r, { width: "narrow" });
              case "GGGG":
              default:
                return (
                  o.era(r, { width: "wide" }) ||
                  o.era(r, { width: "abbreviated" }) ||
                  o.era(r, { width: "narrow" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return (
              (i.era = o),
              r.setUTCFullYear(o, 0, 1),
              r.setUTCHours(0, 0, 0, 0),
              r
            );
          },
        },
      ]),
      t
    );
  })(Ge),
  ut = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/,
  },
  oa = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
  };
function ct(e, a) {
  return e && { value: a(e.value), rest: e.rest };
}
function nt(e, a) {
  var t = a.match(e);
  return t ? { value: parseInt(t[0], 10), rest: a.slice(t[0].length) } : null;
}
function ia(e, a) {
  var t = a.match(e);
  if (!t) return null;
  if (t[0] === "Z") return { value: 0, rest: a.slice(1) };
  var n = t[1] === "+" ? 1 : -1,
    r = t[2] ? parseInt(t[2], 10) : 0,
    i = t[3] ? parseInt(t[3], 10) : 0,
    o = t[5] ? parseInt(t[5], 10) : 0;
  return { value: n * (r * Di + i * Ei + o * Iw), rest: a.slice(t[0].length) };
}
function fc(e) {
  return nt(ut.anyDigitsSigned, e);
}
function st(e, a) {
  switch (e) {
    case 1:
      return nt(ut.singleDigit, a);
    case 2:
      return nt(ut.twoDigits, a);
    case 3:
      return nt(ut.threeDigits, a);
    case 4:
      return nt(ut.fourDigits, a);
    default:
      return nt(new RegExp("^\\d{1," + e + "}"), a);
  }
}
function Tr(e, a) {
  switch (e) {
    case 1:
      return nt(ut.singleDigitSigned, a);
    case 2:
      return nt(ut.twoDigitsSigned, a);
    case 3:
      return nt(ut.threeDigitsSigned, a);
    case 4:
      return nt(ut.fourDigitsSigned, a);
    default:
      return nt(new RegExp("^-?\\d{1," + e + "}"), a);
  }
}
function Oi(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function vc(e, a) {
  var t = a > 0,
    n = t ? a : 1 - a,
    r;
  if (n <= 50) r = e || 100;
  else {
    var i = n + 50,
      o = Math.floor(i / 100) * 100,
      s = e >= i % 100;
    r = e + o - (s ? 100 : 0);
  }
  return t ? r : 1 - r;
}
function yc(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
var K1 = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 130),
        ve(ye(n), "incompatibleTokens", [
          "Y",
          "R",
          "u",
          "w",
          "I",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            var s = function (d) {
              return { year: d, isTwoDigitYear: i === "yy" };
            };
            switch (i) {
              case "y":
                return ct(st(4, r), s);
              case "yo":
                return ct(o.ordinalNumber(r, { unit: "year" }), s);
              default:
                return ct(st(i.length, r), s);
            }
          },
        },
        {
          key: "validate",
          value: function (r, i) {
            return i.isTwoDigitYear || i.year > 0;
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            var s = r.getUTCFullYear();
            if (o.isTwoDigitYear) {
              var l = vc(o.year, s);
              return r.setUTCFullYear(l, 0, 1), r.setUTCHours(0, 0, 0, 0), r;
            }
            var d = !("era" in i) || i.era === 1 ? o.year : 1 - o.year;
            return r.setUTCFullYear(d, 0, 1), r.setUTCHours(0, 0, 0, 0), r;
          },
        },
      ]),
      t
    );
  })(Ge),
  Q1 = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 130),
        ve(ye(n), "incompatibleTokens", [
          "y",
          "R",
          "u",
          "Q",
          "q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "i",
          "t",
          "T",
        ]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            var s = function (d) {
              return { year: d, isTwoDigitYear: i === "YY" };
            };
            switch (i) {
              case "Y":
                return ct(st(4, r), s);
              case "Yo":
                return ct(o.ordinalNumber(r, { unit: "year" }), s);
              default:
                return ct(st(i.length, r), s);
            }
          },
        },
        {
          key: "validate",
          value: function (r, i) {
            return i.isTwoDigitYear || i.year > 0;
          },
        },
        {
          key: "set",
          value: function (r, i, o, s) {
            var l = Mi(r, s);
            if (o.isTwoDigitYear) {
              var d = vc(o.year, l);
              return (
                r.setUTCFullYear(d, 0, s.firstWeekContainsDate),
                r.setUTCHours(0, 0, 0, 0),
                qa(r, s)
              );
            }
            var p = !("era" in i) || i.era === 1 ? o.year : 1 - o.year;
            return (
              r.setUTCFullYear(p, 0, s.firstWeekContainsDate),
              r.setUTCHours(0, 0, 0, 0),
              qa(r, s)
            );
          },
        },
      ]),
      t
    );
  })(Ge),
  Z1 = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 130),
        ve(ye(n), "incompatibleTokens", [
          "G",
          "y",
          "Y",
          "u",
          "Q",
          "q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "e",
          "c",
          "t",
          "T",
        ]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i) {
            return Tr(i === "R" ? 4 : i.length, r);
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            var s = new Date(0);
            return s.setUTCFullYear(o, 0, 4), s.setUTCHours(0, 0, 0, 0), un(s);
          },
        },
      ]),
      t
    );
  })(Ge),
  X1 = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 130),
        ve(ye(n), "incompatibleTokens", [
          "G",
          "y",
          "Y",
          "R",
          "w",
          "I",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i) {
            return Tr(i === "u" ? 4 : i.length, r);
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return r.setUTCFullYear(o, 0, 1), r.setUTCHours(0, 0, 0, 0), r;
          },
        },
      ]),
      t
    );
  })(Ge),
  J1 = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 120),
        ve(ye(n), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            switch (i) {
              case "Q":
              case "QQ":
                return st(i.length, r);
              case "Qo":
                return o.ordinalNumber(r, { unit: "quarter" });
              case "QQQ":
                return (
                  o.quarter(r, {
                    width: "abbreviated",
                    context: "formatting",
                  }) || o.quarter(r, { width: "narrow", context: "formatting" })
                );
              case "QQQQQ":
                return o.quarter(r, { width: "narrow", context: "formatting" });
              case "QQQQ":
              default:
                return (
                  o.quarter(r, { width: "wide", context: "formatting" }) ||
                  o.quarter(r, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  o.quarter(r, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (r, i) {
            return i >= 1 && i <= 4;
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return r.setUTCMonth((o - 1) * 3, 1), r.setUTCHours(0, 0, 0, 0), r;
          },
        },
      ]),
      t
    );
  })(Ge),
  ek = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 120),
        ve(ye(n), "incompatibleTokens", [
          "Y",
          "R",
          "Q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            switch (i) {
              case "q":
              case "qq":
                return st(i.length, r);
              case "qo":
                return o.ordinalNumber(r, { unit: "quarter" });
              case "qqq":
                return (
                  o.quarter(r, {
                    width: "abbreviated",
                    context: "standalone",
                  }) || o.quarter(r, { width: "narrow", context: "standalone" })
                );
              case "qqqqq":
                return o.quarter(r, { width: "narrow", context: "standalone" });
              case "qqqq":
              default:
                return (
                  o.quarter(r, { width: "wide", context: "standalone" }) ||
                  o.quarter(r, {
                    width: "abbreviated",
                    context: "standalone",
                  }) ||
                  o.quarter(r, { width: "narrow", context: "standalone" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (r, i) {
            return i >= 1 && i <= 4;
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return r.setUTCMonth((o - 1) * 3, 1), r.setUTCHours(0, 0, 0, 0), r;
          },
        },
      ]),
      t
    );
  })(Ge),
  tk = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "L",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        ve(ye(n), "priority", 110),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            var s = function (d) {
              return d - 1;
            };
            switch (i) {
              case "M":
                return ct(nt(ut.month, r), s);
              case "MM":
                return ct(st(2, r), s);
              case "Mo":
                return ct(o.ordinalNumber(r, { unit: "month" }), s);
              case "MMM":
                return (
                  o.month(r, { width: "abbreviated", context: "formatting" }) ||
                  o.month(r, { width: "narrow", context: "formatting" })
                );
              case "MMMMM":
                return o.month(r, { width: "narrow", context: "formatting" });
              case "MMMM":
              default:
                return (
                  o.month(r, { width: "wide", context: "formatting" }) ||
                  o.month(r, { width: "abbreviated", context: "formatting" }) ||
                  o.month(r, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (r, i) {
            return i >= 0 && i <= 11;
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return r.setUTCMonth(o, 1), r.setUTCHours(0, 0, 0, 0), r;
          },
        },
      ]),
      t
    );
  })(Ge),
  ak = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 110),
        ve(ye(n), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "M",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            var s = function (d) {
              return d - 1;
            };
            switch (i) {
              case "L":
                return ct(nt(ut.month, r), s);
              case "LL":
                return ct(st(2, r), s);
              case "Lo":
                return ct(o.ordinalNumber(r, { unit: "month" }), s);
              case "LLL":
                return (
                  o.month(r, { width: "abbreviated", context: "standalone" }) ||
                  o.month(r, { width: "narrow", context: "standalone" })
                );
              case "LLLLL":
                return o.month(r, { width: "narrow", context: "standalone" });
              case "LLLL":
              default:
                return (
                  o.month(r, { width: "wide", context: "standalone" }) ||
                  o.month(r, { width: "abbreviated", context: "standalone" }) ||
                  o.month(r, { width: "narrow", context: "standalone" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (r, i) {
            return i >= 0 && i <= 11;
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return r.setUTCMonth(o, 1), r.setUTCHours(0, 0, 0, 0), r;
          },
        },
      ]),
      t
    );
  })(Ge);
function nk(e, a, t) {
  be(2, arguments);
  var n = ke(e),
    r = Te(a),
    i = lc(n, t) - r;
  return n.setUTCDate(n.getUTCDate() - i * 7), n;
}
var rk = (function (e) {
  Fe(t, e);
  var a = Ye(t);
  function t() {
    var n;
    xe(this, t);
    for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
      i[o] = arguments[o];
    return (
      (n = a.call.apply(a, [this].concat(i))),
      ve(ye(n), "priority", 100),
      ve(ye(n), "incompatibleTokens", [
        "y",
        "R",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "I",
        "d",
        "D",
        "i",
        "t",
        "T",
      ]),
      n
    );
  }
  return (
    He(t, [
      {
        key: "parse",
        value: function (r, i, o) {
          switch (i) {
            case "w":
              return nt(ut.week, r);
            case "wo":
              return o.ordinalNumber(r, { unit: "week" });
            default:
              return st(i.length, r);
          }
        },
      },
      {
        key: "validate",
        value: function (r, i) {
          return i >= 1 && i <= 53;
        },
      },
      {
        key: "set",
        value: function (r, i, o, s) {
          return qa(nk(r, o, s), s);
        },
      },
    ]),
    t
  );
})(Ge);
function ok(e, a) {
  be(2, arguments);
  var t = ke(e),
    n = Te(a),
    r = sc(t) - n;
  return t.setUTCDate(t.getUTCDate() - r * 7), t;
}
var ik = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 100),
        ve(ye(n), "incompatibleTokens", [
          "y",
          "Y",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "e",
          "c",
          "t",
          "T",
        ]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            switch (i) {
              case "I":
                return nt(ut.week, r);
              case "Io":
                return o.ordinalNumber(r, { unit: "week" });
              default:
                return st(i.length, r);
            }
          },
        },
        {
          key: "validate",
          value: function (r, i) {
            return i >= 1 && i <= 53;
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return un(ok(r, o));
          },
        },
      ]),
      t
    );
  })(Ge),
  sk = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  lk = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  uk = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 90),
        ve(ye(n), "subPriority", 1),
        ve(ye(n), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            switch (i) {
              case "d":
                return nt(ut.date, r);
              case "do":
                return o.ordinalNumber(r, { unit: "date" });
              default:
                return st(i.length, r);
            }
          },
        },
        {
          key: "validate",
          value: function (r, i) {
            var o = r.getUTCFullYear(),
              s = yc(o),
              l = r.getUTCMonth();
            return s ? i >= 1 && i <= lk[l] : i >= 1 && i <= sk[l];
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return r.setUTCDate(o), r.setUTCHours(0, 0, 0, 0), r;
          },
        },
      ]),
      t
    );
  })(Ge),
  ck = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 90),
        ve(ye(n), "subpriority", 1),
        ve(ye(n), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "E",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            switch (i) {
              case "D":
              case "DD":
                return nt(ut.dayOfYear, r);
              case "Do":
                return o.ordinalNumber(r, { unit: "date" });
              default:
                return st(i.length, r);
            }
          },
        },
        {
          key: "validate",
          value: function (r, i) {
            var o = r.getUTCFullYear(),
              s = yc(o);
            return s ? i >= 1 && i <= 366 : i >= 1 && i <= 365;
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return r.setUTCMonth(0, o), r.setUTCHours(0, 0, 0, 0), r;
          },
        },
      ]),
      t
    );
  })(Ge);
function Ai(e, a, t) {
  var n, r, i, o, s, l, d, p;
  be(2, arguments);
  var u = pa(),
    g = Te(
      (n =
        (r =
          (i =
            (o = t?.weekStartsOn) !== null && o !== void 0
              ? o
              : t == null ||
                (s = t.locale) === null ||
                s === void 0 ||
                (l = s.options) === null ||
                l === void 0
              ? void 0
              : l.weekStartsOn) !== null && i !== void 0
            ? i
            : u.weekStartsOn) !== null && r !== void 0
          ? r
          : (d = u.locale) === null ||
            d === void 0 ||
            (p = d.options) === null ||
            p === void 0
          ? void 0
          : p.weekStartsOn) !== null && n !== void 0
        ? n
        : 0
    );
  if (!(g >= 0 && g <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var y = ke(e),
    f = Te(a),
    _ = y.getUTCDay(),
    S = f % 7,
    w = (S + 7) % 7,
    b = (w < g ? 7 : 0) + f - _;
  return y.setUTCDate(y.getUTCDate() + b), y;
}
var dk = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 90),
        ve(ye(n), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            switch (i) {
              case "E":
              case "EE":
              case "EEE":
                return (
                  o.day(r, { width: "abbreviated", context: "formatting" }) ||
                  o.day(r, { width: "short", context: "formatting" }) ||
                  o.day(r, { width: "narrow", context: "formatting" })
                );
              case "EEEEE":
                return o.day(r, { width: "narrow", context: "formatting" });
              case "EEEEEE":
                return (
                  o.day(r, { width: "short", context: "formatting" }) ||
                  o.day(r, { width: "narrow", context: "formatting" })
                );
              case "EEEE":
              default:
                return (
                  o.day(r, { width: "wide", context: "formatting" }) ||
                  o.day(r, { width: "abbreviated", context: "formatting" }) ||
                  o.day(r, { width: "short", context: "formatting" }) ||
                  o.day(r, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (r, i) {
            return i >= 0 && i <= 6;
          },
        },
        {
          key: "set",
          value: function (r, i, o, s) {
            return (r = Ai(r, o, s)), r.setUTCHours(0, 0, 0, 0), r;
          },
        },
      ]),
      t
    );
  })(Ge),
  mk = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 90),
        ve(ye(n), "incompatibleTokens", [
          "y",
          "R",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "E",
          "i",
          "c",
          "t",
          "T",
        ]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o, s) {
            var l = function (p) {
              var u = Math.floor((p - 1) / 7) * 7;
              return ((p + s.weekStartsOn + 6) % 7) + u;
            };
            switch (i) {
              case "e":
              case "ee":
                return ct(st(i.length, r), l);
              case "eo":
                return ct(o.ordinalNumber(r, { unit: "day" }), l);
              case "eee":
                return (
                  o.day(r, { width: "abbreviated", context: "formatting" }) ||
                  o.day(r, { width: "short", context: "formatting" }) ||
                  o.day(r, { width: "narrow", context: "formatting" })
                );
              case "eeeee":
                return o.day(r, { width: "narrow", context: "formatting" });
              case "eeeeee":
                return (
                  o.day(r, { width: "short", context: "formatting" }) ||
                  o.day(r, { width: "narrow", context: "formatting" })
                );
              case "eeee":
              default:
                return (
                  o.day(r, { width: "wide", context: "formatting" }) ||
                  o.day(r, { width: "abbreviated", context: "formatting" }) ||
                  o.day(r, { width: "short", context: "formatting" }) ||
                  o.day(r, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (r, i) {
            return i >= 0 && i <= 6;
          },
        },
        {
          key: "set",
          value: function (r, i, o, s) {
            return (r = Ai(r, o, s)), r.setUTCHours(0, 0, 0, 0), r;
          },
        },
      ]),
      t
    );
  })(Ge),
  pk = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 90),
        ve(ye(n), "incompatibleTokens", [
          "y",
          "R",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "E",
          "i",
          "e",
          "t",
          "T",
        ]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o, s) {
            var l = function (p) {
              var u = Math.floor((p - 1) / 7) * 7;
              return ((p + s.weekStartsOn + 6) % 7) + u;
            };
            switch (i) {
              case "c":
              case "cc":
                return ct(st(i.length, r), l);
              case "co":
                return ct(o.ordinalNumber(r, { unit: "day" }), l);
              case "ccc":
                return (
                  o.day(r, { width: "abbreviated", context: "standalone" }) ||
                  o.day(r, { width: "short", context: "standalone" }) ||
                  o.day(r, { width: "narrow", context: "standalone" })
                );
              case "ccccc":
                return o.day(r, { width: "narrow", context: "standalone" });
              case "cccccc":
                return (
                  o.day(r, { width: "short", context: "standalone" }) ||
                  o.day(r, { width: "narrow", context: "standalone" })
                );
              case "cccc":
              default:
                return (
                  o.day(r, { width: "wide", context: "standalone" }) ||
                  o.day(r, { width: "abbreviated", context: "standalone" }) ||
                  o.day(r, { width: "short", context: "standalone" }) ||
                  o.day(r, { width: "narrow", context: "standalone" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (r, i) {
            return i >= 0 && i <= 6;
          },
        },
        {
          key: "set",
          value: function (r, i, o, s) {
            return (r = Ai(r, o, s)), r.setUTCHours(0, 0, 0, 0), r;
          },
        },
      ]),
      t
    );
  })(Ge);
function gk(e, a) {
  be(2, arguments);
  var t = Te(a);
  t % 7 === 0 && (t = t - 7);
  var n = 1,
    r = ke(e),
    i = r.getUTCDay(),
    o = t % 7,
    s = (o + 7) % 7,
    l = (s < n ? 7 : 0) + t - i;
  return r.setUTCDate(r.getUTCDate() + l), r;
}
var hk = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 90),
        ve(ye(n), "incompatibleTokens", [
          "y",
          "Y",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "E",
          "e",
          "c",
          "t",
          "T",
        ]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            var s = function (d) {
              return d === 0 ? 7 : d;
            };
            switch (i) {
              case "i":
              case "ii":
                return st(i.length, r);
              case "io":
                return o.ordinalNumber(r, { unit: "day" });
              case "iii":
                return ct(
                  o.day(r, { width: "abbreviated", context: "formatting" }) ||
                    o.day(r, { width: "short", context: "formatting" }) ||
                    o.day(r, { width: "narrow", context: "formatting" }),
                  s
                );
              case "iiiii":
                return ct(
                  o.day(r, { width: "narrow", context: "formatting" }),
                  s
                );
              case "iiiiii":
                return ct(
                  o.day(r, { width: "short", context: "formatting" }) ||
                    o.day(r, { width: "narrow", context: "formatting" }),
                  s
                );
              case "iiii":
              default:
                return ct(
                  o.day(r, { width: "wide", context: "formatting" }) ||
                    o.day(r, { width: "abbreviated", context: "formatting" }) ||
                    o.day(r, { width: "short", context: "formatting" }) ||
                    o.day(r, { width: "narrow", context: "formatting" }),
                  s
                );
            }
          },
        },
        {
          key: "validate",
          value: function (r, i) {
            return i >= 1 && i <= 7;
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return (r = gk(r, o)), r.setUTCHours(0, 0, 0, 0), r;
          },
        },
      ]),
      t
    );
  })(Ge),
  fk = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 80),
        ve(ye(n), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            switch (i) {
              case "a":
              case "aa":
              case "aaa":
                return (
                  o.dayPeriod(r, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  o.dayPeriod(r, { width: "narrow", context: "formatting" })
                );
              case "aaaaa":
                return o.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting",
                });
              case "aaaa":
              default:
                return (
                  o.dayPeriod(r, { width: "wide", context: "formatting" }) ||
                  o.dayPeriod(r, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  o.dayPeriod(r, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return r.setUTCHours(Oi(o), 0, 0, 0), r;
          },
        },
      ]),
      t
    );
  })(Ge),
  vk = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 80),
        ve(ye(n), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            switch (i) {
              case "b":
              case "bb":
              case "bbb":
                return (
                  o.dayPeriod(r, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  o.dayPeriod(r, { width: "narrow", context: "formatting" })
                );
              case "bbbbb":
                return o.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting",
                });
              case "bbbb":
              default:
                return (
                  o.dayPeriod(r, { width: "wide", context: "formatting" }) ||
                  o.dayPeriod(r, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  o.dayPeriod(r, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return r.setUTCHours(Oi(o), 0, 0, 0), r;
          },
        },
      ]),
      t
    );
  })(Ge),
  yk = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 80),
        ve(ye(n), "incompatibleTokens", ["a", "b", "t", "T"]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            switch (i) {
              case "B":
              case "BB":
              case "BBB":
                return (
                  o.dayPeriod(r, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  o.dayPeriod(r, { width: "narrow", context: "formatting" })
                );
              case "BBBBB":
                return o.dayPeriod(r, {
                  width: "narrow",
                  context: "formatting",
                });
              case "BBBB":
              default:
                return (
                  o.dayPeriod(r, { width: "wide", context: "formatting" }) ||
                  o.dayPeriod(r, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  o.dayPeriod(r, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return r.setUTCHours(Oi(o), 0, 0, 0), r;
          },
        },
      ]),
      t
    );
  })(Ge),
  bk = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 70),
        ve(ye(n), "incompatibleTokens", ["H", "K", "k", "t", "T"]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            switch (i) {
              case "h":
                return nt(ut.hour12h, r);
              case "ho":
                return o.ordinalNumber(r, { unit: "hour" });
              default:
                return st(i.length, r);
            }
          },
        },
        {
          key: "validate",
          value: function (r, i) {
            return i >= 1 && i <= 12;
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            var s = r.getUTCHours() >= 12;
            return (
              s && o < 12
                ? r.setUTCHours(o + 12, 0, 0, 0)
                : !s && o === 12
                ? r.setUTCHours(0, 0, 0, 0)
                : r.setUTCHours(o, 0, 0, 0),
              r
            );
          },
        },
      ]),
      t
    );
  })(Ge),
  _k = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 70),
        ve(ye(n), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            switch (i) {
              case "H":
                return nt(ut.hour23h, r);
              case "Ho":
                return o.ordinalNumber(r, { unit: "hour" });
              default:
                return st(i.length, r);
            }
          },
        },
        {
          key: "validate",
          value: function (r, i) {
            return i >= 0 && i <= 23;
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return r.setUTCHours(o, 0, 0, 0), r;
          },
        },
      ]),
      t
    );
  })(Ge),
  wk = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 70),
        ve(ye(n), "incompatibleTokens", ["h", "H", "k", "t", "T"]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            switch (i) {
              case "K":
                return nt(ut.hour11h, r);
              case "Ko":
                return o.ordinalNumber(r, { unit: "hour" });
              default:
                return st(i.length, r);
            }
          },
        },
        {
          key: "validate",
          value: function (r, i) {
            return i >= 0 && i <= 11;
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            var s = r.getUTCHours() >= 12;
            return (
              s && o < 12
                ? r.setUTCHours(o + 12, 0, 0, 0)
                : r.setUTCHours(o, 0, 0, 0),
              r
            );
          },
        },
      ]),
      t
    );
  })(Ge),
  kk = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 70),
        ve(ye(n), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            switch (i) {
              case "k":
                return nt(ut.hour24h, r);
              case "ko":
                return o.ordinalNumber(r, { unit: "hour" });
              default:
                return st(i.length, r);
            }
          },
        },
        {
          key: "validate",
          value: function (r, i) {
            return i >= 1 && i <= 24;
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            var s = o <= 24 ? o % 24 : o;
            return r.setUTCHours(s, 0, 0, 0), r;
          },
        },
      ]),
      t
    );
  })(Ge),
  Sk = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 60),
        ve(ye(n), "incompatibleTokens", ["t", "T"]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            switch (i) {
              case "m":
                return nt(ut.minute, r);
              case "mo":
                return o.ordinalNumber(r, { unit: "minute" });
              default:
                return st(i.length, r);
            }
          },
        },
        {
          key: "validate",
          value: function (r, i) {
            return i >= 0 && i <= 59;
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return r.setUTCMinutes(o, 0, 0), r;
          },
        },
      ]),
      t
    );
  })(Ge),
  Ck = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 50),
        ve(ye(n), "incompatibleTokens", ["t", "T"]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i, o) {
            switch (i) {
              case "s":
                return nt(ut.second, r);
              case "so":
                return o.ordinalNumber(r, { unit: "second" });
              default:
                return st(i.length, r);
            }
          },
        },
        {
          key: "validate",
          value: function (r, i) {
            return i >= 0 && i <= 59;
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return r.setUTCSeconds(o, 0), r;
          },
        },
      ]),
      t
    );
  })(Ge),
  Tk = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 30),
        ve(ye(n), "incompatibleTokens", ["t", "T"]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i) {
            var o = function (l) {
              return Math.floor(l * Math.pow(10, -i.length + 3));
            };
            return ct(st(i.length, r), o);
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return r.setUTCMilliseconds(o), r;
          },
        },
      ]),
      t
    );
  })(Ge),
  Pk = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 10),
        ve(ye(n), "incompatibleTokens", ["t", "T", "x"]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i) {
            switch (i) {
              case "X":
                return ia(oa.basicOptionalMinutes, r);
              case "XX":
                return ia(oa.basic, r);
              case "XXXX":
                return ia(oa.basicOptionalSeconds, r);
              case "XXXXX":
                return ia(oa.extendedOptionalSeconds, r);
              case "XXX":
              default:
                return ia(oa.extended, r);
            }
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return i.timestampIsSet ? r : new Date(r.getTime() - o);
          },
        },
      ]),
      t
    );
  })(Ge),
  Ik = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 10),
        ve(ye(n), "incompatibleTokens", ["t", "T", "X"]),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r, i) {
            switch (i) {
              case "x":
                return ia(oa.basicOptionalMinutes, r);
              case "xx":
                return ia(oa.basic, r);
              case "xxxx":
                return ia(oa.basicOptionalSeconds, r);
              case "xxxxx":
                return ia(oa.extendedOptionalSeconds, r);
              case "xxx":
              default:
                return ia(oa.extended, r);
            }
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return i.timestampIsSet ? r : new Date(r.getTime() - o);
          },
        },
      ]),
      t
    );
  })(Ge),
  Ek = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 40),
        ve(ye(n), "incompatibleTokens", "*"),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r) {
            return fc(r);
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return [new Date(o * 1e3), { timestampIsSet: !0 }];
          },
        },
      ]),
      t
    );
  })(Ge),
  Dk = (function (e) {
    Fe(t, e);
    var a = Ye(t);
    function t() {
      var n;
      xe(this, t);
      for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
        i[o] = arguments[o];
      return (
        (n = a.call.apply(a, [this].concat(i))),
        ve(ye(n), "priority", 20),
        ve(ye(n), "incompatibleTokens", "*"),
        n
      );
    }
    return (
      He(t, [
        {
          key: "parse",
          value: function (r) {
            return fc(r);
          },
        },
        {
          key: "set",
          value: function (r, i, o) {
            return [new Date(o), { timestampIsSet: !0 }];
          },
        },
      ]),
      t
    );
  })(Ge),
  Mk = {
    G: new z1(),
    y: new K1(),
    Y: new Q1(),
    R: new Z1(),
    u: new X1(),
    Q: new J1(),
    q: new ek(),
    M: new tk(),
    L: new ak(),
    w: new rk(),
    I: new ik(),
    d: new uk(),
    D: new ck(),
    E: new dk(),
    e: new mk(),
    c: new pk(),
    i: new hk(),
    a: new fk(),
    b: new vk(),
    B: new yk(),
    h: new bk(),
    H: new _k(),
    K: new wk(),
    k: new kk(),
    m: new Sk(),
    s: new Ck(),
    S: new Tk(),
    X: new Pk(),
    x: new Ik(),
    t: new Ek(),
    T: new Dk(),
  },
  Ok = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  Ak = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  Lk = /^'([^]*?)'?$/,
  Bk = /''/g,
  Rk = /\S/,
  $k = /[a-zA-Z]/;
function Go(e, a, t, n) {
  var r, i, o, s, l, d, p, u, g, y, f, _, S, w, b, D, P, O;
  be(3, arguments);
  var N = String(e),
    x = String(a),
    X = pa(),
    W =
      (r = (i = n?.locale) !== null && i !== void 0 ? i : X.locale) !== null &&
      r !== void 0
        ? r
        : mc;
  if (!W.match) throw new RangeError("locale must contain match property");
  var T = Te(
    (o =
      (s =
        (l =
          (d = n?.firstWeekContainsDate) !== null && d !== void 0
            ? d
            : n == null ||
              (p = n.locale) === null ||
              p === void 0 ||
              (u = p.options) === null ||
              u === void 0
            ? void 0
            : u.firstWeekContainsDate) !== null && l !== void 0
          ? l
          : X.firstWeekContainsDate) !== null && s !== void 0
        ? s
        : (g = X.locale) === null ||
          g === void 0 ||
          (y = g.options) === null ||
          y === void 0
        ? void 0
        : y.firstWeekContainsDate) !== null && o !== void 0
      ? o
      : 1
  );
  if (!(T >= 1 && T <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var R = Te(
    (f =
      (_ =
        (S =
          (w = n?.weekStartsOn) !== null && w !== void 0
            ? w
            : n == null ||
              (b = n.locale) === null ||
              b === void 0 ||
              (D = b.options) === null ||
              D === void 0
            ? void 0
            : D.weekStartsOn) !== null && S !== void 0
          ? S
          : X.weekStartsOn) !== null && _ !== void 0
        ? _
        : (P = X.locale) === null ||
          P === void 0 ||
          (O = P.options) === null ||
          O === void 0
        ? void 0
        : O.weekStartsOn) !== null && f !== void 0
      ? f
      : 0
  );
  if (!(R >= 0 && R <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (x === "") return N === "" ? ke(t) : new Date(NaN);
  var H = { firstWeekContainsDate: T, weekStartsOn: R, locale: W },
    q = [new G1()],
    B = x
      .match(Ak)
      .map(function (ce) {
        var Q = ce[0];
        if (Q in jo) {
          var fe = jo[Q];
          return fe(ce, W.formatLong);
        }
        return ce;
      })
      .join("")
      .match(Ok),
    I = [],
    U = Tl(B),
    V;
  try {
    var K = function () {
      var Q = V.value;
      !(n != null && n.useAdditionalWeekYearTokens) && dc(Q) && Sr(Q, x, e),
        !(n != null && n.useAdditionalDayOfYearTokens) && cc(Q) && Sr(Q, x, e);
      var fe = Q[0],
        me = Mk[fe];
      if (me) {
        var z = me.incompatibleTokens;
        if (Array.isArray(z)) {
          var oe = I.find(function (de) {
            return z.includes(de.token) || de.token === fe;
          });
          if (oe)
            throw new RangeError(
              "The format string mustn't contain `"
                .concat(oe.fullToken, "` and `")
                .concat(Q, "` at the same time")
            );
        } else if (me.incompatibleTokens === "*" && I.length > 0)
          throw new RangeError(
            "The format string mustn't contain `".concat(
              Q,
              "` and any other token at the same time"
            )
          );
        I.push({ token: fe, fullToken: Q });
        var Pe = me.run(N, Q, W.match, H);
        if (!Pe) return { v: new Date(NaN) };
        q.push(Pe.setter), (N = Pe.rest);
      } else {
        if (fe.match($k))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              fe +
              "`"
          );
        if (
          (Q === "''" ? (Q = "'") : fe === "'" && (Q = Nk(Q)),
          N.indexOf(Q) === 0)
        )
          N = N.slice(Q.length);
        else return { v: new Date(NaN) };
      }
    };
    for (U.s(); !(V = U.n()).done; ) {
      var k = K();
      if (Gt(k) === "object") return k.v;
    }
  } catch (ce) {
    U.e(ce);
  } finally {
    U.f();
  }
  if (N.length > 0 && Rk.test(N)) return new Date(NaN);
  var h = q
      .map(function (ce) {
        return ce.priority;
      })
      .sort(function (ce, Q) {
        return Q - ce;
      })
      .filter(function (ce, Q, fe) {
        return fe.indexOf(ce) === Q;
      })
      .map(function (ce) {
        return q
          .filter(function (Q) {
            return Q.priority === ce;
          })
          .sort(function (Q, fe) {
            return fe.subPriority - Q.subPriority;
          });
      })
      .map(function (ce) {
        return ce[0];
      }),
    F = ke(t);
  if (isNaN(F.getTime())) return new Date(NaN);
  var j = oc(F, kr(F)),
    ae = {},
    le = Tl(h),
    Y;
  try {
    for (le.s(); !(Y = le.n()).done; ) {
      var C = Y.value;
      if (!C.validate(j, H)) return new Date(NaN);
      var re = C.set(j, ae, H);
      Array.isArray(re) ? ((j = re[0]), L1(ae, re[1])) : (j = re);
    }
  } catch (ce) {
    le.e(ce);
  } finally {
    le.f();
  }
  return j;
}
function Nk(e) {
  return e.match(Lk)[1].replace(Bk, "'");
}
function Il(e, a) {
  be(2, arguments);
  var t = qn(e),
    n = qn(a);
  return t.getTime() === n.getTime();
}
function xk(e, a) {
  be(2, arguments);
  var t = Te(a);
  return va(e, -t);
}
function Hk(e, a) {
  var t;
  be(1, arguments);
  var n = Te((t = a?.additionalDigits) !== null && t !== void 0 ? t : 2);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (
    !(
      typeof e == "string" ||
      Object.prototype.toString.call(e) === "[object String]"
    )
  )
    return new Date(NaN);
  var r = Yk(e),
    i;
  if (r.date) {
    var o = qk(r.date, n);
    i = jk(o.restDateString, o.year);
  }
  if (!i || isNaN(i.getTime())) return new Date(NaN);
  var s = i.getTime(),
    l = 0,
    d;
  if (r.time && ((l = Wk(r.time)), isNaN(l))) return new Date(NaN);
  if (r.timezone) {
    if (((d = Gk(r.timezone)), isNaN(d))) return new Date(NaN);
  } else {
    var p = new Date(s + l),
      u = new Date(0);
    return (
      u.setFullYear(p.getUTCFullYear(), p.getUTCMonth(), p.getUTCDate()),
      u.setHours(
        p.getUTCHours(),
        p.getUTCMinutes(),
        p.getUTCSeconds(),
        p.getUTCMilliseconds()
      ),
      u
    );
  }
  return new Date(s + l + d);
}
var sr = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/,
  },
  Uk = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  Vk =
    /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  Fk = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Yk(e) {
  var a = {},
    t = e.split(sr.dateTimeDelimiter),
    n;
  if (t.length > 2) return a;
  if (
    (/:/.test(t[0])
      ? (n = t[0])
      : ((a.date = t[0]),
        (n = t[1]),
        sr.timeZoneDelimiter.test(a.date) &&
          ((a.date = e.split(sr.timeZoneDelimiter)[0]),
          (n = e.substr(a.date.length, e.length)))),
    n)
  ) {
    var r = sr.timezone.exec(n);
    r ? ((a.time = n.replace(r[1], "")), (a.timezone = r[1])) : (a.time = n);
  }
  return a;
}
function qk(e, a) {
  var t = new RegExp(
      "^(?:(\\d{4}|[+-]\\d{" +
        (4 + a) +
        "})|(\\d{2}|[+-]\\d{" +
        (2 + a) +
        "})$)"
    ),
    n = e.match(t);
  if (!n) return { year: NaN, restDateString: "" };
  var r = n[1] ? parseInt(n[1]) : null,
    i = n[2] ? parseInt(n[2]) : null;
  return {
    year: i === null ? r : i * 100,
    restDateString: e.slice((n[1] || n[2]).length),
  };
}
function jk(e, a) {
  if (a === null) return new Date(NaN);
  var t = e.match(Uk);
  if (!t) return new Date(NaN);
  var n = !!t[4],
    r = Dn(t[1]),
    i = Dn(t[2]) - 1,
    o = Dn(t[3]),
    s = Dn(t[4]),
    l = Dn(t[5]) - 1;
  if (n) return Xk(a, s, l) ? zk(a, s, l) : new Date(NaN);
  var d = new Date(0);
  return !Qk(a, i, o) || !Zk(a, r)
    ? new Date(NaN)
    : (d.setUTCFullYear(a, i, Math.max(r, o)), d);
}
function Dn(e) {
  return e ? parseInt(e) : 1;
}
function Wk(e) {
  var a = e.match(Vk);
  if (!a) return NaN;
  var t = co(a[1]),
    n = co(a[2]),
    r = co(a[3]);
  return Jk(t, n, r) ? t * Di + n * Ei + r * 1e3 : NaN;
}
function co(e) {
  return (e && parseFloat(e.replace(",", "."))) || 0;
}
function Gk(e) {
  if (e === "Z") return 0;
  var a = e.match(Fk);
  if (!a) return 0;
  var t = a[1] === "+" ? -1 : 1,
    n = parseInt(a[2]),
    r = (a[3] && parseInt(a[3])) || 0;
  return eS(n, r) ? t * (n * Di + r * Ei) : NaN;
}
function zk(e, a, t) {
  var n = new Date(0);
  n.setUTCFullYear(e, 0, 4);
  var r = n.getUTCDay() || 7,
    i = (a - 1) * 7 + t + 1 - r;
  return n.setUTCDate(n.getUTCDate() + i), n;
}
var Kk = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function bc(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function Qk(e, a, t) {
  return a >= 0 && a <= 11 && t >= 1 && t <= (Kk[a] || (bc(e) ? 29 : 28));
}
function Zk(e, a) {
  return a >= 1 && a <= (bc(e) ? 366 : 365);
}
function Xk(e, a, t) {
  return a >= 1 && a <= 53 && t >= 0 && t <= 6;
}
function Jk(e, a, t) {
  return e === 24
    ? a === 0 && t === 0
    : t >= 0 && t < 60 && a >= 0 && a < 60 && e >= 0 && e < 25;
}
function eS(e, a) {
  return a >= 0 && a <= 59;
}
function _c(e, a) {
  be(2, arguments);
  var t = ke(e),
    n = Te(a),
    r = t.getFullYear(),
    i = t.getDate(),
    o = new Date(0);
  o.setFullYear(r, n, 15), o.setHours(0, 0, 0, 0);
  var s = R1(o);
  return t.setMonth(n, Math.min(i, s)), t;
}
function et(e, a) {
  if ((be(2, arguments), Gt(a) !== "object" || a === null))
    throw new RangeError("values parameter must be an object");
  var t = ke(e);
  return isNaN(t.getTime())
    ? new Date(NaN)
    : (a.year != null && t.setFullYear(a.year),
      a.month != null && (t = _c(t, a.month)),
      a.date != null && t.setDate(Te(a.date)),
      a.hours != null && t.setHours(Te(a.hours)),
      a.minutes != null && t.setMinutes(Te(a.minutes)),
      a.seconds != null && t.setSeconds(Te(a.seconds)),
      a.milliseconds != null && t.setMilliseconds(Te(a.milliseconds)),
      t);
}
function wc(e, a) {
  be(2, arguments);
  var t = ke(e),
    n = Te(a);
  return t.setHours(n), t;
}
function Li(e, a) {
  be(2, arguments);
  var t = ke(e),
    n = Te(a);
  return t.setMilliseconds(n), t;
}
function kc(e, a) {
  be(2, arguments);
  var t = ke(e),
    n = Te(a);
  return t.setMinutes(n), t;
}
function Bi(e, a) {
  be(2, arguments);
  var t = ke(e),
    n = Te(a);
  return t.setSeconds(n), t;
}
function ua(e, a) {
  be(2, arguments);
  var t = ke(e),
    n = Te(a);
  return isNaN(t.getTime()) ? new Date(NaN) : (t.setFullYear(n), t);
}
function dn(e, a) {
  be(2, arguments);
  var t = Te(a);
  return Xt(e, -t);
}
function tS(e, a) {
  if ((be(2, arguments), !a || Gt(a) !== "object")) return new Date(NaN);
  var t = a.years ? Te(a.years) : 0,
    n = a.months ? Te(a.months) : 0,
    r = a.weeks ? Te(a.weeks) : 0,
    i = a.days ? Te(a.days) : 0,
    o = a.hours ? Te(a.hours) : 0,
    s = a.minutes ? Te(a.minutes) : 0,
    l = a.seconds ? Te(a.seconds) : 0,
    d = dn(e, n + t * 12),
    p = xk(d, i + r * 7),
    u = s + o * 60,
    g = l + u * 60,
    y = g * 1e3,
    f = new Date(p.getTime() - y);
  return f;
}
function Sc(e, a) {
  be(2, arguments);
  var t = Te(a);
  return Ii(e, -t);
}
function yn() {
  return (
    m(),
    v(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        E("path", {
          d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z",
        }),
        E("path", {
          d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z",
        }),
        E("path", {
          d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z",
        }),
        E("path", {
          d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z",
        }),
      ]
    )
  );
}
yn.compatConfig = { MODE: 3 };
function Cc() {
  return (
    m(),
    v(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        E("path", {
          d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z",
        }),
        E("path", {
          d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z",
        }),
      ]
    )
  );
}
Cc.compatConfig = { MODE: 3 };
function Ri() {
  return (
    m(),
    v(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        E("path", {
          d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z",
        }),
      ]
    )
  );
}
Ri.compatConfig = { MODE: 3 };
function $i() {
  return (
    m(),
    v(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        E("path", {
          d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z",
        }),
      ]
    )
  );
}
$i.compatConfig = { MODE: 3 };
function Ni() {
  return (
    m(),
    v(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        E("path", {
          d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z",
        }),
        E("path", {
          d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z",
        }),
      ]
    )
  );
}
Ni.compatConfig = { MODE: 3 };
function xi() {
  return (
    m(),
    v(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        E("path", {
          d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z",
        }),
      ]
    )
  );
}
xi.compatConfig = { MODE: 3 };
function Hi() {
  return (
    m(),
    v(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        E("path", {
          d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z",
        }),
      ]
    )
  );
}
Hi.compatConfig = { MODE: 3 };
function Ui(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Tc = { exports: {} };
(function (e) {
  function a(t) {
    return t && t.__esModule ? t : { default: t };
  }
  (e.exports = a), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(Tc);
var aS = Tc.exports,
  zo = { exports: {} };
(function (e, a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = t);
  function t(n) {
    if (n === null || n === !0 || n === !1) return NaN;
    var r = Number(n);
    return isNaN(r) ? r : r < 0 ? Math.ceil(r) : Math.floor(r);
  }
  e.exports = a.default;
})(zo, zo.exports);
var nS = zo.exports;
const rS = Ui(nS);
var Ko = { exports: {} };
(function (e, a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = t);
  function t(n) {
    var r = new Date(
      Date.UTC(
        n.getFullYear(),
        n.getMonth(),
        n.getDate(),
        n.getHours(),
        n.getMinutes(),
        n.getSeconds(),
        n.getMilliseconds()
      )
    );
    return r.setUTCFullYear(n.getFullYear()), n.getTime() - r.getTime();
  }
  e.exports = a.default;
})(Ko, Ko.exports);
var oS = Ko.exports;
const El = Ui(oS);
function iS(e, a) {
  var t = cS(a);
  return t.formatToParts ? lS(t, e) : uS(t, e);
}
var sS = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 };
function lS(e, a) {
  try {
    for (var t = e.formatToParts(a), n = [], r = 0; r < t.length; r++) {
      var i = sS[t[r].type];
      i >= 0 && (n[i] = parseInt(t[r].value, 10));
    }
    return n;
  } catch (o) {
    if (o instanceof RangeError) return [NaN];
    throw o;
  }
}
function uS(e, a) {
  var t = e.format(a).replace(/\u200E/g, ""),
    n = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(t);
  return [n[3], n[1], n[2], n[4], n[5], n[6]];
}
var mo = {};
function cS(e) {
  if (!mo[e]) {
    var a = new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: "America/New_York",
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date("2014-06-25T04:00:00.123Z")),
      t =
        a === "06/25/2014, 00:00:00" || a === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    mo[e] = t
      ? new Intl.DateTimeFormat("en-US", {
          hour12: !1,
          timeZone: e,
          year: "numeric",
          month: "numeric",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      : new Intl.DateTimeFormat("en-US", {
          hourCycle: "h23",
          timeZone: e,
          year: "numeric",
          month: "numeric",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
  }
  return mo[e];
}
function Vi(e, a, t, n, r, i, o) {
  var s = new Date(0);
  return s.setUTCFullYear(e, a, t), s.setUTCHours(n, r, i, o), s;
}
var Dl = 36e5,
  dS = 6e4,
  po = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/,
  };
function Fi(e, a, t) {
  var n, r;
  if (e === "" || ((n = po.timezoneZ.exec(e)), n)) return 0;
  var i;
  if (((n = po.timezoneHH.exec(e)), n))
    return (i = parseInt(n[1], 10)), Ml(i) ? -(i * Dl) : NaN;
  if (((n = po.timezoneHHMM.exec(e)), n)) {
    i = parseInt(n[1], 10);
    var o = parseInt(n[2], 10);
    return Ml(i, o) ? ((r = Math.abs(i) * Dl + o * dS), i > 0 ? -r : r) : NaN;
  }
  if (gS(e)) {
    a = new Date(a || Date.now());
    var s = t ? a : mS(a),
      l = Qo(s, e),
      d = t ? l : pS(a, l, e);
    return -d;
  }
  return NaN;
}
function mS(e) {
  return Vi(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function Qo(e, a) {
  var t = iS(e, a),
    n = Vi(t[0], t[1] - 1, t[2], t[3] % 24, t[4], t[5], 0).getTime(),
    r = e.getTime(),
    i = r % 1e3;
  return (r -= i >= 0 ? i : 1e3 + i), n - r;
}
function pS(e, a, t) {
  var n = e.getTime(),
    r = n - a,
    i = Qo(new Date(r), t);
  if (a === i) return a;
  r -= i - a;
  var o = Qo(new Date(r), t);
  return i === o ? i : Math.max(i, o);
}
function Ml(e, a) {
  return -23 <= e && e <= 23 && (a == null || (0 <= a && a <= 59));
}
var Ol = {};
function gS(e) {
  if (Ol[e]) return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), (Ol[e] = !0), !0;
  } catch {
    return !1;
  }
}
var Pc =
    /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,
  go = 36e5,
  Al = 6e4,
  hS = 2,
  Tt = {
    dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
    datePattern: /^([0-9W+-]+)(.*)/,
    plainTime: /:/,
    YY: /^(\d{2})$/,
    YYY: [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
    YYYY: /^(\d{4})/,
    YYYYY: [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,
    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
    timeZone: Pc,
  };
function Zo(e, a) {
  if (arguments.length < 1)
    throw new TypeError(
      "1 argument required, but only " + arguments.length + " present"
    );
  if (e === null) return new Date(NaN);
  var t = a || {},
    n = t.additionalDigits == null ? hS : rS(t.additionalDigits);
  if (n !== 2 && n !== 1 && n !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  )
    return new Date(e.getTime());
  if (
    typeof e == "number" ||
    Object.prototype.toString.call(e) === "[object Number]"
  )
    return new Date(e);
  if (
    !(
      typeof e == "string" ||
      Object.prototype.toString.call(e) === "[object String]"
    )
  )
    return new Date(NaN);
  var r = fS(e),
    i = vS(r.date, n),
    o = i.year,
    s = i.restDateString,
    l = yS(s, o);
  if (isNaN(l)) return new Date(NaN);
  if (l) {
    var d = l.getTime(),
      p = 0,
      u;
    if (r.time && ((p = bS(r.time)), isNaN(p))) return new Date(NaN);
    if (r.timeZone || t.timeZone) {
      if (((u = Fi(r.timeZone || t.timeZone, new Date(d + p))), isNaN(u)))
        return new Date(NaN);
    } else (u = El(new Date(d + p))), (u = El(new Date(d + p + u)));
    return new Date(d + p + u);
  } else return new Date(NaN);
}
function fS(e) {
  var a = {},
    t = Tt.dateTimePattern.exec(e),
    n;
  if (
    (t
      ? ((a.date = t[1]), (n = t[3]))
      : ((t = Tt.datePattern.exec(e)),
        t ? ((a.date = t[1]), (n = t[2])) : ((a.date = null), (n = e))),
    n)
  ) {
    var r = Tt.timeZone.exec(n);
    r
      ? ((a.time = n.replace(r[1], "")), (a.timeZone = r[1].trim()))
      : (a.time = n);
  }
  return a;
}
function vS(e, a) {
  var t = Tt.YYY[a],
    n = Tt.YYYYY[a],
    r;
  if (((r = Tt.YYYY.exec(e) || n.exec(e)), r)) {
    var i = r[1];
    return { year: parseInt(i, 10), restDateString: e.slice(i.length) };
  }
  if (((r = Tt.YY.exec(e) || t.exec(e)), r)) {
    var o = r[1];
    return { year: parseInt(o, 10) * 100, restDateString: e.slice(o.length) };
  }
  return { year: null };
}
function yS(e, a) {
  if (a === null) return null;
  var t, n, r, i;
  if (e.length === 0) return (n = new Date(0)), n.setUTCFullYear(a), n;
  if (((t = Tt.MM.exec(e)), t))
    return (
      (n = new Date(0)),
      (r = parseInt(t[1], 10) - 1),
      Bl(a, r) ? (n.setUTCFullYear(a, r), n) : new Date(NaN)
    );
  if (((t = Tt.DDD.exec(e)), t)) {
    n = new Date(0);
    var o = parseInt(t[1], 10);
    return kS(a, o) ? (n.setUTCFullYear(a, 0, o), n) : new Date(NaN);
  }
  if (((t = Tt.MMDD.exec(e)), t)) {
    (n = new Date(0)), (r = parseInt(t[1], 10) - 1);
    var s = parseInt(t[2], 10);
    return Bl(a, r, s) ? (n.setUTCFullYear(a, r, s), n) : new Date(NaN);
  }
  if (((t = Tt.Www.exec(e)), t))
    return (i = parseInt(t[1], 10) - 1), Rl(a, i) ? Ll(a, i) : new Date(NaN);
  if (((t = Tt.WwwD.exec(e)), t)) {
    i = parseInt(t[1], 10) - 1;
    var l = parseInt(t[2], 10) - 1;
    return Rl(a, i, l) ? Ll(a, i, l) : new Date(NaN);
  }
  return null;
}
function bS(e) {
  var a, t, n;
  if (((a = Tt.HH.exec(e)), a))
    return (
      (t = parseFloat(a[1].replace(",", "."))), ho(t) ? (t % 24) * go : NaN
    );
  if (((a = Tt.HHMM.exec(e)), a))
    return (
      (t = parseInt(a[1], 10)),
      (n = parseFloat(a[2].replace(",", "."))),
      ho(t, n) ? (t % 24) * go + n * Al : NaN
    );
  if (((a = Tt.HHMMSS.exec(e)), a)) {
    (t = parseInt(a[1], 10)), (n = parseInt(a[2], 10));
    var r = parseFloat(a[3].replace(",", "."));
    return ho(t, n, r) ? (t % 24) * go + n * Al + r * 1e3 : NaN;
  }
  return null;
}
function Ll(e, a, t) {
  (a = a || 0), (t = t || 0);
  var n = new Date(0);
  n.setUTCFullYear(e, 0, 4);
  var r = n.getUTCDay() || 7,
    i = a * 7 + t + 1 - r;
  return n.setUTCDate(n.getUTCDate() + i), n;
}
var _S = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  wS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Ic(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function Bl(e, a, t) {
  if (a < 0 || a > 11) return !1;
  if (t != null) {
    if (t < 1) return !1;
    var n = Ic(e);
    if ((n && t > wS[a]) || (!n && t > _S[a])) return !1;
  }
  return !0;
}
function kS(e, a) {
  if (a < 1) return !1;
  var t = Ic(e);
  return !((t && a > 366) || (!t && a > 365));
}
function Rl(e, a, t) {
  return !(a < 0 || a > 52 || (t != null && (t < 0 || t > 6)));
}
function ho(e, a, t) {
  return !(
    (e != null && (e < 0 || e >= 25)) ||
    (a != null && (a < 0 || a >= 60)) ||
    (t != null && (t < 0 || t >= 60))
  );
}
var Xo = { exports: {} },
  Jo = { exports: {} };
(function (e, a) {
  Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = t);
  function t(n, r) {
    if (n == null)
      throw new TypeError(
        "assign requires that input parameter not be null or undefined"
      );
    for (var i in r)
      Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
    return n;
  }
  e.exports = a.default;
})(Jo, Jo.exports);
var SS = Jo.exports;
(function (e, a) {
  var t = aS.default;
  Object.defineProperty(a, "__esModule", { value: !0 }), (a.default = r);
  var n = t(SS);
  function r(i) {
    return (0, n.default)({}, i);
  }
  e.exports = a.default;
})(Xo, Xo.exports);
var CS = Xo.exports;
const TS = Ui(CS);
function PS(e, a, t) {
  var n = Zo(e, t),
    r = Fi(a, n, !0),
    i = new Date(n.getTime() - r),
    o = new Date(0);
  return (
    o.setFullYear(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()),
    o.setHours(
      i.getUTCHours(),
      i.getUTCMinutes(),
      i.getUTCSeconds(),
      i.getUTCMilliseconds()
    ),
    o
  );
}
function IS(e, a, t) {
  if (typeof e == "string" && !e.match(Pc)) {
    var n = TS(t);
    return (n.timeZone = a), Zo(e, n);
  }
  var r = Zo(e, t),
    i = Vi(
      r.getFullYear(),
      r.getMonth(),
      r.getDate(),
      r.getHours(),
      r.getMinutes(),
      r.getSeconds(),
      r.getMilliseconds()
    ).getTime(),
    o = Fi(a, new Date(i));
  return new Date(i + o);
}
function $l(e) {
  return (a) =>
    new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" })
      .format(new Date(`2017-01-0${a}T00:00:00+00:00`))
      .slice(0, 2);
}
function ES(e) {
  return (a) =>
    Ia(new Date(`2017-01-0${a}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const DS = (e, a, t) => {
    const n = [1, 2, 3, 4, 5, 6, 7];
    let r;
    if (e !== null)
      try {
        r = n.map(ES(e));
      } catch {
        r = n.map($l(a));
      }
    else r = n.map($l(a));
    const i = r.slice(0, t),
      o = r.slice(t + 1, r.length);
    return [r[t]].concat(...o).concat(...i);
  },
  Yi = (e, a) => {
    const t = [];
    for (let n = +e[0]; n <= +e[1]; n++) t.push({ value: +n, text: `${n}` });
    return a ? t.reverse() : t;
  },
  Ec = (e, a, t) => {
    const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
      const o = i < 10 ? `0${i}` : i;
      return new Date(`2017-${o}-01T00:00:00+00:00`);
    });
    if (e !== null)
      try {
        const i = t === "long" ? "MMMM" : "MMM";
        return n.map((o, s) => {
          const l = Ia(o, i, { locale: e });
          return { text: l.charAt(0).toUpperCase() + l.substring(1), value: s };
        });
      } catch {}
    const r = new Intl.DateTimeFormat(a, { month: t, timeZone: "UTC" });
    return n.map((i, o) => {
      const s = r.format(i);
      return { text: s.charAt(0).toUpperCase() + s.substring(1), value: o };
    });
  },
  MS = (e) =>
    [
      12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11,
    ][e],
  pt = (e) => {
    const a = L(e);
    return a != null && a.$el ? a?.$el : a;
  },
  OS = (e) => Object.assign({ type: "dot" }, e),
  Dc = (e) => (Array.isArray(e) ? !!e[0] && !!e[1] : !1),
  Pr = {
    prop: (e) => `"${e}" prop must be enabled!`,
    dateArr: (e) =>
      `You need to use array as "model-value" binding in order to support "${e}"`,
  },
  ht = (e) => e,
  Nl = (e) => (e === 0 ? e : !e || isNaN(+e) ? null : +e),
  xl = (e) => e === null,
  AS = (e) => {
    if (e)
      return [
        ...e.querySelectorAll("input, button, select, textarea, a[href]"),
      ][0];
  },
  LS = (e) => {
    const a = [],
      t = (n) => n.filter((r) => r);
    for (let n = 0; n < e.length; n += 3) {
      const r = [e[n], e[n + 1], e[n + 2]];
      a.push(t(r));
    }
    return a;
  },
  Gn = (e, a, t) => {
    const n = t != null,
      r = a != null;
    if (!n && !r) return !1;
    const i = +t,
      o = +a;
    return n && r ? +e > i || +e < o : n ? +e > i : r ? +e < o : !1;
  },
  mn = (e, a) =>
    LS(e).map((t) =>
      t.map((n) => {
        const { active: r, disabled: i, isBetween: o, highlighted: s } = a(n);
        return {
          ...n,
          active: r,
          disabled: i,
          className: {
            dp__overlay_cell_active: r,
            dp__overlay_cell: !r,
            dp__overlay_cell_disabled: i,
            dp__overlay_cell_pad: !0,
            dp__overlay_cell_active_disabled: i && r,
            dp__cell_in_between: o,
            "dp--highlighted": s,
          },
        };
      })
    ),
  Ea = (e, a, t = !1) => {
    e &&
      a.allowStopPropagation &&
      (t && e.stopImmediatePropagation(), e.stopPropagation());
  },
  BS = () =>
    [
      "a[href]",
      "area[href]",
      "input:not([disabled]):not([type='hidden'])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "button:not([disabled])",
      "[tabindex]:not([tabindex='-1'])",
      "[data-datepicker-instance]",
    ].join(", ");
function RS(e, a) {
  let t = [...document.querySelectorAll(BS())];
  t = t.filter(
    (r) => !e.contains(r) || r.hasAttribute("data-datepicker-instance")
  );
  const n = t.indexOf(e);
  if (n >= 0 && (a ? n - 1 >= 0 : n + 1 <= t.length))
    return t[n + (a ? -1 : 1)];
}
const $S = (e, a) => {
    let t;
    return function (...n) {
      clearTimeout(t),
        (t = setTimeout(() => {
          e(...n);
        }, a));
    };
  },
  Hl = (e, a, t, n, r) => {
    const i = Go(e, a.slice(0, e.length), new Date());
    return Ln(i) && nc(i)
      ? n || r
        ? i
        : et(i, {
            hours: +t.hours,
            minutes: +t?.minutes,
            seconds: +t?.seconds,
            milliseconds: 0,
          })
      : null;
  },
  NS = (e, a, t, n, r) => {
    const i = Array.isArray(t) ? t[0] : t;
    if (typeof a == "string") return Hl(e, a, i, n, r);
    if (Array.isArray(a)) {
      let o = null;
      for (const s of a) if (((o = Hl(e, s, i, n, r)), o)) break;
      return o;
    }
    return typeof a == "function" ? a(e) : null;
  },
  ne = (e) => (e ? new Date(e) : new Date()),
  xS = (e, a, t) => {
    if (a) {
      const r = (e.getMonth() + 1).toString().padStart(2, "0"),
        i = e.getDate().toString().padStart(2, "0"),
        o = e.getHours().toString().padStart(2, "0"),
        s = e.getMinutes().toString().padStart(2, "0"),
        l = t ? e.getSeconds().toString().padStart(2, "0") : "00";
      return `${e.getFullYear()}-${r}-${i}T${o}:${s}:${l}.000Z`;
    }
    const n = Date.UTC(
      e.getUTCFullYear(),
      e.getUTCMonth(),
      e.getUTCDate(),
      e.getUTCHours(),
      e.getUTCMinutes(),
      e.getUTCSeconds()
    );
    return new Date(n).toISOString();
  },
  kt = (e) => {
    let a = ne(JSON.parse(JSON.stringify(e)));
    return (a = wc(a, 0)), (a = kc(a, 0)), (a = Bi(a, 0)), (a = Li(a, 0)), a;
  },
  Da = (e, a, t, n) => {
    let r = e ? ne(e) : ne();
    return (
      (a || a === 0) && (r = wc(r, +a)),
      (t || t === 0) && (r = kc(r, +t)),
      (n || n === 0) && (r = Bi(r, +n)),
      Li(r, 0)
    );
  },
  yt = (e, a) => (!e || !a ? !1 : Wn(kt(e), kt(a))),
  We = (e, a) => (!e || !a ? !1 : en(kt(e), kt(a))),
  wt = (e, a) => (!e || !a ? !1 : jn(kt(e), kt(a))),
  Nr = (e, a, t) =>
    e != null && e[0] && e != null && e[1]
      ? wt(t, e[0]) && yt(t, e[1])
      : e != null && e[0] && a
      ? (wt(t, e[0]) && yt(t, a)) || (yt(t, e[0]) && wt(t, a))
      : !1,
  Qt = (e) => {
    const a = et(new Date(e), { date: 1 });
    return kt(a);
  },
  fo = (e, a, t) =>
    a && (t || t === 0)
      ? Object.fromEntries(
          ["hours", "minutes", "seconds"].map((n) =>
            n === a ? [n, t] : [n, isNaN(+e[n]) ? void 0 : +e[n]]
          )
        )
      : {
          hours: isNaN(+e.hours) ? void 0 : +e.hours,
          minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
          seconds: isNaN(+e.seconds) ? void 0 : +e.seconds,
        },
  Ua = (e) => ({ hours: Jt(e), minutes: ca(e), seconds: cn(e) }),
  Mc = (e, a) => {
    if (a) {
      const t = $e(ne(a));
      if (t > e) return 12;
      if (t === e) return Ve(ne(a));
    }
  },
  Oc = (e, a) => {
    if (a) {
      const t = $e(ne(a));
      return t < e ? -1 : t === e ? Ve(ne(a)) : void 0;
    }
  },
  pn = (e) => {
    if (e) return $e(ne(e));
  },
  ea = (e, a) => (a ? PS(e, a) : e),
  Ac = (e, a) => (a ? IS(e, a) : e),
  HS = (e) => (e instanceof Date ? e : Hk(e)),
  Lc = (e, a) => {
    const t = wt(e, a) ? a : e,
      n = wt(a, e) ? a : e;
    return rc({ start: t, end: n });
  },
  US = (e) => {
    const a = Xt(e, 1);
    return { month: Ve(a), year: $e(a) };
  },
  hr = (e, a, t) => {
    const n = Ya(ea(e, a), { weekStartsOn: +t }),
      r = Ow(ea(e, a), { weekStartsOn: +t });
    return [n, r];
  },
  Bc = (e, a) => {
    const t = { hours: Jt(ne()), minutes: ca(ne()), seconds: a ? cn(ne()) : 0 };
    return Object.assign(t, e);
  },
  Pa = (e, a, t) => [
    et(ne(e), { date: 1 }),
    et(ne(), { month: a, year: t, date: 1 }),
  ],
  ya = (e, a, t) => {
    let n = e ? ne(e) : ne();
    return (a || a === 0) && (n = _c(n, a)), t && (n = ua(n, t)), n;
  },
  Rc = (e, a, t, n, r) => {
    if (!n || (r && !a) || (!r && !t)) return !1;
    const i = r ? Xt(e, 1) : dn(e, 1),
      o = [Ve(i), $e(i)];
    return r ? !FS(...o, a) : !VS(...o, t);
  },
  VS = (e, a, t) => yt(...Pa(t, e, a)) || We(...Pa(t, e, a)),
  FS = (e, a, t) => wt(...Pa(t, e, a)) || We(...Pa(t, e, a)),
  $c = (e, a, t, n, r, i, o) => {
    if (typeof a == "function" && !o) return a(e);
    const s = t ? { locale: t } : void 0;
    return Array.isArray(e)
      ? `${Ia(e[0], i, s)}${r && !e[1] ? "" : n}${e[1] ? Ia(e[1], i, s) : ""}`
      : Ia(e, i, s);
  },
  Qa = (e) => {
    if (e) return null;
    throw new Error(Pr.prop("partial-range"));
  },
  lr = (e, a) => {
    if (a) return e();
    throw new Error(Pr.prop("range"));
  },
  ei = (e) =>
    Array.isArray(e) ? Ln(e[0]) && (e[1] ? Ln(e[1]) : !0) : e ? Ln(e) : !1,
  YS = (e, a) =>
    et(a ?? ne(), {
      hours: +e.hours || 0,
      minutes: +e.minutes || 0,
      seconds: +e.seconds || 0,
    }),
  vo = (e, a, t, n) => {
    if (!e) return !0;
    if (n) {
      const r = t === "max" ? Wn(e, a) : jn(e, a),
        i = { seconds: 0, milliseconds: 0 };
      return r || en(et(e, i), et(a, i));
    }
    return t === "max"
      ? e.getTime() <= a.getTime()
      : e.getTime() >= a.getTime();
  },
  yo = (e, a, t) => (e ? YS(e, a) : ne(t ?? a)),
  Ul = (e, a, t, n, r) => {
    if (Array.isArray(n)) {
      const o = yo(e, n[0], a),
        s = yo(e, n[1], a);
      return vo(n[0], o, t, !!a) && vo(n[1], s, t, !!a) && r;
    }
    const i = yo(e, n, a);
    return vo(n, i, t, !!a) && r;
  },
  bo = (e) => et(ne(), Ua(e)),
  qS = (e, a) =>
    Array.isArray(e)
      ? e
          .map((t) => ne(t))
          .filter((t) => $e(ne(t)) === a)
          .map((t) => Ve(t))
      : [],
  Nc = (e, a, t) =>
    typeof e == "function"
      ? e({ month: a, year: t })
      : !!e.months.find((n) => n.month === a && n.year === t),
  qi = (e, a) => (typeof e == "function" ? e(a) : e.years.includes(a)),
  Mn = _a({ menuFocused: !1, shiftKeyInMenu: !1 }),
  xc = () => {
    const e = (t) => {
        Mn.menuFocused = t;
      },
      a = (t) => {
        Mn.shiftKeyInMenu !== t && (Mn.shiftKeyInMenu = t);
      };
    return {
      control: c(() => ({
        shiftKeyInMenu: Mn.shiftKeyInMenu,
        menuFocused: Mn.menuFocused,
      })),
      setMenuFocused: e,
      setShiftKey: a,
    };
  },
  Je = _a({
    monthYear: [],
    calendar: [],
    time: [],
    actionRow: [],
    selectionGrid: [],
    timePicker: { 0: [], 1: [] },
    monthPicker: [],
  }),
  _o = A(null),
  ur = A(!1),
  wo = A(!1),
  ko = A(!1),
  So = A(!1),
  Ct = A(0),
  vt = A(0),
  La = () => {
    const e = c(() =>
        ur.value
          ? [...Je.selectionGrid, Je.actionRow].filter((u) => u.length)
          : wo.value
          ? [
              ...Je.timePicker[0],
              ...Je.timePicker[1],
              So.value ? [] : [_o.value],
              Je.actionRow,
            ].filter((u) => u.length)
          : ko.value
          ? [...Je.monthPicker, Je.actionRow]
          : [Je.monthYear, ...Je.calendar, Je.time, Je.actionRow].filter(
              (u) => u.length
            )
      ),
      a = (u) => {
        Ct.value = u ? Ct.value + 1 : Ct.value - 1;
        let g = null;
        e.value[vt.value] && (g = e.value[vt.value][Ct.value]),
          g || (Ct.value = u ? Ct.value - 1 : Ct.value + 1);
      },
      t = (u) => {
        (vt.value === 0 && !u) ||
          (vt.value === e.value.length && u) ||
          ((vt.value = u ? vt.value + 1 : vt.value - 1),
          e.value[vt.value]
            ? e.value[vt.value] &&
              !e.value[vt.value][Ct.value] &&
              Ct.value !== 0 &&
              (Ct.value = e.value[vt.value].length - 1)
            : (vt.value = u ? vt.value - 1 : vt.value + 1));
      },
      n = (u) => {
        let g = null;
        e.value[vt.value] && (g = e.value[vt.value][Ct.value]),
          g
            ? g.focus({ preventScroll: !ur.value })
            : (Ct.value = u ? Ct.value - 1 : Ct.value + 1);
      },
      r = () => {
        a(!0), n(!0);
      },
      i = () => {
        a(!1), n(!1);
      },
      o = () => {
        t(!1), n(!0);
      },
      s = () => {
        t(!0), n(!0);
      },
      l = (u, g) => {
        Je[g] = u;
      },
      d = (u, g) => {
        Je[g] = u;
      },
      p = () => {
        (Ct.value = 0), (vt.value = 0);
      };
    return {
      buildMatrix: l,
      buildMultiLevelMatrix: d,
      setTimePickerBackRef: (u) => {
        _o.value = u;
      },
      setSelectionGrid: (u) => {
        (ur.value = u), p(), u || (Je.selectionGrid = []);
      },
      setTimePicker: (u, g = !1) => {
        (wo.value = u),
          (So.value = g),
          p(),
          u || ((Je.timePicker[0] = []), (Je.timePicker[1] = []));
      },
      setTimePickerElements: (u, g = 0) => {
        Je.timePicker[g] = u;
      },
      arrowRight: r,
      arrowLeft: i,
      arrowUp: o,
      arrowDown: s,
      clearArrowNav: () => {
        (Je.monthYear = []),
          (Je.calendar = []),
          (Je.time = []),
          (Je.actionRow = []),
          (Je.selectionGrid = []),
          (Je.timePicker[0] = []),
          (Je.timePicker[1] = []),
          (ur.value = !1),
          (wo.value = !1),
          (So.value = !1),
          (ko.value = !1),
          p(),
          (_o.value = null);
      },
      setMonthPicker: (u) => {
        (ko.value = u), p();
      },
      refSets: Je,
    };
  },
  Vl = (e) => ({
    menuAppearTop: "dp-menu-appear-top",
    menuAppearBottom: "dp-menu-appear-bottom",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down",
    ...(e ?? {}),
  }),
  jS = (e) => ({
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: (a) => `Increment ${a}`,
    decrementValue: (a) => `Decrement ${a}`,
    openTpOverlay: (a) => `Open ${a} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month",
    nextYear: "Next year",
    prevYear: "Previous year",
    day: () => "",
    ...(e ?? {}),
  }),
  Fl = (e) =>
    e ? (typeof e == "boolean" ? (e ? 2 : 0) : +e >= 2 ? +e : 2) : 0,
  WS = (e) => {
    const a = typeof e == "object" && e,
      t = { static: !0, solo: !1 };
    if (!e) return { ...t, count: Fl(!1) };
    const n = a ? e : {},
      r = a ? n.count ?? !0 : e,
      i = Fl(r);
    return Object.assign(t, n, { count: i });
  },
  GS = (e, a, t) => e || (typeof t == "string" ? t : a),
  zS = (e) => (typeof e == "boolean" ? (e ? Vl({}) : !1) : Vl(e)),
  KS = (e) => {
    const a = {
      enterSubmit: !0,
      tabSubmit: !0,
      openMenu: !0,
      selectOnFocus: !1,
      rangeSeparator: " - ",
    };
    return typeof e == "object"
      ? { ...a, ...(e ?? {}), enabled: !0 }
      : { ...a, enabled: e };
  },
  QS = (e) => ({
    months: [],
    years: [],
    times: { hours: [], minutes: [], seconds: [] },
    ...(e ?? {}),
  }),
  ZS = (e) => ({
    showSelect: !0,
    showCancel: !0,
    showNow: !1,
    showPreview: !0,
    ...(e ?? {}),
  }),
  XS = (e) => {
    const a = { input: !1 };
    return typeof e == "object"
      ? { ...a, ...(e ?? {}), enabled: !0 }
      : { enabled: e, ...a };
  },
  JS = (e) => ({
    allowStopPropagation: !0,
    closeOnScroll: !1,
    modeHeight: 255,
    allowPreventDefault: !1,
    closeOnClearValue: !0,
    closeOnAutoApply: !0,
    noSwipe: !1,
    keepActionRow: !1,
    onClickOutside: void 0,
    tabOutClosesMenu: !0,
    ...(e ?? {}),
  }),
  eC = (e, a, t) => {
    const n = {
      dates: Array.isArray(e) ? e.map((r) => ne(r)) : [],
      years: [],
      months: [],
      quarters: [],
      weeks: [],
      weekdays: a,
      options: { highlightDisabled: t },
    };
    return typeof e == "function" ? e : { ...n, ...(e ?? {}) };
  },
  tC = (e) =>
    typeof e == "object"
      ? { type: e.type, hideOnOffsetDates: e.hideOnOffsetDates ?? !1 }
      : { type: e, hideOnOffsetDates: !1 },
  dt = (e) => {
    const a = () => {
        const w = e.enableSeconds ? ":ss" : "";
        return e.is24 ? `HH:mm${w}` : `hh:mm${w} aa`;
      },
      t = () =>
        e.format
          ? e.format
          : e.monthPicker
          ? "MM/yyyy"
          : e.timePicker
          ? a()
          : e.weekPicker
          ? "MM/dd/yyyy"
          : e.yearPicker
          ? "yyyy"
          : e.quarterPicker
          ? "QQQ/yyyy"
          : e.enableTimePicker
          ? `MM/dd/yyyy, ${a()}`
          : "MM/dd/yyyy",
      n = (w) => Bc(w, e.enableSeconds),
      r = () =>
        e.range
          ? e.startTime && Array.isArray(e.startTime)
            ? [n(e.startTime[0]), n(e.startTime[1])]
            : null
          : e.startTime && !Array.isArray(e.startTime)
          ? n(e.startTime)
          : null,
      i = c(() => WS(e.multiCalendars)),
      o = c(() => r()),
      s = c(() => jS(e.ariaLabels)),
      l = c(() => QS(e.filters)),
      d = c(() => zS(e.transitions)),
      p = c(() => ZS(e.actionRow)),
      u = c(() => GS(e.previewFormat, e.format, t())),
      g = c(() => KS(e.textInput)),
      y = c(() => XS(e.inline)),
      f = c(() => JS(e.config)),
      _ = c(() =>
        eC(e.highlight, e.highlightWeekDays, e.highlightDisabledDays)
      ),
      S = c(() => tC(e.weekNumbers));
    return {
      defaultedTransitions: d,
      defaultedMultiCalendars: i,
      defaultedStartTime: o,
      defaultedAriaLabels: s,
      defaultedFilters: l,
      defaultedActionRow: p,
      defaultedPreviewFormat: u,
      defaultedTextInput: g,
      defaultedInline: y,
      defaultedConfig: f,
      defaultedHighlight: _,
      defaultedWeekNumbers: S,
      getDefaultPattern: t,
      getDefaultStartTime: r,
    };
  },
  aC = (e, a, t) => {
    const n = A(),
      { defaultedTextInput: r, getDefaultPattern: i } = dt(a),
      o = A(""),
      s = fr(a, "format");
    je(n, () => {
      e("internal-model-change", n.value);
    }),
      je(s, () => {
        B();
      });
    const l = (h) => Ac(h, a.timezone),
      d = (h) => ea(h, a.timezone),
      p = (h, F, j = !1) =>
        $c(
          h,
          a.format,
          a.formatLocale,
          r.value.rangeSeparator,
          a.modelAuto,
          F ?? i(),
          j
        ),
      u = (h) =>
        h
          ? a.modelType
            ? U(h)
            : {
                hours: Jt(h),
                minutes: ca(h),
                seconds: a.enableSeconds ? cn(h) : 0,
              }
          : null,
      g = (h) => (a.modelType ? U(h) : { month: Ve(h), year: $e(h) }),
      y = (h) =>
        Array.isArray(h)
          ? a.multiDates
            ? h.map((F) => f(F, ua(ne(), F)))
            : lr(
                () => [
                  ua(ne(), h[0]),
                  h[1] ? ua(ne(), h[1]) : Qa(a.partialRange),
                ],
                a.range
              )
          : ua(ne(), +h),
      f = (h, F) =>
        (typeof h == "string" || typeof h == "number") && a.modelType
          ? I(h)
          : F,
      _ = (h) =>
        Array.isArray(h)
          ? [
              f(h[0], Da(null, +h[0].hours, +h[0].minutes, h[0].seconds)),
              f(h[1], Da(null, +h[1].hours, +h[1].minutes, h[1].seconds)),
            ]
          : f(h, Da(null, h.hours, h.minutes, h.seconds)),
      S = (h) =>
        Array.isArray(h)
          ? a.multiDates
            ? h.map((F) => f(F, ya(null, +F.month, +F.year)))
            : lr(
                () => [
                  f(h[0], ya(null, +h[0].month, +h[0].year)),
                  f(
                    h[1],
                    h[1]
                      ? ya(null, +h[1].month, +h[1].year)
                      : Qa(a.partialRange)
                  ),
                ],
                a.range
              )
          : f(h, ya(null, +h.month, +h.year)),
      w = (h) => {
        if (Array.isArray(h)) return h.map((F) => I(F));
        throw new Error(Pr.dateArr("multi-dates"));
      },
      b = (h) => {
        if (Array.isArray(h)) return [ne(h[0]), ne(h[1])];
        throw new Error(Pr.dateArr("week-picker"));
      },
      D = (h) =>
        a.modelAuto
          ? Array.isArray(h)
            ? [I(h[0]), I(h[1])]
            : a.autoApply
            ? [I(h)]
            : [I(h), null]
          : Array.isArray(h)
          ? lr(() => [I(h[0]), h[1] ? I(h[1]) : Qa(a.partialRange)], a.range)
          : I(h),
      P = () => {
        Array.isArray(n.value) &&
          a.range &&
          n.value.length === 1 &&
          n.value.push(Qa(a.partialRange));
      },
      O = () => {
        const h = n.value;
        return [U(h[0]), h[1] ? U(h[1]) : Qa(a.partialRange)];
      },
      N = () => (n.value[1] ? O() : U(ht(n.value[0]))),
      x = () => (n.value || []).map((h) => U(h)),
      X = () => (
        P(),
        a.modelAuto
          ? N()
          : a.multiDates
          ? x()
          : Array.isArray(n.value)
          ? lr(() => O(), a.range)
          : U(ht(n.value))
      ),
      W = (h) =>
        !h || (Array.isArray(h) && !h.length)
          ? null
          : a.timePicker
          ? _(ht(h))
          : a.monthPicker
          ? S(ht(h))
          : a.yearPicker
          ? y(ht(h))
          : a.multiDates
          ? w(ht(h))
          : a.weekPicker
          ? b(ht(h))
          : D(ht(h)),
      T = (h) => {
        const F = W(h);
        ei(ht(F))
          ? ((n.value = ht(F)), B())
          : ((n.value = null), (o.value = ""));
      },
      R = () => {
        const h = (F) => Ia(F, r.value.format);
        return `${h(n.value[0])} ${r.value.rangeSeparator} ${
          n.value[1] ? h(n.value[1]) : ""
        }`;
      },
      H = () =>
        t.value && n.value
          ? Array.isArray(n.value)
            ? R()
            : Ia(n.value, r.value.format)
          : p(n.value),
      q = () =>
        n.value
          ? a.multiDates
            ? n.value.map((h) => p(h)).join("; ")
            : r.value.enabled && typeof r.value.format == "string"
            ? H()
            : p(n.value)
          : "",
      B = () => {
        !a.format ||
        typeof a.format == "string" ||
        (r.value.enabled && typeof r.value.format == "string")
          ? (o.value = q())
          : (o.value = a.format(n.value));
      },
      I = (h) => {
        if (a.utc) {
          const F = new Date(h);
          return a.utc === "preserve"
            ? new Date(F.getTime() + F.getTimezoneOffset() * 6e4)
            : F;
        }
        return a.modelType
          ? a.modelType === "date" || a.modelType === "timestamp"
            ? d(new Date(h))
            : a.modelType === "format" &&
              (typeof a.format == "string" || !a.format)
            ? Go(h, i(), new Date())
            : d(Go(h, a.modelType, new Date()))
          : d(new Date(h));
      },
      U = (h) =>
        h
          ? a.utc
            ? xS(h, a.utc === "preserve", a.enableSeconds)
            : a.modelType
            ? a.modelType === "timestamp"
              ? +l(h)
              : a.modelType === "format" &&
                (typeof a.format == "string" || !a.format)
              ? p(l(h))
              : p(l(h), a.modelType, !0)
            : l(h)
          : "",
      V = (h, F = !1) => {
        if ((e("update:model-value", h), a.emitTimezone && F)) {
          const j = Array.isArray(h)
            ? h.map((ae) => ea(ht(ae)), a.emitTimezone)
            : ea(ht(h), a.emitTimezone);
          e("update:model-timezone-value", j);
        }
      },
      K = (h) =>
        Array.isArray(n.value)
          ? a.multiDates
            ? n.value.map((F) => h(F))
            : [h(n.value[0]), n.value[1] ? h(n.value[1]) : Qa(a.partialRange)]
          : h(ht(n.value)),
      k = (h) => V(ht(K(h)));
    return {
      inputValue: o,
      internalModelValue: n,
      checkBeforeEmit: () =>
        n.value
          ? a.range
            ? a.partialRange
              ? n.value.length >= 1
              : n.value.length === 2
            : !!n.value
          : !1,
      parseExternalModelValue: T,
      formatInputValue: B,
      emitModelValue: () => (
        B(),
        a.monthPicker
          ? k(g)
          : a.timePicker
          ? k(u)
          : a.yearPicker
          ? k($e)
          : a.weekPicker
          ? V(
              n.value.map((h) => U(h)),
              !0
            )
          : V(X(), !0)
      ),
    };
  },
  nC = (e, a) => {
    const { defaultedFilters: t } = dt(e),
      { validateMonthYearInRange: n } = Wa(e),
      r = (d, p) => {
        let u = d;
        return t.value.months.includes(Ve(u))
          ? ((u = p ? Xt(d, 1) : dn(d, 1)), r(u, p))
          : u;
      },
      i = (d, p) => {
        let u = d;
        return t.value.years.includes($e(u))
          ? ((u = p ? Ii(d, 1) : Sc(d, 1)), i(u, p))
          : u;
      },
      o = (d, p = !1) => {
        const u = et(new Date(), { month: e.month, year: e.year });
        let g = d ? Xt(u, 1) : dn(u, 1);
        e.disableYearSelect && (g = ua(g, e.year));
        let y = Ve(g),
          f = $e(g);
        t.value.months.includes(y) && ((g = r(g, d)), (y = Ve(g)), (f = $e(g))),
          t.value.years.includes(f) && ((g = i(g, d)), (f = $e(g))),
          n(y, f, d, e.preventMinMaxNavigation) && s(y, f, p);
      },
      s = (d, p, u) => {
        a("update-month-year", { month: d, year: p, fromNav: u });
      },
      l = c(
        () => (d) =>
          Rc(
            et(new Date(), { month: e.month, year: e.year }),
            e.maxDate,
            e.minDate,
            e.preventMinMaxNavigation,
            d
          )
      );
    return { handleMonthYearChange: o, isDisabled: l, updateMonthYear: s };
  };
var Xa = ((e) => (
    (e.center = "center"), (e.left = "left"), (e.right = "right"), e
  ))(Xa || {}),
  Kt = ((e) => ((e.month = "month"), (e.year = "year"), e))(Kt || {}),
  xa = ((e) => ((e.top = "top"), (e.bottom = "bottom"), e))(xa || {}),
  Va = ((e) => (
    (e.header = "header"),
    (e.calendar = "calendar"),
    (e.timePicker = "timePicker"),
    e
  ))(Va || {}),
  ra = ((e) => (
    (e.month = "month"),
    (e.year = "year"),
    (e.calendar = "calendar"),
    (e.time = "time"),
    (e.minutes = "minutes"),
    (e.hours = "hours"),
    (e.seconds = "seconds"),
    e
  ))(ra || {});
const rC = ({
    menuRef: e,
    menuRefInner: a,
    inputRef: t,
    pickerWrapperRef: n,
    inline: r,
    emit: i,
    props: o,
    slots: s,
  }) => {
    const l = A({}),
      d = A(!1),
      p = A({ top: "0", left: "0" }),
      u = A(!1),
      g = fr(o, "teleportCenter");
    je(g, () => {
      (p.value = JSON.parse(JSON.stringify({}))), P();
    });
    const y = (I) => {
        if (o.teleport) {
          const U = I.getBoundingClientRect();
          return { left: U.left + window.scrollX, top: U.top + window.scrollY };
        }
        return { top: 0, left: 0 };
      },
      f = (I, U) => {
        p.value.left = `${I + U - l.value.width}px`;
      },
      _ = (I) => {
        p.value.left = `${I}px`;
      },
      S = (I, U) => {
        o.position === Xa.left && _(I),
          o.position === Xa.right && f(I, U),
          o.position === Xa.center &&
            (p.value.left = `${I + U / 2 - l.value.width / 2}px`);
      },
      w = (I) => {
        const { width: U, height: V } = I.getBoundingClientRect(),
          { top: K, left: k } = o.altPosition ? o.altPosition(I) : y(I);
        return { top: +K, left: +k, width: U, height: V };
      },
      b = () => {
        (p.value.left = "50%"),
          (p.value.top = "50%"),
          (p.value.transform = "translate(-50%, -50%)"),
          (p.value.position = "fixed"),
          delete p.value.opacity;
      },
      D = () => {
        const I = pt(t),
          { top: U, left: V, transform: K } = o.altPosition(I);
        p.value = { top: `${U}px`, left: `${V}px`, transform: K ?? "" };
      },
      P = (I = !0) => {
        var U;
        if (!r.value.enabled) {
          if (g.value) return b();
          if (o.altPosition !== null) return D();
          if (I) {
            const V = o.teleport
              ? (U = a.value) == null
                ? void 0
                : U.$el
              : e.value;
            V && (l.value = V.getBoundingClientRect()),
              i("recalculate-position");
          }
          return R();
        }
      },
      O = ({ inputEl: I, left: U, width: V }) => {
        window.screen.width > 768 && !d.value && S(U, V), X(I);
      },
      N = (I) => {
        const { top: U, left: V, height: K, width: k } = w(I);
        (p.value.top = `${K + U + +o.offset}px`),
          (u.value = !1),
          d.value || (p.value.left = `${V + k / 2 - l.value.width / 2}px`),
          O({ inputEl: I, left: V, width: k });
      },
      x = (I) => {
        const { top: U, left: V, width: K } = w(I);
        (p.value.top = `${U - +o.offset - l.value.height}px`),
          (u.value = !0),
          O({ inputEl: I, left: V, width: K });
      },
      X = (I) => {
        if (o.autoPosition) {
          const { left: U, width: V } = w(I),
            { left: K, right: k } = l.value;
          if (!d.value) {
            if (Math.abs(K) !== Math.abs(k)) {
              if (K <= 0) return (d.value = !0), _(U);
              if (k >= document.documentElement.clientWidth)
                return (d.value = !0), f(U, V);
            }
            return S(U, V);
          }
        }
      },
      W = () => {
        const I = pt(t);
        if (I) {
          const { height: U } = l.value,
            { top: V, height: K } = I.getBoundingClientRect(),
            k = window.innerHeight - V - K,
            h = V;
          return U <= k
            ? xa.bottom
            : U > k && U <= h
            ? xa.top
            : k >= h
            ? xa.bottom
            : xa.top;
        }
        return xa.bottom;
      },
      T = (I) => (W() === xa.bottom ? N(I) : x(I)),
      R = () => {
        const I = pt(t);
        if (I) return o.autoPosition ? T(I) : N(I);
      },
      H = function (I) {
        if (I) {
          const U = I.scrollHeight > I.clientHeight,
            V = window.getComputedStyle(I).overflowY.indexOf("hidden") !== -1;
          return U && !V;
        }
        return !0;
      },
      q = function (I) {
        return !I ||
          I === document.body ||
          I.nodeType === Node.DOCUMENT_FRAGMENT_NODE
          ? window
          : H(I)
          ? I
          : q(I.parentNode);
      },
      B = (I) => {
        if (I)
          switch (o.position) {
            case Xa.left:
              return { left: 0, transform: "translateX(0)" };
            case Xa.right:
              return { left: `${I.width}px`, transform: "translateX(-100%)" };
            default:
              return {
                left: `${I.width / 2}px`,
                transform: "translateX(-50%)",
              };
          }
        return {};
      };
    return {
      openOnTop: u,
      menuStyle: p,
      xCorrect: d,
      setMenuPosition: P,
      getScrollableParent: q,
      shadowRender: (I, U) => {
        var V, K, k;
        const h = document.createElement("div"),
          F = (V = pt(t)) == null ? void 0 : V.getBoundingClientRect();
        h.setAttribute("id", "dp--temp-container");
        const j =
          (K = n.value) != null && K.clientWidth ? n.value : document.body;
        j.append(h);
        const ae = B(F),
          le = Zc(
            I,
            {
              ...U,
              shadow: !0,
              style: { opacity: 0, position: "absolute", ...ae },
            },
            Object.fromEntries(
              Object.keys(s)
                .filter((Y) => ["right-sidebar", "left-sidebar"].includes(Y))
                .map((Y) => [Y, s[Y]])
            )
          );
        es(le, h),
          (l.value = (k = le.el) == null ? void 0 : k.getBoundingClientRect()),
          es(null, h),
          j.removeChild(h);
      },
    };
  },
  Ta = [
    { name: "clock-icon", use: ["time", "calendar", "shared"] },
    {
      name: "arrow-left",
      use: ["month-year", "calendar", "shared", "year-mode"],
    },
    {
      name: "arrow-right",
      use: ["month-year", "calendar", "shared", "year-mode"],
    },
    { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
    { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
    {
      name: "calendar-icon",
      use: ["month-year", "time", "calendar", "shared", "year-mode"],
    },
    { name: "day", use: ["calendar", "shared"] },
    { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
    {
      name: "year-overlay-value",
      use: ["calendar", "month-year", "shared", "year-mode"],
    },
    { name: "year-overlay", use: ["month-year", "shared"] },
    { name: "month-overlay", use: ["month-year", "shared"] },
    { name: "month-overlay-header", use: ["month-year", "shared"] },
    { name: "year-overlay-header", use: ["month-year", "shared"] },
    { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
    { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
    { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
    { name: "hours", use: ["calendar", "time", "shared"] },
    { name: "minutes", use: ["calendar", "time", "shared"] },
    { name: "month", use: ["calendar", "month-year", "shared"] },
    { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
    { name: "action-buttons", use: ["action"] },
    { name: "action-preview", use: ["action"] },
    { name: "calendar-header", use: ["calendar", "shared"] },
    { name: "marker-tooltip", use: ["calendar", "shared"] },
    { name: "action-extra", use: ["menu"] },
    { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
    { name: "am-pm-button", use: ["calendar", "time", "shared"] },
    { name: "left-sidebar", use: ["menu"] },
    { name: "right-sidebar", use: ["menu"] },
    { name: "month-year", use: ["month-year", "shared"] },
    { name: "time-picker", use: ["menu", "shared"] },
    { name: "action-row", use: ["action"] },
    { name: "marker", use: ["calendar", "shared"] },
    { name: "quarter", use: ["shared"] },
  ],
  oC = [
    { name: "trigger" },
    { name: "input-icon" },
    { name: "clear-icon" },
    { name: "dp-input" },
  ],
  iC = {
    all: () => Ta,
    monthYear: () => Ta.filter((e) => e.use.includes("month-year")),
    input: () => oC,
    timePicker: () => Ta.filter((e) => e.use.includes("time")),
    action: () => Ta.filter((e) => e.use.includes("action")),
    calendar: () => Ta.filter((e) => e.use.includes("calendar")),
    menu: () => Ta.filter((e) => e.use.includes("menu")),
    shared: () => Ta.filter((e) => e.use.includes("shared")),
    yearMode: () => Ta.filter((e) => e.use.includes("year-mode")),
  },
  Nt = (e, a, t) => {
    const n = [];
    return (
      iC[a]().forEach((r) => {
        e[r.name] && n.push(r.name);
      }),
      t != null &&
        t.length &&
        t.forEach((r) => {
          r.slot && n.push(r.slot);
        }),
      n
    );
  },
  er = (e) => {
    const a = c(() => (n) => e.value ? (n ? e.value.open : e.value.close) : ""),
      t = c(
        () => (n) =>
          e.value ? (n ? e.value.menuAppearTop : e.value.menuAppearBottom) : ""
      );
    return { transitionName: a, showTransition: !!e.value, menuTransition: t };
  },
  tr = (e, a) => {
    const t = ne(ea(new Date(), e.timezone)),
      n = A([{ month: Ve(t), year: $e(t) }]),
      r = _a({
        hours: e.range ? [Jt(t), Jt(t)] : Jt(t),
        minutes: e.range ? [ca(t), ca(t)] : ca(t),
        seconds: e.range ? [0, 0] : 0,
      }),
      i = c({
        get: () => e.internalModelValue,
        set: (l) => {
          !e.readonly && !e.disabled && a("update:internal-model-value", l);
        },
      }),
      o = c(() => (l) => n.value[l] ? n.value[l].month : 0),
      s = c(() => (l) => n.value[l] ? n.value[l].year : 0);
    return { calendars: n, time: r, modelValue: i, month: o, year: s };
  },
  sC = (e, a) => {
    const { defaultedMultiCalendars: t, defaultedHighlight: n } = dt(a),
      { isDisabled: r, matchDate: i } = Wa(a),
      o = A(null),
      s = A(ne(ea(new Date(), a.timezone))),
      l = (k) => {
        (!k.current && a.hideOffsetDates) || (o.value = k.value);
      },
      d = () => {
        o.value = null;
      },
      p = (k) =>
        Array.isArray(e.value) && a.range && e.value[0] && o.value
          ? k
            ? wt(o.value, e.value[0])
            : yt(o.value, e.value[0])
          : !0,
      u = (k, h) => {
        const F = () =>
            e.value ? (h ? e.value[0] || null : e.value[1]) : null,
          j = e.value && Array.isArray(e.value) ? F() : null;
        return We(ne(k.value), j);
      },
      g = (k) => {
        const h = Array.isArray(e.value) ? e.value[0] : null;
        return k ? !yt(o.value ?? null, h) : !0;
      },
      y = (k, h = !0) =>
        (a.range || a.weekPicker) &&
        Array.isArray(e.value) &&
        e.value.length === 2
          ? a.hideOffsetDates && !k.current
            ? !1
            : We(ne(k.value), e.value[h ? 0 : 1])
          : a.range
          ? (u(k, h) && g(h)) ||
            (We(k.value, Array.isArray(e.value) ? e.value[0] : null) && p(h))
          : !1,
      f = (k, h, F) =>
        Array.isArray(e.value) && e.value[0] && e.value.length === 1
          ? k
            ? !1
            : F
            ? wt(e.value[0], h.value)
            : yt(e.value[0], h.value)
          : !1,
      _ = (k) =>
        !e.value || (a.hideOffsetDates && !k.current)
          ? !1
          : a.range
          ? a.modelAuto && Array.isArray(e.value)
            ? We(k.value, e.value[0] ? e.value[0] : s.value)
            : !1
          : a.multiDates && Array.isArray(e.value)
          ? e.value.some((h) => We(h, k.value))
          : We(k.value, e.value ? e.value : s.value),
      S = (k) => {
        if (a.autoRange || a.weekPicker) {
          if (o.value) {
            if (a.hideOffsetDates && !k.current) return !1;
            const h = va(o.value, +a.autoRange),
              F = hr(ne(o.value), a.timezone, a.weekStart);
            return a.weekPicker ? We(F[1], ne(k.value)) : We(h, ne(k.value));
          }
          return !1;
        }
        return !1;
      },
      w = (k) => {
        if (a.autoRange || a.weekPicker) {
          if (o.value) {
            const h = va(o.value, +a.autoRange);
            if (a.hideOffsetDates && !k.current) return !1;
            const F = hr(ne(o.value), a.timezone, a.weekStart);
            return a.weekPicker
              ? wt(k.value, F[0]) && yt(k.value, F[1])
              : wt(k.value, o.value) && yt(k.value, h);
          }
          return !1;
        }
        return !1;
      },
      b = (k) => {
        if (a.autoRange || a.weekPicker) {
          if (o.value) {
            if (a.hideOffsetDates && !k.current) return !1;
            const h = hr(ne(o.value), a.timezone, a.weekStart);
            return a.weekPicker ? We(h[0], k.value) : We(o.value, k.value);
          }
          return !1;
        }
        return !1;
      },
      D = (k) => Nr(e.value, o.value, k.value),
      P = () =>
        a.modelAuto && Array.isArray(a.internalModelValue)
          ? !!a.internalModelValue[0]
          : !1,
      O = () => (a.modelAuto ? Dc(a.internalModelValue) : !0),
      N = (k) => {
        if ((Array.isArray(e.value) && e.value.length) || a.weekPicker)
          return !1;
        const h = a.range ? !y(k) && !y(k, !1) : !0;
        return !r(k.value) && !_(k) && !(!k.current && a.hideOffsetDates) && h;
      },
      x = (k) => (a.range ? (a.modelAuto ? P() && _(k) : !1) : _(k)),
      X = (k) => {
        var h;
        return n.value
          ? typeof n.value == "function"
            ? n.value(k.value)
            : i(
                k.value,
                (h = a.arrMapValues) != null && h.highlightedDates
                  ? a.arrMapValues.highlightedDates
                  : n.value.dates
              )
          : !1;
      },
      W = (k) => {
        const h = r(k.value);
        return (
          h &&
          (typeof n.value == "function"
            ? !n.value(k.value, h)
            : !n.value.options.highlightDisabled)
        );
      },
      T = (k) => {
        var h;
        return typeof n.value == "function"
          ? n.value(k.value)
          : (h = n.value.weekdays) == null
          ? void 0
          : h.includes(k.value.getDay());
      },
      R = (k) =>
        (a.range || a.weekPicker) &&
        (!(t.value.count > 0) || k.current) &&
        O() &&
        !(!k.current && a.hideOffsetDates) &&
        !_(k)
          ? D(k)
          : !1,
      H = (k) => {
        const { isRangeStart: h, isRangeEnd: F } = I(k),
          j = a.range ? h || F : !1;
        return {
          dp__cell_offset: !k.current,
          dp__pointer:
            !a.disabled && !(!k.current && a.hideOffsetDates) && !r(k.value),
          dp__cell_disabled: r(k.value),
          dp__cell_highlight:
            !W(k) &&
            (X(k) || T(k)) &&
            !x(k) &&
            !j &&
            !b(k) &&
            !(R(k) && a.weekPicker) &&
            !F,
          dp__cell_highlight_active: !W(k) && (X(k) || T(k)) && x(k),
          dp__today: !a.noToday && We(k.value, s.value) && k.current,
        };
      },
      q = (k) => ({ dp__active_date: x(k), dp__date_hover: N(k) }),
      B = (k) => ({
        ...U(k),
        ...V(k),
        dp__range_between_week: R(k) && a.weekPicker,
      }),
      I = (k) => {
        const h = t.value.count > 0 ? k.current && y(k) && O() : y(k) && O(),
          F =
            t.value.count > 0 ? k.current && y(k, !1) && O() : y(k, !1) && O();
        return { isRangeStart: h, isRangeEnd: F };
      },
      U = (k) => {
        const { isRangeStart: h, isRangeEnd: F } = I(k);
        return {
          dp__range_start: h,
          dp__range_end: F,
          dp__range_between: R(k) && !a.weekPicker,
          dp__date_hover_start: f(N(k), k, !0),
          dp__date_hover_end: f(N(k), k, !1),
        };
      },
      V = (k) => ({
        ...U(k),
        dp__cell_auto_range: w(k),
        dp__cell_auto_range_start: b(k),
        dp__cell_auto_range_end: S(k),
      }),
      K = (k) =>
        a.range
          ? a.autoRange
            ? V(k)
            : a.modelAuto
            ? { ...q(k), ...U(k) }
            : U(k)
          : a.weekPicker
          ? B(k)
          : q(k);
    return {
      setHoverDate: l,
      clearHoverDate: d,
      getDayClassData: (k) =>
        a.hideOffsetDates && !k.current
          ? {}
          : {
              ...H(k),
              ...K(k),
              [a.dayClass ? a.dayClass(k.value) : ""]: !0,
              [a.calendarCellClassName]: !!a.calendarCellClassName,
            },
    };
  },
  Wa = (e) => {
    const { defaultedFilters: a, defaultedHighlight: t } = dt(e),
      n = () => {
        if (e.timezone) return e.timezone;
        if (e.utc) return "UTC";
      },
      r = (T) => {
        const R = kt(i(ne(T))).toISOString(),
          [H] = R.split("T");
        return H;
      },
      i = (T) => (e.utc === "preserve" ? Ac(T, n()) : ea(T, n())),
      o = (T) => {
        var R;
        const H = e.maxDate ? wt(T, i(ne(e.maxDate))) : !1,
          q = e.minDate ? yt(T, i(ne(e.minDate))) : !1,
          B = p(
            i(T),
            (R = e.arrMapValues) != null && R.disabledDates
              ? e.arrMapValues.disabledDates
              : e.disabledDates
          ),
          I = a.value.months.map((h) => +h).includes(Ve(T)),
          U = e.disabledWeekDays.length
            ? e.disabledWeekDays.some((h) => +h === B1(T))
            : !1,
          V = g(T),
          K = $e(T),
          k = K < +e.yearRange[0] || K > +e.yearRange[1];
        return !(H || q || B || I || k || U || V);
      },
      s = (T, R) => yt(...Pa(e.minDate, T, R)) || We(...Pa(e.minDate, T, R)),
      l = (T, R) => wt(...Pa(e.maxDate, T, R)) || We(...Pa(e.maxDate, T, R)),
      d = (T, R, H) => {
        let q = !1;
        return (
          e.maxDate && H && l(T, R) && (q = !0),
          e.minDate && !H && s(T, R) && (q = !0),
          q
        );
      },
      p = (T, R) =>
        T
          ? R instanceof Map
            ? !!R.get(r(T))
            : Array.isArray(R)
            ? R.some((H) => We(i(ne(H)), T))
            : R
            ? R(ne(JSON.parse(JSON.stringify(T))))
            : !1
          : !0,
      u = (T, R, H, q) => {
        let B = !1;
        return (
          q
            ? e.minDate && e.maxDate
              ? (B = d(T, R, H))
              : ((e.minDate && s(T, R)) || (e.maxDate && l(T, R))) && (B = !0)
            : (B = !0),
          B
        );
      },
      g = (T) => {
        var R, H, q, B, I;
        return Array.isArray(e.allowedDates) &&
          !((R = e.allowedDates) != null && R.length)
          ? !0
          : (H = e.arrMapValues) != null && H.allowedDates
          ? !p(T, (q = e.arrMapValues) == null ? void 0 : q.allowedDates)
          : (B = e.allowedDates) != null && B.length
          ? !(
              (I = e.allowedDates) != null && I.some((U) => We(kt(U), i(kt(T))))
            )
          : !1;
      },
      y = (T) => !o(T),
      f = (T) =>
        e.noDisabledRange
          ? !rc({ start: T[0], end: T[1] }).some((R) => y(R))
          : !0,
      _ = (T, R, H = 0) => {
        if (Array.isArray(R) && R[H]) {
          const q = Tw(T, R[H]),
            B = Lc(R[H], T),
            I = B.length === 1 ? 0 : B.filter((V) => y(V)).length,
            U = Math.abs(q) - I;
          if (e.minRange && e.maxRange)
            return U >= +e.minRange && U <= +e.maxRange;
          if (e.minRange) return U >= +e.minRange;
          if (e.maxRange) return U <= +e.maxRange;
        }
        return !0;
      },
      S = (T) => new Map(T.map((R) => [r(R), !0])),
      w = (T) => Array.isArray(T) && T.length > 0,
      b = () => {
        const T = {
          disabledDates: null,
          allowedDates: null,
          highlightedDates: null,
        };
        return (
          w(e.allowedDates) && (T.allowedDates = S(e.allowedDates)),
          typeof t.value != "function" &&
            w(t.value.dates) &&
            (T.highlightedDates = S(t.value.dates)),
          w(e.disabledDates) && (T.disabledDates = S(e.disabledDates)),
          T
        );
      },
      D = () =>
        !e.enableTimePicker ||
        e.monthPicker ||
        e.yearPicker ||
        e.ignoreTimeValidation,
      P = (T) =>
        Array.isArray(T)
          ? [T[0] ? bo(T[0]) : null, T[1] ? bo(T[1]) : null]
          : bo(T),
      O = (T, R, H) =>
        T.find((q) =>
          +q.hours === Jt(R) && q.minutes === "*"
            ? !0
            : +q.minutes === ca(R) && +q.hours === Jt(R)
        ) && H,
      N = (T, R, H) => {
        const [q, B] = T,
          [I, U] = R;
        return !O(q, I, H) && !O(B, U, H) && H;
      },
      x = (T, R) => {
        const H = Array.isArray(R) ? R : [R];
        return Array.isArray(e.disabledTimes)
          ? Array.isArray(e.disabledTimes[0])
            ? N(e.disabledTimes, H, T)
            : !H.some((q) => O(e.disabledTimes, q, T))
          : T;
      },
      X = (T, R) => {
        const H = Array.isArray(R)
            ? [Ua(R[0]), R[1] ? Ua(R[1]) : void 0]
            : Ua(R),
          q = !e.disabledTimes(H);
        return T && q;
      },
      W = (T, R) =>
        e.disabledTimes
          ? Array.isArray(e.disabledTimes)
            ? x(R, T)
            : X(R, T)
          : R;
    return {
      isDisabled: y,
      validateDate: o,
      validateMonthYearInRange: u,
      isDateRangeAllowed: f,
      checkMinMaxRange: _,
      matchDate: p,
      mapDatesArrToMap: b,
      isValidTime: (T) => {
        let R = !0;
        if (!T || D()) return !0;
        const H = !e.minDate && !e.maxDate ? P(T) : T;
        return (
          (e.maxTime || e.maxDate) &&
            (R = Ul(e.maxTime, e.maxDate, "max", ht(H), R)),
          (e.minTime || e.minDate) &&
            (R = Ul(e.minTime, e.minDate, "min", ht(H), R)),
          W(T, R)
        );
      },
    };
  },
  xr = () => {
    const e = c(() => (n, r) => n?.includes(r)),
      a = c(() => (n, r) => n.count ? (n.solo ? !0 : r === 0) : !0),
      t = c(() => (n, r) => n.count ? (n.solo ? !0 : r === n.count - 1) : !0);
    return { hideNavigationButtons: e, showLeftIcon: a, showRightIcon: t };
  },
  lC = (e, a, t) => {
    const n = A(0),
      r = _a({
        [Va.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
        [Va.calendar]: !1,
        [Va.header]: !1,
      }),
      i = c(() => e.monthPicker),
      o = (u) => {
        var g;
        if ((g = e.flow) != null && g.length) {
          if (!u && i.value) return p();
          (r[u] = !0), Object.keys(r).filter((y) => !r[y]).length || p();
        }
      },
      s = () => {
        var u;
        (u = e.flow) != null &&
          u.length &&
          n.value !== -1 &&
          ((n.value += 1), a("flow-step", n.value), p());
      },
      l = () => {
        n.value = -1;
      },
      d = (u, g, ...y) => {
        e.flow[n.value] === u && t.value && t.value[g](...y);
      },
      p = () => {
        d(ra.month, "toggleMonthPicker", !0),
          d(ra.year, "toggleYearPicker", !0),
          d(ra.calendar, "toggleTimePicker", !1, !0),
          d(ra.time, "toggleTimePicker", !0, !0);
        const u = e.flow[n.value];
        (u === ra.hours || u === ra.minutes || u === ra.seconds) &&
          d(u, "toggleTimePicker", !0, !0, u);
      };
    return { childMount: o, updateFlowStep: s, resetFlow: l, flowStep: n };
  },
  Hr = {
    multiCalendars: {
      type: [Boolean, Number, String, Object],
      default: void 0,
    },
    modelValue: { type: [String, Date, Array, Object, Number], default: null },
    modelType: { type: String, default: null },
    position: { type: String, default: "center" },
    dark: { type: Boolean, default: !1 },
    format: { type: [String, Function], default: () => null },
    autoPosition: { type: Boolean, default: !0 },
    altPosition: { type: Function, default: null },
    transitions: { type: [Boolean, Object], default: !0 },
    formatLocale: { type: Object, default: null },
    utc: { type: [Boolean, String], default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    offset: { type: [Number, String], default: 10 },
    hideNavigation: { type: Array, default: () => [] },
    timezone: { type: String, default: null },
    emitTimezone: { type: String, default: null },
    vertical: { type: Boolean, default: !1 },
    disableMonthYearSelect: { type: Boolean, default: !1 },
    disableYearSelect: { type: Boolean, default: !1 },
    menuClassName: { type: String, default: null },
    dayClass: { type: Function, default: null },
    yearRange: { type: Array, default: () => [1900, 2100] },
    calendarCellClassName: { type: String, default: null },
    enableTimePicker: { type: Boolean, default: !0 },
    autoApply: { type: Boolean, default: !1 },
    disabledDates: { type: [Array, Function], default: () => [] },
    monthNameFormat: { type: String, default: "short" },
    startDate: { type: [Date, String], default: null },
    startTime: { type: [Object, Array], default: null },
    hideOffsetDates: { type: Boolean, default: !1 },
    autoRange: { type: [Number, String], default: null },
    noToday: { type: Boolean, default: !1 },
    disabledWeekDays: { type: Array, default: () => [] },
    allowedDates: { type: Array, default: null },
    nowButtonLabel: { type: String, default: "Now" },
    markers: { type: Array, default: () => [] },
    escClose: { type: Boolean, default: !0 },
    spaceConfirm: { type: Boolean, default: !0 },
    monthChangeOnArrows: { type: Boolean, default: !0 },
    presetDates: { type: Array, default: () => [] },
    flow: { type: Array, default: () => [] },
    partialFlow: { type: Boolean, default: !1 },
    preventMinMaxNavigation: { type: Boolean, default: !1 },
    minRange: { type: [Number, String], default: null },
    maxRange: { type: [Number, String], default: null },
    multiDatesLimit: { type: [Number, String], default: null },
    reverseYears: { type: Boolean, default: !1 },
    weekPicker: { type: Boolean, default: !1 },
    filters: { type: Object, default: () => ({}) },
    arrowNavigation: { type: Boolean, default: !1 },
    disableTimeRangeValidation: { type: Boolean, default: !1 },
    highlight: { type: [Array, Function, Object], default: null },
    highlightWeekDays: { type: Array, default: null },
    highlightDisabledDays: { type: Boolean, default: !1 },
    teleport: { type: [String, Boolean, Object], default: null },
    teleportCenter: { type: Boolean, default: !1 },
    locale: { type: String, default: "en-Us" },
    weekNumName: { type: String, default: "W" },
    weekStart: { type: [Number, String], default: 1 },
    weekNumbers: { type: [String, Function, Object], default: null },
    calendarClassName: { type: String, default: null },
    monthChangeOnScroll: { type: [Boolean, String], default: !0 },
    dayNames: { type: [Function, Array], default: null },
    monthPicker: { type: Boolean, default: !1 },
    customProps: { type: Object, default: null },
    yearPicker: { type: Boolean, default: !1 },
    modelAuto: { type: Boolean, default: !1 },
    selectText: { type: String, default: "Select" },
    cancelText: { type: String, default: "Cancel" },
    previewFormat: { type: [String, Function], default: () => "" },
    multiDates: { type: Boolean, default: !1 },
    partialRange: { type: Boolean, default: !0 },
    ignoreTimeValidation: { type: Boolean, default: !1 },
    minDate: { type: [Date, String], default: null },
    maxDate: { type: [Date, String], default: null },
    minTime: { type: Object, default: null },
    maxTime: { type: Object, default: null },
    name: { type: String, default: null },
    placeholder: { type: String, default: "" },
    hideInputIcon: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !0 },
    state: { type: Boolean, default: null },
    required: { type: Boolean, default: !1 },
    autocomplete: { type: String, default: "off" },
    inputClassName: { type: String, default: null },
    fixedStart: { type: Boolean, default: !1 },
    fixedEnd: { type: Boolean, default: !1 },
    timePicker: { type: Boolean, default: !1 },
    enableSeconds: { type: Boolean, default: !1 },
    is24: { type: Boolean, default: !0 },
    noHoursOverlay: { type: Boolean, default: !1 },
    noMinutesOverlay: { type: Boolean, default: !1 },
    noSecondsOverlay: { type: Boolean, default: !1 },
    hoursGridIncrement: { type: [String, Number], default: 1 },
    minutesGridIncrement: { type: [String, Number], default: 5 },
    secondsGridIncrement: { type: [String, Number], default: 5 },
    hoursIncrement: { type: [Number, String], default: 1 },
    minutesIncrement: { type: [Number, String], default: 1 },
    secondsIncrement: { type: [Number, String], default: 1 },
    range: { type: Boolean, default: !1 },
    uid: { type: String, default: null },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    inline: { type: [Boolean, Object], default: !1 },
    textInput: { type: [Boolean, Object], default: !1 },
    noDisabledRange: { type: Boolean, default: !1 },
    sixWeeks: { type: [Boolean, String], default: !1 },
    actionRow: { type: Object, default: () => ({}) },
    focusStartDate: { type: Boolean, default: !1 },
    disabledTimes: { type: [Function, Array], default: void 0 },
    showLastInRange: { type: Boolean, default: !0 },
    timePickerInline: { type: Boolean, default: !1 },
    calendar: { type: Function, default: null },
    config: { type: Object, default: void 0 },
    quarterPicker: { type: Boolean, default: !1 },
    yearFirst: { type: Boolean, default: !1 },
  },
  aa = {
    ...Hr,
    shadow: { type: Boolean, default: !1 },
    flowStep: { type: Number, default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    arrMapValues: { type: Object, default: () => ({}) },
    noOverlayFocus: { type: Boolean, default: !1 },
  },
  uC = { key: 1, class: "dp__input_wrap" },
  cC = [
    "id",
    "name",
    "inputmode",
    "placeholder",
    "disabled",
    "readonly",
    "required",
    "value",
    "autocomplete",
    "aria-label",
    "aria-disabled",
    "aria-invalid",
  ],
  dC = { key: 2, class: "dp__clear_icon" },
  mC = se({
    compatConfig: { MODE: 3 },
    __name: "DatepickerInput",
    props: {
      isMenuOpen: { type: Boolean, default: !1 },
      inputValue: { type: String, default: "" },
      ...Hr,
    },
    emits: [
      "clear",
      "open",
      "update:input-value",
      "set-input-date",
      "close",
      "select-date",
      "set-empty-date",
      "toggle",
      "focus-prev",
      "focus",
      "blur",
      "real-blur",
    ],
    setup(e, { expose: a, emit: t }) {
      const n = t,
        r = e,
        {
          defaultedTextInput: i,
          defaultedAriaLabels: o,
          defaultedInline: s,
          defaultedConfig: l,
          getDefaultPattern: d,
          getDefaultStartTime: p,
        } = dt(r),
        { checkMinMaxRange: u } = Wa(r),
        g = A(),
        y = A(null),
        f = A(!1),
        _ = A(!1),
        S = c(() => ({
          dp__pointer: !r.disabled && !r.readonly && !i.value.enabled,
          dp__disabled: r.disabled,
          dp__input_readonly: !i.value.enabled,
          dp__input: !0,
          dp__input_icon_pad: !r.hideInputIcon,
          dp__input_valid: !!r.state,
          dp__input_invalid: r.state === !1,
          dp__input_focus: f.value || r.isMenuOpen,
          dp__input_reg: !i.value.enabled,
          [r.inputClassName]: !!r.inputClassName,
        })),
        w = () => {
          n("set-input-date", null),
            r.autoApply && (n("set-empty-date"), (g.value = null));
        },
        b = (B) => {
          const I = p();
          return NS(
            B,
            i.value.format ?? d(),
            I ?? Bc({}, r.enableSeconds),
            r.inputValue,
            _.value
          );
        },
        D = (B) => {
          const { rangeSeparator: I } = i.value,
            [U, V] = B.split(`${I}`);
          if (U) {
            const K = b(U.trim()),
              k = V ? b(V.trim()) : null,
              h = K && k ? [K, k] : [K];
            u(k, h, 0) && (g.value = K ? h : null);
          }
        },
        P = () => {
          _.value = !0;
        },
        O = (B) => {
          if (r.range) D(B);
          else if (r.multiDates) {
            const I = B.split(";");
            g.value = I.map((U) => b(U.trim())).filter((U) => U);
          } else g.value = b(B);
        },
        N = (B) => {
          var I;
          const U =
            typeof B == "string"
              ? B
              : (I = B.target) == null
              ? void 0
              : I.value;
          U !== ""
            ? (i.value.openMenu && !r.isMenuOpen && n("open"),
              O(U),
              n("set-input-date", g.value))
            : w(),
            (_.value = !1),
            n("update:input-value", U);
        },
        x = (B) => {
          i.value.enabled
            ? (O(B.target.value),
              i.value.enterSubmit && ei(g.value) && r.inputValue !== ""
                ? (n("set-input-date", g.value, !0), (g.value = null))
                : i.value.enterSubmit &&
                  r.inputValue === "" &&
                  ((g.value = null), n("clear")))
            : T(B);
        },
        X = (B) => {
          i.value.enabled && i.value.tabSubmit && O(B.target.value),
            i.value.tabSubmit && ei(g.value) && r.inputValue !== ""
              ? (n("set-input-date", g.value, !0, !0), (g.value = null))
              : i.value.tabSubmit &&
                r.inputValue === "" &&
                ((g.value = null), n("clear", !0));
        },
        W = () => {
          var B;
          (f.value = !0),
            n("focus"),
            i.value.enabled &&
              i.value.selectOnFocus &&
              ((B = y.value) == null || B.select());
        },
        T = (B) => {
          B.preventDefault(),
            Ea(B, l.value, !0),
            i.value.enabled &&
            i.value.openMenu &&
            !s.value.input &&
            !r.isMenuOpen
              ? n("open")
              : i.value.enabled || n("toggle");
        },
        R = () => {
          n("real-blur"),
            (f.value = !1),
            (!r.isMenuOpen || (s.value.enabled && s.value.input)) && n("blur"),
            r.autoApply &&
              i.value.enabled &&
              g.value &&
              !r.isMenuOpen &&
              (n("set-input-date", g.value),
              n("select-date"),
              (g.value = null));
        },
        H = (B) => {
          Ea(B, l.value, !0), n("clear");
        },
        q = (B) => {
          if (!i.value.enabled) {
            if (B.code === "Tab") return;
            B.preventDefault();
          }
        };
      return (
        a({
          focusInput: () => {
            var B;
            (B = y.value) == null || B.focus({ preventScroll: !0 });
          },
          setParsedDate: (B) => {
            g.value = B;
          },
        }),
        (B, I) => {
          var U;
          return (
            m(),
            v("div", { onClick: T }, [
              B.$slots.trigger && !B.$slots["dp-input"] && !L(s).enabled
                ? he(B.$slots, "trigger", { key: 0 })
                : M("", !0),
              !B.$slots.trigger && (!L(s).enabled || L(s).input)
                ? (m(),
                  v("div", uC, [
                    B.$slots["dp-input"] && !B.$slots.trigger && !L(s).enabled
                      ? he(B.$slots, "dp-input", {
                          key: 0,
                          value: e.inputValue,
                          isMenuOpen: e.isMenuOpen,
                          onInput: N,
                          onEnter: x,
                          onTab: X,
                          onClear: H,
                          onBlur: R,
                          onKeypress: q,
                          onPaste: P,
                          openMenu: () => B.$emit("open"),
                          closeMenu: () => B.$emit("close"),
                          toggleMenu: () => B.$emit("toggle"),
                        })
                      : M("", !0),
                    B.$slots["dp-input"]
                      ? M("", !0)
                      : (m(),
                        v(
                          "input",
                          {
                            key: 1,
                            id: B.uid ? `dp-input-${B.uid}` : void 0,
                            ref_key: "inputRef",
                            ref: y,
                            name: B.name,
                            class: ee(S.value),
                            inputmode: L(i).enabled ? "text" : "none",
                            placeholder: B.placeholder,
                            disabled: B.disabled,
                            readonly: B.readonly,
                            required: B.required,
                            value: e.inputValue,
                            autocomplete: B.autocomplete,
                            "aria-label": (U = L(o)) == null ? void 0 : U.input,
                            "aria-disabled": B.disabled || void 0,
                            "aria-invalid": B.state === !1 ? !0 : void 0,
                            onInput: N,
                            onKeydown: [De(x, ["enter"]), De(X, ["tab"]), q],
                            onBlur: R,
                            onFocus: W,
                            onKeypress: q,
                            onPaste: P,
                          },
                          null,
                          42,
                          cC
                        )),
                    E("div", { onClick: I[2] || (I[2] = (V) => n("toggle")) }, [
                      B.$slots["input-icon"] && !B.hideInputIcon
                        ? (m(),
                          v(
                            "span",
                            {
                              key: 0,
                              class: "dp__input_icon",
                              onClick: I[0] || (I[0] = (V) => n("toggle")),
                            },
                            [he(B.$slots, "input-icon")]
                          ))
                        : M("", !0),
                      !B.$slots["input-icon"] &&
                      !B.hideInputIcon &&
                      !B.$slots["dp-input"]
                        ? (m(),
                          G(L(yn), {
                            key: 1,
                            class: "dp__input_icon dp__input_icons",
                            onClick: I[1] || (I[1] = (V) => n("toggle")),
                          }))
                        : M("", !0),
                    ]),
                    B.$slots["clear-icon"] &&
                    e.inputValue &&
                    B.clearable &&
                    !B.disabled &&
                    !B.readonly
                      ? (m(),
                        v("span", dC, [
                          he(B.$slots, "clear-icon", { clear: H }),
                        ]))
                      : M("", !0),
                    B.clearable &&
                    !B.$slots["clear-icon"] &&
                    e.inputValue &&
                    !B.disabled &&
                    !B.readonly
                      ? (m(),
                        G(L(Cc), {
                          key: 3,
                          class: "dp__clear_icon dp__input_icons",
                          onClick:
                            I[3] || (I[3] = Me((V) => H(V), ["prevent"])),
                        }))
                      : M("", !0),
                  ]))
                : M("", !0),
            ])
          );
        }
      );
    },
  }),
  pC = ["title"],
  gC = { class: "dp__action_buttons" },
  hC = ["disabled"],
  fC = se({
    compatConfig: { MODE: 3 },
    __name: "ActionRow",
    props: {
      menuMount: { type: Boolean, default: !1 },
      calendarWidth: { type: Number, default: 0 },
      ...aa,
    },
    emits: ["close-picker", "select-date", "select-now", "invalid-select"],
    setup(e, { emit: a }) {
      const t = a,
        n = e,
        {
          defaultedActionRow: r,
          defaultedPreviewFormat: i,
          defaultedMultiCalendars: o,
          defaultedTextInput: s,
          defaultedInline: l,
          getDefaultPattern: d,
        } = dt(n),
        { isValidTime: p } = Wa(n),
        { buildMatrix: u } = La(),
        g = A(null),
        y = A(null);
      Oe(() => {
        n.arrowNavigation && u([pt(g), pt(y)], "actionRow");
      });
      const f = c(() =>
          n.range && !n.partialRange && n.internalModelValue
            ? n.internalModelValue.length === 2
            : !0
        ),
        _ = c(() => !S.value || !w.value || !f.value),
        S = c(() =>
          !n.enableTimePicker || n.ignoreTimeValidation
            ? !0
            : p(n.internalModelValue)
        ),
        w = c(() =>
          n.monthPicker
            ? n.range && Array.isArray(n.internalModelValue)
              ? !n.internalModelValue.filter((T) => !X(T)).length
              : X(n.internalModelValue)
            : !0
        ),
        b = () => {
          const T = i.value;
          return n.timePicker || n.monthPicker, T(ht(n.internalModelValue));
        },
        D = () => {
          const T = n.internalModelValue;
          return o.value.count > 0
            ? `${P(T[0])} - ${P(T[1])}`
            : [P(T[0]), P(T[1])];
        },
        P = (T) =>
          $c(
            T,
            i.value,
            n.formatLocale,
            s.value.rangeSeparator,
            n.modelAuto,
            d()
          ),
        O = c(() =>
          !n.internalModelValue || !n.menuMount
            ? ""
            : typeof i.value == "string"
            ? Array.isArray(n.internalModelValue)
              ? n.internalModelValue.length === 2 && n.internalModelValue[1]
                ? D()
                : n.multiDates
                ? n.internalModelValue.map((T) => `${P(T)}`)
                : n.modelAuto
                ? `${P(n.internalModelValue[0])}`
                : `${P(n.internalModelValue[0])} -`
              : P(n.internalModelValue)
            : b()
        ),
        N = () => (n.multiDates ? "; " : " - "),
        x = c(() => (Array.isArray(O.value) ? O.value.join(N()) : O.value)),
        X = (T) => {
          if (!n.monthPicker) return !0;
          let R = !0;
          const H = ne(Qt(T));
          if (n.minDate && n.maxDate) {
            const q = ne(Qt(n.minDate)),
              B = ne(Qt(n.maxDate));
            return (wt(H, q) && yt(H, B)) || We(H, q) || We(H, B);
          }
          if (n.minDate) {
            const q = ne(Qt(n.minDate));
            R = wt(H, q) || We(H, q);
          }
          if (n.maxDate) {
            const q = ne(Qt(n.maxDate));
            R = yt(H, q) || We(H, q);
          }
          return R;
        },
        W = () => {
          S.value && w.value && f.value
            ? t("select-date")
            : t("invalid-select");
        };
      return (T, R) => (
        m(),
        v(
          "div",
          {
            class: "dp__action_row",
            style: Re(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {}),
          },
          [
            T.$slots["action-row"]
              ? he(
                  T.$slots,
                  "action-row",
                  tt(
                    Qe(
                      { key: 0 },
                      {
                        internalModelValue: T.internalModelValue,
                        disabled: _.value,
                        selectDate: () => T.$emit("select-date"),
                        closePicker: () => T.$emit("close-picker"),
                      }
                    )
                  )
                )
              : (m(),
                v(
                  ge,
                  { key: 1 },
                  [
                    L(r).showPreview
                      ? (m(),
                        v(
                          "div",
                          {
                            key: 0,
                            class: "dp__selection_preview",
                            title: x.value,
                          },
                          [
                            T.$slots["action-preview"]
                              ? he(T.$slots, "action-preview", {
                                  key: 0,
                                  value: T.internalModelValue,
                                })
                              : M("", !0),
                            T.$slots["action-preview"]
                              ? M("", !0)
                              : (m(),
                                v(ge, { key: 1 }, [Ne(J(x.value), 1)], 64)),
                          ],
                          8,
                          pC
                        ))
                      : M("", !0),
                    E("div", gC, [
                      T.$slots["action-buttons"]
                        ? he(T.$slots, "action-buttons", {
                            key: 0,
                            value: T.internalModelValue,
                          })
                        : M("", !0),
                      T.$slots["action-buttons"]
                        ? M("", !0)
                        : (m(),
                          v(
                            ge,
                            { key: 1 },
                            [
                              !L(l).enabled && L(r).showCancel
                                ? (m(),
                                  v(
                                    "button",
                                    {
                                      key: 0,
                                      ref_key: "cancelButtonRef",
                                      ref: g,
                                      type: "button",
                                      class:
                                        "dp__action_button dp__action_cancel",
                                      onClick:
                                        R[0] ||
                                        (R[0] = (H) => T.$emit("close-picker")),
                                      onKeydown: [
                                        R[1] ||
                                          (R[1] = De(
                                            (H) => T.$emit("close-picker"),
                                            ["enter"]
                                          )),
                                        R[2] ||
                                          (R[2] = De(
                                            (H) => T.$emit("close-picker"),
                                            ["space"]
                                          )),
                                      ],
                                    },
                                    J(T.cancelText),
                                    545
                                  ))
                                : M("", !0),
                              L(r).showNow
                                ? (m(),
                                  v(
                                    "button",
                                    {
                                      key: 1,
                                      ref_key: "cancelButtonRef",
                                      ref: g,
                                      type: "button",
                                      class:
                                        "dp__action_button dp__action_cancel",
                                      onClick:
                                        R[3] ||
                                        (R[3] = (H) => T.$emit("select-now")),
                                      onKeydown: [
                                        R[4] ||
                                          (R[4] = De(
                                            (H) => T.$emit("select-now"),
                                            ["enter"]
                                          )),
                                        R[5] ||
                                          (R[5] = De(
                                            (H) => T.$emit("select-now"),
                                            ["space"]
                                          )),
                                      ],
                                    },
                                    J(T.nowButtonLabel),
                                    545
                                  ))
                                : M("", !0),
                              L(r).showSelect
                                ? (m(),
                                  v(
                                    "button",
                                    {
                                      key: 2,
                                      ref_key: "selectButtonRef",
                                      ref: y,
                                      type: "button",
                                      class:
                                        "dp__action_button dp__action_select",
                                      disabled: _.value,
                                      onKeydown: [
                                        De(W, ["enter"]),
                                        De(W, ["space"]),
                                      ],
                                      onClick: W,
                                    },
                                    J(T.selectText),
                                    41,
                                    hC
                                  ))
                                : M("", !0),
                            ],
                            64
                          )),
                    ]),
                  ],
                  64
                )),
          ],
          4
        )
      );
    },
  }),
  vC = ["onKeydown"],
  yC = { class: "dp__selection_grid_header" },
  bC = [
    "aria-selected",
    "aria-disabled",
    "onClick",
    "onKeydown",
    "onMouseover",
  ],
  _C = ["aria-label"],
  ar = se({
    __name: "SelectionOverlay",
    props: {
      items: {},
      type: {},
      isLast: { type: Boolean },
      arrowNavigation: { type: Boolean },
      skipButtonRef: { type: Boolean },
      headerRefs: {},
      hideNavigation: {},
      escClose: { type: Boolean },
      useRelative: { type: Boolean },
      height: {},
      textInput: { type: [Boolean, Object] },
      config: {},
      noOverlayFocus: { type: Boolean },
      focusValue: {},
    },
    emits: ["selected", "toggle", "reset-flow", "hover-value"],
    setup(e, { expose: a, emit: t }) {
      const {
          setSelectionGrid: n,
          buildMultiLevelMatrix: r,
          setMonthPicker: i,
        } = La(),
        o = t,
        s = e,
        {
          defaultedAriaLabels: l,
          defaultedTextInput: d,
          defaultedConfig: p,
        } = dt(s),
        { hideNavigationButtons: u } = xr(),
        g = A(!1),
        y = A(null),
        f = A(null),
        _ = A([]),
        S = A(),
        w = A(null),
        b = A(0),
        D = A(null);
      Xc(() => {
        y.value = null;
      }),
        Oe(() => {
          Ot().then(() => R()), s.noOverlayFocus || O(), P(!0);
        }),
        zn(() => P(!1));
      const P = (k) => {
          var h;
          s.arrowNavigation &&
            ((h = s.headerRefs) != null && h.length ? i(k) : n(k));
        },
        O = () => {
          var k;
          const h = pt(f);
          h &&
            (d.value.enabled ||
              (y.value
                ? (k = y.value) == null || k.focus({ preventScroll: !0 })
                : h.focus({ preventScroll: !0 })),
            (g.value = h.clientHeight < h.scrollHeight));
        },
        N = c(() => ({
          dp__overlay: !0,
          "dp--overlay-absolute": !s.useRelative,
          "dp--overlay-relative": s.useRelative,
        })),
        x = c(() =>
          s.useRelative ? { height: `${s.height}px`, width: "260px" } : void 0
        ),
        X = c(() => ({ dp__overlay_col: !0 })),
        W = c(() => ({
          dp__btn: !0,
          dp__button: !0,
          dp__overlay_action: !0,
          dp__over_action_scroll: g.value,
          dp__button_bottom: s.isLast,
        })),
        T = c(() => {
          var k, h;
          return {
            dp__overlay_container: !0,
            dp__container_flex:
              ((k = s.items) == null ? void 0 : k.length) <= 6,
            dp__container_block:
              ((h = s.items) == null ? void 0 : h.length) > 6,
          };
        });
      je(
        () => s.items,
        () => R(),
        { deep: !0 }
      );
      const R = () => {
          Ot().then(() => {
            const k = pt(y),
              h = pt(f),
              F = pt(w),
              j = pt(D),
              ae = F ? F.getBoundingClientRect().height : 0;
            h &&
              (h.getBoundingClientRect().height
                ? (b.value = h.getBoundingClientRect().height - ae)
                : (b.value = p.value.modeHeight - ae)),
              k &&
                j &&
                (j.scrollTop =
                  k.offsetTop -
                  j.offsetTop -
                  (b.value / 2 - k.getBoundingClientRect().height) -
                  ae);
          });
        },
        H = (k) => {
          k.disabled || o("selected", k.value);
        },
        q = () => {
          o("toggle"), o("reset-flow");
        },
        B = () => {
          s.escClose && q();
        },
        I = (k, h, F, j) => {
          k &&
            ((h.active || h.value === s.focusValue) && (y.value = k),
            s.arrowNavigation &&
              (Array.isArray(_.value[F])
                ? (_.value[F][j] = k)
                : (_.value[F] = [k]),
              U()));
        },
        U = () => {
          var k, h;
          const F =
            (k = s.headerRefs) != null && k.length
              ? [s.headerRefs].concat(_.value)
              : _.value.concat([s.skipButtonRef ? [] : [w.value]]);
          r(
            ht(F),
            (h = s.headerRefs) != null && h.length
              ? "monthPicker"
              : "selectionGrid"
          );
        },
        V = (k) => {
          s.arrowNavigation || Ea(k, p.value, !0);
        },
        K = (k) => {
          (S.value = k), o("hover-value", k);
        };
      return (
        a({ focusGrid: O }),
        (k, h) => {
          var F;
          return (
            m(),
            v(
              "div",
              {
                ref_key: "gridWrapRef",
                ref: f,
                class: ee(N.value),
                style: Re(x.value),
                role: "dialog",
                tabindex: "0",
                onKeydown: [
                  De(Me(B, ["prevent"]), ["esc"]),
                  h[0] ||
                    (h[0] = De(
                      Me((j) => V(j), ["prevent"]),
                      ["left"]
                    )),
                  h[1] ||
                    (h[1] = De(
                      Me((j) => V(j), ["prevent"]),
                      ["up"]
                    )),
                  h[2] ||
                    (h[2] = De(
                      Me((j) => V(j), ["prevent"]),
                      ["down"]
                    )),
                  h[3] ||
                    (h[3] = De(
                      Me((j) => V(j), ["prevent"]),
                      ["right"]
                    )),
                ],
              },
              [
                E(
                  "div",
                  {
                    ref_key: "containerRef",
                    ref: D,
                    class: ee(T.value),
                    role: "grid",
                    style: Re({ height: `${b.value}px` }),
                  },
                  [
                    E("div", yC, [he(k.$slots, "header")]),
                    k.$slots.overlay
                      ? he(k.$slots, "overlay", { key: 0 })
                      : (m(!0),
                        v(
                          ge,
                          { key: 1 },
                          Se(
                            k.items,
                            (j, ae) => (
                              m(),
                              v(
                                "div",
                                {
                                  key: ae,
                                  class: ee([
                                    "dp__overlay_row",
                                    { dp__flex_row: k.items.length >= 3 },
                                  ]),
                                  role: "row",
                                },
                                [
                                  (m(!0),
                                  v(
                                    ge,
                                    null,
                                    Se(
                                      j,
                                      (le, Y) => (
                                        m(),
                                        v(
                                          "div",
                                          {
                                            key: le.value,
                                            ref_for: !0,
                                            ref: (C) => I(C, le, ae, Y),
                                            role: "gridcell",
                                            class: ee(X.value),
                                            "aria-selected": le.active,
                                            "aria-disabled":
                                              le.disabled || void 0,
                                            tabindex: "0",
                                            onClick: (C) => H(le),
                                            onKeydown: [
                                              De(
                                                Me((C) => H(le), ["prevent"]),
                                                ["enter"]
                                              ),
                                              De(
                                                Me((C) => H(le), ["prevent"]),
                                                ["space"]
                                              ),
                                            ],
                                            onMouseover: (C) => K(le.value),
                                          },
                                          [
                                            E(
                                              "div",
                                              { class: ee(le.className) },
                                              [
                                                k.$slots.item
                                                  ? he(k.$slots, "item", {
                                                      key: 0,
                                                      item: le,
                                                    })
                                                  : M("", !0),
                                                k.$slots.item
                                                  ? M("", !0)
                                                  : (m(),
                                                    v(
                                                      ge,
                                                      { key: 1 },
                                                      [Ne(J(le.text), 1)],
                                                      64
                                                    )),
                                              ],
                                              2
                                            ),
                                          ],
                                          42,
                                          bC
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ],
                                2
                              )
                            )
                          ),
                          128
                        )),
                  ],
                  6
                ),
                k.$slots["button-icon"]
                  ? ue(
                      (m(),
                      v(
                        "button",
                        {
                          key: 0,
                          ref_key: "toggleButton",
                          ref: w,
                          type: "button",
                          "aria-label":
                            (F = L(l)) == null ? void 0 : F.toggleOverlay,
                          class: ee(W.value),
                          tabindex: "0",
                          onClick: q,
                          onKeydown: [De(q, ["enter"]), De(q, ["tab"])],
                        },
                        [he(k.$slots, "button-icon")],
                        42,
                        _C
                      )),
                      [[Zt, !L(u)(k.hideNavigation, k.type)]]
                    )
                  : M("", !0),
              ],
              46,
              vC
            )
          );
        }
      );
    },
  }),
  Ur = se({
    __name: "InstanceWrap",
    props: { multiCalendars: {}, stretch: { type: Boolean } },
    setup(e) {
      const a = e,
        t = c(() =>
          a.multiCalendars > 0 ? [...Array(a.multiCalendars).keys()] : [0]
        ),
        n = c(() => ({ dp__instance_calendar: a.multiCalendars > 0 }));
      return (r, i) => (
        m(),
        v(
          "div",
          {
            class: ee({
              dp__menu_inner: !r.stretch,
              "dp--menu--inner-stretched": r.stretch,
              dp__flex_display: r.multiCalendars > 0,
            }),
          },
          [
            (m(!0),
            v(
              ge,
              null,
              Se(
                t.value,
                (o, s) => (
                  m(),
                  v(
                    "div",
                    { key: o, class: ee(n.value) },
                    [he(r.$slots, "default", { instance: o, index: s })],
                    2
                  )
                )
              ),
              128
            )),
          ],
          2
        )
      );
    },
  }),
  wC = ["aria-label", "aria-disabled"],
  Bn = se({
    compatConfig: { MODE: 3 },
    __name: "ArrowBtn",
    props: { ariaLabel: {}, disabled: { type: Boolean } },
    emits: ["activate", "set-ref"],
    setup(e, { emit: a }) {
      const t = a,
        n = A(null);
      return (
        Oe(() => t("set-ref", n)),
        (r, i) => (
          m(),
          v(
            "button",
            {
              ref_key: "elRef",
              ref: n,
              type: "button",
              class: "dp__btn dp--arrow-btn-nav",
              tabindex: "0",
              "aria-label": r.ariaLabel,
              "aria-disabled": r.disabled || void 0,
              onClick: i[0] || (i[0] = (o) => r.$emit("activate")),
              onKeydown: [
                i[1] ||
                  (i[1] = De(
                    Me((o) => r.$emit("activate"), ["prevent"]),
                    ["enter"]
                  )),
                i[2] ||
                  (i[2] = De(
                    Me((o) => r.$emit("activate"), ["prevent"]),
                    ["space"]
                  )),
              ],
            },
            [
              E(
                "span",
                {
                  class: ee([
                    "dp__inner_nav",
                    { dp__inner_nav_disabled: r.disabled },
                  ]),
                },
                [he(r.$slots, "default")],
                2
              ),
            ],
            40,
            wC
          )
        )
      );
    },
  }),
  kC = { class: "dp--year-mode-picker" },
  SC = ["aria-label"],
  Hc = se({
    __name: "YearModePicker",
    props: {
      ...aa,
      showYearPicker: { type: Boolean, default: !1 },
      items: { type: Array, default: () => [] },
      instance: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      isDisabled: { type: Function, default: () => !1 },
    },
    emits: ["toggle-year-picker", "year-select", "handle-year"],
    setup(e, { emit: a }) {
      const t = a,
        n = e,
        { showRightIcon: r, showLeftIcon: i } = xr(),
        {
          defaultedConfig: o,
          defaultedMultiCalendars: s,
          defaultedAriaLabels: l,
          defaultedTransitions: d,
        } = dt(n),
        { showTransition: p, transitionName: u } = er(d),
        g = (_ = !1, S) => {
          t("toggle-year-picker", { flow: _, show: S });
        },
        y = (_) => {
          t("year-select", _);
        },
        f = (_ = !1) => {
          t("handle-year", _);
        };
      return (_, S) => {
        var w, b, D;
        return (
          m(),
          v("div", kC, [
            L(i)(L(s), e.instance)
              ? (m(),
                G(
                  Bn,
                  {
                    key: 0,
                    ref: "mpPrevIconRef",
                    "aria-label": (w = L(l)) == null ? void 0 : w.prevYear,
                    disabled: e.isDisabled(!1),
                    onActivate: S[0] || (S[0] = (P) => f(!1)),
                  },
                  {
                    default: _e(() => [
                      _.$slots["arrow-left"]
                        ? he(_.$slots, "arrow-left", { key: 0 })
                        : M("", !0),
                      _.$slots["arrow-left"]
                        ? M("", !0)
                        : (m(), G(L(Ri), { key: 1 })),
                    ]),
                    _: 3,
                  },
                  8,
                  ["aria-label", "disabled"]
                ))
              : M("", !0),
            E(
              "button",
              {
                ref: "mpYearButtonRef",
                class: "dp__btn dp--year-select",
                type: "button",
                "aria-label": (b = L(l)) == null ? void 0 : b.openYearsOverlay,
                onClick: S[1] || (S[1] = () => g(!1)),
                onKeydown: S[2] || (S[2] = De(() => g(!1), ["enter"])),
              },
              [
                _.$slots.year
                  ? he(_.$slots, "year", { key: 0, year: e.year })
                  : M("", !0),
                _.$slots.year
                  ? M("", !0)
                  : (m(), v(ge, { key: 1 }, [Ne(J(e.year), 1)], 64)),
              ],
              40,
              SC
            ),
            L(r)(L(s), e.instance)
              ? (m(),
                G(
                  Bn,
                  {
                    key: 1,
                    ref: "mpNextIconRef",
                    "aria-label": (D = L(l)) == null ? void 0 : D.nextYear,
                    disabled: e.isDisabled(!0),
                    onActivate: S[3] || (S[3] = (P) => f(!0)),
                  },
                  {
                    default: _e(() => [
                      _.$slots["arrow-right"]
                        ? he(_.$slots, "arrow-right", { key: 0 })
                        : M("", !0),
                      _.$slots["arrow-right"]
                        ? M("", !0)
                        : (m(), G(L($i), { key: 1 })),
                    ]),
                    _: 3,
                  },
                  8,
                  ["aria-label", "disabled"]
                ))
              : M("", !0),
            Ee(
              At,
              { name: L(u)(e.showYearPicker), css: L(p) },
              {
                default: _e(() => [
                  e.showYearPicker
                    ? (m(),
                      G(
                        ar,
                        {
                          key: 0,
                          items: e.items,
                          "text-input": _.textInput,
                          "esc-close": _.escClose,
                          config: _.config,
                          "is-last": _.autoApply && !L(o).keepActionRow,
                          "hide-navigation": _.hideNavigation,
                          type: "year",
                          onToggle: g,
                          onSelected: S[4] || (S[4] = (P) => y(P)),
                        },
                        Pt(
                          {
                            "button-icon": _e(() => [
                              _.$slots["calendar-icon"]
                                ? he(_.$slots, "calendar-icon", { key: 0 })
                                : M("", !0),
                              _.$slots["calendar-icon"]
                                ? M("", !0)
                                : (m(), G(L(yn), { key: 1 })),
                            ]),
                            _: 2,
                          },
                          [
                            _.$slots["year-overlay-value"]
                              ? {
                                  name: "item",
                                  fn: _e(({ item: P }) => [
                                    he(_.$slots, "year-overlay-value", {
                                      text: P.text,
                                      value: P.value,
                                    }),
                                  ]),
                                  key: "0",
                                }
                              : void 0,
                          ]
                        ),
                        1032,
                        [
                          "items",
                          "text-input",
                          "esc-close",
                          "config",
                          "is-last",
                          "hide-navigation",
                        ]
                      ))
                    : M("", !0),
                ]),
                _: 3,
              },
              8,
              ["name", "css"]
            ),
          ])
        );
      };
    },
  }),
  ji = (e, a, t) => {
    if (a.value && Array.isArray(a.value))
      if (a.value.some((n) => We(e, n))) {
        const n = a.value.filter((r) => !We(r, e));
        a.value = n.length ? n : null;
      } else ((t && +t > a.value.length) || !t) && a.value.push(e);
    else a.value = [e];
  },
  Wi = (e, a, t) => {
    let n = e.value ? e.value.slice() : [];
    return (
      n.length === 2 && n[1] !== null && (n = []),
      n.length
        ? yt(a, n[0])
          ? (n.unshift(a), t("range-start", n[0]), t("range-start", n[1]))
          : ((n[1] = a), t("range-end", a))
        : ((n = [a]), t("range-start", a)),
      (e.value = n),
      n
    );
  },
  Vr = (e, a, t, n) => {
    e[0] && e[1] && t && a("auto-apply"),
      e[0] && !e[1] && n && t && a("auto-apply");
  },
  Uc = (e) => {
    Array.isArray(e.value) && e.value.length <= 2 && e.range
      ? (e.modelValue.value = e.value.map((a) => ea(ne(a), e.timezone)))
      : Array.isArray(e.value) ||
        (e.modelValue.value = ea(ne(e.value), e.timezone));
  },
  Vc = ({
    multiCalendars: e,
    highlight: a,
    calendars: t,
    modelValue: n,
    props: r,
    year: i,
    month: o,
    emit: s,
  }) => {
    const l = c(() => Yi(r.yearRange, r.reverseYears)),
      d = A([!1]),
      p = c(() => (P, O) => {
        const N = et(Qt(new Date()), { month: o.value(P), year: i.value(P) });
        return Rc(N, r.maxDate, r.minDate, r.preventMinMaxNavigation, O);
      }),
      u = () => {
        for (let P = 0; P < e.value.count; P++)
          if (P === 0) t.value[P] = t.value[0];
          else {
            const O = et(ne(), t.value[P - 1]);
            t.value[P] = { month: Ve(O), year: $e(Ii(O, 1)) };
          }
      },
      g = (P) => {
        if (!P) return u();
        const O = et(ne(), t.value[P]);
        return (t.value[0].year = $e(Sc(O, e.value.count - 1))), u();
      },
      y = (P) => (r.focusStartDate ? P[0] : P[1] ? P[1] : P[0]),
      f = () => {
        if (n.value) {
          const P = Array.isArray(n.value) ? y(n.value) : n.value;
          t.value[0] = { month: Ve(P), year: $e(P) };
        }
      };
    Oe(() => {
      f(), e.value.count && u();
    });
    const _ = (P, O) => {
        (t.value[O].year = P), e.value.count && !e.value.solo && g(O);
      },
      S = c(
        () => (P) =>
          mn(l.value, (O) => {
            const N = i.value(P) === O.value,
              x = Gn(O.value, pn(r.minDate), pn(r.maxDate)),
              X = qi(a.value, O.value);
            return { active: N, disabled: x, highlighted: X };
          })
      ),
      w = (P, O) => {
        _(P, O), D(O);
      },
      b = (P, O = !1) => {
        if (!p.value(P, O)) {
          const N = O ? i.value(P) + 1 : i.value(P) - 1;
          _(N, P);
        }
      },
      D = (P, O = !1, N) => {
        O || s("reset-flow"),
          N !== void 0 ? (d.value[P] = N) : (d.value[P] = !d.value[P]),
          d.value || s("overlay-closed");
      };
    return {
      isDisabled: p,
      groupedYears: S,
      showYearPicker: d,
      selectYear: _,
      toggleYearPicker: D,
      handleYearSelect: w,
      handleYear: b,
    };
  },
  CC = (e, a) => {
    const {
        defaultedMultiCalendars: t,
        defaultedAriaLabels: n,
        defaultedTransitions: r,
        defaultedConfig: i,
        defaultedHighlight: o,
      } = dt(e),
      { modelValue: s, year: l, month: d, calendars: p } = tr(e, a),
      u = c(() => Ec(e.formatLocale, e.locale, e.monthNameFormat)),
      g = A(null),
      {
        selectYear: y,
        groupedYears: f,
        showYearPicker: _,
        toggleYearPicker: S,
        handleYearSelect: w,
        handleYear: b,
        isDisabled: D,
      } = Vc({
        modelValue: s,
        multiCalendars: t,
        highlight: o,
        calendars: p,
        year: l,
        month: d,
        props: e,
        emit: a,
      });
    Oe(() => {
      e.startDate &&
        ((s.value && e.focusStartDate) || !s.value) &&
        y($e(ne(e.startDate)), 0);
    });
    const P = (V) =>
        V ? { month: Ve(V), year: $e(V) } : { month: null, year: null },
      O = () =>
        s.value
          ? Array.isArray(s.value)
            ? s.value.map((V) => P(V))
            : P(s.value)
          : P(),
      N = (V, K) => {
        const k = p.value[V],
          h = O();
        return Array.isArray(h)
          ? h.some((F) => F.year === k?.year && F.month === K)
          : k?.year === h.year && K === h.month;
      },
      x = (V, K, k) => {
        var h, F;
        const j = O();
        return Array.isArray(j)
          ? l.value(K) === ((h = j[k]) == null ? void 0 : h.year) &&
              V === ((F = j[k]) == null ? void 0 : F.month)
          : !1;
      },
      X = (V, K) => {
        if (e.range) {
          const k = O();
          if (Array.isArray(s.value) && Array.isArray(k)) {
            const h = x(V, K, 0) || x(V, K, 1),
              F = ya(Qt(ne()), V, l.value(K));
            return Nr(s.value, g.value, F) && !h;
          }
          return !1;
        }
        return !1;
      },
      W = c(
        () => (V) =>
          mn(u.value, (K) => {
            const k = N(V, K.value),
              h =
                Gn(
                  K.value,
                  Mc(l.value(V), e.minDate),
                  Oc(l.value(V), e.maxDate)
                ) || qS(e.disabledDates, l.value(V)).includes(K.value),
              F = X(K.value, V),
              j = Nc(o.value, K.value, l.value(V));
            return { active: k, disabled: h, isBetween: F, highlighted: j };
          })
      ),
      T = (V, K) => ya(Qt(ne()), V, l.value(K)),
      R = (V, K) => {
        const k = s.value ? s.value : Qt(new Date());
        (s.value = ya(k, V, l.value(K))), a("auto-apply");
      },
      H = (V, K) => {
        const k = Wi(s, T(V, K), a);
        Vr(k, a, e.autoApply, e.modelAuto);
      },
      q = (V, K) => {
        ji(T(V, K), s, e.multiDatesLimit), a("auto-apply", !0);
      },
      B = (V, K) => (
        (p.value[K].month = V),
        U(K, p.value[K].year, V),
        e.multiDates ? q(V, K) : e.range ? H(V, K) : R(V, K)
      ),
      I = (V, K) => {
        y(V, K), U(K, V, null);
      },
      U = (V, K, k) => {
        let h = k;
        if (!h && h !== 0) {
          const F = O();
          h = Array.isArray(F) ? F[V].month : F.month;
        }
        a("update-month-year", { instance: V, year: K, month: h });
      };
    return {
      groupedMonths: W,
      groupedYears: f,
      year: l,
      isDisabled: D,
      defaultedMultiCalendars: t,
      defaultedAriaLabels: n,
      defaultedTransitions: r,
      defaultedConfig: i,
      showYearPicker: _,
      modelValue: s,
      presetDate: (V, K) => {
        Uc({
          value: V,
          modelValue: s,
          range: e.range,
          timezone: K ? void 0 : e.timezone,
        }),
          a("auto-apply");
      },
      setHoverDate: (V, K) => {
        g.value = T(V, K);
      },
      selectMonth: B,
      selectYear: I,
      toggleYearPicker: S,
      handleYearSelect: w,
      handleYear: b,
      getModelMonthYear: O,
    };
  },
  TC = se({
    compatConfig: { MODE: 3 },
    __name: "MonthPicker",
    props: { ...aa },
    emits: [
      "update:internal-model-value",
      "overlay-closed",
      "reset-flow",
      "range-start",
      "range-end",
      "auto-apply",
      "update-month-year",
      "mount",
    ],
    setup(e, { expose: a, emit: t }) {
      const n = t,
        r = ja(),
        i = Nt(r, "yearMode"),
        o = e;
      Oe(() => {
        o.shadow || n("mount", null);
      });
      const {
        groupedMonths: s,
        groupedYears: l,
        year: d,
        isDisabled: p,
        defaultedMultiCalendars: u,
        defaultedConfig: g,
        showYearPicker: y,
        modelValue: f,
        presetDate: _,
        setHoverDate: S,
        selectMonth: w,
        selectYear: b,
        toggleYearPicker: D,
        handleYearSelect: P,
        handleYear: O,
        getModelMonthYear: N,
      } = CC(o, n);
      return (
        a({
          getSidebarProps: () => ({
            modelValue: f,
            year: d,
            getModelMonthYear: N,
            selectMonth: w,
            selectYear: b,
            handleYear: O,
          }),
          presetDate: _,
          toggleYearPicker: (x) => D(0, x),
        }),
        (x, X) => (
          m(),
          G(
            Ur,
            { "multi-calendars": L(u).count, stretch: "" },
            {
              default: _e(({ instance: W }) => [
                x.$slots["month-year"]
                  ? he(
                      x.$slots,
                      "month-year",
                      tt(
                        Qe(
                          { key: 0 },
                          {
                            year: L(d),
                            months: L(s)(W),
                            years: L(l)(W),
                            selectMonth: L(w),
                            selectYear: L(b),
                            instance: W,
                          }
                        )
                      )
                    )
                  : (m(),
                    G(
                      ar,
                      {
                        key: 1,
                        items: L(s)(W),
                        "arrow-navigation": x.arrowNavigation,
                        "is-last": x.autoApply && !L(g).keepActionRow,
                        "esc-close": x.escClose,
                        height: L(g).modeHeight,
                        config: x.config,
                        "no-overlay-focus": !!(x.noOverlayFocus || x.textInput),
                        "use-relative": "",
                        type: "month",
                        onSelected: (T) => L(w)(T, W),
                        onHoverValue: (T) => L(S)(T, W),
                      },
                      {
                        header: _e(() => [
                          Ee(
                            Hc,
                            Qe(x.$props, {
                              items: L(l)(W),
                              instance: W,
                              "show-year-picker": L(y)[W],
                              year: L(d)(W),
                              "is-disabled": (T) => L(p)(W, T),
                              onHandleYear: (T) => L(O)(W, T),
                              onYearSelect: (T) => L(P)(T, W),
                              onToggleYearPicker: (T) =>
                                L(D)(W, T?.flow, T?.show),
                            }),
                            Pt({ _: 2 }, [
                              Se(L(i), (T, R) => ({
                                name: T,
                                fn: _e((H) => [he(x.$slots, T, tt(_t(H)))]),
                              })),
                            ]),
                            1040,
                            [
                              "items",
                              "instance",
                              "show-year-picker",
                              "year",
                              "is-disabled",
                              "onHandleYear",
                              "onYearSelect",
                              "onToggleYearPicker",
                            ]
                          ),
                        ]),
                        _: 2,
                      },
                      1032,
                      [
                        "items",
                        "arrow-navigation",
                        "is-last",
                        "esc-close",
                        "height",
                        "config",
                        "no-overlay-focus",
                        "onSelected",
                        "onHoverValue",
                      ]
                    )),
              ]),
              _: 3,
            },
            8,
            ["multi-calendars"]
          )
        )
      );
    },
  }),
  PC = (e, a) => {
    const { modelValue: t } = tr(e, a),
      n = A(null),
      { defaultedHighlight: r, defaultedFilters: i } = dt(e),
      o = A();
    Oe(() => {
      e.startDate &&
        ((t.value && e.focusStartDate) || !t.value) &&
        (o.value = $e(ne(e.startDate)));
    });
    const s = (u) =>
        Array.isArray(t.value)
          ? t.value.some((g) => $e(g) === u)
          : t.value
          ? $e(t.value) === u
          : !1,
      l = (u) =>
        e.range && Array.isArray(t.value) ? Nr(t.value, n.value, p(u)) : !1,
      d = c(() =>
        mn(Yi(e.yearRange, e.reverseYears), (u) => {
          const g = s(u.value),
            y =
              Gn(u.value, pn(e.minDate), pn(e.maxDate)) ||
              i.value.years.includes(u.value),
            f = l(u.value) && !g,
            _ = qi(r.value, u.value);
          return { active: g, disabled: y, isBetween: f, highlighted: _ };
        })
      ),
      p = (u) => ua(Qt(new Date()), u);
    return {
      groupedYears: d,
      modelValue: t,
      focusYear: o,
      setHoverValue: (u) => {
        n.value = ua(Qt(new Date()), u);
      },
      selectYear: (u) => {
        var g;
        if (e.multiDates)
          return (
            t.value
              ? Array.isArray(t.value) &&
                (((g = t.value) == null
                  ? void 0
                  : g.map((y) => $e(y))
                ).includes(u)
                  ? (t.value = t.value.filter((y) => $e(y) !== u))
                  : t.value.push(ua(kt(ne()), u)))
              : (t.value = [ua(kt(ne()), u)]),
            a("auto-apply", !0)
          );
        if (e.range) {
          const y = Wi(t, p(u), a);
          return Vr(y, a, e.autoApply, e.modelAuto);
        }
        (t.value = p(u)), a("auto-apply");
      },
    };
  },
  IC = se({
    compatConfig: { MODE: 3 },
    __name: "YearPicker",
    props: { ...aa },
    emits: [
      "update:internal-model-value",
      "reset-flow",
      "range-start",
      "range-end",
      "auto-apply",
    ],
    setup(e, { expose: a, emit: t }) {
      const n = t,
        r = e,
        {
          groupedYears: i,
          modelValue: o,
          focusYear: s,
          selectYear: l,
          setHoverValue: d,
        } = PC(r, n),
        { defaultedConfig: p } = dt(r);
      return (
        a({ getSidebarProps: () => ({ modelValue: o, selectYear: l }) }),
        (u, g) => (
          m(),
          v("div", null, [
            u.$slots["month-year"]
              ? he(
                  u.$slots,
                  "month-year",
                  tt(Qe({ key: 0 }, { years: L(i), selectYear: L(l) }))
                )
              : (m(),
                G(
                  ar,
                  {
                    key: 1,
                    items: L(i),
                    "is-last": u.autoApply && !L(p).keepActionRow,
                    height: L(p).modeHeight,
                    config: u.config,
                    "no-overlay-focus": !!(u.noOverlayFocus || u.textInput),
                    "focus-value": L(s),
                    type: "year",
                    "use-relative": "",
                    onSelected: L(l),
                    onHoverValue: L(d),
                  },
                  Pt({ _: 2 }, [
                    u.$slots["year-overlay-value"]
                      ? {
                          name: "item",
                          fn: _e(({ item: y }) => [
                            he(u.$slots, "year-overlay-value", {
                              text: y.text,
                              value: y.value,
                            }),
                          ]),
                          key: "0",
                        }
                      : void 0,
                  ]),
                  1032,
                  [
                    "items",
                    "is-last",
                    "height",
                    "config",
                    "no-overlay-focus",
                    "focus-value",
                    "onSelected",
                    "onHoverValue",
                  ]
                )),
          ])
        )
      );
    },
  }),
  EC = { key: 0, class: "dp__time_input" },
  DC = ["aria-label", "onKeydown", "onClick"],
  MC = E("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1),
  OC = E("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1),
  AC = ["aria-label", "disabled", "onKeydown", "onClick"],
  LC = ["aria-label", "onKeydown", "onClick"],
  BC = E("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1),
  RC = E("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1),
  $C = { key: 0 },
  NC = ["aria-label", "onKeydown"],
  xC = se({
    compatConfig: { MODE: 3 },
    __name: "TimeInput",
    props: {
      hours: { type: Number, default: 0 },
      minutes: { type: Number, default: 0 },
      seconds: { type: Number, default: 0 },
      closeTimePickerBtn: { type: Object, default: null },
      order: { type: Number, default: 0 },
      disabledTimesConfig: { type: Function, default: null },
      validateTime: { type: Function, default: () => !1 },
      ...aa,
    },
    emits: [
      "set-hours",
      "set-minutes",
      "update:hours",
      "update:minutes",
      "update:seconds",
      "reset-flow",
      "mounted",
      "overlay-closed",
      "am-pm-change",
    ],
    setup(e, { expose: a, emit: t }) {
      const n = t,
        r = e,
        { setTimePickerElements: i, setTimePickerBackRef: o } = La(),
        {
          defaultedAriaLabels: s,
          defaultedTransitions: l,
          defaultedFilters: d,
          defaultedConfig: p,
        } = dt(r),
        { transitionName: u, showTransition: g } = er(l),
        y = _a({ hours: !1, minutes: !1, seconds: !1 }),
        f = A("AM"),
        _ = A(null),
        S = A([]);
      Oe(() => {
        n("mounted");
      });
      const w = (C) =>
          et(new Date(), {
            hours: C.hours,
            minutes: C.minutes,
            seconds: r.enableSeconds ? C.seconds : 0,
            milliseconds: 0,
          }),
        b = c(() => (C) => B(C, r[C]) || P(C, r[C])),
        D = c(() => ({
          hours: r.hours,
          minutes: r.minutes,
          seconds: r.seconds,
        })),
        P = (C, re) =>
          r.range && !r.disableTimeRangeValidation
            ? !r.validateTime(C, re)
            : !1,
        O = (C, re) => {
          if (r.range && !r.disableTimeRangeValidation) {
            const ce = re ? +r[`${C}Increment`] : -+r[`${C}Increment`],
              Q = r[C] + ce;
            return !r.validateTime(C, Q);
          }
          return !1;
        },
        N = c(() => (C) => !U(+r[C] + +r[`${C}Increment`], C) || O(C, !0)),
        x = c(() => (C) => !U(+r[C] - +r[`${C}Increment`], C) || O(C, !1)),
        X = (C, re) => ac(et(ne(), C), re),
        W = (C, re) => tS(et(ne(), C), re),
        T = c(() => ({
          dp__time_col: !0,
          dp__time_col_block: !r.timePickerInline,
          dp__time_col_reg_block:
            !r.enableSeconds && r.is24 && !r.timePickerInline,
          dp__time_col_reg_inline:
            !r.enableSeconds && r.is24 && r.timePickerInline,
          dp__time_col_reg_with_button: !r.enableSeconds && !r.is24,
          dp__time_col_sec: r.enableSeconds && r.is24,
          dp__time_col_sec_with_button: r.enableSeconds && !r.is24,
        })),
        R = c(() => {
          const C = [
            { type: "hours" },
            { type: "", separator: !0 },
            { type: "minutes" },
          ];
          return r.enableSeconds
            ? C.concat([{ type: "", separator: !0 }, { type: "seconds" }])
            : C;
        }),
        H = c(() => R.value.filter((C) => !C.separator)),
        q = c(() => (C) => {
          if (C === "hours") {
            const re = F(+r.hours);
            return { text: re < 10 ? `0${re}` : `${re}`, value: re };
          }
          return { text: r[C] < 10 ? `0${r[C]}` : `${r[C]}`, value: r[C] };
        }),
        B = (C, re) => {
          var ce;
          if (!r.disabledTimesConfig) return !1;
          const Q = r.disabledTimesConfig(r.order, C === "hours" ? re : void 0);
          return Q[C] ? !!((ce = Q[C]) != null && ce.includes(re)) : !0;
        },
        I = (C) => {
          const re = r.is24 ? 24 : 12,
            ce = C === "hours" ? re : 60,
            Q = +r[`${C}GridIncrement`],
            fe = C === "hours" && !r.is24 ? Q : 0,
            me = [];
          for (let z = fe; z < ce; z += Q)
            me.push({ value: z, text: z < 10 ? `0${z}` : `${z}` });
          return (
            C === "hours" && !r.is24 && me.push({ value: 0, text: "12" }),
            mn(me, (z) => ({
              active: !1,
              disabled:
                d.value.times[C].includes(z.value) ||
                !U(z.value, C) ||
                B(C, z.value) ||
                P(C, z.value),
            }))
          );
        },
        U = (C, re) => {
          const ce = r.minTime ? w(fo(r.minTime)) : null,
            Q = r.maxTime ? w(fo(r.maxTime)) : null,
            fe = w(fo(D.value, re, C));
          return ce && Q
            ? (Wn(fe, Q) || en(fe, Q)) && (jn(fe, ce) || en(fe, ce))
            : ce
            ? jn(fe, ce) || en(fe, ce)
            : Q
            ? Wn(fe, Q) || en(fe, Q)
            : !0;
        },
        V = (C) => r[`no${C[0].toUpperCase() + C.slice(1)}Overlay`],
        K = (C) => {
          V(C) || ((y[C] = !y[C]), y[C] || n("overlay-closed"));
        },
        k = (C) => (C === "hours" ? Jt : C === "minutes" ? ca : cn),
        h = (C, re = !0) => {
          const ce = re ? X : W,
            Q = re ? +r[`${C}Increment`] : -+r[`${C}Increment`];
          U(+r[C] + Q, C) &&
            n(
              `update:${C}`,
              k(C)(ce({ [C]: +r[C] }, { [C]: +r[`${C}Increment`] }))
            );
        },
        F = (C) =>
          r.is24 ? C : (C >= 12 ? (f.value = "PM") : (f.value = "AM"), MS(C)),
        j = () => {
          f.value === "PM"
            ? ((f.value = "AM"), n("update:hours", r.hours - 12))
            : ((f.value = "PM"), n("update:hours", r.hours + 12)),
            n("am-pm-change", f.value);
        },
        ae = (C) => {
          y[C] = !0;
        },
        le = (C, re, ce) => {
          if (C && r.arrowNavigation) {
            Array.isArray(S.value[re])
              ? (S.value[re][ce] = C)
              : (S.value[re] = [C]);
            const Q = S.value.reduce(
              (fe, me) => me.map((z, oe) => [...(fe[oe] || []), me[oe]]),
              []
            );
            o(r.closeTimePickerBtn),
              _.value && (Q[1] = Q[1].concat(_.value)),
              i(Q, r.order);
          }
        },
        Y = (C, re) => (
          K(C),
          C === "hours" && !r.is24
            ? n(`update:${C}`, f.value === "PM" ? re + 12 : re)
            : n(`update:${C}`, re)
        );
      return (
        a({ openChildCmp: ae }),
        (C, re) => {
          var ce;
          return C.disabled
            ? M("", !0)
            : (m(),
              v("div", EC, [
                (m(!0),
                v(
                  ge,
                  null,
                  Se(R.value, (Q, fe) => {
                    var me, z, oe;
                    return (
                      m(),
                      v(
                        "div",
                        { key: fe, class: ee(T.value) },
                        [
                          Q.separator
                            ? (m(), v(ge, { key: 0 }, [Ne(" : ")], 64))
                            : (m(),
                              v(
                                ge,
                                { key: 1 },
                                [
                                  E(
                                    "button",
                                    {
                                      ref_for: !0,
                                      ref: (Pe) => le(Pe, fe, 0),
                                      type: "button",
                                      class: ee({
                                        dp__btn: !0,
                                        dp__inc_dec_button: !C.timePickerInline,
                                        dp__inc_dec_button_inline:
                                          C.timePickerInline,
                                        dp__tp_inline_btn_top:
                                          C.timePickerInline,
                                        dp__inc_dec_button_disabled: N.value(
                                          Q.type
                                        ),
                                      }),
                                      "aria-label":
                                        (me = L(s)) == null
                                          ? void 0
                                          : me.incrementValue(Q.type),
                                      tabindex: "0",
                                      onKeydown: [
                                        De(
                                          Me((Pe) => h(Q.type), ["prevent"]),
                                          ["enter"]
                                        ),
                                        De(
                                          Me((Pe) => h(Q.type), ["prevent"]),
                                          ["space"]
                                        ),
                                      ],
                                      onClick: (Pe) => h(Q.type),
                                    },
                                    [
                                      r.timePickerInline
                                        ? (m(), v(ge, { key: 1 }, [MC, OC], 64))
                                        : (m(),
                                          v(
                                            ge,
                                            { key: 0 },
                                            [
                                              C.$slots["arrow-up"]
                                                ? he(C.$slots, "arrow-up", {
                                                    key: 0,
                                                  })
                                                : M("", !0),
                                              C.$slots["arrow-up"]
                                                ? M("", !0)
                                                : (m(), G(L(xi), { key: 1 })),
                                            ],
                                            64
                                          )),
                                    ],
                                    42,
                                    DC
                                  ),
                                  E(
                                    "button",
                                    {
                                      ref_for: !0,
                                      ref: (Pe) => le(Pe, fe, 1),
                                      type: "button",
                                      "aria-label":
                                        (z = L(s)) == null
                                          ? void 0
                                          : z.openTpOverlay(Q.type),
                                      class: ee({
                                        dp__time_display: !0,
                                        dp__time_display_block:
                                          !C.timePickerInline,
                                        dp__time_display_inline:
                                          C.timePickerInline,
                                        "dp--time-invalid": b.value(Q.type),
                                        "dp--time-overlay-btn": !b.value(
                                          Q.type
                                        ),
                                      }),
                                      disabled: V(Q.type),
                                      tabindex: "0",
                                      onKeydown: [
                                        De(
                                          Me((Pe) => K(Q.type), ["prevent"]),
                                          ["enter"]
                                        ),
                                        De(
                                          Me((Pe) => K(Q.type), ["prevent"]),
                                          ["space"]
                                        ),
                                      ],
                                      onClick: (Pe) => K(Q.type),
                                    },
                                    [
                                      C.$slots[Q.type]
                                        ? he(C.$slots, Q.type, {
                                            key: 0,
                                            text: q.value(Q.type).text,
                                            value: q.value(Q.type).value,
                                          })
                                        : M("", !0),
                                      C.$slots[Q.type]
                                        ? M("", !0)
                                        : (m(),
                                          v(
                                            ge,
                                            { key: 1 },
                                            [Ne(J(q.value(Q.type).text), 1)],
                                            64
                                          )),
                                    ],
                                    42,
                                    AC
                                  ),
                                  E(
                                    "button",
                                    {
                                      ref_for: !0,
                                      ref: (Pe) => le(Pe, fe, 2),
                                      type: "button",
                                      class: ee({
                                        dp__btn: !0,
                                        dp__inc_dec_button: !C.timePickerInline,
                                        dp__inc_dec_button_inline:
                                          C.timePickerInline,
                                        dp__tp_inline_btn_bottom:
                                          C.timePickerInline,
                                        dp__inc_dec_button_disabled: x.value(
                                          Q.type
                                        ),
                                      }),
                                      "aria-label":
                                        (oe = L(s)) == null
                                          ? void 0
                                          : oe.decrementValue(Q.type),
                                      tabindex: "0",
                                      onKeydown: [
                                        De(
                                          Me(
                                            (Pe) => h(Q.type, !1),
                                            ["prevent"]
                                          ),
                                          ["enter"]
                                        ),
                                        De(
                                          Me(
                                            (Pe) => h(Q.type, !1),
                                            ["prevent"]
                                          ),
                                          ["space"]
                                        ),
                                      ],
                                      onClick: (Pe) => h(Q.type, !1),
                                    },
                                    [
                                      r.timePickerInline
                                        ? (m(), v(ge, { key: 1 }, [BC, RC], 64))
                                        : (m(),
                                          v(
                                            ge,
                                            { key: 0 },
                                            [
                                              C.$slots["arrow-down"]
                                                ? he(C.$slots, "arrow-down", {
                                                    key: 0,
                                                  })
                                                : M("", !0),
                                              C.$slots["arrow-down"]
                                                ? M("", !0)
                                                : (m(), G(L(Hi), { key: 1 })),
                                            ],
                                            64
                                          )),
                                    ],
                                    42,
                                    LC
                                  ),
                                ],
                                64
                              )),
                        ],
                        2
                      )
                    );
                  }),
                  128
                )),
                C.is24
                  ? M("", !0)
                  : (m(),
                    v("div", $C, [
                      C.$slots["am-pm-button"]
                        ? he(C.$slots, "am-pm-button", {
                            key: 0,
                            toggle: j,
                            value: f.value,
                          })
                        : M("", !0),
                      C.$slots["am-pm-button"]
                        ? M("", !0)
                        : (m(),
                          v(
                            "button",
                            {
                              key: 1,
                              ref_key: "amPmButton",
                              ref: _,
                              type: "button",
                              class: "dp__pm_am_button",
                              role: "button",
                              "aria-label":
                                (ce = L(s)) == null ? void 0 : ce.amPmButton,
                              tabindex: "0",
                              onClick: j,
                              onKeydown: [
                                De(Me(j, ["prevent"]), ["enter"]),
                                De(Me(j, ["prevent"]), ["space"]),
                              ],
                            },
                            J(f.value),
                            41,
                            NC
                          )),
                    ])),
                (m(!0),
                v(
                  ge,
                  null,
                  Se(
                    H.value,
                    (Q, fe) => (
                      m(),
                      G(
                        At,
                        { key: fe, name: L(u)(y[Q.type]), css: L(g) },
                        {
                          default: _e(() => [
                            y[Q.type]
                              ? (m(),
                                G(
                                  ar,
                                  {
                                    key: 0,
                                    items: I(Q.type),
                                    "is-last":
                                      C.autoApply && !L(p).keepActionRow,
                                    "esc-close": C.escClose,
                                    type: Q.type,
                                    "text-input": C.textInput,
                                    config: C.config,
                                    "arrow-navigation": C.arrowNavigation,
                                    onSelected: (me) => Y(Q.type, me),
                                    onToggle: (me) => K(Q.type),
                                    onResetFlow:
                                      re[0] ||
                                      (re[0] = (me) => C.$emit("reset-flow")),
                                  },
                                  Pt(
                                    {
                                      "button-icon": _e(() => [
                                        C.$slots["clock-icon"]
                                          ? he(C.$slots, "clock-icon", {
                                              key: 0,
                                            })
                                          : M("", !0),
                                        C.$slots["clock-icon"]
                                          ? M("", !0)
                                          : (m(),
                                            G(
                                              gn(
                                                C.timePickerInline
                                                  ? L(yn)
                                                  : L(Ni)
                                              ),
                                              { key: 1 }
                                            )),
                                      ]),
                                      _: 2,
                                    },
                                    [
                                      C.$slots[`${Q.type}-overlay-value`]
                                        ? {
                                            name: "item",
                                            fn: _e(({ item: me }) => [
                                              he(
                                                C.$slots,
                                                `${Q.type}-overlay-value`,
                                                {
                                                  text: me.text,
                                                  value: me.value,
                                                }
                                              ),
                                            ]),
                                            key: "0",
                                          }
                                        : void 0,
                                    ]
                                  ),
                                  1032,
                                  [
                                    "items",
                                    "is-last",
                                    "esc-close",
                                    "type",
                                    "text-input",
                                    "config",
                                    "arrow-navigation",
                                    "onSelected",
                                    "onToggle",
                                  ]
                                ))
                              : M("", !0),
                          ]),
                          _: 2,
                        },
                        1032,
                        ["name", "css"]
                      )
                    )
                  ),
                  128
                )),
              ]));
        }
      );
    },
  }),
  HC = { class: "dp--tp-wrap" },
  UC = ["aria-label", "tabindex"],
  VC = ["tabindex"],
  FC = ["aria-label"],
  Fc = se({
    compatConfig: { MODE: 3 },
    __name: "TimePicker",
    props: {
      hours: { type: [Number, Array], default: 0 },
      minutes: { type: [Number, Array], default: 0 },
      seconds: { type: [Number, Array], default: 0 },
      disabledTimesConfig: { type: Function, default: null },
      validateTime: { type: Function, default: () => !1 },
      ...aa,
    },
    emits: [
      "update:hours",
      "update:minutes",
      "update:seconds",
      "mount",
      "reset-flow",
      "overlay-opened",
      "overlay-closed",
      "am-pm-change",
    ],
    setup(e, { expose: a, emit: t }) {
      const n = t,
        r = e,
        { buildMatrix: i, setTimePicker: o } = La(),
        s = ja(),
        {
          defaultedTransitions: l,
          defaultedAriaLabels: d,
          defaultedTextInput: p,
          defaultedConfig: u,
        } = dt(r),
        { transitionName: g, showTransition: y } = er(l),
        { hideNavigationButtons: f } = xr(),
        _ = A(null),
        S = A(null),
        w = A([]),
        b = A(null);
      Oe(() => {
        n("mount"),
          !r.timePicker && r.arrowNavigation
            ? i([pt(_.value)], "time")
            : o(!0, r.timePicker);
      });
      const D = c(() =>
          r.range && r.modelAuto ? Dc(r.internalModelValue) : !0
        ),
        P = A(!1),
        O = (I) => ({
          hours: Array.isArray(r.hours) ? r.hours[I] : r.hours,
          minutes: Array.isArray(r.minutes) ? r.minutes[I] : r.minutes,
          seconds: Array.isArray(r.seconds) ? r.seconds[I] : r.seconds,
        }),
        N = c(() => {
          const I = [];
          if (r.range) for (let U = 0; U < 2; U++) I.push(O(U));
          else I.push(O(0));
          return I;
        }),
        x = (I, U = !1, V = "") => {
          U || n("reset-flow"),
            (P.value = I),
            n(I ? "overlay-opened" : "overlay-closed"),
            r.arrowNavigation && o(I),
            Ot(() => {
              V !== "" && w.value[0] && w.value[0].openChildCmp(V);
            });
        },
        X = c(() => ({
          dp__btn: !0,
          dp__button: !0,
          dp__button_bottom: r.autoApply && !u.value.keepActionRow,
        })),
        W = Nt(s, "timePicker"),
        T = (I, U, V) =>
          r.range ? (U === 0 ? [I, N.value[1][V]] : [N.value[0][V], I]) : I,
        R = (I) => {
          n("update:hours", I);
        },
        H = (I) => {
          n("update:minutes", I);
        },
        q = (I) => {
          n("update:seconds", I);
        },
        B = () => {
          if (b.value && !p.value.enabled && !r.noOverlayFocus) {
            const I = AS(b.value);
            I && I.focus({ preventScroll: !0 });
          }
        };
      return (
        a({ toggleTimePicker: x }),
        (I, U) => {
          var V;
          return (
            m(),
            v("div", HC, [
              !I.timePicker && !I.timePickerInline
                ? ue(
                    (m(),
                    v(
                      "button",
                      {
                        key: 0,
                        ref_key: "openTimePickerBtn",
                        ref: _,
                        type: "button",
                        class: ee(X.value),
                        "aria-label":
                          (V = L(d)) == null ? void 0 : V.openTimePicker,
                        tabindex: I.noOverlayFocus ? void 0 : 0,
                        onKeydown: [
                          U[0] || (U[0] = De((K) => x(!0), ["enter"])),
                          U[1] || (U[1] = De((K) => x(!0), ["space"])),
                        ],
                        onClick: U[2] || (U[2] = (K) => x(!0)),
                      },
                      [
                        I.$slots["clock-icon"]
                          ? he(I.$slots, "clock-icon", { key: 0 })
                          : M("", !0),
                        I.$slots["clock-icon"]
                          ? M("", !0)
                          : (m(), G(L(Ni), { key: 1 })),
                      ],
                      42,
                      UC
                    )),
                    [[Zt, !L(f)(I.hideNavigation, "time")]]
                  )
                : M("", !0),
              Ee(
                At,
                { name: L(g)(P.value), css: L(y) && !I.timePickerInline },
                {
                  default: _e(() => {
                    var K;
                    return [
                      P.value || I.timePicker || I.timePickerInline
                        ? (m(),
                          v(
                            "div",
                            {
                              key: 0,
                              ref_key: "overlayRef",
                              ref: b,
                              class: ee({
                                dp__overlay: !I.timePickerInline,
                                "dp--overlay-absolute":
                                  !r.timePicker && !I.timePickerInline,
                                "dp--overlay-relative": r.timePicker,
                              }),
                              style: Re(
                                I.timePicker
                                  ? { height: `${L(u).modeHeight}px` }
                                  : void 0
                              ),
                              tabindex: I.timePickerInline ? void 0 : 0,
                            },
                            [
                              E(
                                "div",
                                {
                                  class: ee(
                                    I.timePickerInline
                                      ? "dp__time_picker_inline_container"
                                      : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                                  ),
                                  style: { display: "flex" },
                                },
                                [
                                  I.$slots["time-picker-overlay"]
                                    ? he(I.$slots, "time-picker-overlay", {
                                        key: 0,
                                        hours: e.hours,
                                        minutes: e.minutes,
                                        seconds: e.seconds,
                                        setHours: R,
                                        setMinutes: H,
                                        setSeconds: q,
                                      })
                                    : M("", !0),
                                  I.$slots["time-picker-overlay"]
                                    ? M("", !0)
                                    : (m(),
                                      v(
                                        "div",
                                        {
                                          key: 1,
                                          class: ee(
                                            I.timePickerInline
                                              ? "dp__flex"
                                              : "dp__overlay_row dp__flex_row"
                                          ),
                                        },
                                        [
                                          (m(!0),
                                          v(
                                            ge,
                                            null,
                                            Se(N.value, (k, h) =>
                                              ue(
                                                (m(),
                                                G(
                                                  xC,
                                                  Qe(
                                                    { key: h },
                                                    {
                                                      ...I.$props,
                                                      order: h,
                                                      hours: k.hours,
                                                      minutes: k.minutes,
                                                      seconds: k.seconds,
                                                      closeTimePickerBtn:
                                                        S.value,
                                                      disabledTimesConfig:
                                                        e.disabledTimesConfig,
                                                      disabled:
                                                        h === 0
                                                          ? I.fixedStart
                                                          : I.fixedEnd,
                                                    },
                                                    {
                                                      ref_for: !0,
                                                      ref_key: "timeInputRefs",
                                                      ref: w,
                                                      "validate-time": (F, j) =>
                                                        e.validateTime(
                                                          F,
                                                          T(j, h, F)
                                                        ),
                                                      "onUpdate:hours": (F) =>
                                                        R(T(F, h, "hours")),
                                                      "onUpdate:minutes": (F) =>
                                                        H(T(F, h, "minutes")),
                                                      "onUpdate:seconds": (F) =>
                                                        q(T(F, h, "seconds")),
                                                      onMounted: B,
                                                      onOverlayClosed: B,
                                                      onAmPmChange:
                                                        U[3] ||
                                                        (U[3] = (F) =>
                                                          I.$emit(
                                                            "am-pm-change",
                                                            F
                                                          )),
                                                    }
                                                  ),
                                                  Pt({ _: 2 }, [
                                                    Se(L(W), (F, j) => ({
                                                      name: F,
                                                      fn: _e((ae) => [
                                                        he(
                                                          I.$slots,
                                                          F,
                                                          tt(_t(ae))
                                                        ),
                                                      ]),
                                                    })),
                                                  ]),
                                                  1040,
                                                  [
                                                    "validate-time",
                                                    "onUpdate:hours",
                                                    "onUpdate:minutes",
                                                    "onUpdate:seconds",
                                                  ]
                                                )),
                                                [[Zt, h === 0 ? !0 : D.value]]
                                              )
                                            ),
                                            128
                                          )),
                                        ],
                                        2
                                      )),
                                  !I.timePicker && !I.timePickerInline
                                    ? ue(
                                        (m(),
                                        v(
                                          "button",
                                          {
                                            key: 2,
                                            ref_key: "closeTimePickerBtn",
                                            ref: S,
                                            type: "button",
                                            class: ee(X.value),
                                            "aria-label":
                                              (K = L(d)) == null
                                                ? void 0
                                                : K.closeTimePicker,
                                            tabindex: "0",
                                            onKeydown: [
                                              U[4] ||
                                                (U[4] = De(
                                                  (k) => x(!1),
                                                  ["enter"]
                                                )),
                                              U[5] ||
                                                (U[5] = De(
                                                  (k) => x(!1),
                                                  ["space"]
                                                )),
                                            ],
                                            onClick:
                                              U[6] || (U[6] = (k) => x(!1)),
                                          },
                                          [
                                            I.$slots["calendar-icon"]
                                              ? he(I.$slots, "calendar-icon", {
                                                  key: 0,
                                                })
                                              : M("", !0),
                                            I.$slots["calendar-icon"]
                                              ? M("", !0)
                                              : (m(), G(L(yn), { key: 1 })),
                                          ],
                                          42,
                                          FC
                                        )),
                                        [[Zt, !L(f)(I.hideNavigation, "time")]]
                                      )
                                    : M("", !0),
                                ],
                                2
                              ),
                            ],
                            14,
                            VC
                          ))
                        : M("", !0),
                    ];
                  }),
                  _: 3,
                },
                8,
                ["name", "css"]
              ),
            ])
          );
        }
      );
    },
  }),
  Yc = (e, a, t, n) => {
    const r = (w, b) => (Array.isArray(a[w]) ? a[w][b] : a[w]),
      i = (w) =>
        e.enableSeconds
          ? Array.isArray(a.seconds)
            ? a.seconds[w]
            : a.seconds
          : 0,
      o = (w, b) =>
        w
          ? b !== void 0
            ? Da(w, r("hours", b), r("minutes", b), i(b))
            : Da(w, a.hours, a.minutes, i())
          : Bi(ne(), i(b)),
      s = (w, b) => {
        a[w] = b;
      },
      l = (w, b) => {
        const D = Object.fromEntries(
          Object.keys(a).map((P) => (P === w ? [P, b] : [P, a[P]].slice()))
        );
        if (e.range && !e.disableTimeRangeValidation) {
          const P = (N) =>
              t.value
                ? Da(t.value[N], D.hours[N], D.minutes[N], D.seconds[N])
                : null,
            O = (N) => Li(t.value[N], 0);
          return !(We(P(0), P(1)) && (jn(P(0), O(1)) || Wn(P(1), O(0))));
        }
        return !0;
      },
      d = (w, b) => {
        l(w, b) && (s(w, b), n && n());
      },
      p = (w) => {
        d("hours", w);
      },
      u = (w) => {
        d("minutes", w);
      },
      g = (w) => {
        d("seconds", w);
      },
      y = (w, b, D, P) => {
        b && p(w), !b && !D && u(w), D && g(w), t.value && P(t.value);
      },
      f = (w) => {
        if (w) {
          const b = Array.isArray(w),
            D = b ? [+w[0].hours, +w[1].hours] : +w.hours,
            P = b ? [+w[0].minutes, +w[1].minutes] : +w.minutes,
            O = b ? [+w[0].seconds, +w[1].seconds] : +w.seconds;
          s("hours", D), s("minutes", P), e.enableSeconds && s("seconds", O);
        }
      },
      _ = (w, b) => {
        const D = {
          hours: Array.isArray(a.hours) ? a.hours[w] : a.hours,
          disabledArr: [],
        };
        return (
          (b || b === 0) && (D.hours = b),
          Array.isArray(e.disabledTimes) &&
            (D.disabledArr =
              e.range && Array.isArray(e.disabledTimes[w])
                ? e.disabledTimes[w]
                : e.disabledTimes),
          D
        );
      },
      S = c(() => (w, b) => {
        var D;
        if (Array.isArray(e.disabledTimes)) {
          const { disabledArr: P, hours: O } = _(w, b),
            N = P.filter((x) => +x.hours === O);
          return ((D = N[0]) == null ? void 0 : D.minutes) === "*"
            ? { hours: [O], minutes: void 0, seconds: void 0 }
            : {
                hours: [],
                minutes: N?.map((x) => +x.minutes) ?? [],
                seconds: N?.map((x) => (x.seconds ? +x.seconds : void 0)) ?? [],
              };
        }
        return { hours: [], minutes: [], seconds: [] };
      });
    return {
      setTime: s,
      updateHours: p,
      updateMinutes: u,
      updateSeconds: g,
      getSetDateTime: o,
      updateTimeValues: y,
      getSecondsValue: i,
      assignStartTime: f,
      validateTime: l,
      disabledTimesConfig: S,
    };
  },
  YC = (e, a) => {
    const { modelValue: t, time: n } = tr(e, a),
      { defaultedStartTime: r } = dt(e),
      {
        updateTimeValues: i,
        getSetDateTime: o,
        setTime: s,
        assignStartTime: l,
        disabledTimesConfig: d,
        validateTime: p,
      } = Yc(e, n, t),
      u = (b) => {
        const { hours: D, minutes: P, seconds: O } = b;
        return { hours: +D, minutes: +P, seconds: O ? +O : 0 };
      },
      g = () => {
        if (e.startTime) {
          if (Array.isArray(e.startTime)) {
            const D = u(e.startTime[0]),
              P = u(e.startTime[1]);
            return [et(ne(), D), et(ne(), P)];
          }
          const b = u(e.startTime);
          return et(ne(), b);
        }
        return e.range ? [null, null] : null;
      },
      y = () => {
        if (e.range) {
          const [b, D] = g();
          t.value = [o(b, 0), o(D, 1)];
        } else t.value = o(g());
      },
      f = (b) =>
        Array.isArray(b) ? [Ua(ne(b[0])), Ua(ne(b[1]))] : [Ua(b ?? ne())],
      _ = (b, D, P) => {
        s("hours", b), s("minutes", D), s("seconds", e.enableSeconds ? P : 0);
      },
      S = () => {
        const [b, D] = f(t.value);
        return e.range
          ? _(
              [b.hours, D.hours],
              [b.minutes, D.minutes],
              [b.seconds, D.minutes]
            )
          : _(b.hours, b.minutes, b.seconds);
      };
    Oe(() => {
      if (!e.shadow) return l(r.value), t.value ? S() : y();
    });
    const w = () => {
      Array.isArray(t.value)
        ? (t.value = t.value.map((b, D) => b && o(b, D)))
        : (t.value = o(t.value)),
        a("time-update");
    };
    return {
      modelValue: t,
      time: n,
      disabledTimesConfig: d,
      updateTime: (b, D = !0, P = !1) => {
        i(b, D, P, w);
      },
      validateTime: p,
    };
  },
  qC = se({
    compatConfig: { MODE: 3 },
    __name: "TimePickerSolo",
    props: { ...aa },
    emits: ["update:internal-model-value", "time-update", "am-pm-change"],
    setup(e, { expose: a, emit: t }) {
      const n = t,
        r = e,
        i = ja(),
        o = Nt(i, "timePicker"),
        {
          time: s,
          modelValue: l,
          disabledTimesConfig: d,
          updateTime: p,
          validateTime: u,
        } = YC(r, n);
      return (
        a({
          getSidebarProps: () => ({ modelValue: l, time: s, updateTime: p }),
        }),
        (g, y) => (
          m(),
          G(
            Ur,
            { "multi-calendars": 0, stretch: "" },
            {
              default: _e(() => [
                Ee(
                  Fc,
                  Qe(g.$props, {
                    hours: L(s).hours,
                    minutes: L(s).minutes,
                    seconds: L(s).seconds,
                    "internal-model-value": g.internalModelValue,
                    "disabled-times-config": L(d),
                    "validate-time": L(u),
                    "onUpdate:hours": y[0] || (y[0] = (f) => L(p)(f)),
                    "onUpdate:minutes": y[1] || (y[1] = (f) => L(p)(f, !1)),
                    "onUpdate:seconds": y[2] || (y[2] = (f) => L(p)(f, !1, !0)),
                    onAmPmChange:
                      y[3] || (y[3] = (f) => g.$emit("am-pm-change", f)),
                  }),
                  Pt({ _: 2 }, [
                    Se(L(o), (f, _) => ({
                      name: f,
                      fn: _e((S) => [he(g.$slots, f, tt(_t(S)))]),
                    })),
                  ]),
                  1040,
                  [
                    "hours",
                    "minutes",
                    "seconds",
                    "internal-model-value",
                    "disabled-times-config",
                    "validate-time",
                  ]
                ),
              ]),
              _: 3,
            }
          )
        )
      );
    },
  }),
  jC = { class: "dp__month_year_row" },
  WC = ["aria-label", "onClick", "onKeydown"],
  GC = se({
    compatConfig: { MODE: 3 },
    __name: "DpHeader",
    props: {
      month: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      instance: { type: Number, default: 0 },
      years: { type: Array, default: () => [] },
      months: { type: Array, default: () => [] },
      ...aa,
    },
    emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
    setup(e, { expose: a, emit: t }) {
      const n = t,
        r = e,
        {
          defaultedTransitions: i,
          defaultedAriaLabels: o,
          defaultedMultiCalendars: s,
          defaultedFilters: l,
          defaultedConfig: d,
          defaultedHighlight: p,
        } = dt(r),
        { transitionName: u, showTransition: g } = er(i),
        { buildMatrix: y } = La(),
        {
          handleMonthYearChange: f,
          isDisabled: _,
          updateMonthYear: S,
        } = nC(r, n),
        { showLeftIcon: w, showRightIcon: b } = xr(),
        D = A(!1),
        P = A(!1),
        O = A([null, null, null, null]);
      Oe(() => {
        n("mount");
      });
      const N = (h) => ({
          get: () => r[h],
          set: (F) => {
            const j = h === Kt.month ? Kt.year : Kt.month;
            n("update-month-year", { [h]: F, [j]: r[j] }),
              h === Kt.month ? B(!0) : I(!0);
          },
        }),
        x = c(N(Kt.month)),
        X = c(N(Kt.year)),
        W = c(() => (h) => ({
          month: r.month,
          year: r.year,
          items: h === Kt.month ? r.months : r.years,
          instance: r.instance,
          updateMonthYear: S,
          toggle: h === Kt.month ? B : I,
        })),
        T = c(
          () =>
            r.months.find((F) => F.value === r.month) || { text: "", value: 0 }
        ),
        R = c(() =>
          mn(r.months, (h) => {
            const F = r.month === h.value,
              j =
                Gn(h.value, Mc(r.year, r.minDate), Oc(r.year, r.maxDate)) ||
                l.value.months.includes(h.value),
              ae = Nc(p.value, h.value, r.year);
            return { active: F, disabled: j, highlighted: ae };
          })
        ),
        H = c(() =>
          mn(r.years, (h) => {
            const F = r.year === h.value,
              j =
                Gn(h.value, pn(r.minDate), pn(r.maxDate)) ||
                l.value.years.includes(h.value),
              ae = qi(p.value, h.value);
            return { active: F, disabled: j, highlighted: ae };
          })
        ),
        q = (h, F) => {
          F !== void 0 ? (h.value = F) : (h.value = !h.value),
            h.value || n("overlay-closed");
        },
        B = (h = !1, F) => {
          U(h), q(D, F);
        },
        I = (h = !1, F) => {
          U(h), q(P, F);
        },
        U = (h) => {
          h || n("reset-flow");
        },
        V = (h, F) => {
          r.arrowNavigation && ((O.value[F] = pt(h)), y(O.value, "monthYear"));
        },
        K = c(() => {
          var h, F;
          return [
            {
              type: Kt.month,
              index: 1,
              toggle: B,
              modelValue: x.value,
              updateModelValue: (j) => (x.value = j),
              text: T.value.text,
              showSelectionGrid: D.value,
              items: R.value,
              ariaLabel: (h = o.value) == null ? void 0 : h.openMonthsOverlay,
            },
            {
              type: Kt.year,
              index: 2,
              toggle: I,
              modelValue: X.value,
              updateModelValue: (j) => (X.value = j),
              text: r.year,
              showSelectionGrid: P.value,
              items: H.value,
              ariaLabel: (F = o.value) == null ? void 0 : F.openYearsOverlay,
            },
          ];
        }),
        k = c(() =>
          r.disableYearSelect
            ? [K.value[0]]
            : r.yearFirst
            ? [...K.value].reverse()
            : K.value
        );
      return (
        a({
          toggleMonthPicker: B,
          toggleYearPicker: I,
          handleMonthYearChange: f,
        }),
        (h, F) => {
          var j, ae, le;
          return (
            m(),
            v("div", jC, [
              h.$slots["month-year"]
                ? he(
                    h.$slots,
                    "month-year",
                    tt(
                      Qe(
                        { key: 0 },
                        {
                          month: e.month,
                          year: e.year,
                          months: e.months,
                          years: e.years,
                          updateMonthYear: L(S),
                          handleMonthYearChange: L(f),
                          instance: e.instance,
                        }
                      )
                    )
                  )
                : (m(),
                  v(
                    ge,
                    { key: 1 },
                    [
                      L(w)(L(s), e.instance) && !h.vertical
                        ? (m(),
                          G(
                            Bn,
                            {
                              key: 0,
                              "aria-label":
                                (j = L(o)) == null ? void 0 : j.prevMonth,
                              disabled: L(_)(!1),
                              onActivate: F[0] || (F[0] = (Y) => L(f)(!1, !0)),
                              onSetRef: F[1] || (F[1] = (Y) => V(Y, 0)),
                            },
                            {
                              default: _e(() => [
                                h.$slots["arrow-left"]
                                  ? he(h.$slots, "arrow-left", { key: 0 })
                                  : M("", !0),
                                h.$slots["arrow-left"]
                                  ? M("", !0)
                                  : (m(), G(L(Ri), { key: 1 })),
                              ]),
                              _: 3,
                            },
                            8,
                            ["aria-label", "disabled"]
                          ))
                        : M("", !0),
                      E(
                        "div",
                        {
                          class: ee([
                            "dp__month_year_wrap",
                            { dp__year_disable_select: h.disableYearSelect },
                          ]),
                        },
                        [
                          (m(!0),
                          v(
                            ge,
                            null,
                            Se(
                              k.value,
                              (Y, C) => (
                                m(),
                                v(
                                  ge,
                                  { key: Y.type },
                                  [
                                    E(
                                      "button",
                                      {
                                        ref_for: !0,
                                        ref: (re) => V(re, C + 1),
                                        type: "button",
                                        class: "dp__btn dp__month_year_select",
                                        tabindex: "0",
                                        "aria-label": Y.ariaLabel,
                                        onClick: Y.toggle,
                                        onKeydown: [
                                          De(Me(Y.toggle, ["prevent"]), [
                                            "enter",
                                          ]),
                                          De(Me(Y.toggle, ["prevent"]), [
                                            "space",
                                          ]),
                                        ],
                                      },
                                      [
                                        h.$slots[Y.type]
                                          ? he(h.$slots, Y.type, {
                                              key: 0,
                                              text: Y.text,
                                              value: r[Y.type],
                                            })
                                          : M("", !0),
                                        h.$slots[Y.type]
                                          ? M("", !0)
                                          : (m(),
                                            v(
                                              ge,
                                              { key: 1 },
                                              [Ne(J(Y.text), 1)],
                                              64
                                            )),
                                      ],
                                      40,
                                      WC
                                    ),
                                    Ee(
                                      At,
                                      {
                                        name: L(u)(Y.showSelectionGrid),
                                        css: L(g),
                                      },
                                      {
                                        default: _e(() => [
                                          Y.showSelectionGrid
                                            ? (m(),
                                              G(
                                                ar,
                                                {
                                                  key: 0,
                                                  items: Y.items,
                                                  "arrow-navigation":
                                                    h.arrowNavigation,
                                                  "hide-navigation":
                                                    h.hideNavigation,
                                                  "is-last":
                                                    h.autoApply &&
                                                    !L(d).keepActionRow,
                                                  "skip-button-ref": !1,
                                                  config: h.config,
                                                  type: Y.type,
                                                  "header-refs": [],
                                                  "esc-close": h.escClose,
                                                  "text-input": h.textInput,
                                                  onSelected:
                                                    Y.updateModelValue,
                                                  onToggle: Y.toggle,
                                                },
                                                Pt(
                                                  {
                                                    "button-icon": _e(() => [
                                                      h.$slots["calendar-icon"]
                                                        ? he(
                                                            h.$slots,
                                                            "calendar-icon",
                                                            { key: 0 }
                                                          )
                                                        : M("", !0),
                                                      h.$slots["calendar-icon"]
                                                        ? M("", !0)
                                                        : (m(),
                                                          G(L(yn), { key: 1 })),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  [
                                                    h.$slots[
                                                      `${Y.type}-overlay-value`
                                                    ]
                                                      ? {
                                                          name: "item",
                                                          fn: _e(
                                                            ({ item: re }) => [
                                                              he(
                                                                h.$slots,
                                                                `${Y.type}-overlay-value`,
                                                                {
                                                                  text: re.text,
                                                                  value:
                                                                    re.value,
                                                                }
                                                              ),
                                                            ]
                                                          ),
                                                          key: "0",
                                                        }
                                                      : void 0,
                                                    h.$slots[
                                                      `${Y.type}-overlay`
                                                    ]
                                                      ? {
                                                          name: "overlay",
                                                          fn: _e(() => [
                                                            he(
                                                              h.$slots,
                                                              `${Y.type}-overlay`,
                                                              tt(
                                                                _t(
                                                                  W.value(
                                                                    Y.type
                                                                  )
                                                                )
                                                              )
                                                            ),
                                                          ]),
                                                          key: "1",
                                                        }
                                                      : void 0,
                                                    h.$slots[
                                                      `${Y.type}-overlay-header`
                                                    ]
                                                      ? {
                                                          name: "header",
                                                          fn: _e(() => [
                                                            he(
                                                              h.$slots,
                                                              `${Y.type}-overlay-header`,
                                                              {
                                                                toggle:
                                                                  Y.toggle,
                                                              }
                                                            ),
                                                          ]),
                                                          key: "2",
                                                        }
                                                      : void 0,
                                                  ]
                                                ),
                                                1032,
                                                [
                                                  "items",
                                                  "arrow-navigation",
                                                  "hide-navigation",
                                                  "is-last",
                                                  "config",
                                                  "type",
                                                  "esc-close",
                                                  "text-input",
                                                  "onSelected",
                                                  "onToggle",
                                                ]
                                              ))
                                            : M("", !0),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["name", "css"]
                                    ),
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          )),
                        ],
                        2
                      ),
                      L(w)(L(s), e.instance) && h.vertical
                        ? (m(),
                          G(
                            Bn,
                            {
                              key: 1,
                              "aria-label":
                                (ae = L(o)) == null ? void 0 : ae.prevMonth,
                              disabled: L(_)(!1),
                              onActivate: F[2] || (F[2] = (Y) => L(f)(!1, !0)),
                            },
                            {
                              default: _e(() => [
                                h.$slots["arrow-up"]
                                  ? he(h.$slots, "arrow-up", { key: 0 })
                                  : M("", !0),
                                h.$slots["arrow-up"]
                                  ? M("", !0)
                                  : (m(), G(L(xi), { key: 1 })),
                              ]),
                              _: 3,
                            },
                            8,
                            ["aria-label", "disabled"]
                          ))
                        : M("", !0),
                      L(b)(L(s), e.instance)
                        ? (m(),
                          G(
                            Bn,
                            {
                              key: 2,
                              ref: "rightIcon",
                              disabled: L(_)(!0),
                              "aria-label":
                                (le = L(o)) == null ? void 0 : le.nextMonth,
                              onActivate: F[3] || (F[3] = (Y) => L(f)(!0, !0)),
                              onSetRef:
                                F[4] ||
                                (F[4] = (Y) =>
                                  V(Y, h.disableYearSelect ? 2 : 3)),
                            },
                            {
                              default: _e(() => [
                                h.$slots[
                                  h.vertical ? "arrow-down" : "arrow-right"
                                ]
                                  ? he(
                                      h.$slots,
                                      h.vertical ? "arrow-down" : "arrow-right",
                                      { key: 0 }
                                    )
                                  : M("", !0),
                                h.$slots[
                                  h.vertical ? "arrow-down" : "arrow-right"
                                ]
                                  ? M("", !0)
                                  : (m(),
                                    G(gn(h.vertical ? L(Hi) : L($i)), {
                                      key: 1,
                                    })),
                              ]),
                              _: 3,
                            },
                            8,
                            ["disabled", "aria-label"]
                          ))
                        : M("", !0),
                    ],
                    64
                  )),
            ])
          );
        }
      );
    },
  }),
  zC = ["aria-label"],
  KC = { class: "dp__calendar_header", role: "row" },
  QC = { key: 0, class: "dp__calendar_header_item", role: "gridcell" },
  ZC = E("div", { class: "dp__calendar_header_separator" }, null, -1),
  XC = ["aria-label"],
  JC = { key: 0, role: "gridcell", class: "dp__calendar_item dp__week_num" },
  eT = { class: "dp__cell_inner" },
  tT = [
    "id",
    "aria-selected",
    "aria-disabled",
    "aria-label",
    "onClick",
    "onKeydown",
    "onMouseenter",
    "onMouseleave",
  ],
  aT = se({
    compatConfig: { MODE: 3 },
    __name: "DpCalendar",
    props: {
      mappedDates: { type: Array, default: () => [] },
      instance: { type: Number, default: 0 },
      month: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      ...aa,
    },
    emits: [
      "select-date",
      "set-hover-date",
      "handle-scroll",
      "mount",
      "handle-swipe",
      "handle-space",
      "tooltip-open",
      "tooltip-close",
    ],
    setup(e, { expose: a, emit: t }) {
      const n = t,
        r = e,
        { buildMultiLevelMatrix: i } = La(),
        {
          defaultedTransitions: o,
          defaultedConfig: s,
          defaultedAriaLabels: l,
          defaultedMultiCalendars: d,
          defaultedWeekNumbers: p,
        } = dt(r),
        u = A(null),
        g = A({ bottom: "", left: "", transform: "" }),
        y = A([]),
        f = A(null),
        _ = A(!0),
        S = A(""),
        w = A({ startX: 0, endX: 0, startY: 0, endY: 0 }),
        b = A([]),
        D = A({ left: "50%" }),
        P = c(() => (r.calendar ? r.calendar(r.mappedDates) : r.mappedDates)),
        O = c(() =>
          r.dayNames
            ? Array.isArray(r.dayNames)
              ? r.dayNames
              : r.dayNames(r.locale, +r.weekStart)
            : DS(r.formatLocale, r.locale, +r.weekStart)
        );
      Oe(() => {
        n("mount", { cmp: "calendar", refs: y }),
          s.value.noSwipe ||
            (f.value &&
              (f.value.addEventListener("touchstart", I, { passive: !1 }),
              f.value.addEventListener("touchend", U, { passive: !1 }),
              f.value.addEventListener("touchmove", V, { passive: !1 }))),
          r.monthChangeOnScroll &&
            f.value &&
            f.value.addEventListener("wheel", h, { passive: !1 });
      });
      const N = (Y) =>
          Y
            ? r.vertical
              ? "vNext"
              : "next"
            : r.vertical
            ? "vPrevious"
            : "previous",
        x = (Y, C) => {
          if (r.transitions) {
            const re = kt(ya(ne(), r.month, r.year));
            (S.value = wt(kt(ya(ne(), Y, C)), re)
              ? o.value[N(!0)]
              : o.value[N(!1)]),
              (_.value = !1),
              Ot(() => {
                _.value = !0;
              });
          }
        },
        X = c(() => ({ [r.calendarClassName]: !!r.calendarClassName })),
        W = c(() => (Y) => {
          const C = OS(Y);
          return {
            dp__marker_dot: C.type === "dot",
            dp__marker_line: C.type === "line",
          };
        }),
        T = c(() => (Y) => We(Y, u.value)),
        R = c(() => ({
          dp__calendar: !0,
          dp__calendar_next: d.value.count > 0 && r.instance !== 0,
        })),
        H = c(() => (Y) => r.hideOffsetDates ? Y.current : !0),
        q = async (Y, C, re) => {
          var ce, Q;
          if (
            (n("set-hover-date", Y),
            (Q = (ce = Y.marker) == null ? void 0 : ce.tooltip) != null &&
              Q.length)
          ) {
            const fe = pt(y.value[C][re]);
            if (fe) {
              const { width: me, height: z } = fe.getBoundingClientRect();
              u.value = Y.value;
              let oe = { left: `${me / 2}px` },
                Pe = -50;
              if ((await Ot(), b.value[0])) {
                const { left: de, width: qe } =
                  b.value[0].getBoundingClientRect();
                de < 0 &&
                  ((oe = { left: "0" }),
                  (Pe = 0),
                  (D.value.left = `${me / 2}px`)),
                  window.innerWidth < de + qe &&
                    ((oe = { right: "0" }),
                    (Pe = 0),
                    (D.value.left = `${qe - me / 2}px`));
              }
              (g.value = {
                bottom: `${z}px`,
                ...oe,
                transform: `translateX(${Pe}%)`,
              }),
                n("tooltip-open", Y.marker);
            }
          }
        },
        B = (Y) => {
          u.value &&
            ((u.value = null),
            (g.value = JSON.parse(
              JSON.stringify({ bottom: "", left: "", transform: "" })
            )),
            n("tooltip-close", Y.marker));
        },
        I = (Y) => {
          (w.value.startX = Y.changedTouches[0].screenX),
            (w.value.startY = Y.changedTouches[0].screenY);
        },
        U = (Y) => {
          (w.value.endX = Y.changedTouches[0].screenX),
            (w.value.endY = Y.changedTouches[0].screenY),
            K();
        },
        V = (Y) => {
          r.vertical && !r.inline && Y.preventDefault();
        },
        K = () => {
          const Y = r.vertical ? "Y" : "X";
          Math.abs(w.value[`start${Y}`] - w.value[`end${Y}`]) > 10 &&
            n(
              "handle-swipe",
              w.value[`start${Y}`] > w.value[`end${Y}`] ? "right" : "left"
            );
        },
        k = (Y, C, re) => {
          Y &&
            (Array.isArray(y.value[C])
              ? (y.value[C][re] = Y)
              : (y.value[C] = [Y])),
            r.arrowNavigation && i(y.value, "calendar");
        },
        h = (Y) => {
          r.monthChangeOnScroll && (Y.preventDefault(), n("handle-scroll", Y));
        },
        F = (Y) =>
          p.value.type === "local"
            ? V1(Y.value, { weekStartsOn: +r.weekStart })
            : p.value.type === "iso"
            ? N1(Y.value)
            : typeof p.value.type == "function"
            ? p.value.type(Y.value)
            : "",
        j = (Y) => {
          const C = Y[0];
          return p.value.hideOnOffsetDates
            ? Y.some((re) => re.current)
              ? F(C)
              : ""
            : F(C);
        },
        ae = (Y, C) => {
          Ea(Y, s.value), n("select-date", C);
        },
        le = (Y) => {
          Ea(Y, s.value);
        };
      return (
        a({ triggerTransition: x }),
        (Y, C) => {
          var re;
          return (
            m(),
            v(
              "div",
              { class: ee(R.value) },
              [
                E(
                  "div",
                  {
                    ref_key: "calendarWrapRef",
                    ref: f,
                    role: "grid",
                    class: ee(X.value),
                    "aria-label":
                      (re = L(l)) == null ? void 0 : re.calendarWrap,
                  },
                  [
                    (m(),
                    v(
                      ge,
                      { key: 0 },
                      [
                        E("div", KC, [
                          Y.weekNumbers
                            ? (m(), v("div", QC, J(Y.weekNumName), 1))
                            : M("", !0),
                          (m(!0),
                          v(
                            ge,
                            null,
                            Se(
                              O.value,
                              (ce, Q) => (
                                m(),
                                v(
                                  "div",
                                  {
                                    key: Q,
                                    class: "dp__calendar_header_item",
                                    role: "gridcell",
                                  },
                                  [
                                    Y.$slots["calendar-header"]
                                      ? he(Y.$slots, "calendar-header", {
                                          key: 0,
                                          day: ce,
                                          index: Q,
                                        })
                                      : M("", !0),
                                    Y.$slots["calendar-header"]
                                      ? M("", !0)
                                      : (m(),
                                        v(ge, { key: 1 }, [Ne(J(ce), 1)], 64)),
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        ZC,
                        Ee(
                          At,
                          { name: S.value, css: !!Y.transitions },
                          {
                            default: _e(() => {
                              var ce;
                              return [
                                _.value
                                  ? (m(),
                                    v(
                                      "div",
                                      {
                                        key: 0,
                                        class: "dp__calendar",
                                        role: "rowgroup",
                                        "aria-label":
                                          ((ce = L(l)) == null
                                            ? void 0
                                            : ce.calendarDays) || void 0,
                                      },
                                      [
                                        (m(!0),
                                        v(
                                          ge,
                                          null,
                                          Se(
                                            P.value,
                                            (Q, fe) => (
                                              m(),
                                              v(
                                                "div",
                                                {
                                                  key: fe,
                                                  class: "dp__calendar_row",
                                                  role: "row",
                                                },
                                                [
                                                  Y.weekNumbers
                                                    ? (m(),
                                                      v("div", JC, [
                                                        E(
                                                          "div",
                                                          eT,
                                                          J(j(Q.days)),
                                                          1
                                                        ),
                                                      ]))
                                                    : M("", !0),
                                                  (m(!0),
                                                  v(
                                                    ge,
                                                    null,
                                                    Se(Q.days, (me, z) => {
                                                      var oe, Pe, de;
                                                      return (
                                                        m(),
                                                        v(
                                                          "div",
                                                          {
                                                            id: me.value
                                                              .toISOString()
                                                              .split("T")[0],
                                                            ref_for: !0,
                                                            ref: (qe) =>
                                                              k(qe, fe, z),
                                                            key: z + fe,
                                                            role: "gridcell",
                                                            class:
                                                              "dp__calendar_item",
                                                            "aria-selected":
                                                              me.classData
                                                                .dp__active_date ||
                                                              me.classData
                                                                .dp__range_start ||
                                                              me.classData
                                                                .dp__range_start,
                                                            "aria-disabled":
                                                              me.classData
                                                                .dp__cell_disabled ||
                                                              void 0,
                                                            "aria-label":
                                                              (Pe =
                                                                (oe = L(l)) ==
                                                                null
                                                                  ? void 0
                                                                  : oe.day) ==
                                                              null
                                                                ? void 0
                                                                : Pe.call(
                                                                    oe,
                                                                    me
                                                                  ),
                                                            tabindex: "0",
                                                            onClick: Me(
                                                              (qe) =>
                                                                ae(qe, me),
                                                              ["prevent"]
                                                            ),
                                                            onKeydown: [
                                                              De(
                                                                (qe) =>
                                                                  Y.$emit(
                                                                    "select-date",
                                                                    me
                                                                  ),
                                                                ["enter"]
                                                              ),
                                                              De(
                                                                (qe) =>
                                                                  Y.$emit(
                                                                    "handle-space",
                                                                    me
                                                                  ),
                                                                ["space"]
                                                              ),
                                                            ],
                                                            onMouseenter: (
                                                              qe
                                                            ) => q(me, fe, z),
                                                            onMouseleave: (
                                                              qe
                                                            ) => B(me),
                                                          },
                                                          [
                                                            E(
                                                              "div",
                                                              {
                                                                class: ee([
                                                                  "dp__cell_inner",
                                                                  me.classData,
                                                                ]),
                                                              },
                                                              [
                                                                Y.$slots.day &&
                                                                H.value(me)
                                                                  ? he(
                                                                      Y.$slots,
                                                                      "day",
                                                                      {
                                                                        key: 0,
                                                                        day: +me.text,
                                                                        date: me.value,
                                                                      }
                                                                    )
                                                                  : M("", !0),
                                                                Y.$slots.day
                                                                  ? M("", !0)
                                                                  : (m(),
                                                                    v(
                                                                      ge,
                                                                      {
                                                                        key: 1,
                                                                      },
                                                                      [
                                                                        Ne(
                                                                          J(
                                                                            me.text
                                                                          ),
                                                                          1
                                                                        ),
                                                                      ],
                                                                      64
                                                                    )),
                                                                me.marker &&
                                                                H.value(me)
                                                                  ? (m(),
                                                                    v(
                                                                      ge,
                                                                      {
                                                                        key: 2,
                                                                      },
                                                                      [
                                                                        Y.$slots
                                                                          .marker
                                                                          ? he(
                                                                              Y.$slots,
                                                                              "marker",
                                                                              {
                                                                                key: 0,
                                                                                marker:
                                                                                  me.marker,
                                                                                day: +me.text,
                                                                                date: me.value,
                                                                              }
                                                                            )
                                                                          : (m(),
                                                                            v(
                                                                              "div",
                                                                              {
                                                                                key: 1,
                                                                                class:
                                                                                  ee(
                                                                                    W.value(
                                                                                      me.marker
                                                                                    )
                                                                                  ),
                                                                                style:
                                                                                  Re(
                                                                                    me
                                                                                      .marker
                                                                                      .color
                                                                                      ? {
                                                                                          backgroundColor:
                                                                                            me
                                                                                              .marker
                                                                                              .color,
                                                                                        }
                                                                                      : {}
                                                                                  ),
                                                                              },
                                                                              null,
                                                                              6
                                                                            )),
                                                                      ],
                                                                      64
                                                                    ))
                                                                  : M("", !0),
                                                                T.value(
                                                                  me.value
                                                                )
                                                                  ? (m(),
                                                                    v(
                                                                      "div",
                                                                      {
                                                                        key: 3,
                                                                        ref_for:
                                                                          !0,
                                                                        ref_key:
                                                                          "activeTooltip",
                                                                        ref: b,
                                                                        class:
                                                                          "dp__marker_tooltip",
                                                                        style:
                                                                          Re(
                                                                            g.value
                                                                          ),
                                                                      },
                                                                      [
                                                                        (de =
                                                                          me.marker) !=
                                                                          null &&
                                                                        de.tooltip
                                                                          ? (m(),
                                                                            v(
                                                                              "div",
                                                                              {
                                                                                key: 0,
                                                                                class:
                                                                                  "dp__tooltip_content",
                                                                                onClick:
                                                                                  le,
                                                                              },
                                                                              [
                                                                                (m(
                                                                                  !0
                                                                                ),
                                                                                v(
                                                                                  ge,
                                                                                  null,
                                                                                  Se(
                                                                                    me
                                                                                      .marker
                                                                                      .tooltip,
                                                                                    (
                                                                                      qe,
                                                                                      ft
                                                                                    ) => (
                                                                                      m(),
                                                                                      v(
                                                                                        "div",
                                                                                        {
                                                                                          key: ft,
                                                                                          class:
                                                                                            "dp__tooltip_text",
                                                                                        },
                                                                                        [
                                                                                          Y
                                                                                            .$slots[
                                                                                            "marker-tooltip"
                                                                                          ]
                                                                                            ? he(
                                                                                                Y.$slots,
                                                                                                "marker-tooltip",
                                                                                                {
                                                                                                  key: 0,
                                                                                                  tooltip:
                                                                                                    qe,
                                                                                                  day: me.value,
                                                                                                }
                                                                                              )
                                                                                            : M(
                                                                                                "",
                                                                                                !0
                                                                                              ),
                                                                                          Y
                                                                                            .$slots[
                                                                                            "marker-tooltip"
                                                                                          ]
                                                                                            ? M(
                                                                                                "",
                                                                                                !0
                                                                                              )
                                                                                            : (m(),
                                                                                              v(
                                                                                                ge,
                                                                                                {
                                                                                                  key: 1,
                                                                                                },
                                                                                                [
                                                                                                  E(
                                                                                                    "div",
                                                                                                    {
                                                                                                      class:
                                                                                                        "dp__tooltip_mark",
                                                                                                      style:
                                                                                                        Re(
                                                                                                          qe.color
                                                                                                            ? {
                                                                                                                backgroundColor:
                                                                                                                  qe.color,
                                                                                                              }
                                                                                                            : {}
                                                                                                        ),
                                                                                                    },
                                                                                                    null,
                                                                                                    4
                                                                                                  ),
                                                                                                  E(
                                                                                                    "div",
                                                                                                    null,
                                                                                                    J(
                                                                                                      qe.text
                                                                                                    ),
                                                                                                    1
                                                                                                  ),
                                                                                                ],
                                                                                                64
                                                                                              )),
                                                                                        ]
                                                                                      )
                                                                                    )
                                                                                  ),
                                                                                  128
                                                                                )),
                                                                                E(
                                                                                  "div",
                                                                                  {
                                                                                    class:
                                                                                      "dp__arrow_bottom_tp",
                                                                                    style:
                                                                                      Re(
                                                                                        D.value
                                                                                      ),
                                                                                  },
                                                                                  null,
                                                                                  4
                                                                                ),
                                                                              ]
                                                                            ))
                                                                          : M(
                                                                              "",
                                                                              !0
                                                                            ),
                                                                      ],
                                                                      4
                                                                    ))
                                                                  : M("", !0),
                                                              ],
                                                              2
                                                            ),
                                                          ],
                                                          40,
                                                          tT
                                                        )
                                                      );
                                                    }),
                                                    128
                                                  )),
                                                ]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ],
                                      8,
                                      XC
                                    ))
                                  : M("", !0),
                              ];
                            }),
                            _: 3,
                          },
                          8,
                          ["name", "css"]
                        ),
                      ],
                      64
                    )),
                  ],
                  10,
                  zC
                ),
              ],
              2
            )
          );
        }
      );
    },
  }),
  Yl = (e) => Array.isArray(e),
  nT = (e, a, t, n) => {
    const r = A([]),
      { modelValue: i, calendars: o, time: s } = tr(e, a),
      { defaultedMultiCalendars: l, defaultedStartTime: d } = dt(e),
      {
        validateMonthYearInRange: p,
        isDisabled: u,
        isDateRangeAllowed: g,
        checkMinMaxRange: y,
      } = Wa(e),
      {
        updateTimeValues: f,
        getSetDateTime: _,
        setTime: S,
        assignStartTime: w,
        validateTime: b,
        disabledTimesConfig: D,
      } = Yc(e, s, i, n),
      P = c(() => ($) => o.value[$] ? o.value[$].month : 0),
      O = c(() => ($) => o.value[$] ? o.value[$].year : 0),
      N = ($, te, we) => {
        var Ae, Ze;
        o.value[$] || (o.value[$] = { month: 0, year: 0 }),
          (o.value[$].month = xl(te)
            ? (Ae = o.value[$]) == null
              ? void 0
              : Ae.month
            : te),
          (o.value[$].year = xl(we)
            ? (Ze = o.value[$]) == null
              ? void 0
              : Ze.year
            : we);
      },
      x = () => {
        e.autoApply && a("select-date");
      };
    je(i, ($, te) => {
      JSON.stringify($) !== JSON.stringify(te) && T();
    }),
      Oe(() => {
        e.shadow ||
          (i.value || (h(), d.value && w(d.value)),
          T(!0),
          e.focusStartDate && e.startDate && h());
      });
    const X = c(() => {
        var $;
        return ($ = e.flow) != null && $.length && !e.partialFlow
          ? e.flowStep === e.flow.length
          : !0;
      }),
      W = () => {
        e.autoApply && X.value && a("auto-apply", e.partialFlow);
      },
      T = ($ = !1) => {
        if (i.value)
          return Array.isArray(i.value)
            ? ((r.value = i.value), U($))
            : H(i.value, $);
        if (l.value.count && $ && !e.startDate) return R(ne(), $);
      },
      R = ($, te = !1) => {
        if (
          ((!l.value.count || !l.value.static || te) && N(0, Ve($), $e($)),
          l.value.count && (!l.value.solo || !i.value))
        )
          for (let we = 1; we < l.value.count; we++) {
            const Ae = et(ne(), {
                month: P.value(we - 1),
                year: O.value(we - 1),
              }),
              Ze = ac(Ae, { months: 1 });
            o.value[we] = { month: Ve(Ze), year: $e(Ze) };
          }
      },
      H = ($, te) => {
        R($),
          S("hours", Jt($)),
          S("minutes", ca($)),
          S("seconds", cn($)),
          l.value.count && te && k();
      },
      q = ($) => {
        if (l.value.count) {
          if (l.value.solo) return 0;
          const te = Ve($[0]),
            we = Ve($[1]);
          return Math.abs(we - te) < l.value.count ? 0 : 1;
        }
        return 1;
      },
      B = ($, te) => {
        $[1] && e.showLastInRange ? R($[q($)], te) : R($[0], te);
        const we = (Ae, Ze) => [Ae($[0]), $[1] ? Ae($[1]) : s[Ze][1]];
        S("hours", we(Jt, "hours")),
          S("minutes", we(ca, "minutes")),
          S("seconds", we(cn, "seconds"));
      },
      I = ($, te) => {
        if ((e.range || e.weekPicker) && !e.multiDates) return B($, te);
        if (e.multiDates && te) {
          const we = $[$.length - 1];
          return H(we, te);
        }
      },
      U = ($) => {
        const te = i.value;
        I(te, $), l.value.count && l.value.solo && k();
      },
      V = ($, te) => {
        const we = et(ne(), { month: P.value(te), year: O.value(te) }),
          Ae = $ < 0 ? Xt(we, 1) : dn(we, 1);
        p(Ve(Ae), $e(Ae), $ < 0, e.preventMinMaxNavigation) &&
          (N(te, Ve(Ae), $e(Ae)),
          a("update-month-year", { instance: te, month: Ve(Ae), year: $e(Ae) }),
          l.value.count && !l.value.solo && K(te),
          t());
      },
      K = ($) => {
        for (let te = $ - 1; te >= 0; te--) {
          const we = dn(
            et(ne(), { month: P.value(te + 1), year: O.value(te + 1) }),
            1
          );
          N(te, Ve(we), $e(we));
        }
        for (let te = $ + 1; te <= l.value.count - 1; te++) {
          const we = Xt(
            et(ne(), { month: P.value(te - 1), year: O.value(te - 1) }),
            1
          );
          N(te, Ve(we), $e(we));
        }
      },
      k = () => {
        if (Array.isArray(i.value) && i.value.length === 2) {
          const $ = ne(ne(i.value[1] ? i.value[1] : Xt(i.value[0], 1))),
            [te, we] = [Ve(i.value[0]), $e(i.value[0])],
            [Ae, Ze] = [Ve(i.value[1]), $e(i.value[1])];
          (te !== Ae || (te === Ae && we !== Ze)) &&
            l.value.solo &&
            N(1, Ve($), $e($));
        } else
          i.value &&
            !Array.isArray(i.value) &&
            (N(0, Ve(i.value), $e(i.value)), R(ne()));
      },
      h = () => {
        e.startDate &&
          (N(0, Ve(ne(e.startDate)), $e(ne(e.startDate))),
          l.value.count && K(0));
      },
      F = $S(($, te) => {
        e.monthChangeOnScroll &&
          V(e.monthChangeOnScroll !== "inverse" ? -$.deltaY : $.deltaY, te);
      }, 50),
      j = ($, te, we = !1) => {
        e.monthChangeOnArrows && e.vertical === we && ae($, te);
      },
      ae = ($, te) => {
        V($ === "right" ? -1 : 1, te);
      },
      le = ($) =>
        e.markers.find((te) => We(HS($.value), ea(ne(te.date), e.timezone))),
      Y = ($, te) => {
        switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
          case "prepend":
            return [!0, !1];
          case "center":
            return [$ == 0, !0];
          case "fair":
            return [$ == 0 || te > $, !0];
          case "append":
            return [!1, !1];
          default:
            return [!1, !1];
        }
      },
      C = ($, te, we, Ae) => {
        if (e.sixWeeks && $.length < 6) {
          const Ze = 6 - $.length,
            It = (te.getDay() + 7 - Ae) % 7,
            zt = 6 - ((we.getDay() + 7 - Ae) % 7),
            [pe, Le] = Y(It, zt);
          for (let Ie = 1; Ie <= Ze; Ie++)
            if (Le ? !!(Ie % 2) == pe : pe) {
              const Rt = $[0].days[0],
                $t = re(va(Rt.value, -7), Ve(te));
              $.unshift({ days: $t });
            } else {
              const Rt = $[$.length - 1],
                $t = Rt.days[Rt.days.length - 1],
                bn = re(va($t.value, 1), Ve(te));
              $.push({ days: bn });
            }
        }
        return $;
      },
      re = ($, te) => {
        const we = ne($),
          Ae = [];
        for (let Ze = 0; Ze < 7; Ze++) {
          const It = va(we, Ze),
            zt = Ve(It) !== te;
          Ae.push({
            text: e.hideOffsetDates && zt ? "" : It.getDate(),
            value: It,
            current: !zt,
            classData: {},
          });
        }
        return Ae;
      },
      ce = ($, te) => {
        const we = [],
          Ae = new Date(te, $),
          Ze = new Date(te, $ + 1, 0),
          It = e.weekStart,
          zt = Ya(Ae, { weekStartsOn: It }),
          pe = (Le) => {
            const Ie = re(Le, $);
            if (
              (we.push({ days: Ie }),
              !we[we.length - 1].days.some((Rt) => We(kt(Rt.value), kt(Ze))))
            ) {
              const Rt = va(Le, 7);
              pe(Rt);
            }
          };
        return pe(zt), C(we, Ae, Ze, It);
      },
      Q = ($) => (
        (i.value = hr(ne($.value), e.timezone, e.weekStart)),
        a("date-update", $.value),
        W()
      ),
      fe = ($) => {
        const te = Da(ne($.value), s.hours, s.minutes, gt());
        a("date-update", te),
          e.multiDates ? ji(te, i, e.multiDatesLimit) : (i.value = te),
          n(),
          Ot().then(() => {
            W();
          });
      },
      me = ($) =>
        e.noDisabledRange ? Lc(r.value[0], $).some((te) => u(te)) : !1,
      z = () => {
        (r.value = i.value ? i.value.slice() : []),
          r.value.length === 2 &&
            !(e.fixedStart || e.fixedEnd) &&
            (r.value = []);
      },
      oe = ($, te) => {
        const we = [ne($.value), va(ne($.value), +e.autoRange)];
        g(we)
          ? (te && Pe($.value), (r.value = we))
          : a("invalid-date", $.value);
      },
      Pe = ($) => {
        const te = Ve(ne($)),
          we = $e(ne($));
        if ((N(0, te, we), l.value.count > 0))
          for (let Ae = 1; Ae < l.value.count; Ae++) {
            const Ze = US(
              et(ne($), { year: P.value(Ae - 1), month: O.value(Ae - 1) })
            );
            N(Ae, Ze.month, Ze.year);
          }
      },
      de = ($) =>
        Array.isArray(i.value) && i.value.length === 2
          ? e.fixedStart && (wt($, i.value[0]) || We($, i.value[0]))
            ? [i.value[0], $]
            : e.fixedEnd && (yt($, i.value[1]) || We($, i.value[1]))
            ? [$, i.value[1]]
            : (a("invalid-fixed-range", $), i.value)
          : [],
      qe = ($) => {
        if (me($.value) || !y($.value, i.value, e.fixedStart ? 0 : 1))
          return a("invalid-date", $.value);
        r.value = de(ne($.value));
      },
      ft = ($, te) => {
        if ((z(), e.autoRange)) return oe($, te);
        if (e.fixedStart || e.fixedEnd) return qe($);
        r.value[0]
          ? y(ne($.value), i.value) && !me($.value)
            ? yt(ne($.value), ne(r.value[0]))
              ? (r.value.unshift(ne($.value)), a("range-end", r.value[0]))
              : ((r.value[1] = ne($.value)), a("range-end", r.value[1]))
            : (e.autoApply && a("auto-apply-invalid", $.value),
              a("invalid-date", $.value))
          : ((r.value[0] = ne($.value)), a("range-start", r.value[0]));
      },
      gt = ($ = !0) =>
        e.enableSeconds
          ? Array.isArray(s.seconds)
            ? $
              ? s.seconds[0]
              : s.seconds[1]
            : s.seconds
          : 0,
      Lt = ($) => {
        r.value[$] = Da(r.value[$], s.hours[$], s.minutes[$], gt($ !== 1));
      },
      ga = () => {
        var $, te;
        r.value[0] &&
          r.value[1] &&
          +(($ = r.value) == null ? void 0 : $[0]) >
            +((te = r.value) == null ? void 0 : te[1]) &&
          (r.value.reverse(),
          a("range-start", r.value[0]),
          a("range-end", r.value[1]));
      },
      Bt = () => {
        r.value.length &&
          (r.value[0] && !r.value[1] ? Lt(0) : (Lt(0), Lt(1), n()),
          ga(),
          (i.value = r.value.slice()),
          Vr(r.value, a, e.autoApply, e.modelAuto));
      },
      Ba = ($, te = !1) => {
        if (u($.value) || (!$.current && e.hideOffsetDates))
          return a("invalid-date", $.value);
        if (e.weekPicker) return Q($);
        if (!e.range) return fe($);
        Yl(s.hours) && Yl(s.minutes) && !e.multiDates && (ft($, te), Bt());
      },
      na = ($, te) => {
        var we;
        N($, te.month, te.year),
          l.value.count && !l.value.solo && K($),
          a("update-month-year", {
            instance: $,
            month: te.month,
            year: te.year,
          }),
          t(l.value.solo ? $ : void 0);
        const Ae =
          (we = e.flow) != null && we.length ? e.flow[e.flowStep] : void 0;
        !te.fromNav && (Ae === ra.month || Ae === ra.year) && n();
      },
      bt = ($, te) => {
        Uc({
          value: $,
          modelValue: i,
          range: e.range,
          timezone: te ? void 0 : e.timezone,
        }),
          x(),
          e.multiCalendars && Ot().then(() => T(!0));
      },
      ka = () => {
        e.range
          ? i.value && Array.isArray(i.value) && i.value[0]
            ? (i.value = yt(ne(), i.value[0])
                ? [ne(), i.value[0]]
                : [i.value[0], ne()])
            : (i.value = [ne()])
          : (i.value = ne()),
          x();
      },
      Be = () => {
        if (Array.isArray(i.value))
          if (e.multiDates) {
            const $ = ot();
            i.value[i.value.length - 1] = _($);
          } else i.value = i.value.map(($, te) => $ && _($, te));
        else i.value = _(i.value);
        a("time-update");
      },
      ot = () =>
        Array.isArray(i.value) && i.value.length
          ? i.value[i.value.length - 1]
          : null;
    return {
      calendars: o,
      modelValue: i,
      month: P,
      year: O,
      time: s,
      disabledTimesConfig: D,
      validateTime: b,
      getCalendarDays: ce,
      getMarker: le,
      handleScroll: F,
      handleSwipe: ae,
      handleArrow: j,
      selectDate: Ba,
      updateMonthYear: na,
      presetDate: bt,
      selectCurrentDate: ka,
      updateTime: ($, te = !0, we = !1) => {
        f($, te, we, Be);
      },
    };
  },
  rT = { key: 0 },
  oT = se({
    __name: "DatePicker",
    props: { ...aa },
    emits: [
      "tooltip-open",
      "tooltip-close",
      "mount",
      "update:internal-model-value",
      "update-flow-step",
      "reset-flow",
      "auto-apply",
      "focus-menu",
      "select-date",
      "range-start",
      "range-end",
      "invalid-fixed-range",
      "time-update",
      "am-pm-change",
      "time-picker-open",
      "time-picker-close",
      "recalculate-position",
      "update-month-year",
      "auto-apply-invalid",
      "date-update",
      "invalid-date",
    ],
    setup(e, { expose: a, emit: t }) {
      const n = t,
        r = e,
        {
          calendars: i,
          month: o,
          year: s,
          modelValue: l,
          time: d,
          disabledTimesConfig: p,
          validateTime: u,
          getCalendarDays: g,
          getMarker: y,
          handleArrow: f,
          handleScroll: _,
          handleSwipe: S,
          selectDate: w,
          updateMonthYear: b,
          presetDate: D,
          selectCurrentDate: P,
          updateTime: O,
        } = nT(r, n, k, h),
        N = ja(),
        { setHoverDate: x, getDayClassData: X, clearHoverDate: W } = sC(l, r),
        { defaultedMultiCalendars: T } = dt(r),
        R = A([]),
        H = A([]),
        q = A(null),
        B = Nt(N, "calendar"),
        I = Nt(N, "monthYear"),
        U = Nt(N, "timePicker"),
        V = (j) => {
          r.shadow || n("mount", j);
        };
      je(
        i,
        () => {
          r.shadow ||
            setTimeout(() => {
              n("recalculate-position");
            }, 0);
        },
        { deep: !0 }
      );
      const K = c(
        () => (j) =>
          g(o.value(j), s.value(j)).map((ae) => ({
            ...ae,
            days: ae.days.map(
              (le) => ((le.marker = y(le)), (le.classData = X(le)), le)
            ),
          }))
      );
      function k(j) {
        var ae;
        j || j === 0
          ? (ae = H.value[j]) == null ||
            ae.triggerTransition(o.value(j), s.value(j))
          : H.value.forEach((le, Y) =>
              le.triggerTransition(o.value(Y), s.value(Y))
            );
      }
      function h() {
        n("update-flow-step");
      }
      const F = (j, ae = !1) => {
        w(j, ae), r.spaceConfirm && n("select-date");
      };
      return (
        a({
          clearHoverDate: W,
          presetDate: D,
          selectCurrentDate: P,
          toggleMonthPicker: (j, ae, le = 0) => {
            var Y;
            (Y = R.value[le]) == null || Y.toggleMonthPicker(j, ae);
          },
          toggleYearPicker: (j, ae, le = 0) => {
            var Y;
            (Y = R.value[le]) == null || Y.toggleYearPicker(j, ae);
          },
          toggleTimePicker: (j, ae, le) => {
            var Y;
            (Y = q.value) == null || Y.toggleTimePicker(j, ae, le);
          },
          handleArrow: f,
          updateMonthYear: b,
          getSidebarProps: () => ({
            modelValue: l,
            month: o,
            year: s,
            time: d,
            updateTime: O,
            updateMonthYear: b,
            selectDate: w,
            presetDate: D,
          }),
        }),
        (j, ae) => (
          m(),
          v(
            ge,
            null,
            [
              Ee(
                Ur,
                { "multi-calendars": L(T).count },
                {
                  default: _e(({ instance: le, index: Y }) => [
                    j.disableMonthYearSelect
                      ? M("", !0)
                      : (m(),
                        G(
                          GC,
                          Qe(
                            {
                              key: 0,
                              ref: (C) => {
                                C && (R.value[Y] = C);
                              },
                              months: L(Ec)(
                                j.formatLocale,
                                j.locale,
                                j.monthNameFormat
                              ),
                              years: L(Yi)(j.yearRange, j.reverseYears),
                              month: L(o)(le),
                              year: L(s)(le),
                              instance: le,
                            },
                            j.$props,
                            {
                              onMount:
                                ae[0] || (ae[0] = (C) => V(L(Va).header)),
                              onResetFlow:
                                ae[1] || (ae[1] = (C) => j.$emit("reset-flow")),
                              onUpdateMonthYear: (C) => L(b)(le, C),
                              onOverlayClosed:
                                ae[2] || (ae[2] = (C) => j.$emit("focus-menu")),
                            }
                          ),
                          Pt({ _: 2 }, [
                            Se(L(I), (C, re) => ({
                              name: C,
                              fn: _e((ce) => [he(j.$slots, C, tt(_t(ce)))]),
                            })),
                          ]),
                          1040,
                          [
                            "months",
                            "years",
                            "month",
                            "year",
                            "instance",
                            "onUpdateMonthYear",
                          ]
                        )),
                    Ee(
                      aT,
                      Qe(
                        {
                          ref: (C) => {
                            C && (H.value[Y] = C);
                          },
                          "mapped-dates": K.value(le),
                          month: L(o)(le),
                          year: L(s)(le),
                          instance: le,
                        },
                        j.$props,
                        {
                          onSelectDate: (C) => L(w)(C, le !== 1),
                          onHandleSpace: (C) => F(C, le !== 1),
                          onSetHoverDate: ae[3] || (ae[3] = (C) => L(x)(C)),
                          onHandleScroll: (C) => L(_)(C, le),
                          onHandleSwipe: (C) => L(S)(C, le),
                          onMount: ae[4] || (ae[4] = (C) => V(L(Va).calendar)),
                          onResetFlow:
                            ae[5] || (ae[5] = (C) => j.$emit("reset-flow")),
                          onTooltipOpen:
                            ae[6] ||
                            (ae[6] = (C) => j.$emit("tooltip-open", C)),
                          onTooltipClose:
                            ae[7] ||
                            (ae[7] = (C) => j.$emit("tooltip-close", C)),
                        }
                      ),
                      Pt({ _: 2 }, [
                        Se(L(B), (C, re) => ({
                          name: C,
                          fn: _e((ce) => [he(j.$slots, C, tt(_t({ ...ce })))]),
                        })),
                      ]),
                      1040,
                      [
                        "mapped-dates",
                        "month",
                        "year",
                        "instance",
                        "onSelectDate",
                        "onHandleSpace",
                        "onHandleScroll",
                        "onHandleSwipe",
                      ]
                    ),
                  ]),
                  _: 3,
                },
                8,
                ["multi-calendars"]
              ),
              j.enableTimePicker
                ? (m(),
                  v("div", rT, [
                    j.$slots["time-picker"]
                      ? he(
                          j.$slots,
                          "time-picker",
                          tt(Qe({ key: 0 }, { time: L(d), updateTime: L(O) }))
                        )
                      : (m(),
                        G(
                          Fc,
                          Qe(
                            { key: 1, ref_key: "timePickerRef", ref: q },
                            j.$props,
                            {
                              hours: L(d).hours,
                              minutes: L(d).minutes,
                              seconds: L(d).seconds,
                              "internal-model-value": j.internalModelValue,
                              "disabled-times-config": L(p),
                              "validate-time": L(u),
                              onMount:
                                ae[8] || (ae[8] = (le) => V(L(Va).timePicker)),
                              "onUpdate:hours":
                                ae[9] || (ae[9] = (le) => L(O)(le)),
                              "onUpdate:minutes":
                                ae[10] || (ae[10] = (le) => L(O)(le, !1)),
                              "onUpdate:seconds":
                                ae[11] || (ae[11] = (le) => L(O)(le, !1, !0)),
                              onResetFlow:
                                ae[12] ||
                                (ae[12] = (le) => j.$emit("reset-flow")),
                              onOverlayClosed:
                                ae[13] ||
                                (ae[13] = (le) => j.$emit("time-picker-close")),
                              onOverlayOpened:
                                ae[14] ||
                                (ae[14] = (le) =>
                                  j.$emit("time-picker-open", le)),
                              onAmPmChange:
                                ae[15] ||
                                (ae[15] = (le) => j.$emit("am-pm-change", le)),
                            }
                          ),
                          Pt({ _: 2 }, [
                            Se(L(U), (le, Y) => ({
                              name: le,
                              fn: _e((C) => [he(j.$slots, le, tt(_t(C)))]),
                            })),
                          ]),
                          1040,
                          [
                            "hours",
                            "minutes",
                            "seconds",
                            "internal-model-value",
                            "disabled-times-config",
                            "validate-time",
                          ]
                        )),
                  ]))
                : M("", !0),
            ],
            64
          )
        )
      );
    },
  }),
  iT = (e, a) => {
    const t = A(),
      {
        defaultedMultiCalendars: n,
        defaultedConfig: r,
        defaultedHighlight: i,
      } = dt(e),
      { modelValue: o, year: s, month: l, calendars: d } = tr(e, a),
      { isDisabled: p } = Wa(e),
      {
        selectYear: u,
        groupedYears: g,
        showYearPicker: y,
        isDisabled: f,
        toggleYearPicker: _,
        handleYearSelect: S,
        handleYear: w,
      } = Vc({
        modelValue: o,
        multiCalendars: n,
        highlight: i,
        calendars: d,
        month: l,
        year: s,
        props: e,
        emit: a,
      }),
      b = (W, T) =>
        [W, T].map((R) => Ia(R, "MMMM", { locale: e.formatLocale })).join("-"),
      D = c(
        () => (W) =>
          o.value
            ? Array.isArray(o.value)
              ? o.value.some((T) => Il(W, T))
              : Il(o.value, W)
            : !1
      ),
      P = (W) => {
        if (e.range) {
          if (Array.isArray(o.value)) {
            const T = We(W, o.value[0]) || We(W, o.value[1]);
            return Nr(o.value, t.value, W) && !T;
          }
          return !1;
        }
        return !1;
      },
      O = c(() => (W) => {
        const T = et(new Date(), { year: s.value(W) });
        return Ew({ start: Mw(T), end: Dw(T) }).map((R) => {
          const H = qn(R),
            q = _l(R),
            B = p(R),
            I = P(H),
            U =
              typeof i.value == "function"
                ? i.value({ quarter: bl(H), year: $e(H) })
                : !!i.value.quarters.find(
                    (V) => V.quarter === bl(H) && V.year === $e(H)
                  );
          return {
            text: b(H, q),
            value: H,
            active: D.value(H),
            highlighted: U,
            disabled: B,
            isBetween: I,
          };
        });
      }),
      N = (W) => {
        ji(W, o, e.multiDatesLimit), a("auto-apply", !0);
      },
      x = (W) => {
        const T = Wi(o, W, a);
        Vr(T, a, e.autoApply, e.modelAuto);
      },
      X = (W) => {
        (o.value = W), a("auto-apply");
      };
    return {
      defaultedConfig: r,
      defaultedMultiCalendars: n,
      groupedYears: g,
      year: s,
      isDisabled: f,
      quarters: O,
      showYearPicker: y,
      modelValue: o,
      setHoverDate: (W) => {
        t.value = W;
      },
      selectYear: u,
      selectQuarter: (W, T, R) => {
        if (!R)
          return (
            (d.value[T].month = Ve(_l(W))),
            e.multiDates ? N(W) : e.range ? x(W) : X(W)
          );
      },
      toggleYearPicker: _,
      handleYearSelect: S,
      handleYear: w,
    };
  },
  sT = { class: "dp--quarter-items" },
  lT = ["disabled", "onClick", "onMouseover"],
  uT = se({
    compatConfig: { MODE: 3 },
    __name: "QuarterPicker",
    props: { ...aa },
    emits: [
      "update:internal-model-value",
      "reset-flow",
      "overlay-closed",
      "auto-apply",
      "range-start",
      "range-end",
    ],
    setup(e, { expose: a, emit: t }) {
      const n = t,
        r = e,
        i = ja(),
        o = Nt(i, "yearMode"),
        {
          defaultedMultiCalendars: s,
          defaultedConfig: l,
          groupedYears: d,
          year: p,
          isDisabled: u,
          quarters: g,
          modelValue: y,
          showYearPicker: f,
          setHoverDate: _,
          selectQuarter: S,
          toggleYearPicker: w,
          handleYearSelect: b,
          handleYear: D,
        } = iT(r, n);
      return (
        a({
          getSidebarProps: () => ({
            modelValue: y,
            year: p,
            selectQuarter: S,
            handleYearSelect: b,
            handleYear: D,
          }),
        }),
        (P, O) => (
          m(),
          G(
            Ur,
            { "multi-calendars": L(s).count, stretch: "" },
            {
              default: _e(({ instance: N }) => [
                E(
                  "div",
                  {
                    class: "dp-quarter-picker-wrap",
                    style: Re({ minHeight: `${L(l).modeHeight}px` }),
                  },
                  [
                    E("div", null, [
                      Ee(
                        Hc,
                        Qe(P.$props, {
                          items: L(d)(N),
                          instance: N,
                          "show-year-picker": L(f)[N],
                          year: L(p)(N),
                          "is-disabled": (x) => L(u)(N, x),
                          onHandleYear: (x) => L(D)(N, x),
                          onYearSelect: (x) => L(b)(x, N),
                          onToggleYearPicker: (x) => L(w)(N, x?.flow, x?.show),
                        }),
                        Pt({ _: 2 }, [
                          Se(L(o), (x, X) => ({
                            name: x,
                            fn: _e((W) => [he(P.$slots, x, tt(_t(W)))]),
                          })),
                        ]),
                        1040,
                        [
                          "items",
                          "instance",
                          "show-year-picker",
                          "year",
                          "is-disabled",
                          "onHandleYear",
                          "onYearSelect",
                          "onToggleYearPicker",
                        ]
                      ),
                    ]),
                    E("div", sT, [
                      (m(!0),
                      v(
                        ge,
                        null,
                        Se(
                          L(g)(N),
                          (x, X) => (
                            m(),
                            v("div", { key: X }, [
                              E(
                                "button",
                                {
                                  type: "button",
                                  class: ee([
                                    "dp--qr-btn",
                                    {
                                      "dp--qr-btn-active": x.active,
                                      "dp--qr-btn-between": x.isBetween,
                                      "dp--qr-btn-disabled": x.disabled,
                                      "dp--highlighted": x.highlighted,
                                    },
                                  ]),
                                  disabled: x.disabled,
                                  onClick: (W) => L(S)(x.value, N, x.disabled),
                                  onMouseover: (W) => L(_)(x.value),
                                },
                                [
                                  P.$slots.quarter
                                    ? he(P.$slots, "quarter", {
                                        key: 0,
                                        value: x.value,
                                        text: x.text,
                                      })
                                    : (m(),
                                      v(
                                        ge,
                                        { key: 1 },
                                        [Ne(J(x.text), 1)],
                                        64
                                      )),
                                ],
                                42,
                                lT
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                    ]),
                  ],
                  4
                ),
              ]),
              _: 3,
            },
            8,
            ["multi-calendars"]
          )
        )
      );
    },
  }),
  cT = ["id"],
  dT = { key: 0, class: "dp__sidebar_left" },
  mT = { key: 1, class: "dp--preset-dates" },
  pT = ["onClick", "onKeydown"],
  gT = { key: 2, class: "dp__sidebar_right" },
  hT = { key: 3, class: "dp__action_extra" },
  ql = se({
    compatConfig: { MODE: 3 },
    __name: "DatepickerMenu",
    props: {
      ...Hr,
      shadow: { type: Boolean, default: !1 },
      openOnTop: { type: Boolean, default: !1 },
      internalModelValue: { type: [Date, Array], default: null },
      arrMapValues: { type: Object, default: () => ({}) },
      noOverlayFocus: { type: Boolean, default: !1 },
    },
    emits: [
      "close-picker",
      "select-date",
      "auto-apply",
      "time-update",
      "flow-step",
      "update-month-year",
      "invalid-select",
      "update:internal-model-value",
      "recalculate-position",
      "invalid-fixed-range",
      "tooltip-open",
      "tooltip-close",
      "time-picker-open",
      "time-picker-close",
      "am-pm-change",
      "range-start",
      "range-end",
      "auto-apply-invalid",
      "date-update",
      "invalid-date",
    ],
    setup(e, { expose: a, emit: t }) {
      const n = t,
        r = e,
        i = c(() => {
          const { openOnTop: z, ...oe } = r;
          return { ...oe, flowStep: X.value, noOverlayFocus: r.noOverlayFocus };
        }),
        { setMenuFocused: o, setShiftKey: s, control: l } = xc(),
        d = ja(),
        {
          defaultedTextInput: p,
          defaultedInline: u,
          defaultedConfig: g,
        } = dt(r),
        y = A(null),
        f = A(0),
        _ = A(null),
        S = A(null),
        w = A(!1),
        b = A(null);
      Oe(() => {
        if (!r.shadow) {
          (w.value = !0), D(), window.addEventListener("resize", D);
          const z = pt(_);
          if ((z && !p.value.enabled && !u.value.enabled && (o(!0), q()), z)) {
            const oe = (Pe) => {
              g.value.allowPreventDefault && Pe.preventDefault(),
                Ea(Pe, g.value, !0);
            };
            z.addEventListener("pointerdown", oe),
              z.addEventListener("mousedown", oe);
          }
        }
      }),
        zn(() => {
          window.removeEventListener("resize", D);
        });
      const D = () => {
          const z = pt(S);
          z && (f.value = z.getBoundingClientRect().width);
        },
        { arrowRight: P, arrowLeft: O, arrowDown: N, arrowUp: x } = La(),
        {
          flowStep: X,
          updateFlowStep: W,
          childMount: T,
          resetFlow: R,
        } = lC(r, n, b),
        H = c(() =>
          r.monthPicker
            ? TC
            : r.yearPicker
            ? IC
            : r.timePicker
            ? qC
            : r.quarterPicker
            ? uT
            : oT
        ),
        q = () => {
          const z = pt(_);
          z && z.focus({ preventScroll: !0 });
        },
        B = c(() => {
          var z;
          return ((z = b.value) == null ? void 0 : z.getSidebarProps()) || {};
        }),
        I = () => {
          r.openOnTop && n("recalculate-position");
        },
        U = Nt(d, "action"),
        V = c(() =>
          r.monthPicker || r.yearPicker
            ? Nt(d, "monthYear")
            : r.timePicker
            ? Nt(d, "timePicker")
            : Nt(d, "shared")
        ),
        K = c(() => (r.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top")),
        k = c(() => ({
          dp__menu_disabled: r.disabled,
          dp__menu_readonly: r.readonly,
        })),
        h = c(() => ({
          dp__menu: !0,
          dp__menu_index: !u.value.enabled,
          dp__relative: u.value.enabled,
          [r.menuClassName]: !!r.menuClassName,
        })),
        F = (z) => {
          Ea(z, g.value, !0);
        },
        j = () => {
          r.escClose && n("close-picker");
        },
        ae = (z) => {
          if (r.arrowNavigation) {
            if (z === "up") return x();
            if (z === "down") return N();
            if (z === "left") return O();
            if (z === "right") return P();
          } else
            z === "left" || z === "up"
              ? ce("handleArrow", "left", 0, z === "up")
              : ce("handleArrow", "right", 0, z === "down");
        },
        le = (z) => {
          s(z.shiftKey),
            !r.disableMonthYearSelect &&
              z.code === "Tab" &&
              z.target.classList.contains("dp__menu") &&
              l.value.shiftKeyInMenu &&
              (z.preventDefault(), Ea(z, g.value, !0), n("close-picker"));
        },
        Y = () => {
          q(), n("time-picker-close");
        },
        C = (z) => {
          var oe, Pe, de;
          (oe = b.value) == null || oe.toggleTimePicker(!1, !1),
            (Pe = b.value) == null || Pe.toggleMonthPicker(!1, !1, z),
            (de = b.value) == null || de.toggleYearPicker(!1, !1, z);
        },
        re = (z, oe = 0) => {
          var Pe, de, qe;
          return z === "month"
            ? (Pe = b.value) == null
              ? void 0
              : Pe.toggleMonthPicker(!1, !0, oe)
            : z === "year"
            ? (de = b.value) == null
              ? void 0
              : de.toggleYearPicker(!1, !0, oe)
            : z === "time"
            ? (qe = b.value) == null
              ? void 0
              : qe.toggleTimePicker(!0, !1)
            : C(oe);
        },
        ce = (z, ...oe) => {
          var Pe, de;
          (Pe = b.value) != null &&
            Pe[z] &&
            ((de = b.value) == null || de[z](...oe));
        },
        Q = () => {
          ce("selectCurrentDate");
        },
        fe = (z, oe) => {
          ce("presetDate", z, oe);
        },
        me = () => {
          ce("clearHoverDate");
        };
      return (
        a({
          updateMonthYear: (z, oe) => {
            ce("updateMonthYear", z, oe);
          },
          switchView: re,
        }),
        (z, oe) => {
          var Pe;
          return (
            m(),
            v(
              "div",
              {
                id: z.uid ? `dp-menu-${z.uid}` : void 0,
                ref_key: "dpMenuRef",
                ref: _,
                tabindex: "0",
                role: "dialog",
                class: ee(h.value),
                onMouseleave: me,
                onClick: F,
                onKeydown: [
                  De(j, ["esc"]),
                  oe[18] ||
                    (oe[18] = De(
                      Me((de) => ae("left"), ["prevent"]),
                      ["left"]
                    )),
                  oe[19] ||
                    (oe[19] = De(
                      Me((de) => ae("up"), ["prevent"]),
                      ["up"]
                    )),
                  oe[20] ||
                    (oe[20] = De(
                      Me((de) => ae("down"), ["prevent"]),
                      ["down"]
                    )),
                  oe[21] ||
                    (oe[21] = De(
                      Me((de) => ae("right"), ["prevent"]),
                      ["right"]
                    )),
                  le,
                ],
              },
              [
                (z.disabled || z.readonly) && L(u).enabled
                  ? (m(), v("div", { key: 0, class: ee(k.value) }, null, 2))
                  : M("", !0),
                !L(u).enabled && !z.teleportCenter
                  ? (m(), v("div", { key: 1, class: ee(K.value) }, null, 2))
                  : M("", !0),
                E(
                  "div",
                  {
                    ref_key: "innerMenuRef",
                    ref: S,
                    class: ee({
                      dp__menu_content_wrapper:
                        ((Pe = z.presetDates) == null ? void 0 : Pe.length) ||
                        !!z.$slots["left-sidebar"] ||
                        !!z.$slots["right-sidebar"],
                    }),
                    style: Re({ "--dp-menu-width": `${f.value}px` }),
                  },
                  [
                    z.$slots["left-sidebar"]
                      ? (m(),
                        v("div", dT, [
                          he(z.$slots, "left-sidebar", tt(_t(B.value))),
                        ]))
                      : M("", !0),
                    z.presetDates.length
                      ? (m(),
                        v("div", mT, [
                          (m(!0),
                          v(
                            ge,
                            null,
                            Se(
                              z.presetDates,
                              (de, qe) => (
                                m(),
                                v(
                                  ge,
                                  { key: qe },
                                  [
                                    de.slot
                                      ? he(z.$slots, de.slot, {
                                          key: 0,
                                          presetDate: fe,
                                          label: de.label,
                                          value: de.value,
                                        })
                                      : (m(),
                                        v(
                                          "button",
                                          {
                                            key: 1,
                                            type: "button",
                                            style: Re(de.style || {}),
                                            class: "dp__btn dp--preset-range",
                                            onClick: Me(
                                              (ft) => fe(de.value, de.noTz),
                                              ["prevent"]
                                            ),
                                            onKeydown: [
                                              De(
                                                Me(
                                                  (ft) => fe(de.value, de.noTz),
                                                  ["prevent"]
                                                ),
                                                ["enter"]
                                              ),
                                              De(
                                                Me(
                                                  (ft) => fe(de.value, de.noTz),
                                                  ["prevent"]
                                                ),
                                                ["space"]
                                              ),
                                            ],
                                          },
                                          J(de.label),
                                          45,
                                          pT
                                        )),
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : M("", !0),
                    E(
                      "div",
                      {
                        ref_key: "calendarWrapperRef",
                        ref: y,
                        class: "dp__instance_calendar",
                        role: "document",
                      },
                      [
                        (m(),
                        G(
                          gn(H.value),
                          Qe({ ref_key: "dynCmpRef", ref: b }, i.value, {
                            "flow-step": L(X),
                            onMount: L(T),
                            onUpdateFlowStep: L(W),
                            onResetFlow: L(R),
                            onFocusMenu: q,
                            onSelectDate:
                              oe[0] || (oe[0] = (de) => z.$emit("select-date")),
                            onDateUpdate:
                              oe[1] ||
                              (oe[1] = (de) => z.$emit("date-update", de)),
                            onTooltipOpen:
                              oe[2] ||
                              (oe[2] = (de) => z.$emit("tooltip-open", de)),
                            onTooltipClose:
                              oe[3] ||
                              (oe[3] = (de) => z.$emit("tooltip-close", de)),
                            onAutoApply:
                              oe[4] ||
                              (oe[4] = (de) => z.$emit("auto-apply", de)),
                            onRangeStart:
                              oe[5] ||
                              (oe[5] = (de) => z.$emit("range-start", de)),
                            onRangeEnd:
                              oe[6] ||
                              (oe[6] = (de) => z.$emit("range-end", de)),
                            onInvalidFixedRange:
                              oe[7] ||
                              (oe[7] = (de) =>
                                z.$emit("invalid-fixed-range", de)),
                            onTimeUpdate:
                              oe[8] || (oe[8] = (de) => z.$emit("time-update")),
                            onAmPmChange:
                              oe[9] ||
                              (oe[9] = (de) => z.$emit("am-pm-change", de)),
                            onTimePickerOpen:
                              oe[10] ||
                              (oe[10] = (de) =>
                                z.$emit("time-picker-open", de)),
                            onTimePickerClose: Y,
                            onRecalculatePosition: I,
                            onUpdateMonthYear:
                              oe[11] ||
                              (oe[11] = (de) =>
                                z.$emit("update-month-year", de)),
                            onAutoApplyInvalid:
                              oe[12] ||
                              (oe[12] = (de) =>
                                z.$emit("auto-apply-invalid", de)),
                            onInvalidDate:
                              oe[13] ||
                              (oe[13] = (de) => z.$emit("invalid-date", de)),
                            "onUpdate:internalModelValue":
                              oe[14] ||
                              (oe[14] = (de) =>
                                z.$emit("update:internal-model-value", de)),
                          }),
                          Pt({ _: 2 }, [
                            Se(V.value, (de, qe) => ({
                              name: de,
                              fn: _e((ft) => [
                                he(z.$slots, de, tt(_t({ ...ft }))),
                              ]),
                            })),
                          ]),
                          1040,
                          [
                            "flow-step",
                            "onMount",
                            "onUpdateFlowStep",
                            "onResetFlow",
                          ]
                        )),
                      ],
                      512
                    ),
                    z.$slots["right-sidebar"]
                      ? (m(),
                        v("div", gT, [
                          he(z.$slots, "right-sidebar", tt(_t(B.value))),
                        ]))
                      : M("", !0),
                    z.$slots["action-extra"]
                      ? (m(),
                        v("div", hT, [
                          z.$slots["action-extra"]
                            ? he(z.$slots, "action-extra", {
                                key: 0,
                                selectCurrentDate: Q,
                              })
                            : M("", !0),
                        ]))
                      : M("", !0),
                  ],
                  6
                ),
                !z.autoApply || L(g).keepActionRow
                  ? (m(),
                    G(
                      fC,
                      Qe({ key: 2, "menu-mount": w.value }, i.value, {
                        "calendar-width": f.value,
                        onClosePicker:
                          oe[15] || (oe[15] = (de) => z.$emit("close-picker")),
                        onSelectDate:
                          oe[16] || (oe[16] = (de) => z.$emit("select-date")),
                        onInvalidSelect:
                          oe[17] ||
                          (oe[17] = (de) => z.$emit("invalid-select")),
                        onSelectNow: Q,
                      }),
                      Pt({ _: 2 }, [
                        Se(L(U), (de, qe) => ({
                          name: de,
                          fn: _e((ft) => [he(z.$slots, de, tt(_t({ ...ft })))]),
                        })),
                      ]),
                      1040,
                      ["menu-mount", "calendar-width"]
                    ))
                  : M("", !0),
              ],
              42,
              cT
            )
          );
        }
      );
    },
  }),
  fT = typeof window < "u" ? window : void 0,
  Co = () => {},
  vT = (e) => (Zl() ? (Xl(e), !0) : !1),
  yT = (e, a, t, n) => {
    if (!e) return Co;
    let r = Co;
    const i = je(
        () => L(e),
        (s) => {
          r(),
            s &&
              (s.addEventListener(a, t, n),
              (r = () => {
                s.removeEventListener(a, t, n), (r = Co);
              }));
        },
        { immediate: !0, flush: "post" }
      ),
      o = () => {
        i(), r();
      };
    return vT(o), o;
  },
  bT = (e, a, t, n = {}) => {
    const { window: r = fT, event: i = "pointerdown" } = n;
    return r
      ? yT(
          r,
          i,
          (o) => {
            const s = pt(e),
              l = pt(a);
            !s ||
              !l ||
              s === o.target ||
              o.composedPath().includes(s) ||
              o.composedPath().includes(l) ||
              t(o);
          },
          { passive: !0 }
        )
      : void 0;
  },
  _T = se({
    compatConfig: { MODE: 3 },
    __name: "VueDatePicker",
    props: { ...Hr },
    emits: [
      "update:model-value",
      "update:model-timezone-value",
      "text-submit",
      "closed",
      "cleared",
      "open",
      "focus",
      "blur",
      "internal-model-change",
      "recalculate-position",
      "flow-step",
      "update-month-year",
      "invalid-select",
      "invalid-fixed-range",
      "tooltip-open",
      "tooltip-close",
      "time-picker-open",
      "time-picker-close",
      "am-pm-change",
      "range-start",
      "range-end",
      "date-update",
      "invalid-date",
    ],
    setup(e, { expose: a, emit: t }) {
      const n = t,
        r = e,
        i = ja(),
        o = A(!1),
        s = fr(r, "modelValue"),
        l = fr(r, "timezone"),
        d = A(null),
        p = A(null),
        u = A(null),
        g = A(!1),
        y = A(null),
        f = A(!1),
        _ = A(!1),
        { setMenuFocused: S, setShiftKey: w } = xc(),
        { clearArrowNav: b } = La(),
        { mapDatesArrToMap: D, validateDate: P, isValidTime: O } = Wa(r),
        {
          defaultedTransitions: N,
          defaultedTextInput: x,
          defaultedInline: X,
          defaultedConfig: W,
        } = dt(r),
        { menuTransition: T, showTransition: R } = er(N);
      Oe(() => {
        ae(r.modelValue),
          Ot().then(() => {
            if (!X.value.enabled) {
              const pe = k(y.value);
              pe?.addEventListener("scroll", z),
                window?.addEventListener("resize", oe);
            }
          }),
          X.value.enabled && (o.value = !0),
          window?.addEventListener("keyup", Pe),
          window?.addEventListener("keydown", de);
      });
      const H = c(() => D());
      zn(() => {
        if (!X.value.enabled) {
          const pe = k(y.value);
          pe?.removeEventListener("scroll", z),
            window?.removeEventListener("resize", oe);
        }
        window?.removeEventListener("keyup", Pe),
          window?.removeEventListener("keydown", de);
      });
      const q = Nt(i, "all", r.presetDates),
        B = Nt(i, "input");
      je(
        [s, l],
        () => {
          ae(s.value);
        },
        { deep: !0 }
      );
      const {
          openOnTop: I,
          menuStyle: U,
          xCorrect: V,
          setMenuPosition: K,
          getScrollableParent: k,
          shadowRender: h,
        } = rC({
          menuRef: d,
          menuRefInner: p,
          inputRef: u,
          pickerWrapperRef: y,
          inline: X,
          emit: n,
          props: r,
          slots: i,
        }),
        {
          inputValue: F,
          internalModelValue: j,
          parseExternalModelValue: ae,
          emitModelValue: le,
          formatInputValue: Y,
          checkBeforeEmit: C,
        } = aC(n, r, g),
        re = c(() => ({
          dp__main: !0,
          dp__theme_dark: r.dark,
          dp__theme_light: !r.dark,
          dp__flex_display: X.value.enabled,
          dp__flex_display_with_input: X.value.input,
        })),
        ce = c(() => (r.dark ? "dp__theme_dark" : "dp__theme_light")),
        Q = c(() => ({
          to: typeof r.teleport == "boolean" ? "body" : r.teleport,
          disabled: !r.teleport || X.value.enabled,
        })),
        fe = c(() => ({ class: "dp__outer_menu_wrap" })),
        me = c(
          () =>
            X.value.enabled &&
            (r.timePicker || r.monthPicker || r.yearPicker || r.quarterPicker)
        ),
        z = () => {
          o.value && (W.value.closeOnScroll ? bt() : K());
        },
        oe = () => {
          o.value && K();
        },
        Pe = (pe) => {
          pe.key === "Tab" &&
            !X.value.enabled &&
            !r.teleport &&
            W.value.tabOutClosesMenu &&
            (y.value.contains(document.activeElement) || bt()),
            (_.value = pe.shiftKey);
        },
        de = (pe) => {
          _.value = pe.shiftKey;
        },
        qe = () => {
          !r.disabled &&
            !r.readonly &&
            (h(ql, r),
            K(!1),
            (o.value = !0),
            o.value && n("open"),
            o.value || na(),
            ae(r.modelValue));
        },
        ft = () => {
          var pe;
          (F.value = ""),
            na(),
            (pe = u.value) == null || pe.setParsedDate(null),
            n("update:model-value", null),
            n("update:model-timezone-value", null),
            n("cleared"),
            W.value.closeOnClearValue && bt();
        },
        gt = () => {
          const pe = j.value;
          return !pe || (!Array.isArray(pe) && P(pe))
            ? !0
            : Array.isArray(pe)
            ? r.multiDates || (pe.length === 2 && P(pe[0]) && P(pe[1]))
              ? !0
              : r.partialRange && !r.timePicker
              ? P(pe[0])
              : !1
            : !1;
        },
        Lt = () => {
          C() && gt() ? (le(), bt()) : n("invalid-select", j.value);
        },
        ga = (pe) => {
          Bt(), le(), W.value.closeOnAutoApply && !pe && bt();
        },
        Bt = () => {
          u.value && x.value.enabled && u.value.setParsedDate(j.value);
        },
        Ba = (pe = !1) => {
          r.autoApply &&
            O(j.value) &&
            gt() &&
            (r.range && Array.isArray(j.value)
              ? (r.partialRange || j.value.length === 2) && ga(pe)
              : ga(pe));
        },
        na = () => {
          x.value.enabled || (j.value = null);
        },
        bt = () => {
          X.value.enabled ||
            (o.value &&
              ((o.value = !1),
              (V.value = !1),
              S(!1),
              w(!1),
              b(),
              n("closed"),
              F.value && ae(s.value)),
            na(),
            n("blur"));
        },
        ka = (pe, Le, Ie = !1) => {
          if (!pe) {
            j.value = null;
            return;
          }
          const Rt = Array.isArray(pe) ? !pe.some((bn) => !P(bn)) : P(pe),
            $t = O(pe);
          Rt &&
            $t &&
            ((j.value = pe), Le && ((f.value = Ie), Lt(), n("text-submit")));
        },
        Be = () => {
          r.autoApply && O(j.value) && le(), Bt();
        },
        ot = () => (o.value ? bt() : qe()),
        $ = (pe) => {
          j.value = pe;
        },
        te = () => {
          x.value.enabled && ((g.value = !0), Y()), n("focus");
        },
        we = () => {
          if (x.value.enabled && ((g.value = !1), ae(r.modelValue), f.value)) {
            const pe = RS(y.value, _.value);
            pe?.focus();
          }
          n("blur");
        },
        Ae = (pe) => {
          p.value &&
            p.value.updateMonthYear(0, {
              month: Nl(pe.month),
              year: Nl(pe.year),
            });
        },
        Ze = (pe) => {
          ae(pe ?? r.modelValue);
        },
        It = (pe, Le) => {
          var Ie;
          (Ie = p.value) == null || Ie.switchView(pe, Le);
        },
        zt = (pe) =>
          W.value.onClickOutside ? W.value.onClickOutside(pe) : bt();
      return (
        bT(d, u, () => zt(gt)),
        a({
          closeMenu: bt,
          selectDate: Lt,
          clearValue: ft,
          openMenu: qe,
          onScroll: z,
          formatInputValue: Y,
          updateInternalModelValue: $,
          setMonthYear: Ae,
          parseModel: Ze,
          switchView: It,
          toggleMenu: ot,
        }),
        (pe, Le) => (
          m(),
          v(
            "div",
            {
              ref_key: "pickerWrapperRef",
              ref: y,
              class: ee(re.value),
              "data-datepicker-instance": "",
            },
            [
              Ee(
                mC,
                Qe(
                  {
                    ref_key: "inputRef",
                    ref: u,
                    "input-value": L(F),
                    "onUpdate:inputValue":
                      Le[0] ||
                      (Le[0] = (Ie) => (Ji(F) ? (F.value = Ie) : null)),
                    "is-menu-open": o.value,
                  },
                  pe.$props,
                  {
                    onClear: ft,
                    onOpen: qe,
                    onSetInputDate: ka,
                    onSetEmptyDate: L(le),
                    onSelectDate: Lt,
                    onToggle: ot,
                    onClose: bt,
                    onFocus: te,
                    onBlur: we,
                    onRealBlur: Le[1] || (Le[1] = (Ie) => (g.value = !1)),
                  }
                ),
                Pt({ _: 2 }, [
                  Se(L(B), (Ie, Rt) => ({
                    name: Ie,
                    fn: _e(($t) => [he(pe.$slots, Ie, tt(_t($t)))]),
                  })),
                ]),
                1040,
                ["input-value", "is-menu-open", "onSetEmptyDate"]
              ),
              Ee(
                Qc,
                tt(_t(Q.value)),
                {
                  default: _e(() => [
                    Ee(
                      At,
                      { name: L(T)(L(I)), css: L(R) && !L(X).enabled },
                      {
                        default: _e(() => [
                          o.value
                            ? (m(),
                              v(
                                "div",
                                Qe(
                                  { key: 0, ref_key: "dpWrapMenuRef", ref: d },
                                  fe.value,
                                  {
                                    class: {
                                      "dp--menu-wrapper": !L(X).enabled,
                                    },
                                    style: L(X).enabled ? void 0 : L(U),
                                  }
                                ),
                                [
                                  Ee(
                                    ql,
                                    Qe(
                                      { ref_key: "dpMenuRef", ref: p },
                                      pe.$props,
                                      {
                                        "internal-model-value": L(j),
                                        "onUpdate:internalModelValue":
                                          Le[2] ||
                                          (Le[2] = (Ie) =>
                                            Ji(j) ? (j.value = Ie) : null),
                                        class: {
                                          [ce.value]: !0,
                                          "dp--menu-wrapper": pe.teleport,
                                        },
                                        "open-on-top": L(I),
                                        "arr-map-values": H.value,
                                        "no-overlay-focus": me.value,
                                        onClosePicker: bt,
                                        onSelectDate: Lt,
                                        onAutoApply: Ba,
                                        onTimeUpdate: Be,
                                        onFlowStep:
                                          Le[3] ||
                                          (Le[3] = (Ie) =>
                                            pe.$emit("flow-step", Ie)),
                                        onUpdateMonthYear:
                                          Le[4] ||
                                          (Le[4] = (Ie) =>
                                            pe.$emit("update-month-year", Ie)),
                                        onInvalidSelect:
                                          Le[5] ||
                                          (Le[5] = (Ie) =>
                                            pe.$emit("invalid-select", L(j))),
                                        onAutoApplyInvalid:
                                          Le[6] ||
                                          (Le[6] = (Ie) =>
                                            pe.$emit("invalid-select", Ie)),
                                        onInvalidFixedRange:
                                          Le[7] ||
                                          (Le[7] = (Ie) =>
                                            pe.$emit(
                                              "invalid-fixed-range",
                                              Ie
                                            )),
                                        onRecalculatePosition: L(K),
                                        onTooltipOpen:
                                          Le[8] ||
                                          (Le[8] = (Ie) =>
                                            pe.$emit("tooltip-open", Ie)),
                                        onTooltipClose:
                                          Le[9] ||
                                          (Le[9] = (Ie) =>
                                            pe.$emit("tooltip-close", Ie)),
                                        onTimePickerOpen:
                                          Le[10] ||
                                          (Le[10] = (Ie) =>
                                            pe.$emit("time-picker-open", Ie)),
                                        onTimePickerClose:
                                          Le[11] ||
                                          (Le[11] = (Ie) =>
                                            pe.$emit("time-picker-close", Ie)),
                                        onAmPmChange:
                                          Le[12] ||
                                          (Le[12] = (Ie) =>
                                            pe.$emit("am-pm-change", Ie)),
                                        onRangeStart:
                                          Le[13] ||
                                          (Le[13] = (Ie) =>
                                            pe.$emit("range-start", Ie)),
                                        onRangeEnd:
                                          Le[14] ||
                                          (Le[14] = (Ie) =>
                                            pe.$emit("range-end", Ie)),
                                        onDateUpdate:
                                          Le[15] ||
                                          (Le[15] = (Ie) =>
                                            pe.$emit("date-update", Ie)),
                                        onInvalidDate:
                                          Le[16] ||
                                          (Le[16] = (Ie) =>
                                            pe.$emit("invalid-date", Ie)),
                                      }
                                    ),
                                    Pt({ _: 2 }, [
                                      Se(L(q), (Ie, Rt) => ({
                                        name: Ie,
                                        fn: _e(($t) => [
                                          he(pe.$slots, Ie, tt(_t({ ...$t }))),
                                        ]),
                                      })),
                                    ]),
                                    1040,
                                    [
                                      "internal-model-value",
                                      "class",
                                      "open-on-top",
                                      "arr-map-values",
                                      "no-overlay-focus",
                                      "onRecalculatePosition",
                                    ]
                                  ),
                                ],
                                16
                              ))
                            : M("", !0),
                        ]),
                        _: 3,
                      },
                      8,
                      ["name", "css"]
                    ),
                  ]),
                  _: 3,
                },
                16
              ),
            ],
            2
          )
        )
      );
    },
  }),
  Gi = (() => {
    const e = _T;
    return (
      (e.install = (a) => {
        a.component("Vue3DatePicker", e);
      }),
      e
    );
  })(),
  wT = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: Gi },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
Object.entries(wT).forEach(([e, a]) => {
  e !== "default" && (Gi[e] = a);
});
const kT = {
    props: {
      month: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      customProps: { type: Object, default: null },
    },
    emits: ["update-month-year"],
    computed: {
      getLanguage() {
        return this.customProps.language === "br"
          ? "pt-BR"
          : this.customProps.language;
      },
      calendarTitle() {
        return new Date(this.year, this.month).toLocaleDateString(
          this.getLanguage,
          { year: "numeric", month: "long" }
        );
      },
    },
    methods: {
      onNextClick() {
        let e = this.month,
          a = this.year;
        this.month === 11 ? ((e = 0), (a = this.year + 1)) : (e += 1),
          this.updateDate(e, a);
      },
      onPreviousClick() {
        let e = this.month,
          a = this.year;
        this.month === 0 ? ((e = 11), (a = this.year - 1)) : (e -= 1),
          this.updateDate(e, a);
      },
      updateDate(e, a) {
        this.$emit("update-month-year", { instance: 0, month: e, year: a });
      },
    },
  },
  qc = (e) => (Ht("data-v-707c7e3f"), (e = e()), Ut(), e),
  ST = { class: "date-picker-header" },
  CT = qc(() =>
    E(
      "div",
      { class: "date-picker-header__arrow" },
      [
        E(
          "svg",
          {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          [
            E("path", {
              d: "M12.5 5L7.5 10L12.5 15",
              stroke: "black",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
            }),
          ]
        ),
      ],
      -1
    )
  ),
  TT = [CT],
  PT = qc(() =>
    E(
      "div",
      { class: "date-picker-header__arrow date-picker-header__arrow--next" },
      [
        E(
          "svg",
          {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          [
            E("path", {
              d: "M12.5 5L7.5 10L12.5 15",
              stroke: "black",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
            }),
          ]
        ),
      ],
      -1
    )
  ),
  IT = [PT];
function ET(e, a, t, n, r, i) {
  return (
    m(),
    v("div", ST, [
      E(
        "button",
        {
          class: "date-picker-header__button",
          onClick:
            a[0] ||
            (a[0] = (...o) => i.onPreviousClick && i.onPreviousClick(...o)),
        },
        TT
      ),
      Ne(" " + J(i.calendarTitle) + " ", 1),
      E(
        "button",
        {
          class: "date-picker-header__button",
          onClick:
            a[1] || (a[1] = (...o) => i.onNextClick && i.onNextClick(...o)),
        },
        IT
      ),
    ])
  );
}
const DT = ie(kT, [
    ["render", ET],
    ["__scopeId", "data-v-707c7e3f"],
  ]),
  MT = se({
    components: { ModalLayout: vn, DatePicker: Gi },
    props: {
      translations: { type: Object, default: () => {} },
      language: { type: String, default: "en" },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e) {
      const {
          isStoreTypeZyro: a,
          products: t,
          selectedBookingProductId: n,
          shoppingCartItems: r,
          setShoppingCartOpen: i,
          setShoppingCartItems: o,
          setSelectedBookingId: s,
        } = Wt(),
        { openEcommerceModal: l } = qt(),
        { initiateCheckout: d } = on(),
        p = c(() => DT);
      return {
        initiateCheckout: d,
        openEcommerceModal: l,
        datePickerHeader: p,
        isStoreTypeZyro: a,
        products: t,
        selectedBookingProductId: n,
        shoppingCartItems: r,
        setShoppingCartOpen: i,
        setShoppingCartItems: o,
        setSelectedBookingId: s,
      };
    },
    data() {
      return {
        isTimeSelected: !1,
        selectedTimeSlot: null,
        selectedDate: new Date(),
        timeSlots: [],
        isSlotsLoading: !1,
        isCalendarLoading: !1,
        isCheckoutLoading: !1,
        disabledDates: [],
      };
    },
    computed: {
      isModalEnabled() {
        return this.isStoreTypeZyro && !!this.selectedBookingProductId;
      },
      selectedBookingProduct() {
        return this.products?.find(
          (e) => e.id === this.selectedBookingProductId
        );
      },
      bookingEvent() {
        return this.selectedBookingProduct?.variants[0].booking_event;
      },
      title() {
        return this.selectedBookingProduct?.title;
      },
      location() {
        return this.bookingEvent?.location;
      },
      duration() {
        return this.bookingEvent?.length || null;
      },
      durationUnit() {
        return this.bookingEvent?.length_unit;
      },
      aggregatedDuration() {
        const e =
            this.durationUnit === Bo
              ? this.duration / 1e3 / 60 / 60
              : this.duration / 1e3 / 60,
          a =
            this.durationUnit === Bo
              ? this.translations.hourShort
              : this.translations.minuteShort;
        return `${e} ${a}`;
      },
      eventStartDate() {
        return this.selectedTimeSlot ? new Date(this.selectedTimeSlot) : null;
      },
      eventEndDate() {
        if (!this.selectedTimeSlot) return null;
        const a = this.eventStartDate.getTime() + this.duration;
        return new Date(a);
      },
      calculatedTime() {
        if (!this.selectedTimeSlot) return "--:--";
        const e = this.getVisibleDate(this.eventStartDate),
          a = this.getVisibleDate(this.eventEndDate);
        return `${e} - ${a}`;
      },
      dayNames() {
        const e = [],
          a = new Date();
        a.setDate(a.getDate() - a.getDay());
        for (let t = 0; t < 7; t += 1)
          a.setDate(a.getDate() + 1),
            e.push(
              new Date(a).toLocaleDateString(this.getLanguage, {
                weekday: "short",
              })
            );
        return e;
      },
      formattedSelectedDate() {
        const e = this.selectedDate?.toLocaleDateString(this.language);
        if (
          this.eventStartDate?.toDateString() !==
          this.eventEndDate?.toDateString()
        ) {
          const a = this.eventEndDate.toLocaleDateString(this.language);
          return `${e} - ${a}`;
        }
        return e;
      },
      selectedMonthAndWeekday() {
        if (!this.selectedDate) return null;
        const e = this.selectedDate?.toLocaleDateString(this.getLanguage, {
          month: "long",
          day: "numeric",
        });
        return `${this.selectedDate?.toLocaleDateString(this.getLanguage, {
          weekday: "long",
        })}, ${e}`;
      },
      getLanguage() {
        return this.language === "br" ? "pt-BR" : this.language;
      },
    },
    watch: {
      async selectedDate() {
        (this.selectedTimeSlot = null),
          (this.isTimeSelected = !1),
          await this.loadTimeSlots();
      },
    },
    async mounted() {
      this.isModalEnabled && this.setDefaultData();
    },
    methods: {
      closeEcommerceModal() {
        this.setSelectedBookingId(null),
          this.$refs.modal.handleCloseModalAction();
      },
      async setDefaultData() {
        if (
          (await this.loadAvailability(),
          this.disabledDates.some(
            (e) => e.toDateString() === this.selectedDate.toDateString()
          ))
        ) {
          const a = this.getAllDaysInCurrentMonth()
            .filter(
              (t) =>
                !this.disabledDates.some(
                  (n) => n.toDateString() === t.toDateString()
                )
            )
            .sort((t, n) => new Date(t.date) - new Date(n.date));
          this.selectedDate = a.shift();
        }
        await this.loadTimeSlots();
      },
      async handleSubmit() {
        if (Fa() || this.isInPreviewMode) {
          this.openEcommerceModal("EcommerceMessageButtonDisabled");
          return;
        }
        const e = { ...this.selectedBookingProduct },
          { timeZone: a } = Intl.DateTimeFormat().resolvedOptions();
        (e.variants[0].booking_event = {
          ...e.variants[0].booking_event,
          time_slot: this.selectedTimeSlot,
          time_zone: a,
          length: e.variants[0].booking_event.length,
          length_unit: e.variants[0].booking_event.length_unit,
          date: this.selectedDate,
        }),
          this.isCartVisible
            ? ((this.isCheckoutLoading = !0),
              this.setShoppingCartItems([...this.shoppingCartItems, e]),
              this.setShoppingCartOpen(!0),
              this.closeEcommerceModal())
            : await this.initiateCheckout([e]).then(() => {
                (this.isCheckoutLoading = !1), this.closeEcommerceModal();
              });
      },
      selectTimeSlot(e) {
        (this.isTimeSelected = !0), (this.selectedTimeSlot = e);
      },
      async loadTimeSlots() {
        this.isSlotsLoading = !0;
        const e = new Intl.DateTimeFormat("lt").format(this.selectedDate);
        this.timeSlots = await rp(this.bookingEvent.id, e).then(
          (a) => ((this.isSlotsLoading = !1), a)
        );
      },
      async loadAvailability({ data: e = {} } = {}) {
        this.isCalendarLoading = !0;
        const a = Object.keys(e).length
            ? new Date(e.year, e.month)
            : this.selectedDate,
          t = new Date(a.getFullYear(), a.getMonth() + 1, 0);
        this.disabledDates = await op({
          bookingId: this.bookingEvent.id,
          fromDate: new Intl.DateTimeFormat("lt").format(a),
          toDate: new Intl.DateTimeFormat("lt").format(t),
        }).then(
          (n) => (
            (this.isCalendarLoading = !1),
            n.map((r) => {
              const i = r.split("-");
              return new Date(i[0], i[1] - 1, i[2]);
            })
          )
        );
      },
      getAllDaysInCurrentMonth() {
        const e = new Date().getMonth(),
          a = new Date(new Date().getFullYear(), e, new Date().getDate()),
          t = [];
        for (; a.getMonth() === e; )
          t.push(new Date(a)), a.setDate(a.getDate() + 1);
        return t;
      },
      getVisibleDate(e) {
        return e.toLocaleTimeString(this.language, {
          hour: "2-digit",
          minute: "2-digit",
        });
      },
    },
  }),
  OT = { class: "ecommerce-booking-modal" },
  AT = { class: "ecommerce-booking-modal__content" },
  LT = { class: "ecommerce-booking-modal__info" },
  BT = { class: "ecommerce-booking-modal__title" },
  RT = { class: "ecommerce-booking-modal__icons" },
  $T = { class: "ecommerce-booking-modal__text-wrapper" },
  NT = E(
    "div",
    { class: "ecommerce-booking-modal__icon" },
    [
      E(
        "svg",
        {
          width: "16",
          height: "18",
          viewBox: "0 0 16 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          E("path", {
            d: "M5.5 8.3335H3.83333V10.0002H5.5V8.3335ZM8.83333 8.3335H7.16667V10.0002H8.83333V8.3335ZM12.1667 8.3335H10.5V10.0002H12.1667V8.3335ZM13.8333 2.50016H13V0.833496H11.3333V2.50016H4.66667V0.833496H3V2.50016H2.16667C1.24167 2.50016 0.5 3.25016 0.5 4.16683V15.8335C0.5 16.2755 0.675595 16.6994 0.988155 17.012C1.30072 17.3246 1.72464 17.5002 2.16667 17.5002H13.8333C14.2754 17.5002 14.6993 17.3246 15.0118 17.012C15.3244 16.6994 15.5 16.2755 15.5 15.8335V4.16683C15.5 3.7248 15.3244 3.30088 15.0118 2.98832C14.6993 2.67576 14.2754 2.50016 13.8333 2.50016ZM13.8333 15.8335H2.16667V6.66683H13.8333V15.8335Z",
            fill: "#474B4F",
          }),
        ]
      ),
    ],
    -1
  ),
  xT = { class: "ecommerce-booking-modal__text" },
  HT = { class: "ecommerce-booking-modal__text-wrapper" },
  UT = E(
    "div",
    { class: "ecommerce-booking-modal__icon" },
    [
      E(
        "svg",
        {
          width: "18",
          height: "18",
          viewBox: "0 0 18 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          E("path", {
            d: "M9.00001 15.6665C12.6667 15.6665 15.6667 12.6665 15.6667 8.99984C15.6667 5.33317 12.6667 2.33317 9.00001 2.33317C5.33334 2.33317 2.33334 5.33317 2.33334 8.99984C2.33334 12.6665 5.33334 15.6665 9.00001 15.6665ZM9.00001 0.666504C13.5833 0.666504 17.3333 4.4165 17.3333 8.99984C17.3333 13.5832 13.5833 17.3332 9.00001 17.3332C4.41667 17.3332 0.666672 13.5832 0.666672 8.99984C0.666672 4.4165 4.41667 0.666504 9.00001 0.666504ZM13.1667 8.58317V9.83317H8.16667V4.83317H9.41667V8.58317H13.1667Z",
            fill: "#474B4F",
          }),
        ]
      ),
    ],
    -1
  ),
  VT = { class: "ecommerce-booking-modal__text" },
  FT = { class: "ecommerce-booking-modal__text-wrapper" },
  YT = E(
    "div",
    { class: "ecommerce-booking-modal__icon" },
    [
      E(
        "svg",
        {
          width: "12",
          height: "18",
          viewBox: "0 0 12 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          E("path", {
            d: "M6.00001 2.33317C8.33334 2.33317 10.1667 4.1665 10.1667 6.49984C10.1667 8.9165 7.75001 12.4998 6.00001 14.7498C4.25001 12.4998 1.83334 8.9165 1.83334 6.49984C1.83334 4.1665 3.66667 2.33317 6.00001 2.33317ZM6.00001 0.666504C2.75001 0.666504 0.166672 3.24984 0.166672 6.49984C0.166672 10.8332 6.00001 17.3332 6.00001 17.3332C6.00001 17.3332 11.8333 10.8332 11.8333 6.49984C11.8333 3.24984 9.25001 0.666504 6.00001 0.666504ZM5.41667 10.6665L9.50001 6.49984L8.33334 5.33317L5.41667 8.33317L4.08334 6.99984L2.91667 8.1665L5.41667 10.6665Z",
            fill: "#474B4F",
          }),
        ]
      ),
    ],
    -1
  ),
  qT = { class: "ecommerce-booking-modal__text" },
  jT = { class: "ecommerce-booking-modal__availability" },
  WT = { class: "ecommerce-booking-modal__time-title" },
  GT = { class: "ecommerce-booking-modal__calendar-wrapper" },
  zT = { class: "ecommerce-booking-modal__time-wrapper" },
  KT = { class: "ecommerce-booking-modal__selected-day" },
  QT = { class: "ecommerce-booking-modal__time-slot-wrapper" },
  ZT = { key: 0, class: "ecommerce-booking-modal__time-slot-loader" },
  XT = ["onClick"],
  JT = { class: "ecommerce-booking-modal__buttons" },
  eP = ["disabled"];
function tP(e, a, t, n, r, i) {
  const o = Ce("DatePicker"),
    s = Ce("ModalLayout");
  return e.isModalEnabled
    ? (m(),
      G(
        s,
        {
          key: 0,
          ref: "modal",
          padding: "0",
          "max-width": "1048px",
          "mobile-height": "100%",
          width: "100vw",
          "background-color": "transparent",
        },
        {
          default: _e(() => [
            E("div", OT, [
              E("div", AT, [
                E("div", LT, [
                  E("p", BT, J(e.title), 1),
                  E("div", RT, [
                    E("div", $T, [
                      NT,
                      E("p", xT, J(e.formattedSelectedDate), 1),
                    ]),
                    E("div", HT, [
                      UT,
                      E(
                        "p",
                        VT,
                        J(e.calculatedTime) +
                          " (" +
                          J(e.aggregatedDuration) +
                          ") ",
                        1
                      ),
                    ]),
                  ]),
                  E("div", FT, [YT, E("p", qT, J(e.location), 1)]),
                ]),
                E("div", jT, [
                  E("p", WT, J(e.translations.selectDateAndTime), 1),
                  E("div", GT, [
                    Ee(
                      o,
                      {
                        modelValue: e.selectedDate,
                        "onUpdate:modelValue":
                          a[0] || (a[0] = (l) => (e.selectedDate = l)),
                        inline: "",
                        "hide-offset-dates": "",
                        "auto-apply": "",
                        class: ee([
                          "ecommerce-booking-modal-calendar",
                          {
                            "ecommerce-booking-modal-calendar--loading":
                              e.isCalendarLoading,
                          },
                        ]),
                        "disabled-dates": e.disabledDates,
                        "min-date": new Date(),
                        locale: e.getLanguage,
                        "no-swipe": "",
                        "month-change-on-scroll": !1,
                        "enable-time-picker": !1,
                        "custom-props": { language: e.getLanguage },
                        "month-year-component": e.datePickerHeader,
                        onUpdateMonthYear:
                          a[1] ||
                          (a[1] = (l) => e.loadAvailability({ data: l })),
                      },
                      {
                        "calendar-header": _e(({ index: l }) => [
                          E("div", null, J(e.dayNames[l]), 1),
                        ]),
                        _: 1,
                      },
                      8,
                      [
                        "modelValue",
                        "class",
                        "disabled-dates",
                        "min-date",
                        "locale",
                        "custom-props",
                        "month-year-component",
                      ]
                    ),
                    E("div", zT, [
                      E("div", null, [
                        E("p", KT, J(e.selectedMonthAndWeekday), 1),
                      ]),
                      E("div", QT, [
                        e.isSlotsLoading
                          ? (m(), v("div", ZT))
                          : (m(!0),
                            v(
                              ge,
                              { key: 1 },
                              Se(
                                e.timeSlots,
                                (l, d) => (
                                  m(),
                                  v(
                                    "button",
                                    {
                                      key: `time-${d}`,
                                      class: ee([
                                        "ecommerce-booking-modal__time-slot",
                                        {
                                          "ecommerce-booking-modal__time-slot--active":
                                            e.selectedTimeSlot === l,
                                        },
                                      ]),
                                      onClick: (p) => e.selectTimeSlot(l),
                                    },
                                    J(e.getVisibleDate(new Date(l))),
                                    11,
                                    XT
                                  )
                                )
                              ),
                              128
                            )),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              E("div", JT, [
                E(
                  "button",
                  {
                    class: "ecommerce-booking-modal__button",
                    onClick:
                      a[2] ||
                      (a[2] = (...l) =>
                        e.closeEcommerceModal && e.closeEcommerceModal(...l)),
                  },
                  J(e.translations.cancel),
                  1
                ),
                E(
                  "button",
                  {
                    class: ee([
                      "ecommerce-booking-modal__button ecommerce-booking-modal__button--save",
                      { loading: e.isCheckoutLoading },
                    ]),
                    disabled: !e.isTimeSelected,
                    onClick:
                      a[3] ||
                      (a[3] = (...l) => e.handleSubmit && e.handleSubmit(...l)),
                  },
                  J(e.translations.book),
                  11,
                  eP
                ),
              ]),
            ]),
          ]),
          _: 1,
        },
        512
      ))
    : M("", !0);
}
const aP = ie(MT, [["render", tP]]),
  nP = se({
    name: "EcommerceModalContent",
    props: {
      title: { type: String, required: !0 },
      text: { type: String, required: !0 },
      buttonText: { type: String, required: !0 },
      qaSelector: { type: String, default: "success" },
    },
    emits: ["handle-close"],
  }),
  rP = { class: "payment-info" },
  oP = { class: "payment-info__content" },
  iP = { class: "payment-info__title" },
  sP = { class: "payment-info__text body-large" };
function lP(e, a, t, n, r, i) {
  const o = ze("qa");
  return ue(
    (m(),
    v("div", rP, [
      E("div", oP, [
        E("h5", iP, J(e.title), 1),
        E("p", sP, J(e.text), 1),
        E(
          "button",
          {
            class: "payment-info__button",
            type: "primary",
            onClick: a[0] || (a[0] = (s) => e.$emit("handle-close")),
          },
          J(e.buttonText),
          1
        ),
      ]),
    ])),
    [[o, `ecommerce-modal-checkout-${e.qaSelector}`]]
  );
}
const Fr = ie(nP, [
    ["render", lP],
    ["__scopeId", "data-v-98b20e5c"],
  ]),
  uP = se({
    components: { ModalLayout: vn, ModalContent: Fr },
    props: { translations: { type: Object, default: () => {} } },
  });
function cP(e, a, t, n, r, i) {
  const o = Ce("ModalContent"),
    s = Ce("ModalLayout");
  return (
    m(),
    G(
      s,
      { ref: "modal" },
      {
        default: _e(() => [
          Ee(
            o,
            {
              "qa-selector": "booking-unavailable",
              title: e.translations.checkoutModalBookingUnavailable,
              text: e.translations.checkoutModalChooseDifferentTime,
              "button-text": e.translations.gotIt,
              onHandleClose:
                a[0] || (a[0] = (l) => e.$refs.modal.handleCloseModalAction()),
            },
            null,
            8,
            ["title", "text", "button-text"]
          ),
        ]),
        _: 1,
      },
      512
    )
  );
}
const dP = ie(uP, [["render", cP]]),
  mP = se({
    components: { ModalLayout: vn, ModalContent: Fr },
    props: { translations: { type: Object, default: () => {} } },
  });
function pP(e, a, t, n, r, i) {
  const o = Ce("ModalContent"),
    s = Ce("ModalLayout");
  return (
    m(),
    G(
      s,
      { ref: "modal" },
      {
        default: _e(() => [
          Ee(
            o,
            {
              "qa-selector": "failed",
              title: e.translations.checkoutModalCantAcceptOrders,
              text: e.translations.checkoutModalPleaseContact,
              "button-text": e.translations.close,
              onHandleClose:
                a[0] || (a[0] = (l) => e.$refs.modal.handleCloseModalAction()),
            },
            null,
            8,
            ["title", "text", "button-text"]
          ),
        ]),
        _: 1,
      },
      512
    )
  );
}
const gP = ie(mP, [["render", pP]]),
  hP = se({
    __name: "EcommerceCheckoutSuccess",
    props: { translations: { default: () => ({}) } },
    setup(e, { expose: a }) {
      a();
      const t = e,
        { isEcommerceStoreCreated: n, setShoppingCartItems: r } = Wt(),
        i = A({
          title: t.translations.checkoutModalThanksForOrder,
          text: t.translations.checkoutModalOrderReceived,
          buttonText: t.translations.gotIt,
          modalType: "success-order",
        }),
        o = A(null);
      Oe(() => {
        r([]);
        const d = new URLSearchParams(window.location.search).get("product");
        d === jt
          ? (i.value = {
              title: t.translations.checkoutModalThanksForOrder,
              text: t.translations.checkoutModalSuccessfullyBooked,
              buttonText: t.translations.gotIt,
              modalType: "success-orderbooking",
            })
          : d === Lo &&
            (i.value = {
              title: t.translations.checkoutModalThanksForDonation,
              text: t.translations.checkoutModalDonationReceived,
              buttonText: t.translations.gotIt,
              modalType: "success-orderdonation",
            });
      });
      const s = {
        props: t,
        isEcommerceStoreCreated: n,
        setShoppingCartItems: r,
        modalContent: i,
        modalRef: o,
        ModalContent: Fr,
        ModalLayout: vn,
      };
      return (
        Object.defineProperty(s, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  });
function fP(e, a, t, n, r, i) {
  return n.isEcommerceStoreCreated
    ? (m(),
      G(
        n.ModalLayout,
        { key: 0, ref: "modalRef" },
        {
          default: _e(() => [
            Ee(
              n.ModalContent,
              {
                title: n.modalContent.title,
                text: n.modalContent.text,
                "button-text": n.modalContent.buttonText,
                "qa-selector": n.modalContent.modalType,
                onHandleClose:
                  a[0] || (a[0] = (o) => n.modalRef.handleCloseModalAction()),
              },
              null,
              8,
              ["title", "text", "button-text", "qa-selector"]
            ),
          ]),
          _: 1,
        },
        512
      ))
    : M("", !0);
}
const vP = ie(hP, [["render", fP]]),
  yP = se({
    components: { CloseButton: Pi },
    props: { translations: { type: Object, default: () => {} } },
    setup() {
      const { closeEcommerceModal: e } = qt(),
        a = setTimeout(() => {
          e();
        }, 6e3);
      return (
        xt(() => {
          clearTimeout(a);
        }),
        { closeEcommerceModal: e }
      );
    },
  }),
  bP = (e) => (Ht("data-v-2b2551b7"), (e = e()), Ut(), e),
  _P = { class: "notification" },
  wP = bP(() =>
    E(
      "svg",
      {
        class: "notification__icon",
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        E("path", {
          d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
        E("path", {
          d: "M12.01 16L12.01 12",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
        E("path", {
          d: "M12.01 8L12 8",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  kP = { class: "notification__content" };
function SP(e, a, t, n, r, i) {
  const o = Ce("CloseButton"),
    s = ze("qa");
  return (
    m(),
    G(
      At,
      { name: "fade" },
      {
        default: _e(() => [
          ue(
            (m(),
            v("div", _P, [
              wP,
              E("p", kP, J(e.translations.checkoutModalDisabledPreview), 1),
              Ee(o, {
                class: "notification__close",
                title: "Close",
                onClick: a[0] || (a[0] = (l) => e.closeEcommerceModal()),
              }),
            ])),
            [[s, "builder-message-ecommercedisabled"]]
          ),
        ]),
        _: 1,
      }
    )
  );
}
const CP = ie(yP, [
    ["render", SP],
    ["__scopeId", "data-v-2b2551b7"],
  ]),
  TP = se({
    components: { ModalLayout: vn, ModalContent: Fr },
    props: { translations: { type: Object, default: () => {} } },
  });
function PP(e, a, t, n, r, i) {
  const o = Ce("ModalContent"),
    s = Ce("ModalLayout");
  return (
    m(),
    G(
      s,
      { ref: "modal" },
      {
        default: _e(() => [
          Ee(
            o,
            {
              "qa-selector": "outofstock",
              title: e.translations.checkoutModalOutOfStock,
              text: e.translations.checkoutModalTryOrChoose,
              "button-text": e.translations.gotIt,
              onHandleClose:
                a[0] || (a[0] = (l) => e.$refs.modal.handleCloseModalAction()),
            },
            null,
            8,
            ["title", "text", "button-text"]
          ),
        ]),
        _: 1,
      },
      512
    )
  );
}
const IP = ie(TP, [["render", PP]]),
  EP = "open-modal",
  DP = se({
    components: {
      EcommerceProductPreview: bw,
      EcommerceBookingEventSelect: aP,
      EcommerceBookingUnavailable: dP,
      EcommerceCheckoutFailed: gP,
      EcommerceCheckoutSuccess: vP,
      EcommerceMessageButtonDisabled: CP,
      EcommerceOutOfStock: IP,
    },
    props: {
      ecommerceTranslations: { type: Object, default: () => ({}) },
      language: { type: String, default: "en" },
      currentLocale: { type: String, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup() {
      const {
        openEcommerceModal: e,
        closeEcommerceModal: a,
        openEcommerceModalName: t,
      } = qt();
      return (
        Oe(() => {
          const r = new URLSearchParams(window.location.search).get(EP);
          r && e(r);
        }),
        {
          openEcommerceModal: e,
          closeEcommerceModal: a,
          openEcommerceModalName: t,
        }
      );
    },
  });
function MP(e, a, t, n, r, i) {
  return e.openEcommerceModalName
    ? (m(),
      G(
        gn(e.openEcommerceModalName),
        {
          key: 0,
          translations: e.ecommerceTranslations,
          language: e.language,
          "current-locale": e.currentLocale,
          "is-cart-visible": e.isCartVisible,
          "is-in-preview-mode": e.isInPreviewMode,
          "is-quick-preview": "",
        },
        null,
        8,
        [
          "translations",
          "language",
          "current-locale",
          "is-cart-visible",
          "is-in-preview-mode",
        ]
      ))
    : M("", !0);
}
const OP = ie(DP, [["render", MP]]),
  AP = se({
    __name: "Flag",
    props: { alt: {}, src: { default: void 0 } },
    setup(e, { expose: a }) {
      a();
      const t = {};
      return (
        Object.defineProperty(t, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        t
      );
    },
  }),
  LP = { class: "flag" },
  BP = ["src", "alt"],
  RP = E("div", { class: "flag__shadow" }, null, -1);
function $P(e, a, t, n, r, i) {
  return (
    m(),
    v("div", LP, [
      E("img", { class: "flag__img", src: t.src, alt: t.alt }, null, 8, BP),
      RP,
    ])
  );
}
const NP = ie(AP, [["render", $P]]),
  xP = se({
    __name: "LanguageSwitcher",
    props: { languages: {}, currentLocale: { default: null } },
    setup(e, { expose: a }) {
      a();
      const t = e,
        n = c(() =>
          t.languages
            .filter(({ isHidden: o }) => !o)
            .map((o) => ({
              ...o,
              src: `${Dd}/${o.flagPath}`,
              alt: `${o.locale} flag`,
            }))
        ),
        r = c(
          () => n.value.find(({ locale: o }) => o === t.currentLocale) ?? {}
        ),
        i = {
          props: t,
          languageSwitcherLanguages: n,
          selectedLanguage: r,
          Flag: NP,
        };
      return (
        Object.defineProperty(i, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  HP = { ref: "languageSwitcher", class: "language-switcher", tabindex: "0" },
  UP = { class: "language-switcher__button" },
  VP = { key: 1, class: "language-switcher__locale" },
  FP = E(
    "svg",
    {
      class: "language-switcher__icon",
      width: "10",
      height: "7",
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      E("path", {
        d: "M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z",
        fill: "currentColor",
      }),
    ],
    -1
  ),
  YP = { class: "language-switcher__dropdown-area" },
  qP = { class: "language-switcher__dropdown" },
  jP = ["href"];
function WP(e, a, t, n, r, i) {
  const o = ze("qa");
  return (
    m(),
    v(
      "div",
      HP,
      [
        ue(
          (m(),
          v("div", UP, [
            n.selectedLanguage.country
              ? ue(
                  (m(),
                  G(
                    n.Flag,
                    {
                      key: 0,
                      class: "language-switcher__flag",
                      src: n.selectedLanguage.src,
                      alt: n.selectedLanguage.alt,
                    },
                    null,
                    8,
                    ["src", "alt"]
                  )),
                  [
                    [
                      o,
                      `navigation-selected-language-${n.selectedLanguage.name}`,
                    ],
                  ]
                )
              : (m(), v("div", VP, J(n.selectedLanguage.locale), 1)),
            FP,
          ])),
          [[o, "navigation-language-switcher"]]
        ),
        E("div", YP, [
          E("ul", qP, [
            (m(!0),
            v(
              ge,
              null,
              Se(n.languageSwitcherLanguages, (s) =>
                ue(
                  (m(),
                  v(
                    "li",
                    {
                      key: s.locale,
                      class: "language-switcher__dropdown-item",
                    },
                    [
                      E(
                        "a",
                        {
                          href: s.href,
                          class: ee([
                            "language-switcher__dropdown-link",
                            { "--current": s.locale === t.currentLocale },
                          ]),
                        },
                        [
                          s.country
                            ? (m(),
                              G(
                                n.Flag,
                                {
                                  key: 0,
                                  class: "language-switcher__dropdown-flag",
                                  src: s.src,
                                  alt: s.alt,
                                },
                                null,
                                8,
                                ["src", "alt"]
                              ))
                            : M("", !0),
                          Ne(" " + J(s.name), 1),
                        ],
                        10,
                        jP
                      ),
                    ]
                  )),
                  [[o, `navigation-language-switcher-${s.locale}`]]
                )
              ),
              128
            )),
          ]),
        ]),
      ],
      512
    )
  );
}
const GP = ie(xP, [["render", WP]]),
  zP = se({
    __name: "ZyroHamburger",
    props: {
      title: { type: String, default: "Menu" },
      isOpen: { type: Boolean, required: !0 },
      color: { type: String, default: "var(--nav-link-text-color)" },
    },
    setup(e, { expose: a }) {
      a(), St((i) => ({ "49f0cf5b": n.value }));
      const t = e,
        n = c(() => t.color),
        r = { props: t, burgerColor: n };
      return (
        Object.defineProperty(r, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        r
      );
    },
  }),
  zi = (e) => (Ht("data-v-ef8a58d4"), (e = e()), Ut(), e),
  KP = ["title"],
  QP = zi(() => E("span", { class: "burger__bun" }, null, -1)),
  ZP = zi(() => E("span", { class: "burger__meat" }, null, -1)),
  XP = zi(() => E("span", { class: "burger__bun" }, null, -1)),
  JP = [QP, ZP, XP];
function eI(e, a, t, n, r, i) {
  return (
    m(),
    v(
      "button",
      {
        type: "button",
        class: ee(["burger", { "burger--open": t.isOpen }]),
        title: t.title,
      },
      JP,
      10,
      KP
    )
  );
}
const tI = ie(zP, [
    ["render", eI],
    ["__scopeId", "data-v-ef8a58d4"],
  ]),
  aI = se({
    name: "BlockHeaderBackground",
    props: {
      type: { type: String, default: "color" },
      imageUrl: { type: String, default: null },
      color: { type: String, default: "" },
      isTransparent: { type: Boolean, default: !1 },
      overlayOpacity: { type: Number, default: 0 },
    },
    computed: {
      backgroundImage() {
        return this.type === "image" && this.imageUrl;
      },
      backgroundColor() {
        return this.type === "color" ? this.color : "transparent";
      },
      backgroundCSSVars() {
        return {
          "--background-color": this.isTransparent
            ? "transparent"
            : this.backgroundColor,
          ...(!!this.backgroundImage && {
            "--background-image": `url(${this.backgroundImage})`,
          }),
          ...(!!this.overlayOpacity && {
            "--overlay-opacity": this.overlayOpacity,
          }),
        };
      },
    },
  });
function nI(e, a, t, n, r, i) {
  return (
    m(),
    v(
      "div",
      {
        class: ee([
          "background",
          { "background--with-image": e.backgroundImage },
        ]),
        style: Re(e.backgroundCSSVars),
      },
      null,
      6
    )
  );
}
const rI = ie(aI, [["render", nI]]),
  oI = se({
    name: "BlockHeaderCart",
    props: {
      cartIconSize: { type: String, required: !0 },
      cartText: { type: String, required: !0 },
      itemsInCart: { type: Number, required: !0 },
      cartUrl: { type: String, default: null },
    },
    emits: ["cart-click"],
  }),
  iI = (e) => (Ht("data-v-f90c8b45"), (e = e()), Ut(), e),
  sI = ["href"],
  lI = { class: "block-header-cart__icon-container" },
  uI = iI(() =>
    E(
      "svg",
      {
        width: "19",
        height: "24",
        viewBox: "0 0 19 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: "block-header-cart__icon",
      },
      [
        E("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: `M5.94636 5.35922C6.29451 3.00506 7.9363 1.39824 9.67973
						1.39824C11.4232 1.39824 13.0649 3.00506
						13.4131 5.35922H5.94636ZM4.53847 5.35922C4.90317 2.43147
						6.95866 0.000183105 9.67973 0.000183105C12.4008
						0.000183105 14.4563 2.43147 14.821 5.35922H17.2816H18.6797V6.75728V21.2039C18.6797
						22.7481 17.4278 24 15.8836
						24H3.4758C1.93155 24 0.679688 22.7481 0.679688
						21.2039V6.75728V5.35922H2.07775H4.53847ZM2.07775 6.75728H4.52596V9.08752C4.52596
						9.47359 4.83893 9.78655 5.22499 9.78655C5.61105 9.78655 5.92402 9.47359
						5.92402 9.08752V6.75728H13.5259V9.08752C13.5259 9.47359
						13.8389 9.78655 14.2249 9.78655C14.611 9.78655 14.9239
						9.47359 14.9239 9.08752V6.75728H17.2816V21.2039C17.2816 21.976 16.6557 22.6019
						15.8836 22.6019H3.4758C2.70368 22.6019 2.07775 21.976 2.07775 21.2039V6.75728Z`,
          fill: "currentColor",
        }),
      ],
      -1
    )
  );
function cI(e, a, t, n, r, i) {
  const o = ze("qa");
  return (
    m(),
    v(
      "div",
      {
        class: "block-header-cart-wrapper",
        style: Re({ "--cart-icon-size": e.cartIconSize }),
      },
      [
        E(
          "a",
          { href: e.cartUrl, class: "block-header-cart" },
          [
            ue(
              (m(),
              v(
                "button",
                {
                  class: "block-header-cart__button",
                  title: "Go to cart",
                  onClick: a[0] || (a[0] = (s) => e.$emit("cart-click")),
                },
                [
                  E("div", lI, [
                    uI,
                    E(
                      "span",
                      null,
                      J(e.cartText) + " (" + J(e.itemsInCart) + ")",
                      1
                    ),
                  ]),
                ]
              )),
              [[o, "header-btn-shoppingbag"]]
            ),
          ],
          8,
          sI
        ),
      ],
      4
    )
  );
}
const dI = ie(oI, [
    ["render", cI],
    ["__scopeId", "data-v-f90c8b45"],
  ]),
  mI = se({
    name: "BlockHeaderItemContent",
    props: { item: { type: Object, required: !0 } },
    computed: {
      linkDataQa() {
        return this.item.isCurrent
          ? `navigationblock-page-active-${this.item.name}`
          : `navigationblock-page-${this.item.name}`;
      },
    },
  }),
  pI = (e) => (Ht("data-v-cf3ff533"), (e = e()), Ut(), e),
  gI = ["target", "rel", "href", "textContent"],
  hI = ["textContent"],
  fI = { key: 2, class: "item-content__icon-container-wrapper" },
  vI = pI(() =>
    E(
      "span",
      { class: "item-content__icon-container" },
      [
        E(
          "svg",
          {
            class: "item-content__icon",
            width: "10",
            height: "7",
            viewBox: "0 0 10 7",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          [
            E("path", {
              d: "M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z",
              fill: "currentColor",
            }),
          ]
        ),
      ],
      -1
    )
  ),
  yI = [vI];
function bI(e, a, t, n, r, i) {
  const o = ze("qa");
  return (
    m(),
    v(
      "div",
      {
        class: ee([
          "item-content-wrapper",
          { "item-content-wrapper--active": e.item.isCurrent },
        ]),
      },
      [
        e.item.href
          ? ue(
              (m(),
              v(
                "a",
                {
                  key: 0,
                  class: "item-content",
                  target: e.item.target,
                  rel: e.item.rel,
                  href: e.item.href,
                  textContent: J(e.item.name),
                },
                null,
                8,
                gI
              )),
              [[o, e.linkDataQa]]
            )
          : ue(
              (m(),
              v(
                "span",
                { key: 1, class: "item-content", textContent: J(e.item.name) },
                null,
                8,
                hI
              )),
              [[o, e.linkDataQa]]
            ),
        e.item.hasDropdown ? (m(), v("div", fI, yI)) : M("", !0),
      ],
      2
    )
  );
}
const _I = ie(mI, [
    ["render", bI],
    ["__scopeId", "data-v-cf3ff533"],
  ]),
  wI = se({
    name: "BlockHeaderItem",
    components: { BlockHeaderItemContent: _I },
    props: {
      item: { type: Object, required: !0 },
      areDropdownsHidden: { type: Boolean, default: !1 },
    },
  }),
  kI = { class: "block-header-item" },
  SI = { class: "block-header-item__label" },
  CI = {
    key: 0,
    type: "checkbox",
    class: "block-header-item__mobile-dropdown-trigger",
  },
  TI = { key: 1, class: "block-header-item__dropdown-area" },
  PI = { class: "block-header-item__dropdown" };
function II(e, a, t, n, r, i) {
  const o = Ce("BlockHeaderItemContent"),
    s = Ce("BlockHeaderItem", !0),
    l = ze("qa");
  return (
    m(),
    v("li", kI, [
      E("label", SI, [
        !e.areDropdownsHidden && e.item.hasDropdown
          ? (m(), v("input", CI))
          : M("", !0),
        ue(
          Ee(
            o,
            {
              item: e.item,
              class: "block-header-item__item",
              "aria-haspopup": e.item.hasDropdown,
            },
            null,
            8,
            ["item", "aria-haspopup"]
          ),
          [[l, `navigation-item-${e.item.name}`]]
        ),
        !e.areDropdownsHidden && e.item.hasDropdown
          ? (m(),
            v("div", TI, [
              E("ul", PI, [
                (m(!0),
                v(
                  ge,
                  null,
                  Se(
                    e.item.subItems,
                    (d) => (
                      m(), G(s, { key: d.id, item: d }, null, 8, ["item"])
                    )
                  ),
                  128
                )),
              ]),
            ]))
          : M("", !0),
      ]),
    ])
  );
}
const EI = ie(wI, [
    ["render", II],
    ["__scopeId", "data-v-ee55214b"],
  ]),
  DI = se({
    name: "BlockHeaderLogo",
    props: {
      logoSrc: { type: String, default: null },
      logoSvg: { type: String, default: null },
      href: { type: String, default: "/" },
      height: { type: Number, default: null },
      heightMobile: { type: Number, default: null },
      maxWidth: { type: String, default: null },
      maxWidthMobile: { type: String, default: null },
      objectPosition: { type: String, default: null },
      objectPositionMobile: { type: String, default: null },
      isOptimized: { type: Boolean, default: !1 },
      siteName: { type: String, default: null },
    },
    data() {
      return { optimizedHeight: null, optimizedHeightMobile: null };
    },
    computed: {
      logoAltTag() {
        return this.siteName ? `${this.siteName} logo` : null;
      },
      computedCSSVars() {
        return {
          "--height":
            this.isOptimized && this.height ? `${this.height}px` : null,
          "--m-height":
            this.isOptimized && this.heightMobile
              ? `${this.heightMobile}px`
              : null,
          "--width": this.maxWidth,
          "--m-width": this.maxWidthMobile,
          "--object-position": this.objectPosition,
          "--m-object-position": this.objectPositionMobile,
        };
      },
    },
  }),
  MI = ["href"],
  OI = ["innerHTML"],
  AI = ["src", "alt"];
function LI(e, a, t, n, r, i) {
  const o = ze("qa");
  return (
    m(),
    v(
      "a",
      {
        class: "block-header-logo",
        href: e.href,
        style: Re(e.computedCSSVars),
      },
      [
        e.logoSvg
          ? (m(),
            v(
              "div",
              {
                key: 0,
                class: "block-header-logo__image",
                innerHTML: e.logoSvg,
              },
              null,
              8,
              OI
            ))
          : ue(
              (m(),
              v(
                "img",
                {
                  key: 1,
                  class: "block-header-logo__image",
                  src: e.logoSrc,
                  alt: e.logoAltTag,
                },
                null,
                8,
                AI
              )),
              [[o, "builder-siteheader-img-logo"]]
            ),
      ],
      12,
      MI
    )
  );
}
const BI = ie(DI, [
    ["render", LI],
    ["__scopeId", "data-v-237d5d94"],
  ]),
  Ki = se({
    name: "BlockHeader",
    components: {
      ZyroHamburger: tI,
      BlockHeaderCart: dI,
      BlockHeaderLogo: BI,
      BlockHeaderItem: EI,
      BlockHeaderBackground: rI,
      LanguageSwitcher: GP,
      GridSocialIcons: Hu,
    },
    props: {
      siteName: { type: String, default: null },
      languageSwitcherLanguages: { type: Array, default: () => [] },
      items: { type: Array, default: () => [] },
      logoHref: { type: String, default: "/" },
      logoSrc: { type: String, default: null },
      logoSvg: { type: String, default: null },
      backgroundImageUrl: { type: String, default: null },
      isOpen: { type: Boolean, default: !1 },
      isSticky: { type: Boolean, default: !1 },
      isTransparent: { type: Boolean, default: !1 },
      isLogoVisible: { type: Boolean, default: !1 },
      isCartVisible: { type: Boolean, default: !1 },
      isLanguageSwitcherVisible: { type: Boolean, default: !1 },
      currentLocale: { type: String, default: null },
      backgroundColor: { type: String, default: "" },
      backgroundColorContrast: { type: String, default: "" },
      navLinkTextColor: { type: String, default: "" },
      navLinkTextColorHover: { type: String, default: "" },
      cartText: { type: String, default: null },
      cartUrl: { type: String, default: null },
      itemsInCart: { type: Number, default: 0 },
      logoPlacement: { type: String, default: null },
      logoPlacementMobile: { type: String, default: null },
      navigationPlacement: { type: String, default: null },
      navigationPlacementMobile: { type: String, default: null },
      areDropdownsHidden: { type: Boolean, default: !1 },
      isLogoOptimized: { type: Boolean, default: !1 },
      background: { type: Object, default: null },
      cartIconSize: { type: String, default: null },
      logoMaxWidth: { type: String, default: null },
      logoHeight: { type: Number, default: null },
      logoHeightMobile: { type: Number, default: null },
      logoMaxWidthMobile: { type: String, default: null },
      logoObjectPosition: { type: String, default: null },
      logoObjectPositionMobile: { type: String, default: null },
      fontFamily: { type: String, default: null },
      fontWeight: { type: Number, default: null },
      socialIconsLinks: { type: Array, default: () => [] },
      socialIconsStyles: { type: Object, default: () => ({}) },
    },
    emits: ["toggle-visibility", "cart-click", "logo-click"],
    setup(e, a) {
      const t = A(null),
        n = c(() => e.socialIconsLinks.length > 0);
      Oe(() => {
        $r(t, () => {
          e.isOpen && a.emit("toggle-visibility");
        });
      });
      const { hasUserScrolled: r } = su(),
        i = c(() =>
          !e.items.length && !e.isLanguageSwitcherVisible
            ? "inline-flex"
            : "none"
        ),
        o = c(() => e.socialIconsStyles.justify || "flex-end");
      return {
        hasUserScrolled: r,
        BLOCK_HEADER_CLASS: ou,
        BLOCK_HEADER_STICKY_CLASS: Md,
        headerRef: t,
        isSocialIconsLinksVisible: n,
        mobileHeaderSocialIconsCssDisplay: i,
        headerSocialIconsCssJustify: o,
      };
    },
    computed: {
      isWithShadow() {
        return this.hasUserScrolled && this.isSticky;
      },
      shouldForceTransparency() {
        return (this.isSticky && !this.hasUserScrolled) || !this.isSticky;
      },
      isCurrentlyTransparent() {
        return (
          this.isTransparent && this.shouldForceTransparency && !this.isOpen
        );
      },
      isLogoAndNavigationCentered() {
        return (
          this.logoPlacement === "center" &&
          this.navigationPlacement === "center"
        );
      },
      isLogoAndNavigationCenteredMobile() {
        return (
          this.logoPlacementMobile === "center" &&
          this.navigationPlacementMobile === "center"
        );
      },
      navigationGridRowCount() {
        return this.isLogoVisible && this.isCartVisible ? 3 : 2;
      },
      computedStyles() {
        const e = `${this.logoPlacement}-${this.navigationPlacement}`,
          a = `${this.logoPlacementMobile}-${this.navigationPlacementMobile}`,
          { templateColumns: t } = Et[e],
          n = this.isCartVisible
            ? "auto minmax(0, calc(var(--m-logo-width) + var(--space-between-menu) * 2)) 1fr"
            : Et[a].mTemplateColumns;
        return {
          "--navigation-grid-template-columns": this.isLogoVisible ? t : "1fr",
          "--m-navigation-grid-template-columns": this.isLogoVisible
            ? n
            : "1fr",
          "--logo-grid-row": `${Et[e].logoRow}/${this.navigationGridRowCount}`,
          "--m-logo-grid-row": `${Et[a].logoRow}/${this.navigationGridRowCount}`,
          "--logo-grid-column": Et[e].logoColumn,
          "--m-logo-grid-column": Et[a].logoColumn,
          "--logo-justify-self": this.getJustifyContent(this.logoPlacement),
          "--m-logo-justify-self": this.getJustifyContent(
            this.logoPlacementMobile
          ),
          "--logo-image-object-position": this.getLogoImageObjectPosition(
            this.logoPlacement
          ),
          "--m-logo-image-object-position": this.getLogoImageObjectPosition(
            this.logoPlacementMobile
          ),
          "--links-grid-row": `${Et[e].menuRow}/${this.navigationGridRowCount}`,
          "--m-links-grid-row": `${Et[a].menuRow}/${this.navigationGridRowCount}`,
          "--links-grid-column": this.isLogoVisible ? Et[e].menuColumn : "1/2",
          "--m-links-grid-column": this.isLogoVisible
            ? Et[a].menuColumn
            : "1/2",
          "--cart-grid-row": `${Et[e].cartRow}/${this.navigationGridRowCount}`,
          "--cart-grid-column": this.isLogoVisible ? Et[e].cartColumn : "2/2",
          "--logo-spacing": this.getLogoMarginPlacement(),
          "--m-logo-spacing": this.getLogoMarginPlacement(!0),
          "--navigation-text-align": this.navigationPlacement,
          "--m-navigation-text-align": this.navigationPlacementMobile,
          "--navigation-justify-self": this.getJustifyContent(
            this.navigationPlacement
          ),
          "--m-navigation-justify-self": this.getJustifyContent(
            this.navigationPlacementMobile
          ),
          "--mobile-background":
            "var(--background-color,  var(--background-image))",
          "--dropdown-background-color": this.backgroundColor,
          "--m-dropdown-background-color":
            this.background.current === "image"
              ? "transparent"
              : this.backgroundColor,
          "--dropdown-background-contrast-color": this.backgroundColorContrast,
          "--text-font-family": this.fontFamily,
          "--text-font-weight": this.fontWeight,
          "--nav-link-text-color":
            this.navLinkTextColor || "var(--nav-link-color)",
          "--nav-link-text-color-hover":
            this.navLinkTextColorHover || "var(--nav-link-color-hover)",
          ...(this.isSocialIconsLinksVisible && {
            "--social-icons-grid-row": `${Et[e].socialIconsRow}/${this.navigationGridRowCount}`,
            "--social-icons-grid-column": this.isLogoVisible
              ? Et[e].socialIconsColumn
              : "3/3",
            "--space-between-icons":
              this.socialIconsStyles["space-between-icons"],
            "--icon-color": this.socialIconsStyles["icon-color"],
            "--icon-size": this.socialIconsStyles["icon-size"],
            "--icon-color-hover": this.socialIconsStyles["icon-color-hover"],
          }),
        };
      },
    },
    methods: {
      getJustifyContent(e) {
        return ls[e] || ls.default;
      },
      getLogoImageObjectPosition(e) {
        return us[e] || us.default;
      },
      getLogoMarginPlacement(e = !1) {
        const a = e
            ? this.isLogoAndNavigationCenteredMobile
            : this.isLogoAndNavigationCentered,
          t = e ? this.logoPlacementMobile : this.logoPlacement;
        return e && this.isCartVisible
          ? zr.center
          : a
          ? zr["center-center"]
          : zr[t];
      },
    },
  }),
  jl = () => {
    St((e) => ({
      "25ad8d12": e.headerSocialIconsCssJustify,
      "5eb02582": e.mobileHeaderSocialIconsCssDisplay,
      d3116110: e.navigationPlacementMobile,
    }));
  },
  Wl = Ki.setup;
Ki.setup = Wl ? (e, a) => (jl(), Wl(e, a)) : jl;
const RI = { class: "block-header__nav" },
  $I = { key: 1, class: "block-header-item" };
function NI(e, a, t, n, r, i) {
  const o = Ce("BlockHeaderBackground"),
    s = Ce("BlockHeaderLogo"),
    l = Ce("ZyroHamburger"),
    d = Ce("BlockHeaderItem"),
    p = Ce("LanguageSwitcher"),
    u = Ce("GridSocialIcons"),
    g = Ce("BlockHeaderCart"),
    y = ze("qa");
  return (
    m(),
    v(
      "header",
      {
        ref: "headerRef",
        class: ee({
          [e.BLOCK_HEADER_CLASS]: !0,
          [e.BLOCK_HEADER_STICKY_CLASS]: e.isSticky,
          "block-header--with-shadow": e.isWithShadow,
        }),
      },
      [
        e.background
          ? (m(),
            G(
              o,
              {
                key: 0,
                type: e.background.current,
                "image-url": e.backgroundImageUrl,
                color: e.background.color,
                "overlay-opacity": Number(e.background["overlay-opacity"]),
                "is-transparent": e.isCurrentlyTransparent,
              },
              null,
              8,
              [
                "type",
                "image-url",
                "color",
                "overlay-opacity",
                "is-transparent",
              ]
            ))
          : M("", !0),
        E(
          "div",
          {
            class: ee([
              "block-header__content",
              { "block-header__content--open": e.isOpen },
            ]),
            style: Re(e.computedStyles),
          },
          [
            e.isLogoVisible
              ? (m(),
                G(
                  s,
                  {
                    key: 0,
                    class: ee([
                      "block-header__logo",
                      { "block-header__logo--m-with-cart": e.isCartVisible },
                    ]),
                    "logo-src": e.logoSrc,
                    "logo-svg": e.logoSvg,
                    href: e.logoHref,
                    "site-name": e.siteName,
                    "max-width": e.logoMaxWidth,
                    "max-width-mobile": e.logoMaxWidthMobile,
                    height: e.logoHeight,
                    "height-mobile": e.logoHeightMobile,
                    "is-optimized": e.isLogoOptimized,
                    "object-position": e.logoObjectPosition,
                    "object-position-mobile": e.logoObjectPositionMobile,
                    onClick: a[0] || (a[0] = (f) => e.$emit("logo-click")),
                  },
                  null,
                  8,
                  [
                    "class",
                    "logo-src",
                    "logo-svg",
                    "href",
                    "site-name",
                    "max-width",
                    "max-width-mobile",
                    "height",
                    "height-mobile",
                    "is-optimized",
                    "object-position",
                    "object-position-mobile",
                  ]
                ))
              : M("", !0),
            e.items.length || e.isLanguageSwitcherVisible
              ? ue(
                  (m(),
                  G(
                    l,
                    {
                      key: 1,
                      class: ee([
                        "block-header__burger",
                        {
                          "block-header__burger--m-with-cart": e.isCartVisible,
                        },
                      ]),
                      "is-open": e.isOpen,
                      onClick:
                        a[1] ||
                        (a[1] = Me(
                          (f) => e.$emit("toggle-visibility"),
                          ["stop"]
                        )),
                    },
                    null,
                    8,
                    ["class", "is-open"]
                  )),
                  [[y, "builder-siteheader-btn-hamburger"]]
                )
              : M("", !0),
            E("nav", RI, [
              ue(
                (m(),
                v(
                  "ul",
                  {
                    class: ee([
                      "block-header__links",
                      [
                        { "block-header__links--open": e.isOpen },
                        `block-header__links--align-${
                          e.navigationPlacementMobile || e.navigationPlacement
                        }`,
                      ],
                    ]),
                  },
                  [
                    (m(!0),
                    v(
                      ge,
                      null,
                      Se(
                        e.items,
                        (f) => (
                          m(),
                          G(
                            d,
                            {
                              key: f.id,
                              item: f,
                              "are-dropdowns-hidden": e.areDropdownsHidden,
                            },
                            null,
                            8,
                            ["item", "are-dropdowns-hidden"]
                          )
                        )
                      ),
                      128
                    )),
                    e.isLanguageSwitcherVisible
                      ? (m(),
                        G(
                          p,
                          {
                            key: 0,
                            class: ee({
                              "mouse-disabled": e.areDropdownsHidden,
                            }),
                            languages: e.languageSwitcherLanguages,
                            "current-locale": e.currentLocale,
                          },
                          null,
                          8,
                          ["class", "languages", "current-locale"]
                        ))
                      : M("", !0),
                    e.socialIconsLinks.length
                      ? (m(),
                        v("li", $I, [
                          Ee(
                            u,
                            {
                              class:
                                "block-header__social-icons block-header__social-icons--mobile",
                              links: e.socialIconsLinks,
                            },
                            null,
                            8,
                            ["links"]
                          ),
                        ]))
                      : M("", !0),
                  ],
                  2
                )),
                [[y, "builder-siteheader-emptyspace"]]
              ),
            ]),
            e.isCartVisible
              ? (m(),
                G(
                  g,
                  {
                    key: 2,
                    class: "block-header__cart",
                    "cart-text": e.cartText,
                    "cart-icon-size": e.cartIconSize,
                    "cart-url": e.cartUrl,
                    "items-in-cart": e.itemsInCart,
                    onCartClick: a[2] || (a[2] = (f) => e.$emit("cart-click")),
                  },
                  null,
                  8,
                  ["cart-text", "cart-icon-size", "cart-url", "items-in-cart"]
                ))
              : M("", !0),
            e.socialIconsLinks.length
              ? (m(),
                G(
                  u,
                  {
                    key: 3,
                    class: "block-header__social-icons",
                    links: e.socialIconsLinks,
                  },
                  null,
                  8,
                  ["links"]
                ))
              : M("", !0),
          ],
          6
        ),
      ],
      2
    )
  );
}
const xI = ie(Ki, [
    ["render", NI],
    ["__scopeId", "data-v-f4b5b62b"],
  ]),
  HI = (e) => {
    const t = e.current === "image" ? `url(${e[e.current]})` : e[e.current];
    return { [`--background-${e.current}`]: t };
  },
  UI = (e) => e && Object.values(e).some((a) => Xm.includes(a.type)),
  VI = (e) =>
    e && Object.values(e).some((a) => a?.type === "GridEcommerceButton"),
  jc = ({ blocks: e, elements: a }) => VI(a) || UI(e),
  FI = ({
    siteId: e,
    meta: a,
    blocks: t,
    nav: n,
    pages: r,
    elements: i,
    languageMetaTitle: o,
    languageSwitcherLanguages: s,
    currentLocale: l,
    currentPageId: d,
    isLogoOptimized: p,
    shoppingCartItems: u,
    ecwidCartItemCount: g,
    isOpen: y,
    getPagePathFromId: f,
    ecwidPages: _,
    isEcommerceWebsite: S,
  }) => {
    const { headerHeight: w, headerHeightMobile: b, defaultLocale: D } = a,
      {
        background: P,
        settings: O,
        fontWeight: N,
        fontFamily: x,
        navLinkTextColor: X,
        navLinkTextColorHover: W,
      } = t.header,
      { imageOrigin: T, imagePath: R } = P,
      {
        cartText: H,
        isCartVisible: q,
        isLanguageSwitcherHidden: B,
        isSticky: I,
        logoPlacement: U,
        navigationPlacement: V,
        showLogo: K,
        styles: k,
        logoImageOrigin: h,
        logoImagePath: F,
        logoSvg: j,
      } = O,
      ae = Object.keys(_).length > 0,
      le = jc({ blocks: t, elements: i }),
      Y = { ...ta(k), ...HI(P) },
      C = () => {
        if (!p) return ri(h, F, e);
        const gt = Number.parseInt(k["logo-width"], 10);
        return lt(h, F, e, { width: gt * 2, quality: 95 });
      },
      re = () => lt(T, R, e, { width: Oa }),
      ce = (gt) => {
        const {
          navItemId: Lt,
          linkType: ga,
          linkedPageId: Bt,
          isHidden: Ba,
          rel: na,
          href: bt,
          target: ka,
          name: Be,
          subItems: ot = [],
        } = gt;
        return {
          navItemId: Lt,
          hasDropdown: !!ot.length,
          isCurrent: d === Bt,
          subItems: ot.map(ce),
          target: ka,
          name: ga === cs ? r[Bt]?.name : Be,
          isHidden: Ba,
          rel: na,
          href: ga === cs ? f({ pageId: Bt }) : bt,
          locale: l,
        };
      },
      Q = n.filter(({ isHidden: gt }) => !gt).map(ce),
      fe = q && (ae || le),
      me = !!s.length && !B && l !== Yt,
      z = () => (S || le ? u.length : q ? g : 0),
      oe = () => {
        if (!_ || !Object.keys(_).length) return null;
        const [gt] = Object.keys(_);
        return `${f({ pageId: gt })}?store-page=cart`;
      },
      Pe = o || a.metaTitle,
      de = t.header.components.find((gt) => i[gt].type === "GridSocialIcons"),
      qe = i[de]?.links || [],
      ft = i[de]?.settings?.styles || {};
    return {
      background: P,
      backgroundColor: P.color,
      backgroundImageUrl: re(),
      backgroundColorContrast: k.contrastBackgroundColor,
      cartText: H,
      cartIconSize: k.cartIconSize,
      cartUrl: oe(),
      currentLocale: l,
      height: w,
      heightMobile: b,
      fontFamily: x,
      navLinkTextColor: X,
      navLinkTextColorHover: W,
      fontWeight: N,
      isTransparent: P.isTransparent,
      items: Q,
      isCartVisible: fe,
      itemsInCart: z(),
      isSticky: I,
      isLanguageSwitcherVisible: me,
      isLogoVisible: K,
      isLogoOptimized: p,
      isOpen: y,
      languageSwitcherLanguages: s,
      logoHeight: t.header?.desktop?.logoHeight,
      logoHref: l !== D && l !== Yt ? `/${l}` : "/",
      logoHeightMobile: t.header?.mobile?.logoHeight,
      logoMaxWidth: k["logo-width"],
      logoMaxWidthMobile: k["m-logo-width"],
      logoObjectPosition: k["logo-image-object-position"],
      logoObjectPositionMobile: k["m-logo-image-object-position"],
      logoPlacement: U,
      logoPlacementMobile: O["m-logoPlacement"] || U,
      logoSrc: C(),
      logoSvg: j,
      style: Y,
      siteName: Pe,
      socialIconsLinks: qe,
      socialIconsStyles: ft,
      navigationPlacement: V,
      navigationPlacementMobile: O["m-navigationPlacement"] || V,
    };
  };
function YI(e) {
  if (Array.isArray(e)) {
    for (var a = 0, t = Array(e.length); a < e.length; a++) t[a] = e[a];
    return t;
  } else return Array.from(e);
}
var Qi = !1;
if (typeof window < "u") {
  var Gl = {
    get passive() {
      Qi = !0;
    },
  };
  window.addEventListener("testPassive", null, Gl),
    window.removeEventListener("testPassive", null, Gl);
}
var Wc =
    typeof window < "u" &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      (window.navigator.platform === "MacIntel" &&
        window.navigator.maxTouchPoints > 1)),
  nn = [],
  Ir = !1,
  Zi = -1,
  Rn = void 0,
  $n = void 0,
  Gc = function (a) {
    return nn.some(function (t) {
      return !!(t.options.allowTouchMove && t.options.allowTouchMove(a));
    });
  },
  Er = function (a) {
    var t = a || window.event;
    return Gc(t.target) || t.touches.length > 1
      ? !0
      : (t.preventDefault && t.preventDefault(), !1);
  },
  qI = function (a) {
    if ($n === void 0) {
      var t = !!a && a.reserveScrollBarGap === !0,
        n = window.innerWidth - document.documentElement.clientWidth;
      t &&
        n > 0 &&
        (($n = document.body.style.paddingRight),
        (document.body.style.paddingRight = n + "px"));
    }
    Rn === void 0 &&
      ((Rn = document.body.style.overflow),
      (document.body.style.overflow = "hidden"));
  },
  jI = function () {
    $n !== void 0 && ((document.body.style.paddingRight = $n), ($n = void 0)),
      Rn !== void 0 && ((document.body.style.overflow = Rn), (Rn = void 0));
  },
  WI = function (a) {
    return a ? a.scrollHeight - a.scrollTop <= a.clientHeight : !1;
  },
  GI = function (a, t) {
    var n = a.targetTouches[0].clientY - Zi;
    return Gc(a.target)
      ? !1
      : (t && t.scrollTop === 0 && n > 0) || (WI(t) && n < 0)
      ? Er(a)
      : (a.stopPropagation(), !0);
  },
  zI = function (a, t) {
    if (!a) {
      console.error(
        "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
      );
      return;
    }
    if (
      !nn.some(function (r) {
        return r.targetElement === a;
      })
    ) {
      var n = { targetElement: a, options: t || {} };
      (nn = [].concat(YI(nn), [n])),
        Wc
          ? ((a.ontouchstart = function (r) {
              r.targetTouches.length === 1 && (Zi = r.targetTouches[0].clientY);
            }),
            (a.ontouchmove = function (r) {
              r.targetTouches.length === 1 && GI(r, a);
            }),
            Ir ||
              (document.addEventListener(
                "touchmove",
                Er,
                Qi ? { passive: !1 } : void 0
              ),
              (Ir = !0)))
          : qI(t);
    }
  },
  KI = function () {
    Wc
      ? (nn.forEach(function (a) {
          (a.targetElement.ontouchstart = null),
            (a.targetElement.ontouchmove = null);
        }),
        Ir &&
          (document.removeEventListener(
            "touchmove",
            Er,
            Qi ? { passive: !1 } : void 0
          ),
          (Ir = !1)),
        (Zi = -1))
      : jI(),
      (nn = []);
  };
const QI = se({
    name: "Lightbox",
    setup() {
      const {
          lightboxImages: e,
          currentLightboxImageIndex: a,
          currentLightboxImage: t,
          closeLightbox: n,
          isLightboxOpen: r,
          isFirstImage: i,
          isLastImage: o,
          isImageGalleryMode: s,
          onLightboxClickOutside: l,
          handleLightboxNav: d,
          goToNextImage: p,
          goToPreviousImage: u,
        } = sn(),
        g = A(null),
        { enableMoveEvents: y } = zu({
          move: { drag: !0, swipe: !0 },
          onMoveLeft: p,
          onMoveRight: u,
        });
      return (
        Oe(() => {
          $r(g, (f) => {
            f.target.matches("[data-lightbox-button],[data-lightbox-nav]") ||
              n();
          }),
            y(),
            window.document.addEventListener("keydown", d);
        }),
        xt(() => {
          n(), y(!1), document.removeEventListener("keydown", d);
        }),
        {
          lightboxImages: e,
          currentLightboxImageIndex: a,
          currentLightboxImage: t,
          closeLightbox: n,
          isImageGalleryMode: s,
          isFirstImage: i,
          isLastImage: o,
          isLightboxOpen: r,
          onLightboxClickOutside: l,
          goToNextImage: p,
          goToPreviousImage: u,
          lightboxRef: g,
        }
      );
    },
    async mounted() {
      await this.$nextTick(), zI(this.$refs.lightboxRef);
    },
    beforeUnmount() {
      KI();
    },
  }),
  ZI = { key: 0, class: "lightbox", role: "dialog", "aria-modal": "true" },
  XI = { class: "lightbox__container" },
  JI = E(
    "button",
    {
      class: "lightbox__button lightbox__button--nav lightbox__button--prev",
      "data-lightbox-button": "",
    },
    null,
    -1
  ),
  eE = [JI],
  tE = ["src", "alt"],
  aE = E(
    "button",
    {
      "data-lightbox-button": "",
      class: "lightbox__button lightbox__button--nav lightbox__button--next",
    },
    null,
    -1
  ),
  nE = [aE];
function rE(e, a, t, n, r, i) {
  return (
    m(),
    G(
      At,
      { name: "fade", appear: "" },
      {
        default: _e(() => [
          e.isLightboxOpen
            ? (m(),
              v("div", ZI, [
                E("button", {
                  class: "lightbox__button lightbox__button--close",
                  title: "close-ligthbox-button",
                  "data-lightbox-button": "",
                  onClick:
                    a[0] ||
                    (a[0] = (...o) => e.closeLightbox && e.closeLightbox(...o)),
                }),
                E("div", XI, [
                  E(
                    "div",
                    {
                      class: ee([
                        "lightbox__nav",
                        {
                          "lightbox__nav--multiple": e.isImageGalleryMode,
                          "lightbox__nav--single": !e.isImageGalleryMode,
                        },
                      ]),
                      "data-lightbox-nav": "",
                      onClick:
                        a[1] ||
                        (a[1] = (...o) =>
                          e.goToPreviousImage && e.goToPreviousImage(...o)),
                    },
                    eE,
                    2
                  ),
                  Ee(
                    At,
                    { name: "fade", mode: "out-in" },
                    {
                      default: _e(() => [
                        (m(),
                        v(
                          "img",
                          {
                            key: `${e.currentLightboxImage.src}${e.currentLightboxImageIndex}`,
                            ref: "lightboxRef",
                            class: ee([
                              "lightbox__image",
                              {
                                "lightbox__image--multiple":
                                  e.isImageGalleryMode,
                                "lightbox__image--single":
                                  !e.isImageGalleryMode,
                              },
                            ]),
                            src: e.currentLightboxImage.src,
                            alt: e.currentLightboxImage.alt,
                          },
                          null,
                          10,
                          tE
                        )),
                      ]),
                      _: 1,
                    }
                  ),
                  E(
                    "div",
                    {
                      class: ee([
                        "lightbox__nav",
                        {
                          "lightbox__nav--multiple": e.isImageGalleryMode,
                          "lightbox__nav--single": !e.isImageGalleryMode,
                        },
                      ]),
                      "data-lightbox-nav": "",
                      onClick:
                        a[2] ||
                        (a[2] = (...o) =>
                          e.goToNextImage && e.goToNextImage(...o)),
                    },
                    nE,
                    2
                  ),
                ]),
              ]))
            : M("", !0),
        ]),
        _: 1,
      }
    )
  );
}
const oE = ie(QI, [["render", rE]]),
  iE = se({
    __name: "Page",
    props: {
      pageData: { type: Object, required: !0 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: a }) {
      a();
      const t = e,
        {
          pages: n,
          blocks: r,
          elements: i,
          nav: o,
          meta: s,
          metaTitle: l,
          ecommerceShoppingCart: d,
          cookieBannerDisclaimer: p,
          cookieBannerAcceptText: u,
          cookieBannerDeclineText: g,
          currentLocale: y,
          languageKeys: f,
          ecwidPages: _,
          languageSwitcherLanguages: S,
          siteId: w,
          homePageId: b,
          styles: D,
          isNavHidden: P,
          currentPageId: O,
          currentPageData: N,
          getPagePathFromId: x,
          setPageData: X,
        } = rt(),
        {
          isStoreTypeZyro: W,
          shoppingCartItems: T,
          setShoppingCartOpen: R,
        } = Wt(),
        { openEcwidHomepage: H, openCart: q, ecwidCartItemCount: B } = lu(),
        { isLightboxOpen: I } = sn(),
        U = $d(),
        { shouldMountAnimationsInPreview: V } = Yn(),
        K = A(!1),
        k = A(null),
        { width: h } = Ov(k),
        F = c(() => N.value.type),
        j = c(() => ta(D.value)),
        ae = c(() => !P.value),
        le = c(() => O.value === b.value),
        Y = c(() => n.value?.[b.value]?.name ?? ""),
        C = c(() => {
          if (!N.value?.meta?.password || t.isInPreviewMode) return !0;
          const { isPageOpen: Be } = ec({
            pagePassword: N.value?.meta?.password ?? "",
            locale: y.value,
            pageId: O.value,
          });
          return Be.value;
        }),
        re = c(() => {
          if (!N.value || N.value.footerSlotIsHidden) return [];
          const Be = Object.keys(r.value).find(
            (ot) => r.value[ot].slot === "footer"
          );
          return Be ? [Be] : [];
        }),
        ce = c(() => (N.value ? [...N.value.blocks, ...re.value] : [])),
        Q = c(() =>
          FI({
            siteId: w.value,
            meta: s.value,
            blocks: r.value,
            nav: o.value,
            pages: n.value,
            elements: i.value,
            languageMetaTitle: l.value,
            currentLocale: y.value,
            currentPageId: O.value,
            languageSwitcherLanguages: S.value,
            isLogoOptimized: !0,
            shoppingCartItems: T.value,
            ecwidCartItemCount: B.value,
            getPagePathFromId: ({ pageId: Be }) => x({ pageId: Be }),
            isOpen: K.value,
            ecwidPages: _.value,
          })
        ),
        fe = c(() => Q.value.height),
        me = c(() => Q.value.heightMobile),
        z = c(() => ce.value.map((Be) => r.value[Be])),
        oe = c(() => jc({ blocks: r.value, elements: i.value })),
        Pe = c(() => s.value.defaultLocale ?? Yt),
        de = c(() => (W.value ? d.value?.translations ?? {} : {})),
        qe = c(() => (W.value ? d.value?.lang ?? "en" : null)),
        ft = c(() =>
          oe.value
            ? z.value.filter((Be) =>
                ["BlockEcommerceProduct", "BlockEcommerceProductList"].includes(
                  Be.type
                )
              )
            : []
        ),
        gt = c(() =>
          oe.value
            ? Object.keys(i.value)
                ?.filter((ot) => i.value[ot].type === "GridEcommerceButton")
                .filter((ot) => z.value.some(($) => $.components?.includes(ot)))
                .map((ot) => i.value[ot])
            : []
        ),
        Lt = c(() => {
          const { isTransparent: Be } = r.value.header.background ?? {};
          return {
            "--header-height": Be && ae.value ? `${fe.value}px` : null,
            "--header-height-mobile": Be && ae.value ? `${me.value}px` : null,
          };
        }),
        ga = c(() => {
          const [Be] = N.value?.blocks ?? [];
          if (r.value?.[Be]?.background?.current === "image")
            return { type: "block-background", id: Be };
          if (r.value?.[Be]?.type === "BlockBlogList")
            return { type: "block-blog-list", id: Be };
          if (r.value?.[Be]?.type === "BlockEcommerceProduct")
            return { type: "block-ecommerce-product", id: Be };
          if (r.value?.[Be]?.type === "BlockEcommerceProductList")
            return { type: "block-ecommerce-product-list", id: Be };
          const $ = ce.value
            .filter((te) => r.value[te]?.components?.length > 0)
            .flatMap((te) =>
              r.value[te].components.map((we) => ({
                blockId: te,
                elementId: we,
              }))
            )
            .filter(({ elementId: te }) => i.value[te]?.type === "GridImage")
            .map(({ blockId: te, elementId: we }) => {
              const Ae = i.value[we],
                Ze = Ae.mobile ?? Ae.desktop,
                { width: It, height: zt } =
                  Ze ?? Yd(r.value[te], Ae.settings.styles.position);
              return { elementId: we, imageRatio: zt / It };
            })[0];
          return $ ? { type: "grid-image", id: $?.elementId } : {};
        }),
        Bt = (Be) => {
          if (!Be) {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            return;
          }
          Po(Be);
        },
        Ba = () => {
          oe.value && R(!0);
        },
        na = (Be) => {
          const { target: ot, href: $ } = Be,
            we =
              ot === "_blank" || Fa() || t.isInPreviewMode ? "_blank" : "_self";
          window.open($, we);
        },
        bt = async (Be) => {
          if (!Be.target) return;
          const ot = Be.target.closest("a");
          if (!ot) return;
          const {
            href: $,
            pathname: te,
            origin: we,
            hash: Ae,
            target: Ze,
            search: It,
          } = ot;
          if (!$) return;
          if ((Be.preventDefault(), window.location.origin !== we)) {
            na(ot);
            return;
          }
          const { slug: pe } = Wd({
              path: te,
              languageKeys: f.value,
              defaultLocale: Pe.value,
            }),
            Le = pe
              ? Object.keys(n.value).find((Kc) => n.value[Kc].slug === pe)
              : b.value,
            Ie = window.location.pathname === te,
            $t = new URLSearchParams(It).get("store-page"),
            bn = Object.keys(_.value).includes(Le),
            Xi = !!$t || bn,
            Yr = Ze === "_blank",
            qr = $.replace(we, ""),
            zc = `${window.location.pathname}${window.location.search}${window.location.hash}`;
          if (
            (Ie && !Yr && Bt(Ae),
            Yr && !t.isInPreviewMode && !Fa()
              ? window.open($, Ze)
              : ((Yr && t.isInPreviewMode) || zc !== qr) &&
                (Xi
                  ? window.location.assign($)
                  : t.isInPreviewMode
                  ? U.push(qr)
                  : window.location.assign(qr),
                Ae && Bt(Ae),
                (K.value = !1)),
            !!Xi)
          ) {
            if (!$t) {
              if (!window.Ecwid) return;
              H();
              return;
            }
            $t === "cart" && q();
          }
        };
      je(
        () => t.pageData,
        (Be) => {
          X(Be);
        },
        { immediate: !0 }
      ),
        je(
          () => t.pageData,
          async () => {
            t.isInPreviewMode && (V.value = !0);
          }
        ),
        Oe(() => {
          Bt(window.location.hash);
        });
      const ka = {
        props: t,
        pages: n,
        blocks: r,
        elements: i,
        nav: o,
        meta: s,
        metaTitle: l,
        ecommerceShoppingCart: d,
        cookieBannerDisclaimer: p,
        cookieBannerAcceptText: u,
        cookieBannerDeclineText: g,
        currentLocale: y,
        languageKeys: f,
        ecwidPages: _,
        languageSwitcherLanguages: S,
        siteId: w,
        homePageId: b,
        styles: D,
        isNavHidden: P,
        currentPageId: O,
        currentPage: N,
        getPagePathFromId: x,
        setPageData: X,
        isStoreTypeZyro: W,
        shoppingCartItems: T,
        setShoppingCartOpen: R,
        openEcwidHomepage: H,
        openCart: q,
        ecwidCartItemCount: B,
        isLightboxOpen: I,
        router: U,
        shouldMountAnimationsInPreview: V,
        isNavOpen: K,
        blockListRef: k,
        screenWidth: h,
        currentPageType: F,
        pageCSSVars: j,
        isHeaderVisible: ae,
        isCurrentPageHomepage: le,
        homepageName: Y,
        shouldRenderPage: C,
        pageBlocksSlotFooter: re,
        currentPageBlocks: ce,
        headerProps: Q,
        headerHeight: fe,
        headerHeightMobile: me,
        currentPageBlockData: z,
        isLocaleWithEcommerceItems: oe,
        defaultLocale: Pe,
        ecommerceTranslations: de,
        language: qe,
        currentPageEcommerceBlocks: ft,
        currentPageEcommerceComponents: gt,
        computedHeaderHeightStyles: Lt,
        lcp: ga,
        scrollToHash: Bt,
        handleCartClick: Ba,
        redirectToThirdPartyLink: na,
        handleGlobalClick: bt,
        StickyTrigger: Vd,
        CookieBanner: dm,
        BlockUser: l_,
        PasswordPage: P_,
        EcommerceShoppingCartProviderUser: mw,
        EcommerceModalRoot: OP,
        BlockHeader: xI,
        Lightbox: oE,
      };
      return (
        Object.defineProperty(ka, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        ka
      );
    },
  }),
  sE = { ref: "blockListRef", class: "blocks" };
function lE(e, a, t, n, r, i) {
  return (
    m(),
    v(
      ge,
      null,
      [
        n.shouldRenderPage
          ? (m(),
            v(
              "main",
              {
                key: 0,
                style: Re(n.pageCSSVars),
                class: "page",
                onClick: n.handleGlobalClick,
              },
              [
                n.blocks.header.settings.isSticky
                  ? (m(), G(n.StickyTrigger, { key: 0 }))
                  : M("", !0),
                n.isHeaderVisible
                  ? (m(),
                    G(
                      n.BlockHeader,
                      Qe({ key: 1 }, n.headerProps, {
                        onToggleVisibility:
                          a[0] || (a[0] = (o) => (n.isNavOpen = !n.isNavOpen)),
                        onCartClick: n.handleCartClick,
                      }),
                      null,
                      16
                    ))
                  : M("", !0),
                E(
                  "div",
                  sE,
                  [
                    (m(!0),
                    v(
                      ge,
                      null,
                      Se(
                        n.currentPageBlocks,
                        (o, s) => (
                          m(),
                          G(
                            n.BlockUser,
                            {
                              id: n.blocks[o].htmlId || o,
                              key: o,
                              data: n.blocks[o],
                              blocks: n.blocks,
                              lcp: n.lcp,
                              "page-id": n.currentPageId,
                              "ecommerce-translations": n.ecommerceTranslations,
                              "current-page-type": n.currentPageType,
                              components: n.elements,
                              "screen-width": n.screenWidth,
                              style: Re(
                                s === 0 ? n.computedHeaderHeightStyles : void 0
                              ),
                              "current-locale": n.currentLocale,
                              "is-cart-visible": n.headerProps.isCartVisible,
                              "is-in-preview-mode": n.props.isInPreviewMode,
                            },
                            null,
                            8,
                            [
                              "id",
                              "data",
                              "blocks",
                              "lcp",
                              "page-id",
                              "ecommerce-translations",
                              "current-page-type",
                              "components",
                              "screen-width",
                              "style",
                              "current-locale",
                              "is-cart-visible",
                              "is-in-preview-mode",
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ],
                  512
                ),
                n.meta.isCookieBarEnabled
                  ? (m(),
                    G(
                      n.CookieBanner,
                      {
                        key: 2,
                        disclaimer: n.cookieBannerDisclaimer || "",
                        "accept-text": n.cookieBannerAcceptText,
                        "decline-text": n.cookieBannerDeclineText,
                        "site-meta": n.meta,
                      },
                      null,
                      8,
                      ["disclaimer", "accept-text", "decline-text", "site-meta"]
                    ))
                  : M("", !0),
                n.isLocaleWithEcommerceItems
                  ? (m(),
                    G(
                      n.EcommerceShoppingCartProviderUser,
                      {
                        key: 3,
                        "ecommerce-translations": n.ecommerceTranslations,
                        language: n.language,
                        "is-header-sticky": n.headerProps.isSticky,
                        "is-nav-hidden": !n.isHeaderVisible,
                        "current-page-ecommerce-blocks":
                          n.currentPageEcommerceBlocks,
                        "current-page-ecommerce-components":
                          n.currentPageEcommerceComponents,
                        "is-in-preview-mode": n.props.isInPreviewMode,
                      },
                      null,
                      8,
                      [
                        "ecommerce-translations",
                        "language",
                        "is-header-sticky",
                        "is-nav-hidden",
                        "current-page-ecommerce-blocks",
                        "current-page-ecommerce-components",
                        "is-in-preview-mode",
                      ]
                    ))
                  : M("", !0),
                Ee(
                  n.EcommerceModalRoot,
                  {
                    "ecommerce-translations": n.ecommerceTranslations,
                    language: n.language,
                    "current-locale": n.currentLocale,
                    "is-cart-visible": n.headerProps.isCartVisible,
                    "is-in-preview-mode": n.props.isInPreviewMode,
                  },
                  null,
                  8,
                  [
                    "ecommerce-translations",
                    "language",
                    "current-locale",
                    "is-cart-visible",
                    "is-in-preview-mode",
                  ]
                ),
              ],
              4
            ))
          : (m(),
            G(
              n.PasswordPage,
              {
                key: 1,
                "page-id": n.currentPageId,
                locale: n.currentLocale,
                "default-locale": n.defaultLocale,
                "in-preview-mode": t.isInPreviewMode,
                "current-page-data": n.currentPage,
                "homepage-name": n.homepageName,
                "is-current-page-homepage": n.isCurrentPageHomepage,
              },
              null,
              8,
              [
                "page-id",
                "locale",
                "default-locale",
                "in-preview-mode",
                "current-page-data",
                "homepage-name",
                "is-current-page-homepage",
              ]
            )),
        n.isLightboxOpen ? (m(), G(n.Lightbox, { key: 2 })) : M("", !0),
      ],
      64
    )
  );
}
const gE = ie(iE, [["render", lE]]);
export { gE as default };
