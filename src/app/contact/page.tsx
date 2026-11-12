import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHead } from "@/components/Article";

export const metadata: Metadata = { title: "お問い合わせ" };

export default function Page() {
  return (
    <>
      <PageHead en="Contact" title="お問い合わせ" lead="お取引のご相談、商品・取材のお問い合わせはこちらから。" />
      <div className="wrap">
        <article className="article">
          <dl className="dl">
            <dt>お電話</dt><dd><a href={`tel:${site.tel}`}>{site.tel}</a>{site.hours && `（${site.hours}）`}</dd>
            <dt>FAX</dt><dd>{site.fax}</dd>
            <dt>メール</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd>
            <dt>鮮魚のご予約</dt><dd>飲食店・グループ買いのご予約は <a href={site.links.line} target="_blank" rel="noopener">LINE 公式アカウント ↗</a></dd>
            <dt>所在地</dt><dd>{site.address}<br />（{site.place}）　<a href="/company/#access">アクセス</a></dd>
          </dl>
          <div className="btns"><a href={site.links.contactForm} className="btn solid" target="_blank" rel="noopener">お問い合わせフォーム ↗</a></div>
        </article>
      </div>
    </>
  );
}
