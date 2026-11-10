# wg_website

会津若松の水産卸コーポレートサイト。

- **伝統食の物語**（Stories）と **変化する伝統食**（Evolve）の2本立て
- 鮮魚の **入荷情報**（Market）→ LINE で取り置き
- **食のアイディア・コンペティション**（Challenge）
- **お取り寄せ**（Shop）→ 外部ストアへ。物語・レシピと商品を `related` で相互リンク
- **読みもの**（Journal）

## 開発

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # out/ に静的サイトを書き出し
```

## 更新
`content/` に Markdown を置くだけ。AI（Claude Code）に「今日の入荷：寒ぶりと真鱈」などと頼めば
ファイル作成 → PR → プレビュー確認 → マージで公開できる。詳細は `CLAUDE.md`。

## 公開構成（推奨）
| 役割 | サービス | 費用 |
|---|---|---|
| サイト本体 | Cloudflare Pages（GitHub連携で自動デプロイ、PRごとにプレビューURL） | 無料・商用可 |
| 独自ドメイン | 既存の自社ドメインを Cloudflare Pages に接続（`www.` またはサブドメイン） | 無料（ドメイン代のみ） |
| 物販 | BASE（無料で開始、販売手数料制）※本格運用なら Shopify | 0円〜 |
| 入荷通知・取り置き | LINE 公式アカウント | 無料枠あり |
| フォーム | Google フォーム（コンペ応募・問い合わせ） | 無料 |
