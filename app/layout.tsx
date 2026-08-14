import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import "./print.css";
import { site } from "./config";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Free Printable Coloring Pages | ColoryBee",
    template: "%s | ColoryBee",
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: site.name,
    url: "/",
    title: "Free Printable Coloring Pages | ColoryBee",
    description: site.description,
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "ColoryBee free printable coloring pages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Printable Coloring Pages | ColoryBee",
    description: site.description,
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon-48x48.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.domain,
    description: site.description,
    inLanguage: "en-US",
  };
  return (
    <html lang="en">
      <body>
        {children}
        <footer>
          <div className="shell footer-inner">
            <div>
              <Link className="footer-brand" href="/">
                ColoryBee
              </Link>
              <p>Free pages. Fresh ideas. Happy colors.</p>
            </div>
            <div className="footer-social">
              <strong>Follow us</strong>
              <a
                href="https://www.facebook.com/colorybee/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
            <nav aria-label="Legal information">
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </nav>
            <span>© {new Date().getFullYear()} ColoryBee</span>
          </div>
        </footer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
