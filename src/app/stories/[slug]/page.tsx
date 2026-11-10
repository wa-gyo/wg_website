import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAll, getOne } from "@/lib/content";
import { Article } from "@/components/Article";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAll("stories").map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const e = getOne("stories", (await params).slug);
  return e ? { title: e.title, description: e.excerpt } : {};
}

export default async function Page({ params }: Props) {
  const e = getOne("stories", (await params).slug);
  if (!e) notFound();
  return <Article entry={e} section="Stories" />;
}
