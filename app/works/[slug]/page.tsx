"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useParams, notFound } from "next/navigation";

import { portfolio } from "@/data/portfolio";

export default function WorkDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const work = portfolio.find(
    (item) => item.slug === slug
  );

  if (!work) {
    notFound();
  }

  return <WorkDetail work={work} />;
}

function WorkDetail({
  work,
}: {
  work: (typeof portfolio)[number];
}) {
  const videoRef = useRef<HTMLDivElement>(null);

  const [activeVideo, setActiveVideo] = useState(0);

  const videos = work.videos ?? [];
  const gallery = work.gallery ?? [];

  /*
  =========================================================
  判斷是否為短影音
  =========================================================
  */

  const isVerticalVideo = (url: string) => {
    return (
      url.includes("/shorts/") ||
      url.includes("plugins/video.php") ||
      url.includes("/reel/")
    );
  };

  /*
  =========================================================
  電台短影音整組使用直式
  =========================================================
  */

  const isShortVideoWork =
    work.slug === "radio-short-video";

  /*
  =========================================================
  其他作品的影片方向
  =========================================================
  */

  const isVertical = (index: number) => {
    if (isShortVideoWork) {
      return true;
    }

    if (videos[index]) {
      return isVerticalVideo(videos[index].url);
    }

    return false;
  };

  /*
  =========================================================
  判斷是否為「短影音作品」
  =========================================================
  */

  const hasVerticalVideos = videos.some(
    (_, index) => isVertical(index)
  );

  /*
  =========================================================
  短影音左右滑動
  =========================================================
  */

  useEffect(() => {
    const container = videoRef.current;

    if (!container || videos.length <= 1) {
      return;
    }

    const handleScroll = () => {
      const items = Array.from(
        container.children
      ) as HTMLElement[];

      if (!items.length) {
        return;
      }

      const currentScroll =
        container.scrollLeft;

      let closestIndex = 0;
      let closestDistance = Infinity;

      items.forEach((item, index) => {
        const distance = Math.abs(
          item.offsetLeft -
            container.offsetLeft -
            currentScroll
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveVideo(closestIndex);
    };

    container.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {
      container.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, [videos.length]);

  /*
  =========================================================
  點擊 ● ○ ○ ○
  =========================================================
  */

  const scrollToVideo = (index: number) => {
    const container = videoRef.current;

    if (!container) {
      return;
    }

    const target = container.children[
      index
    ] as HTMLElement;

    if (!target) {
      return;
    }

    container.scrollTo({
      left:
        target.offsetLeft -
        container.offsetLeft,
      behavior: "smooth",
    });

    setActiveVideo(index);
  };

  /*
  =========================================================
  其他作品
  隨機排序
  =========================================================
  */

  const otherWorks = [...portfolio]
    .filter(
      (item) => item.slug !== work.slug
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#111111]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="fixed top-0 z-50 w-full bg-[#FAFAFA]/80 px-6 py-5 backdrop-blur-sm md:px-8 md:py-6">

        <div className="flex items-center justify-between">

          <Link
            href="/"
            className="text-xl font-semibold tracking-[0.2em]"
          >
            BEEYANG
          </Link>

          <div className="hidden gap-8 text-sm text-gray-500 md:flex">

            <Link
              href="/about"
              className="transition-colors hover:text-black"
            >
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

          <Link
            href="/"
            className="text-xs tracking-[0.14em] text-[#777777] transition-colors hover:text-black md:hidden"
          >
            BACK
          </Link>

        </div>

      </nav>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="px-6 pb-20 pt-28 md:px-8 md:pt-32">

        <div className="mx-auto max-w-[1400px]">

          {/* =================================================
              HEADER
          ================================================= */}

          <header className="mb-10">

            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs tracking-[0.12em] text-[#888888]">

              <span>
                {work.category}
              </span>

              {work.year && (
                <>
                  <span className="text-[#CCCCCC]">
                    /
                  </span>

                  <span>
                    {work.year}
                  </span>
                </>
              )}

            </div>

            <h1 className="max-w-[1000px] text-3xl font-medium leading-[1.25] tracking-[-0.02em] md:text-5xl">
              {work.title}
            </h1>

          </header>

          {/* =================================================
              PROJECT OVERVIEW
          ================================================= */}

          <section className="mb-12">

            <div className="mb-6">

              <p className="mb-2 text-[10px] tracking-[0.18em] text-[#999999]">
                PROJECT OVERVIEW
              </p>

              <div className="h-px w-full bg-[#E5E5E5]" />

            </div>

            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_280px] md:gap-12">

              {/* DESCRIPTION */}

              <div className="max-w-[820px]">

                <p className="text-[15px] leading-[1.9] text-[#333333] md:text-[16px]">
                  {work.description}
                </p>

              </div>

              {/* INFORMATION */}

              <div className="space-y-5">

                {/* CONTRIBUTION */}

                {work.contribution && (
                  <div>

                    <p className="mb-1.5 text-[10px] tracking-[0.18em] text-[#999999]">
                      MY CONTRIBUTION
                    </p>

                    <p className="text-sm leading-[1.7] text-[#333333]">
                      {work.contribution}
                    </p>

                  </div>
                )}

                {/* AWARD */}

                {work.award && (
                  <div>

                    <p className="mb-1.5 text-[10px] tracking-[0.18em] text-[#999999]">
                      AWARD
                    </p>

                    <p className="text-sm leading-[1.7] text-[#333333]">
                      {work.award}
                    </p>

                  </div>
                )}

              </div>

            </div>

          </section>

          {/* =================================================
              LINKS
          ================================================= */}

          {work.links &&
            work.links.length > 0 && (
              <section className="mb-10">

                <div className="flex flex-wrap gap-3">

                  {work.links.map(
                    (link, index) => (
                      <a
                        key={`${link.url}-${index}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-[#DCDCDC] px-5 py-2.5 text-xs tracking-[0.08em] text-[#444444] transition-colors hover:border-black hover:text-black"
                      >
                        {link.title ||
                          "View Project"}
                        <span className="ml-2">
                          ↗
                        </span>
                      </a>
                    )
                  )}

                </div>

              </section>
            )}

          {/* =================================================
              VIDEOS
          ================================================= */}

          {videos.length > 0 && (
            <section className="mb-14">

              {/* -------------------------------------------------
                  短影音
              ------------------------------------------------- */}

              {hasVerticalVideos ? (
                <>
                  <div
                    ref={videoRef}
                    className="
                      flex
                      snap-x
                      snap-mandatory
                      gap-5
                      overflow-x-auto
                      scroll-smooth
                      pb-2

                      [-ms-overflow-style:none]
                      [scrollbar-width:none]

                      [&::-webkit-scrollbar]:hidden
                    "
                  >

                    {videos.map(
                      (video, index) => (
                        <article
                          key={`${video.url}-${index}`}
                          className="
                            w-[220px]
                            shrink-0
                            snap-start
                            overflow-hidden
                            bg-black
                            sm:w-[250px]
                            md:w-[280px]
                          "
                        >

                          <div className="relative aspect-[9/16] w-full bg-black">

                            <iframe
                              src={video.url}
                              title={
                                video.title ||
                                `${work.title} ${
                                  index + 1
                                }`
                              }
                              className="absolute inset-0 h-full w-full border-0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              loading={
                                index === 0
                                  ? "eager"
                                  : "lazy"
                              }
                            />

                          </div>

                        </article>
                      )
                    )}

                  </div>

                  {/* DOTS */}

                  {videos.length > 1 && (
                    <div className="mt-5 flex justify-center">

                      <div className="flex items-center gap-[7px]">

                        {videos.map(
                          (_, index) => (
                            <button
                              key={index}
                              type="button"
                              aria-label={`影片 ${
                                index + 1
                              }`}
                              onClick={() =>
                                scrollToVideo(
                                  index
                                )
                              }
                              className="flex h-4 w-4 items-center justify-center"
                            >

                              <span
                                className={`
                                  block
                                  rounded-full
                                  transition-all
                                  duration-300
                                  ${
                                    activeVideo ===
                                    index
                                      ? "h-[7px] w-[7px] bg-black"
                                      : "h-[5px] w-[5px] bg-[#C9C9C9]"
                                  }
                                `}
                              />

                            </button>
                          )
                        )}

                      </div>

                    </div>
                  )}
                </>
              ) : (

                /* -------------------------------------------------
                   長影音：一支一支往下
                ------------------------------------------------- */

                <div className="space-y-8">

                  {videos.map(
                    (video, index) => (
                      <article
                        key={`${video.url}-${index}`}
                        className="w-full overflow-hidden bg-black"
                      >

                        <div className="relative aspect-video w-full">

                          <iframe
                            src={video.url}
                            title={
                              video.title ||
                              `${work.title} ${
                                index + 1
                              }`
                            }
                            className="absolute inset-0 h-full w-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            loading={
                              index === 0
                                ? "eager"
                                : "lazy"
                            }
                          />

                        </div>

                      </article>
                    )
                  )}

                </div>

              )}

            </section>
          )}

          {/* =================================================
              GALLERY
          ================================================= */}

          {gallery.length > 0 && (
            <section className="mb-16">

              <div className="mb-6">

                <p className="mb-2 text-[10px] tracking-[0.18em] text-[#999999]">
                  GALLERY
                </p>

                <div className="h-px w-full bg-[#E5E5E5]" />

              </div>

              <div className="space-y-6">

                {gallery.map(
                  (item, index) => (
                    <figure
                      key={`${item.image}-${index}`}
                      className="overflow-hidden bg-white"
                    >

                      <img
                        src={item.image}
                        alt={
                          item.title ||
                          `${work.title} ${
                            index + 1
                          }`
                        }
                        className="h-auto w-full"
                      />

                    </figure>
                  )
                )}

              </div>

            </section>
          )}

          {/* =================================================
              OTHER WORKS
          ================================================= */}

          <section className="border-t border-[#E5E5E5] pt-10">

            <div className="mb-6">

              <p className="mb-2 text-[10px] tracking-[0.18em] text-[#999999]">
                MORE WORKS
              </p>

              <div className="h-px w-full bg-[#E5E5E5]" />

            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">

              {otherWorks.map(
                (item) => (
                  <Link
                    key={item.slug}
                    href={`/works/${item.slug}`}
                    className="group block"
                  >

                    <div className="overflow-hidden bg-[#EEEEEE]">

                      <img
                        src={item.cover}
                        alt={item.title}
                        className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />

                    </div>

                    <div className="pt-3">

                      <p className="text-xs leading-[1.5] text-[#333333] transition-colors group-hover:text-black">
                        {item.title}
                      </p>

                      <p className="mt-1 text-[10px] tracking-[0.08em] text-[#999999]">
                        {item.category}
                      </p>

                    </div>

                  </Link>
                )
              )}

            </div>

          </section>

          {/* =================================================
              BACK
          ================================================= */}

          <div className="mt-12 border-t border-[#E5E5E5] pt-6">

            <Link
              href="/"
              className="inline-flex items-center gap-3 text-xs tracking-[0.14em] text-[#666666] transition-colors hover:text-black"
            >

              <span>←</span>

              <span>
                BACK TO WORKS
              </span>

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}