(() => {
  "use strict";
  var e = {},
    a = {};
  function c(f) {
    var d = a[f];
    if (void 0 !== d) return d.exports;
    var t = (a[f] = { id: f, loaded: !1, exports: {} }),
      b = !0;
    try {
      e[f].call(t.exports, t, t.exports, c), (b = !1);
    } finally {
      b && delete a[f];
    }
    return (t.loaded = !0), t.exports;
  }
  (c.m = e),
    (() => {
      var e = [];
      c.O = (a, f, d, t) => {
        if (f) {
          t = t || 0;
          for (var b = e.length; b > 0 && e[b - 1][2] > t; b--) e[b] = e[b - 1];
          e[b] = [f, d, t];
          return;
        }
        for (var r = 1 / 0, b = 0; b < e.length; b++) {
          for (var [f, d, t] = e[b], o = !0, n = 0; n < f.length; n++)
            (!1 & t || r >= t) && Object.keys(c.O).every((e) => c.O[e](f[n]))
              ? f.splice(n--, 1)
              : ((o = !1), t < r && (r = t));
          if (o) {
            e.splice(b--, 1);
            var i = d();
            void 0 !== i && (a = i);
          }
        }
        return a;
      };
    })(),
    (c.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return c.d(a, { a: a }), a;
    }),
    (() => {
      var e,
        a = Object.getPrototypeOf
          ? (e) => Object.getPrototypeOf(e)
          : (e) => e.__proto__;
      c.t = function (f, d) {
        if (
          (1 & d && (f = this(f)),
          8 & d ||
            ("object" == typeof f &&
              f &&
              ((4 & d && f.__esModule) ||
                (16 & d && "function" == typeof f.then))))
        )
          return f;
        var t = Object.create(null);
        c.r(t);
        var b = {};
        e = e || [null, a({}), a([]), a(a)];
        for (
          var r = 2 & d && f;
          "object" == typeof r && !~e.indexOf(r);
          r = a(r)
        )
          Object.getOwnPropertyNames(r).forEach((e) => (b[e] = () => f[e]));
        return (b.default = () => f), c.d(t, b), t;
      };
    })(),
    (c.d = (e, a) => {
      for (var f in a)
        c.o(a, f) &&
          !c.o(e, f) &&
          Object.defineProperty(e, f, { enumerable: !0, get: a[f] });
    }),
    (c.f = {}),
    (c.e = (e, a) =>
      Promise.all(Object.keys(c.f).reduce((f, d) => (c.f[d](e, f, a), f), []))),
    (c.u = (e) =>
      514 === e
        ? "static/chunks/514-d3ecaa968a53cff4.js"
        : "static/chunks/" +
          ({
            61: "AI",
            1808: "Wallpaper (Stable Diffusion)",
            2167: "Clock",
            2336: "Wallpaper (Coastal Landscape)",
            2756: "5942ba3a",
            2962: "Resize Image Worker",
            3182: "Wallpaper (Vanta Waves)",
            4123: "20853ed3",
            4311: "fbd3c617",
            5296: "libheif",
            5911: "Wallpaper (Hexells)",
            7114: "4b5fa52f",
            8535: "Stable Diffusion",
            9410: "2dfff1b2",
          }[e] || e) +
          "." +
          {
            57: "f6e61451d712b805",
            61: "5e3202c6e287a65a",
            111: "5fa2ca311310fb30",
            219: "010f5158c5066315",
            250: "0f975a2bbb5783e2",
            386: "11815f9af4c950c3",
            667: "73a6acc71b0f34bd",
            693: "06b9efead7e5db30",
            816: "b6e7b0c4a74f11e4",
            818: "f6ead818f490307e",
            876: "829d7636d0a9b517",
            1032: "58681a0ca658455a",
            1071: "e55331dbb69d578a",
            1081: "b0630730cae33454",
            1126: "c0c54eae30aab23e",
            1324: "a44c39d354594be1",
            1342: "5a5a61d646e4ef05",
            1412: "63d6f842526ac577",
            1428: "2a3e548ac14056f6",
            1808: "ca496c4096af2dca",
            1894: "2ae2a6e0771394f7",
            2033: "4034a48f281a6ed1",
            2083: "49917a8d7ac59281",
            2114: "6e997a43e45c5a1f",
            2167: "037673a6a7898ad9",
            2179: "d5c8df97d3d9338d",
            2227: "375b15769c2e84f3",
            2336: "5979f1cdd4aee0dc",
            2482: "cbf964d564bf2a62",
            2729: "72274e6bb966e664",
            2756: "6ed3514b54db85a6",
            2962: "5686429b281dc561",
            3021: "8b19d2589d789b0f",
            3040: "223a2f25cc721226",
            3044: "890b0d381afe87b8",
            3047: "afafe9b3d18685c0",
            3110: "ab501929614941c8",
            3114: "88295a66999f8fa9",
            3127: "f85401ecc9c3c880",
            3148: "07721391ee24972e",
            3182: "e4e67a6401933f72",
            3185: "db05d98f07ef3b50",
            3285: "c7c4dbc68043e230",
            3389: "61194cf927ff888f",
            3507: "8e79a55164a3e576",
            3576: "67bf08dba074a051",
            3759: "29f0a2733cce63af",
            3877: "427413f9fb65b7dd",
            4023: "986f525df43302cd",
            4035: "5bc38313e29512d4",
            4100: "a03106eecd9fa3db",
            4123: "1a0ca189da083016",
            4147: "c7fd6ec5fd394ffb",
            4231: "a5d5a9af52dfa9d7",
            4252: "3398f601e3070091",
            4311: "74a2e249a0f4db80",
            4381: "41f53a81efa6b4a7",
            4451: "e52c540000a432e9",
            4598: "18427b721ed2e14b",
            4599: "e849456c385b0bc5",
            4629: "bc0c1436f9abefc5",
            4788: "f63ad366df007cf3",
            4845: "8f93769c99236e2d",
            5162: "5c0ebe8b60b52444",
            5296: "ed9842a0d5388958",
            5307: "d9ac847ec80061f5",
            5313: "31307746bf07605e",
            5473: "2d3ed31b0bb1ee03",
            5506: "10c9ac1cd6151a0e",
            5747: "5c5b0ffd30a314fd",
            5858: "41b8e05e4f0d9f7c",
            5911: "e834e9864585d1b7",
            6094: "40b86a8273a23ea7",
            6181: "eae7d0a31e1a514e",
            6279: "5ddf20de5aa951d8",
            6442: "bf27e21c9de32535",
            6447: "b0627844783b46f1",
            6515: "aa76bdea7cda477d",
            6518: "55ff94931194130d",
            6542: "a83e9dc79f323ff5",
            6620: "d33d56e8f97539d0",
            6850: "ca4a550ec62fd4f2",
            6965: "5252891f358883f5",
            6991: "e911e1915ca2a07b",
            7051: "1061880179a9780f",
            7089: "60113ea5d2dc6944",
            7106: "5c7547e395ccf8de",
            7109: "0225aa1161b4f794",
            7114: "7cf9cb536b2dffaa",
            7192: "521919358951c986",
            7256: "0544bdf8ae53ee78",
            7320: "433455f396c728be",
            7341: "d36657698051ce88",
            7372: "c6ecdf9c02a08d24",
            7487: "64e2762919d487d3",
            7498: "33625a1e90f5267f",
            7543: "46fc593d55115fbd",
            7606: "438bdd50f6fac38e",
            7662: "d9db91c934c18f99",
            7953: "6a1614e897c8ba33",
            7970: "56701516aa41979b",
            8022: "a18155daf63504ae",
            8154: "fae6886ecb674637",
            8528: "26d32c2176476317",
            8535: "79a47be90b46eb78",
            8751: "27b39dbf0b7dc6f3",
            8757: "20b31ddc62eea98e",
            8797: "812c48b578a5e035",
            8807: "1ad214c7c21002d6",
            8819: "3554ba05385819da",
            8835: "4e230d4a11280e63",
            8953: "9e1232632a7611c8",
            8992: "35b3dc828e33b137",
            9003: "19979e0dc75d48c6",
            9146: "ab2485c44b2ba168",
            9186: "7662998f6cb011fc",
            9253: "176a7aa45277809e",
            9410: "1171cd15c9209c8a",
            9438: "d4ae3adc84232f6a",
            9490: "8673f77aed324573",
            9523: "5677b84dd4da174e",
            9742: "d43a2a6d9faca159",
            9787: "3316dd2854022ab0",
            9798: "83aa1fad829373a0",
            9851: "c1a27f9d775f5ba5",
            9868: "e990f4e16cc611b3",
            9948: "9215dc31a456cca7",
            9965: "6bbb346c31beb71f",
          }[e] +
          ".js"),
    (c.miniCssF = (e) => {}),
    (c.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (c.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a)),
    (() => {
      var e = {},
        a = "_N_E:";
      c.l = (f, d, t, b, r) => {
        if (e[f]) return void e[f].push(d);
        if (void 0 !== t)
          for (
            var o, n, i = document.getElementsByTagName("script"), l = 0;
            l < i.length;
            l++
          ) {
            var u = i[l];
            if (
              u.getAttribute("src") == f ||
              u.getAttribute("data-webpack") == a + t
            ) {
              o = u;
              break;
            }
          }
        o ||
          ((n = !0),
          ((o = document.createElement("script")).charset = "utf-8"),
          (o.timeout = 120),
          c.nc && o.setAttribute("nonce", c.nc),
          o.setAttribute("data-webpack", a + t),
          r && o.setAttribute("fetchpriority", r),
          (o.src = c.tu(f))),
          (e[f] = [d]);
        var s = (a, c) => {
            (o.onerror = o.onload = null), clearTimeout(p);
            var d = e[f];
            if (
              (delete e[f],
              o.parentNode && o.parentNode.removeChild(o),
              d && d.forEach((e) => e(c)),
              a)
            )
              return a(c);
          },
          p = setTimeout(
            s.bind(null, void 0, { type: "timeout", target: o }),
            12e4
          );
        (o.onerror = s.bind(null, o.onerror)),
          (o.onload = s.bind(null, o.onload)),
          n && document.head.appendChild(o);
      };
    })(),
    (c.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (c.U = function (e) {
      var a = new URL(e, "x:/"),
        c = {};
      for (var f in a) c[f] = a[f];
      for (var f in ((c.href = e),
      (c.pathname = e.replace(/[?#].*/, "")),
      (c.origin = c.protocol = ""),
      (c.toString = c.toJSON = () => e),
      c))
        Object.defineProperty(this, f, {
          enumerable: !0,
          configurable: !0,
          value: c[f],
        });
    }),
    (c.U.prototype = URL.prototype),
    (c.j = 8068),
    (() => {
      var e;
      c.tt = () => (
        void 0 === e &&
          ((e = { createScriptURL: (e) => e }),
          "undefined" != typeof trustedTypes &&
            trustedTypes.createPolicy &&
            (e = trustedTypes.createPolicy("nextjs#bundler", e))),
        e
      );
    })(),
    (c.tu = (e) => c.tt().createScriptURL(e)),
    (c.p = "/_next/"),
    (() => {
      c.b = document.baseURI || self.location.href;
      var e = { 8068: 0 };
      (c.f.j = (a, f, d) => {
        var t = c.o(e, a) ? e[a] : void 0;
        if (0 !== t)
          if (t) f.push(t[2]);
          else if (8068 != a) {
            var b = new Promise((c, f) => (t = e[a] = [c, f]));
            f.push((t[2] = b));
            var r = c.p + c.u(a),
              o = Error();
            c.l(
              r,
              (f) => {
                if (c.o(e, a) && (0 !== (t = e[a]) && (e[a] = void 0), t)) {
                  var d = f && ("load" === f.type ? "missing" : f.type),
                    b = f && f.target && f.target.src;
                  (o.message =
                    "Loading chunk " + a + " failed.\n(" + d + ": " + b + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = d),
                    (o.request = b),
                    t[1](o);
                }
              },
              "chunk-" + a,
              a,
              d
            );
          } else e[a] = 0;
      }),
        (c.O.j = (a) => 0 === e[a]);
      var a = (a, f) => {
          var d,
            t,
            [b, r, o] = f,
            n = 0;
          if (b.some((a) => 0 !== e[a])) {
            for (d in r) c.o(r, d) && (c.m[d] = r[d]);
            if (o) var i = o(c);
          }
          for (a && a(f); n < b.length; n++)
            (t = b[n]), c.o(e, t) && e[t] && e[t][0](), (e[t] = 0);
          return c.O(i);
        },
        f = (self.webpackChunk_N_E = self.webpackChunk_N_E || []);
      f.forEach(a.bind(null, 0)), (f.push = a.bind(null, f.push.bind(f)));
    })(),
    (c.nc = void 0);
})();
