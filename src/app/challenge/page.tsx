import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHead } from "@/components/Article";

export const metadata: Metadata = { title: "伝統食アイディア・コンペティション" };

export default function Page() {
  return (
    <>
      <PageHead en="Challenge" title="伝統食アイディア・コンペティション" lead="会津の伝統食材を、あなたならどう食べる？ 素材を生かした新しい食のアイディアを募集します。" />
      <div className="wrap">
        <article className="article prose">
          <p className="note">※ 募集内容はたたき台です。開催時期・賞・審査方法を決めて差し替えてください。</p>
          <h2>テーマ</h2>
          <p>身欠きにしん・棒たら・干し貝柱・鯉など、会津の伝統食に欠かせない水産素材を使った「次の世代も食べたくなる」一皿・一品。</p>
          <h2>部門（案）</h2>
          <ul>
            <li><strong>学生部門</strong> — 高校・大学・専門学校の個人またはチーム</li>
            <li><strong>プロ部門</strong> — 飲食店・料理人</li>
            <li><strong>おうち部門</strong> — 家庭料理、SNS投稿での参加も可</li>
          </ul>
          <h2>賞と、その先</h2>
          <p>優秀作品は、当社による商品化・オンラインストアでの販売、協力店でのメニュー化を目指します。受賞作のレシピは「変化する伝統食」で紹介します。</p>
          <h2>スケジュール（案）</h2>
          <table>
            <tbody>
              <tr><th>募集</th><td>〇月〇日 〜 〇月〇日</td></tr>
              <tr><th>一次審査（書類）</th><td>〇月</td></tr>
              <tr><th>最終審査・試食会</th><td>〇月（会津若松市内）</td></tr>
            </tbody>
          </table>
          <div className="btns"><a href={site.links.entryForm} className="btn solid" target="_blank" rel="noopener">応募フォーム ↗</a></div>
        </article>
      </div>
    </>
  );
}
