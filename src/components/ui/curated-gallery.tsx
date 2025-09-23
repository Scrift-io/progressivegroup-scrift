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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {data.map((item, index) => (
        <div
          key={item.id}
          className={cn(
            "relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white",
            // Create varied sizes for visual interest
            index === 0 && "md:col-span-2 md:row-span-2",
            index === 3 && "lg:col-span-2",
            index === 5 && "md:col-span-2"
          )}
        >
          <div className="relative group">
            <img
              src={item.image}
              alt={`Gallery item ${item.id}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              style={{
                minHeight: index === 0 ? "400px" : "250px",
                maxHeight: index === 0 ? "600px" : "350px"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { CuratedGallery };