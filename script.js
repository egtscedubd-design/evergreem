// মোবাইল মেনু খোলা ও বন্ধ করার কোড
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function () {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

// মেনুর কোনো লিংকে চাপ দিলে মোবাইল মেনু বন্ধ হবে
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

// ফুটারে চলতি বছর দেখানো
 document.getElementById('year').textContent = new Date().getFullYear();

// পেজ নিচে নামালে Back to top বাটন দেখানো
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', function () {
  backTop.classList.toggle('show', window.scrollY > 350);
});
backTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
