/* eslint-disable @next/next/no-img-element -- compact pre-sized WebP brand asset */
import Link from "next/link";
export default function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="ColoryBee home">
          <img
            className="brand-logo"
            src="/colorybee-logo.webp"
            width="48"
            height="48"
            alt=""
          />
          <span>
            Colory<strong>Bee</strong>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          <Link href="/coloring-pages">Coloring pages</Link>
          <Link href="/mandalas">Mandalas</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
