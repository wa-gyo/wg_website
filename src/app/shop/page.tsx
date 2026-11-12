import type { Metadata } from "next";
import Link from "next/link";
import { getAll } from "@/lib/content";
import { site } from "@/lib/site";
import { PageHead } from "@/components/Article";

export const metadata: Metadata = { title: "お取り寄せ" };

export default function Page() {
  const products = getAll("products");
  const stories = getAll("stories").map((s) => s.slug);
  return (
    <>
      <PageHead en="Shop" title="お取り寄せ" lead="物語とともに味わってほしい、会津の伝統の味と、新しい味。ご購入はオンラインストアから。" />
      <section className="section">
        <div className="wrap">
          <div className="grid">
            {products.map((p) => (
              <div key={p.slug} className="card">
                <div className="thumb">{(p.data.short as string) ?? p.title}</div>
                <span className="meta">{String(p.data.price ?? "")}</span>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <div style={{ display: "flex", gap: 16, marginTop: 8, fontSize: 13 }}>
                  <a className="more" href={String(p.data.shop_url || site.links.shop)} target="_blank" rel="noopener">Buy ↗</a>
                  {p.related.filter((r) => stories.includes(r)).slice(0, 1).map((r) => (
                    <Link key={r} className="more" href={`/stories/${r}/`}>Story</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="btns"><a href={site.links.shop} className="btn solid" target="_blank" rel="noopener">オンラインストアへ ↗</a></div>
        </div>
      </section>
    </>
  );
}
