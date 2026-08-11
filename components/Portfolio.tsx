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
    <section className="px-6 pt-32 pb-20 md:px-12 lg:px-20">

      {/* Filter */}
      <div className="mb-12 flex flex-wrap gap-8 border-b border-[#EAEAEA] pb-6">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`
              relative
              pb-2
              text-sm
              tracking-[0.15em]
              transition-colors
              duration-300
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
                transition-all
                duration-300
                ${
                  activeCategory === category
                    ? "w-full opacity-100"
                    : "w-0 opacity-0"
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
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-0
          border-l
          border-t
          border-[#EAEAEA]
          portfolio-grid
        "
      >
        {filteredPortfolio.map((item, index) => (
          <div
            key={item.id}
            className="portfolio-item"
            style={{
              animationDelay: `${Math.min(index * 60, 600)}ms`,
            }}
          >
            <PortfolioCard item={item} />
          </div>
        ))}
      </div>

    </section>
  );
}