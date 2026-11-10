# wg_website — AI向け更新ガイド

会津若松の水産卸のコーポレートサイト。Next.js（App Router）の静的書き出し（`output: "export"`）。

## 記事・情報の更新（ほとんどの依頼はこれ）
コードは触らず、`content/` に Markdown を追加・編集するだけで反映される。

| フォルダ | 内容 | ファイル名の例 |
|---|---|---|
| `content/market/` | 鮮魚の入荷情報 | `2026-11-10-buri.md` |
| `content/stories/` | 伝統食の物語 | `kozuyu.md` |
| `content/evolve/` | 変化する伝統食（アレンジレシピ・コンペ受賞作） | `nishin-bruschetta.md` |
| `content/journal/` | ブログ・お知らせ | `hello.md` |
| `content/products/` | 物販商品（購入はストアへのリンク） | `_template.md` を複製 |

frontmatter:
- 共通: `title`, `date`(YYYY-MM-DD), `excerpt`, `tags`, `short`(カードに縦書きで出す6文字程度の名前), `image`(任意, `/images/...`)
- `related`: 関連する他の記事・商品の slug。物語 ⇄ アレンジ ⇄ 商品 を必ずつなぐ（物販への導線）
- market: `status` は `入荷` / `残りわずか` / `完売`
- products: `price`, `shop_url`
- `draft: true` で非公開。`draft_note` は記事上部の注意書き
- `_` で始まるファイルは読み込まれない

## 文体
- です・ます調。短い段落。泥臭さを避け、上品で落ち着いたトーン
- 伝統食の由来・歴史は事実確認できない内容を断定しない。会社固有の情報（創業年・取引先など）を創作しない

## 確認
`npm run build` が通ることを確認してからコミットする。

## 設定
社名・連絡先・外部リンク（ストア・LINE・フォーム）は `src/lib/site.ts`。
