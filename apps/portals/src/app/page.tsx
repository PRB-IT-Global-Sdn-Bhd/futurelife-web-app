import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-xl px-5 py-16 text-fl-ink">
      <h1 className="text-2xl font-normal tracking-tight">
        FutureLife — Next.js foundation
      </h1>
      <p className="mt-3 text-[13px] leading-relaxed text-fl-muted">
        Phase 0 scaffold for vendor portals and the admin panel. Static preview
        HTML is still served from the repository root on GitHub Pages.
      </p>
      <ul className="mt-8 grid gap-3 text-[13px]">
        <li>
          <Link
            href="/shell"
            className="block border border-fl-line px-4 py-3 font-bold text-[#397d13] no-underline hover:border-fl-green hover:bg-fl-pale-green"
          >
            Open UI shell preview (layout check)
          </Link>
        </li>
        <li className="border border-fl-line px-4 py-3 text-fl-muted">
          GitHub Pages prototypes: see repository{" "}
          <code className="text-[11px]">index.html</code> and{" "}
          <code className="text-[11px]">FutureLife-*</code> folders (unchanged).
        </li>
      </ul>
    </main>
  );
}