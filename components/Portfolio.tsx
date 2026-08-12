"use client";

import { useState } from "react";
import { portfolio } from "../data/portfolio";
import PortfolioCard from "./PortfolioCard";

const categories = [
  "All",
  "Visual",
  "Video",
  "Photography",
  "Project",
  "Illustration",
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPortfolio =
    activeCategory === "All"
      ? portfolio
      : portfolio.filter((item) => {
          if (activeCategory === "Visual") {
            return item.category === "Visual Design";
          }

          if (activeCategory === "Video") {
            return item.category === "Video Production";
          }

          if (activeCategory === "Photography") {
            return item.category === "Photography";
          }

          if (activeCategory === "Project") {
            return item.category === "Project Planning";
          }

          if (activeCategory === "Illustration") {
            return item.category === "Illustration";
          }

          return true;
        });

  return (
    <section className="pt-28 pb-16">
      {/* Filter */}
      <div className="mb-8 flex flex-wrap gap-5 border-b border-[#EAEAEA] px-5 pb-4 md:gap-6 md:px-8">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`
              relative
              pb-1.5
              text-[11px]
              tracking-[0.1em]
              ${
                activeCategory === category
                  ? "text-black"
                  : "text-gray-400 hover:text-black"
              }
            `}
          >
            {category.toUpperCase()}

            <span
              className={`
                absolute
                bottom-0
                left-0
                h-[1px]
                bg-black
                ${
                  activeCategory === category
                    ? "w-full"
                    : "w-0"
                }
              `}
            />
          </button>
        ))}
      </div>

      {/* Works Grid */}
      <div
        className="
          grid
          grid-cols-2
          lg:grid-cols-3
          gap-0
          border-l
          border-t
          border-[#EAEAEA]
        "
      >
        {filteredPortfolio.map((item) => (
          <div key={item.id}>
            <PortfolioCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}