import type { Metadata } from "next";
import { Fragment } from "react";
import { site } from "@/lib/site";
import { PageHead } from "@/components/Article";

export const metadata: Metadata = { title: "会社案内" };

const rows: [string, React.ReactNode][] = [
  ["社名", site.name],
  ["所在地", <>{site.postal && <>〒{site.postal}<br /></>}{site.address}<br />（{site.place}）</>],
  ["電話", site.tel],
  ["FAX", site.fax],
  ["メール", <a href={`mailto:${site.email}`}>{site.email}</a>],
  ["創業", "（記入）"],
  ["代表者", "（記入）"],
  ["事業内容", "鮮魚・水産加工品の卸売／伝統食（こづゆ・棒たら煮・にしんの山椒漬けほか）の製造・販売／飲食店・グループ買い向け鮮魚販売"],
];

export default function Page() {
  return (
    <>
      <PageHead en="Company" title="会社案内" lead="会津の食卓と、海をつなぐ。" />
      <div className="wrap">
        <article className="article" style={{ maxWidth: 960 }}>
          <div className="prose" style={{ maxWidth: 720 }}>
            <h2>私たちについて</h2>
            <p>（ここに会社の歩み・想いを記入します。創業の経緯、扱っている魚、取引先との関係、伝統食への想いなど。）</p>
          </div>
          <dl className="dl">
            {rows.map(([k, v]) => (<Fragment key={k}><dt>{k}</dt><dd>{v}</dd></Fragment>))}
          </dl>

          <section className="access" id="access">
            <div>
              <span className="eyebrow">Access</span>
              <h2 style={{ fontSize: 24, letterSpacing: ".1em" }}>アクセス</h2>
              <p className="muted">
                {site.place}。国道49号「船ヶ森」交差点のそば、会津総合中央病院の近くです。
              </p>
              <div className="btns">
                <a className="btn" href={site.links.map} target="_blank" rel="noopener">Google マップで開く ↗</a>
              </div>
            </div>
            <img src="/images/access-map.png" alt="若松魚類への地図。会津若松ICから国道49号を経て船ヶ森交差点そばの会津若松市公設地方卸売市場内" width={620} height={550} loading="lazy" />
          </section>
        </article>
      </div>
    </>
  );
}
