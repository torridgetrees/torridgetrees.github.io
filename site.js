/* Fills the pages in from site-config.js. You shouldn't need to edit this file. */
(function () {
  var C = window.SITE_CONFIG || {};
  function $all(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }

  // Plain text values: <span data-cfg="email"></span> (keeps the built-in text if a setting is empty)
  $all("[data-cfg]").forEach(function (el) {
    var val = C[el.getAttribute("data-cfg")];
    if (val) el.textContent = val;
  });

  // Links: <a data-href="orderFormUrl">
  $all("[data-href]").forEach(function (el) {
    var key = el.getAttribute("data-href");
    var val = C[key];
    if (!val) { if (el.hasAttribute("data-hide-if-empty")) el.style.display = "none"; return; }
    if (key === "email") val = "mailto:" + val;
    if (key === "phone") val = "tel:" + val.replace(/\s+/g, "");
    el.setAttribute("href", val);
  });

  // Embedded order form (optional)
  $all("[data-form-embed]").forEach(function (el) {
    if (!C.orderFormEmbedUrl) { el.style.display = "none"; return; }
    var f = document.createElement("iframe");
    f.src = C.orderFormEmbedUrl; f.title = "Order form"; f.loading = "lazy";
    el.appendChild(f);
  });

  // Footer year
  $all("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

  // Mobile menu
  var btn = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".site-nav");
  if (btn && nav) btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();
