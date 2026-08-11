import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
            className="text-black"
          >
            About
          </Link>

          <Link
            href="/experience"
            className="hover:text-black"
          >
            Experience
          </Link>

          <Link
            href="/awards"
            className="hover:text-black"
          >
            Awards
          </Link>

          <Link
            href="/contact"
            className="hover:text-black"
          >
            Contact
          </Link>
        </div>
      </nav>


      {/* =========================================================
          About Me
      ========================================================= */}

      <section className="px-8 pb-28 pt-40 md:px-16">

        <div className="mx-auto grid max-w-7xl items-start gap-16 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <p className="text-xs tracking-[0.35em] text-gray-400">
              ABOUT ME
            </p>

            {/* Name */}
            <div className="mt-8">

              <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
                楊旻峰
              </h1>

              <p className="mt-3 text-lg tracking-[0.2em] text-gray-400">
                BEEYANG
              </p>

            </div>

            {/* Profession */}
            <h2 className="mt-10 text-2xl font-medium md:text-3xl">
              數位媒體 / 視覺設計師
            </h2>

            {/* About */}
            <div className="mt-14">

              <p className="text-xs tracking-[0.35em] text-gray-400">
                ABOUT
              </p>

              <h3 className="mt-4 text-3xl font-semibold">
                關於我
              </h3>

              <div className="mt-8 max-w-2xl">

                <p className="leading-9 text-gray-600">
                  我是一名數位媒體與視覺設計師，
                  擅長結合廣播企劃、影像製作與視覺設計，
                  將內容轉化為具有溝通力的作品。
                </p>

                <p className="mt-6 leading-9 text-gray-600">
                  從企劃發想到拍攝剪輯，
                  累積廣播、社群影音、活動攝影與品牌設計經驗，
                  習慣完整參與每一次創作流程。
                </p>

              </div>

            </div>

          </div>


          {/* Profile Photo */}
          <div className="lg:pt-8">

            <div className="relative mx-auto w-full max-w-md lg:ml-auto">

              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-200">

                <Image
                  src="/images/profile.jpg"
                  alt="楊旻峰 BEEYANG"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />

              </div>

              {/* Photo Caption */}
              <div className="mt-5 flex items-center justify-between text-xs text-gray-400">

                <span>
                  MIN FENG YANG
                </span>

                <span>
                  DIGITAL MEDIA / VISUAL DESIGNER
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          Expertise
      ========================================================= */}

      <section className="px-8 pb-20 pt-20 md:px-16">

        <div className="mx-auto max-w-7xl">

          {/* Section Header */}
          <p className="text-xs tracking-[0.35em] text-gray-400">
            EXPERTISE
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            專業能力
          </h2>

          {/* Ability Cards */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">

            {/* 廣播企劃 */}
            <AbilityCard
              title="廣播企劃"
              result="廣播金鐘「企劃編撰獎」入圍肯定"
              image="/images/about-broadcast.jpg"
              description="參與廣播節目企劃與內容製作，累積節目企劃發想、文字撰寫與專案執行經驗。"
            />

            {/* 攝影修圖 */}
            <AbilityCard
              title="攝影修圖"
              result="活動、演唱會與品牌影像拍攝及後期製作"
              image="/images/about-photo.jpg"
              description="累積活動紀錄、演唱會與人像攝影經驗，從現場拍攝到後期修圖，完整完成影像呈現。"
            />

            {/* 拍攝剪輯 */}
            <AbilityCard
              title="拍攝剪輯"
              result="POP Radio 社群超過 100 支短影音製作"
              image="/images/about-video.jpg"
              description="從企劃發想、拍攝到後期剪輯皆能獨立完成，具備完整的影音製作與社群內容執行能力。"
            />

            {/* 溝通領導力 */}
            <AbilityCard
              title="溝通領導力"
              result="團隊協作、活動籌備與專案執行"
              image="/images/about-leadership.jpg"
              description="曾參與畢業展籌備與團隊管理，負責活動規劃、進度管理及跨組溝通，培養完整的團隊執行能力。"
            />

          </div>

        </div>

      </section>


      {/* =========================================================
          Highlights
      ========================================================= */}

      <section className="px-8 pb-20 pt-4 md:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="grid md:grid-cols-4">

            {/* 2025 */}
            <div className="py-8 md:border-r md:border-zinc-200 md:pr-8">

              <p className="text-5xl font-semibold tracking-tight">
                2025
              </p>

              <h3 className="mt-5 text-base font-semibold">
                廣播金鐘獎
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-500">
                「企劃編撰獎」入圍
              </p>

            </div>


            {/* 100+ */}
            <div className="py-8 md:border-r md:border-zinc-200 md:px-8">

              <p className="text-5xl font-semibold tracking-tight">
                100+
              </p>

              <h3 className="mt-5 text-base font-semibold">
                POP Radio
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-500">
                社群短影音製作
              </p>

            </div>


            {/* 6K+ */}
            <div className="py-8 md:border-r md:border-zinc-200 md:px-8">

              <p className="text-5xl font-semibold tracking-tight">
                6K+
              </p>

              <h3 className="mt-5 text-base font-semibold">
                YouTube
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-500">
                單支影片觀看次數
              </p>

            </div>


            {/* 5+ */}
            <div className="py-8 md:pl-8">

              <p className="text-5xl font-semibold tracking-tight">
                5+
              </p>

              <h3 className="mt-5 text-base font-semibold">
                年實務經驗
              </h3>

              <p className="mt-2 text-sm leading-7 text-gray-500">
                廣播、影像、設計與攝影
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   Ability Card
========================================================= */

function AbilityCard({
  title,
  result,
  image,
  description,
}: {
  title: string;
  result: string;
  image: string;
  description: string;
}) {
  return (
    <div className="group border border-[#EAEAEA] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

      </div>

      {/* Content */}
      <div className="p-8 md:p-10">

        {/* Title / Result */}
        <h3 className="text-xl font-semibold leading-relaxed text-[#111111]">

          <span>
            {title}
          </span>

          <span className="mx-2">
            /
          </span>

          <span>
            {result}
          </span>

        </h3>

        {/* Description */}
        <p className="mt-5 text-sm leading-8 text-gray-500">
          {description}
        </p>

      </div>

    </div>
  );
}