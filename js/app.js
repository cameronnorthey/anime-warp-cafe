// ---------- mobile nav ----------
(function () {
  const hamburger = document.querySelector(".aw-hamburger");
  const nav = document.querySelector(".aw-nav");
  const overlay = document.querySelector(".aw-nav-overlay");
  if (!hamburger || !nav || !overlay) return;

  function closeNav() {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    overlay.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  }
  function toggleNav() {
    const isOpen = nav.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    overlay.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  }

  hamburger.addEventListener("click", toggleNav);
  overlay.addEventListener("click", closeNav);
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
  window.addEventListener("resize", () => { if (window.innerWidth > 820) closeNav(); });
})();

// ---------- portal menu builder ----------
(function () {
  const pillsEl = document.getElementById("trope-pills");
  const taglineEl = document.getElementById("trope-tagline");
  const gridEl = document.getElementById("menu-grid");
  if (!pillsEl || !taglineEl || !gridEl || typeof TROPES === "undefined") return;

  let activeId = null;

  function renderPills() {
    pillsEl.innerHTML = TROPES.map(
      (t) => `<button class="pill ${t.id === activeId ? "active" : ""}" data-id="${t.id}">${t.name}</button>`
    ).join("");

    pillsEl.querySelectorAll(".pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeId = btn.getAttribute("data-id");
        renderPills();
        renderMenu();
      });
    });
  }

  function renderMenu() {
    const t = TROPES.find((x) => x.id === activeId);
    if (!t) return;

    taglineEl.textContent = t.tagline;

    gridEl.innerHTML = t.items
      .map(
        (item) => `
        <div class="menu-card">
          <h4>${item.title}</h4>
          <p>${item.note}</p>
          <div class="price">${item.price}</div>
        </div>`
      )
      .join("");
  }

  // Auto-select Slice of Life so the tool doesn't look empty on load,
  // matching the approved Kawaii Portal mockup's example selection.
  activeId = TROPES.some((t) => t.id === "slice-of-life") ? "slice-of-life" : (TROPES[0] && TROPES[0].id);

  renderPills();
  renderMenu();

  // Allow deep-linking from the homepage hero CTA (#builder) or a
  // trope-specific link (#builder-<id>) without extra wiring.
  if (window.location.hash && window.location.hash.startsWith("#builder-")) {
    const wanted = window.location.hash.replace("#builder-", "");
    if (TROPES.some((t) => t.id === wanted)) {
      activeId = wanted;
      renderPills();
      renderMenu();
    }
  }
})();

// ---------- customer quote carousel (home page) ----------
(function () {
  const track = document.getElementById("quoteTrack");
  const dotsEl = document.getElementById("quoteDots");
  if (!track || !dotsEl) return;

  const slides = Array.from(track.children);
  if (slides.length < 2) return;

  let index = 0;
  let timer = null;
  const AUTO_ADVANCE_MS = 6000;

  dotsEl.innerHTML = slides
    .map((_, i) => `<button class="quote-dot${i === 0 ? " active" : ""}" aria-label="Show quote ${i + 1}"></button>`)
    .join("");
  const dots = Array.from(dotsEl.children);

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle("active", di === index));
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(() => goTo(index + 1), AUTO_ADVANCE_MS);
  }
  function stopAuto() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      goTo(i);
      startAuto();
    });
  });

  const carousel = document.getElementById("quoteCarousel");
  if (carousel) {
    carousel.addEventListener("mouseenter", stopAuto);
    carousel.addEventListener("mouseleave", startAuto);
  }

  goTo(0);
  startAuto();
})();

// ---------- contact form "message received" (contact page) ----------
(function () {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  const nameEl = document.getElementById("successName");
  const again = document.getElementById("sendAnother");
  if (!form || !success) return;
  const fields = form.querySelector(".form-grid");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = (form.elements["name"].value || "").trim().split(/\s+/)[0];
    nameEl.textContent = name || "friend";
    fields.hidden = true;
    success.hidden = false;
    success.focus({ preventScroll: true });
    success.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  if (again) {
    again.addEventListener("click", function () {
      form.reset();
      success.hidden = true;
      fields.hidden = false;
      form.elements["name"].focus();
    });
  }
})();
