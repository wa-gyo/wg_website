// サイト全体の設定。社名・連絡先・外部リンクはここだけ書き換えればよい。
export const site = {
  name: "会津 水産（仮）",
  nameEn: "AIZU SUISAN",
  tagline: "海のない城下町で、海の味を受け継ぐ。",
  description:
    "会津若松の水産卸。鮮魚の卸売と、にしんの山椒漬け・棒たら煮・こづゆなど会津の伝統食を、いまの食卓へつなぐ取り組みを行っています。",
  url: "https://example.jp", // 自社ドメインに差し替え
  address: "福島県会津若松市（住所を記入）",
  tel: "0242-00-0000",
  hours: "平日 6:00–15:00",
  email: "info@example.jp",
  links: {
    shop: "https://example.base.shop", // BASE / Shopify などのストアURL
    line: "https://lin.ee/xxxxxxx", // LINE公式アカウント（入荷情報・取り置き）
    instagram: "https://www.instagram.com/",
    entryForm: "https://forms.gle/xxxxxxx", // コンペ応募フォーム
    contactForm: "https://forms.gle/xxxxxxx", // お問い合わせフォーム
  },
};

export const nav = [
  { href: "/stories/", label: "伝統食の物語", en: "Stories" },
  { href: "/evolve/", label: "変化する伝統食", en: "Evolve" },
  { href: "/market/", label: "入荷情報", en: "Market" },
  { href: "/challenge/", label: "食のアイディア", en: "Challenge" },
  { href: "/shop/", label: "お取り寄せ", en: "Shop" },
  { href: "/journal/", label: "読みもの", en: "Journal" },
  { href: "/company/", label: "会社案内", en: "Company" },
];
