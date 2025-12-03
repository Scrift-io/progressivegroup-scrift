import React from "react";
import { cn } from "@/lib/utils";

interface GalleryItem {
  id: string | number;
  image: string;
  position?: "top" | "center" | "bottom";
}

interface CuratedGalleryProps {
  data: GalleryItem[];
}

function CuratedGallery({ data }: CuratedGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 p-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group bg-gray-900 aspect-[4/3]"
        >
          <img
            src={item.image}
            alt={`Gallery item ${item.id}`}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
              item.position === "center" && "object-center",
              item.position === "bottom" && "object-bottom",
              (!item.position || item.position === "top") && "object-top"
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
}

export { CuratedGallery };
