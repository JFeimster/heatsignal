import Link from "next/link";

export function Footer() {
  return <footer className="site-footer">
    <div><Link className="wordmark" href="/">AFTERDARK</Link><p>Good stories for bad hours.</p></div>
    <div className="footer-links"><Link href="/newsletter">Newsletter</Link><a href="#">Instagram</a><a href="#">YouTube</a><Link href="/about">About</Link><a href="mailto:hello@afterdark.example">Contact</a></div>
    <p className="copyright">© 2026 AFTERDARK<br />New York / Everywhere late</p>
  </footer>;
}
