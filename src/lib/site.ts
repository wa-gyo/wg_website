// サイト全体の設定。社名・連絡先・外部リンクはここだけ書き換えればよい。
export const site = {
  name: "株式会社若松魚類",
  shortName: "若松魚類",
  nameEn: "WAKAMATSU GYORUI",
  tagline: "海のない城下町で、海の味を受け継ぐ。",
  description:
    "会津若松市公設地方卸売市場の水産卸、株式会社若松魚類。鮮魚の卸売と、こづゆ・棒たら煮・にしんの山椒漬けなど会津の伝統食を、いまの食卓へつなぐ取り組みを行っています。",
  url: "https://www.wakamatsu-gyorui.co.jp", // 公開時の正式URLに合わせて確認
  postal: "", // 郵便番号（〒965-xxxx）を記入
  address: "福島県会津若松市一箕町大字鶴賀字船ヶ森東470番地",
  place: "会津若松市公設地方卸売市場内",
  tel: "0242-37-0220",
  fax: "0242-37-1588",
  email: "info@wakamatsu-gyorui.co.jp",
  hours: "", // 営業時間（例：平日 5:00–14:00）を記入
  links: {
    shop: "https://example.base.shop", // BASE / Shopify などのストアURL
    line: "https://lin.ee/xxxxxxx", // LINE公式アカウント（入荷情報・予約）
    instagram: "https://www.instagram.com/",
    entryForm: "https://forms.gle/xxxxxxx", // コンペ応募フォーム
    contactForm: "https://forms.gle/xxxxxxx", // お問い合わせフォーム
    map: "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("福島県会津若松市一箕町大字鶴賀字船ヶ森東470"),
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
