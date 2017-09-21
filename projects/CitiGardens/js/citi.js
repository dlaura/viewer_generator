/*! 2015-04-01 15:25 */ ! function (a) {
    var b = function (c) {
        c = c.length ? c : a(".gallery"), c.each(function () {
            var d = null,
                e = 0,
                f = 0,
                g = a(this),
                h = g.find("> article, > ul > li").removeAttr("style"),
                i = !h.eq(0).hasClass("offer") && h.children("figure").length > 0 ? h.children("figure") : h,
                j = g.find(".nav"),
                k = h.length,
                l = !1,
                m = function (a) {
                    l = !0, j.children("a").eq(e).addClass("active").siblings().removeClass("active"), a || (a = f > e ? -1 : 1);
                    var b = parseInt(i.eq(f).css("left") || "0"),
                        c = i.eq(0).parent().parent().width();
                    i.not(i.eq(e)).not(i.eq(f)).css({
                        left: c
                    }), i.eq(e).css({
                        left: a * c
                    }), i.eq(f).animate({
                        left: -a * c
                    }), i.eq(e).animate({
                        left: b
                    }, {
                        complete: function () {
                            l = !1
                        }
                    })
                };
            i.length > 0 && (a(window).off("lazy-loaded.carousel").on("lazy-loaded.carousel", function () {
                b(c), c = null
            }), i.removeAttr("style").each(function (b, c) {
                if (b > 0) {
                    var d = i.eq(b - 1).siblings(".intro");
                    a(c).siblings(".intro").css({
                        marginTop: d.height() + parseInt(d.css("margin-top") || "0")
                    })
                }
            }).each(function (b, c) {
                if (null === d && (d = a(c).offset().top), a(c).css({
                    marginTop: d - a(c).offset().top,
                    left: b * a(c).parent().parent().width()
                }), b > 0)
                    if (i.eq(0).is("figure")) a(c).parent().css({
                        height: i.eq(b - 1).parent().height() + i.siblings(".intro").height()
                    });
                    else {
                        var e = 0;
                        i.each(function () {
                            var b = a(this).outerHeight(!0);
                            b > e && (e = b)
                        }), a(c).parent().css({
                            height: e + 36
                        })
                    }
            }), j.removeAttr("style"), j.css({
                top: d - j.offset().top + i.eq(0).outerHeight()
            }), j.off("click.nav", "a:not(.prev,.next)").on("click.nav", "a:not(.prev,.next)", function (b) {
                return b.preventDefault(), l || e === a(this).index() ? !1 : (f = e, e = a(this).index(), void m())
            }), g.unSwipe({
                ns: "carousel"
            }).swipe({
                ns: "carousel",
                right: function (a, b) {
                    if (console.log("right"), l) return !1;
                    console.log("right active");
                    var c = g.find("figure img").length > 0 ? g.find("figure img").eq(0) : g.eq(0),
                        d = c.offset().top,
                        h = c.height();
                    return b[1] > d + h || b[1] < d ? !1 : (f = e, e > 0 ? e-- : e = k - 1, void m(-1))
                },
                left: function (a, b) {
                    if (console.log("left"), l) return !1;
                    console.log("left active");
                    var c = g.find("figure img").length > 0 ? g.find("figure img").eq(0) : g.eq(0),
                        d = c.offset().top,
                        h = c.height();
                    return b[1] > d + h || b[1] < d ? !1 : (f = e, k - 1 > e ? e++ : e = 0, void m(1))
                }
            }), j.off("click.prev", "a.prev").on("click.prev", "a.prev", function (a) {
                return a.preventDefault(), l ? !1 : (f = e, e > 0 ? e-- : e = k - 1, void m(-1))
            }), j.off("click.next", "a.next").on("click.next", "a.next", function (a) {
                return a.preventDefault(), l ? !1 : (f = e, k - 1 > e ? e++ : e = 0, void m(1))
            }))
        })
    };
    a(window).on("mobile", b).on("tablet desktop", function () {
        a(window).off("lazy-loaded.carousel"), a(".gallery > article").removeAttr("style").children("figure").removeAttr("style"), a(".gallery .nav").removeAttr("style"), a(".gallery").unSwipe({
            ns: "carousel"
        });
        var c = a(".gallery.all-breakpoints");
        c.length > 0 && b(c)
    }), a(window).on("mobile tablet desktop", function () {
        a(".video-gallery").each(function () {
            var b = a(this).find("li"),
                c = b.filter(".active").index(),
                d = c,
                e = a(this).children("div:not(.nav)"),
                f = a(this).find(".nav .button"),
                g = f.length,
                h = !1,
                i = function (g) {
                    if (h) return !1;
                    f.eq(c).addClass("active").siblings().removeClass("active"), g || (g = d > c ? -1 : 1), h = !0;
                    var i = parseInt(b.eq(d).css("left") || "0"),
                        j = b.parent().width();
                    b.not(b.eq(c)).not(b.eq(d)).css({
                        left: -j
                    }), b.eq(c).css({
                        left: g * j
                    }), b.eq(d).animate({
                        left: -g * j
                    }), b.eq(c).animate({
                        left: i
                    }, {
                        complete: function () {
                            h = !1
                        }
                    }), c > 0 && a(window).width() >= 984 ? e.fadeOut() : e.fadeIn()
                };
            a(this).unSwipe({
                ns: "carousel"
            }).swipe({
                ns: "carousel",
                right: function (a, e) {
                    if (h) return !1;
                    var f = b.find("figure img").eq(0),
                        j = f.offset().top,
                        k = f.height();
                    return e[1] > j + k || e[1] < j ? !1 : (d = c, c > 0 ? c-- : c = g - 1, void i(-1))
                },
                left: function (a, e) {
                    if (h) return !1;
                    var f = b.find("figure img").eq(0),
                        j = f.offset().top,
                        k = f.height();
                    return e[1] > j + k || e[1] < j ? !1 : (d = c, g - 1 > c ? c++ : c = 0, void i(1))
                }
            }), f.off("click.nav").on("click.nav", function (b) {
                return b.preventDefault(), h || c === a(this).index() ? !1 : (d = c, c = a(this).index(), void i())
            }), a(this).off("click.prev", "a.prev").on("click.prev", "a.prev", function (a) {
                return a.preventDefault(), h ? !1 : (d = c, c > 0 ? c-- : c = g - 1, void i(-1))
            }), a(this).off("click.next", "a.next").on("click.next", "a.next", function (a) {
                return a.preventDefault(), h ? !1 : (d = c, g - 1 > c ? c++ : c = 0, void i(1))
            })
        })
    }), a(function () {
        a("#global-header .toggle").off("click.toggle").on("click.toggle", function (b) {
            b.preventDefault(), a("#main-nav").toggleClass("active")
        }), a(".marquee").off("click.toggle").on("click.toggle", function (b) {
            (a(b.target).is(".toggle") || a(b.target).is(".marquee") || a(b.target).is(".details") || a(b.target).is(".toggle span")) && (b.preventDefault(), a(this).toggleClass("active"))
        });
        var b = null;
        if (a(window).on("resize.resized orientationchange.resized", function () {
            null !== b && (clearTimeout(b), b = null), b = setTimeout(function () {
                a(window).trigger("resized")
            }, 200)
        }).trigger("resize"), window.showSpeedBump = function (b) {
            var c = a("#warning"),
                d = a(b).attr("href");
            c.off("click.close", ".close").on("click.close", ".close", function (a) {
                a.preventDefault(), c.removeClass("active")
            }), c.find(".redirect").attr("href", d).attr("target", "_new").off("click.close").on("click.close", function () {
                c.removeClass("active")
            }), c.addClass("active")
        }, a(document).on("click.external", "a[rel=external]:not(#warning a.redirect)", function () {
            return window.showSpeedBump(this), !1
        }), a(window).on("lazy-loaded", function () {
            var b = a("a[name=" + document.location.hash.toString().substr(1) + "]");
            0 === a.lazyload.loadingCount && "" !== document.location.hash && b.length > 0 && a(window).scrollTop(b.offset().top)
        }), a("article.carousel").each(function (b) {
            a(this).attr("id", "carousel-" + b);
            var c = new window.Swiper("#carousel-" + b, {
                loop: !0,
                grabCursor: !0,
                cssWidthAndHeight: !0
            });
            a(c.container).off("click.previous").on("click.previous", "a.prev", function (a) {
                a.preventDefault(), c.swipePrev()
            }).off("click.next").on("click.next", "a.next", function (a) {
                a.preventDefault(), c.swipeNext()
            })
        }), a("#video-source").length > 0) {
            window.videojs.options.flash.swf = "img/video-js.swf";
            var c = window.videojs("#video-source", {
                controls: !0
            });
            a(window).off("resize.video orientationchange.video").on("resize.video orientationchange.video", function () {
                if (a("#video").is(":visible")) {
                    var b = a("#video .wrapper").width(),
                        d = .5625 * b;
                    c.width(b), c.height(d), a("#video-source, video").css({
                        width: b,
                        height: d
                    }), window.matchMedia && window.matchMedia("(orientation: landscape)").matches && navigator.userAgent.match(/iPad/i) ? a("#video").css({
                        marginTop: -a("#video").height() / 2
                    }) : a("#video").removeAttr("style")
                }
            }).trigger("resize.video"), a(".video-gallery p a, .video-play").off("click.open").on("click.open", function (b) {
                b.preventDefault(), a("#video").addClass("active"), a(window).trigger("resize.video")
            }), a("#video .close").off("click.close").on("click.close", function (b) {
                b.preventDefault(), c.pause(), a("#video").removeClass("active")
            })
        }
    })

}(jQuery);