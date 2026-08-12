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
        <div className="relative aspect-[4/3] overflow-hidden bg-[#F8F8F8]">
          <Image
            src={item.cover}
            alt={item.title}
            fill
            unoptimized
            priority={item.id <= 6}
            sizes="(max-width: 768px) 50vw, 33vw"
            className="
              portfolio-image
              object-cover
              transition-transform
              duration-700
              ease-out
            "
          />

          <div
            className="
              absolute inset-0
              bg-black/0
              transition-colors
              duration-500
              group-hover:bg-black/45
            "
          />

          <div
            className="
              absolute inset-0
              flex flex-col
              items-center
              justify-center
              px-5
              text-center
              opacity-0
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          >
            <p className="text-[9px] uppercase tracking-[0.2em] text-white/80">
              {item.category}
            </p>

            <h3 className="mt-2 max-w-[90%] text-base font-medium leading-snug text-white md:text-lg">
              {item.title}
            </h3>

            {item.year && (
              <p className="mt-1 text-[10px] text-white/65">
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