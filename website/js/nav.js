// Mobile menu: adds a tap-to-open toggle to the shared site nav
(function () {
  var nav = document.getElementById('nav');
  if (!nav) return;
  var links = nav.querySelector('.nav-links');
  if (!links || nav.querySelector('.nav-toggle')) return;
  if (!links.id) links.id = 'nav-links';
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'nav-toggle';
  btn.setAttribute('aria-controls', links.id);
  btn.innerHTML = '<span></span><span></span><span></span>';
  nav.appendChild(btn);
  function setOpen(open) {
    nav.classList.toggle('nav-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  setOpen(false);
  btn.addEventListener('click', function () { setOpen(!nav.classList.contains('nav-open')); });
  links.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  window.addEventListener('resize', function () { if (window.innerWidth > 900) setOpen(false); });
})();
