import type { Metadata } from "next";
import { getAll } from "@/lib/content";
import { PageHead } from "@/components/Article";
import { Cards } from "@/components/Cards";

export const metadata: Metadata = { title: "伝統食の物語" };

export default function Page() {
  return (
    <>
      <PageHead en="Stories" title="伝統食の物語" lead="連載「海のない会津で、人々はどうやって魚を食べてきたのか」。北前船が運んだ海の幸と、自ら育てた川の幸。二つの知恵を辿ります。" />
      <section className="section"><div className="wrap">
        <Cards items={getAll("stories")} base="/stories" />
      </div></section>
    </>
  );
}
