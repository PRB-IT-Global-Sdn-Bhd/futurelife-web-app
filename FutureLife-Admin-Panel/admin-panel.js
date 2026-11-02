/* FutureLife Admin Panel preview - static behaviour only. Real permissions, states and data come from backend workflows. */
(function () {
  'use strict';
  var params = new URLSearchParams(location.search);

  /* Preview states: ?key=value switches [data-state-group] blocks (first block is the default). */
  document.querySelectorAll('[data-state-group]').forEach(function (g) {
    var keys = g.dataset.stateGroup.split(','), val = keys.map(function (k) { return params.get(k); }).join(':');
    var blocks = Array.prototype.filter.call(g.children, function (c) { return c.hasAttribute('data-state'); });
    var match = blocks.find(function (b) { return b.dataset.state === val; });
    if (g.hasAttribute('data-optional')) g.hidden = !match; else if (!match) match = blocks[0];
    blocks.forEach(function (b) { b.hidden = b !== match; });
  });
  var test = function (v) { var p = v.split('='); return p[1] === undefined ? params.has(p[0]) : params.get(p[0]) === p[1]; };
  document.querySelectorAll('[data-hide-with]').forEach(function (el) { if (test(el.dataset.hideWith)) el.hidden = true; });
  document.querySelectorAll('[data-show-with]').forEach(function (el) { el.hidden = !test(el.dataset.showWith); });

  /* Mark preview-state links and URL tabs whose query matches the current URL. */
  var matches = function (href) {
    var u = new URL(href, location.href);
    if (u.pathname !== location.pathname) return false;
    var ok = true; u.searchParams.forEach(function (v, k) { if (params.get(k) !== v) ok = false; });
    return ok && Array.from(u.searchParams.keys()).length > 0;
  };
  document.querySelectorAll('.account-links a[data-state-link]').forEach(function (l) { if (matches(l.getAttribute('href'))) l.setAttribute('aria-current', 'page'); });
  document.querySelectorAll('[data-tab-key]').forEach(function (nav) {
    var cur = params.get(nav.dataset.tabKey), links = nav.querySelectorAll('[data-tab]');
    links.forEach(function (l, i) { var on = cur ? l.dataset.tab === cur : i === 0; l.classList.toggle('active', on); if (on) l.setAttribute('aria-current', 'page'); });
  });
  /* Default preview-state link: first one when no params. */
  document.querySelectorAll('.account-links').forEach(function (nav) {
    var links = nav.querySelectorAll('a[data-state-link]');
    if (links.length && !nav.querySelector('[aria-current]') && !location.search) links[0].setAttribute('aria-current', 'page');
  });

  /* Table filters: button groups and selects with data-filter-for, plus search inputs. */
  var tables = {};
  document.querySelectorAll('[data-filter-for],[data-search-for]').forEach(function (el) { var id = el.dataset.filterFor || el.dataset.searchFor; tables[id] = true; });
  var apply = function (id) {
    var body = document.getElementById(id); if (!body) return;
    var groups = document.querySelectorAll('[data-filter-for="' + id + '"]'), crit = [];
    groups.forEach(function (g) {
      var v = g.tagName === 'SELECT' ? g.value : ((g.querySelector('.filter.active') || {}).dataset || {}).value;
      if (v && v !== 'all') crit.push([g.dataset.filterKey, v]);
    });
    var s = document.querySelector('[data-search-for="' + id + '"]'), q = s ? s.value.trim().toLowerCase() : '', shown = 0;
    Array.prototype.forEach.call(body.rows, function (r) {
      var ok = crit.every(function (c) { return r.dataset[c[0].replace(/-([a-z])/g, function (m, x) { return x.toUpperCase(); })] === c[1]; }) && (!q || r.textContent.toLowerCase().indexOf(q) > -1);
      r.hidden = !ok; if (ok) shown++;
    });
    var empty = document.querySelector('[data-empty-for="' + id + '"]'); if (empty) empty.hidden = shown > 0;
  };
  Object.keys(tables).forEach(function (id) {
    document.querySelectorAll('[data-filter-for="' + id + '"]').forEach(function (g) {
      var pre = params.get(g.dataset.filterKey);
      if (g.tagName === 'SELECT') {
        if (pre && g.querySelector('option[value="' + pre + '"]')) g.value = pre;
        g.addEventListener('change', function () { apply(id); });
      } else {
        var btns = g.querySelectorAll('.filter');
        var set = function (b) { btns.forEach(function (x) { x.classList.toggle('active', x === b); x.setAttribute('aria-pressed', String(x === b)); }); };
        var preBtn = pre && g.querySelector('.filter[data-value="' + pre + '"]'); set(preBtn || btns[0]);
        btns.forEach(function (b) { b.addEventListener('click', function () { set(b); apply(id); }); });
      }
    });
    var s = document.querySelector('[data-search-for="' + id + '"]'); if (s) s.addEventListener('input', function () { apply(id); });
    apply(id);
  });

  /* Preview notices for actions that need a backend. */
  document.querySelectorAll('[data-preview-notice]').forEach(function (b) {
    b.addEventListener('click', function () {
      var scope = b.closest('section,form,article,.panel'), n = null;
      if (b.closest('.heading') || b.closest('td')) scope = null;
      var bar = b.closest('.actions');
      if (bar && bar.parentElement && scope) n = bar.parentElement.querySelector('.notice');
      if (!n && scope) n = scope.querySelector('.notice');
      if (!n) { n = document.getElementById('global-notice'); }
      if (n) { n.hidden = false; n.textContent = b.dataset.previewNotice; }
    });
  });

  /* Destructive actions: confirmation panel with a required reason and note. */
  document.querySelectorAll('[data-confirm]').forEach(function (b) {
    b.addEventListener('click', function () {
      var p = document.getElementById(b.dataset.confirm); if (!p) return;
      document.querySelectorAll('.confirm-panel').forEach(function (x) { if (x !== p) x.hidden = true; });
      p.hidden = false; var n = p.querySelector('.notice'); n.hidden = true;
      p.scrollIntoView({ block: 'nearest' }); var f = p.querySelector('select'); if (f) f.focus();
    });
  });
  document.querySelectorAll('.confirm-panel').forEach(function (p) {
    p.querySelector('[data-confirm-cancel]').addEventListener('click', function () { p.hidden = true; });
    p.querySelector('[data-confirm-submit]').addEventListener('click', function () {
      var reason = p.querySelector('select[required]'), note = p.querySelector('textarea[required]'), n = p.querySelector('.notice');
      n.hidden = false;
      if (!reason.value || !note.value.trim()) { n.classList.add('error'); n.textContent = 'Choose a reason and add an internal note before confirming.'; return; }
      n.classList.remove('error');
      n.textContent = 'Preview only — in the live admin this runs as a backend workflow with a role check and is recorded in the audit log.';
    });
  });

  /* Page title follows the visible heading. */
  var h = Array.prototype.find.call(document.querySelectorAll('main h1'), function (x) { return !x.closest('[hidden]'); });
  if (h && document.querySelector('[data-state-group]')) document.title = 'FutureLife Admin — ' + h.textContent;
})();
