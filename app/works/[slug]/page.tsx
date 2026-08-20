"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

  const [otherWorks, setOtherWorks] = useState<
    typeof portfolio
  >([]);

  const videos = work.videos ?? [];
  const gallery = work.gallery ?? [];

  /* =========================================================
     隨機排列其他作品
     
     每次進入不同作品頁時重新隨機
     排除目前正在看的作品
  ========================================================= */

  useEffect(() => {
    const works = portfolio
      .filter((item) => item.slug !== work.slug)
      .sort(() => Math.random() - 0.5);

    setOtherWorks(works);
  }, [work.slug]);

  /* =========================================================
     判斷影片方向

     Shorts / Facebook Reel
     → 直式 9:16

     一般 YouTube
     → 橫式 16:9
  ========================================================= */

  const isVerticalVideo = (index: number) => {
    const url = videos[index]?.url ?? "";

    // 電台短影音
    if (work.id === 1) {
      return true;
    }

    return (
      url.includes("/shorts/") ||
      url.includes("plugins/video.php") ||
      url.includes("/reel/")
    );
  };

  /* =========================================================
     是否有直式 / 橫式影片
  ========================================================= */

  const verticalVideos = videos.filter(
    (_, index) => isVerticalVideo(index)
  );

  const horizontalVideos = videos.filter(
    (_, index) => !isVerticalVideo(index)
  );

  const hasVerticalVideos =
    verticalVideos.length > 0;

  const hasHorizontalVideos =
    horizontalVideos.length > 0;

  /* =========================================================
     偵測短影音目前滑到哪一支
  ========================================================= */

  useEffect(() => {
    if (!hasVerticalVideos) {
      return;
    }

    const container = videoRef.current;

    if (!container) {
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
  }, [hasVerticalVideos]);

  /* =========================================================
     點擊短影音圓點
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
      ===================================================== */}

      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-6 md:px-10">

        <Link
          href="/"
          className="text-sm font-medium tracking-[0.22em] transition-opacity hover:opacity-50"
        >
          BEEYANG
        </Link>

        <Link
          href="/"
          className="text-[10px] tracking-[0.18em] text-[#888888] transition-opacity hover:opacity-50"
        >
          BACK
        </Link>

      </nav>


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="px-6 pb-24 pt-32 md:px-10 md:pt-40">

        <div className="mx-auto max-w-[1320px]">


          {/* =================================================
              WORK HEADER
          ================================================= */}

          <header className="max-w-[1050px]">

            <div className="mb-6 flex flex-wrap items-center gap-3 text-[10px] tracking-[0.16em] text-[#999999]">

              <span>
                {work.category}
              </span>

              {work.year && (
                <>
                  <span className="text-[#D5D5D5]">
                    /
                  </span>

                  <span>
                    {work.year}
                  </span>
                </>
              )}

            </div>

            <h1 className="text-[32px] font-medium leading-[1.25] tracking-[-0.025em] md:text-[54px]">
              {work.title}
            </h1>

          </header>


          {/* =================================================
              DESCRIPTION + INFORMATION
          ================================================= */}

          <div className="mt-16 grid gap-12 border-t border-[#E5E5E5] pt-10 md:grid-cols-[minmax(0,1fr)_360px] md:gap-20">

            {/* DESCRIPTION */}

            <div className="max-w-[720px]">

              <p className="text-[15px] leading-[2] text-[#333333] md:text-[16px]">
                {work.description}
              </p>

            </div>


            {/* INFORMATION */}

            <div className="grid grid-cols-2 gap-x-8 gap-y-9">

              {work.contribution && (
                <div className="col-span-2">

                  <p className="mb-2 text-[9px] tracking-[0.2em] text-[#999999]">
                    CONTRIBUTION
                  </p>

                  <p className="text-[13px] leading-[1.8] text-[#333333]">
                    {work.contribution}
                  </p>

                </div>
              )}


              {work.role && (
                <div>

                  <p className="mb-2 text-[9px] tracking-[0.2em] text-[#999999]">
                    ROLE
                  </p>

                  <p className="text-[13px] leading-[1.8] text-[#333333]">
                    {work.role}
                  </p>

                </div>
              )}


              {work.tools &&
                work.tools.length > 0 && (
                  <div>

                    <p className="mb-2 text-[9px] tracking-[0.2em] text-[#999999]">
                      TOOLS
                    </p>

                    <p className="text-[13px] leading-[1.8] text-[#333333]">
                      {work.tools.join(" / ")}
                    </p>

                  </div>
                )}


              {/* =================================================
                  AWARD
              ================================================= */}

              {"award" in work &&
                work.award && (
                  <div className="col-span-2">

                    <p className="mb-2 text-[9px] tracking-[0.2em] text-[#999999]">
                      AWARD
                    </p>

                    <p className="text-[13px] leading-[1.8] text-[#333333]">
                      {work.award}
                    </p>

                  </div>
                )}

            </div>

          </div>


          {/* =====================================================
              SHORT VIDEOS
              
              只有直式影片
              左右滑動
              ● ○ ○ ○
          ===================================================== */}

          {hasVerticalVideos && (
            <section className="mt-24">

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

                {verticalVideos.map(
                  (video, index) => (
                    <article
                      key={`${video.url}-${index}`}
                      className="
                        snap-start
                        shrink-0
                        w-[240px]
                        overflow-hidden
                        bg-black
                        md:w-[300px]
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


              {/* =================================================
                  DOTS
              ================================================= */}

              {verticalVideos.length > 1 && (
                <div className="mt-6 flex justify-center">

                  <div className="flex items-center gap-[6px]">

                    {verticalVideos.map(
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
                                  : "h-[5px] w-[5px] bg-[#C8C8C8]"
                              }
                            `}
                          />

                        </button>
                      )
                    )}

                  </div>

                </div>
              )}

            </section>
          )}


          {/* =====================================================
              LONG VIDEOS
              
              橫式影片
              一支一支往下排列
          ===================================================== */}

          {hasHorizontalVideos && (
            <section
              className={
                hasVerticalVideos
                  ? "mt-28"
                  : "mt-24"
              }
            >

              <div className="space-y-12">

                {horizontalVideos.map(
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
                          loading="lazy"
                        />

                      </div>

                    </article>
                  )
                )}

              </div>

            </section>
          )}


          {/* =====================================================
              GALLERY
          ===================================================== */}

          {gallery.length > 0 && (
            <section className="mt-28">

              <div className="space-y-10">

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
                        width={1800}
                        height={1200}
                        className="h-auto w-full"
                        sizes="(max-width: 768px) 100vw, 1320px"
                      />

                    </figure>
                  )
                )}

              </div>

            </section>
          )}


          {/* =====================================================
              OTHER WORKS
              
              隨機排序
          ===================================================== */}

          {otherWorks.length > 0 && (
            <section className="mt-32 border-t border-[#E5E5E5] pt-12">

              <div className="mb-8 flex items-end justify-between">

                <div>

                  <p className="mb-2 text-[9px] tracking-[0.2em] text-[#999999]">
                    MORE WORKS
                  </p>

                  <h2 className="text-[20px] font-medium tracking-[-0.02em]">
                    其他作品
                  </h2>

                </div>

                <Link
                  href="/"
                  className="text-[10px] tracking-[0.16em] text-[#888888] transition-colors hover:text-black"
                >
                  VIEW ALL
                </Link>

              </div>


              {/* =================================================
                  HORIZONTAL RECOMMENDATIONS
              ================================================= */}

              <div
                className="
                  flex
                  gap-5
                  overflow-x-auto
                  pb-4

                  [-ms-overflow-style:none]
                  [scrollbar-width:none]

                  [&::-webkit-scrollbar]:hidden
                "
              >

                {otherWorks.map(
                  (item) => (
                    <Link
                      key={item.slug}
                      href={`/works/${item.slug}`}
                      className="
                        group
                        block
                        w-[240px]
                        shrink-0
                        md:w-[280px]
                      "
                    >

                      {/* COVER */}

                      <div className="relative aspect-[4/3] overflow-hidden bg-[#EEEEEE]">

                        <Image
                          src={item.cover}
                          alt={item.title}
                          fill
                          className="
                            object-cover
                            transition-transform
                            duration-500
                            group-hover:scale-[1.03]
                          "
                          sizes="280px"
                        />

                      </div>


                      {/* TITLE */}

                      <div className="mt-4">

                        <p className="text-[12px] leading-[1.6] text-[#222222]">
                          {item.title}
                        </p>

                        <p className="mt-1 text-[9px] tracking-[0.12em] text-[#999999]">
                          {item.category}
                        </p>

                      </div>

                    </Link>
                  )
                )}

              </div>

            </section>
          )}


          {/* =====================================================
              BACK TO WORKS
          ===================================================== */}

          <div className="mt-20 border-t border-[#E5E5E5] pt-8">

            <Link
              href="/"
              className="inline-flex items-center gap-3 text-[10px] tracking-[0.16em] text-[#777777] transition-colors hover:text-black"
            >

              <span className="text-sm">
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