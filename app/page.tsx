
"use client";

import Link from "next/link";
import { useState } from "react";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#111111]">

      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-[#FAFAFA]/80 px-6 py-5 backdrop-blur-sm md:px-8 md:py-6">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
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

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center text-xl md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "×" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
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

      {/* Portfolio */}
      <Portfolio />

    </main>
  );
}