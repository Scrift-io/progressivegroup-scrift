import React from "react";
import { cn } from "@/lib/utils";

interface GalleryItem {
  id: string | number;
  image: string;
}

interface CuratedGalleryProps {
  data: GalleryItem[];
}

function CuratedGallery({ data }: CuratedGalleryProps) {
  // Only apply masonry layout for galleries with 6+ images
  const applyFeaturedLayout = data.length >= 6;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 p-4">
      {data.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group bg-gray-900",
            // Use aspect ratio for responsive sizing
            "aspect-[4/3]",
            // Only apply spans for larger galleries
            applyFeaturedLayout && index === 0 && "sm:col-span-2 lg:row-span-2",
            applyFeaturedLayout && index === 3 && "lg:col-span-2"
          )}
        >
          <img
            src={item.image}
            alt={`Gallery item ${item.id}`}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
}

export { CuratedGallery };
