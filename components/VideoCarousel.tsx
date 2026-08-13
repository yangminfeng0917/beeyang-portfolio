"use client";

import { useEffect, useRef, useState } from "react";

type VideoItem = {
  url: string;
  title?: string;
};

type VideoCarouselProps = {
  videos: VideoItem[];
  workTitle: string;
};

export default function VideoCarousel({
  videos,
  workTitle,
}: VideoCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const handleScroll = () => {
      const children = Array.from(
        container.children
      ) as HTMLElement[];

      if (!children.length) return;

      const containerLeft = container.getBoundingClientRect().left;

      let closestIndex = 0;
      let closestDistance = Infinity;

      children.forEach((child, index) => {
        const distance = Math.abs(
          child.getBoundingClientRect().left - containerLeft
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToVideo = (index: number) => {
    const container = scrollRef.current;

    if (!container) return;

    const target = container.children[index] as HTMLElement;

    if (!target) return;

    container.scrollTo({
      left: target.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Horizontal Scroll */}
      <div
        ref={scrollRef}
        className="
          -mx-5
          flex
          snap-x
          snap-mandatory
          gap-4
          overflow-x-auto
          px-5
          pb-3
          md:-mx-10
          md:gap-5
          md:px-10
          lg:-mx-16
          lg:px-16
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {videos.map((video, index) => (
          <div
            key={`${video.url}-${index}`}
            className="
              w-[72vw]
              max-w-[320px]
              shrink-0
              snap-start
              md:w-[280px]
              lg:w-[300px]
            "
          >
            {/* 9:16 Video */}
            <div className="relative aspect-[9/16] overflow-hidden bg-black">
              <iframe
                src={video.url}
                title={`${workTitle} ${index + 1}`}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </div>

      {/* iPhone-style Pagination Dots */}
      {videos.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-1.5">
          {videos.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`查看第 ${index + 1} 支影片`}
              onClick={() => scrollToVideo(index)}
              className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${
                  activeIndex === index
                    ? "w-4 bg-[#111111]"
                    : "w-1.5 bg-[#D4D4D4]"
                }
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
}