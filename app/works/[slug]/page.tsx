"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";

import { portfolio } from "@/data/portfolio";

export default function WorkDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const work = portfolio.find((item) => item.slug === slug);

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
  const [recommendedWorks, setRecommendedWorks] = useState<
    typeof portfolio
  >([]);

  const videos = work.videos ?? [];
  const gallery = work.gallery ?? [];

  /* =========================================================
     隨機推薦作品

     排除目前作品
     並且每次進入作品頁時重新隨機排序
  ========================================================= */

  useEffect(() => {
    const otherWorks = portfolio.filter(
      (item) => item.slug !== work.slug
    );

    const shuffled = [...otherWorks].sort(
      () => Math.random() - 0.5
    );

    setRecommendedWorks(shuffled.slice(0, 4));
  }, [work.slug]);

  /* =========================================================
     判斷影片方向

     電台短影音
     → 直式 9:16

     Facebook Reel
     → 直式

     Instagram Reel
     → 直式

     其他 YouTube
     → 橫式 16:9
  ========================================================= */

  const isVerticalVideo = (url: string) => {
    return (
      url.includes("/shorts/") ||
      url.includes("plugins/video.php") ||
      url.includes("/reel/")
    );
  };

  const isWorkShortVideo = (index: number) => {
    if (work.id === 1) {
      return true;
    }

    if (videos[index]) {
      return isVerticalVideo(videos[index].url);
    }

    return false;
  };

  /* =========================================================
     偵測目前影片
  ========================================================= */

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

      const currentScroll = container.scrollLeft;

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

  /* =========================================================
     點擊 ● ○ ○ ○
  ========================================================= */

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

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#111111]">

      {/* =====================================================
          NAVBAR

          與首頁完全一致
      ===================================================== */}

      <nav className="fixed top-0 z-50 w-full bg-[#FAFAFA]/80 px-6 py-5 backdrop-blur-sm md:px-8 md:py-6">

        <div className="flex items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="text-xl font-semibold tracking-[0.2em]"
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

        </div>

      </nav>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="px-6 pb-24 pt-32 md:px-8 md:pt-36">

        <div className="mx-auto max-w-[1400px]">

          {/* =================================================
              WORK HEADER
          ================================================= */}

          <header className="mb-16">

            <div className="mb-5 flex flex-wrap items-center gap-3 text-xs tracking-[0.12em] text-[#888888]">

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
              DESCRIPTION + INFORMATION
          ================================================= */}

          <div className="mb-20 grid gap-12 md:grid-cols-[minmax(0,1fr)_300px]">

            {/* Description */}

            <div className="max-w-[820px]">

              <p className="text-[15px] leading-[2] text-[#333333] md:text-[16px]">
                {work.description}
              </p>

            </div>

            {/* Information */}

            <div className="space-y-8">

              {work.contribution && (
                <div>

                  <p className="mb-2 text-[10px] tracking-[0.18em] text-[#999999]">
                    MY CONTRIBUTION
                  </p>

                  <p className="text-sm leading-[1.8] text-[#333333]">
                    {work.contribution}
                  </p>

                </div>
              )}

              {work.role && (
                <div>

                  <p className="mb-2 text-[10px] tracking-[0.18em] text-[#999999]">
                    ROLE
                  </p>

                  <p className="text-sm leading-[1.8] text-[#333333]">
                    {work.role}
                  </p>

                </div>
              )}

              {work.tools &&
                work.tools.length > 0 && (
                  <div>

                    <p className="mb-2 text-[10px] tracking-[0.18em] text-[#999999]">
                      TOOLS
                    </p>

                    <p className="text-sm leading-[1.8] text-[#333333]">
                      {work.tools.join(" / ")}
                    </p>

                  </div>
                )}

            </div>

          </div>

          {/* =================================================
              VIDEOS

              短影音：
              橫向滑動 / 9:16

              長影音：
              上下排列 / 16:9
          ================================================= */}

          {videos.length > 0 && (
            <section className="mb-24">

              {videos.some((_, index) =>
                isWorkShortVideo(index)
              ) ? (
                <>
                  {/* Short Video Slider */}

                  <div
                    ref={videoRef}
                    className="
                      flex
                      snap-x
                      snap-mandatory
                      gap-6
                      overflow-x-auto
                      scroll-smooth
                      pb-3

                      [-ms-overflow-style:none]
                      [scrollbar-width:none]

                      [&::-webkit-scrollbar]:hidden
                    "
                  >

                    {videos.map(
                      (video, index) => {

                        const vertical =
                          isWorkShortVideo(
                            index
                          );

                        return (
                          <article
                            key={`${video.url}-${index}`}
                            className={`
                              snap-start
                              shrink-0
                              overflow-hidden
                              bg-black
                              ${
                                vertical
                                  ? "w-[267px] md:w-[320px]"
                                  : "w-[calc(100vw-48px)] max-w-[900px] md:w-[800px]"
                              }
                            `}
                          >

                            <div
                              className={`
                                relative
                                w-full
                                bg-black
                                ${
                                  vertical
                                    ? "aspect-[9/16]"
                                    : "aspect-video"
                                }
                              `}
                            >

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
                        );
                      }
                    )}

                  </div>

                  {/* Slider Dots */}

                  {videos.length > 1 && (
                    <div className="mt-7 flex justify-center">

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

                /* =================================================
                   Long Videos
                   全部上下排列
                ================================================= */

                <div className="space-y-12">

                  {videos.map(
                    (video, index) => (

                      <article
                        key={`${video.url}-${index}`}
                        className="mx-auto w-full max-w-[1000px] overflow-hidden bg-black"
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
            <section className="mb-24">

              <div className="mb-8">

                <p className="mb-2 text-[10px] tracking-[0.18em] text-[#999999]">
                  GALLERY
                </p>

              </div>

              <div className="space-y-8">

                {gallery.map(
                  (item, index) => (

                    <figure
                      key={`${item.image}-${index}`}
                      className="overflow-hidden bg-white"
                    >

                      <Image
                        src={item.image}
                        alt={
                          item.title ||
                          `${work.title} ${
                            index + 1
                          }`
                        }
                        width={1600}
                        height={1000}
                        className="h-auto w-full"
                      />

                    </figure>

                  )
                )}

              </div>

            </section>
          )}

          {/* =================================================
              AWARD
          ================================================= */}

          {work.award && (
            <section className="mb-24">

              <div className="border-t border-[#E5E5E5] pt-10">

                <p className="mb-6 text-[10px] tracking-[0.18em] text-[#999999]">
                  AWARD
                </p>

                <div className="max-w-[900px]">

                  <p className="text-2xl font-medium leading-[1.5] md:text-3xl">
                    {work.award}
                  </p>

                </div>

              </div>

            </section>
          )}

          {/* =================================================
              OTHER WORKS
              隨機推薦
          ================================================= */}

          {recommendedWorks.length > 0 && (
            <section className="mb-24">

              <div className="mb-8 flex items-end justify-between">

                <div>

                  <p className="mb-2 text-[10px] tracking-[0.18em] text-[#999999]">
                    MORE WORKS
                  </p>

                  <h2 className="text-xl font-medium">
                    其他作品
                  </h2>

                </div>

                <Link
                  href="/"
                  className="text-xs tracking-[0.12em] text-[#777777] transition-colors hover:text-black"
                >
                  VIEW ALL
                </Link>

              </div>

              <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">

                {recommendedWorks.map(
                  (item) => (

                    <Link
                      key={item.slug}
                      href={`/works/${item.slug}`}
                      className="group block"
                    >

                      <div className="aspect-[4/3] overflow-hidden bg-[#EEEEEE]">

                        <Image
                          src={item.cover}
                          alt={item.title}
                          width={1200}
                          height={900}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />

                      </div>

                      <div className="pt-3">

                        <p className="text-sm leading-[1.5]">
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
          )}

          {/* =================================================
              BACK TO WORKS
          ================================================= */}

          <div className="border-t border-[#E5E5E5] pt-8">

            <Link
              href="/"
              className="inline-flex items-center gap-3 text-xs tracking-[0.14em] text-[#666666] transition-colors hover:text-black"
            >

              <span>
                ←
              </span>

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