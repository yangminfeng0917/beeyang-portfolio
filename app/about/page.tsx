"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutPage() {
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
            <Link href="/about" className="text-black">
              About
            </Link>

            <Link
              href="/experience"
              className="transition-colors hover:text-black"
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
                className="border-b border-[#EAEAEA] py-2.5 text-xs font-medium text-black"
              >
                About
              </Link>

              <Link
                href="/experience"
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#EAEAEA] py-2.5 text-xs text-gray-500"
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
          About Me
      ========================================================= */}

      <section className="px-5 pb-8 pt-24 md:px-8 md:pb-20 md:pt-32 lg:px-12">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="mb-6 md:mb-12">

            <p className="text-[8px] tracking-[0.28em] text-gray-400 md:text-xs">
              ABOUT ME
            </p>

            <div className="mt-3 md:mt-6">

              <h1 className="text-3xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                楊旻峰
              </h1>

              <p className="mt-1 text-[10px] tracking-[0.2em] text-gray-400 md:text-lg">
                BEEYANG
              </p>

              <h2 className="mt-3 text-sm font-medium md:mt-6 md:text-2xl lg:text-3xl">
                數位媒體 / 視覺設計師
              </h2>

            </div>
          </div>

          {/* Photo + About */}
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">

            {/* Profile Photo */}
            <div className="order-first lg:order-last">

              <div className="relative mx-auto w-full max-w-sm lg:ml-auto">

                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-200">

                  <Image
                    src="/images/profile.jpg"
                    alt="楊旻峰 BEEYANG"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />

                </div>

                <div className="mt-2 flex justify-between text-[8px] text-gray-400 md:mt-4 md:text-xs">
                  <span>MIN FENG YANG</span>
                  <span>DIGITAL MEDIA / VISUAL DESIGNER</span>
                </div>

              </div>
            </div>

            {/* About Text */}
            <div className="lg:flex lg:items-center">

              <div className="max-w-xl">

                <h3 className="text-lg font-semibold md:text-3xl">
                  關於我
                </h3>

                <div className="mt-3 md:mt-6">

                  <p className="text-[11px] leading-5.5 text-gray-600 md:text-base md:leading-8">
                    我是一名數位媒體與視覺設計師，
                    擅長結合廣播企劃、影像製作與視覺設計，
                    將內容轉化為具有溝通力的作品。
                  </p>

                  <p className="mt-2.5 text-[11px] leading-5.5 text-gray-600 md:mt-5 md:text-base md:leading-8">
                    從企劃發想到拍攝剪輯，
                    累積廣播、社群影音、活動攝影與品牌設計經驗，
                    習慣完整參與每一次創作流程。
                  </p>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          Expertise
      ========================================================= */}

      <section className="px-5 pb-8 pt-0 md:px-8 md:pb-16 md:pt-4 lg:px-12">
        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <p className="text-[8px] tracking-[0.28em] text-gray-400 md:text-xs">
            EXPERTISE
          </p>

          <h2 className="mt-2 text-xl font-semibold md:mt-3 md:text-3xl">
            專業能力
          </h2>

          {/* =====================================================
              Mobile Horizontal Cards
          ===================================================== */}

          <div className="-mx-5 mt-4 overflow-x-auto px-5 md:hidden">
            <div className="flex w-max gap-2.5 pb-1">

              <AbilityCard
                title="廣播企劃"
                result="廣播金鐘「企劃編撰獎」入圍肯定"
                image="/images/about-broadcast.jpg"
                description="參與廣播節目企劃與內容製作，累積節目企劃發想、文字撰寫與專案執行經驗。"
                mobile
              />

              <AbilityCard
                title="攝影修圖"
                result="活動、演唱會與品牌影像拍攝及後期製作"
                image="/images/about-photo.jpg"
                description="累積活動紀錄、演唱會與人像攝影經驗，從現場拍攝到後期修圖，完整完成影像呈現。"
                mobile
              />

              <AbilityCard
                title="拍攝剪輯"
                result="POP Radio 社群超過 100 支短影音製作"
                image="/images/about-video.jpg"
                description="從企劃發想、拍攝到後期剪輯皆能獨立完成，具備完整的影音製作與社群內容執行能力。"
                mobile
              />

              <AbilityCard
                title="溝通領導力"
                result="團隊協作、活動籌備與專案執行"
                image="/images/about-leadership.jpg"
                description="曾參與畢業展籌備與團隊管理，負責活動規劃、進度管理及跨組溝通，培養完整的團隊執行能力。"
                mobile
              />

            </div>
          </div>

          {/* =====================================================
              Desktop Cards
          ===================================================== */}

          <div className="mt-7 hidden gap-5 md:grid md:grid-cols-2">

            <AbilityCard
              title="廣播企劃"
              result="廣播金鐘「企劃編撰獎」入圍肯定"
              image="/images/about-broadcast.jpg"
              description="參與廣播節目企劃與內容製作，累積節目企劃發想、文字撰寫與專案執行經驗。"
            />

            <AbilityCard
              title="攝影修圖"
              result="活動、演唱會與品牌影像拍攝及後期製作"
              image="/images/about-photo.jpg"
              description="累積活動紀錄、演唱會與人像攝影經驗，從現場拍攝到後期修圖，完整完成影像呈現。"
            />

            <AbilityCard
              title="拍攝剪輯"
              result="POP Radio 社群超過 100 支短影音製作"
              image="/images/about-video.jpg"
              description="從企劃發想、拍攝到後期剪輯皆能獨立完成，具備完整的影音製作與社群內容執行能力。"
            />

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

      <section className="px-5 pb-8 pt-1 md:px-8 md:pb-16 md:pt-2 lg:px-12">
        <div className="mx-auto max-w-7xl">

          {/* Mobile */}
          <div className="grid grid-cols-4 border-t border-zinc-200 md:hidden">

            <Highlight
              number="2025"
              title="廣播金鐘獎"
              description="「企劃編撰獎」入圍"
            />

            <Highlight
              number="100+"
              title="POP Radio"
              description="社群短影音製作"
            />

            <Highlight
              number="6K+"
              title="YouTube"
              description="單支影片觀看次數"
            />

            <Highlight
              number="5+"
              title="年實務經驗"
              description="廣播、影像、設計與攝影"
              last
            />

          </div>

          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-4">

            <div className="border-b border-zinc-200 py-5 md:border-b-0 md:border-r md:py-5 md:pr-6">
              <p className="text-2xl font-semibold tracking-tight md:text-4xl">
                2025
              </p>

              <h3 className="mt-1.5 text-xs font-semibold md:mt-3 md:text-sm">
                廣播金鐘獎
              </h3>

              <p className="mt-0.5 text-[10px] leading-5 text-gray-500 md:mt-1 md:text-xs md:leading-6">
                「企劃編撰獎」入圍
              </p>
            </div>

            <div className="border-b border-zinc-200 py-5 md:border-b-0 md:border-r md:px-6 md:py-5">
              <p className="text-2xl font-semibold tracking-tight md:text-4xl">
                100+
              </p>

              <h3 className="mt-1.5 text-xs font-semibold md:mt-3 md:text-sm">
                POP Radio
              </h3>

              <p className="mt-0.5 text-[10px] leading-5 text-gray-500 md:mt-1 md:text-xs md:leading-6">
                社群短影音製作
              </p>
            </div>

            <div className="border-b border-zinc-200 py-5 md:border-b-0 md:border-r md:px-6 md:py-5">
              <p className="text-2xl font-semibold tracking-tight md:text-4xl">
                6K+
              </p>

              <h3 className="mt-1.5 text-xs font-semibold md:mt-3 md:text-sm">
                YouTube
              </h3>

              <p className="mt-0.5 text-[10px] leading-5 text-gray-500 md:mt-1 md:text-xs md:leading-6">
                單支影片觀看次數
              </p>
            </div>

            <div className="py-5 md:py-5 md:pl-6">
              <p className="text-2xl font-semibold tracking-tight md:text-4xl">
                5+
              </p>

              <h3 className="mt-1.5 text-xs font-semibold md:mt-3 md:text-sm">
                年實務經驗
              </h3>

              <p className="mt-0.5 text-[10px] leading-5 text-gray-500 md:mt-1 md:text-xs md:leading-6">
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
   Highlight
========================================================= */

function Highlight({
  number,
  title,
  description,
  last = false,
}: {
  number: string;
  title: string;
  description: string;
  last?: boolean;
}) {
  return (
    <div
      className={`min-w-0 py-3 ${
        !last ? "border-r border-zinc-200 pr-2" : "pl-2"
      }`}
    >
      <p className="text-[17px] font-semibold tracking-tight">
        {number}
      </p>

      <h3 className="mt-1 text-[9px] font-semibold leading-4">
        {title}
      </h3>

      <p className="mt-0.5 text-[7px] leading-3.5 text-gray-500">
        {description}
      </p>
    </div>
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
  mobile = false,
}: {
  title: string;
  result: string;
  image: string;
  description: string;
  mobile?: boolean;
}) {
  return (
    <div
      className={`group border border-[#EAEAEA] bg-white ${
        mobile ? "w-[78vw] max-w-[320px] shrink-0" : ""
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
          sizes="(max-width: 768px) 78vw, 50vw"
        />
      </div>

      {/* Content */}
      <div className="p-4 md:p-7">

        <h3 className="text-sm font-semibold leading-6 text-[#111111] md:text-lg md:leading-relaxed">
          <span>{title}</span>

          <span className="mx-1.5 md:mx-2">/</span>

          <span>{result}</span>
        </h3>

        <p className="mt-2 text-[10px] leading-5 text-gray-500 md:mt-4 md:text-sm md:leading-7">
          {description}
        </p>

      </div>
    </div>
  );
}