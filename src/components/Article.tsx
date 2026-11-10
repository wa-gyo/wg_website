import Link from "next/link";
import { getRelated, type Entry } from "@/lib/content";

const label: Record<string, { name: string; base: string }> = {
  stories: { name: "伝統食の物語", base: "/stories" },
  evolve: { name: "変化する伝統食", base: "/evolve" },
  products: { name: "お取り寄せ", base: "/shop" },
};

export function Article({ entry, section }: { entry: Entry; section: string }) {
  const related = getRelated(entry);
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <span className="eyebrow">{section}</span>
          <h1>{entry.title}</h1>
          {entry.excerpt && <p>{entry.excerpt}</p>}
        </div>
      </section>
      <div className="wrap">
        <article className="article">
          {entry.data.draft_note ? <p className="note">{String(entry.data.draft_note)}</p> : null}
          <div className="prose" dangerouslySetInnerHTML={{ __html: entry.html }} />
          {related.length > 0 && (
            <div className="related">
              <span className="eyebrow">Related</span>
              <ul className="market">
                {related.map(({ collection, entry: r }) => (
                  <li key={collection + r.slug}>
                    <Link href={collection === "products" ? "/shop/" : `${label[collection].base}/${r.slug}/`}>
                      <time>{label[collection].name}</time>
                      <span>{r.title}</span>
                      <span className="more">View</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>
      </div>
    </>
  );
}

export function PageHead({ en, title, lead }: { en: string; title: string; lead?: string }) {
  return (
    <section className="page-head">
      <div className="wrap">
        <span className="eyebrow">{en}</span>
        <h1>{title}</h1>
        {lead && <p>{lead}</p>}
      </div>
    </section>
  );
}
