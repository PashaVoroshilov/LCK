"use strict";

function _createForOfIteratorHelper(e, t) {
  var r, n, c, o, i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
  if (i) return n = !(r = !0), {
    s: function () {
      i = i.call(e)
    }, n: function () {
      var e = i.next();
      return r = e.done, e
    }, e: function (e) {
      n = !0, c = e
    }, f: function () {
      try {
        r || null == i.return || i.return()
      } finally {
        if (n) throw c
      }
    }
  };
  if (Array.isArray(e) || (i = _unsupportedIterableToArray(e)) || t && e && "number" == typeof e.length) return i && (e = i), o = 0, {
    s: t = function () {
    }, n: function () {
      return o >= e.length ? {done: !0} : {done: !1, value: e[o++]}
    }, e: function (e) {
      throw e
    }, f: t
  };
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _unsupportedIterableToArray(e, t) {
  var r;
  if (e) return "string" == typeof e ? _arrayLikeToArray(e, t) : "Map" === (r = "Object" === (r = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _arrayLikeToArray(e, t) : void 0
}

function _arrayLikeToArray(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n
}

document.addEventListener("DOMContentLoaded", function () {
  var e, t, r = document.querySelectorAll(".search-trigger"), n = document.querySelector(".search"),
    c = document.querySelector(".search__field"), o = _createForOfIteratorHelper(r);
  try {
    for (o.s(); !(e = o.n()).done;) e.value.addEventListener("click", function (e) {
      e.preventDefault(), e.target.classList.contains("search-trigger") && (n.classList.toggle("show"), n.classList.contains("show") ? (c.focus(), c.classList.add("focus")) : (c.blur(), c.classList.remove("focus"))), window.matchMedia("(max-width: 992px)").matches && (document.querySelector(".search__trigger.mobile"), n.classList.toggle("active"))
    })
  } catch (e) {
    o.e(e)
  } finally {
    o.f()
  }
  window.matchMedia("(max-width: 992px)").matches && (r = document.querySelector(".burger-trigger"), t = document.querySelector(".menu"), r.addEventListener("click", function () {
    t.classList.toggle("active")
  }));
  new Swiper(".products-slider", {
    spaceBetween: 8,
    slidesPerView: 2.105,
    slidesPerGroup: 2,
    breakpoints: {
      768: {spaceBetween: 15, slidesPerView: 3, slidesPerGroup: 3},
      992: {spaceBetween: 26, slidesPerView: 4, slidesPerGroup: 4}
    },
    pagination: {
      el: ".swiper-pagination", type: "fraction", renderFraction: function (e, t) {
        return '<span class="' + e + '"></span>/<span class="' + t + '"></span>'
      }
    },
    navigation: {nextEl: ".products-slider .circle-btn.next", prevEl: ".products-slider .circle-btn.prev"}
  }), new Swiper(".product-gallery", {
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination", clickable: !0, renderBullet: function (e, t) {
        return '<span class="' + t + '">' + (e + 1) + "</span>"
      }
    },
    navigation: {nextEl: ".product-gallery .circle-btn.next", prevEl: ".product-gallery .circle-btn.prev"}
  });
  var i, r = document.querySelector(".search-result"),
    a = "calc(100vh - ".concat(r.getBoundingClientRect().top + document.body.scrollTop, "px)"),
    r = (r.style.maxHeight = a, document.querySelectorAll("button.acco-trigger")), s = (r && r.forEach(function (e) {
      var t = document.querySelectorAll(".filter-block__content"), r = e.closest(".acco-item"),
        n = r.querySelector(".acco-content"), c = n.firstElementChild.clientHeight;
      t.forEach(function (e) {
        n.style.height = c + "px"
      }), e.addEventListener("click", function (e) {
        e.preventDefault(), r.classList.contains("active") ? (r.classList.remove("active"), n.style.height = 0) : (r.classList.add("active"), n.style.height = c + "px")
      })
    }), window.matchMedia("(max-width: 992px)").matches && (a = document.querySelector(".filters-trigger"), i = document.querySelector(".sidebar-filters"), a) && a.addEventListener("click", function () {
      i.classList.contains("active") ? (i.classList.remove("active"), i.style.height = "0") : (i.classList.add("active"), i.style.height = "initial")
    }), document.querySelector(".widget-connect__trigger"), document.querySelector(".widget-connect")),
    r = (s.addEventListener("click", function () {
      s.classList.toggle("active")
    }), document.getElementById("range"));
  r && noUiSlider.create(r, {
    start: 0,
    range: {min: 0, max: 100},
    connect: [!0, !1]
  }), customSelect("select"),
    // ADDED SCRIPTS
    new Swiper(".promotion .swiper", {
    spaceBetween: 10,
    slidesPerView: "auto",
    centeredSlides: !0,
    navigation: {nextEl: ".promotion__icon.next", prevEl: ".promotion__icon.prev"}
  });

  function l(e, t) {
    var e = document.querySelectorAll(e), r = document.querySelector(t);
    e.forEach(function (e) {
      e.addEventListener("click", function () {
        r.classList.toggle("show"), r.classList.contains("show") ? document.body.style.overflow = "hidden" : document.body.style.overflow = ""
      })
    })
  }

  l(".product-enlarge__trigger", ".product-enlarge__wrapper"), l(".product-sizes__trigger", ".product-sizes-table")
});