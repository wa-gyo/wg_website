import Link from "next/link";
import { getAll } from "@/lib/content";
import { site } from "@/lib/site";
import { Cards, MarketList } from "@/components/Cards";

export default function Home() {
  const stories = getAll("stories").slice(0, 3);
  const evolve = getAll("evolve").slice(0, 3);
  const market = getAll("market").slice(0, 4);
  const journal = getAll("journal").slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div>
            <span className="eyebrow">Aizu-Wakamatsu, Fukushima</span>
            <h1>海のない城下町で、<br /><em>海の味</em>を受け継ぐ。</h1>
            <p>
              山に囲まれた会津には、干物や塩蔵品として運ばれた海の幸を、
              手間ひまかけて味わう文化が根づいています。
              私たちは鮮魚の卸として、そしてその文化の担い手として、伝統の味を次の世代の食卓へつなぎます。
            </p>
            <div className="btns">
              <Link href="/stories/" className="btn">伝統食の物語を読む</Link>
              <Link href="/market/" className="btn solid">今日の入荷を見る</Link>
            </div>
          </div>
          <p className="vertical">鰊の山椒漬け　棒鱈煮　こづゆ</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Concept</span>
              <h2>受け継ぐ味と、変わっていく味。</h2>
            </div>
          </div>
          <div className="duo">
            <Link href="/stories/">
              <span className="num">01</span>
              <span className="latin muted">Stories</span>
              <h3>伝統食の物語</h3>
              <p>なぜ内陸の会津で、にしんや棒たらが愛されてきたのか。料理の背景にある、土地と人の記憶を辿ります。</p>
              <span className="more">Read more</span>
            </Link>
            <Link href="/evolve/">
              <span className="num">02</span>
              <span className="latin muted">Evolve</span>
              <h3>変化する伝統食</h3>
              <p>「若い人の口には合わない」で終わらせない。素材と技はそのままに、いまの食卓に合う一皿へと組み替えます。</p>
              <span className="more">Read more</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Market</span>
              <h2>本日の入荷</h2>
            </div>
            <Link href="/market/" className="more">All arrivals</Link>
          </div>
          <MarketList items={market} />
          <div className="btns">
            <a href={site.links.line} className="btn" target="_blank" rel="noopener">LINEで取り置き・予約 ↗</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">Stories</span><h2>伝統食の物語</h2></div>
            <Link href="/stories/" className="more">View all</Link>
          </div>
          <Cards items={stories} base="/stories" />
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">Evolve</span><h2>変化する伝統食</h2></div>
            <Link href="/evolve/" className="more">View all</Link>
          </div>
          <Cards items={evolve} base="/evolve" />
        </div>
      </section>

      <section className="section">
        <div className="wrap" style={{ display: "grid", gap: 40, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          <div>
            <span className="eyebrow">Challenge</span>
            <h2 style={{ fontSize: "clamp(24px,3.2vw,36px)", letterSpacing: ".1em" }}>伝統食アイディア・コンペティション</h2>
          </div>
          <div>
            <p className="muted" style={{ marginTop: 0 }}>
              にしん、棒たら、干し貝柱。会津の伝統食材を使った新しい食べ方を募集します。
              学生・料理人・家庭料理、どなたでも。優秀作品は商品化や店舗でのメニュー化を目指します。
            </p>
            <div className="btns"><Link href="/challenge/" className="btn">募集要項を見る</Link></div>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <div className="sec-head">
            <div><span className="eyebrow">Journal</span><h2>読みもの</h2></div>
            <Link href="/journal/" className="more">View all</Link>
          </div>
          <Cards items={journal} base="/journal" />
        </div>
      </section>
    </>
  );
}
