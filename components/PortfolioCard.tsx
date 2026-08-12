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
            priority={false}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
          />

          {/* Dark overlay */}
          <div
            className="
              absolute inset-0
              bg-black/0
              transition-colors duration-300
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
              px-4
              text-center
              opacity-0
              transition-opacity duration-300
              group-hover:opacity-100
            "
          >
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/80">
              {item.category}
            </p>

            <h3 className="mt-2 max-w-[90%] text-base font-medium leading-snug text-white md:text-xl">
              {item.title}
            </h3>

            {item.year && (
              <p className="mt-1.5 text-xs text-white/70">
                {item.year}
              </p>
            )}

            <span className="mt-4 text-[9px] tracking-[0.2em] text-white">
              VIEW PROJECT →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}