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
            <dt>お電話</dt><dd>{site.tel}（{site.hours}）</dd>
            <dt>メール</dt><dd>{site.email}</dd>
            <dt>鮮魚の取り置き</dt><dd><a href={site.links.line} target="_blank" rel="noopener">LINE 公式アカウント ↗</a></dd>
          </dl>
          <div className="btns"><a href={site.links.contactForm} className="btn solid" target="_blank" rel="noopener">お問い合わせフォーム ↗</a></div>
        </article>
      </div>
    </>
  );
}
