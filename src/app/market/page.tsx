import type { Metadata } from "next";
import { getAll } from "@/lib/content";
import { PageHead } from "@/components/Article";
import { MarketList } from "@/components/Cards";

export const metadata: Metadata = { title: "入荷情報" };

export default function Page() {
  return (
    <>
      <PageHead en="Market" title="入荷情報" lead="市場に入った鮮魚をお知らせします。飲食店・グループ買いのご予約は LINE 公式アカウントから。" />
      <section className="section"><div className="wrap">
        <MarketList items={getAll("market")} base="/market" />
      </div></section>
    </>
  );
}
