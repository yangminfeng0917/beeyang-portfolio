"use client";

import Link from "next/link";
import { useState } from "react";

export default function ExperiencePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#111111]">

      {/* =========================================================
          Navbar
      ========================================================= */}

      <nav className="fixed top-0 z-50 w-full bg-[#FAFAFA]/90 px-6 py-4 backdrop-blur-sm md:px-8 md:py-5">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-lg font-semibold tracking-[0.2em] md:text-xl"
          >
            BEEYANG
          </Link>

          {/* Desktop Menu */}
          <div className="hidden gap-8 text-sm text-gray-500 md:flex">
            <Link
              href="/about"
              className="transition-colors hover:text-black"
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
              className="transition-colors hover:text-black"
            >
              Awards
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-black"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-[60] flex h-9 w-9 items-center justify-center md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="flex w-5 flex-col gap-1.5">

              <span
                className={`block h-[1.5px] w-5 bg-[#111111] transition-all duration-300 ${
                  menuOpen ? "translate-y-[4px] rotate-45" : ""
                }`}
              />

              <span
                className={`block h-[1.5px] w-5 bg-[#111111] transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-[1.5px] w-5 bg-[#111111] transition-all duration-300 ${
                  menuOpen ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />

            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-[#EAEAEA] pb-2 pt-3">

            <div className="flex flex-col">

              <Link
                href="/about"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#EAEAEA] py-2.5 text-xs text-gray-500"
              >
                About
              </Link>

              <Link
                href="/experience"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#EAEAEA] py-2.5 text-xs font-medium text-black"
              >
                Experience
              </Link>

              <Link
                href="/awards"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#EAEAEA] py-2.5 text-xs text-gray-500"
              >
                Awards
              </Link>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="py-2.5 text-xs text-gray-500"
              >
                Contact
              </Link>

            </div>
          </div>
        </div>
      </nav>

      {/* =========================================================
          Page Header
      ========================================================= */}

      <section className="px-5 pb-8 pt-24 md:px-8 md:pb-10 md:pt-32 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <p className="text-[11px] tracking-[0.28em] text-gray-400 md:text-[13px]">
            BACKGROUND
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:mt-4 md:text-5xl lg:text-6xl">
            Experience
          </h1>

          <p className="mt-2 max-w-xl text-[10px] leading-5 text-gray-500 md:mt-3 md:text-sm md:leading-6">
            Education, career and creative background.
          </p>

        </div>
      </section>

      {/* =========================================================
          Education / Work Experience / Activities
      ========================================================= */}

      <section className="px-5 pb-10 md:px-8 md:pb-14 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:gap-12 lg:grid-cols-3 lg:gap-10">

            {/* =====================================================
                Education
            ===================================================== */}

            <div>
              <SectionTitle
                english="EDUCATION"
                chinese="學歷"
              />

              <div className="mt-5 border-l border-[#DCDCDC] pl-4 md:mt-6 md:pl-6">

                <TimelineItem
                  year="2020 — 2022"
                  title="輔仁大學"
                  subtitle="大眾傳播學研究所｜碩士"
                />

                <TimelineItem
                  year="2016 — 2020"
                  title="開南大學"
                  subtitle="資訊傳播學系｜學士"
                />

                <TimelineItem
                  year="2013 — 2016"
                  title="宜蘭高中"
                  subtitle="普通科"
                  last
                />

              </div>
            </div>

            {/* =====================================================
                Work Experience
            ===================================================== */}

            <div>
              <SectionTitle
                english="WORK EXPERIENCE"
                chinese="工作經歷"
              />

              <div className="mt-5 border-l border-[#DCDCDC] pl-4 md:mt-6 md:pl-6">

                <TimelineItem
                  year="2022 — 2026"
                  title="POP Radio 台北流行廣播電台"
                  subtitle="視覺設計師"
                />

                <TimelineItem
                  year="2019 — Present"
                  title="YB 客製繪圖所"
                  subtitle="接案設計師｜自創品牌經營"
                />

                <TimelineItem
                  year="2020 — 2022"
                  title="輔仁大學傳播學院"
                  subtitle="研究／教學助理"
                />

                <TimelineItem
                  year="2018"
                  title="映畫製作節目部"
                  subtitle="實習生"
                />

                <TimelineItem
                  year="2017 — 2020"
                  title="開南大學圖書館"
                  subtitle="採編／設計工讀生"
                  last
                />

              </div>
            </div>

            {/* =====================================================
                Activities
            ===================================================== */}

            <div>
              <SectionTitle
                english="ACTIVITIES"
                chinese="活動經歷"
              />

              <div className="mt-5 border-l border-[#DCDCDC] pl-4 md:mt-6 md:pl-6">

                <TimelineItem
                  year="2025"
                  title="Hito流行音樂獎"
                  subtitle="修圖手"
                />

                <TimelineItem
                  year="2024"
                  title="Speedo全國行銷影片創意競賽"
                  subtitle="決賽評審"
                />

                <TimelineItem
                  year="2024"
                  title="POP Radio 台慶演唱會"
                  subtitle="攝影師"
                />

                <TimelineItem
                  year="2023"
                  title="校友職涯講座「影音行銷秘訣與剪輯技巧分享」"
                  subtitle="講者"
                />

                <TimelineItem
                  year="2022"
                  title="輔仁大學大眾傳播研究所畢業典禮"
                  subtitle="總召／主持人"
                />

                <TimelineItem
                  year="2022"
                  title="學術論文發表"
                  subtitle="《Instagram 限時動態互動模式、圖像呈現方式與 CTA 訊息對廣告效果之影響－以產品涉入度為調節變項》"
                />

                <TimelineItem
                  year="2021"
                  title="輔仁大學大眾傳播研究所新生茶會"
                  subtitle="總召／主持人"
                />

                <TimelineItem
                  year="2021"
                  title="台北商業大學數位設計與行銷學術研討會"
                  subtitle="發表《有迷因就按讚？網路迷因圖片類型與訊息架構對參與行為之影響》"
                />

                <TimelineItem
                  year="2020"
                  title="畢業專題展覽（新一代設計展）"
                  subtitle="總召"
                />

                <TimelineItem
                  year="2019"
                  title="民視主播培育夏令營"
                  subtitle="新聞採訪助教"
                />

                <TimelineItem
                  year="2018"
                  title="金傳獎頒獎典禮"
                  subtitle="導播／視覺總監"
                />

                <TimelineItem
                  year="2018"
                  title="桃園鐵玫瑰音樂節"
                  subtitle="攝影師／工作人員"
                />

                <TimelineItem
                  year="2018"
                  title="開南資傳系學生聯展"
                  subtitle="策展總召"
                  last
                />

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          Professional Areas
      ========================================================= */}

      <section className="px-5 pb-12 pt-2 md:px-8 md:pb-16 md:pt-4 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <SectionTitle
            english="PROFESSIONAL AREAS"
            chinese="專業項目"
          />

          <div className="mt-5 grid grid-cols-2 gap-3 md:mt-7 md:grid-cols-2 md:gap-4">

            <ProfessionalArea
              title="Visual Design"
              description="品牌視覺｜社群設計｜活動主視覺｜平面製作"
            />

            <ProfessionalArea
              title="Video Production"
              description="影片拍攝｜影片剪輯｜短影音製作｜動態影像"
            />

            <ProfessionalArea
              title="Photography"
              description="活動攝影｜演唱會攝影｜人像攝影｜後製修圖"
            />

            <ProfessionalArea
              title="Content Planning"
              description="廣播企劃｜社群規劃｜專案執行｜跨部門溝通"
            />

          </div>

        </div>
      </section>

    </main>
  );
}

/* =========================================================
   Section Title
========================================================= */

function SectionTitle({
  english,
  chinese,
}: {
  english: string;
  chinese: string;
}) {
  return (
    <div>
      <p className="text-[11px] tracking-[0.28em] text-gray-400 md:text-[13px]">
        {english}
      </p>

      <h2 className="mt-1.5 text-[18px] font-semibold leading-tight md:mt-3 md:text-[28px]">
        {chinese}
      </h2>
    </div>
  );
}

/* =========================================================
   Timeline Item
========================================================= */

function TimelineItem({
  year,
  title,
  subtitle,
  last = false,
}: {
  year: string;
  title: string;
  subtitle: string;
  last?: boolean;
}) {
  return (
    <div
      className={`${
        last ? "pb-0" : "pb-5 md:pb-7"
      }`}
    >

      {/* Year */}
      <p className="text-[11px] leading-5 tracking-[0.08em] text-gray-400 md:text-[14px] md:leading-6">
        {year}
      </p>

      {/* School / Company */}
      <h3 className="mt-0.5 text-[16px] font-semibold leading-6 md:mt-1 md:text-[18px] md:leading-7">
        {title}
      </h3>

      {/* Degree / Position */}
      {subtitle && (
        <p className="mt-0.5 text-[12px] leading-5 text-gray-500 md:mt-1 md:text-[14px] md:leading-6">
          {subtitle}
        </p>
      )}

    </div>
  );
}

/* =========================================================
   Professional Area Card
========================================================= */

function ProfessionalArea({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="border border-[#EAEAEA] bg-white px-4 py-4 md:px-6 md:py-6">

      <h3 className="text-[16px] font-semibold leading-6 md:text-[20px] md:leading-7">
        {title}
      </h3>

      <p className="mt-1.5 text-[11px] leading-5 text-gray-500 md:mt-2 md:text-[14px] md:leading-6">
        {description}
      </p>

    </div>
  );
}