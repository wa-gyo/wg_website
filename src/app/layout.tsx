import type { Metadata } from "next";
import Link from "next/link";
import { nav, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}｜${site.tagline}`, template: `%s｜${site.name}` },
  description: site.description,
  openGraph: { siteName: site.name, locale: "ja_JP", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=Noto+Sans+JP:wght@400;500&family=Shippori+Mincho:wght@500;600&display=swap"
        />
      </head>
      <body>
        <header className="header">
          <div className="wrap">
            <Link href="/" className="logo">
              <b>{site.name}</b>
              <small>{site.nameEn}</small>
            </Link>
            <nav className="nav">
              {nav.map((n) => (
                <Link key={n.href} href={n.href}>{n.label}</Link>
              ))}
            </nav>
            <details className="menu">
              <summary>Menu</summary>
              <nav>
                {nav.map((n) => (
                  <Link key={n.href} href={n.href}>{n.label}<span>{n.en}</span></Link>
                ))}
              </nav>
            </details>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="wrap">
            <div className="cols">
              <div>
                <p style={{ fontFamily: "var(--serif)", fontSize: 18, color: "#fff", margin: 0 }}>{site.name}</p>
                <p>{site.address}<br />TEL {site.tel}（{site.hours}）</p>
              </div>
              <ul>
                {nav.map((n) => (<li key={n.href}><Link href={n.href}>{n.label}</Link></li>))}
              </ul>
              <ul>
                <li><a href={site.links.shop} target="_blank" rel="noopener">オンラインストア ↗</a></li>
                <li><a href={site.links.line} target="_blank" rel="noopener">LINE 公式アカウント ↗</a></li>
                <li><a href={site.links.instagram} target="_blank" rel="noopener">Instagram ↗</a></li>
                <li><Link href="/contact/">お問い合わせ</Link></li>
              </ul>
            </div>
            <p className="copy">© {new Date().getFullYear()} {site.nameEn}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
