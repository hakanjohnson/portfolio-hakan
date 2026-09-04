const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('mobile-open', !open);
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('mobile-open');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const style = document.createElement('style');
style.textContent = `
  @media (max-width: 900px) {
    .nav.mobile-open {
      display: flex;
      position: absolute;
      top: 70px;
      left: 0;
      right: 0;
      padding: 20px 6vw;
      flex-direction: column;
      gap: 18px;
      background: #f5f5f2;
      border-bottom: 1px solid #deded9;
    }
  }
`;
document.head.appendChild(style);
