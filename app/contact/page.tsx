import Link from "next/link";

export default function ContactPage() {
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
            className="transition-colors duration-300 hover:text-black"
          >
            Awards
          </Link>

          <Link
            href="/contact"
            className="text-black"
          >
            Contact
          </Link>

        </div>

      </nav>


      {/* Contact */}
      <section className="min-h-screen px-6 pb-20 pt-36 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          {/* Header */}
          <div className="border-b border-[#EAEAEA] pb-8">

            <p className="text-xs tracking-[0.3em] text-gray-400">
              CONTACT
            </p>

            <h1 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              Let&apos;s work
              <br />
              together.
            </h1>

          </div>


          {/* Main Content */}
          <div className="grid gap-16 py-16 md:grid-cols-2 md:gap-20 lg:py-24">

            {/* Introduction */}
            <div>

              <p className="max-w-xl text-lg leading-8 text-gray-600 md:text-xl">
                如果你正在尋找一位能夠結合
                <br className="hidden md:block" />
                視覺設計、影像製作與數位內容的創作者，
                <br className="hidden md:block" />
                歡迎與我聊聊你的想法。
              </p>

              <p className="mt-8 max-w-xl leading-7 text-gray-500">
                從視覺設計、社群內容，到影片拍攝與後期製作，
                我喜歡將不同媒體與創意整合，讓想法成為具有溝通力的作品。
              </p>

            </div>


            {/* Contact Information */}
            <div className="md:pt-2">

              <div className="border-t border-[#EAEAEA]">

                {/* Email */}
                <a
                  href="mailto:ybeedesign@gmail.com"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[#EAEAEA]
                    py-6
                    transition-all
                    duration-300
                    hover:px-3
                  "
                >

                  <div>

                    <p className="text-xs tracking-[0.2em] text-gray-400">
                      EMAIL
                    </p>

                    <p className="mt-2 text-lg">
                      ybeedesign@gmail.com
                    </p>

                  </div>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                    ↗
                  </span>

                </a>


                {/* Instagram */}
                <a
                  href="https://www.instagram.com/yangbee_ai/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[#EAEAEA]
                    py-6
                    transition-all
                    duration-300
                    hover:px-3
                  "
                >

                  <div>

                    <p className="text-xs tracking-[0.2em] text-gray-400">
                      INSTAGRAM
                    </p>

                    <p className="mt-2 text-lg">
                      @yangbee_ai
                    </p>

                  </div>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                    ↗
                  </span>

                </a>

              </div>

            </div>

          </div>


          {/* Bottom */}
          <div className="border-t border-[#EAEAEA] pt-8">

            <div className="flex flex-col justify-between gap-4 text-xs tracking-[0.15em] text-gray-400 md:flex-row">

              <p>
                BEEYANG — DIGITAL MEDIA / VISUAL DESIGNER
              </p>

              <p>
                AVAILABLE FOR CREATIVE PROJECTS
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}