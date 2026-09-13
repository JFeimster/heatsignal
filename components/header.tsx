"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Stories", "/stories"],
  ["After Hours", "/after-hours"],
  ["People", "/people"],
  ["Desire", "/desire"],
  ["Internet", "/internet"],
  ["Newsletter", "/newsletter"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="AFTERDARK home">AFTERDARK</Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <Link className="header-cta" href="/newsletter">Join Afterdark <span>↗</span></Link>
      <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span /><span />
      </button>
      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        {links.map(([label, href], index) => <Link style={{ transitionDelay: `${index * 45}ms` }} onClick={() => setOpen(false)} key={href} href={href}>{label}</Link>)}
        <Link onClick={() => setOpen(false)} className="mobile-join" href="/newsletter">Join AFTERDARK →</Link>
      </div>
    </header>
  );
}
