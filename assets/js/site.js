// NH Solutions — interactions
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  // Header shadow + mobile menu
  const header = $(".site-header");
  const onScroll = () => header && header.classList.toggle("scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  $(".menu-toggle")?.addEventListener("click", () => {
    header.classList.toggle("menu-open");
    document.body.style.overflow = header.classList.contains("menu-open") ? "hidden" : "";
  });
  $$(".has-mega > button").forEach((b) =>
    b.addEventListener("click", () => {
      const li = b.parentElement;
      const open = !li.classList.contains("open");
      $$(".has-mega").forEach((x) => x.classList.remove("open"));
      li.classList.toggle("open", open);
      b.setAttribute("aria-expanded", open);
    })
  );
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".has-mega")) $$(".has-mega").forEach((x) => x.classList.remove("open"));
  });

  // Hero slides
  const slides = $$(".hero-slide");
  if (slides.length > 1) {
    let i = 0;
    const show = (n) => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle("active", k === i));
    };
    $(".hero-prev")?.addEventListener("click", () => show(i - 1));
    $(".hero-next")?.addEventListener("click", () => show(i + 1));
  }

  // Case study slider
  $$(".slider").forEach((sl) => {
    const track = $(".slider-track", sl);
    const n = track.children.length;
    let i = 0;
    const go = (k) => {
      i = (k + n) % n;
      track.style.transform = `translateX(-${i * 100}%)`;
    };
    const root = sl.closest("section");
    $(".s-prev", root)?.addEventListener("click", () => go(i - 1));
    $(".s-next", root)?.addEventListener("click", () => go(i + 1));
  });

  // Horizontal scrollers with buttons
  $$("[data-scroll-target]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const t = document.getElementById(btn.dataset.scrollTarget);
      if (!t) return;
      const dir = btn.dataset.dir === "prev" ? -1 : 1;
      t.scrollBy({ left: dir * t.clientWidth * 0.8, behavior: "smooth" });
    });
  });

  // FAQ
  $$(".faq-q").forEach((q) =>
    q.addEventListener("click", () => {
      const item = q.parentElement;
      item.classList.toggle("open");
      q.setAttribute("aria-expanded", item.classList.contains("open"));
    })
  );

  // Tabs
  $$("[data-tabs]").forEach((wrap) => {
    const btns = $$(".tabs .chip", wrap);
    const panels = $$(".tab-panel", wrap);
    btns.forEach((b, k) =>
      b.addEventListener("click", () => {
        btns.forEach((x) => x.classList.toggle("active", x === b));
        panels.forEach((p, j) => p.classList.toggle("active", j === k));
      })
    );
  });

  // Portfolio + insights filters
  $$("[data-filter-group]").forEach((group) => {
    const scope = group.closest("section");
    const items = $$("[data-tags]", scope);
    $$("button.chip", group).forEach((b) =>
      b.addEventListener("click", () => {
        $$("[data-filter-group] button.chip", scope).forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
        const f = b.dataset.filter;
        items.forEach((it) => it.classList.toggle("hide", f !== "all" && !it.dataset.tags.split(" ").includes(f)));
      })
    );
  });

  // Counters
  const countUp = (el) => {
    const raw = el.dataset.count;
    const target = parseFloat(raw);
    const suffix = raw.replace(/[\d.]/g, "");
    const dur = 1400;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const v = target * (1 - Math.pow(1 - p, 3));
      el.textContent = (target % 1 ? v.toFixed(1) : Math.round(v)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  // Reveal on scroll
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        $$("[data-count]", e.target).forEach(countUp);
        if (e.target.dataset.count) countUp(e.target);
        io.unobserve(e.target);
      }),
    { threshold: 0.12 }
  );
  $$(".reveal").forEach((el) => io.observe(el));

  // Contact form: opens the visitor's email app with a pre-filled message to the sales inbox
  $$("form.lead-form").forEach((f) =>
    f.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!f.reportValidity()) return;
      const v = (n) => (f.elements[n] ? f.elements[n].value.trim() : "");
      const body = [
        `Name: ${v("fn")} ${v("ln")}`,
        `Email: ${v("em")}`,
        `Company: ${v("co") || "-"}`,
        `Country: ${v("ct")}`,
        `Phone: ${v("cc")} ${v("ph") || "-"}`,
        `Budget: ${v("bd")}`,
        "",
        v("msg"),
      ].join("\n");
      const subject = `New project enquiry from ${v("fn")} ${v("ln")}`;
      window.location.href = `mailto:${f.dataset.to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      $(".form-success", f)?.classList.add("show");
    })
  );

  // Year
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
