import VideoCarousel from "@/components/VideoCarousel";
import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";

export default async function WorkPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const work = portfolio.find((item) => item.slug === slug);

  if (!work) {
    return (
      <main className="min-h-screen bg-[#FAFAFA] px-6 py-16 text-[#111111] md:px-12">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-2xl font-semibold md:text-3xl">
            找不到作品
          </h1>

          <Link
            href="/"
            className="mt-6 inline-flex items-center text-sm text-gray-500 transition-colors hover:text-black"
          >
            回首頁
          </Link>
        </div>
      </main>
    );
  }

  /*
   * Recommended Works
   * 優先推薦同分類作品，不足再補其他作品
   */

  const sameCategory = portfolio.filter(
    (item) =>
      item.slug !== work.slug &&
      item.category === work.category
  );

  const otherWorks = portfolio.filter(
    (item) =>
      item.slug !== work.slug &&
      item.category !== work.category
  );

  const recommendedWorks = [
    ...sameCategory,
    ...otherWorks,
  ].slice(0, 6);

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

          {/* Mobile Menu */}

          <details className="relative md:hidden">

            <summary
              className="
                flex
                h-9
                w-9
                cursor-pointer
                list-none
                items-center
                justify-center
                text-xl
                [&::-webkit-details-marker]:hidden
              "
            >
              ☰
            </summary>

            <div className="absolute right-0 top-12 w-48 border border-[#EAEAEA] bg-[#FAFAFA] p-2 shadow-sm">

              <Link
                href="/about"
                className="block border-b border-[#EAEAEA] px-3 py-3 text-sm text-gray-600 hover:text-black"
              >
                About
              </Link>

              <Link
                href="/experience"
                className="block border-b border-[#EAEAEA] px-3 py-3 text-sm text-gray-600 hover:text-black"
              >
                Experience
              </Link>

              <Link
                href="/awards"
                className="block border-b border-[#EAEAEA] px-3 py-3 text-sm text-gray-600 hover:text-black"
              >
                Awards
              </Link>

              <Link
                href="/contact"
                className="block px-3 py-3 text-sm text-gray-600 hover:text-black"
              >
                Contact
              </Link>

            </div>

          </details>

        </div>

      </nav>

      {/* =========================================================
          Main
      ========================================================= */}

      <section className="px-5 pb-14 pt-24 md:px-10 md:pb-18 md:pt-28 lg:px-16">

        <div className="mx-auto max-w-6xl">

          {/* =====================================================
              Header
          ===================================================== */}

          <div className="border-b border-[#EAEAEA] pb-5 md:pb-7">

            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 md:text-xs md:tracking-[0.23em]">
              {work.category}
            </p>

            <h1 className="mt-2.5 max-w-4xl text-3xl font-semibold leading-tight tracking-tight md:mt-3 md:text-4xl lg:text-5xl">
              {work.title}
            </h1>

            {work.year && (
              <p className="mt-2 text-xs text-gray-400 md:mt-2.5 md:text-sm">
                {work.year}
              </p>
            )}

          </div>

          {/* =====================================================
              Project Information
          ===================================================== */}

          <div className="border-b border-[#EAEAEA] py-6 md:py-8">

            <div className="max-w-3xl">

              {/* Project Overview */}

              <div>

                <p className="text-[10px] leading-4 tracking-[0.18em] text-gray-400 md:text-xs md:leading-5 md:tracking-[0.22em]">
                  PROJECT OVERVIEW{" "}
                  <span className="tracking-normal">
                    ｜作品介紹
                  </span>
                </p>

                <p className="mt-2 text-sm leading-6 text-gray-600 md:mt-2.5 md:leading-7">
                  {work.description}
                </p>

              </div>

              {/* My Contribution */}

              {work.contribution && (
                <div className="mt-6 md:mt-7">

                  <p className="text-[10px] leading-4 tracking-[0.18em] text-gray-400 md:text-xs md:leading-5 md:tracking-[0.22em]">
                    MY CONTRIBUTION{" "}
                    <span className="tracking-normal">
                      ｜我的參與
                    </span>
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-600 md:mt-2.5 md:leading-7">
                    {work.contribution}
                  </p>

                </div>
              )}

            </div>

          </div>

 {/* =====================================================
    Videos
    YouTube + Facebook
    9:16 + Horizontal Scroll + Pagination Dots
===================================================== */}

{work.videos && work.videos.length > 0 && (
  <section className="pt-7 md:pt-9">

    <div className="mb-4 md:mb-5">
      <p className="text-[10px] leading-4 tracking-[0.2em] text-gray-400 md:text-xs md:leading-5 md:tracking-[0.23em]">
        VIDEO{" "}
        <span className="tracking-normal">
          ｜影片
        </span>
      </p>
    </div>

    <VideoCarousel
      videos={work.videos}
      workTitle={work.title}
    />

  </section>
)}

          {/* =====================================================
              Regular Video
              16:9
          ===================================================== */}

          {work.type === "video" &&
            work.youtube &&
            !work.videos?.length && (
              <section className="pt-7 md:pt-9">

                <div className="mb-4 md:mb-5">

                  <p className="text-[10px] leading-4 tracking-[0.2em] text-gray-400 md:text-xs md:leading-5 md:tracking-[0.23em]">
                    VIDEO{" "}
                    <span className="tracking-normal">
                      ｜影片
                    </span>
                  </p>

                </div>

                <div className="aspect-video overflow-hidden bg-black">

                  <iframe
                    src={work.youtube}
                    title={work.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />

                </div>

              </section>
            )}

          {/* =====================================================
              Gallery
          ===================================================== */}

          {work.gallery && work.gallery.length > 0 && (
            <section className="pt-7 md:pt-9">

              <div className="mb-4 md:mb-5">

                <p className="text-[10px] leading-4 tracking-[0.2em] text-gray-400 md:text-xs md:leading-5 md:tracking-[0.23em]">
                  GALLERY{" "}
                  <span className="tracking-normal">
                    ｜作品展示
                  </span>
                </p>

              </div>

              <div className="space-y-7 md:space-y-9">

                {work.gallery.map((item, index) => (

                  <div key={`${item.image}-${index}`}>

                    <div className="relative w-full overflow-hidden bg-[#F5F5F5]">

                      <Image
                        src={item.image}
                        alt={
                          item.title ||
                          `${work.title} ${index + 1}`
                        }
                        width={1600}
                        height={1200}
                        className="h-auto w-full object-contain"
                      />

                    </div>

                    {(item.title || item.year) && (
                      <div className="mt-2.5">

                        {item.title && (
                          <p className="text-xs leading-5 text-gray-600 md:text-sm md:leading-6">
                            {item.title}
                          </p>
                        )}

                        {item.year && (
                          <p className="mt-0.5 text-[10px] leading-4 text-gray-400 md:text-xs md:leading-5">
                            {item.year}
                          </p>
                        )}

                      </div>
                    )}

                  </div>

                ))}

              </div>

            </section>
          )}

          {/* =====================================================
              Back to All Works
          ===================================================== */}

          <div className="mt-9 border-t border-[#EAEAEA] pt-5 md:mt-11 md:pt-6">

            <Link
              href="/"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-xs
                text-gray-500
                transition-colors
                duration-300
                hover:text-black
                md:text-sm
              "
            >

              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>

              <span>
                Back to all works
              </span>

            </Link>

          </div>

          {/* =====================================================
              Explore More
          ===================================================== */}

          {recommendedWorks.length > 0 && (
            <section className="mt-10 md:mt-14">

              <div className="mb-4 md:mb-5">

                <p className="text-[10px] leading-4 tracking-[0.2em] text-gray-400 md:text-xs md:leading-5 md:tracking-[0.23em]">
                  EXPLORE MORE
                </p>

              </div>

              {/* Horizontal Scroll */}

              <div
                className="
                  -mx-5
                  flex
                  snap-x
                  snap-mandatory
                  gap-3
                  overflow-x-auto
                  px-5
                  pb-3
                  md:-mx-10
                  md:gap-4
                  md:px-10
                  lg:-mx-16
                  lg:px-16
                  [scrollbar-width:none]
                  [&::-webkit-scrollbar]:hidden
                "
              >

                {recommendedWorks.map((item) => (

                  <Link
                    key={item.slug}
                    href={`/works/${item.slug}`}
                    className="
                      group
                      w-[72vw]
                      shrink-0
                      snap-start
                      md:w-[320px]
                      lg:w-[360px]
                    "
                  >

                    <div className="relative aspect-[4/3] overflow-hidden bg-[#F0F0F0]">

                      <Image
                        src={item.cover}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 72vw, 360px"
                        className="
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-[1.03]
                        "
                      />

                    </div>

                    <div className="mt-2.5">

                      <p className="text-[9px] uppercase leading-4 tracking-[0.16em] text-gray-400 md:text-[10px]">
                        {item.category}
                      </p>

                      <h3 className="mt-0.5 text-sm font-medium leading-5 md:text-base md:leading-6">
                        {item.title}
                      </h3>

                      {item.year && (
                        <p className="mt-0.5 text-[10px] leading-4 text-gray-400 md:text-xs md:leading-5">
                          {item.year}
                        </p>
                      )}

                    </div>

                  </Link>

                ))}

              </div>

            </section>
          )}

        </div>

      </section>

    </main>
  );
}