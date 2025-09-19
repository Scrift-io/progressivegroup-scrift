import React, { useState, useMemo } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Play } from "lucide-react";

interface YouTubeCleanProps {
  videoId: string;
  title?: string;
  thumbnailUrl?: string;
}

/**
 * YouTubeClean
 * Renders a clean YouTube embed with:
 * - No visible YouTube title/branding overlays (masked)
 * - No copy link/share button interactions (blocked)
 * - Custom poster + play button before load
 */
const YouTubeClean: React.FC<YouTubeCleanProps> = ({ videoId, title = "Brand video", thumbnailUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const poster = useMemo(() => {
    return (
      thumbnailUrl || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    );
  }, [thumbnailUrl, videoId]);

  return (
    <div className="relative">
      <AspectRatio ratio={16 / 9}>
        {!isPlaying ? (
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Play video"
          >
            <img
              src={poster}
              alt={title}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="transition-transform duration-300 group-hover:scale-110">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-background/80 shadow-lg backdrop-blur">
                  <Play className="h-6 w-6 text-primary ml-0.5" />
                </div>
              </div>
            </div>
          </button>
        ) : (
          <div className="relative h-full w-full">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&fs=0&disablekb=1&cc_load_policy=0`}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen={false}
              width="100%"
              height="100%"
              style={{
                border: "none",
                width: "100%",
                height: "100%",
                position: "absolute",
                left: 0,
                top: 0,
                overflow: "hidden",
              }}
            />

            {/* Mask top area to hide title/copy link overlays and block clicks there */}
            <div className="pointer-events-auto absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-background/90 to-transparent" />
            <div className="pointer-events-auto absolute right-0 top-0 h-14 w-28" />
            {/* Mask bottom-right watermark area */}
            <div className="pointer-events-auto absolute bottom-0 right-0 h-12 w-40 bg-gradient-to-t from-background/90 to-transparent" />
          </div>
        )}
      </AspectRatio>
    </div>
  );
};

export default YouTubeClean;
