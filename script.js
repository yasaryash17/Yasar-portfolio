// ── CURSOR GLOW ──
const glow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top  = e.clientY + 'px';
});

// ── NAVBAR SCROLL ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

// ── HAMBURGER ──
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// ── TYPED EFFECT ──
const phrases = [
  'Software Developer in Making',
  'IoT Enthusiast',
  'Problem Solver',
  'ECE Student @ Rathinam',
];
let pi = 0, ci = 0, deleting = false;
const typedEl = document.getElementById('typed');
function type() {
  const phrase = phrases[pi];
  typedEl.textContent = deleting ? phrase.slice(0, ci--) : phrase.slice(0, ci++);
  if (!deleting && ci > phrase.length) { deleting = true; setTimeout(type, 1400); return; }
  if (deleting && ci < 0)  { deleting = false; pi = (pi + 1) % phrases.length; ci = 0; }
  setTimeout(type, deleting ? 45 : 90);
}
type();

// ── SCROLL REVEAL ──
const revealEls = document.querySelectorAll(
  '.skill-category, .project-card, .timeline-item, .cert-card, .achieve-card, .contact-card, .about-grid, .info-card'
);
revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

// ── ACTIVE NAV LINK ──
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
  navAs.forEach(a => {
    a.style.color = '';
    if (a.getAttribute('href') === '#' + current) a.style.color = 'var(--accent1)';
  });
});
