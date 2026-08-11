import Image from "next/image";
import Link from "next/link";
import { PortfolioItem } from "@/data/portfolio";

type Props = {
  item: PortfolioItem;
};

export default function PortfolioCard({ item }: Props) {
  return (
    <Link
      href={`/works/${item.slug}`}
      className="group block border-r border-b border-[#EAEAEA]"
    >
      <article>
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#F8F8F8]">
          <Image
            src={item.cover}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-700 ease-out group-hover:scale-105"
          />

          {/* Dark overlay */}
          <div
            className="
              absolute inset-0
              bg-black/0
              transition duration-500
              group-hover:bg-black/50
            "
          />

          {/* Hover Info */}
          <div
            className="
              absolute inset-0
              flex flex-col
              items-center
              justify-center
              px-6
              text-center
              opacity-0
              transition duration-500
              group-hover:opacity-100
            "
          >
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/80">
              {item.category}
            </p>

            <h3 className="mt-3 max-w-[90%] text-xl font-medium leading-snug text-white md:text-2xl">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-white/70">
              {item.year}
            </p>

            <span className="mt-6 text-[10px] tracking-[0.25em] text-white">
              VIEW PROJECT →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}