!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";
    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n)
        }
    }
    function s() {
        return "undefined" != typeof window
    }
    function t() {
        return B || s() && (B = window.gsap) && B.registerPlugin && B
    }
    function w() {
        return String.fromCharCode.apply(null, arguments)
    }
    function D(e) {
        return Z.maxScroll(e || L)
    }
    var B, F, L, I, j, q, W, Y, Z, K, $, G, J, Q, X, i = "ScrollSmoother", a = w(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109), l = w(103, 115, 97, 112, 46, 99, 111, 109), c = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/, r = (function(e) {
        var t = "undefined" != typeof window,
    r =
        0 === (t ? window.location.href : "").indexOf("file://") ||
        -1 !== e.indexOf("localhost") ||
        c.test(e) ||
        (t ? window.location.hostname : "").split(".").pop() === "local",
    n = [
        a,
        l,
        "codepen.io",
        "codepen.plumbing",
        "codepen.dev",
        "codepen.app",
        "codepen.website",
        "pens.cloud",
        "css-tricks.com",
        "cdpn.io",
        "pens.io",
        "gannon.tv",
        "codecanyon.net",
        "themeforest.net",
        "cerebrax.co.uk",
        "tympanus.net",
        "tweenmax.com",
        "plnkr.co",
        "hotjar.com",
        "webpackbin.com",
        "archive.org",
        "codesandbox.io",
        "csb.app",
        "stackblitz.com",
        "stackblitz.io",
        "codier.io",
        "motiontricks.com",
        "stackoverflow.com",
        "stackexchange.com",
        "studiofreight.com",
        "webcontainer.io",
        "jsfiddle.net",
        window.location.hostname // Allowed websites
    ],
    o = n.length;
          for (setTimeout(function checkWarn() {

            if (t)
                if ("loading" === document.readyState || "interactive" === document.readyState)
                    document.addEventListener("readystatechange", checkWarn);
                else {
                    var e = "object" == typeof B ? B : t && window.gsap;
                    document.removeEventListener("readystatechange", checkWarn);
                   
                    t && window.console && !window._gsapWarned && "object" == typeof e && !1 !== e.config().crackLog && (
console.log("%c[" + i + "] Started / https://github.com/thirtysomethings/scrollsmoother", "font-size:14px;color:pink;"),
                        console.log("%c[" + i + "] Success", "font-size:14px;color:pink;"),
                        console.log("%c[" + i + "] Remove this with ({crackLog: false})", "font-size:8px;color:pink;"),
                        window._gsapWarned = 1
                    );
                }
        }, 50); -1 < --o; )        
            if (-1 !== e.indexOf(n[o]))
                return;
        r || setTimeout(function() {
            console.log("%c[" + i + "] Unsucessful (i think)", "font-size:14px;color:pink;")
        }, 4e3)
    }("undefined" != typeof window ? window.location.host : ""),
    ScrollSmoother.register = function register(e) {
        return F || (B = e || t(),
        s() && window.document && (L = window,
        I = document,
        j = I.documentElement,
        q = I.body),
        B && (W = B.utils.toArray,
        Y = B.utils.clamp,
        $ = B.parseEase("expo"),
        Q = B.core.context || function() {}
        ,
        Z = B.core.globals().ScrollTrigger,
        B.core.globals("ScrollSmoother", ScrollSmoother),
        q && Z && (X = B.delayedCall(.2, function() {
            return Z.isRefreshing || K && K.refresh()
        }).pause(),
        G = Z.core._getVelocityProp,
        J = Z.core._inputObserver,
        ScrollSmoother.refresh = Z.refresh,
        F = 1))),
        F
    }
    ,
    function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t),
        r && _defineProperties(e, r),
        e
    }(ScrollSmoother, [{
        key: "progress",
        get: function get() {
            return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
    }]),
    ScrollSmoother);
    function ScrollSmoother(t) {
        var o = this;
        F || ScrollSmoother.register(B) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
        t = this.vars = t || {},
        K && K.kill(),
        Q(K = this);
        function Pa() {
            return U.update(-H)
        }
        function Ra() {
            return n.style.overflow = "visible"
        }
        function Ta(e) {
            e.update();
            var t = e.getTween();
            t && (t.pause(),
            t._time = t._dur,
            t._tTime = t._tDur),
            g = !1,
            e.animation.progress(e.progress, !0)
        }
        function Ua(e, t) {
            (e !== H && !f || t) && (x && (e = Math.round(e)),
            k && (n.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)",
            n._gsap.y = e + "px"),
            M = e - H,
            H = e,
            Z.isUpdating || ScrollSmoother.isRefreshing || Z.update())
        }
        function Va(e) {
            return arguments.length ? (e < 0 && (e = 0),
            z.y = -e,
            g = !0,
            f ? H = -e : Ua(-e),
            Z.isRefreshing ? i.update() : E(e / A),
            this) : -H
        }
        function Ya(e) {
            w.scrollTop = 0,
            e.target.contains && e.target.contains(w) || _ && !1 === _(o, e) || (Z.isInViewport(e.target) || e.target === p || o.scrollTo(e.target, !1, "center center"),
            p = e.target)
        }
        function Za(t, e) {
            if (t < e.start)
                return t;
            var r = isNaN(e.ratio) ? 1 : e.ratio
              , n = e.end - e.start
              , o = t - e.start
              , i = e.offset || 0
              , s = e.pins || []
              , a = s.offset || 0
              , l = e._startClamp && e.start <= 0 || e.pins && e.pins.offset ? 0 : e._endClamp && e.end === D() ? 1 : .5;
            return s.forEach(function(e) {
                n -= e.distance,
                e.nativeStart <= t && (o -= e.distance)
            }),
            a && (o *= (n - a / r) / n),
            t + (o - i * l) / r - o
        }
        function _a(t, r) {
            b.forEach(function(e) {
                return function adjustEffectRelatedTriggers(e, t, r) {
                    r || (e.pins.length = e.pins.offset = 0);
                    var n, o, i, s, a, l, c, f, u = e.pins, d = e.markers;
                    for (c = 0; c < t.length; c++)
                        if (f = t[c],
                        e.trigger && f.trigger && e !== f && (f.trigger === e.trigger || f.pinnedContainer === e.trigger || e.trigger.contains(f.trigger)) && (a = f._startNative || f._startClamp || f.start,
                        l = f._endNative || f._endClamp || f.end,
                        i = Za(a, e),
                        s = f.pin && 0 < l ? i + (l - a) : Za(l, e),
                        f.setPositions(i, s, !0, (f._startClamp ? Math.max(0, i) : i) - a),
                        f.markerStart && d.push(B.quickSetter([f.markerStart, f.markerEnd], "y", "px")),
                        f.pin && 0 < f.end && !r)) {
                            if (n = f.end - f.start,
                            o = e._startClamp && f.start < 0) {
                                if (0 < e.start)
                                    return e.setPositions(0, e.end + (e._startNative - e.start), !0),
                                    void adjustEffectRelatedTriggers(e, t);
                                n += f.start,
                                u.offset = -f.start
                            }
                            u.push({
                                start: f.start,
                                nativeStart: a,
                                end: f.end,
                                distance: n,
                                trig: f
                            }),
                            e.setPositions(e.start, e.end + (o ? -f.start : n), !0)
                        }
                }(e, t, r)
            })
        }
        function ab() {
            Ra(),
            requestAnimationFrame(Ra),
            b && (Z.getAll().forEach(function(e) {
                e._startNative = e.start,
                e._endNative = e.end
            }),
            b.forEach(function(e) {
                var t = e._startClamp || e.start
                  , r = e.autoSpeed ? Math.min(D(), e.end) : t + Math.abs((e.end - t) / e.ratio)
                  , n = r - e.end;
                if ((r -= n / 2) < (t -= n / 2)) {
                    var o = t;
                    t = r,
                    r = o
                }
                e._startClamp && t < 0 ? (n = (r = e.ratio < 0 ? D() : e.end / e.ratio) - e.end,
                t = 0) : (e.ratio < 0 || e._endClamp && r >= D()) && (n = ((r = D()) - (t = e.ratio < 0 || 1 < e.ratio ? 0 : r - (r - e.start) / e.ratio)) * e.ratio - (e.end - e.start)),
                e.offset = n || 1e-4,
                e.pins.length = e.pins.offset = 0,
                e.setPositions(t, r, !0)
            }),
            _a(Z.sort())),
            U.reset()
        }
        function bb() {
            return Z.addEventListener("refresh", ab)
        }
        function cb() {
            return b && b.forEach(function(e) {
                return e.vars.onRefresh(e)
            })
        }
        function db() {
            return b && b.forEach(function(e) {
                return e.vars.onRefreshInit(e)
            }),
            cb
        }
        function eb(r, n, o, i) {
            return function() {
                var e = "function" == typeof n ? n(o, i) : n;
                e || 0 === e || (e = i.getAttribute("data-" + R + r) || ("speed" === r ? 1 : 0)),
                i.setAttribute("data-" + R + r, e);
                var t = "clamp(" === (e + "").substr(0, 6);
                return {
                    clamp: t,
                    value: t ? e.substr(6, e.length - 7) : e
                }
            }
        }
        function fb(r, e, t, n, o) {
            function qc() {
                e = u(),
                t = parseFloat(d().value),
                i = parseFloat(e.value) || 1,
                a = "auto" === e.value,
                c = a || s && s._startClamp && s.start <= 0 || p.offset ? 0 : s && s._endClamp && s.end === D() ? 1 : .5,
                l && l.kill(),
                l = t && B.to(r, {
                    ease: $,
                    overwrite: !1,
                    y: "+=0",
                    duration: t
                }),
                s && (s.ratio = i,
                s.autoSpeed = a)
            }
            function rc() {
                g.y = h + "px",
                g.renderTransform(1),
                qc()
            }
            function uc(e) {
                if (a) {
                    rc();
                    var t = function _autoDistance(e, t) {
                        var r, n, o = e.parentNode || j, i = e.getBoundingClientRect(), s = o.getBoundingClientRect(), a = s.top - i.top, l = s.bottom - i.bottom, c = (Math.abs(a) > Math.abs(l) ? a : l) / (1 - t), f = -c * t;
                        return 0 < c && (n = .5 == (r = s.height / (L.innerHeight + s.height)) ? 2 * s.height : 2 * Math.min(s.height, Math.abs(-c * r / (2 * r - 1))) * (t || 1),
                        f += t ? -n * t : -n / 2,
                        c += n),
                        {
                            change: c,
                            offset: f
                        }
                    }(r, Y(0, 1, -e.start / (e.end - e.start)));
                    v = t.change,
                    f = t.offset
                } else
                    f = p.offset || 0,
                    v = (e.end - e.start - f) * (1 - i);
                p.forEach(function(e) {
                    return v -= e.distance * (1 - i)
                }),
                e.offset = v || .001,
                e.vars.onUpdate(e),
                l && l.progress(1)
            }
            o = ("function" == typeof o ? o(n, r) : o) || 0;
            var i, s, a, l, c, f, u = eb("speed", e, n, r), d = eb("lag", t, n, r), h = B.getProperty(r, "y"), g = r._gsap, p = [], m = [], v = 0;
            return qc(),
            (1 !== i || a || l) && (uc(s = Z.create({
                trigger: a ? r.parentNode : r,
                start: function start() {
                    return e.clamp ? "clamp(top bottom+=" + o + ")" : "top bottom+=" + o
                },
                end: function end() {
                    return e.value < 0 ? "max" : e.clamp ? "clamp(bottom top-=" + o + ")" : "bottom top-=" + o
                },
                scroller: w,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: rc,
                onRefresh: uc,
                onKill: function onKill(e) {
                    var t = b.indexOf(e);
                    0 <= t && b.splice(t, 1),
                    rc()
                },
                onUpdate: function onUpdate(e) {
                    var t, r, n, o = h + v * (e.progress - c), i = p.length, s = 0;
                    if (e.offset) {
                        if (i) {
                            for (r = -H,
                            n = e.end; i--; ) {
                                if ((t = p[i]).trig.isActive || r >= t.start && r <= t.end)
                                    return void (l && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001,
                                    t.trig.update(0, 0, 1),
                                    l.resetTo("y", parseFloat(g.y), -M, !0),
                                    N && l.progress(1)));
                                r > t.end && (s += t.distance),
                                n -= t.distance
                            }
                            o = h + s + v * ((B.utils.clamp(e.start, e.end, r) - e.start - s) / (n - e.start) - c)
                        }
                        m.length && !a && m.forEach(function(e) {
                            return e(o - s)
                        }),
                        o = function _round(e) {
                            return Math.round(1e5 * e) / 1e5 || 0
                        }(o + f),
                        l ? (l.resetTo("y", o, -M, !0),
                        N && l.progress(1)) : (g.y = o + "px",
                        g.renderTransform(1))
                    }
                }
            })),
            B.core.getCache(s.trigger).stRevert = db,
            s.startY = h,
            s.pins = p,
            s.markers = m,
            s.ratio = i,
            s.autoSpeed = a,
            r.style.willChange = "transform"),
            s
        }
        var n, w, e, i, b, s, a, l, c, f, r, u, d, h, g, p, m = t.smoothTouch, v = t.onUpdate, S = t.onStop, T = t.smooth, _ = t.onFocusIn, C = t.normalizeScroll, x = t.wholePixels, P = this, R = t.effectsPrefix || "", E = Z.getScrollFunc(L), k = 1 === Z.isTouch ? !0 === m ? .8 : parseFloat(m) || 0 : 0 === T || !1 === T ? 0 : parseFloat(T) || .8, A = k && +t.speed || 1, H = 0, M = 0, N = 1, U = G(0), z = {
            y: 0
        }, O = "undefined" != typeof ResizeObserver && !1 !== t.autoResize && new ResizeObserver(function() {
            if (!Z.isRefreshing) {
                var e = D(w) * A;
                e < -H && Va(e),
                X.restart(!0)
            }
        }
        );
        function refreshHeight() {
            return e = n.clientHeight,
            n.style.overflow = "visible",
            q.style.height = L.innerHeight + (e - L.innerHeight) / A + "px",
            e - L.innerHeight
        }
        bb(),
        Z.addEventListener("killAll", bb),
        B.delayedCall(.5, function() {
            return N = 0
        }),
        this.scrollTop = Va,
        this.scrollTo = function(e, t, r) {
            var n = B.utils.clamp(0, D(), isNaN(e) ? o.offset(e, r, !!t && !f) : +e);
            t ? f ? B.to(o, {
                duration: k,
                scrollTop: n,
                overwrite: "auto",
                ease: $
            }) : E(n) : Va(n)
        }
        ,
        this.offset = function(e, t, r) {
            var n, o = (e = W(e)[0]).style.cssText, i = Z.create({
                trigger: e,
                start: t || "top top"
            });
            return b && (N ? Z.refresh() : _a([i], !0)),
            n = i.start / (r ? A : 1),
            i.kill(!1),
            e.style.cssText = o,
            B.core.getCache(e).uncache = 1,
            n
        }
        ,
        this.content = function(e) {
            if (arguments.length) {
                var t = W(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || q.children[0];
                return t !== n && (c = (n = t).getAttribute("style") || "",
                O && O.observe(n),
                B.set(n, {
                    overflow: "visible",
                    width: "100%",
                    boxSizing: "border-box",
                    y: "+=0"
                }),
                k || B.set(n, {
                    clearProps: "transform"
                })),
                this
            }
            return n
        }
        ,
        this.wrapper = function(e) {
            return arguments.length ? (w = W(e || "#smooth-wrapper")[0] || function _wrap(e) {
                var t = I.querySelector(".ScrollSmoother-wrapper");
                return t || ((t = I.createElement("div")).classList.add("ScrollSmoother-wrapper"),
                e.parentNode.insertBefore(t, e),
                t.appendChild(e)),
                t
            }(n),
            l = w.getAttribute("style") || "",
            refreshHeight(),
            B.set(w, k ? {
                overflow: "hidden",
                position: "fixed",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            } : {
                overflow: "visible",
                position: "relative",
                width: "100%",
                height: "auto",
                top: "auto",
                bottom: "auto",
                left: "auto",
                right: "auto"
            }),
            this) : w
        }
        ,
        this.effects = function(e, t) {
            if (b = b || [],
            !e)
                return b.slice(0);
            (e = W(e)).forEach(function(e) {
                for (var t = b.length; t--; )
                    b[t].trigger === e && b[t].kill()
            });
            t = t || {};
            var r, n, o = t.speed, i = t.lag, s = t.effectsPadding, a = [];
            for (r = 0; r < e.length; r++)
                (n = fb(e[r], o, i, r, s)) && a.push(n);
            return b.push.apply(b, a),
            !1 !== t.refresh && Z.refresh(),
            a
        }
        ,
        this.sections = function(e, t) {
            if (s = s || [],
            !e)
                return s.slice(0);
            var r = W(e).map(function(t) {
                return Z.create({
                    trigger: t,
                    start: "top 120%",
                    end: "bottom -20%",
                    onToggle: function onToggle(e) {
                        t.style.opacity = e.isActive ? "1" : "0",
                        t.style.pointerEvents = e.isActive ? "all" : "none"
                    }
                })
            });
            return t && t.add ? s.push.apply(s, r) : s = r.slice(0),
            r
        }
        ,
        this.content(t.content),
        this.wrapper(t.wrapper),
        this.render = function(e) {
            return Ua(e || 0 === e ? e : H)
        }
        ,
        this.getVelocity = function() {
            return U.getVelocity(-H)
        }
        ,
        Z.scrollerProxy(w, {
            scrollTop: Va,
            scrollHeight: function scrollHeight() {
                return refreshHeight() && q.scrollHeight
            },
            fixedMarkers: !1 !== t.fixedMarkers && !!k,
            content: n,
            getBoundingClientRect: function getBoundingClientRect() {
                return {
                    top: 0,
                    left: 0,
                    width: L.innerWidth,
                    height: L.innerHeight
                }
            }
        }),
        Z.defaults({
            scroller: w
        });
        var V = Z.getAll().filter(function(e) {
            return e.scroller === L || e.scroller === w
        });
        V.forEach(function(e) {
            return e.revert(!0, !0)
        }),
        i = Z.create({
            animation: B.fromTo(z, {
                y: function y() {
                    return h = 0
                }
            }, {
                y: function y() {
                    return h = 1,
                    -refreshHeight()
                },
                immediateRender: !1,
                ease: "none",
                data: "ScrollSmoother",
                duration: 100,
                onUpdate: function onUpdate() {
                    if (h) {
                        var e = g;
                        e && (Ta(i),
                        z.y = H),
                        Ua(z.y, e),
                        Pa(),
                        v && !f && v(P)
                    }
                }
            }),
            onRefreshInit: function onRefreshInit(e) {
                if (!ScrollSmoother.isRefreshing) {
                    if (ScrollSmoother.isRefreshing = !0,
                    b) {
                        var t = Z.getAll().filter(function(e) {
                            return !!e.pin
                        });
                        b.forEach(function(r) {
                            r.vars.pinnedContainer || t.forEach(function(e) {
                                if (e.pin.contains(r.trigger)) {
                                    var t = r.vars;
                                    t.pinnedContainer = e.pin,
                                    r.vars = null,
                                    r.init(t, r.animation)
                                }
                            })
                        })
                    }
                    var r = e.getTween();
                    d = r && r._end > r._dp._time,
                    u = H,
                    z.y = 0,
                    k && (1 === Z.isTouch && (w.style.position = "absolute"),
                    w.scrollTop = 0,
                    1 === Z.isTouch && (w.style.position = "fixed"))
                }
            },
            onRefresh: function onRefresh(e) {
                e.animation.invalidate(),
                e.setPositions(e.start, refreshHeight() / A),
                d || Ta(e),
                z.y = -E() * A,
                Ua(z.y),
                N || (d && (g = !1),
                e.animation.progress(B.utils.clamp(0, 1, u / A / -e.end))),
                d && (e.progress -= .001,
                e.update()),
                ScrollSmoother.isRefreshing = !1
            },
            id: "ScrollSmoother",
            scroller: L,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: function end() {
                return refreshHeight() / A
            },
            onScrubComplete: function onScrubComplete() {
                U.reset(),
                S && S(o)
            },
            scrub: k || !0
        }),
        this.smooth = function(e) {
            return arguments.length && (A = (k = e || 0) && +t.speed || 1,
            i.scrubDuration(e)),
            i.getTween() ? i.getTween().duration() : 0
        }
        ,
        i.getTween() && (i.getTween().vars.ease = t.ease || $),
        this.scrollTrigger = i,
        t.effects && this.effects(!0 === t.effects ? "[data-" + R + "speed], [data-" + R + "lag]" : t.effects, {
            effectsPadding: t.effectsPadding,
            refresh: !1
        }),
        t.sections && this.sections(!0 === t.sections ? "[data-section]" : t.sections),
        V.forEach(function(e) {
            e.vars.scroller = w,
            e.revert(!1, !0),
            e.init(e.vars, e.animation)
        }),
        this.paused = function(e, t) {
            return arguments.length ? (!!f !== e && (e ? (i.getTween() && i.getTween().pause(),
            E(-H / A),
            U.reset(),
            (r = Z.normalizeScroll()) && r.disable(),
            (f = Z.observe({
                preventDefault: !0,
                type: "wheel,touch,scroll",
                debounce: !1,
                allowClicks: !0,
                onChangeY: function onChangeY() {
                    return Va(-H)
                }
            })).nested = J(j, "wheel,touch,scroll", !0, !1 !== t)) : (f.nested.kill(),
            f.kill(),
            f = 0,
            r && r.enable(),
            i.progress = (-H / A - i.start) / (i.end - i.start),
            Ta(i))),
            this) : !!f
        }
        ,
        this.kill = this.revert = function() {
            o.paused(!1),
            Ta(i),
            i.kill();
            for (var e = (b || []).concat(s || []), t = e.length; t--; )
                e[t].kill();
            Z.scrollerProxy(w),
            Z.removeEventListener("killAll", bb),
            Z.removeEventListener("refresh", ab),
            w.style.cssText = l,
            n.style.cssText = c;
            var r = Z.defaults({});
            r && r.scroller === w && Z.defaults({
                scroller: L
            }),
            o.normalizer && Z.normalizeScroll(!1),
            clearInterval(a),
            K = null,
            O && O.disconnect(),
            q.style.removeProperty("height"),
            L.removeEventListener("focusin", Ya)
        }
        ,
        this.refresh = function(e, t) {
            return i.refresh(e, t)
        }
        ,
        C && (this.normalizer = Z.normalizeScroll(!0 === C ? {
            debounce: !0,
            content: !k && n
        } : C)),
        Z.config(t),
        "overscrollBehavior"in L.getComputedStyle(q) && B.set([q, j], {
            overscrollBehavior: "none"
        }),
        "scrollBehavior"in L.getComputedStyle(q) && B.set([q, j], {
            scrollBehavior: "auto"
        }),
        L.addEventListener("focusin", Ya),
        a = setInterval(Pa, 250),
        "loading" === I.readyState || requestAnimationFrame(function() {
            return Z.refresh()
        })
    }
    r.version = "3.12.5",
    r.create = function(e) {
        return K && e && K.content() === W(e.content)[0] ? K : new r(e)
    }
    ,
    r.get = function() {
        return K
    }
    ,
    t() && B.registerPlugin(r),
    e.ScrollSmoother = r,
    e.default = r;
    if (typeof (window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});
