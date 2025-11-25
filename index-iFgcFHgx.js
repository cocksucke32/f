const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/index-DU33UtKs.js", "assets/index-CyQ-y2zh.css"]))) => i.map(i => d[i]);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        o(r);
    new MutationObserver(r => {
        for (const i of r)
            if (i.type === "childList")
                for (const c of i.addedNodes)
                    c.tagName === "LINK" && c.rel === "modulepreload" && o(c)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(r) {
        const i = {};
        return r.integrity && (i.integrity = r.integrity),
        r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin",
        i
    }
    function o(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const i = n(r);
        fetch(r.href, i)
    }
}
)();
var ce, m, wt, F, ze, bt, $t, xt, Me, Se, Te, Nt, se = {}, Ct = [], cn = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ae = Array.isArray;
function M(e, t) {
    for (var n in t)
        e[n] = t[n];
    return e
}
function Ue(e) {
    e && e.parentNode && e.parentNode.removeChild(e)
}
function U(e, t, n) {
    var o, r, i, c = {};
    for (i in t)
        i == "key" ? o = t[i] : i == "ref" ? r = t[i] : c[i] = t[i];
    if (arguments.length > 2 && (c.children = arguments.length > 3 ? ce.call(arguments, 2) : n),
    typeof e == "function" && e.defaultProps != null)
        for (i in e.defaultProps)
            c[i] === void 0 && (c[i] = e.defaultProps[i]);
    return oe(e, c, o, r, null)
}
function oe(e, t, n, o, r) {
    var i = {
        type: e,
        props: t,
        key: n,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: r ?? ++wt,
        __i: -1,
        __u: 0
    };
    return r == null && m.vnode != null && m.vnode(i),
    i
}
function an() {
    return {
        current: null
    }
}
function T(e) {
    return e.children
}
function W(e, t) {
    this.props = e,
    this.context = t
}
function q(e, t) {
    if (t == null)
        return e.__ ? q(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
        if ((n = e.__k[t]) != null && n.__e != null)
            return n.__e;
    return typeof e.type == "function" ? q(e) : null
}
function Bt(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
        for (e.__e = e.__c.base = null,
        t = 0; t < e.__k.length; t++)
            if ((n = e.__k[t]) != null && n.__e != null) {
                e.__e = e.__c.base = n.__e;
                break
            }
        return Bt(e)
    }
}
function Le(e) {
    (!e.__d && (e.__d = !0) && F.push(e) && !ye.__r++ || ze != m.debounceRendering) && ((ze = m.debounceRendering) || bt)(ye)
}
function ye() {
    for (var e, t, n, o, r, i, c, a = 1; F.length; )
        F.length > a && F.sort($t),
        e = F.shift(),
        a = F.length,
        e.__d && (n = void 0,
        o = void 0,
        r = (o = (t = e).__v).__e,
        i = [],
        c = [],
        t.__P && ((n = M({}, o)).__v = o.__v + 1,
        m.vnode && m.vnode(n),
        Ae(t.__P, n, o, t.__n, t.__P.namespaceURI, 32 & o.__u ? [r] : null, i, r ?? q(o), !!(32 & o.__u), c),
        n.__v = o.__v,
        n.__.__k[n.__i] = n,
        Lt(i, n, c),
        o.__e = o.__ = null,
        n.__e != r && Bt(n)));
    ye.__r = 0
}
function St(e, t, n, o, r, i, c, a, u, _, p) {
    var l, f, d, v, y, k, h, g = o && o.__k || Ct, C = t.length;
    for (u = ln(n, t, g, u, C),
    l = 0; l < C; l++)
        (d = n.__k[l]) != null && (f = d.__i == -1 ? se : g[d.__i] || se,
        d.__i = l,
        k = Ae(e, d, f, r, i, c, a, u, _, p),
        v = d.__e,
        d.ref && f.ref != d.ref && (f.ref && Oe(f.ref, null, d),
        p.push(d.ref, d.__c || v, d)),
        y == null && v != null && (y = v),
        (h = !!(4 & d.__u)) || f.__k === d.__k ? u = Tt(d, u, e, h) : typeof d.type == "function" && k !== void 0 ? u = k : v && (u = v.nextSibling),
        d.__u &= -7);
    return n.__e = y,
    u
}
function ln(e, t, n, o, r) {
    var i, c, a, u, _, p = n.length, l = p, f = 0;
    for (e.__k = new Array(r),
    i = 0; i < r; i++)
        (c = t[i]) != null && typeof c != "boolean" && typeof c != "function" ? (u = i + f,
        (c = e.__k[i] = typeof c == "string" || typeof c == "number" || typeof c == "bigint" || c.constructor == String ? oe(null, c, null, null, null) : ae(c) ? oe(T, {
            children: c
        }, null, null, null) : c.constructor == null && c.__b > 0 ? oe(c.type, c.props, c.key, c.ref ? c.ref : null, c.__v) : c).__ = e,
        c.__b = e.__b + 1,
        a = null,
        (_ = c.__i = _n(c, n, u, l)) != -1 && (l--,
        (a = n[_]) && (a.__u |= 2)),
        a == null || a.__v == null ? (_ == -1 && (r > p ? f-- : r < p && f++),
        typeof c.type != "function" && (c.__u |= 4)) : _ != u && (_ == u - 1 ? f-- : _ == u + 1 ? f++ : (_ > u ? f-- : f++,
        c.__u |= 4))) : e.__k[i] = null;
    if (l)
        for (i = 0; i < p; i++)
            (a = n[i]) != null && (2 & a.__u) == 0 && (a.__e == o && (o = q(a)),
            Wt(a, a));
    return o
}
function Tt(e, t, n, o) {
    var r, i;
    if (typeof e.type == "function") {
        for (r = e.__k,
        i = 0; r && i < r.length; i++)
            r[i] && (r[i].__ = e,
            t = Tt(r[i], t, n, o));
        return t
    }
    e.__e != t && (o && (t && e.type && !t.parentNode && (t = q(e)),
    n.insertBefore(e.__e, t || null)),
    t = e.__e);
    do
        t = t && t.nextSibling;
    while (t != null && t.nodeType == 8);
    return t
}
function E(e, t) {
    return t = t || [],
    e == null || typeof e == "boolean" || (ae(e) ? e.some(function(n) {
        E(n, t)
    }) : t.push(e)),
    t
}
function _n(e, t, n, o) {
    var r, i, c, a = e.key, u = e.type, _ = t[n], p = _ != null && (2 & _.__u) == 0;
    if (_ === null && e.key == null || p && a == _.key && u == _.type)
        return n;
    if (o > (p ? 1 : 0)) {
        for (r = n - 1,
        i = n + 1; r >= 0 || i < t.length; )
            if ((_ = t[c = r >= 0 ? r-- : i++]) != null && (2 & _.__u) == 0 && a == _.key && u == _.type)
                return c
    }
    return -1
}
function qe(e, t, n) {
    t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || cn.test(t) ? n : n + "px"
}
function pe(e, t, n, o, r) {
    var i, c;
    e: if (t == "style")
        if (typeof n == "string")
            e.style.cssText = n;
        else {
            if (typeof o == "string" && (e.style.cssText = o = ""),
            o)
                for (t in o)
                    n && t in n || qe(e.style, t, "");
            if (n)
                for (t in n)
                    o && n[t] == o[t] || qe(e.style, t, n[t])
        }
    else if (t[0] == "o" && t[1] == "n")
        i = t != (t = t.replace(xt, "$1")),
        c = t.toLowerCase(),
        t = c in e || t == "onFocusOut" || t == "onFocusIn" ? c.slice(2) : t.slice(2),
        e.l || (e.l = {}),
        e.l[t + i] = n,
        n ? o ? n.u = o.u : (n.u = Me,
        e.addEventListener(t, i ? Te : Se, i)) : e.removeEventListener(t, i ? Te : Se, i);
    else {
        if (r == "http://www.w3.org/2000/svg")
            t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e)
            try {
                e[t] = n ?? "";
                break e
            } catch {}
        typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n))
    }
}
function Je(e) {
    return function(t) {
        if (this.l) {
            var n = this.l[t.type + e];
            if (t.t == null)
                t.t = Me++;
            else if (t.t < n.u)
                return;
            return n(m.event ? m.event(t) : t)
        }
    }
}
function Ae(e, t, n, o, r, i, c, a, u, _) {
    var p, l, f, d, v, y, k, h, g, C, L, de, G, Ze, fe, Q, xe, D = t.type;
    if (t.constructor != null)
        return null;
    128 & n.__u && (u = !!(32 & n.__u),
    i = [a = t.__e = n.__e]),
    (p = m.__b) && p(t);
    e: if (typeof D == "function")
        try {
            if (h = t.props,
            g = "prototype"in D && D.prototype.render,
            C = (p = D.contextType) && o[p.__c],
            L = p ? C ? C.props.value : p.__ : o,
            n.__c ? k = (l = t.__c = n.__c).__ = l.__E : (g ? t.__c = l = new D(h,L) : (t.__c = l = new W(h,L),
            l.constructor = D,
            l.render = dn),
            C && C.sub(l),
            l.props = h,
            l.state || (l.state = {}),
            l.context = L,
            l.__n = o,
            f = l.__d = !0,
            l.__h = [],
            l._sb = []),
            g && l.__s == null && (l.__s = l.state),
            g && D.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = M({}, l.__s)),
            M(l.__s, D.getDerivedStateFromProps(h, l.__s))),
            d = l.props,
            v = l.state,
            l.__v = t,
            f)
                g && D.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(),
                g && l.componentDidMount != null && l.__h.push(l.componentDidMount);
            else {
                if (g && D.getDerivedStateFromProps == null && h !== d && l.componentWillReceiveProps != null && l.componentWillReceiveProps(h, L),
                !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(h, l.__s, L) === !1 || t.__v == n.__v) {
                    for (t.__v != n.__v && (l.props = h,
                    l.state = l.__s,
                    l.__d = !1),
                    t.__e = n.__e,
                    t.__k = n.__k,
                    t.__k.some(function(Z) {
                        Z && (Z.__ = t)
                    }),
                    de = 0; de < l._sb.length; de++)
                        l.__h.push(l._sb[de]);
                    l._sb = [],
                    l.__h.length && c.push(l);
                    break e
                }
                l.componentWillUpdate != null && l.componentWillUpdate(h, l.__s, L),
                g && l.componentDidUpdate != null && l.__h.push(function() {
                    l.componentDidUpdate(d, v, y)
                })
            }
            if (l.context = L,
            l.props = h,
            l.__P = e,
            l.__e = !1,
            G = m.__r,
            Ze = 0,
            g) {
                for (l.state = l.__s,
                l.__d = !1,
                G && G(t),
                p = l.render(l.props, l.state, l.context),
                fe = 0; fe < l._sb.length; fe++)
                    l.__h.push(l._sb[fe]);
                l._sb = []
            } else
                do
                    l.__d = !1,
                    G && G(t),
                    p = l.render(l.props, l.state, l.context),
                    l.state = l.__s;
                while (l.__d && ++Ze < 25);
            l.state = l.__s,
            l.getChildContext != null && (o = M(M({}, o), l.getChildContext())),
            g && !f && l.getSnapshotBeforeUpdate != null && (y = l.getSnapshotBeforeUpdate(d, v)),
            Q = p,
            p != null && p.type === T && p.key == null && (Q = It(p.props.children)),
            a = St(e, ae(Q) ? Q : [Q], t, n, o, r, i, c, a, u, _),
            l.base = t.__e,
            t.__u &= -161,
            l.__h.length && c.push(l),
            k && (l.__E = l.__ = null)
        } catch (Z) {
            if (t.__v = null,
            u || i != null)
                if (Z.then) {
                    for (t.__u |= u ? 160 : 128; a && a.nodeType == 8 && a.nextSibling; )
                        a = a.nextSibling;
                    i[i.indexOf(a)] = null,
                    t.__e = a
                } else {
                    for (xe = i.length; xe--; )
                        Ue(i[xe]);
                    Ie(t)
                }
            else
                t.__e = n.__e,
                t.__k = n.__k,
                Z.then || Ie(t);
            m.__e(Z, t, n)
        }
    else
        i == null && t.__v == n.__v ? (t.__k = n.__k,
        t.__e = n.__e) : a = t.__e = un(n.__e, t, n, o, r, i, c, u, _);
    return (p = m.diffed) && p(t),
    128 & t.__u ? void 0 : a
}
function Ie(e) {
    e && e.__c && (e.__c.__e = !0),
    e && e.__k && e.__k.forEach(Ie)
}
function Lt(e, t, n) {
    for (var o = 0; o < n.length; o++)
        Oe(n[o], n[++o], n[++o]);
    m.__c && m.__c(t, e),
    e.some(function(r) {
        try {
            e = r.__h,
            r.__h = [],
            e.some(function(i) {
                i.call(r)
            })
        } catch (i) {
            m.__e(i, r.__v)
        }
    })
}
function It(e) {
    return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : ae(e) ? e.map(It) : M({}, e)
}
function un(e, t, n, o, r, i, c, a, u) {
    var _, p, l, f, d, v, y, k = n.props, h = t.props, g = t.type;
    if (g == "svg" ? r = "http://www.w3.org/2000/svg" : g == "math" ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"),
    i != null) {
        for (_ = 0; _ < i.length; _++)
            if ((d = i[_]) && "setAttribute"in d == !!g && (g ? d.localName == g : d.nodeType == 3)) {
                e = d,
                i[_] = null;
                break
            }
    }
    if (e == null) {
        if (g == null)
            return document.createTextNode(h);
        e = document.createElementNS(r, g, h.is && h),
        a && (m.__m && m.__m(t, i),
        a = !1),
        i = null
    }
    if (g == null)
        k === h || a && e.data == h || (e.data = h);
    else {
        if (i = i && ce.call(e.childNodes),
        k = n.props || se,
        !a && i != null)
            for (k = {},
            _ = 0; _ < e.attributes.length; _++)
                k[(d = e.attributes[_]).name] = d.value;
        for (_ in k)
            if (d = k[_],
            _ != "children") {
                if (_ == "dangerouslySetInnerHTML")
                    l = d;
                else if (!(_ in h)) {
                    if (_ == "value" && "defaultValue"in h || _ == "checked" && "defaultChecked"in h)
                        continue;
                    pe(e, _, null, d, r)
                }
            }
        for (_ in h)
            d = h[_],
            _ == "children" ? f = d : _ == "dangerouslySetInnerHTML" ? p = d : _ == "value" ? v = d : _ == "checked" ? y = d : a && typeof d != "function" || k[_] === d || pe(e, _, d, k[_], r);
        if (p)
            a || l && (p.__html == l.__html || p.__html == e.innerHTML) || (e.innerHTML = p.__html),
            t.__k = [];
        else if (l && (e.innerHTML = ""),
        St(t.type == "template" ? e.content : e, ae(f) ? f : [f], t, n, o, g == "foreignObject" ? "http://www.w3.org/1999/xhtml" : r, i, c, i ? i[0] : n.__k && q(n, 0), a, u),
        i != null)
            for (_ = i.length; _--; )
                Ue(i[_]);
        a || (_ = "value",
        g == "progress" && v == null ? e.removeAttribute("value") : v != null && (v !== e[_] || g == "progress" && !v || g == "option" && v != k[_]) && pe(e, _, v, k[_], r),
        _ = "checked",
        y != null && y != e[_] && pe(e, _, y, k[_], r))
    }
    return e
}
function Oe(e, t, n) {
    try {
        if (typeof e == "function") {
            var o = typeof e.__u == "function";
            o && e.__u(),
            o && t == null || (e.__u = e(t))
        } else
            e.current = t
    } catch (r) {
        m.__e(r, n)
    }
}
function Wt(e, t, n) {
    var o, r;
    if (m.unmount && m.unmount(e),
    (o = e.ref) && (o.current && o.current != e.__e || Oe(o, null, t)),
    (o = e.__c) != null) {
        if (o.componentWillUnmount)
            try {
                o.componentWillUnmount()
            } catch (i) {
                m.__e(i, t)
            }
        o.base = o.__P = null
    }
    if (o = e.__k)
        for (r = 0; r < o.length; r++)
            o[r] && Wt(o[r], t, n || typeof e.type != "function");
    n || Ue(e.__e),
    e.__c = e.__ = e.__e = void 0
}
function dn(e, t, n) {
    return this.constructor(e, n)
}
function J(e, t, n) {
    var o, r, i, c;
    t == document && (t = document.documentElement),
    m.__ && m.__(e, t),
    r = (o = typeof n == "function") ? null : n && n.__k || t.__k,
    i = [],
    c = [],
    Ae(t, e = (!o && n || t).__k = U(T, null, [e]), r || se, se, t.namespaceURI, !o && n ? [n] : r ? null : t.firstChild ? ce.call(t.childNodes) : null, i, !o && n ? n : r ? r.__e : t.firstChild, o, c),
    Lt(i, e, c)
}
function Et(e, t) {
    J(e, t, Et)
}
function Dt(e, t, n) {
    var o, r, i, c, a = M({}, e.props);
    for (i in e.type && e.type.defaultProps && (c = e.type.defaultProps),
    t)
        i == "key" ? o = t[i] : i == "ref" ? r = t[i] : a[i] = t[i] === void 0 && c != null ? c[i] : t[i];
    return arguments.length > 2 && (a.children = arguments.length > 3 ? ce.call(arguments, 2) : n),
    oe(e.type, a, o || e.key, r || e.ref, null)
}
function Pt(e) {
    function t(n) {
        var o, r;
        return this.getChildContext || (o = new Set,
        (r = {})[t.__c] = this,
        this.getChildContext = function() {
            return r
        }
        ,
        this.componentWillUnmount = function() {
            o = null
        }
        ,
        this.shouldComponentUpdate = function(i) {
            this.props.value != i.value && o.forEach(function(c) {
                c.__e = !0,
                Le(c)
            })
        }
        ,
        this.sub = function(i) {
            o.add(i);
            var c = i.componentWillUnmount;
            i.componentWillUnmount = function() {
                o && o.delete(i),
                c && c.call(i)
            }
        }
        ),
        n.children
    }
    return t.__c = "__cC" + Nt++,
    t.__ = e,
    t.Provider = t.__l = (t.Consumer = function(n, o) {
        return n.children(o)
    }
    ).contextType = t,
    t
}
ce = Ct.slice,
m = {
    __e: function(e, t, n, o) {
        for (var r, i, c; t = t.__; )
            if ((r = t.__c) && !r.__)
                try {
                    if ((i = r.constructor) && i.getDerivedStateFromError != null && (r.setState(i.getDerivedStateFromError(e)),
                    c = r.__d),
                    r.componentDidCatch != null && (r.componentDidCatch(e, o || {}),
                    c = r.__d),
                    c)
                        return r.__E = r
                } catch (a) {
                    e = a
                }
        throw e
    }
},
wt = 0,
W.prototype.setState = function(e, t) {
    var n;
    n = this.__s != null && this.__s != this.state ? this.__s : this.__s = M({}, this.state),
    typeof e == "function" && (e = e(M({}, n), this.props)),
    e && M(n, e),
    e != null && this.__v && (t && this._sb.push(t),
    Le(this))
}
,
W.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0,
    e && this.__h.push(e),
    Le(this))
}
,
W.prototype.render = T,
F = [],
bt = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
$t = function(e, t) {
    return e.__v.__b - t.__v.__b
}
,
ye.__r = 0,
xt = /(PointerCapture)$|Capture$/i,
Me = 0,
Se = Je(!1),
Te = Je(!0),
Nt = 0;
var fn = 0;
function s(e, t, n, o, r, i) {
    t || (t = {});
    var c, a, u = t;
    if ("ref"in u)
        for (a in u = {},
        t)
            a == "ref" ? c = t[a] : u[a] = t[a];
    var _ = {
        type: e,
        props: u,
        key: n,
        ref: c,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: --fn,
        __i: -1,
        __u: 0,
        __source: r,
        __self: i
    };
    if (typeof e == "function" && (c = e.defaultProps))
        for (a in c)
            u[a] === void 0 && (u[a] = c[a]);
    return m.vnode && m.vnode(_),
    _
}
const pn = "modulepreload"
  , hn = function(e) {
    return "/chapter-1/" + e
}
  , Ke = {}
  , mn = function(t, n, o) {
    let r = Promise.resolve();
    if (n && n.length > 0) {
        let u = function(_) {
            return Promise.all(_.map(p => Promise.resolve(p).then(l => ({
                status: "fulfilled",
                value: l
            }), l => ({
                status: "rejected",
                reason: l
            }))))
        };
        document.getElementsByTagName("link");
        const c = document.querySelector("meta[property=csp-nonce]")
          , a = c?.nonce || c?.getAttribute("nonce");
        r = u(n.map(_ => {
            if (_ = hn(_),
            _ in Ke)
                return;
            Ke[_] = !0;
            const p = _.endsWith(".css")
              , l = p ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${_}"]${l}`))
                return;
            const f = document.createElement("link");
            if (f.rel = p ? "stylesheet" : pn,
            p || (f.as = "script"),
            f.crossOrigin = "",
            f.href = _,
            a && f.setAttribute("nonce", a),
            document.head.appendChild(f),
            p)
                return new Promise( (d, v) => {
                    f.addEventListener("load", d),
                    f.addEventListener("error", () => v(new Error(`Unable to preload CSS for ${_}`)))
                }
                )
        }
        ))
    }
    function i(c) {
        const a = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (a.payload = c,
        window.dispatchEvent(a),
        !a.defaultPrevented)
            throw c
    }
    return r.then(c => {
        for (const a of c || [])
            a.status === "rejected" && i(a.reason);
        return t().catch(i)
    }
    )
};
var R, w, Ne, Ye, K = 0, Mt = [], b = m, Ge = b.__b, Qe = b.__r, Xe = b.diffed, et = b.__c, tt = b.unmount, nt = b.__;
function Y(e, t) {
    b.__h && b.__h(w, e, K || t),
    K = 0;
    var n = w.__H || (w.__H = {
        __: [],
        __h: []
    });
    return e >= n.__.length && n.__.push({}),
    n.__[e]
}
function x(e) {
    return K = 1,
    Re(Ht, e)
}
function Re(e, t, n) {
    var o = Y(R++, 2);
    if (o.t = e,
    !o.__c && (o.__ = [n ? n(t) : Ht(void 0, t), function(a) {
        var u = o.__N ? o.__N[0] : o.__[0]
          , _ = o.t(u, a);
        u !== _ && (o.__N = [_, o.__[1]],
        o.__c.setState({}))
    }
    ],
    o.__c = w,
    !w.__f)) {
        var r = function(a, u, _) {
            if (!o.__c.__H)
                return !0;
            var p = o.__c.__H.__.filter(function(f) {
                return !!f.__c
            });
            if (p.every(function(f) {
                return !f.__N
            }))
                return !i || i.call(this, a, u, _);
            var l = o.__c.props !== a;
            return p.forEach(function(f) {
                if (f.__N) {
                    var d = f.__[0];
                    f.__ = f.__N,
                    f.__N = void 0,
                    d !== f.__[0] && (l = !0)
                }
            }),
            i && i.call(this, a, u, _) || l
        };
        w.__f = !0;
        var i = w.shouldComponentUpdate
          , c = w.componentWillUpdate;
        w.componentWillUpdate = function(a, u, _) {
            if (this.__e) {
                var p = i;
                i = void 0,
                r(a, u, _),
                i = p
            }
            c && c.call(this, a, u, _)
        }
        ,
        w.shouldComponentUpdate = r
    }
    return o.__N || o.__
}
function I(e, t) {
    var n = Y(R++, 3);
    !b.__s && He(n.__H, t) && (n.__ = e,
    n.u = t,
    w.__H.__h.push(n))
}
function le(e, t) {
    var n = Y(R++, 4);
    !b.__s && He(n.__H, t) && (n.__ = e,
    n.u = t,
    w.__h.push(n))
}
function ke(e) {
    return K = 5,
    we(function() {
        return {
            current: e
        }
    }, [])
}
function Ut(e, t, n) {
    K = 6,
    le(function() {
        if (typeof e == "function") {
            var o = e(t());
            return function() {
                e(null),
                o && typeof o == "function" && o()
            }
        }
        if (e)
            return e.current = t(),
            function() {
                return e.current = null
            }
    }, n == null ? n : n.concat(e))
}
function we(e, t) {
    var n = Y(R++, 7);
    return He(n.__H, t) && (n.__ = e(),
    n.__H = t,
    n.__h = e),
    n.__
}
function re(e, t) {
    return K = 8,
    we(function() {
        return e
    }, t)
}
function At(e) {
    var t = w.context[e.__c]
      , n = Y(R++, 9);
    return n.c = e,
    t ? (n.__ == null && (n.__ = !0,
    t.sub(w)),
    t.props.value) : e.__
}
function Ot(e, t) {
    b.useDebugValue && b.useDebugValue(t ? t(e) : e)
}
function Rt() {
    var e = Y(R++, 11);
    if (!e.__) {
        for (var t = w.__v; t !== null && !t.__m && t.__ !== null; )
            t = t.__;
        var n = t.__m || (t.__m = [0, 0]);
        e.__ = "P" + n[0] + "-" + n[1]++
    }
    return e.__
}
function vn() {
    for (var e; e = Mt.shift(); )
        if (e.__P && e.__H)
            try {
                e.__H.__h.forEach(ge),
                e.__H.__h.forEach(We),
                e.__H.__h = []
            } catch (t) {
                e.__H.__h = [],
                b.__e(t, e.__v)
            }
}
b.__b = function(e) {
    w = null,
    Ge && Ge(e)
}
,
b.__ = function(e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m),
    nt && nt(e, t)
}
,
b.__r = function(e) {
    Qe && Qe(e),
    R = 0;
    var t = (w = e.__c).__H;
    t && (Ne === w ? (t.__h = [],
    w.__h = [],
    t.__.forEach(function(n) {
        n.__N && (n.__ = n.__N),
        n.u = n.__N = void 0
    })) : (t.__h.forEach(ge),
    t.__h.forEach(We),
    t.__h = [],
    R = 0)),
    Ne = w
}
,
b.diffed = function(e) {
    Xe && Xe(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (Mt.push(t) !== 1 && Ye === b.requestAnimationFrame || ((Ye = b.requestAnimationFrame) || gn)(vn)),
    t.__H.__.forEach(function(n) {
        n.u && (n.__H = n.u),
        n.u = void 0
    })),
    Ne = w = null
}
,
b.__c = function(e, t) {
    t.some(function(n) {
        try {
            n.__h.forEach(ge),
            n.__h = n.__h.filter(function(o) {
                return !o.__ || We(o)
            })
        } catch (o) {
            t.some(function(r) {
                r.__h && (r.__h = [])
            }),
            t = [],
            b.__e(o, n.__v)
        }
    }),
    et && et(e, t)
}
,
b.unmount = function(e) {
    tt && tt(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach(function(o) {
        try {
            ge(o)
        } catch (r) {
            t = r
        }
    }),
    n.__H = void 0,
    t && b.__e(t, n.__v))
}
;
var ot = typeof requestAnimationFrame == "function";
function gn(e) {
    var t, n = function() {
        clearTimeout(o),
        ot && cancelAnimationFrame(t),
        setTimeout(e)
    }, o = setTimeout(n, 35);
    ot && (t = requestAnimationFrame(n))
}
function ge(e) {
    var t = w
      , n = e.__c;
    typeof n == "function" && (e.__c = void 0,
    n()),
    w = t
}
function We(e) {
    var t = w;
    e.__c = e.__(),
    w = t
}
function He(e, t) {
    return !e || e.length !== t.length || t.some(function(n, o) {
        return n !== e[o]
    })
}
function Ht(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Ft(e, t) {
    for (var n in t)
        e[n] = t[n];
    return e
}
function Ee(e, t) {
    for (var n in e)
        if (n !== "__source" && !(n in t))
            return !0;
    for (var o in t)
        if (o !== "__source" && e[o] !== t[o])
            return !0;
    return !1
}
function jt(e, t) {
    var n = t()
      , o = x({
        t: {
            __: n,
            u: t
        }
    })
      , r = o[0].t
      , i = o[1];
    return le(function() {
        r.__ = n,
        r.u = t,
        Ce(r) && i({
            t: r
        })
    }, [e, n, t]),
    I(function() {
        return Ce(r) && i({
            t: r
        }),
        e(function() {
            Ce(r) && i({
                t: r
            })
        })
    }, [e]),
    n
}
function Ce(e) {
    var t, n, o = e.u, r = e.__;
    try {
        var i = o();
        return !((t = r) === (n = i) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n)
    } catch {
        return !0
    }
}
function Vt(e) {
    e()
}
function Zt(e) {
    return e
}
function zt() {
    return [!1, Vt]
}
var qt = le;
function De(e, t) {
    this.props = e,
    this.context = t
}
function yn(e, t) {
    function n(r) {
        var i = this.props.ref
          , c = i == r.ref;
        return !c && i && (i.call ? i(null) : i.current = null),
        t ? !t(this.props, r) || !c : Ee(this.props, r)
    }
    function o(r) {
        return this.shouldComponentUpdate = n,
        U(e, r)
    }
    return o.displayName = "Memo(" + (e.displayName || e.name) + ")",
    o.prototype.isReactComponent = !0,
    o.__f = !0,
    o.type = e,
    o
}
(De.prototype = new W).isPureReactComponent = !0,
De.prototype.shouldComponentUpdate = function(e, t) {
    return Ee(this.props, e) || Ee(this.state, t)
}
;
var rt = m.__b;
m.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref,
    e.ref = null),
    rt && rt(e)
}
;
var kn = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function wn(e) {
    function t(n) {
        var o = Ft({}, n);
        return delete o.ref,
        e(o, n.ref || null)
    }
    return t.$$typeof = kn,
    t.render = e,
    t.prototype.isReactComponent = t.__f = !0,
    t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")",
    t
}
var it = function(e, t) {
    return e == null ? null : E(E(e).map(t))
}
  , bn = {
    map: it,
    forEach: it,
    count: function(e) {
        return e ? E(e).length : 0
    },
    only: function(e) {
        var t = E(e);
        if (t.length !== 1)
            throw "Children.only";
        return t[0]
    },
    toArray: E
}
  , $n = m.__e;
m.__e = function(e, t, n, o) {
    if (e.then) {
        for (var r, i = t; i = i.__; )
            if ((r = i.__c) && r.__c)
                return t.__e == null && (t.__e = n.__e,
                t.__k = n.__k),
                r.__c(e, t)
    }
    $n(e, t, n, o)
}
;
var st = m.unmount;
function Jt(e, t, n) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(o) {
        typeof o.__c == "function" && o.__c()
    }),
    e.__c.__H = null),
    (e = Ft({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t),
    e.__c.__e = !0,
    e.__c = null),
    e.__k = e.__k && e.__k.map(function(o) {
        return Jt(o, t, n)
    })),
    e
}
function Kt(e, t, n) {
    return e && n && (e.__v = null,
    e.__k = e.__k && e.__k.map(function(o) {
        return Kt(o, t, n)
    }),
    e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e),
    e.__c.__e = !0,
    e.__c.__P = n)),
    e
}
function ie() {
    this.__u = 0,
    this.o = null,
    this.__b = null
}
function Yt(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e)
}
function Gt(e) {
    var t, n, o;
    function r(i) {
        if (t || (t = e()).then(function(c) {
            n = c.default || c
        }, function(c) {
            o = c
        }),
        o)
            throw o;
        if (!n)
            throw t;
        return U(n, i)
    }
    return r.displayName = "Lazy",
    r.__f = !0,
    r
}
function ne() {
    this.i = null,
    this.l = null
}
m.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(),
    t && 32 & e.__u && (e.type = null),
    st && st(e)
}
,
(ie.prototype = new W).__c = function(e, t) {
    var n = t.__c
      , o = this;
    o.o == null && (o.o = []),
    o.o.push(n);
    var r = Yt(o.__v)
      , i = !1
      , c = function() {
        i || (i = !0,
        n.__R = null,
        r ? r(a) : a())
    };
    n.__R = c;
    var a = function() {
        if (!--o.__u) {
            if (o.state.__a) {
                var u = o.state.__a;
                o.__v.__k[0] = Kt(u, u.__c.__P, u.__c.__O)
            }
            var _;
            for (o.setState({
                __a: o.__b = null
            }); _ = o.o.pop(); )
                _.forceUpdate()
        }
    };
    o.__u++ || 32 & t.__u || o.setState({
        __a: o.__b = o.__v.__k[0]
    }),
    e.then(c, c)
}
,
ie.prototype.componentWillUnmount = function() {
    this.o = []
}
,
ie.prototype.render = function(e, t) {
    if (this.__b) {
        if (this.__v.__k) {
            var n = document.createElement("div")
              , o = this.__v.__k[0].__c;
            this.__v.__k[0] = Jt(this.__b, n, o.__O = o.__P)
        }
        this.__b = null
    }
    var r = t.__a && U(T, null, e.fallback);
    return r && (r.__u &= -33),
    [U(T, null, t.__a ? null : e.children), r]
}
;
var ct = function(e, t, n) {
    if (++n[1] === n[0] && e.l.delete(t),
    e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size))
        for (n = e.i; n; ) {
            for (; n.length > 3; )
                n.pop()();
            if (n[1] < n[0])
                break;
            e.i = n = n[2]
        }
};
function xn(e) {
    return this.getChildContext = function() {
        return e.context
    }
    ,
    e.children
}
function Nn(e) {
    var t = this
      , n = e.h;
    if (t.componentWillUnmount = function() {
        J(null, t.v),
        t.v = null,
        t.h = null
    }
    ,
    t.h && t.h !== n && t.componentWillUnmount(),
    !t.v) {
        for (var o = t.__v; o !== null && !o.__m && o.__ !== null; )
            o = o.__;
        t.h = n,
        t.v = {
            nodeType: 1,
            parentNode: n,
            childNodes: [],
            __k: {
                __m: o.__m
            },
            contains: function() {
                return !0
            },
            insertBefore: function(r, i) {
                this.childNodes.push(r),
                t.h.insertBefore(r, i)
            },
            removeChild: function(r) {
                this.childNodes.splice(this.childNodes.indexOf(r) >>> 1, 1),
                t.h.removeChild(r)
            }
        }
    }
    J(U(xn, {
        context: t.context
    }, e.__v), t.v)
}
function Cn(e, t) {
    var n = U(Nn, {
        __v: e,
        h: t
    });
    return n.containerInfo = t,
    n
}
(ne.prototype = new W).__a = function(e) {
    var t = this
      , n = Yt(t.__v)
      , o = t.l.get(e);
    return o[0]++,
    function(r) {
        var i = function() {
            t.props.revealOrder ? (o.push(r),
            ct(t, e, o)) : r()
        };
        n ? n(i) : i()
    }
}
,
ne.prototype.render = function(e) {
    this.i = null,
    this.l = new Map;
    var t = E(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var n = t.length; n--; )
        this.l.set(t[n], this.i = [1, 0, this.i]);
    return e.children
}
,
ne.prototype.componentDidUpdate = ne.prototype.componentDidMount = function() {
    var e = this;
    this.l.forEach(function(t, n) {
        ct(e, n, t)
    })
}
;
var Qt = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103
  , Bn = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/
  , Sn = /^on(Ani|Tra|Tou|BeforeInp|Compo)/
  , Tn = /[A-Z0-9]/g
  , Ln = typeof document < "u"
  , In = function(e) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e)
};
function Wn(e, t, n) {
    return t.__k == null && (t.textContent = ""),
    J(e, t),
    typeof n == "function" && n(),
    e ? e.__c : null
}
function En(e, t, n) {
    return Et(e, t),
    typeof n == "function" && n(),
    e ? e.__c : null
}
W.prototype.isReactComponent = {},
["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
    Object.defineProperty(W.prototype, e, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + e]
        },
        set: function(t) {
            Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: t
            })
        }
    })
});
var at = m.event;
function Dn() {}
function Pn() {
    return this.cancelBubble
}
function Mn() {
    return this.defaultPrevented
}
m.event = function(e) {
    return at && (e = at(e)),
    e.persist = Dn,
    e.isPropagationStopped = Pn,
    e.isDefaultPrevented = Mn,
    e.nativeEvent = e
}
;
var Fe, Un = {
    enumerable: !1,
    configurable: !0,
    get: function() {
        return this.class
    }
}, lt = m.vnode;
m.vnode = function(e) {
    typeof e.type == "string" && (function(t) {
        var n = t.props
          , o = t.type
          , r = {}
          , i = o.indexOf("-") === -1;
        for (var c in n) {
            var a = n[c];
            if (!(c === "value" && "defaultValue"in n && a == null || Ln && c === "children" && o === "noscript" || c === "class" || c === "className")) {
                var u = c.toLowerCase();
                c === "defaultValue" && "value"in n && n.value == null ? c = "value" : c === "download" && a === !0 ? a = "" : u === "translate" && a === "no" ? a = !1 : u[0] === "o" && u[1] === "n" ? u === "ondoubleclick" ? c = "ondblclick" : u !== "onchange" || o !== "input" && o !== "textarea" || In(n.type) ? u === "onfocus" ? c = "onfocusin" : u === "onblur" ? c = "onfocusout" : Sn.test(c) && (c = u) : u = c = "oninput" : i && Bn.test(c) ? c = c.replace(Tn, "-$&").toLowerCase() : a === null && (a = void 0),
                u === "oninput" && r[c = u] && (c = "oninputCapture"),
                r[c] = a
            }
        }
        o == "select" && r.multiple && Array.isArray(r.value) && (r.value = E(n.children).forEach(function(_) {
            _.props.selected = r.value.indexOf(_.props.value) != -1
        })),
        o == "select" && r.defaultValue != null && (r.value = E(n.children).forEach(function(_) {
            _.props.selected = r.multiple ? r.defaultValue.indexOf(_.props.value) != -1 : r.defaultValue == _.props.value
        })),
        n.class && !n.className ? (r.class = n.class,
        Object.defineProperty(r, "className", Un)) : (n.className && !n.class || n.class && n.className) && (r.class = r.className = n.className),
        t.props = r
    }
    )(e),
    e.$$typeof = Qt,
    lt && lt(e)
}
;
var _t = m.__r;
m.__r = function(e) {
    _t && _t(e),
    Fe = e.__c
}
;
var ut = m.diffed;
m.diffed = function(e) {
    ut && ut(e);
    var t = e.props
      , n = e.__e;
    n != null && e.type === "textarea" && "value"in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value),
    Fe = null
}
;
var An = {
    ReactCurrentDispatcher: {
        current: {
            readContext: function(e) {
                return Fe.__n[e.__c].props.value
            },
            useCallback: re,
            useContext: At,
            useDebugValue: Ot,
            useDeferredValue: Zt,
            useEffect: I,
            useId: Rt,
            useImperativeHandle: Ut,
            useInsertionEffect: qt,
            useLayoutEffect: le,
            useMemo: we,
            useReducer: Re,
            useRef: ke,
            useState: x,
            useSyncExternalStore: jt,
            useTransition: zt
        }
    }
};
function On(e) {
    return U.bind(null, e)
}
function be(e) {
    return !!e && e.$$typeof === Qt
}
function Rn(e) {
    return be(e) && e.type === T
}
function Hn(e) {
    return !!e && !!e.displayName && (typeof e.displayName == "string" || e.displayName instanceof String) && e.displayName.startsWith("Memo(")
}
function Fn(e) {
    return be(e) ? Dt.apply(null, arguments) : e
}
function jn(e) {
    return !!e.__k && (J(null, e),
    !0)
}
function Vn(e) {
    return e && (e.base || e.nodeType === 1 && e) || null
}
var Zn = function(e, t) {
    return e(t)
}
  , zn = function(e, t) {
    return e(t)
}
  , qn = T
  , Jn = be
  , he = {
    useState: x,
    useId: Rt,
    useReducer: Re,
    useEffect: I,
    useLayoutEffect: le,
    useInsertionEffect: qt,
    useTransition: zt,
    useDeferredValue: Zt,
    useSyncExternalStore: jt,
    startTransition: Vt,
    useRef: ke,
    useImperativeHandle: Ut,
    useMemo: we,
    useCallback: re,
    useContext: At,
    useDebugValue: Ot,
    version: "18.3.1",
    Children: bn,
    render: Wn,
    hydrate: En,
    unmountComponentAtNode: jn,
    createPortal: Cn,
    createElement: U,
    createContext: Pt,
    createFactory: On,
    cloneElement: Fn,
    createRef: an,
    Fragment: T,
    isValidElement: be,
    isElement: Jn,
    isFragment: Rn,
    isMemo: Hn,
    findDOMNode: Vn,
    Component: W,
    PureComponent: De,
    memo: yn,
    forwardRef: wn,
    flushSync: zn,
    unstable_batchedUpdates: Zn,
    StrictMode: qn,
    Suspense: ie,
    SuspenseList: ne,
    lazy: Gt,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: An
}
  , Kn = {};
function me(e, t) {
    for (var n in t)
        e[n] = t[n];
    return e
}
function Yn(e, t, n) {
    var o, r = /(?:\?([^#]*))?(#.*)?$/, i = e.match(r), c = {};
    if (i && i[1])
        for (var a = i[1].split("&"), u = 0; u < a.length; u++) {
            var _ = a[u].split("=");
            c[decodeURIComponent(_[0])] = decodeURIComponent(_.slice(1).join("="))
        }
    e = Pe(e.replace(r, "")),
    t = Pe(t || "");
    for (var p = Math.max(e.length, t.length), l = 0; l < p; l++)
        if (t[l] && t[l].charAt(0) === ":") {
            var f = t[l].replace(/(^:|[+*?]+$)/g, "")
              , d = (t[l].match(/[+*?]+$/) || Kn)[0] || ""
              , v = ~d.indexOf("+")
              , y = ~d.indexOf("*")
              , k = e[l] || "";
            if (!k && !y && (d.indexOf("?") < 0 || v)) {
                o = !1;
                break
            }
            if (c[f] = decodeURIComponent(k),
            v || y) {
                c[f] = e.slice(l).map(decodeURIComponent).join("/");
                break
            }
        } else if (t[l] !== e[l]) {
            o = !1;
            break
        }
    return (n.default === !0 || o !== !1) && c
}
function Gn(e, t) {
    return e.rank < t.rank ? 1 : e.rank > t.rank ? -1 : e.index - t.index
}
function Qn(e, t) {
    return e.index = t,
    e.rank = (function(n) {
        return n.props.default ? 0 : Pe(n.props.path).map(Xn).join("")
    }
    )(e),
    e.props
}
function Pe(e) {
    return e.replace(/(^\/+|\/+$)/g, "").split("/")
}
function Xn(e) {
    return e.charAt(0) == ":" ? 1 + "*+?".indexOf(e.charAt(e.length - 1)) || 4 : 5
}
var eo = {}
  , j = []
  , dt = []
  , S = null
  , Xt = {
    url: je()
}
  , to = Pt(Xt);
function je() {
    var e;
    return "" + ((e = S && S.location ? S.location : S && S.getCurrentLocation ? S.getCurrentLocation() : typeof location < "u" ? location : eo).pathname || "") + (e.search || "")
}
function $e(e, t) {
    return t === void 0 && (t = !1),
    typeof e != "string" && e.url && (t = e.replace,
    e = e.url),
    (function(n) {
        for (var o = j.length; o--; )
            if (j[o].canRoute(n))
                return !0;
        return !1
    }
    )(e) && (function(n, o) {
        o === void 0 && (o = "push"),
        S && S[o] ? S[o](n) : typeof history < "u" && history[o + "State"] && history[o + "State"](null, null, n)
    }
    )(e, t ? "replace" : "push"),
    en(e)
}
function en(e) {
    for (var t = !1, n = 0; n < j.length; n++)
        j[n].routeTo(e) && (t = !0);
    return t
}
function no(e) {
    if (e && e.getAttribute) {
        var t = e.getAttribute("href")
          , n = e.getAttribute("target");
        if (t && t.match(/^\//g) && (!n || n.match(/^_?self$/i)))
            return $e(t)
    }
}
function oo(e) {
    return e.stopImmediatePropagation && e.stopImmediatePropagation(),
    e.stopPropagation && e.stopPropagation(),
    e.preventDefault(),
    !1
}
function ro(e) {
    if (!(e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button)) {
        var t = e.target;
        do
            if (t.localName === "a" && t.getAttribute("href")) {
                if (t.hasAttribute("data-native") || t.hasAttribute("native"))
                    return;
                if (no(t))
                    return oo(e)
            }
        while (t = t.parentNode)
    }
}
var ft = !1;
function tn(e) {
    e.history && (S = e.history),
    this.state = {
        url: e.url || je()
    }
}
me(tn.prototype = new W, {
    shouldComponentUpdate: function(e) {
        return e.static !== !0 || e.url !== this.props.url || e.onChange !== this.props.onChange
    },
    canRoute: function(e) {
        var t = E(this.props.children);
        return this.g(t, e) !== void 0
    },
    routeTo: function(e) {
        this.setState({
            url: e
        });
        var t = this.canRoute(e);
        return this.p || this.forceUpdate(),
        t
    },
    componentWillMount: function() {
        this.p = !0
    },
    componentDidMount: function() {
        var e = this;
        ft || (ft = !0,
        S || addEventListener("popstate", function() {
            en(je())
        }),
        addEventListener("click", ro)),
        j.push(this),
        S && (this.u = S.listen(function(t) {
            var n = t.location || t;
            e.routeTo("" + (n.pathname || "") + (n.search || ""))
        })),
        this.p = !1
    },
    componentWillUnmount: function() {
        typeof this.u == "function" && this.u(),
        j.splice(j.indexOf(this), 1)
    },
    componentWillUpdate: function() {
        this.p = !0
    },
    componentDidUpdate: function() {
        this.p = !1
    },
    g: function(e, t) {
        e = e.filter(Qn).sort(Gn);
        for (var n = 0; n < e.length; n++) {
            var o = e[n]
              , r = Yn(t, o.props.path, o.props);
            if (r)
                return [o, r]
        }
    },
    render: function(e, t) {
        var n, o, r = e.onChange, i = t.url, c = this.c, a = this.g(E(e.children), i);
        if (a && (o = Dt(a[0], me(me({
            url: i,
            matches: n = a[1]
        }, n), {
            key: void 0,
            ref: void 0
        }))),
        i !== (c && c.url)) {
            me(Xt, c = this.c = {
                url: i,
                previous: c && c.url,
                current: o,
                path: o ? o.props.path : null,
                matches: n
            }),
            c.router = this,
            c.active = o ? [o] : [];
            for (var u = dt.length; u--; )
                dt[u]({});
            typeof r == "function" && r(c)
        }
        return U(to.Provider, {
            value: c
        }, o)
    }
});
const io = "_page_y30da_1"
  , so = "_oauthButtons_y30da_9"
  , co = "_startContent_y30da_19"
  , ao = "_nowkieImage_y30da_27"
  , lo = "_wave_y30da_37"
  , _o = "_storyContainer_y30da_53"
  , uo = "_slideInRight_y30da_59"
  , fo = "_slideInLeft_y30da_62"
  , po = "_buttonsContainer_y30da_65"
  , ho = "_isOauth_y30da_69"
  , mo = "_storyContent_y30da_72"
  , vo = "_button_y30da_65"
  , go = "_backButton_y30da_102"
  , yo = "_googleButton_y30da_106"
  , ko = "_terms_y30da_115"
  , $ = {
    page: io,
    oauthButtons: so,
    startContent: co,
    nowkieImage: ao,
    wave: lo,
    storyContainer: _o,
    slideInRight: uo,
    slideInLeft: fo,
    buttonsContainer: po,
    isOauth: ho,
    storyContent: mo,
    button: vo,
    backButton: go,
    googleButton: yo,
    terms: ko
};
function wo() {
    return s("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "18",
        height: "18",
        fill: "none",
        children: [s("g", {
            "clip-path": "url(#vk-clip)",
            children: [s("mask", {
                id: "vk-mask",
                width: "18",
                height: "18",
                x: "0",
                y: "0",
                maskUnits: "userSpaceOnUse",
                style: "mask-type: luminance;",
                children: s("path", {
                    fill: "#fff",
                    d: "M17.91 0H.09v18H17.91V0Z"
                })
            }), s("g", {
                mask: "url(#vk-mask)",
                children: [s("path", {
                    fill: "#07F",
                    d: "M.089 8.64c0-4.073 0-6.11 1.253-7.375C2.594 0 4.61 0 8.643 0h.713c4.033 0 6.05 0 7.302 1.265C17.91 2.531 17.91 4.567 17.91 8.64v.72c0 4.073 0 6.11-1.253 7.375C15.405 18 13.388 18 9.356 18h-.713c-4.032 0-6.049 0-7.301-1.265C.089 15.469.089 13.433.089 9.36v-.72Z"
                }), s("path", {
                    fill: "#fff",
                    d: "M9.571 12.968c-4.061 0-6.378-2.813-6.475-7.493h2.035c.067 3.435 1.567 4.89 2.755 5.19v-5.19h1.916v2.963c1.173-.128 2.405-1.478 2.821-2.963h1.916c-.32 1.83-1.656 3.18-2.606 3.735.95.45 2.473 1.628 3.052 3.758h-2.11c-.452-1.425-1.58-2.528-3.073-2.678v2.678h-.23Z"
                })]
            })]
        }), s("defs", {
            children: s("clipPath", {
                id: "vk-clip",
                children: s("path", {
                    fill: "#fff",
                    d: "M0 0h18v18H0z"
                })
            })
        })]
    })
}
function bo() {
    return s("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "18",
        height: "18",
        fill: "none",
        children: [s("g", {
            "clip-path": "url(#yandex-clip)",
            children: [s("path", {
                fill: "#fff",
                d: "M4.356 3.392h9.198v11.143H4.356V3.392Z"
            }), s("path", {
                fill: "#FC3F1D",
                d: "M9.009-.045C4.035-.045 0 3.978 0 8.923c0 4.96 4.035 8.971 9.009 8.971 4.955 0 8.99-4.011 8.99-8.971 0-4.945-4.035-8.968-8.99-8.968Zm1.164 14.298v-9.23h-.827c-1.52 0-2.317.768-2.317 1.903 0 1.293.55 1.888 1.688 2.656l.936.633-2.703 4.038H4.94l2.426-3.61C5.97 9.645 5.187 8.675 5.187 7.034c0-2.06 1.426-3.458 4.144-3.458h2.698v10.676h-1.856Z"
            })]
        }), s("defs", {
            children: s("clipPath", {
                id: "yandex-clip",
                children: s("path", {
                    fill: "#fff",
                    d: "M0 0h18v18H0z"
                })
            })
        })]
    })
}
const nn = [{
    title: "Что тут вообще происходит?",
    text: "Привет! Я снимаю новый видеоролик на YouTube, в котором каждое слово будет куплено подписчиками, и в видео я буду читать только цельный текст, который получится из этих слов."
}, {
    title: "Мы соберём цепочку из слов",
    text: "Каждый покупатель видит, какие 3 слова были куплены до него. Основываясь на них, он пишет своё слово и тем самым продолжает историю так, как он хочет. В итоге получится большой текст, состоящий из слов разных людей, который я должен буду зачитать."
}, {
    title: "Ты покупаешь билет в видео",
    text: "Чтобы каждый мог писать слово по порядку, мы сделали всё в виде билетов! Ты оплачиваешь билет стоимостью 99 ₽, который даёт тебе возможность вставить одно слово. Его можно купить только один раз."
}, {
    title: "Начинаем?",
    text: "Сперва войди в свой аккаунт!"
}]
  , $o = ({step: e}) => {
    const {title: t, text: n} = nn[e];
    return s("div", {
        className: $.storyContent,
        children: [s("h1", {
            children: t
        }), s("p", {
            children: n
        })]
    })
}
  , xo = () => {
    const [e,t] = x(0)
      , [n,o] = x("forward")
      , r = e === 0
      , i = e === nn.length - 1
      , c = () => {
        o("forward"),
        t(e + 1)
    }
      , a = () => {
        o("backward"),
        t(e - 1)
    }
    ;
    return s("div", {
        className: $.page,
        children: s("div", {
            className: $.startContent,
            children: [s("img", {
                src: "/chapter-1/eloko_moko_te_awa.webp",
                alt: "Nowkie",
                className: $.nowkieImage
            }), s("div", {
                className: $.wave,
                children: [s("hr", {}), s("span", {
                    children: "Глава I"
                }), s("hr", {})]
            }), s("div", {
                className: `${$.storyContainer} ${n === "forward" ? $.slideInRight : $.slideInLeft}`,
                children: [s($o, {
                    step: e
                }), s("div", {
                    className: `${$.buttonsContainer} ${i ? $.isOauth : ""}`,
                    children: [i && s("div", {
                        className: $.oauthButtons,
                        children: [s("button", {
                            className: `${$.button} ${$.googleButton}`,
                            onClick: u => {
                                u.preventDefault(),
                                window.location.href = "/v1/auth/vk"
                            }
                            ,
                            children: [s(wo, {}), "Войти через ВК"]
                        }), s("button", {
                            className: `${$.button} ${$.googleButton}`,
                            onClick: u => {
                                u.preventDefault(),
                                window.location.href = "/v1/auth/yandex"
                            }
                            ,
                            children: [s(bo, {}), "Войти через Яндекс"]
                        })]
                    }), !r && s("button", {
                        className: `${$.button} ${$.backButton}`,
                        onClick: a,
                        children: "Назад"
                    }), !i && s("button", {
                        className: $.button,
                        onClick: c,
                        children: "Дальше"
                    })]
                }), i && s("p", {
                    className: $.terms,
                    children: ["Входя в аккаунт, вы соглашаетесь с ", s("a", {
                        href: "/offer.html",
                        target: "_blank",
                        children: "публичной офертой"
                    }), " и ", s("a", {
                        href: "/privacy.html",
                        target: "_blank",
                        children: "политикой конфиденциальности"
                    })]
                })]
            }, e)]
        })
    })
}
  , No = "_page_2nu1j_1"
  , Co = {
    page: No
}
  , pt = e => {
    let t;
    const n = new Set
      , o = (_, p) => {
        const l = typeof _ == "function" ? _(t) : _;
        if (!Object.is(l, t)) {
            const f = t;
            t = p ?? (typeof l != "object" || l === null) ? l : Object.assign({}, t, l),
            n.forEach(d => d(t, f))
        }
    }
      , r = () => t
      , a = {
        setState: o,
        getState: r,
        getInitialState: () => u,
        subscribe: _ => (n.add(_),
        () => n.delete(_))
    }
      , u = t = e(o, r, a);
    return a
}
  , Bo = (e => e ? pt(e) : pt)
  , So = e => e;
function To(e, t=So) {
    const n = he.useSyncExternalStore(e.subscribe, he.useCallback( () => t(e.getState()), [e, t]), he.useCallback( () => t(e.getInitialState()), [e, t]));
    return he.useDebugValue(n),
    n
}
const ht = e => {
    const t = Bo(e)
      , n = o => To(t, o);
    return Object.assign(n, t),
    n
}
  , Ve = (e => e ? ht(e) : ht)
  , on = Ve(e => ({
    isPhone: window.matchMedia("(max-width: 768px)").matches,
    setIsPhone: t => e({
        isPhone: t
    })
}));
if (typeof window < "u") {
    const e = window.matchMedia("(max-width: 768px)")
      , t = n => {
        on.setState({
            isPhone: n.matches
        })
    }
    ;
    e.addEventListener("change", t),
    t(e)
}
const rn = e => {
    const n = `; ${document.cookie}`.split(`; ${e}=`);
    return n.length === 2 && n.pop()?.split(";").shift() || null
}
  , ve = e => {
    document.cookie = `${e}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}
  , _e = ""
  , A = Ve(e => ({
    isAuthenticated: !1,
    isLoading: !0,
    user: null,
    checkAuth: async () => {
        try {
            if (e({
                isLoading: !0
            }),
            rn("is_auth") === "true") {
                const n = await fetch(`${_e}/v1/user`, {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (n.ok) {
                    const o = await n.json();
                    e({
                        isAuthenticated: !0,
                        user: o,
                        isLoading: !1
                    });
                    return
                } else
                    n.status === 401 && (ve("is_auth"),
                    ve("token"))
            }
            e({
                isAuthenticated: !1,
                user: null,
                isLoading: !1
            })
        } catch (t) {
            console.error("Auth check failed:", t),
            e({
                isAuthenticated: !1,
                user: null,
                isLoading: !1
            })
        }
    }
    ,
    logout: () => {
        ve("is_auth"),
        ve("token"),
        e({
            isAuthenticated: !1,
            user: null
        })
    }
    ,
    setUser: t => {
        e({
            isAuthenticated: !0,
            user: t
        })
    }
}));
function Lo() {
    return s("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24",
        children: s("g", {
            stroke: "#fff",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            children: s("path", {
                d: "m16 17 5-5-5-5M21 12H9M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
            })
        })
    })
}
function Io() {
    return s("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24",
        children: s("path", {
            stroke: "#fff",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M4 6h16M4 12h16M4 18h16"
        })
    })
}
function Wo() {
    return s("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24",
        children: s("path", {
            stroke: "#fff",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M18 6L6 18M6 6l12 12"
        })
    })
}
const Eo = "_topAside_1mhh9_1"
  , Do = "_ticketsList_1mhh9_13"
  , Po = "_profileWidget_1mhh9_30"
  , Mo = "_profileLeft_1mhh9_42"
  , Uo = "_profileData_1mhh9_54"
  , Ao = "_profileName_1mhh9_59"
  , Oo = "_profileEmail_1mhh9_63"
  , Ro = "_logoutButton_1mhh9_67"
  , Ho = "_hamburgerButton_1mhh9_83"
  , Fo = "_sidebarOpen_1mhh9_122"
  , P = {
    topAside: Eo,
    ticketsList: Do,
    profileWidget: Po,
    profileLeft: Mo,
    profileData: Uo,
    profileName: Ao,
    profileEmail: Oo,
    logoutButton: Ro,
    hamburgerButton: Ho,
    sidebarOpen: Fo
}
  , jo = () => {
    const {user: e} = A()
      , t = e?.tickets_count ?? 0;
    return s("div", {
        className: P.ticketsList,
        children: [s("span", {
            children: ["Билетов: ", t]
        }), s("img", {
            src: "/chapter-1/ezali_ofele.webp",
            alt: "Ticket",
            width: 33,
            height: 16
        })]
    })
}
  , Vo = () => {
    const {user: e, logout: t} = A()
      , n = () => {
        t(),
        $e("/", !0)
    }
    ;
    return s("div", {
        className: P.profileWidget,
        children: [s("div", {
            className: P.profileLeft,
            children: [s("img", {
                src: e?.avatar_url || "/chapter-1/nowkie.webp",
                alt: "Avatar",
                width: 84,
                height: 84
            }), s("div", {
                className: P.profileData,
                children: [s("span", {
                    className: P.profileName,
                    children: e?.display_name || "Пользователь"
                }), s("span", {
                    className: P.profileEmail,
                    children: e?.email || ""
                })]
            })]
        }), s("button", {
            className: P.logoutButton,
            onClick: n,
            children: s(Lo, {})
        })]
    })
}
;
function Zo({isPhone: e}) {
    const [t,n] = x(!1)
      , o = () => {
        n(!t)
    }
      , r = i => {
        i.target === i.currentTarget && e && n(!1)
    }
    ;
    return s(T, {
        children: [e && s("button", {
            className: P.hamburgerButton,
            onClick: o,
            children: t ? s(Wo, {}) : s(Io, {})
        }), s("div", {
            className: `${P.topAside} ${e && t ? P.sidebarOpen : ""}`,
            onClick: e ? r : void 0,
            children: [s(jo, {}), s(Vo, {})]
        })]
    })
}
const zo = "_lastWordContainer_ufri1_1"
  , qo = "_lastWordList_ufri1_16"
  , Jo = "_lastWordItem_ufri1_22"
  , Ko = "_firstItem_ufri1_33"
  , Yo = "_lastItem_ufri1_36"
  , Go = "_word_ufri1_71"
  , Qo = "_noWords_ufri1_80"
  , Xo = "_date_ufri1_85"
  , O = {
    lastWordContainer: zo,
    lastWordList: qo,
    lastWordItem: Jo,
    firstItem: Ko,
    lastItem: Yo,
    word: Go,
    noWords: Qo,
    date: Xo
}
  , B = Ve(e => ({
    words: [],
    buttonState: {
        canWriteWord: !1,
        lockedUntil: 0
    },
    isInitialized: !1,
    onlineCount: 0,
    moderationResult: null,
    setWords: t => e({
        words: t
    }),
    addWord: t => e(n => ({
        words: [t, ...n.words].slice(0, 4)
    })),
    removeWord: (t, n) => e(o => {
        let r = o.words.filter(i => i.word.toLowerCase() !== t.toLowerCase());
        return n && (r = [...r, n]),
        {
            words: r.slice(0, 4)
        }
    }
    ),
    updateButtonState: t => e(n => {
        const o = t.duration > 0 ? Date.now() + t.duration : 0;
        return {
            buttonState: {
                canWriteWord: t.can_write_word,
                lockedUntil: o
            },
            onlineCount: t.online !== void 0 ? t.online : n.onlineCount
        }
    }
    ),
    setInitialized: t => e({
        isInitialized: t
    }),
    setOnlineCount: t => e({
        onlineCount: t
    }),
    setModerationResult: t => e({
        moderationResult: t
    })
}))
  , mt = e => {
    const n = Date.now() - e.getTime()
      , o = Math.floor(n / 1e3)
      , r = Math.floor(o / 60)
      , i = Math.floor(r / 60)
      , c = Math.floor(i / 24);
    if (o < 60)
        return {
            text: `${o} секунд назад`,
            nextUpdate: 1e3 - n % 1e3
        };
    if (r < 60) {
        const a = `${r} минут${r === 1 ? "у" : r < 5 ? "ы" : ""} назад`
          , u = 6e4 - n % 6e4;
        return {
            text: a,
            nextUpdate: u
        }
    } else if (i < 24) {
        const a = `${i} час${i === 1 ? "" : i < 5 ? "а" : "ов"} назад`
          , u = 36e5 - n % 36e5;
        return {
            text: a,
            nextUpdate: u
        }
    } else if (c < 7) {
        const a = `${c} ${c === 1 ? "день" : c < 5 ? "дня" : "дней"} назад`
          , u = 864e5 - n % 864e5;
        return {
            text: a,
            nextUpdate: u
        }
    }
    return {
        text: e.toLocaleDateString("ru-RU"),
        nextUpdate: -1
    }
}
  , er = ({date: e, className: t}) => {
    const n = typeof e == "string" ? new Date(e) : e
      , [o,r] = x( () => mt(n))
      , i = ke(null);
    return I( () => {
        const c = () => {
            const a = mt(n);
            r(a),
            a.nextUpdate > 0 && (i.current = setTimeout(c, a.nextUpdate))
        }
        ;
        return o.nextUpdate > 0 && (i.current = setTimeout(c, o.nextUpdate)),
        () => {
            i.current && clearTimeout(i.current)
        }
    }
    , [n.getTime()]),
    s("span", {
        className: t,
        children: o.text
    })
}
;
function tr() {
    const e = B(t => t.words);
    return s("div", {
        className: O.lastWordContainer,
        children: [s("h2", {
            children: "Последние слова"
        }), s("div", {
            className: O.lastWordList,
            children: [e.length === 0 && s("div", {
                className: O.lastWordItem,
                children: s("span", {
                    className: O.noWords,
                    children: "Еще нет ни одного слова"
                })
            }), e.map( (t, n) => {
                const o = n === 0
                  , r = n === 3;
                return s("div", {
                    className: `${O.lastWordItem} ${o ? O.firstItem : ""} ${r ? O.lastItem : ""}`,
                    children: [s("span", {
                        className: O.word,
                        children: t.word
                    }), s(er, {
                        date: t.timestamp,
                        className: O.date
                    })]
                }, t.id)
            }
            )]
        })]
    })
}
const nr = "_nowkieLogo_pt2rt_1"
  , or = {
    nowkieLogo: nr
}
  , rr = () => s("div", {
    className: or.nowkieLogo,
    children: [s("img", {
        src: "/chapter-1/eloko_moko_te_awa.webp",
        alt: "Nowkie Logo"
    }), " Nowkie"]
})
  , ir = "_ticketsBox_1e1kc_19"
  , sr = "_progressBlock_1e1kc_32"
  , cr = "_progressBar_1e1kc_43"
  , ar = "_progressBarInner_1e1kc_51"
  , lr = "_lastWords_1e1kc_66"
  , _r = "_group_1e1kc_69"
  , ur = "_input_1e1kc_79"
  , H = {
    ticketsBox: ir,
    progressBlock: sr,
    progressBar: cr,
    progressBarInner: ar,
    lastWords: lr,
    group: _r,
    input: ur
};
function ue({size: e=48, color: t="#fff"}) {
    return s("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: e,
        height: e,
        viewBox: "0 0 48 48",
        fill: "none",
        children: [s("path", {
            fill: t,
            fillOpacity: ".1",
            d: "M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0s24 10.745 24 24ZM6 24c0 9.941 8.059 18 18 18s18-8.059 18-18S33.941 6 24 6 6 14.059 6 24Z"
        }), s("path", {
            fill: t,
            d: "M48 24a24 24 0 1 0-24 24v-6a18 18 0 1 1 18-18h6Z"
        })]
    })
}
const dr = "_button_io9ud_1"
  , fr = "_loader_io9ud_29"
  , vt = {
    button: dr,
    loader: fr
};
function V({children: e, onClick: t, disabled: n, isLoading: o}) {
    return s("button", {
        className: vt.button,
        onClick: t,
        disabled: n,
        children: o ? s("div", {
            className: vt.loader,
            children: s(ue, {
                size: 20
            })
        }) : e
    })
}
const pr = ({onWordEntered: e, lockDuration: t}) => {
    const [n,o] = x(!1)
      , [r,i] = x(Math.ceil(t / 1e3))
      , [c,a] = x("")
      , [u,_] = x(null)
      , [p,l] = x(!1)
      , {user: f, setUser: d} = A()
      , v = B(h => h.words)
      , [y] = x( () => Date.now() + t);
    I( () => {
        const h = setInterval( () => {
            const g = Date.now()
              , C = Math.max(0, Math.ceil((y - g) / 1e3));
            i(C),
            C <= 0 && clearInterval(h)
        }
        , 100);
        return () => clearInterval(h)
    }
    , [y]);
    const k = async () => {
        const h = c.trim().toLowerCase();
        if (!h) {
            _("Введите слово");
            return
        }
        if (!/^[а-яА-ЯёЁ]+$/.test(h)) {
            _("Разрешены только русские буквы, без цифр и символов");
            return
        }
        if (h.length > 14) {
            _("Слово должно быть не длиннее 14 символов");
            return
        }
        l(!0);
        try {
            const g = await fetch(`${_e}/v1/word`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    word: h
                })
            });
            if (g.ok) {
                const C = await g.json();
                if (f) {
                    const L = {
                        is_writing_word: !1
                    };
                    typeof C.new_ticket_count == "number" && (L.tickets_count = C.new_ticket_count),
                    C.word && (L.word = C.word),
                    d({
                        ...f,
                        ...L
                    })
                }
                e(h)
            } else
                _("Произошла ошибка, попробуйте позже")
        } catch (g) {
            console.error(g),
            _("Произошла ошибка, попробуйте позже")
        } finally {
            l(!1)
        }
    }
    ;
    return s("div", {
        className: H.ticketsBox,
        children: [s("h1", {
            children: "Твоя очередь!"
        }), v.length > 0 ? s("p", {
            children: ["Придумай слово, которое продолжит смысл: ", s("span", {
                className: H.lastWords,
                children: v.slice(0, 3).reverse().map(h => h.word).join(" ")
            })]
        }) : s("p", {
            children: "Ого! Вам достался шанс написать первое слово. Поздравляем!"
        }), s("div", {
            className: H.group,
            children: [s("label", {
                htmlFor: "word",
                children: "Введите слово:"
            }), s("input", {
                className: H.input,
                type: "text",
                placeholder: n ? "" : "Отвертка",
                id: "word",
                autoComplete: "off",
                value: c,
                onInput: h => {
                    a(h.currentTarget.value),
                    _(null)
                }
                ,
                onFocus: () => o(!0),
                onBlur: () => o(!1),
                onKeyDown: h => {
                    h.key === "Enter" && k()
                }
            }), u && s("div", {
                style: {
                    color: "#ff6b6b",
                    fontSize: "14px",
                    textAlign: "left"
                },
                children: u
            })]
        }), s(V, {
            onClick: k,
            isLoading: p,
            disabled: p,
            children: "Ввести слово"
        }), s("div", {
            className: H.progressBlock,
            children: r > 0 ? s(T, {
                children: [s("div", {
                    className: H.progressBar,
                    children: s("div", {
                        className: H.progressBarInner,
                        style: {
                            animationDuration: `${t}ms`
                        }
                    })
                }), "Осталось ", r, " ", r === 1 ? "секунда" : r > 1 && r < 5 ? "секунды" : "секунд"]
            }) : s("div", {
                style: {
                    color: "rgba(255, 255, 255, 0.7)"
                },
                children: "Пытаемся разблокировать кнопку..."
            })
        })]
    })
}
  , hr = "_ticketsBox_jjrk9_1"
  , mr = "_ticketsBoxTop_jjrk9_17"
  , gt = {
    ticketsBox: hr,
    ticketsBoxTop: mr
}
  , vr = () => {
    const [e,t] = x(!1)
      , n = async () => {
        try {
            t(!0);
            const r = await (await fetch(`${_e}/v1/pay`, {
                method: "POST",
                credentials: "include"
            })).json();
            r.payment_url && (window.location.href = r.payment_url)
        } catch (o) {
            t(!1),
            console.error(o)
        }
    }
    ;
    return s("div", {
        className: gt.ticketsBox,
        children: [s("div", {
            className: gt.ticketsBoxTop,
            children: [s("h1", {
                children: "Покупка билета"
            }), s("p", {
                children: ["Чтобы ввести слово, нужен один билет.", s("br", {}), s("br", {}), "Как только билет появится — откроется кнопка для ввода слова."]
            })]
        }), s(V, {
            onClick: n,
            disabled: e,
            isLoading: e,
            children: ["Купить 1 билет ", s("img", {
                src: "/chapter-1/ezali_ofele.webp",
                alt: "Ticket",
                width: 33,
                height: 16
            })]
        })]
    })
}
  , gr = "_ticketsBox_12dvq_1"
  , yr = "_ticketsBoxTop_12dvq_17"
  , kr = "_fakeButton_12dvq_33"
  , Be = {
    ticketsBox: gr,
    ticketsBoxTop: yr,
    fakeButton: kr
}
  , wr = e => {
    const t = e % 10
      , n = e % 100;
    return t === 1 && n !== 11 ? "человек пытается" : [2, 3, 4].includes(t) && ![12, 13, 14].includes(n) ? "человека пытаются" : "человек пытаются"
}
  , br = () => {
    const e = B(i => i.buttonState.lockedUntil)
      , [t,n] = x(Date.now());
    I( () => {
        const i = setInterval( () => {
            n(Date.now())
        }
        , 100);
        return () => clearInterval(i)
    }
    , []);
    const o = Math.max(0, e - t)
      , r = Math.ceil(o / 1e3);
    return r <= 0 ? s(V, {
        disabled: !0,
        children: "Кнопка скоро освободится..."
    }) : s(V, {
        disabled: !0,
        children: ["Кнопка освободится через ", r, "с"]
    })
}
  , $r = ({onStartWriting: e}) => {
    const n = B(_ => _.buttonState.canWriteWord)
      , o = B(_ => _.isInitialized)
      , r = B(_ => _.onlineCount)
      , [i,c] = x(!1)
      , a = async () => {
        if (!i) {
            c(!0);
            try {
                const _ = await fetch(`${_e}/v1/word/lock`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    credentials: "include"
                });
                if (_.ok) {
                    const p = await _.json();
                    p.success ? e(p.duration) : c(!1)
                } else
                    c(!1)
            } catch (_) {
                console.error(_),
                c(!1)
            }
        }
    }
      , u = () => n ? s(V, {
        disabled: i,
        isLoading: i,
        onClick: a,
        children: ["Ввести слово за 1 ", s("img", {
            src: "/chapter-1/ezali_ofele.webp",
            alt: "Ticket",
            width: 33,
            height: 16
        })]
    }) : s(br, {});
    return s("div", {
        className: Be.ticketsBox,
        children: [s("div", {
            className: Be.ticketsBoxTop,
            children: [s("h1", {
                children: "Ураа, есть билет!"
            }), s("p", {
                children: ["Прямо сейчас ", s("b", {
                    children: r
                }), " ", wr(r), " выловить кнопку.", s("br", {}), s("br", {}), "Если успеешь нажать — у тебя будет 60 секунд, чтобы придумать слово в продолжение трёх прошлых."]
            })]
        }), o ? s(u, {}) : s("div", {
            className: Be.fakeButton,
            children: s(ue, {
                size: 20
            })
        })]
    })
}
  , xr = "_ticketsBox_yk6nu_1"
  , Nr = "_pending_yk6nu_17"
  , Cr = "_ticketsBoxTop_yk6nu_20"
  , Br = "_ticketsBoxData_yk6nu_26"
  , Sr = "_icon_yk6nu_34"
  , Tr = "_fakeButton_yk6nu_47"
  , z = {
    ticketsBox: xr,
    pending: Nr,
    ticketsBoxTop: Cr,
    ticketsBoxData: Br,
    icon: Sr,
    fakeButton: Tr
};
function Lr({size: e=150}) {
    return s("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: e,
        height: e,
        viewBox: "0 0 150 150",
        fill: "none",
        children: s("path", {
            fill: "#FFFF70",
            d: "M75 0c41.424 0 75 33.576 75 75 0 41.416-33.576 75-75 75S0 116.416 0 75C0 33.576 33.576 0 75 0Zm0 39a4.502 4.502 0 0 0-4.5 4.5c0 2.484 2.016 4.5 4.5 4.5 14.88 0 27 12.114 27 27s-12.114 27-27 27a4.502 4.502 0 0 0-4.5 4.5c0 2.484 2.016 4.5 4.5 4.5 19.854 0 36-16.146 36-36S94.848 39 75 39ZM61.499 98.382a4.505 4.505 0 0 0-6.15 1.65 4.505 4.505 0 0 0 1.65 6.15 4.505 4.505 0 0 0 6.15-1.65 4.505 4.505 0 0 0-1.65-6.15Zm-9.88-9.882a4.504 4.504 0 0 0-7.802 4.5 4.496 4.496 0 0 0 6.15 1.644 4.498 4.498 0 0 0 1.651-6.144ZM75.007 54a4.502 4.502 0 0 0-4.5 4.5V75c0 1.296.558 2.526 1.536 3.384l12 10.5A4.462 4.462 0 0 0 87.002 90h.006a4.495 4.495 0 0 0 2.964-7.884L79.508 72.96V58.5c0-2.484-2.016-4.5-4.5-4.5ZM43.5 70.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm6.468-15.15a4.504 4.504 0 0 0-6.15 1.65 4.497 4.497 0 0 0 1.65 6.145 4.508 4.508 0 0 0 6.15-1.645 4.504 4.504 0 0 0-1.65-6.15Zm13.181-9.875a4.503 4.503 0 0 0-7.8 4.5 4.496 4.496 0 0 0 6.15 1.643 4.497 4.497 0 0 0 1.65-6.143Z"
        })
    })
}
const Ir = () => s("div", {
    className: `${z.ticketsBox} ${z.pending}`,
    children: [s("div", {
        className: z.ticketsBoxTop,
        children: [s("div", {
            className: z.icon,
            children: s(Lr, {})
        }), s("div", {
            className: z.ticketsBoxData,
            children: [s("h1", {
                children: "Модерируем слово..."
            }), s("p", {
                children: "Обычно занимает несколько секунд"
            })]
        })]
    }), s("div", {
        className: z.fakeButton,
        children: s(ue, {
            size: 20
        })
    })]
});
function Wr({size: e=150}) {
    return s("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: e,
        height: e,
        viewBox: "0 0 150 150",
        fill: "none",
        children: s("path", {
            fill: "#A0E633",
            d: "M75 0c41.424 0 75 33.576 75 75 0 41.416-33.576 75-75 75S0 116.416 0 75C0 33.576 33.576 0 75 0Zm31.853 53.196a4 4 0 0 0-5.657-.048L65.338 88.392 48.804 72.147a4 4 0 0 0-5.608 5.706l19.34 19a4 4 0 0 0 5.607 0l38.661-38a4 4 0 0 0 .049-5.657Z"
        })
    })
}
const Er = "_ticketsBox_1hi2m_1"
  , Dr = "_success_1hi2m_17"
  , Pr = "_ticketsBoxTop_1hi2m_20"
  , Mr = "_ticketsBoxData_1hi2m_26"
  , Ur = "_icon_1hi2m_34"
  , X = {
    ticketsBox: Er,
    success: Dr,
    ticketsBoxTop: Pr,
    ticketsBoxData: Mr,
    icon: Ur
}
  , Ar = ({onReturnToHome: e}) => s("div", {
    className: `${X.ticketsBox} ${X.success}`,
    children: [s("div", {
        className: X.ticketsBoxTop,
        children: [s("div", {
            className: X.icon,
            children: s(Wr, {})
        }), s("div", {
            className: X.ticketsBoxData,
            children: [s("h1", {
                children: "Слово принято!"
            }), s("p", {
                children: ["Твое слово прошло предварительную модерацию и будет использовано в следующем ролике на YouTube. Но мы его еще промодерируем.", s("br", {})]
            })]
        })]
    }), s(V, {
        onClick: e,
        children: "Вернуться на главную"
    })]
})
  , Or = "_ticketsBox_1y3cd_1"
  , Rr = "_approved_1y3cd_15"
  , Hr = "_position1_1y3cd_18"
  , Fr = "_wordDisplay_1y3cd_21"
  , jr = "_positionBadge_1y3cd_25"
  , Vr = "_position2_100_1y3cd_29"
  , Zr = "_position101_500_1y3cd_40"
  , zr = "_position501_1000_1y3cd_51"
  , qr = "_ticketsBoxTop_1y3cd_62"
  , Jr = "_wordContainer_1y3cd_88"
  , Kr = "_wordLabel_1y3cd_94"
  , Yr = "_word_1y3cd_21"
  , Gr = "_positionInfo_1y3cd_107"
  , Qr = "_statsText_1y3cd_124"
  , Xr = "_statsNumber_1y3cd_128"
  , N = {
    ticketsBox: Or,
    approved: Rr,
    position1: Hr,
    wordDisplay: Fr,
    positionBadge: jr,
    position2_100: Vr,
    position101_500: Zr,
    position501_1000: zr,
    ticketsBoxTop: qr,
    wordContainer: Jr,
    wordLabel: Kr,
    word: Yr,
    positionInfo: Gr,
    statsText: Qr,
    statsNumber: Xr
}
  , ei = () => {
    const e = A(i => i.user)
      , t = e?.word?.word
      , n = e?.word?.position
      , o = e?.total_approved_words
      , r = () => n === void 0 ? N.approved : n === 1 ? N.position1 : n >= 2 && n <= 100 ? N.position2_100 : n >= 101 && n <= 500 ? N.position101_500 : n >= 501 && n <= 1e3 ? N.position501_1000 : N.approved;
    return s("div", {
        className: `${N.ticketsBox} ${r()}`,
        children: s("div", {
            className: N.ticketsBoxTop,
            children: [s("h1", {
                children: "Ты в истории! 🏆"
            }), t && s("div", {
                className: N.wordDisplay,
                children: [s("div", {
                    className: N.wordContainer,
                    children: [s("p", {
                        className: N.wordLabel,
                        children: "Твое слово:"
                    }), s("p", {
                        className: N.word,
                        children: t
                    })]
                }), n !== void 0 && s("div", {
                    className: N.positionInfo,
                    children: [s("span", {
                        className: N.positionBadge,
                        children: ["Ты был(а) ", s("b", {
                            children: n
                        }), "-м"]
                    }), o !== void 0 && o > 0 && s("div", {
                        className: N.statsInfo,
                        children: s("p", {
                            className: N.statsText,
                            children: ["Всего слов: ", s("span", {
                                className: N.statsNumber,
                                children: o
                            })]
                        })
                    })]
                })]
            }), s("p", {
                children: "Твое слово успешно прошло модерацию и принято в работу. Теперь ты официально часть следующего ролика. Спасибо, что поддерживаешь контент!"
            })]
        })
    })
}
;
function ti({size: e=150}) {
    return s("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: e,
        height: e,
        viewBox: "0 0 150 150",
        fill: "none",
        children: s("path", {
            fill: "#FF5050",
            d: "M75 0c41.424 0 75 33.576 75 75 0 41.416-33.576 75-75 75S0 116.416 0 75C0 33.576 33.576 0 75 0Zm20.828 54.172a4 4 0 0 0-5.656 0L75 69.344 59.828 54.172a4 4 0 1 0-5.656 5.656L69.344 75 54.172 90.172a4 4 0 1 0 5.656 5.656L75 80.656l15.172 15.172a4 4 0 1 0 5.656-5.656L80.656 75l15.172-15.172a4 4 0 0 0 0-5.656Z"
        })
    })
}
const ni = "_ticketsBox_165ln_1"
  , oi = "_declined_165ln_17"
  , ri = "_ticketsBoxTop_165ln_20"
  , ii = "_ticketsBoxData_165ln_26"
  , si = "_icon_165ln_34"
  , ee = {
    ticketsBox: ni,
    declined: oi,
    ticketsBoxTop: ri,
    ticketsBoxData: ii,
    icon: si
}
  , ci = ({onReturnToHome: e}) => s("div", {
    className: `${ee.ticketsBox} ${ee.declined}`,
    children: [s("div", {
        className: ee.ticketsBoxTop,
        children: [s("div", {
            className: ee.icon,
            children: s(ti, {})
        }), s("div", {
            className: ee.ticketsBoxData,
            children: [s("h1", {
                children: "Слово отклонено!"
            }), s("p", {
                children: ["Слишком плохое слово, мы не можем такое одобрить.", s("br", {}), s("br", {}), "Ограничили тебя на 15 минут, затем сможешь сделать еще одну попытку."]
            })]
        })]
    }), s(V, {
        onClick: e,
        children: "Ок, понятно"
    })]
})
  , ai = ({mode: e, hasTicket: t, hasApprovedWord: n, lockDuration: o, onStartWriting: r, onWordEntered: i, onReturnToOverview: c}) => e === "overview" ? t ? n ? s(ei, {}) : s($r, {
    onStartWriting: r
}) : s(vr, {}) : e === "writing" && !n ? s(pr, {
    lockDuration: o,
    onWordEntered: i
}) : e === "pending" && !n ? s(Ir, {}) : e === "success" ? s(Ar, {
    onReturnToHome: c
}) : e === "declined" && !n ? s(ci, {
    onReturnToHome: c
}) : null
  , li = `${_e}/v1/stream`
  , _i = () => {
    const e = B(a => a.setWords)
      , t = B(a => a.addWord)
      , n = B(a => a.removeWord)
      , o = B(a => a.updateButtonState)
      , r = B(a => a.setInitialized)
      , i = B(a => a.setOnlineCount)
      , c = B(a => a.setModerationResult);
    I( () => {
        let a = 0
          , u = null
          , _ = null
          , p = !1;
        const l = () => {
            p || (u && u.close(),
            u = new EventSource(li,{
                withCredentials: !0
            }),
            u.addEventListener("connection", f => {
                try {
                    const d = JSON.parse(f.data);
                    if (d.server_time && (a = Date.now() - d.server_time),
                    d.words && Array.isArray(d.words)) {
                        const v = d.words.map( (y, k) => {
                            const h = new Date(y.moderatedAt).getTime()
                              , g = new Date(h + a);
                            return {
                                id: `${h}-${k}`,
                                word: y.word,
                                timestamp: g
                            }
                        }
                        );
                        e(v)
                    }
                    o(d),
                    r(!0)
                } catch {}
            }
            ),
            u.addEventListener("online", f => {
                try {
                    const d = JSON.parse(f.data);
                    i(d.count)
                } catch {}
            }
            ),
            u.addEventListener("moderation", f => {
                try {
                    const d = JSON.parse(f.data);
                    c({
                        success: d.success
                    });
                    const v = A.getState().user;
                    if (v) {
                        const y = {};
                        typeof d.new_ticket_count == "number" && (y.tickets_count = d.new_ticket_count),
                        typeof d.total_approved_words == "number" && (y.total_approved_words = d.total_approved_words),
                        d.success && v.word ? y.word = {
                            ...v.word,
                            status: "APPROVED",
                            position: d.position
                        } : !d.success && v.word && (y.word = {
                            ...v.word,
                            status: "DECLINED"
                        }),
                        Object.keys(y).length > 0 && A.getState().setUser({
                            ...v,
                            ...y
                        })
                    }
                } catch {}
            }
            ),
            u.addEventListener("duration", f => {
                try {
                    const d = JSON.parse(f.data);
                    o({
                        can_write_word: !1,
                        duration: d.duration
                    })
                } catch {}
            }
            ),
            u.addEventListener("slot_locked", f => {
                try {
                    const d = JSON.parse(f.data);
                    o({
                        can_write_word: !1,
                        duration: d.duration
                    })
                } catch {}
            }
            ),
            u.addEventListener("slot_unlocked", f => {
                try {
                    o({
                        can_write_word: !0,
                        duration: 0
                    })
                } catch {}
            }
            ),
            u.addEventListener("new_word", f => {
                try {
                    const d = JSON.parse(f.data)
                      , v = new Date(d.moderatedAt).getTime()
                      , y = new Date(v + a);
                    t({
                        id: Date.now().toString(),
                        word: d.word,
                        timestamp: y
                    })
                } catch {}
            }
            ),
            u.addEventListener("word_removed", f => {
                try {
                    const d = JSON.parse(f.data);
                    let v;
                    if (d.replacement) {
                        const y = new Date(d.replacement.moderatedAt).getTime()
                          , k = new Date(y + a);
                        v = {
                            id: `replacement-${Date.now()}`,
                            word: d.replacement.word,
                            timestamp: k
                        }
                    }
                    n(d.word, v)
                } catch {}
            }
            ),
            u.onmessage = f => {
                try {
                    const d = JSON.parse(f.data);
                    d.type === "connected" && console.log("SSE connection established:", d.message)
                } catch (d) {
                    console.error("Error parsing SSE message:", d)
                }
            }
            ,
            u.onerror = f => {
                console.error("SSE error:", f),
                u && u.close(),
                p || (_ = window.setTimeout( () => {
                    l()
                }
                , 3e3))
            }
            )
        }
        ;
        return l(),
        () => {
            p = !0,
            _ && clearTimeout(_),
            u && u.close()
        }
    }
    , [t, n, o, r, i, e])
}
  , ui = () => {
    const {user: e, setUser: t} = A()
      , n = B(d => d.moderationResult)
      , o = B(d => d.setModerationResult)
      , r = B(d => d.buttonState)
      , [i,c] = x("overview")
      , [a,u] = x(60)
      , _ = ke(r.canWriteWord);
    I( () => {
        i === "pending" && n && (c(n.success ? "success" : "declined"),
        o(null))
    }
    , [i, n, o]),
    I( () => {
        e?.is_writing_word && i === "overview" && (u(e.writing_word_time_left),
        c("writing"))
    }
    , [e, i]),
    I( () => {
        !_.current && r.canWriteWord && i === "writing" && (c("overview"),
        e && t({
            ...e,
            is_writing_word: !1
        })),
        _.current = r.canWriteWord
    }
    , [r.canWriteWord, i, e, t]);
    const p = re(d => {
        u(d),
        c("writing")
    }
    , [])
      , l = re( () => {
        c("pending")
    }
    , [])
      , f = re( () => {
        c("overview")
    }
    , []);
    return {
        mode: i,
        lockDuration: a,
        startWriting: p,
        handleWordEntered: l,
        returnToOverview: f
    }
}
  , di = () => {
    _i();
    const e = on(_ => _.isPhone)
      , t = A(_ => _.user)
      , {mode: n, lockDuration: o, startWriting: r, handleWordEntered: i, returnToOverview: c} = ui();
    if (!t)
        return null;
    const a = t.word?.status === "APPROVED"
      , u = t.tickets_count > 0 || a;
    return s("div", {
        className: Co.page,
        children: [s(Zo, {
            isPhone: e
        }), s(tr, {}), e && s(rr, {}), s(ai, {
            mode: n,
            hasTicket: u,
            hasApprovedWord: a,
            lockDuration: o,
            onStartWriting: r,
            onWordEntered: i,
            onReturnToOverview: c
        })]
    })
}
  , fi = "_loader_9s20f_1"
  , sn = {
    loader: fi
}
  , pi = "_footer_59bey_1"
  , hi = "_links_59bey_13"
  , yt = {
    footer: pi,
    links: hi
}
  , mi = () => s("div", {
    className: yt.footer,
    children: [s("span", {
        children: "ООО «НОУКИ», ИНН 9729409454, ОГРН 1257700460434"
    }), s("div", {
        className: yt.links,
        children: [s("a", {
            href: "/offer.html",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Публичная оферта"
        }), s("a", {
            href: "/privacy.html",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Политика конфиденциальности"
        })]
    })]
})
  , vi = Gt( () => mn( () => import("./index-DU33UtKs.js"), __vite__mapDeps([0, 1])))
  , gi = e => (I( () => {
    $e("/chapter-1/", !0)
}
, []),
null)
  , kt = () => s("div", {
    className: sn.loader,
    children: s(ue, {})
})
  , te = ({activeTab: e}) => {
    const {user: t, isLoading: n} = A();
    return n ? s(kt, {}) : !t || t.role !== "ADMIN" ? ($e("/chapter-1/", !0),
    null) : s(ie, {
        fallback: s(kt, {}),
        children: s(vi, {
            activeTab: e
        })
    })
}
;
function yi() {
    const {checkAuth: e, isAuthenticated: t, isLoading: n} = A();
    I( () => {
        e()
    }
    , [e]);
    const o = () => {
        window.scrollTo(0, 0)
    }
      , r = rn("is_auth");
    if (n && r === "false")
        return s("div", {
            className: sn.loader,
            children: s(ue, {})
        });
    const i = "/chapter-1/";
    return s(T, {
        children: [s(tn, {
            onChange: o,
            children: [s(ki, {
                path: `${i}`,
                isAuthenticated: t
            }), s(te, {
                path: `${i}admin`,
                activeTab: "monitoring"
            }), s(te, {
                path: `${i}admin/users`,
                activeTab: "users"
            }), s(te, {
                path: `${i}admin/attempts`,
                activeTab: "attempts"
            }), s(te, {
                path: `${i}admin/words`,
                activeTab: "words"
            }), s(te, {
                path: `${i}admin/banlist`,
                activeTab: "banlist"
            }), s(gi, {
                default: !0
            })]
        }), s(mi, {})]
    })
}
const ki = ({isAuthenticated: e}) => s(T, {
    children: [!e && s(xo, {}), e && s(di, {})]
});
console.log("%cТут ничего нет, можешь не искать 100%", "font-size: 32px");
J(s(yi, {}), document.getElementById("root"));
export {$e as $, ke as A, ue as I, er as R, _e as a, s as b, Ve as c, x as d, T as k, A as u, I as y};
