import Link from "next/link";
import Portfolio from "@/components/Portfolio";


export default function Home() {

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
            className="hover:text-black"
          >
            About
          </Link>



          <Link
            href="/experience"
            className="hover:text-black"
          >
            Experience
          </Link>



          <Link
            href="/awards"
            className="hover:text-black"
          >
            Awards
          </Link>



          <Link
            href="/contact"
            className="hover:text-black"
          >
            Contact
          </Link>


        </div>


      </nav>





      {/* Portfolio */}

      <Portfolio />



    </main>

  );

}