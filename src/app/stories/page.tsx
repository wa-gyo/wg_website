import type { Metadata } from "next";
import { getAll } from "@/lib/content";
import { PageHead } from "@/components/Article";
import { Cards } from "@/components/Cards";

export const metadata: Metadata = { title: "伝統食の物語" };

export default function Page() {
  return (
    <>
      <PageHead en="Stories" title="伝統食の物語" lead="海から遠い会津の城下町に、干物や塩蔵品として運ばれた海の幸。その知恵が、いまも食卓に残っています。" />
      <section className="section"><div className="wrap">
        <Cards items={getAll("stories")} base="/stories" />
      </div></section>
    </>
  );
}
