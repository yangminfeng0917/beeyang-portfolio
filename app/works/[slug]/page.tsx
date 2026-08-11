
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
      <main className="min-h-screen bg-[#FAFAFA] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold">
            找不到作品
          </h1>

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-black"
          >
            ← 回首頁
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#111111]">

      {/* Back Home */}
      <Link
        href="/"
        className="
          group
          fixed
          left-6
          top-6
          z-50
          flex
          items-center
          gap-2
          text-sm
          text-gray-500
          transition-colors
          duration-300
          hover:text-black
          md:left-12
          lg:left-20
          md:top-8
        "
      >
        <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
          ←
        </span>

        <span>
          Home
        </span>
      </Link>


      {/* Main */}
      <section className="px-6 pb-20 pt-28 md:px-12 lg:px-20">

        <div className="mx-auto max-w-6xl">


          {/* Header */}
          <div className="border-b border-[#EAEAEA] pb-8">

            <p className="text-xs tracking-[0.25em] text-gray-400 uppercase">
              {work.category}
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              {work.title}
            </h1>

            {/* 單一作品才顯示年份 */}
            {work.year && (
              <p className="mt-4 text-sm text-gray-400">
                {work.year}
              </p>
            )}

          </div>


          {/* Project Information */}
          <div className="border-b border-[#EAEAEA] py-10">

            <div className="max-w-3xl">

              {/* Project Overview */}
              <div>

                <p className="text-xs tracking-[0.25em] text-gray-400">
                  PROJECT OVERVIEW
                </p>

                <p className="mt-2 text-xs text-gray-400">
                  作品介紹
                </p>

                <p className="mt-5 leading-8 text-gray-600">
                  {work.description}
                </p>

              </div>


              {/* My Contribution */}
              {work.contribution && (
                <div className="mt-10">

                  <p className="text-xs tracking-[0.25em] text-gray-400">
                    MY CONTRIBUTION
                  </p>

                  <p className="mt-2 text-xs text-gray-400">
                    我的參與
                  </p>

                  <p className="mt-5 leading-8 text-gray-600">
                    {work.contribution}
                  </p>

                </div>
              )}

            </div>

          </div>


          {/* Video */}
          {work.type === "video" && work.youtube && (
            <section className="pt-12">

              <div className="mb-8">

                <p className="text-xs tracking-[0.25em] text-gray-400">
                  VIDEO
                </p>

                <p className="mt-2 text-xs text-gray-400">
                  影片
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


          {/* Gallery */}
          {work.gallery && work.gallery.length > 0 && (
            <section className="pt-12">

              {/* Gallery Header */}
              <div className="mb-8">

                <p className="text-xs tracking-[0.25em] text-gray-400">
                  GALLERY
                </p>

                <p className="mt-2 text-xs text-gray-400">
                  作品展示
                </p>

              </div>


              {/* Gallery */}
              <div className="space-y-14">

                {work.gallery.map((item, index) => (

                  <div key={`${item.image}-${index}`}>

                    {/* Image */}
                    <div className="relative w-full overflow-hidden bg-[#F5F5F5]">

                      <Image
                        src={item.image}
                        alt={item.title || `${work.title} ${index + 1}`}
                        width={1600}
                        height={1200}
                        className="
                          h-auto
                          w-full
                          object-contain
                          transition
                          duration-700
                        "
                      />

                    </div>


                    {/* Image Information */}
                    {(item.title || item.year) && (
                      <div className="mt-4">

                        {item.title && (
                          <p className="text-sm text-gray-600">
                            {item.title}
                          </p>
                        )}

                        {item.year && (
                          <p className="mt-1 text-xs text-gray-400">
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


          {/* Back Home Bottom */}
          <div className="mt-20 border-t border-[#EAEAEA] pt-8">

            <Link
              href="/"
              className="
                group
                inline-flex
                items-center
                gap-3
                text-sm
                text-gray-500
                transition-colors
                duration-300
                hover:text-black
              "
            >

              <span className="text-lg transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>

              <span>
                Back to all works
              </span>

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}