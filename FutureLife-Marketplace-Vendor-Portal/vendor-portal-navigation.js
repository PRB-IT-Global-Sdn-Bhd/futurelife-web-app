(() => {
  const ROUTES = {
    dashboard: 'marketplace-vendor-dashboard.html',
    listings: 'marketplace-vendor-listings.html',
    orders: 'marketplace-vendor-orders.html',
    payouts: 'marketplace-vendor-payouts.html',
    billing: 'marketplace-vendor-plans-and-subscriptions.html',
    billingPlans: 'marketplace-vendor-plans-and-subscriptions.html',
    sponsoredListings: 'marketplace-vendor-sponsored-listings.html',
    messages: 'marketplace-vendor-messages.html',
    notifications: 'marketplace-vendor-notifications.html',
    profile: 'marketplace-vendor-profile.html',
    listingGuidelines: 'marketplace-vendor-listing-guidelines.html',
    login: 'marketplace-vendor-signin.html?loggedout=1'
  };

  const hashRoutes = {
    '#dashboard': ROUTES.dashboard,
    '#listings': ROUTES.listings,
    '#orders': ROUTES.orders,
    '#payouts': ROUTES.payouts,
    '#billing': ROUTES.billing,
    '#billing-plans': ROUTES.billingPlans,
    '#messages': ROUTES.messages,
    '#profile': ROUTES.profile,
    '#vendor-profile': ROUTES.profile,
    '#notifications': ROUTES.notifications,
    '#listing-guidelines': ROUTES.listingGuidelines,
    '#logout': ROUTES.login
  };

  const labelRoutes = {
    dashboard: ROUTES.dashboard,
    listings: ROUTES.listings,
    orders: ROUTES.orders,
    payouts: ROUTES.payouts,
    billing: ROUTES.billing,
    'plans & subscriptions': ROUTES.billingPlans,
    'plans & sponsored listings': ROUTES.billingPlans,
    'sponsored listings': ROUTES.sponsoredListings,
    messages: ROUTES.messages,
    profile: ROUTES.profile,
    'vendor profile': ROUTES.profile,
    'marketplace vendor portal': ROUTES.dashboard,
    'future life': ROUTES.dashboard,
    'back to dashboard': ROUTES.dashboard
  };

  function labelOf(link) {
    return link.textContent.replace(/[›←]/g, '').replace(/\s+\d+$/g, '').trim().toLowerCase();
  }

  function addNotificationsLink(nav) {
    if (!nav || [...nav.querySelectorAll('a')].some((link) => link.getAttribute('href') === ROUTES.notifications)) return;
    const messages = [...nav.querySelectorAll('a')].find((link) => labelOf(link) === 'messages');
    const link = document.createElement('a');
    link.href = ROUTES.notifications;
    link.textContent = 'Notifications';
    if (messages) messages.insertAdjacentElement('afterend', link);
    else nav.appendChild(link);
  }

  function routeLegacyAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      const href = link.getAttribute('href');
      const destination = hashRoutes[href] || labelRoutes[labelOf(link)];
      if (destination) link.setAttribute('href', destination);
    });
  }

  function exposeNotifications() {
    document.querySelectorAll('.side-menu').forEach(addNotificationsLink);
  }

  function addBillingSubpageStyles() {
    if (document.getElementById('marketplace-billing-subpage-styles')) return;
    const style = document.createElement('style');
    style.id = 'marketplace-billing-subpage-styles';
    style.textContent = `
      .side-menu .billing-parent { display:flex; min-height:34px; align-items:center; padding:0 8px; background:#f7fceb; color:#397d13; font-size:11px; }
      .side-menu a.billing-sub-link { min-height:28px; padding-left:21px; color:#6c6f75; font-size:10px; }
      .side-menu a.billing-sub-link::before { content:'›'; margin-right:7px; color:#98a18f; font-size:13px; }
      .side-menu a.billing-sub-link:hover, .side-menu a.billing-sub-link.active { color:#397d13; }
    `;
    document.head.appendChild(style);
  }

  /* Billing holds exactly two pages: Plans & Subscriptions and Sponsored Listings.
     Payouts are vendor earnings, so they stay a separate top-level item. */
  function buildBillingGroup() {
    const page = window.location.pathname.split('/').pop() || '';
    const activeSub = page === ROUTES.billingPlans ? 'plans' : page === ROUTES.sponsoredListings ? 'sponsored' : '';
    document.querySelectorAll('.side-menu').forEach((nav) => {
      const payoutsLink = [...nav.querySelectorAll('a')].find((link) => link.getAttribute('href') === ROUTES.payouts);
      if (payoutsLink) {
        payoutsLink.textContent = 'Payouts';
        payoutsLink.classList.remove('billing-sub-link');
      }
      nav.querySelectorAll('a.billing-sub-link').forEach((link) => link.remove());
      let billing = nav.querySelector('.billing-parent');
      if (!billing || billing.tagName !== 'A') {
        const billingLink = document.createElement('a');
        billingLink.className = 'billing-parent';
        if (billing) billing.replaceWith(billingLink);
        else if (payoutsLink) payoutsLink.insertAdjacentElement('beforebegin', billingLink);
        else nav.appendChild(billingLink);
        billing = billingLink;
      }
      billing.href = ROUTES.billingPlans;
      billing.textContent = 'Billing';
      billing.classList.toggle('active', Boolean(activeSub));
      billing.removeAttribute('aria-current');
      const items = [['plans', ROUTES.billingPlans, 'Plans & Subscriptions'], ['sponsored', ROUTES.sponsoredListings, 'Sponsored Listings']];
      let after = billing;
      items.forEach(([key, href, label]) => {
        const link = document.createElement('a');
        link.className = 'billing-sub-link';
        link.href = href;
        link.textContent = label;
        if (key === activeSub) {
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        }
        after.insertAdjacentElement('afterend', link);
        after = link;
      });
      if (payoutsLink && payoutsLink.previousElementSibling !== after) after.insertAdjacentElement('afterend', payoutsLink);
    });
  }

  function activeKeyForPath() {
    const page = window.location.pathname.split('/').pop() || '';
    if (page.includes('dashboard')) return 'dashboard';
    if (page.includes('create-listing') || page.includes('listing-guidelines') || (page.includes('listings') && !page.includes('sponsored-listings'))) return 'listings';
    if (page.includes('order-details') || page.includes('order-issue') || page.includes('orders')) return 'orders';
    if (page.includes('earnings-breakdown') || page.includes('payout-statement') || page.includes('payout-account') || page.includes('payout-hold') || page.includes('payouts')) return 'payouts';
    if (page.includes('plans-and-subscriptions') || page.includes('sponsored-listings')) return 'billing';
    if (page.includes('messages')) return 'messages';
    if (page.includes('notifications')) return 'notifications';
    if (page.includes('profile') || page.includes('fulfilment') || page.includes('account-security')) return 'profile';
    return '';
  }

  function setupMobileMenu() {
    const menu = document.querySelector('aside.sidebar, aside.desktop-sidebar');
    const header = document.querySelector('.mobile-header');
    if (!menu || !header || !menu.querySelector('.side-menu') || document.getElementById('menu-toggle')) return;
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

  function indicateCurrentPage() {
    const current = window.location.pathname.split('/').pop();
    document.querySelectorAll('.side-menu a:not(.billing-parent):not(.billing-sub-link)').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || !href.endsWith(current)) return;
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    });
  }

  function initialise() {
    routeLegacyAnchors();
    exposeNotifications();
    addBillingSubpageStyles();
    buildBillingGroup();
    indicateCurrentPage();
    setupMobileMenu();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialise);
  else initialise();
})();
