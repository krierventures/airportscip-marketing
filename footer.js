// Shared site footer — single source of truth for every page.
// Usage: <footer id="site-footer"></footer> <script src="/footer.js"></script>
(function () {
  var el = document.getElementById('site-footer');
  if (!el) return;
  var year = new Date().getFullYear();
  el.className = 'site-footer';
  el.innerHTML =
    '<style>' +
    '.site-footer{background:#07111f;padding:48px 2rem;border-top:1px solid rgba(255,255,255,0.05);}' +
    '.site-footer .sf-inner{max-width:1120px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:24px;}' +
    '.site-footer .sf-logo{display:flex;align-items:center;gap:8px;font-size:16px;font-weight:600;color:rgba(255,255,255,0.38);}' +
    '.site-footer .sf-logo img{width:28px;height:28px;object-fit:contain;opacity:0.5;}' +
    '.site-footer .sf-name span{color:#60a5fa;}' +
    '.site-footer .sf-links{display:flex;gap:28px;}' +
    '.site-footer .sf-links a{font-size:13px;color:rgba(255,255,255,0.25);text-decoration:none;transition:color .15s;}' +
    '.site-footer .sf-links a:hover{color:rgba(255,255,255,0.55);}' +
    '.site-footer .sf-copy{font-size:12px;color:rgba(255,255,255,0.15);}' +
    '</style>' +
    '<div class="sf-inner">' +
      '<div class="sf-logo"><img src="/logo.png" alt="AirportsCIP logo" /><span class="sf-name">Airports<span>CIP</span></span></div>' +
      '<div class="sf-links">' +
        '<a href="/privacy">Privacy Policy</a>' +
        '<a href="/terms">Terms of Service</a>' +
        '<a href="mailto:hello@airportscip.com">Contact</a>' +
      '</div>' +
      '<div class="sf-copy">&copy; ' + year + ' AirportsCIP. All rights reserved.</div>' +
    '</div>';
})();
