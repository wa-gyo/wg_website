import type { Metadata } from "next";
import { Fragment } from "react";
import { site } from "@/lib/site";
import { PageHead } from "@/components/Article";

export const metadata: Metadata = { title: "会社案内" };

const rows: [string, string][] = [
  ["社名", site.name],
  ["所在地", site.address],
  ["電話", `${site.tel}（${site.hours}）`],
  ["創業", "（記入）"],
  ["代表者", "（記入）"],
  ["事業内容", "鮮魚・水産加工品の卸売／伝統食の製造・販売／鮮魚の小売（入荷販売）"],
  ["主な取引先", "（記入）"],
];

export default function Page() {
  return (
    <>
      <PageHead en="Company" title="会社案内" lead="会津の食卓と、海をつなぐ。" />
      <div className="wrap">
        <article className="article">
          <div className="prose">
            <h2>私たちについて</h2>
            <p>（ここに会社の歩み・想いを記入します。創業の経緯、扱っている魚、取引先との関係、伝統食への想いなど。）</p>
          </div>
          <dl className="dl">
            {rows.map(([k, v]) => (<Fragment key={k}><dt>{k}</dt><dd>{v}</dd></Fragment>))}
          </dl>
        </article>
      </div>
    </>
  );
}
