/* Infinix Infinity Events — interactions (vanilla JS, no dependencies) */
(function () {
  "use strict";
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var WA = "971589310114";
  var EMAIL = "info@infinixinfinityevents.com";

  /* Year */
  $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  /* Nav scroll state + progress + back-to-top */
  var nav = $(".nav"), prog = $(".progress"), top = $(".fab__top");
  function onScroll() {
    var y = window.scrollY, h = document.documentElement.scrollHeight - innerHeight;
    if (nav) nav.classList.toggle("is-scrolled", y > 40);
    if (prog) prog.style.transform = "scaleX(" + (h > 0 ? y / h : 0) + ")";
    if (top) top.classList.toggle("is-visible", y > 900);
  }
  window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  if (top) top.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" }); });

  /* Mobile menu */
  var burger = $(".burger");
  if (burger) {
    burger.addEventListener("click", function () {
      var open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open);
    });
    $$(".mobile-menu a").forEach(function (a) {
      a.addEventListener("click", function () { document.body.classList.remove("menu-open"); burger.setAttribute("aria-expanded", "false"); });
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") document.body.classList.remove("menu-open"); });
  }

  /* Active link on scroll */
  var links = $$(".nav__links a[href^='#']");
  if (links.length && "IntersectionObserver" in window) {
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) links.forEach(function (l) { l.classList.toggle("is-active", l.getAttribute("href") === "#" + e.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(function (l) { var s = $(l.getAttribute("href")); if (s) so.observe(s); });
  }

  /* Reveal on scroll */
  if ("IntersectionObserver" in window && !reduce) {
    var ro = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); ro.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal").forEach(function (el) { ro.observe(el); });
  } else { $$(".reveal").forEach(function (el) { el.classList.add("is-in"); }); }

  /* Counters */
  function count(el) {
    var end = parseFloat(el.dataset.count), suf = el.dataset.suffix || "", dur = 1800, t0 = null;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1), v = Math.floor(end * (1 - Math.pow(1 - p, 3)));
      el.textContent = v.toLocaleString() + suf;
      if (p < 1) requestAnimationFrame(step);
    }
    if (reduce) el.textContent = end.toLocaleString() + suf; else requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window) {
    var co = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { count(e.target); co.unobserve(e.target); } }); }, { threshold: 0.6 });
    $$("[data-count]").forEach(function (el) { co.observe(el); });
  }

  /* Word rotator */
  $$(".rotator").forEach(function (r) {
    var items = $$("span", r), i = 0;
    if (!items.length) return;
    items[0].classList.add("is-on");
    if (reduce) return;
    setInterval(function () {
      items[i].classList.remove("is-on"); items[i].classList.add("is-off");
      var prev = items[i]; setTimeout(function () { prev.classList.remove("is-off"); }, 600);
      i = (i + 1) % items.length; items[i].classList.add("is-on");
    }, 2400);
  });

  /* Hero parallax */
  var heroMedia = $(".hero__media");
  if (heroMedia && !reduce) {
    window.addEventListener("scroll", function () {
      var y = window.scrollY; if (y < innerHeight * 1.2) heroMedia.style.transform = "translate3d(0," + y * 0.3 + "px,0)";
    }, { passive: true });
  }

  /* Service cards: tilt on desktop, tap to open on touch */
  var fine = window.matchMedia("(hover:hover) and (pointer:fine)").matches;
  $$(".svc").forEach(function (c) {
    if (fine && !reduce) {
      c.addEventListener("mousemove", function (e) {
        var r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        c.style.transform = "perspective(1000px) rotateY(" + x * 6 + "deg) rotateX(" + -y * 6 + "deg)";
      });
      c.addEventListener("mouseleave", function () { c.style.transform = ""; });
    }
  });

  /* Custom cursor */
  if (fine && !reduce) {
    var cur = $(".cursor"), dot = $(".cursor-dot");
    if (cur && dot) {
      var mx = 0, my = 0, cx = 0, cy = 0;
      document.addEventListener("mousemove", function (e) { mx = e.clientX; my = e.clientY; dot.style.transform = "translate(" + mx + "px," + my + "px)"; });
      (function loop() { cx += (mx - cx) * .18; cy += (my - cy) * .18; cur.style.transform = "translate(" + cx + "px," + cy + "px)"; requestAnimationFrame(loop); })();
      $$("a,button,.g-item,label,summary").forEach(function (el) {
        el.addEventListener("mouseenter", function () { cur.classList.add("is-hover"); });
        el.addEventListener("mouseleave", function () { cur.classList.remove("is-hover"); });
      });
    }
  }

  /* Countdown */
  $$("[data-countdown]").forEach(function (box) {
    var target = new Date(box.dataset.countdown).getTime();
    var f = { d: $("[data-d]", box), h: $("[data-h]", box), m: $("[data-m]", box), s: $("[data-s]", box) };
    function pad(n) { return n < 10 ? "0" + n : "" + n; }
    function tick() {
      var diff = Math.max(0, target - Date.now());
      f.d.textContent = Math.floor(diff / 864e5);
      f.h.textContent = pad(Math.floor(diff / 36e5) % 24);
      f.m.textContent = pad(Math.floor(diff / 6e4) % 60);
      f.s.textContent = pad(Math.floor(diff / 1e3) % 60);
    }
    tick(); setInterval(tick, 1000);
  });

  /* Portfolio filter */
  var filters = $$(".filter"), items = $$(".g-item");
  filters.forEach(function (b) {
    b.addEventListener("click", function () {
      filters.forEach(function (x) { x.classList.remove("is-active"); x.setAttribute("aria-pressed", "false"); });
      b.classList.add("is-active"); b.setAttribute("aria-pressed", "true");
      var f = b.dataset.filter;
      items.forEach(function (it) { it.classList.toggle("is-hidden", f !== "all" && it.dataset.cat.indexOf(f) === -1); });
    });
  });

  /* Lightbox */
  var lb = $(".lightbox");
  if (lb && items.length) {
    var lbImg = $("img", lb), lbCap = $(".lightbox__cap", lb), idx = 0, lastFocus;
    function visible() { return items.filter(function (i) { return !i.classList.contains("is-hidden"); }); }
    function show(i) {
      var v = visible(); idx = (i + v.length) % v.length;
      var img = $("img", v[idx]); lbImg.src = img.dataset.full || img.src; lbImg.alt = img.alt;
      lbCap.textContent = $("figcaption", v[idx]) ? $("figcaption", v[idx]).textContent.trim() : "";
    }
    function open(el) { lastFocus = document.activeElement; show(visible().indexOf(el)); lb.classList.add("is-open"); lb.setAttribute("aria-hidden", "false"); $(".lb-close", lb).focus(); document.body.style.overflow = "hidden"; }
    function close() { lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); }
    items.forEach(function (it) {
      it.addEventListener("click", function () { open(it); });
      it.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(it); } });
    });
    $(".lb-close", lb).addEventListener("click", close);
    $(".lb-prev", lb).addEventListener("click", function () { show(idx - 1); });
    $(".lb-next", lb).addEventListener("click", function () { show(idx + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("is-open")) return;
      if (e.key === "Escape") close(); if (e.key === "ArrowLeft") show(idx - 1); if (e.key === "ArrowRight") show(idx + 1);
    });
    var sx = 0; lb.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", function (e) { var dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1)); });
  }

  /* Event Planner wizard */
  var planner = $("#planner-form");
  if (planner) {
    var steps = $$(".pstep", planner), bars = $$(".planner__steps i"), pi = 0;
    var prev = $("[data-prev]", planner), next = $("[data-next]", planner), send = $("[data-send]", planner);
    var guests = $("#p-guests"), gOut = $("#p-guests-out");
    function val(name) {
      var els = $$("[name='" + name + "']:checked", planner);
      return els.map(function (e) { return e.value; }).join(", ");
    }
    function sum() {
      var map = { type: val("p-type") || "—", guests: guests.value + (guests.value == guests.max ? "+" : ""), services: val("p-svc") || "—", date: $("#p-date").value || "Flexible", venue: $("#p-venue").value || "—" };
      $$("[data-sum]").forEach(function (el) { el.textContent = map[el.dataset.sum]; });
      return map;
    }
    function go(n) {
      if (n > pi && pi === 0 && !val("p-type")) { $(".pstep.is-active .form-status", planner).textContent = "Please select an event type."; return; }
      pi = Math.max(0, Math.min(steps.length - 1, n));
      steps.forEach(function (s, i) { s.classList.toggle("is-active", i === pi); });
      bars.forEach(function (b, i) { b.classList.toggle("is-done", i <= pi); });
      prev.style.visibility = pi === 0 ? "hidden" : "visible";
      next.hidden = pi === steps.length - 1; send.hidden = pi !== steps.length - 1;
      $$(".form-status", planner).forEach(function (s) { s.textContent = ""; });
      sum();
    }
    function rangeFill() { var p = (guests.value - guests.min) / (guests.max - guests.min) * 100; guests.style.setProperty("--p", p + "%"); gOut.firstChild.nodeValue = guests.value + (guests.value == guests.max ? "+" : ""); sum(); }
    guests.addEventListener("input", rangeFill); rangeFill();
    planner.addEventListener("change", sum);
    prev.addEventListener("click", function () { go(pi - 1); });
    next.addEventListener("click", function () { go(pi + 1); });
    planner.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = $("#p-name").value.trim(), phone = $("#p-phone").value.trim();
      if (!name || !phone) { $(".pstep.is-active .form-status", planner).textContent = "Please add your name and phone number."; return; }
      var m = sum();
      var msg = "Hello Infinity Events! I'd like to plan an event.\n\n" +
        "• Event: " + m.type + "\n• Guests: " + m.guests + "\n• Services: " + m.services + "\n• Date: " + m.date + "\n• Venue/City: " + m.venue +
        "\n\nName: " + name + "\nPhone: " + phone;
      window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(msg), "_blank", "noopener");
      if (window.dataLayer) window.dataLayer.push({ event: "generate_lead", lead_source: "event_planner", event_type: m.type });
    });
    go(0);
  }

  /* Contact form → mailto / WhatsApp (swap for Formspree/backend endpoint via data-endpoint) */
  var cf = $("#contact-form");
  if (cf) {
    cf.addEventListener("submit", function (e) {
      e.preventDefault();
      var st = $(".form-status", cf);
      if (cf.website && cf.website.value) return; // honeypot
      if (!cf.checkValidity()) { st.textContent = "Please complete the required fields."; cf.reportValidity(); return; }
      var d = new FormData(cf), endpoint = cf.dataset.endpoint;
      if (endpoint) {
        st.textContent = "Sending…";
        fetch(endpoint, { method: "POST", body: d, headers: { Accept: "application/json" } })
          .then(function (r) { if (!r.ok) throw 0; st.textContent = "Thank you! Our team will contact you within 24 hours."; cf.reset(); })
          .catch(function () { st.textContent = "Couldn't send. Please WhatsApp us on +971 58 931 0114."; });
      } else {
        var body = "Name: " + d.get("name") + "\nPhone: " + d.get("phone") + "\nEmail: " + d.get("email") + "\nEvent type: " + d.get("type") + "\nDate: " + (d.get("date") || "Flexible") + "\n\n" + d.get("message");
        location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Event enquiry — " + d.get("type") + " — " + d.get("name")) + "&body=" + encodeURIComponent(body);
        st.textContent = "Opening your email app… You can also WhatsApp us for a faster reply.";
      }
      if (window.dataLayer) window.dataLayer.push({ event: "generate_lead", lead_source: "contact_form" });
    });
  }

  /* Lazy video: only load hero video on larger screens / non-saving connections */
  var v = $(".hero__media video");
  if (v) {
    var save = navigator.connection && (navigator.connection.saveData || /2g/.test(navigator.connection.effectiveType || ""));
    if (!save && !reduce) { $$("source", v).forEach(function (s) { s.src = s.dataset.src; }); v.load(); var p = v.play(); if (p && p.catch) p.catch(function () {}); }
  }
})();
