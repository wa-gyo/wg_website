import Link from "next/link";
import type { Entry } from "@/lib/content";

/** 画像未設定のときは料理名を縦書きで表示する */
function Thumb({ e }: { e: Entry }) {
  const img = e.data.image as string | undefined;
  return (
    <div className="thumb">
      {img ? <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : (e.data.short as string) ?? e.title.slice(0, 6)}
    </div>
  );
}

export function Cards({ items, base }: { items: Entry[]; base: string }) {
  return (
    <div className="grid">
      {items.map((e) => (
        <Link key={e.slug} href={`${base}/${e.slug}/`} className="card">
          <Thumb e={e} />
          <span className="meta">
            {e.data.series !== undefined && <span className="tag">第{String(e.data.series)}回</span>}
            {e.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </span>
          <h3>{e.title}</h3>
          <p>{e.excerpt}</p>
        </Link>
      ))}
    </div>
  );
}

export function MarketList({ items }: { items: Entry[]; base?: string }) {
  return (
    <ul className="market">
      {items.map((e) => {
        const status = String(e.data.status ?? "入荷");
        return (
          <li key={e.slug}>
            <Link href={`/market/${e.slug}/`}>
              <time>{e.date.replaceAll("-", ".")}</time>
              <span>{e.title}</span>
              <span className={`st ${status === "完売" ? "soldout" : ""}`}>{status}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
