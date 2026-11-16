"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";

export type PortalNavItem = {
  href: string;
  label: string;
  active?: boolean;
  badge?: string;
};

export type VendorPortalShellProps = {
  portalName: string;
  portalTitle: string;
  accountLabel: string;
  accountHint: string;
  monogram: string;
  navItems: PortalNavItem[];
  children: React.ReactNode;
};

export function VendorPortalShell({
  portalName,
  portalTitle,
  accountLabel,
  accountHint,
  monogram,
  navItems,
  children,
}: VendorPortalShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navId = useId();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
  <>
      <aside
        className={`fixed bottom-0 left-0 top-0 z-[7] w-[min(280px,86vw)] border-r border-fl-line bg-fl-white transition-transform max-[960px]:block min-[961px]:w-[var(--fl-sidebar-width)] min-[961px]:translate-x-0 ${
          menuOpen
            ? "max-[960px]:visible max-[960px]:translate-x-0"
            : "max-[960px]:invisible max-[960px]:-translate-x-full"
        }`}
        aria-label="Vendor portal navigation"
      >
        <Link
          href="/shell"
          className="block px-5 py-3 text-[11px] font-bold tracking-wide text-fl-green"
        >
          FUTURE LIFE
        </Link>
        <Link
          href="#profile"
          className="grid grid-cols-[31px_1fr_12px] items-center gap-2 border-y border-fl-line bg-[#f7fceb] px-2.5 py-2 text-[#397d13] no-underline"
        >
          <span className="grid h-[31px] w-[31px] place-items-center bg-fl-green text-[10px] font-bold text-fl-white">
            {monogram}
          </span>
          <span>
            <strong className="block text-[10px]">{accountLabel}</strong>
            <span className="mt-0.5 block text-[8px] text-[#60805e]">
              {accountHint}
            </span>
          </span>
          <span className="text-[15px]">›</span>
        </Link>
        <section className="px-2 pt-3">
          <p className="mb-2 px-2 text-[10px] font-bold text-[#a7aaaf]">
            Vendor portal
          </p>
          <nav className="grid gap-0.5" aria-label="Vendor portal pages" id={navId}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex min-h-[34px] items-center px-2 text-[11px] no-underline ${
                  item.active
                    ? "bg-[#f7fceb] text-[#397d13]"
                    : "text-[#3e4147] hover:bg-[#f7fceb] hover:text-[#397d13]"
                }`}
                aria-current={item.active ? "page" : undefined}
                onClick={closeMenu}
              >
                {item.label}
                {item.badge ? (
                  <span className="ml-auto min-w-[17px] bg-fl-green px-1 py-0.5 text-center text-[8px] font-bold leading-none text-fl-white">
                    {item.badge}
                  </span>
                ) : null}
              </Link>
            ))}
          </nav>
        </section>
        <button
          type="button"
          className="absolute right-1.5 top-1 grid hidden h-10 w-10 place-items-center border border-fl-line bg-fl-white text-[15px] font-bold max-[960px]:grid"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        >
          ×
        </button>
        <span className="absolute bottom-[26px] left-[11px] text-[11px] text-[#dd5f5f]">
          Logout (preview)
        </span>
      </aside>

      {menuOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-[6] bg-[rgba(32,35,43,0.45)] max-[960px]:block min-[961px]:hidden"
          aria-label="Close menu overlay"
          onClick={closeMenu}
        />
      ) : null}

      <div className="min-h-screen min-[961px]:ml-[var(--fl-sidebar-width)] max-[960px]:ml-0">
        <header className="hidden min-h-[46px] items-center justify-end border-b border-fl-line px-8 min-[961px]:flex">
          <div className="text-[11px] text-[#55585d]">
            <strong className="font-bold text-fl-green-dark">{portalName}</strong>{" "}
            Portal
          </div>
        </header>

        <header className="flex min-h-[62px] items-center justify-between gap-2 border-b-2 border-[#eee] bg-fl-white px-3 max-[960px]:flex min-[961px]:hidden">
          <div className="flex min-w-0 items-center gap-2.5">
            <button
              type="button"
              className="grid h-10 w-10 flex-shrink-0 content-center justify-items-center gap-1 border border-fl-line bg-fl-white max-[960px]:grid min-[961px]:hidden"
              aria-expanded={menuOpen}
              aria-controls={navId}
              aria-label="Open navigation menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="block h-0.5 w-[18px] bg-[#34373d]" />
              <span className="block h-0.5 w-[18px] bg-[#34373d]" />
              <span className="block h-0.5 w-[18px] bg-[#34373d]" />
            </button>
            <Link
              href="/shell"
              className="text-[13px] font-bold tracking-tight text-fl-green no-underline"
            >
              FUTURE LIFE
            </Link>
          </div>
          <span className="text-[10px] text-[#5a5d62]">{portalTitle}</span>
        </header>

        <main className="mx-auto my-9 w-[min(100%-70px,1058px)] max-[960px]:my-6 max-[960px]:w-[calc(100%-26px)]">
          {children}
        </main>
      </div>
    </>
  );
}