// Hero Carousel
var cur = 0;
var slides = document.querySelectorAll('.hslide');
var dots = document.querySelectorAll('.hdot');
var timer;
if (slides.length) {
  timer = setInterval(function(){ goTo((cur + 1) % slides.length); }, 5500);
}
function goTo(n) {
  if (!slides.length) return;
  slides[cur].classList.remove('active');
  if (dots[cur]) dots[cur].classList.remove('active');
  cur = n;
  slides[cur].classList.add('active');
  if (dots[cur]) dots[cur].classList.add('active');
  clearInterval(timer);
  timer = setInterval(function(){ goTo((cur + 1) % slides.length); }, 5500);
}

// Nav scroll shadow
var nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', function(){
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, {passive: true});
}

// Fade-in on scroll
var faders = document.querySelectorAll('.fade-in');
if (faders.length && 'IntersectionObserver' in window) {
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, {threshold: 0.12});
  faders.forEach(function(el){ io.observe(el); });
} else {
  faders.forEach(function(el){ el.classList.add('visible'); });
}
