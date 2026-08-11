
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#111111]">

      {/* Navbar */}
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-8 py-6 backdrop-blur-sm">
        <Link
          href="/"
          className="text-xl font-semibold tracking-[0.2em]"
        >
          BEEYANG
        </Link>

        <div className="hidden gap-8 text-sm text-gray-500 md:flex">

          <Link
            href="/about"
            className="transition-colors duration-300 hover:text-black"
          >
            About
          </Link>

          <Link
            href="/experience"
            className="text-black"
          >
            Experience
          </Link>

          <Link
            href="/awards"
            className="transition-colors duration-300 hover:text-black"
          >
            Awards
          </Link>

          <Link
            href="/contact"
            className="transition-colors duration-300 hover:text-black"
          >
            Contact
          </Link>

        </div>
      </nav>


      {/* Header */}
      <section className="px-8 pb-14 pt-36 md:px-16">
        <div
          className="
            mx-auto
            max-w-7xl
            animate-[fadeIn_0.7s_ease-out_both]
          "
        >

          <p className="text-xs tracking-[0.35em] text-gray-400">
            EXPERIENCE
          </p>

          <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
            Experience
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500">
            Education, professional experience and creative background.
          </p>

        </div>
      </section>


      {/* Experience */}
      <section className="px-8 pb-20 md:px-16">

        <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-3">


          {/* Education */}
          <div
            className="
              animate-[fadeIn_0.7s_ease-out_0.1s_both]
            "
          >

            <p className="text-xs tracking-[0.35em] text-gray-400">
              EDUCATION
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              學歷
            </h2>


            <div className="mt-7 border-l border-zinc-200 pl-6">

              <Experience
                year="2020 — 2022"
                company="輔仁大學"
                role="大眾傳播學研究所｜碩士"
              />

              <Experience
                year="2016 — 2020"
                company="開南大學"
                role="資訊傳播學系｜學士"
              />

              <Experience
                year="2013 — 2016"
                company="宜蘭高中"
                role="普通科"
              />

            </div>

          </div>


          {/* Work Experience */}
          <div
            className="
              animate-[fadeIn_0.7s_ease-out_0.2s_both]
            "
          >

            <p className="text-xs tracking-[0.35em] text-gray-400">
              WORK EXPERIENCE
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              工作經歷
            </h2>


            <div className="mt-7 border-l border-zinc-200 pl-6">

              <Experience
                year="2022 — 2026"
                company="POP Radio 台北流行廣播電台"
                role="視覺設計師"
              />

              <Experience
                year="2019 — Present"
                company="YB 客製繪圖所"
                role="接案設計師｜自創品牌經營"
              />

              <Experience
                year="2020 — 2022"
                company="輔仁大學傳播學院"
                role="研究／教學助理"
              />

              <Experience
                year="2018"
                company="映畫製作節目部"
                role="實習生"
              />

              <Experience
                year="2017 — 2020"
                company="開南大學圖書館"
                role="採編／設計工讀生"
              />

            </div>

          </div>


          {/* Activities */}
          <div
            className="
              animate-[fadeIn_0.7s_ease-out_0.3s_both]
            "
          >

            <p className="text-xs tracking-[0.35em] text-gray-400">
              ACTIVITIES
            </p>

            <h2 className="mt-3 text-3xl font-semibold">
              活動經歷
            </h2>


            <div className="mt-7 border-l border-zinc-200 pl-6">

              <Experience
                year="2025"
                company="Hito流行音樂獎"
                role="修圖手"
              />

              <Experience
                year="2024"
                company="Speedo全國行銷影片創意競賽"
                role="決賽評審"
              />

              <Experience
                year="2024"
                company="POP Radio 台慶演唱會"
                role="攝影師"
              />

              <Experience
                year="2023"
                company="校友職涯講座「影音行銷秘訣與剪輯技巧分享」"
                role="講者"
              />

              <Experience
                year="2022"
                company="輔仁大學大眾傳播研究所畢業典禮"
                role="總召／主持人"
              />

              <Experience
                year="2022"
                company="學術論文發表"
                role="《Instagram 限時動態互動模式、圖像呈現方式與 CTA 訊息對廣告效果之影響－以產品涉入度為調節變項》"
              />

              <Experience
                year="2021"
                company="輔仁大學大眾傳播研究所新生茶會"
                role="總召／主持人"
              />

              <Experience
                year="2021"
                company="台北商業大學數位設計與行銷學術研討會"
                role="發表《有迷因就按讚？網路迷因圖片類型與訊息架構對參與行為之影響》"
              />

              <Experience
                year="2020"
                company="畢業專題展覽（新一代設計展）"
                role="總召"
              />

              <Experience
                year="2019"
                company="民視主播培育夏令營"
                role="新聞採訪助教"
              />

              <Experience
                year="2018"
                company="金傳獎頒獎典禮"
                role="導播／視覺總監"
              />

              <Experience
                year="2018"
                company="桃園鐵玫瑰音樂節"
                role="攝影師／工作人員"
              />

              <Experience
                year="2018"
                company="開南資傳系學生聯展"
                role="策展總召"
              />

            </div>

          </div>

        </div>

      </section>


      {/* Skills */}
      <section
        className="
          px-8
          pb-24
          md:px-16
          animate-[fadeIn_0.7s_ease-out_0.4s_both]
        "
      >

        <div className="mx-auto max-w-7xl">

          <p className="text-xs tracking-[0.35em] text-gray-400">
            SKILLS
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            專業能力
          </h2>


          <div className="mt-7 grid gap-6 md:grid-cols-2">

            <Skill
              title="Visual Design"
              text="品牌視覺｜社群設計｜活動主視覺｜平面製作"
            />

            <Skill
              title="Video Production"
              text="影片拍攝｜影片剪輯｜短影音製作｜動態影像"
            />

            <Skill
              title="Photography"
              text="活動攝影｜演唱會攝影｜人像攝影｜後製修圖"
            />

            <Skill
              title="Content Planning"
              text="廣播企劃｜社群規劃｜專案執行｜跨部門溝通"
            />

          </div>

        </div>

      </section>

    </main>
  );
}


/* Experience Item */
function Experience({
  year,
  company,
  role,
}: {
  year: string;
  company: string;
  role: string;
}) {
  return (
    <div
      className="
        group
        py-3
        transition-all
        duration-300
        hover:translate-x-1
      "
    >

      <p
        className="
          text-xs
          text-gray-400
          transition-colors
          duration-300
          group-hover:text-gray-600
        "
      >
        {year}
      </p>

      <h3
        className="
          mt-1
          text-base
          font-medium
          leading-6
        "
      >
        {company}
      </h3>

      <p
        className="
          mt-0.5
          text-sm
          leading-5
          text-gray-500
        "
      >
        {role}
      </p>

    </div>
  );
}


/* Skill Card */
function Skill({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      className="
        group
        border
        border-[#EAEAEA]
        bg-white
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)]
      "
    >

      <h3
        className="
          text-lg
          font-medium
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      >
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-500">
        {text}
      </p>

    </div>
  );
}
