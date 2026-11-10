import type { Metadata } from "next";
import { getAll } from "@/lib/content";
import { PageHead } from "@/components/Article";
import { Cards } from "@/components/Cards";

export const metadata: Metadata = { title: "変化する伝統食" };

export default function Page() {
  return (
    <>
      <PageHead en="Evolve" title="変化する伝統食" lead="受け継ぐことは、変えないことではない。伝統食の素材と技を、いまの暮らしと味覚に合わせて組み替えます。" />
      <section className="section"><div className="wrap">
        <Cards items={getAll("evolve")} base="/evolve" />
      </div></section>
    </>
  );
}
