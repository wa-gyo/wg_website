import type { Metadata } from "next";
import { getAll } from "@/lib/content";
import { PageHead } from "@/components/Article";
import { Cards } from "@/components/Cards";

export const metadata: Metadata = { title: "読みもの" };

export default function Page() {
  return (
    <>
      <PageHead en="Journal" title="読みもの" lead="市場のこと、魚のこと、会津のこと。日々の記録。" />
      <section className="section"><div className="wrap">
        <Cards items={getAll("journal")} base="/journal" />
      </div></section>
    </>
  );
}
