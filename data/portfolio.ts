export type GalleryItem = {
  image: string;
  title?: string;
  year?: string;
};

export type WorkVideo = {
  platform: "youtube" | "facebook" | "instagram";
  url: string;
  title?: string;
};

export type WorkLink = {
  url: string;
  title?: string;
};

export type PortfolioItem = {
  id: number;
  title: string;

  category:
    | "Visual Design"
    | "Video Production"
    | "Photography"
    | "Project Planning"
    | "Illustration";

  year?: string;

  cover: string;
  slug: string;
  featured: boolean;

  description: string;

  contribution?: string;
  role?: string;
  tools?: string[];

  award?: string;

  type: "image" | "video";

  youtube?: string;

  videos?: WorkVideo[];

  links?: WorkLink[];

  gallery?: GalleryItem[];
};

export const portfolio: PortfolioItem[] = [
  // =========================================================
  // 01 電台短影音
  // =========================================================
  {
    id: 1,
    title: "電台短影音拍攝剪輯",
    category: "Video Production",
    year: "2022–2026",

    // ★ 首圖：沒有 -01
    cover: "/portfolio/01-radio-short-video.jpg",

    slug: "radio-short-video",
    featured: true,
    type: "video",

    description:
      "負責 POP Radio 社群短影音的企劃、拍攝與後期剪輯，從內容發想到影像製作，將節目與活動內容轉化為適合社群傳播的短影音作品。",

    contribution:
      "企劃發想、腳本、拍攝、剪輯、字幕與社群縮圖製作",

    videos: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/gOlFc9wF-bU",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/s9LQSLGRz6M",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/i9v9ltfc26o",
      },
      {
        platform: "facebook",
        url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F575129478416381%2F&show_text=false&width=267&t=0",
      },
      {
        platform: "facebook",
        url: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FFM917popradio%2Fvideos%2F910068991522049%2F&show_text=false&width=267&t=0",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/dvphxW_htKw",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/KDkCsonT4gI",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/KoTWlUh6n5Y",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/6zYFdNhr3ic",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/7X6EceySfgo",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/iluXNfYHPP8",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/fXVKzdkjJ8o",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/O_0aIsjBU5M",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/vqKFK32aDFk",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/brVvyFEI930",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/YlINP-rFIKs",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/ESLIqRIeYl8",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/yieoXLUAFEs",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/hXr4J-kwfOA",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/wrGjrCUMe80",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/ueZqMhrj8MM",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/8Muem5Rfit4",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/DfwSUMzY5F8",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/oOIzSGwlqG0",
      },
    ],
  },

  // =========================================================
  // 02 大國民學測網站
  // =========================================================
  {
    id: 2,
    title: "《大國民學測》測驗網站",
    category: "Project Planning",
    year: "2024",
    cover: "/portfolio/02-national-exam-website.jpg",
    slug: "national-test-web",
    featured: true,
    type: "image",

    description:
      "以節目內容為核心打造互動測驗網站，將題目設計與網頁視覺整合，讓使用者透過互動方式參與節目主題。",

    contribution:
      "專案企劃、內容整合、視覺設計與測驗網站上架",

    gallery: [
      {
        image: "/portfolio/02-national-exam-website-01.jpg",
      },
    ],
  },

  // =========================================================
  // 03 圖書館視覺
  // =========================================================
  {
    id: 3,
    title: "圖書館視覺形象設計應用",
    category: "Visual Design",
    cover: "/portfolio/03-library-visual.jpg",
    slug: "library-visual",
    featured: true,
    type: "image",

    description:
      "重新設計圖書館整體視覺形象，發展不同情境下的視覺應用，建立一致的識別與溝通方式。",

    contribution:
      "視覺規劃、平面設計與延伸應用",

    gallery: [
      {
        image: "/portfolio/03-library-visual-01.jpg",
      },
    ],
  },

  // =========================================================
  // 04 國民法官
  // =========================================================
  {
    id: 4,
    title: "國民法官專題網站",
    category: "Project Planning",
    cover: "/portfolio/04-citizen-judge-website.jpg",
    slug: "citizen-judge-web",
    featured: true,
    type: "image",

    description:
      "此專題是研究所資訊視覺化課程，以國民法官制度為主題的數位專題，並與公視獨立特派員合作，透過網站內容架構與視覺設計整理複雜資訊，提升資訊閱讀與理解。",

    contribution:
      "專題企劃、內容整理、視覺設計與數位內容架設",

    links: [
      {
        url: "https://409056058.wixsite.com/national-judge",
        title: "View website",
      },
    ],

    gallery: [
      {
        image: "/portfolio/04-citizen-judge-website-01.jpg",
      },
      {
        image: "/portfolio/04-citizen-judge-website-02.jpg",
      },
    ],
  },

  // =========================================================
  // 05 台慶
  // =========================================================
  {
    id: 5,
    title: "台慶視覺設計及週邊設計",
    category: "Visual Design",
    cover: "/portfolio/05-anniversary-visual.jpg",
    slug: "anniversary",
    featured: true,
    type: "image",

    description:
      "台慶活動整體視覺設計，從主視覺延伸至活動宣傳與週邊應用，建立完整的活動視覺系統。",

    contribution:
      "主視覺設計與週邊延伸應用、製作物發包輸出",

    gallery: [
      {
        image: "/portfolio/05-anniversary-visual-01.jpg",
      },
    ],
  },

  // =========================================================
  // 06 活動主視覺
  // =========================================================
  {
    id: 6,
    title: "活動主視覺設計",
    category: "Visual Design",
    cover: "/portfolio/06-event-key-visual.jpg",
    slug: "event-key-visual",
    featured: true,
    type: "image",

    description:
      "針對不同活動主題發展視覺方向，並延伸至各式宣傳素材與數位媒體。",

    contribution:
      "視覺企劃、主視覺設計與延伸素材製作",

    gallery: [
      {
        image: "/portfolio/06-event-key-visual-01.jpg",
      },
    ],
  },

  // =========================================================
  // 07 社群 Banner
  // =========================================================
  {
    id: 7,
    title: "社群 Banner 設計",
    category: "Visual Design",
    cover: "/portfolio/07-social-banner.jpg",
    slug: "social-banner",
    featured: true,
    type: "image",

    description:
      "製作不同節目、活動與社群內容所需的 Banner 視覺，依照內容主題建立具有辨識度的視覺風格。",

    gallery: [
      {
        image: "/portfolio/07-social-banner-01.jpg",
      },
    ],
  },

  // =========================================================
  // 08 海報
  // =========================================================
  {
    id: 8,
    title: "各類海報設計",
    category: "Visual Design",
    cover: "/portfolio/08-poster-design.jpg",
    slug: "poster-design",
    featured: true,
    type: "image",

    description:
      "整理不同時期製作的海報作品，涵蓋活動、校園、品牌與社群等不同類型的平面視覺設計。",

    gallery: [
      {
        image: "/portfolio/08-poster-design-01.jpg",
      },
      {
        image: "/portfolio/08-poster-design-02.jpg",
      },
      {
        image: "/portfolio/08-poster-design-03.jpg",
      },
      {
        image: "/portfolio/08-poster-design-04.jpg",
      },
      {
        image: "/portfolio/08-poster-design-05.jpg",
      },
      {
        image: "/portfolio/08-poster-design-06.jpg",
      },
      {
        image: "/portfolio/08-poster-design-07.jpg",
      },
    ],
  },

  // =========================================================
  // 09 頒獎典禮
  // =========================================================
  {
    id: 9,
    title: "頒獎典禮視覺及週邊設計",
    category: "Visual Design",
    cover: "/portfolio/09-award-ceremony-visual.jpg",
    slug: "award-ceremony",
    featured: true,
    type: "image",

    description:
      "頒獎典禮整體視覺與週邊設計，從活動主視覺延伸至現場與宣傳應用。",

    contribution:
      "視覺企劃、主視覺設計與活動週邊設計",

    gallery: [
      {
        image: "/portfolio/09-award-ceremony-visual-01.jpg",
      },
      {
        image: "/portfolio/09-award-ceremony-visual-02.jpg",
      },
    ],
  },

  // =========================================================
  // 10 標準字
  // =========================================================
  {
    id: 10,
    title: "標準字設計",
    category: "Visual Design",
    cover: "/portfolio/10-wordmark-design.jpg",
    slug: "wordmark",
    featured: true,
    type: "image",

    description:
      "依據不同活動與主題發展具有識別性的標準字，從字形結構、比例與視覺語言建立專屬風格。",

    gallery: [
      {
        image: "/portfolio/10-wordmark-design-01.jpg",
      },
    ],
  },

  // =========================================================
  // 11 春節
  // =========================================================
  {
    id: 11,
    title: "春節活動視覺設計",
    category: "Visual Design",
    cover: "/portfolio/11-new-year-visual.jpg",
    slug: "lunar-new-year",
    featured: true,
    type: "image",

    description:
      "以春節節慶為主題發展活動視覺，將傳統節慶元素轉化為適合數位與社群使用的視覺設計。",

    gallery: [
      {
        image: "/portfolio/11-new-year-visual-01.jpg",
      },
    ],
  },

  // =========================================================
  // 12 紅包袋
  // =========================================================
  {
    id: 12,
    title: "紅包袋設計",
    category: "Visual Design",
    cover: "/portfolio/12-red-envelope.jpg",
    slug: "red-envelope",
    featured: true,
    type: "image",

    description:
      "以節慶主題發展紅包袋視覺，結合品牌元素與節慶意象，將平面設計延伸至實體應用。",

    gallery: [
      {
        image: "/portfolio/12-red-envelope-01.jpg",
      },
    ],
  },

  // =========================================================
  // 13 晚安被被
  // =========================================================
  {
    id: 13,
    title: "《晚安被被》角色與 Podcast 社群影音設計",
    category: "Illustration",
    cover: "/portfolio/13-goodnight-baby.jpg",
    slug: "goodnight-baby",
    featured: true,
    type: "video",

    description:
      "從角色視覺發展延伸至 Podcast 與社群影音內容，建立角色與節目之間一致的視覺語言。",

    contribution:
      "角色設計、視覺設計、社群影音製作",

    links: [
      {
        url: "https://www.instagram.com/sleepybabe.zzz.podcast/",
        title: "Instagram",
      },
    ],
  },

  // =========================================================
  // 14 Q版角色
  // =========================================================
  {
    id: 14,
    title: "Q版角色人物設計",
    category: "Illustration",
    cover: "/portfolio/14-q-version-character.jpg",
    slug: "q-character",
    featured: true,
    type: "image",

    description:
      "以人物特徵與個人風格為基礎進行 Q 版角色創作，將人物形象轉化為具有辨識度的角色視覺。",

    gallery: [
      {
        image: "/portfolio/14-q-version-character-01.jpg",
      },
    ],
  },

  // =========================================================
  // 15 人像繪圖
  // =========================================================
  {
    id: 15,
    title: "人像繪圖設計",
    category: "Illustration",
    cover: "/portfolio/15-portrait-illustration.jpg",
    slug: "portrait-illustration",
    featured: true,
    type: "image",

    description:
      "以人物照片為基礎進行風格化人像繪圖，保留人物特徵並轉化為具有個人風格的視覺作品。",

    contribution:
      "客製化繪圖、客製化商品販售",

    links: [
      {
        url: "https://www.instagram.com/yangbee_ai/",
        title: "Instagram",
      },
    ],

    gallery: [
      {
        image: "/portfolio/15-portrait-illustration-01.jpg",
      },
      {
        image: "/portfolio/15-portrait-illustration-02.jpg",
      },
    ],
  },

  // =========================================================
  // 16 LINE貼圖
  // =========================================================
  {
    id: 16,
    title: "LINE貼圖設計",
    category: "Illustration",
    cover: "/portfolio/16-line-sticker.jpg",
    slug: "line-sticker",
    featured: true,
    type: "image",

    description:
      "將角色與日常情境轉化為 LINE 貼圖，透過表情與動作設計增加角色的互動性與使用情境。",

    gallery: [
      {
        image: "/portfolio/16-line-sticker-01.jpg",
      },
      {
        image: "/portfolio/16-line-sticker-02.jpg",
      },
    ],
  },

  // =========================================================
  // 17 演唱會
  // =========================================================
  {
    id: 17,
    title: "演唱會活動拍攝",
    category: "Photography",
    cover: "/portfolio/17-concert-photography.jpg",
    slug: "concert",
    featured: true,
    type: "image",

    description:
      "演唱會與現場活動紀錄攝影，捕捉舞台、表演者與現場氛圍，將活動當下轉化為影像紀錄。",

    contribution:
      "桃園鐵玫瑰音樂節、POP Radio 台慶演唱會等",

    gallery: [
      {
        image: "/portfolio/17-concert-photography-01.JPG",
      },
      {
        image: "/portfolio/17-concert-photography-02.JPG",
      },
      {
        image: "/portfolio/17-concert-photography-03.JPG",
      },
      {
        image: "/portfolio/17-concert-photography-04.JPG",
      },
      {
        image: "/portfolio/17-concert-photography-05.JPG",
      },
      {
        image: "/portfolio/17-concert-photography-06.JPG",
      },
      {
        image: "/portfolio/17-concert-photography-07.JPG",
      },
      {
        image: "/portfolio/17-concert-photography-08.JPG",
      },
      {
        image: "/portfolio/17-concert-photography-09.JPG",
      },
      {
        image: "/portfolio/17-concert-photography-10.JPG",
      },
      {
        image: "/portfolio/17-concert-photography-11.JPG",
      },
      {
        image: "/portfolio/17-concert-photography-12.JPG",
      },
      {
        image: "/portfolio/17-concert-photography-13.JPG",
      },
      {
        image: "/portfolio/17-concert-photography-14.JPG",
      },
      {
        image: "/portfolio/17-concert-photography-15.JPG",
      },
      {
        image: "/portfolio/17-concert-photography-16.JPG",
      },
      {
        image: "/portfolio/17-concert-photography-17.JPG",
      },
      {
        image: "/portfolio/17-concert-photography-18.JPG",
      },
    ],
  },

  // =========================================================
  // 18 企業形象影片
  // =========================================================
  {
    id: 18,
    title: "企業形象影片拍攝＆後製",
    category: "Video Production",
    cover: "/portfolio/18-corporate-video.jpg",
    slug: "corporate-video",
    featured: true,
    type: "video",

    description:
      "企業形象影片製作，從前期內容規劃、現場拍攝到後期剪輯，將品牌與企業故事轉化為影像內容。",

    contribution:
      "前期企劃、拍攝、剪輯與後製",

    videos: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/T9daTB_p2gY",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/iTt8TJBawZ4",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/cDnArkj_QsE",
      },
    ],
  },

  // =========================================================
  // 19 音樂獎
  // =========================================================
  {
    id: 19,
    title: "音樂獎廣告花絮拍攝＆後製",
    category: "Video Production",
    year: "2025",
    cover: "/portfolio/19-music-award-video.jpg",
    slug: "music-award",
    featured: true,
    type: "video",

    description:
      "音樂獎相關廣告與活動花絮影像製作，記錄現場拍攝過程與幕後內容，並完成後期剪輯。",

    contribution:
      "腳本企劃、現場拍攝、影像紀錄與後期剪輯",

    videos: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/pLCeevLdaaE",
      },
    ],
  },

  // =========================================================
  // 20 大學校務系統
  // =========================================================
  {
    id: 20,
    title: "大學校務系統背景設計",
    category: "Visual Design",
    cover: "/portfolio/20-university-system.jpg",
    slug: "school-system",
    featured: true,
    type: "image",

    description:
      "為大學校務系統設計介面背景視覺，將校園特色與視覺元素整合至數位介面中。",

    contribution:
      "視覺設計與數位介面背景製作",

    gallery: [
      {
        image: "/portfolio/20-university-system-01.jpg",
      },
    ],
  },

  // =========================================================
  // 21 阿嬤多謝
  // =========================================================
  {
    id: 21,
    title: "微電影《阿嬤,多謝》",
    category: "Video Production",

    cover: "/portfolio/21-a-ma-multi.jpg",
    slug: "grandma-thank-you",
    featured: true,
    type: "video",

    description:
      "主角偉倫來自馬來西亞，小時候父母離異，他便跟著爸爸來到台灣並由阿嬤照顧長大。在學校裡，同班同學都對他愛理不理的，甚至瞧不起他，讓偉倫開始對上學感到厭倦。有天，同學的相機失蹤了，在大家都不知道兇手是誰的情況下，因為偉倫的弱勢，讓所有人都把矛頭指向他，但還好有不小心看到犯案過程的振育，才能化解班上同學對偉倫的誤會，也讓偉倫對上學比較沒那麼厭煩。回到家，偉倫看到阿嬤正忙碌的準備晚餐，頓時讓偉倫覺得很感動，因為不管發生什麼事，阿嬤永遠都是愛他的，阿嬤一直都在。",

    award: "祖孫傳情微電影比賽人氣獎",

    contribution:
      "導演、剪輯",

    videos: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/vWxNkvGUDws",
      },
    ],
  },

  // =========================================================
  // 22 下一步
  // =========================================================
  {
    id: 22,
    title: "《下一步,然後呢》",
    category: "Video Production",

    cover: "/portfolio/22-next-step.jpg",
    slug: "next-step",
    featured: true,
    type: "video",

    description:
      "以人生選擇與成長為主題的影像創作，透過人物與故事呈現面對下一步時的思考。",

    award: "2020 青春有影大學盃 百大精選獎",

    contribution:
      "導演、剪輯",

    videos: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/N0m8Y_gALF8",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/DjkVyf17rTc",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/_Gag36mPmMc",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/srlilSm5_z4",
      },
    ],
  },

  // =========================================================
  // 23 搶救北極熊
  // =========================================================
  {
    id: 23,
    title: "動畫《搶救北極熊大作戰》",
    category: "Video Production",

    cover: "/portfolio/23-save-polar-bears.jpg",
    slug: "save-polar-bear",
    featured: true,
    type: "video",

    description:
      "以環境議題為主題的影像創作，透過故事與影像傳達環境保護與生態議題。",

    award: "金傳獎最佳動畫",

    contribution:
      "獨立製作",

    videos: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/tQI1dsmyRaA",
      },
    ],
  },

  // =========================================================
  // 24 爸爸の味道
  // =========================================================
  {
    id: 24,
    title: "《爸爸の味道》",
    category: "Video Production",

    cover: "/portfolio/24-dad-flavor.jpg",
    slug: "dad-taste",
    featured: true,
    type: "video",

    description:
      "本片敘述主角實現廚師夢想過程中屢次遇到困難，在父親的精神鼓勵下，不斷克服困難。希望傳遞一種「面對困難不輕言放棄」的精神，以小人物的視角為出發點，貼近觀眾實際生活的鏡頭表現，讓觀眾切實感受到主角逐夢路上的曲折歷程以及其父親對其的精神鼓舞。",

    award: "第三屆得勝影展獲獎",

    contribution:
      "導演、剪輯",

    videos: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/2NFEytosa4E",
      },
    ],
  },

  // =========================================================
  // 25 淨灘
  // =========================================================
  {
    id: 25,
    title: "淨灘活動紀錄",
    category: "Video Production",

    cover: "/portfolio/25-beach-cleanup.jpg",
    slug: "beach-cleanup",
    featured: true,
    type: "video",

    description:
      "記錄淨灘活動現場，透過影像呈現參與者、活動過程與環境行動。",

    contribution:
      "腳本企劃、活動紀錄、拍攝與後期剪輯",

    videos: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/ZcOzr_kyUEQ",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/QTLBy9Wnt5A",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/mpEt7UZ7wwA",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/FhN02l6nOto",
      },
    ],
  },

  // =========================================================
  // 26 婚紗 Vlog
  // =========================================================
  {
    id: 26,
    title: "婚紗拍攝紀錄 Vlog",
    category: "Video Production",

    cover: "/portfolio/26-wedding-vlog.jpg",
    slug: "wedding-vlog",
    featured: true,
    type: "video",

    description:
      "以 Vlog 形式記錄婚紗拍攝過程，從準備、拍攝到現場花絮，保留完整的過程與情緒。",

    contribution:
      "拍攝、剪輯與後期製作",

    videos: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/ZRZC5Fp11_M",
      },
    ],
  },

  // =========================================================
  // 27 尋
  // =========================================================
  {
    id: 27,
    title: "微電影《尋》",
    category: "Video Production",

    cover: "/portfolio/27-search.jpg",
    slug: "search",
    featured: true,
    type: "video",

    description:
      "以尋找與探索為主題的影像創作，透過影像敘事建立作品的情緒與故事。",

    contribution:
      "場記、燈光",
      
    award: "觀光局微電影比賽第三名",

    videos: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/t0s9t--H7aM",
      },
    ],
  },

  // =========================================================
  // 28 迎新宿營
  // =========================================================
  {
    id: 28,
    title: "迎新宿營回顧 SDE",
    category: "Video Production",

    cover: "/portfolio/28-orientation-sde.jpg",
    slug: "camp-sde",
    featured: true,
    type: "video",

    description:
      "以 Same Day Edit 形式製作迎新宿營活動回顧影片，將當日拍攝素材快速整理並完成剪輯播放。",

    contribution:
      "現場拍攝、空拍、素材整理與快速剪輯",

    videos: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/5vRq1j93CBM",
      },
    ],
  },

  // =========================================================
  // 29 媽媽的願望
  // =========================================================
  {
    id: 29,
    title: "微電影《媽媽的願望》",
    category: "Video Production",

    cover: "/portfolio/29-mom-wish.jpg",
    slug: "mom-wish",
    featured: true,
    type: "video",

    description:
      "以家庭情感與人物故事為核心的影像創作，透過生活情境呈現人物之間的情感。",

    award: "榮總器官捐贈宣導影片比賽佳作",

    contribution:
      "導演、剪輯",

    videos: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/VpNjSIjTUVw",
      },
    ],
  },

  // =========================================================
  // 30 又見面了，地球
  // =========================================================
  {
    id: 30,
    title: "《又見面了，地球》",
    category: "Video Production",

    cover: "/portfolio/30-see-you-earth.jpg",
    slug: "hello-earth",
    featured: true,
    type: "video",

    description:
      "以環境與地球議題為主題的影像創作，透過影像敘事思考人與環境之間的關係。",

    contribution:
      "導演",

    videos: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/SP5-A02KKt4",
      },
    ],
  },

  // =========================================================
  // 31 原生
  // =========================================================
  {
    id: 31,
    title: "紀錄片《原生》",
    category: "Video Production",

    cover: "/portfolio/31-original.jpg",
    slug: "origin",
    featured: true,
    type: "video",

    description:
      "藉由紀錄拍攝，讓更多人看見道卡斯族。也因為道卡斯族是台灣在地原住民，而他們的文化，正是台灣文化代表之一，本片利用影像來找回那些，假使不再重視，就會被大家遺忘的文化。",

    award: "桃園市正名紀錄片第三名",

    contribution:
      "攝影、剪輯",

    videos: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/eIFSLDBVPhQ",
      },
    ],
  },

  // =========================================================
  // 32 大國民學測節目影片
  // =========================================================
  {
    id: 32,
    title: "《大國民學測》節目影片",
    category: "Video Production",

    cover: "/portfolio/32-national-exam-program.jpg",
    slug: "national-test-video",
    featured: true,
    type: "video",

    description:
      "節目影像作品，從節目內容與主題出發，完成影像拍攝與後期剪輯，將節目內容轉化為完整的影音作品。",

    contribution:
      "拍攝與後期剪輯",

    videos: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/92c0KvAcq9o",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/Qb6tuexI4Ss",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/PPROW9RHfS0",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/oFwceZqpm1k",
      },
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/Ty--PA0LAAY",
      },
    ],
  },

  // =========================================================
  // 33 生態導覽
  // =========================================================
  {
    id: 33,
    title: "生態導覽活動紀錄",
    category: "Video Production",

    cover: "/portfolio/33-ecology-tour.jpg",
    slug: "ecology-tour",
    featured: true,
    type: "video",

    description:
      "記錄生態導覽活動，透過影像呈現活動過程、自然環境與參與者互動。",

    contribution:
      "活動紀錄、拍攝與後期剪輯",

    videos: [
      {
        platform: "youtube",
        url: "https://www.youtube.com/embed/xHUGJQuIvuc",
      },
    ],
  },
];