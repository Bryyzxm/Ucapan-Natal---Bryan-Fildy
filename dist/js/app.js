function SnowStorm() {
  function a(a, b) {
    return isNaN(b) && (b = 0), Math.random() * a + b;
  }
  function b(b) {
    return 1 == parseInt(a(2), 10) ? -1 * b : b;
  }
  function c() {
    f.start(!0);
  }
  (this.flakesMax = 128),
    (this.flakesMaxActive = 64),
    (this.animationInterval = 33),
    (this.flakeBottom = null),
    (this.targetElement = null),
    (this.followMouse = !0),
    (this.snowColor = '#fff'),
    (this.snowCharacter = '&bull;'),
    (this.snowStick = !0),
    (this.useMeltEffect = !0),
    (this.useTwinkleEffect = !1),
    (this.usePositionFixed = !1),
    (this.flakeLeftOffset = 0),
    (this.flakeRightOffset = 0),
    (this.flakeWidth = 8),
    (this.flakeHeight = 8),
    (this.vMaxX = 5),
    (this.vMaxY = 4),
    (this.zIndex = 0);
  var d =
      'undefined' == typeof window.attachEvent
        ? function (a, b, c) {
            return a.addEventListener(b, c, !1);
          }
        : function (a, b, c) {
            return a.attachEvent('on' + b, c);
          },
    e =
      'undefined' == typeof window.attachEvent
        ? function (a, b, c) {
            return a.removeEventListener(b, c, !1);
          }
        : function (a, b, c) {
            return a.detachEvent('on' + b, c);
          },
    f = this,
    g = this;
  (this.timers = []), (this.flakes = []), (this.disabled = !1), (this.active = !1);
  var h = navigator.userAgent.match(/msie/i),
    i = navigator.userAgent.match(/msie 6/i),
    j = h && (i || navigator.userAgent.match(/msie 5/i)),
    k = navigator.appVersion.match(/windows 98/i),
    l = navigator.userAgent.match(/iphone/i),
    m = h && 'BackCompat' == document.compatMode,
    n = m || i || l ? !0 : !1,
    o = null,
    p = null,
    q = null,
    r = null,
    s = null,
    t = null,
    u = 1,
    v = 2,
    w = 6,
    x = !1,
    y = (function () {
      try {
        document.createElement('div').style.opacity = '0.5';
      } catch (a) {
        return !1;
      }
      return !0;
    })(),
    z = document.createDocumentFragment();
  null === f.flakeLeftOffset && (f.flakeLeftOffset = 0), null === f.flakeRightOffset && (f.flakeRightOffset = 0), (this.meltFrameCount = 20), (this.meltFrames = []);
  for (var A = 0; A < this.meltFrameCount; A++) this.meltFrames.push(1 - A / this.meltFrameCount);
  (this.randomizeWind = function () {
    if (((s = b(a(f.vMaxX, 0.2))), (t = a(f.vMaxY, 0.2)), this.flakes)) for (var c = 0; c < this.flakes.length; c++) this.flakes[c].active && this.flakes[c].setVelocities();
  }),
    (this.scrollHandler = function () {
      if (((r = f.flakeBottom ? 0 : parseInt(window.scrollY || document.documentElement.scrollTop || document.body.scrollTop, 10)), isNaN(r) && (r = 0), !x && !f.flakeBottom && f.flakes))
        for (var a = f.flakes.length; a--; ) 0 === f.flakes[a].active && f.flakes[a].stick();
    }),
    (this.resizeHandler = function () {
      window.innerWidth || window.innerHeight
        ? ((o = window.innerWidth - (h ? 2 : 16) - f.flakeRightOffset), (q = f.flakeBottom ? f.flakeBottom : window.innerHeight))
        : ((o = (document.documentElement.clientWidth || document.body.clientWidth || document.body.scrollWidth) - (h ? 0 : 8) - f.flakeRightOffset),
          (q = f.flakeBottom ? f.flakeBottom : document.documentElement.clientHeight || document.body.clientHeight || document.body.scrollHeight)),
        (p = parseInt(o / 2, 10));
    }),
    (this.resizeHandlerAlt = function () {
      (o = f.targetElement.offsetLeft + f.targetElement.offsetWidth - f.flakeRightOffset), (q = f.flakeBottom ? f.flakeBottom : f.targetElement.offsetTop + f.targetElement.offsetHeight), (p = parseInt(o / 2, 10));
    }),
    (this.freeze = function () {
      if (f.disabled) return !1;
      f.disabled = 1;
      for (var a = f.timers.length; a--; ) clearInterval(f.timers[a]);
    }),
    (this.resume = function () {
      return f.disabled ? ((f.disabled = 0), void f.timerInit()) : !1;
    }),
    (this.toggleSnow = function () {
      f.flakes.length ? ((f.active = !f.active), f.active ? (f.show(), f.resume()) : (f.stop(), f.freeze())) : f.start();
    }),
    (this.stop = function () {
      this.freeze();
      for (var a = this.flakes.length; a--; ) this.flakes[a].o.style.display = 'none';
      e(window, 'scroll', f.scrollHandler), e(window, 'resize', f.resizeHandler), j || (e(window, 'blur', f.freeze), e(window, 'focus', f.resume));
    }),
    (this.show = function () {
      for (var a = this.flakes.length; a--; ) this.flakes[a].o.style.display = 'block';
    }),
    (this.SnowFlake = function (b, c, d, e) {
      var f = this,
        g = b;
      (this.type = c),
        (this.x = d || parseInt(a(o - 20), 10)),
        (this.y = isNaN(e) ? -a(q) - 12 : e),
        (this.vX = null),
        (this.vY = null),
        (this.vAmpTypes = [1, 1.2, 1.4, 1.6, 1.8]),
        (this.vAmp = this.vAmpTypes[this.type]),
        (this.melting = !1),
        (this.meltFrameCount = g.meltFrameCount),
        (this.meltFrames = g.meltFrames),
        (this.meltFrame = 0),
        (this.twinkleFrame = 0),
        (this.active = 1),
        (this.fontSize = 10 + (this.type / 5) * 10),
        (this.o = document.createElement('div')),
        (this.o.innerHTML = g.snowCharacter),
        (this.o.style.color = g.snowColor),
        (this.o.style.position = x ? 'fixed' : 'absolute'),
        (this.o.style.width = g.flakeWidth + 'px'),
        (this.o.style.height = g.flakeHeight + 'px'),
        (this.o.style.fontFamily = 'arial,verdana'),
        (this.o.style.overflow = 'hidden'),
        (this.o.style.fontWeight = 'normal'),
        (this.o.style.zIndex = g.zIndex),
        z.appendChild(this.o),
        (this.refresh = function () {
          return isNaN(f.x) || isNaN(f.y) ? !1 : ((f.o.style.left = f.x + 'px'), void (f.o.style.top = f.y + 'px'));
        }),
        (this.stick = function () {
          n || (g.targetElement != document.documentElement && g.targetElement != document.body)
            ? (f.o.style.top = q + r - g.flakeHeight + 'px')
            : g.flakeBottom
            ? (f.o.style.top = g.flakeBottom + 'px')
            : ((f.o.style.display = 'none'), (f.o.style.top = 'auto'), (f.o.style.bottom = '0px'), (f.o.style.position = 'fixed'), (f.o.style.display = 'block'));
        }),
        (this.vCheck = function () {
          f.vX >= 0 && f.vX < 0.2 ? (f.vX = 0.2) : f.vX < 0 && f.vX > -0.2 && (f.vX = -0.2), f.vY >= 0 && f.vY < 0.2 && (f.vY = 0.2);
        }),
        (this.move = function () {
          var a = f.vX * u;
          (f.x += a), (f.y += f.vY * f.vAmp), f.x >= o || o - f.x < g.flakeWidth ? (f.x = 0) : 0 > a && f.x - g.flakeLeftOffset < 0 - g.flakeWidth && (f.x = o - g.flakeWidth - 1), f.refresh();
          var b = q + r - f.y;
          b < g.flakeHeight
            ? ((f.active = 0), g.snowStick ? f.stick() : f.recycle())
            : (g.useMeltEffect && f.active && f.type < 3 && !f.melting && Math.random() > 0.998 && ((f.melting = !0), f.melt()),
              g.useTwinkleEffect &&
                (f.twinkleFrame ? (f.twinkleFrame--, (f.o.style.visibility = f.twinkleFrame && f.twinkleFrame % 2 === 0 ? 'hidden' : 'visible')) : Math.random() > 0.9 && (f.twinkleFrame = parseInt(20 * Math.random(), 10))));
        }),
        (this.animate = function () {
          f.move();
        }),
        (this.setVelocities = function () {
          (f.vX = s + a(0.12 * g.vMaxX, 0.1)), (f.vY = t + a(0.12 * g.vMaxY, 0.1));
        }),
        (this.setOpacity = function (a, b) {
          return y ? void (a.style.opacity = b) : !1;
        }),
        (this.melt = function () {
          g.useMeltEffect && f.melting && f.meltFrame < f.meltFrameCount
            ? (f.meltFrame++,
              f.setOpacity(f.o, f.meltFrames[f.meltFrame]),
              (f.o.style.fontSize = f.fontSize - f.fontSize * (f.meltFrame / f.meltFrameCount) + 'px'),
              (f.o.style.lineHeight = g.flakeHeight + 2 + 0.75 * g.flakeHeight * (f.meltFrame / f.meltFrameCount) + 'px'))
            : f.recycle();
        }),
        (this.recycle = function () {
          (f.o.style.display = 'none'),
            (f.o.style.position = x ? 'fixed' : 'absolute'),
            (f.o.style.bottom = 'auto'),
            f.setVelocities(),
            f.vCheck(),
            (f.meltFrame = 0),
            (f.melting = !1),
            f.setOpacity(f.o, 1),
            (f.o.style.padding = '0px'),
            (f.o.style.margin = '0px'),
            (f.o.style.fontSize = f.fontSize + 'px'),
            (f.o.style.lineHeight = g.flakeHeight + 2 + 'px'),
            (f.o.style.textAlign = 'center'),
            (f.o.style.verticalAlign = 'baseline'),
            (f.x = parseInt(a(o - g.flakeWidth - 20), 10)),
            (f.y = parseInt(-1 * a(q), 10) - g.flakeHeight),
            f.refresh(),
            (f.o.style.display = 'block'),
            (f.active = 1);
        }),
        this.recycle(),
        this.refresh();
    }),
    (this.snow = function () {
      for (var b = 0, c = 0, d = 0, e = null, g = f.flakes.length; g--; ) 1 == f.flakes[g].active ? (f.flakes[g].move(), b++) : 0 === f.flakes[g].active ? c++ : d++, f.flakes[g].melting && f.flakes[g].melt();
      b < f.flakesMaxActive && ((e = f.flakes[parseInt(a(f.flakes.length), 10)]), 0 === e.active && (e.melting = !0));
    }),
    (this.mouseMove = function (a) {
      if (!f.followMouse) return !0;
      var b = parseInt(a.clientX, 10);
      p > b ? (u = -v + (b / p) * v) : ((b -= p), (u = (b / p) * v));
    }),
    (this.createSnow = function (b, c) {
      for (var d = 0; b > d; d++) (f.flakes[f.flakes.length] = new f.SnowFlake(f, parseInt(a(w), 10))), (c || d > f.flakesMaxActive) && (f.flakes[f.flakes.length - 1].active = -1);
      g.targetElement.appendChild(z);
    }),
    (this.timerInit = function () {
      f.timers = k ? [setInterval(f.snow, 3 * f.animationInterval), setInterval(f.snow, f.animationInterval)] : [setInterval(f.snow, f.animationInterval)];
    }),
    (this.init = function () {
      f.randomizeWind(),
        f.createSnow(f.flakesMax),
        d(window, 'resize', f.resizeHandler),
        d(window, 'scroll', f.scrollHandler),
        j || (d(window, 'blur', f.freeze), d(window, 'focus', f.resume)),
        f.resizeHandler(),
        f.scrollHandler(),
        f.followMouse && d(document, 'mousemove', f.mouseMove),
        (f.animationInterval = Math.max(20, f.animationInterval)),
        f.timerInit();
    });
  var B = !1;
  (this.start = function (a) {
    if (B) {
      if (a) return !0;
    } else B = !0;
    if ('string' == typeof f.targetElement) {
      var b = f.targetElement;
      if (((f.targetElement = document.getElementById(b)), !f.targetElement)) throw new Error('Snowstorm: Unable to get targetElement "' + b + '"');
    }
    f.targetElement || (f.targetElement = h ? document.body : document.documentElement ? document.documentElement : document.body),
      f.targetElement != document.documentElement && f.targetElement != document.body && (f.resizeHandler = f.resizeHandlerAlt),
      f.resizeHandler(),
      (f.usePositionFixed = f.usePositionFixed && !n),
      (x = f.usePositionFixed),
      o && q && !f.disabled && (f.init(), (f.active = !0));
  }),
    document.addEventListener ? (document.addEventListener('DOMContentLoaded', c, !1), window.addEventListener('load', c, !1)) : d(window, 'load', c);
}
var Zepto = (function () {
  function a(a) {
    return null == a ? String(a) : U[V.call(a)] || 'object';
  }
  function b(b) {
    return 'function' == a(b);
  }
  function c(a) {
    return null != a && a == a.window;
  }
  function d(a) {
    return null != a && a.nodeType == a.DOCUMENT_NODE;
  }
  function e(b) {
    return 'object' == a(b);
  }
  function f(a) {
    return e(a) && !c(a) && Object.getPrototypeOf(a) == Object.prototype;
  }
  function g(a) {
    return 'number' == typeof a.length;
  }
  function h(a) {
    return D.call(a, function (a) {
      return null != a;
    });
  }
  function i(a) {
    return a.length > 0 ? x.fn.concat.apply([], a) : a;
  }
  function j(a) {
    return a
      .replace(/::/g, '/')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
      .replace(/([a-z\d])([A-Z])/g, '$1_$2')
      .replace(/_/g, '-')
      .toLowerCase();
  }
  function k(a) {
    return a in G ? G[a] : (G[a] = new RegExp('(^|\\s)' + a + '(\\s|$)'));
  }
  function l(a, b) {
    return 'number' != typeof b || H[j(a)] ? b : b + 'px';
  }
  function m(a) {
    var b, c;
    return F[a] || ((b = E.createElement(a)), E.body.appendChild(b), (c = getComputedStyle(b, '').getPropertyValue('display')), b.parentNode.removeChild(b), 'none' == c && (c = 'block'), (F[a] = c)), F[a];
  }
  function n(a) {
    return 'children' in a
      ? C.call(a.children)
      : x.map(a.childNodes, function (a) {
          return 1 == a.nodeType ? a : void 0;
        });
  }
  function o(a, b, c) {
    for (w in b) c && (f(b[w]) || Z(b[w])) ? (f(b[w]) && !f(a[w]) && (a[w] = {}), Z(b[w]) && !Z(a[w]) && (a[w] = []), o(a[w], b[w], c)) : b[w] !== v && (a[w] = b[w]);
  }
  function p(a, b) {
    return null == b ? x(a) : x(a).filter(b);
  }
  function q(a, c, d, e) {
    return b(c) ? c.call(a, d, e) : c;
  }
  function r(a, b, c) {
    null == c ? a.removeAttribute(b) : a.setAttribute(b, c);
  }
  function s(a, b) {
    var c = a.className || '',
      d = c && c.baseVal !== v;
    return b === v ? (d ? c.baseVal : c) : void (d ? (c.baseVal = b) : (a.className = b));
  }
  function t(a) {
    var b;
    try {
      return a ? 'true' == a || ('false' == a ? !1 : 'null' == a ? null : /^0/.test(a) || isNaN((b = Number(a))) ? (/^[\[\{]/.test(a) ? x.parseJSON(a) : a) : b) : a;
    } catch (c) {
      return a;
    }
  }
  function u(a, b) {
    b(a);
    for (var c = 0, d = a.childNodes.length; d > c; c++) u(a.childNodes[c], b);
  }
  var v,
    w,
    x,
    y,
    z,
    A,
    B = [],
    C = B.slice,
    D = B.filter,
    E = window.document,
    F = {},
    G = {},
    H = { 'column-count': 1, columns: 1, 'font-weight': 1, 'line-height': 1, opacity: 1, 'z-index': 1, zoom: 1 },
    I = /^\s*<(\w+|!)[^>]*>/,
    J = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    K = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    L = /^(?:body|html)$/i,
    M = /([A-Z])/g,
    N = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],
    O = ['after', 'prepend', 'before', 'append'],
    P = E.createElement('table'),
    Q = E.createElement('tr'),
    R = { tr: E.createElement('tbody'), tbody: P, thead: P, tfoot: P, td: Q, th: Q, '*': E.createElement('div') },
    S = /complete|loaded|interactive/,
    T = /^[\w-]*$/,
    U = {},
    V = U.toString,
    W = {},
    X = E.createElement('div'),
    Y = {
      tabindex: 'tabIndex',
      readonly: 'readOnly',
      for: 'htmlFor',
      class: 'className',
      maxlength: 'maxLength',
      cellspacing: 'cellSpacing',
      cellpadding: 'cellPadding',
      rowspan: 'rowSpan',
      colspan: 'colSpan',
      usemap: 'useMap',
      frameborder: 'frameBorder',
      contenteditable: 'contentEditable',
    },
    Z =
      Array.isArray ||
      function (a) {
        return a instanceof Array;
      };
  return (
    (W.matches = function (a, b) {
      if (!b || !a || 1 !== a.nodeType) return !1;
      var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
      if (c) return c.call(a, b);
      var d,
        e = a.parentNode,
        f = !e;
      return f && (e = X).appendChild(a), (d = ~W.qsa(e, b).indexOf(a)), f && X.removeChild(a), d;
    }),
    (z = function (a) {
      return a.replace(/-+(.)?/g, function (a, b) {
        return b ? b.toUpperCase() : '';
      });
    }),
    (A = function (a) {
      return D.call(a, function (b, c) {
        return a.indexOf(b) == c;
      });
    }),
    (W.fragment = function (a, b, c) {
      var d, e, g;
      return (
        J.test(a) && (d = x(E.createElement(RegExp.$1))),
        d ||
          (a.replace && (a = a.replace(K, '<$1></$2>')),
          b === v && (b = I.test(a) && RegExp.$1),
          b in R || (b = '*'),
          (g = R[b]),
          (g.innerHTML = '' + a),
          (d = x.each(C.call(g.childNodes), function () {
            g.removeChild(this);
          }))),
        f(c) &&
          ((e = x(d)),
          x.each(c, function (a, b) {
            N.indexOf(a) > -1 ? e[a](b) : e.attr(a, b);
          })),
        d
      );
    }),
    (W.Z = function (a, b) {
      return (a = a || []), (a.__proto__ = x.fn), (a.selector = b || ''), a;
    }),
    (W.isZ = function (a) {
      return a instanceof W.Z;
    }),
    (W.init = function (a, c) {
      var d;
      if (!a) return W.Z();
      if ('string' == typeof a)
        if (((a = a.trim()), '<' == a[0] && I.test(a))) (d = W.fragment(a, RegExp.$1, c)), (a = null);
        else {
          if (c !== v) return x(c).find(a);
          d = W.qsa(E, a);
        }
      else {
        if (b(a)) return x(E).ready(a);
        if (W.isZ(a)) return a;
        if (Z(a)) d = h(a);
        else if (e(a)) (d = [a]), (a = null);
        else if (I.test(a)) (d = W.fragment(a.trim(), RegExp.$1, c)), (a = null);
        else {
          if (c !== v) return x(c).find(a);
          d = W.qsa(E, a);
        }
      }
      return W.Z(d, a);
    }),
    (x = function (a, b) {
      return W.init(a, b);
    }),
    (x.extend = function (a) {
      var b,
        c = C.call(arguments, 1);
      return (
        'boolean' == typeof a && ((b = a), (a = c.shift())),
        c.forEach(function (c) {
          o(a, c, b);
        }),
        a
      );
    }),
    (W.qsa = function (a, b) {
      var c,
        e = '#' == b[0],
        f = !e && '.' == b[0],
        g = e || f ? b.slice(1) : b,
        h = T.test(g);
      return d(a) && h && e ? ((c = a.getElementById(g)) ? [c] : []) : 1 !== a.nodeType && 9 !== a.nodeType ? [] : C.call(h && !e ? (f ? a.getElementsByClassName(g) : a.getElementsByTagName(b)) : a.querySelectorAll(b));
    }),
    (x.contains = E.documentElement.contains
      ? function (a, b) {
          return a !== b && a.contains(b);
        }
      : function (a, b) {
          for (; b && (b = b.parentNode); ) if (b === a) return !0;
          return !1;
        }),
    (x.type = a),
    (x.isFunction = b),
    (x.isWindow = c),
    (x.isArray = Z),
    (x.isPlainObject = f),
    (x.isEmptyObject = function (a) {
      var b;
      for (b in a) return !1;
      return !0;
    }),
    (x.inArray = function (a, b, c) {
      return B.indexOf.call(b, a, c);
    }),
    (x.camelCase = z),
    (x.trim = function (a) {
      return null == a ? '' : String.prototype.trim.call(a);
    }),
    (x.uuid = 0),
    (x.support = {}),
    (x.expr = {}),
    (x.map = function (a, b) {
      var c,
        d,
        e,
        f = [];
      if (g(a)) for (d = 0; d < a.length; d++) (c = b(a[d], d)), null != c && f.push(c);
      else for (e in a) (c = b(a[e], e)), null != c && f.push(c);
      return i(f);
    }),
    (x.each = function (a, b) {
      var c, d;
      if (g(a)) {
        for (c = 0; c < a.length; c++) if (b.call(a[c], c, a[c]) === !1) return a;
      } else for (d in a) if (b.call(a[d], d, a[d]) === !1) return a;
      return a;
    }),
    (x.grep = function (a, b) {
      return D.call(a, b);
    }),
    window.JSON && (x.parseJSON = JSON.parse),
    x.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (a, b) {
      U['[object ' + b + ']'] = b.toLowerCase();
    }),
    (x.fn = {
      forEach: B.forEach,
      reduce: B.reduce,
      push: B.push,
      sort: B.sort,
      indexOf: B.indexOf,
      concat: B.concat,
      map: function (a) {
        return x(
          x.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      slice: function () {
        return x(C.apply(this, arguments));
      },
      ready: function (a) {
        return (
          S.test(E.readyState) && E.body
            ? a(x)
            : E.addEventListener(
                'DOMContentLoaded',
                function () {
                  a(x);
                },
                !1
              ),
          this
        );
      },
      get: function (a) {
        return a === v ? C.call(this) : this[a >= 0 ? a : a + this.length];
      },
      toArray: function () {
        return this.get();
      },
      size: function () {
        return this.length;
      },
      remove: function () {
        return this.each(function () {
          null != this.parentNode && this.parentNode.removeChild(this);
        });
      },
      each: function (a) {
        return (
          B.every.call(this, function (b, c) {
            return a.call(b, c, b) !== !1;
          }),
          this
        );
      },
      filter: function (a) {
        return b(a)
          ? this.not(this.not(a))
          : x(
              D.call(this, function (b) {
                return W.matches(b, a);
              })
            );
      },
      add: function (a, b) {
        return x(A(this.concat(x(a, b))));
      },
      is: function (a) {
        return this.length > 0 && W.matches(this[0], a);
      },
      not: function (a) {
        var c = [];
        if (b(a) && a.call !== v)
          this.each(function (b) {
            a.call(this, b) || c.push(this);
          });
        else {
          var d = 'string' == typeof a ? this.filter(a) : g(a) && b(a.item) ? C.call(a) : x(a);
          this.forEach(function (a) {
            d.indexOf(a) < 0 && c.push(a);
          });
        }
        return x(c);
      },
      has: function (a) {
        return this.filter(function () {
          return e(a) ? x.contains(this, a) : x(this).find(a).size();
        });
      },
      eq: function (a) {
        return -1 === a ? this.slice(a) : this.slice(a, +a + 1);
      },
      first: function () {
        var a = this[0];
        return a && !e(a) ? a : x(a);
      },
      last: function () {
        var a = this[this.length - 1];
        return a && !e(a) ? a : x(a);
      },
      find: function (a) {
        var b,
          c = this;
        return (b = a
          ? 'object' == typeof a
            ? x(a).filter(function () {
                var a = this;
                return B.some.call(c, function (b) {
                  return x.contains(b, a);
                });
              })
            : 1 == this.length
            ? x(W.qsa(this[0], a))
            : this.map(function () {
                return W.qsa(this, a);
              })
          : []);
      },
      closest: function (a, b) {
        var c = this[0],
          e = !1;
        for ('object' == typeof a && (e = x(a)), c && !(e ? e.indexOf(c) >= 0 : W.matches(c, a)); ) c = c !== b && !d(c) && c.parentNode;
        return x(c);
      },
      parents: function (a) {
        for (var b = [], c = this; c.length > 0; )
          c = x.map(c, function (a) {
            return (a = a.parentNode) && !d(a) && b.indexOf(a) < 0 ? (b.push(a), a) : void 0;
          });
        return p(b, a);
      },
      parent: function (a) {
        return p(A(this.pluck('parentNode')), a);
      },
      children: function (a) {
        return p(
          this.map(function () {
            return n(this);
          }),
          a
        );
      },
      contents: function () {
        return this.map(function () {
          return C.call(this.childNodes);
        });
      },
      siblings: function (a) {
        return p(
          this.map(function (a, b) {
            return D.call(n(b.parentNode), function (a) {
              return a !== b;
            });
          }),
          a
        );
      },
      empty: function () {
        return this.each(function () {
          this.innerHTML = '';
        });
      },
      pluck: function (a) {
        return x.map(this, function (b) {
          return b[a];
        });
      },
      show: function () {
        return this.each(function () {
          'none' == this.style.display && (this.style.display = ''), 'none' == getComputedStyle(this, '').getPropertyValue('display') && (this.style.display = m(this.nodeName));
        });
      },
      replaceWith: function (a) {
        return this.before(a).remove();
      },
      wrap: function (a) {
        var c = b(a);
        if (this[0] && !c)
          var d = x(a).get(0),
            e = d.parentNode || this.length > 1;
        return this.each(function (b) {
          x(this).wrapAll(c ? a.call(this, b) : e ? d.cloneNode(!0) : d);
        });
      },
      wrapAll: function (a) {
        if (this[0]) {
          x(this[0]).before((a = x(a)));
          for (var b; (b = a.children()).length; ) a = b.first();
          x(a).append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        var c = b(a);
        return this.each(function (b) {
          var d = x(this),
            e = d.contents(),
            f = c ? a.call(this, b) : a;
          e.length ? e.wrapAll(f) : d.append(f);
        });
      },
      unwrap: function () {
        return (
          this.parent().each(function () {
            x(this).replaceWith(x(this).children());
          }),
          this
        );
      },
      clone: function () {
        return this.map(function () {
          return this.cloneNode(!0);
        });
      },
      hide: function () {
        return this.css('display', 'none');
      },
      toggle: function (a) {
        return this.each(function () {
          var b = x(this);
          (a === v ? 'none' == b.css('display') : a) ? b.show() : b.hide();
        });
      },
      prev: function (a) {
        return x(this.pluck('previousElementSibling')).filter(a || '*');
      },
      next: function (a) {
        return x(this.pluck('nextElementSibling')).filter(a || '*');
      },
      html: function (a) {
        return 0 in arguments
          ? this.each(function (b) {
              var c = this.innerHTML;
              x(this).empty().append(q(this, a, b, c));
            })
          : 0 in this
          ? this[0].innerHTML
          : null;
      },
      text: function (a) {
        return 0 in arguments
          ? this.each(function (b) {
              var c = q(this, a, b, this.textContent);
              this.textContent = null == c ? '' : '' + c;
            })
          : 0 in this
          ? this[0].textContent
          : null;
      },
      attr: function (a, b) {
        var c;
        return 'string' != typeof a || 1 in arguments
          ? this.each(function (c) {
              if (1 === this.nodeType)
                if (e(a)) for (w in a) r(this, w, a[w]);
                else r(this, a, q(this, b, c, this.getAttribute(a)));
            })
          : this.length && 1 === this[0].nodeType
          ? !(c = this[0].getAttribute(a)) && a in this[0]
            ? this[0][a]
            : c
          : v;
      },
      removeAttr: function (a) {
        return this.each(function () {
          1 === this.nodeType && r(this, a);
        });
      },
      prop: function (a, b) {
        return (
          (a = Y[a] || a),
          1 in arguments
            ? this.each(function (c) {
                this[a] = q(this, b, c, this[a]);
              })
            : this[0] && this[0][a]
        );
      },
      data: function (a, b) {
        var c = 'data-' + a.replace(M, '-$1').toLowerCase(),
          d = 1 in arguments ? this.attr(c, b) : this.attr(c);
        return null !== d ? t(d) : v;
      },
      val: function (a) {
        return 0 in arguments
          ? this.each(function (b) {
              this.value = q(this, a, b, this.value);
            })
          : this[0] &&
              (this[0].multiple
                ? x(this[0])
                    .find('option')
                    .filter(function () {
                      return this.selected;
                    })
                    .pluck('value')
                : this[0].value);
      },
      offset: function (a) {
        if (a)
          return this.each(function (b) {
            var c = x(this),
              d = q(this, a, b, c.offset()),
              e = c.offsetParent().offset(),
              f = { top: d.top - e.top, left: d.left - e.left };
            'static' == c.css('position') && (f.position = 'relative'), c.css(f);
          });
        if (!this.length) return null;
        var b = this[0].getBoundingClientRect();
        return { left: b.left + window.pageXOffset, top: b.top + window.pageYOffset, width: Math.round(b.width), height: Math.round(b.height) };
      },
      css: function (b, c) {
        if (arguments.length < 2) {
          var d = this[0],
            e = getComputedStyle(d, '');
          if (!d) return;
          if ('string' == typeof b) return d.style[z(b)] || e.getPropertyValue(b);
          if (Z(b)) {
            var f = {};
            return (
              x.each(b, function (a, b) {
                f[b] = d.style[z(b)] || e.getPropertyValue(b);
              }),
              f
            );
          }
        }
        var g = '';
        if ('string' == a(b))
          c || 0 === c
            ? (g = j(b) + ':' + l(b, c))
            : this.each(function () {
                this.style.removeProperty(j(b));
              });
        else
          for (w in b)
            b[w] || 0 === b[w]
              ? (g += j(w) + ':' + l(w, b[w]) + ';')
              : this.each(function () {
                  this.style.removeProperty(j(w));
                });
        return this.each(function () {
          this.style.cssText += ';' + g;
        });
      },
      index: function (a) {
        return a ? this.indexOf(x(a)[0]) : this.parent().children().indexOf(this[0]);
      },
      hasClass: function (a) {
        return a
          ? B.some.call(
              this,
              function (a) {
                return this.test(s(a));
              },
              k(a)
            )
          : !1;
      },
      addClass: function (a) {
        return a
          ? this.each(function (b) {
              if ('className' in this) {
                y = [];
                var c = s(this),
                  d = q(this, a, b, c);
                d.split(/\s+/g).forEach(function (a) {
                  x(this).hasClass(a) || y.push(a);
                }, this),
                  y.length && s(this, c + (c ? ' ' : '') + y.join(' '));
              }
            })
          : this;
      },
      removeClass: function (a) {
        return this.each(function (b) {
          if ('className' in this) {
            if (a === v) return s(this, '');
            (y = s(this)),
              q(this, a, b, y)
                .split(/\s+/g)
                .forEach(function (a) {
                  y = y.replace(k(a), ' ');
                }),
              s(this, y.trim());
          }
        });
      },
      toggleClass: function (a, b) {
        return a
          ? this.each(function (c) {
              var d = x(this),
                e = q(this, a, c, s(this));
              e.split(/\s+/g).forEach(function (a) {
                (b === v ? !d.hasClass(a) : b) ? d.addClass(a) : d.removeClass(a);
              });
            })
          : this;
      },
      scrollTop: function (a) {
        if (this.length) {
          var b = 'scrollTop' in this[0];
          return a === v
            ? b
              ? this[0].scrollTop
              : this[0].pageYOffset
            : this.each(
                b
                  ? function () {
                      this.scrollTop = a;
                    }
                  : function () {
                      this.scrollTo(this.scrollX, a);
                    }
              );
        }
      },
      scrollLeft: function (a) {
        if (this.length) {
          var b = 'scrollLeft' in this[0];
          return a === v
            ? b
              ? this[0].scrollLeft
              : this[0].pageXOffset
            : this.each(
                b
                  ? function () {
                      this.scrollLeft = a;
                    }
                  : function () {
                      this.scrollTo(a, this.scrollY);
                    }
              );
        }
      },
      position: function () {
        if (this.length) {
          var a = this[0],
            b = this.offsetParent(),
            c = this.offset(),
            d = L.test(b[0].nodeName) ? { top: 0, left: 0 } : b.offset();
          return (
            (c.top -= parseFloat(x(a).css('margin-top')) || 0),
            (c.left -= parseFloat(x(a).css('margin-left')) || 0),
            (d.top += parseFloat(x(b[0]).css('border-top-width')) || 0),
            (d.left += parseFloat(x(b[0]).css('border-left-width')) || 0),
            { top: c.top - d.top, left: c.left - d.left }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var a = this.offsetParent || E.body; a && !L.test(a.nodeName) && 'static' == x(a).css('position'); ) a = a.offsetParent;
          return a;
        });
      },
    }),
    (x.fn.detach = x.fn.remove),
    ['width', 'height'].forEach(function (a) {
      var b = a.replace(/./, function (a) {
        return a[0].toUpperCase();
      });
      x.fn[a] = function (e) {
        var f,
          g = this[0];
        return e === v
          ? c(g)
            ? g['inner' + b]
            : d(g)
            ? g.documentElement['scroll' + b]
            : (f = this.offset()) && f[a]
          : this.each(function (b) {
              (g = x(this)), g.css(a, q(this, e, b, g[a]()));
            });
      };
    }),
    O.forEach(function (b, c) {
      var d = c % 2;
      (x.fn[b] = function () {
        var b,
          e,
          f = x.map(arguments, function (c) {
            return (b = a(c)), 'object' == b || 'array' == b || null == c ? c : W.fragment(c);
          }),
          g = this.length > 1;
        return f.length < 1
          ? this
          : this.each(function (a, b) {
              (e = d ? b : b.parentNode), (b = 0 == c ? b.nextSibling : 1 == c ? b.firstChild : 2 == c ? b : null);
              var h = x.contains(E.documentElement, e);
              f.forEach(function (a) {
                if (g) a = a.cloneNode(!0);
                else if (!e) return x(a).remove();
                e.insertBefore(a, b),
                  h &&
                    u(a, function (a) {
                      null == a.nodeName || 'SCRIPT' !== a.nodeName.toUpperCase() || (a.type && 'text/javascript' !== a.type) || a.src || window.eval.call(window, a.innerHTML);
                    });
              });
            });
      }),
        (x.fn[d ? b + 'To' : 'insert' + (c ? 'Before' : 'After')] = function (a) {
          return x(a)[b](this), this;
        });
    }),
    (W.Z.prototype = x.fn),
    (W.uniq = A),
    (W.deserializeValue = t),
    (x.zepto = W),
    x
  );
})();
(window.Zepto = Zepto),
  void 0 === window.$ && (window.$ = Zepto),
  (function (a) {
    function b(a) {
      return a._zid || (a._zid = m++);
    }
    function c(a, c, f, g) {
      if (((c = d(c)), c.ns)) var h = e(c.ns);
      return (q[b(a)] || []).filter(function (a) {
        return !(!a || (c.e && a.e != c.e) || (c.ns && !h.test(a.ns)) || (f && b(a.fn) !== b(f)) || (g && a.sel != g));
      });
    }
    function d(a) {
      var b = ('' + a).split('.');
      return { e: b[0], ns: b.slice(1).sort().join(' ') };
    }
    function e(a) {
      return new RegExp('(?:^| )' + a.replace(' ', ' .* ?') + '(?: |$)');
    }
    function f(a, b) {
      return (a.del && !s && a.e in t) || !!b;
    }
    function g(a) {
      return u[a] || (s && t[a]) || a;
    }
    function h(c, e, h, i, k, m, n) {
      var o = b(c),
        p = q[o] || (q[o] = []);
      e.split(/\s/).forEach(function (b) {
        if ('ready' == b) return a(document).ready(h);
        var e = d(b);
        (e.fn = h),
          (e.sel = k),
          e.e in u &&
            (h = function (b) {
              var c = b.relatedTarget;
              return !c || (c !== this && !a.contains(this, c)) ? e.fn.apply(this, arguments) : void 0;
            }),
          (e.del = m);
        var o = m || h;
        (e.proxy = function (a) {
          if (((a = j(a)), !a.isImmediatePropagationStopped())) {
            a.data = i;
            var b = o.apply(c, a._args == l ? [a] : [a].concat(a._args));
            return b === !1 && (a.preventDefault(), a.stopPropagation()), b;
          }
        }),
          (e.i = p.length),
          p.push(e),
          'addEventListener' in c && c.addEventListener(g(e.e), e.proxy, f(e, n));
      });
    }
    function i(a, d, e, h, i) {
      var j = b(a);
      (d || '').split(/\s/).forEach(function (b) {
        c(a, b, e, h).forEach(function (b) {
          delete q[j][b.i], 'removeEventListener' in a && a.removeEventListener(g(b.e), b.proxy, f(b, i));
        });
      });
    }
    function j(b, c) {
      return (
        (c || !b.isDefaultPrevented) &&
          (c || (c = b),
          a.each(y, function (a, d) {
            var e = c[a];
            (b[a] = function () {
              return (this[d] = v), e && e.apply(c, arguments);
            }),
              (b[d] = w);
          }),
          (c.defaultPrevented !== l ? c.defaultPrevented : 'returnValue' in c ? c.returnValue === !1 : c.getPreventDefault && c.getPreventDefault()) && (b.isDefaultPrevented = v)),
        b
      );
    }
    function k(a) {
      var b,
        c = { originalEvent: a };
      for (b in a) x.test(b) || a[b] === l || (c[b] = a[b]);
      return j(c, a);
    }
    var l,
      m = 1,
      n = Array.prototype.slice,
      o = a.isFunction,
      p = function (a) {
        return 'string' == typeof a;
      },
      q = {},
      r = {},
      s = 'onfocusin' in window,
      t = { focus: 'focusin', blur: 'focusout' },
      u = { mouseenter: 'mouseover', mouseleave: 'mouseout' };
    (r.click = r.mousedown = r.mouseup = r.mousemove = 'MouseEvents'),
      (a.event = { add: h, remove: i }),
      (a.proxy = function (c, d) {
        var e = 2 in arguments && n.call(arguments, 2);
        if (o(c)) {
          var f = function () {
            return c.apply(d, e ? e.concat(n.call(arguments)) : arguments);
          };
          return (f._zid = b(c)), f;
        }
        if (p(d)) return e ? (e.unshift(c[d], c), a.proxy.apply(null, e)) : a.proxy(c[d], c);
        throw new TypeError('expected function');
      }),
      (a.fn.bind = function (a, b, c) {
        return this.on(a, b, c);
      }),
      (a.fn.unbind = function (a, b) {
        return this.off(a, b);
      }),
      (a.fn.one = function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      });
    var v = function () {
        return !0;
      },
      w = function () {
        return !1;
      },
      x = /^([A-Z]|returnValue$|layer[XY]$)/,
      y = { preventDefault: 'isDefaultPrevented', stopImmediatePropagation: 'isImmediatePropagationStopped', stopPropagation: 'isPropagationStopped' };
    (a.fn.delegate = function (a, b, c) {
      return this.on(b, a, c);
    }),
      (a.fn.undelegate = function (a, b, c) {
        return this.off(b, a, c);
      }),
      (a.fn.live = function (b, c) {
        return a(document.body).delegate(this.selector, b, c), this;
      }),
      (a.fn.die = function (b, c) {
        return a(document.body).undelegate(this.selector, b, c), this;
      }),
      (a.fn.on = function (b, c, d, e, f) {
        var g,
          j,
          m = this;
        return b && !p(b)
          ? (a.each(b, function (a, b) {
              m.on(a, c, d, b, f);
            }),
            m)
          : (p(c) || o(e) || e === !1 || ((e = d), (d = c), (c = l)),
            (o(d) || d === !1) && ((e = d), (d = l)),
            e === !1 && (e = w),
            m.each(function (l, m) {
              f &&
                (g = function (a) {
                  return i(m, a.type, e), e.apply(this, arguments);
                }),
                c &&
                  (j = function (b) {
                    var d,
                      f = a(b.target).closest(c, m).get(0);
                    return f && f !== m ? ((d = a.extend(k(b), { currentTarget: f, liveFired: m })), (g || e).apply(f, [d].concat(n.call(arguments, 1)))) : void 0;
                  }),
                h(m, b, e, d, c, j || g);
            }));
      }),
      (a.fn.off = function (b, c, d) {
        var e = this;
        return b && !p(b)
          ? (a.each(b, function (a, b) {
              e.off(a, c, b);
            }),
            e)
          : (p(c) || o(d) || d === !1 || ((d = c), (c = l)),
            d === !1 && (d = w),
            e.each(function () {
              i(this, b, d, c);
            }));
      }),
      (a.fn.trigger = function (b, c) {
        return (
          (b = p(b) || a.isPlainObject(b) ? a.Event(b) : j(b)),
          (b._args = c),
          this.each(function () {
            'dispatchEvent' in this ? this.dispatchEvent(b) : a(this).triggerHandler(b, c);
          })
        );
      }),
      (a.fn.triggerHandler = function (b, d) {
        var e, f;
        return (
          this.each(function (g, h) {
            (e = k(p(b) ? a.Event(b) : b)),
              (e._args = d),
              (e.target = h),
              a.each(c(h, b.type || b), function (a, b) {
                return (f = b.proxy(e)), e.isImmediatePropagationStopped() ? !1 : void 0;
              });
          }),
          f
        );
      }),
      'focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error'.split(' ').forEach(function (b) {
        a.fn[b] = function (a) {
          return a ? this.bind(b, a) : this.trigger(b);
        };
      }),
      ['focus', 'blur'].forEach(function (b) {
        a.fn[b] = function (a) {
          return (
            a
              ? this.bind(b, a)
              : this.each(function () {
                  try {
                    this[b]();
                  } catch (a) {}
                }),
            this
          );
        };
      }),
      (a.Event = function (a, b) {
        p(a) || ((b = a), (a = b.type));
        var c = document.createEvent(r[a] || 'Events'),
          d = !0;
        if (b) for (var e in b) 'bubbles' == e ? (d = !!b[e]) : (c[e] = b[e]);
        return c.initEvent(a, d, !0), j(c);
      });
  })(Zepto),
  (function (a) {
    function b(b) {
      return (b = a(b)), !(!b.width() && !b.height()) && 'none' !== b.css('display');
    }
    function c(a, b) {
      a = a.replace(/=#\]/g, '="#"]');
      var c,
        d,
        e = h.exec(a);
      if (e && e[2] in g && ((c = g[e[2]]), (d = e[3]), (a = e[1]), d)) {
        var f = Number(d);
        d = isNaN(f) ? d.replace(/^["']|["']$/g, '') : f;
      }
      return b(a, c, d);
    }
    var d = a.zepto,
      e = d.qsa,
      f = d.matches,
      g = (a.expr[':'] = {
        visible: function () {
          return b(this) ? this : void 0;
        },
        hidden: function () {
          return b(this) ? void 0 : this;
        },
        selected: function () {
          return this.selected ? this : void 0;
        },
        checked: function () {
          return this.checked ? this : void 0;
        },
        parent: function () {
          return this.parentNode;
        },
        first: function (a) {
          return 0 === a ? this : void 0;
        },
        last: function (a, b) {
          return a === b.length - 1 ? this : void 0;
        },
        eq: function (a, b, c) {
          return a === c ? this : void 0;
        },
        contains: function (b, c, d) {
          return a(this).text().indexOf(d) > -1 ? this : void 0;
        },
        has: function (a, b, c) {
          return d.qsa(this, c).length ? this : void 0;
        },
      }),
      h = new RegExp('(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*'),
      i = /^\s*>/,
      j = 'Zepto' + +new Date();
    (d.qsa = function (b, f) {
      return c(f, function (c, g, h) {
        try {
          var k;
          !c && g ? (c = '*') : i.test(c) && ((k = a(b).addClass(j)), (c = '.' + j + ' ' + c));
          var l = e(b, c);
        } catch (m) {
          throw (console.error('error performing selector: %o', f), m);
        } finally {
          k && k.removeClass(j);
        }
        return g
          ? d.uniq(
              a.map(l, function (a, b) {
                return g.call(a, b, l, h);
              })
            )
          : l;
      });
    }),
      (d.matches = function (a, b) {
        return c(b, function (b, c, d) {
          return !((b && !f(a, b)) || (c && c.call(a, null, d) !== a));
        });
      });
  })(Zepto),
  (function (a, b) {
    function c(c, d, e, f, g) {
      'function' != typeof d || g || ((g = d), (d = b));
      var h = { opacity: e };
      return f && ((h.scale = f), c.css(a.fx.cssPrefix + 'transform-origin', '0 0')), c.animate(h, d, null, g);
    }
    function d(b, d, e, f) {
      return c(b, d, 0, e, function () {
        g.call(a(this)), f && f.call(this);
      });
    }
    var e = window.document,
      f = (e.documentElement, a.fn.show),
      g = a.fn.hide,
      h = a.fn.toggle;
    (a.fn.show = function (a, d) {
      return f.call(this), a === b ? (a = 0) : this.css('opacity', 0), c(this, a, 1, '1,1', d);
    }),
      (a.fn.hide = function (a, c) {
        return a === b ? g.call(this) : d(this, a, '0,0', c);
      }),
      (a.fn.toggle = function (c, d) {
        return c === b || 'boolean' == typeof c
          ? h.call(this, c)
          : this.each(function () {
              var b = a(this);
              b['none' == b.css('display') ? 'show' : 'hide'](c, d);
            });
      }),
      (a.fn.fadeTo = function (a, b, d) {
        return c(this, a, b, null, d);
      }),
      (a.fn.fadeIn = function (a, b) {
        var c = this.css('opacity');
        return c > 0 ? this.css('opacity', 0) : (c = 1), f.call(this).fadeTo(a, c, b);
      }),
      (a.fn.fadeOut = function (a, b) {
        return d(this, a, null, b);
      }),
      (a.fn.fadeToggle = function (b, c) {
        return this.each(function () {
          var d = a(this);
          d[0 == d.css('opacity') || 'none' == d.css('display') ? 'fadeIn' : 'fadeOut'](b, c);
        });
      });
  })(Zepto);
var snowStorm = null;
(snowStorm = new SnowStorm()),
  $(function () {
    var a = {},
      b = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationend Animationend',
      c = 'webkitTransitionEnd mozTransitionEnd MSTransitionEnd oTransitionend Transitionend';
    (a.step1 = function () {
      var c = $('.j-bottomBg'),
        d = $('.j-stars');
      c.addClass('opacity1 fadeIn'),
        setTimeout(function () {
          d.addClass('opacity1 bounceInDown').one(b, a.step2);
        }, 300);
    }),
      (a.step2 = function () {
        var c = $('.j-tree-left'),
          d = $('.j-tree-right'),
          e = $('.j-bag');
        e.addClass('opacity1 rubberBand').one(b, a.step3),
          setTimeout(function () {
            c.addClass('opacity1').removeClass('tn'), d.addClass('opacity1').removeClass('tn');
          }, 600);
      }),
      (a.step3 = function () {
        var c = $('.j-gift1'),
          d = $('.j-gift2'),
          e = $('.j-gift3');
        c.addClass('opacity1 bounceInDown'),
          setTimeout(function () {
            d.addClass('opacity1 bounceInDown');
          }, 300),
          setTimeout(function () {
            e.addClass('opacity1 bounceInDown').one(b, a.step4);
          }, 600);
      }),
      (a.step4 = function () {
        $('.j-bigSnow').addClass('bigSnow-smallPos').one(c, a.step5);
      }),
      (a.step5 = function () {
        var c = $('.j-banner');
        c.addClass('opacity1 flipInX').one(b, a.step6);
      }),
      (a.step6 = function () {
        var a = $('.j-textmask1'),
          b = $('.j-textmask2'),
          c = $('.j-textmask3');
        a.addClass('show'),
          setTimeout(function () {
            b.addClass('show');
          }, 2e3),
          setTimeout(function () {
            c.addClass('show');
            $('.credits').addClass('fadeInUp');
          }, 4e3);
      });
    var d = {},
      e = $('.loading-mask'),
      f = ISPRO ? 'dist' : 'src';
    (d.imgs = [
      f + '/images/car.png',
      f + '/images/bg_bottom.png',
      f + '/images/sprite_bigSnow.png',
      f + '/images/stars.png',
      f + '/images/tree.png',
      f + '/images/bag.png',
      f + '/images/sprite_gifts.png',
      f + '/images/glove.png',
      f + '/images/banner.png',
    ]),
      (d.loadedPer = 0),
      (d.eachItemPer = 100 / d.imgs.length),
      (d.doLoadImg = function (a) {
        var b = new Image();
        (b.src = a),
          (b.onload = function () {
            (d.loadedPer += d.eachItemPer),
              e
                .find('.progres-bar')
                .css('width', d.loadedPer + '%')
                .one(c, function () {
                  parseInt(d.loadedPer) >= 99 && (e.find('.loading-text').text('Pemuatan Selesai'), $('#j-playBgMusic').fadeIn(200));
          });
      });
    for (var g = 0; g < d.imgs.length; g++) d.doLoadImg(d.imgs[g]);
    $('#j-playBgMusic').click(function () {
      $('.loading-mask').addClass('outLeft'), $('.page').addClass('in'), setTimeout(a.step1, 300), $('#bgmusci')[0].play();
    });
  })});


// Inline JavaScript for simplicity
const toggleButton = document.getElementById('toggleButton');
const creditSection = document.getElementById('creditSection');

toggleButton.addEventListener('click', () => {
  creditSection.classList.toggle('show');
});
