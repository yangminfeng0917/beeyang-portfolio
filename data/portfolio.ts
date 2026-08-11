
export type GalleryItem = {
  image: string;
  title?: string;
  year?: string;
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
  type: "image" | "video";
  youtube?: string;
  gallery?: GalleryItem[];
};

export const portfolio: PortfolioItem[] = [
  {
    id: 1,
    title: "短影音拍攝＆剪輯",
    category: "Video Production",
    year: "2022–2026",
    cover: "/portfolio/01-short-video.jpg",
    slug: "short-video",
    featured: true,
    type: "video",
    description:
      "負責社群短影音的企劃、拍攝與後期剪輯，從內容發想到影像製作，將節目與活動內容轉化為適合社群傳播的短影音作品。",
    contribution: "企劃發想、腳本、拍攝、剪輯、字幕與社群影音製作",
  },

  {
    id: 2,
    title: "《大國民學測》測驗網站",
    category: "Project Planning",
    cover: "/portfolio/02-national-exam-website.jpg",
    slug: "national-test-web",
    featured: true,
    type: "image",
    description:
      "以節目內容為核心打造互動測驗網站，將影音內容、題目設計與網頁視覺整合，讓使用者透過互動方式參與節目主題。",
    contribution: "專案企劃、內容整合、視覺設計與數位內容製作",
  },

  {
    id: 3,
    title: "圖書館視覺形象設計應用",
    category: "Visual Design",
    cover: "/portfolio/03-library-visual.jpg",
    slug: "library-visual",
    featured: true,
    type: "image",
    description:
      "以圖書館品牌形象為核心，發展不同情境下的視覺應用，建立一致的識別與溝通方式。",
    contribution: "視覺規劃、平面設計與延伸應用",
  },

  {
    id: 4,
    title: "國民法官專題網站",
    category: "Project Planning",
    cover: "/portfolio/04-citizen-judge-website.jpg",
    slug: "citizen-judge-web",
    featured: true,
    type: "image",
    description:
      "以國民法官制度為主題的數位專題，透過網站內容架構與視覺設計整理複雜資訊，提升資訊閱讀與理解。",
    contribution: "專題企劃、內容整理、視覺設計與數位內容製作",
  },

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
    contribution: "主視覺設計、平面設計與週邊延伸應用",
  },

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
    contribution: "視覺企劃、主視覺設計與延伸素材製作",
  },

  {
    id: 7,
    title: "頒獎典禮視覺及週邊設計",
    category: "Visual Design",
    cover: "/portfolio/07-award-ceremony-visual.jpg",
    slug: "award-ceremony",
    featured: true,
    type: "image",
    description:
      "頒獎典禮整體視覺與週邊設計，從活動主視覺延伸至現場與宣傳應用。",
    contribution: "視覺企劃、主視覺設計與活動週邊設計",
  },

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
  },

  {
    id: 9,
    title: "社群 Banner 設計",
    category: "Visual Design",
    cover: "/portfolio/09-social-banner.jpg",
    slug: "social-banner",
    featured: true,
    type: "image",
    description:
      "製作不同節目、活動與社群內容所需的 Banner 視覺，依照內容主題建立具有辨識度的視覺風格。",
  },

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
  },

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
  },

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
  },

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
    contribution: "角色設計、視覺設計、社群影音企劃與製作",
  },

  {
    id: 14,
    title: "Q版角色人物設計",
    category: "Illustration",
    year: "2019–Now",
    cover: "/portfolio/14-q-version-character.jpg",
    slug: "q-character",
    featured: true,
    type: "image",
    description:
      "以人物特徵與個人風格為基礎進行 Q 版角色創作，將人物形象轉化為具有辨識度的角色視覺。",
  },

  {
    id: 15,
    title: "人像繪圖設計",
    category: "Illustration",
    year: "2019–Now",
    cover: "/portfolio/15-portrait-illustration.jpg",
    slug: "portrait-illustration",
    featured: true,
    type: "image",
    description:
      "以人物照片為基礎進行風格化人像繪圖，保留人物特徵並轉化為具有個人風格的視覺作品。",
  },

  {
    id: 16,
    title: "LINE貼圖設計",
    category: "Illustration",
    year: "2019–Now",
    cover: "/portfolio/16-line-sticker.jpg",
    slug: "line-sticker",
    featured: true,
    type: "image",
    description:
      "將角色與日常情境轉化為 LINE 貼圖，透過表情與動作設計增加角色的互動性與使用情境。",
  },

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
    contribution: "現場攝影與影像紀錄",
  },

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
    contribution: "前期企劃、拍攝、剪輯與後製",
  },

  {
    id: 19,
    title: "音樂獎廣告花絮拍攝＆後製",
    category: "Video Production",
    cover: "/portfolio/19-music-award-video.jpg",
    slug: "music-award",
    featured: true,
    type: "video",
    description:
      "音樂獎相關廣告與活動花絮影像製作，記錄現場拍攝過程與幕後內容，並完成後期剪輯。",
    contribution: "現場拍攝、影像紀錄與後期剪輯",
  },

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
    contribution: "視覺設計與數位介面背景製作",
  },

  {
    id: 21,
    title: "《阿嬤,多謝》",
    category: "Video Production",
    cover: "/portfolio/21-a-ma-multi.jpg",
    slug: "grandma-thank-you",
    featured: true,
    type: "video",
    description:
      "影像創作作品，以人物故事與生活情感為核心，透過影像記錄真實情感與人物關係。",
    contribution: "企劃、拍攝與後期剪輯",
  },

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
    contribution: "企劃、拍攝與後期剪輯",
  },

  {
    id: 23,
    title: "《搶救北極熊大作戰》",
    category: "Video Production",
    cover: "/portfolio/23-save-polar-bears.jpg",
    slug: "save-polar-bear",
    featured: true,
    type: "video",
    description:
      "以環境議題為主題的影像創作，透過故事與影像傳達環境保護與生態議題。",
    contribution: "企劃、拍攝與後期剪輯",
  },

  {
    id: 24,
    title: "《爸爸の味道》",
    category: "Video Production",
    cover: "/portfolio/24-dad-flavor.jpg",
    slug: "dad-taste",
    featured: true,
    type: "video",
    description:
      "以家庭與記憶為主題的影像作品，從日常生活與飲食切入，描繪人物之間的情感連結。",
    contribution: "企劃、拍攝與後期剪輯",
  },

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
    contribution: "活動紀錄、拍攝與後期剪輯",
  },

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
    contribution: "拍攝、剪輯與後期製作",
  },

  {
    id: 27,
    title: "《尋》",
    category: "Video Production",
    cover: "/portfolio/27-search.jpg",
    slug: "search",
    featured: true,
    type: "video",
    description:
      "以尋找與探索為主題的影像創作，透過影像敘事建立作品的情緒與故事。",
    contribution: "企劃、拍攝與後期剪輯",
  },

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
    contribution: "現場拍攝、素材整理與快速剪輯",
  },

  {
    id: 29,
    title: "《媽媽的願望》",
    category: "Video Production",
    cover: "/portfolio/29-mom-wish.jpg",
    slug: "mom-wish",
    featured: true,
    type: "video",
    description:
      "以家庭情感與人物故事為核心的影像創作，透過生活情境呈現人物之間的情感。",
    contribution: "企劃、拍攝與後期剪輯",
  },

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
    contribution: "企劃、拍攝與後期剪輯",
  },

  {
    id: 31,
    title: "《原生》",
    category: "Video Production",
    cover: "/portfolio/31-original.jpg",
    slug: "origin",
    featured: true,
    type: "video",
    description:
      "以原生、土地與人物為題材的影像創作，透過影像記錄地方與人物故事。",
    contribution: "企劃、拍攝與後期剪輯",
  },

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
    contribution: "節目企劃、拍攝與後期剪輯",
  },

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
    contribution: "活動紀錄、拍攝與後期剪輯",
  },
];