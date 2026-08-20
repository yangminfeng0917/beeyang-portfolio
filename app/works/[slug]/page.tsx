"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";

import { portfolio } from "@/data/portfolio";

export default function WorkDetailPage() {
  const params = useParams();

  const slugValue = params?.slug;

  const slug = Array.isArray(slugValue)
    ? slugValue[0]
    : slugValue;

  const work = portfolio.find(
    (item) => item.slug === slug
  );

  if (!work) {
    return null;
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
  const [menuOpen, setMenuOpen] = useState(false);

  const videos = work.videos ?? [];
  const gallery = work.gallery ?? [];

  /*
  =========================================================
  判斷是否為直式影片
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
  判斷個別影片方向
  =========================================================
  */

  const isVertical = (index: number) => {
    if (isShortVideoWork) {
      return true;
    }

    if (videos[index]) {
      return isVerticalVideo(
        videos[index].url
      );
    }

    return false;
  };

  /*
  =========================================================
  判斷是否有直式影片
  =========================================================
  */

  const hasVerticalVideos = videos.some(
    (_, index) => isVertical(index)
  );

  /*
  =========================================================
  短影音滑動偵測
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
  點擊影片圓點
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
  MORE WORKS
  固定排序，不使用 Math.random()

  每個作品依照自己的 slug
  產生不同但穩定的推薦順序。

  這樣可以避免：
  Hydration failed
  =========================================================
  */

  const otherWorks = [...portfolio]
    .filter(
      (item) => item.slug !== work.slug
    )
    .sort((a, b) => {
      const getScore = (slug: string) => {
        let score = 0;

        for (let i = 0; i < slug.length; i++) {
          score =
            (score * 31 +
              slug.charCodeAt(i)) %
            100000;
        }

        return score;
      };

      return (
        getScore(`${work.slug}-${a.slug}`) -
        getScore(`${work.slug}-${b.slug}`)
      );
    })
    .slice(0, 4);

  /*
  =========================================================
  關閉手機選單
  =========================================================
  */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#111111]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="fixed top-0 z-50 w-full bg-[#FAFAFA]/80 px-6 py-5 backdrop-blur-sm md:px-8 md:py-6">

        <div className="flex items-center justify-between">

          {/* LOGO */}

          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-semibold tracking-[0.2em]"
          >
            BEEYANG
          </Link>

          {/* DESKTOP MENU */}

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

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="flex h-10 w-10 items-center justify-center text-xl md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "×" : "☰"}
          </button>

        </div>

        {/* MOBILE MENU */}

        {menuOpen && (
          <div className="border-t border-[#EAEAEA] bg-[#FAFAFA] md:hidden">

            <div className="flex flex-col py-5">

              <Link
                href="/about"
                onClick={closeMenu}
                className="border-b border-[#EAEAEA] py-4 text-sm text-gray-600 transition-colors hover:text-black"
              >
                About
              </Link>

              <Link
                href="/experience"
                onClick={closeMenu}
                className="border-b border-[#EAEAEA] py-4 text-sm text-gray-600 transition-colors hover:text-black"
              >
                Experience
              </Link>

              <Link
                href="/awards"
                onClick={closeMenu}
                className="border-b border-[#EAEAEA] py-4 text-sm text-gray-600 transition-colors hover:text-black"
              >
                Awards
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="py-4 text-sm text-gray-600 transition-colors hover:text-black"
              >
                Contact
              </Link>

            </div>

          </div>
        )}

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

                {/* MY CONTRIBUTION */}

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

              {/* SHORT VIDEOS */}

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
                      pb-1
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
                    <div className="mt-2 flex justify-center">

                      <div className="flex items-center gap-[3px]">

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
                              className="flex h-3 w-3 items-center justify-center"
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
                                      ? "h-[6px] w-[6px] bg-black"
                                      : "h-[4px] w-[4px] bg-[#C9C9C9]"
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

                /* LONG VIDEOS */

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
              MORE WORKS
          ================================================= */}

          <section className="pt-2">

            <div className="mb-6">

              <p className="mb-2 text-[10px] tracking-[0.18em] text-[#999999]">
                MORE WORKS
              </p>

              {/* MORE WORKS 下方灰線 */}

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
              BACK TO WORKS
          ================================================= */}

          <div className="mt-12 border-t border-[#E5E5E5] pt-6">

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
