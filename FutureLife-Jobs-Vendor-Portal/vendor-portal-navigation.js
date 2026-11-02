/* FutureLife Jobs Vendor Portal - mobile hamburger drawer.
   Same drawer behaviour as the Marketplace vendor-portal-navigation.js (setupMobileMenu):
   below 960px the sidebar becomes a drawer; desktop is unchanged. */
(() => {
  function setupMobileMenu() {
    const menu = document.querySelector('aside.sidebar, aside.desktop-sidebar');
    const header = document.querySelector('.mobile-head, .mobile-header');
    if (!menu || !header || !menu.querySelector('.nav-list, .side-menu') || document.getElementById('menu-toggle')) return;
    if (!menu.id) menu.id = 'vendor-menu';
    menu.classList.add('vp-drawer');

    const closeButton = document.createElement('button');
    closeButton.className = 'menu-close';
    closeButton.id = 'menu-close';
    closeButton.type = 'button';
    closeButton.setAttribute('aria-label', 'Close menu');
    closeButton.textContent = '✕';
    menu.insertBefore(closeButton, menu.firstElementChild ? menu.firstElementChild.nextSibling : null);

    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.id = 'menu-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);

    const toggle = document.createElement('button');
    toggle.className = 'menu-toggle';
    toggle.id = 'menu-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Open menu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', menu.id);
    toggle.innerHTML = '<span></span><span></span><span></span>';
    const start = document.createElement('span');
    start.className = 'mobile-header-start';
    const first = header.firstElementChild;
    header.insertBefore(start, first);
    start.appendChild(toggle);
    if (first) start.appendChild(first);

    const mobile = window.matchMedia('(max-width: 960px)');
    function setMenu(open, returnFocus) {
      menu.classList.toggle('open', open);
      overlay.classList.toggle('open', open);
      document.body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      if (open) closeButton.focus();
      else if (returnFocus) toggle.focus();
    }
    toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open'), false));
    closeButton.addEventListener('click', () => setMenu(false, true));
    overlay.addEventListener('click', () => setMenu(false, true));
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && menu.classList.contains('open')) setMenu(false, true); });
    menu.addEventListener('click', (event) => { if (event.target.closest('a') && mobile.matches) setMenu(false, false); });
    const closeOnDesktop = () => { if (!mobile.matches && menu.classList.contains('open')) setMenu(false, false); };
    if (mobile.addEventListener) mobile.addEventListener('change', closeOnDesktop);
    else if (mobile.addListener) mobile.addListener(closeOnDesktop);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setupMobileMenu);
  else setupMobileMenu();
})();
