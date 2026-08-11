
import Link from "next/link";

export default function AwardsPage() {
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
            className="transition-colors duration-300 hover:text-black"
          >
            Experience
          </Link>

          <Link
            href="/awards"
            className="text-black"
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

        <div className="mx-auto max-w-7xl">

          <p className="text-xs tracking-[0.35em] text-gray-400">
            AWARDS
          </p>

          <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
            獎項與肯定
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500">
            從影像創作、微電影製作到廣播節目企劃，
            累積不同領域的創作與實務經驗，
            也透過作品獲得不同階段的肯定。
          </p>

        </div>

      </section>


      {/* Awards */}
      <section className="px-8 pb-24 md:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="border-t border-zinc-200">

            {/* 2025 */}
            <AwardItem
              year="2025"
              title="第60屆廣播金鐘獎"
              award="企劃編撰獎 入圍"
              organizer="文化部"
              video="https://youtu.be/zkTZ-Ff56DQ?t=920"
            />

            {/* 2020 */}
            <AwardItem
              year="2020"
              title="青春有影大學盃"
              award="百大精選獎"
              organizer="中華民國微電影協會"
            />

            {/* 2019 */}
            <AwardItem
              year="2019"
              title="器官捐贈宣導影片比賽"
              award="佳作"
              organizer="台北榮民總醫院"
            />

            {/* 2018 */}
            <AwardItem
              year="2018"
              title="金傳獎"
              award="最佳剪輯"
              organizer="開南大學資訊傳播學系"
            />

            <AwardItem
              year="2018"
              title="台灣好美觀光微電影"
              award="第三名"
              organizer="交通部觀光局"
            />

            <AwardItem
              year="2018"
              title="桃園市原住民正名紀錄片"
              award="第三名"
              organizer="桃園市原住民族事務局"
            />

            <AwardItem
              year="2018"
              title="祖孫傳情微電影創作比賽"
              award="人氣獎"
              organizer="佳音電台"
            />

          </div>

        </div>

      </section>

    </main>
  );
}


/* Award Item */
function AwardItem({
  year,
  title,
  award,
  organizer,
  video,
}: {
  year: string;
  title: string;
  award: string;
  organizer: string;
  video?: string;
}) {
  return (
    <div
      className="
        group
        grid
        gap-5
        border-b
        border-zinc-200
        py-7
        transition-colors
        duration-300
        hover:bg-white
        md:grid-cols-[100px_1fr_220px]
        md:items-center
        md:gap-8
      "
    >

      {/* Year */}
      <div>

        <p
          className="
            text-xl
            font-medium
            tracking-tight
            text-gray-400
            transition-colors
            duration-300
            group-hover:text-gray-700
            md:text-2xl
          "
        >
          {year}
        </p>

      </div>


      {/* Award */}
      <div>

        <h2 className="text-lg font-semibold tracking-tight md:text-xl">
          {title}
        </h2>

        <p className="mt-1.5 text-sm font-medium text-gray-600">
          {award}
        </p>

      </div>


      {/* Organizer */}
      <div className="md:text-right">

        <p className="text-[10px] tracking-[0.2em] text-gray-400">
          ORGANIZER
        </p>

        <p className="mt-1 text-xs leading-6 text-gray-500">
          {organizer}
        </p>


        {/* Video */}
        {video && (
          <Link
            href={video}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-2
              inline-flex
              items-center
              gap-1.5
              text-xs
              text-gray-400
              transition-colors
              duration-300
              hover:text-black
            "
          >
            <span>
              觀看頒獎影片
            </span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        )}

      </div>

    </div>
  );
}
