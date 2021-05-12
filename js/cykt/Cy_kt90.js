(this["webpackJsonpair-conditioner"] = this["webpackJsonpair-conditioner"] || []).push([[0], {
    103: function(e, t, r) {},
    104: function(e, t, r) {},
    110: function(e, t, r) {},
    113: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(0)
          , a = r.n(n)
          , o = r(33)
          , c = r.n(o)
          , i = (r(103),
        r(104),
        r(138))
          , s = r(115)
          , l = r(92)
          , d = r(2);
        function u(e) {
            var t = e.children
              , r = Object(i.a)("(prefers-color-scheme: dark)") ? "dark" : "light"
              , a = Object(n.useMemo)((function() {
                return Object(l.a)({
                    palette: {
                        mode: r
                    }
                })
            }
            ), [r]);
            return Object(d.jsx)(s.a, {
                theme: a,
                children: t
            })
        }
        var j = r(149)
          , b = r(91)
          , h = r(14)
          , m = r(151)
          , g = r(150)
          , f = r(141)
          , x = r(144)
          , O = r(85)
          , p = r.n(O)
          , v = Object(x.a)((function(e) {
            return {
                root: {
                    margin: e.spacing(3, 0),
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }
            }
        }
        ));
        function w() {
            var e = v();
            return Object(d.jsxs)(g.a, {
                align: "center",
                className: e.root,
                color: "textSecondary",
                children: [Object(d.jsx)(p.a, {}), "Tip: \u4e3a\u4f60\u7684\u590f\u65e5\u5e26\u53bb\u6e05\u51c9\uff01"]
            })
        }
        var y = r(32)
          , k = r(142)
          , S = r(152)
          , C = r(89)
          , I = r.n(C)
          , N = r(90)
          , B = r.n(N)
          , L = r(87)
          , T = r.n(L)
          , R = r(86)
          , E = r.n(R)
          , W = r(88)
          , A = r.n(W)
          , F = r(60)
          , M = r(52)
          , D = function() {
            return Object(M.b)()
        }
          , P = M.c
          , J = r(45)
          , Y = Object(J.b)({
            name: "toast",
            initialState: {
                open: !1,
                message: ""
            },
            reducers: {
                setMessage: function(e, t) {
                    e.message = t.payload
                },
                setOpen: function(e, t) {
                    e.open = t.payload
                }
            }
        })
          , z = Y.actions
          , U = z.setMessage
          , V = z.setOpen
          , _ = Y.reducer
          , G = {
            status: "ac-status",
            mode: "ac-mode",
            temperature: "ac-temperature"
        }
          , H = {
            status: !1,
            mode: localStorage.getItem(G.mode) || "cold",
            temperature: parseInt(localStorage.getItem(G.temperature) || "") || 20
        }
          , Z = Object(J.b)({
            name: "ac",
            initialState: H,
            reducers: {
                setStatus: function(e, t) {
                    e.status = t.payload
                },
                setTemperature: function(e, t) {
                    e.temperature = t.payload
                },
                increment: function(e) {
                    e.temperature += 1,
                    localStorage.setItem(G.temperature, e.temperature.toString())
                },
                decrement: function(e) {
                    e.temperature -= 1,
                    localStorage.setItem(G.temperature, e.temperature.toString())
                },
                setMode: function(e, t) {
                    e.mode = t.payload,
                    localStorage.setItem(G.mode, e.mode)
                },
                toggleStatus: function(e) {
                    e.status = !e.status,
                    localStorage.setItem(G.status, e.status.toString())
                }
            }
        })
          , $ = function(e) {
            return e.ac.temperature
        }
          , q = Z.actions
          , K = q.setTemperature
          , Q = q.increment
          , X = q.decrement
          , ee = q.setMode
          , te = q.toggleStatus
          , re = q.setStatus
          , ne = Z.reducer;
        function ae(e) {
            return "https://cdn.jsdelivr.net/gh/YunYouJun/air-conditioner/public" + e
        }
        var oe, ce, ie = Object(x.a)((function(e) {
            return {
                margin: {
                    margin: e.spacing(1)
                },
                extendedIcon: {
                    marginRight: e.spacing(1)
                }
            }
        }
        ));
        function se(e) {
            return Object(d.jsx)(S.a, Object(y.a)(Object(y.a)({}, e), {}, {
                onClick: function() {
                    !function() {
                        var e = document.getElementById("di");
                        e && e.play()
                    }(),
                    e.onClick()
                }
            }))
        }
        function le() {
            var e = document.getElementById("ac-work");
            e.load(),
            e.play(),
            setTimeout((function() {
                !function() {
                    var e = document.getElementById("air-extractor-fan");
                    e.load(),
                    e.play(),
                    oe = setTimeout((function() {
                        ce = setInterval((function() {
                            e.currentTime = 2
                        }
                        ), 56e3)
                    }
                    ), 2e3)
                }()
            }
            ), 8e3)
        }
        var de = Object(l.a)({
            palette: {
                primary: F.a
            }
        })
          , ue = ae("/assets/audio/di.mp3")
          , je = ae("/assets/audio/ac-work.mp3")
          , be = ae("/assets/audio/air-extractor-fan.mp3");
        function he() {
            var e = ie()
              , t = P((function(e) {
                return e.ac
            }
            ))
              , r = D();
            return Object(d.jsxs)(f.a, {
                my: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                children: [Object(d.jsx)("audio", {
                    id: "di",
                    src: ue,
                    preload: "auto"
                }), Object(d.jsx)("audio", {
                    id: "ac-work",
                    src: je,
                    preload: "auto"
                }), Object(d.jsx)("audio", {
                    id: "air-extractor-fan",
                    src: be,
                    preload: "auto"
                }), Object(d.jsxs)("div", {
                    children: [" ", Object(d.jsx)(se, {
                        color: "primary",
                        "aria-label": "cold",
                        className: e.margin,
                        onClick: function() {
                            r(ee("cold"))
                        },
                        children: Object(d.jsx)(E.a, {})
                    }), Object(d.jsx)(k.a, {
                        theme: de,
                        children: Object(d.jsx)(se, {
                            color: t.status ? "secondary" : "primary",
                            "aria-label": "add",
                            className: e.margin,
                            onClick: function() {
                                !function(e, t) {
                                    if (e) {
                                        document.getElementById("ac-work").load();
                                        var r = document.getElementById("air-extractor-fan");
                                        oe && clearTimeout(oe),
                                        ce && clearInterval(ce),
                                        r.currentTime = 58
                                    } else
                                        le();
                                    t(te())
                                }(t.status, r)
                            },
                            style: {
                                color: "white"
                            },
                            children: Object(d.jsx)(T.a, {})
                        })
                    }), Object(d.jsx)(se, {
                        "aria-label": "hot",
                        className: e.margin,
                        style: {
                            backgroundColor: "orange",
                            color: "white"
                        },
                        onClick: function() {
                            r(ee("hot"))
                        },
                        children: Object(d.jsx)(A.a, {})
                    })]
                }), Object(d.jsx)(se, {
                    "aria-label": "add",
                    className: e.margin,
                    onClick: function() {
                        r((function(e, t) {
                            $(t()) < 31 ? e(Q()) : (e(U("\u5df2\u7ecf\u662f\u6700\u5927\u6e29\u5ea6\u5566\uff01")),
                            e(V(!0)))
                        }
                        ))
                    },
                    children: Object(d.jsx)(I.a, {})
                }), Object(d.jsx)(se, {
                    "aria-label": "reduce",
                    className: e.margin,
                    onClick: function() {
                        r((function(e, t) {
                            $(t()) > 16 ? e(X()) : (e(U("\u5df2\u7ecf\u662f\u6700\u5c0f\u6e29\u5ea6\u5566\uff01")),
                            e(V(!0)))
                        }
                        ))
                    },
                    children: Object(d.jsx)(B.a, {})
                })]
            })
        }
        var me = r(15)
          , ge = r(148)
          , fe = r(143)
          , xe = "https://88.al/kt/index_files/favicon.png"
          , Oe = r(38)
          , pe = (r(110),
        "#e0e0e0")
          , ve = "#cccccc"
          , we = "#bbbbbb"
          , ye = Object(x.a)((function(e) {
            return {
                acBorder: {
                    borderRadius: 10,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20
                },
                acDisplay: {
                    textShadow: "0px 0px 2px rgba(0, 0, 0, 0.3)"
                },
                acLogo: {
                    width: 28
                },
                acStatus: {
                    backgroundColor: function(e) {
                        return e.backgroundColor || "transparent"
                    }
                },
                energyLabel: {
                    backgroundColor: "#4ea5f5"
                }
            }
        }
        ));
        function ke(e) {
            return Object(d.jsx)(f.a, Object(y.a)({
                bgcolor: "background.paper",
                height: 150,
                border: 1,
                borderColor: pe,
                borderRadius: 10,
                boxShadow: 3,
                position: "relative"
            }, e))
        }
        function Se() {
            var e = P($);
            return Object(d.jsxs)(g.a, {
                variant: "h4",
                align: "center",
                children: [Object(d.jsx)("span", {
                    className: "font-digit ac-temperature",
                    children: e
                }), Object(d.jsx)("small", {
                    className: "font-digit",
                    children: "\xb0C"
                })]
            })
        }
        var Ce = a.a.forwardRef((function(e, t) {
            return Object(d.jsxs)(f.a, Object(y.a)(Object(y.a)({}, e), {}, {
                ref: t,
                position: "absolute",
                top: 25,
                right: 30,
                color: ve,
                children: [Object(d.jsxs)(g.a, {
                    align: "left",
                    variant: "subtitle2",
                    children: [Object(d.jsx)("span", {
                        children: "cold" === e.mode ? "\u2744" : "\u2600\ufe0f"
                    }), "\ufe0f\ufe0f"]
                }), Object(d.jsx)(Se, {})]
            }))
        }
        ));
        function Ie(e) {
            return Object(d.jsx)(f.a, {
                textAlign: "center",
                mt: 12,
                children: Object(d.jsx)("a", {
                    href: Oe.c.url,
                    title: Oe.b,
                    target: "_blank",
                    rel: "noreferrer noopener",
                    children: Object(d.jsx)("img", {
                        className: e.className,
                        src: xe,
                        alt: "logo"
                    })
                })
            })
        }
        function Ne() {
            return Object(d.jsx)(f.a, {
                mt: 1,
                border: 1,
                borderColor: pe
            })
        }
        function Be(e) {
            var t = {
                backgroundColor: e.status ? "#38F709" : pe
            }
              , r = ye(t);
            return Object(d.jsx)(f.a, {
                className: r.acStatus,
                position: "absolute",
                height: 4,
                width: 4,
                borderRadius: "50%",
                top: 130,
                right: 10
            })
        }
        function Le(e, t, r, n) {
            var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
              , o = Object(me.a)(new Array(e).keys())
              , c = o.map((function(e) {
                return Object(d.jsx)(f.a, {
                    mx: n,
                    my: a,
                    width: r,
                    height: r,
                    borderRadius: "50%",
                    bgcolor: t
                }, e)
            }
            ));
            return Object(d.jsx)(f.a, {
                display: "flex",
                justifyContent: "center",
                children: c
            })
        }
        function Te(e) {
            return Object(d.jsxs)(f.a, {
                className: e.className,
                position: "absolute",
                top: 10,
                left: 10,
                height: 70,
                width: 50,
                borderRadius: 2,
                p: .5,
                children: [Le(6, "white", 4, .25), Object(d.jsxs)(f.a, {
                    my: .5,
                    px: 1,
                    py: .25,
                    height: 28,
                    width: "100%",
                    bgcolor: "background.paper",
                    children: [Object(d.jsxs)(ge.a, {
                        container: !0,
                        children: [Object(d.jsx)(f.a, {
                            bgcolor: "green",
                            height: 3,
                            width: "40%"
                        }), Object(d.jsx)(f.a, {
                            height: 3,
                            marginLeft: "40%",
                            style: {
                                borderTop: 1.5,
                                borderRight: 2,
                                borderBottom: 1.5,
                                borderLeft: 0,
                                borderTopColor: "transparent",
                                borderRightColor: "green",
                                borderBottomColor: "transparent",
                                borderLeftColor: "transparent",
                                borderStyle: "solid"
                            }
                        }), Object(d.jsx)(f.a, {
                            bgcolor: "green",
                            height: 3,
                            width: "10%"
                        })]
                    }), Object(d.jsx)(f.a, {
                        mt: .25,
                        bgcolor: "lightGreen",
                        height: 3,
                        width: "50%"
                    }), Object(d.jsx)(f.a, {
                        mt: .25,
                        bgcolor: "#ffc107",
                        height: 3,
                        width: "60%"
                    }), Object(d.jsx)(f.a, {
                        mt: .25,
                        bgcolor: "orange",
                        height: 3,
                        width: "70%"
                    }), Object(d.jsx)(f.a, {
                        mt: .25,
                        bgcolor: "red",
                        height: 3,
                        width: "80%"
                    })]
                }), Object(d.jsxs)(f.a, {
                    mb: .25,
                    pt: .1,
                    height: 20,
                    width: "100%",
                    bgcolor: "background.paper",
                    children: [Le(11, "black", 2, .1, .25), Object(d.jsx)(f.a, {
                        my: .1,
                        borderTop: 1,
                        height: 0,
                        width: "100%"
                    }), Le(9, "black", 1.5, .1, .25), Le(10, "black", 1.2, .1, 0)]
                }), Le(8, "white", 2, .1)]
            })
        }
        var Re = a.a.forwardRef((function(e, t) {
            return Object(d.jsxs)(f.a, Object(y.a)(Object(y.a)({}, e), {}, {
                ref: t,
                mt: 3,
                display: "flex",
                justifyContent: "center",
                children: [Object(d.jsx)(f.a, {
                    style: {
                        transform: "rotate(10deg)"
                    },
                    bgcolor: we,
                    width: 5,
                    height: 40
                }), Object(d.jsx)(f.a, {
                    mx: 10,
                    bgcolor: we,
                    width: 5,
                    height: 40
                }), Object(d.jsx)(f.a, {
                    style: {
                        transform: "rotate(-10deg)"
                    },
                    bgcolor: we,
                    width: 5,
                    height: 40
                })]
            }))
        }
        ));
        function Ee(e) {
            var t = ye(e);
            return Object(d.jsxs)(f.a, {
                children: [Object(d.jsxs)(ke, {
                    className: t.acBorder,
                    children: [Object(d.jsx)(fe.a, {
                        in: e.status,
                        children: Object(d.jsx)(Ce, {
                            mode: e.mode
                        })
                    }), Object(d.jsx)(Ie, {
                        className: t.acLogo
                    }), Object(d.jsx)(Ne, {}), Object(d.jsx)(Be, {
                        status: e.status
                    }), Object(d.jsx)(Te, {
                        className: t.energyLabel,
                        titleLength: 6
                    })]
                }), Object(d.jsx)(fe.a, {
                    in: e.status,
                    timeout: {
                        enter: 2500,
                        exit: 1500
                    },
                    children: Object(d.jsx)(Re, {})
                })]
            })
        }
        var We = r(147)
          , Ae = r(145);
        function Fe() {
            var e = P((function(e) {
                return e.toast
            }
            ))
              , t = D()
              , r = function(e, r) {
                t(V(!1))
            };
            return Object(d.jsx)(We.a, {
                open: e.open,
                autoHideDuration: 5e3,
                onClose: r,
                children: Object(d.jsx)(Ae.a, {
                    onClose: r,
                    severity: "error",
                    style: {
                        width: "100%"
                    },
                    children: e.message
                })
            })
        }
        var Me = r(154);
        var De = function() {
            return Object(d.jsxs)("div", {
                children: [Object(d.jsx)(f.a, {
                    children: Object(d.jsxs)(g.a, {
                        variant: "body2",
                        color: "textSecondary",
                        align: "center",
                        children: ["\xa9 ", Object(d.jsx)(Me.a, {
                            color: "inherit",
                            href: Oe.c.url,
                            children: "爸爸爱了"
                        }), " - ", Object(d.jsx)(Me.a, {
                            color: "inherit",
                            href: Oe.a.url,
                            children: Oe.a.name
                        })]
                    })
                }), Object(d.jsx)(g.a, {
                    variant: "body2",
                    color: "textSecondary",
                    align: "center",
                    children: (new Date).getFullYear()
                })]
            })
        };
        var Pe = function() {
            var e = P((function(e) {
                return e.ac
            }
            ))
              , t = D();
            return Object(n.useEffect)((function() {
                function e(e) {
                    switch (e.key) {
                    case G.status:
                        t(re("true" === e.newValue));
                        break;
                    case G.temperature:
                        t(K(parseInt(e.newValue || "20")));
                        break;
                    case G.mode:
                        t(ee(e.newValue || "cold"))
                    }
                }
                return window.addEventListener("storage", e),
                function() {
                    window.removeEventListener("storage", e)
                }
            }
            ), [t]),
            Object(d.jsx)(u, {
                children: Object(d.jsxs)(j.a, {
                    maxWidth: "sm",
                    className: e.status ? "hot" === e.mode ? "hot-color" : "cold-color" : "",
                    children: [Object(d.jsxs)(f.a, {
                        sx: {
                            pt: 4
                        },
                        bgcolor: "transparent",
                        children: [Object(d.jsx)(g.a, {
                            color: "textPrimary",
                            align: "center",
                            variant: "h4",
                            component: "h1",
                            gutterBottom: !0,
                            children: "\u4fbf\u643a\u5c0f\u7a7a\u8c03"
                        }), Object(d.jsx)(w, {}), Object(d.jsx)(Ee, {
                            status: e.status,
                            temperature: e.temperature,
                            mode: e.mode
                        }), Object(d.jsx)("div", {
                            className: "text-center",
                            children: Object(d.jsx)(f.a, {
                                sx: {
                                    mt: 2
                                },
                                children: Object(d.jsx)(m.a, {
                                    variant: "outlined",
                                    onClick: function() {
                                        window.open("./index.html", "_blank", "width=300, height=400")
                                    },
                                    children: "\u72ec\u7acb\u9065\u63a7\u5668"
                                })
                            })
                        }), Object(d.jsx)(he, {}), Object(d.jsx)(De, {})]
                    }), Object(d.jsx)(Fe, {})]
                })
            })
        };
        function Je() {
            return Object(d.jsx)(he, {})
        }
        var Ye = function() {
            return Object(d.jsx)(u, {
                children: Object(d.jsx)(j.a, {
                    maxWidth: "sm",
                    children: Object(d.jsx)(b.a, {
                        children: Object(d.jsxs)(h.c, {
                            children: [Object(d.jsx)(h.a, {
                                path: "/rc",
                                children: Object(d.jsx)(Je, {})
                            }), Object(d.jsx)(h.a, {
                                path: "/",
                                children: Object(d.jsx)(Pe, {})
                            })]
                        })
                    })
                })
            })
        }
          , ze = Object(J.a)({
            reducer: {
                ac: ne,
                toast: _
            }
        })
          , Ue = Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
        function Ve(e, t) {
            navigator.serviceWorker.register(e).then((function(e) {
                e.onupdatefound = function() {
                    var r = e.installing;
                    null != r && (r.onstatechange = function() {
                        "installed" === r.state && (navigator.serviceWorker.controller ? (console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),
                        t && t.onUpdate && t.onUpdate(e)) : (console.log("Content is cached for offline use."),
                        t && t.onSuccess && t.onSuccess(e)))
                    }
                    )
                }
            }
            )).catch((function(e) {
                console.error("Error during service worker registration:", e)
            }
            ))
        }
        var _e = function(e) {
            e && e instanceof Function && r.e(3).then(r.bind(null, 155)).then((function(t) {
                var r = t.getCLS
                  , n = t.getFID
                  , a = t.getFCP
                  , o = t.getLCP
                  , c = t.getTTFB;
                r(e),
                n(e),
                a(e),
                o(e),
                c(e)
            }
            ))
        };
        c.a.render(Object(d.jsx)(a.a.StrictMode, {
            children: Object(d.jsx)(M.a, {
                store: ze,
                children: Object(d.jsx)(Ye, {})
            })
        }), document.getElementById("root")),
        function(e) {
            if ("serviceWorker"in navigator) {
                if (new URL("",window.location.href).origin !== window.location.origin)
                    return;
                window.addEventListener("load", (function() {
                    var t = "".concat("", "/service-worker.js");
                    Ue ? (!function(e, t) {
                        fetch(e, {
                            headers: {
                                "Service-Worker": "script"
                            }
                        }).then((function(r) {
                            var n = r.headers.get("content-type");
                            404 === r.status || null != n && -1 === n.indexOf("javascript") ? navigator.serviceWorker.ready.then((function(e) {
                                e.unregister().then((function() {
                                    window.location.reload()
                                }
                                ))
                            }
                            )) : Ve(e, t)
                        }
                        )).catch((function() {
                            console.log("No internet connection found. App is running in offline mode.")
                        }
                        ))
                    }(t, e),
                    navigator.serviceWorker.ready.then((function() {
                        console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")
                    }
                    ))) : Ve(t, e)
                }
                ))
            }
        }(),
        _e()
    },
    38: function(e) {
        e.exports = JSON.parse('{"b":"\u4e91\u7a7a\u8c03\uff0c\u4fbf\u643a\u5c0f\u7a7a\u8c03","a":{"url":"https://88.al","email":"88@88.al","name":"主页"},"c":{"type":"git","url":"https://88.al"}}')
    }
}, [[113, 1, 2]]]);
//# sourceMappingURL=main.3f3bd390.chunk.js.map
