import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

/**
 * content/<collection>/*.md を読み込む。
 * 記事の追加・更新は Markdown ファイルを置くだけ（AIによる更新もこの形式で行う）。
 */
export type Collection = "stories" | "evolve" | "journal" | "market" | "products";

export type Entry = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  /** 伝統食 ⇄ 変化する伝統食 ⇄ 商品 の相互リンク用（slug の配列） */
  related: string[];
  /** 任意の追加フィールド（price, status, origin など） */
  data: Record<string, unknown>;
  html: string;
};

const root = path.join(process.cwd(), "content");

function read(collection: Collection, file: string): Entry {
  const raw = fs.readFileSync(path.join(root, collection, file), "utf8");
  const { data, content } = matter(raw);
  const date =
    data.date instanceof Date
      ? data.date.toISOString().slice(0, 10)
      : String(data.date ?? "");
  return {
    slug: file.replace(/\.md$/, ""),
    title: String(data.title ?? ""),
    date,
    excerpt: String(data.excerpt ?? ""),
    tags: (data.tags as string[]) ?? [],
    related: (data.related as string[]) ?? [],
    data,
    html: marked.parse(content, { async: false }) as string,
  };
}

export function getAll(collection: Collection): Entry[] {
  const dir = path.join(root, collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map((f) => read(collection, f))
    .filter((e) => e.data.draft !== true)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getOne(collection: Collection, slug: string): Entry | undefined {
  return getAll(collection).find((e) => e.slug === slug);
}

/** related に書かれた slug を各コレクションから探して返す */
export function getRelated(entry: Entry) {
  const cols: Collection[] = ["stories", "evolve", "products"];
  return cols.flatMap((c) =>
    getAll(c)
      .filter((e) => entry.related.includes(e.slug) || e.related.includes(entry.slug))
      .filter((e) => e.slug !== entry.slug)
      .map((e) => ({ collection: c, entry: e })),
  );
}
