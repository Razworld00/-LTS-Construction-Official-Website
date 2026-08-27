/* LTS Construction – interactions + dark mode */

document.addEventListener('DOMContentLoaded', () => {
  // ---------- Theme (Dark Mode) ----------
  const root = document.documentElement;
  const stored = localStorage.getItem('lts-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initial = stored || (prefersDark ? 'dark' : 'light');
  root.setAttribute('data-theme', initial);

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('lts-theme', next);
    });
  });

  // ---------- Mobile menu ----------
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.nav-mobile');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---------- Header scroll shadow ----------
  const header = document.querySelector('.header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---------- Project gallery lightbox ----------
  const lb = document.createElement('div');
  lb.className = 'gallery-lightbox';
  lb.innerHTML = `
    <button type="button" class="gallery-lightbox__close" aria-label="Close gallery">&times;</button>
    <div class="gallery-lightbox__stage"><img src="" alt="" /></div>
    <div class="gallery-lightbox__caption"><strong></strong><span></span></div>
    <div class="gallery-lightbox__nav">
      <button type="button" class="gallery-lightbox__prev" aria-label="Previous image">&#8249;</button>
      <span class="gallery-lightbox__counter"></span>
      <button type="button" class="gallery-lightbox__next" aria-label="Next image">&#8250;</button>
    </div>`;
  document.body.appendChild(lb);

  const lbImg = lb.querySelector('.gallery-lightbox__stage img');
  const lbTitle = lb.querySelector('.gallery-lightbox__caption strong');
  const lbDesc = lb.querySelector('.gallery-lightbox__caption span');
  const lbCounter = lb.querySelector('.gallery-lightbox__counter');
  let gallery = [];
  let gIndex = 0;
  let gTitle = '';
  let gDesc = '';

  function showGalleryImage() {
    if (!gallery.length) return;
    lbImg.src = gallery[gIndex];
    lbImg.alt = gTitle + ' — image ' + (gIndex + 1);
    lbTitle.textContent = gTitle;
    lbDesc.textContent = gDesc;
    lbCounter.textContent = (gIndex + 1) + ' / ' + gallery.length;
  }

  function openGallery(card) {
    try {
      gallery = JSON.parse(card.getAttribute('data-gallery') || '[]');
    } catch (e) {
      gallery = [];
    }
    if (!gallery.length) return;
    gTitle = card.getAttribute('data-gallery-title') || 'Project gallery';
    gDesc = card.getAttribute('data-gallery-desc') || '';
    gIndex = 0;
    showGalleryImage();
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeGallery() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    lbImg.src = '';
  }

  document.querySelectorAll('.project-card[data-gallery]').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      openGallery(card);
    });
  });

  lb.querySelector('.gallery-lightbox__close').addEventListener('click', closeGallery);
  lb.querySelector('.gallery-lightbox__prev').addEventListener('click', () => {
    if (!gallery.length) return;
    gIndex = (gIndex - 1 + gallery.length) % gallery.length;
    showGalleryImage();
  });
  lb.querySelector('.gallery-lightbox__next').addEventListener('click', () => {
    if (!gallery.length) return;
    gIndex = (gIndex + 1) % gallery.length;
    showGalleryImage();
  });
  lb.addEventListener('click', (e) => {
    if (e.target === lb) closeGallery();
  });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowLeft') {
      gIndex = (gIndex - 1 + gallery.length) % gallery.length;
      showGalleryImage();
    }
    if (e.key === 'ArrowRight') {
      gIndex = (gIndex + 1) % gallery.length;
      showGalleryImage();
    }
  });

});
